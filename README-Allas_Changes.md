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
   - Removed the `data` property from the `msg` object in the loop, indicating that the file header data is no longer sent as part of the message. Instead, a command `"start_upload"` is sent to initiate the upload process.
