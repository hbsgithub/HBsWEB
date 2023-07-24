---
sidebar_position: 1
title: 安装armbian系统
description: 安装armbian系统的方法
# image: a thumbnail image to be shown in social media cards
keywords: [armbian]
---
# 安装armbian系统

:::info
armbian系统是一款基于Debian的Linux系统，可以在arm架构的设备上运行，如树莓派、香橙派、nanopi等。
:::

## N1盒子

1. armbian 5.77
   
   [N1 刷入 Armbian 5.77 安装 Docker OpenWRT 等](https://cyhour.com/1333/)
2. Homeassistant supervior支持系统
   1. [小姐姐手把手教你在n1盒子上安装Home Assistant](https://www.bilibili.com/video/BV1DU4y1m74Z?spm_id_from=333.880.my_history.page.click)
   2. [2021年最新N1安装HA Supervised教程](https://bbs.hassbian.com/thread-14469-1-1.html)

:::info
刷机工具包:
链接: https://pan.baidu.com/s/1OSYLfBuCCgsTtgs8jrU8AA 提取码: kad4 
:::

## 魔百和CM311-1a yst
1. 拆机刷机
   1. [魔百和CM311-1a_YST代工_安卓9_S905L3A_没无线版线刷包（可救砖）](https://blog.csdn.net/fatiaozhang9527/article/details/124655673)
   2. [CM311-1A刷armbian到emmc教程](https://www.right.com.cn/forum/thread-8242643-1-2.html)
   3. [Releases·ophub/amlogic-s9xxx-armbian](https://github.com/ophub/amlogic-s9xxx-armbian/releases)

:::info
刷机工具包:
链接: https://pan.baidu.com/s/1U4HNGWNA_XQpIrSvgNyXlg 提取码: xvgq
:::

:::tip
1. 先线刷 CM311-1a YST_安卓9-S905L3A没无线版沙发桌面线刷固件.zip 这个android固件
2. armbian用的是 Armbian_22.08.0_Aml_s905l3a_bullseye_5.15.55_server_2022.07.16.img
3. dtb用默认的e900v22c的就行，不用改
4. 插上制作好的U盘，用adb连接盒子的andorid，执行reboot update
5. 刷emmc注意，执行 armbian-install no
6. 然后选304和btrfs文件系统，不要选ext4
7. 实测拔掉u盘重启进系统没问题，红灯常亮就关机，插上刚刚的u盘，成功启动后，关机，拔掉u盘再重启
:::

## M401a

1. [魔百盒M401a刷机](https://blog.csdn.net/reverie_2007/article/details/128589689)
2. [魔百和M401A刷入Armbian系统EMMC](https://blog.csdn.net/u012132482/article/details/128375679?spm=1001.2101.3001.6650.6&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6-128375679-blog-128589689.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6-128375679-blog-128589689.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=7)
   
## 驱动自带蓝牙
[【大功告成】23年7月更：M401A/CM311-1a盒子Armbian安装极其简单](https://bbs.hassbian.com/thread-17335-1-1.html)