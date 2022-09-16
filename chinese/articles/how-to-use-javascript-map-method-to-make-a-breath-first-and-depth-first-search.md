> -  原文地址：[How to Use JavaScript's Map() Method to Solve Breadth-First and Depth-First Search Problems](https://www.freecodecamp.org/news/how-to-use-javascript-map-method-to-make-a-breath-first-and-depth-first-search/)
> -  原文作者：[Njoku Samson Ebere](https://www.freecodecamp.org/news/author/ebereplenty/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Use JavaScript's Map() Method to Solve Breadth-First and Depth-First Search Problems](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/pexels-porapak-apichodilok-346696.jpg)

JavaScript的[`map()`方法](https://www.freecodecamp.org/news/array-map-tutorial/)是一个包含键值对的[对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)。对象的键和值通过冒号 (:) 连接，而map是通过箭头符号 (=>)连接。

以下是JavaScript中的对象：

```javascript
{ a: [ 1, 2, 3 ], b: 2, c: 3 }
```

一个JavaScript对象

以下是JavaScript中的map：

```javascript
{ 'a' => [ 1, 2, 3 ], 'b' => 2, 'c' => 3 }
```

一个 JavaScript Map

 `map()` 方法是解决如：图、最短距离、最佳路线等算法和数据结构行之有效的方法。许多运输公司都使用这个方法来创建应用，我们将在这篇教程中练习类似的事情。

为了方便倾向使用视觉资料来学习的读者，我在每个章节之后都添加了视频资料。

## 本文目标

本教程的目的是教会你如何使用`map()`方式是解决广度优先和深度优先搜索的算法问题。

通过学习，你将掌握`map()`方法的基础知识，同时也将从另一个角度来观察类似图这样的算法和数据结构问题，以及广度优先搜索 (BFS)和深度优先搜索(DFS)。


## 前提条件

本教程假设你了解基本的 Javascript 概念，例如字符串、数组、对象和集合。阅读过有关算法和数据结构的信息也会有所帮助。

让我们开始吧！

<iframe width="583" height="327" src="https://www.youtube.com/embed/LuVfrai8gpI?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="1  Introduction - How To Use JavaScript Map In Solving Breadth-First and Depth-First Search Problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="583" height="327" src="https://www.youtube.com/embed/2SKmhCr9Hp4?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="2  Overview of Map" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="583" height="327" src="https://www.youtube.com/embed/VyUntT1sK20?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="3  Overview of Map (Cont)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 问题

尼日利亚有 36 个州。游客可以通过公路、空中和水运（路线routes）从一个州移动到另一个州。我们要做的是以下编程：

1.  用图展示每个州和其他州之间的连接。
2.  检查两个州之间是否有连接。

我们从尼日利亚的36个州中挑选了11州来进行创建：

```js
ENUGU, ABIA, SOKOTO, NIGER, LAGOS, OGUN, BAYELSA, AKWAIBOM, ANAMBRA, IMO, EBONYI
```

路线如下：

-   ENUGU to LAGOS
-   ENUGU to NIGER
-   NIGER to SOKOTO
-   NIGER to ANAMBRA
-   SOKOTO to ANAMBRA
-   OGUN to LAGOS
-   OGUN to ABIA
-   OGUN to EBONYI
-   OGUN to BAYELSA
-   EBONYI to ABIA

我们来使用这些数据解决问题！


## 如何解决问题

上一章节我们讲解了问题，现在我们来解决问题，在这篇教程中我将使用[Replit](https://replit.com/)。

Replit是一个配置完全的IDE，方便你可以快速地编写和检查程序。

### 如何创建 Map

我们首先要解决的问题是如何展现每一个州和其他州之间的连接。

我们先定义这11个州和路线，输入以下代码：

```javascript

const states = 'ENUGU ABIA SOKOTO NIGER LAGOS OGUN BAYELSA AKWAIBOM ANAMBRA IMO EBONYI'.split(' ');

const routes = [
  ['ENUGU', 'LAGOS'],
  ['ENUGU', 'NIGER'],
  ['NIGER', 'SOKOTO'],
  ['NIGER', 'ANAMBRA'],
  ['SOKOTO', 'ANAMBRA'],
  ['OGUN', 'LAGOS'],
  ['OGUN', 'ABIA'],
  ['OGUN', 'EBONYI'],
  ['OGUN', 'BAYELSA'],
  ['EBONYI', 'ABIA'],
];
```

创建一个新的 `map()` 也可以称作图，并命名为 `connections`:

```javascript
const connections = new Map();
```

接着输入以下代码：

```javascript
states.forEach((state) => {
  connections.set(state, []);
});
```

这段代码迭代所有 **states**。每次迭代，都将当前state作为`connections`图中的键，并设置初始值为空数组 (`[]`)。

如果你在控制台打印 `connections` ，会得到以下结果：

```javascript
Map(11) {
  'ENUGU' => [],
  'ABIA' => [],
  'SOKOTO' => [],
  'NIGER' => [],
  'LAGOS' => [],
  'OGUN' => [],
  'BAYELSA' => [],
  'AKWAIBOM' => [],
  'ANAMBRA' => [],
  'IMO' => [],
  'EBONYI' => []
}
```

目前为止，上述图对应的图像如下：

![Screenshot-2022-08-10-at-16.44.32](https://www.freecodecamp.org/news/content/images/2022/08/Screenshot-2022-08-10-at-16.44.32.png)

当前州的图像展示

输入以下代码：

```javascript
routes.forEach(route => {
  const departure = [...route][0];
  const destination = [...route][1];
  
  connections.get(departure).push(destination);
  connections.get(destination).push(departure);
});
```

上述代码将州添加到空数组，作为前一步键对应的值。代码循环迭代路线（routes）数组，并提取出每一个路线。

departure（出发）州为每一个路线数组的第一个值，而destination（目的地）州为每一个路线数组的第二个值。

然后将目的地州添加到出发州对应的值数组，最后将出发州添加到目的地州的值数组中。

在控制台打印`connections`，会得到以下结果：

```javascript
Map(11) {
  'ENUGU' => [ 'LAGOS', 'NIGER' ],
  'ABIA' => [ 'OGUN', 'EBONYI' ],
  'SOKOTO' => [ 'NIGER', 'ANAMBRA' ],
  'NIGER' => [ 'ENUGU', 'SOKOTO', 'ANAMBRA' ],
  'LAGOS' => [ 'ENUGU', 'OGUN' ],
  'OGUN' => [ 'LAGOS', 'ABIA', 'EBONYI', 'BAYELSA' ],
  'BAYELSA' => [ 'OGUN' ],
  'AKWAIBOM' => [],
  'ANAMBRA' => [ 'NIGER', 'SOKOTO' ],
  'IMO' => [],
  'EBONYI' => [ 'OGUN', 'ABIA' ]
}
```

这种类型的图是无向的。在无向图中，你可以从节点（node）移动到边（edge），然后从边移回节点。在我们的例子中，节点是出发州，而边是目的地州。

以下图像对此做了展示：

![Screenshot-2022-08-10-at-16.29.30](https://www.freecodecamp.org/news/content/images/2022/08/Screenshot-2022-08-10-at-16.29.30.png)

无向图展示路线

黑色箭头指向目的地州，而白色箭头指向出发州。

若需要创建有向图，可以编写以下代码：

```javascript
routes.forEach(route => {
  connections.get([...route][0]).push([...route][1]);
});
```

输出如下：

```javascript
Map(11) {
  'ENUGU' => [ 'LAGOS', 'NIGER' ],
  'ABIA' => [],
  'SOKOTO' => [ 'ANAMBRA' ],
  'NIGER' => [ 'SOKOTO', 'ANAMBRA' ],
  'LAGOS' => [],
  'OGUN' => [ 'LAGOS', 'ABIA', 'EBONYI', 'BAYELSA' ],
  'BAYELSA' => [],
  'AKWAIBOM' => [],
  'ANAMBRA' => [],
  'IMO' => [],
  'EBONYI' => [ 'ABIA' ]
}
```

以下是图像展示：

![Screenshot-2022-08-10-at-16.06.57](https://www.freecodecamp.org/news/content/images/2022/08/Screenshot-2022-08-10-at-16.06.57.png)

有向图展示路线

如果你觉得难以理解，仔细观察两段代码的输出结果和路线，你会发现代码变简单了许多。

我们已经能够展示这些州是如何以编程方式连接的。看看到目前为止的代码是什么样的：

```javascript

const states = 'ENUGU ABIA SOKOTO NIGER LAGOS OGUN BAYELSA AKWAIBOM ANAMBRA IMO EBONYI'.split(' ');

const routes = [
  ['ENUGU', 'LAGOS'],
  ['ENUGU', 'NIGER'],
  ['NIGER', 'SOKOTO'],
  ['NIGER', 'ANAMBRA'],
  ['SOKOTO', 'ANAMBRA'],
  ['OGUN', 'LAGOS'],
  ['OGUN', 'ABIA'],
  ['OGUN', 'EBONYI'],
  ['OGUN', 'BAYELSA'],
  ['EBONYI', 'ABIA'],
];

const connections = new Map();

states.forEach((state) => {
  connections.set(state, []);
});

console.log(connections)

routes.forEach(route => {
  const departure = [...route][0];
  const destination = [...route][1];
  
  connections.get(departure).push(destination);
  connections.get(destination).push(departure);
});

console.log(connections)
```

接下来我们解决下一个问题（检查是否可以连接两个州）。我们将用两种办法来解决，首先使用广度优先搜索算法，然后使用深度优先搜索算法。

<iframe width="583" height="327" src="https://www.youtube.com/embed/VyUntT1sK20?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="3  Overview of Map (Cont)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 如何使用广度优先搜索（BFS）

[BFS](https://www.freecodecamp.org/news/breadth-first-search-in-javascript-e655cd824fa4/) 是一种用于检查树或者图的算法，通过探索一个父（节点）的所有直系子（边）之后再探索孙节点，以这样的方式一直持续到树或者图的底部。

例如，在我们的例子中，我们想检查ENUGU和ABIA之间有没有连接。

BFS会从检查Enugu的直线路线(LAGOS和NIGER)开始。因为ABIA并非直接和ENUGU联系的，算法会接着检查和LAGOS相连的州。

接着，算法会检查和NIGER相连的州，这个过程会一直持续到算法找到ABIA或者走到头。程序就会终止。

BFS使用[队列](https://www.freecodecamp.org/news/queue-data-structure-definition-and-java-example-code/)数据结构。也就是说，项目会在数组的一端被添加，然后在另一端被删除。在我们的例子中，队列会保存所有还未被访问的州，我们会在编程中看到详细行为：

我们从创建一个命名为 `bfs`函数开始编写BFS：

```javascript
function bfs(departureState, destinationState) {

}
```

该函数接受两个参数： `departureState`和 `destinationState`。

在函数内部，定义一个 `queue` ，并将 `departureState` 添加进去：

```javascript
  const queue = [departureState];
```

我们将 `departureState`添加至`queue`数组，是因为它保存了所有尚未被访问的节点。（译者注：除了起始点以外，广度优先搜索的无向图中所有节点都是自己顶点-边关系的顶点以及其他顶点-边关系中的边，这里queue数组记录的是所有尚未作为顶点被访问的节点，而后文的visited集合记录的是所有作为边已被访问的节点）。

接下来，定义一个空`[Set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)`，并命名为`visited`:

```javascript
  const visited = new Set();
```

`visited`变量正如其名，将记录所有访问过的州。

现在我们可以从`departureState`开始我们的导航搜索，输入以下代码：

```javascript
while (queue.length > 0) {
    
}
```

循环将在`queue`非空时一直运行，也就是说只要还有州，就不会停下来。

在访问开始之前，将`departureState`从`queue`中删除，以防止无限循环。使用以下代码：

```javascript
    const state = queue.shift();
```

由于队列执行先进先出原则，所以`queue`数组第一个或者顶部的 `state`会优先被移除，并从尾部或者底部插入新的项目。

检索与节点(`state`)相连的边(`destinations`)：

```javascript
    const destinations = connections.get(state);
```

现在我们可以访问当前节点(`state`)的所有子边(`destinations`)，让我们检查一下，它们是否为`destinationState`：

使用以下代码，循环迭代`destinations`：

```javascript
for (const destination of destinations) {
    
}
```

在每一次循环都检查 `destination`是否为 `destinationState`，如果结果是`true`, 在控制台打印消息：

```javascript
      if (destination === destinationState) {
          console.log("Found => " + destination);
      }
```

然后，如果`destination`尚不是`visited`的元素，将 `destination`添加到`visited`和`queue`数组中，
```javascript
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
```

所有州都添加到`visited`数组后，程序终止。因为就没有州可以被添加到`queue`。

`bfs`函数如下：

```javascript
function bfs(departureState, destinationState) {
  const queue = [departureState];
  const visited = new Set();

  while (queue.length > 0) {
    const state = queue.shift();
    const destinations = connections.get(state);

    for (const destination of destinations) {
      if (destination === destinationState) {
          console.log("Found => " + destination);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}
```

检查两个州之间是否有连接，比方说ENUGU和SOKOTO，调用`bfs`函数：

```javascript
bfs("ENUGU", "SOKOTO")
```

以下是输出：

```javascript
Map(11) {
  'ENUGU' => [],
  'ABIA' => [],
  'SOKOTO' => [],
  'NIGER' => [],
  'LAGOS' => [],
  'OGUN' => [],
  'BAYELSA' => [],
  'AKWAIBOM' => [],
  'ANAMBRA' => [],
  'IMO' => [],
  'EBONYI' => []
}
Map(11) {
  'ENUGU' => [ 'LAGOS', 'NIGER' ],
  'ABIA' => [ 'OGUN', 'EBONYI' ],
  'SOKOTO' => [ 'NIGER', 'ANAMBRA' ],
  'NIGER' => [ 'ENUGU', 'SOKOTO', 'ANAMBRA' ],
  'LAGOS' => [ 'ENUGU', 'OGUN' ],
  'OGUN' => [ 'LAGOS', 'ABIA', 'EBONYI', 'BAYELSA' ],
  'BAYELSA' => [ 'OGUN' ],
  'AKWAIBOM' => [],
  'ANAMBRA' => [ 'NIGER', 'SOKOTO' ],
  'IMO' => [],
  'EBONYI' => [ 'OGUN', 'ABIA' ]
}
Found => SOKOTO
Found => SOKOTO
```

假设你不是很理解现在的内容，我建议你在不同节点暂停代码，来观察程序流。

<iframe width="583" height="327" src="https://www.youtube.com/embed/N8a8XXIihTQ?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="5  Breadth First Search Algorithm on a graph" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="583" height="327" src="https://www.youtube.com/embed/MCfnFLMpq9E?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="6  Breadth First Search Algorithm on a graph (CONT)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 如何使用深度优先搜索

[DFS](https://www.freecodecamp.org/news/dfs-for-your-next-tech-giant-interview/)算法一次只取一个节点的一个子节点。它继续向下搜索该节点的一个子节点，直到走到死胡同，然后再回溯并尝试另一个子节点。

在我们的例子中，假设我们需要检查ENUGU和ABIA之间是否有连接。

DFS会从Enugu开始，并检查第一个与之相连的州(LAGOS)。因为LAGOS不是ABIA，搜索会继续检查LAGOS紧密连接的下一个州。搜索会一直持续到找到ABIA或者走到死胡同。然后回溯并尝试另一个节点。

DFS使用栈来记录访问过的项目(在我们的例子中就是州)。当栈为空的时候，搜索终止。我们将使用递归来编写DFS算法，让我们开始吧！

首先创建一个名为`dfs`的函数， 该函数将接受三个参数(`departureState`, `destinationState`和 `visited`):

```js

function dfs(departureState, destinationState, visited = new Set()) {
    
}
```

`visited`集合将保存所有访问过的州，以防止无限循环。所以第一件事是在`dfs`函数，将`departureState`添加到`visited`数组。输入以下代码：

```js
  visited.add(departureState);
```

接着，由`departureState`得出`destinations`：

```js
  const destinations = connections.get(departureState);
```

在获取`departureState`的`destinations`之后，我们要就此迭代循环，如下：

```js
  for (let destination of destinations) {
      
  }
```

在循环中，检查当前`destination`是否为`destinationState`，如果是`true`, 在控制台打印代码：

```js
    if (destination === destinationState) {
      console.log("Found => " + destination);
    }
```

接着，如果`destination`还未被访问，再次调用`dfs`(递归) – 但此时，使用`destination`作为`departureState`的实参：

```js
    if (!visited.has(destination)) {
      dfs(destination, destinationState, visited)
    }
```

`destinationState`保持不变，`visited`（访问过的）`Set()` 不再为空数组。此时，位于循环中，但并不在visited集合中的destination将被存储到栈。

`dfs`函数如下：

```js

function dfs(departureState, destinationState, visited = new Set()) {
  
  visited.add(departureState);
  
  const destinations = connections.get(departureState);

  for (let destination of destinations) {
    if (destination === destinationState) {
      console.log("Found => " + destination);
    }

    if (!visited.has(destination)) {
      dfs(destination, destinationState, visited)
    }
  }
}
```

检查两个州之间是否连接，如ENUGU和SOKOTO， 调用`dfs`函数：

```javascript
dfs("ENUGU", "SOKOTO")
```

输出如下：

```js
Map(11) {
  'ENUGU' => [],
  'ABIA' => [],
  'SOKOTO' => [],
  'NIGER' => [],
  'LAGOS' => [],
  'OGUN' => [],
  'BAYELSA' => [],
  'AKWAIBOM' => [],
  'ANAMBRA' => [],
  'IMO' => [],
  'EBONYI' => []
}
Map(11) {
  'ENUGU' => [ 'LAGOS', 'NIGER' ],
  'ABIA' => [ 'OGUN', 'EBONYI' ],
  'SOKOTO' => [ 'NIGER', 'ANAMBRA' ],
  'NIGER' => [ 'ENUGU', 'SOKOTO', 'ANAMBRA' ],
  'LAGOS' => [ 'ENUGU', 'OGUN' ],
  'OGUN' => [ 'LAGOS', 'ABIA', 'EBONYI', 'BAYELSA' ],
  'BAYELSA' => [ 'OGUN' ],
  'AKWAIBOM' => [],
  'ANAMBRA' => [ 'NIGER', 'SOKOTO' ],
  'IMO' => [],
  'EBONYI' => [ 'OGUN', 'ABIA' ]
}
Found => SOKOTO
Found => SOKOTO
```

虽然上面的输出与我们运行bfs函数时得到的输出相同，但得出此结果的过程有所不同。尝试在不同的点分解代码以查看程序的流程。

<iframe width="546" height="307" src="https://www.youtube.com/embed/yl8GjfOSNq0?list=PLOvIwkWvHysOUVGqOwb_4j5mq8ir0fZ1O" title="7  Depth First Search Algorithm on a graph" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 总结

数据结构和算法逐渐成为软件工程师面试中重要的一环。 `map()` 是一个强大的JavaScript工具，能够帮助我们更容易地解决复杂问题。

我们首先使用 `map()` 方法构建了一个图。 然后我们使用了BFS和DFS算法搜索了两个州之间是否有连接。

你可以在[这里](https://replit.com/@EBEREGIT/MappingWithStates#index.js)查看我的代码。

如果你对算法和数据结构不太熟悉，或许会觉得本教程知识量有点大。但反复练习一定会带来好结果。因此，如果一开始你觉得无法理解，请休息一下，然后以更清晰的头脑再看一遍。
