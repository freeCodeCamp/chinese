> -  原文地址：[How to Write Helpful Error Messages to Improve Your App's User Experience](https://www.freecodecamp.org/news/how-to-write-helpful-error-messages-to-improve-your-apps-ux/)
> -  原文作者：[Andrico KaroullaAndrico Karoulla](https://www.freecodecamp.org/news/author/andrico/)
> -  译者：haomaoshibako
> -  校对者：

![How to Write Helpful Error Messages to Improve Your App's User Experience](https://images.unsplash.com/photo-1594322436404-5a0526db4d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fGVycm9yfGVufDB8fHx8MTYxNzI2MTMwNw&ixlib=rb-1.2.1&q=80&w=2000)

程序运行过程中只显示无用和通用报错信息的日子已经一去不复返了。

![A generic error message displaying: "Oops, something went wrong. Please try again later"](https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png)

_出离愤怒退出程序前的截图_


既然你在阅读这篇文章，那么你大概关心如何让用户获得尽可能愉悦的使用体验，报错信息在这之中就起着重要的作用。有用的报错信息从长远来看，能避免用户在无法正常使用应用程序的时候少些抓狂，多些快乐。


本文分为两个部分。第一部分介绍报错信息的背景和它们如此重要的原因，不管你是否是一名 JavaScript 开发者，了解这部分的内容都会大有助益。

第二部分有一则简短的跟帖，可以指导你开始管理自己的报错信息。

## **报错信息的现状**

在完美世界中，报错信息根本毋需存在，用户应能毫无障碍地在你搭建的环境中畅游。然而，现实中错误会发生，而你的用户一定会碰到这些错误。

错误可能来源于：
-   验证失败
-   服务器端故障
-   速率限制
-   错误代码
-   上帝开的玩笑

当错误发生时，客户看到的报错信息可能是以下的其中一类：

-   通用且无有用信息的报错，例如： `出错了，稍后再试`

-   从服务器发送的堆栈跟踪中获取的过于具体的信息，例如：`Error 10x29183: line 26: error mapping Object -> Int32`


以上两种对用户来说都没什么用。

对于用户来说，看到通用报错信息只能让他们感到无助和挫败。他们无法根据这样的报错信息完成指令，进而了解错误如何发生且应该如何解决。这只会使得用户失去对产品的信任，而你则可能失去客户，或得到一条充满怒火的产品评价。

而过于具体的报错信息，是“泄漏”出来的抽象信息，本不应出现在用户面前。

首先，这类错误显示了服务器端的实现逻辑。这将会引发安全问题吗？或许会，但毕竟我不是一名安全测试员，我的这一观点不一定符合实际情况。

其次，如果我们是在打造吸引人的用户体验（为什么不这么做呢？），产品的报错信息就该人性化，并以服务用户为导向。我在许多地方看到了与这个观点类似的看法，会在文末的延伸阅读中进行标注。

## **为什么我应该构建合理（sane message）的报错信息**

### 维持开发者头脑清醒

抓取 bug 很困难，扫描日志很乏味。有时我们能理解产品失败的前因后果，有时我们却无法掌握线索。因此当用户向我们报错时，我们需要他们提供尽可能多且有用信息。

一条用户发来的错误报告如下：

`你好，我昨晚使用 app 的时候更新了账户信息，它突然无法运行了。错误信息显示验证失败，但我不知道这是什么意思。`

改成下面这条就有用得多：

`你好，我昨晚使用 app 的时候更新了账户信息，它突然无法运行了。错误报告显示“我们无法更新你的档案。你的地址必须位于欧盟”。但我目前居住在英国。`

这样的反馈节约时间也减少逻辑谬误。清晰而具体的报错信息还能帮助用户理解他们哪里做错了，以及该如何修正这些错误。

### 保持组织头脑清醒


合理的报错信息也能给组织整体带来好处。在大公司，由品牌信息衍生的副本及品牌信息的创建可能由一个完全独立的部门负责。代码中需要修改的文本量越多，副本就越容易与公司的品牌准则脱节。

相反，保证所有的报错信息都同源，能让副本更易遵循品牌准则。

其他部门如支持团队，可能会疲于应付用户发出的支持请求。如果你是一名工程师，可以主动与支持团队配合，通过改进报错信息减少用户发送的支持请求。


修复改进报错信息可以降低用户错误填写表格、缺失数据，或缺乏特定行为权限的可能性，这将为支持团队的工作生活带来积极改变。

### 保持终端用户头脑清醒

我们希望通过合理的报错信息，让我们的终端用户不再感到无助。

如上文所述，我们传递的信息结构应该是服务导向的。它们应该指导用户走完既定程序，或至少在他们遇到超出控制的问题时，知道去哪里寻求帮助。

在 Jon Yablonski 的《用户体验法则》一书中，他描述了一个心理学概念，称为 "峰值规则"：
> __人们判断一次体验的好坏，取决于他们在这段体验中感情最强烈的时刻或是结束时的感受，而不是这段体验中每一时刻的感受总和或所有感受的平均值。__


在本文描述的背景下，如果用户受挫到愤怒地退出你的网站，你的程序给他们留下的印象就是——它很难用。

报错信息能很大程度上防止这种情况的发生，因为它们就像守门员，避免那些仅是卡在程序中某一步的用户因过于受挫而退出程序。

当用户使用你的产品进行线上交易，如购买飞机票或网上购物，而在选购时卡在系统某处没法继续，他/她很可能会退出并选择在另一个网站购买。这就是你失去的又一位客户。

虽然这完全是传闻，但我经常因为不知道如何完成一项任务进程愤而退出网站：点击一个按钮时，要么什么都没发生，要么就是一直收到模糊的报错信息。

除非这些网站或应用程序是那几个无处不在的平台之一（如谷歌、Instagram、苹果），否则我有很大的概率再也没有用过它们。我相信你也经历过类似的情况。我将在 [Twitter](https://twitter.com/andricokaroulla?lang=en) 上更新糟糕的报错信息，欢迎投稿。

使用合理的报错信息可以帮助抵消程序运行不畅的挫败感。令人惊讶的是，一个如此有用的报错信息只需要包含少量要素。

## 好的报错信息是怎样的?

摘自 [《微副本：完整指南》](https://www.microcopybook.com/)。一条有用的报错信息应该具备以下要素:

-   清楚说明出现了某个问题
-   解释问题是什么
-   如可能，提供解决方案让用户继续使用，或者
-   引导他们去寻求帮助
-   尽量让这个令人抓狂的场景变得愉悦

以上短短几句看上去包含了非常多的工作内容，为了让它们更具体，我在下文提供了几个很不错的报错信息案例：
-   我们已经限制了你每小时可以重置密码的次数。你可以稍后再试。
-   请登录再查看此档案
-   我们无法创建你的档案，只有英国居民可以使用我们的应用程序。

需要特别说明的是，我不是一个用户体验研究员或设计师，只是一个对用户体验有浓厚兴趣的前端开发人员。上述例子可能不符合你开发项目或所处组织的需求。

话说回来，如果你是一个前端工程师，改善你所在组织的报错信息，是一个提升技能并与负责用户体验的同事协作的好机会。

## 如何开始创建合理的报错信息?

我开源了一个简单的工具，叫做`sane-error-messages`。运行该工具将生成一个全新的 repo，用于存放默认报错信息。你可以调整默认值，添加或删除信息，然后将其发布到面向客户的应用程序中使用。

`sane-error-messages`的工作原理是将所有的报错信息整合到单一的 JavaScript 对象中。键对应错误代码，值对应报错消息。

错误代码应该与你从服务器上接收到的代码相同，如`POSTS_NOT_FOUND`或`CONFLICTING_USER_RECORD`。报错信息 repo 调用暴露函数从错误代码中获取报错信息。
这个灵感源于 [Cypress](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://github.com/cypress-io/cypress/blob/develop/packages/server/lib/errors.js*) 处理报错信息的方法。

只要你的服务器返回可预测的错误代码，服务器端的实现并不重要。下面的序列只是实现__`sane-error-messages`__的一种方式

![A sequence diagram showing the process of displaying a sane error message.](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-15-at-21.41.28.png)

你开发的面向用户的应用程序越多，拥有一个专门的 repo 就越重要。

总而言之：

-   用户“查看所有产品”
-   前端发出一个网络请求
-   网络请求失败并返回错误代码 "USER/_NOT FOUND"
-   前端从你的`error-messages`包中请求相应的报错信息。
-   前端应用所有与上下文相关的信息
-   前端将这些信息显示给终端用户。

你可以在 [CodeSandbox](https://codesandbox.io/s/amazing-platform-dxtjc?file=/src/App.js) 亲自上手体验一下。 CodeSandbox 向一个虚拟服务器发出请求，随机返回 12 个错误代码中的一个。

客户端将使用错误代码，从报错信息库中检索一个合理的报错信息。接着，客户端向用户显示报错信息。如果代码中没有指定的信息，就会显示通用报错信息（它们通常都很糟糕）。


![A gif of relevant error messages displaying on a code sandbox](https://www.freecodecamp.org/news/content/images/2021/03/ezgif.com-gif-maker--2-.gif)

一些随机产生的报错信息

## 如何设置你的报错信息

注：你可以在这里找到 [repo](https://github.com/andrico1234/sane-error-messages#readme)。如果你在教程过程中遇到任何问题，可以在 GitHub 上提出。

开始时运行

`yarn global add sane-error-message`

然后运行

`sane-error-messages create <dirName>`

来支撑你的项目。

这样一来，你将创建一个全新的模块，并在该模块中修改默认报错信息。

新模块使用 `tsdx` 处理内部所有模块管理脚本，如运行、创建和测试。 

如需了解 `tsdx` 的更多信息，可点击[此处](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://tsdx.io/*)。

简而言之，新包将包含如下内容：
```typescript
/* errorCodes.ts: The file that defines each error code like */
const USER_NOT_ADMIN = '403_USER_NOT_ADMIN'

/* defaultErrorMessages.ts: Maps each code to a default message */
const errorCodes {
  // your codes and messages go here...
  [USER_NOT_ADMIN]: "We're afraid only administrators have access to "
}

/* ErrorMessages.ts: The class you'll use to instantiate your error messages object in the consuming project */
class ErrorMessages {
  // You can override default messages with more specific ones
  constructor: (customErrorMessages: Partial<Record<string | number, string>>): ErrorMessages;

  // Pass through an error code to get your custom message
  getErrorMessage: (code: string | number, fallbackMessage?: string): string;

  // Checks to see if the argument is a valid error code and acts as a guard for non-ErrorCode values
  isErrorCode(code: string | number): boolean;

  // Returns the errorCodes object with your custom messages
  messages: Record<ErrorCode, string>
}

type ErrorCode = ValueOf<errorCodes>
```

## 如何使用你的报错信息

如果你创建了一个名为 "custom-error-messages "的 repo，并将其发布到 npm，你就可以通过以下方式在你的应用程序中使用它。

```typescript
import { ErrorMessages } from 'custom-error-messages';

const customErrorMessages = {
  '400_validation': 'Please enter the fields in your form correctly',
};

// Initialise your errorMessages object with your custom messages
const errorMessages = new ErrorMessages(customErrorMessages);

function riskyFunction() {
  try {
    // Throws an error 
    await boom();
  } catch (err) {
    // Get the error code our server sent over
    const { code } = err;
		
    // Get the code's corresponding message
    const message = errorMessages.getErrorMessage(code);
    
    // Display the message to the client
    displayNotification(message);
  }
}
```

然后，你可以获取从服务器端返回的所有错误代码，将报错信息与之一一对应。

准备工作一切就绪后，你就可以把工具包发布到 npm，然后在面向客户的应用程序中使用它。
## **总结**

我希望上述对于网站开发中一个经常被忽视的方面——报错信息的介绍对你有所帮助。

为了了解报错信息，我做了很多功课，下面分享一些我最喜欢的资源。有些是书，有些是短文，它们都值得花时间去阅读和学习。

如果教程有任何令人困惑的地方，或你觉得可以精简的部分，也欢迎你联系我。感谢你的阅读。
## 常见问题

### 为什么服务器端不能直接返回报错信息？

服务器不应涉及任何面向客户端的逻辑。但如果你够走运，与每次请求失败时都给出有用错误代码的 API 协同工作，你将很快成功。

### 我是否需要为每个 API 消费者创建一个报错信息实例？

不一定。因为这个包可以接收默认信息和代码的列表，只要它与 API 同步，你的前端就可以共用一个包。

在每个客户端实例中，你可以通过额外的错误代码，或覆盖现有信息来定制你的前端报错信息。

### 我认为这个包中应该有 X 或 实现 Y

报错信息对于我还是个很新的领域，开源工具也还在改进中。我希望能获取更多建议，或是对于__`sane-error-messages`整体架构或功能集的改进建议。

## **延伸阅读**

****《微副本：完整指南》****  
在上文我已经提到过这本书。在讨论如何让面向用户的产品更加人性化方面，它是我最喜欢的书之一。
这本书的作者 Kinneret Yifrah 慷慨地提供了一张 9 折的优惠券，你可以在[这里](https://www.microcopybook.com/)购买。

电子书折扣码：andrico-ebook

整套（平装书 + 电子书）购买折扣码：andrico-bundle

**** NN Group《报错信息指南》****  
这篇[短文](https://www.nngroup.com/articles/error-message-guidelines/) 主要阐释了合理报错信息的重要性，同时还分享了一些指导如何创建合理报错信息的干货。

简而言之，包含如下内容：

-   错误应该用通俗的语言描述
-   说明问题是什么
-   提供解决方案

****微软《报错信息（设计基础）》****  
这篇[深入的文章](https://docs.microsoft.com/en-us/windows/win32/uxguide/mess-error)既包含设计指南也讲解报错信息的实际案例。

****《用户体验法则》****  
这本[短小精悍的书](https://www.amazon.co.uk/gp/product/149205531X/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=149205531X&linkCode=as2&tag=calistheni02b-21&linkId=3f089ce27d59c4eeb48522be9ac52fb2) 介绍了如何利用少量的心理学概念来改善你产品的用户体验。
