> * 原文地址：[Python VS JavaScript – What are the Key Differences Between The Two Popular Programming Languages?](https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/)
> * 原文作者：Estefania Cassingena Navone
> * 译者：ZhichengChen
> * 校对者：

![Python VS JavaScript – What are the Key Differences Between The Two Popular Programming Languages?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/Python-vs.-JavaScript-1.png)

**Welcome!**  If you want to learn the differences between Python and JavaScript, then this article is for you.

These two languages are very popular and powerful, but they do have key differences. We will cover them in detail here.

**In this article, you will learn:**

-   The different real-world applications of Python and JavaScript.
-   The key syntactic and functional differences between Python and JavaScript.

**Let's begin!**  ✨

## 🔹 Python VS JavaScript: Real-World Applications

We will start with a quick tour of their real-world applications.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-187.png)

### Python

Python has become an essential tool in virtually every scientific application around the world because of its power and versatility. It is a general-purpose programming language that supports different programming paradigms.

It is widely used in scientific and specialized applications, including data science, artificial intelligence, machine learning, computer science education, computer vision and image processing, medicine, biology, and even astronomy.

It is also used for web development. This is where we can start to compare its applications to the applications of JavaScript. Python is used for back-end development, which is the area of web development in charge of creating the elements that users don't see, such as the server side of an application.

### JavaScript

While Python can be used to develop the back-end part of a web application, JavaScript can be used to develop both the back-end and the front-end of the application.

The front-end is the part of the application that the user sees and interacts with. Whenever you see or interact with a website or web application, you are using JavaScript "behind the scenes".

Similarly, when you interact with a mobile app, you might be using JavaScript because frameworks like  [React Native][1]  let us write applications that adapt to different platforms.

JavaScript is so widely used in web development because it is a versatile language that gives us the tools we need to develop the components of a web application.

### Differences between the applications of Python and JavaScript

In short, developers use Python for a range of scientific applications. They use JavaScript for web development, user-facing functionality, and servers

## 🔸 Python VS JavaScript: Syntax

Now that you know what they are used for, let's see how they are written and the differences in their syntax.

We will cover the differences in their main elements:

-   Code Blocks
-   Variable Definitions
-   Variable Naming Conventions
-   Constants
-   Data Types and Values
-   Comments
-   Built-in Data Structures
-   Operators
-   Input/Output
-   Conditional Statements
-   For Loops and While Loops
-   Functions
-   Object-Oriented Programming

## Code Blocks in Python and JavaScript

Each programming language has its own style to define code blocks. Let's see their differences in Python and JavaScript:

### How Python defines code blocks

Python relies on indentation to define code blocks. When a series of continuous lines of code are indented at the same level, they are considered part of the same code block.

We use this to define conditionals, functions, loops, and basically every compound statement in Python.

These are some examples:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-127.png)

Use of indentation to define code blocks in Python

**💡 Tip:**  We will see the specific differences between these elements in Python and JavaScript in just a moment. At this moment, please focus on the indentation.

### How JavaScript defines code blocks

In contrast, in JavaScript we use curly braces (`**{}**`) to group statements that belong to the same code block.

These are some examples:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-128.png)

Use of curly braces to define code blocks in JavaScript

## Variable Definitions in Python and JavaScript

The assignment statement is one of the most fundamental statements in any programming language. Let's see how we can define a variable in Python and JavaScript.

### How to define a variable in Python

To define a variable in Python, we write the name of the variable followed by an equal sign (`**=**`) and the value that will be assigned to the variable.

Like this:

```python
<variable_name> = <value>
```

For example:

```python
x = 5
```

### How to define a variable in JavaScript

The syntax is very similar in JavaScript, but we just need to add the keyword  `**var**`  before the name of the variable and end the line with a semicolon (`**;**`).

Like this:

```
var <variable_name> = <value>;
```

**💡 Tip:**  When you define a variable using  `**var**`, the variable has function scope.

For example:

```
var x = 5;
```

We can also use the keyword  `**let**`:

```
let <variable_name> = <value>;
```

For example:

```
let x = 5;
```

