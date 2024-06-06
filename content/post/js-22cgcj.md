---
title: JS笔记
slug: js-22cgcj
url: /post/js-22cgcj.html
date: '2024-03-22 12:55:59+08:00'
lastmod: '2024-06-05 11:06:08+08:00'
toc: true
tags:
  - 大三
  - web
categories:
  - 大三
keywords: 大三,web
description: Web的JS简述
isCJKLanguage: true
image: https://image-host-wzj.oss-cn-guangzhou.aliyuncs.com/%E4%B8%8B%E8%BD%BD.png
---

# js

## 变量：

* ​`var`​或者`let`​，全局和局部的区别

## 数据类型：

* 数字型为`Number`​

  * 八进制开头为`0o`​，十六进制开头为`0x`​
  * 最大值：`Number.MAX_VALUE`​
  * 非数字判断：`isNaN()`​
* 字符串型

  * ​`length`​属性为长度
* 数组

  * 创建1：`var arr = [1,2,'666',1.2]`​
  * 创建2：`var arr = new Array()`​
  * 方法有`push`​，`pop`​

## 函数：

* 语法：

  * ​`function 函数名(参数){}`​
  * ​`var 函数名 = function(){}`​
* 参数中有`...a`​是放在参数最后一位的，表示接收一个伪数组

## 对象：

* 创建对象

  * 字面值：`var people = {k:v,k:v,...,k:function(){...}}`​
  * 用`new`​：`var people = new Object();`​
  * 构造方法：先定义一个构造函数，然后就可以了

    ```js
            function Star(name, age, sex) {
                this.name = name;
                this.age = age;
                this.sex = sex;
            }
            var star1 = new Star('tg', 100, '男女不明');
            for (var i in star1) {
                console.log(i + ' ' + star1[i]);
            }
    ```
* 调用：`people.方法/属性名`​
* 内置对象

  * 日期：`Date`​

    * ​`var now = Date()`​就是今天的时间
    * ​`Date(年，月，日)`​可以作为构造函数，或者`Date('年-月-日 时:分:秒')`​
    * ​`getFullYear()`​返回年，`getMouth()`​返回月（0~11），`getDate()`​返回几号
  * 数学：`Math`​

    * 绝对值：`Math.abs()`​
    * 向下取整：`Math.floor()`​
  * 数组：`Array`​

    * ​`new Array(数字1，数字2，数字3)`​可以创建数组，如果里面只有一个数，表示创建大小为那个数的空数组
    * ​`unshift`​：在数组前面添加
    * ​`filter`​：过滤。`var a2 = a1.filter(num => num < 100)`​
    * ​`sort`​：排序

## DOM事件

* 获取元素

  * 获取id：`document.getElementById("id名")`​​
  * 获取标签：`document.getElementsByTagName('标签名');`​​得到的是一个伪数组
  * 获取class：`document.getElementsByClassName('class名')`​​​
  * ​`document.querySelector('`选择器名`')`​​（推荐使用）获取第一个该选择器对象（什么选择器都可以），不过需要注意如果是类选择器需要在前面加上`.`​​，id要加上`#`​​，标签不用
  * ​`document.querySelectorAll('选择器名')`​​（推荐使用）获取该选择器全部对象（什么选择器都可以）
  * 获取特殊元素：`document.body`​​，`document.documentElement`​​
* ​`innerText`​​和`innerHTML`​​区别

  * 前者不标准，不识别html标签，会​去除换行和空格和html标签​
* 操纵元素属性：

  * 只需要`变量.属性`​​就可以操纵一般的属性，需要注意属性的名称是否正确。
  * 如果需要操纵css样式，需要用`变量.style.属性`​​
  * 当然也可以用`变量.className`​​直接换成另一个样式
* 自定义属性：

  * 获取某元素上的自定义属性的值：`某元素.getAttribute('自定义属性')`​​
  * 保存某元素上的自定义属性的值：`某元素.setAttribute('自定义属性'，值)`​​
  * 移除：`某元素.removeAttribute('自定义属性')`​​
  * 新版本特性：属性需要命名为`data-xxxxx`​​（这样可以用`元素.dataset`​​获得全部自定义的数学）

    * 这样访问一个属性就可以：`某元素.dataset.xxxxx`​​（不是`data-xxxxx`​​）
    * 删除就可以：`delete 某元素.dataset.xxxxx`​​
    * 然后在选择元素的时候可以：

      ```js
      //选择所有data-class属性值为my的元素
      var div = document.querySelectorAll("[data-class='my']");
      ```
    * 设置css样式的时候可以：

      ```js
      div[data-class="my"]{
          font.size = 36px;
      }
      ```
