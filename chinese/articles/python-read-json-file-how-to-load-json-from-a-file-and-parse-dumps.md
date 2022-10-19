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

## 🔸 JSON模块

幸运的是，Python自带一个名为`json`的内置模块，安装Python时会自动安装该模块，这个模块包含一些帮助处理JSON文件和字符串的功能。

我们将在接下来的示例中使用此模块。

### 如何导入JSON模块

要在程序中使用`json`，只需在文件顶部写一个导入语句。（译者注：实际上只要在使用它之前导入就行）

就像这样：

![image-73](https://www.freecodecamp.org/news/content/images/2020/10/image-73.png)

通过此行就可以使用模块中定义的函数，我们将在示例中调用其中几个方法。

**💡 提示：**如果写了上面的导入语句，则需要使用下面的语法来调用在`json`模块中定义的函数：

![image-76](https://www.freecodecamp.org/news/content/images/2020/10/image-76.png)

## 🔹 Python和JSON字符串

为了说明`json`模块中最重要的一些函数是如何工作的，我们将使用JSON格式的多行字符串。

### JSON字符串

特别地，这个字符串只是一个普通的遵循JSON格式的多行Python字符串，我们将在示例中使用它。

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

JSON字符串

-   我们使用三重引号在Python中定义多行字符串。
-   然后我们将字符串赋给变量`data_JSON`。

💡 **提示：**[Python Style Guide](https://www.python.org/dev/peps/pep-0008/#string-quotes)建议三重引号字符串使用双引号。

### JSON字符串到Python字典

我们将使用此JSON格式的字符串来创建一个可以访问、使用和修改的Python字典。

为此，我们将使用`json`模块的`loads()`函数，并将字符串作为参数传递进去。

这是基本语法：

![image-77](https://www.freecodecamp.org/news/content/images/2020/10/image-77.png)

这是代码：

```python
# 导入模块
import json

# JSON格式的字符串
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

# 将JSON字符串转换为字典
data_dict = json.loads(data_JSON)
```

注意这行：

```python
data_dict = json.loads(data_JSON)
```

-   `json.loads(data_json)`使用JSON字符串的键-值对创建一个新字典，并返回这个字典。
-   然后返回的字典被赋值给变量`data_dict`。

**太棒了！**如果我们打印这个字典，会看到以下输出：

```python
{'size': 'Medium', 'price': 15.67, 'toppings': ['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil'], 'client': {'name': 'Jane Doe', 'phone': '455-344-234', 'email': 'janedoe@email.com'}}
```

字典中已填充了JSON字符串的数据，每个键值对都被成功添加到字典里。

现在让我们尝试使用与访问常规Python字典相同的语法，来访问键-值对的值，看看会发生什么：

```python
print(data_dict["size"])
print(data_dict["price"])
print(data_dict["toppings"])
print(data_dict["client"])
```

输出是：

```
Medium
15.67
['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil']
{'name': 'Jane Doe', 'phone': '455-344-234', 'email': 'janedoe@email.com'}
```

每个键都可以用来访问其对应的值，正如我们所期望的那样。

💡 **提示：**我们可以像使用任何其它Python字典一样来使用此字典。例如，我们可以调用字典的方法，添加、更新和删除键-值对，以及其它等等操作，我们甚至可以在for循环中使用它。

### JSON到Python：类型转换

当使用`loads()`从JSON字符串来创建Python字典时，你会注意到一些值将被转换为Python中对应的值和数据类型。

[Python文档](https://docs.python.org/3/library/json.html#encoders-and-decoders)上的这个`json`模块表格总结了JSON数据类型和Python数据类型的对应关系：

![image-79](https://www.freecodecamp.org/news/content/images/2020/10/image-79.png)

这是官方[json模块文档](https://docs.python.org/3/library/json.html#encoders-and-decoders)中的表格

**💡 提示：**当我们处理JSON文件时，转换表同样也适用。

### Python字典到JSON字符串

现在你知道了如何用JSON格式的字符串创建Python字典。

但有时我们可能需要做相反的事情，即用对象（例如字典）创建JSON格式的字符串，以便打印、显示、存储，或者将其作为字符串使用。

为此，我们可以使用`json`模块的`dumps`函数，该函数要求将（要转换的）对象作为参数传递：

![image-80](https://www.freecodecamp.org/news/content/images/2020/10/image-80.png)

**💡 提示：**此函数将返回一个字符串。

这是一个例子，我们将Python字典`client`转换为JSON格式的字符串，并将其赋值给变量：

```python
# Python Dictionary
client = {
    "name": "Nora",
    "age": 56,
    "id": "45355",
    "eye_color": "green",
    "wears_glasses": False
}

# 获得一个JSON格式的字符串
client_JSON = json.dumps(client)
```

注意这行：

```python
client_JSON = json.dumps(client)
```

-   `json.dumps(client)`创建并返回一个包含字典中所有键-值对的JSON格式的字符串。
-   然后将此字符串赋值给`client_JSON`变量。

如果我们打印这个字符串，会看到如下输出：

```python
{"name": "Nora", "age": 56, "id": "45355", "eye_color": "green", "wears_glasses": false}
```

💡 **提示：**请注意，最后一个值（`false`）已更改。在Python字典中，此值为`False`，但在JSON中等效值为`false`，这有助于我们确认原始字典现在确实已经表示为JSON格式的字符串。

如果我们检查此变量（`client_JSON`）的数据类型，我们会看到：

```python
<class 'str'>
```

所以这个函数的返回值确实是一个字符串。

### Python到JSON：类型转换

当我们将字典转换为JSON字符串时，也会发生类型转换过程。来自[Python文档](https://docs.python.org/3/library/json.html#json.JSONEncoder)的这张表显示了二者相对应的值：

![image-81](https://www.freecodecamp.org/news/content/images/2020/10/image-81.png)

表格来自[官方json模块文档](https://docs.python.org/3/library/json.html#json.JSONEncoder)。

### 如何使用缩进打印JSON数据

如果我们使用`dumps`函数打印上一示例中得到的字符串，我们会看到：

```python
{"name": "Nora", "age": 56, "id": "45355", "eye_color": "green", "wears_glasses": false}
```

但是这样可读性不是很高，对吧？

我们可以通过添加**缩进**来提高JSON字符串的可读性。

我们只需传递第二个参数来指定要用于JSON字符串缩进的空格数，（`dumps`函数）就会自动执行此操作：

![image-111](https://www.freecodecamp.org/news/content/images/2020/10/image-111.png)

**💡 提示：**第二个参数必须是非负整数（表示空格数）或字符串，如果`indent`是一个字符串（例如`"\t"`），则用该字符串缩进每个级别（[帮助文档](https://docs.python.org/3/library/json.html#json.dump)).

现在，如果我们使用第二个参数来调用`dumps`：

```python
client_JSON = json.dumps(client, indent=4)
```

打印`client_JSON`的结果是：

```python
{
    "name": "Nora",
    "age": 56,
    "id": "45355",
    "eye_color": "green",
    "wears_glasses": false
}
```

这很棒，对吧？现在我们的字符串格式很好看，这对我们处理存储人类可读格式的数据的文件来说将非常有用。

### 如何对键排序

如果有需要，还可以按字母顺序对键进行排序，只需写入参数`sort_keys`并传递值`True`：

![image-84](https://www.freecodecamp.org/news/content/images/2020/10/image-84.png)

💡 **提示：**如果不传递值，`sort_keys`默认为`False`。

例如：

```python
client_JSON = json.dumps(client, sort_keys=True)
```

将会返回键按字母顺序排序的JSON字符串：

```python
{"age": 56, "eye_color": "green", "id": "45355", "name": "Nora", "wears_glasses": false}
```

### 如何同时按字母排序和使用缩进

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
