---
title: How to Pick a Font – An In-Depth Guide for Developers
author: Seth Falco
authorURL: https://www.freecodecamp.org/news/author/seth/
originalURL: https://www.freecodecamp.org/news/things-to-consider-when-picking-fonts/
translator: ""
reviewer: ""
---

September 13, 2023 / [#Fonts][1]

<!-- more -->

# How to Pick a Font – An In-Depth Guide for Developers

![Seth Falco](https://www.freecodecamp.org/news/content/images/size/w60/2021/06/seth-falco-gravatar.jpeg)

[Seth Falco][2]

  ![How to Pick a Font – An In-Depth Guide for Developers](https://www.freecodecamp.org/news/content/images/size/w2000/2023/09/markus-spiske-f81ym3dE5N4-unsplash.jpg)

Fonts are not always free. If you're fetching a font that is not already on your user's phone or computer, they will have to download it. And this will impact performance.

In documents and subtitles, embedding fonts can easily increase the file size tenfold. As for the web, here are some popular fonts and their potential network impact:

| Font | Size | Wi-Fi | Regular 4G/LTE | Regular 3G |
| --- | --- | --- | --- | --- |
| [Roboto][3] | 168.3 KB | 0.05 s | 0.36 s | 1.90 s |
| [Montserrat][4] | 198.0 KB | 0.05 s | 0.42 s | 2.21 s |
| [Inter][5] | 309.8 KB | 0.08 s | 0.64 s | 3.40 s |
| [Noto Sans][6] | 556.2 KB | 0.15 s | 1.13 s | 6.03 s |
| [JetBrains Mono][7] | 187.9 KB | 0.05 s | 0.40 s | 2.10 s |

The estimated network speeds and latency are taken from [Throttling - Firefox Source Docs][8].

On the modern web, we've normalized fetching fonts from client-side, or embedding fonts in resources that are served to users. While this may be tempting, it actually makes very little sense for most use-cases.

This isn't suggesting to never use external fonts. Just a reminder that fonts aren't free, and that it's a good idea to review if it's worth packaging or fetching external fonts when it's avoidable.

Instead, I'd recommend you consider an expansive font selection, featuring typefaces available across operating systems. There are times we should fetch external fonts, but it shouldn't be the default attitude in everything that we build.

In short, you may just need an arbitrary typeface to show arbitrary text on your website. That's fine. But it's worth sticking to the wide array of typefaces already installed on the client's operating system.

In other words… only fetch an external font when it actually enhances the user experience!

## Why?

Given the number of typefaces available on all operating systems, there are likely many suitable options for your use-case.

There's no need to specifically fetch Roboto, Inter, or another font that's similar enough to the preinstalled options.

This is particularly relevant to corporate websites, blogs, forums, and web applications.

The user is there to consume content or get a task done. Unless you're looking to be creative, the average user doesn't know, and doesn't care, what typeface it has so long as it's legible.

Meanwhile, they may care for other things impacted by your font choices…

### Performance

Whether we're talking about embedding fonts in offline documents, or fetching fonts on the web, it increases the overall size and load time of resources.

Typefaces can be upwards of 160 KB per font face. The impact of this can be significant on slower networks or old mobile devices.

Particularly on the web, you'd derive more value building a lightening fast user experience, than fetching a typeface the user didn't ask for.

Until the typeface has finished fetching, sites can choose to block rendering or swap, which neither is ideal.

Font swapping is when the font changes shortly after visiting the site, leading to a flicker and an increase in [Cumulative Layout Shift][9].

![mdn-font-swap](https://www.freecodecamp.org/news/content/images/2023/09/mdn-font-swap.gif)

A demo of blocking and font swapping on the MDN website. I refreshed with the cache disabled on a high-spec laptop connected to Wi-Fi with no throttling.

![out](https://www.freecodecamp.org/news/content/images/2023/09/out.gif)

A demo of the MDN website using Nimbus Sans, based on Helvetica, instead of external fonts. I refreshed under the same conditions.

Dropping external fonts is pretty simple, but can improve load time, reduce bandwidth usage, and avoid font swapping, which all improve your [Core Web Vitals][10] and SEO.

### Privacy

When fetching fonts from a third-party server such as Google Fonts, client information is leaked to the third party. This includes the [IP Address][11], [User-Agent][12], and [Referer][13], among other headers.

Every website that loads a typeface from Google Fonts, has given Google the potential to track the visitor. The domain you visited, the time you accessed it, what browser and operating system you're on, etc. They can form a timeline of the websites you visit from the fonts alone.

Google states that they do not track or store this information. However, given the nature of the internet, they inevitably must receive it.

Germany has actually ruled that websites that load Google Fonts are violating GDPR:

[

German Court Rules Websites Embedding Google Fonts Violates GDPR

A German court has ruled that websites that embed fonts from Google servers violate GDPR, and must pay €100 in damages.

![thn](https://thehackernews.com/images/-rVOVZW3ut4Q/XeZwEXpJ3UI/AAAAAAAA15Q/OPI7hX80GUwaRrTJ7KJtGSd_-rjDaHNVQCLcBGAsYHQ/s256-rj-e300/thn.png)Jan 31, 2022Ravie LakshmananThe Hacker News

![AVvXsEiSr35DDud574S0nUbFRGQ460yfmUbqAkz_t1yRvJEpGjyIDpmIjMFISO9qLShmbyhQAPLMnuTL1Z6t2KaaSM79C_eKd6Jv1JTKvUZJIEn39BEWUDUsEegMjExjKkUoM7C79LbxlOLAWp9oTE1Mt2963ozY951e18fOWYvUZIwJVodp1Vi0nYltvTxR=s728-e3650](https://thehackernews.com/new-images/img/a/AVvXsEiSr35DDud574S0nUbFRGQ460yfmUbqAkz_t1yRvJEpGjyIDpmIjMFISO9qLShmbyhQAPLMnuTL1Z6t2KaaSM79C_eKd6Jv1JTKvUZJIEn39BEWUDUsEegMjExjKkUoM7C79LbxlOLAWp9oTE1Mt2963ozY951e18fOWYvUZIwJVodp1Vi0nYltvTxR=s728-e3650)

][14]

This problem can be avoided by self-serving fonts. If you're going to use an external font, please consider this.

However, also know that some users [disable custom fonts][15] or [block third-party fonts][16], so you should still specify at least a generic family name regardless.

> "You should always include at least one generic family name in a `font-family` list, since there's no guarantee that any given font is available. This lets the browser select an acceptable fallback font when necessary.‌‌‌‌‌‌‌‌" (Source: [MDN Documentation for font-family][17])

### Familiarity

Users are familiar with the experience of their operating system.

Maybe not how it works under the hood, or even how to perform simple operations, but they do encounter the welcome screen, context menus, and their preinstalled applications regularly.

It's safer to stick with typefaces the user already has access to because these are the typefaces the user is already accustomed to reading from.

This argument is in a similar vein to why it's a good idea to use the system date picker, color picker, or modal/dialog boxes instead of creating custom ones.

Users are familiar with their system!

From my experience, often one of the following occurs:

-   The user couldn't tell that an external font was used, making it largely redundant. Most non-specialists experience this everyday, it's hard to even tell that websites are using different fonts from each other unless you're conscious of it.
-   The user was able to tell, and thus has a different reading experience than what they're used to. The potential for disruption depends on the needs of the user, but that risk is often unnecessary.

Unless you have a reason to change it, it's best to stick with what the user is familiar with.

## Who else does this?

Wikipedia is the most notable example, and they even have a page elaborating on the topic: [Meta page on Wikipedia's use of typography][18].

Some of the most popular sites don't fetch a single font on their landing page, in favor of using system fonts only:

| Site | Font Selector |
| --- | --- |
| Facebook | `SFProDisplay-Regular, Helvetica, Arial, sans-serif` |
| Instagram | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |
| Cloudflare | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif` |
| Wikipedia | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif` |
| Reddit | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif` |
| Bing | `"Segoe UI", Segoe, Tahoma, Arial, Verdana, sans-serif` |

You can verify for yourself by inspecting the site with your browser's development tools.

There are no outgoing network requests for fonts, and the `font-family` properties are set to system fonts only.

## Exceptions

There are times loading and embedding fonts does make sense, particularly if the look and feel you're after is significantly different from common system fonts:

-   You're targeting an environment that doesn't have typefaces available.
-   To fit with existing branding, like an in-house font.
-   A creative or unique design, especially relevant for gaming and artsy sites.
-   Icon fonts like [OpenMoji][19], but note that most clients come with emojis already.
-   A website that's literally for distributing, displaying, and testing fonts.

## Consequences

If you apply a local font stack, your text content may not look pixel-for-pixel identical across clients. However, success should be measured by the user experience.

It is important for the site to feel familiar, but there are more significant changes between clients already, like the human-interface, resolutions, and DPI.

Compared to this, it's fine if the arch of the `a` has a slightly different radius, or the tick on the `l` is a few pixels longer. In fact, this is unlikely to go noticed, so it is unlikely to impact the user experience at all.

Users would sooner have qualms with the difference in speed or a flicker, before the difference between similar typefaces.

Another argument is that allowing different typefaces may make the layout difficult to manage. Glyphs can have different widths, and therefore take up varying space.

However, modern sites should be following [responsive design][20], so you should be taking the time to make the pages fluid anyway.

To minimize impact, you can use [web safe fonts][21].

If you dislike how limiting that is, pick a typeface included with your operating system, and find similar typefaces on other operating systems.

Even better if you can pick [metrically compatible typefaces][22].

### Comparison

Let's visit a website and see what it's like to disable downloadable fonts.

I'll also replace all font selectors, to use Helvetica.

Note, my computer does not actually have Helvetica installed, so my operating system automatically translates this to Nimbus Sans, which is based on Helvetica. Nimbus Sans is preinstalled on [Debian][23].

In the case of MDN, is the second version really so undesirable that we need to load a 325 KB font, given the penalties and demonstrations raised above? Ultimately, this one is down to user preference, so I'll let you decide.

![1](https://www.freecodecamp.org/news/content/images/2023/09/1.png)

MDN, with the Inter typeface fetched from client-side.

![1-1](https://www.freecodecamp.org/news/content/images/2023/09/1-1.png)

MDN, with the font-family overridden to use Helvetica.

On the flip side, that doesn't mean to never fetch fonts. There are examples where the aesthetic may be more valuable to the user experience than the performance penalty.

Let's look at [Framasoft][24]. They went for a more creative look and feel, also featuring a lot of [David Revoy's][25] illustrations.

To use Tovari Sans was a design choice which enhances the user experience, and isn't easily replaceable with a local font stack.

If we were to take that font away, the page feels inconsistent and unpolished. Even if we cleaned up the CSS, we'd still be detracting from the theme of the website.

![1-2](https://www.freecodecamp.org/news/content/images/2023/09/1-2.png)

Framasoft, with the Tovari Sans typeface fetched from client-side.

![1-4](https://www.freecodecamp.org/news/content/images/2023/09/1-4.png)

Framasoft, with the font-family overridden to use Helvetica.

## Resources

Whether you want to go local, or just need to specify some fallback fonts, here are some helpful resources for picking out your font stack:

-   [List of typefaces included with Apple operating systems][26]
-   [List of typefaces included with Windows][27]
-   [Core typefaces included with ChromeOS][28]
-   [Documentation for web safe fonts][29]

## Cross-Platform Font Stacks

The following is an opinionated list of what your local font stacks could look like. You'll find countless others on the internet if you search.

Some font classifications don't explicitly include a font from each operating system, but remember that the generic font family at the end will have you covered.

### Sans Serif

| Typeface | Operating Systems |
| --- | --- |
| Nimbus Sans | Debian, Ubuntu |
| Helvetica | iOS, macOS, tvOS, watchOS |
| Arial | iOS, macOS, Windows |
| [Roboto][30] | Android |
| [Liberation Sans][31] | Debian, Ubuntu |
| [DejaVu Sans][32] | Debian, postmarketOS, Ubuntu |
| [Arimo][33] | ChromeOS, Debian |
| sans-serif |  |

### Serif

| Typeface | Operating Systems |
| --- | --- |
| [Tinos][34] | ChromeOS, Debian |
| [Liberation Serif][35] | Debian, Ubuntu |
| Times New Roman | iOS, macOS, tvOS, watchOS, Windows |
| [Noto Serif][36] | Arch, postmarketOS, Ubuntu |
| [PT Serif][37] | Debian, iOS, macOS |
| [Caladea][38] | Ubuntu |
| [DejaVu Serif][39] | Debian, postmarketOS, Ubuntu |
| serif |  |

### Monospace

| Typeface | Operating Systems |
| --- | --- |
| [Liberation Mono][40] | Debian, Ubuntu |
| Monaco | iOS, macOS |
| [Cousine][41] | ChromeOS, Debian |
| Consolas | Windows |
| monospace |  |

### Handwriting

| Typeface | Operating Systems |
| --- | --- |
| Brush Script MT Italic | iOS, macOS |
| Ink Free | Windows |
| Segoe Script | Windows |
| cursive |  |

### Emoji

| Typeface | Operating Systems | Comments |
| --- | --- | --- |
| [Noto Color Emoji][42] | Android, Debian, Fedora, postmarketOS, Ubuntu |  |
| Segoe UI Emoji | Windows |  |
| Apple Color Emoji | iOS, macOS, tvOS, watchOS |  |
| [Twemoji Mozilla][43] |  | Packaged in Firefox and Thunderbird. |
| emoji |  |  |

## Conclusion

In the end, the user experience is what matters most. Sometimes that means prioritizing visual design, other times that means prioritizing performance.

I hope this was worth your time, and that with the knowledge you can make an informed decision when choosing fonts for your next project.

Feedback and questions welcome, you can hit me up on [GitHub][44], [Mastodon][45], or [LinkedIn][46]!

---

![Seth Falco](https://www.freecodecamp.org/news/content/images/size/w60/2021/06/seth-falco-gravatar.jpeg)

[Seth Falco][47]

Linux enthusiast, privacy advocate, and open-sourcerer. 🧙🏽‍♂️

---

If this article was helpful, share it.

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][48]

[1]: /news/tag/fonts/
[2]: /news/author/seth/
[3]: https://fonts.google.com/specimen/Roboto
[4]: https://fonts.google.com/specimen/Montserrat
[5]: https://fonts.google.com/specimen/Inter
[6]: https://fonts.google.com/noto/specimen/Noto+Sans
[7]: https://fonts.google.com/specimen/JetBrains+Mono
[8]: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/throttling/index.html
[9]: https://web.dev/cls/
[10]: https://web.dev/vitals/
[11]: https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
[12]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
[13]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
[14]: https://thehackernews.com/2022/01/german-court-rules-websites-embedding.html
[15]: https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use#w_custom-fonts
[16]: https://github.com/gorhill/uBlock/wiki/Per-site-switches#no-remote-fonts
[17]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#try_it
[18]: https://en.wikipedia.org/wiki/Wikipedia:Typography
[19]: https://openmoji.org/
[20]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
[21]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts
[22]: https://en.wikipedia.org/wiki/Typeface#metrics
[23]: https://www.debian.org/
[24]: https://framasoft.org/
[25]: https://www.davidrevoy.com/
[26]: https://developer.apple.com/fonts/system-fonts/
[27]: https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list#introduction
[28]: https://en.wikipedia.org/wiki/Croscore_fonts
[29]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts
[30]: https://fonts.google.com/specimen/Roboto
[31]: https://github.com/liberationfonts/liberation-fonts
[32]: https://dejavu-fonts.github.io/
[33]: https://fonts.google.com/specimen/Arimo
[34]: https://fonts.google.com/specimen/Tinos
[35]: https://github.com/liberationfonts/liberation-fonts
[36]: https://notofonts.github.io/
[37]: https://fonts.google.com/specimen/PT+Serif
[38]: https://fonts.google.com/specimen/Caladea
[39]: https://dejavu-fonts.github.io/
[40]: https://github.com/liberationfonts/liberation-fonts
[41]: https://fonts.google.com/specimen/Cousine
[42]: https://fonts.google.com/noto/specimen/Noto+Color+Emoji
[43]: https://github.com/mozilla/twemoji-colr
[44]: https://github.com/SethFalco
[45]: https://fosstodon.org/@sethi
[46]: https://www.linkedin.com/in/sethfalco/
[47]: /news/author/seth/
[48]: https://www.freecodecamp.org/learn/