> -  原文地址：[Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/javascript-closures-explained-with-example/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：Papaya HUANG
> -  校对者：

![Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/safar-safarov-LKsHwgzyk7c-unsplash-2.jpg)

这篇文章将讲解 JavaScript 中的闭包。我会说明闭包的定义，展现一个日常抓取使用闭包的例子以及闭包的优缺点。

## 目录

-   [前提条件](#prerequisites)
-   [什么是闭包？](#what-are-closures)
-   [如何使用闭包](#use-case-of-closure-creating-a-fetch-utility-with-closures)
-   [闭包的优点](#advantages-of-closures)
-   [闭包的缺点](#disadvantages-of-closures)
-   [总结](#summary)

话不多说，我们开始吧！

<h2 id='prerequisites'>前提条件</h2>

在学习这篇文章之前，你必须理解以下内容：

-   JavaScript 的[执行上下文](https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/
-   [Fetch API](https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/)的定义和使用

<h2 id='what-are-closures'> 什么是闭包？</h2>

闭包是即便外部函数已经不存在，也可以获取作用域链上变量的函数。

在解释闭包之前，我们先了解什么是作用域链。作用域链指的是在父作用域中无法访问子作用域中的变量，但是子作用域可以访问父作用域中的变量。

请看以下例子来获取更清晰的理解：

```Javascript
let buttonProps = (borderRadius) => {
	const createVariantButtonProps = (variant, color) => {
		const newProps = {
			borderRadius,
			variant,
			color
		};
		return newProps;
	}
	return createVariantButtonProps;
}
```

在这个例子中有一个名为 `buttonProps`的函数，形参为`borderRadius`。我们把`buttonProps`函数认定为父函数。

在父函数中我们定义了一个子函数，接受形参 `createVariantButtonProps`， `variant` 和 `color` ，并且返回一个包含 `borderRadius`变量的对象，这个变量位于子函数作用域外。

那么问题来了，内部函数如何解析位于父作用域的变量呢？

这得益于词法作用域。JS 编译器可以根据词法作用域来解析当前作用域的变量，即解析嵌套函数中的变量。

所以根据上述例子，我们可以得出 `createVariantButtonProps` 可以获取外部函数`buttonProps`中的变量。

在这个例子中，内部函数`createVariantButtonProps`就是一个闭包。 想要深入了解闭包，我们必须先了解闭包的特性：

-   即便外部函数不再存在，闭包也可以获取父函数中的变量。
-   闭包不可以获取外部函数中的形参`args·。

让我们来深入了解这两个特性。

### 即便外部函数不再存在，闭包也可以获取父函数中的变量

这是闭包的基础功能，是闭包的生命信仰，也可以说是闭包运作的指导原则。

我们现在执行`buttonProps` 函数，来看看闭包在实际中的运用：

```JS
let primaryButton = buttonProps("1rem"); 
```

调用`buttonProps`函数会返回另一个函数，即我们的闭包。

现在来执行闭包:

```JS
const primaryButtonProps = primaryButton("primary", "red");
```

闭包一旦执行，便返回下面的对象：

```JS
{
   "borderRadius":"1rem",
   "variant":"primary",
   "color":"red"
}
```

为什么 `primaryButton`函数可以获取并不位于其内部的 `borderRadius` 变量的值？

回看我们之前讨论的内容，会发现这个例子非常匹配闭包和作用域链的定义。

让我们深入理解为什么即便外部函数不存在了，闭包也可以获取父函数中的变量？例如，在这里获取了`borderRadius`变量的值。  

答案很简单：闭包不存储静态值，相反，闭包存储作用域链上变量的引用。这样，即便外部函数被销毁，内部函数———即闭包仍能够获取父函数内的变量。

<h2 id='use-case-of-closure-creating-a-fetch-utility-with-closures'>如何使用闭包</h2>

我们已经学习了什么是闭包，现在让我们创建一个可以被广泛使用的实用函数。这个函数将使用 REST API 来处理如 GET 和 POST 之类的方法。

在这个例子中：

-   我们将利用[JSON placeholder APIs](https://jsonplaceholder.typicode.com/)的数据。我们可以使用 REST API 来处理一些虚构的数据。
-   我们将使用 JavaScript 的[fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) API。

我们先来讨论一下为什么要设计这样的实用函数，有以下几个原因：

-   我们并不想在每一次 fetch 调用中都重新定义基础 URL (或其他基础参数)。 所以我们可以创建一个机制将基础 URL 或者参数作为状态存储。
-   删除多余的代码。
-   模块化代码库。

让我们来看看这个实用函数的细节：

```Javascript
const fetchUtility = (baseURL, headers) => {
  const createFetchInstance = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseURL}${route}`, {
      method: requestMethod,
      headers,
      data: data || null
    });
    return [fetch, tempReq];
  };

  return createFetchInstance;
};
```

-   `fetchUtility`接受两个参数 `baseURL`和`headers`。这两个参数会在后面闭包用到，来创建基础 URL 和头部。
-   还有`createFetchInstance`函数，接受`route` `requestMethod` 和 `data`参数。
-   接着在函数内创建一个请求实例，通过代码 `${baseURL}${route}`来创建 URL。同时我们也传入一个对象，包含请求方式、请求头和数据（如果获取得到数据）。
-   然后返回一个 fetch API 的实例和一个请求对象。
-   最后返回 `createFetchInstance`函数。

接下来让我们实际操作看看，调用 `fetchUtility` 函数初始化 `baseURL`:

```Javascript
const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");
```

初始化基础 URL 

-  仔细观察会发现`fetchInstance`获取了`fetchUtility`函数闭包的变量。
-  然后，我们向闭包`fetchInstance`传入路由和请求的方式:

```Javascript
const [getFunc, getReq] = fetchInstance("/todos/1", "GET");
```

执行闭包

如你所见，一个包含 fetch API 实例和我们配置的请求体的数组被返回。

最后，我们使用`getFunc`这个 fetch API 调用 `getReq`请求，如下：

```Javascript
getFunc(getReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

我们可以一样的方法来创建一个 POST 请求。这样重新调用 `fetchInstance`：

```Javascript
const [postFunc, postReq] = fetchInstance(
  "/posts",
  "POST",
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
);
```

在执行 POST 请求的时候也可以用 GET 请求一样的方法：

```Javascript
postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

如果仔细观察上面的例子，我们会发现内部函数`createFetchInstance` 可以获取作用域链中的变量。 在词法作用域的帮助下，定义 `createFetchInstance` 时。它就可以解析作用域链上的变量。

也就是说，闭包在意味着变量 `baseURL` `headers` 在定义是就被引用，即便外部函数 `fetchUtility` 不复存在，这个引用依旧存在。

如果从另外一个角度来看闭包的话，闭包帮助我们保持如 `baseURL`和`headers`的状态，我们可以在函数其他地方调用。

<h2 id='advantages-of-closures'>闭包的优点</h2>

以下是闭包的优点：

-   可以借助闭包在执行上下文中添加变量。
-   可以使用闭包中的变量保存状态，之后使用。
-   闭包提供数据封装。
-   使用闭包可以删除多余的代码。
-   可以使用闭包维护模块化代码。

<h2 id='disadvantages-of-closures'>闭包的缺点</h2>

过度使用闭包会引发两大问题：

-   闭包内声明的变量不能被垃圾回收。
-   应用中存在过多的闭包会影响应用运行速度，因为闭包会造成内存中保留重复的代码。

<h2 id='summary'>总结</h2>

如果你想要使用某种设计模式，闭包对你的帮助会很大。闭包还可以帮助你写出整洁、模块化的代码。

如果你对闭包感兴趣，我推荐你阅读以下话题：

-   [设计模式](https://www.patterns.dev/posts/classic-design-patterns/)
-   [匿名闭包](https://stackoverflow.com/questions/16032840/javascript-anonymous-closure)

感谢阅读！

你可以在 [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar)和[LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/)上关注我。
