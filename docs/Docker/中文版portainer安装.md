---
sidebar_position: 2
title: 中文版portainer安装
description: 中文版portainer安装方法
# image: a thumbnail image to be shown in social media cards
keywords: [portainer]
---


# 安装中文版portainer
:::info

portainer是一个Docker可视化管理工具

:::
## 中文版portainer安装命令


```bash showLineNumbers
sudo docker run -d --restart=always --name="portainer" -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock 6053537/portainer-ce
```