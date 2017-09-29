# 安装

    npm install -g nrm

#举例

##列表

    nrm ls

##选择

    nrm use taobao

##添加目录

    nrm add  <registry> <url> [home]

##详细命令

Usage: nrm [options] [command]

  Commands:

    ls                           List all the registries
    use <registry>               Change registry to registry
    add <registry> <url> [home]  Add one custom registry
    del <registry>               Delete one custom registry
    home <registry> [browser]    Open the homepage of registry with optional browser
    test [registry]              Show the response time for one or all registries
    help                         Print this help

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
#附

[原文](https://github.com/Pana/nrm)
