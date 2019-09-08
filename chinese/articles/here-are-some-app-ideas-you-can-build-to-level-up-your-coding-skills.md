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

#### Example projects

[Flip — card memory game][18]

[SMB3 Memory Card Game][19]

### 8\. Markdown Table Generator

**Tier:**  2 — Intermediate

**Description**: Create an application that will convert a regular table with data provided by the User (optionally) into a Markdown formatted table.

#### User Stories

-   User can create an  `HTML table`  with a given number of  **Rows**  and  **Columns**
-   User can insert text in each cell of the  `HTML table`
-   User can generate a  `Markdown formatted table`  that will contain the data from the  `HTML table`
-   User can preview the  `Markdown formatted table`

#### Bonus features

-   User can copy the  `Markdown formatted table`  to the clipboard by pressing a button
-   User can insert a new  **Row**  or  **Column**  to a specified location
-   User can delete a  **Row**  or a  **Column**  entirely
-   User can align (to the  _left_,  _right_  or  _center_) a  **cell**, a  **column**, a  **row**, or the entire  **table**

#### Useful links and resources

-   [Markdown Guide][20]
-   [Marked — A markdown parser][21]
-   [How to Copy to Clipboard][22]

#### Example project

[Tables Generator / Markdown Tables][23]

### 9\. String Art

**Tier:**  2 — Intermediate

**Description**: The purpose of String Art is to provide the developer with practice creating a simple animated graphic, using geometry in the animation algorithm, and creating something that’s visually pleasant to watch.

String Art draws a single multicolored line which smoothly moves until one end touches a side of the enclosing window. At the point, it touches a “bounce” effect is applied to change its direction.

A ripple effect is created by only retaining 10–20 images of the line as it moves. Older images are progressively faded until they disappear.

Animation libraries are not allowed. Use only Vanilla HTML/CSS/JavaScript.

#### User Stories

-   Start by drawing a multicolored line at a random position within the boundary of it’s enclosing window
-   Each 20 ms draw a new copy of the line at a new position based on a trajectory — the incremental distance from the previous line based on the endpoints
-   When either endpoint of the line touches the boundary of the enclosing window change it’s direction and randomly alter its angle
-   Progressively fade the intensity of old lines so that only the most recent 10–20 lines are visible to create the sense of movement or “ripple”

#### Bonus features

-   User can specify the length of the line and its velocity
-   User can specify the multiple lines within the window, all moving along different trajectories and velocities

#### Useful links and resources

-   [Using Multistep Animations & Transitions][24]
-   [Animation Basics][25]

#### Example project

This project is very close, but has a small enclosing window and is monochromatic.  [Daniel Cortes][26]

### 10\. To-Do App

**Tier:**  2 — Intermediate

**Description**: The classic To-Do application where a user can write down all the things he wants to accomplish.

#### User Stories

-   User can see an  `input`  field where he can type in a to-do item
-   By pressing enter (or a button), the User can submit the to-do item and can see that being added to a list of to-do’s
-   User can mark a to-do as  `completed`
-   User can remove a to-do item by pressing on a button (or on the to-do item itself)

#### Bonus features

-   User can edit a to-do
-   User can see a list with all the completed to-do’s
-   User can see a list with all the active to-do’s
-   User can see the date when he created the to-do
-   When closing the browser window the to-do’s will be stored and when the User returns, the data will be retrieved

#### Useful links and resources

-   [localStorage][27]

#### Example projects

[Todo App built with React][28]

### 11\. Battleship Game Engine

**Tier:**  3 — Advanced

**Description**: Battleship Game Engine (BGE) implements the classic turn-based board game as a package that’s separated from any presentation layer. This is a type of architectural pattern that useful in many application since it allows any number of apps to utilize the same service.

The BGE itself is invoked through a series of function calls rather than through directly coupled end-user actions. In this respect using the BGE is similar to using an API or a series of routes exposed by a web server.

This challenge requires that you develop the BGE and a very thin, text-based presentation layer for testing that’s separate from the engine itself. Due to this, the User Stories below are divided two sets — one for the BGE and one for the text-based presentation layer.

BGE is responsible for maintaining the game state.

#### User Stories

#### BGE

-   Caller can invoke a  `startGame()`  function to begin a 1-player game. This function will generate an 8x8 game board consisting of 3 ships having a width of one square and a length of:

1.  Destroyer: 2 squares
2.  Cruiser: 3 squares
3.  Battleship: 4 squares

`startGame()`  will randomly place these ships on the board in any direction and will return an array representing ship placement.

-   Caller can invoke a  `shoot()`  function passing the target row and column coordinates of the targeted cell on the game board.  `shoot()`  will return indicators representing if the shot resulted in a hit or miss, the number of ships left (i.e. not yet sunk), the ship placement array, and updated hits and misses array.

