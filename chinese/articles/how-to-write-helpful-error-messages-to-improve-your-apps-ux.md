> -  原文地址：[How to Write Helpful Error Messages to Improve Your App's User Experience](https://www.freecodecamp.org/news/how-to-write-helpful-error-messages-to-improve-your-apps-ux/)
> -  原文作者：[Andrico KaroullaAndrico Karoulla](https://www.freecodecamp.org/news/author/andrico/)
> -  译者：haomaoshibako
> -  校对者：

![How to Write Helpful Error Messages to Improve Your App's User Experience](https://images.unsplash.com/photo-1594322436404-5a0526db4d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fGVycm9yfGVufDB8fHx8MTYxNzI2MTMwNw&ixlib=rb-1.2.1&q=80&w=2000)

程序运行过程中只显示无用和通用报错信息的日子已经一去不复返了。

![A generic error message displaying: "Oops, something went wrong. Please try again later"](https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png)

图片为通用报错信息：哎呀，出错了，请稍后再试
_出离愤怒退出程序前的截图_


如果你正在阅读这篇文章，你大概关心如何让用户获得尽可能愉悦的使用体验，报错信息就起着重要的作用。有用的报错信息从长远来看，能避免用户在无法正常使用应用程序的时刻少点抓狂，多点快乐。


这篇文章分为两个部分。第一部分介绍报错信息的背景和它们如此重要的原因，不管你是否是一名 JavaScript 开发者，了解这部分的内容都是大有助益的。

第二部分有一则简短的跟帖，可以指导你开始管理自己的报错信息。

## **报错信息的现状**

在完美世界中，报错信息根本不毋需存在，用户能毫无障碍地你搭建的环境中畅游。然而，现实中错误会发生，而你的用户一定会碰到这些错误。

错误可能来自于：
-   验证失败
-   服务器端故障
-   速率限制
-   错误代码
-   上帝的玩笑

当错误发生时，客户看到的报错信息可能是以下的其中一类：

-   通用且无有用信息的报错，例如： `出错了，稍后再试`

-   从服务器发送的堆栈跟踪中获取的过于具体的信息，例如：`Error 10x29183: line 26: error mapping Object -> Int32`


以上两种对用户来说都没什么用。

对于用户来说，看到通用报错信息只能让他们感到无助和挫败。他们无法根据这样的报错信息完成指令，进而了解错误如何发生且应该如何解决。这只会使得用户失去对产品的信任，而你则可能失去客户，或得到一条充满怒火的产品评价。

而过于具体的报错信息，是泄漏的抽象信息，不应该出现在用户面前。

首先，这类错误显示了服务器端的实现逻辑。这将会是个安全问题吗？也许？的确我也不是一个安全测试员。

其次，如果我们是在打造吸引人的用户体验（你为什么不呢？），产品的报错信息就该让用户感到人性化，并以服务用户为导向。我在许多地方看到了与这个观点类似的看法，并在文末的延伸阅读中对它们进行了标注。

## **为什么我应该构建合乎逻辑（sane message）的报错信息**

### 维持开发者头脑清醒

其次，如果我们是在打造吸引人的用户体验（何乐而不为呢？），产品的报错信息就该让用户感到人性化，并以服务用户为导向。我在许多地方看到了与这个观点类似的看法，并在文末的延伸阅读中对它们进行了标注。

抓取 bug 很困难，扫描日志很乏味。有时我们能理解产品失败的前因后果，有时我们却无法掌握线索。因此当用户向我们报错时，我们需要他们提供尽可能多而有用信息。

一条用户发来的错误报告如下：

`你好，我昨晚使用 app 的时候更新了账户信息， app 突然无法运行了。错误信息显示验证失败，但我不知道这是什么意思。`

改成下面这条就有用得多：

`你好，我昨晚使用 app 的时候更新了账户信息，app 突然无法运行了。错误报告显示“我们无法更新你的信息。你的地址必须位于欧盟”。但我目前居住在英国。`

这样的反馈节约时间也减少逻辑谬误。清晰而具体的报错信息也能帮助用户理解哪里做错了，如何修正这些错误。

### 保持组织头脑清醒


合理的报错信息也能给组织整体带来好处。在大公司，由品牌信息衍生的副本及品牌信息的创建可能由一个完全独立的部门负责。代码中需要修改的文本量越多，副本就越容易与公司的品牌准则脱节。

相反，保证所有的报错信息都同源，能让副本更易遵循品牌准则。

其他部门如支持团队，可能会疲于应付用户发出的支持请求。如果你是一名工程师，可以主动与支持团队配合，通过改进报错信息减少用户发送的支持请求。


修复改进报错信息可以降低用户错误填写表格、缺失数据，或缺乏特定行为权限的可能性，这将为支持团队的工作生活带来积极改变。

### 保持终端用户头脑清醒

我们希望通过合理的报错信息，让我们的终端用户不再感到无助。

如上文所述，我们传递的信息结构应该是服务导向的。它们应该指导用户走完既定程序，或至少在他们遇到超出控制的问题，知道去哪里寻求帮助。

在Jon Yablonski的《用户体验法则》一书中，他描述了一个心理学概念，称为 "峰值规则"：
> __人们判断一次体验的好坏，取决于他们在这段体验中感情最强烈的时刻或是结束时的感受，而不是这段体验中每一时刻的感受总和或感受的平均值。__


在本文描述的背景下，如果用户受挫到愤怒地退出你的网站，你的程序给他们留下的印象就是——它很难用。

错误信息在防止这种情况的发生方面起着很大的作用，因为它们就像守门员，避免那些仅是卡在程序中某一步的用户因过于沮丧而退出程序。

当用户使用你的产品进行线上交易，如购买飞机票或网上购物，而在选购时卡在系统某处没法继续，他/她很可能会退出并换另一个网站购买。这就是你失去的又一位客户。

虽然这完全是传闻，但我经常因为不知道如何完成一项进程愤而退出网站：点击一个按钮时，要么什么都没发生，要么就是一直收到模糊的报错信息。

除非这些网站/应用程序是那几个无处不在的平台之一（如谷歌、Instagram、苹果），否则我很大概率再也没有用过它们。我相信你也经历过类似的情况。我将在 [Twitter](https://twitter.com/andricokaroulla?lang=en) 上更新可怕的报错信息，欢迎投稿。

使用合理的报错信息可以帮助抵消程序运行不畅的挫败感。令人惊讶的是，一个如此有用的报错信息只需要包含少量要素。

## 好的报错信息是怎样的?

摘自 [微副本：完整指南](https://www.microcopybook.com/)。一条有用的报错信息应该具备以下要素:

-   清楚说明问题发生了
-   解释问题是什么
-   如可能，提供解决方案让用户能继续进程，或者
-   引导他们去寻求帮助
-   尽量让这个令人抓狂的场景变得愉悦

以上这简单的几个句子看上去包含了非常多的工作量，那么在下文我将提供几个很不错的报错信息案例让上述说明更具体：
-   我们已经限制了你每小时可以重置密码的次数。你可以稍后再试。
-   请登录再查看此档案
-   我们无法创建你的档案，只有英国居民可以使用我们的应用程序。

需要特别说明的是，我不是一个用户体验研究员或设计师，只是一个对用户体验有浓厚兴趣的前端开发人员。上述例子可能不符合你开发项目或所处组织的需求。

话说回来，如果你是一个前端工程师，改善你所在组织的报错信息，是一个提升技能并与负责用户体验的同事协作的好机会。

## 我如何开始创建合理的报错信息?

I've open-sourced a simple tool called `sane-error-messages`. Running the tool will generate a brand new repo designed to house your default error messaging. You can tweak the default values, add or remove messages, and then publish it to consume within your client facing apps.

`sane-error-messages` works by aggregating all of your messaging in to a single JavaScript object. The key is an error code, and the value is a corresponding message.

The error codes should be the same codes you receive from your server, such as  `POSTS_NOT_FOUND` or `CONFLICTING_USER_RECORD`. Your error messaging repo exposes a function to get your error message from an error code.

This approach was inspired by how tools like [Cypress](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://github.com/cypress-io/cypress/blob/develop/packages/server/lib/errors.js*) handle their error messaging.

As long as your server returns predictable error codes, the server-side implementation doesn't matter. The following sequence is just one way of implementing __`sane-error-messages`__

![A sequence diagram showing the process of displaying a sane error message.](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-15-at-21.41.28.png)

Having a separate repo becomes more important the more user-facing apps you have.

In short:

-   The user "views all products"
-   The frontend makes a network request
-   The network request fails and returns an error code "USER\_NOT FOUND"
-   The frontend requests the corresponding error message from your `error-messages` package.
-   The frontend applies any relevant contextual information
-   The frontend displays this information to the end user.

If you want to try something hands on, you can play with this [CodeSandbox](https://codesandbox.io/s/amazing-platform-dxtjc?file=/src/App.js). The CodeSandbox fires off a request to a mock server which returns 1 of 12 error codes at random.

The client side will use the error code to retrieve a sane error message from the error messages repo. The client side then displays the error message to the user. If the code doesn't have a specified message, the generic fallback gets shown (and it sucks).

![A gif of relevant error messages displaying on a code sandbox](https://www.freecodecamp.org/news/content/images/2021/03/ezgif.com-gif-maker--2-.gif)

Some sane error messages in the wild

## How to set up your error messages

Note: You can find the [repo here](https://github.com/andrico1234/sane-error-messages#readme). If you come across any problems during the tutorial process you can file a GitHub issue.

Begin by running

`yarn global add sane-error-message`

then

`sane-error-messages create <dirName>`

to scaffold your project. Doing so will create a brand new module for you to customise with your default error messages.

Your new module uses `tsdx` under-the-hood to handle all of the module management scripts, such as running, building, and testing.

You can learn more about [tsdx here](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://tsdx.io/*).

In short, the contents of your new package will look like this:

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

## How to consume your error messages

If you created a repo with the name `custom-error-messages` and published it to npm, you'd be able to consume it within your apps by doing the following:

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

You can then take all of the error codes that your server-side returns and apply corresponding messages to them.

Once you're ready, you can publish your tool to NPM, and then consume it from your client-facing apps.

## **Conclusion**

I hope you've enjoyed learning about an often overlooked aspect of web development.

I've done a bunch of reading to learn about error messaging and I've shared some of my favourite resources below. Some are books and others are short articles, but they're all worth your time.

You can also reach out if any part of the tutorial wasn't clear, or if you feel I can streamline things. Thanks for reading.

## FAQs

### Why can't the server-side just return these messages?

The server shouldn't be concerned with any client-facing logic. But if you're fortunate enough to work with an API that gives useful error codes with each failed request, then you're nearly there.

### Will I need to create an instance of error-messages for every API consumer?

Not necessarily. Because this package can take a list of default messages and codes, as long as it's in sync with the APIs, your frontends will be able to consume the same package.

In each client-side instance, you can pass through additional error codes, or override existing messages to tailor your frontend messaging.

### I think this package should have X or do Y differently

I'm dogfooding this internally at my job, and this is a problem space I'm very new to. I would love to hear of any suggestions, or improvements to the overall architecture or feature-set of __`sane-error-messages`.__

## **Further Reading**

****Microcopy: A Complete Guide****  
I mentioned this book a little earlier, and it's one of my favourites when it comes to making my user-facing products a lot more personable.

The book's author Kinneret Yifrah, has graciously provided a coupon for 10% off, you can purchase it [here](https://www.microcopybook.com/).

Coupon code for the eBook: andrico-ebook

Coupon code for the bundle: andrico-bundle

****Error messaging guidelines: NN Group****  
A [short article](https://www.nngroup.com/articles/error-message-guidelines/) on the importance of sane error messaging which shares some very useful tips on how to create sane error messaging.

In short:

-   Errors should be expressed in plain language
-   Indicate what the problem is
-   Suggest a solution

****Error Messages (Design basics): Microsoft****  
An [in-depth article](https://docs.microsoft.com/en-us/windows/win32/uxguide/mess-error) that covers both design guidelines messaging practices

****Laws of UX****  
A [short book](https://www.amazon.co.uk/gp/product/149205531X/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=149205531X&linkCode=as2&tag=calistheni02b-21&linkId=3f089ce27d59c4eeb48522be9ac52fb2) that introduces how a handful of psychology concepts can be used to improve your products UX.
