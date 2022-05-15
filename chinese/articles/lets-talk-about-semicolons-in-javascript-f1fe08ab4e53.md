> - 原文地址：[Let’s talk about semicolons in JavaScript](https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/)
> - 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Let’s talk about semicolons in JavaScript](https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg)

#### To use them, or not to use them……

Semicolons in JavaScript divide the community. Some prefer to use them always, no matter what. Others like to avoid them.

I put out a poll on Twitter to test the waters, and I found lots of semicolon supporters:

After using semicolons for years, in the fall of 2017 I decided to try avoiding them when I could. I set up [Prettier](https://flaviocopes.com/prettier/) to automatically remove semicolons from my code, unless there was a particular code construct that required them.

Now I find it natural to avoid semicolons, and I think the code looks better and is cleaner to read.

This is all possible because JavaScript does not strictly require semicolons. When there is a place where a semicolon is needed, it adds it behind the scenes.

This is called **Automatic Semicolon Insertion**.

It’s important to know the rules that power semicolons. This will allow you to avoid writing code that will generate bugs before it does not behave like you expect.

### The rules of JavaScript Automatic Semicolon Insertion

The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

1. when the next line starts with code that breaks the current one (code can spawn on multiple lines)
2. when the next line starts with a `}`, closing the current block
3. when the end of the source code file is reached
4. when there is a `return` statement on its own line
5. when there is a `break` statement on its own line
6. when there is a `throw` statement on its own line
7. when there is a `continue` statement on its own line

### Examples of code that does not do what you think

Based on those rules, here are some examples.

Take this:

```
const hey = 'hey'const you = 'hey'const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

You’ll get the error `Uncaught TypeError: Cannot read property 'forEach' of undefined` because based on rule `1`, JavaScript tries to interpret the code as

```
const hey = 'hey';const you = 'hey';const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

This piece of code:

```
(1 + 2).toString()
```

prints `"3"`.

```
const a = 1const b = 2const c = a + b(a + b).toString()
```

Instead, it raises a `TypeError: b is not a function` exception, because JavaScript tries to interpret it as

```
const a = 1 const b = 2 const c = a + b(a + b).toString()
```

Another example based on rule 4:

```
(() => {  return  {    color: 'white'  }})()
```

You’d expect the return value of this immediately-invoked function to be an object that contains the `color` property, but it’s not. Instead, it’s `undefined`, because JavaScript inserts a semicolon after `return`.

Instead you should put the opening bracket right after `return`:

```
(() => {  return {    color: 'white'  }})()
```

You’d think this code shows ‘0’ in an alert:

```
1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)
```

but it shows 2 instead, because JavaScript (per rule 1) interprets it as:

```
1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)
```

### Conclusion

Be careful — some people are very opinionated about semicolons. I don’t care, honestly. The tool gives us the option not to use it, so we can avoid semicolons if we want.

I’m not suggesting anything on one side or the other. Just make your own decision based on what works for you.

Regardless, we just need to pay a bit of attention, even if most of the time those basic scenarios never show up in your code.

Pick some rules:

- Be careful with `return` statements. If you return something, add it on the same line as the return (same for `break`, `throw`, `continue`)
- Never start a line with parentheses, as those might be concatenated with the previous line to form a function call, or an array element reference

And ultimately, always test your code to make sure it does what you want.

> I publish 1 free programming tutorial per day on [flaviocopes.com](https://flaviocopes.com), check it out!

_Originally published at [flaviocopes.com](https://flaviocopes.com/javascript-automatic-semicolon-insertion/)._
