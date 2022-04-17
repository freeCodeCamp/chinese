> -  原文地址：[git config – How to Configure Git Settings to Improve Your Development Workflow](https://www.freecodecamp.org/news/git-config-how-to-configure-git-settings/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：
> -  校对者：

![git config – How to Configure Git Settings to Improve Your Development Workflow](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-thisisengineering-3861958.jpg)

`git config` is a powerful command in Git. You can use the Git configuration file to customize how Git works.

This file exists in the project level where Git is initialized (`/project/.git/config`) or at the root level (`~/.gitconfig`). If no configurations are specified, Git uses its default settings.

In this article, you'll learn some helpful Git configurations that can improve your development workflow. The tips shared here are things that have worked for me. There are a lot more you can try after reading.

# Git Configuration Tips

Here are some global Git configuration tips.

## 1\. Choose the default editor for Git

When you try to make commits in Git, it by default will open a `vi` editor that looks like this:

![image-18](https://www.freecodecamp.org/news/content/images/2022/03/image-18.png)

This editor can be difficult to use, and if you're like me, you may want to use your preferred editor for writing commits. In your `~/.gitconfig` file, add the following:

```txt
[core]
    editor = code --wait
```

or use this shell command:

```txt
git config --global core.editor "code --wait"
```

This configuration tells Git that for operations like commits and tags, I want to use my [VSCode editor](https://code.visualstudio.com/).

For other types of editors, please refer to this image from [Atlassian](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config):

![image-19](https://www.freecodecamp.org/news/content/images/2022/03/image-19.png)

Editor configurations for git from [git config | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)

## 2\. Git pruning during fetch

Do you know what the pruning command does during fetch? If not, you may want to check this article first that covers how to [delete outdated local branches with the prune git option and the branch delete command](https://dillionmegida.com/p/delete-outdated-branches/#git-fetch---prune).

TLDR: Pruning during fetch is a cleanup method that deletes outdated remote references in your `.git` directory when you do a `git fetch --prune`.

As I explain in that article I just linked, you can automate this without always adding the `--prune` option. To do this, add the following to `~/.gitconfig`:

```txt
[fetch]
    prune = true
```

or use the following command:

```shell
git config --global fetch.prune true
```

With this in place, pruning will occur whenever you do a `git fetch`.

## 3\. Git aliases

In the Git configuration file, you can add aliases for those long commands you type from time to time. For example, commits, stashing, and so on.

Let's say you want to add an alias for adding an empty commit. In that case, you can add the following to the config file:

```txt
[alias]
    empty = "git commit --allow-empty"
```

or in the terminal:

```shell
git config --global alias.empty "git commit --allow-empty"
```

And you can use the command like this:

```shell
git empty "Empty commit"
```

You can also add other shell commands outside Git as aliases. For example, an alias that deletes local branches that have been merged in remote:

```txt
[alias]
    delete-local-merged = "!git fetch && git branch --merged | egrep -v 'master' | xargs git branch -d"
```

The exclamation mark "!" tells Git to run it as a shell command and not a `git *` command.

For the alias, we do a git fetch. Then we get the merged branches, pipe that as input to the egrep command, filter out the "master" branch, and delete the branches.

## 4\. Setting the default branch

When initializing a repository (`git init`), the default branch is `master`. Today, some developers would prefer that to be `main` or something else entirely.

You don't have to create a new branch called `main`, delete the `master` branch, and use the `main` as your default. That's a long process. In the Git configuration file, you can set a default branch upon Git initialization. Here's how:

```txt
[init]
    defaultBranch = main (or whatever name you want)
```

This way, `git init` would create a "main" branch as the default.

## 5\. Show short status by default

By default, the `git status` command shows you changes in your project with long details. It's in this format:

```bash
On branch [branch name]
Your branch is up to date with ...

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in the working directory)
    modified: ...
    
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    ...
    
no changes added to commit (use "git add" and/or "git commit -a")
```

This is a helpful output with instructions, but sometimes you just need a summary of the repository status. The `--short` option added to `git status` gives a short formatted output. The result would look like this:

```bash
M [file]
?? [file]
```

"M" means modified, and "??" means untracked. We can improve this process one step further by making it the default status view using the following configuration:

```txt
[status]
    short = true
```

# Conclusion

In this non-exhaustive list, we've seen five ways to improve our development workflow by customizing the way the Git works by default.

You can find more information about all the Git configuration options (from branches to pulls, to fetches, and many more) in the [git-config Documentation](https://git-scm.com/docs/git-config).