> * 原文地址：[7 Effective Ways To Speed Up Your Site](https://www.freecodecamp.org/news/seven-ways-to-optimize-your-site-for-speed/)
> * 原文作者：Jared Wolff
> * 译者：
> * 校对者：
This post is originally from my blog on www.jaredwolff.com.

Web rankings are dictated by how fast you serve your content.

You need to optimize to get that top spot. As an added benefit your visitors will thank you. (or not even notice — a good thing!)

In this article, I show you how to optimize your site for speed.

Let's get started.

Get the Baseline
First, let's sample your site.

Google's PageSpeed insights tool should be your first stop. After using it you'll know if your site is optimized for both mobile and desktop.

Google bases their speed tests on how fast your page renders content. i.e. They measure how long it takes until your website hits your visitors eyeballs. The longer the wait, the lower the score.

Here's a screenshot from this page on my blog.

Screenshot of Pagespeed Insights

This screenshot was taken after optimizing a few big issues. I ditched Disqus, inlined my CSS and Javascript. Performance went from being in the 50/100 range to being in the 90/100 on mobile. Not bad!

One of my main complaints about Pagespeed Insights is how slow it is.

Like.. unbearably slow.

The solution?

Lighthouse.

Using Lighthouse
Lighthouse is an npm package that you can install on your computer. It's basically Pagespeed Insights but on steroids. (Pagespeed Insights is based on Lighthouse)

When you run it locally, you'll keep any information that get's generated from the tests. (Though, i'm sure Chrome phones home about the things you're doing.. ?)

Here's how to get started:

To install you can run:

 npm install -g lighthouse
Also make sure you have some version of Google Chrome installed. I'm using Chrome Canary.

Then you can run it and get a report like this

 lighthouse https://www.jaredwolff.com --view
--view will cause the report to be opened in your default web browser. Here is a report from the same page as earlier:

Screenshot from Lighthouse

It not only includes Performance but Accessibility, Best practices and SEO suggestions.

The downside is you'll have to run this test on a page-by-page basis. I suggest you sample pages that have lots of content. That way you're testing the worst of your site. Once you fix the worst, your whole site will see a performance boost!

Go Static
Static site generator logos

Remember when websites were 100% HTML & CSS?

Over the past years we went from pure HTML, to Ruby On Rails and slowly we're making our way back.

The reason?

Speed.

Every time you visit a website running Flask, Ruby on Rails or similar it goes something like this:

Make a request for a page
Server pieces your site together
Server minifies and gzip
Sever sends content back to the browser
This itself, doesn't take long. When you multiply that by 1000's or 10's of 1000's you start running into problems.

What if you do all the piecing together once?

That's the advantage of a statically generated website.

Let's take a look at how it works:

How does a static site generator work?
A static site generator is a collection of templates and styles. They can be assembled together to generate different content.

As a backend, static site generators use markdown and (sometimes) JSON.

When it's time to compile, templates are assembled. The Markdown is converted to HTML and then injected into the templates. The result? An output directory of rich "dynamic looking" pages. (Much like the one you're reading right now if you're on my site!)

Personally, my blog is Hugo powered. I've also dabbled with Middleman and Jekyll. No matter what you're looking for, you'll likely find a static site generator that will fit your needs! Netlify has a nice list of Static Site Generators sorted by popularity. Check it out here.

Plugins Galore
Static site generators no longer only compile sites. They optimize, minify and resize images. This built in functionality is another reason why to consider a statically generated site. Tap into these resources, and your site will be notably faster.

For example, originally I was using highlight.min.js for highlighting code. Since discovering the built in syntax highlighting in Hugo, I ditched highlight.min.js. Hugo injects the CSS into the HTML for the code blocks. Leaving nicely formatted (and static) page!

Embedding Javascript and CSS
Arrows

As I alluded to in the earlier section, you'll take a performance hit when you have to load anything extra.

Recently, Hugo got the ability to copy content from file into the final HTML code. This is fantastic for things like CSS and Javascript. This way, everything is built into your HTML file. There's no extra fetches required!

For example, I place my full stye.css file in the header of the site. That way all the styles get applied immediately.

<!-- Css -->
{{- $style := resources.Get "/css/style.css" -}}
<style>
  {{ ( $style | minify ).Content | safeCSS }}
</style>
In the footer, i'm exporting the minified lazysizes.min.js into a <script> tag. It's important that this is loaded asap because it dictates how the rest of the site will load.

<!-- Lazy Load Script -->
{{- $lazysizes := resources.Get "/js/lazysizes.min.js" -}}
<script>
  {{ ( $lazysizes | minify ).Content | safeJS }}
</script>
Side Note: both style.css and lazysizes.min.js are located in my main theme folder under assets. Hugo uses the assets folder to look for these files. If you have a Hugo site and you want to embed your css and javascript I recommend you check out this resource.

Side Note Numero Dos: As you can see above, i'm using Hugo's built in minify function for the embedded items. The javascript is already minified but style.css isn't. There's also another programatic way to minify all your assets. I'll go into more on that in the Optimizing using Gulp section.

Use what's built in
You may be noticing by now that importing javascript can take a toll. Using it for every feature on a website could lead to crap performance!

For example, we could use a javascript library for form validation. But is there a better way?

(yup)

You can use the HTML5 tags like required and use pattern to validate in browser. If you want an example, check out the contact form on my website.

Contact form Screenshot

All the validation you see, is done in browser. No extra javascript. No delay in loading. ?

A great resource for all of this is here: https://css-tricks.com/form-validation-part-1-constraint-validation-html/ Chris also has a detailed step-by-step portion on vanilla javascript validation. You can take it further if you so choose.

Organizing Code
Where you put your javascript and css will affect performance. For instance, I place my javascript and CSS in strategic locations. The main stylesheet in the <head> otherwise the rest are in the footer or inline with the HTML. Similarly, the javascript mostly lives at the bottom of the page. That way, all the important stuff gets loaded first.

Here is an example of how I organize my javascript:

...
</footer>
...

<script src="https://code.jquery.com/jquery-3.4.1.min.js"   integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="   crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
I encourage you to experiment to see what improves your site performance. If you can go without certain javascript libraries, I highly encourage you nix em!

Lazy Loading
Lazy Panda

Lazy loading is an effective way to defer loading of assets not in view. This improves, what Google calls, the "time to interactive" experience. An added bonus is if the visitor doesn't scroll down, the images aren't loaded. Thus saving bandwidth and money for high traffic sites.

Lazy loading comes in the form of javascript. There are a few libraries out there:

Lazysizes (⭐️ 11k) - seems to be the most popular in this department. It is larger than some of the alternatives. I've been testing it's usefulness around lazy loading iframes and javascript content that isn't immediately necessary. For instance, I embed an iframe for the Google Docs chart on this post. On the same post I also lazy load the Youtube video towards the end of the article.
Layzr.js (⭐️ 5.5k) - for images only
lozad (⭐️ 5.4k) - does everything that lazysizes does. This library is focused on using the Intersection Observer API. Whereas Lazysizes uses both the Intersection Observer API and
yall (⭐️ 800) - This library is also focused on using the Intersection Observer API.
Setting up Lazy Loading
It's extremely simple to set up. I'll show you how to use lazysizes

Include the file in your HTML

 <script src="lazysizes.min.js" async=""></script>
(Or if you're using Hugo, inject it directly into your HTML like I did in Embedding Javascript and CSS)

Add the lazyload class to whatever you're lazy loading

Change the src tag to data-src

Watch the Magic
When someone visits your site, the lazy loader starts monitoring where the user is. When the visitor scrolls, it loads soon to be viewed content marked with the lazyloadclass.

Here is an example for a Youtube video embedded on this page:

<iframe class="lazyload" width="700px" height="400px" data-src="https://www.youtube.com/embed/IR2W0GmRKk8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
This prevents the iframe from loading until the user has scrolled close by. Nice!

Optimizing using Gulp
Gulp logo

Not everything can be optimized by Jekyll or Hugo. So what can you do?

Enter gulp

gulp is my tool of choice for optimizing my Hugo site. There are a wide array of well supported plugins for gulp. They can do everything from optimize images to minify HTML.

Here are some of my favorites:

gulp-uglify - minifies and compresses javascript. I only have one javascript library i'm using right now which this applies to. If you're project is Javascript heavy though, definitely look into gulp-uglify

gulp-htmlmin - minifies HTML. You can also use it to minify inline Javascript and CSS.

gulp-imagemin - probably the most useful gulp plugin for my purposes. Right now i'm having it resize, convert to jpg and then convert to a progressive jpeg. It's relatively fast and when combined with gulp-cache it only has to be done once! It may seem complicated but the output produces image sizes that Lighthouse loves.

Example
If you're curious, here's a snippet from my gupfile.js for imagemin

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
Some important things to notice

I've used ** to denote a wildcard value for a directory name. Depending on the depth of your images you may need to add more **/ to your path. This works well for my path which is typically /contents/post-name/images/image-file.jpg
Setting up other plugins that don't come with gulp-imagemin can be confusing. imageminmozjpeg for example, is imported separately. I set it up at the top of my file like so: var imageminmozjpeg = require('imagemin-mozjpeg');
Finally, you can see that i'm using gulp-cache here. Depending on where you're building your site, you may not have to define any options. I use Netlify for my site. The only way for gulp-cache to work is to define tmpDir and cacheDirName to the node_modules folder. That way, when your site is built, your cache is re-loaded. No resizing images if we don't have to!
By using gulp-cache, my build + deploy times went from 10 minutes to ~60 seconds. ? Trading the minor increase in cache size for compute time is definitely worth it. Plus, I'm sure Netlify is happy about that!

Remove the Cruft
Dirty hand print

When there's convenience, there's always a tradeoff.

That's what I was finding as I continued to use Google Analytics and services like Disqus. Disqus in particular, had a tendency to drive me up the wall. (Ever look at your Javascript Debug console on a site using Disqus? You'll see why..)

I recently wrote a tutorial on how to switch from Disqus to self-hosted Commento. There are two benefits to make the switch:

You get control of your site content. There's no 3rd party service that could go poof tomorrow. (It is up to you to make sure your content is backed up! One advantage of paying for a service instead of hosting).
You'll get a performance boost!
I've tested the before and after and the results are in. Disqus was a major drag on network and CPU usage.
Commento, is light and resource usage is minimal. Perfect companion for a statically generated site!
As a site owner, the quality and speed is completely dependent on your site features. Remember, there may be better alternatives out there. No need to sell your soul to Google, Disqus, or anyone if you don't need to!

Site Audit
As I wrap up this post, I do want to leave you with one more handy tool.

Serpstat's Site Audit tool.

I used it to crawl my site on a regular interval. It's extremely useful for catching all types of errors. For instance, just recently it caught a few images that were broken. I made a few edits and everything was back up and running!

Screenshot of Serpstat Site Audit

If you want to keep your site error free, nothing beats a site audit tool like Serpstat's!

You're never done
You read right. You'll never be done.

Improving performance for an actively developed site is never ending. Despite your best efforts you could spend days on the minute of optimizing images and lazy loading. When it comes down to it, how much of it is worth it? That's a question i'm still trying to answer myself!

I hope you've found this article useful. What was your biggest takeaway? Have a optimization tip that I didn't mention? Sound off in the comments below!
