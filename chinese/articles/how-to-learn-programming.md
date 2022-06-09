> -  原文地址：[How to Learn Programming – The Guide I Wish I Had When I Started Learning to Code](https://www.freecodecamp.org/news/how-to-learn-programming/)
> -  原文作者：[Jacob Stopak](https://www.freecodecamp.org/news/author/initialcommit/)
> -  译者：Papaya Huang
> -  校对者：

![How to Learn Programming – The Guide I Wish I Had When I Started Learning to Code](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/The-Programming-Guide-I-Wish-I-Had-When-I-Started-1.png)

仅仅只是想到学习编程这个概念就让人畏惧，**代码**的定义非常神秘，暗示着一种与机器交流的技术形式，并不是让人去理解。

一种大多数人采用的学习编程的方式事挑一个流行的编程语言，然后一头扎进去。具体的表现形式可以是参加一种线上的编程课程，教学项目，或者随机购买一个编程话题相关的书籍。

极少有潜在开发者会从一个路线图开始，路线图相当于编码世界的一张鸟瞰图，梳理了一些相关的编程概念、语言以及几乎100%的开发者每天都会使用的工具。

在这篇文章中，我将提出一种路线图。我梳理出来了专业开发者用来编写代码、合作和创建专业项目的14个步骤（每一个步骤探讨了一个关键的概念、语言或者工具）。

我精心挑选出来的这14个步骤是基于我长达20年的个人学习代码的经历。

我花了这么长时间才使自己成为一个舒适的开发者，一部分原因是我曾经只专注于具体的话题，而忽略了整个编码世界这个视角。

本文的每一个步骤所讨论的“编码关键”是你开始编程之旅中**起码知道它的存在**的概念。

我想在正式开始之前最后强调一点，你肯定不会因为这篇文章成为编程专家，这篇文章的本意也并非如此。这篇文章的目的是为了让你了解这些话题存在，以及希望你了解这些概念是如何运作的，给你继续前行打下基础。

## 给初级开发者的14步路线图

1.  [让自己了解计算机结构和数据基础](#1-familiarize-yourself-with-computer-architecture-and-data-basics)
2.  [学习编程语言如何运作](#2-learn-how-programming-languages-work)
3.  [理解互联网是如何运作](#3-understand-how-the-internet-works)
4.  [练习一些命令行基础](#4-practice-some-command-line-basics)
5.  [Build Up Your Text Editor Skills with Vim](#5-build-up-your-text-editor-skills-with-vim)
6.  [Take-up Some HTML](#6-take-up-some-html)
7.  [Tackle Some CSS](#7-tackle-some-css)
8.  [Start Programming with JavaScript](#8-start-programming-with-javascript)
9.  [Continue Programming with Python](#9-continue-programming-with-python)
10.  [Further Your Knowledge with Java](#10-further-your-knowledge-with-java)
11.  [Track Your Code using Git](#11-track-your-code-using-git)
12.  [Store Data Using Databases and SQL](#12-store-data-using-databases-and-sql)
13.  [Read About Web Frameworks and MVC](#13-read-about-web-frameworks-and-mvc)
14.  [Play with Package Managers](#14-play-with-package-managers)

话不多说，让我们开始吧！

<h2 id="1-familiarize-yourself-with-computer-architecture-and-data-basics"> 1)让自己了解计算机结构和数据基础</h2>

现代编程语言之所有美妙的原因之一是它们帮助我们免去幕后繁琐的硬件细节，来创建精美的应用。（大部分情况是这样）

这被称为**抽象**——使用高级工具（这里指编程语言）的能力，可以简化和缩小我们所需理解和技能的范围。

但这并不意味着了解这个你代码运行的机器一无是处。至少了解一些内容可以帮助你在工作场所和同事畅谈CPU的高使用率和内存使用。

以下是计算机基础的基本知识：

你的计算机最重要的部分位于**微芯片**（也称为**集成电路**）。

微芯片依靠一个叫做**晶体管**的电子元件来发挥作用。晶体管是微小的电子开关，在给定时间内要么处于关（0）或者开（1）的状态。单个微芯片包含了上百万甚至术十亿的晶体管嵌入其中。

大部分现代计算机有一个叫做**中央处理器（CPU）**的微芯片。你可以把这个当作计算机的大脑。它处理计算机执行的大部分数字运算和逻辑任务。

每一个CPU有一个**指令集**，是CPU可以理解的二进制（0和1）指令的合集。幸运的是，作为软件开发人员，我们并不需要担心这些，这就是抽象的力量。

如果说CPU是大脑的逻辑中心的话，这样就有必要拥有短期或者长期的存储信息的存储器。

计算机拥有**随机存取存储器（RAM）**作为“工作存储器“(或者叫做短期存储器)来存储程序运行时使用的信息。

RAM是由一组**内存地址**组成，可用于存储数据位。在像C语言这样的旧计算机语言中，程序员确实可以使用**指针**来直接处理内存地址，但是这在现代语言中很少见了。

最后，我们将介绍一个你肯定熟悉的组件——硬盘驱动。在我们对大脑的类比中，硬盘相当于长期记忆。硬盘是一个存储数据的内部和外部设备，即便关机了，这些数据仍然存在。

在我们正式介绍程序语言细节之前，让我们花点时间了解一下数据，**数据**这个词到底代表了什么？

从更高的层次来看，我们会想到文本文件、图像、视频、电子邮件、文件和文件夹。这些都是我们每天在计算机上创建和存储的高级数据结构。

但是在底层，计算机芯片（CPU或者RAM芯片）并不知道什么是“图片”或者“视频”。

从芯片的角度来看，这些数据结构被作为一长串0和1存储了起来，这些0和1被称为**位**。

位通常以一组八位的形式存储，称为一个 **字节**。 一个字节就是一个简单的八位序列，例如 `00000001`、 `01100110` 或 `00001111`。这样表示信息的方法被称为 **二进制表示法**。

<h2 id="2-learn-how-programming-languages-work"> 2)学习编程语言如何运作</h2>

在上一章节，我们提到了大部分计算机以来于CPU，CPU可以理解一串特定的0和1。

因此，理论上我们可以编写一串由0和1组成的代码告诉CPU要做什么。以二进制形式编写的指令被称为**机器码**。

这听上去相当可怕，但是我没有体验过，因为使用高级编程语言如：JavaScript、Python和Java。

**高级编程语言**提供一组人类可以读取的关键字、声明和语法规则，使得人们可以更加容易地学习、改bug和使用。

编程语言提供一座桥梁连接人类大脑和计算机大脑（CPU）。

最终，我们编写的代码会转换为CPU理解的二进制指令（机器码）。

根据你选择的语言，我们可以认为你的代码要么被**编译**了，要么被**解释**为可以被CPU执行的机器码。大多数编程语言都包含一个**编译器**或者**解释器**来执行这个翻译步骤。

举几个例子——JavaScript和Python是解释型语言，然而Java是编译型语言。一个语言是否为编译型或者解释型语言（或者两者结合）会对开发者的编写便利性、处理错误的方法和程序的性能造成影响。这里我们不会细讲。

<h2 id="3-understand-how-the-internet-works"> 3)理解互联网是如何运作</h2>

不论你渴望开发什么类型的程序，你都会遇到计算机之间相互交流的场景，这正好发生在互联网。

互联网仅仅是一个连接了全球计算机的集合。也就是说，一个全球性的网络。互联网内部的每一台计算机都遵循特定的规则，使得可以彼此间交流，对于计算机来说，“交流”就是交换数据。

如我们在之前章节介绍的那样，所有数据类型（网页、图像、视频、电子邮件等）都可以被0和1来表示。

因此，你可以把互联网当作一大组计算机集合，这些计算机之间相互传输0和1，并且保留这些数据信息。互联网就是一个数字对话媒介。

如果互联网是一个巨大的对话场所，那么让我们来定义一下对话的参与者。

首先，让我们引入一个类比：大部分人类的对话需要至少两个参与者。一个发起对话，一个回应对话，假设这两个人都在场并且有空。

而从互联网的角度来看，发起对话的计算机被称为**客户端**，回应或者应答对话的计算机被称为**服务器**。

假设你打开了浏览器，并且搜索了 "www.google.com"。 在这个场景内，你的浏览器就是客户端，广义上说，你可以把你正在使用的计算机当作客户端。

更抽象来说，**你**就是客户端，因为你开启了对话。是你在搜索框输入了 "www.google.com"，并点击了回车键，你的电脑才向某台谷歌的计算器发出对话请求。

谷歌的计算机就被称为服务器。它通过发送请求数据，并且在你的浏览器显示谷歌的网页来回应。然后嗒哒！你眼前出现谷歌的网页。所有互联网数据传输都使用这种客户端/服务器关系。

<h2 id="4-practice-some-command-line-basic">练习命令行基础</h2>

乍一看，**命令行**可能让人生畏。命令行往往出现在电影的画面里，在黑色的屏幕上滚动着让人无法理解的文字、数字和符号，人们往往把它和邪恶的黑客或者天才技术伙伴联系到一起。

但真相是不需要多么天才的头脑就能够理解并且使用命令行。实际上，命令行可以执行我们习惯用鼠标勾选点击的一些日常任务。

主要的区别在于，命令行主要通过键盘来输入，一旦你掌握了它，可以大大加快输入的速度。

你可以使用命令行来浏览文件夹、列出文件夹内容、创建新的文件夹、复制和移动文件、删除文件、执行程序等等。输入命令行的窗口被称为**终端**。

让我们来通过一个基本的导航命令行教程来了解如何使用命令行。

当你打开终端的时候，你首先会冒出一个问题 "_我在哪儿"?_ 我们可以使用 `pwd`命令行 (相当于 “打印正在工作的目录”)来解决这个问题。 这个命令行会打印出你当前所在文件夹位于整个文件系统的位置。

动起手来：

### 如何使用命令行

如果你是Mac用户，打开终端应用，它本质上是一个Unix命令行终端。

如果你使用非GUI（图形用户界面）的操作系统，例如Linux或Unix，则在默认情况下，你启动计算机就是命令行。如果你的Linux或者Unix系统有GUI，你需要手动打开终端。

在提示符下，输入`pwd`并按下回车，命令行会打印出你当前所处的文件夹的路径。

默认情况下，打开命令行时激活的文件夹是登陆用户的主目录。如果你想从起来的位置开始，可以自定义。

方便起见，可以使用波浪号`~`字符来引用主目录。我们将在接下来的几个示例中使用它。

现在我们知道我们在哪儿了，就可以使用 `ls`命令来列出当前目录的内容。 `ls` 命令代表了“清单”。

Type `ls` and press <ENTER>. The contents (files and subfolders) that reside in the current directory are printed to the screen.

Rerun the previous command like this `ls -al` and press <ENTER>. Now we will get more details about the directory contents, including file sizes, modification dates, and file permissions.

The hyphen in the previous command allows us to set certain flags that modify the behavior of the command. In this case we added the -a flag which will list all directory contents (including hidden files) as well as the -l flag which displays the extra file details.

Next, we can create a new folder using the `mkdir` command, which stands for "Make Directory". Below we create a new folder called "testdir".

Type `mkdir testdir` and press <ENTER>. Then type `ls` and press <ENTER>. You should see your new directory in the list.

To create multiple nested directories at once, use the `-p` flag to create a whole chain of directories like this: `mkdir -p directory1/directory2/directory3`

The Command Line isn’t that useful if we can only stay in one location, so let’s learn how to browse through different directories in the file system. We can do this via the `cd` command, which stands for "Change Directory".

First, type `cd testdir` and press <ENTER>. Then type `pwd` and press <ENTER>. Note the output now shows that we are inside the "testdir" directory specified in the cd command. We browsed into it!

Type `cd ..` and press <ENTER>. The `..` tells the Command Line to browse backwards to the parent directory.

Then type `pwd` and press <ENTER>. Note the output now shows that you are back in the original directory. We browsed backwards!

Next we’ll learn how to create a new empty file in the current directory.

Type `touch newfile1.txt` and press <ENTER>. You can use the `ls` command to see that the new file was created in the current directory.

Now we’ll copy that file from one folder to another using the cp command.

Type `cp newfile1.txt testdir` and press <ENTER>. Now use the `ls` and `ls testdir` commands to see that the new file still exists in the current directory and was copied to the "testdir" directory.

We can also move files instead of copying using the `mv` command.

Type `touch newfile2.txt` and press <ENTER> to create a new file.  
Next, type `mv newfile2.txt testdir` and press <ENTER> to move the file into the "testdir" folder.

Use the `ls` and `ls testdir` commands to confirm that the file has been moved into the "testdir" folder (it should no longer appear in the original location you created it, since it was _moved_ not copied).

The `mv` command can also be used to rename files.

To do that, type `touch newfile3.txt` and press <ENTER> to create a new file. Then type `mv newfile3.txt cheese.txt` and press <ENTER> to update the file’s name. Use `ls` to confirm that the filed was renamed.

Finally, we can delete files and folders using the `rm` command.

Type `rm cheese.txt` and press <ENTER> to remove the file. Use `ls` to confirm the file was removed.

Type `rm -rf testdir` and press <ENTER> to remove the "testdir" directory and its contents. Use `ls` to confirm the directory was removed.

Note that we need to use the `-rf` flags when removing directories. This forces the removal of the folder and all of its contents.

## 5) Build Up Your Text Editor Skills with Vim

At this point, we’ve covered the basics of the Command Line and seen a few examples of how we can work with files without a mouse.

Although we now know how to create, copy, move, rename, and delete files from the Command Line, we haven’t seen how we edit the content of text files in the terminal.

Working with text files in the terminal is important because computer code is nothing more than text saved in an organized set of files.

Sure we could use a fancy text editor like Microsoft Word (or more likely specialized code editors like Sublime or Atom) to write and edit our code, but this is not required. The terminal is often the most convenient place to write and edit code since we usually already have it open to run commands!

There are several excellent text editors created specifically for this purpose, and I recommend [learning the basics of one called Vim](https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/).

Vim is one of the oldest text editors around and it is a time-tested gem. Vim stands for "**_VI_** i**_M_**proved" since it is the successor to a tool called **_Vi_**.

As mentioned, Vim is a text editor that was built to run directly in the terminal, so we don’t need to open a separate window to work in or use a mouse at all. Vim has a set of commands and modes that allow us to conveniently create and edit text content using only the keyboard.

Vim [does have bit of a learning curve](https://www.freecodecamp.org/news/how-not-to-be-afraid-of-vim-anymore-ec0b7264b0ae/), but with a little bit of practice, the skills you learn will pay dividends throughout your coding career.

Vim is installed by default on many operating systems. To check if it’s installed on your computer, open the Command Line and type `vim -v`.

If Vim opens in your terminal and shows the version, you’re good to go! If not, you’ll need to install it on your system. (Note that you can quit Vim by typing `:!q` and pressing <ENTER>). For more information on installing Vim, see https://vim.org.

In my opinion, the quickest and easiest way to learn how to use Vim is to use their built-in tutorial, the **VimTutor**. To run it, ensure that Vim is installed on your system, open the Command Line, type `vimtutor`, and press <ENTER>.

It is such a good tutorial that there is no reason for me to waste time trying to explain it here. So go do the VimTutor, like now! See you in the next section.

If you still have energy left after you've completed the VimTutor, check out [these 7 Vim commands that will dramatically improve your productivity](https://initialcommit.com/blog/7-versatile-vim-commands) as you get started with Vim.

## 6) Take-up Some HTML

You can think of HTML – short for **H**yper**T**ext **M**arkup **L**anguage – as the bones of a web page. It determines the structure of the page by specifying the elements that should be displayed and the order that they should be displayed in.

Every web page that you’ve ever visited in your browser has some HTML associated with it. When you visit a web page, the web server hosting the web page sends over some HTML to your browser. Your browser then reads it and displays it for you.

Most web pages contain a fairly standard set of content, including a title, text content, links to images, navigation links, headers and footers, and more. All of this information is stored as HTML that defines the structure of the page.

One thing to keep in mind is that HTML is not technically a programming language, although it is often referred to as "HTML code".

As we’ll see later, other programming languages enable us to write code that **does stuff**, such as running a set of instructions in sequence. HTML doesn’t **do** anything. We don’t run or execute HTML. HTML just sits there in a file and waits to be sent to a web browser which will display it to the end-user.

In fact, HTML is basically just data. It is data that defines what a web page should look like, nothing more.

So how do you write HTML? HTML uses a standard set of **tags** (basically just labels) to identify the available elements that make up a web page. Each tag is defined using angle brackets.

For example, the **title** tag is defined as `<title>My Page Title</title>` and the **paragraph** tag is defined as `<p>A bunch of random text content.</p>`.

Each HTML element is made up of a starting tag and an ending tag. The starting tag is just the tag label in between angle brackets, like this:

`<tagname>`

This opens the new HTML tag. The ending tag is essentially the same, but it uses a forward slash after the first angle bracket, to mark it as an ending tag:

`</tagname>`

Any text between the two tags is the actual content that the page will display.

Let’s cover a couple of the most common tags in use. The first is the `<html>` tag. This defines the start of an HTML page. A corresponding `</html>` tag (note the forward slash) defines the end of the HTML page. Any content between these tags will be a part of the page.

The second is the `<head>` tag. This defines additional information that the browser will use to understand the page. Most of the content in this tag is not displayed to the user. A corresponding `</head>` tag defines the end of the HEAD section.

Previously, we saw the `<title>` tag. It defines the title of the web page, which the browser will display in the browser tab. This tag needs to be placed inside the `<head>...</head>` section.

Next is the `<body>` tag. All content inside this tag makes up the main content of the web page. Putting these four tags together looks something like this:

```html
<html>
    
    <head>
        <title>My Page Title</title>
    </head>
        
    <body>
        <p>A bunch of random text content.</p>
    </body>

</html>
```

The simple HTML snippet above represents a simple web page with a title and a single paragraph as body content.

This example brings up a point we didn’t mention in the last section. HTML tags can be nested inside each other. This just means that HTML tags can be placed inside other HTML tags.

HTML provides many other tags to provide a rich set of content to web users. We won't cover them in detail here, but below is a short list for reference:

-   `<p>`: A paragraph of text starting on a new line.
-   `<h1>`: A page heading usually used for page titles.
-   `<h2>`: A section heading usually used for section titles.
-   `<hx>`: Where _x_ is a number between 3 and 6, for smaller headings.
-   `<img>`: An image.
-   `<a>`: A link.
-   `<form>`: A form containing fields or inputs for a user to fill out and submit.
-   `<input>`: An input field for users to enter information, usually within a form.
-   `<div>`: A content division, used to group together several other elements for spacing purposes.
-   `<span>`: Another grouping element, but used to wrap text phrases within another element, usually to apply specific formatting to only a specific part of the text content.

## 7) Tackle Some CSS

A web page without CSS – or **C**ascading **S**tyle **S**heets – is like a cake without frosting. A frosting-less cake serves its purpose, but it doesn’t look appetizing!

CSS allows us to associate style properties such as background color, font size, width, height, and more with our HTML elements.

Each style property tells the browser to render the desired effect on the screen. Like HTML, CSS is not technically a programming language. It doesn’t let us perform actions, it simply lets us add styles to bare bones HTML.

Let’s see how to associate CSS styles with our HTML elements. There are three pieces to this puzzle:

**The CSS selector:** Used to identify the HTML element or elements we want the style to apply to.

**The CSS property name:** The name of the specific style property that we want to add to the matched HTML elements.

**The CSS property value:** The value of the style property we want to apply.

Here is an example of how these pieces come together to set the color and font size of a paragraph:

```css
p {
  color: red;
  font-size: 12px;
}
```

Let’s start at the beginning, before the curly braces. This is where the CSS selector goes. In this case, it is the letter **p** which indicates the `<p>` (paragraph) HTML tag. This means that the styles inside the curly braces will apply to all `<p>` tags on the web page.

Let’s move on to what goes inside the curly braces – the styles we want to apply to the targeted elements.

Here we find pairs of CSS properties and values, separated by a colon. The properties (in this case "color" and "font-size") are on the left. The values of these properties (in this case "red" "12px") are on the right. A semicolon ends each property/value pair.

You can probably see how this works. The snippets of CSS code above tell the browser to use red, 12px size letters for all the text placed inside `<p>` tags.

So how does an HTML page know to include these CSS styles? Enter the `<link>` HTML tag. Usually, CSS styles are created in separate files (**.css** files) from the HTML. This means we need some way to import them into our HTML files so the browser knows that the styles exist.

The `<link>` element exists for this purpose. We include `<link>` elements in the `<head>` section of HTML files which allow us to specify the external CSS files to import:

```css
<head>

    <title>My Page Title</title>

    <link rel="stylesheet" type="text/css" href="/home/style.css">

</head>
```

In this example, we are importing the CSS styles specified by the **href** attribute, in this case the file _/home/style.css_.

In the next 3 sections, we'll (finally) dive into some more technical programming languages!

We'll go over a general overview of JavaScript, Python, and Java, as well as walk through some of the essential coding concepts common to the 3 languages. We will compare and contrast the language features and example code so you can hopefully get a well-rounded understanding of the basics of all three.

## 8) Start Programming with JavaScript

Let’s start by answering the following question: if we can use HTML to build the structure of a web page and CSS to make it look pretty, why do we need JavaScript?

The answer is that we technically don’t. If we are happy with a static site that sits there and looks pretty, we are good to go with just HTML and CSS.

The keyword here is "static". If, however, we want to add dynamic features to our web pages, such as changing content and more complex user interactions, we need to use JavaScript.

### What is JavaScript?

So what exactly is JavaScript? JavaScript is a programming language that was created specifically for websites and the Internet. As we mentioned in section 2, most programming languages are either compiled or interpreted, and programs are typically run in a standalone manner.

JavaScript is somewhat unique in this respect in that it was designed to be executed directly inside web browsers. It allows us to write code representing sets of actions that will be executed on our web pages to make our sites much more dynamic.

You can either write JavaScript code in text files named with a `.js` extension or inside `<script>` tags directly in the HTML.

For many years, JavaScript code was primarily relegated to running inside web browsers. But the **Node.js** project changed this paradigm by creating a standalone JavaScript environment that could run anywhere.

Instead of being trapped in a browser (that is, client-side), Node.js can be installed locally on any computer to allow the development and execution of JavaScript code. You can also install Node on web servers which allows you to use JavaScript as backend code for applications instead of simply as web browser frontend code.

Now that we've covered some background, let's dive into a few basics of the JavaScript language.

### Variables and Assignment in JavaScript

Variables possibly represent the most fundamental concept in programming. A variable is simply a name or placeholder that is used to reference a particular value.

The word **variable** implies that the stored value can change throughout the execution of the program.

You can use variables to store numbers, strings of text characters, lists, and other data structures that we will talk more about in a minute.

All programming languages use variables, but the syntax varies between different languages.

Variables are useful since we can reference their values throughout our code. This enables us to check their values as needed and perform different actions depending on how the variable’s value changes.

In JavaScript, we declare variables using the `let` keyword, like this: `let x;`.

This declares x as a variable that we can use in our code. Note that we added a semicolon at the end of the line. In JavaScript (and many other languages) semicolons are used to specify the end of each code statement.

Now that we have created the variable _x_, we can assign a value to it using the equals sign, also called the **assignment operator**: `x = 10;`

Here we assigned the number 10 to the variable named _x_. Now any time we use _x_ in our code, the value 10 will be substituted in.

Both variable declaration and assignment can be done in one line as follows:

```javascript
let x = 10;
```

### Data Types in JavaScript

In the last section, we stored an integer (whole number) value in the variable named _x_. You can also store decimal numbers, or **floating-point numbers** as they are known. For example, we could write: `let x = 6.6;`.

The different types of values we can store in variables are called **data types**. So far we have only seen numeric data types (integers and floating-point numbers), but we are just scratching the surface. We can store text data in variables as well.

In coding terminology, a piece of text is called a **string**. We can store a string value in our variable x by surrounding it in either single or double quotes:

```javascript
let x = 'Hello there!';

let y = "Hey bud!";
```

The next data type we’ll discuss is the **boolean**. A boolean can only hold one of two values, `true` or `false` – and they must be all lowercase. In JavaScript, true and false are two keywords used specifically as values for boolean variables:

```javascript
let x = true;

let y = false;
```

Note that the values `true` and `false` don’t appear within quotes the way strings do. If we surround them with quotes, the values would be strings, not booleans.

We often use booleans to control the flow of programs in conditional (if/else) statements which we’ll learn about next.

### Program Flow Control Statements in JavaScript

Now that we have an understanding of variables and the basic JavaScript data types, let’s take a look at some things we can do with them.

Variables aren't that useful without being able to tell our code to do something with them. We can make our variables do things by using **statements**.

Statements are special keywords that allow us to perform some action in our code, often based on the value of a variable we have defined. Statements let us define the logical flow of our programs, as well as perform many useful actions that will dictate how our programs work.

#### If / Else Statement

The first statement we’ll discuss is the `if` statement. The `if` statement allows us to perform some action only when a desired condition is true. Here is how it works:

```javascript
let x = 10;

if ( x > 5 ) {
    console.log('X is GREATER than 5!');
} else {
    console.log('X is NOT GREATER than 5!');
}
```

We defined a variable called _x_ and set its value to 10. Then comes our `if` statement. After the keyword `if`, we have a set of parentheses containing the condition to evaluate, in this case, `x > 5`. We just defined _x_ to equal 10, so we know that this condition is true in this example.

Since the condition in the parentheses is true, the code between the curly braces will be executed, and we will see the string "X is GREATER than 5!" printed to the screen. (We didn't discuss the meaning of `console.log()`, so for now just know that it prints the value in the parentheses to the screen).

In the same example, we also included an `else` statement. This allows us to execute specific code in the event that the condition in the condition is `false`.

#### While Loops

The next type of statement we’ll discuss is the **while loop**. Loops enable us to repeat a block of code as many times as we desire, without copying and pasting the code over and over again.

For example, let’s assume we need to print a sentence to the screen 5 times. We could do it like this:

```javascript
console.log('This is a very important message!');
console.log('This is a very important message!');
console.log('This is a very important message!');
console.log('This is a very important message!');
console.log('This is a very important message!');
```

This works fine for only 5 messages, but what about 100, or 1000? We need a better way to repeat pieces of code multiple times, and loops allow us to do this. In coding terminology, repeating a piece of code multiple times is called **iteration.**

This following `while` loop will continue running the block of code inside it as long as the specified condition remains true:

```javascript
let x = 1;

while ( x <= 100 ) {
    
    console.log('This is a very important message!');
    
    x = x + 1;
    
}
```

In this example, we initialize _x_ to the value of 1. Then we write a `while` loop. Similar to the `if` statement, we add a condition in parentheses. In this case the condition is `x <= 100`. This condition will be `true` as long as _x_ is less than or equal to 100.

Next we specify the block of code to execute in the curly braces. First, we print out our message to the console. Then we increment _x_ by 1.

At this point the loop attempts to re-evaluate the condition to see if it’s still `true`. Variable _x_ now has a value of 2 since it was incremented in the first loop run. The condition is still `true` since 2 is less than 100.

The code in the loop repeats until _x_ gets incremented to the value of 101. At this point, _x_ is greater than 100 so the condition is now `false`, and the code in the loop stops executing.

### The HTML <script> Tag

Now that we’ve introduced JavaScript, let’s discuss how to add JavaScript code files into an HTML page. We can do this using an HTML tag that we haven’t discussed yet – the `<script>` tag.

This is similar to the `<link>` element that we used to add CSS files to our HTML, except that the `<script>` element is specifically for JavaScript.

Let’s say we saved one of the previous JavaScript examples we discussed in a file called `customscript.js` in the same folder as our HTML file. We can add this JavaScript file to our HTML by adding the following HTML tag into the `<head>...</head>` section of our HTML:

```html
<script type="text/javascript" src="customscript.js"></script>
```

This will load in the JavaScript code from the file, which will execute when the web page is displayed in the browser.

Once you get comfortable with your JavaScript skills, you can [try building some of these fun beginner-friendly projects](https://www.freecodecamp.org/news/javascript-projects-for-beginners/) to practice.

## 9) Continue Programming with Python

Now that you've learned some basic JavaScript, it will be useful to jump into another programming language – Python.

Many programming languages provide a similar set of functionality, including variables, arithmetic operators, if/else statements, loops, and functions.

It's helpful to see how different programming languages implement similar features. The concepts are usually very similar, but the syntax (the way the code is written) varies from language to language.

### What is Python?

First we’ll cover a little bit of background information on Python. Like JavaScript, Python is a high- level programming language that prioritizes ease of development over the speed of execution.

In my opinion, Python is one of the best languages for beginners to learn. The syntax is clean and intuitive and it is a very popular language in the open-source and business spheres.

Earlier we talked about compiled languages versus interpreted languages. Python is an interpreted language. Each time we want to run a Python program, the **Python interpreter** actively processes your code and executes it line by line on your machine.

This is different than compiled languages, in which we would first use a compiler to process the code into a more optimized form (an executable), and then execute it later.

Unlike JavaScript, Python was not built to be run directly inside web browsers. Python was created to be a convenient _scripting language_ – a language that can be used to write code for arbitrary tasks that usually execute on a user’s local computer.

Python code can be executed on any computer that has the Python interpreter installed on it. It is still a commonly used scripting language but is also used extensively for data science and server-side applications.

### Variables and Assignment in Python

Like JavaScript, Python allows us to define variables. In Python we can simply use the equals sign to create and assign variables as needed:

```python
x = 10
y = "cheese"
```

There are two differences between the syntax for defining variables in Python and JavaScript. In Python, we don’t need the `let` keyword and we also don’t need a semi-colon at the end of each line.

Python uses a set of syntax rules based off of whitespace and indentation. This removes the need for line terminating characters like the semi-colon, and block scoping using curly braces.

### Data Types in Python

Python also has a set of data types that we can assign to our variables. These include integers, floating-point numbers (decimals), strings, lists, and dictionaries.

Integers, floating-point numbers, and strings are essentially the same as their JavaScript counterparts, so we won’t repeat that information here.

In Python, booleans are very similar to those in JavaScript, except that the keywords True and False must be capitalized:

```python
x = True

y = False
```

### Program Flow Control Statements

Like in JavaScript, Python has as similar set of flow control statements, but with slightly different syntax.

#### If / Else Statement

This is the Python equivalent of the `if/else` example we saw in the JavaScript section:

```python
x = 10

if ( x > 5 ):
    print('X is GREATER than 5!')
    
else:
    print('X is NOT GREATER than 5!')
```

We defined a variable called _x_ and set its value to 10, followed by our `if` statement. Since the condition in the parentheses evaluates to `True`, the code indented after the `if` statement will be executed, and we will see the string 'X is GREATER than 5!' printed to the screen.

In Python, we use the `print()` function for printing information to the screen.

Also note the `else` statement above, which will print an alternative string to the screen if _x_ if the condition is `False`.

There are two main differences between the Python code above and the JavaScript code we saw previously. Python uses a colon instead of curly braces to indicate the beginning of the `if` statement block.

In addition, the indentation of the `print()` function actually matters in Python. In JavaScript, the indentation or white space between statements doesn’t matter since JavaScript identifies code blocks using curly braces and identifies the end of a statement using a semi-colon. But in this Python example, there are no semi-colons and no curly braces!

That is because Python actually uses the white space and newline characters to identify the end of statements and code blocks.

The colon tells the Python interpreter that the `if` block is starting. The code that makes up the `if` block must be indented (1 tab = 4 spaces is the convention) for the Python interpreter to know that it is a part of the `if` block. The next unindented line will signal the end of the `if` block.

#### While Loops

Next we’ll discuss loops in Python. The `while` loop in Python is essentially the same as we saw in JavaScript, but with the Python syntax:

```python
x = 1

while ( x <= 100 ):
    print('This is a very important message!')
    x = x + 1

print('This is not in the loop!')
```

The differences between this `while` loop and the JavaScript version are that:

-   We removed the `let` when defining our variables.
-   We removed line-ending semicolons.
-   We replaced the curly braces with a colon.
-   We made sure that the code in the loop is indented with a tab.

We printed an additional message outside of the loop to show that unindented lines of code are not a part of the loop and won't be repeated.

For beginner Pythonistas, I recommend taking a peek at [the Zen of Python](https://initialcommit.com/blog/zen-of-python), which is a list of 20 rules-of-thumb for writing Pythonic code.

And when you get comfortable with the basics, [try building some of these fun beginner-friendly Python projects](https://www.freecodecamp.org/news/python-projects-for-beginners/).

## 10) Further Your Knowledge with Java

Now that we’ve worked with a couple of higher-level programming languages, let’s take it one step lower with Java.

Unlike JavaScript and Python which execute source code in real time using an interpreter, Java is a compiled language. This means a compiler is used (instead of an interpreter) to convert Java source code into a form the computer can understand.

Most compilers generate one or more executable files made up of machine code that are ready to run on the specific operating system and hardware platform they were compiled for.

But Java is somewhat special in that it compiles the Java source code into an intermediate form called **bytecode**. This is different than the machine code that most other compiled languages produce. Java bytecode is intended to be executed by something called the **Java Virtual Machine (JVM)**.

You can think of the JVM as a program that you install on your computer, which allows you to run Java programs by executing Java bytecode. When people talk about "_whether or not Java is installed on a computer_," they are usually asking whether or not the **JVM** is installed on the computer.

The JVM serves a similar function to the interpreters we discussed in previous chapters. But instead of taking source code (which is stored in .java files) as an input, it takes compiled bytecode.

The benefit of this setup is that it allows bytecode compiled on particular operating systems and platforms to be executed by a JVM on any other platform.

For example, imagine we have a file of Java code that was written and compiled to bytecode on a computer running the Windows operating system. This bytecode can be executed (that is, the program can be run) by a JVM on any platform, including Windows, Mac OS, Linux, and so on.

This is not the case with most compiled executables in other programming languages, which can only execute in the environment which they were compiled for.

### Variables and Assignment in Java

One major difference between Java and the languages we have seen so far (Python and JavaScript) is that Java is a **statically typed** language.

This means that the data types of our variables must be known and established at the time the program is compiled.

Each time we create a variable in Java code, we need to explicitly specify the data type of that variable, such as an integer, string, and so on. This is called variable **declaration**.

Once we declare a variable’s data type, it can only hold that type of data throughout the execution of the program.

This is very different from JavaScript and Python, where variable data types are established during program execution, also known as **run time**. Languages like JavaScript and Python are therefore referred to as **dynamically typed** languages – we don’t explicitly state variable data types in our source code and can easily reassign a variable to any type on the fly.

In Java, we create variables using this syntax:

```java
Datatype name = value;
```

Here the `Datatype` is the type of data that the variable will store, such as Integer, String, and so on. Next, the `name` represents the name of the variable we are defining so we can use it in our code. The `value` is the actual value we are assigning to the variable. Note that like JavaScript, all Java statements end in a semicolon.

### Data Types in Java

In Java, the basic built-in data types are called the **primitive** data types and they will look very familiar based on what we have seen in higher-level languages like Python and JavaScript. The main primitive types are:

-   Integer `int`: Stores whole numbers between −2,147,483,648 and 2,147,483,647.
-   Float `float`: Stores decimal numbers between 3.4x10^−038 to 3.4x10^038.
-   Boolean `bool`: Stores one of the two boolean values `true` or `false`.

Note that there are a few other primitive types (short, long, byte, and double) that we won’t be covering here since they aren’t used as often as the others. Here is how we initialize these data types:

Integer: `int x = 100;`

Float: `float pi = 3.14;`

Char: `char middleInitial = 'T';`

Boolean: `bool isHuman = true;`

I do want to reiterate that once the data type of a variable is declared, that variable can only hold values of the specified data type.

For example, an error would be thrown if our program tried to store a character value inside a variable that was declared to be an integer. We can’t assign the character 'S' to the integer variable _x_ in the previous example.

The next data type we’ll discuss is the string – a sequence of characters, numbers, or symbols represented as textual data.

Strings in Java are a non-primitive data type, which means they are built up from smaller parts. To declare a string variable we use the String data type and place the assigned value in double-quotes:

```java
String name = "Harry Potter";
```

### Program Flow Control Statements in Java

Like JavaScript, Java uses curly braces to define code blocks for `if` statements, loops, and functions. We’ll examine the same program control statements as in the previous chapters and update the examples to use the Java syntax.

#### If / Else Statement

Here is the Java if/else statement that mirrors the examples in the previous sections:

```java
int x = 10;

if ( x > 5 ) {
    System.out.println("X is GREATER than 5!");
} else {
    System.out.println("X is NOT GREATER than 5!");
}
```

This basic `if` example is almost identical to the JavaScript version. The only differences are we declared the datatype of _x_ to be int and we using `System.out.println()` instead of `console.log()` to print out our message.

Next, we’ll move on to loops in Java. Since Java and JavaScript syntax are quite similar, the `while` loop in Java is essentially the same as we saw in JavaScript:

```java
int x = 1;

while ( x <= 100 ) {

    System.out.println("This is a very important message!");
    
    x = x + 1;
    
}
```

This `while` loop will print out the specified message 100 times.

This concludes our sections on specific programming languages. It may have been a bit repetitive since we covered the same set of concepts in 3 languages, but hopefully this helped hammer in these basic but fundamental ideas.

Now we'll round out this article with a few in-between topics that you might not otherwise start learning right away.

We'll talk about an essential collaboration tool called Git. Then we'll learn to store and access data in a database. Next we'l briefly touch on Web development frameworks, and finally we'll shed some light on package managers.

## 11) Track Your Code Using Git

Git is the most popular Version Control System (VCS) in use today. It allows multiple developers to collaborate on software together. In this section we’ll learn what Git is, how it works, and how to use its basic commands.

Before jumping straight into Git, let’s flesh out some concepts common to most programming projects.

The full set of directories and files that make up a software project is called a **codebase**. The **project root** is the highest-level folder in the project’s directory tree. Code files can be included directly in the project root or organized into multiple levels of folders.

When the codebase is ready for testing or deployment it can be **built** into the program that will run on your computer. The **build process** can include one or more steps that convert the code written by humans into an executable that can be run on your computer’s processing chips.

Once the code is built, your program is ready to run on your specific operating system, such as Linux, Mac OS, or Windows.

Over time, developers update the project code to add new features, fix bugs, implement security updates, and more. In general, there are three ways developers can make these changes to a software project:

1.  Add new files and folders to the project
2.  Edit the code in existing files and folders
3.  Delete existing files and folders

As projects grow and new features are added, the number of files and folders (as well as the amount of code within them) increases. Large projects can grow up to hundreds of thousands of files containing millions of lines of code.

To support this growth, the number of developers on large project teams typically increases. Large software projects can have hundreds or even thousands of developers all working in tandem.

This begs the question: "_How the heck do all these developers, who may be geographically spread out all around the world, keep track of their software project code in such a way that they can work together on a single project?_"

Development teams need a way to keep track of exactly what changes were made to the code, which files or folders were affected, and who made each change. Each developer also needs to be able to obtain updates from all other developers.

This process is called **versioning** or **version control**. Developers use special tools called **Version Control Systems (VCS)** to track, manage, and share the versions of software projects. Here are a few popular version control systems that are actively used these days:

-   Git
-   Subversion (SVN)
-   Mercurial (Hg)

However, Git has won the crown as the go-to VCS of the day. It is by far the most popular VCS in use by government, commercial, and open-source communities worldwide.

Git forms the core of popular web-based VCS platforms like GitHub and Bitbucket. Git is an essential tool for any well-rounded developer to add to their skill set.

### Basic Git Commands

Git creates and stores information about our software projects in something called a **Git repository**. A Git repository is just a hidden folder on your computer that Git uses to store data about the code files in a software project.

Each software project we work on typically has its own Git repository for storing information related to that project. This way, code related to different projects on a single computer can be tracked separately.

There are two main ways to create a Git repository on your computer. The first is to create a brand new Git repository in an existing folder on your file system.

To do this, simply open up the Command Line, create a new folder somewhere convenient like on your Desktop, and browse into it:

```sh
cd ~/Desktop

mkdir testgit
 
cd testgit/
```

Now that we created a new folder and browsed into it, we can initialize a new Git repository using the command:

```sh
git init
```

You should see some output similar to the following:

```sh
Initialized empty Git repository in /Users/me/Desktop/testgit/.git/
```

All of the Git commands we’ll run start with the word `git` followed by a space and then the specific Git command we would like to run. Sometimes we’ll add flags and arguments after the Git commands as well.

The `git init` command creates a hidden folder called `.git` in the current directory. This folder is the Git repository we mentioned above. You can see this by running the command `ls -al`.

The second way to get a Git repository on to your computer is to download one from somewhere else, like Bitbucket or GitHub.

Bitbucket and Github are websites that allow people to host open source projects that can be downloaded to your computer.

If you browse to a project you find interesting on Bitbucket or GitHub, you’ll see a button labeled Clone. This button will provide you a command and URL that you can copy and paste into the command line terminal. It will look something like this:

```sh
git clone https://jacobstopak@bitbucket.org/jacobstopak/baby-git.git
```

The `git clone` command downloads the repository from the specified URL into a new folder on your computer. The URL can either be a web URL as in the example above or an SSH URL as follows:

```sh
git clone git@bitbucket.org:jacobstopak/baby-git.git
```

After running the git clone command, you should see a new folder created. If you browse into it, you’ll see all of the files and subfolders that make up the project you downloaded.

The next command we'll mention is `git add <filename.ext>`. The `git add` command is used to tell Git which files we want it to track, and to add changes in already tracked files to Git's `staging area`.

Once new or changes files have been staged, they can be committed to the repository by using the command `git commit -m "Commit message"`. This will store the changes in all staged files in the Git repository.

The `git status` and `git log` commands are handy for reviewing the current state of the working directory and the commit history of your project.

We barely scratched the surface here. [Git has many more essential commands](https://initialcommit.com/blog/Git-Cheat-Sheet-Beginner) which are definitely worth getting comfortable with.

## 12) Store Data Using Databases and SQL

A database is a program specifically designed to efficiently store, update, retrieve, and delete large amounts of data. In a nutshell, we can think of a database as a container for a set of tables.

You have probably worked with tables in Microsoft Excel. A table is just a set of columns and rows containing data. We can set up tables in a database to store the information that our programs need to work properly.

Whether we are writing programs in JavaScript, Python, Java, or some other language, we can tell our programs to interact with databases as needed.

We can retrieve data from the database to display to our users on a web page. We can accept a web sign-up form from a user and store that user’s information in a database for later use.

Our programs can interact with databases in real-time as events transpire in our application. To do this, most databases speak a language called **SQL**, short for **Structured Query Language**.

SQL is a programming language specifically created for databases. It allows us to tell databases what to do.

A chunk of SQL code is called a **query**. We can write SQL queries to fetch the data we need at a particular time or to insert new data into a specific table. Roughly speaking there are two main types of SQL queries: **read-SQL** and **write-SQL**.

A read-SQL query is one that simply fetches data from the database for us to see or use. It doesn’t change the data in the database at all.

On the other hand, a write-SQL query either inserts new data into a table, updates existing data, or deletes existing data. We’ll learn how to write some basic read-SQL queries in this section.

Before writing a query, it helps to know what we are querying! Traditional databases contain **tables** made up of columns and rows. When we write a read-SQL query, our goal is usually to retrieve a subset of those rows and columns.

For example, let's say we have a table called `PERSON` with 4 columns, `FIRST_NAME` and `LAST_NAME`. We can use the following query to select all the data from only the `FIRST_NAME` column:

```sql
SELECT FIRST_NAME FROM PERSON;
```

The SELECT keyword tells the database that we want to retrieve data. It is followed by the name of the column – FIRST\_NAME – that we want to get.

Then we use the FROM keyword to tell the database which table we want to get the data from, in this case, the PERSON table. Also, note that all SQL commands are terminated by a semi-colon.

One of the most common requirements we have with data is to filter it. Filtering means restricting the result set based on a specified condition.

For example, we might only want to select rows from the `PERSON` table for people who are named "PHIL". We can apply filters in SQL queries using the `WHERE` keyword:

```sql
SELECT * FROM PERSON WHERE FIRST_NAME = 'PHIL';
```

This query would return all columns in the `PERSON` table since we used an asterisk `*` in the `SELECT` clause instead of listing specific column names. Only rows in the `PERSON` table where the `FIRST_NAME` is set to "PHIL" would be retrieved.

Lastly, we’ll talk about sorting. There are many times when we’d like to see our query results sorted in a particular order. We can use the `ORDER BY` clause for this:

```sql
SELECT *
FROM PERSON
ORDER BY LAST_NAME;
```

This will return all columns in the `PERSON` table sorted alphabetically by last name.

By default, the results will be sorted in ascending order, from A to Z. We can add the optional ASC or DESC keyword, to specify whether to sort in ascending or descending order:

```sql
SELECT *
FROM PERSON
ORDER BY LAST_NAME DESC;
```

## 13) Read About Web Frameworks and MVC

Oftentimes, we’ll find ourselves writing code for very common types of applications. Web applications (or **web apps**) are applications that rely on the Internet in order to function. Webapps are some of the most commonly created types of software applications.

A web app is essentially a more functional and robust version of a website. Most web apps implement some backend code that resides on a web server and performs logic behind the scenes to support the application’s functionality.

Common programming languages to use for a web app’s backend code include Python, Java, and JavaScript, among others.

Some functionalities common to most web apps include:

-   Providing a convenient way to dynamically alter content on web pages
-   Performing secure user authentication via a login page
-   Providing robust application security features
-   Reading and writing data to a database

A web framework is a set of code libraries that contain the common functionalities that all web apps use out of the box. Web frameworks provide a system for developers to build their applications without having to worry about writing the code for many of the behind the scenes tasks common to all web apps.

We only need to utilize the parts of the framework that meet the needs of our web app.

For example, if we don’t need to connect to a database in a particular web app, we can just ignore the database features and use the other features that we do need.

We still have the full ability to customize the web pages that make up our application, the user flow, and the business logic. You can think of a web framework as a programming tool suite that we can use to build web apps.

Each programming language we covered in this article has one or more popular web frameworks currently in use. This is great because it gives development teams the flexibility to use the framework of the language that they are the most proficient in.

Java has the **Spring Framework** that's made especially convenient via **Spring Boot**. Python has the **Django Framework**. JavaScript has the **Node.js** runtime environment with the multiple framework options including **Express.js** and **Meteor.js**. These frameworks are all free and open-source.

## 14) Play with Package Managers

The final topic that we’ll cover in this guidebook is the **package manager**. Depending on the context, a **package** can either represent a standalone program that is ready to install on a computer or an external code library that we want to leverage in one of our software projects.

Since our applications often depend on these external code libraries, we also refer to them as **dependencies**.

A package manager is a program that helps us maintain the dependencies of a system or software project. By "maintain" we mean installing, updating, listing, and uninstalling the dependencies as needed.

Depending on the context, the package managers we’ll discuss can either be used to maintain the programs we have installed on our operating systems or to maintain the dependencies of a software project.

### Mac OS X: Homebrew

**Homebrew** is the most popular package manager for the Mac OS X operating system. It offers a convenient way to install, update, track, list, and uninstall packages and applications on your Mac.

Many applications that can be installed via downloaded .dmg files can also be downloaded and installed using Homebrew.

Here is an example of installing the `wget` package via Homebrew:

```sh
brew install wget
```

### Linux: Apt and Yum

Since Linux was built around the Command Line, it’s no surprise that package managers are the default way to install programs.

Most mainstream flavors of Linux ship with a built-in package manager. **Advanced Package Tool (APT)** is the native package manager for Debian and Ubuntu-based Linux distributions. **Yellowdog Updater, Modified (YUM)** is the native package manager for the RedHat Linux distribution.

Here is an example of installing Vim using APT:

```sh
sudo apt-get install vim
```

And using Yum:

```sh
sudo yum install vim
```

### JavaScript: Node Package Manager (NPM)

Now that we have seen how some OS-level package managers work, let’s take a look at some programming language-specific package managers. These can help us manage the software libraries that many of our coding projects depend on. **Node Package Manager (NPM)** is installed by default with Node.js.

One difference between NPM and the previous package managers we have seen is that NPM can be run in **local** or **global** mode. Local mode is used to install a package only within a particular project/directory we are working on, while global mode is used to install the package on the system.

By default, packages are installed locally, but you can use the `-g` flag to install a package globally:

```sh
npm install request -g
```

### Python: Pip

Python also has a package manager called **Pip**. Pip may already be installed on your system as it comes prepackaged with recent versions of Python. Pip allows us to easily install packages from the **Python Package Index** using the `pip install <package-name>` command:

```sh
pip install requests
```

### Java: Apache Maven

**Apache Maven** (usually referred to as simply **Maven**) is a free and open-source tool suite that includes dependency management.

Maven is mostly used for Java projects although it does support other languages as well. Maven usage is a bit more complicated and it can do a lot of things, so we won't get into the weeds here.

## Summary

In this article, I introduced a set of essential coding concepts and tools with the intention of presenting a bird’s eye view of software development that I wish I had when I started learning to code.

I covered topics including the Internet, several programming languages, version control systems, and databases with the goal of describing how these pieces of the puzzle fit together.

## Next Steps

If you enjoyed this article, I wrote a book called the [Coding Essentials Guidebook for Developers](https://initialcommit.com/store/coding-essentials-guidebook-for-developers) which has 14 chapters, each covering one of the topics discussed in this post.

In the book I go into even more depth on these 14 subjects, so that might be a good resource for you to check out if you got value out of this article.

After reading this, you may feel drawn to a particular language, tool, or concept. If this is the case I encourage you to dive deeper into that area to further your learning.

If you have any questions, suggestions, or concerns about this book, I would love to hear from you at [jacob@initialcommit.io](mailto:jacob@initialcommit.io).
