> * 原文地址：[7 Effective Ways To Speed Up Your Site](https://www.freecodecamp.org/news/seven-ways-to-optimize-your-site-for-speed/)
> * 原文作者：Jared Wolff
> * 译者：XuQuan-nikkkki
> * 校对者：


## 7 种有效提升网站速度的方法

网站内容显示的速度会决定网站的排名。

你需要优化来获得最高排名。除此之外，你的用户也会因此感谢你，当然也可能压根没注意到——这是件好事。

在这篇文章里，我会告诉你一些提升网站速度的方法。

让我们开始吧。



### 了解标准

首先，用你的网站来做示例。

你需要使用 Google 的 [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/) 网站测试工具来测试你的网站，它会告诉你，你的网站需要优化移动端还是桌面端。

Google 基于网页的渲染速度来打分。它会计算你的网站需要多久呈现到用户眼前。用户等待的时间越长，网站的得分就越低。

这是我的博客中[某个页面](https://www.jaredwolff.com/homemade-indoor-air-quality-sensor/)的得分情况：

![Screenshot of Pagespeed Insights](https://tva1.sinaimg.cn/large/006tNbRwly1gattxfqr8tj30k00fvwf6.jpg)

这张截图是我优化了一些项目之后的结果。我移除了 Disqus 评论工具，嵌入了 CSS 和 JavaScript 文件。移动端的得分从 50 分（满分100分）上升到了90分。效果还不错。

我对 Google 的 Pagespeed Insights 测试工具的主要不满在于它太慢了。

可以说是……**难以忍受的慢**。

如何解决呢？

*Lighthouse.*

### 使用 Lighthouse

你可以通过 `npm` 下载 [Lighthouse](https://github.com/GoogleChrome/lighthouse) 到电脑上。它实际上是一个功能更强大的 Pagespeed Insights 测试工具（Pagespeed Insights 是基于 Lighthouse 实现的）。

当你在本地使用它时，测试生成的所有信息都可以保存下来。

使用方法如下：

1. 下载

   ```bash
   npm install -g lighthouse
   ```

   此外需要确保已经下载了某些版本的 Google Chrome 。我使用的是 [Chrome Canary](https://www.google.com/chrome/canary/)。

2. 接下来你就可以使用它并生成测试结果了：

   ```shell
   lighthouse https://www.jarewolff.com --view
   ```

   `--view` 会在你的默认浏览器中打开测试结果。以下是我之前使用 Lighthouse 测试的结果：

   ![Screenshot from Lighthouse](https://tva1.sinaimg.cn/large/006tNbRwly1gatubnx4y7j30k00fvt9a.jpg)

测试结果不仅包括性能得分，还包括可访问性、最佳实践和 SEO 建议。

它的不足之处是每次只能测试一个页面。我建议你测试内容较多的页面，这样一来，你测得的就是网站中性能最差的一页的结果。一旦你修复了最差的页面，整个网站的性能也会得到大幅提升。



## 使用静态页面

![Static site generator logos](https://www.jaredwolff.com/seven-ways-to-optimize-your-site-for-speed/images/Copy_of_Particle_Bluetooth-385a56b6-9f74-4a2d-9ab3-fd0ef8daa8a4.png)

你还记得网页 100% 由 HTML 和 CSS 组成的年代吗？

在过去的几年里，我们从纯 HTML 到使用 Ruby on Rails ，再慢慢的回到纯 HTML 。

原因是什么呢？

速度。

当你访问使用 Flask, Ruby on Rails 或类似框架的网站时，会发生如下步骤：

1. 发出网页请求
2. 服务器将你的网站组合起来
3. 服务器将内容压缩打包
4. 服务器把内容返回给浏览器

这本身不会花费太长时间。但是当这个内容乘以 1000 或者 再乘以 10 时，就会遇到问题了。

如果能够一次拼凑所有的内容呢？

这就是静态网站的优势了。

我们来看看静态网站如何实现这一点：

### 静态网站生成器如何工作？

静态网站生成器包含一系列模板和样式。它们可以组合在一起，生成不同的内容。

作为后端，静态网站生成器使用 markdown，偶尔使用 JSON。

编译时，模板组合在一起。Markdown 被转换成 HTML，并注入到模板中。结果呢？一系列“看起来动态”的页面就生成了（就像你在我的网站上看到的那样）。

我的个人博客是基于 [Hugo](https://gohugo.io/) 实现的，我也尝试过 [Middleman](https://middlemanapp.com/) 和 [Jekyll](https://jekyllrb.com/) 。无论你的需求是什么，你总能找到一款符合你要求的静态网站生成器。Netlify 上有一个根据人气排列的静态生成器列表，可以在[这里](https://www.staticgen.com/)查看。



### 丰富的插件

静态网站生成器不仅能编译网站，还能优化、缩小和调整图片大小。这也是我建议使用静态网站生成器的原因。好好利用这些资源能够让你的网站速度得到显著的提升。

举个例子，我原本使用 `highlight.min.js` 来高亮代码。自从发现 Hugo 有自带的代码高亮功能后，我抛弃了 `highlight.min.js` 。Hugo 在代码块的 HTML 中注入了 CSS ，使页面呈现格式正确（且静态）的内容。



## 嵌入 JavaScript 和 CSS 

![Arrows](https://tva1.sinaimg.cn/large/006tNbRwly1gaty77uourj30k008xgm1.jpg)



正如我提到的那样，加载任何额外的资源都会对性能造成影响。

最近，Hugo 实现了将内容复制到最终的 HTML 代码中的功能。这对于加载 CSS 和 JavaScript 来说真是一个福音。这样一来，所有的资源都会加入到 HTML 文件中，而不需要任何额外的资源加载了。

举个例子，我把完整的 `style.css` 文件放在网站的 header 中，使得所有的样式都能立马生效。

```html
<!--Css-->
{{- $Style := resources.Get "/css/style.css" -}}
<style>
  {{ ( $style | minify ).Content | safeCSS }}
</style>
```

在 footer 中，我将压缩过的 `lazysizes.min.js` 注入到 `<script>` 中，让它尽快被加载，因为它决定了网站的剩余部分将以何种方式加载。

```html
<!-- Lazy Load Script -->
{{- $lazysizes := resources.Get "/js/lazysizes.min.js" -}}
<script>
  {{ ( $lazysizes | minify ).Content | safeJS }}
</script>
```

**注意事项**：`style.css` 和 `lazysizes.min.js` 文件都在主题文件夹中的 `assets` 文件夹内。 Hugo 使用 `assets` 文件夹来查找这些文件。如果你也使用 Hugo ，且希望嵌入自己的 css 和 javascript 文件，我建议你看看[这里](https://gohugo.io/hugo-pipes/bundling/#readout)。

**注意事项2**：正如你看到的那样，我使用 Hugo 自带的 `minify` 功能来压缩嵌入的文件，但是这样只有 javascript 文件被压缩了，`style.css` 没有压缩。我会在**使用 Gulp 优化**这一节中讲到用别的方法来实现样式压缩。



## 使用内置方法

你或许已经注意到了，引入 javascript 文件会对网站的性能产生负面影响。无论在网站的哪项功能上引入都会降低性能。

比如，我们会使用表单的 javascript 库来完成校验，但是有更好的方法吗？

（其实是有的。）

你可以使用 HTML5 标签，如 `required` 或使用 `pattern` 在浏览器中完成校验。你可以看看我是如何实现[联系人表格](https://www.jaredwolff.com/about/)的。

![Contact form Screenshot](https://tva1.sinaimg.cn/large/006tNbRwly1gaty724zg6j30k00kct9a.jpg)

所有的校验都在浏览器中完成，不用额外引入 javascript ，不会因为加载而出现延迟。

关于如何实现这一点，[这里](https://css-tricks.com/form-validation-part-1-constraint-validation-html/)有一份很好的资料。Chris 还提供了一份关于 javascript 校验的详细说明，你可以进一步了解。



## 组织代码

Javascript 和 CSS 文件的位置也会影响性能。比如，我通常将 javascript 和 CSS 放在重要位置。主要的样式文件会放在 `<head>` 中，其余的则要么放在 footer 中，要么作为 HTML 的内联样式。类似的， javascript 文件则放在页面的底部。这样一来，所有重要的内容都会优先加载。

这是我组织 javascript 文件的例子：

```html
...
</footer>
...

<script src="https://code.jquery.com/jquery-3.4.1.min.js"   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="   crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
```

我希望你能尝试不同的方法来提升你的网站，看看它们效果的不同。如果能够不使用 javascript 库，我强烈建议你不要使用它们。



## 延迟加载

![Lazy Panda](https://tva1.sinaimg.cn/large/006tNbRwly1gatyf1p4x0j30k00eqdg7.jpg)







延迟加载能够有效延迟暂时看不见的资源的加载。正如 Google 所说，它能够提升“互动时间”的体验。此外，如果用户没有滚动页面，部分图片不会被加载，对于高流量的网站来说，这样可以节约带宽和金钱。

延迟加载通过 javascript 来实现，以下是实现延迟加载的一些库：

- [Lazysizes](https://github.com/aFarkas/lazysizes)(⭐️ 11k) - 是实现延迟加载功能的最有人气的库了。它比同类的一些库要大。我试过用它来延迟加载内嵌框架和不会立马使用的 javascript 内容。例如，在我在一篇文章中内嵌了 [google 文档表格](https://www.jaredwolff.com/homemade-indoor-air-quality-sensor/#live-example)，在另一篇文章中则延迟加载了[Youtube视频](https://www.jaredwolff.com/homemade-indoor-air-quality-sensor/#you-did-it)。
- [Layzr.js](https://github.com/callmecavs/layzr.js) (⭐️ 5.5k)- 只针对图片进行延迟加载
- [lozad](https://github.com/ApoorvSaxena/lozad.js) (⭐️ 5.4k) - 它能实现 Lazysizes 的几乎所有功能，是基于Intersection Observer 接口实现的，而 Lazysizes 则使用了 Intersection Observer 和其他接口。
- [yall](https://github.com/malchata/yall.js)（⭐️ 800) - 这个库也使用了 Intersection Observer 接口。



### 设置延迟加载

设置步骤非常简单，我以 `lazysizes` 为例。

1. 在 HTML 文件中引入：

   ```html
   <script src="lazysizes.min.js" async=""></script>
   ```

   （如果你使用 Hugo，也可以像我**嵌入 JavaScript 和 CSS ** 那样将 `lazysizes` 直接嵌入 HTML ）

2. 给所有你想要延迟加载的内容加上 `lazyload` 类名

3. 将 `src` 标签改为 `data-src`



### 见证奇迹的时刻

当用户访问你的网站时，延迟加载器会监控用户访问的每一处。当用户滚动页面时，加载器会立马加载即将显示的内容中被标记了 `lazyload` 类名的内容。

下面是在[网页](https://www.jaredwolff.com/homemade-indoor-air-quality-sensor/#you-did-it)上延迟加载Youtube视频的例子：

```html
<iframe class="lazyload" width="700px" height="400px" data-src="https://www.youtube.com/embed/IR2W0GmRKk8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

这段代码让内嵌框架在用户滚动到内容附近时才开始加载。



## 使用 Gulp 实现优化

![Gulp logo](https://tva1.sinaimg.cn/large/006tNbRwly1gau3sep6b0j30k00b9aa3.jpg)







Jekyll 或 Hugo 并不能实现所有的优化。那么你该怎么做呢？

使用 `gulp` 。

我选择使用 `gulp` 来优化我的 Hugo 网站，因为 `gulp` 有一系列成熟的插件来实现包括优化图片、压缩 HTML 文件等几乎所有的功能。

以下是我喜欢的一些插件：

`gulp-uglify` - 用来压缩 javascript 。目前我只使用了一个 javascript 库。如果你的项目中有非常多的 JavaScript 库，那么一定要使用 `gulp-uglify` 

`gulp-htmlmin` - 压缩 HTML。它还能够压缩内联 Javascript 和 CSS。

`gulp-imagemin` - 是对我来说最有用的插件。我用他来调整图片大小、转换图片格式为 jpg 或渐进式 jpeg。它不仅运行速度很快，当配合 `gulp-cache` 一同使用时，只用运行一次。尽管看起来有些复杂，但能够生成 Lighthouse 建议的图片大小。

### 案例

这里是我的 `gupfile.js` 文件中使用 `imagemin` 的部分代码：

```js
gulp.task("resize", function() {
  return gulp
    .src(["content/**/**/*.+(png|jpg|jpeg|gif)"])
    .pipe(cache(imagemin([
      imagemingm.resize({width: 720}),
      imagemingm.convert('jpg'),
      imageminmozjpeg({quality: 80})
    ],{
    verbose: true
    }), {
      fileCache: new Cache({ tmpDir: path.join(process.env.PWD, 'node_modules'), cacheDirName: '.cache' })
    }))
    .pipe(gulp.dest("public/"));
});
```

以下是值得注意的事项：

- 我使用了 `**` 通配符表示目录名中的任意值。依据图片路径的不同，你可能需要给文件路径增加一些 `**/`。当前的写法对我的文件结构来说是没问题的，如 `/contents/post-name/images/image-file.jpg`
- 使用除了 `gulp-imagemin` 之外的插件可能会让人困惑。比如 `imageminmozjpeg`，同时使用需要在文件中分别引入。我会在我的文件顶部这样引入： `var imageminmozjpeg = require(‘imagemin-mozjpeg’);`
- 最后，你会看到我使用了 `gulp-cache` 。这里的配置取决于你如何构建你的网站，你也许不用定义任何配置项。我的网站使用了 Netlify，想要使用 `gulp-cache` 就需要在 `node_module` 文件夹中定义 `tmpDir` 和 `cacheDirName`。这样一来，当你的网站搭建好的时候，你的缓存就被重新加载了，而无需调整图片大小。



使用 `gulp-cache` 使我的构建 + 部署时间从 10 分钟减少到大约 60 秒。尽管缓存的大小有了少许增长，但是从时间成本来看是完全值得的。此外，我确信 Netlify 肯定很乐意我这么做。



## 去繁就简

![Dirty hand print](https://tva1.sinaimg.cn/large/006tNbRwly1gau4f1u1inj30k00b9jrh.jpg)

想要方便，就一定会有牺牲。

这是我从使用 Google 分析和类似 Disqus 服务中学会的道理。尤其是 Disqus 时常让我头疼。（如果你在使用 Disqus 的网站上查看过 Debug 调试台，你就会明白我为何这么说……）

我最近写了一篇[从 Disqus 切换到自己托管的 Commento 服务](https://www.jaredwolff.com/how-to-setup-worry-free-blog-comments-in-less-than-20-simple-steps/)的教程。它能带来两大收益：

1. 你能够掌控你的网站内容，你的网站上不会有随时会挂的第三方服务。（当然你需要给自己的内容备份，不用自己备份是付费服务相比自己托管业务的一大优势）

2. 你的网站性能将会大幅提升。

   我在移除 Disqus 之前和之后都做过性能测试，结果如前文所示，Disqus 会对网速和 CPU 使用都有极大的负面影响。

   相比之下，Commento 非常轻量，且资源占用极低，非常适合静态生成网站使用。



作为网站的构建者，你的网站质量和速度完全取决于网站的功能。记住，你总会有更好的选择，不要将你的灵魂出售给 Google, Disqus 或其他任何人。



## 网站诊断

在这篇文章即将结束之时，我希望再给你介绍一件实用工具：**Serpstat’s 网络诊断**工具。

每隔一段时间我就会用它来诊断我的网站，它能够有效抓取网站上的各种错误。例如，它最近帮我发现网站上的一些损坏的图片。我修正了它们，然后一切又恢复了正常。

![Screenshot of Serpstat Site Audit](https://tva1.sinaimg.cn/large/006tNbRwly1gau4uj2cztj30k00fvdgo.jpg)

如果你希望你的网站上没有错误，那么像 Serpstat’s 这样的诊断工具正是你所需要的。

## 永无止境

这篇文章读完了，但是优化实践还没有结束。

提升活跃网站的性能这件事没有终点。尽管你已尽力而为，但你仍可以花几天时间优化图形和延迟加载。归根到底，有哪些是值得的？这是我仍在问自己的一个问题。

希望这篇文章对你有用。你最大的收获是什么？有哪些优化建议是我没有提到的？请在下面的评论中留言！


