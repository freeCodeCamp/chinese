---
title: DOM Manipulation in JavaScript – A Comprehensive Guide for Beginners
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joan/
originalURL: https://www.freecodecamp.org/news/dom-manipulation-in-javascript/
translator: "月落星河Tsukistar"
reviewer: ""
---

November 23, 2023 / [#JavaScript](/news/tag/javascript/)

# JavaScript中的DOM操作 - 一份面向初学者的全面指南

![Joan Ayebola](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/Screenshot_20230924-145016.jpg)

[Joan Ayebola](/news/author/joan/)

  ![DOM Manipulation in JavaScript – A Comprehensive Guide for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2023/11/Beige-Aesthetic-Neutral-Thesis-Defense-Presentation-1.png)

作为一种Web开发语言，JavaScript赋予了开发者创建动态和交互式网页的能力，其中一个实现这种交互性的JavaScript关键特性是文档对象模型（DOM）操作。

DOM 操作允许开发者修改网页的结构、样式和内容。在本文中，我们将探讨 JavaScript 中 DOM 操作的基础知识，将复杂的概念分解成易于理解的代码片段。

## 什么是DOM?

文档对象模型（DOM）是一种用于 web 文档的编程接口。它以对象树的形式表示文档的结构，其中每个对象对应于文档的一部分，例如元素、属性和文本。JavaScript 可以操作这个树状结构，允许开发者动态地改变网页的内容和外观。

### 如何访问 DOM 元素

为了操作 DOM，我们需要访问它的元素，这一步通常使用代表整个 HTML 文档的 document 对象来实现。让我们看一个简单的例子：

```javascript
// 使用一个元素的ID访问这个元素
const headerElement = document.getElementById('header');

// 使用类名访问元素
const paragraphs = document.getElementsByClassName('paragraph');

// 使用标签名访问元素
const images = document.getElementsByTagName('img');
```

在上面的代码片段中，我们使用 `getElementById` , `getElementsByClassName` , 和 `getElementsByTagName` 三个函数来检索特定的元素。这三个函数的返回值可以存储在变量中，以供开发者进一步操作。

### 如何修改元素内容

一旦我们已经访问了一个元素，我们就可以使用`innerHTML`属性来修改它的内容：

```javascript
// 修改一个元素的内容
headerElement.innerHTML = 'New Header Text';
```

在上面的例子中，我们将 `headerElement` 的内容更改为 `New Header Text` 。这是一种简单而行之有效的方法，可以更新元素中的文本内容。

## 事件和事件处理

事件是在浏览器中发生的操作或事务，例如用户点击按钮或调整窗口大小。JavaScript 允许我们处理这些事件并执行相应的代码作为对事件的响应。事件处理是创建交互式网页的关键方面。

### 如何添加事件监听器

为了响应事件，我们可以使用事件监听器。这些是用于“监听”特定元素上的特定事件的函数，让我们以一个按钮点击事件为例：

```javascript
// 访问一个按钮元素
const myButton = document.getElementById('myButton');

// 添加点击事件监听器
myButton.addEventListener('click', function() {
    alert('Button Clicked!');
});
```

在这个例子中，当ID为 `myButton` 的按钮被点击时，浏览器将弹出一个内容为 `Button Clicked!` 的提示框。事件监听器提供了一种根据用户交互执行自定义代码的方式。

## 如何修改样式

DOM 操作还包括修改元素的样式，使我们能够创建视觉上吸引人的、动态的网页。

### 如何动态地修改样式

我们可以使用元素的 `style` 属性来改变其外观。让我们以点击按钮时改变段落颜色的例子来说明：

```javascript
// 访问一个段落元素
const myParagraph = document.getElementById('myParagraph');

// 访问一个按钮元素
const colorButton = document.getElementById('colorButton');

// 为按钮添加一个点击事件
colorButton.addEventListener('click', function() {
    // 修改段落的颜色样式
    myParagraph.style.color = 'blue';
});
```

在这个例子中，当ID为 `colorButton` 的按钮被点击时，ID为 `myParagraph` 的段落的文本颜色将被更改为蓝色。

## 如何创建和修改元素

除了修改现有元素之外，JavaScript 还允许我们创建新元素并将它们添加到 DOM 中。

### 如何创建新的元素

使用 `createElement` 方法来创建一个新的 HTML 元素。让我们创建一个新的段落元素，并将其追加（添加）到文档的 body 中：

```javascript
// 新建一个段落元素
const newParagraph = document.createElement('p');

// 为新段落设置文本内容
newParagraph.textContent = 'This is a new paragraph.';

// 将新创建的段落追加到文档的 body 中
document.body.appendChild(newParagraph);
```

在这个例子中，我们创建了一个新的 `p`（段落）元素，设置了它的文本内容，然后将其追加到文档的 body 中。

### 如何修改属性

我们还可以修改现有元素的属性。让我们思考如何动态更改图像的来源：

```javascript
// 访问一个图像元素
const myImage = document.getElementById('myImage');

// 修改图像的来源属性
myImage.src = 'new-image.jpg';
```

这个例子中, 我们访问了ID为 `myImage` 的图像元素，并将其 `src` 属性更改为 `new-image.jpg` ，动态更新显示的图像。

### 如何更新表单的输入值

让我们思考这样一个情景：你希望根据用户的交互来更新文本输入框的值：

```javascript
// 访问一个文本输入框元素
const myInput = document.getElementById('myInput');

// 添加一个输入事件监听器
myInput.addEventListener('input', function() {
    // 使用输入值更新一个段落的内容
    document.getElementById('inputValue').textContent = myInput.value;
});
```

在这个例子中，当用户在ID为 `myInput` 的文本输入框中输入时，ID为 `inputValue` 的段落将根据输入值动态更新段落内容。

### 如何切换可见性

你可以通过使用 `display` 样式属性来切换元素的可见性。让我们创建一个按钮用于切换段落的可见性：

```javascript
// 访问一个按钮元素
const toggleButton = document.getElementById('toggleButton');

// 访问一个段落元素
const toggleParagraph = document.getElementById('toggleParagraph');

// 添加一个点击事件监听器
toggleButton.addEventListener('click', function() {
    // 切换段落的可见性
    toggleParagraph.style.display = toggleParagraph.style.display === 'none' ? 'block' : 'none';
});
```

在这里，ID为 `toggleParagraph` 的段落最初是可见的。单击ID为 `toggleButton` 的按钮会切换其可见性。

## DOM 操作中的常见误区

虽然 DOM 操作是创建动态网页的强大工具，但初学者经常会遇到一些常见陷阱，这些陷阱可能导致意外行为或错误。让我们探讨一些这些陷阱，并提供如何避免它们的建议。

### 在DOM渲染完成前操作它们

有时我们可能会在DOM尚未完全加载之前尝试操作它，这可能导致JavaScript尝试访问尚未呈现的元素。为了避免这种情况，最重要的是在执行任何JavaScript代码之前需要等待DOM完全加载：

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // DOM操作代码放在这里
});
```

通过将执行DOM操作的代码包裹在 `DOMContentLoaded` 事件监听器内部，你就可以确保它仅在DOM准备就绪时运行。

### 没有确认一个元素是否存在

在尝试使用诸如 `getElementById` 这样的方法访问元素时，我们可能会假设元素存在并继续进行操作。但是，如果元素不存在于页面上，则可能会导致错误。

在操作元素之前，始终应该检查该元素是否存在：

```javascript
const myElement = document.getElementById('myElement');

