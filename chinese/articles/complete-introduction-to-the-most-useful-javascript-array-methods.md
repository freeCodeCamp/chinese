> -   原文地址：[JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples](https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/)
> -   原文作者：Yogesh Chavan
> -   译者：WhoIsTheSuperGuy
> -   校对者：

![JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples](https://images.unsplash.com/photo-1566837945700-30057527ade0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDE5fHxjb2Rpbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

如果你想要进一步提高自己的JavaScript编程水平，那么你一定要熟练掌握最常使用的ES5和ES6+的数组方法。

这些数组方法能帮助你轻松编程，同时让代码更加简洁易懂。

因此，本文列举了最普遍、最常使用的数组方法。

## Array.forEach 方法

`Array.forEach` 方法有以下句法syntax：

```js
Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

`forEach` 方法对于数组里的每一个元素都执行一次给定的函数。

例如：

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

```


[代码演示][1]在此。

在 `forEach` 循环回调函数中，数组中的每个元素都会自动作为第一个参数传参到函数中。

上述例子中的循环代码也可以写成这样：

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

```

[代码演示][2]在此。

需要注意的是，`forEach` 方法不返回任何值。

例如：

```js
const months = ['January', 'February', 'March', 'April'];
const returnedValue = months.forEach(function (month) {
  return month;
});

```

[代码演示][3]在此。

> _注意： _`_forEach_` _只用于循环数组和执行一些处理或日志记录。它不返回任何值，即使你想要从回调函数中显式地返回值也不行（这意味着在上述例子中返回的值是_`undefined`_）。_

在上述所有例子中，我们只用了回调函数的第一个参数。但回调函数还可以有另外两个参数：

-   index - 当前迭代的元素索引
-   array - 正在循环的原始数组

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

```

[代码演示][4]在此。

有时候根据需要，`index` 和 `array` 参数可能会很有用。

### 在 for 循环中使用 forEach 的优势

-   使用 `forEach` 能使你的代码更简洁易懂
-   当使用 `forEach`  循环时，我们不需要跟踪数组里有多少available元素，因此可以避免创建额外的计数变量。
-   使用 `forEach` 循环使代码更容易调试，因为没有额外的变量用于数组循环。
-   当数组里所有的元素都迭代完之后，`forEach`  循环会自动停止。

### 浏览器支持Browser Support

-   所有主流浏览器和版本9及以上的IE浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.map 方法

Array map 方法是所有其他数组方法里最实用、最常用的方法。

`Array.map` 方法的句法如下：

```js
Array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

`map` 方法对于数组中每一个元素，执行一次给定的函数，并**返回一个新的转换后的数组**。

看下面这段代码:

```js
const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

```

[代码演示][5]在此。

在上述代码中，我们在回调函数内部把每个元素转换成大写，并返回它们。

上述例子的循环代码也可以写成这样：

```js
const months = ['January', 'February', 'March', 'April'];
const converted = [];
for(let i = 0; i < months.length; i++) {
 converted.push(months[i].toUpperCase());
};

```

[代码演示][6]在此。

使用 `map` 方法使我们无需提前创建一个额外的 `converted` 数组来存储转换后的元素。因此它节约了内存空间，同时也使代码看上去更加简洁:

```js
const months = ['January', 'February', 'March', 'April'];

```

[代码演示][7]在此。

注意，`map` 方法会返回一个和原数组等长的新数组。

`forEach`和`map`方法的不同之处在于：`forEach`只用于循环，而不返回任何值，而`map`方法会返回一个和原数组等长的新数组。

同时也要注意`map`不会改变原数组，而是返回一个新的数组。

看下面这段代码：

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

```

[代码演示][8]在此.

在这段代码中，通过使用`map`方法和一个包含对象的数组，我们可以轻松生成一个姓名联接在一起的新数组。

在上述代码中，我们使用`+`符号来联接两个值。但是更常见的用法是使用 ES6 模板文字语法：

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
  return </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>user<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>first_name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);"> </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>user<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>last_name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">;
});

```

[代码演示][9]在此.

当你只想从数组中提取特定数据时，数组`map`方法也是有用的：

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

```

[代码演示][10]在此.

在上述代码中，我们只提取了每个用户的名，并将它们存储在一个新的数组中。

我们也可以使用`map`来生成有动态内容的数组，如下所示：
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
  return </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>user<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>first_name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);"> lives in </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>user<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>location<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">;
});

