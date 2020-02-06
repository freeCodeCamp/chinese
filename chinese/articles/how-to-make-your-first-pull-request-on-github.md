> * 原文地址：[How to make your first pull request on GitHub](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)
> * 原文作者：M.V.Thanoshan
> * 译者：
> * 校对者：

![How to make your first pull request on GitHub](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Untitled-design.png)

## What is forking?

When we love someone’s repository and would like to have it in our GitHub account, we fork it so that we can work with it separately.

When we fork a repository, we get an instance of that entire repository with its whole history. After forking, we can do whatever we want to do without affecting the original version.

## What is a pull request?

Pull requests are the way we contribute to group projects or open source projects.

For instance, a user Harry forks a repository of ThanoshanMV and makes changes to that repository. Now Harry can make a pull request to ThanoshanMV, but it’s up to ThanoshanMV to accept or decline it. It’s like saying, “ThanoshanMV, would you please pull my changes?”

## What it means to contribute

Not only can we contribute to an open source project with code, but we can also contribute in many other ways. Some of these ways are described below.

As  [99xtechnology][1]  IT firm’s hacktitude starting guide says, we can contribute to an open source project in the following ways:

1.  Designing: You can construct the layouts of a project to improve its usability, improve the project’s navigation and menu based on user research programs, create art for logos or t-shirts, and provide style guides for the project.
2.  Writing: You can write and improve the project’s documentation or translate the documentation, start a newsletter for the project or write tutorials for the project and curate highlights from the mailing list, or curate a folder of examples showing how the projects are used.
3.  Organizing: You can link duplicate issues, suggest new issue labels, suggest to close old open issues and ask questions on recently opened issues to move the discussion forward.
4.  Help others: Answer questions on open issues, review code on other people’s submissions and offer to mentor another contributor.
5.  Coding: Help solve any open issues, ask if you can provide any new features and improve tooling and testing.

## Let’s make our first pull request!

If you’re not very familiar with Git & GitHub, please go review  [The beginner’s guide to Git & GitHub][2].

### 1\. Fork the repository

Fork the repository by clicking the fork button on the top of the page. This will create an instance of that entire repository in your account.

![](https://www.freecodecamp.org/news/content/images/2020/01/fork-1.png)

### 2\. Clone the repository

Once the repository is in your account, clone it to your machine to work with it locally.

To clone, click on the clone button and copy the link.

![](https://www.freecodecamp.org/news/content/images/2020/01/clone1.png)

Open the terminal and run the following command. It will clone the repository locally.

```
$ git clone [HTTPS ADDRESS]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone2.png)

Now we have set up a copy of the master branch from the main online project repository.

We need to go to that cloned directory by running this command:

```
$ cd [NAME OF REPOSITORY]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone3.png)

### 3\. Create a branch

It’s good practice to create a new branch when working with repositories, whether it’s a small project or contributing to a group's work.

Branch name should be short and it should reflect the work we’re doing.

Now create a branch using the  `git checkout`  command:

```
$ git checkout -b [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch1.png)

### 4\. Make changes and commit them

Make essential changes to the project and save it.

Then execute  `git status`  , and you’ll see the changes.

![](https://www.freecodecamp.org/news/content/images/2020/01/status.png)

Add those changes to the branch you just created using the  `git add`  command:

```
$ git add .
```

![](https://www.freecodecamp.org/news/content/images/2020/01/add1.png)

Now commit those changes using the  `git commit`  command:

```
$ git commit -m "Adding an article to week 02 of articles of the week"
```

![](https://www.freecodecamp.org/news/content/images/2020/01/commit.png)

### 5\. Push changes to GitHub

In order to push the changes to GitHub, we need to identify the remote’s name.

```
$ git remote
```

![](https://www.freecodecamp.org/news/content/images/2020/01/remote.png)

For this repository the remote’s name is “origin”.

After identifying the remote’s name we can safely push those changes to GitHub.

```
git push origin [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch2.png)

### 6\. Create pull request

Go to your repository on GitHub and you’ll see a button “Compare & pull request” and click it.

![](https://www.freecodecamp.org/news/content/images/2020/01/compare.png)

Please provide necessary details on what you’ve done (You can reference issues using “#”). Now submit the pull request.

Congratulations! You've made your first pull request.

![](https://www.freecodecamp.org/news/content/images/2020/01/pullRequest-1.png)

If your pull request is accepted you’ll receive an email.

### 7\. Sync your forked master branch

Before submitting any pull requests to the original repository you have to sync your repository to the original one.

Even if you are not going to submit a pull request to the original repository, it’s better to sync with the original repository as some additional features and bug fixes may have been done since you forked the original repository.

Follow these steps to update/sync those changes to your master branch:

1.  First, check which branch you are in.

```
$ git branch
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch4.png)

It’ll list all branches and indicates the current or active branch in green.

2\. Switch to the master branch.

```
$ git checkout master
```

![](https://www.freecodecamp.org/news/content/images/2020/01/master9.png)

3\. Add the original repository as an upstream repository.

In order to pull the changes from the original repository into your forked version, you need to add the original Git repository as an upstream repository.

```
$ git remote add upstream [HTTPS]
```

Here, \[HTTPS\] is the URL that you have to copy from the owner’s repository.

![](https://www.freecodecamp.org/news/content/images/2020/01/owner-repo.png)

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-add.png)

4\. Fetch the repository.

Fetch all of the changes from the original repository. Commits to the original repository will be stored in a local branch called upstream/master.

```
$ git fetch upstream
```

![](https://www.freecodecamp.org/news/content/images/2020/01/fetch.png)

5\. Merge it.

Merge the changes from the upstream/master into your local master branch. This will bring your fork’s master branch into sync with the upstream repository without losing your local changes.

```
$ git merge upstream/master
```

6\. Push changes to GitHub

At this point your local branch is synced to the original repository’s master branch. If you want to update the GitHub repository, you need to push your changes.

```
$ git push origin master
```

**NOTE:**  After syncing your forked master branch you can remove that remote if you want to. But you’ll need to update/sync your repository in future too, so it's best practice to keep it.

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-dlt.png)

```
$ git remote rm [Remote Name]
```

### 8\. Delete the unnecessary branch

Branches are created for a special purpose. Once that purpose is accomplished, those branches aren’t necessary, so you can delete them.

```
$ git branch -d [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/delete.png)

You can delete the version of it on GitHub, too.

```
git push origin --delete [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/last.png)

## Conclusion

GitHub is a powerful tool to control version history. Everyone can contribute to open source projects by making pull requests. Contributions aren’t always code – there are other ways to contribute, too.

Finally, I have to tell you that you shouldn't worry if your pull requests are rejected. Maintainers spend a lot time improving their projects, and they know a lot more about their projects than we do. So don't worry if your request isn't merged.

> Stay strong, stay positive, and never give up.  
> ― Roy T. Bennett,  [The Light in the Heart][3]

This article was originally posted on  [Medium][4].

You can contact and connect with me on  [Twitter][5].

**Keep contributing to the open source world!**

  

[1]: https://www.99xtechnology.com/
[2]: https://medium.com/@mvthanoshan9/ubuntu-a-beginners-guide-to-git-github-44a2d2fda0b8
[3]: https://www.goodreads.com/work/quotes/49604402
[4]: https://medium.com/@mvthanoshan9/how-to-make-your-first-pull-request-on-github-9aefca5cc837
[5]: https://twitter.com/ThanoshanMV
