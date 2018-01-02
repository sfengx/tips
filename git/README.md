<!--  -->
### mac下安装git自动补全命令

    brew install git bash-completion

    ~/.bash_profile

    if [ -f $(brew --prefix)/etc/bash_completion ]; then
    . $(brew --prefix)/etc/bash_completion
    fi