**💡 Tip:** In this case, when we use  `**let**`, the variable will have block scope. It will only be recognized in the code block where it was defined.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-125.png)

Variable definitions in Python and JavaScript

💡  **Tip:**  In JavaScript, the end of a statement is marked with a semicolon (`;`) but in Python, we just start a new line to mark the end of a statement.

## Variable Naming Conventions in Python and JavaScript

Python and JavaScript follow two different variable naming conventions.

### How to name variables in Python

In Python, we should use the  `**snake_case**`  naming style.

According to the  [Python Style Guide][2]:

> Variable names follow the same convention as function names.  
>   
> Function names should be  **lowercase, with words separated by underscores**  as necessary to improve readability.

Therefore, a typical variable name in Python would look like this:

```python
first_name
```

💡  **Tip:**  The style guide also mentions that "`**mixedCase**`  is allowed only in contexts where that's already the prevailing style, to retain backwards compatibility."

### How to name variables in JavaScript

In contrast, we should use the  `**lowerCamelCase**`  naming style in JavaScript. The name starts with a lowercase letter and then every new word starts with an uppercase letter.

According to the  [JavaScript guidelines][3]  article by the MDN Web Docs:

> For variable names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.

Therefore, a typical variable name in JavaScript should look like this:

```javascript
firstName
```

![](https://www.freecodecamp.org/news/content/images/2021/01/image-178.png)

## Constants in Python and JavaScript

Great. Now you know more about variables, so let's talk a little bit about constants. Constants are values that cannot be changed during the execution of the program.

### How to define constants in Python

In Python, we rely on naming conventions to define constants because there are no strict rules in the language to prevent changes to their values.

According to the  [Python Style Guide][4]:

> Constants are usually defined on a module level and  **written in all capital letters with underscores separating words**.

This is the naming style that we should use to define a constant in Python:

```
CONSTANT_NAME
```

For example:

```javascript
TAX_RATE_PERCENTAGE = 32
```

💡  **Tip:**  This serves as a red warning for ourselves and for other developers indicating that this value should not be modified in the program. But technically, the value can still be modified.

### How to define constants in JavaScript

In contrast, in JavaScript we can define constants that cannot be changed in the program, and the variable identifier cannot be reassigned.

But this does not mean that the value itself cannot be changed.

According to the article  `**const**`  in  [MDN Web Docs][5]:

> The  `const`  declaration creates a read-only reference to a value. It does  **not**  mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

To define a constant in JavaScript, we add the keyword  `**const**`  before the name of the variable:

```
const TAX_RATE_PERCENTAGE = 32;
```

If we try to change the value of the constant, we will see this error:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-180.png)

Therefore, the value cannot be changed.

**💡 Tip:**  To run and test small code snippets of JavaScript code, you can use the  [console in Chrome Developer Tools][6].

![](https://www.freecodecamp.org/news/content/images/2021/01/image-181.png)

## Data Types and Values in Python and JavaScript

Let's see the main differences between Python and JavaScript data types.

### Numeric Data Types

**Python** has three numeric types to help us perform precise calculations for scientific purposes. These numeric types include:  `int`  (integers), `float`  (floating-point numbers), and  `complex`. Each one of them has its own properties, characteristics, and applications.

In contrast,  **JavaScript** has only two numeric types:  `**Number**`  and  `**BigInt**`. Integers and floating-point numbers are both considered to be of type  `**Number**`.

According to the article  [Number][7]  in MDN Web Docs:

> A number literal like  `37`  in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a  [BigInt][8]  type, but it was not designed to replace Number for everyday uses.  `37`  is still a Number, not a BigInt.)

### None vs. null

In  **Python**, there is a special value called  `**None**`  that we typically use to indicate that a variable doesn't have a value at a particular point in the program.

The equivalent value in  **JavaScript** is  `**null**`, which "represents the intentional absence of any object value" ([source][9]).

![](https://www.freecodecamp.org/news/content/images/2021/01/image-144.png)

### The  `undefined`  Value

In  **JavaScript**, we have a special value that is assigned automatically when we declare a variable without assigning an initial value.

This is an example:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-142.png)

As you can see, the value of the variable  `**x**`  is  `**undefined**`.

