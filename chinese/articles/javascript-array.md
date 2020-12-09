> * 原文地址：[JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods JavaScript 数组教程——如何创建，更新和遍历 JavaScript 对象](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
> * 原文作者：Ondrej Polesny
> * 译者：
> * 校对者：

![JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg)

On average I work with JSON data 18 times a week. And I still need to google for specific ways to manipulate them almost every time. What if there was an ultimate guide that could always give you the answer?

In this article, I'll show you the basics of working with object arrays in JavaScript.

If you ever worked with a JSON structure, you've worked with JavaScript objects. Quite literally. JSON stands for JavaScript Object Notation.

Creating an object is as simple as this:

```js
{
  "color": "purple",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
}

```

This object represents a car. There can be many types and colors of cars, each object then represents a specific car.

![](https://www.freecodecamp.org/news/content/images/2020/05/purple.png)

Now, most of the time you get data like this from an external service. But sometimes you need to create objects and their arrays manually. Like I did when I was creating this e-shop:

![](https://www.freecodecamp.org/news/content/images/2020/05/categories.jpg)

Considering each category list item looks like this in HTML:

![](https://www.freecodecamp.org/news/content/images/2020/05/code.jpg)

I didn't want to have this code repeated 12 times, which would make it unmaintainable.

## Creating an array of objects

But let's get back to cars. Let's take a look at this set of cars:

![](https://www.freecodecamp.org/news/content/images/2020/05/cars.jpg)

We can represent it as an array this way:

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

Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.

### Add a new object at the start - Array.unshift

![](https://www.freecodecamp.org/news/content/images/2020/05/beginning.jpg)

To add an object at the first position, use  `Array.unshift`.

```js
let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(car);

```

### Add a new object at the end - Array.push

![](https://www.freecodecamp.org/news/content/images/2020/05/ending.jpg)

To add an object at the last position, use  `Array.push`.

```js
let car = {
 "color": "red",
 "type": "cabrio",
 "registration": new Date('2016-05-02'),
 "capacity": 2
}
cars.push(car);

```

### Add a new object in the middle - Array.splice

![](https://www.freecodecamp.org/news/content/images/2020/05/middle.jpg)

To add an object in the middle, use  `Array.splice`. This function is very handy as it can also remove items. Watch out for its parameters:

```js
Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

```

So if we want to add the red Volkswagen Cabrio on the fifth position, we'd use:

```js
let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.splice(4, 0, car);

```

## Looping through an array of objects

Let me ask you a question here: Why do you want to loop through an array of objects? The reason I'm asking is that the looping is almost never the primary cause of what we want to achieve.

JavaScript provides many functions that can solve your problem without actually implementing the logic in a general cycle. Let's take a look.

### Find an object in an array by its values - Array.find

Let's say we want to find a car that is red. We can use the function  `Array.find`.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-colorred.jpg)

```js
let car = cars.find(car => car.color === "red");

```

This function returns the first matching element:

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

It's also possible to search for multiple values:

`let car = cars.find(car => car.color === "red" && car.type === "cabrio");`

In that case we'll get the last car in the list.

### Get multiple items from an array that match a condition - Array.filter

The  `Array.find`  function returns only one object. If we want to get all red cars, we need to use  `Array.filter`.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-colorred2.jpg)

```js
let redCars = cars.filter(car => car.color === "red");
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

### Transform objects of an array - Array.map

This is something we need very often. Transform an array of objects into an array of different objects. That's a job for  `Array.map`. Let's say we want to classify our cars into three groups based on their size.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-sizes.jpg)

```js
let sizes = cars.map(car => {
  if (car.capacity <= 3){
    return "small";
  }
  if (car.capacity <= 5){
    return "medium";
  }
  return "large";
});
console.log(sizes);
// output:
// ['large','medium','medium', ..., 'small']

```

It's also possible to create a new object if we need more values:

```js
let carsProperties = cars.map(car => {
 let properties = {
   "capacity": car.capacity,
   "size": "large"
 };
 if (car.capacity <= 5){
   properties['size'] = "medium";
 }
 if (car.capacity <= 3){
   properties['size'] = "small";
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

### Add a property to every object of an array - Array.forEach

But what if we want the car object too? In that case we can enhance the object for a new property  `size`. This is a good use-case for the  `Array.forEach`  function.

```js
cars.forEach(car => {
 car['size'] = "large";
 if (car.capacity <= 5){
   car['size'] = "medium";
 }
 if (car.capacity <= 3){
   car['size'] = "small";
 }
});

```

### Sort an array by a property - Array.sort

When we're done with transforming the objects, we usually need to sort them one way or another.

Typically, the sorting is based on a value of a property every object has. We can use the  `Array.sort`  function, but we need to provide a function that defines the sorting mechanism.

Let's say we want to sort the cars based on their capacity in descending order.

![](https://www.freecodecamp.org/news/content/images/2020/05/cars-sort.jpg)

```js
let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
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

The  `Array.sort`  compares two objects and puts the first object in the second place if the result of the sorting function is positive. So you can look at the sorting function as if it was a question: Should the first object be placed in second place?

![](https://www.freecodecamp.org/news/content/images/2020/05/sort.png)

Make sure to always add the case for zero when the compared value of both objects is the same to avoid unnecessary swaps.

### Checking if objects in array fulfill a condition - Array.every, Array.includes

`Array.every`  and  `Array.some`  come handy when we just need to check each object for a specific condition.

Do we have a red cabrio in the list of cars? Are all cars capable of transporting at least 4 people? Or more web-centric: Is there a specific product in the shopping cart?

```js
cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true


```

You may remember the function  `Array.includes`  which is similar to  `Array.some`, but works only for primitive types.

## Summary

In this article, we went through the basic functions that help you create, manipulate, transform, and loop through arrays of objects. They should cover most cases you will stumble upon.

If you have a use-case that requires more advanced functionality, take a look at  [this detailed guide to arrays][1]  or visit the  [W3 schools reference][2].

Or  [get in touch with me][3]  and I will prepare another article :-)

[1]: https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/
[2]: https://www.w3schools.com/Jsref/jsref_obj_array.asp
[3]: https://twitter.com/ondrabus
