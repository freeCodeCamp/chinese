> -  原文地址：[How to Filter an Array in JavaScript – JS Filtering for Arrays and Objects](https://www.freecodecamp.org/news/filter-arrays-in-javascript/)
> -  原文作者：[Joel Olawanle](https://www.freecodecamp.org/news/author/joel-olawanle/)
> -  译者：Suxiong
> -  校对者：

![How to Filter an Array in JavaScript – JS Filtering for Arrays and Objects](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/cover-template--2-.png)

当创建一个动态交互项目时，你需要添加一些交互的特性。比如说，当用户点击按钮时会过滤一个长数组。

你也可能需要操作一个大数组，要求其只返回符合特定条件的元素。

在这篇文章中，你将会学习在 JavaScript 中过滤数组的两种主要方法。你也会学到如何过滤对象中的数组，并且返回一个过滤后的新数组。

## 如何通过`for 循环`去过滤数组

在 2015 年 ES6 诞生之前，许多开发者通过 for 循环方法去解决几乎所有的数组操作问题。但是代码变得十分冗长且难以理解，因此出现了很多单独的 JavaScript 方法，例如 `filter()` 方法（你将很快学习到）。

但是首先，为了完整性，我们看一下使用 for 循环如何做。

假设你有一个含对象的数组，对象中包含用户的信息，例如名字，年龄和职业。你能决定过滤那些符合特定条件的用户。

```js
let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]
```

现在，你可以过滤这个对象数组，并返回 `age` 大于 `40`，`occupation` 为 `programmer`的新数组。

```js
let filteredUsers = [];
for (let i= 0; i<users.length; i++) {
    if (users[i].age > 40 && users[i].occupation === 'programmer' ) {
        filteredUsers = [...filteredUsers, users[i]];
    }
}
console.log(filteredUsers);
```

将会返回包含三个符合条件用户的新数组。

![s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image](https://paper-attachments.dropboxusercontent.com/s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image.png)

现在，结果正确。但有一个更好的方法去过滤数组就是使用 ES6 filter()方法。

## 如何通过 `filter`方法过滤数组

`filter()` 方法是一个 ES6 方法，其提供了更干净的语法去过滤数组。它返回了一个新的数组，而且也并没有更改原数组。

```js
// Syntax
myArray.filter(callbackFn)
```

在 callback 函数中，你可以访问每一个元素，元素的 `index` 以及原数组本身：

```js
myArray.filter((element, index, array) => { /* ... */ })
```

现在让我们展示相同的例子去通过 `age` 和 `occupation` 去过滤用户数组。

```js
let filteredUsers = users.filter((user) => {
    return user.age > 40 && user.occupation === 'programmer';
});

console.log(filteredUsers);
```

这将会返回一个精确的输出，但你注意到你的代码十分到干净。同样重要的是，你能够将代码重写为一行，并且除掉 `return` 状态。

```js
let filteredUsers = users.filter(user => user.age > 40 && user.occupation === 'programmer');
console.log(filteredUsers);
```

两个代码块都可以输出过滤后的用户：

![s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image](https://paper-attachments.dropboxusercontent.com/s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image.png)

这个 filter 方法能够不需要创建过多的变量而执行更多的操作，因为它能够链式调用其他函数方法。

例如，你能将过滤后的数组分类，并且返回只包含他们名字的数组：

```js
let filteredUserNames = users.filter(user => user.age > 40 && user.occupation === 'programmer')
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

console.log(filteredUserNames); // ['Anna', 'Lenny', 'Albert']
```

使用 JavaScript filter()方法在 JavaScript 中去过滤数组还能做很多事情。你能够了解更多关于 JavaScript filter 方法在 [JavaScript Array.filter() Tutorial](https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/)，并且你也能了解 [在 JavaScript 中 find() 和 filter() 方法的不同](https://www.freecodecamp.org/news/find-vs-filter-javascript/)。

## 在 JavaScript 中如何过滤一个对象

JavaScript 中的对象不像数组和字符串一样可遍历（你不能循环访问它们）。这意味着你不能使用 `filter()`，for 循环方法，或者任何遍历方法在一个对象中。那个该如何在 JavaScript 中过滤一个对象呢？

你可以通过使用对象的静态方法，如 `object .keys()` ， `Object.values()` 或 `Object.entries()`，将对象转换为数组来实现这一点。然后可以使用 filter()方法对数组进行筛选，并返回一个由筛选过的元素组成的新数组。

假设有一个对象保存用户的详细信息，如姓名、年龄和职业。这些对象静态方法可以以数组的形式返回键、值或每个键-值对。

```js
const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let keysArray = Object.keys(userDetails);

console.log(keysArray);
```

这将返回一个对象键的数组：

```js
['firstName', 'lastName', 'userName', 'email', 'comapny', 'address', 'age', 'hobby']
```

你现在可以使用 filter()方法对数组进行过滤，并返回一个由过滤后的元素组成的新数组：

```js
let filteredKeys = keysArray.filter(key => key.length > 5);

console.log(filteredKeys);
```

这将返回一个长度大于 5 的键数组:

```js
['firstName', 'lastName', 'userName', 'comapny', 'address', 'hobby']
```

But definitely, you will want to perform a more useful filter operation. For example, you can filter our object key-value pair that includes a name from a large object. Then you can first get the keys, filter them, and use the `reduce()` method to `reduce` the filtered keys to an object with the filtered keys and their values:
但是，您肯定希望执行更有用的筛选操作。例如，您可以从一个大对象中筛选包含名称的对象键-值对。然后你可以先获取键，过滤它们，并使用 `reduce()` 方法将过滤后的键`减少`为具有过滤后的键及其值的对象:

```js
const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

const userNames = Object.keys(userDetails)
    .filter((key) => key.includes("Name"))
    .reduce((object, key) => {
        return Object.assign(object, {
          [key]: userDetails[key]
        });
  }, {});

console.log(userNames);
```

这将返回一个包含筛选键及其值的对象:

```js
{
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels"
}
```

## 总结

在本文中，您已经学习了如何使用`for`循环和`filter()`方法在 JavaScript 中筛选数组。`filter()`为 JavaScript 中的数组过滤提供了更好的语法。

您还学习了如何通过将对象转换为数组并使用 filter()方法在 JavaScript 中筛选对象。

感谢阅读，祝你编程愉快!

你可以通过[访问我的网站](https://joelolawanle.com/contents)访问我的 188 篇文章。您还可以通过搜索去浏览我特定的文章。