```

[代码演示][11]在此.

上述代码中，我们没有改变原始的`users`数组，而是创建了一个有动态内容的新数组，因为`map`方法始终会返回一个新的数组。

### 使用map方法的优势

-   它可以在不改变原数组的情况下快速生成新的数组
-   它可以基于每个元素生成有动态内容的新数组
-   它可以快速提取数组中的任何元素
-   它生成和原数组等长的数组

**浏览器支持：**

-   所有主流浏览器和版本9及以上的IE浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.find方法

`Array.find` 方法的句法如下：

```js
Array.find(callback(element[, index[, array]])[, thisArg])
```

> _ `_find_`_ _方法返回数组中第一个满足给定条件的元素的值。_

`find`方法第一个参数为回调函数，并且对每一个数组元素执行这个回调函数。每个数组元素的值作为第一个参数传入回调函数中。  

假设我们有一个员工列表：

```js
const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];
```

我们可以使用`find`方法获取名为`John`的员工记录：

```js
const employee = employees.find(function (employee) {
  return employee.name.indexOf('John') > -1;
});

```

[代码演示][12]在此.

即使列表中有`"John Carte"`，`find`方法在找到第一个匹配值后就会停止。因此，它不会返回名为`"John Carte"` 的记录。 

上述例子的循环代码也可以写成这样：

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

```

[代码演示][13]在此.

常规循环使代码看起来又冗长又难懂，使用`find`方法更简洁易懂。

### 使用find方法的优势

-   它可以用简洁的代码快速地找到任一元素
-   它一找到匹配值就会停止循环，不需要额外的break语句

**浏览器支持：**

-   除了IE浏览器之外的所有主流浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.findIndex方法

`Array.findIndex`方法的句法如下：

```js
Array.findIndex(callback(element[, index[, array]])[, thisArg])
```

`findIndex`方法返回数组中**满足给定条件**的第一个元素的**索引**。如果没有满足条件的元素，该方法会返回`-1`。

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

```

[代码演示][14]如下.

在这段代码中，我们得到的返回值是**1**，也就是名字为`John`的第一个元素的索引。注意索引是从0开始。

上述例子的循环代码也可以写成这样：

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

```

[代码演示][15]在此.

### 使用 findIndex 方法的优势

-   它可以用简洁的代码快速地找到任一元素的索引
-   它一找到匹配值就会停止循环，不需要额外的break语句
-   我们也可以使用数组的`find`方法找到索引，但是使用`findIndex`方法更简单，避免了创建额外的变量来存储索引

**浏览器支持：**

-   除了IE浏览器之外的所有主流浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.filter 方法

`Array.filter`方法的句法如下：

```js
Array.filter(callback(element[, index[, array]])[, thisArg])
```

`filter`方法返回新数组，包含所有满足给定条件的元素。

`filter`方法第一个参数为回调函数，并且对每一个数组元素执行这个回调函数。每个数组元素的值作为第一个参数传入回调函数中。

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

```

[代码演示][16]在此.

上述代码中，使用`filter` 来找到数组中所有满足给定条件的元素。

因此，`filter`方法在找到一个匹配值后不会停止，而是继续检查数组中的其他元素是否匹配，并最终返回数组中所有匹配的元素。

> `find` 和`filter`的主要区别在于，`find`只返回数组中第一个匹配的元素，而`filter` 返回数组中所有匹配的元素。

注意，`filter`方法总是会返回一个数组。如果没有匹配的元素，则会返回一个空数组。

上述例子的循环代码也可以写成这样：

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

```

[代码演示][17]在此.

### 使用 filter 方法的优势

-   它可以快速找到数组中的所有匹配元素
-   即使没有满足条件的元素，它也始终会返回一个数组，因此不需要写额外的`if`条件
-   它避免了创建额外的变量来存储匹配到的元素

**浏览器支持：**

-   所有主流浏览器和版本9及以上的IE浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.every 方法

`Array.every`方法的句法如下：

```js
Array.every(callback(element[, index[, array]])[, thisArg])
```

`every`方法检查数组中所有元素是否都满足给定条件，并返回`true`或`false`的布尔值。

假设我们有一组数字，如果我们想检查数组中是否所有值都是正数，就可以使用`every`方法。

```js
let numbers = [10, -30, 20, 50];
let allPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(allPositive); // false 
numbers = [10, 30, 20, 50];

```

假设你有一份注册表，你想在提交表单之前检查一下是否输入了所有所需的字段，使用`every`方法就可以很简单地做到。

