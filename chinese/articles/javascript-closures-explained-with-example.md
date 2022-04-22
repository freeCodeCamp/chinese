> -  原文地址：[Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/javascript-closures-explained-with-example/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：Papaya HUANG
> -  校对者：

![Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/safar-safarov-LKsHwgzyk7c-unsplash-2.jpg)

这篇文章将讲解JavaScript中的闭包。我会说明闭包的定义，展现一个日常抓取使用闭包的例子以及闭包的优缺点。

## 目录

-   [先决条件](#prerequisites)
-   [什么是闭包](#what-are-closures)?
-   [如何使用闭包](#use-case-of-closure-creating-a-fetch-utility-with-closures)
-   [闭包的优点](#advantages-of-closures)
-   [闭包的缺点](#disadvantages-of-closures)
-   [总结](#summary)

话不多说，我们开始吧！

<h2 id='prerequisites'>先决条件</h2>

学习着这篇文章，你必须理解以下内容：

-   JavaScript的[执行上下文](https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/) works
-   什么是[Fetch API](https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/)以及如何使用

<h2 id='what-are-closures'> 什么是闭包？</h2>

闭包是即便外部函数已经不存在，也可以获取作用域链上变量的函数。

在阐述之前，我们先了解什么是作用域链。作用域链指的是父作用域不发访问子作用域中的变量，但是子作用域可以访问父作用域中的变量。

请看以下例子来获取更清晰的解释：

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

有一个名为 `buttonProps`的函数，接受`borderRadius`为形参。我们把`buttonProps`函数认定为父函数。

在父函数中我们定义了一个子函数，并接受 `createVariantButtonProps`， `variant` 和 `color` 为形参，并且返回一个对象，包含 `borderRadius`变量， 这个变量位于子函数作用域外。

内部函数如何解决位于父作用域的变量呢？

这是因为词法作用域。JS编译器可以根据词法作用域来解析当前作用域的变量，实际上是解析嵌套函数中的变量。

所以根据上述例子，我们可以得出 `createVariantButtonProps` 可以获取外部函数`buttonProps`中的变量。

在这个例子中，内部函数`createVariantButtonProps`就是一个闭包。 想要深入了解闭包，我们必须先了解闭包的特性：

-   即便外部函数不再存在，闭包也可以获取父函数中的变量。
-   闭包不可以获取外部函数中的`args`形参。

让我们来深入了解这两个特性。

### 即便外部函数不再存在，闭包也可以获取父函数中的变量。

这是闭包的基础功能，是闭包的生命信念，换句话说是闭包工作的指导原则。

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

回看我们之前讨论的闭包和作用域链的定义，会发现这个例子非常匹配。

然我们进一步理解为什么即便外部函数不再存在，闭包也可以获取父函数中的变量？例如，获取`borderRadius`变量的值。  

答案很简单：闭包不存储静态值，相反，闭包存储作用域链上变量的引用。这样，即便外部函数被销毁，内部函数———即闭包仍能够获取父函数内的变量。

<h2 id='use-case-of-closure-creating-a-fetch-utility-with-closures'>如何使用闭包</h2>

我们已经学习了什么是闭包，现在让我们创建一个可以被广泛应用的函数。这个函数将使用REST API来处理如GET和POST之类的方法。

在这个例子中：

-   我们将使用[JSON placeholder APIs](https://jsonplaceholder.typicode.com/)。我们可以使用REST API来处理一些虚构的数据。
-   我们将使用JavaScript的[fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) API。

我们先来讨论一下为什么要设置这样的用例。有以下几个原因：

-   我们并不想在每一次fetch调用中都重新定义基础URL (或其他基础参数)。 所以我们可以创建一个机制将基础URL或者参数作为状态存储。
-   删除多余的代码。
-   在代码库中提供模块。

让我们来看看这个用例的细节。我们的fetch用例如下：

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

-   `fetchUtility`接受两个形参 `baseURL`和`headers`。这部分会在后面闭包用到，来创建基础URL和头部。
-   还有`createFetchInstance`函数，接受`route` `requestMethod` 和 `data`参数。
-   这个函数接着会创建一个请求实例，通过代码 `${baseURL}${route}`来创建URL。同时我们也传入一个对象，包含请求方式、请求头和数据（如果数据是可以使用的）。
-   然后返回一个fetch API的实例和一个请求对象。
-   最后返回 `createFetchInstance`函数。

接下来让我们实际操作看看，调用 `fetchUtility` 函数初始化 `baseURL`:

```Javascript
const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");
```

初始化基础URL 

-   仔细看，`fetchInstance`获取了`fetchUtility`函数闭包的变量。
-  然后，我们向闭包`fetchInstance`传入路由和请求的方式:

```Javascript
const [getFunc, getReq] = fetchInstance("/todos/1", "GET");
```

执行闭包

如你所见，一个包含fetch API实例和我们设置的请求体的数组被返回。

最后，我们使用`getFunc`这个fetch API 调用 `getReq`请求，如下：

```Javascript
getFunc(getReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

我们可以一样的方法来创建一个POST请求。这样重新调用 `fetchInstance`：

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

在执行POST请求的时候也可以用GET请求一样的方法：

```Javascript
postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

如果自己观察，我们会发现`createFetchInstance` 可以获取作用域链中的变量。 在词法作用域的帮助下，定义 `createFetchInstance` 时。它就可以解析变量名称。
这样的话，闭包意味着在定义时对 `baseURL` `headers` 的引用，即便外部函数 `fetchUtility` 不复存在，这个引用依旧存在。

如果从另外一个角度来看闭包的话，闭包帮助我们保持如 `baseURL`和`headers`的状态，我们可以在整个函数调用中使用。

<h2 id='advantages-of-closures'>闭包的优点</h2>

以下是闭包的优点：

-   可以借助闭包在执行上下文中添加变量。
-   可以使用闭包中的变量保存状态，之后使用。
-   闭包提供数据封装。
-   使用闭包可以删除多余的代码。
-   使用闭包可以维护模块化代码。

<h2 id='disadvantages-of-closures'>闭包的缺点</h2>

过分使用闭包会引发两大缺点：

-   闭包内声明的变量不能被垃圾回收。
-   应用中存在过量的闭包会影响应用运行速度，因为闭包会造成存储了重复的代码。

<h2 id='summary'>总结</h2>

所以如果你想要使用某种设计模式，使用闭包十分有效。他可以帮助你写出整洁模块化的代码。

如果你对闭包感兴趣，我推荐你阅读以下话题：

-   [设计模式](https://www.patterns.dev/posts/classic-design-patterns/)
-   [匿名闭包](https://stackoverflow.com/questions/16032840/javascript-anonymous-closure)

感谢阅读！

可以在 [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar)和[LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/)上关注我。
