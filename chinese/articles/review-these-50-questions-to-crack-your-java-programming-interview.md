> * 原文地址：[Review these 50 questions to crack your Java programming interview 50 道常问的 Java 面试题及答案](https://www.freecodecamp.org/news/review-these-50-questions-to-crack-your-java-programming-interview-69d03d746b7f/)
> * 原文作者：javinpaul
> * 译者：zhannicholas
> * 校对者：

![Review these 50 questions to crack your Java programming interview](https://cdn-media-1.freecodecamp.org/images/1*s73cLB7vYz05f-aw_QAgFw.png)

#### 求职面试中的高频 Java 问题

大家好！在过去的几年里，我分享了很多 [Java 面试题][1] 和相关讨论。我的很多读者都要求我把它们整理在一起，以便他们能够在一个地方查看，因此这篇文章应运而生。

这篇文章包含了超过 **50 个 Java 面试问题**，涵盖了所有重要主题，例如 Java 基础知识、[Java 集合框架][2]、[Java 多线程与并发][3]、[Java IO][4]、[JDBC][5]、[JVM 内部原理][6]、[编码问题][7]和[面向对象编程][8]等等。

这些问题也在面试中经常出现，但它们并不是很难。你可能已经在电话或现场面试中碰到过它们了。

这些问题也非常适用于回顾像多线程和集合这样的重要主题。此外，我还分享了一些很有用的进阶资源，例如 [**The Complete Java MasterClass**][9]，它们不仅能帮你提高 Java 技能，还能填补技能空白。

那我们还等什么呢？这里列出了一些面试中最常问的 Java 问题，这些问题对初学者和有经验的 Java 开发者都适用。

### 为 2-3 年经验程序员准备的 50+ Java 面试题

我就不浪费你的时间了，这里就是我为初级程序员（初学者和 2-3 年经验的开发者）整理的常见 [Java 面试题][10]。

**1) Java 是如何实现跨平台的？（[答案][11]）**  
提示：字节码和 Java 虚拟机。

**2) Java 中的 `ClassLoader` 是什么？（[答案][12]）**  
提示：它是 JVM 的一部分，用来帮类加载字节码。你可以写自己的 `ClassLoader`。

**3) 写一个 Java 程序判断一个数字是偶数还是奇数？（[答案][13]）**  
提示：你可以使用位运算符，例如按位与（AND）。记住，偶数的二进制格式的末尾为 0，而奇数的二进制格式末尾为 1。

**4) `ArrayList` 与 `HashSet` 有什么不同？（[答案][14]）**  
提示：`List` 和 `Set` 之间的所有差异在这里都适用，例如有序性、元素的重复性、随机搜索等等。若想学习更多有关 ArrayList、HashSet 和 Java 中其它重要集合的知识，你可以查看 Richard Warburton 的[**Java Fundamentals: Collections**][15]。

![](https://cdn-media-1.freecodecamp.org/images/ueOwMAd5GBdw4blCOpEBpOdMOtcs-et6nPYA)

**5) 什么是单例模式中的双重检查锁（double checking locking）？（[答案][16]）**  
提示：两次检查一个实例是否初始化，第一次无锁，而第二次有锁。

**6) 你如何在 Java 中创建一个线程安全的单例？（[答案][17]）**  
提示：方法有很多，例如使用枚举类、双重检查锁或嵌套静态类。

**7) 何时在 Java 中使用 volatile 变量？（[答案][18]）**  
提示：当你需要告知 JVM 某个变量可能被多个线程修改，并提示 JVM 不要缓存该变量的值的时候。

**8) 何时使用 transient 变量？（[答案][19]）**  
提示：当你想让一个实现了 `Serializable` 接口的类中的某个变量不会被序列化的时候。换句话说，当你不想在序列化对象时保存某个变量的值，你就可以用 `transient` 关键字修饰这个变量。若想了解更多有关 Java 中 transient 变量的信息，你可以查看 [**The Complete Java MasterClass**][20]。

