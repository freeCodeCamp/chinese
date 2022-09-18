> - 原文地址：[Intro to Deno – Guide for Beginners](https://www.freecodecamp.org/news/intro-to-deno/)
> - 原文作者：[Brian Barrow](https://www.freecodecamp.org/news/author/brian/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Intro to Deno – Guide for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/Screen-Shot-2022-09-07-at-4.09.00-PM.png)

## What is Deno?

Deno is a new JavaScript runtime. It was built by Ryan Dahl, the creator of Node.js.

Dahl had a few things that he regretted doing with Node and wanted to build a runtime that could solve those issues. Deno, like Node, is built on the V8 JavaScript engine but was built using Rust instead of C++.

One of the main goals of Deno is to bring server side JavaScript closer to browser JavaScript.

If you've written in both Node and browser JavaScript, then you have surely run into the differences in the APIs used in the respective spaces. Deno aims to have the same APIs on the server that you would use in the browser. We'll take a deeper look at specific examples of this later on.

## Key Features of Deno

### Deno Uses TypeScript

One of the most eye catching features of Deno is that it treats TypeScript as a first class language out of the box. This means you can run or use TypeScript without installing any other external or third party packages. It just works.

TypeScript is increasingly popular in the JavaScript world, and lots of tools and companies are pushing towards using it. It is cool to see a new progressive technology like TypeScript get more attention, and getting first class status in a big project like Deno is a huge step forward.

### Deno is Secure by Default

Deno by default is secure. This means that unless the script is _specifically_ allowed, it cannot access system files, the environment (things like environment variables), or the network.

In order to specifically allow for access to these features, you need to pass the respective flag in the CLI command. Here are some of the ones you'll use the most:

- **Network access**: `--allow-net`, you can also specify which URLs the code is allowed to access. For example: `--allow-net=https://api.deepgram.com`
- **File access**: `--allow-read`
- **Environment access**: `--allow-env`

### Deno's Browser Compatibility

Like I mentioned above, Deno strives to have the same API as the browser. The biggest of these in my opinion is the support of the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

These days, in most of the JavaScript I write, I use the `fetch` API. Being able to use the same syntax on my server side code makes it a lot easier to be productive and it makes the load of context switching much smaller.

## Package Manager

Deno doesn't have a package manager registry. Node uses `npm` in order to load third party packages into your project, but Deno loads modules via URLs.

I was honestly confused at first by this. Having "grown up" with Node and npm it was weird to me to not have some sort of package manager or `package.json` file.

Instead of this centralized registry, Deno allows package developers to host their code wherever they want. If the code is hosted on GitHub, you can register your module on their [hosting service](https://deno.land/x) where it is cached. That makes it easier for developers to find and use the module.

## ES Modules

Deno also uses ES Modules and does not support the `require()` syntax. Again, most of the JavaScript I write these days uses modern features like this, so it has been nice to not worry about making sure I'm using the correct syntax depending on which environment I'm coding for.

## Standard Library

Deno ships with a [standard library](https://deno.land/std@0.138.0) that contains functionality that is audited by the Deno team. This makes it really easy to get started using Deno.

There is no need to look to third party packages to do fairly basic things that are needed in server side code. As a developer, it is comforting knowing that the code I use is officially supported and approved by the Deno team.

### Testing module

One of the modules included in the standard library is the [testing module](https://deno.land/std@0.109.0/testing). This module makes writing tests easier in Deno and will make them more consistent across projects. T

his might not be a plus for everyone, especially if some have strong opinions on testing libraries. I really like it though. As Deno continues to grow, consistency across projects will make maintaining code and switching projects much easier.

## Deno vs Node

The biggest question surrounding Deno is how it compares to Node.

Deno clearly offers some advantages over Node. Being secure by default is definitely an attractive feature, and developers will see the out of the box support for TypeScript as a big win.

On the other hand, Node has a very rich community with an established ecosystem and third party packages that make it easier to get up and running. With [the announcement that Deno will support _most_ npm packages](https://deno.com/blog/v1.25#experimental-npm-support) I can see people moving over to Deno sooner rather than later.

Deno also recently released [Deno Deploy](https://deno.com/deploy) to public beta. This will allow users to rapidly deploy JavaScript code at the edge. This service might give the Deno company an edge (pun intended) over time and grow the user-base.

## Conclusion

The experience I've had with Deno over the last several months has been a lot of fun. I've enjoyed working with it and am excited to see what the future brings for it.

Over the next few weeks I'll be writing several posts diving deeper into the Deno world.
