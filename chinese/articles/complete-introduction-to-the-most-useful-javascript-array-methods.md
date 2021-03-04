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


[代码演示][1]在此.

在 `forEach` 循环回调函数中，数组中的每个元素都会自动作为第一个参数传参到函数中。
Here, inside the  `forEach`  loop callback function, each element of the array is automatically passed as the first parameter of the function.

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

[代码演示][2]在此.

需要注意的是，`forEach` 方法不返回任何值。

例如：

```js
const months = ['January', 'February', 'March', 'April'];
const returnedValue = months.forEach(function (month) {
  return month;
});

```

[代码演示][3]在此.

> _注意：_ _`_forEach_` _只用于循环数组和执行一些处理或日志记录。它不返回任何值，即使你想要从回调函数中显式地返回值也不行（这意味着在上述例子中返回的值是_`undefined`_）。_

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

[代码演示][4]在此.

有时候根据需要，`index` 和 `array` 参数可能会很有用。

### 在 for 循环中使用 forEach 的优势

-   使用 `forEach` Using a  `forEach`  loop makes your code shorter and easier to understand
-   When using a  `forEach`  loop, we don't need to keep track of how many elements are available in the array. So it avoids the creation of an extra counter variable.
-   Using a  `forEach`  loop makes code easy to debug because there are no extra variables for looping through the array
-   The  `forEach`  loop automatically stops when all the elements of the array are finished iterating.

### Browser Support

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

## The Array.map Method

The Array map method is the most useful and widely used array method among all other methods.

The  `Array.map`  method has the following syntax:

```js
Array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

The  `map`  method executes a provided function once for every element in the array and it  **returns a new transformed array.**

Take a look at the below code:

```js
const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

```

Here's a  [Code Pen Demo][5].

In the above code, inside the callback function, we’re converting each element to uppercase and returning it.

The equivalent for loop code for the above example looks like this:

```js
const months = ['January', 'February', 'March', 'April'];
const converted = [];
for(let i = 0; i < months.length; i++) {
 converted.push(months[i].toUpperCase());
};

```

Here's a  [Code Pen Demo][6].

Using  `map`  helps to avoid creating a separate  `converted`  array beforehand for storing the converted elements. So it saves memory space and also the code looks much cleaner using array  `map`, like this:

```js
const months = ['January', 'February', 'March', 'April'];

```

Here's a  [Code Pen Demo][7].

Note that the  `map`  method returns a new array that is of the exact same length as the original array.

The difference between the  `forEach`  and  `map`  methods is that  `forEach`  is only used for looping and does not return anything back. On the other hand, the  `map`  method returns a new array that is of the exact same length as the original array.

Also, note that  `map`  does not change the original array but returns a new array.

Take a look at the below code:

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

Here's a  [Code Pen Demo][8].

Here, by using the array of objects and  `map`  methods, we're easily generating a single array with first and last name concatenated.

In the above code, we're using the  `+`  operator to concatenate two values. But it's much more common to use ES6 template literal syntax as shown below:

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

Here's a  [Code Pen Demo][9].

The array  `map`  method is also useful, if you want to extract only specific data from the array like this:

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

Here's a  [Code Pen Demo][10].

In the above code, we're extracting only the last names of each user and storing them in an array.

We can even use  `map`  to generate an array with dynamic content as shown below:

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

Here's a  [Code Pen Demo][11].

Note that in the above code, we're not changing the original  `users`  array. We're creating a new array with dynamic content because  `map`  always returns a new array.

### Advantages of using the map method

-   It helps quickly generate a new array without changing the original array
-   It helps generate an array with dynamic content based on each element
-   It allows us to quickly extract any element of the array
-   It generates an array with the exact same length as the original array

**Browser Support:**

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

## The Array.find Method

The  `Array.find`  method has the following syntax:

```js
Array.find(callback(element[, index[, array]])[, thisArg])
```

> _The_ `_find_` _method returns the_ `_value_` _of the_  `_first element_` _in the array that satisfies the provided test condition._

The  `find`  method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

Suppose, we have a list of employees like this:

```js
const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];
```

and we want to get the record for the employee whose name is  `John`. In this case, we can use the  `find`  method as shown below:

```js
const employee = employees.find(function (employee) {
  return employee.name.indexOf('John') > -1;
});

