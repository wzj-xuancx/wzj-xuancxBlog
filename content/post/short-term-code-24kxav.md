---
title: ShortCode短代码运用
slug: short-term-code-24kxav
url: /post/short-term-code-24kxav.html
date: '2024-06-11 11:17:53+08:00'
lastmod: '2024-06-11 11:56:00+08:00'
toc: false
tags:
  - hugo
categories:
  - hugo
keywords: hugo
description: 讲述了hugo中shortcode的简单知识
isCJKLanguage: true
---

# 短代码

## 什么是Shortcode

简单来说, 就是 Hugo 为了维护 Markdown 的简洁性, 同时保证可添加 HTML 内容, 所创造的一种表达方式.

这种方式允许我们在 Markdown 文件中以一种简洁的形式写HTML.

‍

## 一个简单的例子：友链的html生成

```html
{{- $name := .Get "name" | default (.Get 0) -}}
{{- $url := .Get "url" | default (.Get 1) -}}
{{- $avatar := .Get "avatar" | default (.Get 2) -}}
{{- $bio := .Get "bio" | default (.Get 3) -}}

<a href="{{- $url -}}" title="{{- $name -}}" class="friend-link" target="_blank" rel="friend">
    <div class="friend-link-div">
        <div class="friend-link-avatar">
            <img src={{ .Get "avatar" }} class="friend-avatar" loading="lazy" alt="Avatar">
        </div>
        <div class="friend-link-info">
            <i class="fa fa-link" aria-hidden="true"></i>
            <i class="friend-name">{{ $name }}</i>
            <p class="friend-bio">{{ $bio }}</p>
        </div>
    </div>
</a>

```

使用方法：`{{< friend name="xxx" url="xxx" avatar="xxx" bio="xxx" >}}`​

```html
{{- 和 -}}: 这对标记用来去除模板语法前后的空白字符。它确保定义变量时不会在输出中留下多余的空白字符。

$name :=: 定义一个变量$name。在Go模板中，变量以$开头。

.Get "name": 这是调用当前数据对象的Get方法，尝试获取键为"name"的值。.代表当前数据对象（在模板执行时传入的数据）。

| default (.Get 0): 管道操作符|用于将前面的输出作为后面函数的输入。default是一个模板函数，如果.Get "name"返回的值为空或不存在，则使用default后面的值作为默认值。这里的默认值是.Get 0，即尝试获取索引为0的值。
```

## bilibili视频

```html
{{ $vid := (.Get 0) }}
{{ $videopage := default 1 (.Get 1) }}
{{ $basicQuery := querify "page" $videopage "high_quality" 1 "as_wide" 1 }}
{{ $videoQuery := "" }}

{{ if strings.HasPrefix (lower $vid) "av" }}
{{ $videoQuery = querify "aid" (strings.TrimPrefix "av" (lower $vid)) }}
{{ else if strings.HasPrefix (lower $vid) "bv" }}
{{ $videoQuery = querify "bvid" $vid }}
{{ else }}
<p>Bilibili 视频av号或BV号错误！请检查视频av号或BV号是否正确</p>
<p>当前视频av或BV号：{{ $vid }}，视频分P：{{ $videopage }}</p>
{{ end }}

<div class="video-wrapper" style="margin-left: 0px; padding-bottom: 36.25%;">
    <iframe
        src="https://player.bilibili.com/player.html?{{ $basicQuery | safeURL }}&{{ $videoQuery | safeURL }}&autoplay=0"
        scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"
        style="border-radius: 40px; position:absolute; height: 100%; width: 75%;">
    </iframe>
</div>
```

使用方法：`{{< bilibili BV1LG4y117w6 >}}`​

会转化为：

```html
vid = BV1LG4y117w6
videopage = 1
basicQuery = page=1&high_quality=1&as_wide=1
videoQurty = bvid=1LG4y117w6
```
