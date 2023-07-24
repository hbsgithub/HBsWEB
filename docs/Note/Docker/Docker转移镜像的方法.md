---
sidebar_position: 3
title: Docker转移镜像的方法
description: Docker转移镜像的方法
# image: a thumbnail image to be shown in social media cards
keywords: [docker, images]
---

# Docker转移镜像的方法

## Docker导出镜像

```bash showLineNumbers
docker save -o <输出文件名>.tar <镜像名称>:<标签>
```
例如：
```bash showLineNumbers
docker save -o ubuntu.tar ubuntu:latest
```

## Docker导入镜像

```bash showLineNumbers
docker load -i <输入文件名>.tar
```
例如：
```bash showLineNumbers
docker load -i ubuntu.tar
```
