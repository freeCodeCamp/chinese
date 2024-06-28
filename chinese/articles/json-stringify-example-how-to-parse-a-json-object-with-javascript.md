> - 原文地址：[JSON Stringify Example – How to Parse a JSON Object with JS](https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/)
> - 原文作者：[Kris Koishigawa](https://www.freecodecamp.org/news/author/kris/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![JSON Stringify Example – How to Parse a JSON Object with JS](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/602358380a2838549dcc2554.jpg)

JSON，即 JavaScript 对象符号（JavaScript Object Notation），就在我们身边。如果你曾经使用过一个网络应用，它很有可能使用 JSON 在其服务器和你的设备之间构建、存储和传输数据。

在这篇文章中，我们将简要介绍 JSON 和 JavaScript 的区别，然后跳到在浏览器和 Node.js 项目中用 JavaScript 解析 JSON 的不同方法。

## JSON 和 JavaScript 之间的区别

虽然 JSON 看起来像普通的 JavaScript，但最好把 JSON 看作一种数据格式，类似于文本文件。恰好 JSON 的灵感来自于 JavaScript 语法，这就是为什么它们看起来如此相似。

让我们来看看 JSON 对象和 JSON 数组，并将它们与它们的 JavaScript 对应物进行比较。

### JSON 对象与 JavaScript 对象字面意义（Object Literals）

首先，这里有一个 JSON 对象:

```json
{
  "name": "Jane Doe",
  "favorite-game": "Stardew Valley",
  "subscriber": false
}
```

jane-profile.json

JSON 对象和普通的 JavaScript 对象（也叫对象字面 object literal）的主要区别在于引号。JSON 对象中的所有键和字符串类型的值都必须用双引号（`"`）来包裹。

JavaScript 对象字面意义更灵活一些。对于对象字面意义，你不需要用双引号来包裹键和字符串。相反，你可以使用单引号（`'`），或者不对键值使用任何类型的引号。

下面是上面的代码作为一个 JavaScript 对象字面:

```js
const profile = {
  name: 'Jane Doe',
  'favorite-game': 'Stardew Valley',
  subscriber: false
}
```

注意，键"'favorite-game'"是用单引号包裹的。对于对象字面，你需要用引号来包装那些由破折号（`-`）分隔的字的键。

如果你想避免引号，你可以重写键，使用骆驼字母大小写（`favoriteGame`），或者用下划线来分隔单词（`favorite_game'）。

### JSON 数组 vs JavaScript 数组

JSON 数组的工作方式与 JavaScript 中的数组基本相同，可以包含字符串、布尔值、数字和其他 JSON 对象。比如说:

```json
[
  {
    "name": "Jane Doe",
    "favorite-game": "Stardew Valley",
    "subscriber": false
  },
  {
    "name": "John Doe",
    "favorite-game": "Dragon Quest XI",
    "subscriber": true
  }
]
```

profiles.json

下面是在普通 JavaScript 中可能出现的情况:

```js
const profiles = [
  {
    name: 'Jane Doe',
    'favorite-game': 'Stardew Valley',
    subscriber: false
  },
  {
    name: 'John Doe',
    'favorite-game': 'Dragon Quest XI',
    subscriber: true
  }
];
```

## JSON 作为一个字符串

你可能会想，如果有 JSON 对象和数组，你就不能在你的程序中像普通的 JavaScript 对象字面或数组一样使用它吗？

不能这样做的原因是，JSON 实际上只是一个字符串。

例如，当你在一个单独的文件中写 JSON 时，如上面的`jane-profile.json`或`profiles.json`，该文件实际上包含了 JSON 对象或数组形式的文本，它恰好看起来像 JavaScript。

如果你向 API 发出请求，它将返回类似这样的东西:

```json
{"name":"Jane Doe","favorite-game":"Stardew Valley","subscriber":false}
```

就像文本文件一样，如果你想在你的项目中使用 JSON，你需要把它解析或改变成你的编程语言可以理解的东西。例如，在 Python 中解析一个 JSON 对象将创建一个字典。

有了这种理解，让我们看看在 JavaScript 中解析 JSON 的不同方法。

## 如何在浏览器中解析 JSON

如果你在浏览器中使用 JSON，你可能是通过 API 接收或发送数据。

让我们看一下几个例子。

### 如何用`fetch`解析 JSON

从 API 获取数据的最简单方法是使用`fetch`，它包括`.json()`方法，将 JSON 响应自动解析为可用的 JavaScript 对象字面或数组。

下面是一些代码，使用 `fetch` 从对一个对开发者免费的 [Chuck Norris Jokes API](https://api.chucknorris.io/)平台，发出 `GET` 请求:

```js
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));
```

如果你在浏览器中运行这段代码，你会看到像这样的东西记录在控制台中:

```js
{
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
}
```

虽然这看起来像一个 JSON 对象，但它实际上是一个 JavaScript 对象字面，你可以在你的程序中自由使用它。

### 如何用`JSON.stringify()`对 JSON 进行字符串化处理

但是，如果你想把数据发送到 API 呢？

例如，假设你想发送一个 Chuck Norris 的 joke 到 Chuck Norris Jokes API，以便其他人以后可以阅读它。

首先，你要把 joke 写成一个 JS 对象的字面意思:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
```

