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
-   [How to Traverse the DOM][23]
    -   [Difference Between a Node and an Element][24]
    -   [Selecting a Parent with parentNode vs parentElement][25]
    -   [Selecting Elements with childNodes vs children][26]
    -   [Selecting the First or Last Child/Element][27]
    -   [Selecting a Sibling of Nodes in the DOM][28]
-   [DOM Events and Event Listeners][29]
    -   [Difference Between Event Listener and Event Handler][30]
    -   [Three Ways to Register Events in JavaScript][31]
    -   [Practice Challenge][32]
    -   [Solution to Practice Challenge][33]
    -   [The Event Object][34]
    -   [Types of Events][35]
-   [Event Flow in JavaScript][36]
    -   [Event Bubbling][37]
    -   [Event Capturing][38]
    -   [The Event stopPropagation Method][39]
-   [JS DOM Manipulation Projects Ideas][40]
-   [Conclusion][41]

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

通过类，您可以一次创建样式，并将其应用于不同的元素。这有助于提高代码的可维护性。

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

## How to Traverse the DOM

To traverse the DOM means to move between the different elements/nodes within the HTML document. This may includes selecting or accessing parent, child, or sibling elements (or nodes). You do this to get information or manipulate the document structure.

But before we get into how to traverse the DOM, you need to understand the difference between nodes and elements.

### Difference Between a Node and an Element

Nodes are the building blocks of the DOM. They represents different components in the HTML structure.

Elements are a specific type of node, but not all nodes are elements. Other types of content like attributes of elements, text content, and comments within the code are nodes too. But they are not elements.

An element is a specific type of node that defines the structure of the document's content. Think of elements as the familiar HTML tags you use. Examples include `<div>`, `<p>`, and `<ul>`. Each element can consist of attributes, text content, and other nested elements.

### Selecting a Parent with `parentNode` vs `parentElement`

When it comes to selecting the parent of a DOM element, you can use either the `parentNode` or `parentElement`. Both will get the parent of the element you pass to it.

From a practical viewpoint, the parent of an element or a node will always be an element. So it doesn't matter which one you use, you will get the right parent of the selected element.

Let's see an example of selecting the parent of an element.

```html
  <div class="container">
    <p class="full-text">
        <i id="italics">Some italicized text</i>
    </p>
  </div>
```

```
const italicizedText = document.getElementById('italics')

console.log(italicizedText.parentNode)
console.log(italicizedText.parentNode.parentNode)
```

First, you select the element. Then, you chain the `parentNode` method to it to get the parent. You can also chain another `parentNode` property to get the parent of a parent element like the second log statement.

The screenshot below shows the output of the two log statements.

![Screenshot-2023-12-12-at-9.44.45-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-9.44.45-AM.png)

Example of selecting the parent of an element.

### Selecting Elements with `childNodes` vs `children`

You can select the contents of an element using both the `.childNodes` and `.children` properties. But they work differently.

**`childNodes`:** returns a NodeList of all the child nodes within the selected elements. It will include elements and non-element nodes like text nodes, comment nodes, and so on.

**`.children`:** returns an HTML collection of only the child elements (element nodes) of the selected objects. It will not include any non-element nodes like texts or comments.

Let's see an example that shows the difference:

```html
  <div id="container">
    A text node
    <p>Some paragraph</p>
    <!-- This is a comment -->
    <span>Span Element</span>
  </div>
```

The code above has only 2 child elements (element nodes): the paragraph and the span. But there are other elements too – a text node and a comment:

```javascript
const container = document.getElementById('container');

const containerChildNodes = container.childNodes;
const containerChildren = container.children;

console.log(containerChildNodes);
console.log(containerChildren);
```

![Screenshot-2023-12-12-at-10.29.23-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-10.29.23-AM.png)

An example of using the .childNodes property

The  `childNodes` will return all the child nodes (both elements and non-elements). It also includes the whitespaces between elements as text nodes.

This can be confusing to work with. So, unless you have a good reason not to, you should stick with the `.children` property.

The `children` will only return the child elements (the paragraph and the span).

![Screenshot-2023-12-12-at-10.34.08-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-12-at-10.34.08-AM.png)

An example of using the `.children` property

### Selecting the First or Last Child/Element

