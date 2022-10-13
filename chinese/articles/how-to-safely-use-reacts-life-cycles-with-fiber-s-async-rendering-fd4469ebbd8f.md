> -  原文地址：[Revisiting use of React’s Component Life Cycles in Anticipation of Async Rendering](https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/)
> -  原文作者：[Anonymous](https://www.freecodecamp.orgAnonymous)
> -  译者：
> -  校对者：

![Revisiting use of React’s Component Life Cycles in Anticipation of Async Rendering](https://cdn-media-1.freecodecamp.org/images/1*zE7ymidBZ9BffwrT4MbfHw.jpeg)

by Alex Brown

# Revisiting use of React’s Component Life Cycle Hooks in Anticipation of Async Rendering

![1*zE7ymidBZ9BffwrT4MbfHw](https://cdn-media-1.freecodecamp.org/images/1*zE7ymidBZ9BffwrT4MbfHw.jpeg)

If you’ve browsed the [documentation](https://reactjs.org/docs/react-component.html#constructor), or kept an eye on the advice from the [core React team](https://twitter.com/dan_abramov/status/790581793397305345?lang=en), you’ve probably read that you shouldn’t handle subscriptions or side-effects in the `constructor` or `componentWillMount`.

While the advice is clear, the reasoning behind these instructions hasn’t been greatly elaborated on, though [not without reason](https://github.com/reactjs/reactjs.org/issues/302#issuecomment-345445888). The brief explanation is that the implementation details of Fiber’s asynchronous rendering, motivating these instructions, aren’t entirely ironed out.

Because Fiber’s async rendering isn’t yet enabled, ignoring some of the wisdom regarding life cycle usage might not have bitten you, yet. In the future, this might change, and that’s what we’re going to explore in this article.

### Clarification: Is Fiber ready?

If Fiber’s async rendering isn’t ready to go, you might be wondering whether the team sold you a [counterfeit countdown](http://isfiberreadyyet.com/). Rest assured, this isn’t the case. Fiber’s new engine, or more specifically the reconciliation process, has been put into operation with React v16. With that said, we [can’t change gears](https://reactjs.org/docs/codebase-overview.html#fiber-reconciler) from synchronous render to prioritised renders just yet.

### How will using life cycles be impacted?

Conclusively, we don’t know until async rendering is set in stone. Otherwise the React team would have said as much. But we can draw some safe conclusions about handling subscriptions and side-effects. And that’s what we’ll explore.

For the sake of simplicity, here’s an example of subscribing to a [media query list](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) in the constructor, which **presently** will not cause us issues:

Before async rendering is enabled, we don’t have any issues because we can make the following guarantees about the component:

1.  The `constructor` will be synchronously followed by `componentWillMount`, if we opt to use it, and then `render`. **Importantly, we won’t be interrupted before render.** Because of this, we can further guarantee…
2.  If the component unmounts in the future, `componentWillUnmount`will clean up the event listener (subscription) beforehand. This means that the `window` won’t retain a reference to the component’s `handleMediaEvent` method via the media query list, therefore allowing the unmounted component to be garbage collected and hence avoid a memory leak. Failing to clean this up once wouldn’t be a big deal, but a component re-mounting and adding more listeners could cause issues over the lifetime of the app.

> There is one caveat: error boundaries. I’ll touch on that in a bit.

#### So what changes with async rendering?

To get right to the point: many of your class component’s life cycle methods can fire more than once. This is because Fiber’s reconciliation process allows React to yield the work it is doing. Allowing the main thread to handle something that needs to be displayed urgently like animation. This can involve throwing away already completed work, potentially including invocations of the `constructor`, `componentWillMount`, `render`, `componentWillUpdate`, and `componentWillReceiveProps`.

But, `componentDidUpdate` and `componentDidMount` are only called after React has flushed changes to its host environment. Thus avoiding these issues. Cleanup or ‘tear down’ in `componentWillUnmount` should mirror the setup in `componentDidMount.` Helping to ensure a failure to call this hook will not be problematic.

Thus, we need to be handling subscriptions and side-effects in `componentDidMount`. Side-effects taking place in the `constructor` and `componentWillMount` most often include network requests. They are especially troublesome to call multiple times when they result in mutations to our app’s back-end data stores.

One last note.

Like me, you might have assumed that React’s very first render is guaranteed to be always synchronous. But, this is not necessarily the case!

Brian Vaughn (who is on the core React team) informed me that the current intention is for the first render to be sync by default, with optional async being opt-in. He added that a low-priority first render might be valuable if, for example, React’s host container isn’t yet ready. Obviously, this is more applicable where your HTML body consists of more than a single `div` for React to render to.

For a visual checklist of what is safe to perform and where, see Brian’s [gist](https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9).

### What purpose does `componentWillMount` serve?

The use-case is very narrow. Developers often cite two desirable traits of `componentWillMount.` They are:

1.  `setState` can be called from `componentWillMount`, unlike the `constructor`.
2.  A `setState` in `componentWillMount` won’t cause two renders if it occurs synchronously, before `render`, unlike `componentDidMount`.

Similarly, the reason `componentWillMount` was kept in the codebase originally, as Sebastian Markbåge [explains](https://github.com/facebook/react/issues/7671) in a proposal to deprecate `componentWillMount`, was to handle a side-effect that might be synchronous (if a local cache held the desired data) or asynchronous in the alternative. Today, as his demonstration code block conveys, `getInitialState`, es6 class constructors and es7 property initialisers cater to this purpose.

With all this said, a read-only GET request initiated from `componentWillMount` can be useful. On a slow-to-render device, for example an average mobile, it’s possible to save a few hundred milliseconds by initiating the request here rather than `componentDidMount`. Of course, such a request should be idempotent/read-only as it may fire more than once.

> When rendering on the server, `componentWillMount` is still the only life cycle method called other than the `constructor`, so it’s possible there are some use-cases there. Having not attempted server-side rendering myself, I can’t elaborate much on the topic.

### So are these warnings only relevant once async rendering is live?

As Brian pointed out to me, not quite. Error boundaries, which went live with React v16, can also result in the invocation of `componentWillMount` and `componentWillUpdate` without a corresponding `componentDidMount` and `componentDidUpdate`!

### Are there any other changes to be wary of?

React recently initiated a [RFC (Request For Comment)](https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html) process, enabling the wider community to discuss ideas. Two of the first RFCs are from members of the React core team, discussing significant potential changes.

1.  Andrew Clark submitted an RFC about changes to the context API. This hopefully will ease some of the difficulty in getting around `shouldComponentUpdate` when attempting to broadcast state down the component tree. The RFC is [here](https://github.com/reactjs/rfcs/pull/2).
2.  Brian submitted an RFC for async-safe, static life cycle hooks. This principally involves gradually deprecating `componentWillMount`, `componentWillUpdate`, and `componentWillReceieveProps`. Two new static hooks are proposed: `prefetch` and `deriveStateFromProps`. You can read more from the proposal [here](https://github.com/bvaughn/rfcs/blob/static-lifecycle-methods/text/0000-static-lifecycle-methods.md), and the RFC [here](https://github.com/reactjs/rfcs/pull/6). Hopefully this article provided you with some good insight as to why these changes are proposed :).
3.  In the aforementioned proposal, Brian also teased a forthcoming RFC for a new SSR hook: `componentDidServerRender`, taking the place of `componentWillMount` on the server.

Keep in mind that these are early proposals!

### About the author

I’m an Australian developer located in Adelaide, passionate about both front and back-end development with JavaScript! I recently published my first open source library for React: [React-MQL-Manager](https://github.com/AWebOfBrown/React-MQL-Manager). Here’s a simple demo, integrating with React Router v4 for [responsive routing!](https://codesandbox.io/s/lo3p1wkjz)

I’m currently looking for my first front-end or full-stack position. You can reach me by [email](mailto:ajcbrown820@gmail.com), or say hi to me over on twitter: [@awebofbrown](https://twitter.com/awebofbrown).

### Special Thanks

A huge thank you to [Brian Vaughn](https://twitter.com/brian_d_vaughn), of the React core team, for taking the time to read a draft of the article as well as making suggestions & corrections. In addition to working on React, Brian has authored some great open-source libraries such as [React-Virtualized](https://github.com/bvaughn/react-virtualized) and [JS-Search](https://github.com/bvaughn/js-search), as well as helping to answer community questions on forums like StackOverflow.