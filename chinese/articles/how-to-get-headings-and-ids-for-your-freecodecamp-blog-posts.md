> -  原文地址：[How to Get Headings and IDs for Your freeCodeCamp Blog Post Table of Contents](https://www.freecodecamp.org/news/how-to-get-headings-and-ids-for-your-freecodecamp-blog-posts/)
> -  原文作者：[Scott Spence](https://www.freecodecamp.org/news/author/scott/)
> -  译者：gyf11069
> -  校对者：

![How to Get Headings and IDs for Your freeCodeCamp Blog Post Table of Contents](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/brett-jordan-M9NVqELEtHU-unsplash-1.jpg)

In this post we're going to get all the headings from a freeCodeCamp blog post to make a Table of Contents (ToC) in Ghost CMS.

I recently published [quite a large post](/news/build-your-developer-portfolio-from-scratch-with-sveltekit-and-graphcms/) here on freeCodeCamp and needed to add a table of contents to the post.

There's a really good supporting post written by Colby Fayock on how to do this. It details the process really clearly.

You can check out the video and really comprehensive guide on that for all the details:

[

How to Add a Table of Contents to Your Blog Post or Article

Providing a table of contents \[https://en.wikipedia.org/wiki/Table\_of\_contents\] helps preview and prioritize content when writing lengthier articles. But notevery platform makes it easy to add one. How can we implement one when we lackfirst class tooling? Want to skip ahead of the “what” and “wh…

![](https://www.freecodecamp.org/news/favicon.png)Colby FayockfreeCodeCamp.org

![](https://www.freecodecamp.org/news/content/images/2020/02/table-of-contents.jpg)

](/news/how-to-add-a-table-of-contents-to-your-blog-post-or-article/)

Colby's post details why you would want a Table of Contents (ToC) and how to create one using the Ghost editor (the editor used for writing this post in the Ghost CMS).

The thing is, I had 33 headings in the post I needed to add links for. And the thought of scrolling through a 10,000 word document to get a heading then scroll to the top to add it to the table of contents made me wonder if there was a better way to do it!

### Table of contents:

-   [JavaScript to the rescue!](#javascript-to-the-rescue-)
-   [Get the element properties](#get-the-element-properties)
-   [Get the element id and `innerText`](#get-the-element-id-and-innertext)
-   [Filter on the `localName`](#filter-on-the-localname)
-   [Conclusion](#conclusion)

## JavaScript to the rescue!

With this thought in mind I did a quick search and found a [Stack Overflow](https://stackoverflow.com/a/7115083/1138354) answer that I could use. Here's the snippet:

```js
var ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call( ids, function( el, i ) {
  // "el" is your element
  console.log( el.id ); // log the ID
});
```

So, let's hop on over to the browser now and try that out.

I'll go over to that published post now in the browser and open the developer tools. (In Chrome and Edge it's F12 to open the dev tools.) Then I'll paste in that example code into the console and hit enter, here's the output:

![The browser window with the dev tools open and the code snippet run showing all the element ids on the page](https://www.freecodecamp.org/news/content/images/2022/01/image-42.png)

## Get the element properties

Not bad but I want the heading title as well, so one quick way to see the properties of the elements is to wrap the `el` in some curly braces:

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  console.log({el});
});
```

You'll notice I've cleaned up the function a bit, replacing the inline function with an arrow function and replaced `var` with `let` so the syntax is more modern.

Running that snippet in the browser now gives me the object for each element:

![The browser page with the dev tools open on the console showing the individual elements as objects](https://www.freecodecamp.org/news/content/images/2022/01/image-43.png)

I can then expand out one of the elements now to get all the properties relating to it. From here I'm going to want to get the `id` (which I already know was there) and also the `innerText` which is the heading title:

![The browser page with the dev tools open on the console with one of the element objects expanded to show all the properties](https://www.freecodecamp.org/news/content/images/2022/01/image-45.png)

## Get the element `id` and `innerText`

Let's add the `innerText` element to the snippet we're working with and see what that looks like now. Here's the snippet:

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  console.log(el.id);
  console.log(el.innerText);
});
```

And here's the output we get from that:

![The browser page with the dev tools open on the console showing all the innerText from every element with an id](https://www.freecodecamp.org/news/content/images/2022/01/image-46.png)

Ok, so that is really noisy as it's showing the `innerText` of every element in the document with a lot of irrelevant information on there. All we're really interested in is the title of the heading and it's id.

## Filter on the `localName`

All the headings I use in the post are `h2` headings so I want a way to filter that. So from the `{el}` properties I'll need to grab the `localName` which denotes the type of the element `h2` in the case here.

So let's use an `if` function to see if the `localName` includes `h2` and if it does log that out. I'll also use a template literal to add the anchor id `#` to the beginning of the id:

```js
let ids = document.querySelectorAll('[id]');

Array.prototype.forEach.call(ids, (el) => {
  if (el.localName.includes(`h2`)) {
    console.log(`#${el.id}`);
    console.log(el.innerText);
  }
});
```

Let's take a look at the output now:

![The browser page with the dev tools open on the console with the if function to filter on h2 elements](https://www.freecodecamp.org/news/content/images/2022/01/image-47.png)

Much nicer!

Now I can use that output to start making my ToC!

## Conclusion

We took what could be quite an extended process and turned it into a handy snippet we can use in the browser console every time we need to create a ToC for our blog posts.

That's it, hope you found it useful! 🙏

If you like the content you can check out much more from me on my [blog](https://scottspence.com/) and you can follow me on [Twitter](https://twitter.com/spences10).
