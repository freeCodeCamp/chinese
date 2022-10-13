> -   原文地址：[Visual Studio Code Snippets – the Definitive VS Code Snippet Guide for Beginners](https://www.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)
> -   原文作者：Rob O'Leary
> -   译者：董凯
> -   校对者：

![Visual Studio Code Snippets – the Definitive VS Code Snippet Guide for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/harry-hd.png)

代码片段(Snippets)可以给你的编辑器添加些许魔力。它如同咒语一搬。说出指令（输入前缀），挥动魔杖（按下 `Enter` 或者 `Tab` 键），然后神奇的事情就发生在你眼前了。 ✨

现在大多数代码编辑器都支持了代码片段的功能。本文中我将使用如今最流行的代码编辑器 Visual Studio Code (VS Code) 来演示代码片段。

另外，有一些“文本扩展器”应用可以让你在所有应用中使用代码片段的功能。我会简要的介绍这一类应用是怎样给你带来更多的便利的。

接下来，让我们深入了解与代码片段的相关所有细节。

## 定义

> 一段代码片段就是通过输入命令或者触发文本向文档中插入的模板内容。

借助于代码片段，你可以创建常用的样板文件和常用的文本块。这样做的好处就是，你能够免于一次次重复的输入相同的内容。

## 为什么你需要使用代码片段?

希望下面这个事实不会给你带来困扰：互联网上有很多相互矛盾的观点！对于要不要使用代码片段，同样存在着完全相反的观点。但我认为那并不重要。

公平起见，我把两边的观点都展示在下方：

你没必要选择那一边支持或反对，你可以只接受那些你认为合理的观点。

### 支持方

-   代码片段可以提高生产效率，减少输入错误，减少按键次数。
-   代码片段让我们有了更多的空余时间去思考和设计自己关心的代码。
-   代码片段可以帮助你记住重要的内容。
-   把代码片段集成到现有工作流中，会明显减少使用鼠标的次数。成熟的代码片段拥有完整的逻辑链路，且使用 tab 键在逻辑点之间跳转，根据提示补充完所有需要的信息。或者随时中止，自己完成剩余信息的输入。不管哪种方式，一旦你完成，就意味着你准备好输入下一行的内容了。
    
### 反对方

-   我避免用代码片段，因为我不喜欢依赖任何现成的工具。
-   我从不使用代码片段，因为我宁愿将时间花在怎样避免重复上，而不是让重复变得更简单。
-   有些时候，离开了代码片段的帮助，我甚至不记得代码应该怎么写了。对于那些我已经熟透的内容，使用代码片段是OK的，但我不想在那些我还不熟悉的内容上使用代码片段。
-   网上的代码片段都有这样或那样的错误。我一直无法找到不存在浮点数错误的数值算法。我想，在网上是找不到不存在错误的代码片段的。

## 什么时候你需要使用代码片段?

唐纳德·克努斯（Donald Knuth）是计算机科学界的佼佼者之一，他说过：“过早的优化（代码）是万恶之源”。

我认为这句话对于代码片段也适用。代码片段是编写代码的优化。如果你不了解某种语言或者框架，就为它编写大量代码片段，那是相当不明智的。

不过当你觉得代码片段能带来效率和便捷的时候，那就是时候使用它了。

## 使用代码片段的目的

就我而言，我经常使用代码片段，而且是有选择的使用。我在我经常使用的 Markdown 和其它语言上，使用了大量的代码片段。

对于框架，我并没有使用很多代码片段。最近才开始在 Vue 上少量使用，大部分还是样板代码。不过随着我对 Vue 的掌握度的提升，我可能会使用更多的代码片段。

另外，在算法相关的代码上，我完全没有使用过代码片段。

## 代码片段的类型

可以根据代码片段和编辑器之间的交互范围进行分类。

#### 静态代码片段

即通过单个命令进行的简单的文本复制和粘贴。

#### 动态代码片段

动态代码片段意味着你可以定制一个逻辑链路，来帮助用户完成代码片段所需信息的填写。

它包括:

-   _Tab Stops_: 可以按顺序编号的 tab 键跳转的位置（tab stop）。
-   _Mirrored Tab Stops_: 有时，你需要在模板的多个位置中插入同样的值。你可以使用相同的序号标记 tab stop, 然后你在任意一处输入都会立即同步输入到其它相同序号的 tab stop 中。
-   _Placeholders_  : 拥有默认值的 tab stop 位置，当它获得焦点时你可以重写它的值。
-   _Choices_  : 拥有下拉列表的 tab stop 位置，你可以通过下拉列表选择它的值。
-   _Variables_: 来自环境变量中的值，比如: 选中的文字，系统日期，或者剪贴板中的内容。

下图是一个 markdown 中使用代码片段。它使用了 _tab stops_,  _placeholders_, 和 _choices_ 来帮助编辑已完成的任务。

![task](https://www.freecodecamp.org/news/content/images/2020/09/task.gif)

#### 宏代码片段

高级魔法拥有转变输入的能力，转变在这里意味着你可以在插入变量前改变它的值，或者重写了占位符后改变它的值。

比如，你可能想在输入类名过后，把它变成大写。

你能想到的所有用正则表达式进行的操作，现在基本上都是可能的。一些编辑器还提供了更多高级的脚本特性。

## VS Code 中的代码片段

在 VS Code 中，代码片段是 **智能** 出现的（`Ctrl+Space`  会显示一个建议列表），通常还和其它建议混在一起。

你可以通过命令 **'Insert Snippet' command** 来打开一个专门用于显示代码片段列表的选择器。它列出了当前文件语言的所有用户添加的，插件提供的，以及预设的代码片段。

![insert-snippet-list](https://www.freecodecamp.org/news/content/images/2020/09/insert-snippet-list.png)

[Emmet][1] 已集成到VS Code中，并且具有自己的CSS选择器启发式语法，可用于插入HTML和CSS代码段。

Emmet是独立的功能，但是机制和代码片段是一样的。你可以从片文章 [Emmet in Visual Studio Code guide][2] 里了解相关信息。

### 用户相关设置

如果你在设置里将当前使用的语言的 `editor.quickSuggestions` 设置为 true ，代码片段将以 **快速建议** 的形式出现。该设置针对大多数语言都默认开启，除了 markdown。

![quick-suggestions-js](https://www.freecodecamp.org/news/content/images/2020/09/quick-suggestions-js.png)

代码片段支持  **tab-completion** 。你可以输入一个代码片段的前缀（触发字符），再按下 `Tab` 就能输入完整的代码片段了。你可以在设置里设置 `editor.tabCompletion` 的值来打开该功能。

可选值:

-   `on`: 打开tab-completion 功能。
-   `off`: 关闭 tab-completion 功能，这是 _默认值_。
-   `onlySnippets`: 只对代码片段打开 tab-completion。

```json
"editor.tabCompletion": "onlySnippets",

```

如果你想控制代码片段的建议是如何显示的，你可以改变设置中 `editor.snippetSuggestions` 的值。

可选值:

-   `top`: 展示代码片段建议在其它建议之上，也是我正在使用的方式。
-   `bottom`: 展示代码片段建议在其它建议之下。
-   `inline`: 和其他建议一起显示，这是 _默认值_ 。
-   `none`: 不显示代码片段的建议。

```json
"editor.snippetSuggestions": "top",

```

以上是代码片段相关的重要设置，其他一些设置，你可以在[默认设置列表][3]里查看，或在打开“设置”界面进行查看。

### 有内置的代码片段么?

Yes!

但是，VS Code 的文档中并没有提及。而且在 VS Code 中也没有专门的区域介绍它们。所以，你可能并不是很了解有哪些内置的代码片段。

那么，怎么才能找出你使用的语言的的所有内置的代码片段呢？

简单说，我对上面的情况表示不满，所以我写了一个 VS Code 插件 [**Snippets Ranger**][4]，提供了一个漂亮的UI界面来展示所有的内置代码片段。Think of it as a  _Marauder's Map_  for snippets!

![snippets-ranger](https://www.freecodecamp.org/news/content/images/2020/09/snippets-ranger.png)

#### 如果我想自己找到这些代码片段呢?

当然可以，不过要多花费一些时间和精力。

上面提到过， **'Insert Snippet' command** 会显示一个选择器，展示当前语言的所有代码片段。 

如果你想搞清楚某种语言是否有内置的代码片段，你应该打开一个该语言的文件，然后输入这个命令来查看。不过请记住，那是一个合集，包括用户的，插件的，内置的代码片段。

如果你安装了相关语言的代码片段插件，可能很难分清楚谁是内置的，谁是插件提供的，不过你可以暂时关闭插件，剩下的就是内置的了。

如果你想自己查看代码片段的源文件，Windows 下路径是 ：`«app root»\resources\app\extensions\«language»\snippets\«language».code-snippets`。Mac 和 Linux 下路径与此相似。

### 代码片段插件

Visual Studio 市场 有专门的 [snippets category][5] 分类，你可以在这查找你所需要的。

此外还有许多程序语言包扩展，自带了代码片段（Python, C#, Go, Java, and C/C++ ...）。

### 自己如何写代码片段?

代码片段文件是 JSON 格式的。 如果你想，你还可以添加C语言风格的注释（技术上讲，它是微软的"JSONC"格式）。 

你可以创建针对不同作用域的代码片段：全局的，工作区的，以及针对特定语言类型的。

执行 **'Preferences: Configure User Snippets' command** 来创建代码片段的文件，它会打开一个下图这样的对话框。选择任意一个都会打开一个新文件进行编辑。

![user snippets](https://www.freecodecamp.org/news/content/images/2020/09/user-snippets.png)

如果你更喜欢使用GUI界面来编写代码片段，你可以尝试以这个 [snippet generator web app][6] 网站。

![snippet generator](https://www.freecodecamp.org/news/content/images/2020/09/snippet-generator.png)

我们先看一个例子来熟悉下语法。

#### Example

这是一个 VS Code 中 markdown 代码片段。

```json
{
    "Insert heading level 1": {
       "prefix": "heading1",
       "body": ["# ${1:${TM_SELECTED_TEXT}}$0"],
       "description" : "Insert heading level 1"
    }
}

```

这个代码片段插入一个一级标题，内容是当前选中的文字（如果有选中的话）。

一个代码片段拥有下列属性：

1.  "Insert heading level 1" 是代码片段的名字。如果没有 `description`，它就会出现在智能建议的列表里。
2.  `prefix`属性定义了代码片段的触发文本。它可以是一个字符串或者一个字符串数组（如果你想有多个触发文本）。前缀的子字符串同样可以触发，在我们的例子里，输入"h1"一样能匹配到我们的代码片段。
3.  `body`属性代表了要插入编辑器的内容。它是一个字符串数组，可能一行或者多行。在插入之前会被合并成一段。
4.  `description`属性提供了代码片段的更多描述。它是可选的。
5.  `scope`属性允许你指定特定的语言类型，你可以使用逗号来分割多种语言。它也是可选的。当然，对于特定于语言的代码片段文件来说是多余的。

该代码片段的内容具有2个 tab stop ，并使用了`$ {TM_SELECTED_TEXT}`变量。

接下来，让我们详细了解语法相关的细节。

#### 代码片段语法

VS Code 的代码片段语法和 [TextMate snippet syntax][7] 是相同的。然而，它不支持'interpolated shell code'和 `\u` 转换。

代码片段的`body`属性支持以下特性：

#### 1\. Tab Stops

Tab stops由 **$** 和 **序号** 组成，像 `$1`。`$1`代表了第一个位置，`$2`代表了第二个位置，以此类推。`$0`代表退出代码片段，以及最后光标停留的位置，

看一个例子，我们希望写一个 _div_ 的代码片段。它的第一个 tab stop 在标签内，同时希望用户按下 tab 的时候能退出代码片段，并让光标停留在标签外。

看起来就像下面这样:

```json
{
    "Insert div": {
        prefix: "div",
        body: ["<div>","$1","</div>", "$0"]
    }
}

```

#### 2\. Mirrored Tab Stops

有时候你想在插入的模板中的多个位置输入相同的值。这种时候你可以使用相同序号的 tab stops 来标识这几个位置，当你编辑其中一个的时候，就会自动同步输入的值到其它位置。

一个典型的例子就是 _for_ 循环中的 _index_ 变量会被多次使用，下面是一个JavaScript中的 _for_ 循环代码片段。

```json
{
    "For Loop": {
        "prefix": "for",
        "body": [
            "for (let ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
            "\tconst ${3:element} = ${2:array}[${1:index}];",
            "\t$0",
            "}"
        ]
    }
}

```

#### 3\. Placeholders

Placeholders 是有默认值的 tab stop 。他们一般被大括号包裹着，就像 `${1:default}` 。占位符的内容是默认被选中的，所以你可以很容易的修改它。占位符支持嵌套，像这样 `${1:first ${2:second}}`。

#### 4\. Choices

Choices 代表着这个 tab stop 会默认有一个列表展示给用户选择。Choices 的可选值的写法是用逗号分割的字符串，并且由两个竖线（|）包裹。就像 `${1|yes,no|}` 。

下面是前面显示的用于插入任务列表的 markdown 代码片段。choices 可选值是 'x' 或者 空格。

```json
{
  "Insert task list": {
    "prefix": "task",
    "body": ["- [${1| ,x|}] ${2:text}", "${0}"]
}

```

#### 5\. Variables

VS Code 提供了大量变量供你使用。你可以简单的在变量名前加上 $ ,就可以引用他们了。 像这样 `$TM_SELECTED_TEXT`。

比如，下面这个代码片段，会为任意语言创建一个带有今天日期的注释块。

```json
{
    "Insert block comment with date": {
        prefix: "date comment",
        body: ["${BLOCK_COMMENT_START}",
               "${CURRENT_YEAR}/${CURRENT_MONTH}/${CURRENT_DATE} ${1}",
               "${BLOCK_COMMENT_END}"]
    }
}

```

你可以为变量指定一个默认值，像这样 `${TM_SELECTED_TEXT:default}` 。当该变量没有被赋值时，就会被插入默认值或者空字符串。

如果你不小心写错了变量名，写错的变量名会被当成 placeholder 使用。

下面是一些属于工作区的变量:

-   `TM_SELECTED_TEXT`: 当前选中的文字或者空字符串,
-   `TM_CURRENT_LINE`: 当前行的文字,
-   `TM_CURRENT_WORD`: 光标下的单词或者空字符串,
-   `TM_LINE_INDEX`: 以0为第一行的当前行序号,
-   `TM_LINE_NUMBER`: 以1为第一行的当前行序号,
-   `TM_FILENAME`: 当前文档的文件名,
-   `TM_FILENAME_BASE`: 当前文档的文件名，不带扩展名,
-   `TM_DIRECTORY`: 当前文档所在的文件夹,
-   `TM_FILEPATH`: 当前文件的绝对路径,
-   `CLIPBOARD`: 当前剪贴板的内容,
-   `WORKSPACE_NAME`: 当前打开的工作区或者文件夹的名字.

下面是一些与时间相关的变量:

-   `CURRENT_YEAR`: 当前年份,
-   `CURRENT_YEAR_SHORT`: 当前年份的缩写，即最后两位数字,
-   `CURRENT_MONTH`: 当前月份，两位数字表示(例如 '07'),
-   `CURRENT_MONTH_NAME`: 当前月份名字(例如 'July'),
-   `CURRENT_MONTH_NAME_SHORT`: 当前月份名字缩写(例如 'Jul'),
-   `CURRENT_DATE`: 当前月份中的日期,
-   `CURRENT_DAY_NAME`: 当前日期的名字 (例如 'Monday'),
-   `CURRENT_DAY_NAME_SHORT`: 当前日期的名字缩写 (例如 'Mon'),
-   `CURRENT_HOUR`: 当前的时间（小时）以24小时制展示,
-   `CURRENT_MINUTE`: 当前分钟数,
-   `CURRENT_SECOND`: 当前秒数,
-   `CURRENT_SECONDS_UNIX`: 从UNIX起的秒数（时间戳）.

下面是一些关于注释的变量，在不同的语言下会出现不同的注释字符串:

-   `BLOCK_COMMENT_START`: 例如,  `<!--`  在HTML中,
-   `BLOCK_COMMENT_END`: 例如 ,  `-->`  在HTML中,
-   `LINE_COMMENT`: 例如,  `//`  在JavaScript中.

#### 6\. Transformations

转换一般运用于 variable 或者 placeholder 。如果你熟悉正则表达式（regex），你会发现这很相似。

转换的语法像下面这样：`${«variable or placeholder»/«regex»/«replacement string»/«flags»}`。它很像JavaScript中的 [String.protoype.replace()][8] 。其中参数的作用如下:

-   `«regex»`: 这是一个与变量或占位符的值匹配的正则表达式。支持JavaScript regex语法。
-   `«replacement string»`: 这是用来替换匹配到的内容的字符串。它可以引用`«regex»`中的捕获组，执行大小写的格式化（使用特殊的标记函数：`/upcase`, `/downcase`, 和 `/capitalize`），以及执行条件插入。查看 [TextMate Replacement String Syntax][9] 了解更多信息。
-   `«flags»`: Flags是传递给正则表达式使用的。可以使用 [JavaScript regex flags][10] 中的标志:
    -   `g`  : 全局搜索,
    -   `i`  : 大小写敏感,
    -   `m`  : 多行搜索,
    -   `s`  : 允许 `.` 匹配新行的字符,
    -   `u`  : Unicode. Treat the pattern as a sequence of Unicode code points,
    -   `y`  : Perform a "sticky" search that matches starting at the current position in the target string.

可以使用 `$n` 引用捕获组，其中 `n` 代表第几个捕获组的值。使用 `$0` 代表整个匹配内容。

因为它的语法和 tab stops 的语法相同，所以可能会造成混淆。不过你只需要记住，如果它是被包括在正斜杠（/）之中的，它就是指向捕获组的。

我们需要多看一些例子，来彻底搞清楚这个语法。

| SNIPPET  _BODY_ | INPUT | OUTPUT | EXPLANATION |
| --- | --- | --- | --- |
| `["${TM_SELECTED_TEXT/^.+$/• $0/gm}"]` | line1 <br/> line2 | • line1 <br/> • line2 | 在你选中的非空行前面添加一个无序序号（•）。 |
| `["${TM_SELECTED_TEXT/^(\\w+)/${1:/capitalize}/}"]` | the cat is on the mat. | The cat is on the mat. | 把你选中的文字首个单词的首字母大写。 |
| `["${TM_FILENAME/.*/${0:/upcase}/}"]` | example.js | EXAMPLE.JS | 以大写的方式插入当前文件的名字。 |
| `[` <br/>`"[",` <br/>`"${CLIPBOARD/^(.+)$/'$1',/gm}",` <br/>`"]"` <br/>`]` | line1 <br/> line2 | \['line1','line2',\] | 将剪贴板的内容转换为一个字符串数组，每一个非空行都会转换为数组中的一个元素。 |

如你所见，上方第二个例子，正则中的元字符必须被转义，比如例子中匹配一个单词你必须写成 `\\w`。

#### Placeholder Transformations

**Placeholder 转换不能使用默认值或者选项值**! 或许称它为 tab stop transformations 更为合适。

下面的例子会把第一个 tab stop 输入的内容大写。

![placeholder transform](https://www.freecodecamp.org/news/content/images/2020/09/placeholder-transform.gif)

```json
{
  "Uppercase first tab stop": {
    "prefix": "up",
    "body": ["${1/.*/${0:/upcase}/}", "$0"]
  }
}

```
有一个令人困惑的特性，当你在第一个tab stop上设置了placeholder，但却在它的镜像tab stop上运用了转换，转换会发生在第一个tab stop上么？不会！

你会选择使用这个特性嘛？我最开始对这个特性感到十分困惑，所以我觉得你们也可能会。下面时具体的例子：

```json
{
  "Uppercase second tab stop instance only": {
    "prefix": "up",
    "body": ["${1:title}", "${1/(.*)/${1:/upcase}/}", "$0"]
  }
}

```

### 如何为代码片段绑定快捷键?

你可以通过向 `keybindings.json` 加入你的快捷键。这个文件可以通过这个命令 **'Preferences: Open Keyboard Shortcuts File (JSON)'** 打开。

比如，为 markdown的 代码片段 "Insert heading level 1" 绑定一个快捷键：

```json
{
    "key": "ctrl+m ctrl+1",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus && editorLangId == markdown",
    "args": {
        "langId": "markdown",
        "name": "Insert heading level 1"
    }
}

```

你可以定义你的快捷键组合，指定命令的ID，以及可选的 [when clause context][11] 来指定什么时候这个快捷键是可用的。

通过 `args` 对象，你可以通过 `langId` 和 `name` 指定目标代码片段。其中 `langId` 参数是目标代码片段所属的语言ID [language ID][12] ，参数 `name` 是你编写代码片段时指定的名字。

如果你想，你也可以使用 `snippet` 属性指定行内的代码片段。

```json
[
  {
    "key": "ctrl+k 1",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "${BLOCK_COMMENT_START}${CURRENT_YEAR}/${CURRENT_MONTH}/${CURRENT_DATE} ${1} ${BLOCK_COMMENT_END}"
    }
  }
]

```

你也可以使用  _Keyboard Shortcuts UI_ 来编辑快捷键，但是它不具备添加新的快捷键的能力。  

使用UI的另一个缺点是，他不会显示 `args` 对象，这会让你查找或者编辑自定义快捷键时更加费劲。

![shortcuts-ui](https://www.freecodecamp.org/news/content/images/2020/09/shortcuts-ui.png)

## 风格问题

编写代码片段的人总是喜欢用缩写前缀，这可能让刚开始接触代码片段的人感到反感。我必须要学习一大堆乱七八糟的缩写词，才能使用其他人的代码片段？

缩写前缀是什么意思？下表列出了 [JavaScript（ES6）snippets] [13] VS Code 扩展中的一些代码段。其中 _Trigger_ 列中的就是前缀缩写，例如 _fre_ 代表 "for each" 循环。

![es6 snippets excerpt](https://www.freecodecamp.org/news/content/images/2020/09/es6-snippets-excerpt.png)

这在两个方面都是不必要的。

第一点，VS Code 提供的快速建议功能包含了 **模糊字符串搜索** 功能。如果你输入 "fe" 且代码片段的前缀是 "foreach"，这就能够被快速建议匹配到。

你可以从下图看到，"foreach" 是第二个匹配项。

![fe quick suggestion](https://www.freecodecamp.org/news/content/images/2020/09/fe-quick-suggestion.png)

第一个匹配项是 _fre_ , 属于某个扩展的代码片段。你觉得哪一个更具描述性？？

如果你使用 "Insert Snippet" 命令来插入代码片段，描述性上就不会有太大的区别了。因为列表中的描述字段对这个缺点做了补充，你可以通过描述文字来了解代码片段的能力。我自己不使用这种方式插入代码片段，所以我更喜欢一个更具描述性的前缀。

![insert snippet foreach](https://www.freecodecamp.org/news/content/images/2020/09/insertsnippet-foreach.png)

第二点， _fre_ 与内置的代码片段 _foreach_  **重复** 了。

一些人可能把快速建议的功能关闭了，只使用tab键来触发代码片段。这种情况下你需要在没有提示的情况下输入前缀。这些人可能更喜欢使用缩写前缀来减少按键的次数。

然而这种方式，同样使用了模糊搜索，所以你按下 tab 键的时候，代表你默认选择了第一个匹配项。

![snippet-tab-completion](https://www.freecodecamp.org/news/content/images/2020/09/snippet-tab-completion.gif)

观察上面这个例子，你可以看见输入 "fr" 时， 按下 _tab_ 键插入了 _fre_ 代码片段。输入 "fore" 时，插入了 _foreach_ 代码片段。

因此，如果你想的话，你可以不输入完整的前缀！？但是想象一下，在某种语言下，拥有大量相似前缀的代码片段，你只输入前缀缩写是多么不切实际的。

更实际的做法是，选择合适的前缀，在按下tab键之前，完整的把它们打出来。

以上观点，可能根据你个人存在某些取舍。

就我而言，我更喜欢使用快速建议功能，因为它有视觉反馈。我通常把代码片段的建议设置在列表最上面，这样我就能看着列表输入缩写前缀，而不是去记住他们。

Some snippet authors have rigid patterns to overcome this, but that's just something I can't get into easily.

可能一些代码片段的作者有严格的模式去克服这个问题，但我并不能很容易的去接受它。

如果你针对某种语言使用了大量的代码片段，你很可能会选择那些风格相似的代码片段使用（意味着很可能缩写前缀是十分相似的）。

如果你在同种语言的不同框架或者库中使用代码片段，它们的代码片段可能会出现交叉，重叠的情况。我不需要处理这种情况，但如果你使用缩写前缀，最终可能需要处理这些冲突。

## 全局的代码片段

在代码编辑器之外，你也能享受代码片段带来的好处。让每个应用提供代码片段的能力，带来了更多可能。

常用的场景如下：

-   邮件的固定回复头信息,
-   自动纠正常见的错误单词,
-   在文档中添加联系信息或者签名,
-   插入日期,
-   格式化选中的文字或者粘贴文字,
-   为你的搜索引擎或者应用加入常见的搜索词组,
-   在邮件客户端中使用HTML的代码片段,
-   向文档添加不同的模板.

大多数针对代码片段的应用都称自己为 “文本扩展器” ，但是还是有很多用于任务管理或者生产力的应用同样包含了代码片段的功能。

全局代码片段相比代码编辑器的代码片段，**有更多的限制** ，你不能使用 tab stops 和 plaecholders。大多数应用能使用的是一些动态变量，比如有关日期的变量。

### App Review

#### Autohotkey (Windows)

[AutoHotkey][14]  是一个 **Windows下的免费，开源的脚本语言** ，用于执行所有类型任务.

它拥有自己专属语法。你可以在 VS Code 中安装 [AutoHotKey extension][15] ，来获得更好的编辑体验。 

你可以使用如下形式：`::<<prefix>>::<<text to insert>>` ，来定义触发代码片段插入的前缀。下面的脚本会插入 Rob's email 地址，当你输入了 "robmail" 后，并按下 _space_ 或者 _tab_ 或者 _enter_。

```
::robmail::rob@someservername.com

```

下面这个片段会插入 "This is the snippet text" 这段内容，当你按下 `Ctrl+D`。 

```
^d::  Send This is the snippet text

```

你可以阅读文档 [docs][16] 了解更多。

#### PhraseExpress (Windows, Mac, iOS)

[PhraseExpress][17] 是一个文本扩展器应用，它管理常用文本模板，并可以插入任何程序。

这是一个 **基于GUI的免费增值应用**。它比 _AutoHotKey_ 的受众更广泛。

他十分简洁和易于使用。你可以设置它为启动时运行，他就会在后台被激活。

你可以用文件夹组织和管理你的代码片段，也可以用云服务进行保存或者同步。

![phrase-express](https://www.freecodecamp.org/news/content/images/2020/09/phrase-express.png)

#### Espanso (Windows, Mac, Linux)

这是一个 **用Rust写的开源，跨平台的文本扩展器应用**。

它采用了 **基于文件配置的方法**，配置文件采用了 [YAML][18] 语法。

默认配置文件  `default.yml` ，包括了主要的配置。 下面的配置会输入 Rob's email ，当你输入"robmail"时。

```yaml
matches:
 - trigger: ":robmail"
   replace: "rob@someservername.com"

```

你可以 **指定初始的光标位置**，然而你并不能定义 tab stops。

你可以 **添加扩展** 来增强 Espanso 的能力。有大量扩展提供了其它能力，包括日期，生成随机文本以及插入剪贴板数据。

这就是所有了！我希望你今天能有所收获，而且可以使用代码片段让你变得更具生产力。

[1]: https://www.emmet.io/
[2]: https://code.visualstudio.com/docs/editor/emmet
[3]: https://code.visualstudio.com/docs/getstarted/settings#_default-settings
[4]: https://marketplace.visualstudio.com/items?itemName=robole.snippets-ranger
[5]: https://marketplace.visualstudio.com/search?target=VSCode&category=Snippets&sortBy=Installs
[6]: https://snippet-generator.app/
[7]: https://manual.macromates.com/en/snippets
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[9]: https://macromates.com/manual/en/regular_expressions#replacement_string_syntax_format_strings
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2
[11]: https://code.visualstudio.com/docs/getstarted/keybindings#_when-clause-contexts
[12]: https://code.visualstudio.com/docs/languages/identifiers#_known-language-identifiers
[13]: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
[14]: https://www.autohotkey.com/
[15]: https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-autohotkey
[16]: https://www.autohotkey.com/docs/AutoHotkey.htm
[17]: https://www.phraseexpress.com/
[18]: https://en.wikipedia.org/wiki/YAML