In  **Python**, you have to assign an initial value to the variable. We can't declare it without an initial value.

**💡 Tip:** You can assign  `**None**`  as the initial value of a variable in Python to represent the absence of a value.

### Primitive Data Types in Python and JavaScript

Primitive data types represent the most fundamental values that we can work with in a programming language. Let's compare the primitive data types of these two languages:

-   **Python** has four primitive data types: Integers (`int`), Floats (`float`), Booleans (`bool`), and strings (`str`).
-   **JavaScript** has six primitive data types:  `**undefined**`**,**  Boolean, String, Number,  `**BigInt**`, and  `**Symbol**`.

## How to Write Comments in Python and JavaScript

Comments are very important to write clean and readable code. Let's see how you can use them in Python and JavaScript:

### Single-Line Comments

-   In  **Python**, we use a hashtag (`**#**`) to write a comment. All the characters on the same line after this symbol are considered part of the comment.
-   In  **JavaScript**, we write two slashes (`**//**`) to start a single-line comment.

This is a graphical example:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-145.png)

In Python:

```python
# Comment
```

In JavaScript:

```javascript
// Comment
```

### Multi-Line Comments

-   In  **Python**, to write a multi-line comment we start each line with a hashtag.
-   In  **JavaScript**, multi-line comments start with a  `**/***`  and end with a  `***/**`. All the characters between these symbols are considered part of the comment.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-146.png)

In Python:

```python
# Multi-line comment 
# in Python to explain
# the code in detail.
```

In JavaScript:

```javascript
/* 
Multi-line comment 
in JavaScript to explain 
the code in detail.
*/
```

## Built-in Data Structures in Python and JavaScript

The built-in data structures in Python and JavaScript also have key differences.

### Tuples

-   In  **Python**, we have a built-in data structure called  **tuple** that is very similar to a list but immutable. Therefore, it cannot be changed during the execution of the program, so it is used to store data that should not be modified.
-   In  **JavaScript**, there isn't a built-in data structure with these characteristics. Although you can implement a similar data structure with certain features of the language.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-182.png)

### Lists vs. Arrays

-   In **Python,**  **lists** are used to store a sequence of values in the same data structure. They can be modified, indexed, sliced, and used in the program.
-   In  **JavaScript**, an equivalent version of this data structure is called  **array**.

This is an example:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-147.png)

### Hash Tables

-   In  **Python**, there is a built-in data structure called  **dictionary** that helps us map certain values to other values and create key-value pairs. This works as a hash table.
-   **JavaScript** doesn't have this type of built-in data structure, but there are certain ways to reproduce its functionality with certain elements of the language.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-183.png)

## Operators in Python and JavaScript

Operators are essential to write expressions in any programming language. Let's see their key differences in Python and JavaScript.

### Floor Division

While most of the arithmetic operators work exactly the same in Python and JavaScript, the floor division operator is a little bit different.

-   In  **Python**, the floor division operation (also called "integer division") is represented with a double slash (`**//**`).
-   In  **JavaScript**, we don't have a particular floor division operator. Instead, we call the  `**Math.floor()**`  method to round down the result to the nearest integer.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-149.png)

### Comparing Values and Types

In  **Python**, we use the  `**==**`  operator to compare if two values and their data types are equal.

For example:

```python
# Comparing Two Integers
>>> 0 == 0     
True
# Comparing Integer to String
>>> 0 == "0"
False
```

In  **JavaScript**, we also have this operator but it works a little bit differently because it converts the two objects to the same type before actually performing the comparison.

If we check the result of the "integer vs. string" comparison from the previous example using JavaScript (`0 == "0"`), the result is  `**True**`  instead of  `**False**`  because the values are converted to the same data type before being compared:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-150.png)

In JavaScript, to check if the value  **and** the data type are both equal, we need to use this operator  `**===**`  (a triple equal sign).

Now we get the result that we were expecting:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-151.png)

Awesome, right?

**💡 Tip:**  The  `**==**`  operator in Python works like the  `**===**`  operator in JavaScript.

### Logical Operators

