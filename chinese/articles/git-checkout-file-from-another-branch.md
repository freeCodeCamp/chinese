> - 原文地址：[Git Checkout – How to Checkout a File from Another Branch](https://www.freecodecamp.org/news/git-checkout-file-from-another-branch/)
> - 原文作者：[Tim Mouskhelichvili](https://www.freecodecamp.org/news/author/tim-mouskhelichvili/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git Checkout – How to Checkout a File from Another Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/cover.png)

While you're working on a repository in Git, you might need to checkout a specific file from another branch.

Luckily, Git offers many possible ways to do this task quickly. One of the easiest solutions is to use the `git checkout` command with the specified file as an argument.

In this article, we will analyze different solutions to this problem and go through the process you'll need to follow for each.

Let's get to it 😎.

## Git Checkout Use Case Example

You are working on a branch called `feature/A` containing a file named `utils.js`.

You have another branch called `feature/B` with an updated `utils.js` file.

You want to checkout that file and bring it from the branch called `feature/B` to the branch called `feature/A`.

Here are three possible solutions for this task.

### Solution 1: Use the `git checkout` command

The `git checkout` command offers a simple way to get a file or a folder from another branch.

Here is the syntax to checkout a file from another branch:

```Bash
git checkout <other-branch-name> -- path/to/your/folder
```

Here is the process to follow:

1\. Checkout to the branch where you want to copy the file.

```Bash
git checkout feature/A
```

2\. Once you are on the correct branch, copy the file.

```Bash
git checkout feature/B -- utils.js
```

3\. Use the [git status](https://timmousk.com/blog/git-status/) command to ensure that the file has been copied.

4\. Commit and push to a remote.

When using the checkout command, you can also get:

- A folder from another branch.
- Multiple files by specifying each one of them.

Also, note that you can get a file/folder from the stash.

### Solution 2: Use the `git restore` command

Another option is to use the `git switch` command with the `git restore` command.

If you have never heard about those two commands, that's alright. They are relatively new. Git introduced them in version 2.23 in 2019.

The purpose of those two commands is to split up the `git checkout` command's responsibilities to simplify it for users.

The `git restore` command restores the working tree.

The `git switch` command switches branches.

Here is the process to follow to get a file from another branch:

1\. Switch to the branch where you want to checkout the file.

```Bash
git switch feature/A
```

2\. Get the file from the other branch.

```Bash
git restore --source feature/B -- utils.js
```

3\. Commit and push the changes.

### Solution 3: Use the `git show` command

Finally, we can use the `git show` command.

Here is the process to follow:

1\. Switch to the working branch.

```Bash
git switch feature/A
```

2\. Get the file from the other branch.

```Bash
git show feature/B:path/utils.js > path/utils.js
```

3\. Commit and push the changes.

**Note:** You need to specify the relative path from your directory's root this time.

## Final thoughts

As you can see, getting a file from another branch is not rocket science.

When I need to do it in my day-to-day life, I usually use the `git checkout` command.

![6ii6ur](https://www.freecodecamp.org/news/content/images/2022/06/6ii6ur.jpg)

Please visit [my blog](https://timmousk.com/) if you are interested to discover more about Git or web development technologies like TypeScript.

Thank you for reading this article.
