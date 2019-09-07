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

This approach can be abstractly viewed as a dependency graph as well, but the changes are propagated in reverse direction, from its root to towards leaves of its spanning tree. In each node we check should the propagation proceed to children or not. This makes the scheduling algorithm very lightweight and easy to control. It doesn’t require any library, basing only on JavaScript built-in features.

Let’s first port  [Redux VanillaJS counters][3]  example to illustrate the idea.

The original reducer is replaced with async generator function. The function calculates and stores its state in a local variable. It also yields the calculated value, the new value is stored in the singleton storage, and it is visible from event handlers. I’ll remove that singleton storage in the next steps.

This version doesn’t look much different from Redux. The async generator there could be Redux storage middleware. This violates one of Redux  [principles][4]  though, namely storing all application state only in the storage. Even if the generator doesn’t have any local variables, it still has its execution state — the position in the code where the execution is suspended in  `yield`  or  `await`.

#### Turning components inside-out

Generator functions are functions returning iterators. We can do with them everything we can do with plain functions. For example, by composing generator functions, we can split computation into a few independent stages.Each stage has own encapsulated state. Each stage receives messages which were yielded on the previous stage, handles them yielding another messaging and passing them to the next stage.

The payload of the messages can contain VDOM elements. Instead of having a monolithic components tree we emit parts of it and send them to the next stage, where they can be assembled or transformed. Here is the same Counters example with React.

There  `pipe`  function is a function composition. The functions take two arguments. The first is async iterable for messages from the former stage. And the second is to send a message into the start of the pipe. It should be called only from event handlers. This function can be replaced soon with JavaScript embedded pipeline operator.

When we compose plain functions the next one in chain starts executing only after the previous was finished. While for generators (and in fact any coroutines) the execution can be suspended in interleaved with other functions. This makes composing different parts easier.

![](https://www.freecodecamp.org/news/content/images/2019/07/lanes--1--1.svg)

The example above briefly shows extensibility by decoupling a few menu buttons from the root component into a separate stage. Instead of abstracting menu buttons into a separate component it maintains a placeholder where it injects components it receives in messages with “MENU\_ITEM” type. It is an Inversion of Control for components. Both techniques React Components and these Inverted Components can be used together of course.

#### Extension

An exciting point of this technique is nothing should be preliminary designed to make the program reusable and decoupled. Nowadays premature abstraction is probably a bigger evil than premature optimization. It almost definitely leads to an overdesigned mess impossible to use. Using abstract generators, it is easy to keep calm and implement the required features, splitting when needed, without thinking about future extensions, easy to refactor or abstract some common parts after more details are available.

Redux is famous for making programs simpler to extend and reuse. The approach in this story is also based on Event Sourcing, but it is much simpler to run async operations and it doesn’t have a single store bottleneck, nothing should be designed prematurely.

Many developers like single storage because it is easy to control. The control is not a free thing though. One of the widely accepted advantages of Event Sourcing pattern is an absence of a central DB. It is simpler to change one part without danger of breaking something else. There is another problem of single storage discussed in Persistence section below.

There is  [Decouple Business Logic][5]  article with more detailed cases study. At some step there, I added a multi-select feature to drag and drop without changing anything in single element handling. With a single store, this would mean changing its model from storing a single currently dragging element to a list.

There are similar solutions in Redux, namely applying higher order reducer. It could take a reducer working with a single element and translate into reducer working for a list. The generators solution uses higher order async generators instead, taking a function for a single element and generating the one for a list. It is similar but much less verbose, as the generator encapsulates data and implicit control state.

As an illustration, let’s make a list of counters. This step is covered in “Decouple Business Logic” article, I’m not giving many details here. The  `fork`function is the async iterators transforming function, running its argument in threads per item. It is a not simple, but it is a generic one, works in many contexts as is. In the next section, for example, I apply it recursively to get a tree view.

#### Performance

Async generators overhead is much smaller than for state management libraries. But there are a lot of ways to get performance problems here too, e.g. over flooding with messages. But there are also a lot of almost effortless ways to improve performance.

In the former example, there are useless calls to  `ReactDom.render`. This is obviously a performance problem, and there is a simple solution. Solving it quickly by sending another message with type “FLUSH” after each dispatched event. React render runs only after it receives this message. The intermediate steps can yield whatever they need in between.

Another awesome side of this approach is you may not worry about performance until it is a problem. Everything is structured in small autonomous stages. They are easy to refactor, or even without refactoring — many performance problems can be solved by adding another generic state in the pipe of steps, e.g., batching, prioritizing, saving intermediate data, etc.

For example, in the demo constructed React elements are saved in local variables and React can re-use them. Changes are propagated from the root towards leaves, so optimizations like overriding`shouldComponentUpdate`  aren’t needed.

#### Testing

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

#### Persistent state

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

#### Functional Programming

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
