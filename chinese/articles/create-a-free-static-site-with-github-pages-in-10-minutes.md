> * 原文地址：[How to create a free static site with GitHub Pages in 10 minutes 使用 GitHub Pages，10 分钟搭建静态网页](https://www.freecodecamp.org/news/create-a-free-static-site-with-github-pages-in-10-minutes/)
> * 原文作者：Travis Fantina
> * 译者：cyan
> * 校对者：

![How to create a free static site with GitHub Pages in 10 minutes](https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

静态网站变得流行是因为它们非常快，而且随着越来越多的托管服务支持，它们很容易就可以搭建。

我不打算在这里讨论，谁在用，它是什么，什么时候用，在哪里用或者为什么用。我想你应该至少有一个模糊的概念，它是什么或者是只是想创建一个属于自己的网站，而并不想了解其他细节，不管怎么样，这篇文章是写给你的。

首先，我想让你知道我写这篇文章是为了给尽可能多的读者看的，所以你不需要任何编程知识，但是熟悉一些命令行和Git操作会帮到你很多。

## 所以怎么在10分钟内用GitHubb创建一个静态网站？
我们将用到两个特定工具：GitHub Pages，它是被用来服务于静态内容的，另一个叫 Jekyll，是用来生成静态内容。

Jekyll 是一个 Ruby gem 里用来简单创建静态网站的包，所以如果你想用 Jekyll,你需要安装 Ruby 在你的电脑。如果你是 OSX 的操作系统，你很可能已经有一个某个版本Ruby（虽然你可能需要更新它）。如果你没有，或者你是 windows 的电脑，你可以在这里[Installing Ruby][1]安装它。

做完上述操作后，打开新的终端窗口并在输入`gem install bundler jekyll`。这样它会安装一个 Bundler（Ruby 的包管理工具）和 Jekyll。

一旦这些 gems（Ruby 包）安装好了，继续输入`Jekyll new my-static-site`(按你想要地命名它) ,这个命令会跑 Jekyll 的生成器来帮你创一个项目文件在你的新目录，在网站创建好后，进入到你新创建网站的目录，通过输入  `cd my-static-site`  (或者 `cd` 你项目的名字).

在一个编辑器打开你的项目，你会看到几个文件和文件夹，这个是Jekyll帮你创建的。现在你只需要关心 Gemfile (不是 Gemfile.lock)，Gemfile 是一个 Ruby 文件，里面是所有运行这个项目关联的rugy包。

这个文件有一行写着 Jekyll 的版本，把这行注释掉：

```ruby
#gem "jekyll", "~> 4.0.0"

```

然后加入这一行：

```ruby
gem "github-pages", group: :jekyll_plugins

```

当你安装 GitHub Pages gem 时，这里可能会有很多问题，有时这个 gems 对于 GitHub Pages来说已经过期的，也有可能你本地安装的 gem 太新。

我发现这会变得很难去构建和测试我本地的 Jekyll 站点。在本地测试站点并将其保存到准备部署之前，这可能是最简单的方法。然而，在这个时候，你可以写下这些代码，特别指出它的依赖的版本在你的 Gemfile，Jekyll 就可以同时在本地和 GitHub Pages上运行。

```ruby
gem "jekyll", "~> 3.8.5"
gem "github-pages","~> 202" , group: :jekyll_plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.11.0"
end

```

感谢 [Alex Waibel][2]  在  [StackOverflow][3]  写的最新配置。
 
为了看到你的网站，在命令行敲 `bundle exec Jekyll serve` 这会开启一个服务器，你在浏览器的 url 栏上输入 "localhost:4000" 就可以看见你的网站。

瞧！你已经在项目目录里通过 Jekyll 创建一个网站。你已经完成了50%。

## 让我们把它放在网上

打开 GitHub.com 并注册一个账号，或者你已经有一个账号，选择 new 按钮并创建一个新的仓库，这个仓库的命名很重要，之后网站的链接是由你的账号创建的。例如我的 github 用户名是 tfantina，我的博客是 [tfantina.github.io][4]，所以我的 GitHub 仓库名是: "tfantina.github.io".

回到你的终端窗口，输入下面的命令，把你电脑的 Jekyll 网站上传到 Github 。

```shell
git init
git remote add origin git@github.com:<your_github_username>/<your_github_repo_name>.git
git commit -am “Setting up Jekyll!”
git push -u origin master

```

(当替换你的用户名和项目名时，您不需要<>).

一旦你的修改提交到你的Github仓库，你就有一个正在运行的静态页面，这是因为你正在用GitHub Pages gem，并用GitHub理解的命名方式命名仓库。

你可以通过访问你的站点或者在GitHub的仓库设置页并滑到页面部分来确认这件事，你应该可以看到一个绿色的盒子显示你的站点已经被发布了。

![](https://www.freecodecamp.org/news/content/images/2019/11/DFAC66CE-C182-4ECA-9379-87843C730645.png)

你也将会注意到很容易在这里就改变页面的主题，GitHub为Jekyll提供一些默认主题，当然你可以自己设计。如果你的站点已经发布但是看起来是空白页，你可能需要强制更新或者尝试在一个私隐窗口打开你的网站。这个可能看上去像是废话，但几乎每次我设置一个新的Jekyll实例都这样。

如果一切按计划进行，你的网站应该是这样的:

![](https://www.freecodecamp.org/news/content/images/2019/11/65F58F30-3000-44E5-96CF-DCC1CFEDF953.png)

---

就这样，在这很短的时间里你已经在 GitHub 创建并部署一个静态网站。但是你可能想放一些内容到你的网页。

我承诺过只会花费10分钟，因此，我不会深入讨论页面、front matter或 Liquid 模板语言的所有细节，我会在之后再发一篇文章。但是我会向你分享怎么创建你第一篇文章。

回到你的编辑器，打开 “\_posts” 文件夹这里已经有一篇欢迎文章在你的新博客。创建一个新的 markdown 文件，并且按这种格式 YEAR-MONTH-DAY-TITLE.markdown 命名并保存它。（看下面）:

![](https://www.freecodecamp.org/news/content/images/2019/11/B90755E4-B12A-4038-8DD7-AF945E73FE43.png)

Jekyll 文章包含两个部分 front matter 和 body。

front matter 给了 Jekyll 一些具体的指示，比如文章的标题是什么，使用什么布局，以及文章是什么时候写的。

Front matter 是高度配置的。比如，我想我的文章有一个英雄的图片，所以我创建 `lead_image` 标签，并把一些语法放在我的布局，它会根据每篇文章的 front matter 来显示对应的 lead images。Liquid 模板语言能轻松地把内容放到你的主题。

front matter 还有很多可以配置，但是让我们从一个通用的示例开始。

一个默认的 front matter 像这样：

```markdown
—
layout: post 
title:  "Welcome to Jekyll!"
date:   2019-11-09 18:07:11 -0600
categories: jekyll update
—

```

-   布局告诉Jekyll用那种布局来显示你的内容。你可以为不同的页面或文章类型设置多个布局。
-   文章标题
-   文章日期
-   分类，这是一个必要得分标签，你可以添加你想要的数量(以空格分隔)

在[Markdown][5]写好文章的front matter，这会让你写文章更加灵活。After the front matter your post can be written in  [Markdown][5], which gives you lots of flexibility in writing your post content.

一旦你写完你你的文章并保存它，打开你的终端窗口。

```shell
git commit -am “Publishes first post
git push
```

在一分钟之后(也许在刷新一下)，你就可以看到你的文章了。

希望你现在已经在使用 Jekyll 创建的 GitHub Pages 上有了一个可以工作的静态站点，如果你有任何疑问，请发推特 [@tfantina][6]，或者你可以给我发邮件contact@travisfantina.com.

[1]: https://www.ruby-lang.org/en/documentation/installation/
[2]: https://stackoverflow.com/users/6885157/alex-waibel
[3]: https://stackoverflow.com/questions/58598084/how-does-one-downgrade-jekyll-to-work-with-github-pages
[4]: https://tfantina.github.io/
[5]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[6]: https://twitter.com/tfantina