Cells in the hits and misses array will contain a space if they have yet to be targeted,  `O`  if they were targeted but no part of a ship was at that location, or  `X`if the cell was occupied by part of a ship.

#### Text-based Presentation Layer

-   User can see the hits and misses array displayed as a 2-dimensional character representation of the game board returned by the  `startGame()`  function.
-   User can be prompted to enter the coordinates of a target square on the game board.
-   User can see an updated hits and misses array display after taking a shot.
-   User can see a message after each shot indicating whether the shot resulted in a hit or miss.
-   User can see a congratulations message after the shot that sinks the last remaining ship.
-   User can be prompted to play again at the end of each game. Declining to play again stops the game.

#### Bonus features

#### BGE

-   Caller can specify the number of rows and columns in the game board as a parameter to the  `startGame()`  function.
-   Caller can invoke a  `gameStats()`  function that returns a Javascript object containing metrics for the current game. For example, the number of turns played, the current number of hits and misses, etc.
-   Caller can specify the number of players (1 or 2) when calling  `startGame()`which will generate one board for each player randomly populated with ships.

`shoot()`  will accept the player number the shot is being made for along with the coordinates of the shot. The data it returns will be for that player.

#### Text-based Presentation Layer

-   User can see the current game statics at any point by entering the phrase  `stats`in place of target coordinates. (Note that this requires the  `gameStats()`function in the BGE)
-   User can specify a two-player game is to be played, with each player alternating turns in the same terminal session (Note that this requires corresponding Bonus Features in the BGE)
-   User can see the player number in prompts associated with the inputs in each turn.
-   User can see both players board at the end of each turn.

#### Useful links and resources

-   [Battleship Game (Wikipedia)][29]
-   [Battleship Game Rules (Hasbro)][30]

#### Example projects

This YouTube video shows how a text-based  [Battleship Game][31]  is played.

The following example is provided as a demonstration of the Battleship game if it is unfamiliar to you. Remember you are to implement a text-based presentation layer for testing.  [Battleship Game by Chris Brody][32]

### 12\. Chat App

**Tier:**  3 — Advanced

**Description**: Real-time chat interface where multiple users can interact with each other by sending messages.

As an MVP(Minimum Viable Product) you can focus on building the Chat interface. Real-time functionality can be added later (the bonus features).

#### User Stories

-   User is prompted to enter a username when he visits the chat app. The username will be stored in the application
-   User can see an  `input field`  where he can type a new message
-   By pressing the  `enter`  key or by clicking on the  `send`  button the text will be displayed in the  `chat box`  alongside his username (e.g.  `John Doe: Hello World!`)

#### Bonus features

-   The messages will be visible to all the Users that are in the chat app (using WebSockets)
-   When a new User joins the chat, a message is displayed to all the existing Users
-   Messages are saved in a database
-   User can send images, videos, and links which will be displayed properly
-   User can select and send an emoji
-   Users can chat in private
-   Users can join  `channels`  on specific topics

#### Useful links and resources

-   [Socket.io][33]
-   [How to build a React.js chat app in 10 minutes — article][34]

#### Example project

[Chatty2][35]

### 13\. GitHub Timeline

**Tier:**  3 — Advanced

**Description**: API’s and graphical representation of information are hallmarks of modern web applications. GitHub Timeline combines the two to create a visual history of a users GitHub activity.

The goal of GitHub Timeline is to accept a GitHub user name and produce a timeline containing each repo and annotated with the repo names, the date they were created, and their descriptions. The timeline should be one that could be shared with a prospective employer. It should be easy to read and make effective use of color and typography.

Only public GitHub repos should be displayed.

#### User Stories

-   User can enter a GitHub user name
-   User can click a ‘Generate’ button to create and display the named user's repo timeline
-   User can see a warning message if the GitHub user name is not a valid GitHub user name.

#### Bonus features

-   User can see a summary of the number of repos tallied by the year they were created

#### Useful links and resources

GitHub offers two API’s you may use to access repo data. You may also choose to use an NPM package to access the GitHub API.

Documentation for the GitHub API can be found at:

-   [GitHub REST API V3][36]
-   [GitHub GraphQL API V4][37]

Sample code showing how to use the GitHub API’s are:

You can use this CURL command to see the JSON returned by the V3 REST API for your repos:

```bash
curl -u "user-id" https://api.github.com/users/user-id/repos
```

#### Example projects

### 14\. Spell-It

**Tier:**  3 — Advanced

**Description**: Knowing how to spell is a fundamental part of being fluent in any language. Whether you are a youngster learning how to spell or an individual learning a new language being able to practice helps to solidify your language skills.

The Spell-It app helps users practice their spelling by playing the audio recording of a word the user must then spell using the computer keyboard.

#### User Stories