然后，由于你要向 API 发送数据，你需要把你的`newJoke`对象字面意思变成一个 JSON 字符串。

幸运的是，JavaScript 包含了一个超级有用的方法来做到这一点-`JSON.stringify()`:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}

console.log(typeof JSON.stringify(newJoke)); // string
```

虽然我们在这个例子中把一个对象的字面意思转换成 JSON 字符串，但是`JSON.stringify()`也适用于数组。

最后，你只需要用`POST`请求将你的 JSON 字符串化的 `joke` 送回给 API。

请注意，Chuck Norris `joke API` 实际上并没有这个功能。但是，如果它有的话，下面是代码可能会出现的情况:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

fetch('https://api.chucknorris.io/jokes/submit', { // fake API endpoint
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newJoke), // turn the JS object literal into a JSON string
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.error(err);
  });
```

就这样，你用`fetch`解析了传入的 JSON，并使用`JSON.stringify()`将 JSON 对象字面意思转换成 JSON 字符串。

### 如何在浏览器中处理本地 JSON 文件

不幸的是，在浏览器中加载一个本地 JSON 文件是不可能的（或者说是不可取的）。

如果你试图加载一个本地文件，`fetch`将抛出一个错误。例如，假设你有一个 JSON 文件，里面有一些 `jokes`:

```json
[
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.json

而你想解析它并在一个简单的 HTML 页面上创建一个 `jokes` 列表。

如果你用以下内容创建一个页面并在浏览器中打开它:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <title>Fetch Local JSON</title>
  </head>
  <script>
    fetch("./jokes.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
      .then((res) => res.json())
      .then((data) => console.log(data));
  </script>
</html>
```

index.html

你会在控制台中看到这个:

```js
Fetch API cannot load file://<path>/jokes.json. URL scheme "file" is not supported
```

默认情况下，出于安全考虑，浏览器不允许访问本地文件。这是一件好事，你不应该试图绕过这种行为。

相反，最好的办法是将本地的 JSON 文件转换成 JavaScript。幸运的是，这很容易，因为 JSON 的语法与 JavaScript 非常相似。

你所需要做的就是创建一个新的文件并将你的 JSON 声明为一个变量:

```js
const jokes = [
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.js

并把它作为一个单独的脚本添加到你的页面上:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <title>Fetch Local JSON</title>
  </head>
  <script src="jokes.js"></script>
  <script>
    console.log(jokes);
  </script>
</html>
```

你将能够在你的代码中自由使用`jokes`数组。

