> * 原文地址：[A quick intro to Higher-Order Functions in JavaScript](https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/)
> * 原文作者：[Yazeed Bzadough](https://www.freecodecamp.org/news/author/yazeedb/)
> * 译者：[jingruzhang](https://github.com/jingruzhang)
> * 校对者：

# JavaScript 高阶函数入门浅析 

### 高阶函数

**高阶函数**可以接收函数作为参数，并/或返回一个新的函数。

**高阶函数**之所以*高阶*，是因为高阶函数的参数和返回值对象可以是函数，这超越了普通函数处理的数据类型，例如文字、数字、布尔值等。

JavaScript 中，函数的应用场景很丰富：

- 作为变量存储
- 在数组中使用
- 作为对象属性进行赋值
- 作为参数传递
- 作为其他函数的返回值

理解高阶函数的关键在于，*函数即数据*。

### 函数运作的基本：数据作为参数传入

#### 数据：文本

```
sayHi = (name) => `Hi, ${name}!`;
result = sayHi('User');

console.log(result); // 'Hi, User!'
```

#### 数据：数字

```
double = (x) => x * 2;
result = double(4);

console.log(result); // 8
```

#### 数据：布尔值

```
getClearance = (allowed) => allowed ?  'Access granted' :  'Access denied';

result1 = getClearance(true);
result2 = getClearance(false);

console.log(result1); // 'Access granted'
console.log(result2); // 'Access denied'
```

#### 数据：对象

```
getFirstName = (obj) => obj.firstName;
result = getFirstName({  
	firstName: 'Yazeed'
});

console.log(result); // 'Yazeed'
```

#### 数据：数组

```
len = (array) => array.length;
result = len([1, 2, 3]);

console.log(result); // 3
```

在所有的主流语言中，以上这五种数据类型被称为 [头等对象](https://en.wikipedia.org/wiki/First-class_citizen)。 

为什么是“头等”呢？因为这五种数据类型既可以作为参数传递，又可以存储在变量或者数组中，还可以作为变量用于计算，是数据的基本形式。

### 函数也是数据

![img](https://cdn-media-1.freecodecamp.org/images/4nuoQAsqNs7Ey8vt-bbSxPFGmJljCpf8JNEP)

#### 将函数作为参数进行传递

```
isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result); // [2, 4]
```

观察 `filter`  函数是如何使用  `isEven` 函数来判断要保留哪些对象的，  `isEven` 函数是作为参数被传入 `filter`  函数中的。

 `filter`  函数每次在做判断的时候都会调用  `isEven` 函数，用  `isEven` 函数返回的布尔值来决定当前数值的去留。

#### 函数也可以是函数的返回值

```
add = (x) => (y) => x + y;
```

`add` 函数需要两个参数，但不需要它们俩同时传入，第一次传参传入 `x` 就会返还一个新函数，这个函数需要传入 `y` 参数。 

能够这样操作的基础在于 JavaScript 语言允许函数本身作为返回值存在，就像函数可以返回文本、数字、布尔值等，JS 函数还可以返回另一个函数。 

你也可以一次性提供 `x` 和 `y` 两个参数，用双重调用的方式：

```
result = add(10)(20);

console.log(result); // 30
```

或先 `x` 后 `y`:

```
add10 = add(10);
result = add10(20);

console.log(result); // 30

```

解析一下， `add10` 函数是第一次调用 `add` 函数的返回值，可以尝试用 `console.log` 把结果打出来观察一下。

![img](https://cdn-media-1.freecodecamp.org/images/R6LO3CmJmNgKpKYZFy7Wf57Qvfo9hUL4TcBE)

`add10` 函数会接收 `y` 参数，然后返回 `x + y` 值。一旦 `y` 值到位，函数会立马进行运算并返回结果。

![img](https://cdn-media-1.freecodecamp.org/images/S-ejanKAgKDdXAJOVOeVgYK5lbHK6eXeQvuR)

### 可重复利用性

高阶函数的魅力在于它的可重复利用性，如果不是高阶函数， `map`、`filter`、 `reduce` 等强大的数组函数就不可能存在。

假设我们有一组用户，如下所示，然后我们要对该数组进行操作。

```
users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  }
];

```

#### Map

没有高阶函数的话，我们必须回到 `for` 循环的怀抱才能实现 `map` 函数的操作。

```
getName = (user) => user.name;
usernames = [];

for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);

  usernames.push(name);
}

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]

```

用 `map` 函数就简单多啦！

```
usernames = users.map(getName);

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]

```

#### Filter

在没有高阶函数的情况下，必须要用 `for` 循环来实现 `filter` 函数的功能。

```
startsWithB = (string) => string.toLowerCase().startsWith('b');

namesStartingWithB = [];

for (let i = 0; i < users.length; i++) {
  if (startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i]);
  }
}

console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

```

用 `filter` 函数就简单多啦！

```
namesStartingWithB = users.filter((user) => startsWithB(user.name));

console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

```

#### Reduce

`reduce` 函数也是的……没有高阶函数的话，很多高端操作都是无法实现的！😁

```
total = 0;

for (let i = 0; i < users.length; i++) {
  total += users[i].age;
}

console.log(total);
// 75

```

那这样是不是简单多啦？

```
totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(totalAge);
// 75

```

### 总结

- 文本、数字、布尔值、数组、对象可以作为对象、数组、属性存储起来。
- JavaScript 语言中，函数也是像数据一样同等对待的。
- 因此函数可以作为另外一个函数的参数或者返回值使用，这样的做法叫**高阶函数**。
- `map`、`filter`、 `reduce` 等函数就是高阶函数的最佳代表，它们让数组的处理（改变，搜索，相加等）变得简单不少！

如果你想和我继续交流，可以在[我的推特](https://twitter.com/yazeedBee)找到我。下次见！

