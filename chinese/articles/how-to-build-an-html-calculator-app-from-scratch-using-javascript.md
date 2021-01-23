> * 原文地址：[How to build an HTML calculator app from scratch using JavaScript 用 JavaScript 制作一个 HTML 计算器](https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/)
> * 原文作者：Zell Liew
> * 译者：lanxisama
> * 校对者：

![How to build an HTML calculator app from scratch using JavaScript](https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png)

这是一篇很棒的文章，在这里你可以学习如何从零做出一款计算器。我们希望你使用 JavaScript 开发并且思考怎么构建一款计算器, 如何编写代码，以及最后，如何整理自己的代码。

在这篇文章结束，你会得到一款和 iPhone 计算器功能一样的计算器（除了 +/- 和百分比功能外）。

![](https://cdn-media-1.freecodecamp.org/images/Cw7jNVIhWFV4NSNY8-Lv8uX4583Hr5LvzYFq)

### 前置条件

在你开始本节课程前，请确保你对 JavaScript 有一个不错的了解。最起码，你需要知道以下事情：
1.  [If/else分支][1]
2.  [For循环][2]
3.  [JavaScript函数][3]
4.  [箭头函数][4]
5.  `&&`  和  `||`  操作符
6.  如何使用`textContent`属性修改文本
7.  如何使用事件代理模式添加事件

### 开始之前

我建议你在开始课程之前自己尝试下自己开发计算器。这是一个很好的锻炼，因为你会训练自己像开发人员一样思考。
一旦你尝试了一小时，再回来上这节课（不管你是成功还是失败。当年尝试过，思考过，这会帮助你在更短的时间内吸收本节课的内容）。

就这样，我们先来了解下计算器的工作原理。

### 构建计算器

首先，我们想要建立计算器。

这个计算机包含两个部分：显示屏和键盘。
![](https://cdn-media-1.freecodecamp.org/images/rfV0r9RtFghhau8sZU5CzOFMuJAT1H48tFeL)

```html
<div class=”calculator”>
  <div class=”calculator__display”>0</div>
  <div class=”calculator__keys”> … </div>
</div>
```
我们使用CSS Grid去制作键盘部分，因为他们是类似网格的格式进行排列的。这里已经在启动文件中完成了，你可以在以下地址找到启动文件 [此处][5].

```css
.calculator__keys { 
  display: grid; 
  /* other necessary CSS */ 
}
```

为了帮助我们区分操作符，小数点，清除符号以及等号，我们将设置一个data-action属性用来描述他们的功能。
```html
<div class="calculator__keys">
  <button class="key--operator" data-action="add">+</button>
  <button class="key--operator" data-action="subtract">-</button
  <button class="key--operator" data-action="multiply">&times;</button>
  <button class="key--operator" data-action="divide">÷</button
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>0</button>
  <button data-action="decimal">.</button>
  <button data-action="clear">AC</button>
  <button class="key--equal" data-action="calculate">=</button>
</div>
```

### 监听键盘点击

当一个人拿着几个计算器，他会做五种事情，他们可以点击：
1.  一个数字键（0-9）
2.  一个操作键 （+，-，×，÷）
3.  小数点键
4.  等号键
5.  清除键

构建这个计算器的第一步是能够监听所有（1）的按键，确定（2）被按下时候的类型。在这个案例中，我们可以使用事件代理模式去监听，因为所有的按键都是`.calculator__keys`的孩子。
```js
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')


```

接下来，我们利用`data-action`属性去确定点击按键的类型。
```js
const key = e.target
const action = key.dataset.action
```
 
如果按键没有`data-action`属性，那么它一定是一个数字键。
```js
if (!action) {
  console.log('number key!')
}
```

如果这个按键有`data-action`，它的值是 `add`，`subtract`，`multiply`或者`divide`，我们就可以知道这是一个操作按键。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}
```


如果这个按键的`data-action`属性是`decimal`，我们就可以知道使用者点击了小数点键。

按照同样的思路，如果键的`data-action`是`clear`，我们知道用户点击了清除（写着 AC 的那个）键。如果键的`data-action`是`calculate`，我们知道用户点击了等于键。
```js
if (action === 'decimal') {
  console.log('decimal key!')
}
if (action === 'clear') {
  console.log('clear key!')
}

```

在这里，你可以使用`console.log`方法，来响应每个按键的事件。
![](https://cdn-media-1.freecodecamp.org/images/lbXTncsu2Ni5V-Ejx6RYCO-kW8XJm7f5woGC)

### 开始构建happy path

让我们思考一下，一个普通人拿到一个计算器之后，会做什么呢？**这个普通人会做什么的问题被称作happy path**。

这个普通人我们就称作 Mary 吧。
当 Mary拿起计算器时，她可能会点击任何一个按键：

1.  一个数字键（0-9）
2.  一个操作键 （+，-，×，÷）
3.  小数点键
4.  等号键
5.  清除键


一下子要思考五种按键可以能不太容易，所以让我们一步一步来。
### 当使用者按下数字键

如果计算器显示0（默认数字），此时，目标数字需要替换这个0。
![](https://cdn-media-1.freecodecamp.org/images/mpr4JFLSU-MHaq8LPMedsaDxnU5Y-MTx56SU)

如果计算器显示的是非零数字，那么目标数字就需要在显示的数字后面添加上。
![](https://cdn-media-1.freecodecamp.org/images/PNfa-nAlgIBtFt1MaVEDvuzisaIps6Kdb482)

现在，我们需要知道两件事情：
1.  当前被点击的按键的数字。
2.  当前显示的数字。

我们可以通过`textContent`和点击按键的`.calculator__display`分别获取到这两个值。

```js
const display = document.querySelector('.calculator__display')

```

**如果计算器显示0，我们需要用点击按键的数字替换计算器显示屏的数字。** 我们可以通过显示屏的textContent属性进行替换。
```js
if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  }
}
```

**如果计算器显示的是非零数字，我们需要在当前显示的数字后面追加点击键的数字。** 要追加一个数字，我们就需要一个连接字符串。
```js
if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
```

这时，Mary 可能会点击其中一个按键：
1.  小数点键
2.  操作符键


让我们告诉 Mary 点击一下小数点键吧。
### 当使用者点击小数点键时

当 Mary 点击了小数点键之后，小数点就需要出现在显示屏上。如果 Mary 在敲击小数键后敲击任何数字，那么数字也应该添加在显示屏上。
![](https://cdn-media-1.freecodecamp.org/images/5Pc6RLFHdPNzPi3BrlXJSs3xrFf2L90A2WXx)

为了实现上述效果，我们需要将`.`添加到已经显示的数字后面。
```js
if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}
```

接下来，我们可以让 Mary 继续点击计算器的操作按键继续她的计算。
### 当使用者点击操作按钮

如果 Mary 点击操作按键，这个操作符需要被高亮，这样的话 Mary 就知道了这个操作符是激活的。
![](https://cdn-media-1.freecodecamp.org/images/VarwRgJGrN0mwcgYGpX1Zw54QRfbXdMmQNEG)

为了实现这个功能，我们给操作符按钮添加一个名字叫`is-depressed`的类名。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}
```

