---
title: HTML笔记
slug: html-1ufkcv
url: /post/html-1ufkcv.html
date: '2024-03-20 20:14:52+08:00'
lastmod: '2024-06-05 00:38:58+08:00'
toc: true
tags:
  - 大三
  - web
categories:
  - 大三
keywords: 大三,web
description: Web的HTMl简述
isCJKLanguage: true
---

# HTML笔记

## html

* ​`<h1> </h1>`​ 一直从1~6 是标题，1最大，6最小
* ​`<p> </p>`​：段落小字体
* ​`<br>`​：换行
* ​`<hr>`​：分割线
* ​`<s> </s>`​：删除线
* ​`<u> </u>`​：下划线
* ​`<i> </i>`​：斜线
* ​`<b> </b>`​：加粗
* ​`<strong> </strong>`​：强调（也是加粗的效果，但是在代码里能体现这段代码的重要性）
* ​`<p> </p>`​：段落里的文字一般用这个
* 列表

  * 有序列表：

    * ​`<ol>`​：列表标签
    * ​`<li>`​：列表项标签
  * 无序列表：

    * ​`<ul>`​：列表标签
    * ​`<li>`​：列表项标签
  * 自定义列表：

    * ​`<dl>`​：列表标签
    * ​`<dd>`​：列表项标签
* ​`<a href target>`​：超链接标签

  * ​`href`​：用于定义连接，是一个路径
  * ​`target`​：用于定义打开的方式

    * ​`_blank`​：在新窗口打开
    * ​`_self`​：在当前窗口打开
* ​`<img scr title alt />`​：图片标签

  * ​`scr`​：定义图片的路径
  * ​`title`​：书包悬停时显示的文字
  * ​`alt`​：图片加载失败的时候显示的提示文字
* 表格标签

  * ​`table`​：表格
  * ​`thead`​：表头（可省略）
  * ​`tbody`​：表体（可省略）
  * ​`tfoot`​：表尾（可省略）
  * ​`tr`​：表示一行
  * ​`td`​：表示一行中的一格
  * ​`th`​：自带加粗和居中效果的`td`​
  * 单元格跨行跨列：`td`​的`colspan`​属性和`rowspan`​属性
* 表单标签

  * ​`form`​：内部可以定义让用户输入信息的表单项标签

    * ​`<form method>`​：`method`​定义用`get`​或者`post`​
  * ​`<input name type/>`​：表单项标签

    * ​`name`​：用于明确提交时的参数名，在`text,password`​里面的`value`​是输入的值，会以`k-v(name-value)`​的方式提交给`form`​
    * ​`type`​：输入信息的表单项类型

      * ​`text`​：单行普通文本框，`placeholder`​属性用来设置默认显示
      * ​`password`​：密码框，`placeholder`​属性用来设置默认显示
      * ​`submit`​：提交按钮
      * ​`reset`​：重置按钮
      * ​`radio`​：单选框，其中有`checked`​属性表示是否被选择。需要有互斥效果的话需要让多个单选框使用相同的`name`​值，`value`​属性可以用来区分他们
      * ​`checkbox`​：多选框，和单选框规则差不多。
      * ​`file`​：选择文件
      * ​`hidden`​：隐藏域，不显示在页面上，但是提交时会携带（希望用户提交一些特定的信息，但是考虑安全问题，或者用户操作问题，不希望数据发生改变）
    * ​`readonly`​：只读属性
    * ​`disabled`​：废用，不提交
  * ​`<textarea> </textarea>`​：多行文本框，没有`value`​属性，提交的就是双标签中间的内容
  * ​`<select> </select>`​：下拉框

    * ​`<option> </option>`​：下拉框里面的问题，如果没有`value`​值提交的时候是里面的内容

      * ​`selected`​：指定后，会作为默认的第一行
  * ​`<label> </label>`​：里面如果有文字和选择框，点击文字和点击选择框效果一样。另外可以设置`for=aid`​属性，`aid`​为某个选择框的`id=aid`​属性值，这样也可以做到相同的效果

    ```java
    <input type="radio" name="sex" id="male">  <label for="male">男</label>

    <label>
        <input type="radio" name="age" id="under50"> 小于50岁
    </label>
    ```
* 页面布局

  * ​`<div> </div>`​ 独占一行的元素
  * ​`<span> </span>`​行内元素，不会自己独占一行的元素（设置宽高不生效）
* 特殊字符

  * 空格：`&nbsp`​
  * 小于：`&lt`​
  * 大于：`&gt`​
