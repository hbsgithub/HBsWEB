---
sidebar_position: 4
title: ssh免密配置
description: ssh免密配置
# image: a thumbnail image to be shown in social media cards
keywords: [ssh, 免密，密钥]
---

# ssh免密配置

## 1. 生成密钥

```bash
ssh-keygen -t rsa
```

## 2. 将公钥复制到目标主机

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub user@host
```
:::tip
或者手动复制本机~/.ssh/id_rsa.pub文件内容到目标主机~/.ssh/authorized_keys文件中
:::

## 3. 测试

```bash
ssh user@host
```

## 4. 配置config文件

```bash
vim ~/.ssh/config
```

```bash
Host host
    HostName host
    User user
    Port port
    IdentityFile ~/.ssh/id_rsa
```

## 5. 配置完成

```bash
ssh host
```

## 参考
1. https://blog.csdn.net/qq_34644203/article/details/124140491
2. https://blog.csdn.net/mochong/article/details/122966556
