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

像我们到目前为止看到的例子那样的错误，解决起来小菜一碟。但许多其他的就不是这样了，在许多情况下，你不得不与bug斗争几个小时（或几天），直到你找到一个解决方案。

在这种情况下，我发现注意你的心理状态真的很重要。编程是一种非常消耗精力的活动。因此，你的大脑在某一时刻的工作方式或你的感觉将直接影响你的代码的外观和你以有效方式解决问题的能力。

如果你花了几个小时阅读，大声重复同样的代码行，上网搜索，翻阅Stack Overflow的问题，但你的代码仍然失败，你迟早会感到沮丧，并开始给自己施加压力。

当你尝试不同的解决方案并一次次失败时，你对细节的关注很可能会淡化，你会开始有不同的想法，并同时尝试很多东西。

一旦你到了这个地步，明智的做法是出去走走，或者干脆不去管它，直到第二天。

如果你在这种紧张和疲惫的精神状态下继续下去，你可能不会找到一个解决方案。更重要的是，你甚至可能因为触碰了与之无关的东西而使 bug 变得更糟。

当把事情搁置一段时间并思考其他事情时，我们的大脑会在默默地继续处理问题，并以 `潜意识` 和创造性的方式将想法联系起来。

在很多情况下，我在洗澡时或第二天早上一看到这个问题，我的脑海中就会出现一个新的解决方案。这就是那种 `啊哈!` 的时刻。它可能就在你的眼前，但因为你很累，压力很大，所以你没能看到它。

集中精力、充分休息和放松是写好代码和有效修复错误的关键。努力工作和烧坏头脑之间的界限并不远，但重要的是我们要注意它，并在我们需要时让自己休息一下。

通常当我没有想法了，是休息的好时机，或者开始失去焦点，以一种冲动的、非系统性的方式尝试不同的方法。

另外，在你的脑海中保持这样的想法：`bug` 只是软件开发的一部分。这并不意味着你作为一个开发者很糟糕。每个人都会有 bug，即使是最好的程序员。因此，冷静下来，利用这种情况来学习新的东西。

## Look for Help

我之前提到过在线社区的重要性，以及我们可以在几秒钟内轻松找到几乎任何主题的帮助是多么酷。

能够进入正确的社区，在那里你可以向对你所使用的工具有经验的人询问和交谈，这真的非常、非常、非常有帮助。

这取决于你工作的领域和你使用的工具，但对我来说，像 [freecodecamp](https://www.freecodecamp.org/)、[stackoverflow](https://stackoverflow.com/) 和 [meetupjs](https://meetupjs.com.ar/) 这样的Sack或Dscord社区都起到了很大的作用。

在这些社区内提问时，我发现记住以下几点很重要:

- 尽量做到 `详细`。仅仅通过阅读别人的代码并不容易理解，所以尽量解释你在做什么，你想实现什么，你面临的问题是什么。
- 显示你得到的 `确切的错误`。
- 显示你认为导致该错误的 `相关代码`。
- 提到到目前为止你已经尝试了哪些 `解决方案`，以及为什么它们不起作用。
- 调查并表明你已经对这个问题进行了 `探索`。尽管寻求帮助是完全可以的，但我认为在要求别人为你做思考之前，你必须首先排除比较明显和容易的路径。这意味着你已经分析了你的代码，在谷歌上搜索了这个问题，阅读了其他解决方案和官方文档，尝试了很多方法，但都没有成功。只有这样，才可以接受向别人寻求帮助。我认为这是一个能够独立学习和解决问题的问题，同时也要 `尊重别人的时间`。
- 提到你所查阅的关于这个主题的 `文档`，以及该文档对它的评价。
- 在网上提供你的 `完整的代码库`。

这将使另一个人更容易理解你的问题，并希望为你提供解决思路。

如果你得到了回复，重要的是你要 `回复他们`，要么确认解决方案有效，要么确认它没有，并解释原因。

记住，你提出的问题可能会被储存起来，在下一次有人来搜索同样的错误时可以使用。这里的想法是要 **构筑知识**，并使其为 **所有人所用**，而不仅仅是为了解决这个特定的错误。

另外，如果你最终自己找到了解决方案，那么 **回答你自己的问题**，并与大家分享解决方案也是一个好主意。

按照同样的思路，如果你通过提问参与这些社区，你也应该参与回答问题。只要你有能力，并且发现你有知识，回馈一下也是好的。;)

我对这个问题的最后一个想法是，在这些类型的社区中，大多数人都很好，很开放，而且非常愿意帮助和分享知识。但是，就像在任何其他生活领域一样，偶尔你会遇到一些粗鲁、傲慢、甚至具有攻击性的人。

