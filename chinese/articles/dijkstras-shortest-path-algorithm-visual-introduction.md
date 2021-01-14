> -   原文地址：[Dijkstra's Shortest Path Algorithm - A Detailed and Visual Introduction](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/)
> -   原文作者：Estefania Cassingena Navone
> -   译者：Humilitas
> -   校对者：

![Dijkstra's Shortest Path Algorithm - A Detailed and Visual Introduction](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/Algorithm-Image-1.png)

**Welcome!**  If you've always wanted to learn and understand Dijkstra's algorithm, then this article is for you. You will see how it works behind the scenes with a step-by-step graphical explanation.
**欢迎！** 如果你想要学习 Dijkstra 算法，这篇文章正是为你准备的。你可以通过逐步的图文解释来理解它背后的工作原理。

**You will learn:**
**你将学到：**

-   Basic Graph Concepts (a quick review).
-   What Dijkstra's Algorithm is used for.
-   How it works behind the scenes with a step-by-step example.
-   图的基本概念。
-   Dijkstra 算法的使用场景。
-   Dijkstra 算法的工作原理。

**Let's begin. ✨**
**开始吧。**

## 🔹 Introduction to Graphs
## 🔹 “图”简介

Let's start with a brief introduction to graphs.

### Basic Concepts
### 基本概念

Graphs are data structures used to represent "connections" between pairs of elements.
图是一种用来表示元素对之间的“连接”的数据结构。

-   These elements are called  **nodes**. They represent real-life objects, persons, or entities.
-   The connections between nodes are called  **edges**.
-   这些元素称为 **节点**，它们表示现实生活中的事物、人或实体。
-    节点之间的连接称为 **边**。

This is a graphical representation of a graph:
下面是“图”的图形表示：

![](https://www.freecodecamp.org/news/content/images/2020/06/image-123.png)

**Nodes** are represented with colored circles and  **edges** are represented with lines that connect these circles.
彩色的圆圈表示**节点**，圆圈之间的连线表示**边**。

**💡 Tip:** Two nodes are connected if there is an edge between them.
**💡 提示：** 如果两个节点之间有连线表示它们是互相连接的。

### Applications
### 应用

Graphs are directly applicable to real-world scenarios. For example, we could use graphs to model a transportation network where nodes would represent facilities that send or receive products and edges would represent roads or paths that connect them (see below).
图可以应用到现实世界中的场景，例如：可以用来建模交通运输网络，节点表示发送或接收物资的站点，边表示站点之间的路线（如下图所示）。

![](https://www.freecodecamp.org/news/content/images/2020/06/image-121.png)

Network represented with a graph
用图表示交通运输网络

### Types of Graphs
### 图的类型

Graphs can be:
图可以是：

-   **Undirected:** if for every pair of connected nodes, you can go from one node to the other in both directions.
-   **Directed:** if for every pair of connected nodes, you can only go from one node to another in a specific direction. We use arrows instead of simple lines to represent directed edges.
-   **无向的：** 在互相连接的节点之间可以以任意方向移动。
-   **有向的：** 在互相连接的节点之间只能以特定的方向移动。使用带单向箭头的线来表示有向边。

![](https://www.freecodecamp.org/news/content/images/2020/06/image-124.png)

**💡 Tip:**  in this article, we will work with  **undirected** graphs.
**💡 提示：**  本文中涉及的都是 **无向图**

### Weighted Graphs
### 权重图

A  **weight graph**  is a graph whose edges have a "weight" or "cost". The weight of an edge can represent distance, time, or anything that models the "connection" between the pair of nodes it connects.
**权重图** 的边是带有“权重”的，边的权重可以表示距离、时间或其他能够以节点之间的“连接”表示的事物。

For example, in the weighted graph below you can see a blue number next to each edge. This number is used to represent the weight of the corresponding edge.
下面的权重图中，每个边旁边都有一个蓝色数字表示其权重。

![](https://www.freecodecamp.org/news/content/images/2020/06/image-126.png)

**💡 Tip:**  These weights are essential for Dijkstra's Algorithm. You will see why in just a moment.
**💡 提示：** 这些权重对于 Dijkstra 算法而言是必不可少的，稍后会解释其原因。

## 🔸 Introduction to Dijkstra's Algorithm
## 🔸  Dijkstra 算法简介

Now that you know the basic concepts of graphs, let's start diving into this amazing algorithm.
了解了图的基本概念，我们开始研究这个出色的算法。

-   Purpose and Use Cases
-   History
-   Basics of the Algorithm
-   Requirements
-   算法目标和使用场景
-   历史
-   基础知识
-   必要条件

### Purpose and Use Cases
### 算法目标和使用场景

With Dijkstra's Algorithm, you can find the shortest path between nodes in a graph. Particularly, you can  **find the shortest path from a node (called the "source node") to all other nodes in the graph**, producing a shortest-path tree.
使用 Dijkstra 算法，可以寻找图中节点之间的最短路径。特别的是，可以**在图中寻找一个节点（称为“源节点”）到所有其它节点的最短路径**，生成一个最短路径树。

This algorithm is used in GPS devices to find the shortest path between the current location and the destination. It has broad applications in industry, specially in domains that require modeling networks.
GPS 设备运用这个算法来寻找当前位置到目标位置的最短路径。Dijkstra 算法被广泛应用在工业上，尤其是需要建模网络的领域。

### History
### 历史

This algorithm was created and published by  [Dr. Edsger W. Dijkstra][1], a brilliant Dutch computer scientist and software engineer.
荷兰杰出计算机科学家、软件工程师 [Dr. Edsger W. Dijkstra][1] 创建并发布了这个算法。

In 1959, he published a 3-page article titled "A note on two problems in connexion with graphs" where he explained his new algorithm.
1959 年，他发表了一篇 3 页的文章《两个与图相关问题的说明》，介绍了他的新算法。

![](https://www.freecodecamp.org/news/content/images/2020/09/image-112.png)

[Dr. Edsger Dijkstra][2]  at  [ETH Zurich][3]  in 1994 (image by Andreas F. Borchert)
1994 年，[Edsger Dijkstra 博士][2] 在 [ETH Zurich][3]（Andreas F. Borchert 摄）

During an interview in 2001, Dr. Dijkstra revealed how and why he designed the algorithm:
在 2001 年的一次采访中，Dijkstra 博士透露了他设计这个算法的起因和过程：

> What’s the shortest way to travel from Rotterdam to Groningen? It is the algorithm for the shortest path, which I designed in about 20 minutes. One morning I was shopping in Amsterdam with my young fiancée, and tired, we sat down on the café terrace to drink a cup of coffee and I was just thinking about whether I could do this, and I then designed the algorithm for the shortest path. As I said, it was a 20-minute invention. In fact, it was published in 1959, three years later. The publication is still quite nice. One of the reasons that it is so nice was that I designed it without pencil and paper. Without pencil and paper you are almost forced to avoid all avoidable complexities. Eventually that algorithm became, to my great amazement, one of the cornerstones of my fame. — As quoted in the article  [Edsger W. Dijkstra][4]  from  [An interview with Edsger W. Dijkstra][5].
> 从 Rotterdam 到 Groningen 的最短路线是什么？这就是我花了大概二十分钟时间设计的最短路径算法。//todo

⭐  **Unbelievable, right?**  In just 20 minutes, Dr. Dijkstra designed one of the most famous algorithms in the history of Computer Science.
⭐  **难以置信，对吧？** 仅仅 20 分钟的时间，Dijkstra 博士设计出了位列计算机科学史上最著名的算法之一的 Dijkstra 算法。

### Basics of Dijkstra's Algorithm
### Dijkstra 算法的基础知识

-   Dijkstra's Algorithm basically starts at the node that you choose (the source node) and it analyzes the graph to find the shortest path between that node and all the other nodes in the graph.
-   The algorithm keeps track of the currently known shortest distance from each node to the source node and it updates these values if it finds a shorter path.
-   Once the algorithm has found the shortest path between the source node and another node, that node is marked as "visited" and added to the path.
-   The process continues until all the nodes in the graph have been added to the path. This way, we have a path that connects the source node to all other nodes following the shortest path possible to reach each node.
-   Dijkstra 算法从指定的节点（源节点）出发，寻找它与图中所有其它节点之间的最短路径。
-   Dijkstra 算法会记录当前已知的最短路径，并在寻找到更短的路径时更新。
-   一旦发现源节点与其他节点之间的最短路径时，那个节点会被标记为“已访问”并添加到路径中。
-   重复寻找过程，直到图中所有节点都已经添加到路径中。这样，就可以得到从源节点出发访问所有其他节点的最短路径方案。

### Requirements
### 必要条件

Dijkstra's Algorithm can only work with graphs that have  **positive**  weights. This is because, during the process, the weights of the edges have to be added to find the shortest path.
Dijkstra 只能用在权重为**正**的图中，因为计算过程中需要将边的权重相加来寻找最短路径。

If there is a negative weight in the graph, then the algorithm will not work properly. Once a node has been marked as "visited", the current path to that node is marked as the shortest path to reach that node. And negative weights can alter this if the total weight can be decremented after this step has occurred.
如果图中有负权重的边，这个算法就无法正常工作。一旦一个节点被标记为“已访问”，当前访问它的路径就被标记为访问它的最短路径。如果存在负权重，则会在之后减少总权重，从而影响之前的结果。// todo

## 🔹 Example of Dijkstra's Algorithm
## 🔹 Dijkstra 算法示例

Now that you know more about this algorithm, let's see how it works behind the scenes with a a step-by-step example.
理解了算法概念之后，通过逐步的示例来了解一下它背后的工作原理。

We have this graph:
假设有下面这个图：

![](https://www.freecodecamp.org/news/content/images/2020/06/image-76.png)

The algorithm will generate the shortest path from node  `0`  to all the other nodes in the graph.
Dijkstra 算法将会寻找出图中节点 `0` 到所有其他节点的最短路径。

**💡 Tip:** For this graph, we will assume that the weight of the edges represents the distance between two nodes.
**💡 提示：** 在这个图中，我们假定两个节点之间的权重表示它们之间的距离。

We will have the shortest path from node  `0`  to node  `1`, from node  `0`  to node  `2`, from node  `0`  to node  `3`, and so on for every node in the graph.
我们将会得到节点 `0` 到节点 `1`、节点 `0` 到节点 `2`、节点 `0` 到 节点 `3`（以此类推）的最短路径。

Initially, we have this list of distances (please see the list below):
初始的距离列表如下：

-   The distance from the source node to itself is  `0`. For this example, the source node will be node  `0`  but it can be any node that you choose.
-   The distance from the source node to all other nodes has not been determined yet, so we use the infinity symbol to represent this initially.
-   源节点到它自身的距离为 `0`。示例中的源节点定为节点 `0`，不过你可以选择任意其它节点作为源节点。
-   源节点到其它节点的距离还没有确定，所以先标记为无穷大。

![](https://www.freecodecamp.org/news/content/images/2020/06/image-77.png)

We also have this list (see below) to keep track of the nodes that have not been visited yet (nodes that have not been included in the path):
还有一个列表用来记录哪些节点未被访问（即尚未被包含在路径中）：

![](https://www.freecodecamp.org/news/content/images/2020/06/image-78.png)

**💡 Tip:** Remember that the algorithm is completed once all nodes have been added to the path.
**💡 提示：** 记住，当所有节点都被添加到路径中时，算法的计算过程就完成了。

Since we are choosing to start at node  `0`, we can mark this node as visited. Equivalently, we cross it off from the list of unvisited nodes and add a red border to the corresponding node in diagram:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-87.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/image-83.png)

Now we need to start checking the distance from node  `0`  to its adjacent nodes. As you can see, these are nodes  `1`  and  `2`  (see the red edges):

![](https://www.freecodecamp.org/news/content/images/2020/06/image-89.png)

**💡 Tip:**  This doesn't mean that we are immediately adding the two adjacent nodes to the shortest path. Before adding a node to this path, we need to check if we have found the shortest path to reach it. We are simply making an initial examination process to see the options available.

We need to update the distances from node  `0`  to node  `1`  and node  `2`  with the weights of the edges that connect them to node  `0`  (the source node). These weights are 2 and 6, respectively:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-90.png)

After updating the distances of the adjacent nodes, we need to:

-   Select the node that is closest to the source node based on the current known distances.
-   Mark it as visited.
-   Add it to the path.

If we check the list of distances, we can see that node  `1`  has the shortest distance to the source node (a distance of 2), so we add it to the path.

In the diagram, we can represent this with a red edge:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-94.png)

We mark it with a red square in the list to represent that it has been "visited" and that we have found the shortest path to this node:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-92.png)

We cross it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-93.png)

Now we need to analyze the new adjacent nodes to find the shortest path to reach them. We will only analyze the nodes that are adjacent to the nodes that are already part of the shortest path (the path marked with red edges).

Node  `3`  and node  `2`  are both adjacent to nodes that are already in the path because they are directly connected to node  `0`  and node  `1`, respectively, as you can see below. These are the nodes that we will analyze in the next step.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-94.png)

Since we already have the distance from the source node to node  `2`  written down in our list, we don't need to update the distance this time. We only need to update the distance from the source node to the new adjacent node (node  `3`):

![](https://www.freecodecamp.org/news/content/images/2020/06/image-98.png)

This distance is  **7**. Let's see why.

To find the distance from the source node to another node (in this case, node  `3`), we add the weights of all the edges that form the shortest path to reach that node:

-   **For node  `3`:**  the total distance is  **7**  because we add the weights of the edges that form the path  `0 -> 1 -> 3`  (2 for the edge  `0 -> 1`  and 5 for the edge  `1 -> 3`).

![](https://www.freecodecamp.org/news/content/images/2020/06/image-94.png)

Now that we have the distance to the adjacent nodes, we have to choose which node will be added to the path. We must select the  **unvisited** node with the shortest (currently known) distance to the source node.

From the list of distances, we can immediately detect that this is node  `2`  with distance  **6**:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-98.png)

We add it to the path graphically with a red border around the node and a red edge:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-96.png)

We also mark it as visited by adding a small red square in the list of distances and crossing it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-99.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/image-100.png)

Now we need to repeat the process to find the shortest path from the source node to the new adjacent node, which is node  `3`.

You can see that we have two possible paths  `0 -> 1 -> 3`  or  `0 -> 2 -> 3`. Let's see how we can decide which one is the shortest path.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-96.png)

Node  `3`  already has a distance in the list that was recorded previously (**7,** see the list below). This distance was the result of a previous step, where we added the weights 5 and 2 of the two edges that we needed to cross to follow the path  `0 -> 1 -> 3`.

But now we have another alternative. If we choose to follow the path  `0 -> 2 -> 3`, we would need to follow two edges  `0 -> 2`  and  `2 -> 3`  with weights  **6**  and  **8**,  respectively,  which represents a total distance of  **14**.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-101.png)

Clearly, the first (existing) distance is shorter (7 vs. 14), so we will choose to keep the original path  `0 -> 1 -> 3`.  **We only update the distance if the new path is shorter.**

Therefore, we add this node to the path using the first alternative:  `0 -> 1 -> 3`.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-104.png)

We mark this node as visited and cross it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-103.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/image-106.png)

Now we repeat the process again.

We need to check the new adjacent nodes that we have not visited so far. This time, these nodes are node  `4`  and node  `5`  since they are adjacent to node  `3`.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-104.png)

