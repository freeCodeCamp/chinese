> -  原文地址：[Event Bubbling and Event Catching in JavaScript and React – A Beginner's Guide](https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/)
> -  原文作者：[Mariya Diminsky](https://www.freecodecamp.org/news/author/mariya-diminsky/)
> -  译者：PapayaHUANG
> -  校对者：

![Event Bubbling and Event Catching in JavaScript and React – A Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/pexels-anthony-132477.jpg)

这篇文章将帮助你像一位专业程序员一样理解事件冒泡和事件捕获。我将用简单、清晰的语言帮助你了解事件传播在JavaScript和React中的工作机制。❤

阅读完从事件冒泡到事件捕获的完整介绍，你就可以在项目练习中学以致用。


你将学习到：
-   ✨ [何为事件委托？](#何为事件委托？)
-   ✨ [何为事件冒泡？](#何为事件冒泡？)
-   ✨ [在JavaScript中事件冒泡是如何产生的？](#how-event-bubbling-happens-in-javascript)
-   ✨ [在React中事件冒泡是如何产生的？](#how-event-bubbling-happens-in-react)
-   ✨ [如何在你的组件中终止事件冒泡](#how-to-stop-event-bubbling-in-your-components)
-   ✨ [对比Event.target和Event.currentTarget](#event-target-vs-event-currenttarget)
-   ✨ [更新后的事件执行顺序以及JavaScript中的useCapture参数](#updated-event-firing-order-and-usecapture-param-in-javascript)
-   ✨ [哪些事件不冒泡，如何处理这些事件？](#which-events-do-not-bubble-and-how-are-they-handled)
-   ✨ [React 16及过往版本中的事件监听器对比React 17及以上](#event-listeners-in-react-version-16-and-before-vs-version-17-)
-   ✨ [特殊情况：当需要执行父元素的时候怎么办？](#special-edge-case-what-if-you-need-an-outer-parent-to-fire-too)

## 何为事件委托？
长话短说，事件委托是一种强大的JavaScript技术，这种技术使得事件监听更加高效。

### 👍 优点 (下文更多补充)

-   因为仅有一个事件监听添加在顶层的父元素，而不是在每一个子元素上都添加监听器，所以这个技术效率高。

### 👎 缺点 (下文更多补充)

-  一旦触发内部子元素，所有隶属于该元素的子元素和父元素都会被触发（由冒泡和铺货引起）。必须出发特定的事件对象，才能阻止发生上述问题。

**冒泡**和**捕获** (下文更多补充) 促成了事件委托模式。

## 何为事件冒泡？

假设有一个女孩儿叫`Molly`，恰好她不是大活人，而是（🥁此处有掌声）一个React模块。害！可真巧！
![shiba inu meme "wow such convenience. much impress. so wow"](https://www.freecodecamp.org/news/content/images/2021/09/image-19.png)

图片生成自 [https://memegenerator.net/](https://memegenerator.net/)


她的单亲家长叫`div`，在这位家长上绑定了一个`onClick`事件监听器，一旦被点击，所有人就被叫到餐桌前吃饭。

在这个`div`内包含了若干个`button`元素，一旦点击，便出现一条准备食物的信息。（即下文中的`console.log`）。

```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat() {
        console.log("Hey fam! Food's ready!");
    }

    handleCookEggs() {
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}>
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

下面展示了点击每个按钮会发生什么：

如果需要更直观的体验，这里有一个codepen版本：

[**事件冒泡例子**](https://codepen.io/maariyadiminsky/pen/MWobvZd)

点击按钮后，发生了以下事件：
1.  首先，按钮绑定的事件监听器被触发。
2.  然后，父元素`div`的事件监听器也被触发。

多数情况下，或许你只希望绑定在按钮上的事件监听器被激活，但例子里面的情况一样，父元素的事件监听器也被触发了，这就是****✨事件冒泡✨****。

在下文中，我将分析到底发生了什么，以及我们如何处理这个问题。
## 在JavaScript中事件冒泡是如何产生的

### 事件冒泡为何存在？
JavaScript在设计事件传播模型的其中一个初衷是让事件捕获更加方便。即可以从单一源头（父元素）捕获，而非每一个子元素上添加事件监听器。
### 事件传播的触发顺序


事件传播分三个阶段：
![chart displaying event propagation](https://www.freecodecamp.org/news/content/images/2021/09/image-20.png)

图片来源于[https://ehsankorhani.com/](https://ehsankorhani.com/)

1.  🟢**捕获阶段**  –  这是触发事件后的第一个阶段。事件首先在顶层被“捕获”或者说传播。顶层即`window`对象，然后是`document`对象，再就是`html`元素，之后抵达最内部的元素。事件传播由上到下一直抵达到`event.target`（即你点击触发事件的元素）。
2.  🟢 **目标阶段**  –  当抵达`event.target`后便进入第二个阶段。当用户点击按钮，这个按钮便是`event.target`所指的元素。
3.  🟢 **冒泡阶段** – 这是第三个阶段。该阶段起始于`event.target`，一路向上传播直到重新触达顶层元素（虽然顶层父元素此时不会被再次调用）。

值得注意的是，即便事件传播分为三个主要阶段，但是目标阶段并没有被独立出来。事件监听器在捕获和冒泡阶段都在此处触发。

其实有另一个技术用语“没有阶段”（None Phase），表示没有事件阶段发生。可以通过[`event.eventPhase`](https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase)来判断事件处于哪个阶段。

为了验证目前为止的学习成果，思考以下例子：

假设用户点击了包含在`talble`中的`td`元素，这是事件传播是如何发生的？**🤔** 思考一下。
```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  </head>
  <body>
    <div id="root">
      <table>
        <tbody>
          <tr>
            <td>Shady Grove</td>
            <td>Aeolian</td>
          </tr>
          <tr>
            <td>Over the River, Charlie</td>
            <td>Dorian</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
```

如前文所述的事件传播顺序，此处事件是这样传播的：

注意此处的`DefaultView`可以理解为前文的`Window`对象。

![another chart displaying event propagation in more detail](https://www.freecodecamp.org/news/content/images/2021/09/image-21.png)

图片源于 [https://www.w3.org/](https://www.w3.org/)

## 在React中事件冒泡是如何产生的？

在React中对应的概念是[合成事件](https://reactjs.org/docs/events.html).

这其实是把浏览器的事件对象封装在一起。基本的使用场景类似于`stopPropagation`和`preventDefault`（下文更多补充）。合成事件最大的优点是所有浏览器通用。

React并没有讲事件监听器绑定在node上，而是documment的根元素（root）。当事件被触发，React首先调用的是触发的元素（即目标阶段中你点击的元素），然后开始冒泡。

为什么React要这样操作，而不是简单复制原生DOM处理事件的方式？
### 浏览器的兼容


事件能够在所有浏览器中实现同样的效果非常重要。React创造出合成事件是为了确保即便在不同的浏览器中使用，属性能够保持一致。

你当然不希望自己创造出来的应用的事件在某个浏览器中可以相应，但是在另一个浏览器中就失效——这是糟糕的用户体验。
### 触发你想触发的事件


事件监听器设置在哪儿便是你想要事件监听器被调用的地方——仅在设定的元素（为了方便基础概念的理解，此处忽略了特殊情况）。

被设定监听器的元素对事件最了解，所以应该首先被触发。此后，随着事件传播向上，每一层外部元素了解得越来越少。

拿之前`Molly`这个模块举例，我知道你们已经开始想念她了，所以她再次出现：

🤔 不知道你发现了没有，当按钮被点击，按钮上的事件监听器首先被调用，然后父元素的事件监听器才被调用。

这个事件流顺序从未逆转过（即捕获阶段从未被触发）。

这是因为React的合成事件仅利用了冒泡阶段（目标阶段也包含在内）。如果只是为了触发`event.target`所在的地方（如此处按钮的例子），这样的设置是合理的。

记住React在合成事件中只是_仿造_JavaScript原生的冒泡和捕获阶段，所以在后文中你会发现两者之间的不同（下文更多补充）。

**⚠️ 合成事件** 并不默认专注在捕获阶段，除非特意设置。若需要触发捕获阶段，可将父元素`div`的事件监听器由`onClick`修改成`onClickCapture`:
```javascript
import React, { Component } from "react";

class Molly extends Component {
    ...

    render() {
        return (
            <div className="im-a-parent" onClickCapture={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

注意在这个例子中捕获阶段代替了冒泡阶段被触发。

**⚠️** 最后，我想强调在React 16及更低版本，若在事件合成中触发冒泡阶段，冒泡阶段的发现和JavaScript中原生的一样，事件会一直向上至`Document`。

![Image displaying React's bubbling phase ending at the root level in React Version 17 but it ends at Window/Document in React Version 16 or lower](https://www.freecodecamp.org/news/content/images/2021/09/image-22.png)

图片源于[React](https://reactjs.org/blog/2020/08/10/react-v17-rc.html)

## 如何在组件中终止冒泡事件


现在你了解了**事件传播**，**事件冒泡**和**事件捕获**的核心概念，接下来我们将讨论如何解决在文章开头我们提到的问题。

你编写了一个按钮（或者其他元素）并且你希望只有按钮上绑定的事件接听器被触发——其他父元素不被触发。

🤔 如何实现上述功能？你有以下几个选项：
### event.stopPropagation()

这个方法可以阻止任何父元素的触发。使用该方法需要：

1. 确保`event`对象作为参数传入。
2. `stopPropagation`绑定在事件监听器函数内，并在其他代码之上。

注意此处我将父元素`div`的`onClickCapture`改回`onClick`了：
```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat() {
        console.log("Hey fam! Food's ready!");
    }

    handleCookEggs(event) {
        event.stopPropagation(); // USED HERE!
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

在这个例子中，我只在`handleCookEggs`函数中添加了`stopPropagation`，所以当`Cook Eggs`按钮被点击，只有这个元素上的事件被触发。
### event.stopImmediatePropagation()

假设你在同一个元素上绑定了多个事件。此时用`event.stopPropagation()`肯定可以阻止父元素事件的触发，但是该元素上的其他事件还是会触发。

为了防止其他事件触发，可以使用`event.stopImmediatePropagation()`。这个方法可以阻止父元素和该元素上其他事件的触发。

如果你试过`event.stopPropagation()`不生效，可以尝试`event.stopImmediatePropagation()`。

注意：有些时候可能是第三方库导致了前一种方法不生效，你同样可以用这个方法来解决你的问题。
### event.preventDefault()


该方法是基于事件监听器和元素。
例如：

-   如果你有一张表格，并且不希望提交表格后页面刷新。
-   你根据功能创建自己的路由，并且不希望刷新页面。
## 对比 Event.target 和 Event.currentTarget

理解这两个`Event`对象的目标属性之间的区别，会给你省去不少麻烦。

记住：触发事件的元素并不一定是事件监听器绑定的地方。

**🤔** 是否有些困惑？别担心，听我慢慢阐述。

让我们重新回到上一个例子，并且在父元素`div`的事件处理器中的`event.target`和`event.currentTarget`中分别添加`console.log`。
```javascript
import React, { Component } from "react";

class Molly extends Component {
    // CHECKING THE PARENT
    handleCallFamilyToEat(event) {
        console.log("Hey fam! Food's ready!");

        console.log("event.target:", event.target);
        console.log("event.currentTarget", event.currentTarget);
    }

    ...

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

Now when we click the `Cook Eggs` button what do we see?
这是当你点击`Cook Eggs`，会出现什么？

![](https://www.freecodecamp.org/news/content/images/2021/09/image-23.png)

图片源于 Mariya Diminsky(本文作者)

注意此处父元素`div`的事件处理捕捉到了代码本意的`target`是按钮。

因为我们实在检查父元素内部的事件处理器，所以我们看到父元素是`currentTarget`。

好，我们再深入一些。
如果我们将`console.log`编写到按钮的事件处理器中，会发生什么呢？
🤔 我们将看到什么？
```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat(event) {
        console.log("Hey fam! Food's ready!");
    }

    // CHECKING A CHILD BUTTON
    handleCookEggs(event) {
        console.log("Molly is cooking fluffy eggs...");
        
        console.log("event.target:", event.target);
        console.log("event.currentTarget", event.currentTarget);
    }

    ...

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

![](https://www.freecodecamp.org/news/content/images/2021/09/image-24.png)

图片源于 Mariya Diminsky(本文作者)

注意此处我们是在监视按钮的事件处理器内部发生了什么，发现`currentTarget`出现在了按钮。

当然，因为我们点击的是按钮，所以`target`在这里也会落在`button`节点。

自此我们学到的内容可以总结为：
-   `event.target` 是事件流中最底部的元素。
-   `event.currentTarget` 是监听事件的元素（事件监听器绑定的地方）。
## 更新后的事件执行顺序以及JavaScript中的useCapture参数


在JavaScrip中`EventTarget.addEventListener`被用作添加事件处理器。

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)中表示即可以选择性地使用`options`对象中的`capture`也可以使用`useCapture`参数（也是可选的），两者效果相同。
```javascript
// 你可以这样写:
yourElement.addEventListener(type, listener, { capture: true });

// 也可以这样写:
yourElement.addEventListener(type, listener, useCapture: true);
```

⚠️ 之所以可以这样操作，是因为在JavaScript中除非有特别设置，捕获阶段会被忽略，仅有冒泡阶段会被触发（在目标阶段之后），MDN是这样解释的：
> For event listeners attached to the event target, the event is in the target phase, rather than the capturing and bubbling phases. Event listeners in the “capturing” phase are called before event listeners in any non-capturing phases.

Note that the `useCapture` parameter has not always been optional in older browsers. Make sure to check [caniuse.com](https://caniuse.com/?search=usecapture) before implementing it.

## Which Events Do Not Bubble and How Are They Handled?

Although most events bubble ,  did you know several do not?

Here are some examples in native JavaScript:

-   [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) ([focusout](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) is the same but it actually bubbles).
-   [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) ([focusin](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) is the same but it actually bubbles).
-   [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event) ([mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) is the same but it actually bubbles).
-   [mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) ([mouseover](https://transang.me/everything-about-event-bubbling/mouseover) is the same but it actually bubbles).
-   [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event), [unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event), [abort](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event), [error](https://developer.mozilla.org/en-US/docs/Web/API/Element/error_event), [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).

⚠️ The events that do bubble have `true` set on the `bubbles` option [when the](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) `[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)` [is created](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)  –  although they still go through the Capturing phase.

## Event Listeners In React Version 16 and before VS Version 17+

As you learned, React’s SyntheticEvent does not always act the same as its native JavaScript equivalents.

Let’s learn about some of these differences as well as changes made between React versions.

### Events You Wouldn’t Expect to Bubble In React

For example, you would expect React’s `onBlur` and `onFocus` to not bubble since JavaScript’s native equivalent does not, correct? Yet React has intentionally had these events among others continue bubbling.

⚠️ While React Version 17 has [made some changes](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#aligning-with-browsers) to certain events like `onScroll`  –  which no longer bubbles  –  most events still continue to bubble.

See [this answer](https://stackoverflow.com/questions/34926910/onfocus-bubble-in-react) and [this article](https://www.quirksmode.org/blog/archives/2008/04/delegating_the.html) for more details on this topic.

### `event.target.value` Used to be Nullified in Async Functions

Prior to React Version 17, if you tried to access an event in an async function you’d notice it would be undefined.

This is because React’s SyntheticEvent objects were pooled  –  meaning that after the event handlers had been called, you would no longer have access to them since they would be reset and put back in the pool.

![](https://www.freecodecamp.org/news/content/images/2021/09/image-25.png)

Image from [React](https://reactjs.org/docs/legacy-event-pooling.html)

This causes issues for async functions that need access to the information within that event at a later time.

⚠️ The only way to persist this information within async functions was to call `event.persist()`:

![](https://www.freecodecamp.org/news/content/images/2021/09/image-26.png)

Image from [React](https://reactjs.org/docs/legacy-event-pooling.html)

The intention of this was to improve performance. But upon closer inspection, React’s team discovered that it only confused developers and actually did not really boost performance much, so it was completely scraped.

⚠️ With the release of React Version 17, React no longer pools SyntheticEvent objects. So you can expect to receive the intended `event.target.value` within your async functions without needing `event.persist()`.

Be sure to read more about this update [here](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#no-event-pooling).

## Special Edge Case: What If You Need an Outer Parent to Fire too?

Let’s take everything you learned and fix a special edge case so you can apply it in your next (or current) React app!

🤔 Say we want to have both of these work in our app:

1.  When a user clicks the inner div/button/etc. element, we want that event to trigger only (or in our example below, changing channels on the TV).
2.  When a user clicks the outer parent div, that parent’s event is triggered (this could be useful for a popup modal. When a user clicks outside the modal, you want the popup to close  –  or in our example below, a TV being turned back on).

Currently, you know that if you click either the parent/child element, React’s SyntheticEvent system would trigger bubbling.

You also know to stop this we can use `event.stopPropagation()`.

But we’re left with a dilemma.

What if you want one event handler to trigger in one situation (our #1), and another event handler to trigger in another situation (#2)?

⚠️ If we use `event.stopPropagation()`, it would stop one event handler from triggering – but then you would never be able to call the other event handler in another situation. How can we fix this?

To solve this issue, let’s utilize React’s state pattern!

Note that I’m utilizing arrow functions here so `bind`ing state isn’t necessary. If you aren’t sure what this means, feel free to [read another article I wrote about this topic here](/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/).

ℹ️ Below I’ve included a React Class Component version and a React Hooks version  –  use whichever you prefer. Make sure to read through the comments carefully:

```javascript
import React, { Fragment, Component } from "react";

import "./TV.css" // you can ignore this since this won't exist on your end

class TV extends Component {
    state = { channel: 1, shouldTurnOffTV: false };

    // the parent div triggered if TV is turned OFF
    // clicking change channel or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    handleTurnOnTV = (event) => {
        console.log("In HandleTurnOnTV");

        const { shouldTurnOffTV } = this.state;

        if (shouldTurnOffTV) {
            event.stopPropagation();

            // I reset the channel by 1, but you can do whatever you need here
            this.setState({ shouldTurnOffTV: false, channel: 1 });
        }
    }

    // the child change channel button triggered if TV is turned ON
    // clicking the parent div, or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    handleChangeChannel = (event) => {
        console.log("In HandleChangeChannel");

        const { channel, shouldTurnOffTV } = this.state;

        if (!shouldTurnOffTV) {
            event.stopPropagation();

            // I increase the channel by 1, but you can do whatever you need here
            this.setState({ channel: channel + 1 });
        }
    }

    // the turn off TV button is triggered
    // clicking the parent div or changing the channel won't trigger at the same time 
    // because of event.stopPropagation() here
    handleTurnOffTV = (event) => {
        console.log("In HandleTurnOffTV");

        event.stopPropagation();

        this.setState({ shouldTurnOffTV: true });
    }

    renderChannel = () => {
        const { channel, shouldTurnOffTV } = this.state;

        if (shouldTurnOffTV) {
            return (
                <div>That's it, no more TV time!</div>
            )
        }

        return (
            <Fragment>
                <div>Current Channel: {channel}</div>
                <button className="im-a-child-button" onClick={this.handleTurnOffTV}>Turn Off TV</button>
            </Fragment>
        )
    }

    render() {
        const { shouldTurnOffTV } = this.state;
        return (
            <div className="im-a-parent" onClick={this.handleTurnOnTV}> 
                {this.renderChannel()}
                <hr />
                <button 
                    disabled={shouldTurnOffTV}
                    className="im-a-child-button" 
                    onClick={this.handleChangeChannel}
                >
                    Change Channel
                </button>
            </div>
        );
    }

}

export default TV;
```

Example written as a Component Class

```javascript
import React, { Fragment, useState } from "react";

import "./TV.css" // you can ignore this since this won't exist on your end

const TV = () => {
    const [channel, setChannel] = useState(1);
    const [shouldTurnOffTV, setTurnOffTV] = useState(false);

    // the parent div triggered if TV is turned OFF
    // clicking change channel or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    const handleTurnOnTV = (event) => {
        console.log("In HandleTurnOnTV");

        if (shouldTurnOffTV) {
            event.stopPropagation();

            // I reset the channel by 1, but you can do whatever you need here
            setTurnOffTV(false);
            setChannel(1);
        }
    }

    // the child change channel button triggered if TV is turned ON
    // clicking the parent div, or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    const handleChangeChannel = (event) => {
        console.log("In HandleChangeChannel");

        if (!shouldTurnOffTV) {
            event.stopPropagation();

            // I increase the channel by 1, but you can do whatever you need here
            setChannel(channel + 1);
        }
    }

    // the turn off TV button is triggered
    // clicking the parent div or changing the channel won't trigger at the same time 
    // because of event.stopPropagation() here
    const handleTurnOffTV = (event) => {
        console.log("In HandleTurnOffTV");

        event.stopPropagation();

        setTurnOffTV(true);
    }

    const renderChannel = () => {
        if (shouldTurnOffTV) {
            return (
                <div>That's it, no more TV time!</div>
            )
        }

        return (
            <Fragment>
                <div>Current Channel: {channel}</div>
                <button className="im-a-child-button" onClick={handleTurnOffTV}>Turn Off TV</button>
            </Fragment>
        )
    }

    return (
        <div className="im-a-parent" onClick={handleTurnOnTV}> 
            {renderChannel()}
            <hr />
            <button 
                disabled={shouldTurnOffTV}
                className="im-a-child-button" 
                onClick={handleChangeChannel}
            >
                Change Channel
            </button>
        </div>
    );

}

export default TV;
```

Example written as a Functional Component utilizing React Hooks

🤔 And here’s what happens when we run the code:

1.  When we click `Change Channel`, the channel is increased. Notice that the other two event handlers do not run.
2.  When we click `Turn Off TV`, the UI changes and if we try to click anywhere outside the parent div, the other two event handlers do not run.
3.  When we click inside the outer parent div when the TV is turned off, only one event handler is run.

Please note: In my example above I’m using `state = {}` instead of `constructor(){...}`. This is because when `Babel` (a JavaScript compiler) converts your React code, it spits out a `constructor` with everything inside. If you know this, feel free to skip the image below:

![](https://www.freecodecamp.org/news/content/images/2021/09/image-27.png)

Screenshot by Mariya Diminsky taken from [Babel](https://babeljs.io/)

### An Even Simpler Fix

So that’s one way to go about it  – but there’s an even simpler fix!

Simply check inside the event handler if the `target` (what was clicked) is the same as the `eventTarget` (the event handler listening to the event).

If it’s the same, then you can just call `stopPropagation`. Here’s a quick example below:

```javascript
...

const Modal = ({ header, content, cancelButtonText, confirmButtonText, history, handleConfirm }) => {
    const handleCancel = (event) => {
        stopEventPropagationTry(event);

        // do something here
    }

    const handleConfirmButton = (event) => {
        stopEventPropagationTry(event);

        // do something here
    }
    
    // so elements with multiple event handlers aren't unnecessarily 
    // called more than once(ie. SyntheticEvent Bubbling)
    export const stopEventPropagationTry = (event) => {
        if (event.target === event.currentTarget) {
            event.stopPropagation();
        }
    }

    return createPortal(
        <div onClick={handleCancel} className="ui dimmer modals visible active">
            <div className="ui tiny modal visible active">
                <div className="header">{header}</div>
                <div className="content">{content}</div>
                <div className="actions">
                    <button onClick={handleCancel} className="ui button">{cancelButtonText}</button>
                    <button onClick={handleConfirmButton} className="ui red button">{confirmButtonText}</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
```

## You did it! ✨🎉✨

You’ve made it through this article and now hopefully you understand event bubbling and event catching like a pro. Yay!

Now you know:

-   What Event Delegation means and how Event Bubbling and Event Capturing work.
-   How Event Propagation works differently in JavaScript and React.
-   You have a better understanding of both the benefits and caveats with event handling in React.
-   Several methods you can use to fix issues that may come up for your particular case.
-   The difference between `Event.target` and `Event.currentTarget` as well as that the event triggered is not always the same as the one with the event listener attached to it.
-   How Event Propagation happens in modern JavaScript and how to use `useCapture` parameter if you need to use the Capturing Phase.
-   You learned that not all Events bubble in native JavaScript as well as some of their aliases that do Bubble.
-   You also learned that almost all React’s SyntheticEvents (other than some updates in React Version 17) do bubble.
-   Lastly, you now have a better understanding on how to handle the edge case of an outer parent needing to fire without stopping other event handlers by utilizing React state.

### More Resources / Further reading:

-   [https://www.youtube.com/watch?v=Q6HAJ6bz7bY](https://www.youtube.com/watch?v=Q6HAJ6bz7bY)
-   [https://javascript.info/bubbling-and-capturing](https://javascript.info/bubbling-and-capturing)
-   [https://www.w3.org/TR/uievents/](https://www.w3.org/TR/uievents/)
-   [https://chrisrng.svbtle.com/event-propagation-and-event-delegation](https://chrisrng.svbtle.com/event-propagation-and-event-delegation)
-   [https://jsbin.com/hilome/edit?js,output](https://jsbin.com/hilome/edit?js,output)

👋🏻Hi there! 👩🏻‍💻I'm Mariya Diminsky, a passionate self-taught [Software Engineer](https://github.com/maariyadiminsky). I've worked as a Full Stack Engineer, a Frontend Developer (I 💖 React), and a Unity/C# developer. I'm also the Founder of [TrinityMoon Studios](https://trinitymoonstudios.com/) and creator of [The Girl Who Knew Time](https://play.google.com/store/apps/details?id=com.trinitymoonstudios.thegirlwhoknewtime).

✨🥰 If you enjoyed the read and would like to learn more about various React/System Design topics and more, consider following to get the latest updates. 🎉
