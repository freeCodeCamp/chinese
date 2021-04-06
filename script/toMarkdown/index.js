const https = require('https');
const nodeFetch = require('node-fetch');
const fsPromises = require('fs/promises');
const {
  hostURL_EN,
  options,
  Path_ArticleFolder_R
} = require('./toMarkdownConstant.js');
const {
  getThirdParam,
  getRouteAddr,
  haveRouterAddrmd,
  HTMLtoMarkdown
} = require('./toMarkdownSubfun.js');

// cd ./news-translation
// You can run `node script\toMarkdown\index.js URL<String>`(URL is the URL of the article).

(async function toMarkdown() {
  try {
    const thirdParam = await getThirdParam();
    const articleChildRouter = await getRouteAddr(thirdParam);

    const URL = `${hostURL_EN}/news/${articleChildRouter}/`;
    options.path = `/news/${articleChildRouter}/`;
    options.agent = new https.Agent(options);

    const articleFileName = await haveRouterAddrmd(articleChildRouter);
    const htmlString = await (await nodeFetch(URL, options)).text();
    const articleText = await HTMLtoMarkdown(htmlString);

    await fsPromises.writeFile(
      Path_ArticleFolder_R + articleFileName,
      articleText
    );
  } catch (error) {
    console.log('ERR:', error);
    process.exitCode = 1;
  }
})();
