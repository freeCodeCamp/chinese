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

### **Add Comment Form**

This is where things start getting more fun. This is where we go from sleepily checking for the existence of DOM nodes to actually doing stuff with that and **validating behavior**. All that other stuff was a warmup.

Let’s start by describing what I want from this form. It should:

-   contain a text input for the author
-   contain a text input for then comment itself
-   have a submit button
-   eventually call the API or whatever service handles creating and storing the comment.

We can take down this list in a single integration test. For the previous test cases we took it rather slowly, but now we’re going to pick up the pace and try to nail it in one fell swoop.

Notice how our test suite is developing? We went from hard-coding props inside their own test cases to creating a factory for them.

#### **Arrange, Act, Assert**

This following integration test can be broken into three parts: arrange, act, and assert.

-   **Arrange:** create props and other fixtures for the test case
-   **Act:** simulate changes to the elements such as text inputs or button clicks
-   **Assert:** assert that the desired functions were invoked the right number of times, and with the correct arguments

There are some assumptions made about the code, like the naming of our labels or the fact that we will have a `createComment` prop.

When finding inputs, we want to try to find them by their labels. This prioritizes accessibility when we’re building our applications. The easiest way to grab the form is by using `container.querySelector`.

Next, we must assign new values to the inputs and simulate the change to update their state. This step may feel a little strange, since normally we type one character at a time, updating the component’s state for each new character.

This test behaves more like the behavior of copy/paste, going from empty string to ‘Socrates’. No breaking issues for now, but we may want to make note of that in case it comes up later.

After submitting the form, we can make assertions on things like which props were invoked and with what arguments. We could also use this moment to verify that the form inputs cleared.

Is it intimidating? No need to fear, my child, walk this way. Start by adding the form to your render function.

I could break this form into its own separate component, but I will refrain for now. Instead, I’ll add it to my “Refactor Wish List” I keep beside my desk.

This is the way of TDD. When something seems like it can be refactored, make a note of it and move on. Refactor only when the presence of an abstraction benefits you and doesn’t feel unnecessary.

Remember when we refactored our test suite by creating the `createProps` factory? Just like that. We can refactor tests, too.

Now, let’s add in the `handleChange` and `handleSubmit` class methods. These get fired when we change an input or submit our form. I will also initialize our state.

And that did it. Our tests are passing and we have something that sort of resembles a real application. How does our coverage look?

![](https://cdn-media-1.freecodecamp.org/images/1*Q4coAIT2yaP120pDWGxoAQ.png)

Not bad. If we ignore all of the setups that go inside index.js, we have a fully covered web application with respect to lines executed.

Of course, there are probably other cases we want to test in order to verify that the application is working as we intend. That coverage number is just something your boss can brag about when they’re talking to the other cohorts.

### **Liking Comments**

How about we check that we can like a comment? This may be a good time to establish some concept of authentication within our application. But we’ll not jump too far just yet. Let’s first update our props factory to add an `auth` field along with IDs for the comments we generate.

The user who is “authenticated” will have their `auth` property passed down through the application. Any actions that are relevant to whether they are authenticated will be noted.

In many applications, this property may contain some sort of access token or cookie that is sent up when making requests to the server.

On the client, the presence of this property lets the application know that they can let the user view their profile or other protected routes.

In this testing example, however, we will not fiddle too hard with authentication. Imagine a scenario like this: When you enter a chatroom, you give your screen name. From that point on, you are in charge of every comment that uses this screen name, despite who else signed in with that name.

While it is not a great solution, even in this contrived example, we are only concerned with testing that the CommentFeed component behaves as it should. We are not concerned with **how** our users are logged in.

In other words, we may have a totally different login component that handles the authentication of a particular user, thus sending them through hoops of fire and fury in order to derive the almighty `auth` property that lets them wreak havoc in our application.

Let’s “like” a comment. Add this next test case and then update the props factory to include `likeComment`.

And now for the implementation, we’ll start by updating the Comment component to have a like button as well as a `data-testid` attribute so we can locate it.

I put the test ID directly on the button so that we can immediately simulate a click on it without having to nest query selectors. I also attached an `onClick` handler to the button so that it calls the `onLike` function passed down to it.

Now we just add this class method to our CommentFeed:

You may wonder why we don’t simply pass the `likeComment` prop directly to the Comment component. Why do we make it a class property?

In this case, because it is rather simple, we don’t have to build this abstraction. In the future, we may decide to add other `onClick` handlers that, for example, handle analytics events or initiate a subscription to that post’s future comments.

Being able to bundle multiple different function calls in the `handleLike` method of this container component has its advantages. We could also use this method to update the state of the component after a successful “Like” if we so choose.

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
