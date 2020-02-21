> * 原文地址：[Learning Python: From Zero to Hero](https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567/)
> * 原文作者：TK
> * 译者：MMMAY521
> * 校对者：

![Learning Python: From Zero to Hero](https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png)
Python学习：从小白到大神(https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png)
作者：TK
第一个问题：Python是什么？创始人吉多*范苏罗姆认为，Python是一种
>“高级编程语言，其核心设计哲学强调代码的可读性和句法，因此几行代码就能够表达程序员的想法。”
为什么我要学Python呢？一个原因在于，Python非常美妙，Python语言可以相当自然流畅地表达我的想法。
另一个原因就是，Python编程在很多方面都大有可为，包括但不限于数据科学、网站开发、机器学习。Quora， Pinterest和Spotify的后端网站开发都在使用Python。因此，让我们一同来学习Python吧。
### 基础知识

#### 1\. 变量

很简单，你可以把变量理解成储存值的代码。

在Python中，定义一个变量、给变量赋值十分简单。例如：给变量"one"赋值1，代码如下：

```py
one = 1
```

这样就可以把1赋值给变量"one"了，很简单吧。

```py
two = 2
some_number = 10000
```

你可以把任意数值赋值给你想要的任意变量。如上述代码，整数2赋值给了变量"two"，整数10000赋值给了变量"some\_number"。

除了整数，布尔值（True / False）、字符串、浮点数和其他数据类型也可以赋值给变量。

```py
# booleans
true_boolean = True
false_boolean = False

# string
my_name = "Leandro Tk"

```

#### 2\. 控制语句：条件判断

"If"条件语句检验条件真假。如果条件为真，执行if后面的条件。举个例子：

```py
if True:
  print("Hello Python If")

```

2比1大，条件为真，所以执行print后面的程序。

如果if后面的条件语句为假，则执行else后面的语句。

```py
if 1 > 2:
  print("1 is greater than 2")
else:
  print("1 is not greater than 2")
```

1小于2，条件为假，所以执行else后面的语句。

也可以使用elif语句：

```py
if 1 > 2:
  print("1 is greater than 2")
elif 2 > 1:
  print("1 is not greater than 2")
else:
  print("1 is equal to 2")
```

#### 3\. 循环/迭代

Python有很多不同的循环/迭代模式。今天说两个：while循环和for循环。

while循环：当条件为真，while模块语句执行。我们可以用while循环来输出1-10这几个数字。

```py
num = 1

```

while循环需要循环条件。如果循环条件为真，循环继续。上述代码表明，num值为11时，循环条件为假，循环停止。

另外一种代码形式可以更好的理解循环条件：

```py
loop_condition = True

```

循环条件为真，循环继续，直到循环条件为假。

for循环：模块语句运用"num"变量时，for循环迭代变量。for循环代码可以跟while循环一样输出数字1-10。

```py
for i in range(1, 11):
  print(i)
```

看见了吧，就是这么简单。整数数列range()循环从1开始，直到第十一个元素停止循环（输出元素截止到第十个）。

### 列表（List）：集合（Collection）|数组（Array）|数据结构（Data Structure）

设想一下你需要把整数1储存在一个变量中。但现在可能你想储存2，甚至储存3,4,5……

是否有一种方式可以避免将我所想要的所有的整数存在不计其数的变量当中？——确实有。

列表（List）这种集合就可以用来储存一系列的数值，例如上述你想要的整数集合。

```py
my_integers = [1, 2, 3, 4, 5]
```

很简单——我们创建了一个数组（Array），并把它存在了**my\_integer**当中。

现在你可能要问了：怎样才可以从数组中取一个数值呢？

问得好。列表中有个概念，叫index。列表中的第一个元素为index 0，第二个是index 1，依次类推。

更简单来说，我们可以用index来指代数组中的每个元素。

