> -  原文地址：[Git Pull Force – How to Overwrite Local Changes With Git](https://www.freecodecamp.org/news/git-pull-force-how-to-overwrite-local-changes-with-git/)
> -  原文作者：[
                    
                        Piotr Gaczkowski
                    
                ](https://www.freecodecamp.org/news/author/doomhammer/)
> -  译者：
> -  校对者：

![Git Pull Force – How to Overwrite Local Changes With Git](https://cdn-media-2.freecodecamp.org/w1280/5f9c99a5740569d1a4ca20f0.jpg)

When you learn to code, sooner or later you'll also learn about Version Control Systems. And while there are many competing tools in this space, one of them is the de facto standard used by almost everyone in the industry. It's so popular that there are companies that use its name in their branding. We're talking about Git, of course.

While Git is a powerful tool, its power is well-hidden. There are some essential concepts that you need to understand to become really proficient with Git. The good news is that once you learn them, you'll hardly ever run into trouble you can't escape from.

# The Typical Workflow

In a typical Git workflow you'll use a local repository, a remote repository, and one or more branches. Repositories store all the information about the project, including its entire history and all the branches. A branch is basically a collection of changes leading from an empty project to the current state.

After cloning a repository, you work on your local copy and introduce new changes. Until you push local changes to the remote repository, all your work is available only on your machine.

When you finish a task, it's time to synchronize with the remote repository. You want to pull the remote changes to keep up with the project's progress, and you want to push the local changes to share your work with others.

# Local Changes

All is well when you and the rest of your team are working on totally separate files. Whatever happens, you won't be stepping on each other's feet.

However, there are times when you and your teammates simultaneously introduce changes in the same place. And that's usually where the problems begin.

Have you ever executed `git pull` only to see the dreaded `error: Your local changes to the following files would be overwritten by merge:`? Sooner or later, everyone runs into that problem.

What's more confusing here is that you don't want to merge anything, just pull, right? Actually, pull is a bit more complicated than you might have thought.

# How Exactly does Git Pull Work?

Pull is not a single operation. It consists of fetching data from the remote server and then merging the changes with the local repository. These two operations can be performed manually if you want:

```bash
git fetch
git merge origin/$CURRENT_BRANCH
```

The `origin/$CURRENT_BRANCH` part means that:

-   Git will merge the changes from the remote repository named `origin` (the one you cloned from)
-   that have been added to the `$CURRENT_BRANCH`
-   that are not already present in your local checked out branch

Since Git only performs merges when there are no uncommitted changes, every time you run `git pull` with uncommitted changes could get you into trouble. Fortunately, there are ways to get out of trouble in one piece!

![image-167](https://www.freecodecamp.org/news/content/images/2021/04/image-167.png)

Photo by [Sneaky Elbow](https://unsplash.com/@sneakyelbow?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

# Different Approaches

When you have uncommitted local changes and still want to pull a new version from the remote server, your use case typically falls into one of the following scenarios. Either:

-   you don't care about the local changes and want to overwrite them,
-   you care about the changes very much and would like to apply them after the remote changes,
-   you want to download the remote modifications but not apply them yet

Each of the approaches requires a different solution.

### You Don't Care About the Local Changes

In this case, you just want to drop all the uncommitted local changes. Perhaps you modified a file to experiment, but you no longer need the modification. All you care about is being up to date with the upstream.

This means that you add one more step between fetching the remote changes and merging them. This step will reset the branch to its unmodified state, thus allowing `git merge` to work.

```bash
git fetch
git reset --hard HEAD
git merge origin/$CURRENT_BRANCH
```

If you don't want to type the branch name every time you run this command, Git has a nice shortcut pointing to the upstream branch: `@{u}`. An upstream branch is the branch in the remote repository that you push to and fetch from.

This is how the above commands would look like with the shortcut:

```bash
git fetch
git reset --hard HEAD
git merge '@{u}'
```

We are quoting the shortcut in the example to prevent the shell from interpreting it.

### You Very Much Care About the Local Changes

When your uncommitted changes are significant to you, there are two options. You can commit them and then perform `git pull`, or you can stash them.

Stashing means putting the changes away for a moment to bring them back later. To be more precise, `git stash` creates a commit that is not visible on your current branch, but is still accessible by Git.

To bring back the changes saved in the last stash, you use the `git stash pop` command. After successfully applying the stashed changes, this command also removes the stash commit as it is no longer needed.

The workflow could then look like this:

```bash
git fetch
git stash
git merge '@{u}'
git stash pop
```

By default, the changes from the stash will become staged. If you want to unstage them, use the command `git restore --staged` (if using Git newer than 2.25.0).

### You Just Want to Download the Remote Changes

The last scenario is a little different from the previous ones. Let's say that you are in the middle of a very messy refactoring. Neither losing the changes nor stashing them is an option. Yet, you still want to have the remote changes available to run `git diff` against them.

As you have probably figured out, downloading the remote changes does not require `git pull` at all! `git fetch` is just enough.

One thing to note is that by default, `git fetch` will only bring you changes from the current branch. To get all the changes from all the branches, use `git fetch --all`. And if you'd like to clean up some of the branches that no longer exist in the remote repository, `git fetch --all --prune` will do the cleaning up!

![image-166](https://www.freecodecamp.org/news/content/images/2021/04/image-166.png)

Photo by [Lenin Estrada](https://unsplash.com/@lenin33?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

# Some Automation

Have you heard of Git Config? It's a file where Git stores all of the user-configured settings. It resides in your home directory: either as `~/.gitconfig` or `~/.config/git/config`. You can edit it to add some custom aliases that will be understood as Git commands.

For example, to have a shortcut equivalent to `git diff --cached` (that shows the difference between the current branch and the staged files), you'd add the following section:

```
[alias]
  dc = diff --cached
```

After that, you can run `git dc` whenever you wish to review the changes. Going this way, we can set up a few aliases related to the previous use cases.

```
[alias]
  pull_force = !"git fetch --all; git reset --hard HEAD; git merge @{u}"
  pf = pull_force
  pull_stash = !"git fetch --all; git stash; git merge @{u}; git stash pop"
```

This way, running `git pull_force` will overwrite the local changes, while `git pull_stash` will preserve them.

# The Other Git Pull Force

Curious minds may have already discovered that there is such a thing as `git pull --force`. However, this is a very different beast to what's presented in this article.

It may sound like something that would help us overwrite local changes. Instead, it lets us fetch the changes from one remote branch to a different local branch. `git pull --force` only modifies the behavior of the fetching part. It is therefore equivalent to `git fetch --force`.

Like `git push`, `git fetch` allows us to specify which local and remote branch do we want to operate on. `git fetch origin/feature-1:my-feature` will mean that the changes in the `feature-1` branch from the remote repository will end up visible on the local branch `my-feature`. When such an operation modifies the existing history, it is not permitted by Git without an explicit `--force` parameter.

Just like `git push --force` allows overwriting remote branches, `git fetch --force` (or `git pull --force`) allows overwriting local branches. It is always used with source and destination branches mentioned as parameters. An alternative approach to overwriting local changes using `git --pull force` could be `git pull --force "@{u}:HEAD"`.

# Conclusion

The world of Git is vast. This article covered only one of the facets of repository maintenance: incorporating remote changes into a local repository. Even this everyday scenario required us to look slightly more in-depth into this version control tool's internal mechanisms.

Learning actual use cases helps you better understand how Git works under the hood. This, in turn, will make you feel empowered whenever you get yourself into trouble. We all do that from time to time.