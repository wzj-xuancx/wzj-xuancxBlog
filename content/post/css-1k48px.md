---
title: Css笔记
slug: css-1k48px
url: /post/css-1k48px.html
date: '2024-03-21 00:48:56+08:00'
lastmod: '2024-06-04 22:26:44+08:00'
toc: true
tags:
  - 大三
  - web
categories:
  - 大三
keywords: 大三,web
description: Web的Css简述
isCJKLanguage: true
image: https://image-host-wzj.oss-cn-guangzhou.aliyuncs.com/202406050157210.png
---

# Css

* 行内式，内嵌式，外部样式表
* 选择器

  * 元素选择器（例如`input`​​,`li`​​）
  * ​`class`​​选择器：`.classA{}`​​
  * ​`id`​​选择器：`#id {}`​​
  * 复合选择器：

    * 子类选择器：`.classA > li{}`​​
    * 后代选择器：`.classA li{}`​​
    * 并集选择器：`.classA,.classB{}`​​
    * 相邻兄弟选择器：`.classA+.classB{}`​
    * 伪类选择器：`.classA :hover`​​

      * ​`hover`​：悬浮在元素上面时的
      * ​`nth-child(i)`​：第`i`​个元素，如果是`nth-child(2n)`​就是偶元素
      * ​`before`​：在前面加东西，其中有`content`​属性表示内容是什么
      * ​`after`​：在后面加东西，其中有`content`​属性表示内容是什么
    * ​`focus`​​伪类选择器：用于选取获得焦点的表单元素
  * 子类会继承父类的样式（例如`color`​是继承的，`border`​是继承的）
* 属性选择器：

  * ​`input[tyepe="text"]{}`​
* ​`font: style size weight family`​​表示字体

  * ​`style`​​：样式：有`normal`​​，`italic`​​
  * ​`weight`​​：粗细，一般用的是`bold`​​（700），`normal`​​（400），或者也可以通过数字调节，越小越细。
  * ​`size`​​：大小，后面跟`px`​​，或者`em`​​()（可以在所有浏览器中自动调整文本的大小）
  * ​`family`​​：字体
  * 以上属性都可以单独设置，例如`font-size = xxx`​​
* ​`Text`​​：设置文本

  * ​`color`​​：颜色，可以有`color:red`​​，`color:#000000`​​，`color:rgb(255,0,0);`​​
  * ​`text-align`​​：对齐方式，`center`​​，`right`​​，`justify`​​（每一行被展开为宽度相等，左右外边距是对齐）
  * ​`text-decoration`​​：设置或者删除文本的装饰（一般用来删除`a`​​的默认样式）
  * ​`text-transform`​​：转变为全部大写`uppercase`​​，或者小写，首字母大写
  * ​`text-indent`​​：文本缩进。指定第一行的缩进
* ​`line-height`​​：设置文本行高
* ​`background`​​：设置背景

  * ​`background-color`​​：背景颜色
  * ​`background-image:url('xxx')`​​：背景图片
  * ​`background-repeat`​​：设置在某一方向重复，比如有`repeat-x`​​，`no-repeat`​​
  * ​`background-position`​​：改变图像在背景中的位置
  * ​`background-attachment`​​：设置背景是否固定或者随着页面的其余部分滚动，`fixed`​​或者`scroll`​​或者`local`​​
  * ​`background-size`​​：设置图片大小，可以有`cover`​​，`contain`​​
* ​`border width style color`​：边框

  * ​`border-radius`​：边角弧度大小（用于设置圆角边框）
  * ​`border-width`​：边框大小
  * ​`border-style`​：边框样式，例如`dotted`​（点线边框），`dashed`​（虚线边框），`solid`​（实线边框），`double`​（两个边框）
  * ​`border-color`​：边框颜色,可以设置为透明`transparent`​用这个实现三角形效果

* ​`margin`​：外边距，可以用`auto`​
* ​`padding`​：内边距。可以用`auto`​
* ​`box-sizing`​：表示如何计算一个元素的总宽度和总高度

  * ​`border-box`​：表示将`border`​和`padding`​的值算在元素里面，采用内减模式
  * ​`content-box`​：默认值，如果一个元素设置为`width=100px`​，然后设置`border-width=10px`​，那么盒子总宽就变成了`120px`​
* ​`display`​显示

  * ​`none`​：隐藏元素（使元素完全消失，和`visibility:hidden`​不一样，后者是元素仍然存在，只是元素隐藏了）
  * ​`block`​：块元素，占用全部宽度，前后都有换行符
  * ​`inline`​：内联元素
  * ​`flew`​：弹性，为父亲设置为`flew`​

    * 子类写`flex: 2`​表示它占2份（默认是每个元素占1份）
    * 默认主轴为`row`​，也就是按行放。`flex-direction:column`​就可以设置列为主轴
    * 父类`justify-content`​：定义主轴的样式，属性有`flex-start/end`​，`space-around/between`​，`stretch`​
    * 父类`flex-wrap`​：可换行，不然他们会挤在一行。属性有`wrap`​，`nowrap`​
    * 父类`align-items`​：侧轴样式，适合单行的时候用
    * 父类`align-content`​：侧轴样式，适合多行的时候用
    * 子类`align-self`​：可以有自己的样式，比如父类设置了`align-items: flex-end`​，子类可以设置自己为`flex-start`​
