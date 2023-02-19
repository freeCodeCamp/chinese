> -  原文地址：[How to Filter an Array in JavaScript – JS Filtering for Arrays and Objects](https://www.freecodecamp.org/news/filter-arrays-in-javascript/)
> -  原文作者：[Joel Olawanle](https://www.freecodecamp.org/news/author/joel-olawanle/)
> -  译者：
> -  校对者：

![How to Filter an Array in JavaScript – JS Filtering for Arrays and Objects](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/cover-template--2-.png)

When building a dynamic and interactive program, you may need to add some interactive features. For example, where a user clicks a button to filter through a long list of items.

You may also need to manipulate a large array of data to return only items that match your specified condition(s).

In this article, you will learn how to filter an array in JavaScript using two major approaches. You will also learn how to filter through an array of objects and return a new array of filtered elements.

## How to Filter an Array with a `for loop`

Before the introduction of ES6 in 2015, many developers relied on the for loop method to handle almost all array manipulation. But the code can become quite long and not easy to understand, which led to the release of many individual JavaScript methods like the `filter()` method (which you will learn about soon).

But first, for completeness, we'll look at how to do it using for loops.

Suppose you have an array of objects that holds users' detail like name, age and occupation. You can decide to filter for users whose age matches a specific condition.

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

You can now filter the array of objects using the age to return a new array whose `age` is greater than `40` and whose `occupation` is equal to `programmer`:

```js
let filteredUsers = [];
for (let i= 0; i<users.length; i++) {
    if (users[i].age > 40 && users[i].occupation === 'programmer' ) {
        filteredUsers = [...filteredUsers, users[i]];
    }
}
console.log(filteredUsers);
```

This will return an array of three users who meet the specified condition.

![s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image](https://paper-attachments.dropboxusercontent.com/s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image.png)

Now, this works alright. But a better way to filter through an array is to use the ES6 filter() method.

## How to Filter an Array with the `filter()` Method

The `filter()` method is an ES6 method that provides a cleaner syntax to filter through an array. It returns new elements in a new array without altering the original array.

```js
// Syntax
myArray.filter(callbackFn)
```

In the callback function, you have access to each element, the `index`, and the original array itself:

```js
myArray.filter((element, index, array) => { /* ... */ })
```

Let’s now perform the same example by filtering the user by their `age` and `occupation`:

```js
let filteredUsers = users.filter((user) => {
    return user.age > 40 && user.occupation === 'programmer';
});

console.log(filteredUsers);
```

This will return the exact output, but you'll notice that your code is quite clean. It is also important to know that you can re-write the code above with one line, and take away the `return` statement:

```js
let filteredUsers = users.filter(user => user.age > 40 && user.occupation === 'programmer');
console.log(filteredUsers);
```

Both code blocks will output the filtered users:

![s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image](https://paper-attachments.dropboxusercontent.com/s_A2A56A7C05733A13745945CF4C6950EBC758CD93042A33CBFFD44710AB9E7883_1676527392206_image.png)

The filter method makes it easy to perform more operations directly without creating as many variables because it is great at chaining with other functional methods.

For example, you can sort the filtered array and return an array of only their names:

```js
let filteredUserNames = users.filter(user => user.age > 40 && user.occupation === 'programmer')
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

console.log(filteredUserNames); // ['Anna', 'Lenny', 'Albert']
```

There is more to filtering arrays in JavaScript with the JavaScript filter() method. You can read more about the JavaScript filter method in this [JavaScript Array.filter() Tutorial](https://www.freecodecamp.org/news/javascript-array-filter-tutorial-how-to-iterate-through-elements-in-an-array/), and you can also learn about the [difference between the find() and filter() JavaScript methods here](https://www.freecodecamp.org/news/find-vs-filter-javascript/).

## How to Filter an Object in JavaScript

JavaScript's objects are not iterable like arrays or strings (you cannot loop through them). This means you can't use `filter()`, the for loop method, or any iteration method directly on an object. Then how do you filter an object in JavaScript?

You can do this by converting the object to an array using any of the object static methods such as `Object.keys()`, `Object.values()` or `Object.entries()`. You can then use the filter() method to filter through the array and return a new array of filtered elements.

Let's say you have an object that holds users' details like name, age and occupation. These object static methods can return the keys, values or each key-value pair as an array.

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

This will return an array of the object keys:

```js
['firstName', 'lastName', 'userName', 'email', 'comapny', 'address', 'age', 'hobby']
```

You can now use the filter() method to filter through the array and return a new array of filtered elements:

```js
let filteredKeys = keysArray.filter(key => key.length > 5);

console.log(filteredKeys);
```

This will return an array of keys whose length is greater than 5:

```js
['firstName', 'lastName', 'userName', 'comapny', 'address', 'hobby']
```

But definitely, you will want to perform a more useful filter operation. For example, you can filter our object key-value pair that includes a name from a large object. Then you can first get the keys, filter them, and use the `reduce()` method to `reduce` the filtered keys to an object with the filtered keys and their values:

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

This will return an object with the filtered keys and their values:

```js
{
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels"
}
```

## Wrapping up

In this article, you have learned how to filter an array in JavaScript using the `for` loop and `filter()` method. `filter()` provides a better syntax for filtering arrays in JavaScript.

You also learned how to filter an object in JavaScript by converting it to an array and using the filter() method.

Thanks for reading, and have fun coding!

You can access over 188 of my articles by [visiting my website](https://joelolawanle.com/contents). You can also use the search field to see if I've written a specific article.