**9) Java 中的 transient 变量和 volatile 变量有什么不同？（[答案][21]）**  
提示：完全不同，一个用于序列化，而另一个用于并发。

**10) Java 中的 Serializable 和 Externalizable 有什么区别？（[答案][22]）**  
提示：Externalizable 可以让你更好地控制序列化过程。

**11) 我们能重写 Java 中的私有方法吗？（[答案][23]）**  
提示：不能。因为 Java 中要求被重写的父类方法在子类中是可见的，而父类的私有方法对子类不可见。

**12) Java 中的 `Hashtable` 与 `HashMap` 有什么不同？（[答案][24]）**  
提示：不同点有几个，但最重要的是：`Hashtable` 是同步的，而 `HashMap` 不是。和 `HashMap` 相比，`Hashtable` 是历史遗留类并且很慢。

**13) Java 中的 `List` 与 `Set` 有什么不同？（[答案][25]）**  
提示：`List` 有序并允许重复元素，`Set`无序并不允许重复元素。

**14) Java 中的 `ArrayList` 与 `Vector` 有什么不同（[答案][26]）**  
提示：不同点有很多，但最重要的是：`ArrayList` 是非同步的并且很快，而 `Vector` 是同步的并且很慢。`Vector` 也和 `Hashtable` 一样是历史遗留类。

**15) Java 中的 `Hashtable` 与 `ConcurrentHashMap` 有什么不同？（[答案][27]）**  
提示：后者的可扩展性更强。查看 Richard Warburton 的 [**Java Fundamentals: Collections**][28] 以了解更多相关信息。

**16) `ConcurrentHashMap` 是如何实现可扩展性的？（[答案][29]）**  
提示：通过将 map 分割为段（segment）并且只在写操作时加锁。

**17) 要将某个 `Object` 用作 `HashMap` 的 `Key`，你需要重写哪两个方法？（[答案][30]）**  
提示：equals 和 hashcode。

**18) Java 中的 wait 和 sleep 有什么不同？（[答案][31]）**  
提示：`wait()` 方法会释放锁或 monitor，而 sleep 不会。

**19) Java 中的 `notify` 和 `notifyAll` 有什么不同？（[答案][32]）**  
提示：`notify` 随机通知一个等待该锁的线程，而 `notifyAll` 通知所有等待该锁的线程。如果你非常确定只有一个线程在等待锁，就使用 `notify`，否则使用 `notifyAll` 会更好。若想了解更多线程相关的基础知识，你可以参阅 Java 大师 Heinz Kabutz 的 [**Threading Essentials Mini-Course**][33]。

**20) 在 Java 中，为什么你要一起重写 hashcode 和 `equals()` ？（[答案][34]）**  
提示：为了符合 equals 和 hashcode 的约定，当你将对象存储到集合类（例如 `HashMap` 或 `ArrayList`）中时，你就需要这么做。

**21) `HashMap` 的负载因子（load factor）的有什么含义？（[答案][35]）**  
提示：负载因子就是触发 `HashMap` 重新调整容量的阈值，通常为 0.75，表示 `HashMap` 在容量达到了 75% 后就会调整自身大小。

**22) Java 中的 `ArrayList` 与 `LinkedList` 有什么区别？（[答案][36]）**  
提示：与数组和链表一样，一个允许随机搜索而另一个不允许。链表上的插入和删除很容易，而数组上的查询很容易。若想了解更多有关 Java 数据结构的信息，你可以查看 Richard Warburton 在 Pluralsight 上的课程 [**Java Fundamentals: Collections**][37]。

**23) Java 中的 `CountDownLatch` 与 `CyclicBarrier` 有什么不同？（[答案][38]）**  
提示：你可以在屏障（barrier）被打破之后重用 `CyclicBarrier`，但你不能在计数达到零之后重用 `CountDownLatch`。

**24) 在 Java 中，何时使用 `Runnable` 而不是 `Thread` ?（[答案][39]）**  
提示：永远都使用 `Runnable`。