![](https://cdn-media-1.freecodecamp.org/images/1*ReMk6NgghLII20vPD6uNEA.jpeg)

Python句法比较容易理解：

```py
my_integers = [5, 7, 1, 3, 4]
print(my_integers[0]) # 5
print(my_integers[1]) # 7
print(my_integers[4]) # 4
```

如果不需要储存整数，而是要储存字符串，比如亲戚的名字，我家的亲戚名字如下：

```py
relatives_names = [
  "Toshiaki",
  "Juliana",
  "Yuji",
  "Bruno",
  "Kaio"
]

```

跟储存整数句法一致。

我们刚学习了列表中的各个元素如何工作。但我还需要告诉你们如何向列表中添加元素（向列表添加一个事项）。

最常见的方法是运用append函数。我们一起来看看如何运用。

```py
bookshelf = []
bookshelf.append("The Effective Engineer")
bookshelf.append("The 4 Hour Work Week")
print(bookshelf[0]) # The Effective Engineer
print(bookshelf[1]) # The 4 Hour Work Week
```

append函数特别简单，只需要将元素添加为append的参数（正如"The Effective Engineer"）。

有关列表的知识就说到这里。我们一起来看看另外一个数据结构。

### 字典（Dictioary）：键-值(Key-Value)数据结构

现在我们知道列表用整数来索引。但是，如果我们不想用整数来索引，那我们可以使用其他的数据结构，例如数值、字符串等来进行索引。

我们一起来学习一下字典(Dictionary)数据结构。字典使用键-值(key-value)存储。具体使用方法如下：

```py
dictionary_example = {
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```

元素key指向value。那运用key，就可以得到字典中的value。让我们试一下：

```py
dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian"
}

```

我创建了一个关于我自己的一个字典，包括有我的名字、绰号和国籍。这些属性就是字典中的key。

我们刚已经学过了如何运用索引得到列表中的值，那我们也可以运用索引（即字典中的key）来得到字典中value的存放位置。

例子当中，我用存储在字典中的value输出了一个关于我的短语。很简单吧~

字典还有一个很酷的属性，就是value的值可变。在我创建的字典中，我想要增加我的年龄"age"作为一个key，并且存入我年龄的整数值。

```py
dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian",
  "age": 24
}

```

现在key-value当中，key是字符串，value是整数。

跟列表一样，现在我们要学习如何向字典中添加元素。key指向value是字典的一大组成。向字典中添加元素时也是如此。

```py
dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian"
}
dictionary_tk['age'] = 24

```

一点都不复杂：我们只需要在字典中设定一个value，并且对应一个key就可以了。

### 迭代：数据结构中的循环

正如我们在Python基础[1]中学到的内容，列表迭代非常简单。我们这些用Python开发的程序员通常使用for循环。一起来做：

```py
bookshelf = [
  "The Effective Engineer",
  "The 4-hour Workweek",
  "Zero to One",
  "Lean Startup",
  "Hooked"
]

```

所以我们输出了书架上的每一本书（但我们能做的远不止于此）。这就是Python——简单且直观。

对于哈希数据结构而言，我们也可以使用for循环，但同时我们应该用到key：

```py
dictionary = { "some_key": "some_value" }
for key in dictionary:
    print("%s --> %s" %(key, dictionary[key]))

```

这个例子就解释了如何在for循环中使用key。我们可以输出字典中的每个key以及其对应的value。

还可以使用iteritems方法。

```py
dictionary = { "some_key": "some_value" }
for key, value in dictionary.items():
    print("%s --> %s" %(key, value))

```

我们将这两个参数命名为key和value，但这不是必须。我们也可以有其他命名。比如说：

```py
dictionary_tk = {
  "name": "Leandro",
  "nickname": "Tk",
  "nationality": "Brazilian",
  "age": 24
}
for attribute, value in dictionary_tk.items():
    print("My %s is %s" %(attribute, value))

```

可以看到，例子中我们用attribute替代了key，代码同样运行流畅。真棒！

### 类和对象

#### 理论先导：

对象(object)代表了真实世界当中的实体，例如汽车、狗狗、自行车等。这些对象有两个主要特点：数据(data)和行为(behavior)。

汽车包含有数据，比如轮胎数量、车门数量、座位数量。汽车也有一定行为，例如他们可以加速，可以停下，可以显示燃油剩余量等等。

在面向对象的程序设计中，我们将数据看做属性(attribute)，将行为看做方法(method)。

数据→属性&行为→方法

类从对象中抽象而来。真实世界当中，一种类型下有很多物体，比如汽车。所有汽车的制作过程基本一致，设计模型也相差无几，都有引擎、轮胎等等。每辆汽车都是同一批设计图纸的产物，有着相同的零部件。

#### Python面向对象的程序设计模式：ON

面向对象的程序设计语言——Python，有类和对象这两个概念。

类是对象的模板，是对对象的抽象。

所以，类就是一种模型，一种定义属性和行为的方式（正如理论部分所讲）。举个例子，车辆这种类就有它自己的属性，属性能够定义什么对象是车辆。轮胎数量、油箱类型、座位数量、最高时速等等，都是车辆的属性。

有了这些前提，我们一起来看看Python中类的表达句法：

```py
class Vehicle:
    pass
```

我们用类语句来定义类。

对象是类的实体，是类的表现形式。通过命名类，我们可以创建实体。

```py
car = Vehicle()
print(car) # <main.Vehicle instance at 0x7fb1de6c2638>
```

这里的car就是Vehicle类中的一个对象。

记住，我们的Vehicle类中有四个属性：车轮数量、邮箱类型、座位数量和最高时速。创建一种车辆对象时我们便设置好这些属性。所以这里，一开始我们就定义类来接收数据。

```py
class Vehicle:
    def init(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity
```

**我们运用了'init'这种构造方法。所以创建车辆对象时，我们可以便定义这些属性。设想，我们喜欢**Tesla Model S,**，自然而然我们便想创建这样一种对象。这个对象有四个车轮，由电力驱动，有四个车座，最高时速可达250km，合每小时155英里。那我们就来创建这个对象：

```py
tesla_model_s = Vehicle(4, 'electric', 5, 250)
```

属性包括四个车轮、用电驱动、五个车座、250km的最高时速。

所有属性都已经设置完毕。但是我们怎么获得这些属性的值呢？这就需要“向对象发送一条信息询问”，我们把这一过程称为“方法”(method)，也就是“对象的行为”。我们来做一下：

```py
class Vehicle:
    def init(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">number_of_wheels</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>number_of_wheels

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">set_number_of_wheels</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> number<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>number_of_wheels <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> number</code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">This is an implementation of two methods:<span> </span><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: rgb(27, 27, 50);">number_of_wheels</strong><span> </span>and<span> </span><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: rgb(27, 27, 50);">set_number_of_wheels</strong>. We call it<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">getter</code><span> </span>&amp;<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">setter</code>. Because the first gets the attribute value, and the second sets a new value for the attribute.</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">In Python, we can do that using<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">@property</code><span> </span>(<code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">decorators</code>) to define<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">getters</code><span> </span>and<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">setters</code>. Let’s see it with code:</p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">class</span> <span class="token class-name" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">Vehicle</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">__init__</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> number_of_wheels<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> type_of_tank<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> seating_capacity<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> maximum_velocity<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>number_of_wheels <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> number_of_wheels
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>type_of_tank <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> type_of_tank
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>seating_capacity <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> seating_capacity
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>maximum_velocity <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> maximum_velocity

@<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">property</span>
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">number_of_wheels</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>__number_of_wheels

@number_of_wheels<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>setter
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">number_of_wheels</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> number<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>__number_of_wheels <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> number</code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">And we can use these methods as attributes:</p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">tesla_model_s <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Vehicle<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">4</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'electric'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">5</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">250</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

这个跟定义“方法”不太一样。这种情况下，“方法”作为参数运转。举个例子，设定车轮数量时，我们不是把“2”作为参数，而是把“2”赋值给“车轮数量”这一属性。而这也是写pythonic，getter和setter代码的一种方法。

当然“方法”也有其他用途，以"**make\_noise**"方法为例：
```py
class Vehicle:
    def init(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">make_noise</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">print</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'VRUUUUUUUM'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">When we call this method, it just returns a string<span> </span><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: rgb(27, 27, 50);"><em style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: rgb(27, 27, 50);">“</em>VRRRRUUUUM.<em style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: italic; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; color: rgb(27, 27, 50);">”</em></strong></p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">tesla_model_s <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Vehicle<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">4</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'electric'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">5</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">250</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

### 封装：隐藏信息

封装机制限制对象数据和方法的直接访问。但同时，封装有利于数据（对象的方法）层面的操作。

> 维基百科上说：“封装可以用来隐藏数据成员和成员函数。封装意味着对象[2]的内部实现通常被隐藏，并由定义替代。”

对象的内部实现都被隐藏，只有对象本身可以和内部数据互动。

首先，我们需要理解公共(public)和非公共(non-public)实例变量以及方法是如何工作。

#### 公共实例变量

对于Python当中的类而言，我们在构造方法中预置一个公共实例变量，如下：

在构造方法内部：

```py
class Person:
    def init(self, first_name):
        self.first_name = first_name
```

我们将"first_name"的值赋给公共实例变量。

```py
tk = Person('TK')
print(tk.first_name) # => TK
```

在类当中，如果我们直接给first_name赋值：

```py
class Person:
    first_name = 'TK'
```

那我们就不需要再给变量赋值，因为所有的实例对象都会有初始化的类属性——"TK".

```py
tk = Person()
print(tk.first_name) # => TK
```

现在我们已经学过了如何使用公共实例变量和类属性。公共实例变量还有一个特点，就是可变。什么意思呢？就是我们的对象可以通过"Get"和"Set"变量值来管理自身变量值。

脑子里想象一个"Person"类，我们想要给这个类当中的"first_name"变量设定一个值：

```py
tk = Person('TK')
tk.first_name = 'Kaio'
print(tk.first_name) # => Kaio
```

我们将"Kaio"赋值给"first_name"这个实例变量，实例变量随之更新。原因就在于，这是一个公共变量。

#### 非公共实例变量

> We don’t use the term “private” here, since no attribute is really private in Python (without a generally unnecessary amount of work). —  [PEP 8][3]因为Python（没有一大堆不必要的工作时）当中没有一个变量完全私有不公开，所以我们这里使用了非公共(non-public)这个词，而没用使用私有(private)这个词。[PEP 8][3]

跟公共实例变量无异，我们也可以在构造方法和类当中定义非公共实例变量。句法差异在于：对于非公共实例变量而言，需要在变量名字前使用"_".

> 根据Python软体基金会[4]，“Python中不存在“私有”(private)实例变量，除了在对象内部，否则不能得到私有实例变量。然而，Python中大多数代码都遵循一条惯例：无论是函数、方法或者数据成员，只有其名字前有一条下划线（例如"_spam_"_），它就可以被视为API（应用编程接口）的非公共部分。”


例子如下：

_`class Person:
    def __init_`_`(self, first_name, email):
        self.first_name = first_name
        self._email = email_`

看见"email"变量了吧，这就是定义非公共变量的方式。

_`tk = Person('TK', 'tk@mail.com')
print(tk._email) # [tk@mail.com][5]_`_

>我们可以获得并且更新非公共变量。非公共变量只是一种约定俗成，不应被当做API的非公共部分。

所以我们采用一种方法，可以让我们在类的定义中将非公共变量当做非公共部分。两个方法("email" & "update_email")可帮助理解：

__`class Person:
    def __init`__`(self, first_name, email):
        self.first_name = first_name
        self._email = email

```
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">update_email</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> new_email<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_email <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> new_email

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">email</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_email</code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">Now we can update and access<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">non-public variables</code><span> </span>using those methods. Let’s see:</p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">tk <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Person<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'TK'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'tk@mail.com'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

`

`print(tk.email()) # => [tk@mail.com][6]
# tk._email = 'new_tk@mail.com' -- treat as a non-public part of the class API_ _print(tk.email()) # => [tk@mail.com][7]
tk.update_email('new_tk@mail.com')
print(tk.email()) # => [new_tk@mail.com][8]_`

1.  我们引入了一个新对象，包括"first_name"和"email"[tk@mail.com][9]。
2.  我们用一种方法得到了非公共变量，输出了"email"。
3.  我们试图在类之外设置一个新的"email"。
4.  我们需要将非公共变量视作API的非公共部分。
5.  运用实例方法更新了非公共变量。
6.  大功告成！可运用助手方法(the helper method)在类中更新。

#### 公共方法

公共方法也可以在类之外使用。

_`class Person:
    def __init_`_`(self, first_name, age):
        self.first_name = first_name
        self._age = age

```
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">show_age</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_age</code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">我们来测试一下：</p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">tk <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Person<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'TK'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">25</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

`

`print(tk.show_age()) # => 25`

棒极了！这样用没有任何问题。

#### 非公共方法

非公共方法无法在类之外使用。我们要用到同一个"Person"类，用下划线表示添加非公共方法"show_age"。

```py
class Person:
    def init(self, first_name, age):
        self.first_name = first_name
        self._age = age
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">_show_age</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_age</code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">And now, we’ll try to call this<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">non-public method</code><span> </span>with our object:</p><pre class=" language-py" style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; color: rgb(27, 27, 50); background: rgb(238, 238, 240); text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; overflow: auto; min-width: 100%; max-width: 100%;"><code class=" language-py" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; color: rgb(0, 0, 0); background: transparent; text-shadow: rgb(255, 255, 255) 0px 1px; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;">tk <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Person<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">'TK'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 0, 85);">25</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

> 我们可以得到并且更新非公共方法。这一方法是一个惯例，应该被视为API中的非公共部分。

下面的例子显示了非公共方法的使用过程：

_`class Person:
    def __init_`_`(self, first_name, age):
        self.first_name = first_name
        self._age = age

```
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">show_age</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_get_age<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>

<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">_get_age</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_age
```

`

`tk = Person('TK', 25)
print(tk.show_age()) # => 25`

这里我们既有非公共方法"_get_age_"，也有公共方法"show_age"。"show_age"可以在类之外由我们的对象使用，但是"_get_age_"只能在类定义（"show_age"方法之内）之内使用。需再次强调，非公共方法是一种约定俗成。

#### 封装总结

封装可以确保对象的内部实现被隐藏。

### 继承：行为和特点

特定对象的共同点在于他们的行为和特点。

比如说，我继承了我父亲的一些特点和行为。特点方面，我有跟父亲一样的大眼睛和头发；行为方面，我跟父亲一样缺乏耐心，性格内向。

在面向对象的程序设计中，类可以从其他的类中继承共同的特点（即数据）和行为（即方法）。

下面这个例子可以用在Python中。

想象有一辆汽车。汽车的属性包括车轮数量、车座数量和最高时速。那“电动汽车”类就可以从常规“汽车”类继承一些共有属性。

__`class Car:
    def __init_`_`(self, number_of_wheels, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity`_

我们的“汽车”类就可以直接使用这些属性：

_`my_car = Car(4, 5, 250)
print(my_car.number_of_wheels)
print(my_car.seating_capacity)
print(my_car.maximum_velocity)`_

开始后，我们就可以使用所有创建好的“实例变量”。

Python中，我们将父类(parent class)作为参数应用到子类(child class)中，好比“电动汽车”类可以从“车类”继承行为和特点。

_`class ElectricCar(Car):
    def **init**(self, number_of_wheels, seating_capacity, maximum_velocity):
        Car.**init**(self, number_of_wheels, seating_capacity, maximum_velocity)`_

不难吧。因为从“车”类继承过来的方法，我们无需再使用其他任何方法。验证一下：

_`my_electric_car = ElectricCar(4, 5, 250)
print(my_electric_car.number_of_wheels) # => 4
print(my_electric_car.seating_capacity) # => 5
print(my_electric_car.maximum_velocity) # => 250`_

一个字：爽！

### 大概就这么多。

总结一下我们学习的Python基础知识：

-   变量如何工作
-   条件语句
-   while循环 & for循环
-   列表：集合|数组
-   字典键-值集合
-   数据结构如何迭代
-   对象和类
-   属性作为对象数据
-   方法作为对象行为
-   如何运用Python中的getters setters和property decorator
-   封装：隐藏信息
-   继承：行为和特点

祝贺你！你已经完成这一部分的Python学习！

如果你想学习完整的Python课程，学习更多的编程技巧，学习如何搭建项目，试着点击[**One Month Python Bootcamp_**]。期待看见你的身影☺~

想具体了解我的编程学习历程，可以关注我的网站[**The Renaissance Developer**][11]。

希望你笑口常开，终身学习，坚持编程。

_<a href="[https://twitter.com/LeandroTk][12]_" rel="noopener" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; background-color: transparent; color: rgb(10, 10, 35); text-decoration: underline; cursor: pointer; word-break: break-word;">[13]. ☺欢迎关注我的Twitter[https://twitter.com/LeandroTk]和GitHub[https://github.com/LeandroTk]。

[1]: https://medium.com/the-renaissance-developer/python-101-the-basics-441136fb7cc3
[2]: https://en.wikipedia.org/wiki/Object_(computer_science)
[3]: https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance
[4]: https://docs.python.org/2/tutorial/classes.html#private-variables-and-class-local-references
[5]: mailto:tk@mail.com
[6]: mailto:tk@mail.com
[7]: mailto:tk@mail.com
[8]: mailto:new_tk@mail.com
[9]: mailto:tk@mail.com
[10]: https://onemonth.com/courses/python?campaignid=33447&discount_code=TKPython1&mbsy=lG6tv&mbsy_source=7d89eeb0-0031-478c-a60c-6a96d762712a
[11]: https://medium.com/the-renaissance-developer
[12]: https://twitter.com/LeandroTk
[13]: https://github.com/LeandroTk
