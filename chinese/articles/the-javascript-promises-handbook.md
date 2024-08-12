---
标题: JavaScript Promises 工作原理 - 初学者手册
作者: 乔·阿塔迪（Joe Attardi）
作者页面: https://www.freecodecamp.org/news/author/joeattardi/
原始页面: https://www.freecodecamp.org/news/the-javascript-promises-handbook/
译者: "James-Z-Zhang00"
reviewer: ""
---

2024 年 2 月 13 日 / [#JavaScript][1]

<!-- more -->

# JavaScript Promises 工作原理 - 初学者手册

![Joe Attardi](https://www.freecodecamp.org/news/content/images/size/w60/2023/10/5.png)

[乔·阿塔迪（Joe Attardi）][2]

  ![How JavaScript Promises Work – Handbook for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2024/02/How-JavaScript-Promises-Work-Cover.png)

许多操作，如网络请求，本质上是异步的。在处理异步代码时，Promise 是最有用和最强大的工具之一。在这本手册中，您将了解有关 JavaScript Promises 的所有信息以及如何使用它们。

## 目录

1.  [Promise 是什么][3]
2.  [Promise 与其他异步模式的比较][4]
3.  [如何创建一个 Promise][5]
4.  [如何获取 Promise 的结果][6]
5.  [如何使用`then`处理错误][7]
6.  [Promise 链][8]
7.  [如何创建立即满足或拒绝的 Promises][9]
8.  [如何使用`async`和`await`][10]
9.  [反模式 Promise][11]
10. [总结][12]

## Promise 是什么

首先，让我们了解一下什么是 Promise。

简单来说，Promise 是一个代表异步操作的对象。这个对象可以告诉你操作何时成功，或者何时失败。

当你调用一个基于 Promise 的 API 时，函数返回一个 Promise 对象来告诉你最终的操作结果。

### Promise 的状态

在其生命周期中，Promise 可以处于以下三种状态之一：

-   **待定（Pending）**: 当操作仍在进行中时，Promise 处于待定状态。它处于闲置状态，等待最终结果或错误。
- **已兑现（Fulfilled）**：返回 Promise 的异步任务成功完成。Promise 已经被一个值兑现，该值是操作的结果。
-   **已拒绝（Rejected）**: 如果异步操作失败，Promise 被认为是拒绝的。Promise 会有一个 _拒绝理由_。这通常是一个错误（Error）对象，也可以是任何错误值——可以是一个简单的数字或字符串！

Promise 一开始处于待定（pending）状态，然后根据结果，会过渡到已兑现（fulfilled）或已拒绝（rejected）状态。一旦 Promise 达到已兑现或已拒绝状态，就被认为是 _已敲定（settled）_。

不是所有的异步任务都会最终完成。一个 `Promise` 可能由于异步任务的代码中存在错误而永远保持在待定状态。

## Promise 与其他异步模式的比较

Promise 的工作方式与 JavaScript 的其他异步模式有点不同。在深入学习 Promise 之前，我们来简要比较一下。

### 回调函数

回调函数是你传递给另一个函数的函数。当你调用的函数完成其工作后，它将用结果执行你的回调函数。

想象一下，一个名为 `getUsers` 的函数将发起网络请求以获取用户数组。你可以将一个回调函数传递给 `getUsers`，一旦网络请求完成，这个回调函数就会被调用，并传入用户数组：

```javascript
console.log('Preparing to get users');
getUsers(users => {
  console.log('Got users:', users);
});
console.log('Users request sent');
```

一个回调函数的例子

首先，上述代码会打印（在 console 中显示）“Preparing to get users（准备获取用户）”。然后它调用 `getUsers`来启动网络请求。但是 JavaScript 不会等待请求完成。而是会立即执行下一个 console.log 语句（Users request sent）。

稍后，一旦用户被加载成功，你的回调函数将被执行，屏幕上将会显示“已获取用户”。

一些基于回调的 API，如许多 Node.js API，使用 _错误优先的回调（error-first callbacks）_。这些回调函数有两个参数。第一个参数是错误（error），第二个是结果（result）。

通常来说，取决于操作的结果，这两者中只有一个会有值。这与 Promise 的已兑现和已拒绝状态类似。

回调 API 的问题在于嵌套。如果你需要按顺序进行多个异步调用，你最终需要不断嵌套函数和回调函数。

例如，如果你想异步进行 3 个任务：读取一个文件，处理该文件中的一些数据，然后写一个新文件。

```javascript
readFile('sourceData.json', data => {
	processData(data, result => {
		writeFile(result, 'processedData.json', () => {
			console.log('Done processing');
		});
	});
});
```

嵌套回调序列

在错误处理方面，甚至会更加笨拙。假如这些函数使用错误优先的回调：

```javascript
readFile('sourceData.json', (error, data) => {
	if (error) {
		console.error('Error reading file:', error);
		return;
	}
	
	processData(data, (error, result) => {
		if (error) {
			console.error('Error processing data:', error);
			return;
		}
		
		writeFile(result, 'processedData.json', error => {
			if (error) {
				console.error('Error writing file:', error);
				return;
			}
			
			console.log('Done processing');
		});
	});
});
```

嵌套的错误优先回调序列

现代 API 中的异步机制通常不直接使用回调函数，但它们是其他类型异步工具（如 Promise）的基础。

### 事件（Events）

事件是你可以监听并做出响应的东西。在 JavaScript 中，一些对象是事件的 _发射器（emitters）_，这意味着你可以在这些对象上注册事件监听器（译者注：event listener，用来监视软件的变化，比如用户点击了鼠标）。

在 DOM 中，许多元素实现了 `EventTarget` 接口，它提供了 `addEventListener` 和 `removeEventListener` 方法。

一个给定类型的事件可以发生多次。例如，你可以监听按钮上的点击事件（click event）：

```javascript
myButton.addEventListener('click', () => {
   console.log('button was clicked!'); 
});
```

监听按钮的点击

每次按钮被点击时，控制台都会打印“button was clicked!”（按钮被点击了！）。

`addEventListener` 本身接受一个回调函数。每当事件发生时，回调函数就会被执行。

一个对象可以发出多种类型的事件。考虑一个图像对象。如果指定 URL 的图像成功加载，`加载事件（load）` 将被触发。如果发生错误，`错误事件（error）`将被触发。

```javascript
myImage.addEventListener('load', () => {
    console.log('Image was loaded');
});

myImage.addEventListener('error', error => {
   console.error('Image failed to load:', error); 
});
```

监听图像的加载和错误事件

假设在你添加事件监听器之前，图像已经完成了加载。那就什么也不会发生！基于事件的 API 的一个缺点是，如果你在事件发生后添加事件监听器，你的回调将不会被执行。这是有道理的——毕竟，当你向按钮添加点击监听器时，你不会想接收所有过去的点击事件。

现在我们已经探讨了回调和事件，让我们看看 Promise。

## 如何创建 Promiose

你可以使用 `new` 关键字和 `Promise` 构造器来创建一个 `Promise`。`Promise` 构造器接受一个回调函数，该函数带有两个参数，称为 `resolve` 和 `reject`。这两个参数都是由 `Promise` 提供的函数，用于将 `Promise` 转换到已实现或已拒绝状态。

在你的回调中，执行你的异步工作。如果任务成功，你调用 `resolve` 函数并伴随最终结果。如果发生错误，你调用 `reject` 函数并伴随错误。

以下是一个创建 Promise 的示例，该示例包装了浏览器的 `setTimeout` 函数：

```javascript
function wait(duration) {
	return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}
```

将 `setTimeout` 包装在 Promise 中

`resolve` 函数作为第一个参数传递给 `setTimeout`。在由 `duration` 指定的时间过后，浏览器会调用 `resolve` 函数来兑现 Promise。

注意：在这个示例中，调用 `resolve` 函数之前的延迟可能比 duration 指定的时间要长。这是因为 `setTimeout` 并不能保证在指定时间内执行。

注意，在通常情况下，你只需要处理其他 API 返回的 Promise。而不需要手动构建自己的 Promise。

## 如何获取 Promise 的结果

我们已经看到了如何创建一个 Promise，但你如何实际获取异步操作的结果呢？为此，你需要在 Promise 对象本身上调用 `then`。`then` 接受一个回调函数作为其参数。当 Promise 被兑现时，会执行回调函数，并传入结果。

让我们看一个这样的例子。一个名为 `getUsers` 的函数，它异步加载用户对象列表并返回一个 Promise。你可以通过在 `getUsers` 返回的 Promise 上调用 `then` 来获取用户列表。

```javascript
getUsers()
  .then(users => {
    console.log('Got users:', users);
  });
```

在 Promise 上调用 `then`

就像处理事件或基于回调的 API 一样，你的代码将继续执行而不是等待结果。稍后，当用户数据加载完毕时，你的回调函数将被安排执行。

```javascript
console.log('Loading users');
getUsers()
  .then(users => {
    console.log('Got users:', users);
  });
console.log('Continuing on');
```

在上面的例子中，首先会打印“Loading users（正在加载用户）”。因为 `getUsers` 调用仍在加载用户，所以接下来打印的将是“Continuing on（继续进行）”。稍后，你将看到打印出“Got users:（已获取用户）”。

## 如何使用 `then` 处理错误

我们已经看到了如何使用 `then` 来获取 Promise 提供的结果，但如果我们加载用户列表失败会发生什么？

`then` 函数还有第二个参数，另一个回调。那就是错误处理器（error handler）。如果 Promise 被拒绝，这个回调将会用拒绝/错误值执行。

```javascript
getUsers()
  .then(users => {
    console.log('Got users:', users);
  }, error => {
    console.error('Failed to load users:', error);  
  });
```

由于一个 Promise 只能被兑现（fulfilled）或被拒绝（rejected），而不能同时是两者，所以只有其中一个回调函数会被执行。

使用 Promise 时，务必处理错误，这一点很重要。如果你有一个 Promise 拒绝的情况没有通过错误回调处理，你的控制台会出现一个未处理拒绝的异常，这会在运行时对用户造成问题。

## Promise 链式调用

如果你需要连续处理多个 Promise 怎么办？我们从一个文件加载了一些数据，进行了一些处理，然后将结果写入一个新文件。假设 `readFile`，`processData` 和 `writeFile` 函数使用 Promise 而不是回调。

像这样：

```javascript
readFile('sourceData.json')
  .then(data => {
    processData(data)
      .then(result => {
        writeFile(result, 'processedData.json')
          .then(() => {
            console.log('Done processing');
          });
      });
  });
```

嵌套的 Promise

这看起来并不理想，我们仍然面临着我们在回调方法中遇到的嵌套问题。幸运的是，有一个更好的方法。你可以将 promise 以平面序列方式链接起来。

让我们更深入地看看 `then` 是如何工作的。关键思想是：用 `then` 方法返回 _另一个 promise_。你从 `then` 回调中返回的任何值都会成为这个新 promise 的兑现值。

想一下，有一个 `getUsers` 函数，它返回一个 Promise，当该 Promise 被兑现时，会得到一个包含用户对象的数组。假设我们在这个 Promise 上调用 `then`，并在回调中返回数组中的第一个用户（`users[0]`）：

```javascript
getUsers().then(users => users[0]);
```

这个整个表达式会产生一个新的 Promise ，将会用第一个用户对象兑现 Promise！

```javascript
getUsers()
  .then(users => users[0])
  .then(firstUser => {
    console.log('First user:', firstUser.username);
  });
```

从 `then` 返回一个值

这种返回一个 Promise，调用 `then` 并返回另一个值，从而产生另一个 Promise 的过程，称为链式调用。

让我们延伸这个想法。如果我们不从 `then` 处理程序返回一个值，而是返回另一个 Promise 会怎样？再次考虑文件处理的例子，其中 `readFile` 和 `processData` 都是返回 Promise 的异步函数：

```javascript
readFile('sourceData.json')
  .then(data => processData(data));
```

从 `then` 返回另一个 Promise

`then` 处理程序调用 `processData`，并返回生成的 Promise。和之前一样，这会返回一个新的 Promise。在这种情况下，当 `processData` 返回的 Promise 被兑现时，新的 Promise 也会被兑现，并赋予相同的值。因此，上述示例中的代码将返回一个包含处理后的数据的 Promise。

你可以一个接一个地链式调用多个 Promises，直到你得到所需的最终值：

```javascript
readFile('sourceData.json')
  .then(data => processData(data))
  .then(result => writeFile(result, 'processedData.json'))
  .then(() => console.log('Done processing'));
```

链式调用多个 Promises

在上述示例中，整个表达式将返回一个 Promise，该 Promise 在处理后的数据写入文件后才会被实现。控制台打印“Done processing!（处理完成）”，然后最终的 Promise 才会被兑现。

### 链式调用 Promise 的错误处理

在我们的文件处理示例中，过程中的任何阶段都可能发生错误。你可以使用 Promise 的 `catch` 方法来处理任何步骤中的错误。

```javascript
readFile('sourceData.json')
  .then(data => processData(data))
  .then(result => writeFile(result, 'processedData.json'))
  .then(() => console.log('Done processing'))
  .catch(error => console.log('Error while processing:', error));
```

使用 `catch` 来处理错误

如果链式调用中的某个 Promise 被拒绝，传递给 `catch` 的回调函数将会执行，并跳过整个链式调用中的剩余部分。

### 如何使用 `finally`

如果你希望无论 Promise 的结果如何都要执行一些操作。例如，关闭一个数据库或文件。可以使用 finally 方法。

```javascript
openDatabase()
  .then(data => processData(data))
  .catch(error => console.error('Error'))
  .finally(() => closeDatabase());
```

### 如何使用 `Promise.all`

Promise 链式调用可以让你按顺序运行多个任务，但如果你想同时运行多个任务，`Promise.all` 方法可以让你做到这一点。

`Promise.all` 接受一个 Promise 数组，并返回一个新的 Promise。当所有其他 Promise 都被兑现时，这个新的 Promise 也将被兑现。其兑现值是一个数组，包含了输入数组中每个 Promise 的兑现值。

假设你有一个函数 `loadUserProfile` 用于加载用户的个人资料数据，另一个函数 `loadUserPosts` 用于加载用户的帖子。它们都以用户 ID 作为参数。还有第三个函数 `renderUserPage` 需要同时获取用户的个人资料和帖子列表。

```javascript
const userId = 100;

const profilePromise = loadUserProfile(userId);
const postsPromise = loadUserPosts(userId);

Promise.all([profilePromise, postsPromise])
  .then(results => {
    const [profile, posts] = results;
    renderUserPage(profile, posts);
  });
```

使用 `Promise.all` 等待多个 Promise

如果出现错误怎么办呢？如果传递给 `Promise.all` 的任何一个 Promise 因错误而被拒绝，生成的 Promise 也将被该错误拒绝。其他任何被兑现的 Promise 的值都将会丢失。

### 如何使用 `Promise.allSettled`

`Promise.allSettled` 方法的工作方式类似于 `Promise.all`。主要区别在于 `Promise.allSettled` 返回的 Promise 永远不会被拒绝。

相反，它会以一个对象数组来兑现，这些对象的顺序对应于输入数组中的 Promise 的顺序。每个对象都有一个 `status` 属性，该属性根据结果分别为 "fulfilled（已兑现）" 或 "rejected（已拒绝）"。

如果 `status` 是 "fulfilled（已兑现）"，该对象还会有一个 `value` 属性，表示 Promise 的兑现值。如果 `status` 是 "rejected"，对象将有一个 `reason` 属性，用来表示 Promise 被拒绝时的错误或其他对象。

再看一个 `getUser` 函数，该函数接受一个用户 ID 并返回一个 Promise，该 Promise 将会被具有该 ID 的用户实现。你可以使用 `Promise.allSettled` 并行加载这些用户，确保获取所有成功加载的用户。

```javascript
Promise.allSettled([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(results => {
   const users = results
     .filter(result => result.status === 'fulfilled')
     .map(result => result.value);
   console.log('Got users:', users);
});
```

尝试加载三个用户，并显示成功加载的用户

你可以创建一个通用的 `loadUsers` 函数，该函数接收一个用户 ID 数组，并且并行加载用户。该函数返回一个 Promise，当所有用户成功加载时，该 Promise 将被兑现，并包含一个用户数组。

```javascript
function getUsers(userIds) {
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

一个辅助函数，用于并行加载多个用户，过滤掉任何失败的请求。

然后，你只需使用一个用户 ID 数组调用 `getUsers`：

```javascript
getUsers([1, 2, 3])
	.then(users => console.log('Got users:', users));
```

使用 `getUsers` 辅助函数

## 如何创建立即兑现或拒绝的 Promise

你希望将一个值包装在一个已兑现的 Promise 中。例如，你有一个返回 Promise 的异步函数，并且你提前知道值，不需要进行任何异步工作。

可以调用 `Promise.resolve` 并且指定一个值，这会返回一个立即兑现的 Promise，并带有你指定的值：

```javascript
Promise.resolve('hello')
  .then(result => {
    console.log(result); // prints "hello"
  });
```

使用 `Promise.resolve`

这等同于：

```javascript
new Promise(resolve => {
   resolve('hello'); 
}).then(result => {
    console.log(result); // also prints "hello"
});
```

你可以创建一个立即兑现的 Promise 并在这种情况下返回来使你的 API 更加一致。这样，调用你函数的代码就知道无论如何总是会得到一个 Promise。

例如，考虑之前定义的 `getUsers` 函数。如果用户 ID 数组为空，你可以简单地返回一个空数组，因为不会加载任何用户。

```javascript
function getUsers(userIds) {
  // immediately return the empty array
  if (userIds.length === 0) {
    return Promise.resolve([]);
  }
    
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

在 `getUsers` 辅助函数中添加一个提前返回的功能

`Promise.resolve` 的另一个用途是处理你可能获得一个值，该值可能是也可能不是一个 Promise，但你想总是将它视为一个 Promise。

你可以安全地对任何值调用 `Promise.resolve`。如果它已经是一个 Promise，你将得到另一个具有相同兑现值或拒绝值的 Promise。如果它不是一个 Promise，它将被包装在一个立即兑现的 Promise 中。

这种方法的好处是你不必做这样的事情：

```javascript
function getResult(result) {
  if (result.then) {
     result.then(value => {
         console.log('Result:', value);
     });
  } else {
      console.log('Result:', result);
  }
}
```

根据是否是 Promise 有条件地调用 `then`

同样，你可以使用 `Promise.reject` 创建一个立即拒绝的 Promise。再回到 `getUsers` 函数，如果用户 ID 数组是 `null`、`undefined` 或不是数组，我们希望立即拒绝。

```javascript
function getUsers(userIds) {
  if (userIds == null || !Array.isArray(userIds)) {
    return Promise.reject(new Error('User IDs must be an array'));
  }
    
  // immediately return the empty array
  if (userIds.length === 0) {
    return Promise.resolve([]);
  }
    
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

如果参数不是一个有效数组则返回一个错误对象

### 如何使用 `Promise.race`

就像 `Promise.all` 或 `Promise.allSettled` 一样，`Promise.race` 静态方法接收一个 Promise 数组，并返回一个新的 Promise。只是它的工作方式有些不同。

`Promise.race` 返回的 Promise 会等待给定的 Promise 中第一个被兑现或被拒绝的 Promise，然后该 Promise 也会以相同的值被兑现或被拒绝。当这种情况发生时，其他 Promise 的兑现或拒绝值将会丢失。

### 如何使用 `Promise.any`

`Promise.any` 的工作方式与 `Promise.race` 类似，但有一个关键区别 —— `Promise.race` 会在任何一个 Promise 被兑现或被拒绝时完成，而 `Promise.any` 会等待第一个被 _兑现的_ Promise。

## 如何使用 `async` 和 `await`

`async` 和 `await` 是简化处理 Promise 的特殊关键字。它们消除了对回调函数和调用 `then` 或 `catch` 的需求。它们也可以与 try-catch 模块一起使用。

它们的工作原理如下。你无需在 Promise 上调用 `then`，而是通过在它前面加上 `await` 关键词来“等待”它。这实际上会“暂停”函数的执行，直到 Promise 被实现。

以下是一个标准 Promise 的例子：

```javascript
getUsers().then(users => {
    console.log('Got users:', users);
});
```

使用 `then` 等待一个 promise

以下是使用 `await` 关键字的等效代码：

```javascript
const users = await getUsers();
console.log('Got users:', users);
```

使用 `await` 等待一个 promise

Promise 连续操作也更加简洁：

```javascript
const data = await readFile('sourceData.json');
const result = await processData(data);
await writeFile(result, 'processedData.json');
```

使用 `await` 链接 promise

记住，每次使用 `await` 都会暂停函数的其余部分的执行，直到你等待的 Promise 被实现。如果你想等待多个并行运行的 Promise，你可以使用 `Promise.all`：


```javascript
const users = await Promise.all([getUser(1), getUser(2), getUser(3)]);
```

使用 `await` 的 Promise.all

要使用 `await` 关键字，你的函数必须标记为异步函数。你可以在函数前面加上 `async` （异步）关键字来实现这一点：

```javascript
async function processData(sourceFile, outputFile) {
  const data = await readFile(sourceFile);
  const result = await processData(data);
  writeFile(result, outputFile);
}
```

标记函数为 `async`

添加 `async` 关键字还对函数产生了另一个重要影响。异步函数始终会隐匿地返回一个 Promise。如果你从异步函数中返回一个值，该函数实际上会返回一个以该值兑现的 Promise。

```javascript
async function add(a, b) {
  return a + b;   
}

add(2, 3).then(sum => {
   console.log('Sum is:', sum); 
});
```

一个 `async` 函数用于求两个数字的和

在上面的例子中，该函数返回两个参数 `a` 和 `b` 的 _和_。但由于它是一个 `async` 函数，它不会直接返回 _和_，而是返回一个带有 _和_ 的被实现的 Promise 。

### 使用 `async` 和 `await` 进行错误处理

我们使用 `await` 来等待 Promise 被实现，但是如果你等待一个 Promise，并且它被拒绝了，就会抛出一个错误。你可以将其放在一个 try-catch 模块中来处理错误：

```javascript
try {
    const data = await readFile(sourceFile);
    const result = await processData(data);
    await writeFile(result, outputFile);
} catch (error) {
    console.error('Error occurred while processing:', error);
}
```

使用 try-catch 模块进行错误处理

## Promise 的反模式

### 不需要创建新 Promise 的情况

有时候无法避免创建新的 Promise。但是，如果已经有 API 返回的 Promise 你就不需要创建自己的：

```javascript
function getUsers() {
  return new Promise(resolve => {
     fetch('https://example.com/api/users')
       .then(result => result.json())
       .then(data => resolve(data))
  });
}
```

创建不必要的 Promise 的例子

在这个例子中，我们创建一个新的 Promise 来包装 Fetch API，而 Fetch API 已经返回 Promise。这是不必要的。我们可以直接返回 Fetch API 的 Promise 链式调用：

```javascript
function getUsers() {
  return fetch('https://example.com/api/users')
    .then(result => result.json());
}
```

使用现有的 Fetch promise

在这两种情况下，调用 `getUsers` 的代码看起来都是一样的：

```javascript
getUsers()
  .then(users => console.log('Got users:', users))
  .catch(error => console.error('Error fetching users:', error));
   
```

Client code for either version of the `getUsers` function ------ more accurate translation required
`getUsers` 函数任何一种版本的客户端代码

### 吞噬错误

来看这个版本的 `getUsers` 函数：

```javascript
function getUsers() {
    return fetch('https://example.com/api/users')
    	.then(result => result.json())
    	.catch(error => console.error('Error loading users:', error));
}
```

吞噬 Fetch 错误

错误处理很好，对吧？如果我们调用这个 `getUsers` 函数，你可能会对结果感到惊讶：

```javascript
getUsers()
  .then(users => console.log('Got users:', users))
  .catch(error => console.error('error:', error);)
```

调用 `getUsers`

你可能期望这会打印出 "error（错误）"，但实际上它会打印出 "Got users: undefined"。这是因为 `catch` 调用"吞噬"了错误，并返回一个新的 Promise，该 Promise 用 `catch` 回调的返回值 `undefined`（`console.error` 返回 `undefined`）来兑现。你仍然会看到来自 `getUsers` 的 "Error loading users" 日志消息，但返回的 Promise 将会被兑现，而不是被拒绝。

如果你想在 `getUsers` 函数内部捕获错误并且仍然拒绝返回的 Promise，`catch` 处理程序需要返回一个被拒绝的 Promise。你可以通过使用 `Promise.reject` 来实现这一点。

```javascript
function getUsers() {
  return fetch('https://example.com/api/users')
    .then(result => result.json())
    .catch(error => {
      console.error('Error loading users:', error);
      return Promise.reject(error);
    });
}
```

在处理错误后返回一个被拒绝的 Promise

现在你仍然会得到 "Error loading users（加载用户错误）" 的消息，但返回的 Promise 也会因错误而被拒绝。

### Promise 的嵌套

避免嵌套 Promise，尝试使用扁平化的 Promise 链式调用。

不要这样：

```javascript
readFile(sourceFile)
  .then(data => {
    processData(data)
      .then(result => {
        writeFile(result, outputFile)
          .then(() => console.log('done');
      });
  });
```

应该这样：

```javascript
readFile(sourceFile)
  .then(data => processData(data))
  .then(result => writeFile(result, outputFile))
  .then(() => console.log('done'));
```

## 总结

以下是使用 Promise 的关键要点：

-   Promise 可以是 pending（待定）、fulfilled（已兑现）或 rejected（已拒绝）
-   如果一个 Promise 被实现（fulfilled）或被拒绝（rejected），它就是被解决了(settled),
-   使用 `then` 来获取 Promise 的兑现值（以及进行下一步的操作）
-   使用 `catch` 来处理错误
-   使用 `finally` 来执行在成功或错误情况下都需要的清理逻辑
-   链接 Promise 以按顺序执行异步任务
-   使用 `Promise.all` 来获得一个 Promise，当所有给定的 Promise 都被兑现时它就会被兑现（fulfilled），或当其中一个 Promise 被拒绝时它被拒绝（rejected）
-   使用 `Promise.allSettled` 来获得一个 Promise，当所有给定的 Promise 都被兑现（fulfilled）或被拒绝（rejected）时它被解决
-   使用 `Promise.race` 来获得一个 Promise，当给定的 Promise 中第一个被兑现或被拒绝时它也被兑现或被拒绝
-   使用 `Promise.any` 来获得一个 Promise，当给定的 Promise 中第一个被兑现时它被兑现
-   使用 `await` 关键字来等待一个 Promise 的兑现值
-   使用 try-catch 模块来处理使用 `await` 关键字时产生的错误
-   使用 `await` 的函数必须使用 `async` 关键字

感谢阅读这篇关于 Promise 的深入探讨。希望你学到了新知识！

---

![Joe Attardi](https://www.freecodecamp.org/news/content/images/size/w60/2023/10/5.png)

[乔·阿塔迪（Joe Attardi）][13]

阅读[更多帖子][14]。

---

如果你读到这里，请感谢作者，向他们表达你的关心。说声谢谢

免费学习编程。freeCodeCamp 的开源课程已经帮助了超过 40,000 人找到了开发人员的工作。[开始学习][15]

[1]: /news/tag/javascript/
[2]: /news/author/joeattardi/
[3]: #Promise-是什么
[4]: #Promise-与其他异步模式的比较
[5]: #如何创建-Promiose
[6]: #如何获取-Promise-的结果
[7]: #如何使用-then-处理错误
[8]: #Promise-链式调用
[9]: #如何创建立即实现或拒绝的-Promise
[10]: #如何使用-async-和-await
[11]: #Promise-的反模式
[12]: #总结
[13]: /news/author/joeattardi/
[14]: /news/author/joeattardi/
[15]: https://www.freecodecamp.org/learn/
