

# ... above is unchanged ...
echo "============================================="
echo "Compiling libvpx"
echo "============================================="
(
    rm -rf build-vpx || true
    mkdir build-vpx
    cd build-vpx
    emconfigure ../node_modules/libvpx/configure \
    --target=generic-gnu
    emmake make
)
echo "============================================="
echo "Compiling libvpx done"
echo "============================================="

echo "============================================="
echo "Compiling wasm bindings"
echo "============================================="
# ... below is unchanged ...

# ... above is unchanged ...
echo "============================================="
echo "Compiling wasm bindings"
echo "============================================="
(
    # Compile C/C++ code
    emcc \
    ${OPTIMIZE} \
    --bind \
    -s STRICT=1 \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s ASSERTIONS=0 \
    -s MALLOC=emmalloc \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -o ./my-module.js \
    -I ./node_modules/libvpx \ #this was added, napa is used to gather the lib via git
    src/my-module.cpp \
    build-vpx/libvpx.a

# ... below is unchanged ...

#referece: https://web.dev/emscripten-npm/