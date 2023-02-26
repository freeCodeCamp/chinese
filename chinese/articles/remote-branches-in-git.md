> -  原文地址：[What is a Remote Branch in Git? How to Check out Remote Branches from GitHub](https://www.freecodecamp.org/news/remote-branches-in-git/)
> -  原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> -  译者：
> -  校对者：

![What is a Remote Branch in Git? How to Check out Remote Branches from GitHub](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/pexels-antonio-borriello-1297611.jpg)

Git is a free and open-source tool. Specifically, it is the most popular version control system used in software development today.

Git allows you to keep track of and maintain different versions of a coding project.

With Git, developers and technical teams can collaborate and work together on a project.

Multiple developers can work on the same or different parts of the project in parallel without interfering with one another, increasing productivity and efficiency.

Developers can collaborate simultaneously and work in their environments because of the built-in functionalities and tools Git provides, one of which is branches.

## What Is a Branch in Git?

A branch in Git is a separate, safe, and isolated area of development that diverges from the main project.

Branches allow developers to work on and test new features, fix bugs, experiment with new ideas and reduce the risk of breaking the stable code in the codebase.

### Local VS Remote Branches – What's The Difference?

In Git, there are two types of branches: local and remote branches.

A local branch exists only on your local machine.

All the changes you introduce and commit to your local repository are stored only on your local system. They provide a way to experiment, fix bugs, and develop new features without affecting the main codebase.

To create a local branch, you use the `git branch <branch-name>` command, where `branch-name` is the name of your new branch.

For example, if you want to create a new branch called `test`, you would use the following command:

```bash
git branch test
```

You can use the `git checkout` command to navigate to the new branch and create the changes you want:

```bash
git checkout test
```

To see a list of your local branches use the `git branch` command.

With all that said, you can't collaborate with other developers on a local branch. This is where remote branches come in handy.

Remote branches are how developers collaborate on the same project simultaneously.

A remote branch exists in a remote repository (most commonly referred to as `origin` by convention) and is hosted on a platform such as [GitHub](https://github.com/).

Once you have committed the changes to your local branch you can push the local branch to the remote repository (`origin`) using the `git push <remote> <local>` syntax. Then, others will be able to see your code.

```bash
git push -u origin test
```

Git will create a copy of your local branch on the remote repository. This copy is known as the remote branch.

To view a list of all the remote branches in your project, use the `git branch -r` command.

## How to Check Out a Remote Branch in Git

You may need to access a branch created by another developer for reviewing or collaboration purposes.

This branch is not on your local system – it is a remote branch stored on the remote repository.

The thing is, Git doesn't automatically allow you to work on someone else's branches.

Instead, you need to create a local copy that reflects the remote branch you want to work with and then make changes locally.

Let's see the steps you need to take in the following sections.

### How to Fetch All Remote Branches

First of all, you need to fetch the necessary branch data using the `git fetch` command and the name of the remote repository:

```bash
git fetch origin
```

This command will download the latest changes (including the remote branches) from the remote repository to your local machine.

If you have a different remote name, replace `origin` with that.

### How to View Branches Available for Checkout

Next, to view a list of the branches available for checkout, use the following command:

```bash
git branch -r
```

The `-r` (for remote) option tells Git to list remote branches.

The output of this command will be a list of all the remote branches available for checkout. You will see the `remotes/origin` prefix before the branch name.

### How to Check Out the Remote Branch

You can not make changes directly to the remote branch you are interested in – you need a local copy.

You need to check out the branch you are interested in so you can start working locally on the changes you want to make.

To do this, use the `git checkout` command with the `-b` (for the branch) option. The syntax looks something similar to this:

```bash
git checkout -b <new-local-branch-name> origin/<remote-branch-name>
```

So, if you wanted a copy of the remote branch `new-feature`, you would do the following:

```bash
git checkout -b new-feature origin/new-feature
```

The command above creates a new local copy on your machine that is based on and connected to the remote branch.

It creates a new branch called `new-feature`, checks out that branch, and pulls the changes from the `origin/new-feature to the new branch`.

Now you can push new commits to `origin/new-feature`.

### Thanks for reading!

Now you know how to check out and work with remote branches in Git. Happy coding!