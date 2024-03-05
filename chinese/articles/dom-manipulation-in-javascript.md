---
title: DOM Manipulation in JavaScript – A Comprehensive Guide for Beginners
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joan/
originalURL: https://www.freecodecamp.org/news/dom-manipulation-in-javascript/
translator: "月落星河Tsukistar"
reviewer: ""
---

November 23, 2023 / [#JavaScript](/news/tag/javascript/)

# JavaScript中的DOM操作 — 一份面向初学者的全面指南

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
In this example, when the button with the ID `myButton` is clicked, an alert saying `Button Clicked!` will pop up. Event listeners provide a way to execute custom code based on user interactions.

## 如何修改样式

DOM 操作还包括修改元素的样式，使我们能够创建视觉上吸引人的、动态的网页。

### 如何动态地修改样式

We can use the `style` property of an element to change its appearance. Let's take an example of changing the color of a paragraph when a button is clicked:

```javascript
// Accessing a paragraph element
const myParagraph = document.getElementById('myParagraph');

// Accessing a button element
const colorButton = document.getElementById('colorButton');

// Adding a click event listener to the button
colorButton.addEventListener('click', function() {
    // Changing the color style of the paragraph
    myParagraph.style.color = 'blue';
});
```

In this example, when the button with the ID `colorButton` is clicked, the text color of the paragraph with the ID `myParagraph` is changed to blue.

## How to Create and Modify Elements

In addition to modifying existing elements, JavaScript allows us to create new elements and add them to the DOM.

### How to create new elements

The `createElement` method is used to create a new HTML element. Let's create a new paragraph element and append (add) it to the body of the document:

```javascript
// Creating a new paragraph element
const newParagraph = document.createElement('p');

// Setting the text content of the new paragraph
newParagraph.textContent = 'This is a new paragraph.';

// Appending the new paragraph to the body of the document
document.body.appendChild(newParagraph);
```

In this example, we create a new `p` (paragraph) element, set its text content, and then append it to the body of the document.

### How to modify attributes

We can also modify the attributes of existing elements. Let's consider changing the source of an image dynamically:

```javascript
// Accessing an image element
const myImage = document.getElementById('myImage');

// Changing the source attribute of the image
myImage.src = 'new-image.jpg';
```

Here, we access an image element with the ID `myImage` and change its `src` attribute to `new-image.jpg`, dynamically updating the displayed image.

### How to update form input values

Let's consider a scenario where you want to update the value of a text input based on user interaction:

```javascript
// Accessing a text input element
const myInput = document.getElementById('myInput');

// Adding an input event listener
myInput.addEventListener('input', function() {
    // Updating a paragraph with the input value
    document.getElementById('inputValue').textContent = myInput.value;
});
```

In this example, as the user types in the text input with the ID `myInput`, a paragraph with the ID `inputValue` is dynamically updated to reflect the input value.

### How to toggle visibility

You can toggle the visibility of an element by using the `display` style property. Let's create a button that toggles the visibility of a paragraph:

```javascript
// Accessing a button element
const toggleButton = document.getElementById('toggleButton');

// Accessing a paragraph element
const toggleParagraph = document.getElementById('toggleParagraph');

// Adding a click event listener
toggleButton.addEventListener('click', function() {
    // Toggling the visibility of the paragraph
    toggleParagraph.style.display = toggleParagraph.style.display === 'none' ? 'block' : 'none';
});
```

Here, the paragraph with the ID `toggleParagraph` is initially visible. Clicking the button with the ID `toggleButton` toggles its visibility.

## Common Pitfalls in DOM Manipulation

While DOM manipulation is a powerful tool for creating dynamic web pages, beginners often encounter common pitfalls that can lead to unexpected behavior or errors. Let's explore some of these pitfalls and provide tips on how to avoid them.

### Manipulating the DOM before it's ready

We may sometimes attempt to manipulate the DOM before it has fully loaded. This can lead to JavaScript trying to access elements that haven't been rendered yet. To avoid this, it's crucial to wait for the DOM to be fully loaded before executing any JavaScript code:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // DOM manipulation code goes here
});
```

By wrapping your DOM manipulation code inside the `DOMContentLoaded` event listener, you ensure that it runs only when the DOM is ready.

### Not checking if an element exists

When attempting to access an element using methods like `getElementById`, we might assume the element exists and proceed with manipulation. However, if the element is not present on the page, it can lead to errors.

Always check if an element exists before manipulating it:

```javascript
const myElement = document.getElementById('myElement');

if (myElement) {
    // Manipulate the element here
} else {
    console.error('Element not found!');
}
```

This simple check prevents errors when working with elements that may or may not be present.

### Forgetting to prevent default actions

When handling events, forgetting to prevent the default action can result in unexpected page behavior. For instance, if a form is submitted without preventing the default action, the page might reload, causing loss of data:

```javascript
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Your form handling code goes here
});
```

By calling `event.preventDefault()`, you stop the default behavior associated with the event, giving you full control over how the event is handled.

### Performing inefficient DOM queries

Performing inefficient DOM queries, especially within loops, can degrade performance. Each query involves traversing the DOM, and unnecessary queries can slow down your webpage.

Instead of repeatedly querying the DOM, cache references to elements:

```javascript
// Inefficient query within a loop
for (let i = 0; i < 10; i++) {
    const myElement = document.getElementById('myElement');
    // Manipulate myElement
}

// Efficient query outside the loop
const myElement = document.getElementById('myElement');
for (let i = 0; i < 10; i++) {
    // Manipulate myElement
}
```

By querying the DOM once and reusing the reference, you optimize your code.

### Not handling cross-browser compatibility

Different browsers may interpret JavaScript and DOM manipulation slightly differently. Failing to account for cross-browser compatibility can lead to inconsistent behavior.

Use feature detection and consider using libraries like jQuery or modern frameworks to handle cross-browser inconsistencies:

```javascript
// Feature detection for addEventListener
if (document.addEventListener) {
    // Use addEventListener
} else {
    // Fall back to alternative method
}
```

By checking for features before using them, you ensure your code works across various browsers.

## How to Use Frameworks for DOM Manipulation

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
