---
title: "小游戏"
layout: "games"
slug: "games"
license: false
toc: true
---

<style>
    .gameTo{
        position: relative;
        padding: 15px 30px;
        font-size: 18px;
        color: #fff;
        background: linear-gradient(45deg, #6b00b6, #b93b8f, #f4417a);
        background-size: 200% 200%;
        border: none;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        outline: none;
        transition: all 0.4s ease;
        overflow: hidden;
    }
  .gameTo::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
    transition: all 0.4s ease;
  }
  .gameTo:hover {
    background-position: 100% 100%;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  }
  .gameTo:hover::before {
    top: -25%;
    left: -25%;
  }
  .gameTo:active {
    transform: scale(0.95);
  }
  .gameTo span {
    position: relative;
    z-index: 1;
  }
  .gameTo::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    transition: all 0.4s ease;
    opacity: 0;
  }
  .gameTo:hover::after {
    opacity: 1;
  }
</style>


<h2>贪吃蛇</h2>
<a href="/post/game-snake.html"> <button class="gameTo"> 点击跳转『 贪吃蛇 』</button></a>



<h2>俄罗斯方块</h2>
<a href="/post/game-els.html"> <button class="gameTo"> 点击跳转『 俄罗斯方块』</button></a>


---