-   In  **Python**, the three logical operators are:  `**and**`,  `**or**`, and  `**not**`.
-   In  **JavaScript**, these operators are:  `**&&**`,  `**||**`, and  `**!**`  (respectively).

![](https://www.freecodecamp.org/news/content/images/2021/01/image-152.png)

### Type Operators

-   In  **Python**, to check the type of an object we use the  `**type()**`  function.
-   In  **JavaScript**, we use the  `**typeof**`  operator.

This is a graphical description of their syntax:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-153.png)

## Input and Output in Python and JavaScript

Asking for user input and displaying values to the user are very common operations. Let's see how you can do this in Python and JavaScript:

### Input

-   In  **Python**, we use the  `**input()**`  function to ask for user input. We write the message within parentheses.
-   In  **JavaScript**, one alternative (if you are running the code on a browser) is to display a small prompt with  `**window.prompt(message)**`  and assign the result to a variable.

The main difference between these two approaches is that in Python, the user will be prompted to enter a value in the console while in JavaScript, a small prompt will be displayed on the browser and it will ask the user to enter a value.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-161.png)

💡  **Tip:**  You will see this in the Python console to enter a value:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-184.png)

In JavaScript, if you open Chrome Developer tools and enter this line of code in the console:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-163.png)

This prompt will be displayed:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-162.png)

Prompt displayed when window.prompt() is called

### Output

-   In  **Python**, we print a value to the console with the  `**print()**`  function, passing the value within parentheses.
-   In  **JavaScript**, we print a value to the console using  `**console.log()**`, passing the value within parentheses as well.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-164.png)

💡  **Tip:**  If you are working on a browser, you can also call  `**alert()**`  to display a small prompt with the message (or value) passed within parentheses.

## Conditional Statements in Python and JavaScript

With conditionals, we can choose what happens in the program based on whether a specific condition is  `**True**`  or  `**False**`. Let's see their differences in Python and JavaScript.

### `if`  Statement

-   In  **Python**, we rely on indentation to indicate which lines of code belong to the conditional.
-   In  **JavaScript**, we have to surround the condition with parentheses and the code with curly braces. The code should also be indented.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-154.png)

Conditional in Python (left) and JavaScript (right)

### `if/else`  Statement

The else clause is very similar in both languages. The only difference is that:

-   In  **Python**,  we write a colon (`**:**`) after the  `**else**`  keyword
-   In  **JavaScript**,  we surround the code that belongs to this clause with curly braces (`**{}**`) .

![](https://www.freecodecamp.org/news/content/images/2021/01/image-155.png)

### Multiple Conditions

To write multiple conditions:

-   In  **Python**, we write the keyword  `**elif**`  followed by the condition. After the condition, we write a colon (`:`) and the code indented on the next line.
-   In  **JavaScript**, we write the keywords  `**else if**`  followed by the condition (surrounded by parentheses). After the condition, we write curly braces and the code indented within the braces.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-156.png)

Conditional in Python (left) and JavaScript (right)

### Switch in JavaScript

-   In  **JavaScript**, we have an additional control structure that we can use to choose what happens based on the value of an expression. This statement is called  `**switch**`.
-   **Python** doesn't have this type of built-in control structure.

This is the general syntax of this statement:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-159.png)

Switch statement in JavaScript

In JavaScript:

```javascript
switch (expression) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    case value3:
        // Code
        break;
    default:
        // Code
}
```

**💡 Tip:** We can add as many cases as we need and the expression can be a variable.

## For Loops and While Loops in Python and JavaScript

Now let's see how we can define different types of loops in Python and JavaScript and their main differences.

### For Loops

The syntax to define a for loop in Python is relatively simpler than the syntax in JavaScript.

-   In  **Python**, we write the keyword  `for`  followed by the name of the loop variable, the keyword  `in`, and a call to the  `range()`  function specifying the necessary parameter(s). Then, we write a colon (`:`) followed by the body of the loop indented.
-   In  **JavaScript**, we have to specify several values explicitly. We start with the  `for`  keyword followed by parentheses. Within those parentheses, we define the loop variable with its initial value, the condition that must be  `False`  to stop the loop, and how the variable will be updated on every iteration. Then, we write curly braces to create a code block and within the braces we write the body of the loop indented.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-165.png)

