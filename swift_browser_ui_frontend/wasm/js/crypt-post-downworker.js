// Worker script for download chunks

import { addTarFile, addTarFolder } from "./tar";

/*
Schema for storing the download information:
{
  "containerName": {  // Container level session for the upload
    keyPair: int;  // pointer to the ephemeral keypair for decryption (see uptypes.h)
    files: {  // Files to download, stored in an object
      "filePath": int;  // pointer to the unique session key (see uptypes.h)
      ...
      path_n: int;
    }
  }
}
*/

let downloads = {};

/*
This script supports being loaded both as a ServiceWorker and an ordinary
worker. The former is to provide support for Firefox and Safari, which only
implement an OPFS version of File System API for security reasons.
Additionally, Firefox <= 110 (e.g. Firefox ESR), lacks any form of
File System API altogether.

SerivceWorker based approach streams the file through ServiceWorker, into
a specific file download. This is a tad slower, since multiple files can't
be downloaded / decrypted in parallel due to the lack of random access,
but is reasonably performant anyways.

OPFS based version might not be worth it in real world use, since it needs
intermediary storage and the ServiceWorker doesn't.
*/


// Example: https://devenv:8443/file/test-container/examplefile.txt.c4gh
const fileUrl = new RegExp("/file/[^/]*/.*$");
// Example: https://devenv:8443/archive/test-container.tar
const archiveUrl = new RegExp("/archive/[^/]*\.tar$");
const fileUrlStart = new RegExp("/file/[^/]*/");

if (inServiceWorker) {
  self.addEventListener("install", (event) => {
    event.waitUntil(waitAsm());
  });
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
  });
}

// Create a download session
function createDownloadSession(container, handle, archive) {
  let keypairPtr = Module.ccall(
    "create_keypair",
    "number",
    [],
    [],
  );
  let pubkeyPtr = Module.ccall(
    "get_keypair_public_key",
    "number",
    ["number"],
    [keypairPtr],
  );

  downloads[container] = {
    keypair: keypairPtr,
    pubkey: new Uint8Array(HEAPU8.subarray(pubkeyPtr, pubkeyPtr + 32)),
    handle: handle,
    direct: !inServiceWorker,
    archive: archive,
    files: {},
  };
}


// Add a file to the download session
function createDownloadSessionFile(container, path, header) {
  let headerPath = `header_${container}_`
    + Math.random().toString(36)
    + Math.random().toString(36);
  FS.writeFile(
    headerPath,
    header,
  );

  let sessionKeyPtr = Module.ccall(
    "get_session_key_from_header",
    "number",
    ["number", "string"],
    [downloads[container].keypair, headerPath],
  );
  downloads[container].files[path] = sessionKeyPtr;

  // Remove the header after parsing
  FS.unlink(headerPath);

  return sessionKeyPtr > 0;
}


// Decrypt a single chunk of a download
function decryptChunk(container, path, enChunk) {
  let chunk = Module.ccall(
    "decrypt_chunk",
    "number",
    ["number", "array", "number"],
    [
      downloads[container].files[path],
      enChunk,
      enChunk.length,
    ],
  );
  let chunkPtr = Module.ccall(
    "wrap_chunk_content",
    "number",
    ["number"],
    [chunk],
  );
  let chunkLen = Module.ccall(
    "wrap_chunk_len",
    "number",
    ["number"],
    [chunk],
  );
  // We need to clone the view to a new typed array, otherwise it'll get
  // stale on return
  let ret = new Uint8Array(HEAPU8.subarray(chunkPtr, chunkPtr + chunkLen));
  Module.ccall(
    "free_chunk",
    "number",
    ["number"],
    [chunk],
  );

  return ret;
}

class FileSlicer {
  constructor(
    input,
    output,
    container,
    path,
  ) {
    this.reader = input;
    this.output = output;
    this.container = container;
    this.path = path;
    this.chunk = undefined;
    this.done = false;
    this.offset = 0;
    this.remainder = 0;
    this.bytes = 0;
    this.totalBytes = 0;
  }

