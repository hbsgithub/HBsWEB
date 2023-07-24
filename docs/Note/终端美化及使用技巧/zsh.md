---
sidebar_position: 2
title: Zsh美化
description: Zsh美化相关设置
# image: a thumbnail image to be shown in social media cards
keywords: [Zsh, 美化]
---
# Zsh美化

## 安装oh-my-zsh
:::info
oh-my-zsh是一个zsh的扩展工具，可以美化zsh的外观，提供了很多插件
:::
    
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 安装zsh主题

### drucula
:::info
drucula是一个zsh主题，可以美化zsh的外观
:::
    
具体安装方法可以见如下链接：
    
https://draculatheme.com/zsh

## 安装zsh插件

### [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
:::info
zsh-autosuggestions可以进行命令历史记录自动补全
:::

1. Clone this repository into $ZSH_CUSTOM/plugins (by default ~/.oh-my-zsh/custom/plugins)
```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions    
```
1. Add the plugin to the list of plugins for Oh My Zsh to load (inside ~/.zshrc):
   
```bash
plugins=( 
    # other plugins...
    zsh-autosuggestions
)
```
3. Start a new terminal session.

### [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
:::info
zsh-syntax-highlighting可以进行命令语法高亮
:::
1. Clone this repository into $ZSH_CUSTOM/plugins (by default ~/.oh-my-zsh/custom/plugins)
```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
2. Add the plugin to the list of plugins for Oh My Zsh to load (inside ~/.zshrc):
   
```bash
plugins=( [plugins...] zsh-syntax-highlighting)
```
3. Start a new terminal session.

### extract
:::info
extract是一条命令解压多种压缩包格式
:::

使用方法如下：
```bash
extract <filename>
```
安装方法：
extract 为 ohmyzsh 自带插件，直接按照上面提到的方法在 .zshrc 配置的 plugins 中加入 extract 即可，然后重启终端生效

### [fzf](https://github.com/junegunn/fzf)
:::info
fzf可以进行命令历史记录等模糊搜索
:::
安装方法：
```bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

### [conda-zsh-completion](https://github.com/esc/conda-zsh-completion)
:::info
conda-zsh-completion可以进行conda命令的补全
:::
安装方法：
```bash
git clone https://github.com/esc/conda-zsh-completion ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/conda-zsh-completion
```
然后在.zshrc中添加
```bash
plugins=( [plugins...] conda-zsh-completion)
autoload -U compinit && compinit
```
:::note
如果使用oh-my-zsh，可能需要将autoload行移动到你source oh-my-zsh.sh之后。以下是官方文档：
If you use oh-my-zsh, you might have to move the "autoload" line to after you sourced oh-my-zsh.sh.

To activate the completion cache for packages, add the following to your'.zshrc':
zstyle ':completion::complete:*' use-cache 1

To display subcommand completion in groups, please add the following to your'.zshrc':zstyle ":conda_zsh_completion:*" use-groups true

To display unnamed environments and prefixes of environments, add the following to your '.zshrc':zstyle ":conda_zsh_completion:*" show-unnamed true

To display environments autocompletion sorted in creation order add the followingto your '.zshrc':zstyle ":conda_zsh_completion:*" sort-envs-by-time true

The completion will display both global environments (envs located in conda_dir/envs and base env)and local environments (located in ~/.conda/envs).

If enables sort-envs-by-time, it will display local environments first.

To display global environments first, add the following to your '.zshrc':zstyle ":conda_zsh_completion:*" show-global-envs-first true

If not enables sort-envs-by-time, then all environments will be sorted by alphabetical order,and this option is useless.

To forcefully clean the completion cache, look in '~/.zcompcache' and removefile starting with 'conda_'. And/or do 'rm ~/.zcompdump*'.

When developing, you can use the following to reload the completion after having modified it:
$ unfunction conda && autoload 
:::