> -  原文地址：[Linked Lists in Python – Explained with Examples](https://www.freecodecamp.org/news/introduction-to-linked-lists-in-python/)
> -  原文作者：[Fakorede Damilola](https://www.freecodecamp.org/news/author/fakorede/)
> -  译者：Xiang Liao
> -  校对者：

![Linked Lists in Python – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/chain-3481377_1280.jpg)

<!-- Different programming languages offer different ways to store and access data. -->
不同的编程语言提供了不同的方式去存取数据。
<!-- Some of the data structures you can use are collections such as arrays, lists, maps, sets, and so on. -->
有些你使用的数据结构例如数组，列表，映射，集合等等都是数据合集。
<!-- These all do an awesome job storing and accessing data, but sometimes you might need something different. Another data structure commonly used is called a Linked List. -->
这些数据结构在存取数据上都做的非常好，但有些时候你需要不同的数据结构。另一个经常被用到的数据结构就叫链表。
<!-- ## What is a Linked List? -->
## 什么是链表？
<!-- Linked Lists are a data structure that store data in the form of a chain. The structure of a linked list is such that each piece of data has a connection to the next one (and sometimes the previous data as well). Each element in a linked list is called a node. -->
链表是一种以链的形式来存储数据的数据结构。链表的结构是这样的：每一个数据都与其后一个数据相连（有时候也与前一个数据相连）。链表中的每个元素都被称为一个结点。
<!-- You can think of it as an actual chain, where each ring or node is connected.  
Something like this   -->
你可以把它看作一个实际的链条，其中每一环或者结点都是相连的。
就像这样
![A-chain](https://www.freecodecamp.org/news/content/images/2022/09/A-chain.png)

Like every other data structure, linked lists have their pros and cons:
就像其他所有的数据结构一样，链表也有它的优点和缺点


### Advantages of Linked Lists:
### 链表的优点
1. 因为链表是一个链式的数据结构，你可以快速地添加和移除其中的元素。并且这也不需要像数组或者列表那样来重新组织数据。线性的数据结构用链表来实现更加容易。
1.  Because of the chain-like system of linked lists, you can add and remove elements quickly. This also doesn't require reorganizing the data structure unlike arrays or lists. Linear data structures are often easier to implement using linked lists.
2.  Linked lists also don't require a fixed size or initial size due to their chainlike structure.
2. 同样因为它的链式结构，链表也不需要一个固定的或者初始的大小。



### Disadvantages of a Linked Lists:
### 链表的缺点
1. 与数组相比，链表占用更多的内存空间。这是因为你需要一个占用额外内存空间的指针来指向下一个元素。
1.  More memory is required when compared to an array. This is because you need a pointer (which takes up its own memory) to point you to the next element.
2.  Search operations on a linked list are very slow. Unlike an array, you don't have the option of random access.
2. 在链表上执行搜索操作非常的慢。不像数组，你不能随机访问链表中的元素。


## When Should You Use a Linked List?
## 什么时候应该用链表呢？
You should use a linked list over an array when:
在以下情况下，你应该使用链表而不是数组：
1. 你不知道数据列表中会有多少个元素（这是链表的一个优势 - 添加元素非常简单）。
2. 你不需要随机访问任何一个元素（与数组不同，你不能在链表中以一个特定的索引访问元素）。
3. 你想要在数据列表的中间插入元素。
4. 你需要以常数式时间从数据列表中插入和删除元素（与数组不同，你不需要先移动数据列表中的每一个其他元素）。
5.  You don't know how many items will be in the list (that is one of the advantages - ease of adding items).
6.  You don't need random access to any elements (unlike an array, you cannot access an element at a particular index in a linked list).
7.  You want to be able to insert items in the middle of the list.
8.  You need constant time insertion/deletion from the list (unlike an array, you don't have to shift every other item in the list first).

这些就是你在尝试实现一个链表前需要考虑的事情，
These are a few things you should consider before trying to implement a linked list.


Now with all the theory out of the way, it's time to implement one. We'll do this using Python, but most of what we learn here applies to any language you are using. The most important thing is to understand how it works.
现在所有的理论都结束了，是时候去真正地实现一个链表了。我们将使用Python语言来实现，但在这里学到的大部分都可以应用到任何你使用的语言上。最重要的是理解其中的思想。


## How to Use Linked Lists in Python
## 如何在Python中使用链表
Here's a trick when creating a Linked List. It's something that helped me understand it much better.

You just have to realize that every item that you will be adding to the list is just a node (similar to a ring in a chain). What differentiates the **head** (which is the first node in the list) is that you gave it the title **head**, and then you started adding other nodes to it.

Remember that a Linked List is similar to how a chain is coupled together.  
Joe is here with some rings, and he is going to help us.

![Joe-and-the-chain](https://www.freecodecamp.org/news/content/images/2022/09/Joe-and-the-chain.png)

I will be using this to illustrate as we go...so you can think along these lines (this is not an art class – I repeat, this is not an art class :) ) .

So let's create the nodes first:

```python
class Node:    
	def __init__(self,value):        
		self.value = value        
		self.next = None
```

  
That is it. We add the **`value`** because for anything to be added to the linked list, it should at least have some value (for example, except in rare situations, you don't add an empty string to an array, right?).

The **`next`** means that it is possible we want to chain other nodes – I mean, that is the major aim of a linked list.

Next we are going to define some basic functions:

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

  
The `append()` method lets you add a new node to the list. Let's explore how it works.

![append](https://www.freecodecamp.org/news/content/images/2022/09/append.png)

If I have two values – say 1 and 2 – and I want to add them to the list, the first thing is to define them as individual nodes (that is, as rings of a chain). I can do that like this:

```python
e1 = Node(1)
e2 = Node(2)
```

I can now define a linked list since I have my nodes ready. A linked list (like the chains we see – always has a head, right?), so I can define my linked list with a head value which basically is just another node (ring):

```python
ll = LinkedList(e1)
```

Now from the code above, **`e1`** is the head of the linked list, which is just a fancy way of saying the starting point of my linked list. I can add more items to it, and since each chain has to be connected (that is, inside each other), I have to first set up the base case to check if the list has a head.

What makes a linked list is the fact that it has a starting point. If it doesn't, we simply need to set the new element to the head. But if it already has a head, I have to go through the whole list and keep checking to see if any of the nodes has a **`next`** that is empty (that is, **`None`**).

Again, a linked list is like a chain, right? So every node should point to another with the **`next`** pointer. Once a node has a next that is `none`, it simply means that it is the end of the list. So I can easily add the new node in that position.  
  
Let's create a method to **delete** a node. But before we do, let's think about it for a second. Imagine you have a chain, and you find out a ring is weak. What do you do?

You first find the weak ring, then you remove it and connect the one before it and after it together. But if the weak ring is the first one, that is easy – you just remove it and you don't really have to join anything. The second ring automatically becomes the head of the chain. Try to visualize that.

We want to do the same thing here. So we first find the weak ring – in this case that will be the value we are looking for – and then we will take the one before and the one after and join them together:

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

So what we are doing here is simply going through each node to see if that is the value we want to remove. But as we move through the list, we have to keep track of the value before (we still have to join the list back together). We do this with **`prev = current`** as you can see above or below :).

![delete-1](https://www.freecodecamp.org/news/content/images/2022/09/delete-1.png)

So when the node has been found, the **`prev`** which contains the node before it, can be easily switched (that is, the next value) to point to another node – in this case the other nodes connected to the node we want to remove. I hope this makes sense :).

Let's work on **inserting a node** into a particular position. We will use our chain analogy to understand this better.

When you hold a chain, and you actually want to increase the length of the chain, you have three options. You can:

1.  Add a link (element) to the beginning of the chain (this should be pretty simple, right?)
2.  Add it to the end of the chain (kind of similar to 1)
3.  Or you can add it at any point in the middle (a little trickier)

![insert3](https://www.freecodecamp.org/news/content/images/2022/09/insert3.png)

One thing you should have in mind is that wherever you decide to add it, you have to join the other nodes back to it. That's only possible if you keep track of the other nodes with a loop.

Let's see that in action:

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

We are given a position to insert the node in the code above. If the position is one, it means it is going to be the root. Since we are not so sure, we can initialize a loop and a counter to keep track of the loop.

If the position we are to insert is one (that is, the root), simply store the current root in a dummy variable, create a new root, and then add the previous root (that is, the whole chain) to this new root.

If the position is not one, keep going through the chain until you find the position.  
  
Finally for this article, let's work on displaying the values of our linked list in any format you want – for example, printing it out or adding it to a list collection. I will just be printing the values out.

This is pretty straightforward, similar to a physical chain: you just look through everywhere there is a node and get the value, then move to the next node:

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

So that is all on linked lists for now! We will work on solving a few questions on linked lists later on.

ADVERTISEMENT

if (!isAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({});

## Wrapping Up

In this article, I've explained:

-   How a linked list works
-   The pros and cons of a linked list
-   How to implement a linked list with Python

  
You can find the code for [this article here](https://github.com/fakoredeDamilola/articles/blob/master/code/linkedList.py). Thank you for reading.
