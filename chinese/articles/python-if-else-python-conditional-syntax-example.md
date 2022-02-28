> -  原文地址：[Python If-Else – Python Conditional Syntax Example](https://www.freecodecamp.org/news/python-if-else-python-conditional-syntax-example/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：
> -  校对者：

![Python If-Else – Python Conditional Syntax Example](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/py.png)

In your applications and web projects, there might be times when a user needs to perform an action if a certain condition is met.

There might also be cases when you need to make the user perform another action if the condition is not met.

To do this in Python, you use the `if` and `else` keywords. These two keywords are called conditionals.

In this article, I will show you how to implement decision making in your applications with the `if` and `else` keywords. I will also show you how the `elif` keyword works.

I will be using Python comparison operators such as `>` (greater than), `<` (less than), and (`==`) equals to compare variables in the `if` and `elif` blocks, so we can make the decisions.

## How to Use the `if` Keyword in Python

In Python, the syntax for a single `if` statement looks like this:

```py
if(condition):
    indented block of decision to make if condition is true
```

Unlike some other programming languages which use braces to determine a block or scope, Python uses a colon (`:`) and indentation (`4 whitespaces or a tab`).

So, the indented line or lines of code after the colon will be executed if the condition specified in the braces in front of the `if` keyword is true.

In the example below, I'm recording the points of 3 soccer teams in 3 variables and making a decision with an `if` statement.

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 89

if(teamAPoints > teamBPoints):
    print("Team A won the league") # Output: Team A won the league
```

You can see that the code ran because the condition – `teamAPoints > teamBPoints` – was met. That is, Team A won the league because they had 99 points as compared to Team B and Team C.

Python has the `and` keyword that can help us bring Team C into the comparison:

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 89

if(teamAPoints > teamBPoints and teamCPoints):
    print("Team A won the league against Team B and Team C") # Output: Team A won the league against Team B and Team C
```

The code ran again because the condition – `teamAPoints > teamBPoints and teamCPoints` – was met.

If you have only one block of code to execute with the `if` statement, you can put it in one line and everything would still be okay, as shown below:

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 89

if(teamAPoints > teamBPoints): print("Team A won the league") # Output: Team A won the league
```

This is not a rule, it’s just common practice.

If the condition in the `if` statement is not met, nothing happens.

In the screenshot below, nothing happens because the condition specified in the if statement is not true. Team A has more points (99) than Team B (89).  
![ss-1-4](https://www.freecodecamp.org/news/content/images/2022/02/ss-1-4.png)

By the way, you run Python code in the terminal by typing Python or Python3 followed by the file name, the .py extension, and then hit `ENTER` on your keyboard. For example, `python3 if_else.py`.

## How to Use the `else` Keyword in Python

Since nothing happens if the condition in an `if` statement is not met, you can catch that with an else statement.

With `else`, you make the user perform an action if the condition in the `if` statement is not true, or if you want to add more options.

The syntax for `if...else` is an extension from that of `if`:

```py
if(condition):
    indented block of decision to make if condition is true
else:
    indented block of decision to make if condition is not true
```

In the code snippet below, the block of code in the `else` scope runs because the condition specified is not true – Team C doesn’t have more points than Team A.

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 89

if(teamCPoints > teamAPoints):
    print("Team C won the league") 
else:
    print("Team A won the league") # Output: Team A won the league
```

If you have only one block of code to execute with the `if` and one with the `else`, you can put it in one line and everything would still be okay:

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 89

if(teamCPoints > teamAPoints): print("Team C won the league") 
else: print("Team A won the league") # Output: Team A won the league
```

## Nested `if` in Python

You can combine what `if...else` does into a single `if` statement. This is called nesting in programming languages.

The syntax for nesting 2 or more if statements looks like what you see in the code snippet below:

```py
if(condition):
    if(condition):
        if(condition)
            indented block of decision to make
```

In nested `if`, all the conditions must be true for the code to run.

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 88

if (teamAPoints > teamBPoints):
    if (teamAPoints >= teamBPoints):
        if (teamAPoints >= teamCPoints):
            print("Team A won the league") # Team A won the league
```

## How to Use the `elif` keyword in Python

Another conditional keyword in Python is `elif`, which you can put in between an `if` and else.

In the snippet of code below, you can see how the `elif` keyword works:

```py
teamAPoints = 99
teamBPoints = 89
teamCPoints = 88

if (teamAPoints == 89):
    print("Team B did not win the league")
elif(teamAPoints == 99):
    print("Team A won the league")
else:
    print("Team C won the league") # Result: Team A won the league
```

The condition in the if statement did not run because Team A has 99 points

The condition in the `elif` is true and ran because Team A has 99 points, so the `else` block was ignored.

## Conclusion

In this article, you learned about `if…else` in Python so you can implement conditionals in your projects.

Thank you for reading, and happy coding.
