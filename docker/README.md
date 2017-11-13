#### 查看网络

    docker network ls

#### 查找镜像

    docker search <name>

#### 下载镜像

    docker pull <name>

#### 启动容器

    docker run -d --name <name> --net=<host|container|none> -p <port>:<port> <image>

#### 进入container

    docker exec -it <name> /bin/bash

#### 进入container

    docker exec -it <name> sh

#### 配置网络

    vi /usr/lib/systemd/system/docker.service

    在此文件中，以ExecStart=开头编辑[Service]部分中的行。 将“ -H tcp://0.0.0.0:4243 ”添加到该行。


#### 删除所有<none>镜像

    docker rmi $(docker images | grep "^<none>" | awk "{print $3}")

#### 查看环境配置文件

    $ systemctl show docker | grep EnvironmentFile
    EnvironmentFile=-/etc/sysconfig/docker (ignore_errors=yes)

#### 查看服务启动文件位置：

    $ systemctl show --property=FragmentPath docker
    FragmentPath=/usr/lib/systemd/system/docker.service

    $ grep EnvironmentFile /usr/lib/systemd/system/docker.service
    EnvironmentFile=-/etc/sysconfig/docker


[https://hub.docker.com](https://hub.docker.com)