我在这里的建议是，你不要让别人吓到你，即使他们看起来比你有更多的知识。

没有人天生就知道所有的事情，如果你已经做了研究并致力于解决问题，你完全有权问任何你想要的东西。如果其他人傲慢或无礼，这说明他们不好，而不是你。

## Make Sure the Bug is Dead

![xOmnh7_G7](https://www.freecodecamp.org/news/content/images/2022/03/xOmnh7_G7.gif)

唯一比与一个棘手的bug作斗争更令人沮丧的事情是，在修复它之后，却发现这个bug仍然在那里。甚至更糟糕的是，由于这个 "解决方案"，更多的bug被引入到你的代码中。

为了避免这种情况，关键是你要测试你的代码。如果你能用自动化单元测试来做，那就更好了。

理想情况下，你的代码库的每个部分或组件都应该有自己的测试。这些测试应该在每次对代码库做任何修改时运行。这样一来，如果测试写得正确，我们就可以在新的错误出现时注意到它。这当然会使我们更容易找到它的原因并解决它。

如果你没有自动化测试（如果你想创建高质量的软件，你真的应该这样做），至少要手动测试你的代码，重现用户可能与之发生的所有互动，并确保该bug被有效地杀死。

## Write Clean Code

![Y4PKO37NS](https://www.freecodecamp.org/news/content/images/2022/03/Y4PKO37NS.png)

对抗bug的最好方法是首先避免插入bug。对任何程序员来说，写出有保证的无缺陷的代码是不可能的，但有几件事你可以做，以减少缺陷被插入的机会。

一个好的开始是经典的DRY、KISS和SOLID原则。

关于这些主题有整整一本书，但长话短说，这些原则旨在使软件易于开发，易于理解和维护，并尽可能地接近于无缺陷。

### Write DRY code

**DRY** 原则代表着 **不要重复自己**。它基本上意味着我们应该尽可能地避免重复相同的代码。

例如，如果你发现你在代码的不同部分反复执行相同的操作，那么更好的方法是将该逻辑抽象为一个函数，并调用该函数，而不是直接在代码的不同部分执行操作。

这样一来，如果在该操作中发生了一些错误或意外行为，我们就知道只有一段代码要负责，而不是许多分散在代码库中的代码。

### Write simple code when possible

**KISS** 原则代表着 **保持简单的愚蠢**。随着一个软件项目的发展，它不可避免地开始变得越来越复杂。随着新的、计划外的功能被添加，不同的开发人员开始工作，不同的逻辑和执行任务的方式可能会在同一个项目中实现。

这使得代码更难理解、维护和工作。而当代码难以理解时，就很容易做出错误的假设和插入错误的代码。

我们的目标应该是使软件易于阅读和理解，有一个清晰的逻辑，对每个人都是明确的，而不仅仅是对我们。

请记住，将来有人可能要使用你写的代码，所以要让那个人容易理解你在做什么。甚至你在几个月后可能都不记得你想用那个函数做什么。

还要记住，没有软件是永远不变的。软件的本质是通过新的功能来改变和增强，所以你的代码应该在需要时易于修改。

再进一步说，只要你能找到一个更简单的方法来执行同样的任务，你就应该修改你的代码。

也许在加入了一些新的功能后，你一开始想到的设计并不是仍然是最好的选择。编码的另一个很酷的事情是，没有什么是一成不变的，当需要的时候，事情可以很容易地转过来。所以要利用这一点，习惯于不断重构你的代码，寻找更简单的方法。

一些有助于此的实用概念是使用明确的函数和变量名称，将关注点分离成不同的函数和代码模块，当你的任务不可避免地复杂时，写简短的注释来解释你的代码。

### Use the SOLID principles

**SOLID** 是一套主要适用于 [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) 的原则。它们是由[Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin) (他也是 [agile manifesto](https://en.wikipedia.org/wiki/Agile_software_development#The_Agile_Manifesto) 的作者)，[这本书中](https://www.amazon.com/-/es/Robert-Martin/dp/0135974445) 是面向对象设计的。

- **S** 代表 **单一责任**，这意味着一个类应该有一个，而且只有一个工作。
- **O** 代表 **开放封闭原则**，这意味着你应该能够扩展一个类的行为，而不用修改它。
- **L** 代表 **Liskov替代原则**，这意味着派生类必须可以替代其基类。
- **I** 代表 **接口隔离**，这意味着不应该强迫客户实现它不使用的接口，也不应该强迫客户依赖他们不使用的方法。
- **D** 代表 **依赖反转原则**，这意味着实体必须依赖抽象，而不是依赖具体事物。它指出，高层模块不能依赖低层模块，但它们应该依赖抽象物。

如前所述，SOLID更适用于OOP而不是一般的编程。我们不打算在本文中深入探讨OOP，但了解这些原则并将其牢记在心仍然是很好的。

现在让我们来了解一些你可以用来帮助你调试代码的工具。

# Technical Debugging Tools

有许多工具我们可以用来减少在我们的代码中插入bug的机会，或者更有效地打击现有的bug。

在这方面，我们将看看**TypeScript**，流行的（非常有用的）**console.log**，以及**VS Code**和**Chrome**中内置的**调试器**。

这些工具和例子将以JavaScript为中心，但这些原则适用于任何编程语言。

你还应该知道，现在大多数代码编辑器和网络浏览器都有内置的调试器，但我们要审查的是VS代码和Chrome，因为它们是最流行的。

最后，你还应该知道有一些特定的调试工具，你可以用来调试特定类型的应用程序，比如 [React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) 和[Redux](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es) 开发工具，这是你可以安装的浏览器扩展，以帮助你更有效地调试你的代码。

但我们将来会在另一篇关于如何调试React应用程序的文章中回顾这些。;)

## How TypeScript Helps Write Clean Code

我提到TypeScript是第一个工具，因为它与前面关于编写干净代码的部分密切相关。

TypeScript不只是为你提供了一个强大的JavaScript类型系统。它还增加了一个编译器，可以帮助你在运行代码之前识别代码中的错误和误区。它提供了惊人的自动完成功能，并且可以被认为是一个自动文档工具。

为了了解它的好处，让我们重温一下前面的例子，在这个例子中，我们没有为我们的函数调用提供正确的参数。

![TYPESCRIPT1](https://www.freecodecamp.org/news/content/images/2022/03/TYPESCRIPT1.png)

正如你在这里看到的，在运行程序之前，TypeScript立即检测到我们缺少一个参数，并给了我们以下错误:

```js
Expected 3 arguments, but got 2.ts(2554)
index.ts(6, 64): An argument for 'age' was not provided.
```

这些类型的通知是非常有用的，特别是当你在大项目中工作时，你必须与许多API或不同的代码部分互动。

因此，如果你习惯于使用普通的JavaScript，TypeScript一开始可能会觉得是不必要的模板。但从长远来看，它肯定会节省你的时间，防止你在代码中插入愚蠢的错误。

## How to Use Console.log to Debug Code

在控制台中记录你的代码是最基本的调试方式，也是我们作为开发者最先学会使用的方式。

其目的是打印变量、函数、输入和输出的值，以检查我们头脑中的逻辑与我们代码中的真实情况。它还可以帮助我们看到我们正在做哪些错误的假设。

尽管它是一个基本的工具，但我们可以用它做一些很酷的事情。让我给你看看。

如果我们调用 "console.log"，我们将得到任何我们作为参数传递的对象打印在我们的控制台。

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

当同时记录许多事情时，`console.group` 给了我们一种有组织的方式来看待事情。

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

`console.assert` 在测试我们代码中的条件时非常有用。它需要两个参数：第一个参数是条件，第二个参数是条件为假时记录的信息。

```js
const arr1 = [22, 23, 24]

console.assert(arr1.indexOf(20) !== -1, '20 is not in my array')
// Assertion failed: 20 is not in my array
```

`console.warning` 和 `console.error` 在调试我们代码中的错误时很有用。第一个将以黄色背景打印错误，第二个以红色背景打印。

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

随着我们的应用程序的增长和开始变得更加复杂，控制台.记录的做法变得不是那么有效。

为了帮助我们与错误作斗争，我们开发了调试器。它们只不过是能够读取其他程序并逐行查看的程序，沿途检查我们想要的任何信息（例如，变量的值）。

我们要看到的第一个例子是 **Visual Studio调试器**。

为了调试一个Node.js应用程序，我们不需要安装任何额外的东西（假设我们的电脑中已经安装了VS代码和Node），因为VS代码中内置了node调试器。

如果你用其他语言调试，如Python或Java，你可能需要在运行调试器之前安装一个特定的VS扩展。

开始时，我们只需选择我们要调试的文件，然后按下 `bug` 图标。

![vsc1](https://www.freecodecamp.org/news/content/images/2022/03/vsc1.png)

之后，我们将看到以下画面:

![vsc2](https://www.freecodecamp.org/news/content/images/2022/03/vsc2.png)

我们将选择 `Run and debug`，这将只是为我们在编辑器中运行该程序。

考虑到你也可以创建一个`launch.json`文件，这是一个VS代码用来 `知道` 如何运行你的程序的文件。对于这个简单的例子来说，这不是必要的，但要知道这种方法。

点击 `Run and debug` 按钮后，我们的程序将运行，我们将进入以下屏幕:

![vsc3](https://www.freecodecamp.org/news/content/images/2022/03/vsc3.png)

在左上方，我们有程序中所有可用的变量，包括本地和全局的变量。

![vsc4](https://www.freecodecamp.org/news/content/images/2022/03/vsc4.png)

在下面，我们会有一个空间，可以声明我们想观察的特定表达式。表达式可以是任何东西，比如你想关注的特定变量或函数，以评估它们如何随着你的程序而变化。

例如，我添加了我的变量 `arr`，VS代码向我显示了该变量的值:

![vsc5](https://www.freecodecamp.org/news/content/images/2022/03/vsc5.png)

> 在这下面，我们可以看到调用堆栈（如果你不知道那是什么，[这里](https://www.youtube.com/watch?v=8aGhZQkoFbQ)有一个很好的视频来解释），正在加载的脚本，以及我们在代码中设置的断点（我们一会儿就会看到这些是什么）。

![vsc6](https://www.freecodecamp.org/news/content/images/2022/03/vsc6.png)

**断点** 是使调试器有用的一个重要部分。正如它们的名字所示，它们是你可以在你的代码中声明的点，在这些点上调试器将停止运行程序。当程序停止时，你就可以检查我们之前提到的所有信息，因为它是在那个特定时刻。

所以断点允许我们看到程序正在运行的实际信息，而不需要在控制台中记录任何东西。相当酷啊!

你可以通过出现在代码中行号左边的小红点来识别断点（或者通过查看上面提到的部分）。

默认情况下，当你运行调试器时，断点会被插入到你代码的最后一行。要插入新的断点，只需在你希望调试器停止的行号左边点击即可。

![vsc7](https://www.freecodecamp.org/news/content/images/2022/03/vsc7.png)

现在，当你运行调试器时，你会看到在第一个断点的上方有一个小小的左箭头，表示程序的执行已经停止。

![vsc8](https://www.freecodecamp.org/news/content/images/2022/03/vsc8.png)

在屏幕的顶部，我们有 **controls**，这将使我们能够通过程序从断点到断点的步骤。

![vsc9](https://www.freecodecamp.org/news/content/images/2022/03/vsc9.jpg)

- The **Continue** 按钮运行程序，只在用户定义的断点上停止。
- With **Step Over** 按键。如果有一个函数调用，它将执行该函数并返回结果。你不会踏入函数内部的行。你只是直接进入到函数的返回值。
- **Step Into** *会逐行进入函数，直到它返回，然后你会回到函数调用后的下一行。
- **Step Out** 按钮，如果你已经踏入了一个函数，你可以跳过该函数的剩余执行部分，直接进入返回值。
- **Restart** 从头开始重新运行调试器， **Stop** 退出调试器。、

所以，你看，这就是一个内置于你的代码编辑器中的非常强大的调试器。正如你所看到的，有了这个工具，我们可以同时检查很多信息，只需在我们想要的地方设置断点，而且不需要任何console.logs。

## Chrome Debugger

要在Chrome中进行调试，我们首先要在浏览器中打开我们的应用程序。在我的例子中，我创建了一个简单的HTML文件，其中链接了我的JS文件（与前面的例子相同）。

然后我们打开**developer tools**（ctrl+shit+i或右键->inspect），进入 "**sources**"标签。

我们应该看到像这样的东西:

![chrome1](https://www.freecodecamp.org/news/content/images/2022/03/chrome1.png)

在左边，我们可以看到我们的应用程序中可用的文件（在我的例子中，只有一个HTML文件和JS文件）。 在中间，我们可以看到我们选定的文件的代码，在右边，我们有一组信息，与我们在VS Code中的信息非常相似。

要设置断点，我们必须点击我们想要停止的那一行的顶部。在Chrome浏览器中，断点被识别为行号上方的蓝色箭头。

![chrome2](https://www.freecodecamp.org/news/content/images/2022/03/chrome2.png)

然后，如果我们刷新我们的页面，脚本将在第一个断点处停止，我们将被允许使用控件来浏览它，这与VS代码中的工作方式完全相同。

![chrome3](https://www.freecodecamp.org/news/content/images/2022/03/chrome3.png)

正如我们所看到的，Chrome和VS代码调试器的工作原理非常相似，你决定使用哪一个只是一个偏好的问题。

# 结语

调试是我们作为开发者所做工作的一个核心部分。正因为如此，我认为以一种有效的方式来考虑它和做它是一个好主意，而不是在错误发生时才做出反应。

正如我们所看到的，我们有很多事情可以做，无论是从精神上还是从技术上，都可以成为更好的调试。

希望这对你有帮助，下一节课见!

你也可以在 [Twitter](https://twitter.com/CoccaGerman) 和 [LinkedIn](https://www.linkedin.com/in/germancocca/) 关注我。