-   User can click the ‘Play’ button to hear the word that’s to be entered
-   User can see letters displayed in the word input text box as they are entered on the keyboard
-   User can click the ‘Enter’ button to submit the word that has been typed in the word input text box
-   User can see a confirmation message when the correct word is typed
-   User can see a message requesting the word be typed again when it is spelled incorrectly
-   User can see a tally of the number of correct spellings, the total number of words attempted, and a percentage of successful entries.

#### Bonus features

-   User can hear a confirmation sound when the word is correctly spelled
-   User can hear a warning sound when the word is incorrectly spelled
-   User can click the ‘Hint’ button to highlight the incorrect letters in the word input text box
-   User can press the ‘Enter’ key on the keyboard to submit a typed word or click the ‘Enter’ button in the app window

#### Useful links and resources

-   [Texas Instruments Speak and Spell][38]
-   [Web Audio API][39]
-   [Click and Speak][40]

#### Example projects

[Word Wizard for iOS][41]

[Speak N Spell on Google Play][42]

### 15\. Survey App

**Tier:**  3 — Advanced

**Description**: Surveys are a valuable part of any developers toolbox. They are useful for getting feedback from your users on a variety of topics including application satisfaction, requirements, upcoming needs, issues, priorities, and just plain aggravations to name a few.

The Survey app gives you the opportunity to learn by developing a full-featured app that will you can add to your toolbox. It provides the ability to define a survey, allow users to respond within a predefined timeframe, and tabulate and present results.

Users of this app are divided into two distinct roles, each having different requirements:

-   _Survey Coordinators_  define and conduct surveys. This is an administrative function not available to normal users.
-   _Survey Respondents_  Complete surveys and view results. They have no administrative privileges within the app.

Commercial survey tools include distribution functionality that mass emails surveys to Survey Respondents. For simplicity, this app assumes that surveys open for responses will be accessed from the app’s web page.

#### User Stories

#### General

-   Survey Coordinators and Survey Respondents can define, conduct, and view surveys and survey results from a common website
-   Survey Coordinators can login to the app to access administrative functions, like defining a survey.

#### Defining a Survey

-   Survey Coordinator can define a survey containing 1–10 multiple choice questions.
-   Survey Coordinator can define 1–5 mutually exclusive selections to each question.
-   Survey Coordinator can enter a title for the survey.
-   Survey Coordinator can click a ‘Cancel’ button to return to the home page without saving the survey.
-   Survey Coordinator can click a ‘Save’ button to save a survey.

#### Conducting a Survey

-   Survey Coordinator can open a survey by selecting a survey from a list of previously defined surveys
-   Survey Coordinators can close a survey by selecting it from a list of open surveys
-   Survey Respondent can complete a survey by selecting it from a list of open surveys
-   Survey Respondent can select responses to survey questions by clicking on a checkbox
-   Survey Respondents can see that a previously selected response will automatically be unchecked if a different response is clicked.
-   Survey Respondents can click a ‘Cancel’ button to return to the home page without submitting the survey.
-   Survey Respondents can click a ‘Submit’ button submit their responses to the survey.
-   Survey Respondents can see an error message if ‘Submit’ is clicked, but not all questions have been responded to.

#### Viewing Survey Results

-   Survey Coordinators and Survey Respondents can select the survey to display from a list of closed surveys
-   Survey Coordinators and Survey Respondents can view survey results as in tabular format showing the number of responses for each of the possible selections to the questions.

#### Bonus features

-   Survey Respondents can create a unique account in the app
-   Survey Respondents can login to the app
-   Survey Respondents cannot complete the same survey more than once
-   Survey Coordinators and Survey Respondents can view graphical representations of survey results (e.g. pie, bar, column, etc. charts)

#### Useful links and resources

Libraries for building surveys:  [SurveyJS][43]

Some commercial survey services include:  [Survey Monkey][44]  and  [Typeform][45]

#### Example project

### _Contributing_

You are welcome to contribute to the project in the  [GitHub repository][46]! Any contribution is highly appreciated.

You can contribute in two ways:

1.  create an issue and tell us your idea. Make sure that you use the  **new idea**  label in this case;
2.  fork the project and submit a PR. Before doing that, please make sure that you read and follow the Contribution Guide (you can find it in the repository);

#### Add your own examples

You can also add your own examples to the projects after you have completed them. I highly encourage you to do this as it will show others what amazing things you have built! ?

### Spread the word!

If the information from this article and from the repo was useful to you in any way, make sure you give it a star ?, this way others can find it and benefit too! Together we can grow and make our community better!

Do you have any suggestions on how we could improve this project overall? Let us know! We’d love to hear your feedback!

#### Main Contributors ??

**Florin Pop**:  [Twitter][47]  and  [website][48].

**Jim Medlock**:  [Twitter][49]  and  [Medium][50]

### **Weekly Coding Challenge ?**

As a bonus, there’s a Weekly Coding Challenge where you can learn more by practicing your skills on real-world projects. Read  [The Complete Guide][51]  to find out how you can participate! ?

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
