> -   原文地址：[How Big O Notation Works – Explained with Cake 用蛋糕描述大 O 表示法](https://www.freecodecamp.org/news/big-o-notation/)
> -   原文作者：cedd burge
> -   译者：ZhichengChen
> -   校对者：

![How Big O Notation Works – Explained with Cake](https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDEyfHxjYWtlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=2000)

在计算机科学里，大 O 表示法用来表示一个算法的上界。它通常用输入大小的函数来表示算法的最大运行时间，也可以用来表示内存占用。

在这篇文章里我们会使用生日蛋糕来阐述大 O 表示法时间复杂度。假设我们正在举办 party，需要基于参会的人数烘焙蛋糕。

## O(1) - 常数时间

对于常数时间，不管多少人参加生日聚会，都只需要做一个蛋糕。因此制作蛋糕的时间是一个常量。

![0(1) Constant Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-1--constant-time.png)

注意大 O 表示法无需指定这个常数时间是多少（制作蛋糕可能花费一个小时，也可能花费四个小时）。它只是陈述了时间不随着参会人数的增加而增加。

一个 O(1) 操作的例子是通过 index 访问数组的元素。从 10 个元素的数组检索一个元素和从 100 万个元素的数组里检索一个元素一样快。
![0(1) Constant Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-1--constant-time-grqph.png)

##  O(log n) - 对数时间

对于对数时间，生日蛋糕用来奖励先到的人。

第一个到的人独享蛋糕，接下来到的两个人分一个蛋糕，在接着到的四个人分一个蛋糕，以此类推。

因此一个人聚会需要一个蛋糕。两人或者三人聚会需要两个蛋糕。4 - 7 人聚会需要 3 个蛋糕。8 - 15 人聚会需要四个蛋糕。 ‘n’ 个人聚会需要 log_2_(n) 个蛋糕。

![O(log n) Logarithmic Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-log-n--logarithmic-time.png)

一个 O(log n) 操作的例子是有序数组的二分查找。

二分查找算法找到数组中间的元素，和要找的元素进行对比。因为数组是有序的，所以可以知道要找的值在数组的哪一半里面。

然后再一半的数组里面重复这一过程。对于 16 个元素的数组，第一次迭代将搜索范围缩小到 8，然后依次是 4、2、1。最多 4 次，也就是 log_2_(16) 次，迭代结束。

![O(log n) Logarithmic Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-log-n--logarithmic-time-graph.png)

## O(n) - 线性时间

对于线性时间，每个参会的人都有一个蛋糕。如果 ‘n’ 个人参会需要准备 ‘n’ 个蛋糕，因此花费的时间和参会的人数相关。

![O(n) Linear Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n--linear-time.png)

再一次，大 O 表示法不关注具体时间是多少（可能是一个小时制作一个蛋糕，也可能是四个小时），它只是表示时间随着参会人数线性增长。

一个 O(n) 操作的例子是用最粗暴的方式在数组里遍历找到指定元素。在 10 个元素的数组里，最坏情况下需要找十次才能找到指定元素。在 100 万个元素的数组里，可能需要找 100 万次。

当然，可能很快就能找到想要的值，但是大 O 表示法描述的是算法会花费的最大时间。

![O(n) Linear Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-n--linear-time-graph.png)

## O(n^2) - 二次时间

对于二次时间，每个参会者都有自己的蛋糕，另外，每个蛋糕上的奶油都有所有人的签名。

在这种情况下一人参会需要 1 个蛋糕和 1 个签名。两人参会需要 2 个蛋糕，每个蛋糕都需要 2 个名字（一共 4 个名字）。三人参会需要 3 个蛋糕，每个蛋糕都有 3 个名字，一共 9 个名字。

![O(n^2) Quadratic Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n-2--quadratic-time.png)

‘n’ 个人参会需要签 n\*n 个名字（也就是 n 的平方或者 n 的二次方），因此制作蛋糕（以及签名）的时间和参会人数的平方相关。

O(n^2) 操作的一个例子是暴力搜索数组中的重复项。遍历数组中的所有元素，对于每一个元素，在遍历一遍数组看是否有和其相同的元素。

对于 10 个元素的数组，外部需要循环 10 次，每一次外部循环都需要内部循环 10 次，总共是 100 次。对于 100 万个元素的数组，需要 10000 亿次。

还有一个比 O(n^2) 更普遍的情况，和时间与 n 的平方相关不同，它与 n 的 c 次方相关 （n^c）。这通常叫做多项式时间。

![O(n^2) Quadratic Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-n-2--quadratic-time-graph.png)

## O(n!) - 阶乘时间

阶乘时间，所有参会的人进行[法式滚球][1]比赛，赢的人拿走蛋糕。

还存在一个小问题，先投球的玩家会更劣势。为了解决这个问题，同时进行多场比赛，每组都会先手一次。所有比赛的排列都会写在蛋糕的奶油上。

这意味着两人参会会有两场比赛，每一个选手都会依次先手。三人参会会有 6 场比赛（假设选手为安娜 A、布莱恩 B 和克里斯 C，那么排列会是 ABC、ACB、BAC、BCA、CAB、CBA）。
 
![O(n!) - Factorial Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n---factorial-time.png)

 ‘n’ 个人参会需要 n! 或者 n 的阶乘次比赛，制作蛋糕的时间与阶乘相关。

n! 的计算是从 n 到 1 的所有数相乘， “n \* (n - 1) \* (n - 2) …… \* 2 \* 1”。对于两人聚会就是 2 \* 1 也就是 2。对于三人聚会就是 3 \* 2 \* 1，也就是 6。

需要分析列表组合的算法就是 O(n!) 操作，比如[旅行商问题][2]。
![O(n!) Factorial Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/image-165.png)

## 结论

希望生日蛋糕能让大 O 表示法更好理解。下图也是一个很好的记忆辅助工具，展示了算法的相对速度（如果有的选，要选更快的算法！）

![Big O Notation graph](https://www.freecodecamp.org/news/content/images/2020/12/image-166.png)

还有一些其它的大 O 表示法，比如 O(n log n) 和 O(c^n)，但是他们都遵循相同的模式，如果想了解更多，[查看这篇文章][3]。

[1]: https://en.wikipedia.org/wiki/P%C3%A9tanque
[2]: https://en.wikipedia.org/wiki/Travelling_salesman_problem
[3]: https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