  async getStart() {
    ({ value: this.chunk, done: this.done } = await this.reader.read());
  }

  setController(controller) {
    this.output = controller;
  }

  async getSlice() {
    let enChunk = new Uint8Array(65564);
    this.bytes = 0;

    while (!this.done) {
      this.remainder = 65564 - this.bytes;
      let toSet = this.chunk.subarray(this.offset, this.offset + this.remainder);
      enChunk.set(toSet, this.bytes);
      this.bytes += toSet.length;

      if (this.chunk.length - this.offset > this.remainder) {
        this.offset += this.remainder;
        this.totalBytes += 65536;
        return enChunk;
      } else {
        this.offset = 0;
        ({ value: this.chunk, done: this.done } = await this.reader.read());
      }
    }

    if (this.chunk !== undefined) {
      let toSet = this.chunk.subarray(this.offset);
      enChunk.set(toSet, this.bytes);
      this.bytes += toSet.length;
      this.totalBytes += toSet.length - 28;
    }

    if(this.bytes > 0) {
      return enChunk.slice(0, this.bytes);
    }

    return undefined;
  }

  async sliceFile() {
    // Get the first chunk from stream
    await this.getStart();

    // Slice the file and write decrypted content to output
    let enChunk = await this.getSlice();
    while (enChunk !== undefined) {
      if (this.output instanceof WritableStream) {
        // Write the decrypted contents directly in the file stream if
        // downloading to File System
        await this.output.write(decryptChunk(
          this.container,
          this.path,
          enChunk,
        ));
      } else {
        // Otherwise queue to the streamController since we're using a
        // ServiceWorker for downloading
        this.output.enqueue(decryptChunk(
          this.container,
          this.path,
          enChunk,
        ));
      }
      enChunk = await this.getSlice();
    }

    // Round up to a multiple of 512, because tar
    if (this.totalBytes % 512 > 0 && downloads[container].archive) {
      let padding = "\x00".repeat(512 - this.totalBytes % 512);
      if (this.output instanceof WritableStream) {
        await this.output.write(padding);
      } else {
        this.output.enqueue(padding);
      }
    }

    return;
  }
}


// Safely free and remove a download session
function finishDownloadSession(container) {
  _free(downloads[container].keypairPtr);
  delete downloads[container];
}


async function beginDownloadInSession(
  container,
  headers,
) {
  let fileStream = undefined;
  if (downloads[container].direct) {
    fileStream = await downloads[container].handle.createWritable();
  } else {
    fileStream = downloads[container].handle;
  }

  // Add the archive folder structure
  if (downloads[container].archive) {
    let folderPaths = Object.keys(headers)
      .map(path => path.split("/"))  // split paths to items
      .map(path => path.slice(0, -1))  // remove the file names from paths
      .filter(path => path.length > 0)  // remove empty paths (root level files)
      .sort((a, b) => a.length - b.length)  // sort by path length as levels
      .reduce((unique, path) => {  // strip paths down to just the unique ones
        let check = unique.find(item => item.join("/") === path.join("/"));
        if (check === undefined) {
          unique.push(path);
        }
        return unique;
      }, []);

    for (const path of folderPaths) {
      if (downloads[container].direct) {
        await fileStream.write(
          addTarFolder(path.slice(-1)[0], path.slice(0, -1).join("/")),
        );
      } else {
        fileStream.enqueue(addTarFolder(path.slice(-1)[0], path.slice(0, -1).join("/")));
      }
    }
  }

  for (const file in headers) {
    const response = await fetch(headers[file].url);
    const ensize = response.headers.get("Content-Length");
    const size = (Math.floor(ensize / 65564) * 65536) + (ensize % 65564 > 0 ? ensize % 65564 - 28 : 0);

    let path = file.split("/");
    let name = path.slice(-1)[0];
    let prefix
    if (path.length > 1) {
      prefix = path.slice(0, -1).join("/");
    } else {
      prefix = "";
    }

    if (downloads[container].archive) {
      let fileHeader = addTarFile(
        name,
        prefix,
        size,
      );
      if (downloads[container].direct) {
        await fileStream.write(fileHeader);
      } else {
        fileStream.enqueue(fileHeader);
      }
    }

    const slicer = new FileSlicer(response.body.getReader(), fileStream, container, file);
    createDownloadSessionFile(container, file, headers[file].header);
    await slicer.sliceFile();
  }

  if (downloads[container].archive) {
    // Write the end of the archive
    if (downloads[container].direct) {
      await fileStream.write("\x00".repeat(1024));
    } else {
      fileStream.enqueue("\x00".repeat(1024));
    }
  }

  // Sync the file if downloading directly into file, otherwise finish
  // the fetch request.
  if (downloads[container].direct) {
    await fileStream.close()
    // downloads[container].handle.flush();
    // downloads[container].handle.close();
  } else {
    fileStream.close();
  }

  if (downloads[container].direct) {
    // Direct downloads need no further action, the resulting archive is
    // already in the filesystem.
    postMessage({
      eventType: "finished",
      direct: true,
      container: container,
    });
  }

  finishDownloadSession(container);

  return;
}

