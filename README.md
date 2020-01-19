# Install Cocos
+ ``
```
.
├── AUTHORS
├── CHANGELOG
├── cmake
│   ├── images
│   ├── Modules
│   ├── README.md
│   └── scripts
├── CMakeLists.txt
├── cocos
│   ├── 2d
│   ├── 3d
│   ├── audio
│   ├── base
│   ├── CMakeLists.txt
│   ├── cocos2d.cpp
│   ├── cocos2d.h
│   ├── editor-support
│   ├── math
│   ├── navmesh
│   ├── network
│   ├── physics
│   ├── physics3d
│   ├── platform
│   ├── precheader.cpp
│   ├── precheader.h
│   ├── renderer
│   ├── scripting
│   └── ui
├── CONTRIBUTING.md
├── docs
│   ├── cocos2dx_portrait.png
│   ├── CODING_STYLE.md
│   ├── doxygen.config
│   ├── doxygen_white_book.config
│   ├── framework_architecture.jpg
│   ├── framework_architecture_v4.png
│   ├── Groups.h
│   ├── img-cocos.jpg
│   ├── MainPage.h
│   ├── MainPageWhiteBook.h
│   ├── RELEASE_ENGINEERING.md
│   ├── RELEASE_NOTES_CN.md
│   └── RELEASE_NOTES.md
├── download-deps.py
├── extensions
│   ├── assets-manager
│   ├── CMakeLists.txt
│   ├── cocos-ext.h
│   ├── ExtensionExport.h
│   ├── ExtensionMacros.h
│   ├── GUI
│   ├── Particle3D
│   └── physics-nodes
├── external
│   ├── android-specific
│   ├── Box2D
│   ├── bullet
│   ├── chipmunk
│   ├── clipper
│   ├── cmake
│   ├── CMakeLists.txt
│   ├── config.json
│   ├── ConvertUTF
│   ├── curl
│   ├── edtaa3func
│   ├── empty.cpp
│   ├── flatbuffers
│   ├── freetype2
│   ├── glfw3
│   ├── glsl-optimizer
│   ├── jpeg
│   ├── json
│   ├── linux-specific
│   ├── lua
│   ├── md5
│   ├── openssl
│   ├── png
│   ├── poly2tri
│   ├── rapidxml
│   ├── README.md
│   ├── recast
│   ├── tinydir
│   ├── tinyxml2
│   ├── unzip
│   ├── uv
│   ├── version.json
│   ├── webp
│   ├── websockets
│   ├── win10-specific
│   ├── win32-specific
│   ├── xxhash
│   ├── xxtea
│   └── zlib
├── install-deps-linux.sh
├── issue_template.md
├── licenses
│   ├── LICENSE_AA-EDT.txt
│   ├── LICENSE_artwork.txt
│   ├── LICENSE_box2d.txt
│   ├── LICENSE_CCBReader.txt
│   ├── LICENSE_CCControlExtension.txt
│   ├── LICENSE_chipmunk.txt
│   ├── LICENSE_cocos2d-iphone.txt
│   ├── LICENSE_cocos2d-x.txt
│   ├── LICENSE_com.android.vending.expansion.zipfile.txt
│   ├── LICENSE_curl.txt
│   ├── LICENSE_JSON4Lua.txt
│   ├── LICENSE_jsoncpp.txt
│   ├── LICENSE_js.txt
│   ├── LICENSE_Kazmath.txt
│   ├── LICENSE_libjpeg.txt
│   ├── LICENSE_libmd5-rfc.txt
│   ├── LICENSE_libpng.txt
│   ├── LICENSE_libtiff.txt
│   ├── LICENSE_libwebsockets.txt
│   ├── LICENSE_libxml2.txt
│   ├── LICENSE_llvm.txt
│   ├── LICENSE_LuaSocket.txt
│   ├── LICENSE_lua.txt
│   ├── LICENSE_ogg_vorbis.txt
│   ├── LICENSE_Poly2Tri.txt
│   ├── LICENSE_pvmp3dec.txt
│   ├── LICENSE_spine.txt
│   ├── LICENSE_tolua++.txt
│   ├── LICENSE_tremolo.txt
│   ├── LICENSE_unicode.txt
│   └── LICENSE_zlib.txt
├── linux-build
│   ├── bin
│   ├── CMakeCache.txt
│   ├── CMakeFiles
│   ├── cmake_install.cmake
│   ├── engine
│   ├── lib
│   └── Makefile
├── README.md
├── setup.py
├── templates
│   ├── cocos2dx_files.json
│   ├── cpp-template-default
│   └── lua-template-default
├── tests
│   ├── cpp-empty-test
│   ├── cpp-tests
│   ├── lua-empty-test
│   ├── lua-tests
│   └── performance-tests
└── tools
    ├── appveyor-scripts
    ├── bindings-generator
    ├── cocos2d-console
    ├── coding-style
    ├── fbx-conv
    ├── jenkins-scripts
    ├── make-package
    ├── missing-tools.txt
    ├── particle
    ├── performance-analyze
    ├── release
    ├── tolua
    └── travis-scripts

```
# Create Cocos
+ `cocos new test1  -l cpp`
# Run Cocos by cocos command(.cocos-project.json)
+ `cd myGame`
+ `cocos run -p linux`
# Run Cocos by cmake
+ `mkdir linux-build`
+ `cd linux-build`
+ `cmake ..`
+ `make`
+ `./bin/myGame`
# Reference
<https://docs.cocos.com/cocos2d-x/manual/zh/editors_and_tools/cocosCLTool.html>
