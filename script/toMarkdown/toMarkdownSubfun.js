const fs = require('fs');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const {
  strikethrough,
  tables,
  taskListItems,
  gfm
} = require('turndown-plugin-gfm');

const {
  Path_ArticleFolder_R,
  Err_DontGetThirdParam,
  Err_DontGetTrueRoute,
  Err_SameNameFile,
  Err_NoPath,
  Err_DOMWrong,
  hostURL_EN,
  options
} = require('./toMarkdownConstant.js');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced'
})
  .use(strikethrough)
  .use(tables)
  .use(taskListItems)
  .use(gfm);

// Get the URL of the article from command line parameters.
exports.getThirdParam = () =>
  new Promise((resolve, reject) => {
    const thirdParam = process.argv[2];

    thirdParam ? resolve(thirdParam) : reject(Err_DontGetThirdParam);
  });

// Check the input parameters, and get the routing address of the article.
// - 原文网址：[原文标题](https://www.freecodecamp.org/news/xxxxxxx/
exports.getRouteAddr = (URL) =>
  new Promise((resolve, reject) => {
    const re = /原文网址：\[[^\n\f\r\t]+\]\(https:\/\/www\.freecodecamp\.org\/news\/(?<articleFileName>[0-9a-zA-Z\-]+)\//g;
    const URLArr = re.exec(URL);

    URLArr
      ? resolve(URLArr.groups.articleFileName)
      : reject(Err_DontGetTrueRoute);
  });

// Check if the ${routerAddr}.md exists.If it exists, an error is reported.
exports.haveRouterAddrmd = (routerAddr) =>
  new Promise((resolve, reject) =>
    fs.access(
      Path_ArticleFolder_R + routerAddr + '.md',
      fs.constants.F_OK,
      (err) =>
        err
          ? resolve(routerAddr + '.md')
          : // There is one file with the same name.
            reject(Err_SameNameFile)
    )
  );

// Convert HTML to markdown.
exports.HTMLtoMarkdown = (html) =>
  new Promise((resolve, reject) => {
    if (!options.path) return reject(Err_NoPath);

    const $ = cheerio.load(html);

    // Original article Title
    const articleTitle = $('.post-full-title').text();
    // Original article address
    const articleURL = 'https://' + options.hostname + options.path;
    const authorCardName = $('.author-card-name > a');
    // Original author's signature
    const authorName = authorCardName.text();
    // Original author's personal page
    const authorURL = hostURL_EN + authorCardName.attr('href');

    if (!articleTitle || !authorName || authorURL === hostURL_EN)
      return reject(Err_DOMWrong);

    // full image
    let fullImage = $('.post-full-image > img') || '',
      fullImageURL;
    // Is there a full image
    if (fullImage) {
      fullImageURL = fullImage.attr('src');
      // Whether the src of the full image is empty
      if (!fullImageURL) return reject(Err_DOMWrong);
      else {
        const re = /^http/;
        // Is the src of the full image quoted from an external website
        if (!re.test(fullImageURL)) {
          fullImageURL = hostURL_EN + fullImageURL;
          fullImage.attr('src', fullImageURL);
        }
      }
    }
    const article = fullImage + $('.post-content');

    const articleHeader = `> -  原文地址：[${articleTitle}](${articleURL})
> -  原文作者：[${authorName}](${authorURL})
> -  译者：
> -  校对者：`,
      markdown = turndownService.turndown(article);

    return resolve(articleHeader + '\n\n' + markdown);
  });
