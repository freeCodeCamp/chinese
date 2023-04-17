> -  原文地址：[How to Pretty Print JSON in Python](https://www.freecodecamp.org/news/how-to-pretty-print-json-in-python/)
> -  原文作者：[Shittu Olumide](https://www.freecodecamp.org/news/author/shittuolumide/)
> -  译者：
> -  校对者：

![How to Pretty Print JSON in Python](https://www.freecodecamp.org/news/content/images/size/w2000/2023/04/Shittu-Olumide-How-to-Pretty-Print-JSON-in-Python.png)

JSON (JavaScript Object Notation) is a popular data interchange format that is widely used in web applications, APIs, and databases. It is a lightweight and human-readable format that is easy to parse and generate.

But when dealing with large and complex JSON data, it can be difficult to read and understand the structure of the data. This is where pretty printing comes in. Pretty printing is the process of formatting the JSON data in a way that makes it easier to read and understand.

In this article, we will explore how to pretty print JSON in Python using built-in and third-party libraries. We will also cover best practices used to pretty print JSON, and also talk about it's use cases.

## What Does Pretty Print Mean?

In Python, "pretty print" refers to formatting and presenting data structures such as lists, dictionaries, and tuples in a more readable and organized way.

To pretty print JSON in Python, we can use the built-in `json` module. This module provides a `dumps()` function that can serialize Python objects into a JSON formatted string.

By default, this function produces a JSON string without any formatting, but we can use the `indent` parameter to specify the number of spaces to use for indentation.

Here's an example of how to pretty print JSON in Python:

```python
import json

# Sample JSON data
data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Convert the data to a JSON formatted string with 4 spaces of indentation
json_str = json.dumps(data, indent=4)

# Print the pretty-printed JSON string
print(json_str)
```

Output:

```python
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

As you can see, the `indent` parameter is set to `4`, which produces a JSON string with each level of nesting indented by four spaces. We can adjust this parameter to control the amount of indentation in the output.

> Note that the `json.dumps()` function can also take other optional parameters, such as `sort_keys`, which can be used to sort the keys in the JSON output. For more information, see the documentation for the json module.

## Best Practices for Pretty Print JSON

### Use the `json` module

The `json` module is a built-in module in Python, which provides methods for working with JSON data. The `json.dumps()` method is used to serialize Python objects into a JSON formatted string. The `json.dumps()` method also has an optional `indent` parameter that can be used to specify the number of spaces to use for indentation.

Here's an example:

```python
import json

data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

json_str = json.dumps(data, indent=4)
print(json_str)
```

Output:

```python
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
```

### Use the `pprint` module

The `pprint` module is a built-in module in Python that provides a way to pretty print Python data structures. It also works with JSON data. The `pprint.pprint()` method is used to pretty print JSON data.

Here's an example:

```python
import json
import pprint

data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

pprint.pprint(data)
```

Output:

```python
{'age': 30, 'city': 'New York', 'name': 'John'}
```

### Use third-party libraries

There are many third-party libraries available in Python for pretty printing JSON data, such as `simplejson`, `ujson`, and `json5`. These libraries provide additional features such as faster serialization and deserialization, support for additional data types, and more flexible formatting options.

Here's an example using `simplejson`:

```python
import simplejson as json

data = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

json_str = json.dumps(data, indent=4, sort_keys=True)
print(json_str)
```

Output:

```python
{
    "age": 30,
    "city": "New York",
    "name": "John"
}
```

## Pretty Print JSON in Python Use Cases

1.  **Debugging JSON data**: When working with JSON data, it can be challenging to read and understand the structure of the data if it is not well-formatted. Pretty printing JSON data in Python can help us to quickly identify any issues with the data and debug our code more efficiently.
2.  **Displaying JSON data in user interfaces**: If we are building a web application or a mobile app that displays JSON data to the user, pretty printing can enhance the user experience by making the data more readable and presentable.
3.  **Sharing JSON data with team members**: If we are working on a project with other team members and need to share JSON data with them, pretty printing the data can make it easier for them to understand the data and work with it.
4.  **Logging JSON data**: If we are logging JSON data in our Python application, pretty printing the data can make it easier to read and analyze the logs.

## Conclusion

Pretty printing JSON in Python is an important skill to have for anyone working with JSON data.

In this tutorial, we learned how to use the `json` module in Python to pretty print JSON as well as the `pprint` module. With just a few lines of code, we can generate well-formatted JSON output that is easy to read and navigate.

Let's connect on [Twitter](https://www.twitter.com/Shittu_Olumide_) and on [LinkedIn](https://www.linkedin.com/in/olumide-shittu). You can also subscribe to my [YouTube](https://www.youtube.com/channel/UCNhFxpk6hGt5uMCKXq0Jl8A) channel.

********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************Happy Coding!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************