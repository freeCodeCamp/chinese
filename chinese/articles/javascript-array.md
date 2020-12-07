> -   原文地址：[JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods JavaScript 数组教程——如何创建，更新和遍历 JavaScript 对象](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
> -   原文作者：Ondrej Polesny
> -   译者：@nsuedu
> -   校对者：

![JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg)

我每周平均处理 JSON 数据 18 次。 但几乎每次我仍需要 Google 搜索特定的方法。 如果有一本终极指南可以始终为我提供答案就好了 😏

在本文中，我将向你展示在 JavaScript 中使用对象数组的基础知识。

如果你曾经使用过 JSON 结构，那么你就已经使用过 JavaScript 对象。 毫不夸张的说。 JSON 代表 **JavaScript Object Notation**。

创建对象就是这么简单:

```js
{
  "color": "purple",
  "type": "minivan",
  // 注册日期
  "registration": new Date('2012-02-03'),
  //载人数
  "capacity": 7
}

```

该对象代表一辆汽车。 汽车可以有多种类型和颜色，并且每个对象代表一辆特定的汽车

![](https://www.freecodecamp.org/news/content/images/2020/05/purple.png)

大多数时候你都是从外部服务获取此类数据。 但是有时你需要手动创建对象及其数组。 就像我创建这个电子商店时一样:

![](https://www.freecodecamp.org/news/content/images/2020/05/categories.jpg)

每个类别列表项在 HTML 中看起来像这样:

![](https://www.freecodecamp.org/news/content/images/2020/05/code.jpg)

但我不想将此代码重复 12 次，因为这很难维护。

## 创建对象数组

让我们回到汽车的话题上来。 我们来看看这些车:

![](https://www.freecodecamp.org/news/content/images/2020/05/cars.jpg)

我们用数组表示它们:

```js
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
    ...
  },
  ...
]

```

对象数组并非始终保持不变,我们总是需要操纵它们。因此，让我们看一下如何将新对象添加到已经存在的数组中.

### 在头部添加一个新对象 - Array.unshift

![](https://www.freecodecamp.org/news/content/images/2020/05/beginning.jpg)

在头部添加一个对象, 使用 `Array.unshift`.

```js
let car = {
    color: 'red',
    type: 'cabrio',
    registration: new Date('2016-05-02'),
    capacity: 2,
};
cars.unshift(car);
```

### 在尾部添加一个新对象 - Array.push

![](https://www.freecodecamp.org/news/content/images/2020/05/ending.jpg)

添加一个对象到尾部的位置, 使用 `Array.push`.

```js
let car = {
    color: 'red',
    type: 'cabrio',
    registration: new Date('2016-05-02'),
    capacity: 2,
};
cars.push(car);
```

### 添加一个新对象到中间位置 - Array.splice

![](https://www.freecodecamp.org/news/content/images/2020/05/middle.jpg)

添加一个对象到中间位置, 使用 `Array.splice`. 此方法非常方便，因为它也可以删除数组的某一个元素。 注意其参数:

```js
Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

```

因此，如果我们要在第五个位置添加红色敞篷车，可以像下面一样使用：

```js
let car = {
    color: 'red',
    type: 'cabrio',
    registration: new Date('2016-05-02'),
    capacity: 2,
};
cars.splice(4, 0, car);
```

## 对象数组的遍历

JavaScript 提供了许多函数/方法，可以解决你的某些问题，从而无需自己手际实现其内部逻辑。 让我们来看看吧.

### 通过其值在数组中查找特定的对象 - Array.find

如果想在车辆数组中找到一辆红色的. 我们可以使用 `Array.find`.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-colorred.jpg)

```js
let car = cars.find((car) => car.color === 'red');
```

这个函数返回匹配到的第一个元素:

```js
console.log(car);
// output:
// {
//   color: 'red',
//   type: 'station wagon',
//   registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//   capacity: 5
// }
```

也可以搜索多个值:

`let car = cars.find(car => car.color === "red" && car.type === "cabrio");`

在这种情况下，我们将获得车辆列表中的最后一辆车.

### 从数组中获取符合条件的多个元素 - Array.filter

`Array.find` 方法只返回一个对象. 如果你想获取所有红色的车, 你需要使用 `Array.filter`.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-colorred2.jpg)

```js
let redCars = cars.filter((car) => car.color === 'red');
console.log(redCars);
// output:
// [
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   {
//     color: 'red',
//     type: 'cabrio',
//     registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 2
//   }
// ]
```

### 转换数组的对象 - Array.map

在数组的所有方法中,`Array.map`方法可以说是我们使用最频繁的了:将对象数组转换为不同对象的数组。 这就是 `Array.map` 的工作。 假设我们要根据汽车的大小将其分为三类

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-sizes.jpg)

```js
let sizes = cars.map((car) => {
    if (car.capacity <= 3) {
        return 'small';
    }
    if (car.capacity <= 5) {
        return 'medium';
    }
    return 'large';
});
console.log(sizes);
// output:
// ['large','medium','medium', ..., 'small']
```

如果我们需要更多的值，也可以创建一个新的对象:

```js
let carsProperties = cars.map((car) => {
    let properties = {
        capacity: car.capacity,
        size: 'large',
    };
    if (car.capacity <= 5) {
        properties['size'] = 'medium';
    }
    if (car.capacity <= 3) {
        properties['size'] = 'small';
    }
    return properties;
});
console.log(carsProperties);
// output:
// [
//   { capacity: 7, size: 'large' },
//   { capacity: 5, size: 'medium' },
//   { capacity: 5, size: 'medium' },
//   { capacity: 2, size: 'small' },
//   ...
// ]
```

### 向数组的每个对象添加属性 - Array.forEach

`Array.map`会生成新的数组。 那如果我们只想在原来的汽车对象做修改怎么办？ 这对`Array.forEach`函数是一个很好的使用场景

```js
cars.forEach((car) => {
    car['size'] = 'large';
    if (car.capacity <= 5) {
        car['size'] = 'medium';
    }
    if (car.capacity <= 3) {
        car['size'] = 'small';
    }
});
```

### 按属性对数组排序 - Array.sort

完成对象转换后，通常需要以一种或另一种方式对它们进行排序。

通常，排序基于每个对象都具有的属性的值。 我们可以使用`Array.sort`函数，但是我们需要提供一个定义排序机制的函数(compareFunction)。

译者注:

> 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
>
> -   如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
> -   如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不>保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
> -   如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
> -   compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

假设我们要根据汽车的降序对汽车进行排序。

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-sort.jpg)

```js
let sortedCars = cars.sort((c1, c2) =>
    c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);
console.log(sortedCars);
// output:
// [
//   {
//     color: 'purple',
//     type: 'minivan',
//     registration: 'Wed Feb 01 2017 00:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 7
//   },
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   ...
// ]
```

如果排序函数的结果为正，则`Array.sort`比较两个对象，并将第一个对象放在第二位。 因此，你可以将排序函数视为一个问题：是否将第一个对象放置在第二个位置

![](https://www.freecodecamp.org/news/content/images/2020/05/sort.png)

确保两个对象的比较值相同时始终将大小比较写为零，以避免不必要的交换.

### 检查数组中的对象是否满足条件 - Array.every, Array.includes

当我们只需要检查每个对象的特定条件时，即可使用`Array.every`和`Array.some`。

汽车清单上有红色敞篷车吗？ 所有的汽车都能载至少 4 人吗？...

```js
cars.some((car) => car.color === 'red' && car.type === 'cabrio');
// output: true
```

您可能还记得函数`Array.includes`与`Array.some`类似，但只有元素是原始类型时候二者才类似

## 总结

在本文中，我们介绍了一些基本函数/方法，这些方法可帮助你创建，操作，转换和遍历对象数组。 它们应该涵盖了你遇到的大多数数据处理场景

如果你存在更复杂的数组使用场景，请查看[数组详细指南] [1]或访问[W3 schools reference][2]。

或者[与我联系] [3]，我可以准备另外一篇文章：-)

[1]: https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/
[2]: https://www.w3schools.com/Jsref/jsref_obj_array.asp
[3]: https://twitter.com/ondrabus
