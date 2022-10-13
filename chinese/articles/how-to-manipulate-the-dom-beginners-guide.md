> -   原文地址：[How to Manipulate the DOM - the Ultimate Beginner's Guide](https://www.freecodecamp.org/news/how-to-manipulate-the-dom-beginners-guide/)
> -   原文作者：Chibuike Okere
> -   译者：Humilitas
> -   校对者：

![How to Manipulate the DOM - the Ultimate Beginner's Guide](https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wxfDF8c2VhcmNofDZ8fGhlbHB8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

想必你已经听说过全能的 DOM 了——所以你才会在这里看这篇文章，对吧？如果你觉得它有点难，我可以保证，你在读完这篇文章之后就能够掌握操作 DOM 的相关知识。

开始之前，请允许我分享一个关于我是如何了解到 DOM 的趣事。

## 我是如何了解到 DOM 的

做了几个月的 web 开发之后，我还在学习古老的 HTML 和 CSS。我偶然地发现了 w3schools 的一个 DOM 课程，其中第一个示例是关于一个灯泡和两个按钮。

点击其中一个按钮会“打开”灯泡，点击另一个按钮则会“关闭”灯泡。我真的被搞晕了。

网站上的按钮为什么可以打开灯泡？怎么回事！？

我甚至为此发了个 Twitter。然后我发现他们不过是改变了图片元素的 src 属性，我心都碎了。不过无论如何，这事让我爱上了 DOM，它激发了我的求知欲。

如果你耐心读完本文，并动手实践其中涉及的示例，我保证 DOM 操作再也难不倒你。准备好了吗？开始吧！

> 为了便于理解，我把相关知识归纳为以下几个章节。

-   DOM 的定义及基本概念
-   如何选中 DOM 中的元素
-   如何遍历及移动 DOM 中的元素
-   如何编辑 DOM 中的元素
-   指定样式
-   DOM 的事件处理

喝杯咖啡放松一下，跟着我一起学习下面的章节。

![vvv-1](https://media.giphy.com/media/ceeFbVxiZzMBi/source.gif)

## DOM 的定义及基本概念

### 什么是 DOM？

DOM（Document Object Model——文档对象模型），可以简单理解为浏览器创建的节点树，每个节点有自己的属性和方法，可以通过 JavaScript 来操作这些属性、调用这些方法。

操作 DOM 的能力是 JavaScript 最独特和有用的特性之一。

下图是 DOM 树的视觉表示。

![images](https://www.freecodecamp.org/news/content/images/2021/01/images.png)

document 对象是 DOM 的核心/基础，执行任何形式的 DOM 操作都要访问 document 对象。

根元素 `html` 是 document 对象的子节点。

下一行是 `body` 和 `head` 元素，它们互为兄弟节点，并且都是 `html` 的子节点。

head 元素下面有一个 title 元素，它是 head 元素的子节点，同时也是文本节点“my text”的父节点。

body 元素下面有两个元素（`a` 元素和 `h1` 元素），它们互为兄弟节点，并且都是 `body` 元素的子节点。

最后，`href` 属性和文本节点“my link”都是 `a` 元素的子节点，同样的，文本节点“My header”是 `h1` 元素的子节点。

这些对于新手来说可能看起来有些复杂，不过请相信我——熟能生巧。

## 如何选中 DOM 中的元素

为了操作 DOM 中的元素，需要先选中指定的元素，幸好，我们有四种常用方式可以用来选中元素。

### getElementById() 方法

最常见的方式是通过 id 属性来选中元素。

下面的示例中，`getElementById()` 方法通过 id="master" 来查找元素。

```javascript
<p id="master">i love javascript</p>

<script>
	const masterEl = document.getElementById('master')
	console.log(masterEl) //<p id="master">i love javascript</p> 
</script>
```

id 是区分大小写的，比如：“master”和“Master”就是两个完全不同的 id。

选中了一个元素之后，就可以给它添加一些样式、编辑它的属性、遍历它的父元素或子元素。

### getElementsByClassName() 方法

这个方法返回文档中所有类名（class）包含指定值的元素的集合。

例如，下面的 HTML 页面中有三个 class="master2" 的元素，我通过“btn”这个 id 选中了其中的按钮。 

点击这个按钮将会选中所有类名包含“master2”的元素，并改变其中第三个元素的 `innerHTML` 属性值。

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

点击按钮前：

![](https://www.freecodecamp.org/news/content/images/2021/01/22.png)

点击按钮后：

![](https://www.freecodecamp.org/news/content/images/2021/01/444.png)

> 这里用到了 `addEventListener()` 方法，稍后会介绍。

### getElementsByTagName() 方法

这个方法接收 html 标签名作为参数，根据在文档中出现的先后顺序返回这个标签的所有元素。

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

### 使用 CSS 选择器

#### .querySelector()

这个方法返回第一个匹配指定选择器的元素，它可以接收所有 CSS 样式选择器作为参数，它可以通过标签名、类名或 ID 来选择元素。

```javascript
<div id=master>i am a frontend developer</div>

<script>
	const master = document.querySelector("#master") 
</script>
```

上面的方法接收一个 CSS 选择器作为参数，返回匹配这个选择器的第一个元素。

#### .querySelectorAll()

这个方法跟上一个方法类似，区别在于它返回的是包含所有匹配元素的节点集合。

```javascript
<p class="master">React</p>
<p class="master">Vue</p>
<p class="master">Angular</p>

<script>
	const master = document.querySelectorAll(".master") 
	console.log(master[1])  //<p class="master">Vue</p>
</script>
```

### 选择 DOM 元素的方法总结

在需要选择 DOM 元素的时候，你有四种不同的方式可以选择，这四种不同方式做的都是同一件事（选择一个或多个元素）。

如果不记得第一种方式，可以用第二种，如果碰巧前两种都忘了，还有第三种、第四种方式可以用。是不是我或者 JavaScript 让我们的生活变得更简单了？:)

我个人建议尽量使用第一种方式或第四种方式中的第一个方法（queryselector）。你之前学习 HTML 的时候应该知道，文档中元素的 id 是不允许重复的，也就是说 id 是文档中元素的唯一标识符。

考虑到这一点，通过 id 来选择元素是“安全”的做法，因为这样你就不会把同样的操作应用在多个不同元素上了（除非你刻意要这样做——当然了，只要你想的话，也可以选择其他方式）。

## 如何遍历 Document

现在你应该会认同我的说法，即 HTML 文档中的一切都是节点。就连 HTML 元素中的文字也是文本节点。

在 DOM 中，可以利用前面讲到的节点关系（父节点、子节点、兄弟节点等）来遍历节点树、访问节点。

> 可以创建新节点，并且所有节点都可以被修改或删除。

### 回顾一下

-   每个节点都有且只有一个父节点，根节点除外（它没有父节点）。
-   一个节点可以有多个子节点。
-   同一个父节点下的子节点互为兄弟节点。

在这个章节中，我们要学习如何获取元素的父节点、兄弟节点以及子节点。为此，我会用到下面这些节点属性。

-   parentNode
-   childrenNodes
-   firstElementChild
-   lastElementChild
-   nextElementSibling
-   previousElementSibling

我会使用下面的 HTML 页面来展示这些节点属性的用法。在第四章节中，我会演示如何操作 DOM。

这就是本文的目的——了解如何操作 DOM。如果不懂如何操作 DOM 的话，了解了选择元素和遍历 DOM 的方法也没什么用处。了解如何为元素添加 CSS 样式、如何创建并追加元素、如何设置 innerHTML 以及如何做事件处理至关重要。

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

### 创建元素

上面代码中的 HTML 片段中有一个包含 5 个子元素的父元素，如果想使用 JavaScript 往其中添加一个 `div` 元素，首先需要调用 `createElement()` 方法来创建一个新的元素：

```javascript
const createEl = document.createElement('div')
console.log(createEl) //<div></div>
```

### 设置 innerHTML

我们成功创建了一个 `div` 标签，不过现在其中还没有文本节点，调用 `.innerHTML()` 方法来为它添加文本节点。

```javascript
const innerhtml = createEl.innerHTML = 'i am a frontend developer'
console.log(createEl) //<div>​i am a frontend developer​</div>​
```

### 在页面中追加元素

目前已经完成了创建元素以及往其中插入文本节点的操作，但是创建出的新元素还没有插入到 DOM 树中。

现在演示如何将创建出的新元素追加到 HTML 页面中，代码如下：

```javascript
const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'
const parentEl = document.getElementById('parent')
parentEl.appendChild(createEl)
```

![](https://www.freecodecamp.org/news/content/images/2021/01/Document---Google-Chrome-16_01_2021-11_50_14-PM--2-.png)

### 在指定元素之前插入元素

注意上面的控制台打印信息截图，追加的 `div` 标签子元素自动地插入到了父元素的最下面。

如果出于某种原因想要把元素追加到其它位置该怎么办？也许是第一个元素之前或者是第四个元素之前的位置。这些情况都是很有可能出现的。下方代码把元素插入到当前第一个子元素之前。

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

### 替换子元素

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

### 移除子元素

我们使用 `removeChild()` 方法来移除指定元素（这里指的是第一个子元素），它接收一个参数：`document.removeChild(element)`。

```javascript
const firstchildEl = document.getElementById('firstchild')
const parentEl = document.getElementById('parent')

parentEl.removeChild(firstchildEl)

console.log(parentEl)
```

![](https://www.freecodecamp.org/news/content/images/2021/01/vvv.png)

## 为元素添加 CSS 样式

前面的示例中演示了如何创建元素，并将其追加到指定的父元素。

为了设定元素样式，我们需要为它添加 CSS 类，这里使用 JavaScript 来操作。

我将为你演示如何添加、移除以及切换 CSS 类。

别担心，这并不难，我会为你详细介绍。

### 添加 CSS 类

现在有一个普通的 HTML 按钮，它的 id 为“master”、没有应用额外样式，如下图：

![ttt](https://www.freecodecamp.org/news/content/images/2021/01/ttt.png)

第一步，为这个按钮创建一个 CSS 样式。

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

点击按钮之后，可以看到效果如下，好看吧？

![](https://www.freecodecamp.org/news/content/images/2021/01/jjj.png)

### 移除 CSS 类

还是使用上面的示例，我们要移除 CSS 类，这次会使用 `classList.remove()` 方法。也许你已经猜到结果了，对吧？

没错，这个按钮会变回默认样式。

```javascript
const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)

function addFunction(){
	buttonEl.classList.remove('button')
}
```

### 切换 CSS 类

如果不想完全移除这个 CSS 样式，你可能希望能有一种方式让按钮的样式在默认样式和指定样式之间来回切换。

`classList.toggle()` 方法为这种操作提供了支持。

像 Twitter 之类的社交媒体平台上通常会用到 `classList.toggle()` 方法，它使得用户可以通过点击按钮为一个帖子点赞，也可以随时点击这个按钮来取消点赞。

可以通过 JavaScript 代码来检查按钮是否包含指定的 CSS 类。

如果按钮包含这个类，点击按钮会将这个类移除，反之亦然。

```javascript
const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)

function addFunction(){
    buttonEl.classList.toggle('button')
}
```

# 事件处理

### 什么是 HTML 事件？

它是发生在 HTML 元素上的一些“事件”，比如按钮点击、文本输入等等。当事件触发时，就会执行对应的称为事件处理程序的 JavaScript 代码。

这些事件处理程序都是 JavaScript 函数，当元素触发某个事件时，事件处理器函数就会执行。

### 事件监听器

到目前为止，我们基本上在之前的每个示例中都用到了事件监听器，可见它在操作 DOM 的过程中是多么重要。

为了给一个元素或者 DOM 对象添加事件监听器，需要用到 `addEventListener()` 方法。使用这个方法要优于以前在 html 标签中绑定事件监听器的做法。

这样能让 JavaScript 和 html 分离，使得代码更简洁、可读性更强。 

我很认同将各类代码分离的做法，如果你的想法和我一样，那你应该会更喜欢这种绑定事件监听器的方式。

事件监听器接收三个参数。

-   第一个参数是事件类型，如“click”。
-   第二个参数是将要执行的函数。
-   第三个参数是一个布尔值，指定使用事件冒泡还是事件捕获。 **此参数是可选的**

> 可以为一个元素添加多种事件的处理程序。

> 也可以为一个元素的一种事件添加多个事件处理程序，比如给“click”事件添加两个事件处理程序。

## 总结

学会如何使用 JavaScript 操作 DOM 是非常重要的，这是必备的知识。

如果你理解了文中的示例和插图，可以自己构建一个小项目试试。如果想要成为优秀的开发者，动手实践至关重要。

![kkk-1](https://media.giphy.com/media/mVJ5xyiYkC3Vm/source.gif)