If you need to select only the first/last child or element, you can use these four properties.

-   `firstChild`: Selects only the first child node of the parent element.
-   `lastChild`: Selects only the last child node of the parent element.
-   `firstElementChild`: Selects only the first child element of the parent.
-   `lastElementChild`: Selects only the last child element of the parent.

Let's use the same example from the previous section to see how each works:

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

Example demo selecting first child/element and last child/element

Note how `firstChild` returns the first text node but the `firstElementChild` returns the first paragraph instead. This means it ignored the text node which comes before the paragraph.

And also note how the `lastChild` returns a text node – even though from the markup, it looks like there's nothing after the span. That is because the `lastChild` property considers the linebreak/whitespace between the closing tag of the span and the closing tag of the div elements as a node.

That's why it's generally safer to stick to `firstElementChild` and `lastElementChild`.

### Selecting a Sibling of Nodes in the DOM

You've learned how to select a parent or a child of an element. You can also select a sibling of an element. You do that using the following properties:

-   `nextSibling`: Selects the next node within the same parent element.
-   `nextElementSibling`: Selects the next element, and ignores any non-element nodes.
-   `previousSibling`: Selects the previous node within the same parent element.
-   `previousElementSibling`: Selects the previous element, and ignores any non-element nodes.

Here's an example:

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
console.log("nextElementSibling: ", paragraphTwo.next)
console.log("previousSibling: ", paragraphTwo.previous)
console.log("previousElementSibling: ", paragraphTwo.previous)
```

![Screenshot-2023-12-13-at-7.57.18-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-13-at-7.57.18-AM.png)

Examples of selecting siblings of a node.

`nextSibling` and `previousSibling` select the text nodes because they consider all nodes within the parent. While `nextElementSibling` and `previousElementSibling` select only the paragraph elements because they ignore non-element nodes like text.

## DOM Events and Event Listeners

DOM events are actions that take place in the browser. These events are what allows you to make websites interactive.

Some DOM events are user-initiated like clicking, moving the mouse, or typing on the keyboard. Others are browser-initiated like when a page finishes loading.

### Difference Between Event Listener and Event Handler

An event listener is a method that lets you know when an event has taken place. It allows you to "listen" or keep an eye out for DOM events. That way, when an event happens, you can do something.

An event handler is a response to the event. It's a function that runs when an event occurs.

For example, you can attach an event listener to a button that lets you know when a user clicks that button. Then you can write an event handler (a function) that prints something on screen anytime a click event occurs.

In this case, the event listener is what informs your app when a click occurs and then trigger a response. And the response (the function that runs when the click occurs) is an example of an event handler.

### Three Ways to Register Events in JavaScript

The following are three different ways you can listen to and respond to DOM events using JavaScript.

-   **Using inline event handlers:** This is when you add the event listener as an attribute to HTML elements. In the early days of JavaScript, this was the only way to use events. See the example below:

```javascript
// Example of using an inline event handler

<button onclick="alert('Hello')">Click me!</button>
```

-   **Using on-event handlers:** You use this when an element has only one event handler. When you add more than one event handler using this method, only the last event handler will run, as it will override others before it.

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

Only the second event handler is executed.

As you can see from the result in the console, the browser runs the code for only the second event handler.

-   **Using the `addEventListener` method:** This method allows you to attach more than one event handlers to an element. And it will execute them in the order in which they were added.

As a general rule, you should stick with the `addEventListener`, unless you have a compelling reason not to.

The `addEventListener` method takes two arguments. The first is the event you want to listen to, and the second is the event handler which is the function you want to run when the event occurs.

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

The `addEventListener` method executes both event handlers.

### Practice Challenge

Here is a challenge for you before you move on. Try solving it on your own before you take a look at the solution.

Consider the HTML and CSS code below.

The challenge includes two elements. A `#gift-box` div and a `#click-btn` button. The gift box is hidden with the `.hide` class.

Your task is write JavaScript code that listens to a click event on the button, and display the hidden box when the user clicks the button.

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

[**Solve the challenge on StackBlitz**][48]  
  

