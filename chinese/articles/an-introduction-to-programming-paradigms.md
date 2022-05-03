> -  原文地址：[Programming Paradigms – Paradigm Examples for Beginners](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![Programming Paradigms – Paradigm Examples for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/anne-nygard-OJzEnupZWGM-unsplash.jpg)

Hi everyone! In this article we're going to take a look at programming paradigms, a fancy title to describe popular ways or styles to organize your programming.

I'll try to break it down in pieces and give a simple explanation of each paradigm. This way you can understand what people are talking about when they say "object oriented", "functional" or "declarative".

This will be a superficial and brief theoretical introduction more than anything else, though we're going to see some pseudo-code and code examples too.

I plan to explore each paradigm in depth with practical JavaScript examples in the future, so follow me (links at the bottom) if you're interested in that kind of article. ;)

Let's go!

## Table of Contents

-   [What is a programming paradigm](#what-is-a-programming-paradigm)
-   [What a programming paradigm is not](#what-a-programming-paradigm-is-not)
-   [Why should I care?](#why-should-i-care)
-   [Popular programming paradigms](#popular-programming-paradigms)
    -   [Imperative programming](#imperative-programming)
    -   [Procedural programming](#procedural-programming)
    -   [Functional programming](#functional-programming)
    -   [Declarative programming](#declarative-programming)
    -   [Object-oriented programming](#object-oriented-programming)
-   [Roundup](#roundup)

# What is a Programming Paradigm?

Programming paradigms are different ways or styles in which a given program or programming language can be organized. Each paradigm consists of certain structures, features, and opinions about how common programming problems should be tackled.

The question of why are there many different programming paradigms is similar to why are there many programming languages. Certain paradigms are better suited for certain types of problems, so it makes sense to use different paradigms for different kinds of projects.

Also, the practices that make up each paradigm have developed through time. Thanks to the advances both in software and hardware, different approaches have come up that didn't exist before.

And last I think, there's human creativity. As a species, we just like creating things, improving what others have built in the past, and adapting tools to our preference or to what seems more efficient to us.

All this results in the fact that today we have many options to choose from when we want to write and structure a given program. 🥸

# What a Programming Paradigm is Not

Programming paradigms are not languages or tools. You can't "build" anything with a paradigm. They're more like a set of ideals and guidelines that many people have agreed on, followed, and expanded upon.

Programming languages aren't always tied to a specific paradigm. There are languages that have been built with a certain paradigm in mind and have features that facilitate that kind of programming more than others ([Haskel](https://www.haskell.org/) and functional programming is a good example).

But there are also "multi-paradigm" languages, meaning you can adapt your code to fit a certain paradigm or another (JavaScript and Python are good examples).

At the same time, programming paradigms aren't mutually exclusive, in the sense that you could use practices from different paradigms at the same time with no problem at all.

# Why should I care?

![whatever-yeah-1](https://www.freecodecamp.org/news/content/images/2022/04/whatever-yeah-1.gif)

Short answer: general knowledge.

Long answer: I find that it's interesting to understand the many ways in which programming can be done. Exploring these topics is a good way of opening your mind and helping you think outside the box and outside the tools you already know.

Moreover, these terms are used a lot in the coding world, so having a basic understanding will help you better understand other topics as well.

# Popular Programming Paradigms

Now that we have introduced what programming paradigms are and are not, let's go through the most popular ones, explain their main characteristics, and compare them.

Keep in mind this list is not exhaustive. There are other programming paradigms not covered here, although I'll be covering the most popular and most widely-used ones.

## Imperative Programming

Imperative programming consists of sets of detailed instructions that are given to the computer to execute in a given order. It's called "imperative" because as programmers we dictate exactly what the computer has to do, in a very specific way.

Imperative programming focuses on describing _how_ a program operates, step by step.

Say you want to bake a cake. Your imperative program to do this might look like this (I'm not a great cook, so don't judge me 😒):

```
1- Pour flour in a bowl
2- Pour a couple eggs in the same bowl
3- Pour some milk in the same bowl
4- Mix the ingredients
5- Pour the mix in a mold
6- Cook for 35 minutes
7- Let chill
```

Using an actual code example, let's say we want to filter an array of numbers to only keep the elements bigger than 5. Our imperative code might look like this:

```javascript
const nums = [1,4,3,6,7,8,9,2]
const result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
```

See that we're telling the program to iterate through each element in the array, compare the item value with 5, and if the item is bigger than 5, push it into an array.

We're being detailed and specific in our instructions, and that's what imperative programming stands for.

## Procedural Programming

Procedural programming is a derivation of imperative programming, adding to it the feature of functions (also known as "procedures" or "subroutines").

In procedural programming, the user is encouraged to subdivide the program execution into functions, as a way of improving modularity and organization.

Following our cake example, procedural programming may look like this:

```
function pourIngredients() {
    - Pour flour in a bowl
    - Pour a couple eggs in the same bowl
    - Pour some milk in the same bowl
}

function mixAndTransferToMold() {
    - Mix the ingredients
    - Pour the mix in a mold
}

function cookAndLetChill() {
    - Cook for 35 minutes
    - Let chill
}

pourIngredients()
mixAndTransferToMold()
cookAndLetChill()
```

You can see that, thanks to the implementation of functions, we could just read the three function calls at the end of the file and get a good idea of what our program does.

That simplification and abstraction is one of the benefits of procedural programming. But within the functions, we still got same old imperative code.

## Functional Programming

Functional programming takes the concept of functions a little bit further.

In functional programming, functions are treated as **first-class citizens**, meaning that they can be assigned to variables, passed as arguments, and returned from other functions.

Another key concept is the idea of **pure functions**. A **pure** function is one that relies only on its inputs to generate its result. And given the same input, it will always produce the same result. Besides, it produces no side effects (any change outside the function's environment).

With these concepts in mind, functional programming encourages programs written mostly with functions (surprise 😲). It also defends the idea that code modularity and the absence of side effects makes it easier to identify and separate responsibilities within the codebase. This therefore improves the code maintainability.

Going back to the array filtering example, we can see that with the imperative paradigm we might use an external variable to store the function's result, which can be considered a side effect.

```javascript
const nums = [1,4,3,6,7,8,9,2]
const result = [] // External variable

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // Output: [ 6, 7, 8, 9 ]
```

To transform this into functional programming, we could do it like this:

```javascript
const nums = [1,4,3,6,7,8,9,2]

function filterNums() {
    const result = [] // Internal variable

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i])
    }

    return result
}

console.log(filterNums()) // Output: [ 6, 7, 8, 9 ]
```

It's almost the same code, but we wrap our iteration within a function, in which we also store the result array. In this way, we can assure the function doesn't modify anything outside its scope. It only creates a variable to process its own information, and once the execution is finished, the variable is gone too.

## Declarative Programming

Declarative programming is all about hiding away complexity and bringing programming languages closer to human language and thinking. It's the direct opposite of imperative programming in the sense that the programmer doesn't give instructions about _how_ the computer should execute the task, but rather on _what_ result is needed.

This will be much clearer with an example. Following the same array filtering story, a declarative approach might be:

```javascript
const nums = [1,4,3,6,7,8,9,2]

console.log(nums.filter(num => num > 5)) // Output: [ 6, 7, 8, 9 ]
```

See that with the filter function, we're not explicitly telling the computer to iterate over the array or store the values in a separate array. We just say what we want ("filter") and the condition to be met ("num > 5").

What's nice about this is that it's easier to read and comprehend, and often shorter to write. JavaScript's `filter`, `map`, `reduce` and `sort` functions are good examples of declarative code.

Another good example are modern JS frameworks/libraries like React. Take this code for example:

```javascript
<button onClick={() => console.log('You clicked me!')}>Click me</button>
```

Here we have a button element, with an event listener that fires a console.log function when the button is clicked.

JSX syntax (what React uses) mixes HTML and JS in the same thing, which makes it easier and faster to write apps. But that's not what browsers read and execute. React code is later on transpiled into regular HTML and JS, and that's what browsers run in reality.

JSX is declarative, in the sense that its purpose is to give developers a friendlier and more efficient interface to work with.

An important thing to notice about declarative programming is that under the hood, the computer processes this information as imperative code anyway.

Following the array example, the computer still iterates over the array like in a for loop, but as programmers we don't need to code that directly. What declarative programming does is to **hide away** that complexity from the direct view of the programmer.

Here's a nice [comparison between imperative and declarative programming.](https://www.youtube.com/watch?v=E7Fbf7R3x6I)

## Object-Oriented Programming

One of the most popular programming paradigms is object-oriented programming (OOP).

The core concept of OOP is to separate concerns into entities which are coded as objects. Each entity will group a given set of information (properties) and actions (methods) that can be performed by the entity.

OOP makes heavy usage of classes (which are a way of creating new objects starting out from a blueprint or boilerplate that the programmer sets). Objects that are created from a class are called instances.

Following our pseudo-code cooking example, now let's say in our bakery we have a main cook (called Frank) and an assistant cook (called Anthony) and each of them will have certain responsibilities in the baking process. If we used OOP, our program might look like this.

```
// Create the two classes corresponding to each entity
class Cook {
	constructor constructor (name) {
        this.name = name
    }

    mixAndBake() {
        - Mix the ingredients
    	- Pour the mix in a mold
        - Cook for 35 minutes
    }
}

class AssistantCook {
    constructor (name) {
        this.name = name
    }

    pourIngredients() {
        - Pour flour in a bowl
        - Pour a couple eggs in the same bowl
        - Pour some milk in the same bowl
    }
    
    chillTheCake() {
    	- Let chill
    }
}

// Instantiate an object from each class
const Frank = new Cook('Frank')
const Anthony = new AssistantCook('Anthony')

// Call the corresponding methods from each instance
Anthony.pourIngredients()
Frank.mixAndBake()
Anthony.chillTheCake()
```

What's nice about OOP is that it facilitates the understanding of a program, by the clear separation of concerns and responsibilities.

In this example I've just scratched the surface of the many features of OOP. If you'd like to know more, here are two great videos explaining the basics of OOP:

-   [OOP video 1](https://www.youtube.com/watch?v=cg1xvFy1JQQ)
-   [OOP video 2](https://www.youtube.com/watch?v=pTB0EiLXUC8)

And [here's a nice comparison between imperative, functional and object-oriented programming.](https://www.youtube.com/watch?v=08CWw_VD45w)

## Roundup

As we've seen, programming paradigms are different ways in which we can face programming problems, and organize our code.

Imperative, procedural, functional, declarative, and object oriented paradigms are some of the most popular and widely used paradigms today. And knowing the basics about them is good for general knowledge and also for better understanding other topics of the coding world.

As always, I hope you enjoyed the article and learned something new. If you want, you can also follow me on [linkedin](https://www.linkedin.com/in/germancocca/) or [twitter](https://twitter.com/CoccaGerman).

Cheers and see you in the next one! =D

![200](https://www.freecodecamp.org/news/content/images/2022/04/200.gif)
