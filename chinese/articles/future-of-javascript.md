> * 原文地址：[Why JavaScript Is the Programming Language of the Future](https://www.freecodecamp.org/news/future-of-javascript/)
> * 原文作者：Mehul Mohan
> * 译者：
> * 校对者：

![Why JavaScript Is the Programming Language of the Future](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/jsposter.jpg)

JavaScript was the first programming language I picked up. Well, I actually started with HTML and CSS. Just like many other web developers, going with JavaScript was a no-brainer. This is simply because it blends so well with HTML and CSS, and actually enhances your HTML/CSS skills as well. I've developed applications and games in various other programming languages including Java, Swift, C++, Dart. But the flexibility which JavaScript provides is unmatchable - even though it could be considered bad for beginners as it gives way more options than required to do a simple task.

Today, JavaScript is one of the most powerful languages on the planet because of its performance and omnipresence.

Personally, I feel like JavaScript has the potential to tap into so many popular industries like Machine Learning and Data Analysis, where Python still rules the game. It's even happening now with tools like Tensorflow.js!

However this was definitely not the case for JavaScript before. Earlier, it was a weak, non-performant language and was frowned upon. JavaScript was for "losers".

But not anymore. Let's see how JavaScript turned the tables in the last 10 years, why it has become stronger than ever, and why it is here to stay.

# V8: The beast powering JavaScript

V8 is actually a JavaScript engine. What is a JavaScript engine, you might ask? A JavaScript engine is an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time (JIT) compiler that compiles JavaScript to bytecode in some form.

V8 is Google’s open source high-performance JavaScript and WebAssembly JIT engine, written in C++. It is used in Chrome and in Node.js, among others. V8 can run standalone, or can be embedded into any C++ application.

This is the piece of software which highly optimizes your JS code and converts it into machine code for the CPU to execute. Some of the tasks V8 handles are:

1.  Garbage Collection
2.  Compilation to Machine code
3.  Inline caching
4.  Pointer compression
5.  and much much more optimization

As a matter of fact, pointer compression is a very new technique in V8 to boost memory optimization while having no effect on performance. If you're a geek, you can read more about how it is implemented on the official V8 blog.

The takeaway from this is that you can write JavaScript and sleep tight at night because your JS code is in very good hands.

# Mature ecosystem and community

JavaScript has one of the most mature – if not THE most mature – ecosystems a programming language could ever have. The community for JavaScript is vast, and the entry barrier is extremely low.

You can fire up a browser (found on 100% of personal computers), open the console, and you'll find a JS engine waiting for you to run code! This was never the case with any other programming languages of such complexity.

As if the vast community wasn't enough, we have the  `npm`  and  `yarn`  package systems. You name it and there's a package for that on the  `npm`  registry – everything from creating random strings to handling streams and buffers in JavaScript. There's a very famous saying among JavaScript developers:

> What can be done in JavaScript, would eventually be done in JavaScript

It's funny, but lowkey, I believe this.

If you enter as a beginner, there is very little chance you encounter a problem which nobody has encountered before. This is because all possible mistakes for simple JavaScript issues have probably already been asked about and archived on sites like Stack Overflow.

Frameworks and libraries like React, Angular, and Vue are paving the way for how future applications should be built. They're shifting the perspective towards declarative instead of imperative programming, the what instead of how. This lets developers develop quality applications without worrying about underlying high performant code.

## Omnipresence

JavaScript is present on:

1.  Front end (Browsers)
2.  Back end (Node, Deno)
3.  Android/iOS (React Native, NativeScript, etc.)
4.  Desktop (Electron)
5.  Hybrid (Ionic)

What makes this possible? JS engines like V8 are written in C/C++ and can even be compiled on embedded systems! For other platforms, because browsers are always present (like on Andorid/iOS), they ship with a JS engine which can then be used to run any JS code, even for native apps in the case of React Native.

## Bleeding edge features and advancement

JavaScript standards are led by the ECMA-262 TC39 community, and wow are these people fast! ECMAScript releases a new standard of JavaScript every single year (see the new ECMAScript2020 features!). You as a developer can even request that new features be added to the language.

For instance, here are some pending bleeding edge features which might make it into JavaScript in the near future:

![](https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-04-at-10.03.59-PM.png)

You can find all the proposals here:  [TC39 Proposals][1].

## JavaScript is FAST and SCALABLE

Of course, nothing really beats C/C++/Rust, but JavaScript is a fast - in the sense that V8 can generate highly optimized code by monitoring how your code executes, delaying the bits of execution which are not used, and optimizing the code segments which are used over and over. Especially when compared to its nearest competitors like Python. With the advancements in V8, it is becoming even more performant and memory efficient.

JavaScript (Node) is highly scalable (with supersets like TypeScript). Running on a single threaded architecture, people often criticize Node for its lack of threading environment, but the reality is it doesn't matter a lot.

The way you scale Node applications is not similar to how you'd scale a multi-threaded application. Node literally means "node" - a single node in a tree of processes. Node is scaled by running multiple instances of it and managing the cluster.

JavaScript leads the asynchronous event driven programming model of the industry, and does not need threads to scale. Instead, individual Node processes could be spawned to handle and utilize the complete CPU core. More on scaling Node later!

## Conclusion

I love JavaScript, and using it I've created a developer platform for developers like you. There you can not only learn JavaScript, but also various other languages like C, C++, Java, Node, Python, and more!  [Join here for free][2]  and learn with other developers straight outta your browser!

JavaScript is here to stay, and rule the industry this decade. Do you agree? Tell me on my  [twitter][3]  and  [Instagram][4]  handles - let's connect!

[1]: https://github.com/tc39/proposals
[2]: https://codedamn.com/
[3]: https://twitter.com/mehulmpt
[4]: https://instagram.com/mehulmpt
