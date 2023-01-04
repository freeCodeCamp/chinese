> -  原文地址：[Learn CSS by Building the Figma Logo in Pure CSS](https://www.freecodecamp.org/news/learn-css-by-creating-the-figma-logo-in-pure-css/)
> -  原文作者：[Jennifer Bland](https://www.freecodecamp.org/news/author/ratracegrad/)
> -  译者：
> -  校对者：

![Learn CSS by Building the Figma Logo in Pure CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/Learn-CSS-Create-The-Figma-Logo-3.png)

One of the best ways to learn CSS is by creating something useful while you learn. I will show you how to use the following CSS concepts by creating the Figma logo:

-   flex-wrap
-   multiple classes
-   border-radius

## What We Will Be Creating

We will create the Figma logo in pure CSS. It will look like this:

![figma logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672179613/Screenshot_2022-12-27_at_5.19.27_PM_h2ncza.png)

## How to Create Our Starter Files

Let's start by creating two files called `index.html` and `style.css`. In your `index.html` file add the following starter code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Figma Logo</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

In the `style.css` file add the following starter code:

```css
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
}
```

## How to Use the Flex-wrap Property

We will use Flexbox to create the image. Flexbox has a property called `flex-wrap`. By default, flex items will all try to fit onto one line. You can change that and let the items wrap as needed with this property.

We will want to have two design elements on both the first and second rows of the logo. There is a single design element on the 3rd row.

Update the `index.html` file with the following code inside the `<body>` tags:

```javascript
<div class="figma-logo">
  <div class="element left"></div>
  <div class="element right orange"></div>
  <div class="element left purple"></div>
  <div class="element circle blue"></div>
  <div class="element left clip green"></div>
</div>
```

## What's Going On with the Multiple CSS Classes

When you look at the above code you will notice that every element in the logo has more than one CSS class assigned to it. We do this to have consistency in our design.

The `element` class will set the height and width of each element in our design.

The `right`, `left` and `clip` classes are used to set the appropriate `border-radius` for the element.

The `orange`, `purple`, `blue` and `green` classes are used to set the color for each element.

## How to Add Our Styling

I will make each element the same height and width of 100px. The class `figma-logo` will have a width of 200px. By setting the width at this value, then Flexbox will wrap elements after two are presented.

Add the following styles to your `style.css` file:

```css
.figma-logo {
	width: 200px;
    display: flex;
    flex-wrap:wrap;
}

.element {
	width: 100px;
	height: 100px;
	background: red;
}
```

When we view what we have now it looks like this:

![partial logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672180441/Screenshot_2022-12-27_at_5.33.51_PM_wmrldi.png)

## How to Use the `border-radius` Property

Our next step is to use the CSS `border-radius` property to define each of the elements. The `border-radius` CSS property rounds the corners of an element's outer border edge. Each CSS element has 4 corners. We will take advantage of this by styling each corner individually or using border-radius to style all 4 corners the same.

All three elements on the left side of the logo have a circular border. The top item on the right has the same circular border. The second item on the right is a circle.

Let's add styling for these items. Add the following code to your `style.css` file:

```css
.left {
	border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.right {
	border-top-right-radius:50px;
    border-bottom-right-radius:50px;
}

.circle {
	border-radius:50px;
}
```

Now when we look at our logo it looks like this:

![updated logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672180914/Screenshot_2022-12-27_at_5.41.33_PM_cudeyj.png)

We are getting closer. The last element on the 3rd row has a border on the right side. In the HTML code, I have called this class `clip`. Add this CSS code to your `style.css` file:

```css
.clip {
	border-bottom-right-radius:50px;
}
```

## How to Define Our Colors

Now our logo looks like the actual Figma logo but without the correct colors. In the `index.html` file I added CSS classes for the colors `orange`, `purple`, `blue` and `green`. The last thing we need to do is to add the background color for these classes.

Add the following to your `style.css` file:

```css
.orange {
	background: #FB7266;
}

.purple {
	background: #A061FA;
}

.blue {
	background: #2EBDFA;
}

.green {
	background: #00CE84;
}
```

## Final Logo

If you view your `index.html` file in a browser you should see the completed Figma logo:

![final logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672179613/Screenshot_2022-12-27_at_5.19.27_PM_h2ncza.png)

## Let's connect!

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/figma-logo-pure-css).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.