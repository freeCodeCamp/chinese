> * 原文地址：[What exactly can you do with Python? Here are Python's 3 main applications.](https://www.freecodecamp.org/news/what-can-you-do-with-python-the-3-main-applications-518db9a68a78/)
> * 原文作者：YK Sugi
> * 译者：FENGJIAJUN
> * 校对者：

如果你想学习 Python - 或者如果你最近开始学习 Python - 你也许会这么问你自己：

> **“我到底可以使用 Python 做什么？”**

这是一个棘手的问题去回答，因为这里有许多 Python 的程序。

但是随着时间的迁移，我发现 Python 有三个主要的流行应用程序：

-	Web开发
-	数据科学 - 包括机器学习，数据分析和数据可视化
-	脚本编写

让我们一次讨论它们。

### **Web开发**

基于 Python 的 web 框架（比如 **Django** 和 **Flask** ）最近变得非常流行。

这些web框架帮助你使用 Python 创建服务器端代码（后台代码），即运行在你服务器上的代码，相对于运行在用户的设备、浏览器上（前端代码）。如果你不熟悉后端代码和前端代码的区别，请参考下面的脚注。

#### **但是等一下，为什么我需要一个 web 框架呢？**

那是因为 web 框架是的构建共同后端逻辑非常方便，包括映射不同的 URLS 到 Python 代码块，处理数据库和产生用户在浏览器中看到的 HTML 文件。

#### **我应该用哪一个 web 框架？**

Django 和 Flask 是两个最受欢迎的 Python web 框架。如果你刚刚入门Python,我建议你使用他们其一。

#### **Django 和 Flask 之间的区别是什么？**

这里有一篇 Gareth Dwyer 编写的关于这个问题的[出色文章][1]，所以我在这里引用它：

**_<开始引用>_**

主要对比：

-	Flask提供了简单性，灵活性和细粒度的控制。It is unopinionated （它让你可以决定你想要实现的东西）。
-	Django提供全方位的体验：你可以开箱即用的获得管理面板、数据库接口、[ORM \[对象关系映射\]][2]以及目录结构。

你可能应该选择：

-   Flask，如果你专注于体验和学习机会，或者如果你想要去控制更多使用的组件（比如你想要使用那些数据库和你想要如何与它们交互）。
-   Django,如果你专注于最终产品。特别是如果你正在开发一个简单易用的应用比如新闻网站、电子商店、博客，并且你想要有一种简单，显而易见的方法去搭建这个应用。

**_<结束引用>_**

换一种说法，如果你是一个初学者，Flask 可能是更好的选择。因为它需要处理的组件更少。同时，如果你想要更多的定制化，Flask 是更好的选择。

在另一方面，如果你正在寻找简单易用的方式构建程序，Django 将会让你更快完成。

现在如果你想学习 Django，我推荐你一本书《Django for Beginners》。你可以从这里找到它。[here][3]

你也可以找到免费的章节案例在[这本书里][4]。

好的，让我们开始下一个的话题。

### **Data Science — including machine learning, data analysis, and data visualization**

#### **First of all, let’s review what machine learning  _is_.**

I think the best way to explain what machine learning is would be to give you a simple example.

Let’s say you want to develop a program that automatically detects what’s in a picture.

So, given this picture below (Picture 1), you want your program to recognize that it’s a dog.

![](https://cdn-media-1.freecodecamp.org/images/0*Mbj3L2cl0zzT2A0L)

Picture 1

Given this other one below (Picture 2), you want your program to recognize that it’s a table.

![](https://cdn-media-1.freecodecamp.org/images/0*gxTn_CbMyCcQ1NFV)

Picture 2

You might say, well, I can just write some code to do that. For example, maybe if there are a lot of light brown pixels in the picture, then we can say that it’s a dog.

Or maybe, you can figure out how to detect edges in a picture. Then, you might say, if there are many straight edges, then it’s a table.

However, this kind of approach gets tricky pretty quickly. What if there’s a white dog in the picture with no brown hair? What if the picture shows only the round parts of the table?

**This is where machine learning comes in.**

Machine learning typically implements an algorithm that automatically detects a pattern in the given input.

You can give, say, 1,000 pictures of a dog and 1,000 pictures of a table to a machine learning algorithm. Then, it will learn the difference between a dog and a table. When you give it a new picture of either a dog or a table, it will be able to recognize which one it is.

I think this is somewhat similar to how a baby learns new things. How does a baby learn that one thing looks like a dog and another a table? Probably from a bunch of examples.

You probably don’t explicitly tell a baby, “If something is furry and has light brown hair, then it’s probably a dog.”

You would probably just say, “That’s a dog. This is also a dog. And this one is a table. That one is also a table.”

Machine learning algorithms work much the same way.

You can apply the same idea to:

-   recommendation systems (think YouTube, Amazon, and Netflix)
-   face recognition
-   voice recognition

among other applications.

Popular machine learning algorithms you might have heard about include:

-   Neural networks
-   Deep learning
-   Support vector machines
-   Random forest

You can use any of the above algorithms to solve the picture-labeling problem I explained earlier.

#### **Python for machine learning**

There are popular machine learning libraries and frameworks for Python.

Two of the most popular ones are  **scikit-learn**  and  **TensorFlow**.

-   scikit-learn comes with some of the more popular machine learning algorithms built-in. I mentioned some of them above.
-   TensorFlow is more of a low-level library that allows you to build custom machine learning algorithms.

If you’re just getting started with a machine learning project, I would recommend that you first start with scikit-learn. If you start running into efficiency issues, then I would start looking into TensorFlow.

#### **How should I learn machine learning?**

To learn machine learning fundamentals, I would recommend either  [Stanford’s][5]  or  [Caltech’s][6]  machine learning course.

Please note that you need basic knowledge of calculus and linear algebra to understand some of the materials in those courses.

Then, I would practice what you’ve learned from one of those courses with  [Kaggle][7]. It’s a website where people compete to build the best machine learning algorithm for a given problem. They have nice tutorials for beginners, too.

### **What about data analysis and data visualization?**

To help you understand what these might look like, let me give you a simple example here.

Let’s say you’re working for a company that sells some products online.

Then, as a data analyst, you might draw a bar graph like this.

![](https://cdn-media-1.freecodecamp.org/images/1*62T-rtheKPehgZdPTEpKww.png)

Bar Chart 1 — generated with Python

From this graph, we can tell that men bought over 400 units of this product and women bought about 350 units of this product this particular Sunday.

As a data analyst, you might come up with a few possible explanations for this difference.

One obvious possible explanation is that this product is more popular with men than with women. Another possible explanation might be that the sample size is too small and this difference was caused just by chance. And yet another possible explanation might be that men tend to buy this product more only on Sunday for some reason.

To understand which of these explanations is correct, you might draw another graph like this one.

![](https://cdn-media-1.freecodecamp.org/images/1*VgNfqK5XxNfHxx6S4VFCjQ.png)

Line Chart 1 — generated with Python

Instead of showing the data for Sunday only, we’re looking at the data for a full week. As you can see, from this graph, we can see that this difference is pretty consistent over different days.

From this little analysis, you might conclude that the most convincing explanation for this difference is that this product is simply more popular with men than with women.

On the other hand, what if you see a graph like this one instead?

![](https://cdn-media-1.freecodecamp.org/images/1*dMpu_fd-THNXRJhHIq2O3g.png)

Line Chart 2 — also generated with Python

Then, what explains the difference on Sunday?

You might say, perhaps men tend to buy more of this product only on Sunday for some reason. Or, perhaps it was just a coincidence that men bought more of it on Sunday.

So, this is a simplified example of what data analysis might look like in the real world.

The data analysis work I did when I was working at Google and Microsoft was very similar to this example — only more complex. I actually used Python at Google for this kind of analysis, while I used JavaScript at Microsoft.

I used SQL at both of those companies to pull data from our databases. Then, I would use either Python and Matplotlib (at Google) or JavaScript and D3.js (at Microsoft) to visualize and analyze this data.

#### **Data analysis / visualization with Python**

One of the most popular libraries for data visualization is  [Matplotlib][8].

It’s a good library to get started with because:

-   It’s easy to get started with
-   Some other libraries such as  [seaborn][9]  is based on it. So, learning Matplotlib will help you learn these other libraries later on.

**How should I learn data analysis / visualization with Python?**

You should first learn the fundamentals of data analysis and visualization. When I looked for good resources for this online, I couldn’t find any. So, I ended up making a YouTube video on this topic:

I also ended up making a  [full course on this topic on Pluralsight][10], which you can take for free by signing up to their 10-day free trial.

I’d recommend both of them.

After learning the fundamentals of data analysis and visualization, learning fundamentals of statistics from websites like Coursera and Khan Academy will be helpful, as well.

### **Scripting**

#### **What is scripting?**

Scripting usually refers to writing small programs that are designed to automate simple tasks.

So, let me give you an example from my personal experience here.

I used to work at a small startup in Japan where we had an email support system. It was a system for us to respond to questions customers sent us via email.

When I was working there, I had the task of counting the numbers of emails containing certain keywords so we could analyze the emails we received.

We could have done it manually, but instead, I wrote a simple program / simple script to automate this task.

Actually, we used Ruby for this back then, but Python is also a good language for this kind of task. Python is suited for this type of task mainly because it has relatively simple syntax and is easy to write. It’s also quick to write something small with it and test it.

### **What about embedded applications?**

I’m not an expert on embedded applications, but I know that Python works with Rasberry Pi. It seems like a popular application among hardware hobbyists.

### **What about gaming?**

You could use the library called PyGame to develop games, but it’s not the most popular gaming engine out there. You could use it to build a hobby project, but I personally wouldn’t choose it if you’re serious about game development.

Rather, I would recommend getting started with Unity with C#, which is one of the most popular gaming engines. It allows you to build a game for many platforms, including Mac, Windows, iOS, and Android.

### **What about desktop applications?**

You could make one with Python using Tkinter, but it doesn’t seem like the most popular choice either.

Instead, it seems like languages like  [Java, C#, and C++][11]  are more popular for this.

Recently, some companies have started using JavaScript to create Desktop applications, too.

[For example, Slack’s desktop app was built with something called Electron][12]. It allows you to build desktop applications with JavaScript.

Personally, if I was building a desktop application, I would go with a JavaScript option. It allows you to reuse some of the code from a web version if you have it.

However, I’m not an expert on desktop applications either, so please let me know in a comment if you disagree or agree with me on this.

### **Python 3 or Python 2?**

I would recommend Python 3 since it’s more modern and it’s a more popular option at this point.

### **Footnote: A note about back-end code vs front-end code (just in case you are not familiar with the terms):**

Let’s say you want to make something like Instagram.

Then, you’d need to create front-end code for each type of device you want to support.

You might use, for example:

-   Swift for iOS
-   Java for Android
-   JavaScript for web browsers

Each set of code will run on each type of device / browser. This will be the set of code that determines what the layout of the app will be like, what the buttons should look like when you click them, etc.

However, you will still need the ability to store users’ info and photos. You will want to store them on your server and not just on your users’ devices so each user’s followers can view his/her photos.

This is where the backend code / server-side code comes in. You’ll need to write some backend code to do things like:

-   Keep track of who’s following who
-   Compress photos so they don’t take up so much storage space
-   Recommend photos and new accounts to each user in the _discovery_  feature

So, this is the difference between backend code and front-end code.

By the way, Python is not the only good choice for writing backend / server-side code. There are many other popular choices, including Node.js, which is based on JavaScript.

### Liked this article? Then, you might also like my YouTube channel.

I have a programming education YouTube channel called  [CS Dojo][13]  with 440,000+ subscribers, where I produce more content like this article.

For example, you might like these videos:

#### Anyway, thanks a lot for reading my article!

[1]: https://www.codementor.io/garethdwyer/flask-vs-django-why-flask-might-be-better-4xs7mdf8v
[2]: https://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it
[3]: http://csdojo.io/dj
[4]: https://djangoforbeginners.com/
[5]: https://www.coursera.org/learn/machine-learning
[6]: https://work.caltech.edu/telecourse.html
[7]: https://www.kaggle.com/
[8]: https://matplotlib.org/
[9]: https://seaborn.pydata.org/
[10]: https://goo.gl/fZ5oVX
[11]: https://www.quora.com/What-is-the-best-programming-language-to-develop-a-desktop-application-It-should-be-cross-platform-free-easy-to-learn-and-have-a-good-community
[12]: https://slack.engineering/building-hybrid-applications-with-electron-dc67686de5fb
[13]: https://www.youtube.com/csdojo
