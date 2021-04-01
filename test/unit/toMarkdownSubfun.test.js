const {
  Err_DontGetThirdParam,
  Err_DontGetTrueRoute,
  Err_SameNameFile,
  Err_NoPath,
  Err_DOMWrong,
  options
} = require("./../../script/toMarkdown/toMarkdownConstant.js");
const {
  getThirdParam,
  getRouteAddr,
  haveRouterAddrmd,
  HTMLtoMarkdown,
  writetoFile
} = require("./../../script/toMarkdown/toMarkdownSubfun.js");

describe("1. test getThirdParam(Get the URL of the article from command line parameters.)", () => {
  test("1-1. Number string.", () => {
    process.argv = ["node", "jest", "10"]
    return getThirdParam().then((data) => {
      expect(data).toBe("10");
    });
  });

  test("1-2. URL string.", () => {
    process.argv = ["node", "jest", "https://www.freecodecamp.org/news/testexample/"]
    return getThirdParam().then((data) => {
      expect(data).toBe("https://www.freecodecamp.org/news/testexample/");
    });
  });

  test("1-3. There is no third parameter.", () => {
    process.argv = ["node", "jest"]
    return getThirdParam().catch((err) => {
      expect(err).toBe(Err_DontGetThirdParam);
    });
  });

  test("1-4. There are four parameters.", () => {
    process.argv = ["node", "jest", "https://www.freecodecamp.org/news/testexample/", "testText"]
    return getThirdParam().then((data) => {
      expect(data).toBe("https://www.freecodecamp.org/news/testexample/");
    });
  });
});