```js
window.onload = function () {
  const form = document.getElementById('registration_form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fields = ['first_name', 'last_name', 'email', 'city'];
    const allFieldsEntered = fields.every(function (fieldId) {
      return document.getElementById(fieldId).value.trim() !== '';
    });
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>allFieldsEntered<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  console<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'All the fields are entered'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
  <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// All the field values are entered, submit the form</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">else</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">alert</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'Please, fill out all the field values.'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

[代码演示][18]在此.

在`every`方法的回调函数内，我们检查了每个字段是否为空，并返回布尔值。

上述代码中，如果对于`fields`数组里的所有元素，回调函数都返回`true`值，那么`every`方法返回`true`值。

如果对于`fields`数组中任一元素，回调函数返回了`false`值，那么`every`方法最终就会返回`false`值。

### 使用every方法的优势

-   它可以用简洁的代码快速地检查所有元素是否符合特定的条件

### 浏览器支持

-   所有主流浏览器和版本9及以上的IE浏览器
-   版本12及以上的Microsoft Edge浏览器

## Array.some方法

`Array.some`方法的句法如下：

```js
 Array.some(callback(element[, index[, array]])[, thisArg]
```

`some`方法检查数组中是否至少有一个元素满足给定条件，并返回`true`或`false`的布尔值。

当找到了第一个匹配值，它就会立刻返回`true`。如果整个数组没有匹配值，就返回`false`。

假设我们有一组数字，如果我们想检查数组中是否至少有一个数为正数，就可以使用`some`方法。

```js
let numbers = [-30, 40, 20, 50];
let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log(containsPositive); // true 
numbers = [-10, -30, -20, -50];

```

以下是一些使用`some`方法的有效场景。

### `Some` 方法例1:

假设有一个员工列表，我们想要检查特定员工是否在该数组内，并且如果该员工在数组内，我们想得到他的索引位置。

我们可以使用`some`方法来达到这两个要求，而无需分别使用`find`和`findIndex`方法。

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

```

[代码演示][19]在此.

### `Some` 方法例2:

The array  `forEach`,  `map`, and  `filter`  methods run from start to finish until all of the elements of the array are processed. There is no way of stopping of breaking out of the loop, once a particular element is found.

In such cases, we can use the array  `some`  method. The  `map`,  `forEach`  and  `some`  method takes the same parameters in the callback function:

-   The first parameter is the actual value
-   The second parameter is the index
-   The third parameter is the original array

The  `some`  method stops looping through the array once it finds a particular match as can be seen in the above example 1.

### Advantages of using the some method

-   It allows us to quickly check if some of the elements match certain criteria without writing a lot of code
-   It allows us to quickly break out of the loop, which was not possible with other looping methods seen above

### Browser Support:

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

## The Array.reduce Method

The  `Array.reduce`  method has the following syntax:

```js
Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

The  `reduce`  method executes a  **reducer**  function (that you provide) on each element of the array, resulting in a single output value.

> Note that the output of the  `reduce`  method is always a single value. It can be an object, a number, a string, an array, and so on. It depends on what you want the output of  `reduce`  method to generate but it's always a single value.

Suppose that you want to find the sum of all the numbers in the array. You can use the  `reduce`  method for that.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number; 
}, 0);

```

[代码演示][20]在此.

The  `reduce`  method accepts a callback function that receives  `accumulator`,  `number`,  `index`  and  `array`  as the values. In the above code, we’re using only  `accumulator`  and  `number`.

The  `accumulator`  will contain the  `initialValue`  to be used for the array. The  `initialValue`  decides the return type of the data returned by the  `reduce`  method.

The  `number`  is the second parameter to the callback function that will contain the array element during each iteration of the loop.

In the above code, we have provided  `0`  as the  `initialValue`  for the  `accumulator`. So the first time the callback function executes, the  `accumulator + number`  will be  `0 + 1 = 1`  and we're returning back the value  `1`.

The next time the callback function runs,  `accumulator + number`  will be  `1 + 2 = 3`  (`1`  here is the previous value returned in the last iteration and  `2`  is the next element from the array).

Then, the next time the callback function runs,  `accumulator + number`  will be  
`3 + 3 = 6`(the first  `3`  here is the previous value returned in the last iteration and the next  `3`  is the next element from the array) and it will continue this way until all the elements in the  `numbers`  array are not iterated.

So the  `accumulator`  will retain the value of the last operation just like a static variable.

In the above code,  `initialValue`  of  `0`  is not required because all the elements of the array are integers.

So the below code will also work:

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
});

