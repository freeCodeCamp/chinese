> -   原文地址：[How Big O Notation Works – Explained with Cake](https://www.freecodecamp.org/news/big-o-notation/)
> -   原文作者：cedd burge
> -   译者：ZhichengChen
> -   校对者：

![How Big O Notation Works – Explained with Cake](https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDEyfHxjYWtlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=2000)

Big O notation is used in computer science to define an upper bound of an algorithm. It is mostly used to define the maximum time of an algorithm as a function of the input size, but it can also be used to define memory usage.

In this article we will talk through the most common types of ‘Big O’ notation, using birthday cakes to illustrate the concepts. We'll pretend we're hosting a party, and need to determine how many cakes to bake based on how many people attend.

## O(1) - Constant Time

For the Constant Time example, no matter how many people come to the birthday party, you only make one cake. So the cake making time stays constant.

![0(1) Constant Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-1--constant-time.png)

Note that Big O notation doesn’t specify how long the Constant Time is (maybe it takes 1 hour to make the cake, maybe it takes 4 hours). It just states that the time taken doesn’t increase with the number of guests.

A real world example of an O(1) operation is accessing an array by its index. It is just as quick to retrieve an element from a 10 item array as it is to retrieve an element from a 1 million item array.

![0(1) Constant Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-1--constant-time-grqph.png)

## O(log n) - Logarithmic Time

For the Logarithmic Time example, the birthday cakes are used as a way to incentivise people to turn up to the party on time.

The first person to arrive gets a cake all to themselves. Then the next 2 people to arrive share a cake. Then the next 4 people all share a cake, and so on.

So a 1 person party requires 1 cake. A 2 or 3 person party requires 2 cakes. A 4 - 7 person party requires 3 cakes, and a 8 to 15 person party requires 4 cakes. In general an ‘n’ person party requires log_2_(n) cakes.

![O(log n) Logarithmic Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-log-n--logarithmic-time.png)

The most common real world example of an O(log n) operation is a binary search of an ordered array.

This algorithm looks at the middle of an array and sees if the value is lower or higher than the one it is looking for. Since the list is ordered, it then knows which half of the array the target value is in.

It then repeats the process with that half of the array. So for a 16 item array, the first iteration narrows down the search to 8 items, then 4 then 2 and then 1, for a maximum of 4, or log_2_(16), iterations over all.

![O(log n) Logarithmic Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-log-n--logarithmic-time-graph.png)

## O(n) - Linear Time

For the Linear Time example, each guest gets their own cake. If ‘n’ people come to the party, you need to make ‘n’ cakes. So the time taken is related to the number of guests.

![O(n) Linear Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n--linear-time.png)

Again Big O notation doesn’t specify how long the time is (maybe it takes 1 hour to make the cake, maybe it takes 4 hours), it just states that the time increases linearly with the number of guests.

A real world example of an O(n) operation is a naive search for an item in an array. In a 10 item array, at worst you will have to look all 10 items to find the one you want. But for a 1 million item array, you may have to look at all 1 million.

Of course, you might find the solution sooner, but Big O notation specifies the maximum amount of time that an algorithm will take.

![O(n) Linear Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-n--linear-time-graph.png)

## O(n^2) - Quadratic Time

For the Quadratic Time example, each guest gets their own cake. Additionally, each cake has the names of all the guests written on it, with some delicious icing.

In this case a 1 person party has one cake with one name on it. A 2 person party has two cakes, both with two names on (4 names total) and a 3 person party has three cakes, all with three names on them, which is 9 names in total.

![O(n^2) Quadratic Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n-2--quadratic-time.png)

In general, an ‘n’ person party requires n\*n names to be written (also known as n squared, or n to the power of 2), so the speed of making cakes (and writing all the names) is related to the square of the number of guests.

A real world example of an O(n^2) operation is a naive search for duplicates in an array. In this scenario, you loop through all the items in the array, and for each of those items, loop through the array again to see if there are any matches.

For a 10 item array, the outer loop has 10 iterations, and for each of those there are 10 iterations of the inner loop, for 100 in total. For a 1 million item array, it is 1000 billion.

There is a more general case of O(n^2), where instead of the time being relative to n to the power of 2 (n^2), it is relative to n to the power of c (n^c). This is usually called Polynomial Time.

![O(n^2) Quadratic Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/o-n-2--quadratic-time-graph.png)

## O(n!) - Factorial Time

For the Factorial Time example, the guests take part in a  [Pétanque][1]  competition, and the winner takes home the cake.

There is a slight issue, though, in that the player that takes the first turn is at a disadvantage. To help level things out, many games are played, so that each permutation of guests is covered and everyone gets to go first. All these permutations are written on to the cake, again with some tasty icing.

This means that a 2 person party has two games, as each guest takes it in turn to go first. A 3 person party has 6 games (if we imagine that the guests are Anna, Brian and Chris, then the permutations are ABC, ACB, BAC, BCA, CAB, CBA).

![O(n!) - Factorial Time Illustration](https://www.freecodecamp.org/news/content/images/2020/12/o-n---factorial-time.png)

In general, an ‘n’ person party requires n!, or n factorial games, so the speed of making the cake is related to the this.

n! is calculated by multiplying all whole numbers from n down to one “n \* (n - 1) \* (n - 2) …… \* 2 \* 1”. So for the 2 person party it is 2 \* 1, or 2. For the three person party it is 3 \* 2 \* 1, which is 6.

Real world examples of O(n!) operations are anything that requires analysing a list of permutations, such as the  [traveling salesman problem][2].

![O(n!) Factorial Time Graph](https://www.freecodecamp.org/news/content/images/2020/12/image-165.png)

## Conclusions

Hopefully the birthday cakes have made ‘Big O’ notation easier to digest! The graph below is also a good memory aid, showing the relative speeds of the algorithms (if there is a choice, then you want the faster one!)

![Big O Notation graph](https://www.freecodecamp.org/news/content/images/2020/12/image-166.png)

There are quite a few other ‘Big O’ notations, such as O(n log n) and O(c^n) but they all follow the same pattern. If you want to learn more about it,  [check out this article][3].

[1]: https://en.wikipedia.org/wiki/P%C3%A9tanque
[2]: https://en.wikipedia.org/wiki/Travelling_salesman_problem
[3]: https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