describe("2. test getRouteAddr(Check the input parameters, and get the routing address of the article.)", () => {
  test("2-1. there is the correct URL in the parameter.", () => {
    return getRouteAddr("- 原文网址：[Test Example](https://www.freecodecamp.org/news/testexample/)").then((data) => {
      expect(data).toBe("testexample");
    });
  });

  describe("2-2. Wrong URL test", () => {
    test("2-2-1. Without the last forward slash", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](https://www.freecodecamp.org/news/testexample)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-2. http", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](http://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-3. No htts", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-4. No www", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](https://freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-5. No news", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](https://www.freecodecamp.org/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-6. No Route", ()=>{
      return getRouteAddr("- 原文网址：[Test Example](https://www.freecodecamp.org/news/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-8. Without '- 原文网址：'", ()=>{
      return getRouteAddr("[Test Example](https://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-8. With '\\n'", ()=>{
      return getRouteAddr("- 原文网址：[Test\nExample](https://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-8. With '\\f'", ()=>{
      return getRouteAddr("- 原文网址：[Test\fExample](https://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-8. With '\\r'", ()=>{
      return getRouteAddr("- 原文网址：[Test\rExample](https://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });

    test("2-2-8. With '\\t'", ()=>{
      return getRouteAddr("- 原文网址：[Test\tExample](https://www.freecodecamp.org/news/testexample/)").catch((err) => {
        expect(err).toBe(Err_DontGetTrueRoute);
      });
    });
  });
});

describe("3. test haveRouterAddrmd(Check if the ${routerAddr}.md exists.If it exists, an error is reported.)", () => {
  test("3-1. This article does not exist", () => {
    return haveRouterAddrmd("testexample").then((data) => {
      expect(data).toBe("testexample.md");
    });
  });

  test("3-2. This article exists ", () => {
    return haveRouterAddrmd("20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal").catch((err) => {
      expect(err).toBe(Err_SameNameFile);
    });
  });
});

describe("4. test HTMLtoMarkdown(Write content to file).", () => {
  describe("4-1. Normal case ",() => {
    test("4-1-1. <img src='/postFullImageURL'>", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <h1>h1</h1>
                    <h2>h2</h2>
                    <h3>h3</h3>
                    <h4>h4</h4>
                    <h5>h5</h5>
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp<a href="link">Link</a></p>
                    <ol>
                      <li>ol one</li>
                      <li>ol two</li>
                      <li>ol three</li>
                    </ol>
                    <ol>
                      <li><a href="#1_a">ol one a</a></li>
                      <li><a href="#2_a">ol two a</a></li>
                      <li><a href="#3_a">ol three a</a></li>
                    </ol>
                    <ul>
                      <li>ul one</li>
                      <li>ul two</li>
                      <li>ul three</li>
                    </ul>
                    <img src="https://www.freecodecamp.org/img.jpeg" alt="img" />
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).then((data) => {
        expect(data).toBe(
`> -  原文地址：[testexample post-full-title](https://www.freecodecamp.org/news/testexample/)
> -  原文作者：[authorName](https://www.freecodecamp.org/news/author/authorURL/)
> -  译者：
> -  校对者：

![postFullImage](https://www.freecodecamp.org/postFullImageURL)

# h1

## h2

### h3

#### h4

##### h5

ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp[Link](link)

1.  ol one
2.  ol two
3.  ol three

1.  [ol one a](#1_a)
2.  [ol two a](#2_a)
3.  [ol three a](#3_a)

-   ul one
-   ul two
-   ul three

![img](https://www.freecodecamp.org/img.jpeg)`);
      });
    });

    test("4-1-2. <img src='https://www.freecodecamp.org/postFullImageURL'>", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="https://www.freecodecamp.org/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).then((data) => {
        expect(data).toBe(
`> -  原文地址：[testexample post-full-title](https://www.freecodecamp.org/news/testexample/)
> -  原文作者：[authorName](https://www.freecodecamp.org/news/author/authorURL/)
> -  译者：
> -  校对者：

![postFullImage](https://www.freecodecamp.org/postFullImageURL)`);
      });
    });

    test("4-1-3. <img src='http://www.freecodecamp.org/postFullImageURL'>", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="http://www.freecodecamp.org/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).then((data) => {
        expect(data).toBe(
`> -  原文地址：[testexample post-full-title](https://www.freecodecamp.org/news/testexample/)
> -  原文作者：[authorName](https://www.freecodecamp.org/news/author/authorURL/)
> -  译者：
> -  校对者：

![postFullImage](http://www.freecodecamp.org/postFullImageURL)`);
      });
    });

    test("4-1-4. No postFullImage.", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).then((data) => {
        expect(data).toBe(
`> -  原文地址：[testexample post-full-title](https://www.freecodecamp.org/news/testexample/)
> -  原文作者：[authorName](https://www.freecodecamp.org/news/author/authorURL/)
> -  译者：
> -  校对者：

`);
      });
    });
  });

  describe("4-2. Abnormal case", () => {
    test("4-2-1. No articleTitle", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title"></h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-2. No articleTitle", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-3. No articleURL", () => {
      options.path = "";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_NoPath);
      });
    });

    test("4-2-4. No authorName", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="/news/author/authorURL/"></a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-5. No authorName", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name">authorName</h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-6. No authorName", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-7. No authorName", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-8. No authorURL", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a href="">authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-9. No authorURL", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name">authorName</h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-10. No authorURL", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>System Design Interview Questions – Concepts You Should Know</title>
      </head>
      <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
        <div class="site-wrapper">
          <main id="site-main" class="site-main outer">
            <div class="inner">
              <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                <header class="post-full-header">
                  <h1 class="post-full-title">testexample post-full-title</h1>
                </header>
                <figure class="post-full-image">
                  <img src="/postFullImageURL" alt="postFullImage" />
                </figure>
                <section class="post-full-content">
                  <div class="post-content">
                    <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
                  </div>
                  <hr />
                  <div class="post-full-author-header">
                    <section class="author-card">
                      <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                      <section class="author-card-content">
                        <h4 class="author-card-name"><a>authorName</a></h4>
                      </section>
                    </section>
                  </div>
                  <hr />
                </section>
              </article>
            </div>
          </main>
        </div>
      </body>
    </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-11. Error in fullImage(<img src='' alt='postFullImage' />).", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>System Design Interview Questions – Concepts You Should Know</title>
        </head>
        <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
          <div class="site-wrapper">
            <main id="site-main" class="site-main outer">
              <div class="inner">
                <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                  <header class="post-full-header">
                    <h1 class="post-full-title">testexample post-full-title</h1>
                  </header>
                  <figure class="post-full-image">
                    <img src="" alt="postFullImage" />
                  </figure>
                  <section class="post-full-content">
                    <div class="post-content">
                    </div>
                    <hr />
                    <div class="post-full-author-header">
                      <section class="author-card">
                        <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                        <section class="author-card-content">
                          <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                        </section>
                      </section>
                    </div>
                    <hr />
                  </section>
                </article>
              </div>
            </main>
          </div>
        </body>
      </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });

    test("4-2-12. Error in fullImage(<img alt='postFullImage' />).", () => {
      options.path = "/news/testexample/";
      return HTMLtoMarkdown(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>System Design Interview Questions – Concepts You Should Know</title>
        </head>
        <body class="post-template tag-interviews tag-systems-engineering tag-coding-interview">
          <div class="site-wrapper">
            <main id="site-main" class="site-main outer">
              <div class="inner">
                <article class="post-full post tag-interviews tag-systems-engineering tag-coding-interview ">
                  <header class="post-full-header">
                    <h1 class="post-full-title">testexample post-full-title</h1>
                  </header>
                  <figure class="post-full-image">
                    <img alt="postFullImage" />
                  </figure>
                  <section class="post-full-content">
                    <div class="post-content">
                    </div>
                    <hr />
                    <div class="post-full-author-header">
                      <section class="author-card">
                        <img class="author-profile-image" src="/news/content/images/size/w100/2019/06/WhatsApp-Image-2018-03-22-at-13.36.56.jpeg" alt="Zubin Pratap" />
                        <section class="author-card-content">
                          <h4 class="author-card-name"><a href="/news/author/authorURL/">authorName</a></h4>
                        </section>
                      </section>
                    </div>
                    <hr />
                  </section>
                </article>
              </div>
            </main>
          </div>
        </body>
      </html>`).catch((err) => {
        expect(err).toBe(Err_DOMWrong);
      });
    });
  });

  // test("4-2. This article exists ", () => {
  //   return haveRouterAddrmd("20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal").catch((err) => {
  //     expect(err).toBe(Err_SameNameFile);
  //   });
  // });
});