**25) 为什么说 Java 中的枚举类（Enum）是类型安全的？（[答案][40]）**  
提示：这意味着你不能将其它枚举类型的实例赋值给一个枚举变量。例如，如果你已经有了一个叫做 `DayOfWeek` 的枚举变量，你就不能再将 `DayOfMonth` 的值赋给它了。

**26) Java 中 Integer 的自动装箱是如何实现的？（[答案][40]）**  
提示：通过使用 `valueOf()` 方法。

**27) `PATH` 与 `ClassPath` 有什么区别？（[答案][42]）**  
提示：`PATH` 由操作系统使用，而 `Classpath` 是 JVM 用来定位 Java 二进制文件（例如 JAR 文件或 Class 文件）的。查看 **[Java Fundamentals: The Core Platform][43]** 以了解更多有关 `PATH`、`Classpath` 和其它 Java 环境变量的信息。

![](https://cdn-media-1.freecodecamp.org/images/io-lPE67oMG1oBh204LvPm61t7kAcLFvp-B6)

**28) Java 中方法的重载与重写有什么区别？（[答案][44]）**  
提示：重写发生在子类中，而重载发生在同一个类中。此外，重写发生在运行时，而重载在编译时就解析了。

**29) 在 Java 中，如何防止一个类被继承？（[答案][45]）**  
提示：直接把该类的构造函数设置为私有的。

**30) 如何防止你的类被客户端使用？（[答案][46]）**  
提示：将构造函数设置为私有，或直接在构造函数中抛出一个异常。

**31) Java 中的 `StringBuilder` 和 `StringBuffer` 有什么不同？（[答案][47]）**  
提示：`StringBuilder` 不是同步的，而 `StringBuffer` 是同步的。

**32) Java 中的多态与继承有什么区别？（[答案][48]）**  
提示：继承允许代码重用并能建立类之间的关系，这正是多态所需要的。多态提供动态行为。查看 [**Java Fundamentals: Object-Oriented Design**][49] 以了解更多 OOP 的特性。

**33) 在 Java 中，我们能重写静态方法吗？（[答案][50]）**  
提示：不能，因为重写在运行时才解析，而静态方法调用在编译期间就解析了。

**34) 在 Java 中，我们能访问私有方法吗？（[答案][51]）**  
提示：能，在同一个类中就可以，在类之外则不行。

**35) Java 中的接口与抽象类有什么不同？（[答案][52]）**  
提示：从 [Java 8][53] 开始，二者的差异不再那么明显了。然而，一个 Java 类还是可以实现多个接口，却只能继承一个类。

**36) Java 中的 DOM 和 SAX 解析器有什么区别？（[答案][54]）**  
提示：DOM 将整个 XML 文件都载入内存，而 SAX 没有这么做。SAX 是一个基于事件的解析器，可以解析大文件，但 DOM 更快，是小文件的首选。

**37) Java 中的 throw 和 throws 关键字有什么区别？（[答案][55]）**  
提示：throws 声明一个方法在出错时可能抛出的异常，而 throw 关键字实际上会抛出一个异常。查看 [**Java Fundamentals: Exception Handling**][56] 以了解更多有关 Java 异常处理的信息。

![](https://cdn-media-1.freecodecamp.org/images/QSqKD-b97Dr36kViV1eTdvqNVNgdZRp52D7n)

**38) Java 中的 fail-safe 和 fail-fast 迭代器有什么区别？（[答案][57]）**  
提示：fail-safe 不会抛出 `ConcurrentModificationException`，而 `fail-fast` 在迭代集合的过程中检测到集合被修改时会抛出这个异常。

**39) Java 中的 Iterator 与 Enumeration 有什么区别？（[答案][58]）**  
提示：Iterator 还允许你在迭代时删除元素，而 Enumeration 不允许你这么做。

**40) Java 中的 `IdentityHashMap` 是什么？（[答案][59]）**  
提示：它是一个用 `==` 而不是 `equals()` 方法判断相等性的 `Map`。

