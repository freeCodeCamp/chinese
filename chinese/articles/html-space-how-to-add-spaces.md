> -  原文地址：[HTML Space – How to Add Spaces in HTML](https://www.freecodecamp.org/news/html-space-how-to-add-spaces/)
> -  原文作者：[Quincy Larson](https://www.freecodecamp.org/news/author/quincylarson/)
> -  译者：Humilitas
> -  校对者：

![HTML Space – How to Add Spaces in HTML](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/jeremy-thomas-E0AHdsENmDg-unsplash.jpg)

在 HTML 中添加空格也许看起来挺困难的，不过我们至少有 5 种方法可用。

这个教程展示了许多示例，还会介绍空格的一些花式用法。

你可以不使用 CSS，仅用 HTML 就能实现这些效果，但是在实践中更推荐使用 CSS 来做。freeCodeCamp 有大量关于如何使用 [CSS 盒模型](https://www.freecodecamp.org/news/css-box-model-explained-with-examples/)实现这个效果的教程。

## 空格的 ASCII 码是什么？

空格对应的 ASCII 码值为 20。使用 ASCII 码只是标准方式，还有许多其它方法。

有 5 种方法可以向 HTML 中添加空格，它们看起来都一样，但是表示的意义略有不同。

另外还有制表符（Tab），按下键盘上的 tab 键可以得到它；以及回车字符，按下键盘上的 enter 键可以得到。

|      字符            |  HTML 代码  |
| --------------------|:-----------:|
| 不换行空格            | `&nbsp; `   |
| En 空格              | `&ensp;`    |
| Em 空格              | `&emsp;`    |
| 窄空格               | `&thinsp;`  |
| 标准空格              | `&#20;`     |
| 换行（Return)        | `&#13;`     |
| 制表符（Tab）         | `&#09;`     |


## 空格字符的宽度是多少？

空格字符的宽度通常有 4 种情况：

1. 标准宽度空格，又称"不换行空格"，因为它会禁用自动换行（或称回车）。（译注：这里的禁用自动换行指的是不在这个空格处换行，其它地方的换行行为不受影响。）
2. Em 空格，之所以被称为"Em"，是因为它的宽度等于当前所用字体中字母 M 的宽度。（如果你听说过 em-dash 的话，你应该知道它是宽度与字母 M 相同的破折号。）
3. En 空格，是宽度与字母 n 相同的空格。（译注：这里指的是小写字母 n；宽度为 em 的一半。）
4. 最后，还有一种"窄空格"，它是宽度最小的一种空格。（译注：宽度通常为 em 的六分之一。实际上还有宽度比它更小的发宽空格（Hair Space），甚至还有宽度为 0 的零宽空格（Zero Width Space）。）

## HTML 中的空格用什么符号表示？

表示空格的最常用的 HTML 实体是 `&#20;`。

可以用这个符号来强制渲染一个空格。

例如，你想要在一个句子后面留两个空格，但是有时候网页渲染引擎会自动合并连续的空格。可以通过输入 `&#20;&#20;` 来添加两个空格。

## 空格属于非 ASCII 字符吗？

不，空格是 ASCII 字符，它对应的 ASCII 码值为 20，可以这样来输入：`&#20;`。

## 如何在 HTML 中添加空格？

也许你会想用 CSS 来将元素居中，而不是使用硬编码的空格。

不过如果你只是想用一种简单粗暴的方式在文本之间添加空格，可以重复使用空格字符：

```html
[一些文本]&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[一些文本]
```

## 哪些字符看起来像空格但实际并不是？

有两个字符看起来像空格，但实际上它们并不是：

1. 换行符——也叫"回车"，对应的 HTML 代码为 `&#13;`。
2. 制表符（Tab），在文本区域按下 tab 键可以得到一个制表符，对应的 HTML 代码为 `&#09;`。

希望这篇教程对你有所帮助。赶快试试吧。🚀
