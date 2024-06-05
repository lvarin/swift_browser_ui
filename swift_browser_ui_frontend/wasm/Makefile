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