* ​`Float`​：浮动，使元素脱离文档流

  * 可以用来图文环绕，让块标签在一行相邻布局（如果用行内块会有间距）
  * ​`left`​或者`right`​
  * 浮动元素会脱标，可以覆盖基本的元素，不能覆盖文字，不能用`text-align`​和`margin`​居中
  * 浮动会有问题，有时候会要清除浮动，例如：

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .top{
                margin: 0 auto;
                width: 1000px;
                /* height: 300px; */
                background-color: pink;
            }
            .bottom{
                height: 100px;
                background-color: gray;
            }
            .left{
                float: left;
                height: 300px;
                width: 280px;
                background-color: green;
            }
            .right{
                float: right;
                height: 300px;
                width: 700px;
                background-color: skyblue;
            }
        </style>
    </head>
    <body>
        <!-- 浮动标签不能撑起父级标签的height 因为不是标准流里的 -->
        <!-- 父子级标签 子是浮动 父没有高度 那么子后面的标准流就会跑上来 -->
        <div class="top">
            <div class="left">

            </div>
            <div class="right">

            </div>
        </div>
        <div class="bottom"></div>
    </body>
    </html>
    ```

    * 在父元素内容最后加一个块级标签，设置`clear:both`​

      ```html
      .clearfix{clear:both}
      ...
          class="top"{
              ...
              <div class="clearfix">
          }
      ...
      ```
    * 父元素加上伪类元素，设置块级，并且`clear:both`​(**推荐使用**)

      ```html
      .clearfix::after{
          clear:both
          content:''
          display:block
          height:0
          visbility:hidden
      }
      ...
      class="top clearfix"{
      }
      ...
      ```
    * 在上面的基础上改变一些，双伪类

      ```html
      .clearfix:after,.clearfix:before{
          content:''
          display:table;
          clear:both
      }
      ```
    * 让父元素加上一个`overflow:hidden`​（不推荐）
* ​`position`​位置

  * ​`static`​：默认，没有定位
  * ​`absolute`​：相对于最近的已定位的父元素，如果没有就是相对于`<html>`​
  * ​`relative`​：相对定位，是相对于正常位置移动（但是原本所占的空间不会变化）
  * 一般是子绝父相（子绝对定位，父相对定位）
  * ​`fixed`​：相对于浏览器窗口固定，即使窗口是滚动的他也不会移动
  * ​`sticky`​：粘性定位，一开始是`relative`​的，然后页面滚动超出目标区域的时候，会变成`fixed`​的。

    元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

    这个特定阈值指的是 `top`​, `right`​, `bottom`​ 或 `left`​ 之一，换言之，指定四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
* ​`z-index`​：层叠性

  * 默认为0，值大的优先显示，如果相等就比较代码顺序
  * 标准流 < 浮动 < 定位
* ​`overflow`​：控制内容溢出元素框的时候添加滚动条

  * ​`visible`​：默认值，内容会直接成现在元素框外
  * ​`hidden`​：超出的看不见
  * ​`scroll`​：增加滚动条
  * ​`auto`​：如果超出了，会显示滚动条
  * ​`inherit`​：继承父类的`overflow`​属性
* ​`vertical-align`​：垂直对齐

  * 行内块和行内标签是默认文字基线对齐的
* ​`cursor`​：鼠标光标显示

  * ​`text`​：文字
  * ​`move`​：移动
  * ​`pointer`​：点击
* ​`opacity`​：透明值，1表示完全不透明，0表示完全透明

---

* ​`transform`​：转换

  * ​`translate()`​：从当前元素位置移动
  * ​`rotate()`​：在一个给定度数顺时针旋转的元素
  * ​`scale()`​：元素增加或者减少的大小，取决于宽度和高度的参数
* ​`transition`​：过渡，从一种效果到另一种效果

  * ​`transition: width 1s linear 2s`​表示对宽度，时间1s，过去时间曲线为线性，，开始时间是2s后
  * ​`transition-property`​：规定应用过渡CSS属性的名称
  * ​`transition-duration`​：过渡效果花费的时间
  * ​`transition-timing-fuction`​：时间曲线，默认是`ease`​。还有`linear`​
  * ​`transition-delay`​：延迟时间
* ​`@keyframes`​动画

  例如：

  ```html
  @keyframes myfirst{
      0%{
          background: red;
      }
      100%{
          background: yellow;
      }
  }

  div{
      animation: myfirst 5s;
  }
  ```
  * 需要创建动画，并且绑定在一个选择器上，至少需要名称 + 时间
  * ​`animation-duration`​：动画持续时间
  * ​`animation-timing-function`​：动画速度曲线，默认是`ease`​，还可以有`linear`​
  * ​`animation-delay`​：定义动画什么时候开始，默认是0
  * ​`animation-iteration-count`​：规定动画被播放的次数，默认是1
  * ​`animation-direction`​：规定动画是否在下一周期逆向播放。默认是`normal`​，还可以是`reverse`​，`alternate`​（在奇数次正向，偶数次反向），`alternate-reverse`​
  * ​`animation-play-state`​：规定动画是否正在运行或者停止（可以使用属性暂停动画或者开始），属性有`paused`​和`running`​
