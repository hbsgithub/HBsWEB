---
sidebar_position: 1
title: 安装Docker及Docker-compose
description: 安装Docker及Docker-compose的方法
# image: a thumbnail image to be shown in social media cards
keywords: [Docker, Docker-compose]
---


# 安装Docker及Docker-compose

## Docker安装命令


```bash showLineNumbers
sudo curl -fsSL https://get.docker.com | bash
```

## Docker-compose安装命令

```bash showLineNumbers
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```