We update the distances of these nodes to the source node, always trying to find a shorter path, if possible:

-   **For node  `4`:**  the distance is  **17**  from the path `0 -> 1 -> 3 -> 4`.
-   **For node  `5`:**  the distance is  **22**  from the path  `0 -> 1 -> 3 -> 5`.

**💡 Tip:**  Notice that we can only consider extending the shortest path (marked in red). We cannot consider paths that will take us through edges that have not been added to the shortest path (for example, we cannot form a path that goes through the edge  `2 -> 3`).

![](https://www.freecodecamp.org/news/content/images/2020/06/image-105.png)

We need to choose which unvisited node will be marked as visited now. In this case, it's node  `4`  because it has the shortest distance in the list of distances. We add it graphically in the diagram:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-108.png)

We also mark it as "visited" by adding a small red square in the list:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-107.png)

And we cross it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-109.png)

And we repeat the process again. We check the adjacent nodes: node  `5`  and node  `6`. We need to analyze each possible path that we can follow to reach them from nodes that have already been marked as visited and added to the path.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-108.png)

**For node  `5`:**

-   The first option is to follow the path  `0 -> 1 -> 3 -> 5`, which has a distance of  **22** from the source node (2 + 5 + 15). This distance was already recorded in the list of distances in a previous step.
-   The second option would be to follow the path  `0 -> 1 -> 3 -> 4 -> 5`, which has a distance of  **23** from the source node (2 + 5 + 10 + 6).

