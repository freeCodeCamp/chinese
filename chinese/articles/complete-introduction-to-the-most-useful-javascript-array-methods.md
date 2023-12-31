> -  原文地址：[JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples](https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/)
> -  原文作者：[Yogesh Chavan](https://www.freecodecamp.org/news/author/yogesh/)
> -  译者：sunnysly123
> -  校对者：

![JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples](https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg)

如果你是一个想提高自身编程能力的 Javascript 开发者，那你应该对最常用的 ES5 和 ES6+ 的数组方法很熟悉。

这些方法能使你的编码变得更简单，并让你的代码看起来干净易读。

在这篇文章中，我们将探索一些最收欢迎并被广泛使用的数组方法。让我们开始吧。

## Array.forEach 方法

 `Array.forEach` 方法的语法如下：

```js
Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

`forEach` 方法为数组中的每一项执行一次给定的函数。

请看以下代码：

```js
const months = ['January', 'February', 'March', 'April'];

months.forEach(function(month) {
  console.log(month);
});

/* output

January
February
March
April

*/
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/bGBqzOw?editors=0012).

在这个 `forEach` 循环的 callback 函数中，数组中的每一项都自动作为第一个参数传到函数中。

与上面例子相同的 for 循环代码如下：

```js
const months = ['January', 'February', 'March', 'April'];

for(let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

/* output

January
February
March
April

*/
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/abBJXMR?editors=0012).

要记住的一点是，这个方法不返回任何值。

请看以下代码：

```js
const months = ['January', 'February', 'March', 'April'];
const returnedValue = months.forEach(function (month) {
  return month;
});

console.log('returnedValue: ', returnedValue); // undefined
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/PobpxGb?editors=0012).

> _注意_ `_forEach_` _只用于循环数组，执行操作或者打印日志。它并不返回任何值，即使在 callback 函数中明确的返回一个值（这意味着上个例子中返回的值是_ `undefined` _）。_

上面的所有例子中，我们都只使用了 callback 函数的第一个参数。但 callback 函数还接收两个额外的参数，他们是：

-   index - 当前迭代元素的索引
-   array - 当前循环的原始数组

```js
const months = ['January', 'February', 'March', 'April'];

months.forEach(function(month, index, array) {
  console.log(month, index, array);
});

/* output

January 0 ["January", "February", "March", "April"]
February 1 ["January", "February", "March", "April"]
March 2 ["January", "February", "March", "April"]
April 3 ["January", "February", "March", "April"]

*/
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/OJbpqJR?editors=0012).

根据不同的需求，你会发现 `index` 和`array` 这两个参数也很有用。

### forEach 相比 for 循环的优点

-   使用 `forEach` 能让你的代码量更少，且更容易理解
-   使用 `forEach` 时，我们不需要记录数组中有多少可用元素，因此可以避免创建一个额外的计数器变量。
-   使用 `forEach` 循环更方便调试，因为循环数组没有额外的变量
-   在数组中所有元素都迭代完，`forEach` 循环会自动停止。

### 浏览器支持

-   IE9 版本及以上和所有现代浏览器
-   Edge12 版本及以上

## Array.map 方法

数组的 map 方法是所有剩下其他方法中最有用且使用最广泛的。

 `Array.map` 方法的语法如下：

```js
Array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

 `map` 方法为数组中的每个元素执行一次给定的函数，并且 **返回一个转换过后的新数组。**

请看以下代码：

```js
const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

console.log(transformedArray); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/ExNWOyr?editors=0012).

在上面的代码中，callback 函数将每个元素转化成大写并且返回。

与上例相同的 for 循环代码如下：

```js
const months = ['January', 'February', 'March', 'April'];
const converted = [];

for(let i = 0; i < months.length; i++) {
 converted.push(months[i].toUpperCase());
};

console.log(converted); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/gOLmyQQ?editors=0012).

使用 `map` 可以避免预先创建一个单独的 `转换过的` 数组来存储转换过的元素。因此使用 `map` 可以节省储存空间，也能让代码看起来更干净，如下：

