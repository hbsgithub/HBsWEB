---
# sidebar_position: 2
title: Nginx Proxy Manager 搭建
description: Nginx Proxy Manager 搭建方法
# image: a thumbnail image to be shown in social media cards
keywords: [Nginx Proxy Manager,npm,nginx]
---

# Nginx Proxy Manager 搭建
:::info

Nginx Proxy Manager是一个可视化反代管理工具

:::
## Docker命令

```bash showLineNumbers
docker run -d \
  --name=npm \
  -p 80:80 \
  -p 81:81 \
  -p 443:443 \
  -v /home/npm/data:/data \
  -v /home/npm/letsencrypt:/etc/letsencrypt \
  --restart=always \
  jc21/nginx-proxy-manager:latest
```

## 进入NGINX面板
1. 服务器IP加81端口访问网页
2. 用户: admin@example.com
    
   
   密码: changeme