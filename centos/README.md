#### dns

    vi /etc/resolv.conf
    service network restart

#### dns

    vi /etc/sysconfig/network-scripts/ifcfg-eth0
    service network restart

### 生成ssh密钥

    ssh-keygen -t rsa -C "我的SSH密钥"

### 查看ssh密钥

    cat ~/.ssh/id_rsa.pub

### 测试ssh

    ssh -T git@xxx.com