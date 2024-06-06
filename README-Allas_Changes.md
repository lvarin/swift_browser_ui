## Allas-UI Changes


### Description

The changes explained below were made in order to remove the encryption in the upload process and decryption in the download process, as well as the cryptographic headers as all are unnecessary for the Allas UI interface. Any other changes made are also detailed.

[swift-browser-ui](https://github.com/CSCfi/swift-browser-ui) is the base repository and all the changes made for the Allas-UI are as follows:


### WebAssembly (C)

1. The folder `$REPO/swift_browser_ui_frontend/wasm/src` that included all the `c` files and the header files was removed. The folder `$REPO/swift_browser_ui_frontend/wasm/test` that included all the tests for those `c` functions was removed as well.

2. `Makefile` Modification: This is the modified `makefile`
   ```Makefile
   all: upload download

   upload: build/upworker.js build/upworker.wasm

   download: build/downworker.js build/downworker.wasm

   build/upworker.js:
      emcc -O3 \
         -s WASM=1 \
         -s TOTAL_MEMORY=268435456 \
         -s ALLOW_MEMORY_GROWTH=1 \
         -s ASSERTIONS=1 \
         -s LLD_REPORT_UNDEFINED \
         -s FORCE_FILESYSTEM=1 \
         -o $@ \
         --post-js build/upworker-post.js \
         --pre-js js/crypt-pre.js

   build/downworker.js:
      emcc -O3 \
         -s WASM=1 \
         -s TOTAL_MEMORY=268435456 \
         -s ALLOW_MEMORY_GROWTH=1 \
         -s ASSERTIONS=1 \
         -s LLD_REPORT_UNDEFINED \
         -s FORCE_FILESYSTEM=1 \
         -o $@ \
         --post-js build/downworker-post.js \
         --pre-js js/crypt-pre.js

   clean:
      rm -rf build
   ```

### Upload (Encryption)

#### WebAssembly (JavaScript)


##### `$REPO/swift_browser_ui_frontend/wasm/js/crypt-post-upworker.js`

This file has been modified to remove the encryption in the upload process. Changes described as follows:

1. **Changes in `createUploadSession()` Function**: The function calls to the `c` functions `read_in_recv_keys_path()`, `wrap_chunk_content()` and `wrap_chunk_len()` were removed.

2. **Removed `createUploadSessionFile()` and `encryptChunk()` Functions**: `createUploadSessionFile()` was responsible for creating a file header using encryption keys and session information. `encryptChunk()` was responsible for encrypting a single chunk of an upload. Both are not longer needed.

3. **Changes in `StreamSlicer` Class**:
   - Removed the call to `encryptChunk()` in the `getChunk()` function.
   - Return `return new Uint8Array(enBuffer);` in the `getChunk()` function directly return the chunk without encryption.
   - Removed the call to `free_crypt4gh_session_key()` in the `finishFile()` function.

4. **Changes in `openWebSocket()` Function**: Function calls to `waitAsm()` and `libinit()` removed.

5. **Changes in `addFiles` Function**:
   - Removed the `.c4gh` extension from the `path` variable.
   - Removed the call to `createUploadSessionFile()` function.
   - Removed the `data` property from the `msg` object in the loop, indicating that the file header data is no longer sent as part of the message. Instead of `"add_header"` command, the command `"start_upload"` is sent to initiate the upload process.
      ```js
      let msg = {
      command: "start_upload",
      container: container,
      object: path,
      name: uploads[container].projectName,
      total: totalBytes,
      };
      ```


#### Back-End (Python)

##### `$REPO/swift_browser_ui/upload/api.py`

In the `handle_upload_ws()` function the command `"add_header"` was chnaged to `"start_upload"` to work with the change mentioned in the `addFiles()` function.
   ```python
   # Open msgpack and handle message
         try:
               msg_unpacked: typing.Dict[str, typing.Any] = msgpack.unpackb(msg.data)

               if msg_unpacked["command"] == "start_upload":
                  await upload_session.handle_begin_upload(msg_unpacked)
               if msg_unpacked["command"] == "add_chunk":
                  await upload_session.handle_upload_chunk(msg_unpacked)
               if msg_unpacked["command"] == "add_chunks":
                  await upload_session.handle_upload_chunks(msg_unpacked)
               if msg_unpacked["command"] == "cancel":
                  await upload_session.handle_close()
               if msg_unpacked["command"] == "finish":
                  await upload_session.handle_finish_upload(msg_unpacked)
         except ValueError:
               LOGGER.error("Received an empty message.")
               LOGGER.debug(msg.data)
         except msgpack.exceptions.ExtraData:
               LOGGER.error("Extra data in message.")
               LOGGER.debug(msg.data)
         except msgpack.exceptions.FormatError:
               LOGGER.error("Incorrectly formatted message.")
               LOGGER.error(msg.data)
   ```

##### `$REPO/swift_browser_ui/upload/cryptupload.py`

1. In the `handle_begin_upload()` function the last line
   ```python
   await self.uploads[container][path].add_header(bytes(msg["data"]))
   ```
   was changed to
   ```python
   await self.uploads[container][path].init_upload()
   ```

2. The `init_upload()` function is basically the old `add_header()` function without the encryption header part.
   ```python
   async def init_upload(self) -> None:
         """Initialize the upload."""
         if (
               not await self.a_create_container()
               and self.socket is not None
               and not self.socket.closed
         ):
               await self.socket.send_bytes(
                  msgpack.packb(
                     {
                           "command": "abort",
                           "container": self.container,
                           "object": self.path,
                           "reason": "Could not create or access the container.",
                     }
                  )
               )
               self.failed = True

         self.tasks = [
               asyncio.create_task(self.upload_segment(i))
               for i in range(0, self.total_segments)
         ]

         await self.start_upload()
   ```

### Download (Decryption)

#### WebAssembly (JavaScript)
