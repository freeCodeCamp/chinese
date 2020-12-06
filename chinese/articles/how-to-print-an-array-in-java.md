
> * 原文地址：[Java Array Methods – How to Print an Array in Java Java 数组的打印方式](https://www.freecodecamp.org/news/java-array-methods-how-to-print-an-array-in-java/)
> * 作者：Thanoshan MV
> * 译者：Tengfei Wang
> * 校对者：

![Java Array Methods – How to Print an Array in Java](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/Untitled-design--1-.png)

数组是一种用来保存相同数据类型的数据结构。 数组的元素在内存中是连续存储的。  

Java 中数组即对象。类的所有方法都被放进数组中调用。我们可以声明一个指定长度的数组。  

声明一个基本数据类型数组：

```Java
int[] intArray = {2,5,46,12,34};
```


现在尝试使用 `System.out.println()` 方法打印数组：


```Java
System.out.println(intArray);
// output: [I@74a14482
```

为什么 Java 没有打印出来数组数据呢？背后发生了什么事情？  


方法 `System.out.println()` 通过调用 `String.valueOf()` 把入参对象转换为一个字符串。 如果我们查看 `String.valueOf()` 方法的实现，会看到如下的代码：


```Java
public static String valueOf(Object obj) {
    return (obj == null) ? "null" : obj.toString();
}
```


如果入参是 `null` 会返回空， 其它情况会调用 `obj.toString()`。 最后 `System.out.println()` 调用 `toString()` 方法打印出了字符串。

如果对象的类没有重写 `Object.toString()` 方法并实现，那就会调用超类 `Object` 的 `Object.toString()` 方法。

`Object.toString()` 返回的是 `getClass().getName()+****‘@’****+Integer.toHexString(hashCode())`。 简化格式为：“class name @ object’s hash code”。

上文中输出的内容是 `[I@74a14482`， `[` 表示数组， `I` 表示 int 数据类型（数组的数据类型）。 `74a14482` 是数组的无符号十六进制hash值。

当创建自定义类时，重写 `Object.toString()` 方法是最佳的实践。

Java 中我们不能简单的使用 `System.out.println()` 方法打印数组。 相反，下面的几种方法可以打印：

1. 循环：for 循环和 for-each 循环
2. `Arrays.toString()` 方法
3. `Arrays.deepToString()` 方法
4. `Arrays.asList()` 方法
5. Java Iterator interface
6. Java Stream API


让我们来学习如何使用他们吧。

# 1\. 循环：for 循环和 for-each 循环

for 循环示例：

```Java
int[] intArray = {2,5,46,12,34};

for(int i=0; i<intArray.length; i++){
    System.out.print(intArray[i]);
    // output: 25461234
}
```


Java 的包装类都重写了 `Object.toString()` ，返回数组元素的字符串形式。


for-each 循环示例：

```Java
int[] intArray = {2,5,46,12,34};

for(int i: intArray){
    System.out.print(i);
    // output: 25461234
}
```

# 2\. Arrays.toString() 方法


`Arrays.toString()` 是 `java.util` 包下数组类的一个静态方法。它返回指定数组内容的字符串形式。这种方法可以用来打印一维数组。

数组元素被转换为字符串，调用了 `String.valueOf()` 方法，例如：


```Java
int[] intArray = {2,5,46,12,34};
System.out.println(Arrays.toString(intArray));
// output: [2, 5, 46, 12, 34]
```


对于引用类型的数组，确保重写该引用类的 `Object.toString()` 方法。


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


此方法不适用于多维数组。在多维数组中， `Object.toString()` 会打印数组元素的内存地址而不是内容。


例如：

```Java
// creating multidimensional array
int[][] multiDimensionalArr = { {2,3}, {5,9} };

System.out.println(Arrays.toString(multiDimensionalArr));
// output: [[I@74a14482, [I@1540e19d]
```


借助 `Arrays.deepToString()` 方法可以打印多维数组。


# 3\. Arrays.deepToString() 方法

`Arrays.deepToString()` 返回数组“深层内容”的字符串形式。

对于基本类型数组，通过重载调用 `Arrays.toString()` 方法将其转换为字符串。

基本类型多维数组示例：

```Java
// creating multidimensional array
int[][] multiDimensionalArr = { {2,3}, {5,9} };

System.out.println(Arrays.deepToString(multiDimensionalArr));
// output: [[2, 3], [5, 9]]
```

对于引用类型数组，通过递归调用 `Arrays.deepToString()` 方法将其转换为字符串。


```Java
Teacher[][] teachers =
{{ new Teacher("John"), new Teacher("David") }, {new Teacher("Mary")} };

System.out.println(Arrays.deepToString(teachers));
// output: 
[[Teacher{name='John'}, Teacher{name='David'}],[Teacher{name='Mary'}]]
```

我们在 Teacher 类中重写了 `Object.toString()` 方法。

如果你对递归调用感兴趣，请查看 `Arrays.deepToString()` 方法的[源码][1]。

**NOTE:**  引用类型的一维数组也可以用 `Arrays.deepToString()` 方法打印。 例如:


```Java
Integer[] oneDimensionalArr = {1,4,7};

System.out.println(Arrays.deepToString(oneDimensionalArr));
// output: [1, 4, 7]
```

# 4\. Arrays.asList() 方法

此方法返回固定大小（数组长度）的列表。

```Java
Integer[] intArray = {2,5,46,12,34};

System.out.println(Arrays.asList(intArray));
// output: [2, 5, 46, 12, 34]
```

因为 List 是对象列表集合，所以数据类型由 int 变为 Integer。当我们把数组转换为列表时，数组应该是引用类型。

Java 调用 `Arrays.__asList__(intArray).toString()` 。其内部实现是列表元素调用了 `toString()` 方法。


自定义 Teacher 类示例：

```Java
Teacher[] teacher = { new Teacher("John"), new Teacher("Mary") };

System.out.println(Arrays.asList(teacher));
// output: [Teacher{name='John'}, Teacher{name='Mary'}]
```

**NOTE:**  不能使用此方法打印多维数据。 例如：


```Java
Teacher[][] teachers =
{{ new Teacher("John"), new Teacher("David") }, { new Teacher("Mary") }};
System.out.println(Arrays.asList(teachers));

// output: [[Lcom.thano.article.printarray.Teacher;@1540e19d, [Lcom.thano.article.printarray.Teacher;@677327b6] 
```

# 5\. Java Iterator interface

Iterator 接口和 for-each 循环类似，可以使用 Iterator 接口遍历数组元素并打印。

Collection 调用 `iterator()` 方法创建 Iterator 对象。Iterator 对象可以遍历该集合的元素。


Iterator 接口打印数组示例：

```Java
Integer[] intArray = {2,5,46,12,34};

// creating a List of Integer
List<Integer> list = Arrays.asList(intArray);

// creating an iterator of Integer List
Iterator<Integer> it = list.iterator();

// if List has elements to be iterated
while(it.hasNext()) {
    System.out.print(it.next());
    // output: 25461234
}
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

现在我们掌握了 Java 数组的打印方式。

感谢阅读。

封面图片来自 [Aziz Acharki][2]  on  [Unsplash][3]。

我的另一篇文章  [Medium][4]。

\***\*Happy Coding!\*\***

[1]: http://hg.openjdk.java.net/jdk8u/jdk8u/jdk/file/be44bff34df4/src/share/classes/java/util/Arrays.java#l4611
[2]: https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[3]: https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[4]: https://medium.com/@mvthanoshan9/object-oriented-programming-principles-in-java-820919dced1a
