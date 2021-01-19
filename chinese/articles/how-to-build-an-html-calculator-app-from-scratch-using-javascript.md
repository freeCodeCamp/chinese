> * 原文地址：[How to build an HTML calculator app from scratch using JavaScript 用 JavaScript 制作一个 HTML 计算器](https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/)
> * 原文作者：Zell Liew
> * 译者：lanxisama
> * 校对者：

![How to build an HTML calculator app from scratch using JavaScript](https://cdn-media-1.freecodecamp.org/images/0*7GfUdSILXBLyAbQy.png)

这是一篇很棒的文章，在这里你可以学习如何从零做出一款计算器。我们希望你使用JavaScript开发并且思考怎么构建一款计算器, 如何编写代码，以及最后，如何整理自己的代码。

在这篇文章结束，你会得到一款和iPhone计算器功能一样的计算器（除了 +/- 和百分比功能外）。

![](https://cdn-media-1.freecodecamp.org/images/Cw7jNVIhWFV4NSNY8-Lv8uX4583Hr5LvzYFq)

### 前置条件

在你开始本节课程前，请确保你对JavaScript有一个不错的了解。最起码，你需要知道以下事情：
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

按照同样的思路，如果键的`data-action`是`clear`，我们知道用户点击了清除（写着AC的那个）键。如果键的`data-action`是`calculate`，我们知道用户点击了等于键。
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

这个普通人我们就称作Mary吧。
当Mary拿起计算器时，她可能会点击任何一个按键：

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

这时，Mary可能会点击其中一个按键：
1.  小数点键
2.  操作符键


让我们告诉Mary点击一下小数点键吧。
### 当使用者点击小数点键时

当Mary点击了小数点键之后，小数点就需要出现在显示屏上。如果Mary在敲击小数键后敲击任何数字，那么数字也应该添加在显示屏上。
![](https://cdn-media-1.freecodecamp.org/images/5Pc6RLFHdPNzPi3BrlXJSs3xrFf2L90A2WXx)

为了实现上述效果，我们需要将`.`添加到已经显示的数字后面。
```js
if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}
```

接下来，我们可以让Mary继续点击计算器的操作按键继续她的计算。
### 当使用者点击操作按钮

如果Mary点击操作按键，这个操作符需要被高亮，这样的话Mary就知道了这个操作符是激活的。
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

一旦Mary按下了一个操作键，她将会点击另外的数字键。

### 当使用者在点击了操作键后点击了数字键

当Mary再次点击了数字键，之前显示的数字应该被替换成新的数组。操作键也应该被解除“被点击”的状态。
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

接下来让我们告诉Mary点击等号键来完成她的计算。
### 当使用者点击等号键时

当Mary点击等号键，计算器应该根据三个值计算一个结果：
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

### 当Tim点击操作符键会发生什么

首先第一种情况，如果Tim首先点击了操作键，那么按键就会高亮。(We’ve already covered for this edge case, but how? See if you can identify what we did).
![](https://cdn-media-1.freecodecamp.org/images/q3D72rgBjtPOPUltYm1MMIN06dvxGOKyJyUs)

第二种情况，如果Tim多次点击同样的操作键，应该什么都不会发生。(我们也已经涵盖了这种边缘情况)。
**注:** 如果想要提供更好的用户体验，你可以通过CSS来让操作者的反复点击得到反馈。 我们不在这里实现，你可以将这个功能当作一次挑战，看看如何实现。


![](https://cdn-media-1.freecodecamp.org/images/IXW7zY77RWE7tNQ6HZMYma73hsxW44EjWg0n)


情况，如果Tim在点击一个操作键之后又点击了另外一个操作键，那么第一个按的操作键会被解除点击状态，第二次按的操作键应该被设置成按压状态。（我们也覆盖了这种情况，但如何实现的？）
![](https://cdn-media-1.freecodecamp.org/images/Rez20RY9AcS6ORFWIIumk69YWzwTyv8qseM7)


第四种情况，如果Tim点击了一个数字键，一个操作键和另外一个操作键，这种情况下，应当直接显示计算之后的结果。
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

第五种情况，在点击操作键之后计算出一个数字之后，如果Tim又点击了一下数字键，接着又按了下操作键，操作键应该继续之前的结果进行计算，就像这样： `8 - 1 = 7`,  `7 - 2 = 5`,  `5 - 3 = 2`。
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

Fifth, we perform the calculation with  `firstValue`  99,  `operator`  subtract, and  `secondValue`  1\. The result is 98.

Once the result is calculated, we set the display to the result. Then, we set  `operator`  to subtract, and  `firstValue`  to the previous displayed number.

![](https://cdn-media-1.freecodecamp.org/images/X3VFJ5ar--k84pP3pM5VDVODvYlX4fCwHcnS)

Well, that’s terribly wrong! If we want to continue with the calculation, we need to update  `firstValue`  with the calculated value.

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

With this fix, consecutive calculations done by operator keys should now be correct.

![](https://cdn-media-1.freecodecamp.org/images/tKZ-VlIHo7dRNHDR2BBxZChE1cgqIuMU0Uh-)

### What happens if Tim hits the equals key?

First, nothing should happen if Tim hits the equals key before any operator keys.

![](https://cdn-media-1.freecodecamp.org/images/FBvnFZadNPXTllID0R7JfAkrsDb5SLcWTUhV)

![](https://cdn-media-1.freecodecamp.org/images/fKJV0ZqgVf-ppPqrx-70FpByKioVL2T9oAsF)

We know that operator keys have not been clicked yet if  `firstValue`  is not set to a number. We can use this knowledge to prevent the equals from calculating.

```js
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
if (firstValue) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }

```

Second, if Tim hits a number, followed by an operator, followed by a equals, the calculator should calculate the result such that:

1.  `2 + =`  —>  `2 + 2 = 4`
2.  `2 - =`  —>  `2 - 2 = 0`
3.  `2 × =`  —>  `2 × 2 = 4`
4.  `2 ÷ =`  —>  `2 ÷ 2 = 1`

![](https://cdn-media-1.freecodecamp.org/images/MUgIi0ck8OJRV18hfJ-kdn8k7Ydyy5mDvV6z)

We have already taken this weird input into account. Can you understand why? :)

Third, if Tim hits the equals key after a calculation is completed, another calculation should be performed again. Here’s how the calculation should read:

1.  Tim hits keys 5–1
2.  Tim hits equal. Calculated value is  `5 - 1 = 4`
3.  Tim hits equal. Calculated value is  `4 - 1 = 3`
4.  Tim hits equal. Calculated value is  `3 - 1 = 2`
5.  Tim hits equal. Calculated value is  `2 - 1 = 1`
6.  Tim hits equal. Calculated value is  `1 - 1 = 0`

![](https://cdn-media-1.freecodecamp.org/images/vB2oVoTXZsMABqV60qqclJhoOxYu2JeVhLx4)

Unfortunately, our calculator messes this calculation up. Here’s what our calculator shows:

1.  Tim hits key 5–1
2.  Tim hits equal. Calculated value is  `4`
3.  Tim hits equal. Calculated value is  `1`

![](https://cdn-media-1.freecodecamp.org/images/8roqRbhSH3hLVvtK7t-T2iRsRegqPWSrn4SF)

### Correcting the calculation

First, let’s say our user clicks 5. At this point, nothing is registered in the calculator yet.

![](https://cdn-media-1.freecodecamp.org/images/2vf5VGXNZ0vjGkyaY0y22PRTqqHDwgEKvCC3)

Second, let’s say the user clicks the subtract operator. After they click the subtract operator, we set  `firstValue`  to 5. We set also  `operator`  to subtract.

![](https://cdn-media-1.freecodecamp.org/images/Fc-QupYbv3HInXqv1vHFCc1avhDe3iyEErhs)

Third, the user clicks on a second value. Let’s say it’s 1. At this point, the displayed number gets updated to 1, but our  `firstValue`,  `operator`  and  `secondValue`  remain unchanged.

![](https://cdn-media-1.freecodecamp.org/images/lW3CtoXJ1gxpUS5SZM3zh3zmqSB-ksM6E0vr)

Fourth, the user clicks the equals key. Right after they click equals, but before the calculation, we set  `secondValue`  as  `displayedNum`

![](https://cdn-media-1.freecodecamp.org/images/yeQCYcu0ecbNbJlHa9aqEZopHj-FyTqXuRmw)

Fifth, the calculator calculates the result of  `5 - 1`  and gives  `4`. The result gets updated to the display.  `firstValue`  and  `operator`  get carried forward to the next calculation since we did not update them.

![](https://cdn-media-1.freecodecamp.org/images/YOsfq7AWCs0YbABkiebax-oaQVGc5tWsNyXJ)

Sixth, when the user hits equals again, we set  `secondValue`  to  `displayedNum`  before the calculation.

![](https://cdn-media-1.freecodecamp.org/images/BF7tBEUHJN4gnIwQqUTq9ctHIUIVcYM026Ro)

You can tell what’s wrong here.

Instead of  `secondValue`, we want the set  `firstValue`  to the displayed number.

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

We also want to carry forward the previous  `secondValue`  into the new calculation. For  `secondValue`  to persist to the next calculation, we need to store it in another custom attribute. Let’s call this custom attribute  `modValue`  (stands for modifier value).

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

If the  `previousKeyType`  is  `calculate`, we know we can use  `calculator.dataset.modValue`  as  `secondValue`. Once we know this, we can perform the calculation.

```js
if (firstValue) {
  if (previousKeyType === 'calculate') {
    firstValue = displayedNum
    secondValue = calculator.dataset.modValue
  }

```

With that, we have the correct calculation when the equals key is clicked consecutively.

![](https://cdn-media-1.freecodecamp.org/images/sjYX-ImohfhbFFbw1-FqmKagBvfFQKm0PzAu)

### Back to the equals key

Fourth, if Tim hits a decimal key or a number key after the calculator key, the display should be replaced with  `0.`  or the new number respectively.

Here, instead of just checking if the  `previousKeyType`  is  `operator`, we also need to check if it’s  `calculate`.

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

Fifth, if Tim hits an operator key right after the equals key, the calculator should  **not**  calculate.

![](https://cdn-media-1.freecodecamp.org/images/uuifuJ41Oo86NXMsPj44RSQf7ExULROc2GaI)

To do this, we check if the  `previousKeyType`  is  `calculate`  before performing calculations with operator keys.

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

1.  All Clear (denoted by  `AC`) clears everything and resets the calculator to its initial state.
2.  Clear entry (denoted by  `CE`) clears the current entry. It keeps previous numbers in memory.

When the calculator is in its default state,  `AC`  should be shown.

![](https://cdn-media-1.freecodecamp.org/images/22fj2VLJJ1SPexybqdWIqPRkj9JkrlI3AAYl)

First, if Tim hits a key (any key except clear),  `AC`  should be changed to  `CE`.

![](https://cdn-media-1.freecodecamp.org/images/Hs9tjp3JQIYOaAgh8KDnxj5QShScU0nMkDa7)

We do this by checking if the  `data-action`  is  `clear`. If it’s not  `clear`, we look for the clear button and change its  `textContent`.

```js
if (action !== 'clear') {
  const clearButton = calculator.querySelector('[data-action=clear]')
  clearButton.textContent = 'CE'
}
```

Second, if Tim hits  `CE`, the display should read 0. At the same time,  `CE`  should be reverted to  `AC`  so Tim can reset the calculator to its initial state.\*\*

![](https://cdn-media-1.freecodecamp.org/images/Dv6SFw5LY8wB0WqTFQBe46-QoraBiq8TvpdY)

```js
if (action === 'clear') {
  display.textContent = 0
  key.textContent = 'AC'
  calculator.dataset.previousKeyType = 'clear'
}
```

Third, if Tim hits  `AC`, reset the calculator to its initial state.

To reset the calculator to its initial state, we need to clear all custom attributes we’ve set.

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

That’s it — for the edge cases portion, anyway!

You can grab the source code for the edge cases part through  [this link][7]  (scroll down and enter your email address in the box, and I’ll send the source codes right to your mailbox).

At this point, the code we created together is quite confusing. You’ll probably get lost if you try to read the code on your own. Let’s refactor it to make it cleaner.

### Refactoring the code

When you refactor, you’ll often start with the most obvious improvements. In this case, let’s start with  `calculate`.

Before continuing on, make sure you know these JavaScript practices/features. We’ll use them in the refactor.

1.  [Early returns][8]
2.  [Ternary operators][9]
3.  [Pure functions][10]
4.  [ES6 Destructuring][11]

With that, let’s begin!

### Refactoring the calculate function

Here’s what we have so far.

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

You learned that we should reduce reassignments as much as possible. Here, we can remove assignments if we return the result of the calculation within the  `if`  and  `else if`  statements:

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

Since we return all values, we can use  **early returns**. If we do so, there’s no need for any  `else if`  conditions.

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

And since we have one statement per  `if`  condition, we can remove the brackets. (Note: some developers swear by curly brackets, though). Here's what the code would look like:

```js
const calculate = (n1, operator, n2) => {
  if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
  if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
  if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
  if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
}
```

Finally, we called  `parseFloat`  eight times in the function. We can simplify it by creating two variables to contain float values:

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

We’re done with  `calculate`  now. Don't you think it's easier to read compared to before?

### Refactoring the event listener

The code we created for the event listener is huge. Here’s what we have at the moment:

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

How do you begin refactoring this piece of code? If you don’t know any programming best practices, you may be tempted to refactor by splitting up each kind of action into a smaller function:

```js
// Don't do this!
const handleNumberKeys = (/* ... /) => {/ ... /}
const handleOperatorKeys = (/ ... /) => {/ ... /}
const handleDecimalKey = (/ ... /) => {/ ... /}
const handleClearKey = (/ ... /) => {/ ... /}
const handleCalculateKey = (/ ... /) => {/ ... /}
```

_Don’t do this. It doesn’t help, because you’re merely splitting up blocks of code. When you do so, the function gets harder to read._

_A better way is to split the code into pure and impure functions. If you do so, you’ll get code that looks like this:_

_`keys.addEventListener('click', e => {
  // Pure function
  const resultString = createResultString(/`_ `... */)` 

 `// Impure stuff
  display.textContent = resultString
  updateCalculatorState(/* ... */)
})`

Here,  `createResultString`  is a pure function that returns what needs to be displayed on the calculator.  `updateCalculatorState`  is an impure function that changes the calculator's visual appearance and custom attributes.

### Making createResultString

As mentioned before,  `createResultString`  should return the value that needs to be displayed on the calculator.  
You can get these values through parts of the code that says  `display.textContent = 'some value`.

```js
display.textContent = 'some value'
```

Instead of  `display.textContent = 'some value'`, we want to return each value so we can use it later.

```js
// replace the above with this
return 'some value'
```

Let’s go through this together, step by step, starting with number keys.

### Making the result string for number keys

Here’s the code we have for number keys:

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

The first step is to copy parts that say  `display.textContent = 'some value'`  into  `createResultString`. When you do this, make sure you change  `display.textContent =`  into  `return`.

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

Next, we can convert the  `if/else`  statement to a ternary operator:

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

When you refactor, remember to note down a list of variables you need. We’ll come back to the list later.

```js
const createResultString = () => {
  // Variables required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action

```

### Making the result string for the decimal key

Here’s the code we have for the decimal key:

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

As before, we want to move anything that changes  `display.textContent`into  `createResultString`.

```js
const createResultString = () => {
  // ...

```

Since we want to return all values, we can convert  `else if`  statements into early returns.

```js
const createResultString = () => {
  // ...

```

A common mistake here is to forget to return the currently displayed number when neither condition is matched. We need this because we will replace the  `display.textContent`  with the value returned from  `createResultString`. If we missed it,  `createResultString`  will return  `undefined`, which is not what we desire.

```js
const createResultString = () => {
  // ...

```

As always, take note of the variables that are required. At this point, the required variables remain the same as before:

```js
const createResultString = () => {
  // Variables required are:
  // 1. keyContent
  // 2. displayedNum
  // 3. previousKeyType
  // 4. action
}
```

### Making the result string for operator keys

Here’s the code we wrote for operator keys.

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

You know the drill by now: we want to move everything that changes  `display.textContent`  into  `createResultString`. Here's what needs to be moved:

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

Remember,  `createResultString`  needs to return the value to be displayed on the calculator. If the  `if`  condition did not match, we still want to return the displayed number.

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

We can then refactor the  `if/else`  statement into a ternary operator:

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

If you look closely, you’ll realize that there’s no need to store a  `secondValue`variable. We can use  `displayedNum`  directly in the  `calculate`  function.

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

Finally, take note of the variables and properties required. This time, we need  `calculator.dataset.firstValue`  and  `calculator.dataset.operator`.

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

### Making the result string for the clear key

We wrote the following code to handle the  `clear`  key.

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

As above, want to move everything that changes  `display.textContent`into  `createResultString`.

```js
const createResultString = () => {
  // ...
  if (action === 'clear') return 0
}
```

### Making the result string for the equals key

Here’s the code we wrote for the equals key:

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

```js
if (action === 'calculate') {
  let firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  let secondValue = displayedNum

```

When copying the code into  `createResultString`, make sure you return values for every possible scenario:

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

Next, we want to reduce reassignments. We can do so by passing in the correct values into  `calculate`  through a ternary operator.

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

You can further simplify the above code with another ternary operator if you feel comfortable with it:

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

At this point, we want to take note of the properties and variables required again:

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

### Passing in necessary variables

We need seven properties/variables in  `createResultString`:

1.  `keyContent`
2.  `displayedNum`
3.  `previousKeyType`
4.  `action`
5.  `firstValue`
6.  `modValue`
7.  `operator`

We can get  `keyContent`  and  `action`  from  `key`. We can also get  `firstValue`,  `modValue`,  `operator`  and  `previousKeyType`  from  `calculator.dataset`.

That means the  `createResultString`  function needs three variables—`key`,  `displayedNum`  and  `calculator.dataset`. Since  `calculator.dataset`represents the state of the calculator, let's use a variable called  `state`instead.

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

Feel free to destructure variables if you desire:

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

### Consistency within if statements

In  `createResultString`, we used the following conditions to test for the type of keys that were clicked:

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

_They’re not consistent, so they’re hard to read. If possible, we want to make them consistent so we can write something like this:_

_`if (keyType === 'number') { /`_ `... _/ }
if (keyType === 'decimal') { /_ ... _/ }
if (keyType === 'operator') { /_ ... _/}
if (keyType === 'clear') { /_ ... _/ }
if (keyType === 'calculate') { /_ ... */ }`

To do so, we can create a function called  `getKeyType`. This function should return the type of key that was clicked.

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

Here’s how you’d use the function:

```js
const createResultString = (key, displayedNum, state) => {
  const keyType = getKeyType(key)

```

We’re done with  `createResultString`. Let's move on to  `updateCalculatorState`.

### Making updateCalculatorState

`updateCalculatorState`  is a function that changes the calculator's visual appearance and custom attributes.

As with  `createResultString`, we need to check the type of key that was clicked. Here, we can reuse  `getKeyType`.

```js
const updateCalculatorState = (key) => {
  const keyType = getKeyType(key)

```

If you look at the leftover code, you may notice we change  `data-previous-key-type`  for every type of key. Here's what the code looks like:

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

This is redundant because we already know the key type with  `getKeyType`. We can refactor the above to:

```js
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType

```

### Making  `updateCalculatorState`  for operator keys

Visually, we need to make sure all keys release their depressed state. Here, we can copy and paste the code we had before:

```js
const updateCalculatorState = (key, calculator) => {
  const keyType = getKeyType(key)
  calculator.dataset.previousKeyType = keyType

```

Here’s what’s left from what we’ve written for operator keys, after moving pieces related to  `display.textContent`  into  `createResultString`.

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

You may notice that we can shorten the code with a ternary operator:

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

As before, take note of the variables and properties you need. Here, we need  `calculatedValue`  and  `displayedNum`.

```js
const updateCalculatorState = (key, calculator) => {
  // Variables and properties needed
  // 1. key
  // 2. calculator
  // 3. calculatedValue
  // 4. displayedNum
}
```

### Making  `updateCalculatorState`  for the clear key

Here’s the leftover code for the clear key:

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

There’s nothing much we can refactor here. Feel free to copy/paste everything into  `updateCalculatorState`.

### Making  `updateCalculatorState`  for the equals key

Here’s the code we wrote for the equals key:

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

Here’s what we’re left with if we remove everything that concerns  `display.textContent`.

```js
if (action === 'calculate') {
  let secondValue = displayedNum
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      secondValue = calculator.dataset.modValue
    }
  }

```

We can refactor this into the following:

```js
if (keyType === 'calculate') {
  calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
    ? modValue
    : displayedNum
}
```

As always, take note of the properties and variables used:

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

### Passing in necessary variables

We know we need five variables/properties for  `updateCalculatorState`:

1.  `key`
2.  `calculator`
3.  `calculatedValue`
4.  `displayedNum`
5.  `modValue`

Since  `modValue`  can be retrieved from  `calculator.dataset`, we only need to pass in four values:

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

### Refactoring updateCalculatorState again

We changed three kinds of values in  `updateCalculatorState`:

1.  `calculator.dataset`
2.  The class for pressing/depressing operators
3.  `AC`  vs  `CE`  text

If you want to make it cleaner, you can split (2) and (3) into another function —  `updateVisualState`. Here's what  `updateVisualState`  can look like:

```js
const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'AC') {
    key.textContent = 'AC'
  }

```

### Wrapping up

The code become much cleaner after the refactor. If you look into the event listener, you’ll know what each function does. Here’s what the event listener looks like at the end:

```js
keys.addEventListener('click', e => {
  if (e.target.matches('button')) return
  const key = e.target
  const displayedNum = display.textContent
  // Pure functions
  const resultString = createResultString(key, displayedNum, calculator.dataset)

```

You can grab the source code for the refactor part through  [this link][12]  (scroll down and enter your email address in the box, and I’ll send the source codes right to your mailbox).

I hope you enjoyed this article. If you did, you might love  [Learn JavaScript][13]—a course where I show you how to build 20 components, step by step, like how we built this calculator today.

Note: we can improve the calculator further by adding keyboard support and accessibility features like Live regions. Want to find out how? Go check out Learn JavaScript :)

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
