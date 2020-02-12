> * 原文地址：[How To Master Async/Await With This Real World Example](https://www.freecodecamp.org/news/how-to-master-async-await-with-this-real-world-example-19107e7558ad/)
> * 原文作者：[Adrian Hajdin](https://www.freecodecamp.org/news/author/adrianhajdin/)
> * 译者：[Zou Li](https://github.com/zlv2s)
> * 校对者：

# 通过一个开发实例掌握 Async/Await

### 目录

1. 介绍回调函数, promises, async/await
2. 开发实例--货币转换器，从两个 API 异步获取数据

#### 在开始正文之前

在写这篇文章的同时，我还录制了一个相关的视频，已上传到 Youtube。 你可以边看视频边敲代码，我建议你先看下视频，然后再以这篇文章为引导自己练习下代码。

视频地址：[Learn Async/Await in This Real World Project](https://www.youtube.com/watch?v=mlb525FgU3k)

### 简介

Async/Await 是一种建立在 promises 基础上的，书写异步代码的新方式，所以它也是非阻塞的。

与我们之前异步编程所使用到的回调函数和 promises 相比较，最大的区别就是 async/await 使我们的异步代码看起来就像同步代码一样，这也正是它的厉害之处。

#### 使用回调函数

```js
setTimeout(() => {
  console.log('This runs after 1000 milliseconds.');
}, 1000);
```

#### 回调函数最典型的问题——回调地狱

在回调函数中嵌套回调函数，看起来就像这样：

<figure>
<img src="https://cdn-media-1.freecodecamp.org/images/9d1nWt1Kl4G7-nLcGXGtk7E2CrkrGeenxH2r">
<figcaption style="text-align:center">回调地狱</figcaption>
</figure>

#### 回调地狱

>指的是回调函数被嵌套在另一个回调函数中，嵌套层级有多层，使我们的代码可读性和可维护性变得非常差。

### 使用 Promises

```js
const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  
  resolve(add(2, 2));
});

promiseFunction.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
```

promiseFunction 这个函数返回一个表示函数运行过程的 Promise 对象， resolve 函数表示任务已经完成。

然后，我们就可以在 promiseFunction 函数的基础上调用 `then()` 和 `catch()` 方法。

**then**: Promise 成功后执行的回调函数。  
**catch**: 当遇到了错误后执行的回调函数。

### Async 函数

Async 函数为我们提供了简洁的语法，我们可以通过它实现与 Promise 相同的效果，但是代码量会减少很多。其实底层原理上，async 不过是 promises 的语法糖而已。

在普通的函数声明前加上 async 关键字，我们就创建了一个 async 函数：

```js
const asyncFunction = async () => {
  // Code
}
```

异步函数使用 await 表达式可以暂停函数的执行，await 关键字只能在 async 函数中使用，它会返回 async 函数的处理结果。

promises 和 async/await 的区别：

```js
// Async/Await
const asyncGreeting = async () => 'Greetings';

// Promises
const promiseGreeting = () => new Promise(((resolve) => {
  resolve('Greetings');
}));

asyncGreeting().then(result => console.log(result));
promiseGreeting().then(result => console.log(result));
```

Async/Await 更易于我们理解，因为它看起来像同步代码。

前面我们已经介绍过这些基础知识了，现在我们来看看在现实开发中怎么使用！

### 货币转换器

#### 项目说明和初始化

在下面的教程中，我们将创建一个简单实用，而且很有学习意义的应用程序，相信会加深你对 **Async/Await** 理解。

这个程序会接收到我们想要把什么货币转换成什么货币，以及货币金额，然后会调用相关的 API，显示正确的汇率。

在这个程序中，我们将从以下两个 API 异步获取数据：

1. **Currency Layer** ——  https://currencylayer.com - 你需要先免费注册账号，才能获取 API Access Key。这个 API 为我们提供了 计算货币间汇率所需的数据。

2. **Rest Countries** —— http://restcountries.eu/ - 这个 API 为我们提供转换后的货币在哪些国家流通的信息。

首先，创建一个新目录并运行 `npm init` 初始化项目，接下里我们选择默认值，跳过所有步骤，然后再输入 `npm i --save axios` 安装 axios。在当前文件夹内创建一个 `currency-convert .js` 的文件。

在 `currency-convert .js` 文件中，我们先通过 `require` 语法引入 axios 

```js
const axios = require(‘axios’);`
```

#### 深入理解 async/await

这个程序中，我们需要三个异步函数，第一个函数用来获取关于货币的数据；第二个函数用来获取关于国家的数据；第三个函数用来将所有信息集中起来并展示给用户看

#### 第一个函数——异步获取有关货币的数据

我们创建一个接收两个参数（fromCurrency 和 toCurrency）的异步函数。

```js
const getExchangeRate = async (fromCurrency, toCurrency) => {}
```

现在我们获取数据，然后通过使用 async/await，可以直接将我们想要的数据赋值给变量。调用接口之前别忘了要注册账号，才能获得 API access key

```js
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=[yourAccessKey]&format=1');
}
```

我们可以通过 `response.data.rates` 来提取我们想要的数据，然后我们将它赋值给一个变量 `rate`：

```js
const rate = response.data.rates;
```

因为所有的数据都是从欧元转换过来的，我们可以创建一个变量 `euro`，它的值等于：

```js
const euro = 1 / rate[fromCurrency];
```

最后，我们可以用欧元乘以我们要兑换的货币来得到汇率：

```js
const exchangeRate = euro * rate[toCurrency];
```

最终的函数看起来像这样：

![](https://cdn-media-1.freecodecamp.org/images/bzs9crwfH4LSwsal21EL41ZituHwc7u0BIcB)

#### 第二个函数——异步获取国家数据

创建一个异步函数，接收 `currencyCode` 作为参数

```js
const getCountries = async (currencyCode) => {}
```

和之前一样，获取数据，然后将其赋值给一个变量：

```js
const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
```

然后通过数组 map 方法将 `country.name` 提取出来，映射为一个新的数组：

```js
return response.data.map(country => country.name);
```

最终代码：

![](https://cdn-media-1.freecodecamp.org/images/LKjb26yYCHHQSfwa5OzCYFdP3yFdtEbhbNvX)

#### 最后一个函数——将前面的函数组合起来

创建一个异步函数，接收 `fromCurrency`, `toCurrency`, `amount` 三个参数：

```js
const convert = async (fromCurrency, toCurrency, amount) => {}
```

第一步，获取货币数据：

```js
const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
```

第二步，获取国家数据：

```js
const countries = await getCountries(toCurrency);
```

第三步，将转换后的金额赋值给一个变量

```js
const convertedAmount = (amount * exchangeRate).toFixed(2);
```

最后，将数据输出给用户：

```js
return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
```

最后完整的代码：

![](https://cdn-media-1.freecodecamp.org/images/APkBuBe-3BD011DjcNcWJxoyxNwXCVlQsE2o)

#### 使用 try/catch 来处理错误

我们将程序的逻辑用 try 语句包裹起来，如果出现错误，用 catch 语句捕捉：

```js
const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await       axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');
    
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    
    return exchangeRate;
  } catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);
  }
};
```

同样第二个函数也这样处理：

```js
const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    
return response.data.map(country => country.name);
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};
```

因为第三个函数只是处理第一个和第二个函数的结果，所以我们不需要对它进行错误捕获

最后，我们调用函数来接收数据：

```js
convertCurrency('USD', 'HRK', 20)
  .then((message) => {
    console.log(message);
  }).catch((error) => {
    console.log(error.message);
  });
```

你会看到下面的结果：

![](https://cdn-media-1.freecodecamp.org/images/NqMrupAN1UpMWy1CRD7KpmfZdnjJ2Pexbx5A)


### 成功啦

看到这里你应该写好这个程序了吧！如果你在写程序过程中有任何困惑，那么你可以参考这个[仓库](https://github.com/adrianhajdin/currency-converter)里的代码。如果你有任何问题，可以在下面留言。你也可关注我的 YouTube 频道，我会给大家分享更多干货！