一旦 Mary 按下了一个操作键，她将会点击另外的数字键。
 
### 当使用者在点击了操作键后点击了数字键

当 Mary 再次点击了数字键，之前显示的数字应该被替换成新的数组。操作键也应该被解除“被点击”的状态。
![](https://cdn-media-1.freecodecamp.org/images/GDuLfupPob7rW0UWTH6RqI5CuQX36vcILKwo)

我们可以使用`forEach`循环遍历所有的按键，去移除`is-depressed`类：
```js
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
<span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Remove .is-depressed class from all keys</span>
Array<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">from</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>key<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>parentNode<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>children<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">forEach</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;">k</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span> k<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>classList<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">remove</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'is-depressed'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

接下来，我们想要把显示的内容更新为之前点击过的按键。在我们做这件事之前，我们需要判断之前的按键是否是一个操作键。
 
我们可以通过自定义属性来实现。让我们定义一个自定义属性`data-previous-key-type`。
```js
const calculator = document.querySelector('.calculator')
// ...
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'add'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'subtract'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'multiply'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'divide'</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  key<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>classList<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">add</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'is-depressed'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Add custom attribute</span>
  calculator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>dataset<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'operator'</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

If the  `previousKeyType`  is an operator, we want to replace the displayed number with clicked number.
如果`previousKeyType`是一个操作符，我们希望可以用当前点击的数字替换当前显示的数字。
```js
const previousKeyType = calculator.dataset.previousKeyType

```

接下来让我们告诉 Mary 点击等号键来完成她的计算。
### 当使用者点击等号键时

当 Mary 点击等号键，计算器应该根据三个值计算一个结果：
1.  **第一个**输入计算器中的数字
2.  **操作符**
3.  **第二个**输入计算器中的数字

在计算之后，结果会替换当前已显示的值出现在屏幕上。
![](https://cdn-media-1.freecodecamp.org/images/TMFTHXrjCGzKQBIzBFApP7usoJCjcQ-oz2Jc)

这里我们只知道**第二个数字**是当前已经显示的数字。
```js
if (action === 'calculate') {
  const secondValue = displayedNum
  // ...
}
```

为了获取**第一个数字**，我们需要储存之前在计算器上被我们已经清除了的值。我们可以添加一个自定义的属性，在我们点击操作键是储存第一个值。

获取**操作符**，我们可以使用同样的方法。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
```

一旦我们得到了三个我们需要的值，接下来我们就可以进行计算。最终，我们需要实现这样的代码：
```js
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum

```

接下来我们需要构建一个`calculate`方法。它需要接收**第一个数字**，**操作符**和**第二个数字**三个参数。
```js
const calculate = (n1, operator, n2) => {
  // Perform calculation and return calculated value
}
```

如果操作符是`add`，我们希望两个数字可以相加在一起。如果操作符是 `subtract`，则希望两个数字相减，其余的操作符也是如此。
```js
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }

```

请记住现在的`第一个数字`和`第二个数字`都是字符串。如果你进行字符串相加的话，一会把它们连在一起 (`1 + 1 = 11`)。

所以在计算结果之前，我们需要将字符串类型转换成数字类型。我们可以使用`parseInt`和`parseFloat`两个方法来实现。
-   `parseInt`  converts a string into an  **integer**.
-   `parseFloat`  converts a string into a  **float**  (this means a number with decimal places).

对于计算器来说，我们需要浮点数。
```js
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

```
 
你可以通过 [这个链接][6] 获取源代码（往下滚动，在方框里输入你的邮箱地址，我就会把源代码直接发到你的邮箱里）。
### 边缘的测试用例

如果需要构建一款足够健壮的计算器，你需要使你的计算器能够适应各种奇怪的输入。
因此，你需要想象有一个破坏者，他会尝试按照错误的点击顺序来破坏你的计算器。我们就把这个破坏者叫做Tim吧。

Tim可以按照任何的方式点击这些按键：
1.  数字键
2.  运算符键
3.  小数点键
4.  等号键
5.  清除键

### 当Tim点击小数点键的时候会发生什么呢

如果在Tim点击小数点键之前已经有小数点显示在屏幕上了，那么他点击之后将什么都不会发生。
![](https://cdn-media-1.freecodecamp.org/images/Lbvc-ZcYHO2iWjXIjdYiOVJcmPTmtwkknBw5)

![](https://cdn-media-1.freecodecamp.org/images/Orj4wS6vgnPAMYFq1xI3DEYXBMS4PWLlSw8a)

 
我们可以利用`includes`方法检查是否已经包含`.`。
 
`includes`方法会检查字符串是否匹配。如果找到一个字符串，它返回 "true"；如果没有，它返回 "false"。

**注**:  `includes`区分大小写。

```js
// Example of how includes work.
const string = 'The hamburgers taste pretty good!'
const hasExclaimation = string.includes('!')
console.log(hasExclaimation) // true
```

检查字符串中是否包含小数点的方法如下：
```js
// Do nothing if string has a dot
if (!displayedNum.includes('.')) {
  display.textContent = displayedNum + '.'
}
```

接下来，如果Tim在点击任何操作键之后点击了小数点键，那么应该显示为`0.`。
![](https://cdn-media-1.freecodecamp.org/images/fLLhOqkyFZqsOZIxgMPAkpezrUisGpDKFEsw)

我们需要知道上一个按键是否是操作符键。 我们可以通过上节课设置的自定义属性 `data-previous-key-type `来判断。
当然`data-previous-key-type`还没有完成，为了判断`previousKeyType`是否是操作符，我们还需要在每次点击按键时更新`previousKeyType`。
```js
if (!action) {
  // ...
  calculator.dataset.previousKey = 'number'
}
if (action === 'decimal') {
  // ...
  calculator.dataset.previousKey = 'decimal'
}
if (action === 'clear') {
  // ...
  calculator.dataset.previousKeyType = 'clear'
}

```

现在，我们正确的获取了`previousKeyType`，我们可以使用它来判断上一次按键是否是操作符键。
```js
if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (previousKeyType === 'operator') {
    display.textContent = '0.'
  }

```

### 当 Tim 点击操作符键会发生什么

首先第一种情况，如果 Tim 首先点击了操作键，那么按键就会高亮。(We’ve already covered for this edge case, but how? See if you can identify what we did).
![](https://cdn-media-1.freecodecamp.org/images/q3D72rgBjtPOPUltYm1MMIN06dvxGOKyJyUs)

第二种情况，如果 Tim 多次点击同样的操作键，应该什么都不会发生。(我们也已经涵盖了这种边缘情况)。
**注:** 如果想要提供更好的用户体验，你可以通过CSS来让操作者的反复点击得到反馈。 我们不在这里实现，你可以将这个功能当作一次挑战，看看如何实现。


![](https://cdn-media-1.freecodecamp.org/images/IXW7zY77RWE7tNQ6HZMYma73hsxW44EjWg0n)


情况，如果 Tim 在点击一个操作键之后又点击了另外一个操作键，那么第一个按的操作键会被解除点击状态，第二次按的操作键应该被设置成按压状态。（我们也覆盖了这种情况，但如何实现的？）
![](https://cdn-media-1.freecodecamp.org/images/Rez20RY9AcS6ORFWIIumk69YWzwTyv8qseM7)


第四种情况，如果 Tim 点击了一个数字键，一个操作键和另外一个操作键，这种情况下，应当直接显示计算之后的结果。
![](https://cdn-media-1.freecodecamp.org/images/MAMWFTkNu6Ho8tlMGyJlTfjCbeYq8rO0bQyR)

这就意味着在`firstValue`，`operator`和`secondValue`三个参数存在时，我们需要调用`calculate`方法。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
// Note: It's sufficient to check for firstValue and operator because secondValue always exists
  if (firstValue && operator) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }

```

尽管我们在第二次点击操作键的时候我们可以得到一个计算的值，但这里依然有一个bug存在————额外点击操作键会计算出一个不应该的值。
![](https://cdn-media-1.freecodecamp.org/images/8ktjtHeYaRTEn-lPbOM3fhEg3qrvDl5WfOVY)

为了防止计算器在后续点击操作键时进行计算，我们需要检查 `previousKeyType `是否是一个操作键。如果是，我们不执行计算。
```js
if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  display.textContent = calculate(firstValue, operator, secondValue)
}
```

第五种情况，在点击操作键之后计算出一个数字之后，如果 Tim 又点击了一下数字键，接着又按了下操作键，操作键应该继续之前的结果进行计算，就像这样： `8 - 1 = 7`,  `7 - 2 = 5`,  `5 - 3 = 2`。
![](https://cdn-media-1.freecodecamp.org/images/RSsXyuKJe0biqkH-WPDdrGLhFBWmyZ2R1J2Y)

现在，我们的计算器不能进行连续计算。第二个计算值是错误的。我们的计算结果是这样的：`99 - 1 = 98`，`98 - 1 = 0`。 `99 - 1 = 98`, `98 - 1 = 0`。

![](https://cdn-media-1.freecodecamp.org/images/0r9I8Gu7J9pMbfzUG4hL6tU7RCP-cDhsaGp1)

第二个值是计算错误的，因为我们把错误的值输入了`calculate`函数。让我们通过几张图片来了解我们的代码是怎么做的。
### 理解calculate方法

首先，我们告诉使用者输入一个数字99，此时，计算器没有储存任何值。
![](https://cdn-media-1.freecodecamp.org/images/0hH4Cz5kOEaDOcTQ2PMPmkDl26a8JHSXNrJ7)

接着，我们让使用者点击一下减号键，在他点击减号键之后，我们设置`firstValue`为99，同样的设置`operator`为`subtract`。
![](https://cdn-media-1.freecodecamp.org/images/0K-KPTzdCBgfVvVaDNcVDYSjXfUO8p5LRs2v)

第三步，假设用户这次输入的数字是1，此时，将显示的数字改成1，但是我们的 `firstValue`，`operator` 和 `secondValue`保持不变。
![](https://cdn-media-1.freecodecamp.org/images/0MacG-A5Tl7rZeB6NLeNvghVyBpmSqaZQkn9)

第四步，用户再次点击减号键。就在他们点击减法后，在计算结果之前，我们设置`secondValue`作为显示的数字。
![](https://cdn-media-1.freecodecamp.org/images/RgDMKK92og4djxxmaYO1HUYiVoetKDK9x0j7)

第五步，我们用`firstValue`99，`operator`减号以及`secondValue`1进行计算，得到结果98。
 
计算出结果后，我们将显示设置为结果。然后，我们设置`operator`为减法，`firstValue`为之前显示的数字。
![](https://cdn-media-1.freecodecamp.org/images/X3VFJ5ar--k84pP3pM5VDVODvYlX4fCwHcnS)

好吧，这是非常错误的！如果我们想继续计算，我们需要用计算值更新`firstValue`。如果我们想继续计算，我们需要用计算值更新`firstValue`。

![](https://cdn-media-1.freecodecamp.org/images/gp-lkqhUOjoo46fIwx-7oLtbV7CP7jZwzc9y)

```js
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum
if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  const calcValue = calculate(firstValue, operator, secondValue)
  display.textContent = calcValue
// Update calculated value as firstValue
  calculator.dataset.firstValue = calcValue
} else {
  // If there are no calculations, set displayedNum as the firstValue
  calculator.dataset.firstValue = displayedNum
}

```

修改之后，现在通过操作键进行的连续计算应该是正确的。
![](https://cdn-media-1.freecodecamp.org/images/tKZ-VlIHo7dRNHDR2BBxZChE1cgqIuMU0Uh-)

### Tim 点击等号键时候发生了什么？

第一种情况，Tim 在点击等号前没点击过任何操作键，那么什么都不会发生。
![](https://cdn-media-1.freecodecamp.org/images/FBvnFZadNPXTllID0R7JfAkrsDb5SLcWTUhV)

![](https://cdn-media-1.freecodecamp.org/images/fKJV0ZqgVf-ppPqrx-70FpByKioVL2T9oAsF)

我们知道，如果`firstValue`没有设置为数字，也就代表操作键还没有被点击。我们可以利用这个点来防止等号进行计算。

```js
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
if (firstValue) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }

```

第二种情况，如果 Tim 输入了一个数字，接着又按下了操作键，随后又按了等号键。计算器计算的结果应该是这样：
1.  `2 + =`  —>  `2 + 2 = 4`
2.  `2 - =`  —>  `2 - 2 = 0`
3.  `2 × =`  —>  `2 × 2 = 4`
4.  `2 ÷ =`  —>  `2 ÷ 2 = 1`

![](https://cdn-media-1.freecodecamp.org/images/MUgIi0ck8OJRV18hfJ-kdn8k7Ydyy5mDvV6z)

我们已经处理了这种奇怪的情况，你知道为什么吗？
 
第三种情况，如果 Tim 在一次计算完成之后点击了等号键，应该进行另外一次计算，例如这样：
1.  Tim 点击了 `5 - 1`
2.  Tim 点击了等号，计算的值是`5 - 1 = 4`
3.  Tim 点击了等号，计算的值是 `4 - 1 = 3`
4.  Tim 点击了等号，计算的值是 `3 - 1 = 2`
5.  Tim 点击了等号，计算的值是  `2 - 1 = 1`
6.  Tim 点击了等号，计算的值是`1 - 1 = 0`

![](https://cdn-media-1.freecodecamp.org/images/vB2oVoTXZsMABqV60qqclJhoOxYu2JeVhLx4)

不幸的是，我们的把这个计算弄乱了，下面是我们计算的结果：
1.  Tim 输入 `5 - 1`
2.  Tim 点击等号，计算结果是`4`  
3.  Tim 再点击等号，计算结果是`1` 

![](https://cdn-media-1.freecodecamp.org/images/8roqRbhSH3hLVvtK7t-T2iRsRegqPWSrn4SF)

###  修改计算

首先让我们的用户点击数字5，，此时计算器中没有任何被定义过的东西。
![](https://cdn-media-1.freecodecamp.org/images/2vf5VGXNZ0vjGkyaY0y22PRTqqHDwgEKvCC3)


第二步，让用户点击减号键，再点击减号键之后，我们设置`firstValue`为5，同时设置`operator`为减号。
![](https://cdn-media-1.freecodecamp.org/images/Fc-QupYbv3HInXqv1vHFCc1avhDe3iyEErhs)

第三步，让用户输入第二个值，假设是数字1。此时，显示的数字应该被更新为1，但是我们的`firstValue，`operator`和`secondValue`是保持不变的。
![](https://cdn-media-1.freecodecamp.org/images/lW3CtoXJ1gxpUS5SZM3zh3zmqSB-ksM6E0vr)

第四步，用户点击等号键。紧接着用户点击了等号，但是在计算之前，我们设置`secondValue`为`displayedNum`。
第四，用户点击等号键后，我们设置`secondValue`为`displayNum`。就在他们点击等号之后，但在计算之前，我们设置`secondValue`为`displayedNum`。
![](https://cdn-media-1.freecodecamp.org/images/yeQCYcu0ecbNbJlHa9aqEZopHj-FyTqXuRmw)

第五，计算器计算`5-1`并且得到结果`4`。得到结果并将显示的数字更新。`firstValue`和`operator`会在下一次计算中使用，因为我们没有更新它们。
![](https://cdn-media-1.freecodecamp.org/images/YOsfq7AWCs0YbABkiebax-oaQVGc5tWsNyXJ)

第六，当用户再次点击等号键，我们在计算之前把`secondValue`设置成`displayNum`。
![](https://cdn-media-1.freecodecamp.org/images/BF7tBEUHJN4gnIwQqUTq9ctHIUIVcYM026Ro)

这里有一个问题。

我们要的不是 "secondValue"，而是设置 "firstValue "为显示的数字。
```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
display.textContent = calculate(firstValue, operator, secondValue)
  }

```

我们可能也想把上一次计算的`secondValue`带到下一次计算当中。为了做到这个功能，我们需要利用另外的自定义属性来存储它。让我们来定义一个叫`modValue`的属性。
```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
display.textContent = calculate(firstValue, operator, secondValue)
  }

```

如果`previousKeyType`是`calculate`，我可以使用 `calculator.dataset.modValue`作为`secondValue`。知道这个的话，我们就可以进行计算
```js
if (firstValue) {
  if (previousKeyType === 'calculate') {
    firstValue = displayedNum
    secondValue = calculator.dataset.modValue
  }

```

这样一来，当连续点击等号键时，我们就有了正确的计算方法。

![](https://cdn-media-1.freecodecamp.org/images/sjYX-ImohfhbFFbw1-FqmKagBvfFQKm0PzAu)

### 回到等号键


第四，如果 Tim 在计算器键后按下小数键或数字键，则应分别用`0.`或新数字代替显示。

在这里，我们不只检查`previousKeyType`是否是`operator`，还需要检查是否是`calculate`。
```js
if (!action) {
  if (
    displayedNum === '0' ||
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
  calculator.dataset.previousKeyType = 'number'
}
if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = '0.'
  }

```
第五，如果 Tim 再点击等号之后又点击了操作键，计算器则不应该进行计算。
![](https://cdn-media-1.freecodecamp.org/images/uuifuJ41Oo86NXMsPj44RSQf7ExULROc2GaI)

为此，我们在用操作键进行计算之前，先检查 `previousKeyType `是否为 `calculate`。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
  ) {
    const calcValue = calculate(firstValue, operator, secondValue)
    display.textContent = calcValue
    calculator.dataset.firstValue = calcValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }

```

The clear key has two uses:
清除键有两种用法：

1.  All Clear (denoted by  `AC`) clears everything and resets the calculator to its initial state.
2.  Clear entry (denoted by  `CE`) clears the current entry. It keeps previous numbers in memory.

When the calculator is in its default state,  `AC`  should be shown.
1.  全部清除（用 "AC "表示）清除所有的东西，并将计算器恢复到初始状态。
2.  清除输入（用 "CE "表示）清除当前的输入。它将以前的数字保留在内存中。

当计算器处于默认状态时，应该显示 "AC"。
![](https://cdn-media-1.freecodecamp.org/images/22fj2VLJJ1SPexybqdWIqPRkj9JkrlI3AAYl)

首先，如果 Tim 点击了一个键（除了清ad除键之外的任何键），`AC`应该被改成`CE`。
![](https://cdn-media-1.freecodecamp.org/images/Hs9tjp3JQIYOaAgh8KDnxj5QShScU0nMkDa7)
5
我们通过检查`data-action`是不是`clear`来判断，如果不是`clear`，我们找到清除按钮，并改变`textContent`。
```js
if (action !== 'clear') {
  const clearButton = calculator.querySelector('[data-action=clear]')
  clearButton.textContent = 'CE'
}
```


接下来，如果 Tim 点击`CE`，显示的数字应该为0。与此同时，`CE`应该改为`AC`。所以 Tim 可以将计算器重置到初始状态。
![](https://cdn-media-1.freecodecamp.org/images/Dv6SFw5LY8wB0WqTFQBe46-QoraBiq8TvpdY)

```js
if (action === 'clear') {
  display.textContent = 0
  key.textContent = 'AC'
  calculator.dataset.previousKeyType = 'clear'
}
```

第三，如果 Tim 点击了`AC`，重置了计算器的状态。
 
为了将计算器的状态改为初始状态，我们需要清空所有我们设置的自定义属性。
```js
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }

```

就是这样~反正是边缘用例！

你可以通过这个连接获取源码 [这个链接][7] （滚动到最下面然后输入你的邮箱地址，我将会发送源码到你的邮箱）。

我们创建的代码是相当混乱的。如果你尝试自己阅读代码可能会比较混乱，让我们一起重构一下它。
### 重构代码

When you refactor, you’ll often start with the most obvious improvements. In this case, let’s start with  `calculate`.
当你重构时，常常会从最明显的地方进行改进。在这种情况下，让我们从`calculate`开始。

在重构开始之前，请确保你了解 JavaScript 的这些特性，我们将在重构中使用到。
1.  [提前返回][8]
2.  [三目运算符][9]
3.  [纯函数][10]
4.  [ES6][11]

让我们开始吧！
### 重构计算方法

这是我们目前知道的。
```js
const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = firstNum + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

```

你知道的，我们应该尽可能的减少赋值操作。在这里，如果在`if`和`else if`中返回计算结果的话，我们就可以删除赋值语句：

```js
const calculate = (n1, operator, n2) => {
  if (operator === 'add') {
    return firstNum + parseFloat(n2)
  } else if (operator === 'subtract') {
    return parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    return parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    return parseFloat(n1) / parseFloat(n2)
  }
}
```

由于所有的情况都需要返回结果，我们可以使用**提前返回**。如果这样，就不需要任何的`else if`条件。
```js
const calculate = (n1, operator, n2) => {
  if (operator === 'add') {
    return firstNum + parseFloat(n2)
  }
  if (operator === 'subtract') {
    return parseFloat(n1) - parseFloat(n2)
  }
  if (operator === 'multiply') {
    return parseFloat(n1) * parseFloat(n2)
  }

```

由于我们每个`if`条件只有一条语句，我们可以去掉括号。（注意：有些开发人员发誓要用大括号）。下面是代码的样子。
```js
const calculate = (n1, operator, n2) => {
  if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
  if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
  if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
  if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
}
```

最后，我们在函数中调用了八次`parseFloat`。我们可以通过创建两个变量来包含浮点值来简化它：
```js
const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}
```

`calculate`的重构工作就到此为止了，你不觉得比以前更容易阅读吗？
### 重构事件监听
代码中用来进行事件监听的部分太冗余了，这是我们目前的情况：
```js
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!</span>action<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">/* ... */</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'add'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'subtract'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'multiply'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">||</span>
  action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'divide'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">/* ... */</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'clear'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">/* ... */</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'clear'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">/* ... */</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>action <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">/* ... */</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

如何开始重构这段代码呢？如果你不了解任何更好的代码写法。你可能会把每种操作细分来重构这部分代码：
```js
// Don't do this!
const handleNumberKeys = (/* ... /) => {/ ... /}
const handleOperatorKeys = (/ ... /) => {/ ... /}
const handleDecimalKey = (/ ... /) => {/ ... /}
const handleClearKey = (/ ... /) => {/ ... /}
const handleCalculateKey = (/ ... /) => {/ ... /}
```

不要做这些，这没有帮助的，因为你仅仅是把代码块分割了，当你做这些，函数将会更难读。

更好的方法是把代码分成纯函数和不纯函数。如果你这样做，你将得到这样的代码：
_`keys.addEventListener('click', e => {
  // Pure function
  const resultString = createResultString(/`_ `... */)` 

 `// Impure stuff
  display.textContent = resultString
  updateCalculatorState(/* ... */)
})`

这里`createResultString`是一个纯函数，我们需要把它的返回值显示在计算器上， `updateCalculatorState` 是一个不纯函数，可以改变计算器的自定义属性和外观。
### 实现 createResultString

像之前所说的，`createResultString`的返回值需要显示在计算器上，你可以通过display.textContent = 'some value`.来得到这部分值。
```js
display.textContent = 'some value'
```

而不是`display.textContent = 'some value'`，我们要返回每个值，以便我们以后可以使用它。

```js
// replace the above with this
return 'some value'
```
让我们一起开始，一步一步实现，首先从数字键开始。
### 实现数字键的结果字符串

这是关于数字键的代码：
```js
if (!action) {
  if (
    displayedNum === '0' ||
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
  calculator.dataset.previousKeyType = 'number'
}
```

第一步是将`display.textContent = 'some value'`的部分复制到`createResultString`中。当你这样做时，确保你把`display.textContent =`改为`return`。
```js
const createResultString = () => {
  if (!action) {
    if (
      displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      return keyContent
    } else {
      return displayedNum + keyContent
    }
  }
}
```

接着，我们把`if/else`改成三目运算符：
```js
const createResultString = () => {
  if (action!) {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }
}
```

当你重构时，记得记下你需要变量的清单。我们稍后再来看看这个清单。
 
```js
const createResultString = () => {
  // Variables required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action

```

### 实现小数点键的结果字符串

这是我们代码中关于小数点键的部分：
```js
if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = '0.'
  }

```

和之前一样，我们要把任何改变`display.textContent`的东西移到`createResultString`中。
```js
const createResultString = () => {
  // ...

```

由于我们想要返回所有的值，我们可以将`else if`语句转换为提前返回。
 
```js
const createResultString = () => {
  // ...

```

这里一个常见的错误是当两个条件都不匹配时，忘记返回当前显示的数字。我们需要用`createResultString`返回的值替换`display.textContent`。如果我们忘记返回值，`createResultString`将返回`undefined`，这不是我们想要的。
```js
const createResultString = () => {
  // ...

```

和之前一样，记下所需的变量。此时，所需的变量仍与之前相同：

```js
const createResultString = () => {
  // Variables required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
}
```

### 实现操作键的结果字符串

这是我们关于操作键的代码。
```js
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
  ) {
    const calcValue = calculate(firstValue, operator, secondValue)
    display.textContent = calcValue
    calculator.dataset.firstValue = calcValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }

```

你现在知道该怎么做了：我们要把改变`display.textContent`的所有内容移到`createResultString`中。下面是需要移动的内容。

```js
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>
  firstValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  operator <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'operator'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

请记住，`createResultString`需要返回要在计算器上显示的值。如果`if`条件不匹配，我们仍然要返回显示的数字。

```js
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>
  firstValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  operator <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'operator'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">else</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> displayedNum
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

然后我们可以将 `if/else `语句重构为三元操作符。

```js
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> firstValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  operator <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'operator'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
  <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> displayedNum
```

如果你仔细观察，你会发现没有必要存储一个`secondValue`变量。我们可以在`calculate`函数中直接使用`displayedNum`。

```js
const createResultString = () => {
  // ...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> firstValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  operator <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'operator'</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&amp;&amp;</span>
  previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">!==</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
  <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> displayedNum<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> displayedNum
```

最后，注意一下所需的变量和属性。这次，我们需要`calculator.dataset.firstValue`和`calculator.dataset.operator`。
```js
const createResultString = () => {
  // Variables & properties required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
  // 5. calculator.dataset.firstValue
  // 6. calculator.dataset.operator
}
```

### 实现清除键键的结果字符串

这是我们处理`clear`键的代码。
```js
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }

```

如上，我们需要把改变`display.textContent`的内容都放到`createResultString`中。
```js
const createResultString = () => {
  // ...
  if (action === 'clear') return 0
}
```

### 实现等号键的结果字符串

处理点击等号事件的代码：
```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
display<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>textContent <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>  }

```

As above, we want to copy everything that changes  `display.textContent`into  `createResultString`. Here's what needs to be copied:
同样的 我们需要把改变`display.textContent`的内容放到 `createResultString`中，以下是我们需要复制的：
```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum

```

当把代码复制到`createResultString`中时，要确保为每一种可能的情况返回值。
```js
const createResultString = () => {
  // ...
  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
    firstValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> displayedNum
    secondValue <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> calculator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>dataset<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>modValue
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">else</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> displayedNum
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

接下来，我们要减少重赋值。我们可以通过三元运算符将正确的值传入`calculate`来实现。

```js
const createResultString = () => {
  // ...
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const modValue = calculator.dataset.modValue
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>displayedNum<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> modValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
    <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> displayedNum<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">else</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> displayedNum
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

如果你觉得舒服的话，可以用另一个三元运算符进一步简化上述代码。

```js
const createResultString = () => {
  // ...
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const modValue = calculator.dataset.modValue
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> firstValue
  <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> previousKeyType <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'calculate'</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>displayedNum<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> modValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
    <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> displayedNum<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> displayedNum
```

此时，我们要再注意一下所需的属性和变量。

```js
const createResultString = () => {
  // Variables & properties required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
  // 5. calculator.dataset.firstValue
  // 6. calculator.dataset.operator
  // 7. calculator.dataset.modValue
}
```

### 传入必要的变量

We need seven properties/variables in  `createResultString`:
我们需要向`createResultString`传递这些变量/属性：
1.  `keyContent`
2.  `displayedNum`
3.  `previousKeyType`
4.  `action`
5.  `firstValue`
6.  `modValue`
7.  `operator`

我们可以从`key`中得到`keyContent`和`action`。我们还可以从`calculator.dataset`中得到`firstValue`、`modValue`、`operator`和`previousKeyType`。

这意味着`createResultString`函数需要三个变量`key`、`displayedNum`和`calculator.dataset`。由于`calculator.dataset`代表了计算器的状态，所以我们使用一个叫做`state`的变量来代替。
```js
const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const action = key.dataset.action
  const firstValue = state.firstValue
  const modValue = state.modValue
  const operator = state.operator
  const previousKeyType = state.previousKeyType
  // ... Refactor as necessary
}
// Using createResultString
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const displayedNum = display.textContent
  const resultString = createResultString(e.target, displayedNum, calculator.dataset)

```

如果你愿意的话，可以随意拆分变量。
```js
const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent
  const { action } = key.dataset
  const {
    firstValue,
    modValue,
    operator,
    previousKeyType
  } = state

```

### if语句的一致性

在`createResultString`中，我们使用以下条件来测试被点击的键的类型：
```js
// If key is number
if (!action) { /* ... */ }
// If key is decimal
if (action === 'decimal') { /* ... */ }
// If key is operator
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) { /* ... */}
// If key is clear
if (action === 'clear') { /* ... */ }

```

_它们不一致，所以很难读懂。如果可能的话，我们想让它们保持一致，这样我们就可以这样写：_

_`if (keyType === 'number') { /`_ `... _/ }
if (keyType === 'decimal') { /_ ... _/ }
if (keyType === 'operator') { /_ ... _/}
if (keyType === 'clear') { /_ ... _/ }
if (keyType === 'calculate') { /_ ... */ }`

为此，我们可以创建一个名为`getKeyType`的函数。这个函数应该返回被点击的键的类型。

```js
const getKeyType = (key) => {
  const { action } = key.dataset
  if (!action) return 'number'
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) return 'operator'
  // For everything else, return the action
  return action
}
```

下面是你如何使用这个函数：
```js
const createResultString = (key, displayedNum, state) => {
  const keyType = getKeyType(key)

```

我们完成了`createResultString`。让我们继续进行`updateCalculatorState`。

### 实现updateCalculatorState

`updateCalculatorState`是一个改变计算器的外观和自定义属性的函数。

与`createResultString`一样，我们需要检查被点击的键的类型，这里，我们可以重复使用`getKeyType`。在这里，我们可以重复使用`getKeyType`。

```js
const updateCalculatorState = (key) => {
  const keyType = getKeyType(key)

```

如果你看一下剩下的代码，你可能会注意到我们为每一种类型的键改变了`data-previous-key-type`。下面是代码的样子：
```js
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  if (!action) {
    // ...
    calculator.dataset.previousKeyType = 'number'
  }
  if (action === 'decimal') {
    // ...
    calculator.dataset.previousKeyType = 'decimal'
  }
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.previousKeyType = 'operator'
  }
  if (action === 'clear') {
    // ...
    calculator.dataset.previousKeyType = 'clear'
  }

```

这是多余的，因为我们已经通过`getKeyType`知道按键类型。我们可以将上述内容修改为：
```js
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType

```

### 在`updateCalculatorState`实现操作键的状态变化

从视图上看，我们需要重设所有按键的点击状态，这里我们可以复制之前的代码：
```js
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType

```

这是我们为操作键所写的部分中，在把与`display.textContent`相关的部分移到`createResultString`中后，剩下的内容。

```js
if (keyType === 'operator') {
  if (firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
  ) {
    calculator.dataset.firstValue = calculatedValue
  } else {
    calculator.dataset.firstValue = displayedNum
  }

```

你可能会注意到，我们可以用三元操作符来缩短代码。

```js
if (keyType === 'operator') {
  key.classList.add('is-depressed')
  calculator.dataset.operator = key.dataset.action
  calculator.dataset.firstValue = firstValue &&
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
    ? calculatedValue
    : displayedNum
}
```

和以前一样，注意你需要的变量和属性。这里，我们需要`calculatedValue`和`displayedNum`。

```js
const updateCalculatorState = (key, calculator) => {
  // Variables and properties needed
  // 1. key
  // 2. calculator
  // 3. calculatedValue
  // 4. displayedNum
}
```

### 在`updateCalculatorState`中实现清除键的的状态变化

这是清除键的剩余代码：
```js
if (action === 'clear') {
  if (key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  } else {
    key.textContent = 'AC'
  }
}

```

这里没有什么可以重构的。可以随意复制/粘贴所有内容到`updateCalculatorState`中。

### 在`updateCalculatorState`中实现等号键的的状态变化

这是等号键的代码：
```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
display<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>textContent <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calculate</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>firstValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> operator<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> secondValue<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>  }

```

下面是我们删除所有涉及`display.textContent`的内容后剩下的内容。

```js
if (action === 'calculate') {
  let secondValue = displayedNum
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      secondValue = calculator.dataset.modValue
    }
  }

```

我们可以将其重构为以下内容：
```js
if (keyType === 'calculate') {
  calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
    ? modValue
    : displayedNum
}
```

一如既往，注意使用的属性和变量：
```js
const updateCalculatorState = (key, calculator) => {
  // Variables and properties needed
  // 1. key
  // 2. calculator
  // 3. calculatedValue
  // 4. displayedNum
  // 5. modValue
}
```

### 传入必要的变量

我们需要给`updateCalculatorState`传入五个参数：
1.  `key`
2.  `calculator`
3.  `calculatedValue`
4.  `displayedNum`
5.  `modValue`

由于`modValue`可以从`calculator.dataset`中获取，所以我们只需要传入四个值。
```js
const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  // ...
}
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  const resultString = createResultString(key, displayedNum, calculator.dataset)
  display.textContent = resultString

```

### 再次重构 updateCalculatorState

我们改变了 "updateCalculatorState "中的三种值。

1.  `calculator.dataset`
2.   操作键的按下/未按下的类
3.  `AC` 和 `CE`  文字

如果您想让它更简洁，您可以将(2)和(3)拆分成另一个函数————`updateVisualState`。下面是`updateVisualState`。
```js
const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'AC') {
    key.textContent = 'AC'
  }

```

### 收尾工作

重构后的代码变得更加简洁。如果你研究一下事件监听器，你就会知道每个函数的作用。下面是事件监听器最后的样子：

```js
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  // Pure functions
  const resultString = createResultString(key, displayedNum, calculator.dataset)

```

你可以通过[这个链接][12]来获取重构部分的源代码（往下滚动，在下面输入你的邮箱地址，我会直接把源代码发到你的邮箱里）。

我希望你喜欢这篇文章。你可能也会喜欢[Learn JavaScript][13]————在这个课程中，我向你展示如何一步步构建20个组件，就像我们今天如何构建这个计算器一样。

注意：我们可以通过添加键盘支持和像Live regions这样的可访问性功能来进一步改进计算器。想知道如何改进吗？去看看《学习JavaScript》吧:)

[1]: https://zellwk.com/blog/js-if-else
[2]: https://zellwk.com/blog/js-for-loops
[3]: https://zellwk.com/blog/js-functions
[4]: https://zellwk.com/blog/es6/#arrow-functions
[5]: https://codepen.io/zellwk/pen/pLgmGL
[6]: http://calculator-part-1/
[7]: http://calculator-part-2/
[8]: http://blog.timoxley.com/post/47041269194/avoid-else-return-early
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[10]: https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c
[11]: https://zellwk.com/blog/es6#destructuring
[12]: https://zellwk.com/blog/calculator-part-3
[13]: https://learnjavascript.today/
