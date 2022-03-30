> - 原文地址：[What is Debugging? How to Debug Your Code for Beginners](https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code/)
> - 原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![What is Debugging? How to Debug Your Code for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-mike-198101.jpg)

In this article we'll talk about what debugging is, how to debug your code, and how you can get better at it.

## Table of contents

- [如何调试](#howdebuggingstarted)
- [你为什么要学习调试知识？](#whyshouldyoulearnaboutdebugging)
- [如何调试你的代码](#howtodebugyourcode)
- [如何进入调试的思维模式](#howtogetinadebuggingmindset)
  - [注意错误信息](#payattentiontoerrormessages)
  - [用 google 搜索](#googlethings)
  - [向另一个人或一只鸭子解释你的逻辑（小黄鸭调试法）](#explainyourlogictoanotherpersonoraduck)
  - [Narrow Down Your Problem and Understand Where the Error is Generated  
        ](#narrowdownyourproblemandunderstandwheretheerrorisgenerated)
  - [休息一下，想想别的事情](#takeabreakandthinkaboutsomethingelse)
  - [寻找帮助](#lookforhelp)
  - [确保bug已经解决](#makesurethebugisdead)
  - [编写简洁的代码](#writecleancode)
    - [写 DRY 代码](#writedrycode)
    - [尽可能写出简单的代码](#writesimplecodewhenpossible)
    - [使用 SOLID 原则](#usethesolidprinciples)
- [技术调试工具](#technicaldebuggingtools)
  - [TypeScript如何帮助编写简洁的代码](#howtypescripthelpswritecleancode)
  - [如何使用Console.log来调试代码](#howtouseconsolelogtodebugcode)
  - [如何使用Visual Studio调试器](#howtousevisualstudiodebugger)
  - [Chrome 调试器](#chromedebugger)
- [结语](#conclusion)

# How Debugging Started

软件中的"_bug_"和 "_debugging_" 这两个词被普遍认为是由 [Admiral Grace Hopper](https://es.wikipedia.org/wiki/Grace_Murray_Hopper) 提出的。一个真正的传奇人物，她写了有史以来的第一个编译器。

20世纪40年代，当她在哈佛大学为美国海军开发的一台计算机工作时，她的同事发现一只飞蛾（一种真实的昆虫）卡在一个继电器中，使计算机崩溃。

在解决这个问题时，她说，他们正在 `debugging` 系统。

如果你是一个词源学爱好者，你可能会对这样一个事实感兴趣：在进入计算机世界之前，`debugging` 一词似乎已经作为一个术语在航空学中使用。

而且显然有某种证据表明，甚至托马斯-爱迪生在1878年也在 `technical error` 的意义上使用过这个词。

但这并不是本文的重点。重点是，调试是软件开发的一个核心部分。它一直都是，而且可能永远都是。

然而，值得庆幸的是，现在我们需要从计算机中移除真正的昆虫的情况相当罕见。

# Why Should You Learn About Debugging?

漏洞和错误在软件开发中很容易发生，因为它是一种概念性和抽象的活动。

作为开发者，我们与信息打交道。我们组织它，移动它，更新它，编辑它，把它发送到各地，然后再次接收它。

我们一直在与信息打交道，但不是直接与它打交道。信息并不 "实际 "存在于计算机中，至少不是以用户认为的格式存在。

在计算机中只有电脉冲，然后被抽象为1和0，然后再次被抽象为我们正在处理的任何信息。

为了与计算机交互和使用计算机，我们使用编程语言。这些提供了计算机正在执行的实际任务的抽象，以及我们正在管理的信息的表示。

编程可以是一种非常抽象的活动，而且很容易很快就忽略了计算机正在执行的实际任务是什么，或者我们在某一行代码中根据什么信息行事。从那时起，我们就很容易给计算机发出错误的指令，从而错失我们所要寻找的目标。

在软件开发领域的一个内部笑话是，开发人员通常会花5分钟来写代码，花5个小时来理解为什么事情不能像它们应该的那样工作。

作为开发人员，无论我们做得多好，我们都要花无数个小时来调试我们的代码，所以我们应该努力在这方面做得更好、更快。

# How to Debug Your Code

调试可以被定义为在代码库中找到问题的根源并加以修复的过程。

通常我们会从思考所有可能的原因开始，然后测试每个假设（从最有可能的假设开始），直到找到最终的根本原因。然后我们纠正它，确保它不会再发生。

对于bug，没有神奇的解决方案。通常情况下，它需要结合搜索，记录我们的代码，并根据真正发生的情况检查我们的逻辑。

虽然有许多工具可以帮助你进行调试，但使用这些工具并不一定是困难的部分。难的是真正理解你得到的错误，并真正理解什么是解决这些错误的最佳方案。

因此，让我们先来谈谈 "调试心态"，然后探索一些我们可以用来调试代码的有用工具。

# How to Get in a Debugging Mindset

## Pay Attention to Error Messages

![G-Wn7Seyn](https://www.freecodecamp.org/news/content/images/2022/03/G-Wn7Seyn.gif)

在几乎所有的开发环境中，如果你的代码失败了，很可能会显示一个错误信息，（在某种程度上）解释你的代码为什么会失败。

以这段代码为例:

```js
mickTheBug('Im a scary bug!')

const mickTheBug = message => console.log(message)
```

这段代码出现了以下错误:

```js
ReferenceError: Cannot access 'mickTheBug' before initialization
    at Object.<anonymous> (/home/German/Desktop/ger/code/projects/test.js:4:1)
```

正如你所看到的，错误信息明确指出了问题所在，甚至声明了问题发生在哪一行（`test.js:4:1`）。

这似乎是一个愚蠢的建议，但你可能会惊讶地看到有多少程序员不仔细阅读错误信息，而只是用他们脑海中的第一个想法来应对错误。

错误信息的存在是有原因的，这至少可以让我们对问题的来源有一个初步的了解。

## Google Things

![ddqvW2927](https://www.freecodecamp.org/news/content/images/2022/03/ddqvW2927.png)

如果你得到的错误信息不清楚，或者你无法弄清楚为什么会得到它，那么好的第一步就是用谷歌搜索。

关于编码的许多令人惊奇的事情之一是，在线社区是巨大的。几乎可以肯定的是，已经有大量的人遇到了和你一样的问题，并且已经解决了它，解释了它，这样其他人就不必再纠结于它了。

当搜索时，一个好主意是在搜索中尽可能详细。按照前面的例子，我会使用 `javascript ReferenceError: Cannot access before initialization` 。我发现，在搜索中提到你所使用的技术会给你更准确的结果。

我还了解到，删除那些只针对我的代码而不是每个人都会遇到的错误的东西是很重要的。如我的函数的名字（_'mickTheBug'_）。

另一个好主意是尽量 **使用可信的和最新的来源**。可信的意思是官方文档或已经被其他人验证过的解决方案。最近的意思是指尽可能在最近实现的解决方案，因为五年前有效的东西可能不是现在解决问题的最好方法。

当你在学习新东西或处理错误时，官方文档总是应该是首先要检查的东西。

官方文档通常是任何特定工具的最完整和最新的信息来源。有时，翻阅这么多的技术信息可能会感到乏味或不知所措，但从长远来看，我认为这可以节省时间。

官方文档的问题是，有时它们包含如此多的信息，而且解释得如此详细，以至于它更令人困惑而不是解释。

正因为如此，我认为对于任何特定的主题，总是使用一个以上的来源，并 "听取不同的声音 "来解释同一件事是一个好主意。通常只有在阅读了文档、一些文章和观看了一些YouTube视频之后，我才觉得我对我正在使用的工具有了很好的理解。

## Explain Your Logic to Another Person or a Duck

![lwjv2jUhM](https://www.freecodecamp.org/news/content/images/2022/03/lwjv2jUhM.png)

我之前提到过，编程可以是一种抽象的活动，这使得我们很容易忽视一些事情，做出错误的假设，并误解我们正在处理的信息

解决这个问题的一个好办法是逐行阅读你的代码，一边读一边大声解释。[小黄鸭调试法](https://en.wikipedia.org/wiki/Rubber_duck_debugging)是一种流行的方法，但你可以选择你最喜欢的宠物或想象中的朋友。 =P

这样做的目的是强迫自己真正读懂你的代码，而不是仅仅假设你知道它是做什么的。通过这种方式，你可以检查你头脑中的逻辑与你的代码中实际发生的情况。

事实上，我们倾向于假设事情，而不是详细关注每一行代码，这只是人类的天性。这是一种帮助我们节省精力和更快做事的机制。

但在调试时，我们需要强制我们的大脑与我们一起工作，并尽可能地在每一行代码上出现。

## Narrow Down Your Problem and Understand Where the Error is Generated

![aEKNV-Iju](https://www.freecodecamp.org/news/content/images/2022/03/aEKNV-Iju.gif)

随着你的代码库越来越大，你将很难分析每一行代码来寻找你的错误。因此，一个好主意是分而治之，从最有可能产生问题的地方开始搜索。

让我们看看这个例子。我有一个函数，它接收一个数字并返回它乘以2的结果，还有一个函数，它打印一个名字（firstName），一个姓氏（lastName），以及乘法函数的结果。


```js
const multiply = num => num*2

const mickTheBug = async (firstName, lastName, age) => {
  console.log(`My name is ${firstName} ${lastName} and the double of my age is ${multiply(age)}`)
}

mickTheBug('Mick', 10)
```

这段代码是有意义的，运行时没有出现错误，但我得到的结果是 `My name is Mick 10 and the double of my age is NaN`，这不是我想要的。

这里我可以看到，`10` 被打印在 `lastName`的位置。而由于参数是在调用函数的那一行设置的。

这可能是一个很好的猜测，首先要检查参数的传递方式是否正确。事实上，我们可以看到，当我调用该函数时，我给它传递了两个参数，`Mick`和 `10`，而该函数希望有三个参数`firstName, lastName, age`。

> Typescript 可以轻松地防止我们犯这个错误。稍后再谈这个问题。 ;)

同样，这是一个愚蠢的例子，但它说明了我们如何能够推断出问题的来源，即使我们没有错误信息来帮助我们。

在这些时候，试着问自己以下问题:

- 我怎么知道我看到了一个错误？
- 我在提供什么输入？它是从哪里来的？这个输入与函数所期望的相同吗？
- 我得到了什么输出？输入是如何变化的？
- 是否有任何其他实体与这段代码互动？
- 我最近是否改变了什么，从而使代码中断？

## Take a Break and Think about Something Else

![Ly_kXFJop](https://www.freecodecamp.org/news/content/images/2022/03/Ly_kXFJop.gif)

Bugs like the examples we've seen so far are a piece of cake to solve. But many others are not, and in many occasions you'll have to fight with bugs for several hours (or days) until you arrive to a solution.

In these occasions, I find it's really important to pay attention to your state of mind. Programming is a very mental activity. So the way your brain is working at a certain moment or the way you're feeling will affect directly the way your code will look and your ability to solve problems in an effective way.

If you spend hours reading, repeating out loud the same lines of code, googling, going over Stack Overflow questions, and still your code fails, sooner or later you'll get frustrated and start putting pressure on yourself.

As you try different solutions and fail once and again, your attention to detail will likely dilute and you'll start jumping around to different ideas, and trying many things at once.

Once you get to this point, the wise thing to do is to go for a walk or just leave it alone until the next day.

If you keep going when being in this stressed and tired mental state, you're probably not going to find a solution. And what's more, you might even make the bug worse by touching things that are not really related to it.

When leaving things alone for a while and thinking about something else, our brain will keep working on the problem on the background, and connecting ideas in a "subconscious" and creative way.

In many occasions it has happened to me that a fresh solution pops into my mind when I'm in the shower or as soon as I see the problem again the next morning. It's one of those "_Aha!_" moments. It probably was right there in front of your eyes but because you were tired and stressed you weren't able to see it.

Being focused, well rested, and relaxed is key to writing good code and fixing bugs in an effective way. The line between working hard and burning out your mind is a thin one, but it's important that we pay attention to it and give ourselves a rest whenever we need one.

Usually I find a good moment to take a break is when I run out of ideas, or start to lose focus and try different approaches in an impulsive, non-systematic way.

Also, keep in the back of your mind the thought that bugs are just part of software development. It doesn't mean you suck as a developer. Everybody gets bugs, even the best programmers. So chill and take advantage of the situation to learn something new.

## Look for Help

I mentioned before the importance of online communities and how cool it is that we can easily find help for almost any subject in a matter of seconds.

Having access to the right communities, where you can ask and talk to people experienced in the tools you're using is really, really, really helpful.

It will vary depending in what kind of field you work and what tools you use, but for me, sites like [freecodecamp](https://www.freecodecamp.org/),[stackoverflow](https://stackoverflow.com/), and Sack or Dscord communities like [meetupjs](https://meetupjs.com.ar/) have made a huge difference.

When asking questions within these communities, I find it's important to keep in mind the following:

- Try to be as **detailed as possible**. It's not always easy to understand somebody else's code by just reading it, so try to explain what are you working on, what are you trying to achieve and what is the problem you're facing.
- Show the **exact error** you're getting.
- Show the **related code** you think is causing the error.
- Mention **what solutions you've tried** so far and why they didn't work.
- Investigate and show that you've done **research** about the problem. Even though asking for help is totally ok, I think you have to first evacuate the more obvious and easy paths before asking someone else to do the thinking for you. That means that you've analyzed your code, googled the problem, read other solutions and official documentation, tried many approaches and none of them worked. Only then is it acceptable to ask someone else for help. I think this is a matter of being able to independently learn and solve problems, and also respect other people's time.
- Mention the **documentation** you've consulted about this topic and what does that documentation say about it.
- Provide access to your **full code base** in an online repo.

This will make it easier for another person to understand your problem and hopefully provide you with solution ideas.

If you get responses, it's important for you to **respond to them**, either by confirming that the solution worked or that it didn't and explain why.

Remember that the question you asked will probably be stored and available the next time someone comes searching for the same bug. The idea here is to **construct knowledge** and make it **available to everybody**, not just to solve this particular bug.

Also if you end up finding the solution yourself, it's a great idea to **answer your own question** and share the solution with everybody.

Following the same train of thought, if you participate in these communities by asking questions, it would be nice for you to participate answering questions as well. Whenever you can and find that you have the knowledge, it's good to give back. ;)

My last thought about this is that most people in these kinds of communities are nice, open, and very willing to help and share knowledge. But just like in any other field of life, every once in a while you encounter people that are rude, arrogant, or even aggressive.

My advise here is that you don't let others intimidate you, even if they appear to have more knowledge than you.

No one was ever born knowing everything, and if you've done your research and worked on the problem, you're totally entitled to ask whatever you want. If other people are arrogant or rude, it speaks bad about them, not you.

## Make Sure the Bug is Dead

![xOmnh7_G7](https://www.freecodecamp.org/news/content/images/2022/03/xOmnh7_G7.gif)

The only thing more frustrating than fighting with a tough bug, is fixing it only to later on discover that the bug is still there. Or even worse, that more bugs have been introduced in your code thanks to the "solution".

To avoid this kind of situation, it's key that you test your code. And if you can do it with automated unit testing, much better.

Ideally, each section or component of your codebase should have its own tests. And these tests should be run every time any modification is made to the codebase. This way, and if the test are correctly written, we can notice a new bug as soon as its introduced. Which of course makes it easier to find its cause and solve it.

If you don't have automated tests (you really should if you want to create quality software), at the very least test your code manually, reproducing all possible interactions the user could have with it, and make sure the bug was effectively killed.

## Write Clean Code

![Y4PKO37NS](https://www.freecodecamp.org/news/content/images/2022/03/Y4PKO37NS.png)

The best way to fight bugs is to avoid inserting them in the first place. Writting guaranteed bug-free code is impossible for any programmer, but there are a few things you can do to reduce the chances of bugs being inserted.

A good place to start are the classic DRY, KISS and SOLID principles.

There are whole books written about these topics, but long story short, these are principles that aim to make software easy to develop, easy to understand and maintain, and as close to bug free as possible.

### Write DRY code

The **DRY** principle stands for **"Don't repeat yourself"**. It basically means that we should avoid repetition of the same code whenever possible.

For example, if you see that you're performing the same operation over and over again on different parts of your code, a much better approach would be to abstract that logic into a function and call the function instead of directly performing the operations on different parts of your code.

In this way, if some bug or unexpected behavior happens in that operation, we know there's only one piece of code responsible, and not many dispersed around the codebase.

### Write simple code when possible

The **KISS** principle stands for **"Keep it simple stupid"**. As a software project grows, it inevitably starts to get more and more complex. As new, unplanned, features are added and different devs start to work on it, different logic and ways to execute tasks may be implemented within the same project.

This makes the code harder to understand, maintain, and work with. And when code is hard to understand, it gets really easy to make wrong assumptions and insert bugs.

We should always aim for software that is easy to read and understand, with a crystal clear logic that is explicit for everyone and not just for us.

Keep in mind that somebody else in the future may have to work with the code you wrote, so make it easy for that person to understand what you're doing. Even you after a few months might not even remember what you tried to do with that function.

Also keep in mind that no software stays the same forever. The nature of software is to change and be enhanced by new features, so your code should be easy to modify if needed.

And taking this point further, you **should** modify your code whenever you can find a simpler way to execute the same tasks.

Maybe after including a few new features, the design you had in mind at first isn't still the best option. Another cool thing about coding is that nothing is written in stone, and things can be easily turned around when needed. So take advantage of this and get used to constantly refactoring your code in the look for the simpler approach.

Some practical concepts that help with this are using explicit function and variable names, separating concerns into different functions and code modules, and writing short comments to explain your code when your tasks is inevitably complex.

### Use the SOLID principles

**SOLID** are a set of principles that apply mostly to [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming). They were established by [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) (who also happens to be the author of the [agile manifesto](https://en.wikipedia.org/wiki/Agile_software_development#The_Agile_Manifesto) as well) in [this book](https://www.amazon.com/-/es/Robert-Martin/dp/0135974445) about object oriented design.

- **S** stands for "Single Responsibility", which means that a class should have one, and only one job.
- **O** stands for "Open Closed Principle", which means that you should be able to extend a classes behavior, without modifying it.
- **L** stands for "Liskov Substitution Principle", which means that derived classes must be substitutable for their base classes.
- **I** stands for "Interface Segregation", which means a client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
- **D** stands for "Dependency Inversion Principle" which means that entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

As mentioned, SOLID is more applicable to OOP than to general programming. We're not going to go in depth into OOP in this article, but is still good to know these principles and keep them in mind.

Now let's learn about some tools you can use to help you debug your code.

# Technical Debugging Tools

There are many tools we can use to either reduce the chances of inserting bugs into our code, or to fight existing bugs more efficiently.

In that regard, we're going to take a look at **TypeScript**, the popular (and very useful) **console.log**, and the **debuggers** built into **VS Code** and **Chrome**.

These tools and examples will be centered around JavaScript, but the principles apply for any programming language.

You should also know that most code editors and web browsers nowadays have built-in debuggers, but we're going to review VS code and Chrome since they're the most popular.

And last, you should also know there're specific debugging tools you can use to debug specific types of apps, like [React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) and [Redux](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es) dev tools, which are browser extensions you can install to help you debug your code more efficiently.

But we're going to review these in the future in a separate article about how to debug a React app. ;)

## How TypeScript Helps Write Clean Code

I mention TypeScript as the first tool, because it's closely related to the previous section about writing clean code.

TypeScript doesn't just provide you with a robust typing system for JavaScript. It also adds a compiler that helps you identify bugs and misconceptions in your code before you even run it. It provides amazing autocompletion, and can be thought of as an automatic documentation tool.

To see just a tip of its benefits, let's revisit the previous example in which we didn't provide the right arguments to our function call.

![TYPESCRIPT1](https://www.freecodecamp.org/news/content/images/2022/03/TYPESCRIPT1.png)

As you can see here, before even running the program TypeScript immediately detects that we're missing an argument and gives us the following error:

```js
Expected 3 arguments, but got 2.ts(2554)
index.ts(6, 64): An argument for 'age' was not provided.
```

These kinds of notifications are extremely helpful, specially when working on big projects in which you have to interact with many APIs or different code sections.

So in that way, if your're used to plain JavaScript, TypeScript may feel like unnecessary boilerplate at first. But in the long run it will surely save you time and prevent you from inserting silly bugs in your code.

## How to Use Console.log to Debug Code

Logging your code in the console is the most basic way of debugging and the first one we learn to use as devs.

The idea is to print the value of variables, functions, inputs and outputs to check the logic we have in our mind against what is really happening in our code. It also helps us see what wrong assumptions we're making.

Although it's a basic tool, we can do some cool stuff with it. Let me show you.

If we call `console.log` we will get whatever object we pass as parameter printed in our console.

```js
const arr = []
console.log(arr) // []

const populateArr = (elem1, elem2, elem3) => arr.push(elem1, elem2, elem3)
console.log(populateArr) // [Function: populateArr]

populateArr('John', 'Jake', 'Jill')
console.log(arr) // [ 'John', 'Jake', 'Jill' ]
```

`console.table` is great when working with arrays or objects, as it sets the information within a table where your can easily see keys/indexes and properties/values.

```js
const arr = ['John', 'Jake', 'Jill']
console.table(arr)

//┌─────────┬────────┐
//│ (index) │ Values │
//├─────────┼────────┤
//│    0    │ 'John' │
//│    1    │ 'Jake' │
//│    2    │ 'Jill' │
//└─────────┴────────┘

const obj1 = {
  name: 'John',
  age: 30,
  job: 'Programmer'
}

const obj2 = {
  name: 'Jason',
  age: 32,
  job: 'Designer',
  faveColor: 'Blue'
}

const arr2 = [obj1, obj2]

console.table( arr2 )
// ┌─────────┬─────────┬─────┬──────────────┬───────────┐
// │ (index) │  name   │ age │     job      │ faveColor │
// ├─────────┼─────────┼─────┼──────────────┼───────────┤
// │    0    │ 'John'  │ 30  │ 'Programmer' │           │
// │    1    │ 'Jason' │ 32  │  'Designer'  │  'Blue'   │
// └─────────┴─────────┴─────┴──────────────┴───────────┘
```

When logging many things at the same time, `console.group` gives us an organized way of seeing things.

```js
const arr1 = [22, 23, 24]
const arr2 = [25, 26, 27]

console.group('myArrays')
console.log(arr1)
console.log(arr2)
console.groupEnd()


const obj1 = {
  name: 'John',
  age: 30,
  job: 'Programmer'
}

const obj2 = {
  name: 'Jason',
  age: 32,
  job: 'Designer',
  faveColor: 'Blue'
}

console.group('myObjects')
console.log(obj1)
console.log(obj2)
console.groupEnd()

// myArrays
//   [ 22, 23, 24 ]
//   [ 25, 26, 27 ]
// myObjects
//  { name: 'John', age: 30, job: 'Programmer' }
//  { name: 'Jason', age: 32, job: 'Designer', faveColor: 'Blue' }
```

`console.assert` is useful when testing conditions in our code. It takes two arguments: the first one is a condition and the second one is the message that logs if the condition is false.

```js
const arr1 = [22, 23, 24]

console.assert(arr1.indexOf(20) !== -1, '20 is not in my array')
// Assertion failed: 20 is not in my array
```

`console.warn` and `console.error` are useful when debugging errors in our code. The first one will print the error with a yellow background and the second with a red background.

```js
console.warn('No biggie') // No biggie
console.error(new Error('Error detected'))

// Error: Error detected
//     at Object.<anonymous> (/home/German/Desktop/ger/code/projects/test.js:6:15)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
//     at node:internal/main/run_main_module:17:47
```

## How to Use Visual Studio Debugger

As our apps grow and start to get more complex, console.logging around becomes a not so efficient practice.

To help us in our fight against bugs, debuggers were developed. They are nothing more than programs that are able to read other programs and go through them line by line, checking whatever information we want along the way (such as the value of variables, for example).

The first example we're going to see is **Visual Studio debugger**.

To debug a Node.js app we don't need to install anything extra (assuming we have VS Code and Node installed in our computer), as the node debugger comes built-in in VS code.

If you're debugging in another language like Python or Java, you might need to install a specific VS extension before running the debugger.

To start, we just select the file we want to debug and press the bug icon.

![vsc1](https://www.freecodecamp.org/news/content/images/2022/03/vsc1.png)

After that, we'll be presented with the following screen:

![vsc2](https://www.freecodecamp.org/news/content/images/2022/03/vsc2.png)

We'll select "Run and debug", which will just run the program in the editor for us.

Take into account that you could also create a `launch.json` file, which is a file VS code uses to "know" how to run your program. For this simple example it won't be necessary, but know that this possibility exists.

After clicking the "Run and debug" button, our program will run and we'll get to the following screen:

![vsc3](https://www.freecodecamp.org/news/content/images/2022/03/vsc3.png)

On the top left side, we have all the variables available in the program, both at local and global levels.

![vsc4](https://www.freecodecamp.org/news/content/images/2022/03/vsc4.png)

Beneath, we'll have a space were we can declare expressions in particular we'd like to watch. Expressions can be anything, like particular variables or functions you'd like to keep an eye on to evaluate how they change along with your program.

For example, I added my variable `arr` and VS code shows me the value of that variable:

![vsc5](https://www.freecodecamp.org/news/content/images/2022/03/vsc5.png)

And beneath that we can see the call stack (if you don't know what that is [here's](https://www.youtube.com/watch?v=8aGhZQkoFbQ) an awesome video that explains it), the scripts that are being loaded, and the breakpoints we've set in our code (we'll see what these are in a sec).

![vsc6](https://www.freecodecamp.org/news/content/images/2022/03/vsc6.png)

**Breakpoints** are a big part of what makes debuggers useful. As their name indicates, they are points you can declare in your code in which the debugger will stop running the program. When the program stops, you'll be able to check all the information we've previously mentioned as it is in that particular moment.

So breakpoints allow us to see the actual information the program is working with, without the need of logging anything into the console. Pretty cool!

You can identify a breakpoint by the little red dots that appear to the left of the line numbers in your code (or by looking into the section mentioned above).

By default, when you run the debugger a breakpoint will be inserted in the last line of your code. To insert new break points, just click to the left of the line number you'd like the debugger to stop at.

![vsc7](https://www.freecodecamp.org/news/content/images/2022/03/vsc7.png)

Now when you run the debugger you'll see there's a tiny left arrow on top of the first breakpoint, indicating that's where the program execution has stoped.

![vsc8](https://www.freecodecamp.org/news/content/images/2022/03/vsc8.png)

On the top of the screen we have the **controls**, that will allow us to go through the program stepping from breakpoint to breakpoint.

![vsc9](https://www.freecodecamp.org/news/content/images/2022/03/vsc9.jpg)

- The **Continue** button runs the program and stops only on user-defined breakpoints.
- With **Step Over**, if there is a function call, it executes it and returns the result. You don't step into the lines that are inside the function. You just go directly to the function return value.
- **Step Into** goes inside the function line by line until it returns, and then you go back to the next line right after the function call.
- With the **Step Out** button, if you have stepped in a function you can skip the remaining execution of the function and go directly to the return value.
- **Restart** runs the debugger from the top all over again and **Stop** exits the debugger.

So there you go, that's a very powerful debugger built into your code editor. As you can see, with this tool we can check a lot of information at the same time, just by setting breakpoints wherever we want and without the need of any console.logs.

## Chrome Debugger

To debug in Chrome, we start by opening our app in the browser. In my case, I created a simple HTML file where my JS file is linked (same file as the previous example).

Then we open the **developer tools** (ctrl+shit+i or right click -> inspect) and go to the "**sources**" tab.

We should be seeing something like this:

![chrome1](https://www.freecodecamp.org/news/content/images/2022/03/chrome1.png)

On the left side we can see the files available in our app (in my case there is only an HTML file and the JS file.) In the middle we can see the code of our selected file, and on the right side we have a set of information very similar to what we had in VS Code.

To set a breakpoint, we have to click on top of the line we want to stop in. In Chrome, breakpoints are identified as blue arrows on top of the line number.

![chrome2](https://www.freecodecamp.org/news/content/images/2022/03/chrome2.png)

Then if we refresh our page, the script will stop in the first breakpoint and we'll be allowed to navigate through it using the controls, which work exactly the same as in VS code.

![chrome3](https://www.freecodecamp.org/news/content/images/2022/03/chrome3.png)

As we've seen, Chrome and VS code debuggers work very similarly, and which one you decide to use is just a matter of preference.

# Conclusion

Debugging is a central part of what we do as developers. Because of this, I think it's a good idea to think about it and do it in an efficient way, instead of just reacting to bugs as they happen.

As we've seen, there're plenty of things we can do, both from a mental and from a technical point of view, to become better debuggers.

Hope this helped and see you in the next one!

You can also follow me on [Twitter](https://twitter.com/CoccaGerman) and [LinkedIn](https://www.linkedin.com/in/germancocca/).
