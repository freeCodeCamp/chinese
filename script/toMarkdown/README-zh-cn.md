## 网页转换 Markdown

语言: [English](./README.md) | 简体中文

### 简介

根据 freeCodeCamp 的 news 站点上文章的网页自动生成 Markdown 文件。可以 [在 GitHub 上提交 issue](#submit-an-issue) 或 [在本地执行脚本](#execute-script-locally) 自动生成 Markdown 文件。

#### 项目结构
 
```
news-translate
│  package.json
│  README.md
│
|-.github
│  |-ISSUE_TEMPLATE
│  │   AutoGenerateMarkdown.md  /** 自动生成 Markdown 文件的 issue 模板 **/
│  │
│  |-workflows
│      WebPageToMarkdown.yml  /** 用于自动生成 Markdown 文件的 Actions 文件 **/
│
|-chinese
│  │
│  |-articles  /** 存放生成的 markdown 文件的文件夹 **/
│
|-node_modules
│
|-script
   |-toMarkdown
      |  index.js  /** 脚本的入口文件 **/
      |  README.md
      |  toMarkdownConstant.js  /** 配置文件 **/
      |  toMarkdownSubfun.js  /** 函数库文件 **/
      |
      |-__tests__
         toMarkdownSubfun.test.js  /** 测试文件 **/
```
---

<h3 id="submit-an-issue">通过 GitHub 的 issue 运行脚本</h3>

**Issues** >> **New issue** >> 翻译任务(自动爬取) **Get stared** >> 填写 issue 的标题和描述 >> **Submit new issue**

#### 标题（Title）：
```
[Auto]（此处替换为翻译的中文标题）
```
翻译后的原文标题替换 `（此处替换为翻译的中文标题）`。
#### 描述（Description）：
```
- 原文网址：[原文标题](https://www.freecodecamp.org/news/路由/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/文章文件名称.md
```
用原文标题替换 `原文标题`，用文章的路由地址替换 `路由` 和 `文章文件名称`。

#### 示例：
如果文章的 URL 是 `https://www.freecodecamp.org/news/Example/`，标题是 `Example Title`。

*标题（Title）：*
```
[Auto]示例标题
```
*描述（Description）：*
```
- 原文网址：[Example Title](https://www.freecodecamp.org/news/Example/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/Example.md
```

可以通过检查 **Actions** 的执行结果或者在 [freeCodeCamp
/news-translation/chinese/articles/](https://github.com/freeCodeCamp/news-translation/tree/main/chinese/articles)，以确认脚本是否成功执行。

可以在确认脚本**成功**运行之后，修改 issue 的标题——删除 `[Auto]`。 除了使 issue 的标题整齐之外，这没有其他效果。

如果脚本执行**失败**，您需要确认问题，解决问题，然后根据前面的步骤发布**新 issue**。 [*常见错误消息*](#CommonErrorMessages) 和 [*Actions 的日志*](https://github.com/freeCodeCamp/news-translation/actions) 将为您提供一些可靠的提示。如果找不到问题或不知道如何解决，请在 [issue](https://github.com/freeCodeCamp/news-translation/issues/new) 中留言或与我们联系 [freeCodeCamp 聊天室](https://chat.freecodecamp.org/channel/zhongwen)。

---

<h3 id="execute-script-locally">本地运行脚本</h3>

#### 建议最低的 node 版本
```shell
v14.16.0
```

#### install
```shell
cd ./news-translation
npm install
```

#### 运行脚本
```shell
node ./script/toMarkdown/index.js <String>
```

**提示：** `<String>` 必须包含以下形式的字符串：`- 原文网址：[原文标题](https://www.freecodecamp.org/news/路由/)`。需要用文章的原始标题替换 `原文标题`，需要用文章的路由替换 `路由`。如果该形式的字符串出现多次，则只会匹配第一个。

#### 示例：
如果文章的 URL 是 `https://www.freecodecamp.org/news/Example/`，标题是 `Example Title`。
你可以运行：
```shell
node ./script/toMarkdown/index.js "- 原文网址：[Example Title](https://www.freecodecamp.org/news/Example/)"
```

---

<h3 id="CommonErrorMessages">常见错误消息</h3>

如果您不知道如何解决问题，请在 [issue](https://github.com/freeCodeCamp/news-translation/issues/new) 中留言，或通过 [freeCodeCamp 聊天室](https://chat.freecodecamp.org/channel/zhongwen)联系我们。

- **This issue does not need to generate a markdown file.**
  如果想通过新 issue 运行自动生成 Markdown 的脚本，请确保 issue 的标题以 `[Auto]` 开头。如果您不想执行该脚本，这是预期的结果。
- **The description of the issue is empty.**
  issue 的描述为空，请根据模板填写内容。
- **No parameters were found. Please confirm that the description of the issue has been entered.**
  issue 的描述为空，请根据模板填写内容。
- **The route to the article is not matched. Please confirm that the URL is correct.**
  在 issue 的描述中，只需要替换 `原文标题`， `路由` 和 `文章文件名称` 即可，并且请保留其他字符。
- **There is one file with the same name exists.Please check if the article has been added.**
  在 `./chinese/articles` 文件夹下有一个同名文件。请确认该文章之前是否已被其他人翻译或处于待翻译状态。如果不是上述情况，请在 [issue](https://github.com/freeCodeCamp/news-translation/issues/new) 中留言，或通过 [freeCodeCamp 聊天室](https://chat.freecodecamp.org/channel/zhongwen)联系我们。
- **The DOM of the website has been modified, or there is a problem with loading, please confirm.**
  网站的 DOM 结构可能更改，并且脚本需要修改。请在 [issue](https://github.com/freeCodeCamp/news-translation/issues/new) 中留言，或通过 [freeCodeCamp 聊天室](https://chat.freecodecamp.org/channel/zhongwen)联系我们。

---

### 许可证

- [`/script/toMarkdown`](/script/toMarkdown) 文件夹下的脚本遵循 [MIT](/LICENSE) 许可证.
