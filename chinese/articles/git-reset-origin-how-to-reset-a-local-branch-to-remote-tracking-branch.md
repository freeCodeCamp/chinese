> -  原文地址：[Git Reset Origin – How to Reset a Local Branch to Remote Tracking Branch](https://www.freecodecamp.org/news/git-reset-origin-how-to-reset-a-local-branch-to-remote-tracking-branch/)
> -  原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> -  译者：
> -  校对者：

![Git Reset Origin – How to Reset a Local Branch to Remote Tracking Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/tanner-van-dera-oaQ2mTeaP7o-unsplash.jpg)

Git is a free and open-source version control system. It is the most popular version control system in use today.

Git keeps track of the changes made to a project over time. This allows multiple developers to collaborate and work on the same project in parallel, no matter where they are in the world.

It lets developers view the history of the project and see who made what changes and why those changes were made in the first place. Also, with Git, you can revert to an older version of the code if needed.

Essentially, Git ensures that developers are all on the same page and know what is going on in the project.

When working on a project, one of the challenges you may face is trying to synchronize your work - specifically, syncing local and remote branches.

In this article, you will learn how to reset and exactly match a local Git branch to a remote branch.

Here is what we will cover:

1.  [What is a branch in Git?](#intro)
    1.  [What's the difference between local, remote, and remote-tracking branches?](#difference)
2.  [How to reset a local Git branch to remote?](#reset)
    1.  [Save the current state of your local branch](#save)
    2.  [Do a `git checkout`](#checkout)
    3.  [Fetch origin](#fetch)
    4.  [Reset local repository](#reset-local)
    5.  [Clean up any untracked changes](#clean)
3.  [Conclusion](#conclusion)

## What is A Branch in Git? Git Branches in a Nutshell for Beginners

Branching is a core aspect of version control and an important concept to learn.

Because of branching, developers are able to collaborate in a more flexible way. Branching makes the everyday development process smoother and more efficient.

Branching is a way to manage different versions of your code, and acts as a pointer to a snapshot of your changes.

When you first create a Git repository for your project, at that exact same time, the **main branch** is also created.

The main branch is the primary and default branch for your project. It represents the bug-free, stable, and usable version of your code that is ready to be released and shared with the public. It is the main codebase.

But what happens when you want to add a new feature to your project?

Before adding it, you need to test it out and ensure that it doesn’t introduce new bugs or interfere with the existing code.

There needs to be a way of working on the new feature without affecting the codebase.

And this is where branching comes in handy.

Branches are isolated spaces to experiment and test new code without affecting the code in the main branch.

You can create a new branch and make the changes you want. If you are happy with the changes, you can add them to the main branch by _merging_ them. If you are not, you can delete that branch without messing with the main code in the project.

Branches also allow developers to work on different features at the same time without interfering with each other’s work.

To learn more about branches in Git, check out [this video](https://www.youtube.com/watch?v=e2IbNHi4uCI) that explains how they work, and bookmark [this article](https://www.freecodecamp.org/news/how-to-use-branches-in-git/) that provides a cheat sheet on how to use them.

### Local VS Remote VS Remote Tracking Branches in Git - What's the Difference?

A **local branch** is a branch that is accessible only on your local machine and exists there in isolation. From here, you can add files and commit any changes you make. Those changes will be saved locally and will only be visible to you and available on your local physical machine.

Other developers will not be able to look at your work and the changes you made.

You can create a local branch named `my_branch` using the following command:

```bash
git branch my_branch
```

And to list all of your local branches, you use the `git branch` command.

To collaborate with other developers on the same project and for them to view any changes you make, you need to push changes from your local branch to a remote repository.

This leads us to **remote branches**.

A remote branch refers to a branch that exists in a remote repository.

A remote repository, also referred to as remote, will typically be a repository hosted somewhere on the Internet, in a remote location such as on GitHub servers. The default name of a remote repository is `origin`.

Now, a **remote-tracking branch** refers to a local reference of the state of the remote branch. By default, branches have no connection to one another. That said, you can tell a local branch to track a remote one.

## How to Reset A Local Git Branch to Remote?

You may have been working on your local branch, making various changes and modifications to a project, and you concluded that those changes you made are no longer needed.

You want to remove them and reset the branch to the remote branch.

On top of that, another developer may have made changes and pushed them to the remote branch, so you need to fetch those latest changes from the remote repository to be up to date.

The steps you need to take to achieve this are the following:

-   Save the current state of your local branch (optional).
-   Fetch the latest version of the code from the remote.
-   Reset the local branch.
-   Clean up files (optional).

### Save the Current State of your Local Branch

Before starting, you may want to save the state of your current branch in another branch.

When resetting a local Git branch to remote, you will lose the changes you made locally.

This step is optional, and you may choose to do it just in case something goes wrong or you want to go back to that work again in the future.

To save the work, use the following commands:

```bash
git commit -a -m "I am saving my work"
git branch backup_work
```

Your work now is saved to the branch named `backup_work`.

### Do A `git checkout`

Typically, there will be a local remote-tracking branch with the same name as the remote one that you want to reset to, such as `main`.

Use the following command to checkout the local remote main branch:

```bash
git checkout main
```

If you are using a different name for this branch, replace `main` with the name you are using.

### Fetch origin

To fetch the remote repository, and the latest state and version of the code in the remote repository, enter the following command:

```bash
git fetch origin
```

`origin` is an alias created by Git and specifies the remote URL of the remote repository. Usually, Git automatically assumes the remote repository’s name is `origin`.

If you have a different remote name, replace `origin` with the name you are using.

### Reset Local Repository

Now, reset the local `main` branch to the remote repository using the following command:

```bash
git reset --hard origin/main
```

### Clean Up Any Untracked Changes

This step is optional.

After using the above commands, you may end up with some untracked files.

Use the following command to clean up any untracked changes:

```bash
git clean -xdf
```

Let's break the `-xdf` flag down and explain what each part does:

-   The `-x` flag removes ignored files.
-   The `-d` flag removes untracked folders.
-   The `-f` flag removes untracked files.

## Conclusion

And there you have it – you now have reset your local branch to remote.

Hopefully, you found this article helpful.

To learn more about Git, check out the following free resources:

-   [Git and GitHub for Beginners - Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)
-   [Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git](https://www.youtube.com/watch?v=Uszj_k0DGsg)
-   [Advanced Git Tutorial - Interactive Rebase, Cherry-Picking, Reflog, Submodules and more](https://www.youtube.com/watch?v=qsTthZi23VE)

Thank you for reading and happy coding :)