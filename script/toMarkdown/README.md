## Web Page To Markdown

Language: English | [简体中文](./README-zh-cn.md)

### Introduction

Automatically generate Markdown files based on the webpages of articles on freeCodeCamp's news site. You can [submit an issue on GitHub](#submit-an-issue) or [execute a script locally](#execute-script-locally) to automatically generate a Markdown file.

#### Project structure

```
news-translate
│  package.json
│  README.md
│
|-.github
│  |-ISSUE_TEMPLATE
│  │   AutoGenerateMarkdown.md  /** Automatically generate Markdown issue template **/
│  │
│  |-workflows
│      WebPageToMarkdown.yml  /** Actions files for automatically generating markdown files **/
│
|-chinese
│  │
│  |-articles  /** The folder where the generated markdown files are stored **/
│
|-node_modules
│
|-script
   |-toMarkdown
      |  index.js  /** Entry file of the script **/
      |  README.md
      |  toMarkdownConstant.js  /** Configuration file **/
      |  toMarkdownSubfun.js  /** Function library file **/
      |
      |-__tests__
         toMarkdownSubfun.test.js  /** test file **/
```

---

<h3 id="submit-an-issue">Run the script by the issue of GitHub</h3>

**Issues** >> **New issue** >> 翻译任务(自动爬取) **Get stared** >> Fill in the title and description of the issue >> **Submit new issue**

#### Title:
```
[Auto]（此处替换为翻译的中文标题）
```
Replace `（此处替换为翻译的中文标题）` with the translated original title

#### Description:
```
- 原文网址：[原文标题](https://www.freecodecamp.org/news/路由/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/文章文件名称.md
```
Replace `原文标题` with the original title. And replace `路由` and `文章文件名称` with the route of the article.

#### e.g.
If the URL of an article is `https://www.freecodecamp.org/news/Example/`, and its title is `Example Title`.

*Title:*
```
[Auto]示例标题
```
*Description:*
```
- 原文网址：[Example Title](https://www.freecodecamp.org/news/Example/)
- MarkDown 文件：https://github.com/freeCodeCamp/news-translation/edit/master/chinese/articles/Example.md
```

If you want to confirm whether the script is executed successfully, you can check the execution result of **Actions**, or check the existence of the article at [freeCodeCamp
/news-translation/chinese/articles/](https://github.com/freeCodeCamp/news-translation/tree/main/chinese/articles).

Of course, you can modify the title of the issue after confirming that the script runs **successfully**, and delete the `[Auto]`. This will have no other effect except to make the title of the issue tidy.

If the script execution **fails**, you need to confirm the problem, solve them, and post a **new issue** according to the previous steps. The [*Common Error Messages*](#CommonErrorMessages) and the [*Actions*'s log](https://github.com/freeCodeCamp/news-translation/actions) will give you some reliable tips. If you can't find the problem or don't know how to solve them, please leave a message in the [issue](https://github.com/freeCodeCamp/news-translation/issues/new) or contact us in the [freeCodeCamp chat](https://chat.freecodecamp.org/channel/zhongwen). 

---

<h3 id="execute-script-locally">Run the script locally</h3>

#### Recommended minimum node version
```shell
v14.16.0
```

#### install
```shell
cd ./news-translation
npm install
```

#### run the script
```shell
node ./script/toMarkdown/index.js <String>
```
**Tip:** This `<String>` must contain a string of the following format: `- 原文网址：[原文标题](https://www.freecodecamp.org/news/路由/)`. Need to replace `原文标题` with the original title of the article, and need to replace `路由` with the routing of the article. If the format appears multiple times, only the first will be matched.

#### e.g.
If the URL of an article is `https://www.freecodecamp.org/news/Example/`, and its title is `Example Title`.
You can execute:
```shell
node ./script/toMarkdown/index.js "- 原文网址：[Example Title](https://www.freecodecamp.org/news/Example/)"
```

---

<h3 id="CommonErrorMessages">Common Error Messages</h3>

If you don't know how to solve the problem, please leave a message in the [issue](https://github.com/freeCodeCamp/news-translation/issues/new) or contact us in the [freeCodeCamp chat](https://chat.freecodecamp.org/channel/zhongwen).

- **This issue does not need to generate a markdown file.**
  If you post a new issue and want to run the script that automatically generates Markdown, please make sure that the title of the issue starts with `[Auto]`. If you don't want to execute the script, this is the expected result.
- **The description of the issue is empty.**
  The description of the issue is empty, please fill in the content according to the template.
- **No parameters were found. Please confirm that the description of the issue has been entered.**
  The description of the issue is empty, please fill in the content according to the template.
- **The route to the article is not matched. Please confirm that the URL is correct.**
  In the description of the issue, you only need to replace `原文标题`, `路由` and `文章文件名称`. And please keep other characters.
- **There is one file with the same name exists.Please check if the article has been added.**
  There is a file with the same name under the folder `./chinese/articles`. Please confirm whether the article has been translated by others before or is in a pending status. If it is not the above, please leave a message in the [issue](https://github.com/freeCodeCamp/news-translation/issues/new) or contact us in the [freeCodeCamp chat](https://chat.freecodecamp.org/channel/zhongwen). 
- **The DOM of the website has been modified, or there is a problem with loading, please confirm.**
  The DOM structure of the website may be changed and the script needs to be modified. Please leave a message in the [issue](https://github.com/freeCodeCamp/news-translation/issues/new) or contact us in the [freeCodeCamp chat](https://chat.freecodecamp.org/channel/zhongwen). 

---

### License

- The scriptes in the [`/script/toMarkdown`](/script/toMarkdown) directory are licensed under the [MIT](/LICENSE) license.