```js
const months = ['January', 'February', 'March', 'April'];

console.log(months.map(function (month) {
  return month.toUpperCase();
})); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/oNYZVoX?editors=0012).

注意 `map` 方法返回一个与原数组长度一致的新数组。

 `forEach` 与 `map` 方法的区别是 `forEach` 只用于循环，没有任何返回值。而 `map` 方法返回一个与原数组长度相同的新数组。

也要注意 `map` 并不改变原数组而是返回一个新的数组。

请看以下代码：

```js
const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

const usersList = users.map(function (user) {
  return user.first_name + ' ' + user.last_name;
});

console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/LYbWaxP?editors=0012).

这里通过使用对象数组和 `map` 方法，我们可以轻松生成一个姓和名组合的一维数组。

上面的代码中，我们使用 `+` 连接符连接两个值，但通常我们会使用 ES6 的模板字符串语法，如下：

```js
const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

const usersList = users.map(function (user) {
  return `${user.first_name} ${user.last_name}`;
});

console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/abBJMqe?editors=0012).

如果你想得到数组中特定的数据，数组的 `map` 方法也是有用的。如下：

```js
const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
];

const surnames = users.map(function (user) {
  return user.last_name;
});

console.log(surnames); // ["Sheridan", "Lee", "Carte"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/rNWyRdR?editors=0012).

在上面的代码中，我们只把每个用户的姓提取出来，然后将他们存储在一个数组中。

我们还可以使用 `map` 生成一个动态内容如下：

```js
const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

const usersList = users.map(function (user) {
  return `${user.first_name} lives in ${user.location}`;
});

console.log(usersList); // ["Mike lives in London", "Tim lives in US", "John lives in Australia"]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/ExNWMOY?editors=0012).

注意在上面的代码中，我们并没有改变原始的 `users` 数组。我们创建了一个新的动态内容数组，因为 `map` 总是返回一个新的数组。

### 使用 map 方法的优点

-   可以在不改变原数组的同时快速生成一个新数组
-   可以基于每个元素生成一个动态内容的数组
-   可以快速提取数组中的任意一个元素
-   它能生成一个与原数组长度相同的数组

**浏览器支持：**

-   IE9 版本及以上和所有现代浏览器
-   Edge12 版本及以上

## Array.find 方法

`Array.find` 方法的语法如下：

```js
Array.find(callback(element[, index[, array]])[, thisArg])
```

> `_find_` _方法返回数组中满足给定条件的_ `_第一个元素_`的 `_值_`。

`find` 方法将 callback 函数作为第一个 argument 对象，并为数组中的每个元素执行 callback 函数。每个数组中的元素值都被作为第一个参数传到 `callback` 函数中。

设想我们有这样一个应聘者列表：

```js
const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];
```

我们想得到姓名是 `John` 的应聘者记录，在这种情况下，我们可以使用 `find` 方法，如下：

```js
const employee = employees.find(function (employee) {
  return employee.name.indexOf('John') > -1;
});

console.log(employee); // { name: "John Cena", age: 34 }
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/VwmpVmL?editors=0011).

尽管列表中有 `"John Carte"` ，但 `find` 方法在第一次匹配后就会停止。因此它不会返回名为 `"John Carte"` 的这个对象。

与上例相同的 for 循环代码如下：

```js
const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

let user;

for(let i = 0; i < employees.length; i++) {
  if(employees[i].name.indexOf('John') > -1) {
    user = employees[i];
    break;
  }
}

console.log(user); // { name: "John Cena", age: 34 }
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/BaQWbeY?editors=0012).

可以看到的是，使用普通的 for 循环会使代码量更大并且更难理解。但是使用 `find` 方法，我们可以通过容易理解的方式写出同样的代码。

### find 方法的优点

-   我们可以不用写大量代码就快速找到任意一个元素
-   找到匹配元素后会立即停止循环，因此不用写额外的 break 语句

**浏览器支持：**

-   除 IE 之外的所有现代浏览器
-   Edge 12 版本及以上

## Array.findIndex 方法

 `Array.findIndex` 方法的语法如下：

```js
Array.findIndex(callback(element[, index[, array]])[, thisArg])
```

 `findIndex` 方法返回数组中 **满足给定测试条件** 的第一个元素的 **索引**。否则返回 `-1`，表示没有元素通过检测。

```js
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