For Loop in Python (left) and JavaScript (right)

### Iterating Over Iterables

We can use a for loop in Python and JavaScript to iterate over the elements of an iterable.

-   In  **Python**, we write the keyword  `for`  followed by the loop variable, the  `in`  keyword, and the iterable. Then, we write a colon (`:`) and the body of the loop (indented).
-   In  **JavaScript**, we can use a  `**for .. of**`  loop. We write the  `for`  keyword followed by parentheses and within those parentheses, we write the keyword  `var`  followed by the loop variable, the keyword  `of`, and the iterable. We surround the body of the loop with curly braces and then we indent it.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-167.png)

For Loop in Python (left) and JavaScript (right)

In  **JavaScript**, we also have  `**for .. in**`  loops to iterate over the properties of an object.

According to  [MDN Web Docs][10]:

> The  **`for...in`  statement**  iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

This is an example:

```javascript
const object = { a: 1, b: 2, c: 3 };


```

The output when we run this code in the console of Chrome Developer Tools is:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-168.png)

### While Loops

While loops are very similar in Python and JavaScript.

-   In  **Python**, we write the keyword  `while`  followed by the condition, a colon (`:`), and in a new line, the body of the loop (indented).
-   In  **JavaScript**, the syntax is very similar. The differences are that we have to surround the condition with parentheses and the body of the loop with curly braces.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-169.png)

While Loop in Python (left) and JavaScript (right)

### `do..while`  Loops in JavaScript

In  **JavaScript**, we also have a type of loop that doesn't exist in Python.

This type of loop is called a  `**do..while**`  loop because it does something at least once and it continues running while a condition is  `True`.

This is the basic syntax:

```javascript
do {
    // Code
} while (condition);
```

💡  **Tip:**  This type of loop guarantees that the code will be executed at least once.

This is particularly helpful when we ask for user input because the user will be prompted to enter the input. If the input is valid, we can continue with the program. But if it's not valid, we can prompt the user to enter the value again until it is valid.

## Functions in Python and JavaScript

Functions are incredibly important to write concise, maintainable, and readable programs. The syntax is very similar in Python and JavaScript, but let's analyze their key differences:

-   In  **Python**, we write the keyword  `**def**`  followed by the name of the function, and within parentheses the parameters list. After this list, we write a colon (`:`) and the body of the function (indented).
-   In  **JavaScript**, the only differences are that we define a function using the  `**function**`  keyword and surround the body of the function with curly braces.

