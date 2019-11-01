> * 原文地址：[How to use CSS position to layout a website (with example code)](https://www.freecodecamp.org/news/how-to-use-css-position-to-layout-a-website-with-example-code-38592bb9e276/)
> * 原文作者：Jessica Chan
> * 译者：WUSO01
> * 校对者：

![如何使用CSS postion布局网站（附示例代码）](https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png)

_本文最初发表在[Coder-Coder.com][1]。_

使用CSS postion来布局网站上的元素可能是很困难的。absolute定位，relative定位，fixed定位和sticky定位之间有什么区别？这点很容易让人引起困惑。

为了帮助你们搞清楚它们之间的区别，本教程会指导你明白所有CSS position的属性。这样你就能让你的网站布局到精确到像素级别！

### CSS postion有什么作用

<!-- Using CSS, you can layout all your elements on your webpage visually. For example, you can position an element at the very top of your page, or 50px below the element before it. -->
你可以使用CSS来对网页上所有可见元素进行布局。比如，你可以把一个元素的位置移动到页面的最顶端，或相对前一个元素往下50px的地方。

<!-- To control just how an element will appear in the layout, you need to use the CSS  `position`  property. In addition, you can utilize some other position-related properties:  `top`,  `right`,  `bottom`,  `left`, and  `z-index`. (We’ll get more into those later on.) -->
要控制元素在布局中的显示方式，你需要使用CSS的`position`属性。此外还有与之相关的几个属性：`top`，`right`，`bottom`，`left` 和 `z-index`。（稍后会讲）

<!-- The  `position`  property can take five different values:  `static`,  `relative`,  `absolute`,  `fixed`, and  `sticky`. -->
`postion`属性有5个不同的值：`static`，`relative`，`absolute`，`fixed`和`sticky`。

<!-- It sounds like a lot, but don’t worry! -->
看起来这么多，不过别担心！

<!-- Here’s how each value for CSS  `position`  works: -->
每个CSS position的值的工作原理如下：

<!-- ### 1\. Static -->
### 1\. Static定位

<!-- `position: static`  is the default value that an element will have. This means if you don’t declare  `position`  for an element in CSS, it will automatically be set to  `static`. -->
`Position: static`是每个元素默认会有的值。意味着如果你不在某个元素的CSS中声明`position`，它也会自动被设置为`static`。

> _It’s important to note that having a static position is the same as not setting the  `position`  property at all. (This will come into play a bit later on with absolute positioning.)_

Elements that are statically positioned will appear on the page in what we call the normal flow. For example, if you have multiple  `<d`iv> elements one after the other, they will appear on the page directly below one another.

<!-- Here’s a quick demo to illustrate static position. We are using the following HTML markup: -->
让我们用一个小的demo来演示static position。HTML代码：

```html
<div class="parent purple"></div>
```

```html
<div class="another green"></div>
```

<!-- And here’s the CSS we’re using: -->
CSS：

```css
.parent {
   // No position set, so it's static
}
.another {
   // No position set, so it's static
   top: 50px;
}
```

<!-- The second element has a  `top`  property set to  `50px`. You would think that this would move it down 50px, right? -->
第二个元素的`top`属性的值为`50px`，你会认为这会将其下移50像素，对吧？

<!-- However, here is how it will look on a webpage: -->
但网页的实际效果是这样：

![](https://cdn-media-1.freecodecamp.org/images/nE-u6IOvcuqDCbvpCGOUUyNNpIrzrC94gu8I)

<!-- View original code in  [Codepen][2] -->
查看源代码 [codepen][2]

<!-- Since both elements have a static position, none of the layout CSS properties will do anything. This makes that  `top`  property have no effect on how the second element is displayed. -->
上面两个元素的position值都为static， <!-- So that second element ends up being directly below the first element, with no space between. -->第二元素在第一个元素的正下方，并且它们之间也没有间隔。

<!-- How can we fix this? Let’s move on to the next position: -->
下面的部分让我们来修改它们，达到我们预计的效果。

### 2\. Relative定位

<!-- `Position: relative`  is similar to  `static`  in that relatively positioned elements will follow the normal flow of the webpage. But the main difference is that using  `relative`  will now unlock the other CSS layout properties. -->
`position: relative`和`static`相似，相对定位的元素也遵守网页的标准流布局，但是它们之间主要的区别在于，使用`relative`定位可以使用我们先前提到的几个属性：`top`，`right`，`bottom`，`left` 和 `z-index`。

Think about it this way: you are setting the element to be positioned relative to other elements on the page.

<!-- Let’s see what this looks like, and adjust our CSS like this: -->
修改我们的css如下：

```css
.parent {
   position: static;
}
.another {
   position: relative;
   top: 50px;
}
```

<!-- All the CSS is exactly the same, except that we changed the second element to use  `position: relative`. Doing this makes that  `top: 50px`  work! -->
和之前的CSS一样，除了第二个元素的`position`为`relative`，但是`top: 50px`起作用了！

![](https://cdn-media-1.freecodecamp.org/images/WW2W75wz3QauqDbhgwlDpH80GcRbr1W63XX0)

<!-- View original code on  [Codepen][3] -->
查看源代码 [Codepen][3]

<!-- You can see that the second element is now 50px below the first one, adding that space between them. -->
现在你可以看到第二个元素在第一个元素下方距离50px，他们之间多了空白部分。

<!-- ### Relatively positioned parent and child elements -->
### 相对定位父元素和子元素

<!-- Let’s try another example, using a parent element with a child element nested inside it. Both have  `position: relative`  set. -->

让我们把两个元素嵌套在一起，并且都设置`position: relative`。

<!-- Here’s the HTML for that: -->
HTML代码：

```html
<div class="parent purple">
   <div class="child magenta"></div>
</div>
```

<!-- And our CSS styles: -->
CSS代码：

```css
.parent {
   position: relative;
}
.child {
   position: relative;
   top: 0px;
   left: 0px;
}
```

<!-- And here’s what that code will look like in real life: -->
得到的结果：

![](https://cdn-media-1.freecodecamp.org/images/j4ia5pGejB3E0xyKGWOMMSxo6wYNyT3Lqbot)

<!-- View original code on  [Codepen][4] -->
查看源代码 [Codepen][4]

You can see that the pink child element is nicely nested inside the purple parent element. The child is also positioned as close to the top and left inside the parent as is possible. (It will go as far up as the parent text)

Position relative is relatively straight-forward, right? Well, hold on to your hats, because things are about to get crazy with  `position absolute`.

### 3\. Absolute定位

`Position: absolute`  will cause an element to be taken out of that normal flow of the webpage.

Wait, what does that mean?

So before, using static or relative positioning, elements would be nicely displayed one below the other, depending on their order in the HTML markup. But with absolute positioning, the element is completely taken out of that entire flow.

To help explain, let’s do a comparison to illustrate the difference between relative and absolute positioning.

In the previous example, we had a parent element with a child element, both positioned relatively. And the child was nested inside the parent element.

Let’s change that child to be positioned absolutely in the parent!

Our CSS will now look like this:

```
.parent {
   position: relative;
}
.child {
   position: absolute;
   top: 0px;
   left: 0px;
}
```

![](https://cdn-media-1.freecodecamp.org/images/fVmPUWI3fHrC2dhTDK8v-Wny4cZhCh-aUDRc)

View original code on  [Codepen][5]

The pink child element now looks very different from our last example.

While it is still within the confines of the parent element, it is positioned at the very top and very left of the parent. It’s even covering up the parent text content!

This is due to the  `top: 0px`  and  `left: 0px`  styles of the child, combined with the child being absolutely positioned. In the normal flow of things, elements wouldn’t be on top of (and covering up) other elements.

But since the child is absolute, it’s essentially on a different layer than the normal elements. So it can be positioned on top of what else is on the webpage.

But it will stay within the boundaries of the parent element– as long as the parent has its position set. Which leads us to our next point.

There is one other tricky aspect to child elements with absolute positioning…

### An absolutely positioned element needs to position itself in relation to a positioned ancestor.

When you take an element out of the normal flow by using  `position: absolute`, it will look for an ancestor element that has its own position set. This is so the child knows what element it should position itself in relation to.

So what happens if a child element is absolutely positioned, but the parent element doesn’t have a position set?

Here’s our CSS for this illustration:

```css
.parent {
   // No position set, so it's static
}
.child {
   position: absolute;
   top: 0px;
   left: 0px;
}
```

And here’s what the resulting webpage would look like:

![](https://cdn-media-1.freecodecamp.org/images/USE0MNOMfgjm5aUE3mxezET6AqB2v-bDZtV9)

View original code on  [Codepen][6]

The child has now escaped the confines of the parent element, since the parent has no position set. And the child has gone up to the next (grand)parent element, in this case the  `<bo`dy> element, which is as far as it can go.

(A somewhat sad metaphor would be that this “orphaned” child is looking up the ancestry tree for someone that will be its “parent.”)

**This is a huge cause of unexpected behavior in CSS for many developers.**

If you can remember to always set the parent element of a child element to have  `position`  set to  `relative`  or  `absolute`  (in most cases), you will avoid having your child elements flying up the page to who knows where ?

So, to summarize relative and absolute positioning:

> _The main difference between relative and absolute positioning is that  `position: absolute`  will take a child element completely out of the normal flow of the document. And that child will be positioned in relation to the first parent element that has its own position set._

The last two  `position`  values,  `fixed`  and  `sticky`, are similar in some ways to  `position: absolute`. But they also are related to your scroll position on the page.

Let’s take a look:

### 4\. Fixed定位

<!-- `Position: fixed`  will take the element out of the normal flow, and also position it in the same place in the viewport (what’s visible on screen). This means that scrolling will not affect its position at all. -->
`position: fixed` 会让元素脱离正常布局流，元素将相对于屏幕视口（viewport）的位置来指定其位置。并且元素的位置在屏幕滚动时不会改变。

<!-- Let’s see what this looks like in the code. Here’s our HTML: -->
HTML：

```html
<div class="first purple">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit....
</div>
<div class="another green"></div>
```

<!-- And in our CSS, we’ve set the second element to be  `position: fixed`: -->
我们把第二个元素的`position`设置为`fixed`：

```css
.first {
   position: relative;
}
.another {
   position: fixed;
   top: 0px;
   left: 0px;
}
```

<!-- And this is what that will look like: -->
显示效果：

![](https://cdn-media-1.freecodecamp.org/images/0Aixaa9pedgy2gBfA-UDyPzY9XbIG6U1962O)

<!-- See original code on  [Codepen][7] -->
查看源代码 [Codepen][7]

The green fixed element will stay positioned to the top and left corner of the viewport. And if you scroll, the purple element will scroll up normally, but the green element will remain stuck to where we positioned it.

> **_Tip_**_: A fixed element must have a  `top`  or  `bottom`  position set. If it doesn’t, it will simply not exist on the page at all._

`Position: fixed`  is commonly used to make navigation bars that are always affixed to the top. It’s a super helpful property!

Next, we’ll take a look at sticky positioning, which is like fixed positioning but with a little extra.

### 5\. Sticky定位

`Position: sticky`  elements will initially behave like  `position: relative`  elements, but if you keep scrolling, they will get taken out of the normal flow and behave like  `position: fixed`  wherever you have positioned them.

This can be really useful if you want to stick an element that’s initially farther down the page to the top of the screen.

In this code example, we have our green sticky element between two purple elements containing a lot of text. (All the better for scrolling!)

```html
<div class="first purple">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit....
</div>
<div class="another green"></div>
<div class="purple">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit....
</div>
```

And the CSS for our sticky element:

```css
.first {
   position: relative;
}
.another {
   position: sticky;
   top: 0px;
}
```

And here’s what it looks like on the webpage!

![](https://cdn-media-1.freecodecamp.org/images/sXZdc3S5-X8saH18qUoFelbM7dHHa9SBiYzX)

See original code on  [Codepen][8]

As you scroll down the page, when you see the green element come into the viewport, it seems like a normal, relatively positioned element. But as you keep scrolling, instead of scrolling off the page, it will become fixed and stick to the top of the viewport.

Just like fixed elements, a sticky element must have  `top`  or  `bottom`  set in the CSS. If it doesn’t have it, the element will continue to behave as if it was relatively positioned, and will never become sticky.

> **_A note on browser support:_**

> _Currently,  `position: sticky`  doesn’t have complete support across the board. Newer browser versions do support it, but no versions of IE do. This may be important if you’re working on a client project where IE 11 support is necessary. You can check out the current support on  [CanIUse.com][9]_

<!-- ### In closing -->
### 结尾

<!-- I hope that you’ve found this tutorial and code examples on CSS positioning helpful! If you have any questions or feedback, feel free to leave a comment below ? -->
我希望这篇教程和示例代码能给你带来帮助，如果你有任何问题后者其他反馈，请随时在下方留言。

<!-- _Other resources:_ -->
参考资料：

-   [Mozilla Developer Network: CSS Position][10]
-   [CSS Tricks: position][11]

<!-- #### **Want more?** -->
#### 其他

<!-- I'm creating a course in responsive design!  [Sign up here][12]  to get emailed when it's published. -->
我做了一个响应式设计的课程，[点击注册][12]后，当课程发布后你会收到邮件通知。

<!-- I write web development tutorials on my blog c[oder-coder.com][13], post mini-tips on  [Instagram][14]  and coding tutorials on  [YouTube][15]. -->

我在我的博客[coder-coder.com][13]上写一些web开发有关的教程，也会在[Instagram][14]上分享一些小技巧，同时在[YouTube][15]上也有编码相关的教程。

[1]: https://coder-coder.com/css-position-layout/
[2]: https://codepen.io/thecodercoder/pen/XQKLdR
[3]: https://codepen.io/thecodercoder/pen/bJePJe
[4]: https://codepen.io/thecodercoder/pen/oOLKBK
[5]: https://codepen.io/thecodercoder/pen/RORXWN
[6]: https://codepen.io/thecodercoder/pen/EJgxYm
[7]: https://codepen.io/thecodercoder/pen/rbMNVj
[8]: https://codepen.io/thecodercoder/pen/oOzBYd
[9]: https://caniuse.com/#feat=css-sticky
[10]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[11]: https://css-tricks.com/almanac/properties/p/position/
[12]: https://coder-coder.com/responsive-design-beginners/
[13]: https://coder-coder.com/
[14]: https://www.instagram.com/thecodercoder/
[15]: https://www.youtube.com/c/codercodertv
