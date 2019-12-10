> * 原文地址：[Progressive Web Apps 101: the What, Why and How](https://www.freecodecamp.org/news/progressive-web-apps-101-the-what-why-and-how-4aa5e9065ac2/)
> * 原文作者：Shruti Kapoor
> * 译者：azzinoths0905
> * 校对者：



![Progressive Web Apps 101: the What, Why and How](https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg)

#### 什么是渐进式Web应用(PWA)？为什么我们需要PWA？我们应该如何搭建一个PWA应用？

你有看到过上面第一张图这样的“添加到主屏幕”的弹出框吗？当你按下这个按钮时，这个"APP"就会自动在后台进行安装，然后你可以在你手机的APP列表里找到它。你打开它时，你可以在里面做和之前在浏览器里一样的事，不过这次不用再打开浏览器了，这个APP现在直接运行在你的手机系统中。

现在你拥有的是一个从Web应用上下载下来的移动APP。在这整个过程中，我们甚至都不需要去打开手机应用商店。

获得这样一个APP如此简单！不过还有更厉害的，你甚至可以在没有网络的时候浏览这个APP里的内容，可以离线使用它，这可太棒了！

这就是渐进式Web应用(PWA)。你可以直接通过浏览器安装PWA应用，它可以像原生APP一样在手机上使用，无论你有没有网络。

但是，对于Web应用而言，渐进式到底意味着什么？ 让我们来更深入地研究什么是PWA，为什么我认为它们比原生APP更好，它们又是为什么与传统的Web应用不同。

### 什么是渐进式Web应用(PWA)？

The term Progressive Web App was coined by  [Alex Russell][1]  and Frances Berriman. In Alex’s words:

PWA这一概念是由[Alex Russell][1]和Frances Berriman创造的。引用Alex的话：

> PWA其实就是新增了各种有用特性的网页。

它不是什么新的框架或技术，而是让一个Web应用可以像桌面或移动APP一样运作的一些最佳实践。主旨是为了让Web应用有一种更统一、更沉浸的体验，以至于用户无法分辨PWA与原生APP之间的区别。

PWA通过渐进增强来提高用户体验。换句话说，这意味着PWA应用可以在旧手机上运行和现在最前沿的手机上一样的功能。当然，某些功能可能不可用，但这个APP仍然可以正常运行，提供应有的功能。

### 为什么我们需要PWA？

在讲为什么我们需要PWA之前，让我们先谈谈当今原生和Web应用所面临的一些问题。

**网速**：你可能并没有网速问题，这取决于你住在什么地方，但是全球60％的人口仍在使用2G互联网。 即使在美国，有些人还是不得不使用拨号上网。

**网页加载速度慢：**如果网页加载太慢，你知道用户等多少时间就会点“关闭X”按钮吗？ 三秒钟！如果网页加载太慢，则有53％的用户会选择直接关闭标签页。

**抗拒安装新的APP：**用户不想安装原生APP，普通用户一个月内平均安装的APP数量不到1个。

**用户粘性：**用户将大部分时间花在原生APP上，但移动端网页的访问量几乎是原生APP的三倍。 因此，大多数用户都不会长时间去使用Web应用，它们80％的时间都花在了前三名的原生APP上。

![](https://cdn-media-1.freecodecamp.org/images/1*o2eA_ZR6hnUVTH2EvIAYqg.png)

#### 用户粘性：移动端Web应用 VS 原生APP

用PWA有很多好处，这里列出它最有帮助的几项：

1.  **F**ast（速度快）：PWA应用可以持续提供快速的用户体验。 从开始下载到可以使用，整个过程都非常快。由于可以缓存数据，即使没有网络也可以再次快速启动这个APP。
2.  **I**ntegrated user experience（沉浸式的用户体验）：PWA应用用起来就像原生APP一样。 它们可以放在用户的主屏幕上，发送推送通知，并可以访问设备硬件的功能，有着沉浸式的体验。
3.  **R**eliable experience（高可用性）: 在`service worker`的帮助下，即使网络出现问题，PWA应用也可以在用户的屏幕上正常渲染图片。
4.  **E**ngaging（高用户粘性）: 由于PWA应用可以向用户推送通知，所以我们可以唤醒用户来真正地提高粘性。

取各个首字母，就是**FIRE**！

![](https://cdn-media-1.freecodecamp.org/images/1*maLaYJoCMBNabnUdrgwPMQ.jpeg)

### 我们应该如何搭建一个PWA应用？

Google为渐进式Web应用发布了 [项目清单][2]。 想让一个Web应用成为PWA应用，至少需要以下四个要求：

#### 1\. Web App Manifest

![](https://cdn-media-1.freecodecamp.org/images/1*LhaR74lzxYyeKwNOWh9oNQ.png)

一个示例的`manifest.json`文件

这只是一个提供Web应用相关的`meta`信息的`json`文件。它有诸如APP图标（用户在将其安装到设备中后会看到的图标），APP的背景颜色，APP的名称，简称等信息。我们可以自己编写`manifest`文件，也可以使用[工具][3]为我们生成一个`manifest`文件。

![](https://cdn-media-1.freecodecamp.org/images/1*yzOwzdDG48AlJcPrSby1kw.png).

你可以用Google的工具自动生成`manifest`文件。

#### 2\. Service Workers

`Service Worker`是事件驱动的服务，它们在APP的后台运行，并充当网络和APP之间的代理。 他们能够拦截网络请求并在后台为我们缓存信息。 这可用于加载数据以供离线使用。它们是一个JavaScript脚本，用于侦听诸如获取和安装之类的事件，并执行任务。

这里是一个`serviceworker.js`的示例：

```javascript
self.addEventListener('fetch', event => {
    //缓存数据以供离线使用
    const {request} = event;
    const url = new URL(request.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheData(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});
async function cacheData(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}
```

#### 3\. 图标

这是当用户在设备上安装PWA应用时显示的APP图标， jpeg图片就可以了。我在上面贴出的`manifest`文件里有列出多种尺寸的图标，我觉得这非常有用。

#### 4\. 使用HTTPS

为了让Web应用成为PWA应用，必须要通过安全网络为它提供服务。借助Cloudfare和LetsEncrypt之类的服务，获取SSL证书确实非常容易。 成为安全站点不仅是最佳实践，而且还将Web应用建立为值得用户信任的站点，以获得用户的信任和依赖，并避免中间人攻击。

**注意：这是一个有2个部分的系列的第1部分，在下一部分中，我们会用一个编写好的`index.html`从头创建一个PWA应用。 [点击这里浏览第2部分.][4]**



[1]: https://www.freecodecamp.org/news/progressive-web-apps-101-the-what-why-and-how-4aa5e9065ac2/undefined
[2]: https://developers.google.com/web/progressive-web-apps/checklist
[3]: https://app-manifest.firebaseapp.com/
[4]: https://medium.freecodecamp.org/progressive-web-apps-102-building-a-progressive-web-app-from-scratch-397b72168040
