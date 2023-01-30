// Normal required listeners for starting the service worker
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

let 
  streamController,
  sessionPtr,
  filename,
  headerPtr,
  headerLen,
  chunkPtr,
  chunkLen,
  chunk,
  header,
  chunkArray,
  pubkeyPtr,
  pubKey,
  fileSize,
  privkeyPtr,
  privKey,
  sessKeyPtr,
  sessKey
;

self.addEventListener("fetch", (e) => {
  if (e.request.url.startsWith(self.location.origin + "/file")) {
    const stream = new ReadableStream({
      start(controller) {
        streamController = controller;
      },
    });
    const response = new Response(stream);
    response.headers.append(
      "Content-Disposition",
      'attachment; filename="' + fileName + '"',
    );
    e.respondWith(response);
  }
});


wasmReady.then(() => {
  self.addEventListener("message", (e) => {
    e.stopImmediatePropagation();
    switch(e.data.cmd) {
      case "pingWasm":
        e.source.postMessage({
          eventType: "wasmReady",
        });
        break;
      case "initFileSystem":
        FS.mkdir("/keys");
        FS.mkdir("/keys/recv_keys");
        FS.mkdir("/data");
        // Create output device
        e.source.postMessage({
          eventType: "wasmFilesystemInitialized",
        });
        break;
      case "appendPubkey":
        FS.writeFile(
          "/keys/recv_keys/pubkey_" + e.data.keyname.toString(),
          e.data.pubkey,
        );
        e.source.postMessage({
          eventType: "wasmFilesystemPubkeyAdded",
          publicKey: e.data.pubkey,
          publicKeyOrder: e.data.keyname,
        });
        break;
      case "addPrivKey":
        FS.writeFile(
          "/keys/pk.key",
          e.data.privkey,
        );
        e.source.postMessage({
          eventType: "wasmFilesystemPrivkeyAdded",
          privKey: e.data.privkey,
        })
        break;
      case "initEphemeral":
        sessionPtr = Module.ccall(
          "open_session_eph",
          "number",
          [],
          [],
        );
        fileName = e.data.filename + ".c4gh";
        e.source.postMessage({
          eventType: "encryptSessionInitiated",
          ptr: sessionPtr,
        });
        break;
      case "initNormal":
        sessionPtr = Module.ccall(
          "open_session",
          "number",
          ["string"],
          [e.data.passphrase],
        );
        fileName = e.data.filename + ".c4gh";
        e.source.postMessage({
          eventType: "encryptSessionInitiated",
          ptr: sessionPtr,
        });
        break;
      case "createHeader":
        header = Module.ccall(
          "wrap_crypt4gh_header",
          "number",
          ["number"],
          [sessionPtr],
        );
        headerPtr = Module.ccall(
          "wrap_chunk_content",
          "number",
          ["number"],
          [header]
        );
        headerLen = Module.ccall(
          "wrap_chunk_len",
          "number",
          ["number"],
          [header],
        )
        sessKeyPtr = Module.ccall(
          "get_session_key",
          "number",
          ["number"],
          [sessionPtr],
        );
        sessKey = new Uint8Array(HEAPU8.subarray(sessKeyPtr, sessKeyPtr + 32));
        sessKey = btoa(String.fromCharCode(...sessKey));
        // Copy chunk buffer contents to new array and answer
        e.source.postMessage({
          eventType: "encryptedHeaderReady",
          header: new Uint8Array(HEAPU8.subarray(headerPtr, headerPtr + headerLen)),
        });
        // Free header memory
        Module.ccall(
          "free_chunk",
          "number",
          ["number"],
          [header],
        );
        _free(sessKeyPtr);
        _free(headerPtr);
        break;
      case "encryptChunk":
        chunkArray = new Uint8Array(e.data.chunk);
        chunk = Module.ccall(
          "encrypt_chunk",
          "number",
          ["number", "array", "number"],
          [sessionPtr, chunkArray, chunkArray.length],
        );
        chunkPtr = Module.ccall(
          "wrap_chunk_content",
          "number",
          ["number"],
          [header]
        );
        chunkLen = Module.ccall(
          "wrap_chunk_len",
          "number",
          ["number"],
          [header],
        );
        // Respond with the chunk, and ask for the next one
        e.source.postMessage({
          eventType: "nextChunk",
          chunk: new Uint8Array(HEAPU8.subarray(chunkPtr, chunkPtr + chunkLen)),
          iter: e.data.iter,
        });
        Module.ccall(
          "free_chunk",
          "number",
          ["number"],
          [chunk],
        )
        break;
      case "cleanUp":
        try {
          Module.ccall(
            "clean_session",
            undefined,
            ["number"],
            [sessionPtr],
          );
          FS.rmdir("/keys/recv_keys")
          FS.rmdir("/keys");
          FS.rmdir("/data");
        } catch (e) {
          // console.log("FS ignoring error on remove ", e);
        } finally {
          e.source.postMessage({
            eventType: "cleanUpDone",
          });
        }
        break;
      // Download related features
      case "beginDownload":
        if (streamController) {
          try {
            streamController.close();
          } catch(e) {
            console.log(e);
          }
        }
        if (sessionPtr) {
          try {
            Module.ccall(
              "clean_session",
              undefined,
              ["number"],
              [sessionPtr],
            );
          } catch(e) {
            console.log(e);
          }
        }

        sessionPtr = Module.ccall(
          "open_decrypt_session",
          "number",
          [],
          [],
        );
        pubkeyPtr = Module.ccall(
          "get_session_public_key",
          "number",
          ["number"],
          [sessionPtr],
        );
        privkeyPtr = Module.ccall(
          "get_session_private_key",
          "number",
          ["number"],
          [sessionPtr],
        );
        pubKey = new Uint8Array(HEAPU8.subarray(pubkeyPtr, pubkeyPtr + 32));
        e.source.postMessage({
          eventType: "downloadSessionOpened",
          pubKey: pubKey,
        });
        _free(pubkeyPtr);
        _free(privkeyPtr);
        _free(sessKeyPtr);
        break;
      case "addHeader":
        try {
          FS.unlink("header");
        } catch (e) {
          // console.log("FS ignoring error on remove", e);
        }
        FS.writeFile(
          "header",
          e.data.header,
        );
        fileName = e.data.fileName;
        fileSize = e.data.fileSize;
        Module.ccall(
          "open_crypt4gh_header",
          undefined,
          ["number"],
          [sessionPtr],
        );
        sessKeyPtr = Module.ccall(
          "get_session_key",
          "number",
          ["number"],
          [sessionPtr],
        );
        sessKey = new Uint8Array(HEAPU8.subarray(sessKeyPtr, sessKeyPtr + 32))
        sessKey = btoa(String.fromCharCode(...sessKey));
        e.source.postMessage({
          eventType: "beginDecryption",
        });
        break;
      case "decryptChunk":
        chunk = Module.ccall(
          "decrypt_chunk",
          "number",
          ["number", "array", "number"],
          [sessionPtr, new Uint8Array(e.data.chunk), e.data.chunk.length],
        );
        chunkPtr = Module.ccall(
          "wrap_chunk_content",
          "number",
          ["number"],
          [chunk]
        );
        chunkLen = Module.ccall(
          "wrap_chunk_len",
          "number",
          ["number"],
          [chunk],
        );
        streamController.enqueue(new Uint8Array(HEAPU8.subarray(chunkPtr, chunkPtr + chunkLen)));
        Module.ccall(
          "free_chunk",
          "number",
          ["number"],
          [chunk],
        );
        e.source.postMessage({
          eventType: "nextDecryptChunk",
        });
        break;
      case "decryptionFinished":
        streamController.close();
        try {
          Module.ccall(
            "clean_session",
            undefined,
            ["number"],
            [sessionPtr],
          );
        } catch(e) {
          console.log(e);
        }
        e.source.postMessage({
          eventType: "streamClosed",
        });
        break;
    }
  });
});
