> -  原文地址：[Introduction to Evolutionary Game Theory](https://www.freecodecamp.org/news/introduction-to-evolutionary-game-theory/)
> -  原文作者：[Peter GleesonPeter Gleeson](https://www.freecodecamp.org/news/author/peter/)
> -  译者：
> -  校对者：

![Introduction to Evolutionary Game Theory](https://images.unsplash.com/photo-1521427887716-b3e96ad066a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDM5fHxoYXdrfGVufDB8fHx8MTYxNjc2NjIwNQ&ixlib=rb-1.2.1&q=80&w=2000)

For the longest time, the evolution of cooperative social behaviour has fascinated evolutionary biologists.

The mathematical field of game theory helps shed light on how it emerges. Game theory is “the study of mathematical models of strategic interaction among rational decision-makers” (according to [Wikipedia](https://en.wikipedia.org/wiki/Game_theory)).

Game theory applies to “games” as varied as economics, politics, chess and tic-tac-toe. In each case, there are some rules, some “players” or “agents”, and a set of strategies available to them.

Each player has a concept of “utility” – a “currency” they seek to individually maximise through the strategies they play.

The currency of evolution is the concept of [fitness](https://www.nature.com/scitable/blog/accumulating-glitches/the_meaning_of_fitness/).

That is, the chance of being represented in the next generation. Genes and traits which increase the odds of survival to reproductive age are more likely to be passed on to future generations. Therefore, they confer a greater fitness to the individual which "hosts” them.

Evolutionary game theory takes the concepts from game theory and applies them in an evolutionary context.

For a given model, it lets you ask questions about which strategy prevails, and whether certain strategies can coexist. And if so – at what frequencies?

## Replicator dynamics

Evolutionary game theory plays “games” over many generations.

Each game will alter the utility (that is, fitness) of the players. The next generation is produced, with players being represented proportionally to their overall fitness.

This set up is called “replicator dynamics”. It is easy to simulate and explore different models of evolutionary games.

The classic model of evolutionary game theory is the “Hawk-Dove” game, popularised by John Maynard Smith in the 1970s.

In this game, there exists a population of animals which compete for a finite resource (for example, food). The more resources an individual wins, the greater its fitness.

Each animal can play one of two strategies:

-   **Hawks** are aggressive, and will fight for a resource at all costs.
-   **Doves** are passive, and will share instead of fight for a resource.

The animals are all the same kind – “hawk” and “dove” refer to their behaviour.

There are three pairwise competitions that can exist:

**Hawk vs Hawk**

-   If two hawks compete, they will engage in a 50:50 battle to win the resource. This is a winner-takes-all scenario – the winner obtains the full value of the resource. The injured loser pays a price, and loses a certain amount of fitness.

**Hawk vs Dove**

-   If a hawk meets a dove, the dove will back down immediately. The hawk wins the full value of the resource, and the dove walks (or, rather flies) away with nothing. But they do not pay any cost.

**Dove vs Dove**

-   When two doves meet, they agree to share the resource evenly. No one gets hurt.

This can be modelled mathematically. Doing so allows us to understand whether these strategies can coexist (or if one of them prevails).

### The math of replicator dynamics

Let _V_ be the value of winning a contest, and _C_ be the cost of injury in a contest.

Represent the frequency of hawks in the population as _p_, and the frequency of doves as _1-p_.

Now, define two functions F(H) and F(D) which define the expected fitness of playing the hawk and dove strategies, respectively.

Playing as a hawk will mean engaging in a hawk-vs-hawk contest with frequency _p._ The expected utility of doing so is understood as the average outcome. Half the time the hawk wins _V_, half the time it loses _C_.

The rest of a hawk’s contests will be against doves. This guarantees an easy win _V._

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8b5ac2e8-fdfb-4ffc-8abe-15d0d014f580_544x112.png)

Playing as a dove will win nothing against hawks. But a dove will encounter another dove with frequency _1-p_. Under this scenario, the expected utility is the shared resource, worth _V/2_.

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6303e0b2-d6ab-434d-b7ec-cad18a82d154_508x110.png)

Now, set _F(H)_ equal to _F(D)_ and solve for _p_.

This reveals the frequency _p_ at which the hawk strategy confers no more or less fitness than the dove strategy.

At this frequency, there is no advantage to either strategy, so this is the equilibrium at which both strategies may coexist.

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F77be89c1-0286-4673-867f-1c8e1a038cb7_516x104.png)

Some algebraic rearrangement gives:

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fca77237e-29a4-4826-af4a-2fbb390d3572_404x108.png)

Which provides the ratio of hawks-to-doves that exists at equilibrium.

Just a little more rearranging gives the equilibrium in terms of _p_:

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb812b56c-8387-4a47-902e-61aaa87cf317_342x98.png)

Considering the properties of this expression reveals two things:

-   Whenever the cost _C_ of losing a contest is less than or equal to the value _V_ of winning, the hawk strategy will dominate. Neither strategy can coexist.
-   If the cost _C_ is greater than the value _V_, the strategies will coexist in equilibrium.

Plugging in the values _V_\=4 and _C_\=6 shows the equilibrium occurs when 2/3 of the population play the hawk strategy.

You can test this by simulating the model in Python.

### The code

In the file called bird.py:

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

The next file is called simulation.py.

1.  Initialise a population of all doves.
2.  Define a timestep function to simulate randomised contests.
3.  Draw the next generation weighted by their relative fitnesses.
4.  Rinse and repeat a thousand times over, then save the output as a graph.

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

And voilà - here’s an example of the output for _V_\=4 and _C_\=6:

![](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F44100a89-d377-435e-bf11-97b046db5f32_1438x1048.png)

Exactly as the theory predicts.

## Outro

The evolution of complex systems is a fascinating field of study. Understanding how natural forces and competitive pressures can shape individual-level traits to give rise to complex social behaviours has been one of the major areas of research in biological sciences in the last few decades.

The ability of relatively simple mathematical models to accurately predict outcomes of dynamic systems is also a key point to take away.

In this case, it is the existence of a feedback loop that results in the two strategies reaching an equilibrium. The advantage conferred by either strategy varies depending on how many others in the population are playing that strategy.

In other words, when more individuals play "dove", there is an advantage to playing "hawk". However, as more individuals play "hawk", the expected value of playing "dove" increases.

Finally, the availability of programming and software tools makes it possible to test theoretical predictions through simulation.

If you found this article interesting, you may also find [How to Model an Epidemic With R](/news/how-to-model-an-epidemic-with-r/) worth checking out, too.

You can follow more of my writing at [gleeson.substack.com](https://gleeson.substack.com/)