<!--  -->
### mac下安装git自动补全命令

    brew install git bash-completion

    ~/.bash_profile

    if [ -f $(brew --prefix)/etc/bash_completion ]; then
    . $(brew --prefix)/etc/bash_completion
    fi

### 批量拉取推送分支
for branch in `git branch -a | grep remotes | grep -v HEAD`; do
    git branch --track ${branch##*/} $branch
done

for branch in `git branch -a | grep remotes | grep -v HEAD`; do
    git push origin2 ${branch##*/}:${branch##*/}
done
