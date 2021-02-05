> -   原文地址：[How to Manipulate the DOM - the Ultimate Beginner's Guide](https://www.freecodecamp.org/news/how-to-manipulate-the-dom-beginners-guide/)
> -   原文作者：Chibuike Okere
> -   译者：Humilitas
> -   校对者：

![How to Manipulate the DOM - the Ultimate Beginner's Guide](https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wxfDF8c2VhcmNofDZ8fGhlbHB8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Okay, so I assume you have heard of the almighty DOM — that’s why you are here, right? If you are finding it difficult, I can assure you that after reading this article, you will feel comfortable enough with the whole DOM manipulation thing.
想必你已经听说过全能的 DOM 了——所以你才会在这里看这篇文章，对吧？如果你觉得它有点难，我可以保证，你在读完这篇文章之后就能够掌握操作 DOM 的相关知识。

But please before I start, permit me to share with you my little story on how I got to know about the DOM (its a funny story).
在开始之前，请允许我分享一个关于我是如何了解到 DOM 的有趣的小故事。

## How I learned about the DOM
## 我是如何了解到 DOM 的

A few months into my web development career, I was still learning the good old HTML and CSS. I mistakenly stumbled upon a DOM course on w3schools. The first example they had was one with a light bulb and two buttons.
做了几个月的 web 开发之后，我还在学习古老的 HTML 和 CSS。我偶然地发现了 w3schools 的一个 DOM 课程，其中第一个示例是一个灯泡和两个按钮。

The onclick of one of the buttons would "switch on" the light bulb and the onclick of the second button would "switch off" the light bulb. I was literally blown away.
点击其中一个按钮会“打开”灯泡，点击另一个按钮则会“关闭”灯泡。我真的被搞晕了。

How could a button on a website switch on a light bulb? How!?
网站上的按钮为什么可以打开灯泡？怎么回事！？

I even twitted about it. Then I found out that they were just changing the source attribute (src) of the images. I was heart broken, but regardless that little experience made me fall in love with the DOM. It made me want to know more.
我甚至为此发了个 Twitter。然后我发现他们不过是改变了图片元素的 src 属性，我心都碎了。不过无论如何，这事让我爱上了 DOM，它激发了我的求知欲。

And in this article I'm going to walk you through it. I promise that if you stick with me until the end and practice all that I write about, the whole DOM thing won't be an issue for you ever again. So are you ready? Ok Allons-y (let's go!).
如果你耐心读完本文，并动手实践其中涉及的示例，我保证 DOM 操作再也难不倒你。准备好了吗？开始吧！

> To make this easier to understand, I have grouped everything into the following sections below.
> 为了便于理解，我把相关知识归纳为以下几个章节。

-   Definition of the DOM and Basic concepts
-   How to Select Elements in the DOM
-   How to Traverse and Move Around the DOM
-   How to Manipulate Elements in the DOM
-   General Styling
-   Event handling in the DOM
-   DOM 的定义及基本概念
-   如何选中 DOM 中的元素
-   如何遍历及移动 DOM 中的元素
-   如何编辑 DOM 中的元素
-   指定样式
-   DOM 的事件处理

So grab a coffee or anything you like and relax as I walk you through each section.
喝杯咖啡放松一下，跟着我一起学习下面的章节。

![vvv-1](https://media.giphy.com/media/ceeFbVxiZzMBi/source.gif)

## Definition of the DOM and Basic concepts
## DOM 的定义及基本概念

### What is the DOM?
### 什么是 DOM？

The DOM stands for Document Object Model. It can simply be understood as a tree of nodes created by the browser. Each of these nodes has its own properties and methods which can be manipulated using JavaScript.
DOM（Document Object Model——文档对象模型），可以简单理解为浏览器创建的节点树，每个节点有自己的属性和方法，可以通过 JavaScript 来操作这些属性、调用这些方法。

The ability to manipulate the DOM is one of the most unique and useful abilities of JavaScript.
操作 DOM 的能力是 JavaScript 最独特和有用的特性之一。

The image below gives a visual representation of what the DOM tree looks like.
下图是 DOM 树的视觉表示。

![images](https://www.freecodecamp.org/news/content/images/2021/01/images.png)

Here we have the document object. This is the core/foundation of the DOM. To perform any form of DOM manipulation, you have to access the document object first.
document 对象是 DOM 的核心/基础，执行任何形式的 DOM 操作都要访问 document 对象。

Next we have the  `html`  root element which is a child of the document object.
根元素 `html` 是 document 对象的子节点。

Next on the line are the  `body`  and  `head`  elements which are siblings to each other and children of the  `html`  element.
下一行是 `body` 和 `head` 元素，它们互为兄弟节点，并且都是 `html` 的子节点。

Under the head element we have the title element which you can agree is the child of the head element and parent to the text node - “my text”.
head 元素下面有一个 title 元素，它是 head 元素的子节点，同时也是文本节点“my text”的父节点。

Directly under the body element we have two elements (`a`  tag and  `h1`  tag) which are siblings to each other and children of the body element.
body 元素下面有两个元素（`a` 元素和 `h1` 元素），它们互为兄弟节点，并且都是 body 元素的子节点。

Finally the  `href`  attribute and the text node - “my link” - are children of the  `a`  tag. Exactly the same way the text node, “My header”, is a child of the  `h1`  element.
最后，`href` 属性和文本节点“my link”都是 `a` 元素的子节点，同样的，文本节点“My header”是 `h1` 元素的子节点。

This might seem a little confusing if you are an absolute beginner, but trust me - it always gets better (with practice of course).
这些对于新手来说可能看起来有些复杂，不过请相信我——熟能生巧。

## How to Select Elements in the DOM
## 如何选中 DOM 中的元素

In order to be able to manipulate an element in the DOM, you have to select that particular element. Luckily for us we have 4 major ways of selecting elements.
为了操作 DOM 中的元素，需要先选中指定的元素，幸好，我们有四种常用方式可以用来选中元素。

### How to Select DOM Elements with the getElementById Method
### getElementById 方法

The most common way to access an HTML element is to use the id of the element.
最常见的方式是通过 id 属性来选中元素。

In the example below the `getElementById()` method used id="master" to find the element
下面的示例中，`getElementById()` 方法通过 id="master" 来查找元素。

```javascript
<p id="master">i love javascript</p>

 <script>
const masterEl = document.getElementById('master')
console.log(masterEl) //<p id="master">i love javascript</p> 
 </script>
```

The id is case-sensitive. For example, the 'master' and 'Master' are totally different ids.
id 是区分大小写的，比如：'master' 和 'Master' 就是完全不同的两个 id。

Once you have selected an element, you can add styles to the element, manipulate its attributes, and traverse to parent and child elements.
选中了一个元素之后，就可以给它添加一些样式、编辑它的属性、遍历它的父元素或子元素。

### How to Select DOM Elements with the getElementsByClassName() Method
### getElementsByClassName() 方法

This method returns a collection of all elements in the document with the specified class name.
这个方法返回文档中所有类名（class）包含指定值的元素的集合。

For example, our HTML page below contains three elements with class="master2", and I selected the button with the id of 'btn'.
例如，下面的 HTML 页面中有三个 class="master2" 的元素，我通过 'btn' 这个 id 选中了其中的按钮。 

If you click the button it would select all the elements with a class name of "master2" and change the innerHTML of the 3rd element.
点击这个按钮将会选中所有类名包含 "master2" 的元素，并改变其中第三个元素的 innerHTML 属性值。

```javascript
       <p class="master2">i love javascript</p>
        <p class="master2">i love react</p>
        <h1 class="master2">i want a job</h1>

        <button id="btn">click me</button>
 
 <script>
 
 const btn = document.getElementById('btn')
        
        btn.addEventListener('click', function master(){
            var master = document.getElementsByClassName("master2");
            master[2].innerHTML = 'i need a job';
        })

</script>
```

Before the button is clicked, this is what you see:
点击按钮前：

![](https://www.freecodecamp.org/news/content/images/2021/01/22.png)

After the button is clicked, you see:
点击按钮后：

![](https://www.freecodecamp.org/news/content/images/2021/01/444.png)

> I know I used  `addEventListener()`  which I have yet to explain, but stick with me. It's definitely part of what I will explain to you below :)
> 这里用到了 `addEventListener()` 方法，稍后会介绍到。

### How to Select DOM elements with the getElementsByTagName() Method
### getElementsByTagName() 方法

This method accepts a tag name and returns all the elements of the specified tag name in the order which they appear in the document.
这个方法接收 html 标签名作为参数，以在文档中出现的顺序返回这个标签的所有元素。

The following code illustrates the syntax of  `getElementsByTagName()`  by getting all the  `p`  elements on the page and changing the content of the second element.
下面的代码展示了 `getElementsByTagName()` 的语法，获取页面中的所有 `p` 元素、改变第二个 `p` 元素的内容。

```javascript
 <p>VsCode</p>
 <p>Atom</p>
 <p>Sublime text</p>
        <button id="btn">click me</button>
       

 <script>

const btn = document.getElementById('btn')
        
        btn.addEventListener('click', function master(){
            let master = document.getElementsByTagName('p');
            let masterEl = master[1].innerHTML = 'Code editors';
            console.log(masterEl) //Code editors
        })

//<p>Atom</p> changes to <p>Code editors</p>
</script>
```

### How to Select DOM Elements with CSS Selectors
### CSS 选择器

#### .querySelector()

This returns the first value that matches the selector it’s given. This method can accept all CSS style selectors, allowing it to select by tag, class, or ID.
这个方法返回第一个匹配指定选择器的元素，它可以接收所有 CSS 样式选择器作为参数，它可以通过标签名、类名或 ID 来选择元素。

```javascript
<div id=master>i am a frontend developer</div>

<script>
const master = document.querySelector("#master") 
</script>

```

This method above takes one argument, which is a CSS selector, and returns the first element that matches the selector.
上面的方法接收一个 CSS 选择器作为参数，返回匹配这个选择器的第一个元素。

#### .querySelectorAll()

This works similar to above which returns a node list collection of all matching elements.
这个方法跟上一个方法类似，区别在于它返回的是包含所有匹配元素的节点集合。

```
    <p class="master">React</p>
     <p class="master">Vue</p>
     <p class="master">Angular</p>

<script>
const master = document.querySelectorAll(".master") 
console.log(master[1])  //<p class="master">Vue</p>
</script>

```

### Summary of How to Select DOM Elements
### 选择 DOM 元素方法总结

When you need to select a DOM element, you have four different options to choose from, four different ways of doing a particular thing (selecting an element(s)).
在需要选择 DOM 元素的时候，你有四种不同的方式可以选择，这四种不同方式做的都是同一件事（选择一个或多个元素）。

So if you don't remember the first, you use the second. And if by chance you don't remember both you still have options 3 and 4. Is it just me or does JavaScript make our lives easier? :)
如果不记得第一种方式，可以用第二种，如果碰巧前两种都忘了，还有第三种、第四种方式可以用。是不是我或者 JavaScript 让我们的生活变得更简单了？:)

My personal recommendation is to stick to option 1 or option 4a (queryselector with an Id). From your early days of learning HTML you likely understood that elements shouldn't have the same id, that is the id is a unique identifier of an element within the document.
我个人建议尽量使用第一种方式或第四种方式中的第一个方法（queryselector）。你之前学习 HTML 的时候应该知道，文档中元素的 id 是不允许重复的，也就是说 id 是文档中元素的唯一标识符。

With that in mind, selecting an element with its id is a "safe bet" because you wouldn't get to apply same "manipulation" to different elements (unless perhaps that's what you want to achieve - then be my guest, feel free to use other options).
考虑到这一点，通过 id 来选择元素是“安全”的做法，因为这样你就不会把同样的操作应用在多个不同元素上了（除非你刻意要这样做——当然了，只要你想的话，也可以选择其他方式）。

## How to Traverse the Document
## 如何遍历 Document

At this stage you'll hopefully agree with me that everything in an HTML document is a node. Also the text inside HTML elements are text nodes.
现在你应该会认同我的说法，即 HTML 文档中的一切都是节点。就连 HTML 元素中的文字也是文本节点。

With the HTML DOM, you can navigate the node tree and access nodes in the tree using node relationships we talked about earlier (parent, child(ren), sibling(s) etc).
在 DOM 中，可以利用前面讲到的节点关系（父节点、子节点、兄弟节点等）来遍历节点树、访问节点。

> New nodes can be created, and all nodes can be modified or deleted.
> 可以创建新节点，并且所有节点都可以被修改或删除。

### A little review
### 回顾一下

-   Every node has exactly one parent, except the top node (which has no parent).
-   A node can have a more than one child.
-   Siblings (brothers or sisters) are nodes with the same parent.
-   每个节点都有且只有一个父节点，根节点除外（它没有父节点）。
-   一个节点可以有多个子节点。
-   同一个父节点下的子节点互为兄弟节点。

In this section, we are going to see how to get the parent element, siblings of an element, and children of an element. I will be using the following node properties to achieve these things:
在这个章节中，我们要学习如何获取元素的父节点、兄弟节点以及子节点。为此，我会用到下面这些节点属性。

-   parentNode
-   childrenNodes
-   firstElementChild
-   lastElementChild
-   nextElementSibling
-   previousElementSibling

Also I will be using only this HTML page below to show you how we use each of these node properties. And from section 4 above I will be showing you how to manipulate the DOM.
我会使用下面的 HTML 页面来展示这些节点属性的用法。在第四章节中，我会演示如何操作 DOM。

That is the objective of this article - to know how to manipulate the DOM. It doesn't really matter if you know how to select elements and traverse the DOM if you don't know how to manipulate it. It's important to know how to add CSS styling, create and append elements, set innerHTML and handle events.
这就是本文的目的——了解如何操作 DOM。如果不懂如何操作 DOM 的话，了解了选择元素和遍历 DOM 的方法也没什么用处。了解如何为元素添加 CSS 样式、如何创建并追加元素、如何设置 innerHTML 以及如何做事件处理至关重要。

That's the juice of this article so please stay with me. Let's continue.
这是本文的重点，请跟着我的脚步，继续前进。

```javascript
    <div id="parent">
        <div id="firstchild">i am a first child</div>
        <p id="secondchild">i am the second child</p>
        <h4>i am alive</h4>
        <h1>hello world</h1>
        <p>i am the last child</p>
    </div>  
    
    const parent = document.getElementById('parent').lastElementChild
    console.log(parent) //<p>i am the last child</p>
    
    const parent2 = document.getElementById('parent').children[3]
    console.log(parent2) //<h1>hello world</h1>
    
    const secondchild = document.getElementById('secondchild')
    console.log(secondchild) //<p id="secondchild">i am the second child</p>
    
    console.log(secondchild.parentNode) //<div id="parent">...</div>

    console.log(secondchild.nextElementSibling) //<h4>i am alive</h4>

    console.log(secondchild.previousElementSibling) //<div id="firstchild">i am a first child</div>
```

### How to Create Elements
### 创建元素

The code above shows a parent element with 5 children elements. Let's assume we want to add another  `div`  tag with JavaScript. We would definitely have to create a new element with the  `createElement()`  method, like this:
上面代码中的 HTML 片段中有一个包含 5 个子元素的父元素，如果想使用 JavaScript 往其中添加一个 `div` 元素，我们需要调用 `createElement()` 方法来创建一个新的元素：

```javascript
 const createEl = document.createElement('div')
 console.log(createEl) //<div></div>
```

### How to Set innerHTML
### 设置 innerHTML

We have successfully created a  `div`  tag, but currently it does not have any text node. We are going to use the  `.innerHTML()`  property to add its text node.
我们成功创建了一个 `div` 标签，不过现在其中还没有文本节点。我们将会调用 `.innerHTML()` 方法来为它添加文本节点。

```javascript
 const innerhtml = createEl.innerHTML = 'i am a frontend developer'
 console.log(createEl) //<div>​i am a frontend developer​</div>​

```

### How to Append an Element
### 在页面中追加元素

What we have achieved so far is creating an element and inserting its text node. But this created element is not part of the DOM tree yet.
目前已经完成了创建元素以及往其中插入文本节点的操作，但是创建出的新元素还没有插入到 DOM 树中。

So now, I am going to show you how to append it to that HTML page in this section. Building on the code above:
现在演示如何将创建出的新元素追加到 HTML 页面中，代码如下：

```javascript
 const createEl = document.createElement('div')
 const innerhtml = createEl.innerHTML = 'i am a frontend developer'
 const parentEl = document.getElementById('parent')
 parentEl.appendChild(createEl)

```

![](https://www.freecodecamp.org/news/content/images/2021/01/Document---Google-Chrome-16_01_2021-11_50_14-PM--2-.png)

### How to Insert One Element Before Another
### 在指定元素之前插入元素

If you noticed from the console log image above, the appended child  `div`  tag was added at the bottom automatically.
注意上面的控制台打印信息截图，追加的 `div` 标签子元素自动地插入到了父元素的最下面。

What if for some reason you want to append it anywhere of your choice? Maybe before the first element or before the fourth element. I am here to tell you that it is very much possible. In the code below we are going to add it before the current first element.
如果出于某种原因想要把元素追加到其它位置该怎么办？也许是第一个元素之前或者是第四个元素之前的位置。这些情况都是很有可能出现的。下方代码把元素插入到当前第一个元素之前。

We are going to be using the  `insertBefore()`  JavaScript method which accepts two parameters, the  `newNode`  and the  `existingNode`  in this order =>  `document.insertBefore(newNode, existingNode)`.
我们会用到 `insertBefore()` 方法，它接收两个参数：`document.insertBefore(newNode, existingNode)`。

```javascript
    const parentEl = document.getElementById('parent')
    const firstchildEl = document.getElementById('firstchild')
    
    const createEl = document.createElement('div')
    
    const innerhtml = createEl.innerHTML = 'i am a frontend developer'
    
    parentEl.insertBefore(createEl, firstchildEl)
    console.log(parentEl)

```

![](https://www.freecodecamp.org/news/content/images/2021/01/mmm.png)

### How to Replace a Child Element
### 替换子元素

We are going to be using the  `replaceChild()`  JavaScript method which accepts two parameters to replace our first element with the newly created one. It works in this order =>  `document.replaceChild(newNode, existingNode)`.
我们使用 `replaceChild()` 方法将第一个子元素替换为新创建的元素，它接收两个参数：`document.replaceChild(newNode, existingNode)`。

```javascript
    const firstchildEl = document.getElementById('firstchild')
    const parentEl = document.getElementById('parent')
    
    const createEl = document.createElement('div')
    const innerhtml = createEl.innerHTML = 'i am a frontend developer'
    
    parentEl.replaceChild(createEl, firstchildEl)

    console.log(parentEl)                
```

![](https://www.freecodecamp.org/news/content/images/2021/01/kkk.png)

### How to Remove a Child Element
### 移除子元素

We are going to be using the  `removeChild()`  JavaScript method which accepts just one parameter ()that is the element you want to remove, which in this case is our original first element. It works in this order =>  `document.removeChild(element)`
我们使用 `removeChild()` 方法来移除指定元素（这里指的是第一个子元素），它接收一个参数：`document.removeChild(element)`。

```javascript
    const firstchildEl = document.getElementById('firstchild')
    const parentEl = document.getElementById('parent')
    
    parentEl.removeChild(firstchildEl)
    
    console.log(parentEl)
```

![](https://www.freecodecamp.org/news/content/images/2021/01/vvv.png)

## How to Add Styling with CSS
## 为元素添加 CSS 样式

From the previous examples, we saw how to create an element and append it to the specified parent element.
前面的示例中演示了如何创建元素，并将其追加到指定的父元素。

Therefore, for an element to have a style we have to add a CSS class to it. In this case we'll do it with JavaScript.
为了设定元素样式，我们需要为它添加 CSS 类，这里使用 JavaScript 来操作。

I am not only going to show you how to add a class. I will also show you how to remove a class and how to also toggle between classes.
我将为你演示如何添加、移除以及切换 CSS 类。

Don't worry, it's not difficult. I am here to walk you through all of it.
别担心，这并不难，我会为你详细介绍。

### How to Add a CSS Class
### 添加 CSS 类

Currently we have a normal HTML button with an id of "master" but without any style applied to it. See the image below:
现在有一个普通的 HTML 按钮，它的 id 为 "master"，没有应用额外样式，如下图：

![ttt](https://www.freecodecamp.org/news/content/images/2021/01/ttt.png)

The first thing we are going to do is create the CSS style for the button.
第一步，为这个按钮创建一个 CSS 样式。

Next, in our JavaScript I will add an event listener to the button so that, when you click it, JavaScript automatically adds the CSS style with a class of "button".
接着，在 JavaScript 代码部分为这个按钮添加一个事件监听器：点击按钮时为这个按钮元素添加“button”类样式。

```javascript
    <style>
        body{
             background-color: hotpink;
             display: flex;
             align-items: center;
        }
        
        .button{
             background-color: blueviolet;
             width: 200px;
             border: none;
             font-size: 2rem;
             padding: 0.5rem;
             border-radius: 5px;
             cursor: pointer;
        }
    </style>
    
    
    <button id="master">Click me</button>
    
    
    const buttonEl = document.getElementById('master')
    buttonEl.addEventListener('click', addFunction)
     
    function addFunction(){
        buttonEl.classList.add('button')
    }
```

After the button is clicked, you'll see the below. Beautiful right?
点击按钮之后，可以看到效果如下，好看吧？

![](https://www.freecodecamp.org/news/content/images/2021/01/jjj.png)

### How to Remove a Class
### 移除 CSS 类

Still using the same example above, we are going to remove the CSS style, this time around with  `classList.remove()`  in JavaScript. You probably already guessed what would happen, right?
还是使用上面的示例，我们要移除 CSS 类，这次会使用 `classList.remove()` 方法。也许你已经猜到结果了，对吧？

Exactly, the button will go back to its default state.
确实，这个按钮会变回默认样式。

```javascript

    const buttonEl = document.getElementById('master')
    buttonEl.addEventListener('click', addFunction)
    
    function addFunction(){
        buttonEl.classList.remove('button')
    }
```

### How to Toggle a Class
### 切换 CSS 类

Let's say you don't want to remove the CSS style completely. You want a way to toggle between the styled and unstyled button.
如果不想完全移除这个 CSS 样式，你可能希望能有一种方式能够能够在默认按钮和应用样式的按钮之间来回切换。

The  `classList.toggle()`  JavaScript method gives you that ability.
`classList.toggle()` 方法为这种操作提供了支持。

The  `classList.toggle()`  method is typically used in most social media platforms like Twitter. It allows you to like a post with a button and unlike it with that same button whenever you want.
像 Twitter 之类的社交媒体平台上通常会用到 `classList.toggle()` 方法，它使得用户可以通过点击按钮为一个帖子点赞，也可以随时点击这个按钮来取消点赞。

So JavaScript checks if our button has the CSS class.

If it has the class and you click the button, it REMOVES it. If it doesn't have the class and you click the button, it ADDS it.

```javascript

const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)

```

# Event handling

### What are HTML events?

HTML events are "things" that happen to HTML elements like the click of a button, input in a text area, and so on. When an event occurs like the ones above, you can write JavaScript code which we call an event handler that will be executed.

These event handlers are JavaScript functions. So when an event occurs on an element, the handler function is executed.

### Event listeners

So far we have been making use of event listeners in basically every example above. This should show how important event listeners are in manipulating the DOM.

To add an event listener to an element or any DOM object, we need a method which is  `addEventListener()`. This method is preferred to the old one where we include the event to be handled in the html markup.

With this the JavaScript is separated from the html markup which makes it cleaner and more readable.

I like the idea of separate JS, separate CSS, and so on, so if you are like me you would like this event listener.

An event listener accepts 3 parameters.

-   The first one is the type of event, like "click" and so on.
-   The second parameter is the function to be executed.
-   The third parameter is a boolean value specifying whether to use event bubbling or event capturing.  **This parameter is optional.**

> You can add many event handlers to one element.

> You can also add many event handlers of the same type to one element, like two "click" events.

## Conclusion

Knowing how to manipulate the DOM with JavaScript is very important. It's not something you can decide not to know.

If you understand the examples/illustrations I've given above, you might be able to build  **little**  JS projects. I can not over-emphasize the importance of building projects if you want to be a good developer.

Finding it difficult to build projects? Click the second and third link from the links below.

![kkk-1](https://media.giphy.com/media/mVJ5xyiYkC3Vm/source.gif)
