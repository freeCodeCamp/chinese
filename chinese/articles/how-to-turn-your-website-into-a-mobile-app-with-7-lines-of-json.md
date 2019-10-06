> * 原文地址：[How to Turn Your Website into a Mobile App with 7 Lines of JSON](https://www.freecodecamp.org/news/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5/)
> * 原文作者：Ethan
> * 译者：LianZhuotao
> * 校对者：

![How to Turn Your Website into a Mobile App with 7 Lines of JSON](https://cdn-media-1.freecodecamp.org/images/1*x-5_XGJJhAgiBmLe54I3xg.png)

#### 一种将 web 引擎与应用程序融合的新方法

如果我告诉你**上面7行橙色的 JSON 代码**就能将网站变成移动应用，你怎么看？不需要使用框架 API 重写你的网站就能让它像移动应用一样呈现。就让你现有的网站保持原样，利用简单的 URL 引用将其打包成原生应用即可。

倘若如上，你只需略微调整 JSON 代码，就可以访问所有的原生 API，原生 UI 组件以及实现原生视图转换。

下面是一个最简单的范例：

![](https://cdn-media-1.freecodecamp.org/images/1kjzo4uXso3Yk08RYYUUYGK6HXrlCs42aXqG)

你可以发现我嵌入了一个[ github.com 网页][1]，但其余布局都是本地 UI 组件，就像[导航栏][2]和[底部标签栏][3]。并且原生切换效果是自动生成的，你无需使用任何 API 重写网站。

你可能迫切地想问：”这很酷，但除了在原生应用框架中显示网页，你还能做其他有意义的事吗？“

问得好！因为这就是本篇文章的主题。你只需要创建一个**在 Web 视图和应用程序之间的双向通信信道**，这样父应用就可以触发 Web 视图内的任何 JavaScript 函数，并且 Web 视图可以从外部调用原生 API。

这有个简单的例子：

![](https://cdn-media-1.freecodecamp.org/images/8AvgutqafADVJW2WYgH3o0kBVDZvVuUIoU6C)

请注意，此视图包含：

1.原生导航栏，包括内置的切换功能。

2.一个 Web 视图，其中嵌入了 Web 应用程序：二维码生成器。

3.底部的原生聊天输入组件。

这些都可以通过调整上面的 JSON 代码来实现。

最后，请注意，二维码会随着你输入内容的不同而变化。此输入会触发二维码 Web 应用内的 JavaScript 函数，从而重新生成二维码。

目前还没有试图从根本上解决  **“将 Web 视图无缝集成到原生应用程序”** 这一问题的应用开发框架，因为它们都专注于完全的原生或 HTML5。

每当你听到有人谈论移动应用的未来，你都可能会听到他们谈论 **“究竟是 HTML5 还是原生方法会胜出呢？”** 

人们觉得`原生`和`HTML`是不能共存的，更不会认为它们能相辅相成，甚至实现看似不可能的功能。

在本文中，我将阐述：

-   为什么将 Web 引擎和原生组件相融合通常是一个好主意。
-   为什么 HTML 和原生的无缝融合很困难，以及如何实现。
-   更重要的是，你如何利用它来快速构建你自己的应用程序。

### 为什么要在原生应用中使用 HTML ？

在进一步探讨之前，让我们首先讨论一下这个主意是好是坏，以及在何时你会想采用这种方法。这儿给出一些潜在的使用案例：

#### 1\. 使用 Web 原生功能

你的应用的某些部分可能更适合用 Web 引擎实现。 例如，[Websocket][4] 是一个为 Web 环境设计的原生 Web 功能。在这种情况下，安装本质上  **“模拟”**  Websocket 的第三方库，就不如使用内置的 Web 引擎（ **iOS 版的   WKWebView**  和 **Android 版的 WebView**）。 

无需安装额外的代码，你就可以免费实现。这也引出了下一点。

#### 2\. 避免较大的二进制文件

你可能想快速使用一些功能，但它们需要一个庞大的第三方库。

比如，为了以原生方式实现一个二维码生成器，你可能需要安装某些第三方库，而它们将大大增加文件的体积。但如果你使用 Web 视图引擎以及通过一个简单的`<script src>`来调用 javascript 库，你就能免费获得这些功能，且不需要安装任何第三方原生库。

#### 3\. 缺乏可靠的移动库

就一些前沿技术而言，还没有可靠稳定的移动端实现。

幸运的是，它们中的大多数都有 Web 端实现，所以集成它们的最有效的方式就是使用 JavaScript 库。

#### 4\. 构建部分原生，部分基于 Web 的应用

许多开发新手希望将他们的网站移植为移动应用，但当他们发现网站的部分特性太过复杂而无法快速为每种移动平台重写时，往往会气馁或受挫。

例如，你可能有一个网页太过复杂而无法立即转换为移动应用程序，但网站的其他部分可能很容易转换。

在这种情况下，如果可以以原生方式构建大部分应用程序，并以 HTML 形式将特别复杂的页面无缝集成于应用中，那就太棒了。

### 它是如何实现的?

#### A. Jasonette

Jasonette 是一种开源的，基于标记的用于构建跨平台原生应用的方法。

它就像一个 Web 浏览器，但它不是将 HTML 标记语言解释为网页，而是将 JSON 标记语言解释为 IOS 或 Android 端的原生应用。

就像所有的 Web 浏览器都有完全相同的代码，却可以通过按需解释各种 HTML 标记来为你提供各种不同的 Web 应用程序一样，所有 Jasonette 应用程序都有完全相同的二进制文件，它按需解释各种 JSON  标记来创建你的应用。开发人员不需要接触代码。相反，你可以通过编写标记来构建应用程序，该标记可以实时转换为原生应用程序。

你可以在 [这里][5]进一步学习 Jasonette。 

虽然 Jasonette 的核心是构建原生应用程序，但本文旨在介绍如何将 HTML 集成到核心原生引擎中，接下来就让我们进一步探讨。

#### B. Jasonette Web 容器

原生应用很棒，但有时我们需要使用 Web 功能。

将 Web 视图集成到原生应用中是一项复杂的工作。无缝集成需要：

1.  **Web 视图应该被集成为原生应用布局的一部分：** Web 视图应该像其他原生 UI 组件一样，作为原生布局的一部分融入应用，否则会让用户感到笨拙，就像在访问一个真的网站一样。
2.  **父应用可以控制子 Web 容器：** 父应用应当可以轻松地控制子 Web 视图。
3.  **子 Web 容器可以触发父应用的原生事件：** 子应用应当可以触发父应用事件从而运行原生 API。

这有许多工作要做，所以我首先介绍第一部分： ——  **简单地将 Web 容器嵌入原生布局中**  ——并将其作为版本1发布： 

[**JSON Web 容器**][6]  
[_JSON 中的 HTML 变成了原生应用中的组件_jasonette.com][7]

这已经非常实用了，但由于其不可交互性，仍然存在一些限制。

父应用无法控制子 Web 容器，子应用无法将任何事件通知父应用，这使得 Web 容器完全独立于外部世界。

#### C. Jasonette Web 容器 2.0：使其可交互

在发布了版本1之后，我进行了第二部分的实验。——  **使 Web 容器变得可交互**

下文将解释添加的解决方案，这些解决方案使得过去的静态 Web 容器变得可交互，并显著增强了它们的功能。

### 实现：交互式 Web 容器

#### **1\. 通过 URL 加载**

#### 问题

先前在版本1中，想要将 Web 容器用作后台视图组件，你必须要首先 [将`$jason.body.background.type`设置为`"html"`然后在 `$jason.body.background.text`属性下硬编码 HTML 文本 ][8]，如下所示：

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "text": "<html><body><h1>Hello World</h1></body></html>"      }    }  }}
```

当然，人们希望能使用一个简单的 Web URL 来实例化容器，而不是在一行中硬编码整个 HTML 文本。

#### 解决方法

Web 容器2.0已经添加了`url`属性。 你可以像这样嵌入本地`file://`HTML（它加载自应用程序附带的本地 HTML 文件）：

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "url": "file://index.html"      }    }  }}
```

或像这样嵌入一个远程的`http[s]://`URL（它加载自远程 HTML 文件）：