const index = employees.findIndex(function (employee) {
  return employee.name.indexOf('John') > -1;
});

console.log(index); // 1
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/JjbWebQ?editors=0012)。

这里我们得到的输出 **1** 就是名为 `John` 的第一个对象的索引。注意索引是从 0 开始的。

与上面代码相同的 for 循环代码如下：

```js
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

let index = -1;

for(let i = 0; i < employees.length; i++) {
  if(employees[i].name.indexOf('John') > -1) {
    index = i;
    break;
  }
}

console.log(index); // 1
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/oNYZOgY?editors=0012).

### 使用 findIndex 的优点

-   能让我们不用写大量代码就快速找到元素的索引
-   It stops looping as soon as it finds a match so there is no need for an extra break statement
-   找到匹配元素后会立即停止循环，因此不用写额外的 break 语句
-   我们也可以用 `find` 方法来找到索引，但是使用 `findIndex` 会更简单，且能避免额外创建变量来存储索引

**浏览器支持：**

-   除 IE 之外的所有现代浏览器
-   Edge 12 版本及以上

## Array.filter 方法

 `Array.filter` 方法的语法如下：

```js
Array.filter(callback(element[, index[, array]])[, thisArg])
```

 `filter` 方法返回一个符合给定测试条件所有元素组成的 `新数组` 。

 `filter` 方法将 callback 函数作为第一个 argument 对象，并为数组中的每一个元素执行该 callback 函数。数组中的每个元素值被作为第一个参数传递到 callback 函数中。

```js
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

const employee = employees.filter(function (employee) {
  return employee.name.indexOf('John') > -1;
});

console.log(employee); // [ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/yLVMQgE?editors=0011).

从上面的代码里可以看出，使用 `filter` 方法能找出数组中所有符合特定检测条件的元素。

因此使用 `filter` ，在找到数组中符合条件的元素时也不会停止搜索其他满足条件的元素，之后会返回所有满足条件的元素。

> `find` 与 `filter` 的主要区别在于 `find` 只返回数组中匹配的第一个元素，而 `filter` 返回数组中所有匹配元素。

注意 `filter` 方法返回的是一个数组，如果没有元素通过检测条件，将会返回一个空数组。

与上例相同的 for 循环代码如下：

```js
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John Carte', age: 50 }
];

let filtered = [];

for(let i = 0; i < employees.length; i++) {
 if(employees[i].name.indexOf('John') > -1) {
   filtered.push(employees[i]);
 }
}

console.log(filtered); // [ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/qBqrwaq?editors=0011).

### 使用 filter 方法的优点

-   可以让我们快速找到数组中所有匹配的元素
-   不管有没有匹配到，都会返回一个数组，因此可以避免写额外的 `if` 条件
-   可以避免创建一个额外的变量来存储过滤后的元素

**浏览器支持：**

-   IE9 及以上和所有现代浏览器
-   Edge 12 及以上

## Array.every 方法

 `Array.every` 方法的语法如下：

```js
Array.every(callback(element[, index[, array]])[, thisArg])
```

 `every` 方法检测数组中的所有元素是否都通过给定的条件，并且返回一个布尔值 `true` 或者 `false` 。


假设有一个数字组成的数组，想检测是否数组中的每个元素都是正数，我们可以使用 `every` 方法来完成。

```js
let numbers = [10, -30, 20, 50];

let allPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(allPositive); // false 

numbers = [10, 30, 20, 50];

allPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(allPositive); // true
```

假设有一个注册表格，你想在提交前检查是否所有必填项都已输入，就可以使用 `every` 方法来轻松检查表单的每一项。

```js
window.onload = function () {
  const form = document.getElementById('registration_form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fields = ['first_name', 'last_name', 'email', 'city'];
    const allFieldsEntered = fields.every(function (fieldId) {
      return document.getElementById(fieldId).value.trim() !== '';
    });

    if (allFieldsEntered) {
      console.log('All the fields are entered');
      // All the field values are entered, submit the form
    } else {
      alert('Please, fill out all the field values.');
    }
  });
};
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/rNWyQwo?editors=0011).

上面 `every` 方法的 callback 函数中，我们检查表单的每一项是否都不为空，并且返回一个布尔值。

在上面的代码中，如果 callback 函数中， `fields` 数组中的每一项都返回 `true` ，那 `every` 方法就返回 `true` 。

如果 `fields` 数组中任意一个 callback 函数返回 `false` 值， `every` 方法就会返回 `false` 结果。
### 使用 every 方法的优点

-   能让我们不用写大量代码就快速检测出是否所有元素都满足特定的标准

### 浏览器支持

-   IE9 及以上和所有现代浏览器
-   Edge 12 及以上

## Array.some 方法

 `Array.some` 方法的语法如下：

```js
 Array.some(callback(element[, index[, array]])[, thisArg]
```

 `some` 方法检测数组中是否至少有一个元素通过给定函数的检测条件，并且返回一个 `true` 或 `false` 的布尔值。

一旦找到第一个匹配元素，会立即返回 `true` ，如果没有，则会返回 `false` 。

假定有一个数字组成的数组，我们想检测数组中是否至少包含一个正数，就可以使用 `some` 方法来完成。

```js
let numbers = [-30, 40, 20, 50];

let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log(containsPositive); // true 

numbers = [-10, -30, -20, -50];

containsPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(containsPositive); // false
```

这里有一些使用 `some` 方法的有用场景：

### `Some` 方法例 1

假设有一个应聘者的列表，我们想检查某个特定的应聘者是否在这个数组中，如果有的话，同时要得到在数组总的索引位置。

因此我们可以使用 `some` 方法同时得到这两个值，而不用分别单独使用 `find` 和 `findIndex` 方法。

```js
const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridon', age: 25 },
  { name: 'John Carte', age: 50 }
];

let indexValue = -1;
const employee = employees.some(function (employee, index) {
  const isFound = employee.name.indexOf('John') > -1;
  if (isFound) {
    indexValue = index;
  }
  return isFound;
});

console.log(employee, indexValue); // true 1
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/ExNWOvz?editors=0011)。

### `Some` 方法示例 2

 `forEach`, `map`, 和 `filter` 方法会将数组中的所有元素从头到尾执行一次。没有终止循环的方法，除非找到特定的元素。


在这种情况下，我们可以使用数组的 `some` 方法。 `map`, `forEach` 和 `some` 方法的 callback 函数传递的参数都相同。

-   第一个参数是当前值
-   第二个参数是当前索引
-   第三个参数是原始数组

如上面例 1 中看到的，一旦找到特定的匹配值， `some` 方法就会停止循环。

### 使用 some 方法的优点

-  能让我们不用写大量代码就快速检测是否有匹配一定标准的元素
-  能快速终止循环，这是上面其他循环方法没有的

### 浏览器支持

-  IE9 及以上和所有现代浏览器 
-  Edge 12 及以上

## Array.reduce 方法

The `Array.reduce` method has the following syntax:
 `Array.reduce` 方法的语法如下：

```js
Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

 `reduce` 方法对数组中的每个元素执行一个由您提供的 reducer 函数，将其结果汇总为单个返回值。

> 注意 `reduce` 方法的输出总是一个单一的值。它可以是一个对象，一个数字，一个字符串，一个数组等等。 这取决于你想要 `reduce` 方法输出那种，但他总是一个单一的值。

如果你想求数组中所有数字的和，可以用 `reduce` 方法。

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number; 
}, 0);

