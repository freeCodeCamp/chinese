> -  原文地址：[How to Create Your Own Commands in Linux](https://www.freecodecamp.org/news/how-to-create-your-own-command-in-linux/)
> -  原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> -  译者：Andy Lau
> -  校对者：

![How to Create Your Own Commands in Linux](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/BB---Alias-Commands---Brief.png)

In this article, let's learn about creating your own commands in Linux. Yes – we're going to talk about creating an alias command.
在这篇文章中，让我们学习如何在Linux中创建自己的命令。是的 - 我们要讨论如何创建一个命令的别名。

Before we begin, I want to tell you how the idea for this tutorial came about.
在我们开始之前，我想告诉你这个教程的想法是怎么来的。

One of the followers of my blog asked me,
我博客的一个粉丝问我，
"Hey Arun! I wonder about your brain's capability to store a lot of commands. How is that possible?"
“嘿，阿伦！我想知道你的大脑如何能够记忆这么多的命令。这是怎么可能的？”

"I've been learning Linux and writing code since I started college (almost 7+ years). During that time I encountered a lot of errors and solved each and everyone on my own which helped me to master it", I replied.
我回答道：“自从我上大学以来（已经有7年多了），我一直在学习Linux和编写代码。在这段时间里，我遇到了很多错误，但是每个错误我都自己解决了，这帮助我掌握了它。”

"Even then, how could you memorize those flags and options along with each command?", he enquired.
他问道：”即使这样， 你是怎么记住每个命令的选项和参数的？“

"I cannot memorize each and every command with its options and flags. So, I create my own commands", I replied.
我回答道："我记不住每一个命令的参数和它的选项，所以，我创建自己的命令”

"What? You created your own commands? Can I create my own commands?", he asked with great excitement.
“什么？你创建了自己的命令？我可以可以创建自己的命令吗？” 他非常激动的问道

"Yes. You can. It's called an alias command in Linux", I replied.
“可以啊，你当然可以。在Linux里面，这被称为别名命令，你也可以理解为命令的别名” 我回答道

He asked me to write a blog on it and here it is. Let's learn about `alias` commands in this blog.
他让我写一篇关于别名命令的博客，这就是这篇文章。让我们在这篇博客中学习有关alias命令的内容。

## What are Alias commands in Linux?

The `alias` command provides a string value that replaces a command name when it is encountered.

The `alias` command lets you create shortcuts for long commands, making them easier to remember and use. It will have the same functionality as if the whole command is run.

## How to Create Your Own Linux Commands

Using the `alias` command, you'll be able to create your own commands. It's so simple to create your own command.

Here's the syntax for the `alias` command:

```bash
alias [alias-name[=string]...]
```

Terminal command to create an alias

Let's look at an example of creating your own command.

Let's assume you want to create a command called `cdv`, and entering the command in the terminal should take you to the `Videos` directory.

Usually, to navigate to a directory, we use `cd` command. To navigate to `Videos` we need to use `cd Videos` as shown in the below screenshot:

![image-121](https://www.freecodecamp.org/news/content/images/2023/02/image-121.png)

Terminal command to navigate to `Videos` directory

Let's create our command called `cdv` to navigate to the `Videos` directory. To achieve that, you have to enter the following command in your terminal:

```bash
alias cdv="cd Videos"
```

Create a simple alias command

![image-149](https://www.freecodecamp.org/news/content/images/2023/02/image-149.png)

Terminal (`alias`) command to create our own command

We have created our command. From the above screenshot, you can see that it does not return anything.

But, how can we verify that the command is created and it is working?

There's only one way to verify if the command is working: that's by executing the created command.

Run the cdv command on your terminal to see what happens:

![image-150](https://www.freecodecamp.org/news/content/images/2023/02/image-150.png)

Run the created `cdv` command

BOOM!!! You created your own command.

## How to View Created Alias Commands

You may have the following question after creating a few commands:

Let's assume I created multiple alias commands. How can I view all of them together? How can I view the equivalent command of my alias?

You can view all your alias commands by appending the `-p` flag to the `alias` command like this:

```bash
alias -p
```

View all `alias` commands

![image-122](https://www.freecodecamp.org/news/content/images/2023/02/image-122.png)

Terminal command to view all the created alias commands

I have created many alias commands. From the above screenshot, you can see all the alias commands that I've created.

## How to Remove an Alias Command in Linux

Pass your alias name to the `unalias` command as an argument to remove the alias command.

```bash
unalias alias_name
```

Remove an alias command

![image-123](https://www.freecodecamp.org/news/content/images/2023/02/image-123.png)

Terminal command (`unalias`) to remove an alias command

## How to Remove All Alias Commands in Linux

Let's assume you have added around 20 alias commands. After some time, you realized that using alias commands will make you forget other commands in the long term. Fearing that, you wish to remove all the alias commands.

We have a command to achieve that:

```bash
unalias -a
```

Remove all the alias commands

![image-124](https://www.freecodecamp.org/news/content/images/2023/02/image-124.png)

Terminal command to remove all alias commands

You may be curious to know more about one thing that I've written in the above passage.

"After some time, you realized that using alias commands will make you forget other commands in the long term"

Is this something you should worry about? Can this happen?

The answer to your first question is, yes. Definitely, you'll get this feeling when you're learning and trying out alias commands. Because I had the same feeling.

The answer to your second question is, absolutely no. This will result in increased productivity. There's a high chance that you'll forget the command you created but you'll never forget the original command. So I always recommend revisiting your alias commands often and ensure you're using all the alias commands you created.

I have a shocking surprise for you. Open a terminal window and create an alias command (we'll use the `cdv` command we created above). Open another terminal window and type the `cdv` command there.

![image-127](https://www.freecodecamp.org/news/content/images/2023/02/image-127.png)

Terminal command showing the output of non-existing alias command

Surprised?

Yes. If you create an alias command, it'll be active only for the particular instance of the terminal. It'll not be created permanently, so you won't be able to access it in two different terminal windows unless you run the `alias` command on both terminals.

## How to Create a Permanent Alias Command

To create a permanent `alias` command, you have to add the alias command to the shell configuration file. There are many shell configurations available. A few of the well-known shells are:

-   Bash - ~/.bashrc
-   Zsh - ~/.zshrc
-   Fish - ~/.config/fish/config.fish

Most Linux distros work with `bash`, so let's look at creating a permanent alias in the bash shell. Other shells work pretty much the same.

Let's open the `.bashrc` file using Vim.

```bash
sudo vim ~/.bashrc
```

Open `.bashrc` file using vim

Navigate to the bottom of the file and press `i` to enter Insert mode. Add the alias command you want to add permanently.

```bash
alias cdv="cd Videos"
```

Add alias command in `.bashrc` file

Save and exit Vim by pressing the `Esc` key and typing `:wq`.

Every time you make a change to the shell configuration file, you have to reload the file again for your changes to take effect immediately.

All the terminal windows you open from now will contain your alias command by default.

![image-139](https://www.freecodecamp.org/news/content/images/2023/02/image-139.png)

Terminal command to view all `alias` commands

You may open multiple windows and check by entering the `alias -p` command.

## Some Helpful Alias Commands to Try

Here's a bonus for you all.

At the company where I work, we follow common alias commands, which we set up in everyone's machine at on-boarding. If people wish to add their own commands, they'll be able to do so and it'll not be reflected for others (built with the OCP principle in mind). We feel highly productive in using those commands.

I've planned to share a part of those commands with you all.

You can either follow the instructions in the README file of [this](https://www.freecodecamp.org/news/p/4e15c27a-7862-4f28-9a1d-8ddf54f0befc/github.com/gogosoon/x-commands.git) repo or follow the instructions below to set up the alias commands on your machine.

### Navigate to the Home folder

```bash
cd ~/
```

Navigate to home directory

### Clone the repo

Clone the alias commands repo from GitHub:

```bash
git clone https://github.com/gogosoon/x-commands.git
```

Clone the `x-commands` repo

### Add a reference to the alias command file

Open the `~/.bashrc` file using Vim:

```bash
sudo vim ~/.bashrc
```

Open `~/.bashrc` file using vim

Add the following line at the end of the file:

```bash
source ~/x-commands/aliasCommands.sh
```

Add the line to the bottom of the file

Save and exit Vim by pressing `Esc` and typing `:wq`

### Reload the terminal

Reload the terminal by running the following command:

```bash
source ~/.bashrc
```

Reload the terminal

That's it. You're all set. To verify that the setup is done and it's up and running, run the following command in the terminal:

```bash
welcome
```

Terminal command to verify successful installation of `x-commands`

You'll be asked to enter your name. Type your name and press `Enter`.

![image-151](https://www.freecodecamp.org/news/content/images/2023/02/image-151.png)

Terminal command to verify alias commands installation

You've installed it the right way if you get the above message.

Let me explain the `alias` commands you'll have access to using this repo.

<table><tbody><tr><td></td><td><strong>Alias Command</strong></td><td><strong>Original Command</strong></td><td><strong>Description</strong></td></tr><tr><td></td><td>f</td><td><code>cd $1</code></td><td>Go forward. Navigate to the next specified directory</td></tr><tr><td></td><td>b</td><td><code>cd ..</code></td><td>Go backward. Navigate back 1 directory</td></tr><tr><td></td><td>c</td><td><code>code ./</code></td><td>Open Visual Studio Code in the current directory</td></tr><tr><td></td><td>e</td><td><code>exit</code></td><td>Close the terminal tab/window</td></tr><tr><td></td><td>home</td><td><code>cd ~</code></td><td>Navigate to the home directory</td></tr><tr><td></td><td>a</td><td><code>xdotool key ctrl+shift+t</code></td><td>Open a new terminal tab</td></tr><tr><td></td><td>cdb</td><td><code>cd -</code></td><td>Go to the last directory where you were previously</td></tr><tr><td></td><td>gst</td><td><code>git status</code></td><td>Find the status of the git repo</td></tr><tr><td></td><td>gpr</td><td><code>git pull -r</code></td><td>Pull and rebase the git commits</td></tr><tr><td></td><td>glo</td><td><code>git log --oneline</code></td><td>Show git commit logs in a single simplified line</td></tr><tr><td></td><td>gcl</td><td><code>git config -l</code></td><td>Show the git configuration of the current repo</td></tr><tr><td></td><td>gca</td><td><code>git commit --amend</code></td><td>Add the current changes to the existing commit</td></tr><tr><td></td><td>gcane</td><td><code>git commit --amend --no-edit</code></td><td>Add the current changes to the existing commit without editing the existing commit message</td></tr><tr><td></td><td>ad</td><td><code>~/Android/Sdk/emulator/emulator -list-avds</code></td><td>Show available android emulators</td></tr><tr><td></td><td>off</td><td><code>sudo /opt/lampp/lampp stop<br>poweroff<br>systemctl poweroff -i<br></code></td><td>Turn off your machine</td></tr><tr><td></td><td>bb</td><td><code>if [ -z "$1" ]<br>then<br>b;b<br>else<br>for (( i=0;i&lt;$1;i++ ))<br>do<br>b<br>done<br>fi<br></code></td><td>It’s an advanced version of go back command. Entering the <code>b</code> command goes back to only one directory. But entering bb goes back to 2 directories. If you want to go 5 directories back, run <code>bb 5</code> command</td></tr><tr><td></td><td>pokill</td><td><code>kill $(lsof -t -i:$1)</code></td><td>Kill the program running on the port</td></tr><tr><td></td><td>cc</td><td><code>sudo nano ~/x-commands/aliasCommands.sh</code></td><td>Edit the alias commands file</td></tr><tr><td></td><td>bc</td><td><code>sudo nano ~/.bashrc</code></td><td>Edit the <code>.bashrc</code> file</td></tr><tr><td></td><td>scc</td><td><code>source ~/x-commands/aliasCommands.sh</code></td><td>Refresh the terminal after updating an alias command</td></tr><tr><td></td><td>bcc</td><td><code>source ~/.bashrc</code></td><td>Refresh the terminal after updating <code>.bashrc</code> file</td></tr><tr><td></td><td>welcome</td><td><code>echo Welcome to shell automation<br>echo Enter Your Name<br>read testName<br>echo Welcome to new shortcut world ~~ $testName ~~ Enjoy Coding....<br></code></td><td>Verify if alias commands installation is done right</td></tr></tbody></table>

If you look at the aliasCommands.sh file carefully, you'll see that I've added a few functions. You may wonder why I use functions. Read more to have a quick dive into this topic.

## How to Run Multiple Commands in a Single Alias Command

You can achieve this in 2 ways. Let me explain both of them here.

Let's learn this with an example.

Say you have to create an alias command called `gohome`. Running this command should take you to the home directory and display the "Navigated to home directory" message.

### Method #1:

This way is the usual way of adding an `alias` command. You have to add the two commands separated by a semicolon (`;`).

```bash
alias gohome="cd ~/;echo Navigated to home directory"
```

Alias command to navigate to home

![image-148](https://www.freecodecamp.org/news/content/images/2023/02/image-148.png)

Run multiple commands with a single alias command - Way 1

### Method #2

This is a bit of a different way. To achieve this you have to make a change in your `.bashrc` file. You have to define a function in the `.bashrc` file with all the commands nested within it.

Open the `.bashrc` file using Vim.

```bash
sudo vim ~/.bashrc
```

Open `~/.bashrc` file with vim

Enter insert mode by pressing the `i` key.

Create a function named `gohome` with the above 2 commands.

```bash
function gohome() {
        cd ~/
        echo Navigated to home directory
}
```

Create a function named `gohome` in `.bashrc` file

Save and exit Vim by pressing the `Esc` key and typing `:wq` on command mode.

Reload the terminal by running `source ~/.bashrc` and you'll be able to verify the `gohome` command now.

![image-152](https://www.freecodecamp.org/news/content/images/2023/02/image-152.png)

Run multiple commands with a single alias command - Way 2

**Note:** Creating a function will not list it as an alias command on running the `alias -p` command.

## Conclusion

In this article, you learned how to create your own commands in Linux.

Using an alias command will definitely increase your productivity. I've witnessed exponential growth in many people after seeing them using alias commands. I would recommend that you all setup your own alias commands.

To learn more about Linux, subscribe to my email newsletter on my [site](https://5minslearn.gogosoon.com/?ref=fcc_alias_command) and follow me on social media.
