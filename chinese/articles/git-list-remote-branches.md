> - 原文地址：[Git List Remote Branches](https://www.freecodecamp.org/news/git-list-remote-branches/)
> - 原文作者：[Quincy Larson](https://www.freecodecamp.org/news/author/quincylarson/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git List Remote Branches](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/niko-photos-tGTVxeOr_Rs-unsplash.jpg)

There are 4 different Git commands you can enter into your command line to list all of the remote branches of a repo. I will show you command line code examples of each of these.

For all of these examples, I will use [freeCodeCamp's open source repository](https://github.com/freeCodeCamp/freeCodeCamp/).

### Command #1: git branch -r

This Git command will show you remote branches. The `-r` flag here is short for `--remotes`.

```
freecodecamp➜~/web/freeCodeCamp(main)» git branch -r

Output: 
  origin/HEAD -> origin/main
  origin/i18n-sync-client
  origin/main
  origin/prod-current
  origin/prod-staging
  origin/renovate/react-i18next-11.x
  origin/renovate/typescript-eslint-monorepo
```

This is the command I use personally. So if you want, you can just stop reading here and use `git branch -r` whenever you want to list remote git branches.

But for completeness, I've included 3 other commands you can use, that return different lists.

### Command #2: git ls-remote --heads

This Git command returns the same information, but also includes the hash for these remotes.

```
freecodecamp➜~/web/freeCodeCamp(main)» git ls-remote --heads

Output: 
From git@github.com:freeCodeCamp/freeCodeCamp
12d742a4f0dfdcfae25d1b71aa738b4e91bfcb61 refs/heads/i18n-sync-client
f05262b823f5a578787e5387357383f09df9c5c1 refs/heads/main
6d89576b6c588e3e3daa90bdaf226a6f5cc3d9c5 refs/heads/prod-current
6d89576b6c588e3e3daa90bdaf226a6f5cc3d9c5 refs/heads/prod-staging
750af5a018008c9a7eac683b064adc016b990659 refs/heads/renovate/react-i18next-11.x
08e06f10363ab1d33156b83b2b01cad005c3a2cf refs/heads/renovate/typescript-eslint-monorepo
```

### Command #3: git ls-remote

This Git command displays not only the names of remote repositories, but their reference information, including Git commit hash.

```
freecodecamp➜~/web/freeCodeCamp(main)» git ls-remote

Output:

! [origin/HEAD] chore(deps): update dependency @types/validator to v13.7.3
 ! [origin/i18n-sync-client] fix(client): prevent lower jaw breaking on code evaluation (#46154)
  ! [origin/main] chore(deps): update dependency @types/validator to v13.7.3
   ! [origin/prod-current] fix(curriculum): don't block fragment links (#46246)
    ! [origin/prod-staging] fix(curriculum): don't block fragment links (#46246)
     ! [origin/renovate/react-i18next-11.x] fix(deps): update dependency react-i18next to v11.17.0
      ! [origin/renovate/typescript-eslint-monorepo] chore(deps): update typescript-eslint monorepo to v5.27.0
-------
```

There is a lot of specially formatted output, so I'll just include a screenshot to give you an idea:

![freeCodeCamp_-_freecodecamp_MacBook-Pro_-____freeCodeCamp_-_-zsh_-_136-36-2](https://www.freecodecamp.org/news/content/images/2022/06/freeCodeCamp_-_freecodecamp_MacBook-Pro_-____freeCodeCamp_-_-zsh_-_136-36-2.png)

If you want color coding and timestamps in your terminal here, I recommend using OhMyZSH.

### Command #4: git show-branch -r

The main reason you would use this Git command is because it displays almost everything, so you can control+f through to find a particular hash.

I don't remember ever using this before myself.

```
freecodecamp➜~/web/freeCodeCamp(main)» git show-branch -r

Output:

From git@github.com:freeCodeCamp/freeCodeCamp
f05262b823f5a578787e5387357383f09df9c5c1 HEAD
12d742a4f0dfdcfae25d1b71aa738b4e91bfcb61 refs/heads/i18n-sync-client
f05262b823f5a578787e5387357383f09df9c5c1 refs/heads/main
6d89576b6c588e3e3daa90bdaf226a6f5cc3d9c5 refs/heads/prod-current
6d89576b6c588e3e3daa90bdaf226a6f5cc3d9c5 refs/heads/prod-staging
750af5a018008c9a7eac683b064adc016b990659 refs/heads/renovate/react-i18next-11.x
08e06f10363ab1d33156b83b2b01cad005c3a2cf refs/heads/renovate/typescript-eslint-monorepo
36380c5a67938de35d7011e33855d45bb545300b refs/pull/10/head
d12e25f250b91afc01a43af0067d7026c39473fa refs/pull/100/head
56ff814f24385e5f76dc29bc4276c84e38ca9c5f refs/pull/10006/head
f84bb9a94ea33e0994e2d40c779416f3caa3aa04 refs/pull/10007/head
7193b9c725ed97cd8cc99aba72ceffa40a79c8f8 refs/pull/10008/head

[30,000 more lines]

9656d9030eb472341eebf5e0fb46a3538740701b refs/pull/9991/head
0545010ab9e1dac4aedca071669b6a86b35cabdc refs/pull/9995/head
b5365d3106e188fa6782388221b1184dfb2ffc88 refs/pull/9995/merge
0545010ab9e1dac4aedca071669b6a86b35cabdc refs/pull/9996/head
b5365d3106e188fa6782388221b1184dfb2ffc88 refs/pull/9996/merge
7e35af7b67c22b502cdfdf4663fafc788e75eeec refs/pull/9997/head
d8f3a9cb2e6d41a95f610ac72efae30ca9952d6f refs/remotes/origin/pr-39112-with-my-additional-commits-for-tests
d3aaa5a11e09f5996cfd5eb2f8b55f63785b4947 refs/remotes/upstream/master
56d78a11198a0d244bd131a8b9386b247212c5a1 refs/remotes/upstream/production-current
b73c7eac62d30fdc5e533f617dcd1b5e95306984 refs/remotes/upstream/staging
```

For the freeCodeCamp repo, this command returned more than 30,000 lines of branches. So I would not recommend using this command unless you absolutely need to see everything. 😅

That's all. I hope you have a fantastic day, and happy coding.
