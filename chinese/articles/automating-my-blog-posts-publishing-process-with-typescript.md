> * 原文地址：[How to Automate Your Blog Post Publishing Process with Typescript 如何使用 Typescript 实现自动化发布文章](https://www.freecodecamp.org/news/automating-my-blog-posts-publishing-process-with-typescript/)
> * 原文作者：TK
> * 译者：tanjiarui15
> * 校对者：

![如何使用 Typescript 实现自动化发布博客](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/cover.jpg)

由于我正在尝试养成写作习惯，我频繁写作。虽然我常用 [Medium][1],  [dev.to][2], 和 [Hashnode][3] 发布博客，我依然希望在 [我的个人站点][4] 也发一份。

因为我想建立一个简单的网站，这篇博客是由基本的 HTML 和 CSS 以及少量 JavaScript 构成。但问题是，我需要改进发布过程。

那么该从何入手呢？

我在 Notion 上管理博客写作路线图。看起来像这样：

![](https://raw.githubusercontent.com/leandrotk/tk/master/2020/04/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts/assets/blog-roadmap.png)

这是一种简单类型的看板。我喜欢这个，因为我可以将所有想法变成物理（或数字？）形式。我还使用它来构建草稿，不断完善，然后发布。

我用 Notion 写我的博客文章，完成后，我复制了 Notion 内容并将其粘贴到在线工具中，以将 Markdown 转换为 HTML 格式。然后使用 HTML 来创建实际的帖子。

但这只是正文，即页面的内容。我需要头部内容，正文和页脚创建整个 HTML。

这个过程乏味无聊。但好消息是，它可以自动化。而这篇文章就是关于这种自动化的。我想向您展示我创建的这个新工具的幕后花絮，以及我从此过程中学到的知识。

## 功能

我的主要想法是准备发布整个 HTML 文章。正如我之前提到的， `<head>` 和 `<footer>` 部分的变化不大。所以我可以将它们用作“模板”。

使用此模板，我提供的数据可以随着我撰写和发布的每篇文章而改变。数据是模板中具有 `{{ variableName }}` 形式的变量 {{variableName}}。一个例子：

```html
<h1>{{ title }}</h1>

```

现在，我可以使用模板并将变量替换为实际数据，即每篇文章的特定信息。

第二部分是博客正文。在模板中，用 `{{ article }}` 表示。该变量将被从 Notion Markdown 生成的 HTML 代替。

当我们从 Notion 复制和粘贴笔记时，我们得到了带有 Markdown 样式的内容。本项目会将 Markdown 转换为 HTML，并将其用作模板中的 `article` 变量。

为了创建理想的模板，我总结了所需创建的所有变量：

-   `title`
-   `description`
-   `date`
-   `tags`
-   `imageAlt`
-   `imageCover`
-   `photographerUrl`
-   `photographerName`
-   `article`
-   `keywords`

使用这些变量，我创建了 [template][5]。

要通过一些信息来构建 HTML，我创建了一个 `json` 的文章配置文件： `article.config.json`。文件内容如下：

```json
{
  "title": "React Hooks, Context API, and Pokemons",
  "description": "Understanding how hooks and the context api work",
  "date": "2020-04-21",
  "tags": [
    "javascript",
    "react"
  ],
  "imageAlt": "The Ash from Pokemon",
  "photographerUrl": "<https://www.instagram.com/kazuh.illust>",
  "photographerName": "kazuh.yasiro",
  "articleFile": "article.md",
  "keywords": "javascript,react"
}

```

第一步是项目应该知道如何打开和读取模板以及文章配置。我使用此数据填充模板。

首先是模板：

```typescript
const templateContent: string = await getTemplateContent();

```

因此，我们首先需要实现 `getTemplateContent` 功能。

```typescript
import fs, { promises } from 'fs';
import { resolve } from 'path';

const { readFile } = promises;

```

使用 `dirname` 参数的 `resolve` 将获得正在运行的源文件的绝对路径目录。然后访问 `examples/template.html` 文件。 `readFile` 将从模板路径异步读取并返回内容。

现在我们有了模板内容。我们需要对文章配置执行相同的操作。

```typescript
const getArticleConfig = async (): Promise<ArticleConfig> => {
  const articleConfigPath = resolve(dirname, '../examples/article.config.json');
  const articleConfigContent = await readFile(articleConfigPath, 'utf8');
  return JSON.parse(articleConfigContent);
};

```

这里发生两件事：

-   由于 `article.config.json` 具有 JSON 格式，因此我们需要在读取文件后将此 JSON 字符串转换为 JavaScript 对象
-   `articleConfigContent` 的返回将是我在函数返回类型中定义的 `ArticleConfig`。细节如下：

```typescript
type ArticleConfig = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageCover: string;
  imageAlt: string;
  photographerUrl: string;
  photographerName: string;
  articleFile: string;
  keywords: string;
};

```

获得相关内容后，我们还将使用这一新类型。

```typescript
const articleConfig: ArticleConfig = await getArticleConfig();

```

现在，我们可以使用 `replace` 方法在模板内容中填充配置数据。示例如下：

```typescript
templateContent.replace('title', articleConfig.title)

```

但是某些变量在模板中出现了不止一次。正则表达式会有助于解决这一问题：

```typescript
new RegExp('\{\{(?:\\s+)?(title)(?:\\s+)?\}\}', 'g');

```

得到所有匹配 `{{ title }}` 的字符串。因此，我可以构建一个接收目标参数的函数，并使用它替换 `title`。

```typescript
const getPattern = (find: string): RegExp =>
  new RegExp('\{\{(?:\\s+)?(' + find + ')(?:\\s+)?\}\}', 'g');

```

现在我们可以替换所有匹配项。`title`变量的示例：

```typescript
templateContent.replace(getPattern('title'), articleConfig.title)

```

但是我们并不想只替换 `title`变量，而是要替换文章配置中的所有变量。全部替换！

```typescript
const buildArticle = (templateContent: string) => ({
  with: (articleConfig: ArticleAttributes) =>
    templateContent
      .replace(getPattern('title'), articleConfig.title)
      .replace(getPattern('description'), articleConfig.description)
      .replace(getPattern('date'), articleConfig.date)
      .replace(getPattern('tags'), articleConfig.articleTags)
      .replace(getPattern('imageCover'), articleConfig.imageCover)
      .replace(getPattern('imageAlt'), articleConfig.imageAlt)
      .replace(getPattern('photographerUrl'), articleConfig.photographerUrl)
      .replace(getPattern('photographerName'), articleConfig.photographerName)
      .replace(getPattern('article'), articleConfig.articleBody)
      .replace(getPattern('keywords'), articleConfig.keywords)
});

```

现在全部替换！我们这样使用它：

```typescript
const article: string = buildArticle(templateContent).with(articleConfig);

```

但是我们在这里缺少两部分：

-   **`tags`**
-   **`article`**

在 JSON 配置文件中，`tags` 是一个列表。因此，对于列表：

```typescript
['javascript', 'react'];

```

最终的 HTML 将是：

```html
<a class="tag-link" href="../../../tags/javascript.html">javascript</a>
<a class="tag-link" href="../../../tags/react.html">react</a>

```

因此，我使用 `{{ tag }}` 变量创建了另一个模板： `tag_template.html`。们只需要遍历 `tags` 列表并使用模板为每一项创建 HTML Tag。

```typescript
const getArticleTags = async ({ tags }: { tags: string[] }): Promise<string> => {
  const tagTemplatePath = resolve(`**`dirname, '../examples/tag_template.html');
  const tagContent = await readFile(tagTemplatePath, 'utf8');
  return tags.map(buildTag(tagContent)).join('');
};

```

在这里，我们：

-   获取标签模板路径
-   获取标签模板的内容
-   遍历 `tags` 并根据标签模板构建最终的 HTML Tag

`buildTag` 是返回另一个函数的函数。

```typescript
const buildTag = (tagContent: string) => (tag: string): string =>
  tagContent.replace(getPattern('tag'), tag);

```

它接收参数 `tagContent` - 这是标签模板的内容 - 并返回一个接收 tag 参数并构建最终标签 HTML 的函数。现在我们称它为 getArticleTags。

```typescript
const articleTags: string = await getArticleTags(articleConfig);

```

现在关于这篇文章。看起来像这样：

```typescript
const getArticleBody = async ({ articleFile }: { articleFile: string }): Promise<string> => {
  const articleMarkdownPath = resolve(__dirname, ../examples/${articleFile});
  const articleMarkdown = await readFile(articleMarkdownPath, 'utf8');
  return fromMarkdownToHTML(articleMarkdown);
};

```

它收到 `articleFile`，我们尝试获取路径，读取文件并获取 Markdown 内容。然后将此内容传递给 `fromMarkdownToHTML` 函数，以将 Markdown 转换为 HTML。

对于这一部分，我将使用一个外部库 `showdown`。它处理所有边角案例，以将 Markdown 转换为 HTML。

```typescript
import showdown from 'showdown';

```

现在，我有了 tag 和文章的 HTML：

```typescript
const templateContent: string = await getTemplateContent();
const articleConfig: ArticleConfig = await getArticleConfig();
const articleTags: string = await getArticleTags(articleConfig);
const articleBody: string = await getArticleBody(articleConfig);

```

我漏掉了一件事！以前，我总是需要将图像封面路径添加到文章配置文件中。像这样：

```typescript
{
  "imageCover": "an-image.png",
}

```

但是我们可以假设图像名称为 `cover`。主要问题是扩展名。它可以是 `.png`，`.jpg`，`.jpeg`，或 `.gif`。

因此，我建立了一个函数来获取正确的图像扩展名。这个想法是在文件夹中搜索图像。如果它存在于文件夹中，则返回扩展名。

我从 "existing"部分开始。

```typescript
fs.existsSync(`${folder}/${fileName}.${extension}`);

```

在这里，我正在使用 `existsSync` 方法来查找文件。如果它存在于文件夹中，则返回true。否则为假。

我将此代码添加到一个函数中：

```typescript
const existsFile = (folder: string, fileName: string) => (extension: string): boolean =>
  fs.existsSync(`${folder}/${fileName}.${extension}`);

```

我为什么要这样做？

使用这个功能，我需要传递参数 `folder` ,`filename`，`extension`。 `folder` 和 `filename` 总是相同的。区别在于 `extension`。

因此，我可以构建柯里化函数。这样，我可以为相同的 `folder` 和 `filename` 建立不同的函数。像这样：

```typescript
const hasFileWithExtension = existsFile(examplesFolder, imageName);

hasFileWithExtension('jpeg'); // true or false
hasFileWithExtension('jpg'); // true or false
hasFileWithExtension('png'); // true or false
hasFileWithExtension('gif'); // true or false
```

完整函数如下：

```typescript
const getImageExtension = (): string => {
  const examplesFolder: string = resolve(__dirname, ../examples);
  const imageName: string = 'cover';
  const hasFileWithExtension = existsFile(examplesFolder, imageName);
  if (hasFileWithExtension('jpeg')) {
    return 'jpeg';
  }
  if (hasFileWithExtension('jpg')) {
    return 'jpg';
  }
  if (hasFileWithExtension('png')) {
    return 'png';
  }

```

但我不喜欢用硬编码的字符串来表示图像扩展名。`enum` 真的很酷！

```typescript
enum ImageExtension {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  GIF = 'gif'
};

```

现在使用我们的新的枚举类型 `ImageExtension` 的函数：

```typescript
const getImageExtension = (): string => {
  const examplesFolder: string = resolve(__dirname, ../examples);
  const imageName: string = 'cover';
  const hasFileWithExtension = existsFile(examplesFolder, imageName);
  if (hasFileWithExtension(ImageExtension.JPEG)) {
    return ImageExtension.JPEG;
  }
  if (hasFileWithExtension(ImageExtension.JPG)) {
    return ImageExtension.JPG;
  }
  if (hasFileWithExtension(ImageExtension.PNG)) {
    return ImageExtension.PNG;
  }

```

现在，我获得了用以填充模板的所有数据。

HTML 完成后，我想使用此数据创建实际的 HTML 文件。我大致需要获取正确的路径，HTML，并使用该 `writeFile` 函数创建此文件。

要获取路径，我需要确定我的博客的规律。它使用年，月，标题组织文件夹，文件名为 `index.html`。

一个例子是：

```bash
2020/04/publisher-a-tooling-to-blog-post-publishing/index.html

```

最初，我考虑过将这些数据添加到文章配置文件中。因此，我需要在每次更新时文章配置中的此属性以获取正确的路径。

但是另一个有趣的想法是根据文章配置文件中已有的一些数据来推断路径。我们有 `date`（例如 `"2020-04-21"`）和 `title`（例如 `"Publisher: tooling to automate blog post publishing"`）。

从 `date` 中，我可以得到年和月。从标题中，我可以生成文章所在文件夹。 `index.html` 文件始终是不变的。

最终字符串如下所示：

```typescript
`${year}/${month}/${slugifiedTitle}`
```

对于日期，这真的很简单。我可以拆分 `-` 并销毁：

```typescript
const [year, month]: string[] = date.split('-');

```

对于 `slugifiedTitle`，我构建了一个函数：

```typescript
const slugify = (title: string): string =>
  title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/[\s]/g, '-');

```

它从字符串的开头和结尾删除空格。然后将字符串小写。然后删除所有特殊字符（仅保留单词和空格字符）。最后，将所有空白替换为 `-`。

整个函数如下所示：

```typescript
const buildNewArticleFolderPath = ({ title, date }: { title: string, date: string }): string => {
  const [year, month]: string[] = date.split('-');
  const slugifiedTitle: string = slugify(title);

```

这一函数尝试获取文章文件夹。它不会生成新文件。这就是为什么我没有在最终字符串的末尾添加 `/index.html` 的原因。

为什么这样做呢？因为在写入新文件之前，我们始终需要创建文件夹。我使用 `mkdir` 此文件夹路径来创建它。

```typescript
const newArticleFolderPath: string = buildNewArticleFolderPath(articleConfig);
await mkdir(newArticleFolderPath, { recursive: true });

```

现在，我可以使用新建的文件夹在其中创建新的文章文件。

```typescript
const newArticlePath: string = `${newArticleFolderPath}/index.html`;
await writeFile(newArticlePath, article);

```

我们漏了一件事：当我将图像封面添加到文章配置文件夹中时，我需要将其复制粘贴到正确的位置。

对于 `2020/04/publisher-a-tooling-to-blog-post-publishing/index.html` 示例, 图像封面位于 assets 文件夹中：

`2020/04/publisher-a-tooling-to-blog-post-publishing/assets/cover.png`

为此，我需要做两件事：

-   使用 `mkdir` 创建一个新的 `assets` 文件夹
-   使用 `copyFile` 复制图像文件并将其粘贴到新文件夹中

要创建新文件夹，我只需要文件夹路径。要复制和粘贴图像文件，我需要当前图像路径和文章图像路径。

对于文件夹，因为我现有 `newArticleFolderPath`，我只需要将此路径连接到资产文件夹。

```typescript
const assetsFolder: string = `${newArticleFolderPath}/assets`;

```
对于当前的图像路径，我具有带正确扩展名的 `imageCoverFileName`。我只需要获取图像封面路径：

```typescript
const imageCoverExamplePath: string = resolve(__dirname, `../examples/${imageCoverFileName}`);

```

为了获得将来的图像路径，我需要将图像封面路径和图像文件名连接起来：

```typescript
const imageCoverPath: string = `${assetsFolder}/${imageCoverFileName}`;

```

使用所有这些数据，我可以创建新文件夹：

```typescript
await mkdir(assetsFolder, { recursive: true });

```

并复制并粘贴图像封面文件：

```typescript
await copyFile(imageCoverExamplePath, imageCoverPath);

```

在实现这一  `paths` 部分时，我看到可以将它们全部组合成一个函数 `buildPaths`。

```typescript
const buildPaths = (newArticleFolderPath: string): ArticlePaths => {
  const imageExtension: string = getImageExtension();
  const imageCoverFileName: string = `cover.${imageExtension}`;
  const newArticlePath: string = `${newArticleFolderPath}/index.html`;
  const imageCoverExamplePath: string = resolve(__dirname, `../examples/${imageCoverFileName}`);
  const assetsFolder: string = `${newArticleFolderPath}/assets`;
  const imageCoverPath: string = `${assetsFolder}/${imageCoverFileName}`;

  return {
    newArticlePath,
    imageCoverExamplePath,
    imageCoverPath,
    assetsFolder,
    imageCoverFileName
  };
};

```

我还创建了 `ArticlePaths` 类型：

```typescript
type ArticlePaths = {
  newArticlePath: string;
  imageCoverExamplePath: string;
  imageCoverPath: string;
  assetsFolder: string;
  imageCoverFileName: string;
};

```

而且我可以使用该函数来获取所需的所有路径数据：

```typescript
const {
  newArticlePath,
  imageCoverExamplePath,
  imageCoverPath,
  assetsFolder,
  imageCoverFileName
}: ArticlePaths = buildPaths(newArticleFolderPath);

```

现在算法的最后一部分！我想快速验证创建的帖子。那么，如果可以在浏览器选项卡中打开创建的帖子怎么样？

所以我做到了：

```typescript
await open(newArticlePath);

```

在这里，我使用 `open` 库来模拟终端打开命令。

就是这样！

## 我学到的是

这个项目很有趣！通过这个过程，我学到了一些很酷的东西。我想在这里列出它们：

-  在[学习 Typescript ][6]时，我想快速验证我正在编写的代码。因此，我配置 nodemon 为在每次保存文件时编译并运行代码。使开发过程如此动态是很酷的。 
-  尝试用新 nodejs 的 `fs` 的 `promises` API： `readFile`，`mkdir`，`writeFile`，和 `copyFile`。它目前在规范 `Stability: 2`。 
-  对某些函数进行[柯里化][7]，使其可重复使用。
-  枚举和[类型][8]是使状态在 Typescript 中保持一致的好方法，也是所有项目数据的表示和文档。[数据协定][9]确实很棒。
-  工具化思维。这是我喜欢编程的方面。构建工具有助于自动执行重复性任务并简化工作。

我希望这是一本好书！继续学习和编码！

该帖子最初发布在[我的博客][10]上。

我的[Twitter][11]和[Github][12]。

## 资源

-   [Publisher Tooling: 源码][13]
-   [深入思考数据协定][14]
-   [Typescript 学习][15]
-   [闭包，柯里化和炫酷的抽象][16]
-   [通过构建 app 学习 react ][17]

[1]: https://medium.com/@leandrotk_
[2]: https://dev.to/teekay
[3]: https://hashnode.com/@teekay
[4]: http://leandrotk.github.io/tk
[5]: https://github.com/leandrotk/publisher/blob/master/examples/template.html
[6]: https://leandrotk.github.io/tk/2020/04/typescript-learnings/index.html
[7]: https://leandrotk.github.io/tk/2020/03/closure-currying-and-cool-abstractions/index.html
[8]: https://leandrotk.github.io/tk/2020/04/typescript-learnings-002-type-system/index.html
[9]: https://leandrotk.github.io/tk/2020/04/thinking-in-data-contracts/index.html
[10]: https://leandrotk.github.io/tk/2020/04/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts/index.html
[11]: https://twitter.com/leandrotk_
[12]: https://github.com/leandrotk/
[13]: https://github.com/leandrotk/publisher
[14]: https://leandrotk.github.io/tk/2020/04/thinking-in-data-contracts/index.html
[15]: https://leandrotk.github.io/tk/2020/04/typescript-learnings/index.html
[16]: https://leandrotk.github.io/tk/2020/03/closure-currying-and-cool-abstractions/index.html
[17]: https://alterclass.io/?ref=5ec57f513c1321001703dcd2