![ezgif.com-video-to-gif-converted](https://www.freecodecamp.org/news/content/images/2023/12/ezgif.com-video-to-gif-converted.gif)

Demo gif for the final solution of the challenge

### Solution to Practice Challenge

Congratulations if you were able to solve the challenge. If you were not, that's okay. The solution and explanation is provided below:

```javascript
const giftBoxElement = document.getElementById('gift-box')
const buttonElement = document.getElementById('click-btn')

buttonElement.addEventListener('click', function() {
  giftBoxElement.classList.remove('hide')
})
```

To solve this challenge, first you need to select both the `#gift-box` and `#click-btn` element.

Then, you add an event listener to the button. As mentioned earlier, the `addEventListener` method takes in two arguments.

In this case, the first argument is the 'click' event, and the second argument is a function.

The goal is to display the box. The box has a class `hide` which sets `display` to `none` in the CSS. One way to display the box using JavaScript is to remove `hide` from the classList.

### The Event Object

This is a JavaScript object the browser passes as an argument to the event handler function anytime an event occurs. The object includes some useful properties and methods like the following:

-   `type`: the type of event that occurred (like click, mouseover, keydown, and so on)
-   `target`: the element on which the event occurred
-   `clientX` and `clientY`: the horizontal and vertical coordinates of the mouse pointer at the time the event occurred.
-   `preventDefault()`: prevents default actions associated with the events like preventing a form submission on the submit event.
-   `stopPropagation()`: prevents the event from propagating through the DOM. More on that later.

You can see a full list of the properties and methods on [the MDN web docs][49].

### Types of Events

There are many different kinds of DOM events the browsers lets you listen to. The following are few of the common ones.

**Mouse events:**

-   `click`: when the element is clicked.
-   `dbclick`: when the element is double clicked.
-   `mouseover`: when the mouse pointer enters the element.
-   `mouseleave`: when the mouse pointer leaves the element.
-   `mousedown`: when the mouse is pressed down over an element.
-   `mouseup`: when the mouse is released over an element.

**Keyboard events:**

-   `keydown`: when a key on the keyboard is pressed down.
-   `keyup`: when a key on the keyboard is released.
-   `keypress`: when a key is pressed and shows the actual key that was pressed. Note that this event is not fired for all keys, especially non-printable keys.

**Form events:**

-   `submit`: when a form is submitted.
-   `input`: when the value of an input field changes.
-   `change`: when the value of a form element changes and loses focus.

**Window events:**

-   `load`: when the browser finishes loading the page.
-   `unload`: when the user leaves the page.
-   `resize`: when the browser window is resized.
-   `scroll`: when the user scrolls through the document.

You can see [a comprehensive list of DOM events here][50].

## Event Flow in JavaScript

When a JavaScript event occurs, the event is propagated or travels either from the target where the event occurred to the outermost element in the DOM or vice versa.

For example, let's say you click a button on a page. By clicking the button, you've also clicked its parent element and any element the button is inside within the DOM hierarchy.

### Event Bubbling

This is when the event is first registered on the target (or specified element) on which the event happened, and then registered outwards to the parent and onwards to the outermost element.

Here's an example:

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

The example here contains a button `#btn`. With event bubbling, when an event occurs (say a click) on the button, the event goes through the following sequence.

![4](https://www.freecodecamp.org/news/content/images/2023/12/4.png)

Event bubbling in DOM Manipulation: from button to div#inner to div#outer to body to HTML to document.

The event starts to bubble up from the target element back to the outermost ancestor.

### Event Capturing

Event capturing is the opposite of event bubbling. The event starts from the outermost ancestor element and travels down the DOM tree to the target element.

![JavaScript--2-](https://www.freecodecamp.org/news/content/images/2023/12/JavaScript--2-.png)

Event capturing in DOM Manipulation

During the capturing phase, event listeners attached to elements are executed in the order of the hierarchy from the topmost ancestor to the target element.

In case you're wondering why this matters, let's see a practical example using the same HTML markup example from above:

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

Let's add event listeners to the button, the `#inner` div, and the `#outer` div:

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

By default, browsers use the event bubbling approach. So there is no need to add any argument to the event listener. This is the order in which the event handlers will run in response to a click on the button:

1.  `button`
2.  `#innerDiv`
3.  `#outerDiv`

![Screenshot-2023-12-15-at-11.54.07-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-15-at-11.54.07-AM.png)

Events are executed from the element to the outermost element in the bubbling phase.

To use the event capturing model, you need to pass a third argument `true` to the event listener.

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

The order for executing the event handlers will now run in the opposite direction, like this:

1.  `#outerDiv`
2.  `#innerDiv`
3.  `button`

![Screenshot-2023-12-15-at-11.58.38-AM](https://www.freecodecamp.org/news/content/images/2023/12/Screenshot-2023-12-15-at-11.58.38-AM.png)

Events are executed from the outermost element to the element in the capturing phase.

### The Event `stopPropagation()` Method

You've learned about how the event bubbling registers an event on an element and continues registering the event all the way to the outermost ancestor element. You've also seen how event capturing does the opposite.

But what if you don't want the event to register on all the ancestors? That's where the `stopPropagation` method comes in. You can use this method to prevent the event from propagating through the whole DOM.

Let's use the `stopPropagation` method on the same example from before:

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

The `stopPropagation` method allows the execution of only the first event listener.

Now, only the event handler on the button is fired. The ones on the `innerDiv` and `outerDiv` are not because of the `stopPropagation` method on the button.

Also, note that to get the event object, you need to pass it as an argument to the event handler function.

## JS DOM Manipulation Project Ideas

Building projects is an excellent way to improve your understanding of coding concepts. So roll up your sleeves and get ready to work!

Here are five JS DOM manipulation project ideas to help you practice and solidify your skills.

### Toggle Switch

Design a toggle switch that changes its state (on/off) when clicked. Update the DOM (for example with a background color) that reflects the current state of the toggle switch.

### Random Color Picker

Create a simple app where users can click a button to generate a random color. Include a shape on the screen that gets filled with the chosen color. Also display the color code on screen.

### Countdown Timer

Build a timer that starts from a specified time. The app updates in real time and shows the remaining time on the screen.

### Word Counter

Develop an app that provides an input field or text area for the user to type. Display the number of words in real time on the screen as the user types.

### An Interactive To-Do List

Create an app that allows users to add, delete, or edit tasks. You can have fun with this one and add as many advanced features as you want. For example, adding features like marking tasks as completed, filtering tasks, or sorting them.

## Conclusion

If you've come this far, then you now have a good understanding of JavaScript DOM manipulation. With practice, you'll be confident enough to tackle advanced projects that require knowledge of these DOM manipulation concepts.

A good foundation of Vanilla JS DOM manipulation concepts will also come in handy when picking JavaScript libraries/frameworks like React, Angular, Vue, Svelte, and so on.

Thank you for reading, and happy coding! For more in-depth tutorials, feel free to [subscribe to my YouTube channel][51].

---

![Benjamin Semah](https://www.freecodecamp.org/news/content/images/size/w60/2022/09/Benjamin-Semah.jpg)

[Benjamin Semah][52]

Software Developer | Technical Writer

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][53]

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
[12]: #`innerHTML`-属性
[13]: #使用-`innerHTML`-的安全风险
[14]: #`innerText`-和-`textContent`-属性
[15]: #如何处理-DOM-元素的属性
[16]: #`getAttribute()`-方法
[17]: #`setAttribute()`-方法
[18]: #`removeAttribute()`-方法
[19]: #`hasAttribute()`-方法
[20]: #如何更改-DOM-的样式
[21]: #使用-`.style`-属性设置样式
[22]: #使用-class-设置样式
[23]: #how-to-traverse-the-dom
[24]: #difference-between-a-node-and-an-element
[25]: #selecting-a-parent-with-parentnode-vs-parentelement
[26]: #selecting-elements-with-childnodes-vs-children
[27]: #selecting-the-first-or-last-child-element
[28]: #selecting-a-sibling-of-nodes-in-the-dom
[29]: #dom-events-and-event-listeners
[30]: #difference-between-event-listener-and-event-handler
[31]: #three-ways-to-register-events-in-javascript
[32]: #practice-challenge
[33]: #solution-to-practice-challenge
[34]: #the-event-object
[35]: #types-of-events
[36]: #event-flow-in-javascript
[37]: #event-bubbling
[38]: #event-capturing
[39]: #the-event-stoppropagation-method
[40]: #js-dom-manipulation-project-ideas
[41]: #conclusion
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