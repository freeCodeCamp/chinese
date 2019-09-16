> * 原文地址：[How to Turn Your Website into a Mobile App with 7 Lines of JSON](https://www.freecodecamp.org/news/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5/)
> * 原文作者：Ethan
> * 译者：LianZhuotao
> * 校对者：

![How to Turn Your Website into a Mobile App with 7 Lines of JSON](https://cdn-media-1.freecodecamp.org/images/1*x-5_XGJJhAgiBmLe54I3xg.png)

#### 一种将web引擎与应用程序融合的新方法

如果我告诉你**上面7行橙色的JSON代码**就能将网站变成移动应用，你一定会吃惊不已吧！不需要使用框架api重写你的网站就能让它像移动应用一样呈现。就让你现有的网站保持原样，利用简单的URL引用将其打包成原生应用即可。

倘若如上，你只需略微调整JSON代码，就可以访问所有的原生API,原生UI组件以及实现原生视图转换。

下面是一个最简单的范例：

![](https://cdn-media-1.freecodecamp.org/images/1kjzo4uXso3Yk08RYYUUYGK6HXrlCs42aXqG)

你可以发现我嵌入了一个[github.com网页][1]，但其余布局都是本地UI组件，就像[导航栏][2]和[底部标签栏][3]。并且原生切换效果是自动生成的，你无需使用任何API重写网站。

你可能迫切地想问：”这很酷，但除了在原生应用框架中显示网页，你还能做其他有意义的事吗？“

问得好！因为这就是本篇文章的主题。您只需要创建一个**在web视图和应用程序之间的双向通信信道**，这样父应用就可以触发web视图内的任何javascript函数，并且web视图可以从外部调用原生API。

这有个简单的例子：

![](https://cdn-media-1.freecodecamp.org/images/8AvgutqafADVJW2WYgH3o0kBVDZvVuUIoU6C)

请注意，此视图包含：

1.原生导航栏，包括内置的切换功能。

2.一个Web视图，其中嵌入了Web应用程序：二维码生成器。

3.底部的原生聊天输入组件。

这些都可以通过调整上面的JSON代码来实现。

最后，请注意，二维码会随着你输入内容的不同而变化。此输入会触发二维码web应用内的JavaScript函数，从而重新生成二维码。

目前还没有试图从根本上解决  **“将Web视图无缝集成到原生应用程序”** 这一问题的应用开发框架，因为它们都专注于完全的原生或HTML5。

每当你听到有人谈论移动应用的未来，你都可能会听到他们谈论 **“究竟是HTML5还是原生方法会胜出呢？”** 

人们觉得`原生`和`HTML`是不能共存的，更不会认为它们能相辅相成，甚至实现看似不可能的功能。

在本文中，我将阐述：

-   为什么将web引擎和原生组件相融合通常是一个好主意。
-   为什么HTML和原生的无缝融合很困难，以及如何实现。
-   更重要的是，你如何利用它来快速构建你自己的应用程序。

### 为什么要在原生应用中使用HTML？

在进一步探讨之前，让我们首先讨论一下这个主意是好是坏，以及在何时你会想采用这种方法。这儿给出一些潜在的使用案例：

#### 1\. 使用Web原生功能

你的应用的某些部分可能更适合用Web引擎实现。 例如，[Websocket][4]是一个为Web环境设计的原生Web功能。在这种情况下，安装本质上  **“模拟”** Websocket的第三方库，就不如使用内置的web引擎（ **iOS版的WKWebView** 和 **Android版的WebView**）。 

无需安装额外的代码，你就可以免费实现。这也引出了下一点。

#### 2\. 避免较大的二进制文件

你可能想快速使用一些功能，但它们需要一个庞大的第三方库。

比如，为了以原生方式实现一个二维码生成器，你可能需要安装某些第三方库，而它们将大大增加文件的体积。但如果你使用Web视图引擎以及通过一个简单的`<script src>`来调用javascript库，你就能免费获得这些功能，且不需要安装任何第三方原生库。

#### 3\. 缺乏可靠的移动库

就一些前言技术而言，还没有可靠稳定的移动端实现。

幸运的是，它们中的大多数都有Web端实现，所以集成它们的最有效的方式就是使用JavaScrip库。

#### 4\. 构建部分原生，部分基于Web的应用

许多开发新手希望将他们的网站移植为移动应用，但当他们发现网站的部分功能太过复杂而无法快速为每种移动平台重写时，往往会气馁或受挫。

例如，你可能有一个网页太过复杂而无法立即转换为移动应用程序，但网站的其他部分可能很容易转换。

在这种情况下，如果可以以原生方式构建大部分应用程序，并以HTML形式将特别复杂的页面无缝集成于应用中，那就太棒了。

### 它是如何实现的?

#### A. Jasonette

Jasonette是一种开源的，基于标记的用于构建跨平台原生应用的方法。

它就像一个Web浏览器，但它不是将HTML标记语言解释为网页，而是将JSON标记语言解释为IOS或Android端的原生应用。

就像所有的web浏览器都有完全相同的代码，却可以通过按需解释各种HTML标记来为你提供各种不同的Web应用程序一样，所有Jasonette应用程序都有完全相同的二进制文件，它按需解释各种JSON标记来创建你的应用。开发人员不需要接触代码。相反，你可以通过编写标记来构建应用程序，该标记可以实时转换为原生应用程序。

你可以在 [这里][5]进一步学习Jasonette。 

虽然Jasonette的核心是构建原生应用程序，但本文旨在介绍如何将HTML集成到核心原生引擎中，接下来就让我们进一步探讨。

#### B. Jasonette Web 容器

原生应用很棒，但有时我们需要使用Web功能。

将Web视图集成到原生应用中是一项复杂的工作。无缝集成需要：

1.  **Web视图应作为原生应用布局的一部分进行集成：**  Web视图应作为原生布局的一部分融入应用，并且应当像其他任何原生UI组件一样被操作。否则会让用户感到笨拙，就像在访问一个真的网站一样。
2.  **父应用可以控制子Web容器：** 父应用应当可以轻松地控制子Web视图。
3.  **子Web容器可以触发父应用的原生事件：** 子应用应当可以触发父应用事件从而运行原生API。

这有许多工作要做，所以我首先介绍第一部分： ——  **简单地将Web容器嵌入原生布局中**  ——并将其作为版本1发布： 

[**JSON Web 容器**][6]  
[_JSON中的HTML变成了原生应用中的组件_jasonette.com][7]

这已经非常实用了，但由于其不可交互性，仍然存在一些限制。

父应用无法控制子Web容器，子应用无法将任何事件通知父应用，这使得Web容器完全独立于外部世界。

#### C. Jasonette Web 容器 2.0：使其可交互

在发布了版本1之后，我进行了第二部分的实验。——  **使Web容器变得可交互**

下文将解释添加的解决方案，这些解决方案使得过去的静态Web容器变得可交互，并显著增强了它们的功能。

### Implementation: Interactive Web Container

#### **1\. Load by URL**

#### Problem

Previously in version 1, to use web container as a background view component, you had to first  [set the  `$jason.body.background.type`  to  `"html"`  and then hard-code the HTML text under  `$jason.body.background.text`  attribute][8]  like this:

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "text": "<html><body><h1>Hello World</h1></body></html>"      }    }  }}
```

Naturally people wanted to be able to instantiate the container using simply a web URL instead of having to hardcode the entire HTML text in a single line.

#### Solution

Web container 2.0 has added the  `url`  attribute. You can embed a local  `file://`  HTML like this (it loads from the local HTML file you ship with the app):

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "url": "file://index.html"      }    }  }}
```

Or embed a remote  `http[s]://`  URL like this (it loads from a remote HTML):

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "url": "https://news.ycombinator.com"      }    }  }}
```

#### **2\. Parent App <=> Web Container Communi**cation

#### Problem

Previously, web containers were only for displaying content, and not interactive. This meant  **NONE of the following was possible:**

1.  **Jasonette => Web Contain**er: Call JavaScript functions inside the web container from Jasonette.
2.  **Web Container => Jasonet**te: Call native API from web container code.

All you could do was display the web container. This was similar to how you would embed an iframe in a web page, but the main web page had no access to what was inside the iframe.

#### Solution

The whole point of Jasonette is to design a standard markup language to describe cross platform mobile apps. In this case, we needed a markup language that could comprehensively describe communications between the parent app and the child web container.

To achieve this, I came up with a  `[JSON-RPC][9]`  based communication channel between the parent app and the child web container. Since everything on Jasonette is expressed in JSON objects, it made perfect sense to use the JSON-RPC standard format as the communication protocol.

![](https://cdn-media-1.freecodecamp.org/images/dISqZspArHgei6hasHQ89nw7g1GrWSsyPG8s)

To make a JavaScript function call into the web container, we declare an action called  `$agent.request`:

```
{  "type": "$agent.request",  "options": {    "id": "$webcontainer",    "method": "login",    "params": ["username", "password"]  }}
```

`[$agent.request][10]`  is the native API that triggers a JSON-RPC request into the web container. To use it, we must pass an  `options`  object as its parameter.

The  `options`  object is the actual  [JSON-RPC request][11]  that will be sent to the web container. Let’s look at what each attribute means:

-   `id`: Web container is built on top of a lower level architecture called  [agent][12]. Normally you can have multiple agents for a single view, and each agent can have its unique ID. But  [Web container is a special type of agent which can only have the id of  `$webcontainer`][13], which is why we use that ID here.
-   `method`: The JavaScript function name to call
-   `params`: The array of parameters to pass to the JavaScript function.

The full markup would look something like this:

```
{  "$jason": {    "head": {      "actions": {        "$load": {          "type": "$agent.request",          "options": {            "id": "$webcontainer",            "method": "login",            "params": ["alice", "1234"]          }        }      }    },    "body": {      "header": {        "title": "Web Container 2.0"      },      "background": {        "type": "html",        "url": "file://index.html"      }    }  }}
```

This markup is saying:

When the view loads (`[$jason.head.actions.$load][14]`), make a JSON-RPC request into the web container agent (`[$agent.request][15]`) where the request is specified under  `options`.

The web container is defined under  `[$jason.body.background][16]`, which in this case loads a local file called  `file://index.html`.