```

Here's a  [Code Pen Demo][12].

Even though there is  `"John Carte"`  in the list, the  `find`  method will stop when it finds the first match. So it will not return the object with the name  `"John Carte".`

The equivalent for loop code for the above example looks like this:

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

Here's a  [Code Pen Demo][13].

As you can see, using normal for loop makes the code much larger and harder to understand. But using the  `find`  method, we can write the same code in an easy to understand way.

### Advantages of using the find method

-   It allows us to quickly find any element without writing a lot of code
-   It stops looping as soon as it finds a match so there is no need for an extra break statement

**Browser Support:**

-   All modern browsers except Internet Explorer (IE)
-   Microsoft Edge version 12 and above

## The Array.findIndex Method

The  `Array.findIndex`  method has the following syntax:

```js
Array.findIndex(callback(element[, index[, array]])[, thisArg])
```

The  `findIndex`  method returns the  **index**  of the first element in the array  **that satisfies the provided test condition**. Otherwise, it returns  `-1`, indicating that no element passed the test.

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

Here's a  [Code Pen Demo][14].

Here we get the output as  **1**  which is the index of the first object with the name  `John`. Note that the index starts with zero.

The equivalent for loop code for the above example looks like this:

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

Here's a  [Code Pen Demo][15].

### Advantages of using the findIndex method

-   It allows us to quickly find the index of an element without writing a lot of code
-   It stops looping as soon as it finds a match so there is no need for an extra break statement
-   We can find the index using the array  `find`  method also, but using  `findIndex`  makes it easy and avoids creating extra variables to store the index

**Browser Support:**

-   All modern browsers except Internet Explorer (IE)
-   Microsoft Edge version 12 and above

## The Array.filter Method

The  `Array.filter`  method has the following syntax:

```js
Array.filter(callback(element[, index[, array]])[, thisArg])
```

The  `filter`  method returns  `a new array`  with all the elements that satisfy the provided test condition.

The  `filter`  method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.

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

Here's a  [Code Pen Demo][16].

As can be seen in the above code, using  `filter`  helps to find all the elements from the array that match the specified test condition.

So using  `filter`  does not stop when it finds a particular match but keeps checking for other elements in the array that match the condition. Then it returns all the matching elements from the array.

> The main difference between  `find`  and  `filter`  is that  `find`  only returns the first matching element of the array, but using  `filter`  returns all the matching elements from the array.

Note that the  `filter`  method always returns an array. If no element passes the test condition, an empty array will be returned.

The equivalent for loop code for the above example looks like this:

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

Here's a  [Code Pen Demo][17].

### Advantages of using the filter method

-   It allows us to quickly find all the matching elements from the array
-   It always returns an array even if there is no match, so it avoids writing extra  `if`  conditions
-   It avoids the need of creating an extra variable to store the filtered elements

**Browser Support:**

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

## The Array.every Method

The  `Array.every`  method has the following syntax:

```js
Array.every(callback(element[, index[, array]])[, thisArg])
```

The  `every`  method tests whether all elements in the array pass the provided test conditions and returns a boolean  `true`  or  `false`  value.

Suppose we have an array of numbers and we want to check if every element of the array is a positive number. We can use the  `every`  method to achieve it.

```js
let numbers = [10, -30, 20, 50];
let allPositive = numbers.every(function (number) {
  return number > 0;
});
console.log(allPositive); // false 
numbers = [10, 30, 20, 50];

```

Imagine you have a registration form, and you want to check if all of the required fields are entered or not before submitting the form. You can use the  `every`  method to check for each field value easily.

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

Here's a  [Code Pen Demo][18].

Here, inside the callback function of the  `every`  method, we’re checking if each field value is not empty and returning a boolean value.

In the above code, the  `every`  method returns  `true`  if, for all the elements in the  `fields`  array, the callback function returns a  `true`  value.

If the callback function returns a  `false`  value for any of the elements in the  `fields`  array, then the  `every`  method will return  `false`  as the result.

### Advantage of using the every method

-   It allows us to quickly check if all the elements match certain criteria without writing a lot of code

### Browser Support:

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

## The Array.some Method

The  `Array.some`  method has the following syntax:

```js
 Array.some(callback(element[, index[, array]])[, thisArg]
```

The  `some`  method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean  `true`  or  `false`  value.

It returns  `true`  once it finds the first match and returns  `false`  if there is no match.

Suppose we have an array of numbers and we want to check if the array contains at least one positive element. We can use the  `some`  method to achieve it.

```js
let numbers = [-30, 40, 20, 50];
let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log(containsPositive); // true 
numbers = [-10, -30, -20, -50];

```

There are some useful scenarios for using the  `some`  method.

### `Some`  method example 1:

Let's say we have a list of employees and we want to check if a particular employee is present in that array or not. We also want to get the index position of that employee if the employee is found.

So instead of using the  `find`  and  `findIndex`  methods separately, we can use the  `some`  method to do both of these.

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

Here's a  [Code Pen Demo][19].

### `Some`  method example 2:

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

Here's a  [Code Pen Demo][20].

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

Here's a  [Code Pen Demo][21].

Here, the  `accumulator`  will contain the first element of the array and  `number`  will contain the next element of the array (  `1 + 2 = 3`  during the first iteration and then `3 + 3 = 6`  during the next iteration, and so on).

But it’s always good to specify the  `initialValue`  of  `accumulator`  as it makes it easy to understand the return type of the  `reduce`  method and get the correct type of data back.

Take a look at the below code:

```js
const numbers = [1, 2, 3, 4, 5];
const doublesSum = numbers.reduce(function (accumulator, number) {
  return accumulator + number * 2;
}, 10);

```

Here's a  [Code Pen Demo][22].

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

Here's a  [Code Pen Demo][23].

### Advantages of using the reduce method

-   Using  `reduce`  allows us to generate any type of simple or complex data based on the array
-   It remembers the previously returns data from the loop so helps us avoid creating a global variable to store the previous value

**Browser Support:**

-   All modern browsers and Internet Explorer (IE) version 9 and above
-   Microsoft Edge version 12 and above

### Thanks for reading!

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
