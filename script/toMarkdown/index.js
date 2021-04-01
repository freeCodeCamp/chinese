const https = require('https');
const nodeFetch = require("node-fetch");
const {
  hostURL_EN,
  options
} = require("./toMarkdownConstant.js");
const {
  getThirdParam,
  getRouteAddr,
  haveRouterAddrmd,
  HTMLtoMarkdown,
  writetoFile
} = require("./toMarkdownSubfun.js");

// cd ./news-translation
// You can run `node script\toMarkdown\index.js URL<String>`(URL is the URL of the article).

(async function toMarkdown() {
  try{
    const thirdParam = await getThirdParam();
    const articleChildRouter = await getRouteAddr(thirdParam);
    const URL = hostURL_EN + "/news/" + articleChildRouter + "/";
    options.path = "/news/" + articleChildRouter + "/";
    options.agent = new https.Agent(options);
    const articleFileName = await haveRouterAddrmd(articleChildRouter);
    const req = await nodeFetch(URL, options);
    const htmlString = await req.text();
    const articleText = await HTMLtoMarkdown(htmlString);
    writetoFile(articleText, articleFileName);
  } catch(e) {
    console.log("ERR:", e);
    process.exitCode = 1;
  }
})();
