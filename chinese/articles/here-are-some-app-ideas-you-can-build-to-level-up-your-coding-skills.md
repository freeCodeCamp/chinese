> * 原文地址：[一些可以提升你编程水平的应用创意想法](https://www.freecodecamp.org/news/here-are-some-app-ideas-you-can-build-to-level-up-your-coding-skills-39618291f672/)
> * 原文作者：[Florin Pop](https://www.freecodecamp.org/news/author/florinpop17/)
> * 译者：MMMAY521
> * 校对者：

![一些可以提升你编程水平的应用创意想法](https://cdn-media-1.freecodecamp.org/images/0*v3qXmKe1LTiiW_3H.png)

Have you ever wanted to build something but you had no idea what to do? Just as authors sometimes have “writer's block” it’s also true for developers.你是否曾经想开发一些东西但苦于无从下手？就像文学创作者会遭遇写作瓶颈，开发人员也不例外。

Together with my friend  [Jim][1]  we created a  [collection of application ideas][2]  which is intended to solve this issue once and for all! ?我跟我的朋友吉姆一起，创作了一个【应用创意想法集锦】，旨在一劳永逸地解决这个问题。

These applications are:这些应用可以：

-   great to improve your coding skills很好地提升你的编程技能
-   great to experiment with new technologies很好地接触新技术
-   great to be added in your portfolio to impress your next employer/client成为你简历里打动雇主或客户的经历
-   great to be used as examples in tutorials (articles or videos)成为辅导材料（文章或者视频形式）里面的例子
-   easy to complete and also easily extendable with new features很快完成，新性能扩展也十分容易

This is not just a simple list of projects, but a collection that describes each project in enough detail so you can develop it from the ground up!这不仅仅是一个项目的简单罗列。这份集锦详细地描述了每个项目，足够你从零开始。

Each project specification contains the following:每份项目规格包含：

1.  A clear and descriptive objective一个清晰描述对象
2.  A list of  _User Stories_  which should be implemented (these stories act more as a guideline than a forced list of  _To-Do’s_. Feel free to add your own features if you want) 需执行的用户故事清单（这些用户故事更像是一个行为准则而非必做事项。如果你有需要的话也可以根据自己的需要添加）
3.  A list of  _bonus features_  that improve not only the base project but also your skills at the same time追加选项清单。这个不仅可以改良基础项目，同时你的编程技巧也会有所提高
4.  All the resources and links to help you find what you need to complete the project所有能帮你发现完成项目所需物料的资源和链接

### Projects项目综述

All of the projects are divided into three tiers based on the knowledge and experience required to complete them. These tiers are:根据完成项目所需的知识储备和经验，所有的项目分为三个层级：

1.  **Beginner**  — Developers in the early stages of their learning journey. Those who are typically focused on creating user-facing applications.初级针对的是刚刚起步的开发人员，特别是专注于开发面向用户应用的人员。
2.  **Intermediate**  — Developers at an intermediate stage of learning and experience. They are comfortable in UI/UX, using development tools, and building apps that use API services.中级针对的是已经有学习和开发经验的老学员。他们注重用户界面和用户体验，会使用开发工具，会开发使用应用编程接口服务的应用。
3.  **Advanced**  — Developers who have all of the above, and are learning more advanced techniques like implementing BackEnd applications and Database services.高级所针对的开发人员包含初级和中级提到的所有特点。他们还会额外学习高级技术，例如执行后端应用和数据库服务。

Below you’ll find  **5 projects**  for each of the tiers (**15 in total**), but there are over  **30 projects**  (at the moment) in  [this GitHub repository][3]. Make sure you check it out as we are planning to add more projects in the future. You are welcome to help! (More about this in the  _Contributing_ section below ?)接下来，每个层级中都会包含五个项目，总共十五个项目。但在我写文章时，在Github库中共有三十个项目。一定要确保你把这些项目都烂熟于心，因为未来我们计划增加更多的项目，非常欢迎你出一份力！（更多信息请关注下文的“贡献”部分）

### 1\. Notes App笔记应用

**Tier:**  1 — Beginner层级：1-初级

**Description**: Create and store your notes for a later purpose!任务描述：可以按照需求创建和存储笔记

#### User Stories用户需求

-   User can create a note用户可以创建笔记
-   User can edit a note用户可以编辑笔记
-   User can delete a note用户可以删除笔记
-   When closing the browser window the notes will be stored and when the User returns, the data will be retrieved浏览页面关闭时笔记可以自动存储；用户返回页面是，数据可以自行修复。

#### Bonus features追加选项

-   User can create and edit a note in Markdown format. On save it will convert Markdown to HTML用户可以以Markdown格式创建和编辑笔记，存储以后会转换HTML内容。
-   User can see the date when he created the note用户可以看见创建笔记的日期

#### Useful links and resources可以提供帮助的链接和资源

-   [localStorage][4]
-   [Markdown Guide][5]
-   [Marked — A markdown parser][6]

#### Example project实例项目

### 2\. Christmas Lights圣诞彩灯

**Tier:**  1 — Beginner层级：1-初级

**Description**: The Christmas Lights application relies on your development talents to create a mesmerizing light display. Your task is to draw seven colored circles in a row and based on a timer change the intensity of each circle. When a circle is brightened its predecessor returns to its normal intensity.任务描述：圣诞彩灯应用需要利用你的编程开发能力来创造一个光彩炫目的灯光秀。你的任务是连续画出七个彩色光圈，然后根据时间变化每个光圈的亮度有所变化。一个光圈变亮时，上一个变亮的光圈恢复正常亮度。

This simulates the effect of a string of rippling lights, similar to the ones displayed during the Christmas Holidays.在这个应用中，灯光就像涟漪一样一层一层荡漾开，好比圣诞节的灯光秀。

#### User Stories用户需求

-   User can press a button to start and stop the display用户可以通过按钮控制灯光秀
-   User can change the interval of time controlling the change in intensity用户可以控制灯光秀亮度变化的时间间隔

#### Bonus features追加选项

-   User can select the color used to fill each circle用户可以选择每个光圈的颜色
-   User can specify the intensity value用户可以控制光圈亮度
-   User can change the size of any circle in the row用户可以改变每个光圈大小
-   User can specify the number of rows to be included in the display. From one to seven rows can be chosen用户可以设定灯光秀中的光圈个数，范围是1-7

#### Useful links and resources可以提供帮助的链接资源

-   [Sample Image][7]
-   [Adafruit LED Matrix][8]

#### Example project实例项目

### 3\. FlipImage 图片移动

**Tier:**  1 — Beginner层级：1-初级

**Description**: It’s important for Web Developers to understand the basics of manipulating images since rich web applications rely on images to add value to the user interface and user experience (UI/UX).任务描述：因为大量网站应用依靠图片来呈现更丰富的用户界面、提供更棒的用户体验，因而对于网站开发人员来说，理解图片操作的基础非常重要。

FlipImage explores one aspect of image manipulation — image rotation. This app displays a square panel containing a single image presented in a 2x2 matrix. Using a set of up, down, left, and right arrows adjacent to each of the images the user may flip them vertically or horizontally.图片移动探索图片操作的一个方向-图片移动。应用上显示一个方框，一张图片以2*2矩阵形式呈现。用户通过控制图片周围上下左右四个箭头来垂直或水平移动图片。

You must only use native HTML, CSS, and Javascript to implement this app. Image packages and libraries are not allowed.必须使用原生HTML,CSS和Javascript语言来执行此应用。图像包和图像库均不允许使用。

#### User Stories用户需求

-   User can see a pane containing a single image repeated in a 2x2 matrix用户可以看见一个窗口，里面的单个图片一直以2*2矩阵分布
-   User can flip any one of the images vertically or horizontally using a set of up, down, left, and right arrows next to the image通过控制图片旁边的上下左右按钮，用户可以任意垂直或水平移动任意图片

#### Bonus features追加选项

-   User can change the default image by entering the URL of a different image in an input field通过统一资源定位器（URL）查找别的图片，用户可以在输入栏更改默认图片
-   User can display the new image by clicking a ‘Display’ button next to the input field用户可以点击输入栏旁边的‘秀’按钮，展示新图片
-   User can see an error message if the new images URL is not found如果在统一资源定位器中没有找到新图片，用户可以看到错误信息提醒（error message）

#### Useful links and resources可以提供帮助的链接资源

-   [How to Flip an Image][9]
-   [Create a CSS Flipping Animation][10]

#### Example project实例项目

### 4\. Quiz App问答应用

**Tier:**  1 — Beginner层级：1-初级

**Description**: Practice and test your knowledge by answering questions in a quiz application.任务描述：通过在问答应用上回答问题，来训练和测试你的知识存储。

As a developer, you can create a quiz application for testing coding skills of other developers. (HTML, CSS, JavaScript, Python, PHP, etc…)作为一名开发人员，自然要开发能够测试其他开发人员编程知识的问答应用，诸如HTML, CSS, Javascript, Python, PHP知识等等。

#### User Stories用户需求

-   User can start the quiz by pressing a  `button`用户可以通过按下按钮开始答题
-   User can see a question with 4 possible answers用户面对的问题有四个答案选项
-   After selecting an answer, display the next question to the User. Do this until the quiz is finished用户选中一道题的答案后，自动进行到下一题，直到整个问答结束
-   In the end, the User can see the following statistics:问答结束时，用户可以看到以下数据：

1.  Time it took to finish the quiz完成问答所需时间
2.  How many correct answers did he get回答正确的问题个数
3.  A message showing if he  `passed`  or  `failed`  the quiz是否通过问答

#### Bonus features追加选项

-   User can share the result of a quiz on social media用户可以在社交媒体分享问答结果
-   Add multiple quizzes to the application. User can select which one to take在应用上增加多份问答，用户可以决定做哪个问答
-   User can create an account and have all the scores saved in his dashboard. User can complete a quiz multiple times用户可以创建账户，存储所有得分结果。用户可以多次进行同一个问答

#### Useful links and resources可以提供帮助的链接资源

-   [Open Trivia Database][11]

#### Example projects实例项目

[Quiz app built with React][12]  (wait for it to load as it is hosted on Heroku)可测反应能力的问答应用（应用已在Heroku上线，可下载）

### 5\. Roman Numeral to Decimal numbers Converter罗马-十进制数字转换器

**Tier:**  1 — Beginner层级：1-初级

**Description**: The numeric system represented by Roman numerals originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Roman numerals, as used today, employ seven symbols, each with a fixed integer value.任务描述：罗马数字源于古罗马。直到中世纪后期，罗马数字系统一直是数字书写的主流，至今仍在使用。罗马数字包含七个符号，每个都有确定的整数值。

See the below table the  _Symbol — Value_  pairs:下表为罗马符号-整数值对应：

-   I — 1
-   V — 5
-   X — 10
-   L — 50
-   C — 100
-   D — 500
-   M — 1000

#### User Stories用户需求

-   User should be able to enter one Roman number in an input field用户可以在输入栏里输入一个罗马数字
-   User could see the results in a single output field containing the decimal (base 10) equivalent of the roman number that was entered by pressing a button按下按钮，用户可以在输出栏看见之前输入的罗马数字对应的十进制数字
-   If a wrong symbol is entered, the User should see an error如果输入罗马符号错误，用户可以看见错误提示

#### Bonus features追加选项

-   User could see the conversion to be made automatically as I type用户可以看见转换过程自动完成
-   User should be able to convert from decimal to Roman (vice-versa)用户可以完成十进制-罗马数字的逆过程转换

#### Useful links and resources可提供帮助的链接资源

-   [An explanation of Roman Numbers][13]关于罗马数字的说明

#### Example project实例项目

[Roman Number Converter][14]罗马数字转换

### 6\. Book Finder App寻书应用

**Tier:**  2 — Intermediate层级：2-中级

**Description**: Create an application that will allow users to search for books by entering a query (Title, Author, etc). Display the resulting books in a list on the page with all the corresponding data.任务描述：创建一个用户可以搜寻书的应用。用户在输入相关书名、作者等信息后，网页上会排列出现所有相关书籍。

#### User Stories用户需求

-   User can enter a search query into an  `input`  field用户可以在输入栏输入要查询的信息
-   User can submit the query. This will call an API that will return an array of books with the corresponding data (**Title**,  **Author**,  **Published Date**,  **Picture**, etc)用户可以提交查询信息。这就叫做应用编程接口（API），返回结果是与所有输入信息（例如名称，作者，出版日期，图像等）相关联的书籍
-   User can see the list of books appearing on the page用户可以在页面上看到搜索出来的书籍清单

#### Bonus features追加选项

-   For each item in the list add a link that will send the User to an external site which has more information about the book搜索清单上每个书籍条目要增加一个外部站点链接，用户可以直达，得到更多关于书的信息。
-   Implement a Responsive Design执行一个响应设计
-   Add loading animations增加预载动画

#### Useful links and resources可提供帮助的链接资源

You can use the  [Google Books API][15]你可以采用[Google Books API]

#### Example Project实例项目

[BookSearch-React][16]寻书重演

### 7\. Card-Memory-Game卡片记忆游戏

**Tier:**  2 — Intermediate层级：2-中级

**Description**: Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.任务描述：在卡片记忆游戏中，你需要点击一张卡片看是什么图形隐藏在下面，然后努力在其余卡片中发现匹配的图形。

#### User Stories用户需求

-   User can see a grid with n x n cards (`n`  is an integer). All the cards are faced down initially (`hidden`  state)用户可以看到一个包含有n*n张卡片的格子（n是整数）。所有的卡片一开始都是图形面朝下的状态（隐藏状态）
-   User can click a button to start the game. When this button is clicked, a timer will start用户点击按钮开始游戏，同时计时器开始计时
-   User can click on any card to unveil the image that is underneath it (change it to  `visible`  state). The image will be displayed until the user clicks on a 2nd card用户可以点击任意一张卡片查看图形，这张卡片就处于可见状态，一直持续到用户点击第二张卡片

When the User clicks on the 2nd card:用户点击第二张卡片后：

-   If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the  `visible`  state)如果两张卡片图形匹配，这两张卡片就会消失（或是隐藏或是移除，也可以让他俩处于可见状态）
-   If there isn’t a match, the 2 cards will flip back to their original state (`hidden`state)如果跟第一张卡片图形不匹配，两张卡片就会恢复初始状态
-   When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game所有匹配结束以后，用户可以看见对话框显示“祝贺”信息，同时也会显示完成游戏所耗费的时间

#### Bonus features追加选项

-   Use can choose between multiple levels of difficulty (Easy, Medium, Hard). Increased difficulty means: decreasing the time available to complete and/or increasing the number of cards用户可以自己选择游戏难度等级（易中难）。难度增加意味着：完成游戏的规定时间缩短或者图片个数增加
-   User can see the game statistics (nr. of times he won / he lost, the best time for each level)用户可以看见游戏数据（不是输赢次数，而是每个难度所对应的最好成绩）

#### Useful links and resources可提供帮助的链接资源

-   [Wikipedia][17]

#### Example projects实例项目

[Flip — card memory game][18]翻转-卡片记忆游戏

[SMB3 Memory Card Game][19]SMB3：记忆卡片游戏

### 8\. Markdown Table Generator Markdown表格生成器

**Tier:**  2 — Intermediate层级：2-中级

**Description**: Create an application that will convert a regular table with data provided by the User (optionally) into a Markdown formatted table.任务描述：创建一个可以将常规表格转换成Markdown形式表格的应用，用户可以选择向常规表格提供数据（或者不提供）

#### User Stories用户需求

-   User can create an  `HTML table`  with a given number of  **Rows**  and  **Columns**用户可以创建包含有给定行数或列数的HTML表格
-   User can insert text in each cell of the  `HTML table`用户可以在HTML表格中的每个单元格插入文本
-   User can generate a  `Markdown formatted table`  that will contain the data from the  `HTML table`用户可以生成包含有HTML表格数据的Markdown形式表格
-   User can preview the  `Markdown formatted table`用户可以预览Markdown形式表格

#### Bonus features追加选项

-   User can copy the  `Markdown formatted table`  to the clipboard by pressing a button用户可以一键复制Markdown形式表格到剪切板
-   User can insert a new  **Row**  or  **Column**  to a specified location用户可以在特定区域插入行或者列
-   User can delete a  **Row**  or a  **Column**  entirely用户可以彻底删除某行某列
-   User can align (to the  _left_,  _right_  or  _center_) a  **cell**, a  **column**, a  **row**, or the entire  **table**用户可以将某个单元格、某列、某行向左、向右或者居中对齐。

#### Useful links and resources可以提供帮助的链接资源

-   [Markdown Guide][20]
-   [Marked — A markdown parser][21]
-   [How to Copy to Clipboard][22]

#### Example project实例项目

[Tables Generator / Markdown Tables][23]

### 9\. String Art弦乐艺术

**Tier:**  2 — Intermediate层级：2-中级

**Description**: The purpose of String Art is to provide the developer with practice creating a simple animated graphic, using geometry in the  , and creating something that’s visually pleasant to watch.任务描述：弦乐艺术的目的在于让开发人员练习，创建简便动画图表，在动画算法中运用几何知识，创造出富有视觉美感的画面。

String Art draws a single multicolored line which smoothly moves until one end touches a side of the enclosing window. At the point, it touches a “bounce” effect is applied to change its direction.弦乐艺术中，会有一条五彩斑斓的线条平稳地移动，直到它的一端碰到封闭窗口的一边。此时，线条就会因为反弹效应改变方向。

A ripple effect is created by only retaining 10–20 images of the line as it moves. Older images are progressively faded until they disappear.线条移动时，如果可以保留10-20张线条移动时的图形，便会出现涟漪效应。稍早出现的图形会慢慢消失不见。

Animation libraries are not allowed. Use only Vanilla HTML/CSS/JavaScript.不可以使用动画库。只可以使用Vanilla HTML/CSS/Javascript.

#### User Stories用户需求

-   Start by drawing a multicolored line at a random position within the boundary of it’s enclosing window在封闭窗口界限内的任意位置，用户以画一条五彩斑斓的线开始
-   Each 20 ms draw a new copy of the line at a new position based on a trajectory — the incremental distance from the previous line based on the endpoints每隔二十毫秒，在别的位置，按照前一条线条的轨迹复制一条-以端点作为标记，距离前一线条要越来越远
-   When either endpoint of the line touches the boundary of the enclosing window change it’s direction and randomly alter its angle不论线条的哪个端点碰到封闭窗口的边界，都要改变线条的方向，角度随机改变
-   Progressively fade the intensity of old lines so that only the most recent 10–20 lines are visible to create the sense of movement or “ripple”慢慢降低起初话的线条的亮度，确保最近画的10-20线条可见，这样才可以呈现动感或者涟漪效应

#### Bonus features追加选项

-   User can specify the length of the line and its velocity用户可以设定线条的长度和移动速度
-   User can specify the multiple lines within the window, all moving along different trajectories and velocities用户可以设定窗口内的线条数量，所有线条可以按照不同轨迹和速度移动

#### Useful links and resources可以提供帮助的链接资源

-   [Using Multistep Animations & Transitions][24]
-   [Animation Basics][25]

#### Example project实例项目

This project is very close, but has a small enclosing window and is monochromatic.  [Daniel Cortes][26]这个项目时间不长，但包含一个小窗口，很单一。

### 10\. To-Do App计划清单应用

**Tier:**  2 — Intermediate层级：2-中级

**Description**: The classic To-Do application where a user can write down all the things he wants to accomplish.任务描述：经典的计划清单应用：用户可以记下所有的待办事项。

#### User Stories用户需求

-   User can see an  `input`  field where he can type in a to-do item用户可以看见输入框，从而输入待办事项
-   By pressing enter (or a button), the User can submit the to-do item and can see that being added to a list of to-do’s点击“进入”（或者按钮），用户可以提交待办事项，并且看见其已经进入待办事项清单
-   User can mark a to-do as  `completed`用户可以在待办事项上标注“已完成”
-   User can remove a to-do item by pressing on a button (or on the to-do item itself)用户可以通过点击按钮取消待办事项，或者是在待办事项条目上直接操作

#### Bonus features追加选项

-   User can edit a to-do用户可以编辑待办事项
-   User can see a list with all the completed to-do’s用户可以看见所有已完成待办事项的清单
-   User can see a list with all the active to-do’s用户可以看见所有自己创立的待办事项清单
-   User can see the date when he created the to-do用户可以看见创立待办事项的日期
-   When closing the browser window the to-do’s will be stored and when the User returns, the data will be retrieved关闭浏览窗口时，待办事项可以自动保存；用户返回页面时，数据可自行恢复

#### Useful links and resources可提供帮助的链接资源

-   [localStorage][27]

#### Example projects实例项目

[Todo App built with React][28]

### 11\. Battleship Game Engine战舰游戏引擎

**Tier:**  3 — Advanced层级：3-高级

**Description**: Battleship Game Engine (BGE) implements the classic turn-based board game as a package that’s separated from any presentation layer. This is a type of architectural pattern that useful in many application since it allows any number of apps to utilize the same service.任务描述：战舰游戏引擎采用了回合制棋盘游戏的模式，与所有表示层（presentation layer）分离。它属于一种建筑模式类型，因为其允许无数的应用使用同一种服务，这种模式在很多应用上都十分管用。

The BGE itself is invoked through a series of function calls rather than through directly coupled end-user actions. In this respect using the BGE is similar to using an API or a series of routes exposed by a web server.战舰游戏引擎本身是一系列函数调用的结果，而非终端用户直接动作产生。从这个方面讲，使用战舰游戏引擎，与使用应用编程接口或者使用网络浏览器公开的一系列线路是相似的。

This challenge requires that you develop the BGE and a very thin, text-based presentation layer for testing that’s separate from the engine itself. Due to this, the User Stories below are divided two sets — one for the BGE and one for the text-based presentation layer.这个挑战不仅要求你开发出战舰游戏引擎，还要求你开发出非常精细的、基于文本的表示层，以检测表示层与引擎互不干涉。因此，用户需求包含两套：战舰游戏引擎一套，基于文本的表示层一套

BGE is responsible for maintaining the game state.战舰游戏引擎需要负责维持整个游戏的状态。

#### User Stories用户需求

#### BGE战舰游戏引擎

-   Caller can invoke a  `startGame()`  function to begin a 1-player game. This function will generate an 8x8 game board consisting of 3 ships having a width of one square and a length of:召集者调用`startGame()`函数开始单人游戏。此函数可以创立一个8*8的游戏阵地，阵地上有三艘船，他们的尺寸为：

1.  Destroyer: 2 squares驱逐舰：一方格宽，两方格长
2.  Cruiser: 3 squares巡洋舰：一方格宽，三方格长
3.  Battleship: 4 squares战舰：一方格宽，四方格长

`startGame()`  will randomly place these ships on the board in any direction and will return an array representing ship placement.`startGame()`函数会随机地把这些战船放在阵地的任意方向，随后给出船的部署情况。

-   Caller can invoke a  `shoot()`  function passing the target row and column coordinates of the targeted cell on the game board.  `shoot()`  will return indicators representing if the shot resulted in a hit or miss, the number of ships left (i.e. not yet sunk), the ship placement array, and updated hits and misses array.召集者调用`shoot()`函数可以袭击阵地上的特定行和列构成的方格坐标。`shoot()`函数还会显示袭击是否成功，剩余战船数量，战船安置排列，以及更新袭击成功或者失败数据。

Cells in the hits and misses array will contain a space if they have yet to be targeted,  `O`  if they were targeted but no part of a ship was at that location, or  `X`if the cell was occupied by part of a ship.某个方格被设为攻击目标后，会有所提示。 `O`代表方格被瞄准，但此地没有战船；`X`代表此地有战船。

#### Text-based Presentation Layer基于文本的表示层

-   User can see the hits and misses array displayed as a 2-dimensional character representation of the game board returned by the  `startGame()`  function. 通过返回`startGame()`函数，用户可以看见命中或者未命中数值在阵地上以二维字符展示。
-   User can be prompted to enter the coordinates of a target square on the game board.用户可以受鼓舞进入阵地上特定坐标。
-   User can see an updated hits and misses array display after taking a shot.在袭击之后，用户可以看见命中或未命中数值更新。
-   User can see a message after each shot indicating whether the shot resulted in a hit or miss.袭击结束后，不论命中与否，用户都可以看见信息提示。
-   User can see a congratulations message after the shot that sinks the last remaining ship.在击中最后一艘战船时，用户可以看见“祝贺”信息
-   User can be prompted to play again at the end of each game. Declining to play again stops the game.每局游戏结束后，用户都可以受鼓舞再来一局。拒绝再来一局则会结束游戏。

#### Bonus features追加选项

#### BGE战舰游戏引擎

-   Caller can specify the number of rows and columns in the game board as a parameter to the  `startGame()`  function.召集者可以指定阵地上行与列的具体数值，这也是 `startGame()`函数的参数。
-   Caller can invoke a  `gameStats()`  function that returns a Javascript object containing metrics for the current game. For example, the number of turns played, the current number of hits and misses, etc.召集者可以调用`gameStats()` 函数，返回到Javascript对象，显示最近游戏数据，比如打了几局，命中数等。
-   Caller can specify the number of players (1 or 2) when calling  `startGame()`which will generate one board for each player randomly populated with ships.在调用`startGame()`函数时，召集者可以指定玩家数量。此函数也可以为每个玩家创立阵地，随机安排战舰数量。

`shoot()`  will accept the player number the shot is being made for along with the coordinates of the shot. The data it returns will be for that player.`shoot()`函数会计算做出特定坐标袭击的玩家数量。函数返回的数据针对某个特定玩家。

#### Text-based Presentation Layer基于文本的表示层

-   User can see the current game statics at any point by entering the phrase  `stats`in place of target coordinates. (Note that this requires the  `gameStats()`function in the BGE)用户在目标坐标进入`stats`相位，可以随时查看最近游戏数据。（注意此项操作需要战舰游戏引擎的`gameStats()`函数）
-   User can specify a two-player game is to be played, with each player alternating turns in the same terminal session (Note that this requires corresponding Bonus Features in the BGE)用户可以指定两人游戏模式，每个玩家在同一终端会话均可更改比赛回合。（注意此项操作需要战舰游戏引擎追加选项的相应配合）
-   User can see the player number in prompts associated with the inputs in each turn.用户在每个回合的输入提示中都可以看到玩家数量。
-   User can see both players board at the end of each turn.用户在每个回合结束时可以看见两个玩家的阵地。

#### Useful links and resources可以提供帮助的链接资源

-   [Battleship Game (Wikipedia)][29]
-   [Battleship Game Rules (Hasbro)][30]

#### Example projects实例项目

This YouTube video shows how a text-based  [Battleship Game][31]  is played.youtobe上的这个视频展示了基于文本的战舰游戏是怎么玩的。

The following example is provided as a demonstration of the Battleship game if it is unfamiliar to you. Remember you are to implement a text-based presentation layer for testing.  [Battleship Game by Chris Brody][32]如果你对战舰游戏不熟悉，下面这个例子就是一个范例。记住你要实施一个基于文本的表示层用于测试。

### 12\. Chat App聊天应用

**Tier:**  3 — Advanced层级：3-高级

**Description**: Real-time chat interface where multiple users can interact with each other by sending messages.

As an MVP(Minimum Viable Product) you can focus on building the Chat interface. Real-time functionality can be added later (the bonus features).任务描述：此项任务是创建一个可以支持多名用户互相发送信息的 实时聊天互动界面。
作为一个最小可行化产品，你可以关注聊天界面开发。实时性可作为追加选项稍后添加。

#### User Stories用户需求

-   User is prompted to enter a username when he visits the chat app. The username will be stored in the application用户在浏览聊天应用时根据提示输入用户名，用户名会在应用中保存
-   User can see an  `input field`  where he can type a new message用户可在输入框中输入新信息
-   By pressing the  `enter`  key or by clicking on the  `send`  button the text will be displayed in the  `chat box`  alongside his username (e.g.  `John Doe: Hello World!`)通过点击“进入”或者“发送”按钮，文本会出现在用户名旁边的聊天框中（比如： `John Doe: Hello World!`）

#### Bonus features追加选项

-   The messages will be visible to all the Users that are in the chat app (using WebSockets)信息对于聊天应用（采用WebSockets）的所有用户可见
-   When a new User joins the chat, a message is displayed to all the existing Users每当有一名新用户加入时，所有老用户都会受到提示信息
-   Messages are saved in a database信息会存储在一个数据库中
-   User can send images, videos, and links which will be displayed properly用户可以发送图片，视频和链接。所有这些会以合适的形式展示
-   User can select and send an emoji用户可以挑选，然后发送一个表情。
-   Users can chat in private用户可以私聊
-   Users can join  `channels`  on specific topics用户可以加入特定话题的频道

#### Useful links and resources可以提供帮助的链接资源

-   [Socket.io][33]
-   [How to build a React.js chat app in 10 minutes — article][34]

#### Example project实例项目

[Chatty2][35]

### 13\. GitHub Timeline GitHub时间线

**Tier:**  3 — Advanced层级：3-高级

**Description**: API’s and graphical representation of information are hallmarks of modern web applications. GitHub Timeline combines the two to create a visual history of a users GitHub activity.任务描述：应用程序接口和信息图示是当代应用的特点。 GitHub时间线整合这两个特点，力求创造一个用户GitHub活动的可视历史。

The goal of GitHub Timeline is to accept a GitHub user name and produce a timeline containing each repo and annotated with the repo names, the date they were created, and their descriptions. The timeline should be one that could be shared with a prospective employer. It should be easy to read and make effective use of color and typography.GitHub时间线的目标是，存储GitHub用户的姓名，制作一条时间线，包含每个存储库，像他们的名字，创立的时间，和相关描述。未来可以将时间线分享给潜在老板。时间线需易于阅读，可以有效利用颜色和字体排版。

Only public GitHub repos should be displayed.只有面向公众的存储库可以展示。

#### User Stories用户需求

-   User can enter a GitHub user name用户可以提交GitHub用户名
-   User can click a ‘Generate’ button to create and display the named user's repo timeline用户可以通过点击“生成”按钮创建和展示已命名的用户存储库时间线
-   User can see a warning message if the GitHub user name is not a valid GitHub user name.如果用户名在GitHub中无效的话，用户可以看到提示信息。

#### Bonus features追加选项

-   User can see a summary of the number of repos tallied by the year they were created用户可以看见当年创建的存储库数量总结

#### Useful links and resources可以提供帮助的链接资源

GitHub offers two API’s you may use to access repo data. You may also choose to use an NPM package to access the GitHub API.GitHub提供了两个你们可能用到的接触存储库数据的应用程序接口。你也可以采用Node包管理器（NPM）接触GitHub应用程序接口。

Documentation for the GitHub API can be found at:GitHub应用程序接口说明可以在以下两个链接中找到：

-   [GitHub REST API V3][36]
-   [GitHub GraphQL API V4][37]

Sample code showing how to use the GitHub API’s are:使用GitHub应用程序接口的样本代码如下：

You can use this CURL command to see the JSON returned by the V3 REST API for your repos:你可以用CURL命令看V3 REST应用程序接口返回的JSON，这个程序接口就跟你的存储库有关：

```bash
curl -u "user-id" https://api.github.com/users/user-id/repos
```

#### Example projects实例项目

### 14\. Spell-It拼读拼写

**Tier:**  3 — Advanced层级：3-高级

**Description**: Knowing how to spell is a fundamental part of being fluent in any language. Whether you are a youngster learning how to spell or an individual learning a new language being able to practice helps to solidify your language skills.任务描述：懂得如何拼读拼写拼写是流利掌握每门语言的基础要求。不论你是牙牙学语的孩童或者正在接触一门新语言的个体，练习拼读拼写会强化你的语言技能。

The Spell-It app helps users practice their spelling by playing the audio recording of a word the user must then spell using the computer keyboard.拼读拼写应用播放单词录音，用户用电脑键盘将单词拼写出来，从而帮助用户锻炼拼读拼写能力

#### User Stories用户需求

-   User can click the ‘Play’ button to hear the word that’s to be entered用户点击“播放”按钮，听到要拼写的单词录音
-   User can see letters displayed in the word input text box as they are entered on the keyboard用户在键盘上打完单词后，可以在输入框里看到他们打出的单词
-   User can click the ‘Enter’ button to submit the word that has been typed in the word input text box用户点击“输入”健提交已在输入框里的单词
-   User can see a confirmation message when the correct word is typed如果提交单词正确，用户可以看到确认信息
-   User can see a message requesting the word be typed again when it is spelled incorrectly如果提交单词错误，用户会看到要求再次输入单词的提示
-   User can see a tally of the number of correct spellings, the total number of words attempted, and a percentage of successful entries.用户可以看到拼写正确的单词总数，拼写过的单词总数和成功提交的单词占比。

#### Bonus features追加选项

-   User can hear a confirmation sound when the word is correctly spelled单词拼写正确时用户可以听到确认声音
-   User can hear a warning sound when the word is incorrectly spelled单词拼写错误时用户可以听到警示声音
-   User can click the ‘Hint’ button to highlight the incorrect letters in the word input text box用户可以点击“提示”按钮查看输入框中哪些字母出错
-   User can press the ‘Enter’ key on the keyboard to submit a typed word or click the ‘Enter’ button in the app window用户可以敲键盘上的“输入”健或者点击窗口“提交”按钮提交单词

#### Useful links and resources可以提供帮助的链接资源

-   [Texas Instruments Speak and Spell][38]
-   [Web Audio API][39]
-   [Click and Speak][40]

#### Example projects实例项目

[Word Wizard for iOS][41]

[Speak N Spell on Google Play][42]

### 15\. Survey App调查应用

**Tier:**  3 — Advanced层级：3-高级

**Description**: Surveys are a valuable part of any developers toolbox. They are useful for getting feedback from your users on a variety of topics including application satisfaction, requirements, upcoming needs, issues, priorities, and just plain aggravations to name a few.任务描述：调查应用可谓开发人员工具箱必备。通过这些应用，开发人员可以获得用户的各种反馈，例如对应用满不满意、有没有新要求或者新需求，急需解决的问题是什么，有没有一些变得严重的问题。

The Survey app gives you the opportunity to learn by developing a full-featured app that will you can add to your toolbox. It provides the ability to define a survey, allow users to respond within a predefined timeframe, and tabulate and present results.全功能调查应用的开发给你机会让你去学习，看你会不会把自己开发的应用加入工具箱。它也帮助你提升多方面的能力，如如何定义调查；让用户在预先设定的时间内回应；将结果做成表格并且展示。

Users of this app are divided into two distinct roles, each having different requirements:应用的用户可以鲜明地分为两组，每组都有不同的要求：

-   _Survey Coordinators_  define and conduct surveys. This is an administrative function not available to normal users.调查协调组--制定并实施调查。这个管理员权限普通用户是没有的。
-   _Survey Respondents_  Complete surveys and view results. They have no administrative privileges within the app.调查受访者--完成调查并查看结果。在应用内部他们没有管理员权限。

Commercial survey tools include distribution functionality that mass emails surveys to Survey Respondents. For simplicity, this app assumes that surveys open for responses will be accessed from the app’s web page.商业调查工具包括分布功能，公众会发调查邮件给调查受访者。简单说来，应用网页可以直达对回应开放的调查。

#### User Stories用户需求

#### General综述

-   Survey Coordinators and Survey Respondents can define, conduct, and view surveys and survey results from a common website调查协调组和调查受访组可以在一般网站上制定、实施、查看调查和调查结果。
-   Survey Coordinators can login to the app to access administrative functions, like defining a survey.调查协调可以登录应用获得管理员权限，比如可以制定调查。

#### Defining a Survey制定调查

-   Survey Coordinator can define a survey containing 1–10 multiple choice questions.调查协调组负责制定调查，其中包含有1-10个多项选择问题。
-   Survey Coordinator can define 1–5 mutually exclusive selections to each question.调查协调组可以在每个问题下设定1-5个相互排斥的选项。
-   Survey Coordinator can enter a title for the survey.调查协调组可以给调查设定题目。
-   Survey Coordinator can click a ‘Cancel’ button to return to the home page without saving the survey.调查协调组可以点击“撤销”按钮，不保存调查，返回主页。
-   Survey Coordinator can click a ‘Save’ button to save a survey.调查协调组可以点击“保存”按钮保存调查。

#### Conducting a Survey实施调查

-   Survey Coordinator can open a survey by selecting a survey from a list of previously defined surveys调查协调组可以从先前设定好的调查中选择一个调查并打开
-   Survey Coordinators can close a survey by selecting it from a list of open surveys调查协调组可以从已打开的调查中选择一个关闭
-   Survey Respondent can complete a survey by selecting it from a list of open surveys调查受访组可以从已打开的调查中选择一个完成
-   Survey Respondent can select responses to survey questions by clicking on a checkbox调查受访组可以通过点击复选框选择调查问题的回答
-   Survey Respondents can see that a previously selected response will automatically be unchecked if a different response is clicked.调查受访组可以看见，如果一道题在第二次选择时选择了跟第一次不同的答案，那先前的答案会自动消除
-   Survey Respondents can click a ‘Cancel’ button to return to the home page without submitting the survey.调查受访组可以点击“撤销”按钮不提交调查，返回主页
-   Survey Respondents can click a ‘Submit’ button submit their responses to the survey.调查受访组可以点击“提交”按钮提交回答
-   Survey Respondents can see an error message if ‘Submit’ is clicked, but not all questions have been responded to.如果调查未完成就点击“提交”按钮提交，调查受访组会看到提示“错误”信息

#### Viewing Survey Results查看调查结果

-   Survey Coordinators and Survey Respondents can select the survey to display from a list of closed surveys调查协调组和受访组可以从已关闭的调查中选择调查展示
-   Survey Coordinators and Survey Respondents can view survey results as in tabular format showing the number of responses for each of the possible selections to the questions.调查协调组和受访组在表格形式下查看调查结果，表格可以显示每个问题的每个答案有多少人选择

#### Bonus features追加选项

-   Survey Respondents can create a unique account in the app调查受访组可以在应用中创立一个独有账户
-   Survey Respondents can login to the app调查受访组可以登录应用
-   Survey Respondents cannot complete the same survey more than once调查受访组每个调查只能做一次
-   Survey Coordinators and Survey Respondents can view graphical representations of survey results (e.g. pie, bar, column, etc. charts)调查协调组和受访组可以查看以图表形式呈现的调查结果

#### Useful links and resources可以提供帮助的链接资源

Libraries for building surveys:  [SurveyJS][43]制定调查的图书馆资源库

Some commercial survey services include:  [Survey Monkey][44]  and  [Typeform][45]商业调查服务包括：

#### Example project实例项目

### _Contributing_贡献

You are welcome to contribute to the project in the  [GitHub repository][46]! Any contribution is highly appreciated.非常欢迎大家在[GitHub repository][46]中为这个项目做出一些贡献！任何形式任何贡献我们都非常欢迎~

You can contribute in two ways:贡献有两种方式：

1.  create an issue and tell us your idea. Make sure that you use the  **new idea**  label in this case;你可以创立一个新话题并且告诉我们你的想法。一定要确保你采用了 **新想法**标签；
2.  fork the project and submit a PR. Before doing that, please make sure that you read and follow the Contribution Guide (you can find it in the repository);将项目拆分，并且提交一份性能要求。在做这个工作之前，要确保你已经读过贡献指南，并且你也是这么做的（在存储库中你可以找到贡献指南）；

#### Add your own examples添加你的个人实例项目

You can also add your own examples to the projects after you have completed them. I highly encourage you to do this as it will show others what amazing things you have built! ?在你完成项目以后，一也可以把自己做出来的成果添加到项目上。非常鼓励你们这样做，这也向其他人展示了你创造出了多么精彩的应用！

### Spread the word!帮忙扩散我们的文章

If the information from this article and from the repo was useful to you in any way, make sure you give it a star ?, this way others can find it and benefit too! Together we can grow and make our community better!如果这片文章或者存储库中的信息对你有所帮助，一定要记得给个星星哦~这样其他人才能找到它，而后从中受益。让我们一起成长，把我们的社区建立地更好~

Do you have any suggestions on how we could improve this project overall? Let us know! We’d love to hear your feedback!你有没有什么建议能帮我们总体提升我们的项目吗？有的话不要谦虚哦~非常期待你的反馈~

#### Main Contributors ??主要作者

**Florin Pop**:  [Twitter][47]  and  [website][48].

**Jim Medlock**:  [Twitter][49]  and  [Medium][50]

### **Weekly Coding Challenge ?**每周编程挑战

As a bonus, there’s a Weekly Coding Challenge where you can learn more by practicing your skills on real-world projects. Read  [The Complete Guide][51]  to find out how you can participate! ?作为额外福利，这里有一个每周编程挑战，你可以通过实战项目训练切实提升自己的编程技巧哦~[The Complete Guide][51]这里可以找到参与途径~

[1]: https://twitter.com/jd_medlock
[2]: https://github.com/florinpop17/app-ideas
[3]: https://github.com/florinpop17/app-ideas
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[5]: https://www.markdownguide.org/basic-syntax/
[6]: https://github.com/markedjs/marked
[7]: https://previews.123rf.com/images/whiterabbit/whiterabbit1003/whiterabbit100300020/6582600-seven-color-balls-red-orange-yellow-green-cyan-blue-and-magenta-in-a-row-on-a-white-background.jpg
[8]: https://cdn-shop.adafruit.com/970x728/1487-02.jpg
[9]: https://www.w3schools.com/howto/howto_css_flip_image.asp
[10]: https://davidwalsh.name/css-flip
[11]: https://opentdb.com/api_config.php
[12]: http://tranquil-beyond-43849.herokuapp.com/
[13]: https://en.wikipedia.org/wiki/Roman_numerals
[14]: https://www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php
[15]: https://developers.google.com/books/docs/overview
[16]: https://fethica.github.io/BookSearch-React/
[17]: https://en.wikipedia.org/wiki/Concentration_(game)
[18]: https://codepen.io/zerospree/full/bNWbvW
[19]: https://codepen.io/hexagoncircle/full/OXBJxV
[20]: https://www.markdownguide.org/
[21]: https://github.com/markedjs/marked
[22]: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
[23]: https://www.tablesgenerator.com/markdown_tables
[24]: https://css-tricks.com/using-multi-step-animations-transitions/
[25]: https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/a/what-are-animations
[26]: https://codepen.io/dgca/pen/dpxreO
[27]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[28]: http://todomvc.com/examples/react/#/
[29]: https://en.wikipedia.org/wiki/Battleship_(game)
[30]: https://www.hasbro.com/common/instruct/battleship.pdf
[31]: https://www.youtube.com/watch?v=TKksu3JXTTM
[32]: https://codepen.io/CodifyAcademy/pen/ByBEOz
[33]: https://socket.io/
[34]: https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b
[35]: https://web-chatty.herokuapp.com/
[36]: https://developer.github.com/v3/
[37]: https://developer.github.com/v4/
[38]: https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)
[39]: https://codepen.io/2kool2/full/RgKeyp
[40]: https://codepen.io/shangle/full/Wvqqzq
[41]: https://itunes.apple.com/app/id447312716
[42]: https://play.google.com/store/apps/details?id=au.id.weston.scott.SpeakAndSpell&hl=en_US
[43]: https://surveyjs.io/Overview/Library/
[44]: https://www.surveymonkey.com/
[45]: https://www.typeform.com/
[46]: https://github.com/florinpop17/app-ideas
[47]: https://twitter.com/florinpop1705
[48]: https://florin-pop.com/
[49]: https://twitter.com/jd_medlock
[50]: https://medium.com/@jdmedlock
[51]: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
[52]: https://www.florin-pop.com/blog/2019/03/15-plus-app-ideas-to-build-to-level-up-your-coding-skills/
