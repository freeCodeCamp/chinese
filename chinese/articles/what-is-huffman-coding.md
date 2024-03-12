> -   原文地址：[What is Huffman Coding?  什么是霍夫曼编码？](https://www.baseclass.io/huffman-coding/)
> -   原文作者：[Dave](https://www.twitter.com/davejsaunders)*
> -   译者： ZhichengChen
> -   校对者：

许多压缩算法（例如 DEFLATE）的核心都是霍夫曼编码算法，DEPLATE 是 PNG 图像格式和 GZIP 的压缩算法。

您是否也曾想过：

-   如何压缩某些东西而不丢失任何数据？
-   为什么有些算法压缩得比其他算法好？
-   GZIP 是如何工作？

假设我们要压缩一个字符串（霍夫曼编码可以用于任何数据，但是字符串是很好的例子）。

不可避免地，在要压缩的文本中，某些字符会比其他字符出现得更频繁。 霍夫曼编码（Huffman Coding）基于这一事实，对文本进行了编码，以使**最常用的字符比不常用的字符占用更少的空间**。

## 编码字符串

让我们使用霍夫曼编码来压缩星球大战中 Yoda 的口头禅： “do or do not”。

![Yoda](https://www.baseclass.io/huffman-coding/yoda.png)

“do or do not” 的长度为 12 个字符。 它有几个重复的字符，因此应该可以压缩一下。

为了便于讨论，假设存储每个字符需要 8 bits（字符编码完全是另一个主题）。这句话将占用 96 bits，但是使用霍夫曼编码可以做得更好！

先从建立树形结构开始。 数据中出现频率更高的字符更靠近树的根，而离根远的节点字符出现频率更低。

这是字符串 “do or do not” 的霍夫曼树：

![Huffman Tree](https://www.baseclass.io/huffman-coding/1.png)

字符串中最常见的字符是 “ o”（出现 4 次）和空格（出现 3 次）。请注意，这些字符的路径离根只有两步，而最不常见的字符（"t"）则有三步。

所以，可以不存储字符，而存储**指向字符的路径**。

从根节点开始，然后沿着树一直向着要编码的字符前进。 如果向左走，则将存储一个 `0`，如果向右走，则将存储一个 `1`。

这是使用这棵树编码第一个字符 d 的方法：

![Huffman Tree encoding 'd'](https://www.baseclass.io/huffman-coding/2.png)

最终结果是 `1` `0` `0` - 3 位而不是 8 位。这是一个很大的改进！

编码后的全部字符串如下所示：

!['do or do not' encoded using the tree](https://www.baseclass.io/huffman-coding/3.png)

占用 29 位而不是 96 位，并且没有数据丢失。 优秀！

## 解码字符串

要解码文本，只需根据 `0`（左分支）或 `1`（右分支）前进，直到获取到一个字符。 写下该字符，然后从顶部重新开始：

![Decoding using the tree'](https://www.baseclass.io/huffman-coding/4.png)

## 发送编码后的文本

但是等等，当我们将编码后的文本发送给其他人时，他们不是也需要这个编码树？ 是的！ **另一端需要相同的霍夫曼树才能正确解码文本**。

最简单也是最低效的方法是将树与压缩文本一起发送。

当然也可以先约定同一棵树，然后使用该树对字符串进行编解码。 如果可以提前预测字符的分布，构建一个相对高效而无需每次都分析内容的树（例如，使用英文文本）也是可以的。

另一种选择是发送足够多的信息，以保证另一端与我们建立的是同一棵树（这也是 GZIP 的工作方式）。 例如，我们可以发送每个字符出现的总次数。 但是必须要小心；**对于相同的文本块，可能有不止一个霍夫曼树**，因此必须确保双方都以完全相同的方式构造树。

## 想要了解更多？

查看以下链接：

-   [How to build the Huffman tree (it’s easier than you think)](https://www.programiz.com/dsa/huffman-coding)
-   [How this is used in GZIP](https://jvns.ca/blog/2015/02/22/how-gzip-uses-huffman-coding/)