**41) Java 中的 `String` 池是什么？（[答案][60]）**  
提示：一个 `String` 字面量池。记住， JDK 7 已经将它从永久代移到堆中了。

**42) 在 Java 中，一个实现了 `Serializable` 接口的类可以包含不可序列化的字段吗？（[答案][61]）**  
提示：可以，但是你需要将它设置为 static 的或者 transient 的。

**43) Java 中的 this 和 super 有什么区别？（[答案][62]）**  
提示：this 指向的是当前实例，而 super 指向的是父类的一个实例。

**44) Java 中的 `Comparator` 与 `Comparable` 有什么区别？（[答案][63]）**  
提示：`Comparator` 定义的是自定义顺序，而 `Comparable` 定义的是对象的自然顺序，例如 `String` 的字母顺序。若想了解更多有关 Java 中排序的信息，你可以查看 **[The Complete Java MasterClass][64]**。

![](https://cdn-media-1.freecodecamp.org/images/DOCGFtdTMhjj3faRAiQ69ZSTxf2pffyroFfv)

**45) Java 中的 `java.util.Date` 和 `java.sql.Date` 有什么不同？（[答案][65]）**  
提示：前者既包含日期又包含时间，而后者只包含日期部分。

**46) 为什么 Java 中的 wait 和 notify 方法被声明在 `Object` 类中？（[答案][66]）**  
提示：因为它们需要锁，而这个锁只能从对象上获取。

**47) 为什么 Java 不支持多继承？（[答案][67]）**  
提示：因为多继承在 C++ 中使用很糟糕。但是在 Java 8 中，多继承在某种程度上是支持的——现在的 Java 中只是不支持 `Type` 的多继承。

**48) Java 中的受检异常和非受检异常有什么区别？（[答案][68]）**  
提示：如果是受检异常，你必须使用 catch 块进行处理。而非受检异常的没这个限制，编译过程中也不会出现任何问题。

**49) Java 中的错误（Error）和异常（Exception）有什么区别？（[答案][69]）**  
提示：我打字打累了，直接看答案吧。

**50) Java 中的竞态条件（Race condition）和死锁（Deadlock）有什么区别？（[答案][70]）**  
提示：二者都是并发程序中出现的问题，前者发生在线程调度的过程中，而后者是糟糕的代码导致的。查看 [Multithreading and Parallel Computing in Java][71] 以了解更多有关死锁、竞态条件和其它多线程问题的信息。

### 结语

感谢你阅读本文！祝你面试顺利！虽然面试很难，这份路线图的指导会让你离 [DevOps 工程师][72] 更进一步。

如果你喜欢这篇文章，请把它分享给你的朋友和同事，别忘了在 Twitter 上关注 [javinpaul][73] 哦！

#### 更多资源

-   [Java 面试指南：200+ 面试问题和答案][74]
-   [Spring 框架面试指南：200+ 问题和答案][75]
-   [John Sonmez：如何准备求职面试][76]
-   [Markham：Java 面试揭秘][77]
-   [通关编程面试 —— 189 个问题和答案][78]
-   [求职面试中的数据结构与算法分析][79]
-   [过去五年中的 130+ Java 面试问题][80]

> **P.S. —**  如果你需要一些 **免费** 的 Java 学习资源，你可以从 [**free Java courses**][81] 开始。
>    
> **P. S. S. —**  我还没有回答图片“How many String objects are created in the code?”中的那个面试问题。你能试着回答一下吗？
  

