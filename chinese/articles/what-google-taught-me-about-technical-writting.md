> -  原文地址：[How Google's Technical Writing Course Helped Me Become a Better Writer](https://www.freecodecamp.org/news/what-google-taught-me-about-technical-writting/)
> -  原文作者：[Kealan Parr](https://www.freecodecamp.org/news/author/kealan/)
> -  译者：Narcissus91
> -  校对者：

![How Google's Technical Writing Course Helped Me Become a Better Writer](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/Technical-Writting-One.png)

Google has a technical writing course that I recently completed and highly enjoyed. It takes roughly 4 hours, and has some exercises along the way so you can test yourself.

I'm going to briefly explain what I learned from completing the course, and I'll summarise the best bits so you can get a good overview of what's covered.

We'll go over some grammar rules and linguistics for the English language, but I'll explain everything upfront so we're all on the same page. The only thing you need to complete the course is a "little writing proficiency in English", but "you don't have to be a strong writer".

Let's dive in.

# Introduction

Let's define some terms we are going to use throughout this document:

-   **Nouns** are used to name something such as **Mrs Kay**, **Eiffel Tower** or **manager**.
-   **Pronouns** are used instead of a noun such as **I**, **you**, **we**, **them**, **he**, or **it**.
-   **Adjectives** are used to describe nouns such as **friendly** Mrs Kay, the **rusty** Eiffel Tower or the **good** manager.
-   **Verbs** are doing words such as **fight**, **run**, **type** and **eat**.
-   **Adverbs** describe verbs such as **strongly** fight, **cowardly** run, **aggressively** type and **timidly** eat.

# Be Clear

Clarity describes how clear your point is in your writing. Your number one priority in technical writing is clarity.

### Pronoun use

Whenever you use pronouns, make sure they are clear. It's easy to get confused. Something like:

> C++ is a pretty old language, but JavaScript is old too. I really like it though.

Huh? You like what? C++ or JavaScript? The **pronouns** used here don't help the clarity.

Clarify pronouns usage like:

> C++ is a pretty old language, but JavaScript is old too. I really like C++.

Generally, when proof reading, if it's unclear to what you're referring, use the noun instead of the pronoun. **This** or **that** are especially prone to this issue. Make sure whenever you use these words it's clear what is being discussed.

### Idioms

**Idioms** are common phrases used to describe something. But some idioms mean nothing to an international audience. Because **idioms** are so specific to your region/language, try to avoid them in your technical writing.

No one understands what **walking around the porridge, chewing the fat**, or **inflating a cow** means intuitively. Just say exactly what you mean, and try to keep your analogies simple and idiom free.  

# Be Succinct

**Succinctness** is how brief and clearly expressed your writing is.

Good software engineers spend as much time deleting code as writing it when polishing their work. It's the same in writing. Shorter code generally:

-   Makes it easier for others to read
-   Makes code easier to maintain
-   Extra lines of code add extra points of failure

All of these points also apply to your technical writing.

Sometimes polishing and saying what you want to say **succinctly** takes time, and you have to really craft the document. You might even end up proof reading multiple times – but it is worthwhile.

Shorter sentences also encourage readers to continue reading. How intimidating is one huge paragraph? It can sometimes intimidate readers, and some readers will just bounce straight off your page when they see huge 1,000 word paragraphs.

### Remove "there is" and "there are"

As you go through your writing, "**there is**" and "**there are**" can almost always be removed to more briefly express your point.

Both terms are generally very generic and bore readers. Rework the sentence. Here are some examples:

-   There is a lot of overlap between software and hardware.
-   There are not multiple threads in JavaScript.

I hope you agree how much better these now read:

-   Software and hardware have a lot of overlap.
-   JavaScript does not have multiple threads.

### Minimise use of adjectives and adverbs

Adjectives and adverbs are used a lot in descriptive, creative writing like fiction and poetry.

Google's example is turning "**grass**" into "**verdant, prodigal grass**" or turning the lifeless-sounding "**hair**" into "**silky, flowing hair**"

The trouble is that **adverbs** and **adjectives** are generally too loosely defined, and they can also make your technical writing sound like marketing.

> Running the code in production mode makes the code run screamingly fast.

As opposed to:

> Running the code in production mode will result in a 225% performance gain.

I hope you agree the second is more precise and quantifiable.

### Make use of lists

When you have a long sentence with lots of elements in it, you should split it up into a list. For example, if you're listing the benefits of a particular technology, you could say, X is a great choice because:

-   It's lightweight
-   It's fast
-   It's easy to use

While this is a simple example, you get the idea. This is now far more readable than an overly long sentence and you won't lose readers or your flow.

### Use the right list

If you do find a good place to use a list, it's important to use the right list. You could use either a numbered list, like this:

1.  Here's my numbered list
2.  Isn't it pretty?

Or you can use a bulleted list, like this:

-   Here's my bulleted list
-   Different, but still cool

**So which one should you use?**

Use a **numbered list**, where the order matters, like say a recipe. Try to start each number with a commanding verb to reinforce the step by step instructions of the list, too:

1.  Turn on the oven.
2.  Bake the cake.

**Bulleted lists** work well for everything else.

### Keep your lists parallel

Now you're hopefully using the right lists! The next step to help you use lists to their maximum potential is to keep them **parallel**. What does that mean?

Your list items should all have the same:

-   Grammar and punctuation
-   Logical categorisation (the list items reasonably all belong together)
-   Capitalisation

Let's provide a bad example:

-   c++
-   JAVASCRIPT?
-   Rust!
-   chocolate chip cookies

All of the above rules have been broken. The item "chocolate chip cookies" doesn't logically belong in the list, the capitalisation/casing of each element is different, and the punctuation isn't consistently applied (It's not clear why "JAVASCRIPT" ends in a "?", and "Rust" with an "!")

# Use Active Voice

Sentences are generally made up of **subject**, **object** and **verb**. Let's do a few as a test:

> I wrote a story.

**I** am the subject, **story** is the object, and **wrote** is the verb.

> I really admire Jake's work

**I** am the subject, **Jake** is the object and **admire** is the verb.

-   The subject is the one doing the thing.
-   The object is the thing being done to.
-   The verb is what is being done to the object by the subject.

All of the above examples use **active voice** because the subject does the verb to the object. So let's flip those above examples to **passive voice**:

> The story was written by me

> Jake's work has my admiration _(or Jake's work is admired by me)_

You should use **active voice** because, in addition to being more powerful and direct:

-   It's much easier to understand. Whenever people read the **passive voice** they have to make the mental effort to transfer **passive voice** to **active voice.** So for ease of reading, skip that step and write in the **active voice**.
-   **Active voice** is far more familiar to the reader, as we read active voice writing most of the time
-   **Passive voice** sometimes forces the reader to guess who did what in the sentence and obscures the meaning
-   **Active voice** is generally shorter than passive voice.

# General Writing Tips

Let's look at how to maximise each component of a well crafted written piece.

### Sentences

Developers are familiar with keeping their code single responsibility. Keep the same formula in mind for sentences.

Express one idea clearly and briefly, before moving onto the next sentence. Don't have lots of **and also this** and **that too** and **even further splitting on our final sentence**. If you end up doing that, split each text after the **and** into its own sentence.

### Paragraphs

Paragraphs should have a clear opening sentence to explain the paragraph's central point.

You also should clearly answer:

-   What are you trying to convey?
-   Why is it important?
-   How should the reader use this knowledge?

Let's have an example that does all the above:

> The `garp()` function returns the delta between a dataset's mean and median. Many people believe unquestioningly that a mean always holds the truth. However, a mean is easily influenced by a few very large or very small data points.  
>   
> Call `garp()` to help determine whether a few very large or very small data points are influencing the mean too much. A relatively small `garp()` value suggests that the mean is more meaningful than when the `garp()` value is relatively high.

### Jargon and context

**Jargon** is the specialised terminology that a particular field uses.

Investors might talk about a **W8-BEN** form or **SPAC**s. But if you're outside that field, you have no clue what's being discussed.

Where possible, remove all jargon and acronyms and briefly explain what something is.

Try to make your writing as plain and simple as possible, still giving due credit to the complexity of what you're discussing (don't oversimplify!). If your writing is difficult or complex to understand, it won't help anyone.

Don't assume knowledge either. If you want to talk about something, either explain it, or try to link to a good resource on it. Some refer to this as the **Curse of Knowledge**.

Assume your reader knows less than you, so experienced readers can just skim the parts they already know, and newbies don't get lost.

### Word choice

English is the dominant language for technical writing, but English is not always the first language of the reader. Try to stick to commonly used, simple English words.

You don't have to discuss the **exuberance** you find from **polysyllabic** words, flaunting your **magniloquence**.

# Meta info

### Write an Introduction

When you write something, briefly explain at the beginning what you're going to cover. This can help people understand exactly what you're discussing before reading more.

### Tailor your Contents to your Audience

Try and fit your document to your audience. When you write on [dev.to](https://dev.to/) you may write one way, and when you write on freeCodeCamp News you might write another way.

Compose your document to best suit the audience. For example, if you're explaining your company's architecture to a wider audience, you will have to explain things more thoroughly as there's less shared knowledge there than with your colleagues.

Sometime you may not even be writing for technical people, and you'll need to explain things in a less-complex way to aid their understanding.

# Summary

Let's do a brief overview of what we covered:

-   Try to be consistent through your writing
-   Avoid ambiguous pronouns
-   Prefer active voice
-   Be succinct.
-   Focus each sentence on one idea
-   Make use of lists
-   Focus on deleting unnecessary words
-   Don't use complex English or jargon
-   Keep lists parallel
-   Open paragraphs with an overview of what you're covering
-   Scope your document to your audience.
-   Establish your key points at the start of your writing.

# Conclusion

I hope this article has explained some helpful concepts Google taught me when I completed their technical writing course.

I am going to try and pick and choose the relevant parts of their advice as and when it applies to the writing I do, and I hope it helps you too. I found quite a few helpful rules here for me to apply to documentation or any technical writing I produce.

The course I referred to throughout this article can be found [here](https://developers.google.com/tech-writing/one).

I share my writing on [Twitter](https://twitter.com/kealanparr) if you enjoyed this article and want to see more.
