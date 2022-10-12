> -  原文地址：[Python Read JSON File – How to Load JSON from a File and Parse Dumps](https://www.freecodecamp.org/news/python-read-json-file-how-to-load-json-from-a-file-and-parse-dumps/)
> -  原文作者：[
                    
                        Estefania Cassingena Navone
                    
                ](https://www.freecodecamp.org/news/author/estefaniacn/)
> -  译者：[ZhijieXiong](https://github.com/ZhijieXiong)
> -  校对者：

![Python Read JSON File – How to Load JSON from a File and Parse Dumps](https://www.freecodecamp.org/news/content/images/size/w2000/2020/08/Read-JSON-image.png)

欢迎！如果您想学习如何在Python中和JSON文件交互，那么本文适合你。

**你将学习：**

-   为什么JSON格式如此重要。
-   json的基本结构和数据类型。
-   JSON和字典如何在Python中协同工作。
-   如何使用Python内置的`json`模块。
-   如何将JSON字符串转换为Python对象，反之亦然。
-   如何使用`loads()`和`dumps()`。
-   如何让JSON字符串自动缩进。
-   如何在Python中使用`load()`读取JSON文件。
-   如何在Python中使用`dump()`将JSON字符串写入文件。
-   以及更多！

准备好了吗？让我们开始！ ✨

## 🔹 介绍：什么是JSON？

![image-98](https://www.freecodecamp.org/news/content/images/2020/10/image-98.png)

JSON格式的产生最初是受到JavaScript（一种用于web开发的编程语言）语法的启发，但在那之后，它成为一种**独立于语言的数据格式**，并且今天我们所使用的大多数编程语言都可以生成和读取JSON。

### JSON的重要性和使用例子

基本上，JSON是一种用于存储或表示数据的格式。它的常见用例包括web开发和配置文件。

让我们看看原因：

-   **Web开发：**在Web应用程序中，通常用JSON从服务端向客户端发送数据，反之亦然。

![image-65](https://www.freecodecamp.org/news/content/images/2020/10/image-65.png)

-   **配置文件：**JSON还用于存储配置和设置信息。例如，要创建[Google Chrome App](https://developer.chrome.com/apps/first_app#one)，则需要一个名为`manifest.json`的JSON文件，用于指定应用程序的名称、描述、当前版本以及其它属性和设置。

![image-99](https://www.freecodecamp.org/news/content/images/2020/10/image-99.png)

## 🔸 JSON的结构和格式

既然已经知道了JSON的用途，那么让我们通过一个比萨饼订单数据的示例来看看它的基本结构：

```JSON
{ 
	"size": "medium",
	"price": 15.67,
	"toppings": ["mushrooms", "pepperoni", "basil"],
	"extra_cheese": false,
	"delivery": true,
	"client": {
		"name": "Jane Doe",
		"phone": null,
		"email": "janedoe@email.com"
	}
}
```

上面是示例的sample.json文件

以下是JSON格式的主要特征：

-   有一系列用花括号`{}`括起来的键-值对。
-   每个键都使用以下格式映射到特定值：

```
"key": <value> 
```

💡 **提示：**`value`的内容必须用双引号括起来。

-   键-值对用逗号分隔，只有最后一对后面可以不加逗号。

```JSON
{
	"size": "medium", # Comma!
	"price": 15.67
}
```

💡 **提示：**我们通常使用不同级别的缩进来格式化JSON，以使数据更易于阅读。在本文中，你将学习如何使用Python自动添加缩进。

### JSON数据类型：键和值

JSON文件具有特定规则，其用于确定哪些数据类型是有效的键和值。

-   **键**必须是字符串。
-   **值**可以是字符串、数字、数组、布尔值（`true`/`false`）、`null`或JSON对象。

根据[Python文档](https://docs.python.org/3/library/json.html#json.dumps)：

> JSON的键/值对中的键始终是[`str`类型](https://docs.python.org/3/library/stdtypes.html#str)。当字典转换为JSON时，字典中的所有键都被强制转换为字符串。

### 风格指南

根据[Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)：

-   始终使用有意义的名称。
-   数组类型的值对应的键名应使用复数形式，所有其它键名应为单数形式。例如：如果对应的值是数组，请使用`orders`而不是`order`。
-   JSON数据中不应该有注释。

## 🔹 JSON vs. Python Dictionaries（字典数据类型）

JSON和字典从显示形式来看可能非常相似，但它们有很大的不同。让我们看看它们是如何“连接（译者：这里意思应该是它们之间的关系）”，以及如何相互补充，来使得Python成为处理JSON文件的强大工具。

JSON是用于表示和存储数据的文件格式，而Python字典是Pythons程序运行时保存在内存中的实际数据结构（对象）。

### JSON和Python字典如何协同工作

![image-100](https://www.freecodecamp.org/news/content/images/2020/10/image-100.png)

当我们在Python中处理JSON文件时，我们不能直接读取数据并在程序中使用它，这是因为整个文件被表示为单个字符串，我们无法单独访问键值对。

除非······

我们使用JSON文件的键-值对创建一个Python字典，这样我们就可以在程序中使用它来读取、使用和修改（如果需要的话）数据。

这是JSON和Python字典之间的“联系”：JSON是数据的字符串表示，字典是程序运行时在内存中创建的实际数据结构。（译者：字典转换为JSON叫序列化，反之为反序列化）

很好，既然你已经对JSON有足够多的了解，那么让我们开始深入了解实际情况中如何在Python里使用JSON的。

## 🔸 The JSON Module

Luckily for us, Python comes with a built-in module called `json`. It is installed automatically when you install Python and it includes functions to help you work with JSON files and strings.

We will use this module in the coming examples.

### How to Import the JSON Module

To use `json` in our program, we just need to write an import statement at the top of the file.

Like this:

![image-73](https://www.freecodecamp.org/news/content/images/2020/10/image-73.png)

With this line, you will have access to the functions defined in the module. We will use several of them in the examples.

**💡 Tip:** If you write this import statement, you will need to use this syntax to call a function defined in the `json` module:

![image-76](https://www.freecodecamp.org/news/content/images/2020/10/image-76.png)

## 🔹 Python and JSON Strings

To illustrate how some of the most important functions of the `json` module work, we will use a multi-line string with JSON format.

### JSON String

Particularly, we will use this string in the examples. It is just a regular multi-line Python string that follows the JSON format.

```python
data_JSON =  """
{
	"size": "Medium",
	"price": 15.67,
	"toppings": ["Mushrooms", "Extra Cheese", "Pepperoni", "Basil"],
	"client": {
		"name": "Jane Doe",
		"phone": "455-344-234",
		"email": "janedoe@email.com"
	}
}
"""
```

JSON String

-   To define a multi-line string in Python, we use triple quotes.  
-   Then, we assign the string to the variable `data_JSON`.

💡 **Tip:** The [Python Style Guide](https://www.python.org/dev/peps/pep-0008/#string-quotes) recommends using double quote characters for triple-quoted strings.  

### JSON String to Python Dictionary

We will use the string with JSON format to create a Python dictionary that we can access, work with, and modify.

To do this, we will use the `loads()` function of the `json` module, passing the string as the argument.

This is the basic syntax:

![image-77](https://www.freecodecamp.org/news/content/images/2020/10/image-77.png)

Here is the code:

```python
# Import the module
import json

# String with JSON format
data_JSON =  """
{
	"size": "Medium",
	"price": 15.67,
	"toppings": ["Mushrooms", "Extra Cheese", "Pepperoni", "Basil"],
	"client": {
		"name": "Jane Doe",
		"phone": "455-344-234",
		"email": "janedoe@email.com"
	}
}
"""

# Convert JSON string to dictionary
data_dict = json.loads(data_JSON)
```

Let's focus on this line:

```python
data_dict = json.loads(data_JSON)
```

-   `json.loads(data_JSON)` creates a new dictionary with the key-value pairs of the JSON string and it returns this new dictionary.
-   Then, the dictionary returned is assigned to the variable `data_dict`.

**Awesome!** If we print this dictionary, we see this output:

```python
{'size': 'Medium', 'price': 15.67, 'toppings': ['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil'], 'client': {'name': 'Jane Doe', 'phone': '455-344-234', 'email': 'janedoe@email.com'}}
```

The dictionary has been populated with the data of the JSON string. Each key-value pair was added successfully.

Now let's see what happens when we try to access the values of the key-value pairs with the same syntax that we would use to access the values of a regular Python dictionary:

```python
print(data_dict["size"])
print(data_dict["price"])
print(data_dict["toppings"])
print(data_dict["client"])
```

The output is:

```
Medium
15.67
['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil']
{'name': 'Jane Doe', 'phone': '455-344-234', 'email': 'janedoe@email.com'}
```

Exactly what we expected. Each key can be used to access its corresponding value.

💡 **Tip:** We can use this dictionary just like any other Python dictionary. For example, we can call dictionary methods, add, update, and remove key-value pairs, and more. We can even use it in a for loop.

### JSON to Python: Type Conversion

When you use `loads()` to create a Python dictionary from a JSON string, you will notice that some values will be converted into their corresponding Python values and data types.

This table presented in the [Python Documentation](https://docs.python.org/3/library/json.html#encoders-and-decoders) for the `json` module summarizes the correspondence from JSON data types and values to Python data types and values:

![image-79](https://www.freecodecamp.org/news/content/images/2020/10/image-79.png)

Table presented in the official [documentation of the json module](https://docs.python.org/3/library/json.html#encoders-and-decoders) 

**💡 Tip:** The same conversion table applies when we work with JSON files.

### Python Dictionary to JSON String

Now you know how to create a Python dictionary from a string with JSON format.

But sometimes we might need to do exactly the opposite, creating a string with JSON format from an object (for example, a dictionary) to print it, display it, store it, or work with it as a string.

To do that, we can use the `dumps` function of the `json` module, passing the object as argument:

![image-80](https://www.freecodecamp.org/news/content/images/2020/10/image-80.png)

**💡 Tip:** This function will return a string.

This is an example where we convert the Python dictionary `client` into a string with JSON format and store it in a variable:

```python
# Python Dictionary
client = {
    "name": "Nora",
    "age": 56,
    "id": "45355",
    "eye_color": "green",
    "wears_glasses": False
}

# Get a JSON formatted string
client_JSON = json.dumps(client)
```

Let's focus on this line:

```python
client_JSON = json.dumps(client)
```

-   `json.dumps(client)` creates and returns a string with all the key-value pairs of the dictionary in JSON format.
-   Then, this string is assigned to the `client_JSON` variable.

If we print this string, we see this output:

```python
{"name": "Nora", "age": 56, "id": "45355", "eye_color": "green", "wears_glasses": false}
```

💡 **Tip:** Notice that the last value (`false`) was changed. In the Python dictionary, this value was `False` but in JSON, the equivalent value is `false`. This helps us confirm that, indeed, the original dictionary is now represented as a string with JSON format.

If we check the data type of this variable, we see:

```python
<class 'str'>
```

So the return value of this function was definitely a string.

### Python to JSON: Type Conversion

A process of type conversion occurs as well when we convert a dictionary into a JSON string. This table from the [Python Documentation](https://docs.python.org/3/library/json.html#json.JSONEncoder) illustrates the corresponding values:

![image-81](https://www.freecodecamp.org/news/content/images/2020/10/image-81.png)

Table from the [official documentation of the json module](https://docs.python.org/3/library/json.html#json.JSONEncoder).

### How to Print JSON With Indentation

If we use the `dumps` function and we print the string that we got in the previous example, we see:

```python
{"name": "Nora", "age": 56, "id": "45355", "eye_color": "green", "wears_glasses": false}
```

But this is not very readable, right?

We can improve the readability of the JSON string by adding **indentation**.

To do this automatically, we just need to pass a second argument to specify the number of spaces that we want to use to indent the JSON string:

![image-111](https://www.freecodecamp.org/news/content/images/2020/10/image-111.png)

**💡 Tip:** the second argument has to be a non-negative integer (number of spaces) or a string. If indent is a string (such as `"\t"`), that string is used to indent each level ([source](https://docs.python.org/3/library/json.html#json.dump)).

Now, if we call `dumps` with this second argument:

```python
client_JSON = json.dumps(client, indent=4)
```

The result of printing `client_JSON` is:

```python
{
    "name": "Nora",
    "age": 56,
    "id": "45355",
    "eye_color": "green",
    "wears_glasses": false
}
```

That's great, right? Now our string is nicely formatted. This will be very helpful when we start working with files to store the data in a human-readable format.

### How to Sort the Keys

You can also sort the keys in alphabetical order if you need to. To do this, you just need to write the name of the parameter `sort_keys` and pass the value `True`:

![image-84](https://www.freecodecamp.org/news/content/images/2020/10/image-84.png)

💡 **Tip:** The value of `sort_keys` is `False` by default if you don't pass a value.

For example:

```python
client_JSON = json.dumps(client, sort_keys=True)
```

Returns this string with the keys sorted in alphabetical order:

```python
{"age": 56, "eye_color": "green", "id": "45355", "name": "Nora", "wears_glasses": false}
```

### How to Sort Alphabetically and Indent (at the same time)

To generate a JSON string that is sorted alphabetically and indented, you just need to pass the two arguments:

![image-104](https://www.freecodecamp.org/news/content/images/2020/10/image-104.png)

In this case, the output is:

```python
{
    "age": 56,
    "eye_color": "green",
    "id": "45355",
    "name": "Nora",
    "wears_glasses": false
}
```

**💡 Tip:** You can pass these arguments in any order (relative to each other), but the object has to be the first argument in the list.

Great. Now you know how to work with JSON strings, so let's see how you can work with JSON files in your Python programs.

## 🔸 JSON and Files

Typically, JSON is used to store data in files, so Python gives us the tools we need to read these types of file in our program, work with their data, and write new data.

**💡 Tip:** a JSON file has a `.json` extension:

![image-62](https://www.freecodecamp.org/news/content/images/2020/10/image-62.png)

Let's see how we can work with `.json` files in Python.

### How to Read a JSON File in Python

Let's say that we created an `orders.json` file with this data that represents two orders in a pizza shop:

```python
{
	"orders": [ 
		{
			"size": "medium",
			"price": 15.67,
			"toppings": ["mushrooms", "pepperoni", "basil"],
			"extra_cheese": false,
			"delivery": true,
			"client": {
				"name": "Jane Doe",
				"phone": null,
				"email": "janedoe@email.com"
			}
		},
		{
			"size": "small",
			"price": 6.54,
			"toppings": null,
			"extra_cheese": true,
			"delivery": false,
			"client": {
				"name": "Foo Jones",
				"phone": "556-342-452",
				"email": null
			}
		}
	]
}
```

orders.json

Please take a moment to analyze the structure of this JSON file.

Here are some quick tips:

-   Notice the data types of the values, the indentation, and the overall structure of the file.
-   The value of the main key `"orders"` is an array of JSON objects (this array will be represented as list in Python). Each JSON object holds the data of a pizza order.

If we want to read this file in Python, we just need to use a `with` statement:

![image-87](https://www.freecodecamp.org/news/content/images/2020/10/image-87.png)

💡 **Tip:** In the syntax above, we can assign any name to `file` (green box). This is a variable that we can use within the `with` statement to refer to the file object.

The key line of code in this syntax is:

```
data = json.load(file)
```

-   `json.load(file)` creates and returns a new Python dictionary with the key-value pairs in the JSON file.
-   Then, this dictionary is assigned to the `data` variable.

💡 **Tip:** Notice that we are using `load()` instead of `loads()`. This is a different function in the `json` module. You will learn more about their differences at the end of this article.

Once we have the content of the JSON file stored in the `data` variable as a dictionary, we can use it to do basically anything we want.

### Examples

For example, if we write:

```python
print(len(data["orders"]))
```

The output is `2` because the value of the main key `"orders"` is a list with two elements.

We can also use the keys to access their corresponding values. This is what we typically do when we work with JSON files.

For example, to access the toppings of the first order, we would write:

```
data["orders"][0]["toppings"]
```

-   First, we select the main key `"orders"`
-   Then, we select the first element in the list (index `0`).
-   Finally, we select the value that corresponds to the key `"toppings"`

You can see this "path" graphically in the diagram:

![image-101](https://www.freecodecamp.org/news/content/images/2020/10/image-101.png)

If we print this value, the output is:

```python
['mushrooms', 'pepperoni', 'basil']
```

Exactly what we expected. You just need to "dive deeper" into the structure of the dictionary by using the necessary keys and indices. You can use the original JSON file/string as a visual reference. This way, you can access, modify, or delete any value.

**💡 Tip:** Remember that we are working with the new dictionary. The changes made to this dictionary will not affect the JSON file. To update the content of the file, we need to write to the file.

### How to Write to a JSON File

Let's see how you can write to a JSON file.

The first line of the `with` statement is very similar. The only change is that you need to open the file in `'w'` (write) mode to be able to modify the file.

![image-105](https://www.freecodecamp.org/news/content/images/2020/10/image-105.png)

**💡 Tip:** If the file doesn't exist already in the current working directory (folder), it will be created automatically. By using the `'w'` mode, we will be replacing the entire content of the file if it already exists.

There are two alternative ways to write to a JSON file in the body of the `with` statement:

-   `dump`
-   `dumps`

Let's see them in detail.

**First Approach: `dump`**

This is a function that takes two arguments:

-   The object that will be stored in JSON format (for example, a dictionary).
-   The file where it will be stored (a file object).

![image-91](https://www.freecodecamp.org/news/content/images/2020/10/image-91.png)

Let's say that the pizza shop wants to remove the clients' data from the JSON file and create a new JSON file called `orders_new.json` with this new version.

We can do this with this code:

```python
# Open the orders.json file
with open("orders.json") as file:
    # Load its content and make a new dictionary
    data = json.load(file)

    # Delete the "client" key-value pair from each order
    for order in data["orders"]:
        del order["client"]

# Open (or create) an orders_new.json file 
# and store the new version of the data.
with open("orders_new.json", 'w') as file:
    json.dump(data, file)
```

This was the original version of the data in the `orders.json` file. Notice that the `"client"` key-value pair exists.

```python
{
	"orders": [ 
		{
			"size": "medium",
			"price": 15.67,
			"toppings": ["mushrooms", "pepperoni", "basil"],
			"extra_cheese": false,
			"delivery": true,
			"client": {
				"name": "Jane Doe",
				"phone": null,
				"email": "janedoe@email.com"
			}
		},
		{
			"size": "small",
			"price": 6.54,
			"toppings": null,
			"extra_cheese": true,
			"delivery": false,
			"client": {
				"name": "Foo Jones",
				"phone": "556-342-452",
				"email": null
			}
		}
	]
}
```

orders.json

This is the new version in the `orders_new.json` file:

```Python
{"orders": [{"size": "medium", "price": 15.67, "toppings": ["mushrooms", "pepperoni", "basil"], "extra_cheese": false, "delivery": true}, {"size": "small", "price": 6.54, "toppings": null, "extra_cheese": true, "delivery": false}]}
```

orders\_new.json

If you analyze this carefully, you will see that the `"clients"` key-value pair was removed from all the orders.

However, there is something missing in this file, right?

Please take a moment to think about this... What could it be?

Indentation, of course!

The file doesn't really look like a JSON file, but we can easily fix this by passing the argument `indentation=4` to `dump()`.

![image-92](https://www.freecodecamp.org/news/content/images/2020/10/image-92.png)

Now the content of the file looks like this:

```python
{
    "orders": [
        {
            "size": "medium",
            "price": 15.67,
            "toppings": [
                "mushrooms",
                "pepperoni",
                "basil"
            ],
            "extra_cheese": false,
            "delivery": true
        },
        {
            "size": "small",
            "price": 6.54,
            "toppings": null,
            "extra_cheese": true,
            "delivery": false
        }
    ]
}
```

orders\_new.json

What a difference! This is exactly what we would expect a JSON file to look like.

Now you know how to read and write to JSON files using `load()` and `dump()`. Let's see the differences between these functions and the functions that we used to work with JSON strings.  

## 🔹 load() vs. loads()

This table summarizes the key differences between these two functions:

![image-110](https://www.freecodecamp.org/news/content/images/2020/10/image-110.png)

💡 **Tip:** Think of `loads()` as "load string" and that will help you remember which function is used for which purpose.

## 🔸 dump() vs. dumps()

Here we have a table that summarizes the key differences between these two functions:

![image-109](https://www.freecodecamp.org/news/content/images/2020/10/image-109.png)

💡 **Tip:** Think of `dumps()` as a "dump string" and that will help you remember which function is used for which purpose.

## 🔹 Important Terminology in JSON

Finally, there are two important terms that you need to know to work with JSON:

-   **Serialization:** converting an object into a JSON string.
-   **Deserialization:** converting a JSON string into an object.

## 🔸 In Summary

-   JSON (JavaScript Object Notation) is a format used to represent and store data.
-   It is commonly used to transfer data on the web and to store configuration settings.
-   JSON files have a `.json` extension.
-   You can convert JSON strings into Python objects and vice versa.
-   You can read JSON files and create Python objects from their key-value pairs.
-   You can write to JSON files to store the content of Python objects in JSON format.

****I really hope you liked my article and found it helpful.**** Now you know how to work with JSON in Python. Follow me on Twitter [@EstefaniaCassN](https://twitter.com/EstefaniaCassN) and [check out my online courses](https://www.udemy.com/user/estefania-cn/).
