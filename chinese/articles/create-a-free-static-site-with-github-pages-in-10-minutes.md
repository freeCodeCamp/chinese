> * 原文地址：[How to create a free static site with GitHub Pages in 10 minutes 使用 GitHub Pages，10 分钟搭建静态网页](https://www.freecodecamp.org/news/create-a-free-static-site-with-github-pages-in-10-minutes/)
> * 原文作者：Travis Fantina
> * 译者：cyan
> * 校对者：

![How to create a free static site with GitHub Pages in 10 minutes](https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

静态网站的应用十分广泛，因为它具有明显的优势——页面响应速度快，而且随着越来越多的托管服务支持，搭建起来很容易。

我不打算在这篇文章里讨论“谁在什么时候，在哪里，选用静态网站做什么”或者“为什么选用它”。我假定你对上述问题至少有一个模糊的概念，或者只是想要搭建你自己的网站，并不在意其他细节——那么，这篇文章正是写给你这样的读者的。

首先，我想说的是我写这篇文章是为了给尽可能多的读者看的，所以你不需要任何编程知识，但是熟悉一些命令行和Git操作会帮到你很多。

## 所以怎么在10分钟内用 GitHub 创建一个静态网站？
我们将用到两个特定工具：GitHub Pages，专门提供静态内容服务，另一个 Jekyll，用来生成静态内容。

Jekyll 是一个用来简单创建静态站点的 Ruby gem，所以如果你想用 Jekyll, 需要在你的电脑上安装 Ruby。如果你是 OSX 的操作系统，你很可能已经有某个版本Ruby（尽管你可能需要更新它）。如果你没有安装，或者你使用的是 windows 的电脑，你可以在这里了解更多关于安装它的信息: [Installing Ruby][1]。

做完上述操作后，打开新的终端窗口，输入`gem install bundler jekyll`。安装 Bundler（Ruby 的包管理工具）和 Jekyll。

当安装完这些 gems（Ruby 包）后，输入`Jekyll new my-static-site`(随意给它命名),这个命令会运行 Jekyll 的生成器，在一个新目录里创建你的项目，在网站创建站点后，通过输入 `cd my-static-site`（或者 `cd` 你项目的名字）进入到新创建网站的目录。

在文本编辑器打开项目，你会看到Jekyll为你创建的几个文件和文件夹。现在你只需要关心 Gemfile (不是 Gemfile.lock)，Gemfile 是一个 Ruby 文件，它管理运行一个项目所需的所有相关Ruby包。

这个文件有一行写着 Jekyll 的版本，把这行注释掉：

```ruby
#gem "jekyll", "~> 4.0.0"

```

然后加入这一行：

```ruby
gem "github-pages", group: :jekyll_plugins

```

当你安装 GitHub Pages gem 时，可能会出现有很多问题，有时于它所依赖的 gem 已经过时了，或者你本地安装的 gem 版本太新。

我发现这使得在本地构建和测试Jekyll站点变得很困难。一个简单的方法是，只在本地测试站点并保存其构建直到你准备部署之前。然而，通过以下代码，你可以在Gemfile中指定这些依赖项版本，Jekyll 就可以同时在本地和 GitHub Pages上运行。

```ruby
gem "jekyll", "~> 3.8.5"
gem "github-pages","~> 202" , group: :jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.11.0"
end

```

感谢 [Alex Waibel][2]  在  [StackOverflow][3]  提供的最新配置。
 
为了看到你的网站，在命令行输入 `bundle exec Jekyll serve` 这会开启一个服务器，你可以用通过在浏览器的 url 栏上输入 "localhost:4000" 看到你的网站。

瞧！你已经在项目目录里通过 Jekyll 创建一个网站。你已经完成了50%。

## 让我们把它放到网上

打开 GitHub.com 并注册一个账号，或者你已经有一个账号，选择 new 按钮并创建一个新的仓库，这个仓库的命名很重要，之后你的 GitHub Pages 链接就是你的用户名 .github.io 。例如我的 github 用户名是 tfantina，我的博客就是 [tfantina.github.io][4]，所以我的 GitHub 仓库名是: "tfantina.github.io".

回到你的终端窗口，输入下面的命令，把你电脑的 Jekyll 网站上传到 Github 。

```shell
git init
git remote add origin git@github.com:<your_github_username>/<your_github_repo_name>.git
git commit -am “Setting up Jekyll!”
git push -u origin master

```

(当替换你的用户名和项目名时，你不需要左右尖括号<>).

一旦你的修改提交到你的Github仓库，你就有一个正在运行的静态页面，这是因为你正在用GitHub Pages gem，并用GitHub理解的命名方式命名仓库。

你可以通过访问你的站点或者在GitHub的仓库设置页并滑到页面部分来确认这件事，你应该会看到一个绿色的方框，显示你的站点已经被发布了。

![](https://www.freecodecamp.org/news/content/images/2019/11/DFAC66CE-C182-4ECA-9379-87843C730645.png)

你也将会注意到很容易在这里就改变页面的主题，GitHub为Jekyll提供一些默认主题，当然你可以自己设计。如果你的站点已经发布但是看起来是空白页，你可能需要强制更新或者尝试在一个私隐窗口打开你的网站。这个可能看上去像是废话，但几乎每次我设置一个新的Jekyll实例都这样。

如果一切按计划进行，你的网站应该是这样的:

![](https://www.freecodecamp.org/news/content/images/2019/11/65F58F30-3000-44E5-96CF-DCC1CFEDF953.png)

---

就这样，在这几分钟里你已经在 GitHub 创建并部署一个静态网站。但是，你可能想在页面放一些内容。

我承诺过只会花费10分钟，因此，我不会深入到页面、front matter或 Liquid 模板语言的所有细节，我会在之后再发一篇文章。但是我会分享如何创建你的第一篇文章。

回到文本编辑器，打开 “_posts” 文件夹，这里已经有一篇欢迎你到新博客的文章。创建一个新的 markdown 文件，并且按这种格式 YEAR-MONTH-DAY-TITLE.markdown 命名并保存它。（见下文）:

![](https://www.freecodecamp.org/news/content/images/2019/11/B90755E4-B12A-4038-8DD7-AF945E73FE43.png)

Jekyll 文章包含两个部分 front matter 和 body。

front matter 给了 Jekyll 一些具体的指示，比如文章的标题是什么，使用什么布局，以及文章是什么时候写的。

Front matter 是高度可配置的。比如，我想我的帖子有英雄的图片，所以我创建 `lead_image` 标签，并在我的布局放一些语法，它会根据每个帖子的 front matter 来显示对应的 lead images。Liquid 模板语言能轻松地根据 front matter ，把内容放到你的主题。

你还可以在 front matter 配置更多，但是让我们从一个通用的示例开始。

一个默认的 front matter 像这样：

```markdown
—
layout: post 
title:  "Welcome to Jekyll!"
date:   2019-11-09 18:07:11 -0600
categories: jekyll update
—

```

-   布局告诉Jekyll用那种布局来显示你的内容。你可以为不同的页面或帖子类型设置多个布局。
-   文章标题
-   文章日期
-   分类，本质上是标签，可以添加任意数量的标签(以空格分隔)

在配置好 front matter 之后，用 [Markdown][5] 写帖子会获得很大的灵活性。

当你写完并保存之后，打开终端窗口。

```shell
git commit -am “Publishes first post
git push
```

在一分钟之后(也许刷新一下)，你就可以看到你的帖子了。

希望你现在已经在使用 Jekyll 创建的 GitHub Pages 上有了一个可以工作的静态站点，如果你有任何疑问，请发推特 [@tfantina][6]，或者你可以给我发邮件contact@travisfantina.com.

[1]: https://www.ruby-lang.org/en/documentation/installation/
[2]: https://stackoverflow.com/users/6885157/alex-waibel
[3]: https://stackoverflow.com/questions/58598084/how-does-one-downgrade-jekyll-to-work-with-github-pages
[4]: https://tfantina.github.io/
[5]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[6]: https://twitter.com/tfantina