if (myElement) {
    // 在这里对这个元素进行操作
} else {
    console.error('Element not found!');
}
```

这个简单的检查可以防止在处理不确定是否存在的元素时出现的错误。

### 忘记阻止默认行为

在处理事件时，忘记阻止默认行为可能会导致意外的页面行为。例如，如果在没有阻止默认行为的情况下提交表单，页面可能会重新加载，导致数据丢失：

```javascript
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    // 阻止默认的表单提交
    event.preventDefault();

    // 你的表单处理代码放在这里
});
```

通过调用`event.preventDefault()`，你可以阻止与表单提交事件关联的默认行为，从而完全控制事件的处理方式。

### 执行效率低下的 DOM 查询

在循环中执行效率低下的 DOM 查询会降低性能。每次查询都涉及遍历 DOM，不必要的查询会减慢网页的加载速度。

与其重复查询 DOM，不如缓存元素的引用：

```javascript
// 在循环中执行的效率低下的查询
for (let i = 0; i < 10; i++) {
    const myElement = document.getElementById('myElement');
    // 操作 `myElement`
}

// 循环之外的高效的查询
const myElement = document.getElementById('myElement');
for (let i = 0; i < 10; i++) {
    // 操作 `myElement`
}
```

通过一次查询 DOM 并重复使用引用，可以优化你的代码。

### 无法处理跨浏览器的兼容性

不同的浏览器可能会略有不同地解释 JavaScript 和 DOM 操作。如果没有考虑跨浏览器兼容性，可能会导致代码的行为不一致。

使用特性检测，并考虑使用像 jQuery 或现代框架这样的库来处理跨浏览器的不一致性：

```javascript
// 使用特性检测检查浏览器对 `addEventListener` 方法的支持：
if (document.addEventListener) {
    // 使用 addEventListener
} else {
    // 回退到另一种受支持的方法
}
```

通过在使用一些功能特性之前检查它们，您可以确保您的代码在各种浏览器上正常工作。

## 如何在框架中使用DOM操作

虽然 JavaScript 允许直接操作 DOM，但现代 Web 开发通常涉及使用诸如 React 或 Vue.js 等框架。这些框架提供了一种更加结构化的方式来构建和管理用户界面。

### React举例

```javascript
// React组件渲染一个按钮并处理其点击事件
class MyButton extends React.Component {
    handleClick() {
        alert('React Button Clicked!');
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>Click me</button>
        );
    }
}

