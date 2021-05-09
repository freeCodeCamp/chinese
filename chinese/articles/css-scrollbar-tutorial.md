> -  原文地址：[CSS Scrollbar Styling Tutorial – How to Make a Custom Scrollbar](https://www.freecodecamp.org/news/css-scrollbar-tutorial/)
> -  原文作者：[Charles MahlerCharles Mahler](https://www.freecodecamp.org/news/author/charles-mahler/)
> -  译者：
> -  校对者：

![CSS Scrollbar Styling Tutorial – How to Make a Custom Scrollbar](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/CSS-scrollbar-thumbnail.png)

Have you ever visited a website with a custom scrollbar and wondered how they did it? After reading this article you will understand just about everything there is to know about customizing and styling scrollbars using CSS.

In this tutorial you will:

-   Learn the native CSS properties available for styling a scrollbar in the browser
-   Create four unique scrollbars using CSS
-   Learn about some external libraries that give cross-browser support for custom scrollbars

![](https://www.freecodecamp.org/news/content/images/2021/04/crazy-scrollbar.PNG)

Peak scrollbar design

## Video Tutorial

If you prefer video tutorials to reading, you can watch instead. You can also use the video to leave comments/questions and post links to your own custom scrollbars using something like CodePen so others can see your work.

## Pros and Cons of a Custom Scrollbar

Before jumping into the code, I think it's worth looking at some potential tradeoffs that come with creating a custom scrollbar for your website or app.

The upside is that it can give your website a chance to standout compared to the millions of websites using the browser default scrollbar. Anything that can make your website even a little bit more memorable to visitors will benefit you long term.

On the other hand, many UI designers believe that you should never interfere with "standardized" UI components like the scrollbar. If you modify your scrollbar too much, it may confuse people using your website or app.

If you are doing this for your own personal website you probably don't need to worry about it as long as you like how it looks.

On the other hand if you are thinking about implementing a custom scrollbar at work or some project where you want to make money, you should try A/B testing and make a data driven decision based on the results.

At the end of the day most of us are writing code to drive revenue for a business, so you always need to keep that in mind.

## Getting Started

The first thing you need to do is create a basic layout so the page is large enough to actually show a scrollbar in your web browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href="styles.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>CSS Scrollbar Customization</h1>
        <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <p class="para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
      </div>
</body>
</html>
```

Nothing fancy here, just a basic div container with the class name `container` for our layout, a header for a title, and a bunch of paragraphs with the class name `para` to fill out our page.

Here's the CSS to make things look a little fancier:

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    
  }
  .para {
    font-size: 16px;
    padding: 20px;
    width: 70%;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
```

Your page should look something like this:

![](https://www.freecodecamp.org/news/content/images/2021/04/layout-preview.PNG)

## How to Create Custom Scrollbars with CSS

With our setup out of the way, we can jump into the fun part of the tutorial. The first part of this section will be learning the various CSS properties available to use for styling.

In the second part we'll implement four different types of scrollbars to give you some ideas for making your own scrollbars.

### CSS properties available for styling scrollbars

Unfortunately we still don't have any standardized cross-browser support for styling scrollbars with CSS. Firefox and Webkit-based browsers like Chrome, Edge, and Safari have different properties for styling.

This tutorial will mainly focus on Webkit browsers, because they offer more options for styling, but we will briefly cover Firefox as well.

### Webkit CSS styling properties for scrollbars

-   `::-webkit-scrollbar` – the entire scrollbar
-   `::-webkit-scrollbar-track` – the entire progress bar area of the scrollbar
-   `::-webkit-scrollbar-thumb` – the draggable section of the scrollbar

The below properties are available but are less commonly used:

-   `::-webkit-scrollbar-button` – the up/down buttons at each end of the scrollbar
-   `::-webkit-scrollbar-track-piece` – part of scrollbar not covered by the thumb
-   `::-webkit-scrollbar-corner` – bottom corner where horizontal and vertical scrollbars meet

### Firefox CSS styling properties for scrollbars

There are currently two available CSS properties for styling scrollbars in Firefox

-   `scrollbar-width` – controls width of scrollbar, with only two options available being `auto` or `thin`
-   `scrollbar-color` – takes two colors which are used for the coloring of the thumb and track of the scrollbar in that order

Now that you know your options for customizing scrollbars, let's put it into practice with some examples.

### Dark Theme Scrollbar

Dark theme websites are all the rage right now. Sticking with the default browser scrollbar could come off as jarring to users because it doesn't fit all that well with a dark themed website.

Let's use our newfound knowledge of CSS to create a dark theme scrollbar with a rounded border inspired by CSS Tricks' website:

```css
html::-webkit-scrollbar {
      width: 20px; 
   }

html::-webkit-scrollbar-track {
    background-color: black;
  }

html::-webkit-scrollbar-thumb {
    background: #4e4e4e;
    border-radius: 25px;
  }
```

The result is a little hard to see in the screenshot, but the track is black and the thumb is a darkish gray color.

![](https://www.freecodecamp.org/news/content/images/2021/04/dark-theme.PNG)

### Minimalist Scrollbar

For this example you'll be making a minimalist scrollbar. This type of scrollbar would work well if you are going for a simple, elegant style for your website.

The most important thing to note is that you have the ability to use `hover` and `active` pseudo-elements from CSS to further style your scrollbar. In this case the scrollbar will turn a darker gray when you hover and drag on the thumb.

```css
html::-webkit-scrollbar {
    width: 10px;
  }

html::-webkit-scrollbar-track {
    background: rgb(179, 177, 177);
    border-radius: 10px;
}

html::-webkit-scrollbar-thumb {
    background: rgb(136, 136, 136);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }
```

The result:

![](https://www.freecodecamp.org/news/content/images/2021/04/minimalist.PNG)

### Patterned Scrollbar

In this section, the focus is on using a repeating linear gradient to create a pattern effect on our scrollbar track. The same could be done for the scrollbar thumb as well.

Another thing to notice is that you can style the scrollbar thumb with a border, which you can use to create a number of cool effects. In this case I made the background color of the thumb transparent so that you can see the scrollbar track pattern as we scroll.

```css
html::-webkit-scrollbar {
   	width: 20px;
  }
html::-webkit-scrollbar-track {
  	background-image: repeating-linear-gradient(45deg, red 0, red 1px, transparent 0, transparent 50%);
  	background-size: 10px 10px;
	}
html::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: inset 1px 1px 5px black ;
   }
```

The result:

![](https://www.freecodecamp.org/news/content/images/2021/04/patterned.PNG)

### "Animated" Gradient Scrollbar

This example uses a linear gradient and a trick with box shadow to make it look like the scrollbar is changing color as you move up and down the page. What's really happening is that the background of the scrollbar track is being revealed beneath the thumb.

It works because the box-shadow takes up all the space of the scrollbar except for where the thumb is. Because the thumb is transparent the gradient color of the background shows through.

```css
html::-webkit-scrollbar {
    width: 20px; 
  }
  
html::-webkit-scrollbar-track {
    background:  linear-gradient(0deg, rgba(255, 0, 0, 1) 0%, rgba(7, 0, 211, 1) 100%);
  }

html::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0px 0px 0px 100vh black;
  }
```

The result:

![](https://www.freecodecamp.org/news/content/images/2021/04/animated.PNG)

## Custom Scrollbar Limitations and Alternatives

There are clearly some problems with creating custom scrollbars. The first would be the lack of cross-browser support. Other issues would be the lack of ability to add transitions or animations to the scrollbar and the fact your custom scrollbar won't appear on mobile devices.

An alternative is hiding the default scrollbar and using a library, but this may effect performance when used as main scrollbar for your page. And there are other potential usability issues because these libraries rely on JavaScript to imitate the native scrollbar behavior.

Below I'll go over two popular open-source libraries for making scrollbars.

### SimpleBar Library

[

Grsmto/simplebar

Custom scrollbars vanilla javascript library with native scroll, done simple, lightweight, easy to use and cross-browser. - Grsmto/simplebar

![](https://github.githubassets.com/favicons/favicon.svg)GrsmtoGitHub

![](https://opengraph.githubassets.com/a3236d200e4fa9e299d00a79c560678cfeaf07d684bc6ec998bd25f3ebe12efb/Grsmto/simplebar)

](https://github.com/Grsmto/simplebar)

As the name tells you, SimpleBar is all about making it easy to create custom scrollbars. The only real downside here is that it doesn't support usage as the main scrollbar for your website or for table, text area, or select HTML elements.

The main purpose of SimpleBar would be for creating custom scrollbars for things like dynamic chat applications or any other type of internal page element where you want scrolling.

### Overlay Scrollbars Library

[

KingSora/OverlayScrollbars

A javascript scrollbar plugin which hides native scrollbars, provides custom styleable overlay scrollbars and keeps the native functionality and feeling. - KingSora/OverlayScrollbars

![](https://github.githubassets.com/favicons/favicon.svg)KingSoraGitHub

![](https://opengraph.githubassets.com/ad151bf617e4361235fd3bc54163fab57fea0c0552703c89100ebc063483e341/KingSora/OverlayScrollbars)

](https://github.com/KingSora/OverlayScrollbars)

Overlay Scrollbars is very similar to SimpleBar but has the added benefit of supporting the HTML body element. This means that you can use it for the main scrollbar of your website in addition to all the other features you would expect like cross-browser and mobile support.

## Conclusion

Hopefully this article gave you a solid understanding of how styling CSS scrollbars works.

If you have any questions you can leave a comment on the YouTube video and I'll try to help you out. Also feel free to leave links to your own designs so other people can check them out.

Link to GitHub repo: [https://github.com/renaissanceengineer/css-scrollbar-tutorial](https://github.com/renaissanceengineer/css-scrollbar-tutorial)