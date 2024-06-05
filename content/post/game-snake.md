---
title: 贪吃蛇
toc: false
license: false
tags:
  - 小游戏
categories:
  - 小游戏
description: 贪吃蛇小游戏，通过wasd控制贪吃蛇!
url: /post/game-snake.html
date: '2024-06-06 00:26:44+08:00'
lastmod: '2024-06-06 00:26:44+08:00'
---

<link rel="stylesheet" href="/css/game-snake.css">
<div class="gamBox">
    <div class="screen">
        <div class="snake">
            <div class="snake-head">
                <span>🐍</span>
            </div>
            <div class="snake-body"></div>
        </div>
        <div class="food">
            <span>🍎</span>
        </div>
    </div>
    <div class="integral">
        <div>等级（grade）<span class="grade"></span></div>
        <div>分数（score）<span class="score"></span></div>
    </div>
</div>
<script src="/js/game-snake.js"></script>