* 事件：

  * 绑定事件的方法：

    * ​`btn.onclick = function(e){}`​​（不推荐使用）
    * ​`btn.addEventListener('click',function(e){})`​​，第一个参数不用`on`​​了
  * 解除绑定事件的方法：`btn.removeEventListener('click',函数名)`​​
  * 事件对象：参数中的`e`​​，包含了一系列信息

    * 鼠标坐标

      * ​`clientX`​​：鼠标x值（相对于浏览器可视区域）
      * ​`pageX`​​：鼠标x值（相对于文档区域）
      * ​`screenX`​​：鼠标x值（相对于电脑屏幕）
    * 键盘

      * ​`key`​​：获得点击的键盘
    * ​`preventDefault`​​：阻止默认行为（比如让链接不跳转，或者让提交按钮不提交）
    * ​`stopPropagation`​​：阻止事件冒泡（防止父类再触发一次）
    * ​`target`​​：点击的标签是什么
  * 点击：`click`​​
  * 获取焦点：`focus`​​
  * 失去焦点：`blur`​​
  * 鼠标在上面：`mouseover`​​
  * 鼠标移出：`mouseout`​​
  * 鼠标移动：`mousemove`​​
  * 键盘按下：`keydown`​​或者`keypress`​​（后者不识别功能键）
  * 键盘抬起：`keyup`​​
  * 禁用右键：`contextmenu`​​配合`preventDefault`​​
  * 禁止选中：`selectstart`​​配合`preventDefault`​​
* 节点操作：

  * 父亲节点：`xxx.parentNode`​​
  * 儿子节点：`xxx.children`​​
  * 第一个和最后一个儿子：`xxx.first/lastElementChild`​​
  * 兄弟结点：`nextElementSibling`​​或者`previousElementSibling`​​
  * 创建元素节点：`xxx = document.createElement('标签名')`​
  * 创建文本节点：`xxx = document.createTextNode('文本值')`​
  * 添加节点：`父元素.appendChild()`​，`父元素.insertBefore(插入的元素，在哪个元素之前插入)`​
  * 删除结点：`父元素.removeChild()`​
  * 替换节点：`父元素.replaceChild(新节点，旧节点)`​
  * 复制结点：`元素.cloneNode(参数)`​​，参数为空或者false就是浅拷贝，否则是深拷贝

## windows：

* 事件

  * ​`resize`​：当页面大小改变的时候触发

  * 定时器

    ```js
    let timer1 = setInterval(() => {
        xxx
    },1000); 
    表示每1000毫秒执行一次里面的内容
    clearInterval(timer1)//清除定时器

    let timer2 = setTimeout(function () {
        xxx
    }, 3000);
    表示过了3000毫秒再调用一次

    clearTimeout(timer2) //清除定时器
    ```

  * ​`prompt()`​：浏览器弹窗输入框，必须输入并确认才能执行下面的代码
  * ​`alert()`​：浏览器弹窗，必须点击后才能执行下面的代码
  * ​`confirm()`​：浏览器弹框确认框，会有一个确认和取消
  * ​`Console.log()`​：调试输出
* 属性

  * ​`innerWidth`​：表示浏览器现在可视区域宽度
  * ​`history`​：从历史记录里面翻页

    * ​`forward()`​：向后翻页
    * ​`back()`​：向前翻页
    * ​`go(n)`​：向前翻n页
  * ​`sessionStroage`​：用来储存会话级数据（浏览器关闭数据清除）

    * ​`setItem(k,v)`​：存储键值对
    * ​`getItem(k)`​：获得键值对
    * ​`removeItem(k)`​：删除键值对
  * ​`localStorage`​：用来储存持久级数据（浏览器关闭数据还在）

    * ​`setItem(k,v)`​：存储键值对
    * ​`getItem(k)`​：获得键值对
    * ​`removeItem(k)`​：删除键值对

  * ​`location`​：

    * ​`assign('URL')`​：跳转网页，有回退
    * ​`replace('URL')`​：跳转网页，无回退
    * ​`href`​属性：地址栏中的url
    * 解析网络URL，读取到`get`​方法后面的东西（包括问号之后的）：`decodeURIComponent(location.search);`​
  * ​`Navigator`​ 表示用户代理的状态和标识

    * ​`userAgent`​：用户代理
    * ​`appName`​：浏览器名称

## 杂项知识点：

* 预解析：

  ```html
  console.log(name); //空
  var name = 'ttt';
  ```

  * 变量预解析，其声明会提升到当前作用域最前面，但是赋值不会
  * 函数预解析：同理，但是只能用第一种函数语法，第二种会报错，即：

    ```js
    f1() //正确
    function f1(){}

    f2()//错误
    var f2=function(){}

    因为第二种会解析为：
    var f2
    f2() //这里发现不了f2是函数，以为是变量
    f2 = function(){}
    ```

‍
