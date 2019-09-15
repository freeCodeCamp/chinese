> * 原文地址：[Async Generators as an alternative to State Management](https://www.freecodecamp.org/news/async-generators-as-an-alternative-to-state-management/?fbclid=IwAR2Py7k7WayAE_zq4tkd99pj3oBP7scsKp9mZbPCtv_zJqvhN4eOVAef6M8)
> * 原文作者：[Vitalii Akimov](https://www.freecodecamp.org/news/author/vitalii/)
> * 译者：luyc
> * 校对者：
  
![Async Generators as an alternative to State Management](https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/async-state.png)

`Async Generators` 是一个简单但功能强大的特性，它现在已经是`JavaScript`的一部分。它解锁了许多新的工具来改进软件结构，使其更加灵活，易扩展和组合。


#### TL;DR

-   使用 `Async Generators`，将不再需要组件状态，状态管理工具，生命周期方法，甚至是最近的`React Context`，`Hooks`和`Suspense APIs`。它将简化开发，管理和测试。
-   与状态管理方法不同的是，异步生成器将异步转换变得可控且无害（它只在生成器作用域有效）。
-   这个思路有函数式编程的背景
-   状态持久化工具像时间旅行器，通用程序依然是可用的。
-   这篇文章使用`React`和`JavaScript`，但是这项技术在任何其他框架或拥有生成器（协程）的编程语言都是适用的。
-   _我只在最后简短的宣传我的工具。本文的大部分内容都是关于异步生成器的，没有其他依赖内容_

![](https://cdn-media-1.freecodecamp.org/images/1*KlSEFFBTjyZKovSoQ0NnEw.png)

![](https://cdn-media-1.freecodecamp.org/images/1*ZrJKJqBsksWd-8uKM9OvgA.png)

让我们从[Redux动机页面][1]的声明开始:

> _这种复杂性很难处理，因为****我们混淆了两个概念****，这些概念对于人类的思维来说非常难以理解：****突变和异步性。**** 我称之[曼妥思和可乐现象][2]。两者分开时各自都很好，但放在一起使用，他们就会造成混乱_

Redux和其他的状态管理工具主要侧重于约束和控制数据的突变。异步生成器可以处理异步。如果变异仅在特定的生成器范围内可见，则这使得突变更安全。

所有常见的状态管理技术可以分为两大类。

第一类是维护数据关系图，通过处理器传播改变 —React组件状态，MobX，RxJS。维护这些关系是一项复杂的任务。底层库通过管理订阅，优化处理器执行顺序，对它们进行批处理来负责部分复杂的任务，但有时使用起来仍然令人困惑，通常需要进行硬微调，例如，使用`shouldComponentUpdate`方法。

另一种方法是将突变限制为仅有单个单元（storage）（例如，Redux）。这需要更小的并且带有更少魔法的库。这是一种多库的模式。不幸运的是，这种程序会更冗长，这破坏了数据的封装。虽然有很多模式，包装器可以解决这个问题，但是它们使用单个单元的方法更类似于基于图形的方法。

本故事的技术和Redux都是基于事件源模式，它们有许多相似之处。它也为具有副作用的操作提供封装数据和同步确定执行顺序。

这种方法也可以抽象地视为依赖图，但是变化是反向传播的，从它的根节点朝向它生成树的叶子节点。在每一个节点，我们检查传播是否应该传给子节点。这样使调度算法非常轻量级并且易于控制。它不需要引入任何库，仅基于JavaScript内置功能。

让我们首先针对 [Redux VanillaJS counters][3] 的例子来说明这个想法。

原版的reducer用异步生成器函数替代了。该函数计算并将其状态存储在一个局部变量中。它还会产生计算值，新的值被存储在单例存储中，并且它可以从事件处理器中访问。我将在下一步中删除那个单例存储。

这个版本与Redux中的例子没有什么不同。异步生成器可以是Redux的存储中间件。这样违反了其中一条Redux [原则][4] 思想，即仅将所有应用程序状态存储在存储器中。即使生成器没有任何的局部变量，它仍然具有执行状态 - 在`yield`或`await`中暂停执行的代码中的位置。

#### 从内到外转换组件

生成器函数是返回迭代器的函数。我们可以用普通函数完成我们所能做的一切。例如，通过组合生成器函数，我们可以将计算分成几个独立的阶段。每个阶段有自己的封装状态。每个阶段接收前一阶段产生的消息，处理它们会产生另一个消息并将它们传递到下一个阶段。

消息的有效负载可以包含VDOM元素。我们不是使用一个单独的组件树，而是将它的一部分发出去并且发送它们到下一个阶段，在那里它们可以被组装或转换。 这与React的计数器示例相同。

`pipe`函数是一个函数组合。函数接收两个参数。第一个是来自前一阶段消息的异步迭代。第二个是将消息发送到管道的起始。它应该只从事件处理器调用。 使用JavaScript嵌入式管道运算符可以很快替换此函数。

当我们编写普通函数时，链中的下一个函数仅在前一个函数完成后开始执行。对于生成器（实际上是任何协程），执行操作可以与其他函数交错暂停。这使得将不同部将组合起来会更加容易。

![](https://www.freecodecamp.org/news/content/images/2019/07/lanes--1--1.svg)

上面的示例通过将一些菜单按钮从根组件分离到一个单独的阶段，简要地展示了可扩展性。它不是将菜单按钮抽象到一个单独的组件中，而是维护一个占位符，它会在“MENU \ _ITEM”类型的消息中注入它接收的组件。

#### 扩展

这项技术令人兴奋的一点是，应该初步设计一下，使程序可重用和解耦。如今过早抽象的害处可能远大于过早优化。差不多可以肯定的是，它会导致过度设计的混乱而无法使用。使用抽象生成器，很容易保持稳定并实现所需的功能，在需要时进行拆分，而不用考虑将来的扩展，在更多细节可用之后易于重构或抽象一些公共部分。

Redux以使程序更易于扩展和重用而闻名。这个故事中的方法也是基于事件是的，但是运行异步操作要简单得多，而且没有单个存储的瓶颈，不应该过早设计任何东西。

许多开发人员喜欢单一存储，因为它易于控制。虽然控制不是免费的。事件源模式的一个被广泛接受的优被是缺少中央数据库。更换一部分更简单，没有破坏其他部分的危险。下面的“持久性”部分讨论了单个存储的另一个问题。

这里有篇文章 [解耦业务逻辑][5]，有更多详细的案例研究。在某个步骤里面，我添加了一个多选功能来拖放，而不会改变单个元素处理中的任何内容。使用单一存储，这意味着将其模型从存储单个当前拖动元素更改为列表。

在Redux里面，有相似的解决方案，叫做应用性高阶reducer。它能够让reducer与一个单独的元素工作并且转化为一个reducer工作列表。生成器解决方案使用更高阶的异步生成器替代，为单个的元素提供函数并且为列表生成一个函数。它很类似但不那么冗长，因为生成器封装了数据和隐式控制状态。

作为例子，让我们做一个计数器列表。“解耦业务逻辑”一文中介绍了此步骤，我这里将不会提供很多细节。`fork`函数是异步迭代器转换函数，在每一项线程中运行其参数。它虽然不简单，但很通用，在许多上下文中工作。在下个阶段，例如，我使用它递归获取一个树状图。

#### 性能

异步生成器开销比状态管理库小得多。但是也有许多方法会导致性能问题，例如，消息过度泛滥。但是也有许多毫不费力的方法来提高性能。

在前一个例子中，对 `ReactDom.render` 进行了无效调用。这显然是个效率问题，并且有一个简单的解决方案。每一次调度事件之后，通过发送另一个类型为“FLUSH”的消息快速解决它。React渲染只会在它收到这条消息后运行。中间步骤可以产生他们之间需要的任何东西。

Another awesome side of this approach is you may not worry about performance until it is a problem. Everything is structured in small autonomous stages. They are easy to refactor, or even without refactoring — many performance problems can be solved by adding another generic state in the pipe of steps, e.g., batching, prioritizing, saving intermediate data, etc.

For example, in the demo constructed React elements are saved in local variables and React can re-use them. Changes are propagated from the root towards leaves, so optimizations like overriding`shouldComponentUpdate`  aren’t needed.

#### 测试

Comparing to Redux reducer tests, generators fit a bit darker box testing strategy. The tests don’t have access to the current state. Though still, they are very simple to write. With Jest snapshots, the test can be a list of input messages with comparing output using snapshots.

```javascript
test("counterControl", async () => {
  expect.assertions(3)
  for await(const i of Counter.mainControl([
         {type:"MENU", value:<span>Menu</span>},
         {type:"VALUE", value:10},
         {type:"CONTROL", value:<span>Control</span>},
         {type:"FLUSH"},
         {type:"VALUE", value: 11},
         {type:"FLUSH"}]))
    if (i.type === "CONTROL")
      expect(renderer.create(i.value).toJSON()).toMatchSnapshot()
})
```

If you prefer unit-tests as documentation policy, there are many ways to make a self-documenting API for testing. Say, a function \`eventually\`/\`until\` as an addition to traditional BDD expressions.

#### 持久化状态

There is another motivation for Redux described in  [You Might Not Need Redux][6]  article by Dan Abramov — namely providing access to the state and it can be serialized, cloned, diffed, patched, etc. This can be used for time travel, hot reloading, universal applications and more.

For this to work, the whole application state should be kept in Redux storage. Many Redux applications(even Redux samples) have some part of state stored outside of their store. These are components state, closures, generators or async functions state. Redux based tools can not persist this state.

Having a single source of truth as a single storage Redux, of course, makes programs simpler. Unfortunately, it is often impossible. Consider for example distributed application, e.g., data are shared between frontend and backend.

> "Oh, you wanted to \*increment a counter\*?! Good luck with that!" -- the distributed systems literature
> 
> — Lindsey Kuper (@lindsey)  [March 9, 2015][7]

Event Sourcing is very successful for distributed applications. With generators, we can write a proxy sending all incoming messages to the remote side and yielding all received messages. There can be separate pipelines on each peer, or it can be the same application but a few running processes. Many configurations are easy to set up, use and re-use.

For example  `pipe(task1, remoteTask2, task3)`. Here  `remoteTask2`may be either proxy or, it may be defined here, say, for debugging purposes.

Each part maintains its own state, it doesn’t need to be persistent. Say if each task is implemented by a separate team they are free to use any model for the state, change it any time without worrying about the other team’s work is broken.

This fits well for Server Side Rendering too. Say, there can be a particular higher order function to cache resulting values depending on inputs on the back-end.

```javascript
const backend = pipe(
    commonTask1,    
    memo(pipe(         
        renderTask1,         
        renderTask2)),
    commonTask2)
```

Here the  `memo`  higher order function examines incoming messages and may find out some calculation may be reused. This may be a server-side rendered string, and some next stage builds HTTP response with it.

The render tasks can run async operations, requesting something remote. For better user experience we want pages to load fast. To increase initial page load time applications can load components lazily displaying some loading placeholder instead of the component until it is ready. Having a few such components on a page with a bit different loading time causes page re-layouts worsening user experience.

React team recently announced Suspense API to solve this problem. It is an extension of React embedded into its renderer. With the Inverted Components like in this article, Suspense API isn’t needed, the solution is much simpler and not a part of UI framework.

Say the application uses dynamic imports to load lazy controls, this can be done with:

```javascript
yield {type:”LAZY_CONTROL”}
yield {type:”CONTROL”, value: await import(“./lazy_component”)}
```

There is another generic next stage. It collects all “LAZY\_CONTROL” messages, and awaits either all “CONTROL” messages are received after or a threshold time interval. After, it emits “CONTROL” messages either with the loaded control or with loading indicator placeholder. All the next updates can be batched as well using some specific timeout to minimize re-layouts.

Some generator can also reorder messages to give animation a bigger priority than server data updates. I’m not even sure there are needs for a server-side framework. A tiny generator could transform initial HTTP request into messages or threads depending on URL, auth session, etc.

#### 函数式编程

Commonly used state management tools have FP background. The code from the article doesn’t look like FP in JavaScript because of imperative  `for-of/switch/break`statements. It has a corresponding concept in FP too. It is so called Monads do-notation. For example one of their use in Haskell is to resolve problems like React components property drilling.

To keep this story practical I don’t digress from the main subject here, there is another article — [Using Generators as syntax sugar for side effects][8].

#### Effectful.js

[Effectful.js][9]  is a babel preset implementing do-notation working for any monad without any JavaScript syntax extension. It also supports state persistence with a reference implementation in  [es-persist][10]  library. For example, this may be used to convert all async generators example above into pure functions.

State persistence is not the primary goal of the tool. It is for higher level business logic description. Nevertheless, the tool is abstract and has many purposes. I’ll write about them more soon.

Here is  [the summary sample][11]  on GitHub with all the feature above plus automatic Undo/Redo and storing its full state in  `localStorage`. And here is  [running transpiled][12]version (it writes to your browsers local storage but no information is sent to the server side). I’m not giving many details in this article, it is about async generators without dependency, but I suppose the code is straightforward to read. Check for example  [undoredo.js][13]  for easy time traveling implementation details.

The original sample requires almost no changes, I only replaced not serializable Promises, with corresponding functions from “es-persist” and replaced closures with invocations of  `R.bind`function from the same library. EffectfulJS toolchain has another transpiler to make all the functions, including closures serializable, but not used in this example to keep it simpler.

The story is just a brief description of the technique. I’m using it for a couple of years already, and happy because of improvements it provides. Try it, and I’m sure you’ll enjoy it too. There are many things to describe in depth. Stay tuned!

[1]: https://redux.js.org/introduction/motivation
[2]: https://zh.wikipedia.org/zh-cn/%E5%8F%AF%E6%A8%82%E5%8A%A0%E6%9B%BC%E9%99%80%E7%8F%A0%E5%99%B4%E7%99%BC%E7%8F%BE%E8%B1%A1
[3]: https://github.com/reduxjs/redux/blob/master/examples/counter-vanilla/index.html
[4]: https://redux.js.org/introduction/three-principles
[5]: https://medium.com/dailyjs/decoupling-business-logic-using-async-generators-cc257f80ab33
[6]: https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
[7]: https://twitter.com/lindsey/status/575006945213485056?ref_src=twsrc%5Etfw
[8]: https://medium.com/@vitaliy.akimov/using-generators-as-monads-do-notation-8600c53648cf
[9]: https://effectful.js.org/
[10]: https://github.com/awto/effectfuljs/tree/master/packages/es-persist
[11]: https://github.com/awto/effectfuljs
[12]: https://effectful.js.org/demo/alternative/
[13]: https://github.com/awto/effectfuljs/blob/master/samples/persist-counters/undoredo.js
