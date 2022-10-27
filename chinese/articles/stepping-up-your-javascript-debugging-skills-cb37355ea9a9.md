> -  原文地址：[How you can step up your JavaScript debugging skills](https://www.freecodecamp.org/news/stepping-up-your-javascript-debugging-skills-cb37355ea9a9/)
> -  原文作者：[Periklis Gkolias](https://www.freecodecamp.org/news/author/periklis-gkolias/)
> -  译者：
> -  校对者：

![How you can step up your JavaScript debugging skills](https://cdn-media-1.freecodecamp.org/images/1*e3eGMlHCBdhS6Sv9rlEJXg.png)

Almost all software developers who have written even a few lines of code for the Web have had at least a quick glance at JavaScript. After all, it is currently one of the most [in-demand](https://www.codingdojo.com/blog/7-most-in-demand-programming-languages-of-2018/) programming languages.

Some people [love](https://dev.to/gentlemanoi/why-i-love-javascript-9bg) it, some [hate](https://www.reddit.com/r/webdev/comments/4jf7m0/why_is_javascript_used_extensively_and_hated_at/) it. Regardless of your view, if you use it, you will need to debug it eventually.

![LrFIEQsO8MyJhwmLvB5Gb2TDaV9EYOW8gqfx](https://cdn-media-1.freecodecamp.org/images/LrFIEQsO8MyJhwmLvB5Gb2TDaV9EYOW8gqfx)

Credits to reddit

Below I will share some tips that have helped me in difficult moments.

### The basic / well-known ones

#### Rubber duck debugging

[Rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) is a method where you explain your problem to anyone or anything (it doesn’t have to be a human). Then the solution magically stops playing with your goodwill and appears to you.

The ‘duck’ has no knowledge of your project, so you explain everything, questioning your assumptions at the same time. Ideally, you’ll suddenly have an enlightenment like, ‘Oh dear, it was in front of me, thanks bro, sorry for the interruption.’

Yet the duck was silent all this time, and that’s the magic part. :)

#### The good ol’ logging

When you have an issue to debug, you usually have a vague hypothesis of what might be wrong. It might be totally off from the actual cause, but this is another story. If you start putting logs in places where the error might occur, you may get to the point fast.

Even if you don’t, don’t remove the logs you added, as they might prove themselves helpful on a future issue.

I could argue why you should never reach this point, to add debug logs, as the logs should be there as part of the initial development. But [Erik Hazard](http://vasir.net/blog/programming/how-logging-made-me-a-better-developer) has already done the job.

More on logging later.

#### Breaking the points

A debugger is a great tool in your arsenal and a great help — if **you know how to use it**.

That means:

-   First understand the problem
-   Then make a couple of hypotheses about the **root cause (and not the symptom)**
-   Set the appropriate breakpoints to verify or disprove them.

In JavaScript, you can either set in the browser’s dev tool or use the debugger keyword in the code to force pausing the execution.

So don’t just put random breakpoints here and there. Have a routine and an ‘end’ in your mind when using it.

### The less well-known ones

#### console.table

A few lines above, we spoke about the importance of logging. The command we usually use is `console.log('text')`. But what if the output is more complex? Yes, `console.log` handles arrays, too. And objects.

But what if I told you that you could spot the error faster because of some…beautification? That would be `console.table` method and is demonstrated below

![-Ek-xKZX9Bw75cKgaNGvNRQHrmWgqoQ46XKb](https://cdn-media-1.freecodecamp.org/images/-Ek-xKZX9Bw75cKgaNGvNRQHrmWgqoQ46XKb)

console.table at its best

See what a nice overview you can gain from the layout? I highly encourage you to use it more, especially with iterables.

#### Break on events instead of lines

Let’s imagine the following scenario. A DOM element is changing intermittently and with wrong values, and you have no clue why. Which of the 29 functions that mutate it is being naughty? (Side note: Mutating is [bad](https://slemgrim.com/mutate-or-not-to-mutate/) usually, but this is a topic for another blog post.)

Use the **DOM change breakpoints**. Every time the element is mutated, a stack track will be shown. Just like if you have put the correct breakpoints. You can find more details [here](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#dom).

#### Profiling

If the bug you are working on is not performance-oriented, maybe this is overkill. But I still have to mention it (well, it may be a performance issue after all :) ). In [Chrome](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) and [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler) you can use the profiler’s built-in functionality to spot a bottleneck or just…see the functions that are executed. Boom :). Overengineering at its best. Please use this feature [wisely](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/). Killing a fly with a [bazooka](https://answers.yahoo.com/question/index?qid=20111106222906AAUSWkm) can have some weird side effects.

### Conclusion

Thank you for reading this article. I hope you enjoyed it and learned something today. As always, I highly encourage to share your magic techniques in the comments.

### More reading

Apart from the links cited inside the main text of the article, here are some more things I think are worth reading about the topic of debugging:

-   [Node debugging tutorial](https://nodejs.org/en/docs/guides/debugging-getting-started/)
-   [John Sonmez’s debugging guide](https://simpleprogrammer.com/effective-debugging/)
-   [Debug it](https://amzn.to/2lC7kD3)
-   [Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems](https://amzn.to/2IrgI5t)
-   [Chrome debug tools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
-   [Firefox debug tools](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
-   ‘JSparty’ podcast and especially [episode 30](https://overcast.fm/+Id5XDQtKY) from where I got inspired about this post and learned about \`console.table\`

Originally published [on my blog](http://perigk.github.io).