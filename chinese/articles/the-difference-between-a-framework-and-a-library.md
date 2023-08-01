> - 原文地址：[The Difference Between a Framework and a Library](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)
> - 原文作者：[Brandon Wozniewicz](https://www.freecodecamp.org/news/author/brandon/)
> - 译者： [luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Difference Between a Framework and a Library](https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg)

开发人员经常交替使用 "库" 和 "框架" 这两个词。但这是有区别的。

框架和库都是由其他人编写的代码，用于帮助解决常见问题。

例如，假设你有一个程序，你打算处理字符串。你决定保持你的代码 DRY（不要重复自己），并写一些像这样的可重复使用的函数:

```js
function getWords(str) {
   const words = str.split(' ');
   return words;
}
function createSentence(words) {
   const sentence = words.join(' ');
   return sentence;
}
```

恭喜你。你已经创建了一个库。

框架或库并没有什么神奇之处。库和框架都是别人写的可重复使用的代码。它们的目的是帮助你以更简单的方式解决常见的问题。

我经常用房子来比喻网络开发的概念。

一个库就像去宜家一样。你已经有了一个家，但你需要在家具方面得到一点帮助。你不觉得自己的桌子是从头开始做的。宜家允许你挑选不同的东西放在你的家里。你在控制之中。

另一方面，一个框架，就像建造一个样板房。在建筑和设计方面，你有一套蓝图和一些有限的选择。归根结底，承包商和蓝图是控制的。他们会让你知道何时何地可以提供你的意见。

#### The Technical Difference

框架和库之间的技术区别在于一个叫做控制反转的术语。

当你使用一个库时，你负责应用程序的流程。你要选择何时何地调用库。当你使用一个框架时，框架负责程序的流程。它提供了一些地方让你插入你的代码，但是它根据需要调用你插入的代码。

让我们看一个使用 jQuery（一个库）和 Vue.js（一个框架）的例子。

想象一下，我们想在出现错误时显示一个错误信息。在我们的例子中，我们将点击一个按钮，并假装发生了错误。

#### 使用 jQuery

```html
// index.html
<html>
   <head>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"
      </script>
      <script src="./app.js"></script>
   </head>
   <body>
      <div id="app">
         <button id="myButton">Submit</button>
       </div>
   </body>
</html>
// app.js
// A bunch of our own code, 
// followed by calling the jQuery library
let error = false;
const errorMessage = 'An Error Occurred';
$('#myButton').on('click', () => {
  error = true; // pretend some error occurs and set error = true
  if (error) {
    $('#app')
       .append(`<p id="error">${errorMessage}</p>`);
  } else {
    $('#error').remove();
  }
});
```

注意我们如何使用 jQuery。我们告诉我们的程序我们想在哪里调用它。这很像去一个实体图书馆，从书架上抽出某些我们想要的书。

这并不是说 jQuery 的函数不需要某些输入，当我们调用它们，但 jQuery 本身就是这些函数的一个库。我们是负责的。

#### 使用 Vue.js

```html
//index.html
<html>
   <head>
      <script src="https://cdn.jsdelivr.net/npm/vue"></script>
      <script src="./app.js"></script>
   </head>
   <body>
      <div id="app"></div>
   </body>
</html>
const vm = new Vue({
  template: `<div id="vue-example">
               <button @click="checkForErrors">Submit</button>
               <p v-if="error">{{ errorMessage }}</p>
             </div>`,
  el: '#vue-example',
  data: {
    error: null,
    errorMessage: 'An Error Occurred',
  },
  methods: {
    checkForErrors()  {
      this.error = !this.error;
    },
  },
});
```

有了 Vue，我们就得填空了。Vue 的构造函数是一个具有某些属性的对象。它告诉我们它需要什么，然后在幕后，Vue 决定何时需要它。Vue 主导了对程序的控制。我们把我们的代码插入 Vue 中。Vue 是负责的。

无论是库还是框架，其区别在于是否存在控制反转。

#### 关于约束度的说明

你会经常听到框架和库被描述为 "有约束" 或 "无约束"。这些术语是主观的。它们试图定义开发者在构建其代码时的自由度。

框架比非框架更有约束，因为--根据定义--控制反转，对应用设计的自由度会变小。

同样，某件事的程度是主观的。例如，我个人认为 Angular 是一个高度有约束的框架，而 Vue.js 是一个不太有约束的框架。

### 总结

- 框架和库都是由其他人编写的代码，可以帮助您以不那么冗长的方式执行一些常见任务。
- 一个框架主导了对程序的控制。它告诉开发者他们需要什么。库则不然。程序员在他们需要的地方和时候调用这个库。
- 一个库或框架给开发者的自由度决定了它的 "约束" 程度。

谢谢你的阅读!
