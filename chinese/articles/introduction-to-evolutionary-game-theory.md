> -  原文地址：[Introduction to Evolutionary Game Theory](https://www.freecodecamp.org/news/introduction-to-evolutionary-game-theory/)
> -  原文作者：[Peter GleesonPeter Gleeson](https://www.freecodecamp.org/news/author/peter/)
> -  译者：Shenghan0329
> -  校对者：

![Introduction to Evolutionary Game Theory](https://images.unsplash.com/photo-1521427887716-b3e96ad066a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDM5fHxoYXdrfGVufDB8fHx8MTYxNjc2NjIwNQ&ixlib=rb-1.2.1&q=80&w=2000)

长期以来，合作社会行为的演化一直吸引着演化生物学家。

数学领域里的博弈论有助于阐明它是如何出现的。 博弈论是“之于理性决策者之间战略互动的数学模型的研究” (来自于[维基百科](https://en.wikipedia.org/wiki/Game_theory)).

博弈论适用于各种各样的“博弈”，比如说经济学、政治学、国际象棋和井字游戏。在每种博弈下，都会有一些规则，一些“参与者”或“代理者”，以及一套可供他们使用的策略。

每个玩家都有一个叫做“效用”的概念——一种“货币”，并且他们会试图通过各种策略来实现“货币”的最大化。

在演化中，这种货币是[适应度](https://www.nature.com/scitable/blog/accumulating-glitches/the_meaning_of_fitness/).

适应度是个体的基因能在后代中出现的机会。也就是说，能使个体更可能存活到成年的基因和性状更容易被遗传给下一代。所以说，携带了这些基因和性状的个体会有更高的适应度。

演化博弈论采用了博弈论里的概念，并且将它们用于了演化背景中。

一个演化博弈论的模型可以让你了解哪些策略能够占上风，以及哪些策略可以共存。如果多种策略能共存的话，它们共存的频率是多少呢？

## 复制器动力学

演化博弈论中的博弈能延续很多代。

每轮博弈会改变参与者的效用（也就是适应度）。参与者总体的适应度越高，他们生产的下一代越多。

这种设定被叫做“复制器动力学”。不难通过建模来模拟和探索各种不同的演化博弈论模型。

演化博弈论的经典模型是约翰·梅纳德·史密斯在 20 世纪 70 年代推广的“鹰-鸽”博弈。

在这个博弈中，有一群动物争夺有限的资源（例如食物）。一个个体赢得的资源越多，他的适应度就越高。

每个动物可以使用以下两种策略中的一种：

-   **鹰派** 具有进攻性，他们会不惜一切代价来争抢某个资源。
-   **鸽派** 比较和平, 他们会分享某个资源而不是争抢。

它们都是一种动物，也就是说“鹰派”和“鸽派”只是描述它们的行为。

有三种可能存在的竞争：

**鹰派 vs 鹰派**

-   如果两个鹰派竞争，它们会进行五五开的战斗来赢取资源。这是一个赢者通吃的情况——赢家得到所有的资源。受伤的输家付出代价，并减少相当一部分的适应度。

**鹰派 vs 鸽派**

-   如果一个鹰派遇到了一个鸽派，鸽派会很快退缩。鹰派会赢得所有的资源，而鸽派会空手而归。但是任何一方都不会付出代价。

**鸽派 vs 鸽派**

-   当两个鸽派相遇时，它们会同意平分资源。没人会受伤。

我们可以通过数学来模拟这种博弈。通过建模，我们可以更好地了解这些策略是否能共存（或者说某种策略占上风）。

### 复制器动力学背后的数学

设 _V_ 为赢得比赛的价值，_C_ 为比赛中受伤的代价。

将鹰派在种群中的频率表示为 _p_，鸽派的频率则为 _1-p_。

现在，定义两个函数 F（H）和 F（D），这两个函数分别定义了鹰派策略和鸽派策略的期望适合度。

鹰派策略意味着参加一场频率为 _p_ 的鹰派对鹰派竞赛。这样做的期望效用被理解为平均结果。一半的时间某个鹰派赢得 _V_，一半的时间它损失 _C_。

在剩下的比赛中，这个鹰派将对阵鸽派。这保证了它能轻松赢得 _V_。

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8b5ac2e8-fdfb-4ffc-8abe-15d0d014f580_544x112.png)

用鸽派策略对阵鹰派毫无益处。但是一只鸽派会以 _1-p_ 的频率遇到另一只鸽子。在这种情况下，它的预期效用是分到的资源，价值为 _V/2_。

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6303e0b2-d6ab-434d-b7ec-cad18a82d154_508x110.png)

现在，设 _F（H）_ 等于 _F（D）_ ，并求解 _p_。

解出的频率_p_会使得鹰派策略和鸽派策略拥有相同适应度。

在这种频率下，任何一种策略都没有优势，因此这是两种策略可以共存的平衡。

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F77be89c1-0286-4673-867f-1c8e1a038cb7_516x104.png)

通过代数运算，我们能得到以下结果：

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fca77237e-29a4-4826-af4a-2fbb390d3572_404x108.png)

这个结果揭示了在平衡中，鹰派和鸽派的比例。

通过一些代数排列，我们能得到在平衡中 _p_ 的值：

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb812b56c-8387-4a47-902e-61aaa87cf317_342x98.png)


通过这个表达式的性质，可以发现两件事：

-   每当输掉比赛的成本 _C_ 小于或等于获胜的价值 _V_ 时，鹰派策略就会占据主导地位。这两种策略无法共存。

-   如果成本 _C_ 大于价值 _V_，则策略将会在平衡里共存。

代入 _V_\=  4和 _C_\=6，我们发现  当2/  3的种群使用鹰策略时，出现了平衡。

您可以通过在 Python 里模拟模型来测试这一点。

### 代码

在叫做 bird.py 的文件里:

```Python
import random

class Bird:
    def __init__(self, strategy):
        """
        Each bird has a strategy type (hawk or dove)
        And a small starting fitness
        """
        self.strategy = strategy
        self.fitness = 10

    def contest(self, opponent, v, c):
       """
       Simulate the outcomes depending on the strategies
       """
        
        # both hawks --> 50:50 battle

        if self.strategy == opponent.strategy == "hawk":
            if random.randint(0, 1) == 1:
                self.fitness = self.fitness + v
                opponent.fitness = opponent.fitness - c
            else:
                self.fitness = self.fitness - c
                opponent.fitness = opponent.fitness + v

        # hawk meets dove

        elif self.strategy == "hawk" != opponent.strategy:
            self.fitness = self.fitness + v
            opponent.fitness = opponent.fitness
        elif self.strategy == "dove" != opponent.strategy:
            self.fitness = self.fitness
            opponent.fitness = opponent.fitness + v

        # both doves --> share the resource

        else:
            self.fitness = self.fitness + v/2
            opponent.fitness = opponent.fitness + v/2

    def spawn(self):
        """
        Allow a small chance of mutation to flip strategy
        Otherwise, return offspring of the same type
        """

        mutation = random.randint(0, 1000) > 999
        if mutation:
            if self.strategy == "dove":
                return Bird("hawk")
            else:
                return Bird("dove")
        else:
            return Bird(self.strategy)
```

下一个文件叫做 simulation.py.

1.  初始化鸽派的种群
2.  定义一个时间步长函数来模拟随机竞赛。
3.  根据它们相对适应度，同比例生成下一代。
4.  打乱并重复一千次，然后将输出保存为图表。

```Python
from bird import Bird
import random
import numpy as np
import pandas as pd
import matplotlib


def initialise():
    """
    Create a population of birds - all dove to begin
    """

    birds = []

    for _ in range(1000):
        birds.append(Bird("dove"))

    return (birds)


def timestep(birds, value, cost):
    """
    Pair up the birds, make them compete
    Then produce next generation, weighted by fitness
    """

    next_generation = []

    random.shuffle(birds)

    for _ in range(1000):

        # pair up random birds to contest
        a, b = random.sample(birds, 2)
        a.contest(b, value, cost)

    # generate next generation
    fitnesses = [bird.fitness for bird in birds]

    draw = random.choices(birds, k=1000, weights=fitnesses)
    next_generation = [bird.spawn() for bird in draw]

    return next_generation


def main():

    birds = initialise()

    rows = []

    V = 4 ; C = 6

    for _ in range(1000):
        
        # add the counts to a new row
        strategy = [bird.strategy for bird in birds]
        n_hawks = strategy.count("hawk")
        n_doves =  strategy.count("dove")
        row = {'n_hawks': n_hawks, 'n_doves': n_doves}
        rows.append(row)

        # run the timestep function
        birds = timestep(birds, V, C)


    # create dataframe and save output

    df = pd.DataFrame(rows)
    df.to_csv('simulation.csv')
    fig = df.plot(y=["n_hawks", "n_doves"]).get_figure()
    fig.savefig('simulation.pdf')

if __name__ == "__main__":
    main()
```

看，这是个 _V_\=4，_C_\=  6的例子：

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F44100a89-d377-435e-bf11-97b046db5f32_1438x1048.png)

这和之前的理论预测得一样。

## 结语

复杂系统的演化是一个令人着迷的研究领域。在过去几十年的生物科学研究里，一个主要的领域是了解自然力量和竞争压力如何塑造个体层面的特征。这些特征产生了复杂的社会行为。

相对简单的数学模型准确预测动态系统结果的能力也是这些研究带给我们至关重要的一点。

在这种情况下，反馈循环的存在导致了两种策略能达到平衡。当种群中使用该策略个体的数量不同，这两种策略所赋予的优势也会有所不同。

换句话说，当更多个体是“鸽派”时，“鹰派”就有优势。然而，随着越来越多的个体是“鹰派”，“鸽派”的期望值也会有所增加。

最后，编程工具和软件让我们可以通过模拟来测试理论预测。

如果你觉得这篇文章很有趣，你可能也会觉得[如何用 R 建模流行病](news/How-to-Model-an-Epidemic-With-R/)值得一看。

你可以在[gleeson.substack.com](https://gleeson.substack.com/)里关注我的更多文章