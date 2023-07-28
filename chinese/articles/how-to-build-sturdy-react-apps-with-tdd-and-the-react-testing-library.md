> -   原文地址：[How to build sturdy React apps with TDD and the React Testing Library](https://www.freecodecamp.org/news/how-to-build-sturdy-react-apps-with-tdd-and-the-react-testing-library-47ad3c5c8e47/)
> -   原文作者：Ian Wilson
> -   译者：herosql
> -   校对者：

在我开始学习React时，我曾经挣扎于如何以一种既有用又直观的方式测试我的web应用。每次我想要测试一个组件时，我都会使用 [Enzyme][1] 和 [Jest][2] 进行表层渲染。 

当然，我绝对是在滥用快照测试功能。

好吧，至少我写了一个测试，对吧？

你可能在某个地方听说过，编写单元测试和集成测试将提高你编写的软件的质量。另一方面，拥有糟糕的测试会产生错误的信心。

最近，我参加了 [workshop.me][3] 上由 [Kent C. Dodds][4] 主持的一个研讨会，他教我们如何为React应用编写更好的集成测试。

他还诱使我们使用他的[新的测试库][5]，以强调以用户可能遇到的相同方式测试应用程序。

在本文中，我们将通过创建评论反馈来学习如何在构建稳定的React应用程序中运用TDD。当然，这个过程适用于几乎所有的软件开发，而不仅仅是React或JavaScript应用。

### **开始**

我们将首先运行 `create-react-app` 并安装依赖项。我的假设是，如果你正在阅读关于测试应用程序的文章，你可能已经熟悉安装和启动JavaScript项目。在这里，我将使用yarn而不是npm。

```plain
create-react-app comment-feed
```

```plain
cd comment-feed
```

```plain
yarn
```

首先，我们将删除src目录中除index.js之外的所有文件。然后，在src文件夹内部，创建一个名为components的新文件夹和另一个名为containers的文件夹。

在测试工具方面，我将使用Kent的 [React 测试库][6] 构建此应用程序。它是一款轻量级的测试工具，鼓励开发者以实际使用时相同的方式测试他们的应用程序。

与Enzyme一样，它导出一个渲染函数，但这个渲染函数始终对你的组件进行完整挂载。它导出辅助方法，允许你通过标签、文本甚至测试ID来定位元素。Enzyme也通过其 `mount` API实现了这一点，但它创建的抽象实际上提供了更多选项，其中许多选项允许你摆脱测试实现细节。

我们不想要测试所有的实现细节。我们想要渲染一个组件，看看当我们点击或更改UI上的某些内容时是否会发生正确的事情。就是这样！不再直接检查props、state或类名。

现在让我们安装它们并开始工作。

```plain
yarn add react-testing-library
```

### **通过TDD构建评论反馈**

让我们以TDD风格进行第一个组件的开发。启动您的测试运行器。

```plain
yarn test --watch
```

在`containers`文件夹中，我们将添加一个名为CommentFeed.js的文件。与之相伴的，添加一个名为CommentFeed.test.js的文件。在第一个测试中，让我们验证用户是否可以创建评论。太早了？好吧，既然我们还没有任何代码，我们将从一个较小的测试开始。让我们检查一下我们是否可以渲染反馈。

### **关于react-testing-library的一些说明**

首先，让我们注意这里的渲染函数。它类似于 `react-dom` 将组件渲染到DOM的方式，但它返回一个对象，我们可以解构该对象以获得一些实用的测试辅助工具。在这种情况下，我们得到 `queryByText`，它会返回我们期望在DOM上看到的HTML元素。

[React 测试库文档][7] 提供了一个层次结构，应该帮助您决定使用哪个查询或获取方法。通常，顺序如下：
-   `getByLabelText` (表单输入)
-   `getByPlaceholderText` (仅在您的输入没有标签时使用 — 很少使用！)
-   `getByText` (按钮和标题)
-   `getByAltText` (图片)
-   `getByTestId` (用于动态文本或其他您想要测试的奇怪元素)

每个方法都有一个相关的 `queryByFoo` ，除了在找不到元素时不会使测试失败之外，它们的功能相同。如果您只是测试元素的**存在**，请使用这些方法。

如果这些方法都无法满足您的需求， `render` 方法还返回映射到`container` 属性的DOM元素，因此您可以像`container.querySelector(‘body #root’)`这样使用它。

### **首次实现代码**

现在，实现看起来相当简单。我们只需要确保“评论反馈”是一个组件。

它可能会更糟糕 - 我的意思是，我在编写整篇文章的过程中，还要编写组件的样式。幸运的是，测试并不太关心样式，所以我们可以专注于我们的应用逻辑。

接下来的测试将验证我们是否可以渲染评论。但是我们甚至还没有任何评论，所以让我们也添加一个组件。在测试之后。

我还将创建一个props对象来存储我们可能在这些测试中重用的数据。

在这种情况下，我正在检查评论的数量是否等于传入CommentFeed的项目数量。这是无关紧要的，但测试失败给了我们创建Comment.js文件的机会。

这使我们的测试套件变绿，所以我们可以毫无畏惧地继续。向TDD致敬，我们这个种族的救世主。当我们给它一个空数组时，它当然会工作。但是，如果我们给它一些真实的对象，会发生什么呢？

我们必须更新我们的实现以实际渲染内容。现在我们知道我们要去哪里，这很简单，对吧？

啊，看看这个，我们的测试再次通过了。这是一个美妙的截图。

![](https://cdn-media-1.freecodecamp.org/images/1*vGkFKnUkA9ms5PbaOWoQ_A.png)

注意我从未说过我们应该用`yarn start`启动我们的程序吗?我们继续保持这种方式一段时间。关键是，你必须用你的头脑感受代码。

样式只是外部表现 - 重要的是内部的东西。

以防你想启动应用程序，将index.js更新为以下内容：

### **添加评论表单**

这是事情开始变得更有趣的地方。这是我们从困倦地检查DOM节点的存在到实际使用它并**验证行为**的地方。所有其他的东西都是热身。

让我们从描述我想要的表单开始。它应该：
-   包含一个作者的文本输入
-   包含一个评论条目的文本输入
-   有一个提交按钮
-   最终调用API或处理创建和存储评论的其他服务。

我们可以在一个集成测试中完成这个列表。对于之前的测试用例，我们进行得相当缓慢，但现在我们要加快速度，试图一举完成。

注意我们的测试套件是如何发展的吗？我们从在各自的测试用例中硬编码props转变为为它们创建一个工厂。

#### **准备， 执行， 断言**

以下集成测试可以分为三个部分：准备，执行和断言。

-   **准备:** 为测试用例创建props和其他测试用例
-   **执行:** 模拟对元素的更改，例如文本输入或按钮点击
-   **断言:**  断言所需的函数被正确次数调用，并使用正确的参数

关于代码，我们做了一些假设，比如我们的标签命名或我们将拥有一个 `createComment` prop。

在查找输入时，我们希望尝试通过它们的标签找到它们。这样在构建应用程序时，我们可以优先考虑可访问性。使用`container.querySelector`是获取表单的最简单方法。

接下来，我们必须为输入分配新值，并模拟更改以更新它们的状态。这一步可能感觉有点奇怪，因为通常我们一次输入一个字符，为每个新字符更新组件的状态。

这个测试的行为更像是复制/粘贴的行为，从空字符串变为“Socrates”。目前没有中断问题，但我们可能需要注意一下，以防以后出现问题。

在提交表单后，我们可以对诸如调用了哪些props以及使用了哪些参数等事项进行断言。我们还可以利用这个时刻来验证表单输入是否已清除。

这让人望而生畏吗？不需要害怕，孩子，继续走。首先将表单添加到渲染函数中。

我可以将这个表单分解成一个单独的组件，但现在我会保持不变。相反，我会将其添加到我桌子旁边的“重构愿望清单”中。

这是TDD的方式。当某件事看起来可以重构时，做个记录然后继续。只有在抽象的存在对你有益且不感到多余时才进行重构。

还记得我们通过创建 `createProps` 工厂来重构测试套件的时候吗？就像那样。我们也可以重构测试。

现在，让我们添加 `handleChange` 和 `handleSubmit` 类方法。当我们更改输入或提交表单时，这些方法会被触发。我还将初始化我们的状态。

这样做就可以了。我们的测试通过了，我们有一些类似于真实应用程序的东西。我们的覆盖率看起来如何？

![](https://cdn-media-1.freecodecamp.org/images/1*Q4coAIT2yaP120pDWGxoAQ.png)

还不错。如果我们忽略index.js中的所有设置，我们就有一个完全覆盖的Web应用程序，至少在执行的行数方面是这样。

当然，为了验证应用程序是否按照我们的意图工作，我们可能还需要测试其他用例。覆盖率的数字只是你的老板在谈论其他同事时可以炫耀的东西。

### **点赞评论**

我们如何检查我们可以点赞评论呢？这可能是在我们的应用程序中建立某种身份验证概念的好时机。但我们现在还不会跳得太远。首先，让我们更新我们的props工厂，为我们生成的评论添加一个 `auth` 字段和ID。

“认证”用户将通过应用程序传递其 `auth` 属性。与他们是否经过身份验证相关的任何操作都将被记录。

在许多应用程序中，此属性可能包含在向服务器发出请求时发送的某种访问令牌或cookie中。

在客户端，此属性的存在使应用程序知道它们可以让用户查看其个人资料或其他受保护的路由。

然而，在这个测试示例中，我们不会过多地处理身份验证。想象这样一个场景：当你进入聊天室时，你提供网名。从那时起，你将负责使用此网名的每个评论，尽管其他人也使用该名称登录。

虽然这不是一个很好的解决方案，即使在这个人为的例子中，我们只关心CommentFeed组件的行为是否符合预期。我们不关心**如何**让我们的用户登录。

换句话说，我们可能有一个完全不同的登录组件来处理特定用户的身份验证，从而使他们在火圈和愤怒中穿越，以获得让他们在我们的应用程序中肆虐的全能 `auth` 属性。

让我们“喜欢”一条评论。添加下一个测试用例，然后更新props工厂以包含`likeComment`。

现在，对于实现，我们将首先更新Comment组件，使其具有一个点赞按钮以及一个`data-testid`属性，以便我们可以找到它。

我将测试ID直接放在按钮上，以便我们可以立即模拟对它的点击，而无需嵌套查询选择器。我还在按钮上附加了一个onClick处理程序，以便它传递给它的onLike函数。

现在我们只需将此类方法添加到我们的CommentFeed：

您可能想知道为什么我们不直接将`likeComment`通过prop传递给Comment组件。为什么我们要将其作为类属性？

在这种情况下，因为它相当简单，我们不必构建这个抽象。将来，我们可能会决定添加其他onClick处理程序，例如处理分析事件或启动对该帖子评论的订阅。

在此容器组件的 `handleLike` 方法中捆绑多个不同的函数调用具有其优势。如果我们愿意，在成功“点赞”后，我们还可以使用此方法更新组件的状态。

### **Disliking Comments**

At this point we have working tests for rendering, creating, and liking comments. Of course, we haven’t implemented the logic that actually does that — we’re not updating the store or writing to a database.

You might also notice that the logic we’re testing is fragile and not terribly applicable to a real-world comment feed. For example, what if we tried to like a comment we already liked? Will it increment the likes count indefinitely, or will it unlike it? Can I like my own comments?

I’ll leave extending the functionality of the components to your imagination, but a good start would be to write a new test case. Here’s one that builds off the assumption that we would like to implement disliking a comment we already liked:

Notice that this comment feed we’re building allows me to like my own comments. Who does that?

I have updated the Comment component with some logic to determine whether or not the current user has liked the comment.

Well I cheated a little bit: where we were passing `author` to the `onLike` function before, I changed to `currentUser`, which is the `auth` prop passed down to the Comment component.

After all, it wouldn’t make sense for the comment’s author to show up when someone else likes their comment.

I realized this because I was vigorously writing tests. Had I just been coding by coincidence this might’ve slipped past me until one of my coworkers berated me for my ignorance!

But there is no ignorance here, just tests and the code that follows. Be sure to update the CommentFeed so that it expects to pass down the `auth` property. For the `onClick` handlers we can omit passing around the `auth` property, since we can derive that from the `auth` property in the parent’s `handleLike` and `handleDislike` methods.

### **Wrapping up**

Hopefully, your test suite is looking like an unlit Christmas tree.

There are so many different routes we can take at this, it can get a little overwhelming. Every time you get an idea for something, just write it down, either on paper or in a new test block.

For example, say you actually want to implement `handleLike` and `handleDislike` in one single class method, but you have other priorities right now. You can do this by documenting in a test case like so:

This doesn’t mean you need to write an entirely new test. You could also update the previous two cases. But the point is, you can use your test runner as a more imperative “To Do” list for your application.

#### **Helpful Links**

There are a few great pieces of content out there that deal with testing at large. Here are some in particular that inspired this article as well as my own practices.

-   “[Introducing the React Testing Library][8]" by [Kent C. Dodds][9]. It’s a good idea to understand the philosophy behind this testing library.
-   “[Software Testing Anti-patterns][10]" by Kostis Kapelonis. An extremely in-depth article that discusses unit and integration testing. Also how not to do them.
-   “[Test Driven Development by Example][11]" by Kent Beck. This is a physical book that discusses TDD patterns. It is not too long and it is written conversationally, making it easy to digest.

I hope that’ll tide you over for a while.

Curious for more posts or witty remarks? If you enjoyed this article, give me some claps and follow me on [Medium][12], [Github][13], and [Twitter][14]!

[1]: http://airbnb.io/enzyme/docs/api/
[2]: https://facebook.github.io/jest/
[3]: https://workshop.me/
[4]: https://www.freecodecamp.org/news/how-to-build-sturdy-react-apps-with-tdd-and-the-react-testing-library-47ad3c5c8e47/undefined
[5]: https://github.com/kentcdodds/react-testing-library
[6]: https://github.com/kentcdodds/react-testing-library
[7]: https://github.com/kentcdodds/react-testing-library#faq
[8]: https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65
[9]: https://www.freecodecamp.org/news/how-to-build-sturdy-react-apps-with-tdd-and-the-react-testing-library-47ad3c5c8e47/undefined
[10]: http://blog.codepipes.com/testing/software-testing-antipatterns.html
[11]: https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530

[12]: http://medium]%28https//medium.com/@iwilsonq
[13]: https://github.com/iwilsonq
[14]: https://twitter.com/iwilsonq