[1]: http://javarevisited.blogspot.sg/2015/10/133-java-interview-questions-answers-from-last-5-years.html
[2]: https://javarevisited.blogspot.com/2011/11/collection-interview-questions-answers.html
[3]: https://javarevisited.blogspot.com/2014/07/top-50-java-multithreading-interview-questions-answers.html#axzz5ghebTpxm
[4]: https://javarevisited.blogspot.com/2014/08/socket-programming-networking-interview-questions-answers-Java.html
[5]: https://javarevisited.blogspot.com/2012/12/top-10-jdbc-interview-questions-answers.html
[6]: http://www.java67.com/2016/08/10-jvm-options-for-java-production-application.html
[7]: http://www.java67.com/2018/06/data-structure-and-algorithm-interview-questions-programmers.html
[8]: http://www.java67.com/2015/12/top-30-oops-concept-interview-questions-answers-java.html
[9]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fjava-the-complete-java-developer-course%2F
[10]: http://www.java67.com/2018/03/top-50-core-java-interview-questions.html
[11]: http://www.java67.com/2012/08/how-java-achieves-platform-independence.html
[12]: http://javarevisited.blogspot.sg/2012/12/how-classloader-works-in-java.html#axzz59AWpr6cb
[13]: http://javarevisited.blogspot.sg/2013/04/how-to-check-if-number-is-even-or-odd.html#axzz59AWpr6cb
[14]: http://www.java67.com/2012/07/difference-between-arraylist-hashset-in-java.html
[15]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-collections
[16]: http://www.java67.com/2016/04/why-double-checked-locking-was-broken-before-java5.html
[17]: http://javarevisited.blogspot.sg/2012/12/how-to-create-thread-safe-singleton-in-java-example.html
[18]: http://www.java67.com/2012/08/what-is-volatile-variable-in-java-when.html
[19]: http://www.java67.com/2012/08/what-is-transient-variable-in-java.html
[20]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fjava-the-complete-java-developer-course%2F
[21]: http://www.java67.com/2012/11/difference-between-transient-vs-volatile-modifier-variable-java.html
[22]: http://www.java67.com/2012/10/difference-between-serializable-vs-externalizable-interface.html
[23]: http://www.java67.com/2013/08/can-we-override-private-method-in-java-inner-class.html
[24]: http://javarevisited.blogspot.sg/2010/10/difference-between-hashmap-and.html#axzz53B6SD769
[25]: http://javarevisited.blogspot.sg/2012/04/difference-between-list-and-set-in-java.html#axzz53n9YK0Mb
[26]: http://www.java67.com/2012/09/arraylist-vs-vector-in-java-interview.html
[27]: http://javarevisited.blogspot.sg/2011/04/difference-between-concurrenthashmap.html#axzz4qw7RoNvw
[28]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-collections
[29]: http://javarevisited.blogspot.sg/2017/08/top-10-java-concurrenthashmap-interview.html#axzz50U9xyqbo
[30]: http://www.java67.com/2013/06/how-get-method-of-hashmap-or-hashtable-works-internally.html
[31]: http://www.java67.com/2012/08/what-are-difference-between-wait-and.html
[32]: http://www.java67.com/2013/03/difference-between-wait-vs-notify-vs-notifyAll-java-thread.html
[33]: https://javaspecialists.teachable.com/p/threading-essentials/?product_id=539197&coupon_code=SLACK100?affcode=92815_johrd7r8
[34]: http://javarevisited.blogspot.sg/2015/01/why-override-equals-hashcode-or-tostring-java.html#axzz55oDxm8vv
[35]: http://www.java67.com/2017/08/top-10-java-hashmap-interview-questions.html
[36]: http://www.java67.com/2012/12/difference-between-arraylist-vs-LinkedList-java.html
[37]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-collections
[38]: http://www.java67.com/2012/08/difference-between-countdownlatch-and-cyclicbarrier-java.html
[39]: http://www.java67.com/2016/01/7-differences-between-extends-thread-vs-implements-Runnable-java.html
[40]: http://www.java67.com/2014/04/what-java-developer-should-know-about-Enumeration-type-in-Java.html
[41]: http://javarevisited.blogspot.sg/2012/07/auto-boxing-and-unboxing-in-java-be.html#axzz59AWpr6cb
[42]: http://www.java67.com/2012/08/what-is-path-and-classpath-in-java-difference.html
[43]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-core-platform
[44]: http://www.java67.com/2015/08/top-10-method-overloading-overriding-interview-questions-answers-java.html
[45]: http://www.java67.com/2017/06/10-points-about-final-modifier-in-java.html
[46]: http://javarevisited.blogspot.sg/2016/01/why-jpa-entity-or-hibernate-persistence-should-not-be-final-in-java.html
[47]: http://www.java67.com/2016/10/5-difference-between-stringbuffer.html
[48]: http://www.java67.com/2014/04/difference-between-polymorphism-and-Inheritance-java-oops.html
[49]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-object-oriented-design
[50]: http://www.java67.com/2012/08/can-we-override-static-method-in-java.html
[51]: http://www.java67.com/2012/08/can-we-override-private-method-in-java.html
[52]: http://www.java67.com/2017/08/difference-between-abstract-class-and-interface-in-java8.html
[53]: https://dzone.com/articles/5-courses-to-crack-java-certification-ocajp-1z0-80
[54]: http://www.java67.com/2012/09/dom-vs-sax-parser-in-java-xml-parsing.html
[55]: http://www.java67.com/2012/10/difference-between-throw-vs-throws-in.html
[56]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fjava-fundamentals-exception-handling
[57]: http://www.java67.com/2015/06/what-is-fail-safe-and-fail-fast-iterator-in-java.html
[58]: http://javarevisited.blogspot.sg/2010/10/what-is-difference-between-enumeration.html#axzz59AWpr6cb
[59]: http://www.java67.com/2016/09/difference-between-identityhashmap-weakhashmap-enummap-in-java.html
[60]: http://javarevisited.blogspot.sg/2016/07/difference-in-string-pool-between-java6-java7.html#axzz4pGGwsyna
[61]: http://javarevisited.blogspot.sg/2016/09/how-to-serialize-object-in-java-serialization-example.html
[62]: http://www.java67.com/2013/06/difference-between-this-and-super-keyword-java.html
[63]: http://www.java67.com/2013/08/difference-between-comparator-and-comparable-in-java-interface-sorting.html
[64]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fjava-the-complete-java-developer-course%2F
[65]: http://javarevisited.blogspot.sg/2012/04/difference-between-javautildate-and.html
[66]: http://javarevisited.blogspot.sg/2012/02/why-wait-notify-and-notifyall-is.html
[67]: http://javarevisited.blogspot.sg/2011/07/why-multiple-inheritances-are-not.html
[68]: http://javarevisited.blogspot.sg/2011/12/checked-vs-unchecked-exception-in-java.html
[69]: http://www.java67.com/2012/12/difference-between-error-vs-exception.html
[70]: http://javarevisited.blogspot.sg/2012/02/what-is-race-condition-in.html#axzz59AbkWuk9
[71]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fmultithreading-and-parallel-computing-in-java%2F
[72]: https://hackernoon.com/10-free-courses-to-learn-docker-for-programmers-and-devops-engineers-7ff2781fd6e0
[73]: https://twitter.com/javinpaul
[74]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fjava-interview-questions-and-answers%2F
[75]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fspring-interview-questions-and-answers%2F
[76]: https://pluralsight.pxf.io/c/1193463/424552/7490?u=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fdeveloper-job-interviews
[77]: http://www.amazon.com/Java-Programming-Interviews-Exposed-Markham/dp/1118722868?tag=javamysqlanta-20
[78]: http://www.amazon.com/Cracking-Coding-Interview-6th-Edition/dp/0984782850/?tag=javamysqlanta-20
[79]: https://click.linksynergy.com/fs-bin/click?id=JVFxdTr9V80&subid=0&offerid=323058.1&type=10&tmpid=14538&RD_PARM1=https%3A%2F%2Fwww.udemy.com%2Fdata-structure-and-algorithms-analysis%2F
[80]: http://javarevisited.blogspot.sg/2015/10/133-java-interview-questions-answers-from-last-5-years.html
[81]: http://www.java67.com/2018/08/top-10-free-java-courses-for-beginners-experienced-developers.html