if (inServiceWorker) {
  // Add listener for fetch events
  self.addEventListener("fetch", (e) => {
    const url = new URL(e.request.url);

    let fileName;
    let containerName;

    if (fileUrl.test(url.pathname)) {
      fileName = url.pathname.replace(fileUrlStart, "");
      containerName = url.pathname.replace("/file/", "").replace(fileName, "").replace("/", "");
    } else if (archiveUrl.test(url.pathname)) {
      fileName = url.pathname.replace("/archive/", "");
      containerName = fileName.replace(/\.tar$/, "");
    } else {
      return;
    }

    if (fileUrl.test(url.pathname) || archiveUrl.test(url.pathname)) {
      let streamController;
      const stream = new ReadableStream({
        start(controller) {
          streamController = controller;
        },
      });
      const response = new Response(stream);
      response.headers.append(
        "Content-Disposition",
        'attachment; filename="' + fileName.replace(".c4gh", "") + '"',
      );

      createDownloadSession(containerName, streamController, archiveUrl.test(url.pathname));

      e.respondWith(response);
    }
  });
}

self.addEventListener("message", (e) => {
  switch(e.data.command) {
    case "downloadFile":
      if (inServiceWorker) {
        e.source.postMessage({
          eventType: "getHeaders",
          container: e.data.container,
          files: [
            e.data.file,
          ],
          pubkey: downloads[e.data.container].pubkey,
        });
      } else {
        createDownloadSession(e.data.container, e.data.handle, false);
        postMessage({
          eventType: "getHeaders",
          container: e.data.container,
          files: [
            e.data.file,
          ],
          pubkey: downloads[e.data.container].pubkey,
        });
      }
      break;
    case "downloadFiles":
      if (inServiceWorker) {
        e.source.postMessage({
          eventType: "getHeaders",
          container: e.data.container,
          files: e.data.files,
          pubkey: downloads[e.data.container].pubkey,
        });
      } else {
        createDownloadSession(e.data.container, e.data.handle, true);
        postMessage({
          eventType: "getHeaders",
          container: e.data.container,
          files: e.data.files,
          pubkey: downloads[e.data.container].pubkey,
        });
      }
      break;
    case "addHeaders":
      beginDownloadInSession(
        e.data.container,
        e.data.headers,
      );
      if (inServiceWorker) {
        e.source.postMessage({
          eventType: "downloadStarted",
          container: e.data.container,
        });
      } else {
        postMessage({
          eventType: "downloadStarted",
          container: e.data.container,
        });
      }
      break;
  }
});

setTimeout(() => {
  Module.ccall("libinit", undefined, undefined, undefined);
}, 1000);

export var downloadRuntime = Module;
export var downloadFileSystem = FS;
