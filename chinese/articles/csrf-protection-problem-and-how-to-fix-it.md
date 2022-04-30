> - 原文地址：[CSRF Protection Problem and How to Fix it](https://www.freecodecamp.org/news/csrf-protection-problem-and-how-to-fix-it/)
> - 原文作者：[Jakub T. Jankiewicz](https://www.freecodecamp.org/news/author/jcubic/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![CSRF Protection Problem and How to Fix it](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/laptop-security-virus-protection-internet-malware-1588329-pxhere.com.jpg)

有一天，我正在工作中处理一个功能。我在 JIRA 工单（tickets）中创建了很多分支，所以我想在不同的标签页中一次性打开一堆 PRs（Pull Requests）。

这是我通常的工作方式——我有很多标签打开，这可以加快工作速度，因为我不需要等待下一个页面的加载。

但是当我在 BitBucket 中创建了第一个 PR，并试图进入下一个页面时，我收到了一条错误信息，说是一个无效的 CSRF 令牌（token）。这是面对 CSRF， 保护 Web 应用程序的一个常见问题。

所以在这篇文章中，你将了解什么是 CSRF 以及如何修复这个错误。

## Table of contents

- [什么是 CSRF?](./#what-is-csrf)
- [CSRF 防护的标准](#standard-csrf-protection)
- [使用口令的问题](./#the-problem-with-tokens)
- [交叉标签通信解决方案](./#cross-tab-communication-solution)
  - [Sysend 库](./#sysend-library)
  - [广播频道](./#broadcast-channel)
- [总结](./#conclusion)

<h2 id="what-is-csrf">什么是CSRF?</h2>

CSRF 是 **跨站请求伪造（Cross-Site Request Forgery）** 的首字母缩写。它通常是攻击者用来进入你的系统的一种攻击媒介。

你通常防止 CSRF 的方法是发送一个由每个 HTTP 请求产生的唯一的令牌（token）。如果服务器上的令牌与请求中的令牌不匹配，你会向用户显示一个错误。

<h2 id="standard-csrf-protection">CSRF防护的标准</h2>

这是你用令牌对抗 CSRF 的一种方法:

```javascript
const inital_token = '...';

const secure_fetch = (token => {
    const CSRF_HEADER = 'X-CSRF-TOKEN';
    return (url) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              [CSRF_HEADER]: token
            }
        });
        response.then(res => {
           token = res.headers[CSRF_HEADER]
        });
        return response;
    };
})(inital_token);
```

这段代码使用 [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 来发送和接收 [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) 报头中的安全令牌。在后端，你应该在页面加载时生成第一个初始令牌。在服务器上，在每个 [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming))请求中，你应该检查该令牌是否有效。

<h2 id="the-problem-with-tokens">使用口令的问题</h2>

这样做很好，如果你打开一个以上的标签。每个标签都可以向服务器发送请求，这将破坏这个解决方案。而高级用户可能无法以他们想要的方式使用你的应用程序。

但这个问题有一个简单的解决方案，即跨标签通信。

<h2 id="cross-tab-communication-solution">交叉标签通信解决方案</h2>

<h3 id="sysend-library">Sysend 库</h3>

你可以使用 [Sysend 库](https://github.com/jcubic/sysend.js)，这是一个开源的解决方案，我专门为此目的而创建。它简化了跨标签的通信。

如果你愿意，你可以使用像 [广播频道](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) 这样的本地浏览器 API 来做同样的事情。在本文后面会有更多关于如何做到这一点的介绍。

但 **Sysend** 库对不支持 Broadcast Channel（广播频道）的浏览器也有作用。它也可以在 IE 中工作（它有一些错误，这并不奇怪）。你可能还需要支持一些旧的移动浏览器。它还有一个更简单的 API。

这是最简单的例子:

```javascript
let token;
sysend.on('token', new_token => {
    token = new_token;
});

// ...

sysend.broadcast('token', token);
```

使用 sysend 库的基本功能的简单例子

而这就是你如何使用这个库来修复 CSRF 保护:

```javascript
const inital_token = '...';

const secure_fetch = (token => {
    const CSRF_HEADER = 'X-CSRF-TOKEN';
    const EVENT_NAME = 'csrf';
    sysend.on(EVENT_NAME, new_token => {
        // get new toke from different tab
        token = new_token;
    });
    return (url) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              [CSRF_HEADER]: token
            }
        });
        response.then(res => {
           token = res.headers[CSRF_HEADER];
           // send new toke to other tabs
           sysend.broadcast(EVENT_NAME, token); 
        });
        return response;
    };
})(inital_token);
```

使用 sysend 的带有 CSRF 保护的 secure_fetch 函数

你所要做的就是在发送请求时从其他标签页发送和接收一条信息。而你的 CSRF 保护的应用程序将在许多标签页上工作。

就这样了。这将让高级用户在想打开许多标签页时使用你的有 CSRF 保护的应用程序。

<h3 id="broadcast-channel">广播频道</h3>

下面是使用广播频道的最简单例子:

```javascript
const channel = new BroadcastChannel('my-connection');
channel.addEventListener('message', (e) => {
    console.log(e.data); // 'some message'
});
channel.postMessage('some message');
```

广播频道的基本用法

因此，通过这个简单的 API，你可以做和上面一样的事情:

```javascript
const inital_token = '...';

const secure_fetch = (token => {
    const CSRF_HEADER = 'X-CSRF-TOKEN';
    const channel = new BroadcastChannel('csrf-protection');
    channel.addEventListener('message', (e) => {
        // get new toke from different tab
     token = e.data;
    });
    return (url) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              [CSRF_HEADER]: token
            }
        });
        response.then(res => {
           token = res.headers[CSRF_HEADER];
           // send new token to other tabs
           channel.postMessage(token);
        });
        return response;
    };
})(inital_token);
```

使用广播频道的带有 CSRF 保护的 secure_fetch 函数

正如你在上面的例子中看到的，广播频道没有任何事件命名空间。因此，如果你想发送多于一种类型的事件，你需要创建事件类型。

下面是一个使用广播频道的例子，除了我们到目前为止讨论的 CSRF 保护修复之外，还可以做更多的事情。

你可以为你的应用程序同步登录和注销。如果你登录到一个标签，你的其他标签也会登录到你。以同样的方式，你可以同步一些电子商务网站的购物车。

```javascript
const channel = new BroadcastChannel('my-connection');
const CSRF = 'app/csrf';
const LOGIN = 'app/login';
const LOGOUT = 'app/logout';
let token;
channel.addEventListener('message', (e) => {
    switch (e.data.type) {
        case CSRF:
            token = e.data.payload;
            break;
        case LOGIN:
            const { user } = e.data.payload;
            autologin(user);
            break;
        case LOGOUT:
            logout();
            break;
    }
});

channel.postMessage({type: 'login', payload: { user } });
```

使用具有不同类型信息的广播频道

<h2 id="conclusion">总结</h2>

如果您保护您的应用免受攻击，那就太好了。 但是请想清楚人们将如何使用您的应用程序，避免不必要的东西，导致难以使用。这不仅适用于这个特定问题。

**Sysend** 库是一种在同一浏览器中打开的选项卡之间进行通信的简单方法。 它可以解决 CSRF 保护的主要问题。 该库具有更多功能，您可以查看其 [GitHub repo](https://github.com/jcubic/sysend.js) 了解更多详细信息。

**广播频道**也没有那么复杂。 如果你不需要支持旧的浏览器或一些旧的移动设备，你可以使用这个 API。 但是如果你需要支持旧的浏览器，或者想让你的代码更简单，你可以使用 sysend 库。

如果您想查看浏览器对广播频道的支持，您可以查看 [Can I Use](https://caniuse.com/broadcastchannel) 网站。
