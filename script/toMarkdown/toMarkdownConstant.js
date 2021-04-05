// Relative path of the article folder.
const Path_ArticleFolder_R = "./chinese/articles/";

// Errs
const Err_DontGetThirdParam = "No parameters were found. Please confirm that the description of the issue has been entered.";
const Err_DontGetTrueRoute = "The route to the article is not matched. Please confirm that the URL is correct.";
const Err_SameNameFile = "There is one file with the same name exists.Please check if the article has been added.";
const Err_NoPath = "Path of options has no value.";
const Err_DOMWrong = "The DOM of the website has been modified, or there is a problem with loading, please confirm.";

const hostURL_EN = "https://www.freecodecamp.org";
const options = {
  method: "GET",
  // gzip: true,
  headers: {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0",
    "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding" : "utf-8",
    "Connection" : "keep-alive",
    "Accept-Language" : "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2"
  },
  hostname : "www.freecodecamp.org",
  path : "" //routePath,
}

module.exports = {
  Path_ArticleFolder_R,
  Err_DontGetThirdParam,
  Err_DontGetTrueRoute,
  Err_SameNameFile,
  Err_NoPath,
  Err_DOMWrong,
  hostURL_EN,
  options
}