![](https://www.freecodecamp.org/news/content/images/2021/01/image-170.png)

Function in Python (top) and JavaScript (bottom)

In addition, there is a very important difference between Python and JavaScript functions:

### Number of Function Arguments

-   In  **Python**, the number of arguments passed to the function call has to match the number of parameters defined in the function definition. If this is not the case, an exception will occur.

This is an example:

```python
>>> def foo(x, y):
    print(x, y)

```

-   In  **JavaScript**, this is not necessary since parameters are optional. You can call a function with fewer or more arguments than the parameters that were defined in the function definition. Missing arguments are assigned the value  `**undefined**`  by default and extra arguments can be accessed with the  `**arguments**`  object.

This is an example in JavaScript:

![](https://www.freecodecamp.org/news/content/images/2021/01/image-171.png)

Notice how the function was called with three arguments but only two parameters were included in the parameters list of the function definition.

💡  **Tip:**  To get the number of arguments passed to the function, you can use  **`arguments.length`** within the function.

## Object-Oriented Programming in Python and JavaScript

Both Python and JavaScript support Object-Oriented Programming, so let's see how you can create and use the main elements of this programming paradigm.

### Classes

The first line of a class definition is very similar in Python and JavaScript. We write the keyword  `**class**`  followed by the name of the class.

The only difference is that:

-   In  **Python**, after the name of the class, we write a colon (`**:**`)
-   In  **JavaScript**, we surround the content of the class with curly braces (`**{}**`)

![](https://www.freecodecamp.org/news/content/images/2021/01/image-172.png)

Class definition in Python (left) and JavaScript (right)

**💡 Tip:**  In Python and JavaScript, class names should start with an uppercase letter and each word should start with an uppercase letter as well.

### Constructor and Attributes

The constructor is a special method that is called when a new instance of the class (a new object) is created. Its main purpose is to initialize the attributes of the instance.

-   In  **Python**, the constructor that initializes the new instance is called  `**init**`  (with two leading and trailing underscores). This method is called automatically when an instance of the class is created to initialize its attributes. Its parameters list defines the values that we have to pass to create the instance. This list starts with  `**self**`  as the first parameter.
-   In  **JavaScript**, the constructor method is called  `**constructor**`  and it has a parameters list as well.

**💡 Tip:** In Python, we use  `**self**`  to refer to the instance while in JavaScript we use  `**this**`.

To assign values to the attributes in  **Python**, we use this syntax:

```
self.attribute = value
```

In contrast, we use this syntax in  **JavaScript**:

```
this.attribute = value;
```

![](https://www.freecodecamp.org/news/content/images/2021/01/image-174.png)

Class Example in Python (left) and JavaScript (right)

## Methods in Python and JavaScript

-   In  **Python**, we define methods with the  `**def**`  keyword followed by their name and the parameters list within parentheses. This parameters list starts with the  `**self**`  parameter to refer to the instance that is calling the method. After this list, we write a colon (`**:**`) and the body of the method indented.

This is an example:

```python
class Circle:
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">__init__</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> radius<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> color<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>radius <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> radius
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>color <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> color

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calc_diameter</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>radius <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">*</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">2</span></code></pre><figcaption style="box-sizing: inherit; margin: 1em auto 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: inherit; font-size: 17.6px; vertical-align: baseline; text-align: center; max-width: 1040px;">Example: Method in a Python Class</figcaption></figure><ul style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px 1.5em 0px 1.3em; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; list-style: disc; max-width: 100%; min-width: 100%;"><li style="box-sizing: inherit; margin: 0px 0px 0.5em; padding: 0px 0px 0px 0.3em; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.6em; font-family: inherit; font-size: 22px; vertical-align: baseline; word-break: break-word;">In<span> </span><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: var(--gray85);">JavaScript</strong>, methods are defined by writing their name followed by the parameters list and curly braces. Within the curly braces, we write the body of the method.</li></ul><figure class="kg-card kg-code-card" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; width: 740px;"><pre class=" language-javascript" style="box-sizing: inherit; margin: 0px; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: var(--gray85); background: var(--gray05); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-javascript" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">class</span> <span class="token class-name" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">Circle</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>

<span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">constructor</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;">radius<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> color</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>radius <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> radius<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>color <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> color<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>

<span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">calcDiameter</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>radius <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">*</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">2</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

Example: Method in a JavaScript Class

### Instances

To create instances of a class:

-   In  **Python**, we write the name of the class and pass the arguments within parentheses.

```python
my_circle = Circle(5, "Red")
```

-   In  **JavaScript**, we need to add the  `**new**`  keyword before the name of the class.

```javascript
my_circle = new Circle(5, "Red");
```

## 🔹 To Summarize

Python and JavaScript are very powerful languages with different real-world applications.

Python can be used for web development and for a wide range of applications, including scientific purposes. JavaScript is mainly used for web development (front-end and back-end) and for mobile app development.

They have important differences, but they both have the same basic elements that we need to write powerful programs.

**I hope you liked this article and found it helpful.** Now you know the key differences between Python and JavaScript.

⭐  [**Subscribe to my YouTube channel**][11]  and follow me on  [**Twitter**][12]  to find more coding tutorials and tips.

  

[1]: https://reactnative.dev/
[2]: https://www.python.org/dev/peps/pep-0008/#function-and-variable-names
[3]: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#Variable_naming
[4]: https://www.python.org/dev/peps/pep-0008/#constants
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[6]: https://developers.google.com/web/tools/chrome-devtools/console
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[11]: https://www.youtube.com/channel/UCng0h8WiHLmT57JJ8At4LfQ
[12]: https://twitter.com/EstefaniaCassN
