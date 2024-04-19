---
title: The JavaScript DOM Manipulation Handbook
author: Benjamin Semah
authorURL: https://www.freecodecamp.org/news/author/benjamin-semah/
originalURL: https://www.freecodecamp.org/news/the-javascript-dom-manipulation-handbook/
translator: "Luoming"
reviewer: ""
---

January 10, 2024 / [#JavaScript][1]

<!-- more -->

# JavaScript DOM 操作手册

![Benjamin Semah](https://www.freecodecamp.org/news/content/images/size/w60/2022/09/Benjamin-Semah.jpg)

[Benjamin Semah][2]

  ![The JavaScript DOM Manipulation Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2024/01/The-JavaScript-DOM-Manipulation-Handbook-Cover.png)

DOM 操作是在学习 JavaScript 中最令人兴奋的主题之一。这是因为 JavaScript 的主要用途之一就是使网页具有交互性，而 DOM 在这里起到了重要作用。

DOM 是一个非常强大的工具，允许你与网页上的元素进行交互和操作。本手册将帮助你理解并自信地使用 DOM。

你将从 DOM 是什么以及 DOM 可以用来做什么开始学习，然后我们将深入学习如何选择、修改和为 DOM 元素设置样式，你也将学习如何创建一个新元素并添加到你的网页上。

手册也包含了像是如何遍历 DOM、DOM 事件是什么，以及一些项目实践的想法等主题。

让我们开始吧！

## Table of Contents

-   [DOM 是什么？][3]
    -   [DOM 可以用来做什么][4]
-   [如何选择 DOM 元素][5]
    -   [getElementById][6]
    -   [getElementsByClassName][7]
    -   [getElementsByTagName][8]
    -   [querySelector][9]
    -   [querySelectorAll][10]
-   [如何更改 DOM 元素的内容][11]
    -   [`innerHTML` 属性][12]
    -   [使用 `innerHTML` 的安全风险][13]
    -   [`innerText` 和 `textContent` 属性][14]
-   [如何处理 DOM 元素的属性][15]
    -   [`getAttribute()` 方法][16]
    -   [`setAttribute()` 方法][17]
    -   [`removeAttribute()` 方法][18]
    -   [`hasAttribute()` 方法][19]
-   [如何更改 DOM 的样式][20]
    -   [使用 `.style` 属性设置样式][21]
    -   [使用 `class` 设置样式][22]
-   [如何遍历 DOM][23]
    -   [节点和元素之间的不同][24]
    -   [使用 `parentNode` 还是 `parentElement` 选择父级][25]
    -   [使用 `childNodes` 还是 `children` 选择子级][26]
    -   [选择第一个或是最后一个元素/节点][27]
    -   [在 DOM 中选择兄弟节点][28]
-   [DOM 事件和事件监听器][29]
    -   [事件监听器与事件处理函数][30]
    -   [JavaScript 中三种注册事件的方法][31]
    -   [实践挑战][32]
    -   [实践挑战的解决方案][33]
    -   [事件对象][34]
    -   [事件类型][35]
-   [JavaScript 的事件流][36]
    -   [事件冒泡][37]
    -   [事件捕获][38]
    -   [`stopPropagation()` 停止传播事件][39]
-   [JavaScript DOM 项目][40]
-   [总结][41]

## DOM 是什么？

DOM 全称是文档对象模型（Document Object Model），但是这是什么意思呢？我们分开来看看。

**文档**指的是你在浏览器上所看到的网页。具体来说，HTML 文档处理页面内容的结构，包括组成页面的文本、图片、链接和其他的元素。

**对象**指的是像 img, h1, p 这样的元素被视为对象。每一个对象都有属性（类似 id、 class、style）和方法，利用这些属性和方法你就可以操作这些元素。

**模型**指的是它是 HTML 文档的一种表示或副本，以分层树的形式呈现。这颗树包括了所有元素，并且有他们之间的父子关系。

浏览器会确保 DOM 与 HTML 文档同步，使他们总是保持一致。因此，如果 HTML 中的某些内容发生变化，DOM 也会相应变化，反之亦然。

![JavaScript--2-](https://www.freecodecamp.org/news/content/images/2024/01/JavaScript--2-.png)

HTML DOM 树

在树的顶部是 Document 对象，它只有一个子元素 —— `html` 元素。`html` 元素也被称为根元素，它有 `head` 和 `body` 两个子元素，而每个子元素也都有它们自己的子元素。

元素之间的父子关系使你能够遍历、移动和选择它们。稍后会详细介绍。

### DOM 可以用来做什么

DOM 操作允许开发者与网页的结构、样式、内容交互。下面是一些你可以通过 DOM 用来做的事情：

- 更改或移除 DOM 中存在的元素
- 创建并添加新元素到网页
- 更改一些元素的样式
- 给元素添加事件监听器让它们可交互

## 如何选择 DOM 元素

要对 DOM 元素执行操作，首先必须选择或访问相应的元素。在这一节，你将学到一些常见的方法去选择 DOM 元素。

让我们使用下面通讯录片段来展示各种 DOM 选择器方法如何工作。

```HTML
  <h1 id="page-title">Phonebook</h1>
  
  <p class="family">Marie</p>
  <p class="family">Jose</p>
  <p class="work">Anne</p>
  <p class="work">Joan</p>
```

一个标题元素和四个段落元素的简单代码片段

这段代码包括了一个 id 为 `page-title` 的 `h1` 标题和四个 `p` 段落，前两个段落都具有 `family` 类，而后两个具有 `work` 类。


### 1\. getElementById

你可以使用这个方法去选择带有 id 属性的元素，id 是独一无二的标识符。例如，当一个 `h1` 元素有值为 `page-title` 的 id，页面上的其他元素不应该有相同值作为 id。

这意味着每当你使用 `getElementById()` 方法，你将只会从 DOM 中选择一个元素。

我们来看例子：

这个 `h1` 有值为 `page-title` 的 id，以下是使用 `getElementById()` 方法选择它的办法：

```javascript
const titleElement = document.getElementById("page-title")
console.log(titleElement)
```

这里例子选择了 `h1` 元素并赋值给了变量 `titleElement`。

![Screenshot-2023-12-02-at-9.01.01-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-9.01.01-AM.png)

使用 `getElementById()` 方法访问元素的结果

如果 DOM 中没有给定 id 的元素，则 `getElementById()` 将返回 `null`。

### 2\. getElementsByClassName

你可以使用这个方法选择超过一个对象。这个方法获取 class 属性的值作为参数在 DOM 中选择给定 class 的所有元素。与 id 不一样，你可以在不同的 HTML 元素上给一个相同的 class。

看这个例子：

```javascript
const famContacts = document.getElementsByClassName("family")
console.log(famContacts)
```

这返回了给定 class 的所有元素的 HTML 集合，控制台上如下所示：

![Screenshot-2023-12-01-at-10.35.51-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-01-at-10.35.51-AM.png)

`getElementsByClassName()` 方法返回一个 HTML 集合

注意：HTML 集合看起来像是数组，但实际上不是。你可以像数组一样用索引的方式访问元素，但是不能使用像是 `map`、`filter` 或是 `forEach` 等数组方法。

```javascript
console.log(famContacts[0]) 
```

这样会获得 HTML 集合中的第一个元素，也就是名字为 Marie 的段落。

![Screenshot-2023-12-02-at-9.03.35-AM-1](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-9.03.35-AM-1.png)

使用索引访问 HTML 集合中的元素

但是如果你想通过循环遍历 `famContacts` HTML 集合中的所有元素呢？你首先需要将 HTML 集合转换成数组，然后你就可以任意使用数组方法了。

一个简单的办法从 HTML 集合创建数组就是使用展开语法，像是这样：

```javascript
let famContactsArray = [...famContacts]

famContactsArray.forEach(element => console.log(element))
```

![Screenshot-2023-12-02-at-9.06.48-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-9.06.48-AM.png)

打印 HTML 集合中所有元素

使用 `forEach` 方法，你可以访问 `famContactsArray` 中每一个子项。如果你没有从 HTML 集合创建一个数组，而试着将数组方法直接用于它浏览器将会抛出一个错误。

![Screenshot-2023-12-01-at-11.57.27-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-01-at-11.57.27-AM.png)

当你将数组方法直接用于 HTML 集合的错误信息

### 3\. getElementsByTagName

这个方法将通过标签名来选择元素。例如：`getElementByTagName('p')` 将选择页面中所有 `p` 标签。

像是 `getElementsByClassName()`，这个方法也返回一个被选择元素的 HTML 集合。

看这个例子:

```javascript
const allContacts = document.getElementsByTagName('p')
console.log(allContacts)
```

![Screenshot-2023-12-02-at-8.39.36-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-8.39.36-AM.png)

一个包含所有 `p` 标签的 HTML 集合

你可以从 HTML 集合创建一个数组，然后使用任意数组方法。

```javascript
let allContactsArray = [...allContacts]

allContactsArray.map(element => console.log(element))
```

![Screenshot-2023-12-02-at-9.08.26-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-9.08.26-AM.png)

在 `allContactsArray` 使用 `map()` 方法


> 译者注：由于 `map()` 创建一个新数组，在没有使用返回的数组的情况下调用它是不恰当的；应该使用 `forEach` 或 `for...of` 作为代替。详见 [`Array.prototype.map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#%E6%8F%8F%E8%BF%B0)。

### 4\. querySelector

你可以使用这个方法在 DOM 中选择任意的 HTML 元素，它仅返回一个元素：第一个匹配选择器的元素。

`querySelector()` 用法类似 CSS 选择器。

举个例子，当你想要选择一个具有 id 的元素时，你会怎么做？用 `#id`。那当你想要选择具有 class 的元素呢？你会用 `.class`。

看这个例子:

```javascript
const firstWorkContact = document.querySelector('.work')
console.log(firstWorkContact)
```

![Screenshot-2023-12-02-at-11.38.12-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-11.38.12-AM.png)

使用 `querySelector()` 的例子

上边这个例子只获取到了一个具有 `work` 类的元素，其他的被忽略了。

让我们再看一个像是 CSS 选择器一样使用 `querySelector()` 的例子。下方 `div` 元素包含了 4 个 `button`。

```HTML
<div>
    <button>First button</button>
    <button>Second button</button>
    <button>Third button</button>
    <button>Fourth button</button>
</div>
```

假设你想要选择第三个按钮，你可以像下面那样使用 `querySelector()`。代码中使用了 CSS `nth-child` 选择器去获取 `div` 中的第三个 `button`。

```javascript
const thirdBtn = document.querySelector('div button:nth-child(3)')
console.log(thirdBtn)
```

![Screenshot-2023-12-02-at-2.42.48-PM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-2.42.48-PM.png)

使用 `querySelector()` 获取第三个按钮的结果

但如果你想选择所有四个按钮而不只是第一个呢？你应该使用 `querySelectorAll()` 代替。

### 5\. querySelectorAll

类似 `querySelector()`，`querySelectorAll` 也是使用 CSS 选择器去选择 HTML 元素。不同的是它返回匹配选择器的所有元素，而不仅仅是第一个。

让我们使用 `querySelectorAll()` 选择上一个示例中所有的按钮。

```javascript
const allBtns = document.querySelectorAll('button')
console.log(allBtns)
```

![Screenshot-2023-12-02-at-3.04.18-PM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-3.04.18-PM.png)

`querySelectorAll()` 返回一个被选择元素组成的 NodeList。

注意：`querySelectorAll()` 返回一个 `NodeList`。`NodeList` 与 HTML 集合有点不同，你不需要转换成数组就可以使用 `forEach()` 方法。

```javascript
allBtns.forEach(btn => console.log(btn))
```

![Screenshot-2023-12-02-at-3.00.19-PM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-02-at-3.00.19-PM.png)

在 NodeList 使用 `forEach()` 方法

但是你仍然不能在 NodeList 使用 `map`、`filter` 等这类数组方法，如果你需要的话应该创建一个数组。

你可以阅读这篇[freeCodeCamp关于 HTML 集合和 NodeList 之间区别的文章][42]来了解更多。

## 如何更改 DOM 元素的内容

目前为止，你已经学到了几种不同的方法去选择 DOM 元素，但这仅仅是开始。现在，让我们来看看如何操作 DOM 去更改网页的内容。

你需要做的第一件事就是选择元素，你可以用上一小节学到的任一方法。

在选择元素后，你可以使用这几种方法去添加或更新内容。

### `innerHTML` 属性

这是一种可以让你读取、更新元素的内容或结构的方法。让我们看看应该如何使用 `innerHTML` 方法。

下面是一个包含三个 `p` 标签的代码片段，每个 `p` 标签都有一个 id。

```HTML
  <p id="topic">JS array methods</p>
  <p id="first-method">map</p>
  <p id="second-method">filter</p>
```

![Screenshot-2023-12-03-at-8.17.55-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-8.17.55-AM.png)

三个 `p` 标签的代码片段

你可以使用 `innerHTML` 获取任一段落的内容。举个例子，我们来获取第一个段落的内容。

```javascript
const topicElement = document.querySelector('#topic')
console.log(topicElement.innerHTML)
```

![Screenshot-2023-12-03-at-8.10.36-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-8.10.36-AM.png)

`topicElement` 的 `innerHTML` 的输出

现在，假设你想将 topic 内容从“JS array methods”更改为“JavaScript array methods”。你可以通过将新文本赋值给元素的 innerHTML 来实现。

```javascript
const topicElement = document.querySelector('#topic')
topicElement.innerHTML = "JavaScript array methods"
```

![Screenshot-2023-12-03-at-8.16.59-AM-1](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-8.16.59-AM-1.png)

topic 内容从 “JS Array methods” 更新到 “JavaScript array methods”

使用 `innerHTML`，你可以更改的不只是内容，你也可以更改元素的 HTML 结构。例如，如果你想让 “JavaScript” 加粗，你可以这样做：

```javascript
topicElement.innerHTML = "<b>JavaScript</b> array methods"
```

![Screenshot-2023-12-03-at-8.27.45-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-8.27.45-AM.png)

“JavaScript” 被使用 `innerHTML` 加粗了

### 使用 `innerHTML` 的安全风险

使用 `innerHTML` 会带来潜在的安全风险，例如：[XSS（Cross-site scripting，跨站脚本）攻击][43]。

如果插入的内容来自用户输入或任何不受信任的来源，请确保在使用 `innerHTML` 前做好校验或清洗，以防止 XSS 攻击。你可以使用类似 [DOMPurify][44] 的库来实现这一点。

此外，如果你处理纯文本内容，可以考虑使用 `innerText` 和 `textContent`。

### `innerText` 和 `textContent` 属性

`innerText` 和 `textContent` 忽略 HTML 标签，会把他们当作字符串的一部分。你可以使用这两种方法去读取或更新 DOM 元素的文本。

这两种方法的关键不同在于他们如何对待文本，使用 `innerText` 返回的文本会像是在屏幕一样，使用 `textContent` 返回的文本像是在标签里一样，来看下面的例子。

```HTML
<p>Key =<span style="display: none;">     ABC123<span></p>
```

![Screenshot-2023-12-03-at-10.03.41-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-10.03.41-AM.png)

一个 `p` 标签中有一些文本和一个隐藏的 `span` 标签

这个例子中包括了一个 `p` 标签，`p` 标签中 `span` 标签包含了 Key 的值，因为 `span` 的内联样式，所以 Key 值不显示在屏幕上。

现在，让我们选择这个 `p` 标签，然后打印 `innerText`、`textContent` 这两个值，看看有什么不同。

```javascript
const paragraph = document.querySelector('p');

console.log("innerText: ", paragraph.innerText)
console.log("textContent: ", paragraph.textContent)
```

![Screenshot-2023-12-03-at-10.06.11-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-10.06.11-AM.png)

`innerText` 和 `textContent` 的打印结果

请注意 `innerText` 返回的文本是在屏幕上显示的样子（不包含使用 CSS 隐藏的 Key 值），`textContent` 返回的文本包括了隐藏的元素和空格。

让我们再看另一个添加文本到元素的例子。下面的代码包括两个 `p` 标签，每个 `p` 标签都有一个 `b` 标签和一个空的 `span` 标签，以及它们之间有一个 `hr` 标签。

```HTML
  <p>
    <b>innerText Example</b>
    <span id="inner-text"></span>
  </p>
  
  <hr>	
 
  <p>
    <b>textContent Example</b>
    <span id="textContent"></span>
  </p>
```

![Screenshot-2023-12-03-at-10.48.11-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-10.48.11-AM.png)

演示 `innerText` 和 `textContent` 属性的示例

现在，让我们选择两个 `span` 元素，并在其中添加相同的文本。这将帮助你更好地理解 `innerText` 和 `textContent` 之间的区别。

```javascript
const example1 = document.querySelector('#inner-text');
const example2 = document.querySelector('#text-content');

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;

example1.innerText = address;
example2.textContent = address;
```

这段代码给两个示例提供了相同的变量 `address`，第一个使用了 `innerText`，第二个使用了 `textContent`。请看下面的结果：

![Screenshot-2023-12-03-at-10.46.46-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-03-at-10.46.46-AM.png)

使用 `innerText` 和 `textContent` 更新内容的结果

请注意 `innerText` 换行了，而 `textContent` 却没有。

两个方法的另一个关键不同是它们在内部循环的行为，当在一个循环中处理批量操作或频繁更新时 `innerText` 比 `textContent` 会慢一些。

看看[这篇 freeCodeCamp 文章][45]可以了解更多 `innerHTML`、`innerText` 和 `textContent` 之间的不同。

## 如何处理 DOM 元素的属性

[HTML 属性][46] 提供了有关 HTML 元素的有用信息。这些属性总是包含在元素的开始标签内，属性由一个 name 和 value 组成（但也有只出现 name 的例外情况）。

浏览器根据 HTML 结构生成 DOM 时，会将这些属性转化为 DOM 对象的动态属性。

看这个例子：

这个 HTML 中有一个按钮，按钮有一些属性：

```HTML
<button id="myBtn" type="submit">Click Here</button>
```

对于这个例子，浏览器会创建一个 `HTMLButtonElement` 对象到 DOM 中，并且这个对象的属性也互相匹配。

- `HTMLButtonElement.id` 的值是 `myBtn`
- `HTMLButtonElement.type` 的值是 `submit`

要使用 JavaScript 与这些属性进行交互和操作，可以使用诸如 `getAttribute()` 和 `setAttribute()` 之类的方法直接访问这些属性。

### `getAttribute()` 方法

顾名思义，你可以使用这个方法去获取元素上已经存在的属性。

它接受一个参数（属性名）返回属性值，如果你给的属性值在这个元素中不存在，这个方法会返回 `null`。

看这个例子：

```HTML
<img src="image.jpg" alt="An example image">
```

```javascript
const imageElement = document.querySelector('img')
console.log(imageElement.getAttribute('src'))
```

![Screenshot-2023-12-09-at-9.00.25-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-09-at-9.00.25-AM.png)

`getAttribute()` 用来获取 `src` 属性值

在上面的例子中，使用 `getAttribute()` 方法，你可以获取 `img` 标签的 `src` 属性值。

### `setAttribute()` 方法

这个方法用来设置、更改元素的属性。它接受两个参数，第一个参数是你想要更改的属性名，第二个参数是你想要设定的新值。

看这个例子：

```HTML
<img src="image.jpg" alt="An example image">
```

```javascript
const imageElement = document.querySelector('img')

console.log("BEFORE:", imageElement.getAttribute('src'))
imageElement.setAttribute('src', 'new-image.jpg')
console.log("AFTER:", imageElement.getAttribute('src'))
```

![Screenshot-2023-12-09-at-9.27.14-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-09-at-9.27.14-AM.png)

使用 `setAttribute()` 更新 `src` 属性值

这个例子先打印了 `src` 属性值，然后使用 `setAttribute()` 从 `image.jpg` 到 `new-image.jpg` 更改了值。

当你给 `setAttribute()` 传递了一个在这个元素中不存在的属性作为参数时，它将创建一个新属性。例如，你可以添加一个 height 属性给 `img` 标签：

```javascript
const imageElement = document.querySelector('img')

console.log("BEFORE:", imageElement.getAttribute('height'))
imageElement.setAttribute('height', '200')
console.log("AFTER:", imageElement.getAttribute('height'))
```

![Screenshot-2023-12-09-at-9.32.53-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-09-at-9.32.53-AM.png)

给 `img` 添加 height 属性的例子

第一个打印语句返回 `null` 是因为 height 属性不存在，但是在我们使用 `setAttribute()` 设置过后，第二个打印语句返回了 height 的正确值。

### `removeAttribute()` 方法

在前面的小节中，你学到了如何使用 `setAttribute()` 添加一个新属性。如果你想移除一个已存在的属性呢？

你可以使用 `removeAttribute()` 方法，传递一个你想要移除属性名作为参数。

看这个例子：

```HTML
  <img src="image.jpg" alt="An example image" height="200">
```

让我们使用 `removeAttribute()` 方法移除 `height` 属性从 `img` 标签上。

```javascript
const imageElement = document.querySelector('img')

console.log("BEFORE:", imageElement.getAttribute('height'))
imageElement.removeAttribute('height', '200')
console.log("AFTER:", imageElement.getAttribute('height'))
```

![Screenshot-2023-12-09-at-10.09.35-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-09-at-10.09.35-AM.png)

使用 `removeAttribute()` 的示例

在调用 `removeAttribute()` 前，我们第一次打印了 height 的属性值，是 200，但在调用 `removeAttribute()` 之后，第二次打印结果是 `null`，可以确认我们从 `img` 中移除了 height 属性。

### `hasAttribute()` 方法

处理 DOM 属性的的另一个方法是 `hasAttribute()`，你可以使用这个方法检查元素是否有指定的属性。

如果指定属性存在， 则 `hasAttribute()` 方法返回 `true`，否则返回 `false`。

看这个例子：

```html
<img src="image.jpg" alt="An example image" height="200">
```

让我们使用 `hasAttribute()` 去检查 `img` 上是否存在 `height` 和 `width` 属性。

```javascript
const imageElement = document.querySelector('img')

console.log("HEIGHT", imageElement.hasAttribute('height'))
console.log("WIDTH", imageElement.hasAttribute('width'))
```

![Screenshot-2023-12-09-at-10.20.53-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-09-at-10.20.53-AM.png)

使用 `hasAttribute()` 检查属性是否存在的示例

因为它存在这个属性，所以 height 返回了 `true`，而检查 width 时返回了 `false`，因为它不存在。

## 如何更改 DOM 的样式

在 JavaScript 中，有两种主要方法处理 DOM 元素的样式，你可以使用 `.style` 属性或者使用 `class`。每种方法都有自己的优点以及最适合的情况。

### 使用 `.style` 属性设置样式

如果你想对某个元素做指定更改的话，你可以使用 `.style` 属性。`.style` 属性允许你采用[内联][47]的形式直接为元素设置样式，这意味着他会覆盖你在 CSS 中的样式。

使用 `.style` 属性，你可以访问全部的 CSS 属性，看下面的演示：

```html
  <h1>Styling elements with JavaScript</h1>
```

```javascript
const header = document.querySelector('h1')
console.log(header.style)
```

![ezgif.com-video-to-gif--8-](https://www.freecodecamp.org/news/content/images/2023/12/ezgif.com-video-to-gif--8-.gif)

打印到控制台上的 `h1` 元素的样式声明

`console.log()` 打印了该元素的 CSS 样式声明以及所有的 CSS 属性。

现在我们看一个如何使用 `.style` 属性的例子。

```html
  <h1>I love JavaScript</h1>
```

![Screenshot-2023-12-11-at-7.56.41-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-7.56.41-AM.png)

一个 `h1` 标题

这里有一个 `h1` 标题，现在让我们使用 `.style` 属性给他增加一点样式。

```javascript
const paragraph = document.querySelector('h1')

paragraph.style.color = 'white'
paragraph.style.backgroundColor = 'green'
```

![Screenshot-2023-12-11-at-7.59.15-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-7.59.15-AM.png)

使用 `.style` 属性给 `h1` 元素增加背景色

注意：在 JavaScript 中，如果 CSS 属性名包含两个或更多的单词，你不能使用“-”连字符。例如，在 CSS 中你可以写 `background-color`，但是在 JavaScript 代码中，你必须使用小驼峰命名，所以 `background-color` 变成了 `backgroundColor`。

你也可以通过设定属性值为空字符串删除一个元素的样式。

```javascript
element.style.propertyName = ""
```

### 使用 class 设置样式

通过 class，你可以一次创建样式，并将其应用于不同的元素。这有助于提高代码的可维护性。

#### `className` 属性

`className` 属性展示了 DOM 元素的 class 属性。并且你可以使用它去获取或设置 class 的属性值。

看这个例子：

```html
<p class="food rice-dish">Jollof rice</p>
```

```javascript
const jollofParagraph = document.querySelector('p')

console.log(jollofParagraph.className)

jollofParagraph.className = 'favorite'

console.log(jollofParagraph.className)
```

![Screenshot-2023-12-11-at-9.13.37-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-9.13.37-AM.png)

使用 `className` 属性更改 class 值的例子

`className` 可以读取或替换最近的 class，在上面的例子中，第一次打印是 class 的初始值，在更新 `className` 属性后，第二次打印则是新值。

这里还有一个更灵活的属性，举个例子，如果你想添加一个其他 class 而不是使用新的 class 替换老的 class 呢？这就是 `classList` 属性的作用所在。

#### `classList` 属性

使用 `classList` 属性，你可以添加或者移除 class。你可以切换 class、使用新值替换 class，甚至可以检查 class 中是否包含某个值。
With the `classList` property, you can add and remove classes. You can also toggle classes, replace existing class values with new ones, and even check if the class contains a specific value.

看这个例子：

```html
<p class="food">Jollof rice</p>
```

```javascript
const jollofParagraph = document.querySelector('p')
console.log(jollofParagraph.classList)
```

![Screenshot-2023-12-11-at-9.43.30-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-9.43.30-AM.png)

`classList` 中只有一个值

#### 使用 `classList.add()` 添加 class

```javascript
jollofParagraph.classList.add('fav', 'tasty')

console.log(jollofParagraph.classList)
```

![Screenshot-2023-12-11-at-9.46.14-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-9.46.14-AM.png)

使用 `classList.add()` 添加新 class 的例子

这段代码添加了 `fav` 和 `tasty` 两个新 class 到 class 列表。

#### 使用 `classList.remove()` 移除 class

```javascript
jollofParagraph.classList.remove('tasty')

console.log(jollofParagraph.classList)
```

![Screenshot-2023-12-11-at-9.50.26-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-9.50.26-AM.png)

使用 `classList.remove()` 移除 class 的例子

这段代码从 class 列表中移除了 `tasty` class。

#### 使用 `classList.replace()` 替换 class

```javascript
jollofParagraph.classList.replace('fav', 'favorite')

console.log(jollofParagraph.classList)
```

这段代码使用 `favorite` 替换了 `fav`

![Screenshot-2023-12-11-at-9.53.30-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-9.53.30-AM.png)

使用 `classList.replace()` 替换 class 的例子

#### 使用 `classList.contains()` 检查 class 是否存在

```javascript
const isFavorite = jollofParagraph.classList.contains('favorite')
const isSoup = jollofParagraph.classList.contains('soup')

console.log("Contains favorite: ", isFavorite)
console.log("Contains soup: ", isSoup)
```

![Screenshot-2023-12-11-at-10.09.53-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-10.09.53-AM.png)

使用 `classList.contains()` 检查 class 是否存在的例子

这段代码会检查传递给它的 class 是否包含在 class 列表中。

如果包含在 class 列表中（例如 `favorite`），则返回 `true`；如果不包含在 class 列表中（例如 `soup`），则返回 `false`。

#### 使用 `classList.toggle()` 切换 class

当你使用 `toggle()` 时，它会首先检查该 class 是否存在。如果存在，它将删除该 class 。如果不存在，则会添加。

```javascript
jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)

jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)

jollofParagraph.classList.toggle('favorite')
console.log(jollofParagraph.classList)
```

![Screenshot-2023-12-11-at-10.19.18-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-11-at-10.19.18-AM.png)

使用 `classList.toggle()` 切换 class 的例子

第一次切换，`favorite` 存在 class 列表中，所以移除。

第二次切换，`favorite` 不存在 class 列表中，所以添加。

第三次切换，现在 `favorite` 存在 class 列表中了，所以从 class 列表中移除。

`toggle()` 会根据 class 的存在与否，不断从 class 列表中添加或删除该值。

## 如何遍历 DOM

遍历 DOM 意味着在 HTML 文档中的不同元素或节点间移动，包括选择和访问父级、子级或者是兄弟元素（或是节点）。你可以这样做去操作文档结构或是获取信息。

但在我们进入这一小节前，你需要理解节点和元素之间的不同。

### 节点和元素之间的不同

节点是 DOM 的构件，它们代表着 HTML 结构中的不同组件。

元素是一种特定的节点，但并非所有节点都是元素。代码中一些像是元素属性、文本内容或者是注释都是节点，但它们不是元素。

元素是一种特定类型的节点，它定义了文档内容的结构，可以把元素当作你在用的 HTML 标签，例如 `<div>`、`<p>` 和 `<ul>`。每个元素都可以由属性、文本内容和其他嵌套元素组成。

### 使用 `parentNode` 还是 `parentElement` 选择父级

当要选择 DOM 元素的父级时，你可以使用 `parentNode` 或者 `parentElement`，它们都可以获取到你给的元素的父级。

从实用角度看，元素或节点的父级总是一个元素。所以，无论你使用哪一个，你总能获得选择元素的正确父级。

让我们看一个选择元素父级的例子：

```html
  <div class="container">
    <p class="full-text">
        <i id="italics">Some italicized text</i>
    </p>
  </div>
```

```javascript
const italicizedText = document.getElementById('italics')

console.log(italicizedText.parentNode)
console.log(italicizedText.parentNode.parentNode)
```

首先，选择一个元素，然后，调用 `parentNode` 这个属性去获取父级。你也可以像是第二个打印语句一样链式调用 `parentNode` 属性去获取父级的父级。

下面的截图展示了两个打印语句的输出。

![Screenshot-2023-12-12-at-9.44.45-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-9.44.45-AM.png)

选择元素父级的示例

### 使用 `childNodes` 还是 `children` 选择子级

你可以使用 `.childNodes` 和 `.children` 属性去选择元素的内容，但它们有些不同。

**`childNodes`：** 返回一个被选择元素的所有子节点的 NodeList。它包含元素和像是文本、注释或是其他非元素节点。

**`.children`：** 返回一个被选择元素的只包含子元素的 HTML 集合。它不包含像是文本、注释这样的非元素节点。

让我们通过一个例子看看它们的不同：

```html
  <div id="container">
    A text node
    <p>Some paragraph</p>
    <!-- This is a comment -->
    <span>Span Element</span>
  </div>
```

上面的代码只有两个元素，`p` 和 `span`，但是有其他节点 —— 文本节点、注释。

```javascript
const container = document.getElementById('container');

const containerChildNodes = container.childNodes;
const containerChildren = container.children;

console.log(containerChildNodes);
console.log(containerChildren);
```

![Screenshot-2023-12-12-at-10.29.23-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-10.29.23-AM.png)

使用 `childNodes` 属性的示例

`childNodes` 将返回所有的子节点（包括元素和非元素），它还将元素之间的空格作为文本节点。

这用起来可能会感到困惑，因此，除非有充分的理由，否则应坚持使用 `.children` 属性。

`children` 将只会返回子元素（`p` 和 `span`）。

![Screenshot-2023-12-12-at-10.34.08-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-10.34.08-AM.png)

使用 `children` 属性的示例

### 选择第一个或是最后一个元素/节点

如果你只需要选择第一个或是最后一个元素，你可以使用这四个属性。

-   `firstChild`: 只选择父元素的第一个子节点。
-   `lastChild`: 只选择父元素的最后一个子节点。
-   `firstElementChild`: 选择父元素的第一个子元素。
-   `lastElementChild`: 选择父元素的最后一个子元素。

让我们用上一小节中相同的例子，看看它们分别使如何工作的：

```html
  <div id="container">
    A text node
    <p>Some paragraph</p>
    <!-- This is a comment -->
    <span>Span Element</span>
  </div>
```

```javascript
const container = document.getElementById('container');

console.log("FIRST CHILD:", container.firstChild)
console.log("LAST CHILD:", container.lastChild)
console.log("FIRST ELEMENT: ", container.firstElementChild)
console.log("LAST ELEMENT:", container.lastElementChild)
```

![Screenshot-2023-12-13-at-7.43.25-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-13-at-7.43.25-AM.png)

选择第一个或是最后一个元素/节点的示例

注意 `firstChild` 返回的是第一个文本节点，但 `firstElementChild` 返回的是第一个元素 `p`。这意味着它忽略了 `p` 标签前的文本节点。

另外，请注意 `lastChild` 返回一个文本节点，尽管从标签上来看 `span` 之后似乎什么都没有。这是因为 `lastChild` 属性将 `span` 的结束标签和 `div` 元素的结束标签之间的换行符/空格视为一个节点。

这就是为什么通常来说使用 `firstElementChild` 和 `lastElementChild`会更安全。

### 在 DOM 中选择兄弟节点

你已经学到了如何选择元素的父级或子级，你也可以使用以下属性选择元素的兄弟节点。

-   `nextSibling`: 选择相同父元素的下一个节点。
-   `nextElementSibling`: 选择下一个元素忽略任何非元素节点。
-   `previousSibling`: 选择相同父元素的上一个节点。
-   `previousElementSibling`: 选择上一个元素忽略任何非元素节点。

看这个例子：

```html
  <div>
    <p id="one">First paragraph</p>
    text node
    <p id="two">Second paragraph</p>
    another text node
    <p id="three">Third paragraph</p>
    <p id="four">Fourth paragraph</p>
  </div>
```

```javascript
const paragraphTwo = document.getElementById('two')

console.log("nextSibling: ", paragraphTwo.nextSibling)
console.log("nextElementSibling: ", paragraphTwo.nextElementSibling)
console.log("previousSibling: ", paragraphTwo.previous)
console.log("previousElementSibling: ", paragraphTwo.previousElementSibling)
```

![Screenshot-2023-12-13-at-7.57.18-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-13-at-7.57.18-AM.png)

选择兄弟节点的示例

`nextSibling` 和 `previousSibling` 会选择文本节点，因为它们会考虑父节点内的所有节点。然而，`nextElementSibling` 和 `previousElementSibling` 可以只选择 `p` 标签，因为它们忽略文本这样的非元素节点。

## DOM 事件和事件监听器

DOM 事件是浏览器中发生的动作。有了这些事件，你就可以使网站具有互动性。

一些 DOM 事件是用户发起的，像是点击、移动鼠标或是用键盘打字。另一些是浏览器发起的，像是页面加载完成。

### 事件监听器与事件处理函数

事件监听器是一个让你知道事件什么时候发生的方法，它允许你监听注意 DOM 事件，这样当事件发生时，你可以做点什么。

事件处理函数是对这个事件的响应，当事件发生时这个函数将会运行。

举个例子，你可以给按钮附加一个事件监听器，当用户点击的时候你就可以知道了。然后，你可以写一个事件处理函数，在点击事件发生时在屏幕上打印一些内容。

在这个案例中，当点击发生时事件监听器会通知你的应用，然后触发响应；这个响应（事件发生时调用的函数）就是事件处理函数。

### JavaScript 中三种注册事件的方法

你可以使用 JavaScript 通过下面三种不同方法监听并响应 DOM 事件。

-   **使用内联的事件处理函数：** 就是你添加一个事件监听器作为 HTML 元素的属性。在 JavaScript 早期，这是使用事件唯一的方法。看下面这个例子：

```javascript
// Example of using an inline event handler

<button onclick="alert('Hello')">Click me!</button>
```

-   **使用 onEvent 处理函数：** 当元素只有一个事件处理函数时你可以这样使用。当你使用这个方法添加超过一个事件处理函数时，只有最后一个函数会运行，因为它会覆盖之前其他的。

```html
<!-- An example of using an on-event handler -->

<button>Click me!</button>

<script>
  const myButton = document.querySelector('button')
	
  myButton.onclick = function() {
    console.log("Run first handler")
  }
	
  myButton.onclick = function() {
    console.log("Run second handler")
  }
</script>
```

![Screenshot-2023-12-14-at-7.41.49-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-14-at-7.41.49-AM.png)

只有第二个事件处理函数被执行了

正如在控制台所看到的结果，浏览器只运行了第二个事件处理函数的代码。

-   **使用 `addEventListener()` 方法：** 这个方法允许你附加超过一个事件处理函数到一个元素上。并且它将按照它们被添加的顺序执行。

一般来说，你应该坚持使用 `addEventListener()`，除非你有一个令人信服的理由。

`addEventListener()` 接受两个参数，第一个参数是你想监听的事件名称，第二个参数是当事件发生时你想要运行的事件处理函数。

```html
<!-- An example of using the addEventListener method -->

<button>Click me!</button>

<script>
  const myButton = document.querySelector('button')
	
  myButton.addEventListener('click', function() {
    console.log("Run first handler")
  })
	
  myButton.addEventListener('click', function() {
    console.log("Run second handler")
  })
</script>
```

![Screenshot-2023-12-14-at-7.51.22-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-14-at-7.51.22-AM.png)

`addEventListener()` 执行了两个处理函数

### 实践挑战

再继续学习之前这里有一个挑战。在看解题方法之前，先试着自己解决它。

请看下面的 HTML 和 CSS 代码。

这个挑战包括了两个元素，一个 `div#gift-box` 和一个 `button#click-btn`，礼物盒子有一个 `hide` class。

你的任务是写 JavaScript 去监听按钮的点击事件，当用户点击按钮时显示隐藏的盒子。

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    
      <div id="gift-box" class="hide">🎁</div>
      <button id="click-btn">Show the box</button>
      
  </body>
</html>
```

```css
.hide {
  display: none;
}

#gift-box {
  font-size: 5em;
}
```

[**在 StackBlitz 解决这个挑战**][48]  
  

![ezgif.com-video-to-gif-converted](https://www.freecodecamp.org/news/content/images/2023/12/ezgif.com-video-to-gif-converted.gif)

挑战解决方案的动图演示

### 实践挑战的解决方案

如果你能解决这个难题，那恭喜你了。如果你没有解决也没什么问题，下面提供了解决方案和解释。
Congratulations if you were able to solve the challenge. If you were not, that's okay. The solution and explanation is provided below:

```javascript
const giftBoxElement = document.getElementById('gift-box')
const buttonElement = document.getElementById('click-btn')

buttonElement.addEventListener('click', function() {
  giftBoxElement.classList.remove('hide')
})
```

为了解决这个挑战，首先你需要选择 `#gift-box` 和 `#click-btn` 两个元素。

然后，你需要给按钮添加一个事件监听器，像是之前提到的，`addEventListener()` 接受两个参数。

在这个案例中，第一个参数是 `'click'`，第二个参数是一个事件。

目标是显示这个盒子，盒子使用 `hide` class 在 CSS 中设置了 `display` 为 `none`。显示盒子的一种方法是使用 JavaScript 从 classList 中移除 `hide`。 

### 事件对象

这是一个当事件发生时浏览器传递给事件处理函数作为参数的 JavaScript 对象。对象包含了一些有用的属性和方法：

-   `type`：发生的事件类型（例如：点击、鼠标悬浮、按下按键等等）
-   `target`：触发这个事件的元素
-   `clientX` 和 `clientY`：事件发生时，鼠标指针的水平和垂直的坐标
-   `preventDefault()`：阻止与事件相关的默认动作，例如阻止表单的默认提交事件
-   `stopPropagation()`：阻止事件通过 DOM 传播，后面会详细说明

你可以查看所有的属性和方法在 [MDN 文档][49]。

### 事件类型

浏览器允许你监听的 DOM 事件种类很多，下面列举一些常见的。

**鼠标事件：**

-   `click`：当元素被点击
-   `dbclick`：当元素被双击
-   `mouseover`：当鼠标指针移入元素
-   `mouseleave`：当鼠标指针离开元素
-   `mousedown`：当鼠标在元素上按下
-   `mouseup`：当鼠标在元素上松开

**键盘事件：**

-   `keydown`：当键盘按键被按下
-   `keyup`：当键盘按键被松开
-   `keypress`：当按键被按下并显示事件的按键时，注意这个事件不是所有按键都可以触发，尤其是不可打印字符按键

**表单事件：**

-   `submit`：当表单被提交
-   `input`：当输入框字段更改
-   `change`：当表单元素值被更改并失焦

**窗口事件：**

-   `load`：当浏览器完成页面加载
-   `unload`：当用户离开页面
-   `resize`：当浏览器窗口被调整大小
-   `scroll`：当用户滚动浏览文档

你可以在这查看[详细的 DOM 事件表][50]。

## JavaScript 的事件流

当 JavaScript 事件发生时，事件会在 DOM 中从发生事件的目标传播到最外层的元素，反之亦然。

例如，假设你点击了页面上的一个按钮。在点击按钮的同时，你也点击了它的父元素以及按钮在 DOM 层次结构中的任何元素。

### 事件冒泡

这是指事件首先在发生的目标（或是某个元素）被注册，然后向外注册到父元素，最后注册到最外层的元素。

看这个例子：

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Event bubbling DEMO</title>
    </head>
    <body>
        <div id="outer">
            <div id="inner">
              <button id='btn'>Click Here</button>
            </div>
        </div>
    </body>
</html>
```

例子中包含了一个 `#btn` 按钮，随着事件冒泡，当按钮上发生事件（如点击）时，事件会按以下顺序发生。

![4](https://www.freecodecamp.org/news/content/images/2023/12/4.png)

DOM 中的事件冒泡：从 `button` 到 `div#inner` 到 `div#outer` 到 `body` 到 `html` 到 `document`。

事件从目标元素开始向上冒泡，回到最外层的祖先元素。

### 事件捕获

事件捕获与事件冒泡相反，事件从最外层祖先元素开始向下沿着 DOM 树到目标元素。

![JavaScript--2-](https://www.freecodecamp.org/news/content/images/2023/12/JavaScript--2-.png)

DOM 中的事件捕获

在事件捕获阶段，附加到元素上的事件侦听器是按照从最顶层的祖先到目标元素的层次结构顺序执行的。

如果你想知道为什么这很重要，让我们使用和上面相同的 HTML 片段，看一个实际的例子：

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Event bubbling DEMO</title>
    </head>
    <body>
        <div id="outer">
            <div id="inner">
              <button id='btn'>Click Here</button>
            </div>
        </div>
    </body>
</html>
```

让我们分别添加一个事件监听器到`button`、`#inner`、`#outer` 上：

```javascript
const button = document.getElementById('btn')
const innerDiv = document.getElementById('inner')
const outerDiv = document.getElementById('outer')

button.addEventListener('click', function() {
  console.log('Click on button')
})

innerDiv.addEventListener('click', function() {
  console.log('Click on inner Div')
})

outerDiv.addEventListener('click', function() {
  console.log('Click on outer Div')
})
```

默认情况下，浏览器使用事件冒泡的机制，因此，无需为事件监听器添加任何其他参数。这是事件处理函数响应按钮点击时的运行顺序：

1.  `button`
2.  `#innerDiv`
3.  `#outerDiv`

![Screenshot-2023-12-15-at-11.54.07-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-15-at-11.54.07-AM.png)

在冒泡阶段，事件从目标元素到最外层处理

使用事件捕获模型，你可以通过给事件监听器传递第三个参数为 `true`。

```javascript
const button = document.getElementById('btn')
const innerDiv = document.getElementById('inner')
const outerDiv = document.getElementById('outer')

button.addEventListener('click', function() {
  console.log('Click on button')
}, true)

innerDiv.addEventListener('click', function() {
  console.log('Click on inner Div')
}, true)

outerDiv.addEventListener('click', function() {
  console.log('Click on outer Div')
}, true)
```

现在运行，事件处理函数的执行顺序将会是相反的方向，象是这样：

1.  `#outerDiv`
2.  `#innerDiv`
3.  `button`

![Screenshot-2023-12-15-at-11.58.38-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-15-at-11.58.38-AM.png)

在捕获阶段，事件从最外层到目标元素处理

### `stopPropagation()` 停止传播事件 

你已经学习了事件冒泡如何在元素上注册事件，并一直注册到最外层的祖先元素，也看到了事件捕获是怎么反过来的。

但是如果你不想注册事件到所有祖先呢？这就是 `stopPropagation()` 的作用所在，你可以使用这个方法在整个 DOM 中阻止事件的传播。

让我们看看如何在之前的例子中使用 `stopPropagation()`：

```javascript
button.addEventListener('click', function(event) {
  event.stopPropagation()
  console.log('Click on button')
})

innerDiv.addEventListener('click', function() {
  console.log('Click on inner Div')
})

outerDiv.addEventListener('click', function() {
  console.log('Click on outer Div')
})
```

![Screenshot-2023-12-15-at-2.48.37-PM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-15-at-2.48.37-PM.png)

`stopPropagation()` 只允许第一个事件监听器的执行

现在，只有一个事件处理函数被触发。因为 `stopPropagation()` 在按钮的事件处理函数中，所以在 `innerDiv` 和 `outerDiv` 的事件处理函数并没有被触发。

此外，注意 event 对象，你需要在事件处理函数中作为参数传递它。

## JavaScript DOM 项目

构建项目是提高对编码概念理解的绝佳方式，所以，卷起袖子，准备工作吧！

这有五个项目想法去帮助你练习巩固你的技巧。

### 切换开关

设计一个开关，当它被点击时切换它的状态，更新 DOM （例如颜色）反映开关的当前状态。

### 随机颜色选择器

创建一个简单的应用，用户可以点击一个按钮生成一个随机颜色。在屏幕上包括一个填充被选择颜色的图形，同时显示颜色代码。

### 倒计时

构建一个从指定时间开始的计时器，在屏幕上实时更新显示剩余时间。

### 单词计数器

开发一个应用，它提供一个文本输入框和文本域给用户用来输入。当用户输入时，在屏幕上实时显示单词个数。

### 交互式的 Todo 列表

创建一个应用，允许用户添加、删除、编辑任务。你可以随你开心添加一些想要的高级特性，例如标记任务完成、过滤任务或是排序等。

## 总结

如果你已经走到了这里，那你现在应该对操作 JavaScript DOM 有着不错的理解。随着实践，你将有足够的信心来处理需要了解这些 DOM 操作概念的高级项目。

一个良好的操作原版 JS DOM 的基础将在使用 React，Angular，Vue，Svelte 这些 JavaScript 库时派上用场。

感谢你的阅读，祝你打代码愉快！想获取更多有深度的教程，欢迎随时订阅[我的 YouTube 频道][51]。

---

![Benjamin Semah](https://www.freecodecamp.org/news/content/images/size/w60/2022/09/Benjamin-Semah.jpg)

[Benjamin Semah][52]

软件工程师 | 技术作家

---

如果你一直阅读到这里，请感谢作者，以表达你的关心。说声谢谢。

免费学习编程。 freeCodeCamp 的开源课程已帮助超过 40,000 开发人员找到工作。[开始学习][53]

[1]: /news/tag/javascript/
[2]: /news/author/benjamin-semah/
[3]: #DOM-是什么
[4]: #DOM-可以用来做什么
[5]: #如何选择-DOM-元素
[6]: #1-getelementbyid
[7]: #2-getelementsbyclassname
[8]: #3-getelementsbytagname
[9]: #4-queryselector
[10]: #5-queryselectorall
[11]: #如何更改-DOM-元素的内容
[12]: #innerHTML-属性
[13]: #使用-innerHTML-的安全风险
[14]: #innerText-和-textContent-属性
[15]: #如何处理-DOM-元素的属性
[16]: #getAttribute()-方法
[17]: #setAttribute()-方法
[18]: #removeAttribute()-方法
[19]: #hasAttribute()-方法
[20]: #如何更改-DOM-的样式
[21]: #使用-.style-属性设置样式
[22]: #使用-class-设置样式
[23]: #如何遍历-DOM
[24]: #节点和元素之间的不同
[25]: #使用-parentNode-还是-parentElement-选择父级
[26]: #使用-childNodes-还是-children-选择子级
[27]: #选择第一个或是最后一个元素/节点
[28]: #在-DOM-中选择兄弟节点
[29]: #DOM-事件和事件监听器
[30]: #事件监听器与事件处理函数
[31]: #JavaScript-中三种注册事件的方法
[32]: #实践挑战
[33]: #实践挑战的解决方案
[34]: #事件对象
[35]: #事件类型
[36]: #JavaScript-的事件流
[37]: #事件冒泡
[38]: #事件捕获
[39]: #stopPropagation()-停止传播事件
[40]: #JavaScript-DOM-项目
[41]: #总结
[42]: https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/
[43]: https://www.freecodecamp.org/news/cross-site-scripting-what-is-xss/
[44]: https://www.npmjs.com/package/dompurify
[45]: https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/
[46]: https://www.freecodecamp.org/news/html-attributes-explained/
[47]: https://www.freecodecamp.org/news/inline-style-in-html/
[48]: https://stackblitz.com/edit/js-cywa91?file=index.html,style.css,index.js
[49]: https://developer.mozilla.org/en-US/docs/Web/API/Event
[50]: https://www.w3schools.com/jsref/dom_obj_event.asp
[51]: https://www.youtube.com/@DevAfterHours
[52]: /news/author/benjamin-semah/
[53]: https://www.freecodecamp.org/learn/