---
# sidebar_position: 2
title: Pingvin-share搭建
description: Pingvin-share搭建方法
# image: a thumbnail image to be shown in social media cards
keywords: [portainer]
---
:::info

pingvin-share是一个文件分享服务

:::

# Docker Compose安装

```yaml showLineNumbers
version: '3.8'
services:
  pingvin-share:
    image: stonith404/pingvin-share
    restart: unless-stopped
    ports:
      - 3000:3000
    volumes:
      - "./data:/opt/app/backend/data"
      - "./data/images:/opt/app/frontend/public/img"
# Optional: If you add ClamAV, uncomment the following to have ClamAV start first.
#    depends_on:
#      clamav:
#        condition: service_healthy
# Optional: Add ClamAV (see README.md)  
# ClamAV is currently only available for AMD64 see https://github.com/Cisco-Talos/clamav/issues/482
#  clamav:
#    restart: unless-stopped
#    image: clamav/clamav

```

## 参考
https://github.com/stonith404/pingvin-share/blob/main/docs/README.zh-cn.md
