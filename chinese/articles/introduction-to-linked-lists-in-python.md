> -  原文地址：[Linked Lists in Python – Explained with Examples](https://www.freecodecamp.org/news/introduction-to-linked-lists-in-python/)
> -  原文作者：[Fakorede Damilola](https://www.freecodecamp.org/news/author/fakorede/)
> -  译者：Xiang Liao
> -  校对者：

![Linked Lists in Python – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/chain-3481377_1280.jpg)


不同的编程语言提供了不同的方式去存取数据。
有些你使用的数据结构例如数组，列表，映射，集合等等都是数据合集。
这些数据结构在存取数据上都做的非常好，但有些时候你需要不同的数据结构。另一个经常被用到的数据结构就叫链表。

## 什么是链表？

链表是一种以链的形式来存储数据的数据结构。链表的结构是这样的：每一个数据都与其后一个数据相连（有时候也与前一个数据相连）。链表中的每个元素都被称为一个结点。
你可以把它看作一个实际的链条，其中每一环或者结点都是相连的。
就像这样
![A-chain](https://www.freecodecamp.org/news/content/images/2022/09/A-chain.png)

就像其他所有的数据结构一样，链表也有它的优点和缺点


### 链表的优点
1. 因为链表是一个链式的数据结构，你可以快速地添加和移除其中的元素。并且这也不需要像数组或者列表那样来重新组织数据。线性的数据结构用链表来实现更加容易。
2. 同样因为它的链式结构，链表也不需要一个固定的或者初始的大小。




### 链表的缺点
1. 与数组相比，链表占用更多的内存空间。这是因为你需要一个占用额外内存空间的指针来指向下一个元素。
2. 在链表上执行搜索操作非常的慢。不像数组，你不能随机访问链表中的元素。


## 什么时候应该用链表呢？

在以下情况下，你应该使用链表而不是数组：
1. 你不知道数据列表中会有多少个元素（这是链表的一个优势 - 添加元素非常简单）。
2. 你不需要随机访问任何一个元素（与数组不同，你不能在链表中以一个特定的索引访问元素）。
3. 你想要在数据列表的中间插入元素。
4. 你需要以常数式时间从数据列表中插入和删除元素（与数组不同，你不需要先移动数据列表中的每一个其他元素）。


这些就是你在尝试实现一个链表前需要考虑的事情，

现在所有的理论都结束了，是时候去真正地实现一个链表了。我们将使用Python语言来实现，但在这里学到的大部分都可以应用到任何你使用的语言上。最重要的是理解其中的思想。


## 如何在Python中使用链表
这里有一个创建链表的技巧——它帮助我更好地理解链表。

你只需要意识到你将要添加到链表中的每一个元素都只是一个结点（就像链条中的一环）。**头结点**（链表中的第一个结点）的特殊之处在于你先确定一个**头结点**，然后再开始向它后面添加其他结点。


请记住一个链表就像一个链条是怎么连接在一起的。
这里是Joe和一些环，他会帮助我们去学习链表。

![Joe-and-the-chain](https://www.freecodecamp.org/news/content/images/2022/09/Joe-and-the-chain.png)

在接下来的内容，我会用这张图片去阐述一些事情。所以你可以将图片和文字联系起来思考（这不是艺术课 —— 我重复，这不是艺术课 :) ）。

所以让我们先创建结点吧。
```python
class Node:    
	def __init__(self,value):        
		self.value = value        
		self.next = None
```

  

就是这样。我们需要**value**这个成员是因为对于任何添加到链表中的元素，它或多或少有一个值（例如，除了极少情况外，你不会向数组中添加一个空字符串，不是吗？）
**next**这个成员使得我们可以与其他结点连接在一起 —— 我的意思是，这就是链表的主要目标。

接下来我们要去定义一些基本的函数。
```python
class LinkedList:
    def __init__(self,head=None):
	self.head = head    
	def append(self, new_node):
            current = self.head
            if current:
                while current.next:
                    current = current.next
                current.next = new_node
            else:
                self.head = new_node
```

 
`append()`函数能让你添加结点到链表上。让我们来探索它是怎么工作的。
![append](https://www.freecodecamp.org/news/content/images/2022/09/append.png)

如果我有两个值 - 例如1和2 - 然后我想要将它们添加到链表中，第一件事就是将它们定义为单独的结点（就像链条中的环一样）。我们可以这样做：
```python
e1 = Node(1)
e2 = Node(2)
```

既然结点已经准备好了，我现在就可以定义一个链表了。一个链表（就像我们看到的链条 —— 总有一个头部链条，不是吗），所以我可以用一个实际上是另一个结点（环）作为头结点来定义我的链表。

```python
ll = LinkedList(e1)
```

从上面的代码看来，**`e1`** 就是链表的头结点，或者花哨得说是链表的起点。我可以向其中添加更多元素，既然每个链都必须是相连的（也就是说，在彼此的内部），我必须首先设置一个基础用例来检查这个链表有头结点。

链表的特点就是它有一个起点。如果它没有，我们可以简单地将新元素作为头部。但是如果它已经有了头结点，我必须遍历整个链表，同时检查是否有一个的 **`next`** 成员是空的（或者说就是 **`None`** )。


再次重申，一个链表就像一个链条，不是吗？所以每一个结点应该用 **`next`** 指针指向另一个结点。 一旦一个结点的下一个元素是 `none` ，就代表着它是链表的末端。所以我可以很容易地在那个位置添加新接点。

让我们创建一个方法来 **删除** 一个结点。但是在我们那样做之前，让我们先思考一会。想象你有一个链条，然后你发现其中的一环是有问题的。你会怎么做？

你首先找到有问题的那个环，然后拿掉它，之后把它的前一个和它的后一个连接在一起。但是如果有问题的环是第一个，那也很简单 —— 你只需要拿掉它，然后也不需要连接任何事情。第二个环自动地变成了链条的头。试着想象一下。

我们想在链表上做同样的事。所以我们首先找到有问题的一环 —— 在这种情况下就是我们寻找的那个值 —— 然后我们将它之前的和它之后的连接在一起：
```python
class LinkedList:    
    def __init(...)    
    def append(...)    
    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head
        if current.value == value:
            self.head = current.next
        else:
            while current:
                if current.value == value:
                    break
                prev = current
                current = current.next
            if current == None:
                return
            prev.next = current.next
            current = None
```

所以我们在这里做的就是简单地遍历每个结点去看它的值是否是我们需要删除的。但是当我们遍历链表的时候，我们也需要一直跟踪前一个值（我们还要将链表重新链接起来）。我们通过 **`prev = current`** 来实现这个，你可以在下面看到 :)。
![delete-1](https://www.freecodecamp.org/news/content/images/2022/09/delete-1.png)

所以当要删除的结点被找到后，**`prev`** 变量包含了它前面的结点，所以它的next值可以很简单地切换为指向另一个结点 - 在这种情况下也就是与我们想要删除的结点相连的其他结点。我希望这能解释得通 :) 。

让我们来研究将一个 **结点插入** 到一个特定的地方。我们将使用我们的链条作为类比来更好地理解。

当你有一个链条，然后你想要增加链条的长度，你有三个选择。你可以：
1. 在链条的头部添加一个环 （元素）。（这很简单，不是吗？）
2. 把它添加到链条的末尾。（这和1很像）
3. 或者你可以把它添加到链条中间的任何一个位置（有一点棘手）


![insert3](https://www.freecodecamp.org/news/content/images/2022/09/insert3.png)


你需要记住的一件事就是不管你决定把它添加到哪里，你必须把其他结点连接到它。只有当你使用一个循环来跟踪其他节点时这才有可能。
让我们实际地来看看：
```python
class LinkedList:   
    def __init(...)    
    def append(...) 
    def delete(...)
    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        count=1
        current = self.head
        if position == 1:
            new_element.next = self.head
            self.head = new_element
        while current:
            if count+1 == position:
                new_element.next =current.next
                current.next = new_element
                return
            else:
                count+=1
                current = current.next
            # break

        pass
```

在上面的代码中，我们传入了一个插入结点的位置。如果这个位置是第一个，这就代表着这个结点要作为头结点。由于我们不是很确定，我们可以初始化一个循环和一个计数器来跟踪这个循环。

如果我们传入的位置是1（也就是头结点），简单地将当前的头结点存储为变量dummy，然后创建一个新头结点，接着将之前的头结点（也就是整个链条）加入到这个新头结点后。

如果这个位置不是1，那么就遍历这个链条直到你找到了那个位置。

在这篇文章的最后，让我们以任何你想要的形式来展示链表的值 - 例如，打印出来或者把它添加到一个列表中。我将只会把它们打印出来。


这是很直接的，就像现实的链条：你只需要在有结点的地方得到它的值，然后移动到下一个结点

![print](https://www.freecodecamp.org/news/content/images/2022/09/print.png)

```python
class LinkedList:   
    def __init(...)    
    def append(...) 
    def insert(...)
	def delete(...)    
	def print(self):
        current = self.head
        while current:
            print(current.value)
            current = current.next
    
```

现在关于链表的内容就这么多了! 我们将在以后的工作中解决一些关于链表的问题。

## 总结
在这篇文章中，我已经解释了：

- 链表是如何工作的
- 链表的优点和缺点
- 如何用 Python 实现一个链表


你可以在[这里](https://github.com/fakoredeDamilola/articles/blob/master/code/linkedList.py)找到这篇文章的代码。谢谢你的阅读。

  
  