It will look for a JavaScript function called  `login`  and pass the two arguments under  `params`  (  `"alice"`  and  `"1234"`)

```
login("alice", "1234")
```

I’ve only explained how the parent app can trigger the child web container’s JavaScript function calls, but you can also do the opposite and  [let the web container trigger the parent app’s native API][17].

To learn more, check out the  [agent documentation][18].

#### Example

Let’s come back to the QR code example I briefly shared above:

![](https://cdn-media-1.freecodecamp.org/images/q5-enhI0kpKTs6F33sgyI0mS9sLqOXnHFeHI)

1.  The  [footer input component is 100% native][19].
2.  The QR code is generated by the web container  [as a web app][20].
3.  When a user enters something and presses “Generate,” it calls  `$agent.request`action into the web container agent, calling the  [JavaScript function “qr”][21]

You can check out the example  [here][22].

#### **3\. Script Injection**

#### Problem

Sometimes you may want to dynamically inject JavaScript code into the web container AFTER it’s finished loading the initial HTML.

Imagine you want to build a custom web browser app. You may want to inject your own custom JavaScript into every web view to customize the web view’s behavior, kind of like how web browser extensions work.

Even if you’re not building a web browser, you may want to use the script injection method whenever you want a custom behavior for a URL whose content you have no control over. The only way to communicate between the native app and the web container is through the  `$agent`  API. But if you can’t change the HTML content, the only way to add the  `$agent`  interface into the web container is through dynamic injection.

#### Solution

As mentioned in the previous section, the  `$jason.body.background`  web container is just another  `agent`. This means you can use the same  `[$agent.inject][23]`  method available to regular agents.

![](https://cdn-media-1.freecodecamp.org/images/kt6qG0I8AgcTy270pNSHCE2QfZpdRRMg8SZU)

#### **4\. URL Click Handling**

In the past, there were only two ways a web container could handle link clicks:

1.  **Readonly:**  Treat the web container as readonly and ignore all events such as touch or scroll. All web containers are readonly unless you tell them to behave like a regular browser, as described below.
2.  **Regular Browser Behavior:**  Let users interact with the page by behaving like a normal browser. You declare it by setting  `"type": "$default"`  as its  `action`attribute.

#### Problem

Both are  **“all or nothing” solutions**.

-   In the “Readonly” case, all your interactions are completely ignored by the web container.
-   In the “Regular Browser Behavior” case, the web container functions literally as a browser. When you click a link, it would just send you to that link by refreshing the page just like a web page. There was no way to hijack the click and call some native API.

#### Solution

With the new web container, you can now attach any  `action`  on the  `$jason.body.background`  web container to handle link click events.

![](https://cdn-media-1.freecodecamp.org/images/FhoDSEv8qQ4ZISs6syta2eU80WYBeQmFRAAS)

Let’s look at an example:

```
{  "$jason": {    "head": {      "actions": {        "displayBanner": {          "type": "$util.banner",          "options": {            "title": "Clicked",            "description": "Link {{$jason.url}} clicked!"          }        }      }    },    "body": {      "background": {        "type": "html",        "url": "file://index.html",        "action": {          "trigger": "displayBanner"        }      }    }  }}
```

Here we have attached  `"trigger": "displayBanner"`  to the web container. This means that when a user clicks any link in the web container, it will trigger  `displayBanner`  action instead of letting the web view handle it.

Also, if you look at the  `displayBanner`  action, you’ll notice the  `$jason`  variable. In this case, the clicked link will be passed through the  `$jason`  variable. For example, if you clicked a URL named  `"https://google.com"`, the  `$jason`  will have the following value:

```
{  "url": "https://google.com"}
```

This means you can selectively trigger different actions by  [checking the  `$jason.url`value.][24]

Let’s take another example where we implement a custom web browser:

```
{  "$jason": {    "head": {      "actions": {        "handleLink": [{          "{{#if $jason.url.indexOf('signin') !== -1 }}": {            "type": "$href",            "options": {              "url": "file://key.html"            }          }        }, {          "{{#else}}": {            "type": "$default"          }        }]      }    },    "body": {      "background": {        "type": "html",        "url": "file://index.html",        "action": {          "trigger": "handleLink"        }      }    }  }}
```

We test if the URL contains the string  `signin`  and then run two different actions depending on the result.

1.  If it contains  `signin`, it opens a new view to take care of signing in natively.
2.  If it doesn’t contain  `signin`, just run the  `"type": "$default"`  action so that it behaves like a regular browser.

### Example Usage

#### Building a custom web browser

We can now take advantage of the fact that the new web container can:

1.  Take a  `url`  attribute to load itself, functioning as a full-fledged browser
2.  Selectively handle link clicks depending on the URL

We can even build a custom web browser app with just a dozen lines of JSON. Since we can now hijack every link click, we can take a look at  `$jason.url`  and run whatever actions we want depending on the URL.

For example, take a look at the example below:

![](https://cdn-media-1.freecodecamp.org/images/iNRAFCyHHrGptiuenltF7rK902otq27ZMmTq)

![](https://cdn-media-1.freecodecamp.org/images/8vFiQuuuBm-KTt8LaNS-UEldKrWOCvJlI-0k)

On the left side we see that clicking a link behaves like a regular browser (`"type": "$default"`)

On the right side we see that clicking a link does a native transition to another JASON view.

All this can be achieved by selectively triggering different actions based on  `$jason.url`.

**Step 1. Attach an action named  `visit`  to the web container like this:**

```
{  ...  "body": {    "background": {      "type": "html",      "url": "https://news.ycombinator.com",      "action": {        "trigger": "visit"      }    }  }}
```

**Step 2. Run relevant actions inside  `visit,`  based on  `$jason.url`**

In the following code, we’re checking if  `$jason.url`  matches  `newest`,  `show`,  `ask`, and so on (they’re the top menu item links). If they do, we let the web container behave like a regular browser by setting  `"type": "$default"`

If they don’t match the pattern, we make a native  `$href`  transition to a new view and pass the clicked link as a parameter.

```
..."actions": {  "visit": [    {      "{{#if /\\/(newest|show|ask)$/.test($jason.url) }}": {        "type": "$default"      }    },    {      "{{#else}}": {        "type": "$href",        "options": {          "url": "https://jasonette.github.io/Jasonpedia/webcontainer/agent/hijack.json",          "preload": {            "background": "#ffffff"          },          "options": {            "url": "{{$jason.url}}"          }        }      }    }  ]},
```

Check out the full JSON markup for the web browser  [here][25]  (it’s only 48 lines!).

#### Instant “Hybrid” App

When people normally talk about “hybrid” apps, they mostly mean HTML web apps wrapped inside a native app frame.

But that’s not what I mean here. When I say “Hybrid,” I mean a truly hybrid app, where one app can have multiple native views and multiple web-based views simultaneously. Also where one view can have multiple native UI components and a web container rendered in the same native layout.

**The cross-over between web-based view and native view should be so seamless that it’s hard to tell where one starts and ends.**

![](https://cdn-media-1.freecodecamp.org/images/KVknGIXFeBzMxUsY1pBCddiWdEub8Jl26i0g)

In this example, I’ve created an app that displays  [jasonbase.com][26]  in a web container as the home view.

Jasonbase is a free JSON hosting service I built to easily host JSON markup for Jasonette apps.

Naturally, it’s just a website, but I have embedded it in Jasonette so that when you click the link, instead of opening a web page, it makes a native  `$href`  transition to a native JASON view.

**I didn’t have to touch any of Jasonbase.com’s code to build this app.**

**I simply embedded the website into Jasonette as a web container, and hijacked the link clicks to handle them natively, so it can do all the native stuff like triggering native APIs and making native transitions.**

You can check out the code  [here][27].

### Conclusion

In my opinion, what makes all this work fabulously is that  **everything is taken care of on the framework level**. All the hard work is taken care of behind the scenes.

Instead of putting the burden on the app developers to implement all of the following from scratch:

-   Embed a webview into native layout
-   Create a JavaScript bridge so the app can make function calls into the web view
-   Creating a native event handling architecture so the web view can trigger native events on the parent app

The solution was to create an abstraction made up of:

1.  **Declarative Markup Language:**  for describing how to embed a web view into a native app
2.  **Communication Protocol (JSON-RPC):**  to allow dead-simple interactions between the app and its child web views.

I don’t claim this approach to be the ultimate solution to solve everything, but I’m happy to say that this has been a great solution for my own use case.

I was trying to build an app that builds on a super edge technology which has no stable and reliable mobile implementations (and it’s not clear if there ever will be a mobile implementation due to the protocol’s nature). Thankfully it had JavaScript implementations so I could easily integrate it into the app without hassle.

Overall, it’s been great and I’m satisfied with how it turned out.  [The documentation is up to date][28]  to reflect all the new features, so feel free to dig in and play around.

> Disclaimer: With great power comes great responsibility

I would like to end with a disclaimer: as great as this newly found power is, I think you need to keep a balance to build an app with a great user experience.

Some may take this and build an entire app using web views only, but then you will end up with an app that’s basically just a website, which defeats the purpose of building a dedicated app.

I emphasize that I’m not saying you should always build apps with both HTML and native. I am saying this can be very useful for many people in different situations. Just don’t go overboard with it.

> Follow Along to Learn More

There are many different configurations in which the Jasonette native core and its child web container can communicate to get things done in creative and powerful ways, and this post is just scratching the surface.

[1]: https://github.com/Jasonette
[2]: https://docs.jasonette.com/document/#bodyheader
[3]: https://docs.jasonette.com/document/#tabs
[4]: https://en.wikipedia.org/wiki/WebSocket
[5]: https://medium.freecodecamp.org/how-to-build-cross-platform-mobile-apps-using-nothing-more-than-a-json-markup-f493abec1873
[6]: http://jasonette.com/webcontainer/
[7]: http://jasonette.com/webcontainer/
[8]: https://jasonette.com/webcontainer/
[9]: http://www.jsonrpc.org/specification
[10]: https://docs.jasonette.com/agents/#1-agentrequest
[11]: http://www.jsonrpc.org/specification#conventions
[12]: https://jasonette.com/agent/
[13]: https://docs.jasonette.com/web/#1-background-web-container-is-an-agent
[14]: https://docs.jasonette.com/actions/#1-load
[15]: https://docs.jasonette.com/agents/#1-agentrequest
[16]: https://docs.jasonette.com/web/#in-depth-on-background-web-container
[17]: https://docs.jasonette.com/agents/#3-agenttrigger
[18]: https://docs.jasonette.com/agents/
[19]: https://docs.jasonette.com/document/#input
[20]: https://github.com/Jasonette/Jasonpedia/blob/gh-pages/webcontainer/agent/fn/agent.html
[21]: https://github.com/Jasonette/Jasonpedia/blob/gh-pages/webcontainer/agent/fn/agent.html#L22
[22]: https://github.com/Jasonette/Jasonpedia/blob/gh-pages/webcontainer/agent/fn/index.json
[23]: https://docs.jasonette.com/agents/#7-agentinject
[24]: https://docs.jasonette.com/web/#b-intercept-url-visits
[25]: https://github.com/Jasonette/Jasonpedia/blob/gh-pages/webcontainer/agent/hijack.json
[26]: https://www.jasonbase.com/
[27]: https://github.com/Jasonette/Jasonpedia/blob/gh-pages/webcontainer/agent/hybrid.json
[28]: https://docs.jasonette.com/web/
