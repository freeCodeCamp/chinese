> * 原文地址：[Java Array Methods – How to Print an Array in Java Java 数组的打印方式](https://www.freecodecamp.org/news/java-array-methods-how-to-print-an-array-in-java/)
> * 作者：Thanoshan MV
> * 译者：Tengfei Wang
> * 校对者：

![Java Array Methods – How to Print an Array in Java](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/Untitled-design--1-.png)

An array is a data structure used to store data of the same type. Arrays store their elements in contiguous memory locations.  
数组是一种用来保存相同数据类型的数据结构。 数组的元素在内存中是连续存储的。  

In Java, arrays are objects. All methods of class object may be invoked in an array. We can store a fixed number of elements in an array.  
在 Java 中，数组即对象。类的所有方法都被放进数组中调用。 我们可以指定固定长度的数组。  

Let’s declare a simple primitive type of array:  
声明一个基本数据类型数组：
```Java
int[] intArray = {2,5,46,12,34};
```

Now let’s try to print it with the  `System.out.println()`  method:  
尝试使用 `System.out.println()` 方法打印数组：

```Java
System.out.println(intArray);
// output: [I@74a14482
```

Why did Java not print our array? What is happening under the hood?  
为什么 Java 没有打印出来数组数据呢？背后发生了什么？  

The  `System.out.println()`  method converts the object we passed into a string by calling  `String.valueOf()`  . If we look at the  `String.valueOf()`  method’s implementation, we'll see this:  
方法 `System.out.println()` 通过调用 `String.valueOf()` 把对象转为一个字符串。 如果我们查看 `String.valueOf()` 方法的实现，会看到如下的代码：

```Java
public static String valueOf(Object obj) {
    return (obj == null) ? "null" : obj.toString();
}
```

If the passed-in object is  `null`  it returns null, else it calls  `obj.toString()`  . Eventually,  `System.out.println()`  calls  `toString()`  to print the output.  
如果对象是 `null` 方法会返回空， 其它情况调用 `obj.toString()` 。 最终 `System.out.println()` 调用 `toString()` 方法打印出了字符串。

If that object’s class does not override  `Object.toString()`'s implementation, it will call the  `Object.toString()`  method.  
如果当前类没有重写 `Object.toString()` 的实现， 那就会调用超类 `Object` 的 `Object.toString()` 方法。

`Object.toString()`  returns  `getClass().getName()+****‘@’****+Integer.toHexString(hashCode())`  . In simple terms, it returns: “class name @ object’s hash code”.  
`Object.toString()`  返回的格式是  `getClass().getName()+****‘@’****+Integer.toHexString(hashCode())` 。 简单来说是： “class name @ object’s hash code”。

In our previous output  `[I@74a14482`  , the  `[`  states that this is an array, and  `I`  stands for int (the type of the array).  `74a14482`  is the unsigned hexadecimal representation of the hash code of the array.  
上文中输出的内容是 `[I@74a14482` ， `[` 表示这是一个数组， `I` 表示数组的数据类型是int。 `74a14482` 是数组的无符号十六进制hash值。

Whenever we are creating our own custom classes, it is a best practice to override the  `Object.toString()`  method.  
当我们创建自定义类时，重写 `Object.toString()` 方法是最佳的实践。

We can not print arrays in Java using a plain  `System.out.println()`  method. Instead, these are the following ways we can print an array:  
在 Java 中我们不能简单的使用 `System.out.println()` 方法打印数组。 相反，接下来的几种方法可以打印：

1. 循环：for 循环和 for-each 循环
2. `Arrays.toString()` 方法
3. `Arrays.deepToString()` 方法
4. `Arrays.asList()` 方法
5. Java Iterator interface
6. Java Stream API

Let’s see them one by one.
接下来我们依次看下效果。

# 1\. 循环：for 循环和 for-each 循环

for 循环示例：

```Java
int[] intArray = {2,5,46,12,34};


```

All wrapper classes override  `Object.toString()`  and return a string representation of their value.
所有的包装类都重写了 `Object.toString()` ，返回数组内容的字符串。

And here's a for-each loop:
for-each 循环示例：

```Java
int[] intArray = {2,5,46,12,34};

```

# 2\. Arrays.toString() 方法

`Arrays.toString()` 是 `java.util` 包里数组类的一个静态方法。它返回指定数组内容的字符串形式。我们可以使用这种方法打印一维数组。

使用 `String.valueOf()` 方法将数组元素转换为字符串，例如：

```Java
int[] intArray = {2,5,46,12,34};
System.out.println(Arrays.toString(intArray));
// output: [2, 5, 46, 12, 34]
```

For a reference type of array, we have to make sure that the reference type class overrides the  `Object.toString()`  method.
对于引用类型的数组，需要重写该引用类型的 `Object.toString()` 方法。

For example:
例如：

```Java
public class Test {
    public static void main(String[] args) {
        Student[] students = {new Student("John"), new Student("Doe")};
    System.out.println(Arrays.toString(students));
    // output: [Student{name='John'}, Student{name='Doe'}]
}}
class Student {
    private String name;
public Student(String name){
    this.name = name;
}

public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

@Override
public String toString() {
    return "Student{" + "name='" + name + '\'' + '}';
}
```

This method is not appropriate for multidimensional arrays. It converts multidimensional arrays to strings using  `Object.toString()`  which describes their identities rather than their contents.
此方法不适用于多维数组。在多维数组中， `Object.toString()` 会打印数组对象的内存地址而不是内容。

For example:
例如：

```Java
// creating multidimensional array
int[][] multiDimensionalArr = { {2,3}, {5,9} };

```

With the help of  `Arrays.deepToString()`, we can print multidimensional arrays.
使用 `Arrays.deepToString()` 可以打印多维数组。

# 3\. Arrays.deepToString() 方法

`Arrays.deepToString()`  returns a string representation of the “deep contents” of the specified array.
`Arrays.deepToString()` 返回数组“深层内容”的字符串形式。

If an element is an array of primitive type, it is converted to a string by invoking the appropriate overloading of  `Arrays.toString()`  .
对于基本类型数组，通过重载调用 `Arrays.toString()` 方法将其转换为字符串。

Here is an example of the primitive type of multidimensional array:
基本类型多维数组示例：

```Java
// creating multidimensional array
int[][] multiDimensionalArr = { {2,3}, {5,9} };

```

If an element is an array of reference type, it is converted to a string by invoking  `Arrays.deepToString()`  recursively.
对于引用类型数组，通过递归调用 `Arrays.deepToString()` 方法将其转换为字符串。

```Java
Teacher[][] teachers = 
{{ new Teacher("John"), new Teacher("David") }, {new Teacher("Mary")} };

```

We have to override  `Object.toString()`  in our Teacher class.
我们在 Teacher 类中重写了 `Object.toString()` 方法。

If you are curious as to how it does recursion, here is the  [source code][1]  for the  `Arrays.deepToString()`  method.
如果你对递归调用感兴趣，请查看 `Arrays.deepToString()` 方法的[源码][1]。

**NOTE:**  引用类型的一维数组也可以用 `Arrays.deepToString()` 方法打印。 例如:

```Java
Integer[] oneDimensionalArr = {1,4,7};

System.out.println(Arrays.deepToString(oneDimensionalArr));
// output: [1, 4, 7]
```

# 4\. Arrays.asList() 方法

This method returns a fixed-size list backed by the specified array.
此方法返回固定大小（数组长度）的列表。

```Java
Integer[] intArray = {2,5,46,12,34};

```

We have changed the type to Integer from int, because List is a collection that holds a list of objects. When we are converting an array to a list it should be an array of reference type.
因为 List 是对象列表的集合，所以数据类型由 int 变为 Integer。当我们把数组转换为列表时，数组应该是引用类型。

Java calls  `Arrays.__asList__(intArray).toString()`  . This technique internally uses the  `toString()`  method of the type of the elements within the list.
Java 调用 `Arrays.__asList__(intArray).toString()` 。内部实现是列表元素调用了 `toString()` 方法。

Another example with our custom Teacher class:
Teacher 类示例：

```Java
Teacher[] teacher = { new Teacher("John"), new Teacher("Mary") };

```

**NOTE:**  不能使用此方法打印多维数据。 例如：

```Java
Teacher[][] teachers = 
{{ new Teacher("John"), new Teacher("David") }, { new Teacher("Mary") }};
System.out.println(Arrays.asList(teachers));

```

# 5\. Java Iterator interface

Similar to a for-each loop, we can use the Iterator interface to loop through array elements and print them.
类似于 for-each 循环，可以使用 Iterator 接口遍历数组元素并打印。

Collection 调用 `iterator()` 方法创建 Iterator 对象。Iterator 对象可以遍历该集合的元素。

Iterator 接口打印数组示例：

```Java
Integer[] intArray = {2,5,46,12,34};
// creating a List of Integer
List<Integer> list = Arrays.asList(intArray);
// creating an iterator of Integer List
Iterator<Integer> it = list.iterator();

```

# 6\. Java Stream API

Stream API 用于处理对象集合。 流是一个对象序列。流不能改变原始数据结构，它仅根据请求的操作提供结果。

借助终端操作 `forEach()` 可以遍历流的每个元素。

例如：

```Java
Integer[] intArray = {2,5,46,12,34};

Arrays.stream(intArray).forEach(System.out::print);
// output: 25461234
```

现在就掌握了 Java 数组的打印方式。

感谢阅读。

封面图片来自 [Aziz Acharki][2]  on  [Unsplash][3]。

我的另一篇文章  [Medium][4]。

****Happy Coding!****

[1]: http://hg.openjdk.java.net/jdk8u/jdk8u/jdk/file/be44bff34df4/src/share/classes/java/util/Arrays.java#l4611
[2]: https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[3]: https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[4]: https://medium.com/@mvthanoshan9/object-oriented-programming-principles-in-java-820919dced1a