// 将 React 组件渲染到 DOM 中
ReactDOM.render(<MyButton />, document.getElementById('reactRoot'));
```

这个 React 示例创建了一个组件来处理按钮点击事件，它演示了一种更加声明式的 UI 开发方法。

### Vue.js举例

```javascript
// 具有一个数据属性和一个方法的Vue.js实例
new Vue({
    el: '#vueRoot',
    data: {
        message: 'Vue.js Message'
    },
    methods: {
        showMessage: function () {
            alert(this.message);
        }
    }
});
```

这个例子创建了一个Vue.js实例来管理数据和方法，展示了Vue.js的响应性和基于组件的结构。

## 总结

在这个全面的指南中，我们深入探讨了 JavaScript 中的 DOM 操作。从访问元素到处理事件，从修改样式到创建新元素，我们以简单直接的方式涵盖了DOM操作的基本概念。

请记住，DOM 操作是创建动态和交互式网页的核心。通过掌握这些基本技术，你将能够构建引人入胜且用户友好的 Web 应用程序。随着你继续进行你的JavaScript学习之旅，练习与实践将加深你对这些概念的理解，为你成为一名成功的 Web 开发者铺平道路。

---

![Joan Ayebola](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/Screenshot_20230924-145016.jpg)

[Joan Ayebola](/news/author/joan/)

前端开发者 || 技术类文章作家

---

如果你读到了这里，请对这篇文章的作者说一声“谢谢”来表达你对他们的关心和感谢。

免费学习编程。freeCodeCamp 的开源课程已经帮助超过 40,000 人获得了开发人员的工作。[开始学习](https://www.freecodecamp.org/learn/)
