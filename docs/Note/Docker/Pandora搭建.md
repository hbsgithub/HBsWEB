---
# sidebar_position: 2
title: Pandora搭建
description: Pandora搭建方法
# image: a thumbnail image to be shown in social media cards
keywords: [pandora]
---
# Pandora搭建
:::info

Pandora是一个官方ChatGPT的反代服务

:::
## Docker-compose命令


```yaml showLineNumbers
version: '3.8'

services:
  pandora:
    image: pengzhile/pandora
    environment:
      PANDORA_CLOUD: true
      PANDORA_SERVER: '0.0.0.0:8018'
    ports:
      - "3000:8018"
    restart: always
```

## 参考
https://github.com/pengzhile/pandora