console.log(sum); // 15
```

这里是[Code Pen 演示](https://codepen.io/myogeshchavan97/pen/ExNWzmo?editors=0012).

`reduce` 方法接收一个 callback 函数，参数为 `accumulator`, `number`, `index` 和 `array` 。上面的代码中，我们只使用了 `accumulator` 和 `number`。

`accumulator` 包含数组中要用到的 `initialValue` 。 `initialValue` 决定了 `reduce` 方法返回的数据类型。

`number` 是 callback 函数中的第二个参数，包含循环中的每个枚举值。

上面的代码中，我们提供了 `0` 作为 `accumulator` 的  `initialValue` 。因此 callback 函数第一次执行时， `accumulator + number` 是 `0 + 1 = 1` ，返回值是  `1`。

下一次 callback 函数运行时，`accumulator + number` 是 `1 + 2 = 3` （这里的 `1` 是上次迭代返回的值，`2` 是数组中下一个元素）。

在下一次运行， `accumulator + number` 就是 `3 + 3 = 6`（这里的第一个 `3` 是上次迭代的返回值，下一个 `3` 是数组中下一个元素），并且这会持续到数组中的 `numbers` 不再迭代。

因此 `accumulator` 会保持上一次操作的值，就像一个静态变量。

上面的代码中， `initialValue` 的 `0` 并不是必须的，因为数组中的元素都是整数。

因此下面的代码同样可以：

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
});

console.log(sum); // 15
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/ExNWObz?editors=0012).

这里的 `accumulator` 包含数组中的第一个元素， `number` 包含数组中的下一个元素（第一次迭代是 `1 + 2 = 3` ，第二次迭代是 `3 + 3 = 6` ，以此类推）。

但搞清楚 `accumulator` 的 `initialValue` 也是很有用的，因为这能让你更容易理解 `reduce` 方法的返回类型，并且得到正确类型的返回值。

请看以下代码：

```js
const numbers = [1, 2, 3, 4, 5];

const doublesSum = numbers.reduce(function (accumulator, number) {
  return accumulator + number * 2;
}, 10);

console.log(doublesSum); // 40
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/jOVBQYx?editors=0012).

这里我们给数组中的每个元素乘以 2。我们给 `accumulator` 提供了一个 `initialValue` 为 10，因此 10 被加到总和结果中，如下：

```js
[1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2] = [2, 4, 6, 8, 10] = 30 + 10 = 40
```

假设一个有 x 和 y 坐标的对象数组，你想得到 x 坐标的和，就可以使用 `reduce` 方法。

```js
const coordinates = [
  { x: 1, y: 2 }, 
  { x: 2, y: 3 }, 
  { x: 3, y: 4 }
];

const sum = coordinates.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, 0);

console.log(sum); // 6
```

这里是 [Code Pen 演示](https://codepen.io/myogeshchavan97/pen/OJbpaOg?editors=0012).

### 使用 reduce 方法的优点

-   使用 `reduce` 可以基于数组生成任何简单或者复杂类型的数据
-   它能记住循环中之前的返回值，因此可以避免创建一个保存历史值的全局变量

**浏览器支持：**

-  IE9 及以上和所有现代浏览器
-  Edge 12 及以上

### 感谢阅读！

想要详细学习更多包括 `let` 和 `const`， promises, 几种 promise 的方法，数组与对象解构，数组的方法，async/await，import 与 export 等其他 ES6+ 的特性？

点击查看我的书 [掌握现代 JavaScript](https://yogeshchavan1.podia.com/mastering-modern-javascript?coupon=LA1HR55)。这本书为你学习 React 做准备，并且帮助你更好的掌握 JavaScript 和 React。

也可以通过我的免费课程 [React Router 介绍](https://yogeshchavan1.podia.com/react-router-introduction) 来从头学习 React Router。

**想要紧跟最新 JavaScript, React, Node.js 的内容? [在 LinkedIn 上关注我](https://www.linkedin.com/in/yogesh-chavan97/).**
