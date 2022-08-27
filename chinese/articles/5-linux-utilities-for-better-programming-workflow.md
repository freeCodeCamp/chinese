> -  原文地址：[5 Linux Utilities to Improve Your Programming Workflow in 2022](https://www.freecodecamp.org/news/5-linux-utilities-for-better-programming-workflow/)
> -  原文作者：[Rishabh Rawat](https://www.freecodecamp.org/news/author/rishabh570/)
> -  译者：
> -  校对者：

![5 Linux Utilities to Improve Your Programming Workflow in 2022](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/linux-shell-utilities-cover.jpeg)

Working as a Software Developer, there are always new tools and frameworks coming out that can completely change your workflows – for the better (or worse?).

Either way, there is always the possibility to optimize how you do things day-to-day.

This article contains some Linux utilities that have recently replaced my overused and under-productive daily programming workflow.

You will learn about those utilities and how they are a better alternative to their counterparts.

Let's begin.

## How to Use Mcfly

Do you relentlessly hit `up arrow` on the terminal until you get the command you ran previously? I've been there. I didn't know I could optimize this, so I was using it religiously for quite some time.

Then I got introduced to `ctrl + r`. It allows you to search through your command history and has wildcard search. Wow.

Results? My finger tapping exercise was over from the first day. Again, I thought this must be the peak DX for such a small utility. I was so wrong.

So what? Well, there's a better `ctrl-r` for you. Introducing Mcfly 🦋.

In addition to the regular `ctrl+r` feature, it has some extra niceness:

1.  The suggestions are customized using a neural network which considers your current working directory and recently executed commands.
2.  It tracks exit status of commands (you probably don't want to run a failed command again), timestamp, and other useful information.
3.  You can use `%` as a wildcard to match multiple characters.

Here are the suggestions I got on two different repositories, based on my shell history:

![mcfly giving context aware suggestions in the shell](https://www.freecodecamp.org/news/content/images/2022/08/mcfly-in-git-project.png)

suggestions include a build script specific to this project

![mcfly giving context aware suggestions in the shell](https://www.freecodecamp.org/news/content/images/2022/08/mcfly-in-different-git-project.png)

project has a different build script

You can install Mcfly from [here](https://github.com/cantino/mcfly#installation).

## How to Use Cheat.sh

Who loves reading man pages? I don’t. When I’m struggling with a command, the last thing I want to read is a man page. Not because it's not helpful, but it is overwhelming.

I often just need quick examples that I can grab on the go and use. When I found [TLDR pages](https://tldr.sh/), I was the happiest person. Now with Cheat (sheets), I’m even happier.

Cheat gives you access to the [cheatsheets](https://github.com/cheat/cheatsheets/) for potentially every command you will ever need — only examples, without the encyclopedia.

If you do not want to install the utility, you can get the cheatsheet using CURL like this:

```bash
curl cheat.sh/uptime
```

Fetching cheatsheet for sed

So instead of installing the cheatsheets on your machine, you are fetching the information for only the command you need. You can visit [cheat.sh](https://cheat.sh/) and use it on your browser as well.

Here is how the output of the above command looks:

![Cheatsheet output for uptime command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-13-56.png)

Cheatsheet output for uptime command

You will find a lot of examples in the [codebase](https://github.com/cheat/cheat).

## How to Use Git Open

I often need to open the GitHub repository of the project I'm working on in the browser. It may be to check for comment updates on the Pull Request I raised, change repository settings, or just about anything that will require the GitHub repository page.

Well, we have a utility even for this!

Running `git open` will open your current working repository on your browser. By default, it opens the remote page for the branch you are on. You can even go ahead and create an alias for the commands to avoid typing the whole thing.

Here are some of alias ideas for you:

```bash
alias go="git open"
alias blog="git open https://github.com/<username>/blog <branch>"
```

opening remote Github repository using zsh alias

Check out Git Open on Github [here](https://github.com/paulirish/git-open).

## How to Use Bat

We have all done `cat`, right? Bat is just that but has syntax highlighting, nice formatting and styling options, and git diff support. It is very versatile, integrates easily with other tools, and provides custom theming options as well.

Let's a take a look. This is our express server file using `cat`:

![output of cat command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-16-26.png)

output of cat command

The above output has no syntax highlighting which decreases the readability of the code. Let's do the same using `bat`:

![output of bat command](https://www.freecodecamp.org/news/content/images/2022/08/Image-Pasted-at-2022-8-19-16-27.png)

output of bat command

This is clearly more readable. It has the appropriate syntax highlighting automatically applied (without any config), provides the file name, and line numbers.

Feel free to start using it [here](https://github.com/sharkdp/bat).

## How to Use Jq

Jq is a command-line processor for JSON. You can slice and dice your JSON, perform projection to only show certain fields, and extract only the required information from a (huge) JSON. No more overwhelming the terminal output.

```javascript
[
  {"value": 1, "rating": 2 },
  {"value": 2, "rating": 4 },
  {"value": 3, "rating": 5 }
]
```

Sample input array

Accessing a key from an array looks like this:

```
jq '.[0] | { value }'
```

We are asking for the first element in the array and projecting only the `value` field:

```javascript
{
  "value": 1
}
```

To learn more, head over to their [official tutorial](https://stedolan.github.io/jq/tutorial/).

They also have a handy online playground. I have created a snippet [here](https://jqplay.org/s/E2-xscbiHba). Feel free to tweak it and play around.

You can even take it a step further with [jid](https://github.com/simeji/jid). It is an interactive JSON digger that leverages Jq. It provides you very convenient suggestions and an auto-complete feature.

## Conclusion

These were some of the utilities that expanded the horizon for me and made me realise that there is always a better way to do things. You just need to keep Googling. Starting with "how to do X" and "better alternatives to X".

I use these utilities quite often in my daily programming workflow. I hope at least one of them will be useful to you.

I would love to know what utilities are crucial to your daily workflow – do you use any of the ones mentioned in this article?

Liked the article? [Get biweekly improvement pills on backend web development](https://rrawat.com/newsletter) 💌.