```

[代码演示][21]在此.

Here, the  `accumulator`  will contain the first element of the array and  `number`  will contain the next element of the array (  `1 + 2 = 3`  during the first iteration and then `3 + 3 = 6`  during the next iteration, and so on).

But it’s always good to specify the  `initialValue`  of  `accumulator`  as it makes it easy to understand the return type of the  `reduce`  method and get the correct type of data back.

Take a look at the below code:

```js
const numbers = [1, 2, 3, 4, 5];
const doublesSum = numbers.reduce(function (accumulator, number) {
  return accumulator + number * 2;
}, 10);

```

[代码演示][22]在此.

Here, we’re multiplying each element of the array by 2. We have provided an  `initialValue`  of 10 to the  `accumulator`  so 10 will be added to the final result of the sum like this:

```js
[1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2] = [2, 4, 6, 8, 10] = 30 + 10 = 40
```

Suppose, you have an array of objects with x and y coordinates and you want to get the sum of x coordinates. You can use the  `reduce`  method for that.

```js
const coordinates = [
  { x: 1, y: 2 }, 
  { x: 2, y: 3 }, 
  { x: 3, y: 4 }
];
const sum = coordinates.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, 0);

```

[代码演示][23]在此.

### 使用reduce方法的优势

-   Using  `reduce`  allows us to generate any type of simple or complex data based on the array
-   It remembers the previously returns data from the loop so helps us avoid creating a global variable to store the previous value

**浏览器支持：**

-   所有主流浏览器和版本9及以上的IE浏览器
-   版本12及以上的Microsoft Edge浏览器

### 感谢阅读！

Want to learn all ES6+ features in detail including  `let`  and  `const`, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more?

Check out my  [Mastering Modern JavaScript][24]  book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.

Also, check out my free  [Introduction to React Router][25]  course to learn React Router from scratch.

**Want to stay up to date with regular content regarding JavaScript, React, Node.js?  [Follow me on LinkedIn][26].**

  

[1]: https://codepen.io/myogeshchavan97/pen/bGBqzOw?editors=0012
[2]: https://codepen.io/myogeshchavan97/pen/abBJXMR?editors=0012
[3]: https://codepen.io/myogeshchavan97/pen/PobpxGb?editors=0012
[4]: https://codepen.io/myogeshchavan97/pen/OJbpqJR?editors=0012
[5]: https://codepen.io/myogeshchavan97/pen/ExNWOyr?editors=0012
[6]: https://codepen.io/myogeshchavan97/pen/gOLmyQQ?editors=0012
[7]: https://codepen.io/myogeshchavan97/pen/oNYZVoX?editors=0012
[8]: https://codepen.io/myogeshchavan97/pen/LYbWaxP?editors=0012
[9]: https://codepen.io/myogeshchavan97/pen/abBJMqe?editors=0012
[10]: https://codepen.io/myogeshchavan97/pen/rNWyRdR?editors=0012
[11]: https://codepen.io/myogeshchavan97/pen/ExNWMOY?editors=0012
[12]: https://codepen.io/myogeshchavan97/pen/VwmpVmL?editors=0011
[13]: https://codepen.io/myogeshchavan97/pen/BaQWbeY?editors=0012
[14]: https://codepen.io/myogeshchavan97/pen/JjbWebQ?editors=0012
[15]: https://codepen.io/myogeshchavan97/pen/oNYZOgY?editors=0012
[16]: https://codepen.io/myogeshchavan97/pen/yLVMQgE?editors=0011
[17]: https://codepen.io/myogeshchavan97/pen/qBqrwaq?editors=0011
[18]: https://codepen.io/myogeshchavan97/pen/rNWyQwo?editors=0011
[19]: https://codepen.io/myogeshchavan97/pen/ExNWOvz?editors=0011
[20]: https://codepen.io/myogeshchavan97/pen/ExNWzmo?editors=0012
[21]: https://codepen.io/myogeshchavan97/pen/ExNWObz?editors=0012
[22]: https://codepen.io/myogeshchavan97/pen/jOVBQYx?editors=0012
[23]: https://codepen.io/myogeshchavan97/pen/OJbpaOg?editors=0012
[24]: https://yogeshchavan1.podia.com/mastering-modern-javascript?coupon=LA1HR55
[25]: https://yogeshchavan1.podia.com/react-router-introduction
[26]: https://www.linkedin.com/in/yogesh-chavan97/