Clearly, the first path is shorter, so we choose it for node  `5`.

**For node  `6`:**

-   The path available is  `0 -> 1 -> 3 -> 4 -> 6`, which has a distance of  **19**  from the source node (2 + 5 + 10 + 2).

![](https://www.freecodecamp.org/news/content/images/2020/06/image-110.png)

We mark the node with the shortest (currently known) distance as visited. In this case, node  `6`.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-140.png)

And we cross it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-111.png)

Now we have this path (marked in red):

![](https://www.freecodecamp.org/news/content/images/2020/06/image-112.png)

Only one node has not been visited yet, node  `5`. Let's see how we can include it in the path.

There are three different paths that we can take to reach node  `5`  from the nodes that have been added to the path:

-   **Option 1:** `0 -> 1 -> 3 -> 5`  with a distance of  **22** (2 + 5 + 15).
-   **Option 2:** `0 -> 1 -> 3 -> 4 -> 5`  with a distance of  **23**  (2 + 5 + 10 + 6).
-   **Option 3:**  `0 -> 1 -> 3 -> 4 -> 6 -> 5`  with a distance of  **25** (2 + 5 + 10 + 2 + 6).

![](https://www.freecodecamp.org/news/content/images/2020/06/image-113.png)

We select the shortest path:  `0 -> 1 -> 3 -> 5`  with a distance of  **22**.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-115.png)

We mark the node as visited and cross it off from the list of unvisited nodes:

![](https://www.freecodecamp.org/news/content/images/2020/06/image-114.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/image-116.png)

**And voilà!**  We have the final result with the shortest path from node  `0`  to each node in the graph.

![](https://www.freecodecamp.org/news/content/images/2020/06/image-115.png)

In the diagram, the red lines mark the edges that belong to the shortest path. You need to follow these edges to follow the shortest path to reach a given node in the graph starting from node  `0`.

For example, if you want to reach node  `6`  starting from node  `0`, you just need to follow the red edges and you will be following the shortest path  `0 -> 1 -> 3 -> 4 - > 6`  automatically.

## 🔸 In Summary

-   Graphs are used to model connections between objects, people, or entities. They have two main elements: nodes and edges. Nodes represent objects and edges represent the connections between these objects.
-   Dijkstra's Algorithm finds the shortest path between a given node (which is called the "source node") and all other nodes in a graph.
-   This algorithm uses the weights of the edges to find the path that minimizes the total distance (weight) between the source node and all other nodes.

**I really hope you liked my article and found it helpful.** Now you know how Dijkstra's Algorithm works behind the scenes. Follow me on Twitter  [@EstefaniaCassN][6]  and  [check out my online courses][7].

[1]: https://en.wikipedia.org/wiki/Edsger_W._Dijkstra
[2]: https://commons.wikimedia.org/wiki/File:Edsger_Dijkstra_1994.jpg
[3]: https://en.wikipedia.org/wiki/ETH_Zurich
[4]: https://en.wikipedia.org/wiki/Edsger_W._Dijkstra
[5]: https://dl.acm.org/doi/pdf/10.1145/1787234.1787249
[6]: https://twitter.com/EstefaniaCassN
[7]: https://www.udemy.com/user/estefania-cn/
