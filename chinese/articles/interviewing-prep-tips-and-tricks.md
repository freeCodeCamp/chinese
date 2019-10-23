> * 原文地址：[How to prepare for a technical interview - tips and tricks to help you perform your best](https://www.freecodecamp.org/news/interviewing-prep-tips-and-tricks/)
> * 原文作者：John Mosesman
> * 译者：waylen94
> * 校对者：

![How to prepare for a technical interview - tips and tricks to help you perform your best](https://images.unsplash.com/photo-1515973069-1e40b62f107f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Ah, the coding interview.

> "Dread it. Run from it. Destiny arrives all the same." - Thanos 2018

Ok, maybe that's a little dramatic, but I don't know anyone who is thrilled about going through the interview process. The job search/interview process is exhausting at best and many other things at worst.

Many people study up on tricks and tactics for an interview (and I'll give you a few of those too), but most people don't think about their  _mindset_  going in to the interview.

Your mindset sets the tone of how you're going to view and shape your situation. Go in with the right mindset and you'll be able to understand and navigate anything that is thrown at you. Enter with a scattered or timid mind and you'll find yourself rocked about and battered.

## You are also the interviewer

One thing most people often forget is  _you are also the interviewer._

Yes, are you being interviewed at this company, but you are also interviewing  _the company_  to see if  _they_  are a good fit  _for you._

What are this company's values? What is their work ethic like? What do the people value?

Passing the interview is important, but do you want to work at this company if you do pass?

Sometimes we just need a job—any job—and so I don't want to minimize just getting the job. But if you can, take a step back and think how this job will impact your career in the long-term. Saying yes to a job is saying no to a dozen others—you're paying a large opportunity cost by saying yes.

So that's the first thing to remember: this isn't a one-way power dynamic. It may feel like it at times, but you have some control here, and you have options. This is empowering.

## Types of interviews

Ok, so we are  _also_  evaluating the company based on the people we interact with in the interview process, so what do we do with that information?

Well, there are a few different types of technical interviews. These interview types tell us  **a lot**  about the mindset of the company and what it is like to work there. I break down the different types like this:

-   Whiteboarding
-   Code challenge (computer science questions or algorithms)
-   Code challenge (reasonable coding problem)
-   Take home project

### The dreaded whiteboard

Some of the first interview exercises the tech industry adopted were whiteboard exercises. You'd be given a task, and asked to write the code on the whiteboard. Generally, this approach is looked down upon and is being done away with in the tech industry today, but there are still many companies that employ this practice.

It's not that coding on a whiteboard is bad  _in and of itself_—but that a whiteboard is so far removed from the work we  _actually do_  as programmers  _who work on computers_  every day. The whiteboard is clumsy to write on, edit on, and it doesn't give you any feedback—there's no autocomplete, no syntax highlighting, and you can't pop over to Google to look up the standard library's references.

On top of that, many places who employ whiteboard interviewing also ask a certain set of interview questions that, frankly, are worthless to 99% of programming jobs out there. These are the dreaded computer science algorithms: reversing a binary tree, finding the shortest path in a graph, etc.

The problem with these questions is  **they just don't come up in real life**  as a programmer. If you're interviewing at Amazon or Facebook, sure, maybe they have some value there, but the majority of people will never face this problem in their career. And if they do, they'll just use some package or library that has already implemented that functionality.

So what can we do about whiteboards? Well, here's what I would do: do your best, use the tips and tricks outlined below, and seriously evaluate if this interview practice is a symptom of a larger mentality issue within the company.

### Code challenges

If you're lucky enough to dodge the whiteboard, most places will (and probably should) ask you to do some sort of code challenge. Again this may seem like a one-way power dynamic, but this code challenge is  _actually good for you._  This is where you get to shine and show your technical competence, and in my experience this drastically affects your negotiation power when it comes to job rank and pay.

Before we get into the specific tips, we should also be aware that just because you've dodged the whiteboard doesn't mean that you won't still get the computer science algorithm question here—just on a computer. If that's the case, just take a deep breath and use the tips and tricks below. You'll get through it.

In you're lucky enough to dodge the whiteboard  _and_  the CS question you've probably been presented with a reasonable coding challenge. To me these are questions like:

> Write a function that takes in a number of cents (USD) as an integer less than or equal to 100, and prints out the least amount of coins needed to represent it.  
> 50 => 2 quarters  
> 11 => 1 dime and 1 penny  
> 7 => 1 nickel and 2 pennies

I've also received questions that  _seem_  like CS questions but are really not that bad. For example, "implement a doubly-linked list." At first glance, this seems like a CS problem due to the "doubly-linked list" part, but what the interviewer was actually wanting was code that implemented the same  _behavior_  as a doubly-linked list—I wasn't using pointers and addressing objects in memory—just mimicking the same behavior. In that case it ended up being a fairly simple challenge.

And that brings me to my first tip:

## Tip #1: Ask clarifying questions

In the doubly-linked list challenge I was given a blank Ruby file (I was interviewing for a Ruby job), and a blank test suite. Something like this:

```ruby
class DoublyLinkedList
end

```

(If you're not familiar with Ruby—don't worry. The code here will be simple to understand. It's just here to illustrate the overall points.)

So, a doubly linked list eh? Maybe you know what that is, or maybe you don't. If you don't:  _ask questions._  This is the first pitfall to avoid. If you don't understand the problem or what they are asking for, keep asking questions until you do.

I've seen interviewees go down the wrong rabbit trail and the interviewer just let them—all the while silently going to fail them. While I don't agree with this practice,  _make sure you're working the right problem._

I do come from a computer science background, so I knew a doubly-linked list means a list that has a pointer to a  `head`  and a  `tail`  node—where each node also points to its  `next`  and  `previous`  node.

Now even though I knew that, what did I do?  **I said that out loud and asked if that was correct.**  Even though I  _thought_  I knew what to do, I made  _absolute sure_  I did.

Once you think you understand the problem,  **restate your understanding the interviewer so they can correct or guide you.**

The next thing I did was ask  _another question:_  "Can I use an array for the nodes?" And I typed out something like this:

```ruby
class DoublyLinkedList
  def initialize
    @nodes = []
  end
end

```

(If you're not familiar with Ruby this is just an initializer or constructor where I make a new variable called  `@nodes`  set to an empty array.)

But, the interviewer told me, no, I couldn't do that—which makes sense. If I had used an array it would have defeated the whole purpose of the exercise which is building out the fake "pointers" between the nodes.

And boy, am I glad I asked. I didn't want to take the chance that the interviewer would let me use the array, and then fail me.

So no array—well what do I do now? Here's tip #2:

## Tip #2: Hardcoded -> Dumb -> Better

When you face a coding challenge, work the problem in the following order:  _hardcoded -> dumb -> better -> even better (if time allows)._

In my experience being interviewed and interviewing other developers, I find that  **most people try to do too much all at once.**

When you do too much at once it's easy to make mistakes (that you won't catch due to having InterviewBrain™). So start simple—the simplest you can in fact—hardcoded—and work your way up.

So I have a blank Ruby class, how can I hardcode something to progress forward? I looked at my empty test suite and saw that there was a function called  `head`  that returned the first node in the list, so let's try that:

```ruby
class DoublyLinkedList
  def head
    'A'
  end
end

```

I made a  `head`  function, and hardcoded the capital letter "A" as a string, and I ran that test. It passed.

Is this super simple? Is it too obvious? Yes! But this code does two very important things:

-   It allows me to run the tests and test that my setup works (eliminating any silly or syntax errors)
-   **It gets me a quick win—which boosts my confidence**

There are countless interviews I've seen where someone makes a small mistake right at the beginning, gets flustered, and then spends the majority of the interview trying to recover and fix whatever is wrong.

**Don't underestimate the value of quick wins for your confidence. Stacking up small wins will propel you through the interview.**

Ok, we have a hardcoded string  `'A'`. Now how do we make that into a  _dumb_  solution? Well, how about making that letter "A" into a hash (or map)?

```ruby
class DoublyLinkedList
  def head
    { value: 'A' }
  end
end

```

That's a little better. Now instead of a one character string our "node" is represented as hash with a  `value`  property. We've gone from hardcoded to dumb. Now how can we make it  _better?_  Well, how about we introduce our  `head`  pointer in the list?

```ruby
class DoublyLinkedList
  def initialize
    @head = { value: 'A' }
  end


```

What did we change here? Here we add back our initializer and create a new variable called  `@head`, and we use that new variable in our  `head`  function. This is beginning to look like some real code.

Now this approach may seem really silly, but I promise you,  _it works._  Each of these changes are made in seconds of small, iterative coding, and they stack up to produce a working implementation in short time.

If you're thinking this approach will seem odd to a potential interviewer, here's the next tip,  _and this one is very important:_

## Tip #3: Talk. Out loud.

The entire time you're doing a coding challenge you should be talking—_out loud._

Say everything you're thinking—everything.

(Well, everything programming related.)

Here's the thing: getting to a correct solution is important yes, but equally  _if not more important_  is  **showing your thought process.**  The interviewer wants to know how you think—how you solve problems. You can do this by sharing everything you're thinking out loud.

Every interviewer has at some point been an interviewee—they know about InterviewBrain™ and that even simple things can become difficult in an interview. Good interviewers don't care that you get the solution 100% right—they just want to know that you  _possess good critical thinking abilities._  The only way to make these internal thoughts visible is to say them out loud.

If you've never done this before, you might want to practice it because it's vital for nailing the interview.

To give you some practical examples, here are some things I say every single time I'm interviewed:

> "Ok, let's just hardcode this value and make sure our setup works."

> "Let's get a dumb version of this working first and make it better."

> "I'll do it like this for now, and if we have time come back and do ."

> "Ok so we need a function that takes in an array, does X, and returns ."

In some scenarios, these interviews can start to feel like pair programming sessions.

Ok, so we're saying things out loud. But sometimes we make a mistake or we get stuck. We've been speaking our thought process out loud, but now we may need to shift and investigate a potential issue or error.

Here's an important tip for this:

## Tip #4: Stay in a logical flow

Now I'll admit: this one can be hard at times.

If you're in an interview and there's a problem or error with your code, your brain  _desperately_  wants to figure out what is wrong—but don't be too desperate that you begin thrashing your code or your thought process.

You see, just like the interviewer wants to see how you break down a problem, they  _also_  want to see how you debug a problem. This is equally as important as explaining your thought process. Try your best to stay in a logical flow and avoid thrashing the code or your ideas.

## If it's going well

So the challenge is going well, and you're knocking out the problem and all of the easy stuff.

What now? How do you go from  _passed_  to  _crushed it?_

This is an extremely important part of the interview, because this is where you get the majority of your leverage for job level and compensation negotiation. And the tip is:

## Tip #5: Show what you know

You're working the challenge, you're talking out loud, and you're doing well. The next thing you need to be looking for are opportunities to  **show your knowledge and expertise.**

Is this the place in the code where you might send an email? Mention that it should be done in a background worker instead (you probably won't even have to implement it).

Are you working on validation logic in a model? Talk about how you would also add database constraints to ensure data integrity. What indexes would you add? How would you roll out the migrations to prevent downtime?

Once you get your hardcoded -> dumb -> better solution, talk about how you would refactor it given more time. Would you create a module for this? What about a service object? What about putting some of this logic in a background job?  **Discuss the tradeoffs.**

Now why is this so important?

Most interview questions are aimed at the  _lowest common denominator_—meaning the very basic requirements of the job. The challenge or questions themselves are usually not designed to  _test the top end of someone's skill_. The interview is probably not going to pull the information out of you, so  _you_  have to supply that information.

So while you're talking through your thought process, mention all of the things you would incorporate in a real-life application or codebase and discuss them.

## Extra tips & tricks grab bag

So that's how you should approach your interview and tackle whatever challenge you're given.

Here's a few extra tricks that can sometimes be employed for slight advantages.

### Trick #1: Know the common problems

There are a few common problems that show up often in interviews (especially on whiteboards). You should be familiar with these problems because they're sort of like questions you know are going to be on the test.

Two of the main ones are  [FizzBuzz][1]  and solving the  [Fibonacci sequence][2]  (make sure you know these).

Now a word of warning: you don't  **ever**  want to put down a memorized solution in an interview. That can only go poorly (and I've witnessed it happen). You do however want to be  _familiar_  with the solution—and be able to recreate it from scratch.

So use your interview question prep books, yes, but make sure you  _understand_  the solution, can explain it, and can re-create it from scratch. A memorized answer isn't going to get you anywhere here.

### Trick #2: It's usually ok to look at the docs

In all of the interviews I've been in or a part of, no one has cared if you look up the standard library or package docs. Interviewers are not ok with you looking up the  _answer_  (so I would avoid StackOverflow), but consulting the references is usually fair game. When in doubt, see Tip #1 and  _ask for clarification._

### Trick #3: Watch for visual cues

This is probably my favorite tip/trick. It's not the most useful, but it is kind of fun. One of my interviews I did remotely, and we were using a screen-sharing program and I could see the interviewer's face in the top-right of my screen.

I noticed out of the corner of my eye as I was coding that the interviewer was  _nodding their head._  Ah ha! A little visual cue to know that I was on the right track.

Again it's not much, but it could be useful. :)

### Trick #4: If remote, have a good setup

Speaking of being remote, if you are remote try to have the best setup you can. This means camera on (if possible setup where you're looking straight into it), good internet, computer plugged into power, a quiet room, glass of water nearby, etc.

These things shouldn't affect your interview result, but there's no need to annoy the interviewer or give yourself extra stress from internet or noise issues.

### Trick #5: Be personable!

My last trick for you is to be  _personable._

In your interview, be someone that  _you_  would want to work with. Show them your best self.

Interviews can be intimidating, and developers are generally a quieter and more reserved people, but you need to show the people you interact with,  _"Hey, I'm a fun and nice person to work with."_

I'm not asking you to be someone you're not. But you don't want to be, according to one of my close friends who interviews people all the time, a "sea creature."

### Bonus Trick #6: Do all of the other interview prep (if you want)

If you're feeling under-prepared, or this is your first tech interview, do some prep work until you feel comfortable.

Read books like  [Cracking the Coding Interview][3]  or practice algorithms and puzzles on  [HackerRank][4].

Read the other great posts on  [Developer News][5]  about interviewing.

If you're interviewing for a full-stack role, be prepared to setup a new project or test file with test suite from scratch.

Research the company, be ready with great questions about the company or the day-to-day work, etc., etc.

## In the end: it's just an interview.

In the end, it is what it is.

You'll perform how you perform.

You'll be interviewed by the person you'll be interviewed by.

Their interview process will be their interview process.

Maybe you had an off day—maybe the interviewer had an off day.

Afterwards if you feel embarrassed, defeated, or anything else—take a deep breath and let it go! Don't let your  [Lizard Brain][6]  weigh you down. A bad interview is not the end of the world. Your career isn't ruined, your reputation isn't ruined, and your life isn't ruined.

It's just an interview. Learn from it, adapt, and be better the next time.

## It's ok to be nervous

Most people (myself included) get nervous before things like interviews, talks, or presentations.

I used to think of nervousness as a bad thing—a thing I didn't want. And no matter how many times I told myself "don't be nervous"—guess what: it just made me more nervous!

I've learned to re-think how I view nerves. Nervousness is my body preparing for a fight—that primal fight or flight response.

But like we said before: this is just an interview. There's no tiger sneaking up on me in the interview room. This primal response isn't necessary.

I've started retraining myself to view nervousness as a  _good thing._  It means my body and sense are heightening so I can deliver the best performance I can muster.

So, embrace the nerves. They're just prepping you to perform your best.

## Interviewing is a skill

In the end, interviewing is a skill. It takes some studying and a lot of practice to master.

So don't beat yourself up if you don't perform how you would have hoped. Keep learning, and keep practicing—you'll get there!

If you have any questions or comments, feel free to reach out to  [me on Twitter][7], and if you want more information on how to prepare for a development career, I write stuff like this on  [my blog.][8]

Thanks for reading!

[1]: https://en.wikipedia.org/wiki/Fizz_buzz
[2]: https://en.wikipedia.org/wiki/Fibonacci_number
[3]: http://www.crackingthecodinginterview.com/
[4]: https://www.hackerrank.com/
[5]: https://www.freecodecamp.org/news/search/?query=interview
[6]: https://seths.blog/2010/01/quieting-the-lizard-brain/
[7]: https://twitter.com/johnmosesman/
[8]: https://johnmosesman.com/
