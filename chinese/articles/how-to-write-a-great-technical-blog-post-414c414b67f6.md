> -  原文地址：[How to write a great technical blog post](https://www.freecodecamp.org/news/how-to-write-a-great-technical-blog-post-414c414b67f6/)
> -  原文作者：[Sashko Stubailo](https://www.freecodecamp.org/news/author/stubailo/)
> -  译者：Narcissus91
> -  校对者：

![如何撰写一篇优秀的技术博文](https://cdn-media-1.freecodecamp.org/images/1*QVTcnfXyMXivNu62IJ7JSg.jpeg)

#### 五步法从构思到打磨出终稿

我在开源社区工作了将近 5 年，建立并推广了包括 [Meteor](https://github.com/meteor/) 和 [Apollo](https://github.com/apollographql/) 在内的开发者工具。在这段时间里，我发现写博客是传播思想最有效的方式之一。

一篇博客文章不需要像视频或会议演讲那样花很长时间来准备，它很容易上手，而且受众面很广。我个人也从写作中受益颇多：帮助我整理思路以及向他人传授我喜欢的技术的同时，也让我被更多人认识。

自从 2014 年发布[我的第一篇博文](https://blog.meteor.com/collaborative-3d-scene-builder-in-50-lines-of-code-3c8ac717c658)以来，到目前为止，我已经在 Medium 上写了[68 篇文章](https://medium.com/@stubailo/latest)。有些文章的浏览量超过 5 万，我的粉丝数也超过 1000 人。我也为我的朋友和同事编辑过许多文章。在这段时间里，我掌握了一些从提出概念到最终完稿的方法策略。

在本篇文章中，我将介绍我写文章时涉及的五个步骤：

1.  找到一个好的主题并围绕主题写作
2.  确定你的写作目标和读者对象
3.  文章有开头、中间、结尾
4.  获取反馈并迭代文章
5.  添加点睛之笔：包装、发布和推广

让我们直接进入第一个步骤！


### 1\. 找到一个好的主题并围绕主题写作

除非有东西可写，否则你没法开始写文章！在我和那些想要开始写博客的人交谈时发现，他们的主要障碍往往是没东西可写。

最简单的办法是写你知道的东西。如果你花了很多时间学习某件事情，并且你认为你可以在几分钟内将它解释清楚，那么你就可以为你的读者提供很多价值。

另一个办法是在一个你认为缺乏内容的领域写作。比如，现在关于如何申请技术会议的文章很少，那么写这方面内容就可以填补技术社区的空白。

这里有一些具体的文章类型，你可以去看看。例子来自 Apollo 博客上 GraphQL 相关的文章：

1.  实现特定目标的分步操作指南：[“在 React Native 中使用 Flatlist 创建可滚动列表”](https://blog.apollographql.com/loading-data-into-react-natives-flatlist-9646fa9a199b) 或者 [“通过 Apollo 和 Recompose 简化 React 组件”](https://blog.apollographql.com/simplify-your-react-components-with-apollo-and-recompose-8b9e302dea51)。这类文章很适合那些希望读懂就上手，然后迅速离开的读者。
2.  关于特定主题的深入调查：[“在 GraphQL 中使用 nullability”](https://blog.apollographql.com/using-nullability-in-graphql-2254f84c4ed7) 或者 [“GraphQL 查询的剖析”](https://blog.apollographql.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)。这类文章适合那些有时间慢慢深入学习的读者。
3.  就一个常见主题列出多项实用因素：[“调用 GraphQL API 的 4 种简单方法”](https://blog.apollographql.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355) 或者[“静态 GraphQL 查询的 5 个好处”](https://blog.apollographql.com/5-benefits-of-static-graphql-queries-b7fa90b0b69a)。这类有趣又轻量的内容，适合碎片式阅读，读者无需阅读全部内容。

现在，我想消除一些你们常见的担忧。

1.  **这个主题的内容已经有人写过啦。** 不要因此而退缩。即使你的选题已经有人写过，你也可以写出自己的观点，或者基于你自己的情况写出更具体的内容。
2.  **我的想法不够有趣。** 我的朋友和同事最后都没有写，就是因为他们担心他们的结论可能会很无聊或者没有创意。这种感觉是正常的！如果你是某方面的专家，那当然你写的结论会很无聊……那是对你而言。关键是你的读者还并不了解这些结论。

说了这么多，说到底，很难预测哪些话题会让一篇文章成为热门。决定一篇文章成败的往往是要行动起来开始写而不是要精选一个完美的话题。我主要的建议是，多尝试写不同的东西，看看哪些效果还不错。

![49vpFzkVXA9fHTQoMGGDKEnqVDBIY4-eZ8d7](https://cdn-media-1.freecodecamp.org/images/49vpFzkVXA9fHTQoMGGDKEnqVDBIY4-eZ8d7)

灯泡-常用来象征思想 [James Pond 来自 Unsplash](https://unsplash.com/photos/1qkyck-UL3g)

### 2\. 确定你的写作目标和读者对象

明确主题后，现在你需要确定你的读者对象和写作目标。谁会阅读这些文章呢？他们想从中获得什么呢？

你的目标应该很明确具体，这样你才能集中精力专注在一个主要的观点上。就本篇文章来说，目标不可能只是“写博客”，我需要一个更明确具体的目标：

-   **读者对象:** 想开始写博客的人，尤其是想写技术博客却还没写过的人。
-   **写作目标:** 提供一套具体的写作步骤和指导方法，便于他们开始行动起来。

有了这些以后，就要专注于文章的重点了，删掉没有意义的内容，不要增加看起来有关联但很多余的细节。我发现那种阅读时间在 5 至 10 分钟，相对简洁的文章是最好的。

了解读者背景可以帮助你基于读者现有知识水平去定制化写作。而且可以帮助你决定如何去发布和推广你的内容。比如，我就希望在 freeCodeCamp 上发表这篇文章，因为在我的目标读者中，可能已经有很多人读过此类文章了。


### 3\. 文章有开头、中间、结尾

当一篇文章偏离了自己所期望的方向时，就会给人感觉很迷惑。在虚构短篇小说里，情节曲折可能是一件好事。但是，在技术文章里，应该秉持所见即所得。简单舒适的文章结构会更益于读者理解和消化。

#### 开头介绍

文章的第一段或者前两段将决定读者是继续读下去还是放弃阅读。开篇，先介绍一下背景，帮助读者了解你这篇文章的定位。然后，告诉读者他们能从这篇文章获得什么。开头设置悬念，把大揭秘留到最后可能会吊起读者胃口，但是注意，如果运用不恰当，是没法吸引读者坚持读到最后的。

#### 中间细化

你已经告诉读者他们能获得什么了，那就如他们所期去写吧。你可以根据需要自行细化内容，做好结构标注，引导读者阅读。使用大量标题、编号列表和格式，帮助读者了解自己读到哪儿了，同时便于他们跳转到最感兴趣的部分去阅读。

#### 最后结论

文章注意不能虎头蛇尾。如果读者都读到结尾了，说明他们确实被吸引了。可以在结尾快速总结所学内容、对读者的坚持给予鼓励，甚至可以呼吁读者受鼓舞后采取行动。

我在此建议的文章结构并不是最有创意的，当然还有其它的结构方式。但是与读者沟通最直接的方式就是文章结构足够简洁。

![op8670wN9BlN6an-m9qZpZcFbitHwZnDFief](https://cdn-media-1.freecodecamp.org/images/op8670wN9BlN6an-m9qZpZcFbitHwZnDFief)

就像道路标识一样，文章的结构可以引导读者阅读。[Bart Anestin 来自 Unsplash](https://unsplash.com/photos/bXMbMw560C8)


### 4\. 获取反馈并迭代文章

读者读过你的文章，你才会了解他们到底想从你的文章中获得什么。这是对你假设性主题、目标、文章细节和结构的真正考验。如果你想有一个好的结果，就不能跳过这一步。

当你要求反馈时，你可能会觉得自己在强加于人，或者你可能担心反馈会是负面的。但是实际上读者比你预期的更乐于帮助他人。最好在你对外发布你的文章之前，就知道如何能够优化你的文章。在我整理这篇文章时，我就得到了一些超级有价值的反馈，这些反馈使得这篇文章更精炼。

你应该问你的文章审阅者一些什么问题呢？我的主要建议是尽可能地不设限。尽量不要提前解释你的目标。把草稿原封不动地交给审阅者，然后问他们从中得到了什么或者有什么修改建议。当读者在网上看到你的文章时，他们就因为已经被考虑进目标读者中而自然认可你的文章了。

反馈主要是要验证一件事：这篇文章能否实现你在第 2 步中决定的目标？如果不能，那就一直迭代，直到你确信目标能实现为止。

### 5\. 添加点睛之笔：包装、发布和推广

现在你有了想法、目标、结构和反馈，是时候打磨好一切准备发布了。


#### 包装

想一个出色的标题和副标题，并确保文章至少有一张配图。文章分享到 Twitter 或 Facebook 时，读者会看到这些标题和图片的。这也是吸引读者阅读的机会。

同样重要的是，你的文章要让人觉得专业，这样你的内容才能真正出彩。文章中应该避免拼写错误、语法错误或者奇怪的格式。如果你有善于发现细节的朋友，可以请他们先阅读一遍文章，然后你再发布出去。

[freeCodeCamp 上关于文章的发布](https://medium.freecodecamp.org/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e) 也有一些文章，提到了写作风格和样式的技巧。既然你已经在文章中投入了这么多精力，那么额外多付出一些努力去打磨它，让它有更大的影响力也是值得的。

最后，请务必注明你引用了谁的作品或者谁帮助过审阅和编辑你的文章。

#### 发布

你就快大功告成了！选择最利于触达读者的平台来发布文章。通常，Medium 是一个发表技术文章很好的平台，在这儿你的文章很容易被读者发现。

为了效果更好，试试将你的文章发表在有助于分享你内容的平台上-基于这种考虑，我选择了 freeCodeCamp。因为我认为这个建议是考虑了 freeCodeCamp 上的读者人群。如果你也想这样做，[这里有他们给出的提交文章的指南](https://medium.freecodecamp.org/how-to-get-published-in-the-freecodecamp-medium-publication-9b342a22400e)。你感兴趣的发布平台也可能正在寻找相应的文章，所以大胆去联系吧！


#### 推广

即使你真正发布了文章，工作也还没有结束！如果你想要读者看到你写的东西，并从中受益，那就要把文章分享到读者经常阅读的地方。像包括 Facebook 群组、Reddit、Hacker News、LinkedIn 或者其它任何平台。另外，也要在你自己的社交媒体账户分享你的创作，比如 Twitter。你的朋友会很乐意阅读、分享和点赞你的文章。

现在，你已经大功告成了！去喝杯咖啡或者散散步吧-把一篇博客文章从头到尾写完可不是一件小事。阅读来自社区的所有反馈和回复。当你有了另一个想法时，又继续这样来一遍吧！

![lMYImUN-AHrgvCD74GhFaHyXGkIa6L0zP15z](https://cdn-media-1.freecodecamp.org/images/lMYImUN-AHrgvCD74GhFaHyXGkIa6L0zP15z)

精美的包装对美味的甜甜圈来说是锦上添花。[Zach Miles 来自 Unsplash](https://unsplash.com/photos/BE9AifuJfD4)

### 除了实践，没有别的选择

我们刚刚把关于撰写技术博文，从提出想法到发布终稿最重要的五件事梳理了一遍。现在你也已经读完了，试一试这些建议吧，看看会有什么收获。

我再提最后一点建议。在过去三年里，我从博客中学到的重要的东西是我绝对无法预测哪些内容会爆火，哪些内容会平淡无奇。有时，我会花几天时间写一篇文章，打磨每一个细节，但它却没有引起多大反响。相反，[“GraphQL vs. REST”](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)，这是我的有史以来阅读量最多的一篇文章，它却是我在深夜几个小时内写成的。

所以，即使你的第一篇、第二篇或者第三篇文章没有成功，也要继续尝试写新的东西。把你的想法写出来，并不断优化。世界想听听你要说点什么，去告诉他们吧！

_非常感谢[Anvisha Pai](https://www.freecodecamp.org/news/how-to-write-a-great-technical-blog-post-414c414b67f6/undefined)、[Angela Zhang](https://www.freecodecamp.org/news/how-to-write-a-great-technical-blog-post-414c414b67f6/undefined)、[Katie Siegel](https://www.freecodecamp.org/news/how-to-write-a-great-technical-blog-post-414c414b67f6/undefined)和 freeCodeCamp 的编辑人员，帮助审阅这篇文章。_
