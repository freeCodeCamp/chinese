> * 原文地址：[Learn the fundamentals of a good developer mindset in 15 minutes](https://www.freecodecamp.org/news/learn-the-fundamentals-of-a-good-developer-mindset-in-15-minutes-81321ab8a682/)
> * 原文作者：[Huseyin Polat Yuruk](https://www.freecodecamp.org/news/author/huseyin/)
> * 译者：MMMAY521
> * 校对者：

![Learn the fundamentals of a good developer mindset in 15 minutes](https://cdn-media-1.freecodecamp.org/images/0*9aI9Xrj0_SpE9KbK.jpg)
15分钟内搞定优秀开发人员应该有的思维基础
_“Difficult to make even small changes”_“即使是微小改变也非常困难”

_“Breaking functionality of the software by making changes”_“做出可以中断软件功能的改变”

_“Introducing a new bug by fixing another one”_“搞定一个bug，又来新的”

_“Implementing code that is unnecessary”_“执行不必要的代码”

_“Almost impossible to add a new feature because of complicated code”_“代码过于复杂，添加新特性基本无望”

_“The never-shipping product”_“从未坐过船的产品”

_“Throwing code away and rewriting it from scratch”_“把这些代码扔掉重写”

Are all the above statements familiar?上面这些话觉得熟悉吗？

Every minute a developer from any part of the World says (or thinks) any of the above statements and wishes to cry. Why?每时每刻，时间各地的程序员都会像上面这么说或者这么想。为什么？

These are common issues talked about by developers very often. These stories are experienced in every development team.这些都是程序员经常谈到的共同话题，也是每个开发团队都会经历的阶段。

There are many small factors that are slowly and gradually harming the developers’ projects. They are not immediately destructive. Most of them only do long-term damage. Something you won’t see the damage for a year or more. So when somebody proposes them, often they sound harmless. Even when you start implementing them, they may seem fine. But as time goes on — and particularly as more and more of these stacks up — the complexity becomes more apparent and grows until you’re another victim of that ever-so-common horror story.很多微不足道的因素慢慢地、逐渐地威胁到开发人员的项目。他们并没有在一开始就张牙舞爪，造成毁灭性的后果，绝大多数都是长期潜伏以后造成危害，可能一年甚至几年你都不会看到危害。所以有人提到这些因素时，大部分情况下听起来都是无害的。甚至在你开始执行的时候，他们看起来也是人畜无害的。但随着时间推移，尤其是随着越来越多的因素的积累，项目的复杂性与日俱增，终有一天你会成为下一个人人皆知的“事故”的主角。

To avoid being one of the victims, you should embrace the fundamental laws of software. You should develop a mindset that every developer should have. This mindset will help you make better decisions in your daily programming journey. You can keep your software as simple as possible. You can protect it from being an unmanageable and complex system.为了避免事故发生，你应该深入学习软件的基础运行规则。你应该形成一种开发人员的思维基础，这可以帮助你在日常编程中做出更好的决策。你应该使你的软件尽可能保持简洁，避免其变得超出控制、无比复杂。

Here are the key points that every developer must master.以下是每个程序员必备的思维关键点

### 1\. Conceiving The Purpose of Software认真构思开发软件的目的

First of all, you should understand the purpose of the software. There is, in fact, a single purpose of all software:  ****To help people****.首先，你应该理解开发软件是为了干嘛。事实上，所有的软件都只有一个功能：为了帮助人们如何如何。

****Remember: the purpose of the software is not to show off how intelligent you are. ****— [Max Kanat-Alexander, Code Simplicity][1]
永远牢记：开发软件的目的不是为了展示你有多聪明。
Developers who cannot conceive the purpose of the software will write bad software. What is bad software? A complex system that doesn’t help people that much.如果开发人员不认真构思软件开发的目的，他们只能写出低级软件。何为低级软件？就是无法给人们提供很多帮助的复杂的系统。

When you are making decisions about software, you should guide yourself by always keeping this in mind:  _How we can help?_  You can even prioritize feature requests this way.当你开发软件需要决策时，你应该把这条准则牢牢记住：我们怎样才能提供帮助？你也可以通过这个准则来区分特性要求的优先级。

### 2\. The Goals of Software Design软件设计的目标

****Every programmer is a designer.****每个程序员都是设计师。

When software is hard to create or modify, developers spend most of their time focusing on making things “just work,” and less time focusing on helping users. The design of software aims to make developers job as easy as possible so they can focus on what matters. You will create software that will help users and your software will continue to help them for a long time.如果创造或者完善软件很难，开发人员会把更多的时间放在如何让软件发挥功能，而较少关注如何帮助用户。软件设计旨在让开发人员的工作尽可能简单，这样他们才可以关注真正重要的事情。你将开发出帮助用户的软件，并且你的软件会长时间地给用户提供帮助。

However, if you design a bad system, your software’s lifetime will be short.但是，如果你设计出糟糕的系统，软件的寿命将会极短。

This brings us to the most important goal of the software design:这就软件设计目标的重中之重：

> _To design systems that can be created and maintained as easily as possible by their developers, so that they can be — and continue to be — as helpful as possible._设计出来的软件系统应该能让开发人员快速完成开发和维护，这样软件系统才能而且能持续为用户提供帮助。

> _—  [Max Kanat-Alexander, Code Simplicity][2]_

So there are two key points here: Your design should be easy for you and helpful for others.两个关键点：设计需简洁，同时也要能给用户提供帮助。

### 3\. (Mis)understanding正确/错误理解

Developers who don’t fully understand their work tend to develop complex systems. It can become a vicious cycle: misunderstanding leads to complexity, which leads to further misunderstanding, and so on.如果开发人员不能充分理解他们的工作，他们大概率会开发出复杂的系统，然后就陷入恶性循环：错误理解导致软件系统复杂，复杂又导致更多的误解，循环往复。

Actually, one of the best ways to improve your design skills is to be sure that you fully understand the systems and tools you are working with.事实上，提升设计技能最好的方式之一就是确保完全了解软件系统，了解开发过程中用到的工具。

****Understanding is the key difference between a bad developer and a good developer. ****— [Max Kanat-Alexander, Code Simplicity][3]
理解能力是区分优秀程序员和低级程序员的核心。
Bad developers don’t understand what they are doing, and good developers do. It really is that simple.
低级程序员不理解他们正在做的工作，但是优秀程序员理解。事实就这么简单
### 4\. Simplicity简洁

> _Simplicity is the ultimate sophistication. — Leonardo da Vinci_简洁是最高级的优雅。

Programming is the act of reducing complexity to simplicity. A “bad developer” is just somebody who fails to reduce complexity. A “good developer” is doing everything in their power to make the code as simple as possible for other programmers.编程把复杂过程简单化。低级的开发人员没能做到简单化，而优秀的开发人员则竭尽全力让其他程序员看到尽可能简洁的代码。

A good developer creates things that are easy to understand so that it’s really easy to shake out all the bugs.优秀开发人员做出的软件易于理解，所以改bug的时候也容易。

Now, developers are generally intelligent people and none of them likes to be treated like they are idiots. Ironically, this leads them sometimes to create things that are a bit complicated. They basically think like this:现在情况是，开发人员大都比较聪明，他们不想让别人觉得自己是傻子。比较反讽的是，这种想法让他们有时会开发出不够简洁的软件。他们会这样想：

“_Oh, other developers will understand everything I’ve done here. I should write some clever code that is hard to understand so that they can think that I am very smart._”“别的开发人员都懂我做出的东西。那我应该写一些难一点、不好理解的代码，这样他们才能觉得我非常聪明。”

A mistake caused by a wrong mindset-not necessarily by a lack of programming skills. Most of the programming failures happen because of that mentality.这就是思维方式有问题造成的错误---不一定是编程技能不够。编程过程中大多数失败都是因为这种想法。

Showing off that you are smart doesn’t help them.炫耀你的聪明才智并不能帮助他人。

Developers who are new to your code don’t know anything about it; ****they have to learn.****对你的代码感到新奇的开发人员对代码一无所知，他们得学。

So, you should ask this question: “_Do I want people to understand this and be happy, or do I want them to be confused and frustrated?_”
所以，你应该问自己这个问题：“我是想让大家理解，让他们高兴，还是想看他们疑惑不解？”
The truth is that if other developers who read your code can understand it easily it means that you are doing good.
事实是，如果你的代码对其他开发人员来说易于理解，这说明你做的非常好。
> _Complexity has nothing to do with intelligence, simplicity does. — Larry Bossidy-智慧与复杂无关，与简洁有关。

The question is: “How simple do you have to be?”问题是：“得做到多简洁才算简洁？”

Here is your answer:  ****_Stupid, dumb simple._****答案是：令人发指的简洁。

### 5\. Complexity复杂

> _Controlling complexity is the essence of computer programming. — Brian Kernighan_控制复杂程度是计算机编程的本质。

The source of many software failures is complexity. You start out with a simple project that can be completed in one month. Then you add complexity, and the task will take up to three months. Then you start to add features that fulfill some other purpose. Things get very complex because you expand your software purpose for no reason. The tasks will take six months.很多软件失败的根源就是太复杂。起初，你要做的这个项目很简单，一个月就能完成。然后你提升了复杂度，项目周期增长到三个月。再然后你增加了一些其他功能。事情变得非常复杂，因为你无缘无故地填充软件可实现的目的。这些追加任务需要六个月来完成。

But that is not the end.这还没有结束。

Then you take each piece of the feature and make it even more complex, and the task will take nine months. Then you start to introduce many new bugs because of the complexity in your code. Naturally, you start fixing them all without thinking how these fixes will affect other parts. At the end, when even small changes become hard. When bug fixes start to introduce new bugs, you will come to one of the most popular programming horror stories:  _Rewriting code from scratch_.然后你就每个现有的功能，把他们变得更加复杂。这又需要九个月。然后，因为代码复杂，出现了很多bug。那你就改bug，但改的时候你没有考虑到这些改动会对其他部分造成什么样子的影响。最后，哪怕是微小的改变也变得举步维艰。搞定一个bug，却又出现新bug，然后，你就成为了那些人们津津乐道的编程事故中的一员：重写代码。

So, how did you become a victim of this horror story? Nah, who cares. It’s better to ask: How could you avoid being a victim?那么，你是怎样一步一步成为事故中的受害者的？没人关心这个。你应该这样问：如何我才能不成为事故的受害者？

Well, it is simple. First, you will exactly know your software purpose and its definition. Second, you will be as simple as possible in every piece of code you write. Third, when a new feature or change request comes to the discussion table, you will evaluate them based on your software purpose and question them.很简单。首先，你应该确切地知道你开发的软件要实现什么样子的功能以及软件的定义。其次，你写的每一部分代码都应该尽可能简洁。最后，讨论软件新增功能或变动需求时，你应该在现有的软件目的的基础上对新要求进行评估，并且提出问题。

As a developer, your first behavior should be resistance to (unnecessary) change. This will prevent you from adding unnecessary codes into your software. When you are convinced that this change is a need, then you can implement it.作为一名开发人员，对于不必须的改变，你的首要反应应该是拒绝，这样你才能比米阿尼添加不必要的代码。但如果你被说服，确实需要作出改变，这时候你可以作出调整。

There are many factors that will increase complexity but those are the most popular ones. Aside from everything, there is only one rule that you should follow:
确实有很多因素会提升复杂度，但这些因素确实是需要的。你只需要遵循一条原则：
****Your main purpose is to control complexity, not to create it.****你的首要目标是把控复杂，而不是创造复杂。

### 6\. Maintenance维护

Maintenance is one of the most important things in software development. Unfortunately, developers usually ignore how important it is. Quick coding and fast shipping look more important than code maintenance. This is the point where they make a mistake — ignorance of future code maintenance.。
软件开发过程中，维护十分重要。不幸的是，开发人员通常都忽略了维护的重要程度。快速编程和快速运输看起来都比代码维护重要。而这也是他们犯错误的地方：忽略了日后的代码维护。
There will always be some implementation of changes. Not only you have to implement them, but you also have to maintain them over time. As a developer, thinking about future maintenance of changes is one of your main responsibilities.软件上总要做出一些改变。不仅需要你实现这些改变，还需要你长时间地维护。作为一名开发人员，思考日后的改变维护工作也是工作职责之一。

> _All changes require maintenance._所有改变都需要维护。

Simplicity and complexity are the two main factors that affect code maintenance. The ease of maintenance of any piece of software is proportional to the simplicity of its individual pieces. The effort of maintenance is proportional to the complexity of the software.
简洁和复杂是影响代码维护的两个主要因素。软件维护工作量跟每部分代码的简洁复杂程度是成比例的。
The one rule that you should follow about maintenance is:
关于代码维护你应该遵循分原则是：
****It is more important to reduce the effort of maintenance than it is to reduce the effort of implementation.****
减少维护的工作量比减轻执行任务更重要。
—  [Max Kanat-Alexander, Code Simplicity][4]

### 7\. Consistency一致性

Consistency is a big part of simplicity. If you do something one way in one place, do it that way in every place. For example, if you name a variable thisIsVariable, then all of your variables should be named that way (otherVariable, anAnotherVariable, etc. not other\_variable).
一致性保持简洁的重要部分。如果你在某个地方这样做一件事情，那你在每个地方都要这么做。举个例子，如果你命名一个变量“thisIsVariable”，那你所有的变量都要这样命名（otherVariable，anAnotherVariable等等这些都不可以）。
Code that isn’t consistent becomes harder to understand. Don’t keep forcing developers to relearn the way your system works every time they look at a new piece of it.
代码不一致，就会给理解增加难度。不要逼着开发人员每到一个部分就得重新学习你的软件系统工作的方式。
> _In any team sport, the best teams have consistency and chemistry. — Roger Staubach_
任何团队运动中，最好的团队总能保持一致，保持热情。
### 8\. Prioritizing评测优先级

How do you make decisions about your software?
开发软件做决策时，你怎么做的？
When you face many possible directions, how do you decide which option is the best? What to focus on and which features you should implement?
当你面对很多个有可能的方向，你怎么判断哪个方向最好？需要关注的是什么？你应该执行哪些功能？
To answer those questions, there are three important factors that will help you make a better decision. This equation is explained very well in  [Code Simplicity][5]book:
为了回答这些问题，以下三个重要因数会帮助你更好地决策。这三个因数构成的恒等式在代码简洁性这本书里面有很好的解释：
-   ****The desirability of a change (D):****  How much do you want to do the change?做出改变的意愿度（D）：你有多想做出改变？
-   ****The value of a change (V):**** How much value does this change bring or how much does this help your users?改变的价值（V）：这个改变会带来多高的价值或者改变对你的用户有多少帮助？
-   ****The effort required to perform the change (E):****  How much work will the change require?做出改变需投入的精力（E）：改变需要付出多少？

The equation is simple:  ****D=V/E****恒等式很简单：D=V/E

The desirability of any change is  ****directly proportional to the value of the change and inversely proportional to the effort involved****  in making the change.做出任何改变的意愿程度跟改变所能带来的价值成正相关，跟改变所需要的精力成负相关。

When you prioritize your work, you should follow this rule:
当你在区分工作的优先级是，你应该遵循这个原则：
The changes that will bring you a lot of value and require little effort are better than those that will bring little value and require a lot of effort.
那些能带来很多价值却不需要投入太多精力的改变，比那些只带来很少价值却需要投入很多精力的改变优质得多。
### 9\. Solving Problems

The first step is understanding. Know exactly what is being asked. Most hard problems are hard because you don’t understand them. Write down your problem and try to explain it to someone else.

> _If you can’t explain something in simple terms, you don’t understand it. — Richard Feynman_

The second step is planning. Don’t take action. Sleep on it. Give your brain some time to analyze the problem and process the information but don’t spend too much time on planning.

****Think before acting.****

The third step is dividing. Don’t try to solve one big problem. When you look at the problem as a whole, it can scare you. Divide it into smaller tasks and solve each sub-problem one by one. Once you solve each sub-problem, you connect the dots.

### 10\. Good enough is fine

> _“Perfect is the enemy of good.” — Voltaire_

Whether creating a new project or adding a feature to existing system developers tend to plan everything out in detail from the beginning. They want the first version to be perfect. They don’t focus on the problem they will solve and how their software will help people. They start by thinking every small detail they could think. Then assumptions and predictions come along followed by “What if” sentences. They have to predict the future because they were now so captivated by the imagination of the project in their mind and their project has to be as perfect as they imagined it.

Actually, they are not aware of what’s waiting for them and how much it will cost them by chasing perfection.

Let me tell you what will happen:

-   You will be writing code that isn’t needed
-   You will increase complexity by adding unnecessary codes
-   You will be too generic
-   You will be missing deadlines
-   You will be dealing with many bugs caused by the complexity

Do you want this to happen? I guess no.

What you should instead?

****Start small, improve it, then extend.****

The incremental design should be your guide. Here is how you would use it to design a calculator:

1.  Plan a system that does only addition and nothing else.
2.  Implement it.
3.  Improve the now-existing system’s design so you can add other operations also.
4.  Plan subtraction and repeat step 2 and 3.
5.  Plan multiplication and repeat step 2 and 3.
6.  Plan division and repeat step 2 and 3.

### 11\. Predictions

> ___“A prediction is simply a forecast that something will happen in the future. It could be factual and based on some kind of objective data or it could be based on an assumption.”___

When faced with the fact that their code will change in the future, some developers attempt to solve the problem by designing a solution so generic that (they believe) it will accommodate to every possible future situation.

****Being too generic involves a lot of code that isn’t needed.****

You can’t predict the future, so no matter how generic your solution is, it will not be generic enough to satisfy the actual future requirements you will have. Most probably, this time will never come and the code you wrote to solve future problems will increase complexity, make it hard to change the pieces of code and eventually it will become a burden that may destroy your software.

Don’t predict to future. Be only as generic as you know you need to be right now.

### 12\. Assumptions

What is the assumption?

> ___“An__ **___assumption___** __is something that you accept as true or suppose to be true, although you have no conclusive proof.”___

One of the great killers of a software project is assumptions. Let’s see how an assumption can kill a software project.

A developer knows that they have to develop a system to do X. Then they think that the system will require them to do Y in the future, and they implement Y as well. They write thousands of lines of code to design Y.

In the future, the developer realizes that the current requirements are completely different than what they thought. But now, the software has unnecessary codes that make it hard to throw away because everything is intertwined. It takes months to refactor the code and now they think to rewrite the whole software from scratch which will cause them to lose months.

To avoid being a victim like this developer, follow this simple rule:

****Code should be designed based on what you know now, not on what you think will happen in the future. ****— [Max Kanat-Alexander, Code Simplicity][6]

### 13\. Stop Reinventing

If, for example, you invent your own garbage collector when a perfectly good one exists, you’re going to be spending a lot of time working on the garbage collector, when you could just be working on your software.

The only times it’s okay to reinvent the wheel is when any of the following are true:

-   You need something that doesn’t exist yet
-   All of the existing “wheels” are bad technologies or incapable of handling your needs
-   The existing “wheels” aren’t being properly maintained

Simple rule:

****Don’t reinvent the wheel.****

### 14\. Resistance

As a developer, your first reaction to changing requests should be “NO’’.

Always resist adding more code, more features until you are convinced that they are required and there is a need to implement them. Because unnecessary changes will increase defects in your software.

How can you know that there is a need for them?

Go back and remember your software purpose. Then remember the simple equation in prioritizing section.

```
From: rsc@plan9.bell-labs.com (Russ Cox)Subject: Re: [9fans] design clairvoyance & the 9 way
Date: Thu, 8 May 2003 04:05:31 GMT
> What does tomorrow's unix look like?
I'm confident that tomorrow's Unix will look like today's Unix, only cruftier.
Russ
```

### 15\. Automation

Don’t spend your time on repetitive tasks. Set them up and forget about them. They can work while you are sleeping. When you realize that you are doing something again and again, just remember this rule:

****If you can automate it, automate it.****

### 16\. Code measurement

> ___Measuring programming progress by lines of code is like measuring aircraft building progress by weight.___  
> ___— Bill Gates___

I see developers who measure their software quality based on code lines. They think that more code lines mean that they are doing a great job. The software contains hundreds of thousands of lines of code, which means the software they work on is so big.

The question that pops up here is: Is it really that big, or there is something wrong there?

The answer is that most probably there is something wrong with their design. Most of the simple solutions don’t require a lot of code. You can achieve simplicity with a little bunch of code and solve the problem.

I’m not saying that the least code is always better. While you want to avoid having less code, you can easily fall in a trap that will cause you to write clever code that is hard to understand for others. You should find a balance.

The optimum code is a small bunch of code that is easy to understand, easy to read.

### 17\. Productivity

How do you measure your productivity?

By writing more lines of code or by throwing hundreds of lines of code away?!

Your main goal should be keeping your code base as small as possible. The question is not “How can I write more code?” rather it should be “How can I remove more code?”

> _“One of my most productive days was throwing away 1000 lines of code.” — Ken Thompson_

### 18\. Testing

When should you add logging and error handling to your project?

You should add logging in a very early stage. This will help you to find the problem easily and save your time.

I see many mistakes when it comes to testing code. Let me give you an example. There were two conditions, a simple if-else block. The developer gave input to the software which will enter inside the if block. They tested it and committed code to source control. Done! What about else block? When the software was shipped to production, that caused a lot of errors. When you test your code, you must execute all new lines at least once and you should start to test parts before the whole.

When you have a bug, first you should reproduce it. You shouldn’t guess the source of the bug and apply fixes based on your assumption. Most probably, you will be wrong. You should see it with your own eyes before applying the fix.

You should be reliable. When other developers in your team see that you committed new code to source control, everyone should know that your code is tested, and works.

****Untested code is the code that doesn’t work.****

### 19\. (Under)Estimation

Developers’ estimation sucks.

Usually, they underestimate things rather than overestimate them. They underestimate the time and effort required to develop a small amount of code or a feature. In the end, this underestimation leads to missing deadlines.

The solution: Break the big thing into smaller things. The smaller it is, the easier it is to estimate. You’re probably still going to get it wrong, but you’ll be a lot less wrong than if you estimated a big project.

Remember:

****Everything takes longer than you think.****

### 20\. Running Away From Rewriting

I believe that when you embrace the fundamental principles of software development mentioned in that article, you won’t come to this point. However, if, somehow you make these mistakes and find yourself thinking about rewriting your code, here is the main thing that you should know:

****Rewriting code is often a developer delusion, not the solution in most cases.****

Why is it a delusion?

Well, because  _it’s harder to read code than to write it_. This is why it is so hard to reuse code. This is why our subconscious mind whispers to us “_Throw it away and start over_” when we read another developer’s code.

There are many cases that you should consider to rewrite your code from scratch and you can read them  [here][7]. But, here is simple advice for you:

****Refactoring should be the first option.****

### 21\. Documentation and Commenting

One of the common misconceptions about commenting is that developers add comments that say  _what code is doing_. This is wrong. That should be obvious from reading the code. If it’s not obvious, it means that it is not readable and it should be made simpler.

When you can’t make the code simpler then you should add the comment to explain this complexity.

The real purpose of comments is to explain  _“WHY”_  you did something, not  _“WHAT”_ thecode is doing. If you don’t explain this, other programmers may be confused and when they go to change your code they might remove important parts of it.

****Write a comment to explain “WHY”, not to explain “WHAT”.****

Another thing is documenting. It is important to have documentation to explain your software’s architecture and every module and components. This is required to see the high-level picture of your software. When a new developer joined your team, it would be easier to understand the software as a whole. When developers don’t have any clue about other parts of the software, they could easily make a mistake in their own part which can affect other parts also.

### 22\. Picking Technologies (Tools, Libraries, etc.)

First things first, always remember this rule:

****Don’t depend on external technologies or reduce your dependency on them as much as possible.****

Why is that? Because they are another common source of complexity. They can kill your active development and make everything even harder. When you are dependent so much on external technologies, you are not free. What if there is a major bug in that technology? You have to wait for the developers to fix that bug and if this technology is in the center of your project basically you are stuck, you can’t move forward. So that’s why it is so important to pick the right technologies for your project.

There are a few factors you should consider before you start using some technology:

-   Is there active development behind it?
-   Will it continue to be maintained?
-   How easy is it to switch away from?
-   What does the community say about it?

If you can find the right answer these questions, you can reduce the risk of picking the wrong technology.

### 23\. Self-Development

Keep learning. Try out different programming languages and tools, read books on software development. They will give you another perspective. Every day small improvements will make a real difference in your knowledge and skills.

Be open-minded. Don’t be obsessive about one technology. Use the required technology to solve a specific problem. Don’t be in the unnecessary discussion like Microsoft vs Linux:)

****Know that every specific problem has its own specific solution.****

### 24\. Don’t be a hero

A lot of times it’s better to be a quitter than a hero.

For example, let’s say you think a task can be done in two hours. But four hours into it, you’re still only a quarter of the way done. The natural instinct is to think, “But I can’t give up now, I’ve already spent four hours on this!” So you go into hero mode. You’re determined to make it work (and slightly embarrassed that it isn’t already working). You grab your cape and shut yourself off from the world.

****Don’t be obsessive. Know when to quit. Don’t hesitate to ask for help.****

### 25\. Don’t Ask Questions… Ask For Help

When you have something to implement and you are not sure about the solutions, don’t ask others how to so it …at least not immediately. Instead, try anything and everything you can think of. This is more important the less comfortable you are with a concept or language.

When you can’t think of anything on your own, search! Find answers and try them out. Modify those answers, see if you can understand why they work, adapt them to your code.

…But always seek advice.

When you have tried everything, and preferably after you have a working solution, now is the best time to seek advice. Look to peers and senior developers to review your code.

I tried to explain the fundamentals of a good developer mindset in this article. I used some part from  [Code Simplicity][8]  book which has a big impact on my thinking process as a developer. When I read this book, there was a lot of moment that I reacted “ohh I did this mistake, I did that too.” I mentioned some important parts of the book and combine them with my experience.

I strongly recommend you to read  [Code Simplicity][9]  from Max Kanat-Alexander.

Thanks for reading! I hope this guide helped you out!

[1]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[2]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[3]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[4]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[5]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[6]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[7]: https://medium.freecodecamp.org/lessons-learned-in-my-10-years-as-a-developer-3d33c8702828
[8]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
[9]: https://www.amazon.com/Code-Simplicity-Fundamentals-Max-Kanat-Alexander-ebook/dp/B007NZU848
