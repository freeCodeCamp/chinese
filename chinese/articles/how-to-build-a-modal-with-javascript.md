> -  原文地址：[How to Build a Modal with JavaScript](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)
> -  原文作者：[Victor Eke](https://www.freecodecamp.org/news/author/victoreke/)
> -  译者：dake0913
> -  校对者：

![How to Build a Modal with JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/How-to-build-a-modal-with-JavaScript.png)

你可能曾经遇到过这样的情况:你无意中试图在网页上执行一个操作，但幸运的是弹出一个窗口，要求你确认你的决定。

这个弹出窗口称为模态框。它是一个弹出并显示在其他页面内容前面的网页元素。

你可以使用模态框来做一些事情，比如存储你不想立即在网页上看到的信息，创建导航菜单，添加召唤行动元素，等等。

一个很好的例子是，当你试图关闭推文编辑菜单时，Twitter上出现的弹框。

![推特警告消息模态框](https://www.freecodecamp.org/news/content/images/2022/10/twitter_warning_message_modal.png)

你还可以将模态框用于其他事情，如创建召唤行动元素、导航菜单、通讯部件等。

作为一名web开发人员，知道如何构建一个模态框是个很方便的技能。在本教程中，我将带你走过如何使用HTML、CSS和JavaScript创建一个简单模态的过程。

以下是我们将制作的内容截图:

![一个用 html， css ，javascript创建的模态框](https://www.freecodecamp.org/news/content/images/2022/10/modal.png)

这些步骤很容易遵循,这样你就可以定制或创建你自己的scratch——这完全取决于你。在本文的最后,我将提供codepen文件供你玩一玩。

## Step 1 – 添加标签

让我们从html开始吧。

首先，你要添加一个`section`元素，并赋予它两个类，`modal`和`hidden`。在这个元素下，你还会有一个`div`元素，它的类是`overlay`和`hidden`。最后，添加一个`<button>`按钮元素，类为`btn`和`btn-open`。

就像这样:

```html
<section class="modal hidden"></section>
<div class="overlay hidden"></div>
<button class="btn btn-open">Open Modal</button>
```

-   带有`modal`的类的`section`将用于模态框的容器。

-   带有`overlay`类的`div`将作为覆盖的元素。这是模态框打开时你看到的黑色模糊背景。

-  类为`btn`和`btn-open`的按钮将作为你的模态框按钮，当你点击按钮时，打开模态框。

现在在你的模态框中，添加标记，并添加“X”按钮来关闭模态框。这个按钮的类为`btn-close`。

最后你的标记文本会像下面这样:

```html
<section class="modal hidden">
  <div class="flex">
    <img src="user.png" width="50px" height="50px" alt="user" />
    <button class="btn-close">⨉</button>
  </div>
  <div>
    <h3>Stay in touch保持联系</h3>
    <p>
      This is a dummy newsletter form so don't bother trying to test it. Not
      that I expect you to, anyways.这是一个虚拟的通讯表单，所以不要费心去测试它。反正我也不指望你这么做 :)
    </p>
  </div>

  <input type="email" id="email" placeholder="brendaneich@js.com" />
  <button class="btn">Submit</button>
</section>

<div class="overlay hidden"></div>
<button class="btn btn-open">Open Modal</button>
```

**注意** ⚠️ Take note of the hidden class added to the modal and the overlay element. This is very important because you'll target these classes to hide your modal and overlay using CSS.注意添加到模态框和覆盖元素的`hidden`类。这是非常重要的，因为你将使用CSS针对这些类来隐藏你的模态框和覆盖层。

这里是输出的结果:

![complete-markup](https://www.freecodecamp.org/news/content/images/2022/10/complete-markup.png)

## Step 2 – 设置模态框的样式

让我们从取消页面所有元素的内外边距开始，之后把模态框和打开模态框的按钮都居中对齐。

现在跳转到CSS页面添加这些样式：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  position: relative;
  min-height: 100vh;
}
```

下一步是设置模态框本身和内部元素的样式。这个过程有些冗长，所以我将直接复制粘贴样式并作简要说明。

```css
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 450px;
  padding: 1.3rem;
  min-height: 250px;
  position: absolute;
  top: 20%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.modal .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal input {
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9em;
}

.modal p {
  font-size: 0.9rem;
  color: #777;
  margin: 0.4rem 0 0.2rem;
}

button {
  cursor: pointer;
  border: none;
  font-weight: 600;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.4rem;
  font-weight: 700;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
}

.btn-open {
  position: absolute;
  bottom: 150px;
}

.btn-close {
  transform: translate(10px, -20px);
  padding: 0.5rem 0.7rem;
  background: #eee;
  border-radius: 50%;
}
```

这里是输出的结果：

![complete-modal-style](https://www.freecodecamp.org/news/content/images/2022/10/complete-modal-style.png)

刚才你设置了模态框元素的样式，和绝对定位。定位起作用的原因是之前给body元素设置了相对定位。

你也给模态框内部的元素设置了样式，但是我不会更深地解释细节，因为这部分不是我们的重要内容。

## Step 3 – 添加覆盖层overlay

对于覆盖层，你想让它在整个页面上有一个微妙的黑色背景和模糊。

由于你已经给body设置了相对定位，所以你可以用固定定位让overlay覆盖在body上。宽和高要设置为视窗的100%。

```css
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
}
```

这里是输出效果:

![overlay](https://www.freecodecamp.org/news/content/images/2022/10/overlay.png)

如果你只想让overlay只覆盖body而不覆盖模态框，你需要让模态框modal处在更高的`z-index`。

```css
.modal {
  z-index: 2;
}
```

现在模态框将在overlay的上层而不被覆盖。

![modal](https://www.freecodecamp.org/news/content/images/2022/10/modal-1.png)

到这里，你已经成功地创建了模态框并在它下面添加了一个覆盖层！但现在你并不想显示模态框，至少在点击`open-modal`按钮之前不要显示。

为了隐藏模态框，你需要让添加了`.hidden`的类（模态框和覆盖层）不显示。

```css
.hidden {
  display: none;
}
```

现在，页面中只有按钮显示。现在你可以在JavaScript中为模态框的功能做些事情了。

## Step 4 – 模态框的功能

在我们继续之前，我认为最好解释一下模态框是如何工作的。还记得你如何使用' hidden '类来隐藏模态框和覆盖层吗?要从元素中添加或删除这个类，需要使用DOM的classList元素。

但是，收敛，你需要使用DOM的`querySelector` 方法选中并把它们存在变量里，以便重复使用。

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
```

## 如何打开模态框

为了显示模态框，创建一个函数 `openModal`。在这个函数中，你将使用DOM `classList` 的属性，它采用了不同的方法比如'。remove() '和'。add() '从' modal '和' overlay '中移除' hidden '类。

```js
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
```

然后你可以使用' eventListener '把这个函数绑定到打开模态框按钮' openModalBtn '上。这样，只要点击这个按钮，函数就会被执行，这将显示模态框。

```js
openModalBtn.addEventListener("click", openModal);
```

现在，当你点击 `open modal` 按钮，它将把 `hidden` 样式移除，以便你能看到你的模态框。

这里是输出结果:

![Open modal](https://www.freecodecamp.org/news/content/images/2022/10/open-modal.gif)

## 如何关闭模态框

要关闭模态框，你也要创建一个函数 `closeModal`，在函数中，使用 `.add()` 方法把你移除的 `hidden` 添加回来。

`classList` 也有一个 `add()` 方法，你可以用它在你点击 `closeModal` 时，把隐藏的样式加回来。就像你给打开按钮添加一个 `eventListener` ，你还需要把函数绑定给`X`按钮关闭模态框——但现在，你要把`hidden`样式加回来。

```js
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
```

要关闭模态框，在关闭模态框按钮中添加一个' eventListener '来执行你刚刚编写的函数。

```js
closeModalBtn.addEventListener("click", closeModal);
```

Now when you click the close button, the function will add back the hidden class to the modal and overlay components, thus closing the modal.现在，当您点击关闭按钮时，该函数将把隐藏样式添加回模态框和覆盖层组件，从而关闭模态框。

这里是输出结果：

![close modal](https://www.freecodecamp.org/news/content/images/2022/10/close_modal.gif)

通常情况下，当你在模态框容器外部或网页主体上点击时，模态框也会关闭。为此，添加一个`eventListener`，在你点击覆盖层时关闭模态框。

```js
overlay.addEventListener("click", closeModal);
```

![close_modal_when_overlay_is_clicked](https://www.freecodecamp.org/news/content/images/2022/10/close_modal_when_overlay_is_clicked.gif)

## 如何在按下键盘时关闭模态框

除了在单击关闭按钮或覆盖层时关闭模态框外，您还可以附加一个事件侦听器来监视键盘事件。

在本例中，你可以希望在按下“Escape”键时关闭模态框，这与Twitter compose模态框示例非常相似。

```js
document.addEventListener("keydown");
```

但是这次你想要的事件类型不是` " click " `事件——你想使用` " keydown " `事件来执行你的函数。

接下来，你将编写一个条件，检查当前按下的键是否为`Escape`键，模态框是否包含`hidden`类。现在它打开了，你想执行` closemmodal `函数(本质上就是关闭模态窗口)。

```js
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});
```

当模态框打开时，你点击<kbd>Esc</kbd>键，它会关闭模态框。

有了这个，你已经成功地用HTML, CSS和JavaScript创建了一个模态组件，它就像预期的那样工作。🥳

下面是测试模态框效果的codepen文件:

See the Pen <a href="https://codepen.io/evavic44/pen/zYjjzoV"> Modal with overlay and blur</a> by Eke (<a href="https://codepen.io/evavic44">@evavic44</a>) on <a href="https://codepen.io">CodePen</a>.

## Conclusion

我真诚地希望你觉得这篇文章有趣或有用。如果你喜欢，请与你的朋友分享或订阅我的博客，这样你就不会错过任何之后发布的帖子。感谢你的阅读。

[GitHub](https://github.com/evavic44) | [Twitter](https://twitter.com/victorekea) | [Blog](https://eke.hashnode.dev) | [Portfolio](https://victoreke.com)