```
{  "$jason": {    "head": {      ...    },    "body": {      "background": {        "type": "html",        "url": "https://news.ycombinator.com"      }    }  }}
```

#### **2\. 父应用 <=> Web 容器双向通信**

#### 问题

此前，Web容器只用于显示内容，而非可交互的。这意味着 **以下任一项都不可能实现：**

1.  **Jasonette => Web 容器**: 从 Jasonette 调用 Web 容器内的 JavaScript 函数。
2.  **Web 容器 => Jasonette**: 从 Web 容器代码调用原生 API。

你所能做的就是显示 Web 容器的内容。这就像你将 iframe 框架嵌入了网页中，但主网页无法访问 iframe 框架中的内容。

#### 解决方法

Jasonette 的重点是设计一种标准的标记语言来描述跨平台的移动应用程序。因此，我们需要它能够全面描述父应用与子 Web 容器间的通信。 

为了实现这一点，我在父应用和子 Web 容器之间设计了一个基于`[JSON-RPC][9]`的通信信道。由于 Jasonette 上的所有内容都是用 JSON 对象表示的，所以使用 JSON-RPC 标准格式作为通信协议是非常有意义的。

![](https://cdn-media-1.freecodecamp.org/images/dISqZspArHgei6hasHQ89nw7g1GrWSsyPG8s)

为了对 Web 容器能进行 JavaScript 函数调用我们声明了一个名为`$agent.request`的操作：
```
{  "type": "$agent.request",  "options": {    "id": "$webcontainer",    "method": "login",    "params": ["username", "password"]  }}
```

`[$agent.request][10]`是触发 JSON-RPC 请求并发送到 Web 容器中的原生 API。要使用它，我们必须传递一个`options`对象作为其参数。

 `options`对象是将被发送到 Web 容器的实际[ JSON-RPC 请求][11] 。让我们看看各个属性的含义：

-   `id`: Web 容器构建在一个名为  [Agent][12] 的底层架构之上。通常，一个视图可以有多个 Agent，每个 Agent 都有其唯一的ID。但是 [ Web 容器是一种特殊的 Agent，他只能使用`$webcontainer`作为 ID][13], 因此我们在这里使用这个 ID。
-   `method`: 要调用的 JavaScript 函数名
-   `params`: 传递给 JavaScript 函数的参数数组。

完整的标记如下所示：

```
{  "$jason": {    "head": {      "actions": {        "$load": {          "type": "$agent.request",          "options": {            "id": "$webcontainer",            "method": "login",            "params": ["alice", "1234"]          }        }      }    },    "body": {      "header": {        "title": "Web Container 2.0"      },      "background": {        "type": "html",        "url": "file://index.html"      }    }  }}
```

此标记表示：

当视图加载 (`[$jason.head.actions.$load][14]`)时，向 Web 容器 Agent(`[$agent.request][15]`) 发送 JSON-RPC 请求，该请求在`options`下被指定。

Web 容器在 `[$jason.body.background][16]`下被定义，在本例中将加载一个名为`file://index.html`的本地文件。

它将会查找一个名为`login`的 JavaScript 函数，并传递`params`下的两个参数（`"alice"`和`"1234"`）

```
login("alice", "1234")
```

我只解释了父应用如何触发子 Web 容器的 JavaScript 函数调用，你也可以反其道而行之，[让 Web 容器触发父应用的原生 API][17]。

详情请参阅 [Agent 文档][18]。

#### 范例 

让我们回到前面简单分享的二维码示例：

![](https://cdn-media-1.freecodecamp.org/images/q5-enhI0kpKTs6F33sgyI0mS9sLqOXnHFeHI)

1.  其中 [底部的输入组件是100%原生的][19]。
2.  二维码是由 [作为 Web 应用][20]的 Web 容器产生的。
3. 当用户输入某些内容，并按 “Generate” 时，它将调用 Web 容器 Agent 的`$agent.request`操作，并进一步调用  [JavaScript 函数 "qr"][21]。

你可以在[这里][22]参阅示例。 

#### **3\. 脚本注入**

#### 问题

有时候，你可能想在 Web 容器加载完初始 HTML 后，将 JavaScript 代码动态地注入到其中。

假设你要构建一个自定义的 Web 浏览器应用程序。你可能想将自己的自定义 JavaScript 注入到每个 Web 视图中以自定义 Web 视图的行为，这有点像 Web 浏览器的扩展。

就算你不想构建 Web 浏览器，在想对那些内容无法控制的 URL 实现自定义行为时，你也需要使用脚本注入方法。在原生应用程序和 Web 容器之间实现通信的唯一方法就是通过 `$agent`API。但若你无法更改 HTML 内容，则只能通过动态注入的方式将`$agent`接口添加到 Web 容器中。 

#### 解决方法

就像上文提到的，`$jason.body.background`Web 容器也是一个`agent`。这意味着你可以使用与普通 Agent 相同的`[$agent.inject][23]`方法。

![](https://cdn-media-1.freecodecamp.org/images/kt6qG0I8AgcTy270pNSHCE2QfZpdRRMg8SZU)

#### **4\. URL 点击处理**

在过去，Web 容器处理链接点击只有两种方法：

1.  **只读：** 将 Web 容器视为只读，并忽略触摸或滚动等所有事件。这样所有 Web 容器都是只读的，除非你让它表现得像常规浏览器一样，正如下文所述。
2.  **常规浏览器行为：**  像普通浏览器一样，让用户与页面交互。这需要将`“type”：“$default”`设置为 `“action”`属性来进行声明。

#### 问题

二者都是  **“孤注一掷” 的方案**。

-   在 “只读”情况下，Web 容器将忽略你所有的交互。 
-   在 “常规浏览器行为” 的情况下，Web 容器表现得像浏览器一样。当你点击一个链接，它会像网页一样将链接内容通过刷新页面展示给你。 你无法劫持该链接并调用原生 API。

#### 解决方法

使用新的 Web 容器，你可以将任何`action`附加到`$jason.body.background`Web 容器以处理点击事件。

![](https://cdn-media-1.freecodecamp.org/images/FhoDSEv8qQ4ZISs6syta2eU80WYBeQmFRAAS)

让我们看看这个例子：

```
{  "$jason": {    "head": {      "actions": {        "displayBanner": {          "type": "$util.banner",          "options": {            "title": "Clicked",            "description": "Link {{$jason.url}} clicked!"          }        }      }    },    "body": {      "background": {        "type": "html",        "url": "file://index.html",        "action": {          "trigger": "displayBanner"        }      }    }  }}
```

在这里我们将`"trigger": "displayBanner"`附加到了 Web 容器。这意味着当用户点击 Web 容器中的任何链接时，会触发`displayBanner`操作，而不是让 Web 视图处理它。

此外，若你查看`displayBanner`操作，你会发现`$jason`变量。在本例中，点击的链接将通过`$jason`变量传递。例如，如果你点击一个名为`"https://google.com"`的 URL，`$jason`将获得下列值：

```
{  "url": "https://google.com"}
```

这意味着你可以通过[检查`$jason.url`值][24]来有选择地触发不同的操作。

让我们再举一个实现自定义 Web 浏览器的例子：

```
{  "$jason": {    "head": {      "actions": {        "handleLink": [{          "{{#if $jason.url.indexOf('signin') !== -1 }}": {            "type": "$href",            "options": {              "url": "file://key.html"            }          }        }, {          "{{#else}}": {            "type": "$default"          }        }]      }    },    "body": {      "background": {        "type": "html",        "url": "file://index.html",        "action": {          "trigger": "handleLink"        }      }    }  }}
```

我们测试URL是否包括`signin`字符串，然后根据结果执行不同的操作。

1.  若包含`signin`，则会打开一个新视图并以原生方式处理本地登录。
2.  若不包含`signin`，则只会运行`"type": "$default"`操作，就像普通浏览器一样。

### 使用示范

#### 构建自定义 Web 浏览器

我们现今可以利用新版 Web 容器的特性来：

1.  通过`url`属性实现自我加载，当做一个成熟完备的浏览器
2.  根据 URL 有选择地处理链接点击操作

我们甚至可以用十几行 JSON 代码来构建一个自定义的 Web 浏览器应用。既然我们现在可以劫持每个链接的点击，那么可以看一下`$jason.url`并根据 URL 运行任何我们想要的操作。

让我们看看下面的例子：

![](https://cdn-media-1.freecodecamp.org/images/iNRAFCyHHrGptiuenltF7rK902otq27ZMmTq)

![](https://cdn-media-1.freecodecamp.org/images/8vFiQuuuBm-KTt8LaNS-UEldKrWOCvJlI-0k)

在左侧，我们看到点击链接的行为类似常规浏览器 （`"type": "$default"`）。

在右侧，我们看到点击链接会以原生方式转换到另一个 JASON 视图。

这些都可以通过基于`$jason.url`选择性地触发不同的动作来实现。

**步骤 1.将名为`visit`的操作附加到 Web 容器中，如下所示：**

```
{  ...  "body": {    "background": {      "type": "html",      "url": "https://news.ycombinator.com",      "action": {        "trigger": "visit"      }    }  }}
```

**步骤 2.根据`$jason.url`的值运行`visit`中的相关操作**

在以下代码中，我们将检查`$jason.url`是否与 `newest`,  `show`,  `ask`等相匹配（它们是顶部菜单选项的链接）。若匹配，我们可以通过设置`"type": "$default"`来让 Web 容器像常规浏览器一样工作。

若模式不匹配，我们将通过原生的`$href`过渡到新视图，并将点击的链接作为参数进行传递。

```
..."actions": {  "visit": [    {      "{{#if /\\/(newest|show|ask)$/.test($jason.url) }}": {        "type": "$default"      }    },    {      "{{#else}}": {        "type": "$href",        "options": {          "url": "https://jasonette.github.io/Jasonpedia/webcontainer/agent/hijack.json",          "preload": {            "background": "#ffffff"          },          "options": {            "url": "{{$jason.url}}"          }        }      }    }  ]},
```

在  [此处][25]  查看 Web 浏览器的完整 JSON 标记（它仅有48行！）。

#### 即时 “混合” 应用

人们谈论“混合”应用时，通常是指封装在原生应用框架内的 HTML Web 应用程序。

但在此我并不是想说这个。我说的“混合”，是指真正的混合应用程序，即一个应用程序可以同时具有多个原生视图和多个基于 Web 的视图。与此同时，一个视图可以具有多个原生 UI 组件以及一个以相同的原生布局渲染的 Web 容器。

**基于 Web 的视图与原生视图之间的交互应是无缝的，你根本无法区分起始。**

![](https://cdn-media-1.freecodecamp.org/images/KVknGIXFeBzMxUsY1pBCddiWdEub8Jl26i0g)

在此例中，我创建了一个应用，它将 [jasonbase.com][26] 显示在 Web 容器中作为主视图。

Jasonbase 是我开发的一项免费 JSON 托管服务，旨在让你轻松托管 Jasonette 应用程序的 JSON 标记。

当然，它只是一个网站，但我已将其嵌入 Jasonette 中，所以当你点击链接时，它不会打开一个网页，而是会通过原生的` $ href”`过渡至原生的 JASON 视图。

**我完全无需触及 Jasonbase.com 的代码就可以构建此应用。**

**我只是将网站作为 Web 容器嵌入 Jasonette 中，并劫持了链接点击以实现本地处理，因此它可以执行诸如触发原生 API 和进行原生转换等所有原生操作。**

你可以在[此处][27]查看代码。

### 总结

在我看来， **一切都在框架级别得以应对**，这使得我们的工作非常出色。所有困难的工作都是在后台完成的。

不必给应用开发者施加重负，以从零开始实现以下的一切：

-   将 Web 视图嵌入原生布局
-   创建 JavaScript 桥，以便应用程序可以在 Web 视图中进行函数调用
-   创建原生事件处理架构，以便 Web 视图可以在父应用中触发原生事件

解决方案是创建一个包含以下内容的抽象：

1.  **声明式标记语言：** 用于描述如何将 Web 视图嵌入原生应用
2.  **通信协议 (JSON-RPC)：** 用于应用与子 Web 视图间进行简单交互。

我并不是说这就是解决所有问题的最终方案，但这对于我自己的用例而言是很出色的。

我尝试使用非常前沿的技术来构建应用程序，但该技术还没有稳定可靠的移动端实现（由于协议的本质，目前尚不清楚是否会有移动端的实现）。幸运的是，它具有 JavaScript 实现，因此我可以轻松地将其集成到应用程序中。

总而言之，这很棒且我对其感到满意。[文档是最新版的][28] 包含了所有新特性，欢迎你随时进行探索和体验。

> 免责声明：能力越大，责任越大

我想以免责声明结尾：尽管这种新技术功能强大，我认为你仍需要进行权衡，以构建具有出色用户体验的应用。

有些人可能会这样做并且仅使用 Web 视图来构建整个应用，但这样你的应用基本上就是一个网站，这违背了开发专属应用程序的本意。

我在此强调，我并不是说你应该始终使用 HTML 和原生组件来构建应用。我的意思是，这对于某些情况下的许多人非常有用。你需要自己把握分寸。

> 学习更多

Jasonette 原生核心和其子 Web 容器可以通过多种不同的配置进行通信，从而以强大的具有创造性的方式完成工作。这篇文章只是初步探索。

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
