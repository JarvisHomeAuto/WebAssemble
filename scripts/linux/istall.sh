# Install Python
sudo apt-get install python3
sudo apt-get install git
# Install CMake (optional, only needed for tests and building Binaryen or LLVM)
sudo apt-get install cmake

# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

./emsdk install latest

./emsdk activate latest

source ./emsdk_env.sh

