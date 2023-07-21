---
# sidebar_position: 2
title: One-api搭建
description: One-api搭建方法
# image: a thumbnail image to be shown in social media cards
keywords: [api,one]
---
# One-api搭建
:::info

One-api是一个GPT Apikey管理平台

:::
## Docker搭建
```bash showLineNumbers
mkdir -p /root/data/one-api
```
```yaml title="docker-compose.yaml showLineNumbers
version: "3.8"
services:
  one-api:
    image: justsong/one-api
    container_name: one-api
    ports:
      - "8080:3000"
    volumes:
      - /root/data/one-api:/data
    restart: always
```

## Nginx配置
```nginx showLineNumbers
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    gzip on;

		server {
        listen 80;
        location /.well-known/ {
               root /var/www/html;
            }
        location / {
                rewrite ^(.*)$ https://$host$1 permanent;
            }
    }


		server {
         	listen 443 ssl http2;
          server_name yourdomain;
          ssl_certificate yourpem_path;
          ssl_certificate_key yourkey_path;
         # 其他 SSL 配置
                location / {
                # 不缓存，支持流式输出
                proxy_cache off;  # 关闭缓存
                proxy_buffering off;  # 关闭代理缓冲
                chunked_transfer_encoding on;  # 开启分块传输编码
                tcp_nopush on;  # 开启TCP NOPUSH选项，禁止Nagle算法
                tcp_nodelay on;  # 开启TCP NODELAY选项，禁止延迟ACK算法
                keepalive_timeout 300;  # 设定keep-alive超时时间为65秒
                client_max_body_size  64m;
                proxy_http_version 1.1;
                proxy_pass http://localhost:8080;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
								proxy_cache_bypass $http_upgrade;
          			proxy_set_header Accept-Encoding gzip;
								proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
								}
		}
}
```

## 参考
https://github.com/songquanpeng/one-api