你也可以使用 JavaScript [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 来做同样的事情，但这有点超出了本文的范围。

但如果你想处理本地的 JSON 文件，并安装了 Node.js，该怎么办？让我们现在来看看如何做到这一点。

## 如何在 Node.js 中解析 JSON

Node.js 是一个 JavaScript 运行时，允许你在浏览器之外运行 JavaScript。你可以在这里阅读关于 [Node.js](https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/) 的所有内容。

无论你是使用 Node.js 在你的电脑上本地运行代码，还是在服务器上运行整个网络应用，知道如何处理 JSON 都是很好的。

在下面的例子中，我们将使用同一个`jokes.json`文件:

```json
[
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.json

### 如何用`require()`解析一个 JSON 文件

让我们从最简单的方法开始。

如果你有一个本地的 JSON 文件，你需要做的就是使用`require()`来加载它，就像其他 Node.js 模块。:

```js
const jokes = require('./jokes.json');
```

JSON 文件将自动为你解析，你可以开始在你的项目中使用它:

```js
const jokes = require('./jokes.json');

console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
```

注意，这是同步的，意味着你的程序将停止，直到它解析了整个文件才继续。真正大的 JSON 文件会导致你的程序变慢，所以要小心处理。

另外，因为用这种方式解析 JSON 会将整个文件加载到内存中，所以最好对静态 JSON 文件使用这种方法。如果 JSON 文件在你的程序运行时发生了变化，你将无法获得这些变化，直到你重新启动你的程序并解析更新的 JSON 文件。

### 如何用`fs.readFileSync(`)和`JSON.parse()`来解析 JSON 文件

这是在 Node.js 项目中解析 JSON 文件的比较传统的方式（因为缺乏更好的术语）--用`fs`（文件系统）模块读取文件，然后用`JSON.parse()`进行解析。

让我们看看如何用`fs.readFileSync()`方法做到这一点。首先，将`fs`模块添加到你的项目中:

```js
const fs = require('fs');
```

然后，创建一个新的变量来存储`jokes.json`文件的输出，并设置它等于`fs.readFileSync()`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync();
```

`fs.readFileSync()`需要几个参数。第一个是你想要读取的文件的路径:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json');
```

但如果你现在把`jokesFile`记录到控制台，你会看到这样的东西:

```plain
<Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 63 61 74 65 67 6f 72 69 65 73 22 3a 20 5b 22 64 65 76 22 5d 2c 0a 20 20 20 20 22 63 72 65 61 74 65 64 5f 61 74 22 3a ... 788 more bytes>
```

这只是意味着`fs`模块正在读取文件，但它不知道文件的编码或格式。`fs`可以用来加载几乎任何文件，而不仅仅是基于文本的文件，如 JSON，所以我们需要告诉它文件的编码方式。

对于基于文本的文件，编码通常为 `utf8`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
```

现在如果你把`jokesFile`记录到控制台，你会看到文件的内容。

但是到目前为止，我们只是在读取文件，而且它还是一个字符串。我们需要使用另一种方法将`jokesFile`解析为可用的 JavaScript 对象或数组。

要做到这一点，我们将使用`JSON.parse()`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
const jokes = JSON.parse(jokesFile);

console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
```

顾名思义，`JSON.parse()`接收一个 JSON 字符串，并将其解析为一个 JavaScript 对象字面或数组（object literal or array）。

和上面的`require'方法一样，`fs.readFileSync()'是一个同步方法，这意味着如果你的程序正在读取一个大文件，不管是 JSON 还是其他文件，它可能会导致你的程序变慢。

另外，它只读取一次文件并将其加载到内存中。如果文件有变化，你需要在某个时候再次读取该文件。为了使事情更简单，你可能想创建一个简单的函数来读取文件。

以下是可能出现的情况:

```js
const fs = require('fs');
const readFile = path => fs.readFileSync(path, 'utf8');

const jokesFile1 = readFile('./jokes.json');
const jokes1 = JSON.parse(jokesFile1);

console.log(jokes1[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."

// the jokes.json file changes at some point

const jokesFile2 = readFile('./jokes.json');
const jokes2 = JSON.parse(jokesFile2);

console.log(jokes2[0].value); // "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
```

### 如何用`fs.readFile(`)和`JSON.parse()`来解析 JSON？

`fs.readFile()`方法与`fs.readFileSync()`非常相似，只是它是异步工作。如果你有一个大文件要读，而你又不想让它耽误你的其他代码，这就很好。

下面是一个基本的例子:

```js
const fs = require('fs');

fs.readFile('./jokes.json', 'utf8');
```

到目前为止，这看起来和我们对`fs.readFileSync()`所做的相似，只是我们没有把它分配给一个像`jokesFile`这样的变量。因为它是异步的，在`fs.readFile()`之后的任何代码都会在它完成读取文件之前运行。

相反，我们将使用一个回调函数并解析其中的 JSON:

```js
const fs = require('fs');

fs.readFile('./jokes.json', 'utf8', (err, data) => {
  if (err) console.error(err);
  const jokes = JSON.parse(data);

  console.log(jokes[0].value);
});

console.log("This will run first!");
```

它在控制台中打印出以下内容:

```js
This will run first!
Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.
```

就像`fs.readFileSync()`一样，`fs.readFile()`将文件加载到内存中，这意味着如果文件有变化，你需要再次读取文件。

另外，尽管`fs.readFile()`是异步的，但它最终会将它所读取的整个文件加载到内存中。如果你有一个巨大的文件，最好是研究一下 [Node.js streams](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)。

### 如何在 Node.js 中用`JSON.stringify()`对 JSON 进行字符串化

最后，如果你用 Node.js 解析 JSON，很有可能在某些时候需要返回 JSON，也许是作为一个 API 响应。

幸运的是，这与浏览器中的工作方式相同--只需使用`JSON.stringify()`将 JavaScript 对象字头或数组转换成 JSON 字符串:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}
```

就这样了! 我们已经涵盖了关于在浏览器和 Node.js 项目中使用 JSON 所需要知道的一切。

现在你可以去解析或字符串化 JSON，以满足你的需求。

我还有什么遗漏？你是如何在你的项目中解析 JSON 的？请在 [Twitter](https://twitter.com/kriskoishigawa) 上告诉我。
