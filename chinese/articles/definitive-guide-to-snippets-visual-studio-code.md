> -   原文地址：[Visual Studio Code Snippets – the Definitive VS Code Snippet Guide for Beginners](https://www.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)
> -   原文作者：Rob O'Leary
> -   译者：董凯
> -   校对者：

![Visual Studio Code Snippets – the Definitive VS Code Snippet Guide for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/harry-hd.png)

代码片段(Snippets)可以给你的编辑器添加些许魔力。它就如咒语一样。说出指令（输入前缀），挥动魔杖（按下 `Enter` 或者 `Tab` 键），然后神奇的事情马上就发生在你眼前了。 ✨

现在大多数代码编辑器都支持开箱即用的代码段。我将用来展示代码片段的代码编辑器是如今最流行的代码编辑器 Visual Studio Code(VS Code)。

Also, there are some "text expander" apps that allow you to use snippets globally (across all apps). I will briefly cover how you can utilise these apps to get even more out of snippets.

另外，有一些“文本扩展器”应用可以让你在全局（所有应用中）使用代码片段。我会简要的介绍如何使用这类应用来获取更多的代码片段。

接下来，让我们深入了解与代码片段的相关所有事情。 ？

## 定义

> 一个代码片段就是一份可以插入到文档中的模板。它通常通过输入命令或者一些触发文本插入。

使用代码片段，您可以创建样板文件，并插入常用的文本块。好处是让您能够免于一次又一次地输入完全相同的内容。 ？

## 为什么你需要使用代码片段?

我并不想以这种说法吓到你：互联网上有很多相互矛盾的观点！这种说法同样适用于是否需要使用代码片段这件事，有人赞成，有人反对。但是我并不认为这是一个让人血压升高的话题。

For the sake of balance, I will present a cross-section of those opinions here.

公平起见，我会在这称述两边的观点。

You don't have to pick a camp and be all-for or all-against snippets. I suggest you adopt them to a degree that serves you best.

你完全没有必要在这些完全相反的观点里站队，你可以根据你自己的喜好在一定程度上接受它。

### 支持?

-   代码片段可以提高生产效率，减少输入错误，以及减少按键的次数。
-   代码片段让我有更多的时间思考和设计自己在意和关注的代码。
-   代码片段可以帮助你记住重要的内容。
-   把代码片段集成到你的现有工作流中，会明显减少你使用鼠标的次数。成熟的代码片段提供了一个完整的逻辑链路，你可以使用 tab 键来进行跳转，填写完所有代码片段提示需要的信息。或者停下来，自己完成剩余逻辑的编写。不管怎样，一旦你完成，就意味着你可以开始编写下一行的代码了。
    
### 反对?

-   我不使用它们，因为我不喜欢依赖任何即成的工具。
-   我从不使用代码片段，我宁愿将时间花在避免重复上，而不是让它变得更容易。
-   我发现有些时候，在没有代码片段的情况下，我忘记代码应该怎么写了。对于我已经烂熟于心的内容，使用代码片段是OK的，但我不想因此忘记了其它内容。
-   大多数情况下，我在网上找到的代码片段都存在错误。我曾经几乎无法找到不存在浮点数错误的数值算法。我无法想象有任何资源可以提供完全干净的代码片段。


## 什么时候你需要使用代码片段?

唐纳德·克努斯（Donald Knuth）是计算机科学界的佼佼者之一，他说：“过早的优化（代码）是万恶之源”。

我认为这句话对于代码片段也适用。代码片段是代码生产的优化。如果你不了解某种语言或者框架，就为它实现大量代码片段，那就像不成熟的举动。

但是当你觉得代码片段带了便利和舒适，那就使用它吧！

## 使用代码片段的目的

个人而言，我经常使用代码片段，而且是理智的使用。我在 Markdown 和我经常使用的其它语言上，使用了大量的代码片段。

我并没有在框架上使用很多代码片段。最近才开始在 Vue 中使用一些，而且都是样板代码。随着我的 Vue 熟练度的提升，我可能会使用更多的代码片段。

我并没有在算法上使用代码片段。

## 代码片段的类型

可以根据代码片段和编辑器之间的交互作用范围对片段进行分类。

#### 静态代码片段

您可以将其视为通过单个命令进行的文本的复制和粘贴。

#### 动态代码片段

可以自定义动态代码段，以为完成代码片段提供类似向导的体验。

它包括:

-   _Tab Stops_: 你可以按顺序编号 tab 跳转的位置（tab stop）。
-   _Mirrored Tab Stops_: 有时，你需要在文本的多个位置中插入相同的值。 你可以使用相同的序号标记 tab stop, 编辑一处都会立即反映其它相同序号的 tab stop 中。
-   _Placeholders_  : 有默认值的 tab stop 位置，当获得焦点时你可以重写它。
-   _Choices_  : 有下拉列表的 tab stop 位置，你可以通过下拉列表选择它的值。
-   _Variables_: 来自环境变量中的值，比如: 选中的文字， 系统日期，或者剪贴板中的内容。


Here is an example of a markdown snippet which adds a task list with 2 tasks. It uses  _tab stops_,  _placeholders_, and  _choices_  for checking a task.

下图是一个例子，在 markdown 中使用代码片段。它使用了 _tab stops_,  _placeholders_, and  _choices_ 。

![task](https://www.freecodecamp.org/news/content/images/2020/09/task.gif)

#### 宏代码片段

顶级巫术拥有转变输入的能力，转变意味着你可以改变一个变量的值在插入它之前，或者在你编辑之后改变占位符的值。

例如，你可能想在输入类名过后，把它大写。

你可能首先想到使用正则，那是可行的。此外，某些编辑器还提供了更高级的脚本能力。

## VS Code 中的代码片段

In VS Code, snippets appear in  **IntelliSense**  (`Ctrl+Space`  gives you a suggestion list), they are mixed in with other suggestions.

在 VS Code 中，代码片段是 **智能** 出现的（`Ctrl+Space`  会显示一个建议列表），通常还和其它建议混在一起。

你可以通过命令 **'Insert Snippet' command** 来浏览所有可用的代码片段并选择一个。它列出了当前文件语言的所有用户添加的，插件提供的，以及预设的代码片段。

![insert-snippet-list](https://www.freecodecamp.org/news/content/images/2020/09/insert-snippet-list.png)

[Emmet][1]  已集成到VS Code中，并且具有自己的CSS选择器启发式语法，可用于插入HTML和CSS代码段。

Emmet is it's own thing really, but the mechanics are the same. You can learn about Emmet with the  [Emmet in Visual Studio Code guide][2].

### 用户相关设置

如果你在设置里将当前使用的语言的 `editor.quickSuggestions` 设置为 true ，代码片段将以**快速建议**的形式出现。该设置针对大多数语言都默认开启，除了 markdown。

![quick-suggestions-js](https://www.freecodecamp.org/news/content/images/2020/09/quick-suggestions-js.png)

代码片段支持  **tab-completion** 。你可以输入一个代码片段的前缀（触发字符），再按下 `Tab` 就能输入完整的代码片段了。你可以在设置里设置 `editor.tabCompletion` 的值来打开该功能。

可选值:

-   `on`: 打开tab-completion 功能。
-   `off`: 关闭 tab-completion 功能，这是_默认值_。
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

以上是代码片段相关的重要设置，但还有其他一些设置。您可以查看此[默认设置列表][3] 浏览更多，或在“设置”界面中浏览。

### 有预设的代码片段么?

Yes!

但是，他们没有出现在 VS Code 的文档中。而且在 VS Code 中也没有一个专门的地方介绍它们。所以，你可能对内置的代码片段了解的并不多。

那么，怎么才能找出当前语言的所有内置的代码片段呢？

长话短说，我对上面的情况不满，所以我写了一个 VS Code 插件 [**Snippets Ranger**][4]，提供了一个漂亮的UI界面来展示所有的内置代码片段。Think of it as a  _Marauder's Map_  for snippets!

![snippets-ranger](https://www.freecodecamp.org/news/content/images/2020/09/snippets-ranger.png)

#### 但是我就想自己找到这些代码片段呢?

你当然可以，不过要多花费一些精力。

上面提到过， **'Insert Snippet' command** 会显示你当前语言的所有代码片段。 

不过请记住，那是一个合集，包括用户的，插件的，内置的。如果你想搞清楚某种语言是否有内置的代码片段，你需要打开一个该语言的文件，然后输入这个命令来查看。

如果你安装了相关语言的代码片段插件，可能很难分清楚谁是内置的，谁是插件提供的，所以你可以暂时关闭插件，剩下的就是内置的了。

如果你想自己查看代码片段的源文件，Windows 下路径是 ：`«app root»\resources\app\extensions\«language»\snippets\«language».code-snippets`。Mac 和 Linux 下路径相似。

### 代码片段插件

Visual Studio 市场 有专门的 [snippets category][5] 分类，你可以在这查找你所需要的。

此外还有许多程序语言包扩展，自带了代码片段（Python, C#, Go, Java, and C/C++ ...）。

### 自己如何写代码片段?

代码片段文件是 JSON 格式的。 如果你想，你还可以添加C语言风格的注释（技术上讲，它是微软的"JSONC"格式）。 

你可以创建不同作用域的代码片段：全局的，工作区的，以及针对特定语言类型的。

执行 **'Preferences: Configure User Snippets' command** 来创建代码片段的文件，它会打开一个下图这样的对话框。选择任意一个都会打开一个新文件进行编辑。

![user snippets](https://www.freecodecamp.org/news/content/images/2020/09/user-snippets.png)

如果你更喜欢使用GUI界面来编写代码片段，你可以尝试以下 [snippet generator web app][6]。

![snippet generator](https://www.freecodecamp.org/news/content/images/2020/09/snippet-generator.png)

我们看一个例子来熟悉下语法。

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

接下来，让我们详细了解下语法相关的细节。

#### 代码片段语法

VS Code 的代码片段语法和 [TextMate snippet syntax][7] 是相同的。然而，它不支持'interpolated shell code'和 `\u` 转换。

代码片段的`body`属性支持以下特性：

#### 1\. Tab Stops

Tab stops由 **$** 和 **序号** 组成，就像 `$1`。`$1`代表了第一个位置，`$2`代表了第二个位置，以此类推。`$0`代表退出代码片段，以及最后光标停留的位置，

举个例子，我们希望写一个 _div_ 的代码片段。它的第一个 tab stop 在标签内，同时希望用户按下 tab 的时候能退出代码片段，并让光标停留在标签外。

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

有时候你想在插入的内容中的几个地方输入相同的值。这种时候你可以使用相同序号的 tab stops 来标识这几个地方，当你编辑其中一个的时候，就会自动同步输入的值到其它地方。

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

占位符是有默认值的 tab stops。他们一般被大括号包裹着，就像 `${1:default}` 。占位符的内容是默认被选中的，所以你可以很容易的修改它。占位符支持嵌套，像这样 `${1:first ${2:second}}`。

#### 4\. Choices

Choices 代表着这个 tab stop 会默认有一个列表展示给用户选择。Choices 的可选值的写法是用逗号分割的字符串，并且由两个竖线（|）包裹。就像 `${1|yes,no|}` 。

下面是前面显示的用于插入任务列表的markdown示例的代码。choices “x”或者空格。

```json
{
  "Insert task list": {
    "prefix": "task",
    "body": ["- [${1| ,x|}] ${2:text}", "${0}"]
}

```

#### 5\. Variables

VScode许多变量供你使用。你可以简单的在变量名前加上 $ ,就可以使用他们了。 像这样 `$TM_SELECTED_TEXT`。

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

如果你想，你可以为变量指定一个默认值，像这样 `${TM_SELECTED_TEXT:default}` 。如果该变量没有被赋值，默认值或者空字符串就会被插入。

如果你不小心写错了变量名，写错的变量名会被当成 placeholder 使用。


下面是一些属于工作区的变量:

-   `TM_SELECTED_TEXT`: The currently selected text or the empty string,
-   `TM_CURRENT_LINE`: The contents of the current line,
-   `TM_CURRENT_WORD`: The contents of the word under cursor or the empty string,
-   `TM_LINE_INDEX`: The zero-index based line number,
-   `TM_LINE_NUMBER`: The one-index based line number,
-   `TM_FILENAME`: The filename of the current document,
-   `TM_FILENAME_BASE`: The filename of the current document without its extensions,
-   `TM_DIRECTORY`: The directory of the current document,
-   `TM_FILEPATH`: The full file path of the current document,
-   `CLIPBOARD`: The contents of your clipboard,
-   `WORKSPACE_NAME`: The name of the opened workspace or folder.

The following time-related variables can be used:

-   `CURRENT_YEAR`: The current year,
-   `CURRENT_YEAR_SHORT`: The current year's last two digits,
-   `CURRENT_MONTH`: The month as two digits (example '07'),
-   `CURRENT_MONTH_NAME`: The full name of the month (example 'July'),
-   `CURRENT_MONTH_NAME_SHORT`: The short name of the month (example 'Jul'),
-   `CURRENT_DATE`: The day of the month,
-   `CURRENT_DAY_NAME`: The name of day (example 'Monday'),
-   `CURRENT_DAY_NAME_SHORT`: The short name of the day (example 'Mon'),
-   `CURRENT_HOUR`: The current hour in 24-hour clock format,
-   `CURRENT_MINUTE`: The current minute,
-   `CURRENT_SECOND`: The current second,
-   `CURRENT_SECONDS_UNIX`: The number of seconds since the Unix epoch.

The following comment variables can be used. They honour the syntax of the document's language:

-   `BLOCK_COMMENT_START`: For example,  `<!--`  in HTML,
-   `BLOCK_COMMENT_END`: For example ,  `-->`  in HTML,
-   `LINE_COMMENT`: For example,  `//`  in JavaScript.

#### 6\. Transformations

Transformations can be applied to a variable or a placeholder. If you are familiar with regular expressions (regex), most of this should be familiar.

The format of a transformation is:  `${«variable or placeholder»/«regex»/«replacement string»/«flags»}`. It is similar to  [String.protoype.replace()][8]  in JavaScript. The "parameters" do the following:

-   `«regex»`: This is a regular expression that is matched against the value of the variable or placeholder. The JavaScript regex syntax is supported.
-   `«replacement string»`: This is the string you want to replace the original text with. It can reference capture groups from the  `«regex»`, perform case formatting (using the special functions:  `/upcase`,  `/downcase`, and  `/capitalize`), and perform conditional insertions. See  [TextMate Replacement String Syntax][9]  for more in-depth information.
-   `«flags»`: Flags that are passed to the regular expression. The  [JavaScript regex flags][10]  can be used:
    -   `g`  : Global search,
    -   `i`  : Case-insensitive search,
    -   `m`  : Multi-line search,
    -   `s`  : Allows  `.`  to match newline characters,
    -   `u`  : Unicode. Treat the pattern as a sequence of Unicode code points,
    -   `y`  : Perform a "sticky" search that matches starting at the current position in the target string.

To reference a capture group, use  `$n`  where  `n`  is the capture group number. Using  `$0`  means the entire match.

This can be a bit confusing since tab stops have the same syntax. Just remember that if it is contained within forward slashes, then it is referencing a capture group.

The easiest way to understand the syntax fully is to check out a few examples.

| SNIPPET  _BODY_ | INPUT | OUTPUT | EXPLANATION |
| --- | --- | --- | --- |
| `["${TM_SELECTED_TEXT/^.+$/• $0/gm}"]` | line1  
line2 | • line1  
• line2 | Put a bullet point before each non-empty line of the selected text. |
| `["${TM_SELECTED_TEXT/^(\\w+)/${1:/capitalize}/}"]` | the cat is on the mat. | The cat is on the mat. | Capitalize the first word of selected text. |
| `["${TM_FILENAME/.*/${0:/upcase}/}"]` | example.js | EXAMPLE.JS | Insert the filename of the current file uppercased. |
| `[`  
`"[",`  
`"${CLIPBOARD/^(.+)$/'$1',/gm}",`  
`"]"`  
`]` | line1  
line2 | \['line1', 'line2',\] | Turn the contents of the clipboard into a string array. Each non-empty line is an element. |

As you can see from the second example above, metacharacter sequences must be escaped, for example insert  `\\w`  for a word character.

#### Placeholder Transformations

**Placeholder transforms do  not  allow a default value or choices**! Maybe it is more suitable to call them tab stop transformations.

The example below will uppercase the text of the first tab stop.

![placeholder transform](https://www.freecodecamp.org/news/content/images/2020/09/placeholder-transform.gif)

```json
{
  "Uppercase first tab stop": {
    "prefix": "up",
    "body": ["${1/.*/${0:/upcase}/}", "$0"]
  }
}

```

You can have a placeholder and perform a transformation on a mirrored instance. The transformation will not be performed on the initial placeholder. ?

Would you use this behaviour somewhere? I find it confusing initially, so it may have the same affect on others.

```json
{
  "Uppercase second tab stop instance only": {
    "prefix": "up",
    "body": ["${1:title}", "${1/(.*)/${1:/upcase}/}", "$0"]
  }
}

```

### How do I assign Keyboard Shortcuts for snippets?

By adding your shortcuts to  `keybindings.json`  . You can open the file by running the  **'Preferences: Open Keyboard Shortcuts File (JSON)'**  command.

For example, to add a shortcut for the built-in markdown snippet "Insert heading level 1":

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

You define a shortcut by specifying the key combination you want to use, the command ID, and an optional  [when clause context][11]  for the context when the keyboard shortcut is enabled.

Through the  `args`  object, you can target an existing snippet by using the  `langId`  and  `name`  properties. The  `langId`  argument is the  [language ID][12]  of the language that the snippets were written for. The  `name`  is the snippet's name as it is defined in the snippet file.

You can define an inline snippet if you wish using the  `snippet`  property.

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

You can use the  _Keyboard Shortcuts UI_  also, but it does not have the ability to add a new shortcut.

Another downside of the UI is that it does not show the  `args`  object, which makes it more difficult to find and edit your custom shortcuts. ?

![shortcuts-ui](https://www.freecodecamp.org/news/content/images/2020/09/shortcuts-ui.png)

## A question of style

Something that I found offputting initially with snippets was the propensity for people to create snippets with abbreviated prefixes. Do I have to learn a big list of gibberish acronyms to use someone else's snippets?

What do I mean by abbreviated prefixes? The table below list a few of the snippets from the  [JavaScript (ES6) code snippets][13]  VS Code extension. You can see in the  _Trigger_  column, the prefixes listed are abbreviations, for example  _fre_  to represent a "for each" loop.

![es6 snippets excerpt](https://www.freecodecamp.org/news/content/images/2020/09/es6-snippets-excerpt.png)

This is unnecessary in two ways.

Firstly, the quick suggestions offered by VS Code are produced from a  **fuzzy substring search**. If I type "fe" and the prefix of a snippet is "foreach", this will match and be offered as a quick suggestion.

As you can see below, this is the second match.

![fe quick suggestion](https://www.freecodecamp.org/news/content/images/2020/09/fe-quick-suggestion.png)

The first match is  _fre_, which is a snippet from the extension. Which suggestion is more descriptive? ?

If you use the "Insert Snippet" command for snippets, it does not make much of a difference. The description field makes amends for this shortcoming. I don't use snippets in this way, so I would prefer a more descriptive prefix.

![insert snippet foreach](https://www.freecodecamp.org/news/content/images/2020/09/insertsnippet-foreach.png)

Secondly,  _fre_  is a  **duplicate**  of the built-in snippet  _foreach_.

Some people turn off quick suggestions for snippets and use tab completion only. In this case, you need to type a prefix out without getting visual feedback. Some people may prefer to use an abbreviated prefix to save keystrokes here.

The same fuzzy substring search is being performed in the background, so the first snippet match is inserted when you hit tab.

![snippet-tab-completion](https://www.freecodecamp.org/news/content/images/2020/09/snippet-tab-completion.gif)

Looking at the example above, you can see that typing "fr" and hitting  _tab_  inserts the  _fre_  snippet. Typing "fore" and hitting tab inserts the  _foreach_  snippet.

So, you do not need to type out the entire prefix, if you really don't want to! ? If you have many similarly named snippet prefixes for a language, it would be impractical I imagine.

It is more practical to learn the prefixes properly, and type them out entirely before hitting tab.

There are some trade-offs depending on your preferences for using snippets.

Personally, I like to use quick suggestions as I like the visual feedback. I have snippets set to be the top suggestions, that way I can type abbreviated versions of the prefixes without needing to memorise them.

Some snippet authors have rigid patterns to overcome this, but that's just something I can't get into easily.

If you use a lot of snippets for a language, you may want to choose snippets that are written in a similar style.

If you use snippets for different frameworks and libraries in a language, they can add up and overlap. I haven't needed to do this, but you may need to do it eventually.

## Global Snippets

Outside of your code editor, you can benefit from snippets also. Having snippets available in every app offers more possibilities.

Common use cases are:

-   canned responses for messages,
-   autocorrecting common typos,
-   adding contact information or signatures to documents,
-   inserting dates,
-   formatting of selected text and pasted text,
-   inserting search phrases for your search engine or app,
-   HTML snippets available inside your email client,
-   adding different templates to documents.

Most of the apps for snippets are touted as "text expanders", but quite a few task and productivity apps also include snippet-esque features.

Global snippets are  **bit more limited that code editor snippets**, as you cannot use tab stops and placeholders. In most apps you can use some dynamic variables such as dates.

### App Review

#### Autohotkey (Windows)

[AutoHotkey][14]  is a  **free, open-source scripting language for Windows**  to do all kinds of tasks.

It has it's own unique syntax. You can install the  [AutoHotKey extension][15]  to add language support to VS Code for a better editing experience.

For defining prefixes to trigger a snippet insertion, you use the following format:  `::<<prefix>>::<<text to insert>>`. The following script will insert Rob's email address when you type "robmail" and hit  _space_  or  _tab_  or  _enter_.

```
::robmail::rob@someservername.com

```

The following script will insert the text "This is the snippet text" when you press  `Ctrl+D`.

```
^d::  Send This is the snippet text

```

You can read the  [docs][16]  to learn more.

#### PhraseExpress (Windows, Mac, iOS)

[PhraseExpress][17]  is "a text expander software, that manages frequently used text templates for insertion into any program".

It is a  **freemium, GUI-based app**. It is aimed at a wider audience than  _AutoHotKey_.

It is quite polished and easy to use. You set it to run on start-up and it will be active in the background.

Your snippets can be organized into custom folders and synced using cloud services.

![phrase-express](https://www.freecodecamp.org/news/content/images/2020/09/phrase-express.png)

#### Espanso (Windows, Mac, Linux)

This is a  **open-source, cross-platform text expander written in Rust**.

It uses a  **file-based configuration approach**. The config files are written in  [YAML][18].

The  `default.yml`  file contains the main configuration. The config below will insert Rob's email address when you type "robmail" .

```yaml
matches:
 - trigger: ":robmail"
   replace: "rob@someservername.com"

```

You can  **specify the initial cursor position**, however you cannot define tab stops.

You can  **add extensions**  to increase the capability of Espanso. There are extensions for running external scripts, including dates, generating random text, and including clipboard data.

And that's about it! I hope you learned something about snippets today, and you can use them to make yourself more productive.

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
