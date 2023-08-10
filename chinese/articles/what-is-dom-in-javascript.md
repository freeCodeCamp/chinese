> -  原文地址：[What is the DOM? A Behind-the-Scenes Guide](https://www.freecodecamp.org/news/what-is-dom-in-javascript/)
> -  原文作者：[Kedar Makode](https://www.freecodecamp.org/news/author/kedar/)
> -  译者：Papaya HUANG
> -  校对者：

![What is the DOM? A Behind-the-Scenes Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/What-is-DOM-and-Events--in-JavaScipt--2-.png)

对于一名高效工作的前端开发者来说，了解 JavaScript 中的 DOM 和事件是如何运作非常重要。

本文将讲解 DOM 是什么以及如何运作的。

## DOM 是什么?

DOM 的全称是文档对象模型，是连接 JavaScript 和 web 浏览器之间的接口。

通过 DOM，你可以编写 JavaScript 来创建、修改、删除 HTML 元素，设置样式、类别和属性，监听以及和响应事件。

HTML 文档生成 DOM 树之后，你就可以与之交互。DOM 是一个复杂的 API，包含与 DOM 树交互的方法和属性。

![Frame-70-1](https://www.freecodecamp.org/news/content/images/2022/09/Frame-70-1.png)

DOM 图解

你可以在[这个网站](https://fritscher.ch/dom-css/)视觉化 DOM。

## DOM 是如何运作的 – 幕后揭秘

DOM 的组织形式非常巧妙。顶层元素被称作`EventTarget`。你可以借助下图更好地了解工作原理。

![DOM-behind-the-scene-1](https://www.freecodecamp.org/news/content/images/2022/09/DOM-behind-the-scene-1.png)

`EventTarget`接口由可以接收事件、并且可以创建监听器的对象实现。换句话说，任何事件目标都会实现与该接口有关的这三个方法。虽然**Element**及其子项、**Document** 和 **Window** 是最常见的事件目标（EventTarget），但其他对象也可以是。

Window 代表了浏览器窗口。所有全局的 JavaScript 对象、函数和变量都自动归属于 window 对象。全局变量是 window 对象的属性，全局函数是 window 对象的方法。即便是文档对象（HTML DOM）也是 window 对象的属性。

```js
window.document.getElementById("header");

//两者相同

document.getElementById("header");
```

Nodes 归属于 DOM（即文档对象模型）。在 DOM 中，如元素、属性、文本等都被组织在一个分层级的树状结构中，相互为子或父元素。这些个体就被称为 node（节点）。

上图中的 Node 可以被 JavaScript 对象表示。我们通常使用`document.querySelector()`, `document.getElementById()`等方法来调用这些节点。

现在让我们看看文档。

## 如何使用 DOM 来选择、创建和删除元素

因为 DOM，我们可以使用 JavaScript 来选择、删除和创建元素。

### 如何选择元素

JavaScript 中有各种各样的方式来选择 HTML 元素：

-   document.getElementById();
-   document.getElementByClassName();
-   document.getElementByTagName();
-   document.querySelector();
-   document.querySelectorAll();

#### 如何使用 `document.getElementById()` 方法

 `getElementById()`方法返回的元素 id 与传入的字符串匹配。因为 HTML 元素的 id 是唯一值，所以这种方式的速度最快。

例子:

```js
const ele = document.getElementById("IDName");
console.log(ele); // 打印对应id名称的元素
```

#### 如何使用`document.getElementByClassName()`方法

`document.getElementByClassName()`返回一个`HTMLCollection`，这个集合中的元素类名与传入的字符串匹配。我们可以同时搜索多个类别名称，传入的时候用空格隔开，它会实时返回的 HTMLCollection。

“实时”是什么意思？就是说，一旦我们给传入的类名添加一个元素，HTMLCollection 会自动获取这个新的元素。

例子:

```js
const ele = document.getElementByClassName("ClassName");
console.log(ele); // 打印实时HTMLCollection
```

#### 如何使用`document.getElementByTagName();`方法

`document.getElementByTagName()`返回一个`HTMLCollection`，这个集合中的元素标签与传入的字符串匹配。可以对任何 HTML 元素调用这个方法，它会返回实时的 HTMLCollection。

例子:

```js
const paragraph = document.getElementByTagName("p");
const heading = document.getElementByTagName("h1");

console.log(paragraph); // p 元素 HTMLCollection
console.log(heading); // h1 元素 HTMLCollection
```

#### 如何使用 document.querySelector()方法

`document.querySelector()`返回满足传入条件的第一个 HTML 元素。在这个方法中我们可以传入类名、id 和标签名。参见例子：

```js
const id = document.querySelector("#idname"); // 使用id
const classname = document.querySelector(".classname"); // 使用类名
const tag = document.querySelector("p"); // 使用标签名
```

选择规则：

-   若使用类别名，在开头要添加(.)， 如 (".classname")
-   若使用 id， 在开头要添加(#)，如("#id")
-   若使用标签，可以直接使用标签名，如 ("p")

#### 如何使用 document.querySelectorAll()方法

`document.querySelectorAll()`是`querySelector`方法的延伸。这个方法返回**所有**匹配传入值的元素。该方法返回一个不会实时更新的 NodeList。

```js
const ele = document.querySelectorAll("p");
console.log(ele); // 返回p标签的NodeList
```

**注意**: HTMLCollection 是实时更新的，但是 NodeList 并不是。

### 如何创建元素

你可以在 JavaScript 中创建 HTML 元素，并且动态地添加到 HTML 中。可以使用`document.createElement()`来添加元素，在括号内传入元素的标签名。

元素创建成功之后，可以添加类名，属性以及该元素的文本内容。

**例子:**

```js
const ele = document.createElement("a");
ele.innerText = "Click Me";
ele.classList.add("text-left");
ele.setAttribute("href", "www.google.com");

// 类似于以下标记
// <a href="www.google.com">Click Me</a>

// 在HTML中更新已有的元素
document.querySelector(".links").prepend(ele);
document.querySelector(".links").append(ele);
document.querySelector(".links").before(ele);
document.querySelector(".links").after(ele);
```


在上述例子中，我们在 JavaScript 中创建了一个 anchor 标签，并且添加了类名和属性。在 HTML 中更新这个元素有以下四种方法：

-   `prepend()`: 在父节点的第一个子节点之前插入数据
-   `append()`: 对位于最后一个索引的元素之后插入数据或内容
-   `before()`: 在选定的元素前插入数据
-   `after()`: 在选定的元素后插入数据。也可以说是在匹配的其父节点的子节点列表之后插入。（可以不作为元素插入，作为相邻的文本内容插入）。

### 如何删除元素

我们已经了解了如何使用 JavaScript 创建元素以及如何将它添加到 HTML 中。但是如果我们想要删除一个 HTML 元素呢？很简单！只需要对这个元素调用`remove()`方法。

**例子:**

```js
const ele = document.querySelector("p");

// ele被点击后就会被删除
ele.addEventListener('click', function(){
	ele.remove();
})
```

## 如何通过 JavaScript 来控制 CSS

我们已经学习了如何通过 JavaScript 来控制 HTML，现在我们来学习如何通过 JavaScript 来控制 CSS，帮助你动态地更改页面。

如果想要通过点击一个元素，就更改这个元素的背景颜色的话，可以通过 JavaScript 来实现。

**语法如下:**

```js
const ele = document.querySelector("desired element");

ele.style.propertyName = value;
// e.g.
//ele.style.color = red;
```

当使用 JavaScript 来修改 CSS 属性的时候，需要注意在 CSS 中 `-` 用来连接单词，如 `background-color`但在 JavaScript 中我们使用 `backgroundColor` (驼峰样式)。

**例子:**

```js
const ele = document.querySelector("div");
ele.style.backgroundColor = "red";
```

假设你已经给项目编写好了 CSS，你希望通过 JavaScript 来添加类名，可以使用`classList`。

**例子:**

```js
const ele = document.querySelector(".link");
ele.classList.add("bg-red"); // 为已经存在的列表添加bg-red类名
ele.classList.remove("pb-4");// 为已经存在的列表删除pb-4类名
ele.classList.toggle("bg-green"); // 将bg-red类切换到现有的类列表中，这意味着如果它已经存在，那么它将被删除，如果它不存在，它将被添加。
```

当我们使用`classList`时，直接对元素进行添加、删除或切换类。这就像在更新现有的类。

`element.className`的特别之处在于，它删除了所有现有的类别，然后添加一个新的类别。

**例子:**

```js
const ele = document.querySelector(".link");
ele.classList.add("bg-red"); // 在现有的类别中添加bg-red类别
ele.classList.remove("pb-4");//从现有的类别中删除pb-4类别

ele.className = "p-10"; // 删除所有现有类别，添加p-10
```

## 如何使用事件处理器

对象状态的改变被称作为**事件**。对事件做出反应的过程被称为**事件处理**。

当用户点击鼠标、让鼠标在元素上滑过、按键等时，事件就发生了。所以当你想在事件发生时做一些事情的话，就可以使用事件处理器来引发这个事件。

我们使用事件处理器在事件发生的时候来执行一些 JavaScript 代码。在 JavaScript 中有许多不同的事件处理器 (这里是一份简单的[列表](https://way2tutorial.com/html/html5_events_handler_list.php))，但将事件处理器添加到元素的方法相同。

**语法如下:**

```js
const ele = document.querySelector("a");

ele.addEventListener("event", function(){
	// 回调函数
});
```

你可以使用的事件

-   click（点击鼠标）
-   mouseover（鼠标移动到某个元素）
-   mouseout（鼠标离开某个元素）
-   keypress（按下键盘）
-   keydown（按下键盘）

**这里是使用"click"事件的例子:**

```js
const ele = document.querySelector("a");

ele.addEventListener("click", function(){
	ele.style.backgroundColor = "pink";
});
```

## 事件传播：冒泡和捕获

事件传播决定了元素接收事件的顺序。有两种处理 DOM 中事件传播顺序的方式：事件冒泡和事件捕获。

![Frame-71-1](https://www.freecodecamp.org/news/content/images/2022/09/Frame-71-1.png)

### 什么是事件冒泡?

当一个事件发生在一个组件时，首先会在该组件上触发事件处理器，然后传播到它的父组件，一直向上到其他的父组件。

事件处理器的默认情况时从中心组件一路向外到最外层的组件传播。

### 什么是事件捕获？

这个过程和冒泡刚好相反。事件处理器首先作用在父组件，然后再作用到触发处理器的组件。

简言之，事件首先由最外层的元素捕获，然后传递到最内层的元素。这个过程也被称作涓涓细流。

**让我们看一下下面的例子:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <style>
        nav{
            display: flex;
            justify-content: center;
            padding: 30px;
        }

        nav li{
            list-style: none;
            padding: 5px;
        }

        nav li a{
            text-decoration: none;
            padding: 20px;
        }
    </style>
</head>
<body>
    
    <div>
        <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
    </div>

    <script>
        const navbar = document.querySelector("nav");
        navbar.addEventListener('click', function(){
            navbar.style.backgroundColor="green"
        });

        const anchor = document.querySelector("a");
        anchor.addEventListener("click", function(){
            anchor.style.backgroundColor="pink";
        })
    </script>
</body>
</html>
```

代码效果如图：

![Screenshot-2022-09-26-142920](https://www.freecodecamp.org/news/content/images/2022/09/Screenshot-2022-09-26-142920.png)

仔细看上面的代码示例，我分别在`nav`标签和`anchor`标签添加了事件处理器：当你点击`nav`的时候背景色会变成绿色，而当点击`anchor`标签的时候，背景色会看成粉色。

但是当你点击`anchor`标签的时候，anchor 和 nav 的背景色都发生了变化。这是因为**事件冒泡**。

**当你只点击 nav 元素的时候发生的事情：**

![Frame-72--1-](https://www.freecodecamp.org/news/content/images/2022/09/Frame-72--1-.png)

**点击 nav 元素的时候发生的事情**

**当你只点击 anchor 元素的时候发生的事情:**

![Frame-73--1-](https://www.freecodecamp.org/news/content/images/2022/09/Frame-73--1-.png)

**当你点击 anchor 元素的时候发生的事情**

停止事件传播的方式是在事件发起的元素的事件处理器上使用 `stopPropagation()`。这样就可以阻止 nav 元素因为上面的原因被激活。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <style>
        nav{
            display: flex;
            justify-content: center;
            padding: 30px;
        }

        nav li{
            list-style: none;
            padding: 5px;
        }

        nav li a{
            text-decoration: none;
            padding: 20px;
        }
    </style>
</head>
<body>
    
    <div>
        <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
    </div>

    <script>
        const navbar = document.querySelector("nav");
        navbar.addEventListener('click', function(){
            navbar.style.backgroundColor="green"
        });

        const anchor = document.querySelector("a");
        anchor.addEventListener("click", function(e){
            e.stopPropagation();
            anchor.style.backgroundColor="pink";
        })
    </script>
</body>
</html>
```

## 如何遍历 DOM

"优秀的 JavaScript 开发者应该知道如何遍历 DOM — 即 **从一个元素选择到另一个元素的行为** " – [Zell Liew](https://zellwk.com/blog/dom-traversals/)

现在我们来看看为什么遍历会比 `document.querySelector()`方法好用，以及如何像专家一样遍历。

有三种遍历 DOM 的方式：

-   向上
-   向下
-   相临

### 如何向上遍历 DOM

有两种向上遍历 DOM 的方式：

-   parentElement
-   closest

`parentElement`是选取父元素的属性，如下：

```js
const ele = document.querySelector("a");
console.log(ele.parentElement); // <div>
```

`parentElement`可以完美地选择上一层的元素，而`closest`可以让你选择上几层的元素。 `closest`可以选择符合选择器最近的祖先元素。

使用`closest`的例子：

```html
<div>
    <div class="demo">This is sample
          <div class="demo">This is heading
            <div class="heading"> This
                heading 2</div>
        </div>
    </div>
</div>
```

```js
const ele = document.querySelector(".heading");
console.log(ele.closest(".demo")); // This is heading
```

在上述代码中我们选在离`.heading`最近并且类名为 `.demo`的元素。

### 如何向下遍历 DOM

我们可以在选择器中使用`children`方法来向下遍历，就可以选择到直属子元素。

**例子:**

```html
<div>
    <a href="#">Link-1</a>
    <a href="#">Link-2</a>
    <a href="#">Link-3</a>
    <a href="#">Link-4</a>
</div>
```

```js
const ele = document.querySelector("div");
const child = ele.children;

console.log(child); // 返回HTMLCollection
// div中的4个元素
```

### 如何遍历相邻的 DOM

遍历相邻的 DOM 很有趣，有两种主要的方法：

-   previousElementSibling
-   nextElementSibling

使用`previousElementSibling`方法，我们可以选择 HTML 中的前一个元素：

```html
<div>
    <a href="#">Link-1</a>
    <h1>Heading</h1>
</div>
```

```js
const ele = document.querySelector("h1");
console.log(ele.previousElementSibling); // <a href="#">Link-1</a>
```

使用`nextElementSibling`，我们可以选择 HTML 中的后一个元素：

```html
<div>
    <a href="#">Link-1</a>
    <h1>Heading</h1>
</div>
```

```js
const ele = document.querySelector("a");
console.log(ele.nextElementSibling); // <h1>Heading</h1>
```

## **总结**

希望你已经了解 JavaScript 中的 DOM 是如何工作的，感谢阅读！

你可以在以下地方关注我：

-   [Twitter](https://twitter.com/Kedar__98)
-   [LinkedIn](https://www.linkedin.com/in/kedar-makode-9833321ab/?originalSubdomain=in)
-   [Instagram](https://www.instagram.com/kedar_98/)
