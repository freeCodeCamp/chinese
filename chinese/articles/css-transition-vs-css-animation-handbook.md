---
title: CSS Transition vs Animation Handbook – How to Animate Elements in CSS
author: Oluwatobi Sofela
authorURL: https://www.freecodecamp.org/news/author/oluwatobiss/
originalURL: https://www.freecodecamp.org/news/css-transition-vs-css-animation-handbook
translator: ""
reviewer: ""
---

September 12, 2023 / [#CSS][1]

<!-- more -->

# CSS Transition vs Animation Handbook – How to Animate Elements in CSS

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][2]

  ![CSS Transition vs Animation Handbook – How to Animate Elements in CSS](https://www.freecodecamp.org/news/content/images/size/w2000/2023/09/How-to-Animate-Elements-in-CSS-Cover.png)

CSS transitions and animations provide smooth, gradual ways to change an element's style. But they work in different ways.

Here are the main distinctions between them:

| CSS Transition | CSS Animation |
| --- | --- |
| 
-   Creates smooth transitions from one CSS value to another.
-   You need triggers to run CSS transitions. For instance, you can use the `:hover` [pseudo-class][3] to run transitions when a user's pointer hovers over an element.
-   Transition has only two states: an initial and a final state. You cannot create intermediate steps.
-   Runs only once.
-   Best used for basic style changes.

 | 

-   Animates the style change from one CSS keyframe to another.
-   CSS animations do not need triggers.
-   Animation allows you to create multiple states.
-   You can run multiple animation iterations—even to infinity.
-   Best used for dynamic style changes.

 |

This handbook uses examples to explain the two animating techniques so that you can understand their similarities and differences.

## Table of Contents

1.  [What Are CSS Transitions?][4]
2.  [Categories of CSS Transition Properties][5]
    -   [What Are the Required CSS Transition Properties?][6]
    -   [What is the CSS `transition-property`?][7]
    -   [What is the CSS `transition-duration` Property?][8]
    -   [Examples of the Required CSS Transition Properties][9]
    -   [What Are the Optional CSS Transition Properties?][10]
    -   [What is the CSS `transition-timing-function` Property?][11]
    -   [What is the CSS `transition-delay` Property?][12]
    -   [Examples of the Optional CSS Transition Properties][13]
3.  [Shorthand for Defining the CSS Transition Properties][14]
4.  [What is CSS Animation?][15]
    -   [Components of CSS Animations][16]
    -   [What are CSS @keyframes?][17]
5.  [What Are CSS Animation Properties?][18]
    -   [What is the CSS `animation-name` Property?][19]
    -   [What is the CSS `animation-duration` Property?][20]
    -   [What is the CSS `animation-timing-function` Property?][21]
    -   [What is the CSS `animation-delay` Property?][22]
    -   [What is the CSS `animation-iteration-count` Property?][23]
    -   [What is the CSS `animation-direction` Property?][24]
    -   [What is the CSS `animation-play-state` Property?][25]
    -   [What is the CSS `animation-fill-mode` Property?][26]
6.  [What is the CSS `animation` Property?][27]
7.  [Important Stuff to Know about CSS Transitions and Animations][28]
8.  [Wrapping up][29]

Without further ado, let's discuss CSS transitions.

## What Are CSS Transitions?

**CSS transitions** provide a smooth and gradual way to change a specific CSS property's value.

So, instead of allowing browsers to change a property's value immediately, CSS transitions cause the change to happen smoothly over a specified period of time.

For instance, suppose you wish to change an element's size on hover. In that case, you have two options:

1.  Implement the change without CSS transitions.
2.  Use CSS transitions to transition smoothly from the element's initial size to its new state.

Let's see some examples of the two options.

### How to change an image's size on mouse hover without using CSS transitions

```css
img {
  width: 40%;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][30]

The code above instantaneously changes the image's size from its initial width (`40%`) to its new dimension (`100%`) because we did not use CSS transitions.

With CSS transitions, you will get a much more pleasing experience. Let's see an example below.

### How to change an image's size on mouse hover with CSS transitions

```css
img {
  width: 40%;
  transition: width 3s ease-out 0.4s;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][31]

The `transition` property applied a smooth and gradual transition from `width: 40%` to `width: 100%` on the image.

## Categories of CSS Transition Properties

We have two categories of CSS transition properties:

-   _Required_ transition properties
-   _Optional_ transition properties

Let's discuss the two.

### What Are the Required CSS Transition Properties?

The two required properties you need to create CSS transitions are:

-   `transition-property`
-   `transition-duration`

#### What is the CSS transition-property?

The CSS `transition-property` specifies the CSS property you wish to transition from its initial to its new state.

#### What is the CSS transition-duration Property?

The CSS `transition-duration` property defines the length of time in which browsers should complete the selected element's transition. In other words, `transition-duration` sets the total start-to-finish time.

**Note the following:**

-   The `transition-duration` property only accepts time in milliseconds (ms) or seconds (s).
-   Zero seconds (`0s`) is the `transition-duration`'s default value. Therefore, no [transition event][32] will occur if you do not define a `transition-duration` property.
-   `transition-duration` accepts only a zero (`0`) or a positive numeric value. Browsers will ignore the duration declaration if you provide anything else.

### Examples of the Required CSS Transition Properties

Below are some examples of the two required CSS transition properties.

#### How to transition an element's width within three seconds

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][33]

Here's what we did in the snippet above:

1.  The `transition-property` tells browsers to transition the `img`'s `width` from its initial value (`40%`) to its new state (`100%`).
2.  We used the `transition-duration` property to define three seconds (`3s`) duration from the start to the end of the transition.

Therefore, instead of an instantaneous change from the image's initial width (`40%`) to its new size (`100%`), browsers will transition smoothly between the old and new state in three seconds (`3s`).

#### How to transition a font's size within five seconds

```css
p {
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: 5s;
}

p:hover {
  font-size: 7rem;
}
```

[**Try Editing It**][34]

Here's what we did in the snippet above:

1.  The `transition-property` informs browsers to transition the `p` element's `font-size`.
2.  We used the `transition-duration` property to define a five-second (`5s`) duration from the start to the end of the transition.

Therefore, instead of an immediate change from the paragraph's initial font size (`1rem`) to its new size (`7rem`), browsers will transition smoothly between the old and new state in five seconds (`5s`).

Let's now discuss the optional CSS transition properties.

### What Are the Optional CSS Transition Properties?

The two optional CSS transition properties are:

-   `transition-timing-function`
-   `transition-delay`

#### What is the CSS transition-timing-function Property?

The CSS `transition-timing-function` property defines the implementation timing (speed) of the selected element's transition.

In other words, the `transition-timing-function` specifies the speed for implementing the transition at various intervals of its duration.

The values the `transition-timing-function` property accepts are:

-   `ease`: Starts the transition slowly. Then, speeds it up and ends it slowly. `ease` is the `transition-timing-function` property's default value. It is equivalent to `cubic-bezier(0.25,0.1,0.25,1)`.
-   `ease-in`: Starts the transition slowly with a gradual increase in speed. It is equal to `cubic-bezier(0.42,0,1,1)`.
-   `ease-out`: Starts fast and ends the transition slowly. It is equivalent to `cubic-bezier(0,0,0.58,1)`.
-   `ease-in-out`: Starts and ends the transition slowly. It is equal to `cubic-bezier(0.42,0,0.58,1)`.
-   `linear`: Starts and ends the transition using a consistent speed throughout the transition's duration. It is equivalent to `cubic-bezier(0,0,1,1)`.
-   `cubic-bezier(p1, p2, p3, p4)`: Allows you to define the values of the [cubic-bezier curve][35].

### What is the CSS transition-delay Property?

The CSS `transition-delay` property defines how long the browser should wait before it starts the transition.

**Note the following:**

-   The `transition-delay` property must be in milliseconds (ms) or seconds (s).
-   `0s` is the `transition-delay`'s default value. It causes the transition to start immediately from the moment browsers apply it to an HTML element.
-   A negative value causes the transition to begin immediately from the specified time. For instance, suppose an element's `transition-delay` value is `-3s`. In that case, the transition will start immediately at 3 seconds.
-   A positive value causes the transition to begin after the specified delay time has elapsed. For instance, suppose an element's `transition-delay` value is `3s`. In that case, the transition will start after a 3-second delay.

### Examples of the Optional CSS Transition Properties

Below are some examples of the two optional CSS transition properties.

#### How to transition an element's width with an ease-out speed

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: ease-out;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][36]

Here's what we did in the snippet above:

1.  The `transition-property` informs browsers to transition the `img` element's width.
2.  We used the `transition-duration` property to define three seconds (`3s`) duration from the start to the end of the transition.
3.  We used the `transition-timing-function` property to begin the transition quickly and end it slowly.

#### How to transition an element's width with a linear speed

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][37]

Here's what we did in the snippet above:

1.  The `transition-property` informs browsers to transition the `img` element's width.
2.  We used the `transition-duration` property to define three seconds (`3s`) duration from the start to the end of the transition.
3.  The `transition-timing-function` property tells browsers to transition from the element's initial width to its new size using a consistent transition speed throughout.

#### How to transition an element's width with a two-second delay

```css
img {
  width: 40%;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}

img:hover {
  width: 100%;
}
```

[**Try Editing It**][38]

Here's what we did in the snippet above:

1.  The `transition-property` informs browsers to transition the `img` element's `width` property.
2.  We used the `transition-duration` property to define three seconds (`3s`) duration from the start to the end of the transition.
3.  The `transition-timing-function` property transitions the `img` element's width using a consistent transition speed.
4.  We used the `transition-delay` property to apply a two-second (`2s`) delay to the starting time of the transition.

Now that we know the CSS transition properties, we can discuss defining them with a shorthand syntax.

## Shorthand for Defining the CSS Transition Properties

We use the `transition` property as shorthand for the `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay` properties.

In other words, instead of writing:

```css
img {
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 2s;
}
```

You can alternatively use the `transition` property to shorten your code like so:

```css
img {
  transition: width 3s linear 2s;
}
```

[**Try Editing It**][39]

Here is the `transition` property's syntax:

```css
transition: <property-name> <duration> <timing-function> <delay>;
```

Note that you can use the `transition` property to transition the state of multiple CSS properties.

**Here's an example:**

```css
img {
  width: 40%;
  opacity: 0.4;
  transition: width 3s linear, opacity 4s ease-out, transform 5s;
}

img:hover {
  width: 100%;
  opacity: 1;
  transform: rotate(45deg);
}
```

[**Try Editing It**][40]

The snippet above used commas (`,`) to separate each of the transitional properties we are applying to the `img` element.

So, now that we know what CSS transitions are and how they work, we can discuss CSS animations.

## What is CSS Animation?

**CSS animations** provide a smooth and gradual way to animate an element's style changes from one keyframe to another.

### Components of CSS Animations

CSS animations consist of two components:

1.  Keyframes
2.  Animation properties

### What are CSS @keyframes?

**@keyframes** define the styles you want browsers to apply smoothly to an element at some specified key moments (frames).

### Syntax of CSS @keyframes

A CSS @keyframes [at-rule][41] consists of the following:

1.  An `@keyframes` keyword
2.  The `@keyframes`' name
3.  A block of zero or more keyframes
4.  The animation's key moment selector
5.  The key moment's style declarations

**Here's an illustration:**

![Anatomy of CSS @keyframes at-rule](https://www.freecodecamp.org/news/content/images/2023/09/css-animation-keyframes-illustration-codesweetly.png)

A CSS @keyframes at-rule consists of a keyword, a name, and a block of keyframes

### Examples of CSS @keyframes

Below are examples of the CSS @keyframes.

#### How to define `change-color`'s keyframes

```css
@keyframes change-color {
  /* The first keyframe */
  0% {background-color: purple;}
  /* The last keyframe */
  100% {background-color: yellow;}
}
```

Here's what we did in the snippet above:

1.  We created the `@keyframes` at-rule named `change-color`.
2.  We defined a keyframe for browsers to apply when an associated element's animation is at its zero percent (`0%`) duration.
3.  We defined a keyframe for browsers to apply when an associated element's animation is at its one hundred percent (`100%`) duration.

**Note:**

-   You can name your `@keyframes` anything you wish.
-   `0%` is equivalent to the keyword `from`. And `100%` is the same as the keyword `to`. In other words, the snippet above is equal to the following:

```css
@keyframes change-color {
  /* The first keyframe */
  from {background-color: purple;} 
  /* The last keyframe */
  to {background-color: yellow;} 
}
```

-   An animation's start and end states (`from` and `to`) are optional.
-   Suppose you omit an `@keyframes`' start (`0%`) or end (`100%`) state. In that case, browsers will default to the element's existing styles for either state.
-   The important rule (`!important`) does not work in keyframes. Browsers will ignore any keyframe declaration with an `!important` rule.

Let's see another example.

#### How to define `shape-image`'s keyframes

```css
@keyframes shape-image {
  0% { width: 40%; border: 5px solid blue;}
  40% { width: 70%; border: 1px solid red; border-radius: 50%;}
  75% { width: 50%; border: 30px solid green;}
  100% { width: 100%; border: 7px solid purple;}
}
```

Here's what we did in the snippet above:

1.  We created the `@keyframes` [ruleset][42] named `shape-image`.
2.  We defined four keyframes for browsers to apply when an associated element's animation is at the specified key moments.

**Tip:** Use the [CSSKeyframesRule][43] interface in JavaScript to access the CSS `@keyframes` at-rules.

So, now that we know the CSS @keyframes ruleset, we can discuss the other component of CSS animations—_animation properties_.

## What Are CSS Animation Properties?

**CSS animation properties** inform browsers about the animation you wish to apply to a specific element.

In other words, CSS animation properties describe the animation's attributes, such as its name, duration, direction, and iteration.

The nine (9) types of CSS animation properties are:

-   `animation-name`
-   `animation-duration`
-   `animation-timing-function`
-   `animation-delay`
-   `animation-iteration-count`
-   `animation-direction`
-   `animation-play-state`
-   `animation-fill-mode`
-   `animation`

Let's discuss each one now.

### What is the CSS `animation-name` property?

The CSS `animation-name` property defines the name of the `@keyframes` at-rules containing the styles you wish to apply to a specific element.

**Here's an example:**

```css
div {
  width: 150px;
  height: 150px;
  animation-name: change-color;
}

@keyframes change-color {
  from {background-color: purple;}
  to {background-color: yellow;}
}
```

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  We created `change-color`'s `@keyframes` ruleset.
3.  We defined two keyframes for browsers to use when the `div` element's animation is at its zero percent (`0%`) and one hundred percent (`100%`) duration.

**Tip:** You can use the keyword `none` to deactivate an animation.

### What is the CSS `animation-duration` property?

The CSS `animation-duration` property defines the time to complete one animation cycle.

**Note the following:**

-   The `animation-duration` property must be in milliseconds (ms) or seconds (s) units.
-   `animation-duration`'s value must be zero or positive. Otherwise, browsers will ignore the duration declaration.
-   Zero seconds (`0s`) is `animation-duration`'s default value.
-   Suppose `0s` is `animation-duration`'s value. In that case, browsers will still execute the animation by firing the [`animationStart`][44] and [`animationEnd`][45] events. But the [`animation-fill-mode`][46]'s value will determine whether the animation is visible. For instance, if you set the `animation-fill-mode` to `none`, the animation will be invisible.

Let's see some examples of the `animation-duration` property.

#### How to animate an element's color change within three seconds

```css
div {
  width: 150px;
  height: 150px;
  animation-name: change-color;
  animation-duration: 3s;
}

@keyframes change-color {
  from {background-color: purple;}
  to {background-color: yellow;}
}
```

[**Try Editing It**][47]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to three seconds (`3s`).
3.  We created `change-color`'s @keyframes [ruleset][48].
4.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will create a smooth three-second animation from `change-color`'s first keyframe to its last.

#### How to animate an image's border and width changes within seven seconds

```css
img {
  animation-name: shape-image;
  animation-duration: 7s;
}

@keyframes shape-image {
  0% { width: 40%; border: 5px solid blue;}
  40% { width: 70%; border: 1px solid red; border-radius: 50%;}
  75% { width: 50%; border: 30px solid green;}
  100% { width: 100%; border: 7px solid purple;}
}
```

[**Try Editing It**][49]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `img` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We created `shape-image`'s @keyframes ruleset.
4.  We defined four keyframes for browsers to apply when the image's animation is at the specified key moments.

Therefore, browsers will create a smooth seven-second animation from `shape-image`'s first keyframe to its last.

### What is the CSS `animation-timing-function` property?

The CSS `animation-timing-function` property defines an animation's implementation timing (speed) throughout its duration.

In other words, the `animation-timing-function` property specifies the speed for implementing the animation at various intervals of its duration.

The values the `animation-timing-function` property accepts are:

-   `ease`: Starts the animation slowly. Then speeds it up and ends it slowly. `ease` is the `animation-timing-function` property's default value. It is equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1)`.
-   `ease-in`: Starts the animation slowly with a gradual increase in speed. It is equivalent to `cubic-bezier(0.42, 0, 1, 1)`.
-   `ease-out`: Starts fast and ends the animation slowly. It is equivalent to `cubic-bezier(0, 0, 0.58, 1)`.
-   `ease-in-out`: Starts and ends the animation slowly. It is equivalent to `cubic-bezier(0.42, 0, 0.58, 1)`.
-   `linear`: Starts and ends the animation using a consistent speed throughout the animation's duration. It is equivalent to `cubic-bezier(0, 0, 1, 1)`.
-   `cubic-bezier(p1, p2, p3, p4)`: Allows you to define the values of the [cubic-Bezier curve][50].

Let's see some examples of the `animation-timing-function` property.

#### How to animate an element's width change using a linear speed

```css
div {
  width: 150px;
  height: 150px;
  background-color: purple;
  animation-name: change-width;
  animation-duration: 7s;
  animation-timing-function: linear;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**Try Editing It**][51]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  The `linear` timing function applied a consistent speed to the `div`'s animation.
4.  We created `change-width`'s @keyframes ruleset.
5.  We defined two keyframes for browsers to apply when the `div`'s animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will create a smooth seven-second animation from `change-width`'s first keyframe to its last.

Let's see another example.

#### How to animate an element's width change using an ease-in-out and a linear speed

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**Try Editing It**][52]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will create a smooth seven-second animation from `change-width`'s first keyframe to its last.

### What is the CSS `animation-delay` property?

The CSS `animation-delay` property defines how long browsers should wait before starting an animation.

In other words, use `animation-delay` to specify whether the animation should start immediately from the beginning, immediately from a specific time, or later (after some delay).

**Note the following:**

-   The `animation-delay` property must be in milliseconds (ms) or seconds (s) units.
-   `0s` is `animation-delay`'s default value. It causes the animation to start once browsers apply it to an HTML element.
-   A negative value causes the animation to start immediately from the specified time. For instance, suppose an element's `animation-delay` value is `-3s`. In that case, the animation will begin immediately at 3 seconds.
-   A positive value causes the animation to start after the specified delay time has elapsed. For instance, suppose an element's `animation-delay` value is `3s`. In that case, the animation will begin after a 3-second delay.

Let's see some examples of the `animation-delay` property.

#### How to animate an element's width change with a four-second delay

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
  animation-delay: 4s;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**Try Editing It**][53]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` elements.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  The `animation-delay` property applied a four-second (`4s`) delay to the starting time of the `second-div`'s animation.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will delay the `second-div`'s animation for four seconds while starting the `first-div`'s animation immediately.

Below is another example of the `animation-delay` property.

#### How to animate an element's width change from the fourth-second mark of the animation sequence

```css
div {
  width: 150px;
  height: 150px;
  color: white;
  animation-name: change-width;
  animation-duration: 7s;
}

.first-div {
  background-color: purple;
  animation-timing-function: ease-in-out;
}

.second-div {
  background-color: orange;
  animation-timing-function: linear;
  animation-delay: -4s;
}

@keyframes change-width {
  from {width: 50px;}
  to {width: 100%;}
}
```

[**Try Editing It**][54]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` elements.
2.  The `animation-duration` property sets the animation's runtime for one cycle to seven seconds (`7s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `first-div`'s animation.
4.  The `linear` timing function applied a consistent speed to the `second-div`'s animation.
5.  The `animation-delay` property makes the `second-div`'s animation start from the fourth-second mark of the animation sequence.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` elements' animations are at their zero percent (`0%`) and one hundred percent (`100%`) durations.

Therefore, browsers will start the `second-div`'s animation immediately at the fourth-second mark.

### What is the CSS `animation-iteration-count` property?

The CSS `animation-iteration-count` property defines the number of times browsers should repeat an animation.

**Note the following:**

-   `1` is `animation-iteration-count`'s default value.
-   The `animation-iteration-count` property accepts non-integer values—for instance, `0.5` tells browsers to play half of a single animation cycle.
-   `animation-iteration-count` does _not_ accept negative values.
-   An `infinite` value means browsers should repeat the animation forever.

Below are some examples.

#### How to animate an element's width change with a two-cycle iteration

```css
div {
  width: 70px;
  height: 50px;
  background-color: purple;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
}

@keyframes change-width {
  from {width: 70px;}
  to {width: 100%;}
}
```

[**Try Editing It**][55]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation twice.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will run the `div`'s animation in two cycles.

Below is another example of the `animation-iteration-count` property.

#### How to animate an element's width change with an infinite iteration

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][56]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at its zero percent (`0%`) and one hundred percent (`100%`) duration.

Therefore, browsers will run the `div`'s animation infinitely.

### What is the CSS `animation-direction` property?

The CSS `animation-direction` property specifies whether the animation's first iteration should run forward or backward. It also defines whether browsers should alternate the direction of subsequent iterations.

The values `animation-direction` accepts are:

-   `normal`: Play the animation in the normal direction (that is, forward). `normal` is `animation-direction`'s default value.
-   `reverse`: Play the animation in the reverse direction (backward).
-   `alternate`: Play the first animation cycle in the normal direction. Then, alternates the subsequent iterations between the backward and forward directions.
-   `alternate-reverse`: Play the first animation cycle in the reverse direction. Then, alternates the subsequent iterations between the forward and backward directions.

Below are some examples.

#### How to animate an element's width change while starting each animation cycle backward

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][57]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property starts each animation cycle in reverse (backward).
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Below is another example of the `animation-direction` property.

#### How to animate an element's width change while alternating the animation's direction

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][58]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property alternates the direction of each cycle's animation.
6.  We created `change-width`'s @keyframes ruleset.
7.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

### What is the CSS `animation-play-state` property?

The CSS `animation-play-state` property specifies whether the browser is running or has paused a specific animation.

The values the `animation-play-state` property accepts are:

-   `running`: Specifies that the browser is running the animation. `running` is `animation-play-state`'s default value.
-   `paused`: Specifies that the browser has paused the animation.

**Here's an example:**

```css
div {
  width: 70px;
  height: 50px;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

div:hover {
  animation-play-state: paused;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][59]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-iteration-count` property tells browsers to run the animation infinitely.
5.  The `animation-direction` property alternates the direction of each cycle's animation.
6.  We used the `animation-play-state` on the `div`'s hover [pseudo-class][60] to pause the animation whenever users move their mouse over the `div` element.
7.  We created `change-width`'s @keyframes ruleset.
8.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

### What is the CSS `animation-fill-mode` property?

The CSS `animation-fill-mode` property defines the styles browsers should apply to an element before (or after) its animation runs.

The values the `animation-fill-mode` property accepts are:

-   `none`: Browsers will apply _no_ style to the element before or after the animation runs. `none` is `animation-fill-mode`'s default value.
-   `forwards`: The element will retain the last keyframe's style declarations when the animation ends. (Note: The `animation-direction` and `animation-iteration-count` properties determine the last keyframe.)
-   `backwards`: The element will retain the first keyframe's style declarations during the `animation-delay` period. (Note: The `animation-direction` property determines the first keyframe.)
-   `both`: Browsers will apply both the forwards and backwards rules. Therefore, the animation properties will extend in both directions.

Below are some examples.

#### How to style an element after its animation ends

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][61]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to retain the last keyframe's style declarations when the animation ends.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Below is another example of the `animation-fill-mode` property.

#### How to style an element during its animation delay period

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: backwards;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][62]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to retain the first keyframe's style declarations during the `animation-delay` period.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to apply when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

Let's see a third example of the `animation-fill-mode` property.

#### How to style an element during its animation delay and after the animation

```css
div {
  width: 70px;
  height: 50px;
  background-color: green;
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 3s;
  animation-fill-mode: both;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}
```

[**Try Editing It**][63]

Here's what we did in the snippet above:

1.  The `animation-name` property specifies the `@keyframes` we wish to apply to the `div` element.
2.  The `animation-duration` property sets the animation's runtime for one cycle to five seconds (`5s`).
3.  We used the `ease-in-out` timing function to apply a slow start and slow end speed to the `div`'s animation.
4.  The `animation-fill-mode` property tells browsers to apply both the forwards and backwards rules.
5.  We created `change-width`'s @keyframes ruleset.
6.  We defined two keyframes for browsers to use when the `div` element's animation is at zero percent (`0%`) and one hundred percent (`100%`) duration.

## What is the CSS `animation` Property?

We use the `animation` property as a shorthand for:

-   `animation-name`
-   `animation-duration`
-   `animation-timing-function`
-   `animation-delay`
-   `animation-iteration-count`
-   `animation-direction`
-   `animation-play-state`
-   `animation-fill-mode`

In other words, instead of writing:

```css
div {
  animation-name: change-width;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 2s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-play-state: running;
  animation-fill-mode: both;
}
```

You can alternatively use the `animation` property to shorten your code like so:

```css
div {
  animation: 5s ease-in-out 2s 3 alternate both running change-width;
}
```

[**Try Editing It**][64]

Here is the `animation` property's syntax:

```css
animation: animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode animation-play-state animation-name;
```

**Note:**

-   The way you arrange the time values is essential. Browsers read the first time-value as `animation-duration`. And they assign the second one to `animation-delay`.
-   It is best to list `animation-name` last. Otherwise, browsers may assign the `animation-name`'s value to other properties.
-   You can apply multiple `@keyframes` [rulesets][65] to an element using the `animation` property. Here's an example:

```css
div {
  width: 70px;
  height: 70px;
  background-color: green;
  animation: 
    5s ease-in-out 3s 3 alternate both change-width, 
    5s 3s infinite alternate both change-shape, 
    5s 3s infinite rotate-hue;
}

@keyframes change-width {
  from {width: 70px; background-color: purple;}
  to {width: 100%; background-color: orange;}
}

@keyframes change-shape {
  from {border-radius: 0%; border: 1px solid blue;}
  to {border-radius: 50%; border: 7px solid green;}
}

@keyframes rotate-hue {
  from {filter: hue-rotate(0deg);}
  to {filter: hue-rotate(360deg);}
}
```

[**Try Editing It**][66]

The snippet above applied three `@keyframes` rulesets to the `div` element using commas (`,`) to separate each `@keyframes`' configurations.

**Note:** We used the [`hue-rotate()`][67] function to rotate the `div`'s colors.

## Important Stuff to Know about CSS Transitions and Animations

1.  You can't animate all CSS properties. Have a look at MDN's [Animatable CSS properties][68] article to see the ones you can animate.
2.  CSS transitions and animations are [expensive operations][69] for most CSS properties—except `opacity` and `transform`. In other words, applying transitions (or animations) to any CSS box model property is inherently a [CPU-intensive][70] task. Therefore, animate only `opacity`, and `transform` properties if you are concerned about your page's performance.
3.  Be mindful of the [layout repainting issues][71] that CSS transitions may cause through your elements' stacking order.

## Wrapping up

In this article, we discuss the differences between CSS transitions and animations. We also used examples to discuss how to use them.

Thanks for reading.

### And here's a useful React TypeScript resource:

I wrote a book about [Creating NPM Packages][72]!

It is a beginner-friendly book that takes you from zero to creating, testing, and publishing NPM packages like a pro.

[![Creating NPM Package Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2023/09/creating-npm-package-banner-codesweetly.png)][73]

---

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][74]

O-sweet-programming, my interest is to make you sweeter for all.

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][75]

[1]: /news/tag/css/
[2]: /news/author/oluwatobiss/
[3]: https://codesweetly.com/css-pseudo-selectors
[4]: #what-are-css-transitions
[5]: #categories-of-css-transition-properties
[6]: #what-are-the-required-css-transition-properties
[7]: #what-is-the-css-transition-property
[8]: #what-is-the-css-transition-duration-property
[9]: #examples-of-the-required-css-transition-properties
[10]: #what-are-the-optional-css-transition-properties
[11]: #what-is-the-css-transition-timing-function-property
[12]: #what-is-a-css-transition-delay-property
[13]: #examples-of-the-optional-css-transition-properties
[14]: #shorthand-for-defining-the-css-transition-properties
[15]: #what-is-css-animation
[16]: #components-of-css-animations
[17]: #what-are-css-keyframes
[18]: #what-are-css-animation-properties
[19]: #what-is-the-css-animation-name-property
[20]: #what-is-the-css-animation-duration-property
[21]: #what-is-the-css-animation-timing-function-property
[22]: #what-is-the-css-animation-delay-property
[23]: #what-is-the-css-animation-iteration-count-property
[24]: #what-is-the-css-animation-direction-property
[25]: #what-is-the-css-animation-play-state-property
[26]: #what-is-the-css-animation-fill-mode-property
[27]: #what-is-a-css-animation-property
[28]: #important-stuff-to-know-about-css-transitions-and-animations
[29]: #wrapping-up
[30]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-dsymqf
[31]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ufwgbu
[32]: https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event
[33]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-cq27rd
[34]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-huvkzp
[35]: https://www.cssportal.com/css-cubic-bezier-generator/
[36]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-tqzgmf
[37]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-1gqwai
[38]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ejjufi
[39]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-vtvbpo
[40]: https://codesweetly.com/try-it-sdk/css/css-transitions/js-ajygzm
[41]: https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
[42]: https://codesweetly.com/css-ruleset
[43]: https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule
[44]: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event
[45]: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
[46]: https://codesweetly.com/css-animations-explained#what-is-an-animation-fill-mode-property-in-css
[47]: https://codesweetly.com/try-it-sdk/css/css-animations/js-h6mb4k
[48]: https://codesweetly.com/css-ruleset
[49]: https://codesweetly.com/try-it-sdk/css/css-animations/js-prumgo
[50]: https://www.cssportal.com/css-cubic-bezier-generator/
[51]: https://codesweetly.com/try-it-sdk/css/css-animations/js-tzwrdc
[52]: https://codesweetly.com/try-it-sdk/css/css-animations/js-janmqa
[53]: https://codesweetly.com/try-it-sdk/css/css-animations/js-iidpmk
[54]: https://codesweetly.com/try-it-sdk/css/css-animations/js-6xga4t
[55]: https://codesweetly.com/try-it-sdk/css/css-animations/js-vbcswe
[56]: https://codesweetly.com/try-it-sdk/css/css-animations/js-p1zwk5
[57]: https://codesweetly.com/try-it-sdk/css/css-animations/js-d2n3zt
[58]: https://codesweetly.com/try-it-sdk/css/css-animations/js-ld9kms
[59]: https://codesweetly.com/try-it-sdk/css/css-animations/js-kbommn
[60]: https://codesweetly.com/css-pseudo-selectors
[61]: https://codesweetly.com/try-it-sdk/css/css-animations/js-lkc7mw
[62]: https://codesweetly.com/try-it-sdk/css/css-animations/js-nfmq3r
[63]: https://codesweetly.com/try-it-sdk/css/css-animations/js-gbypmt
[64]: https://codesweetly.com/try-it-sdk/css/css-animations/js-37ccew
[65]: https://codesweetly.com/css-ruleset
[66]: https://codesweetly.com/try-it-sdk/css/css-animations/js-4lyg4d
[67]: https://www.quackit.com/css/functions/css_hue-rotate_function.cfm
[68]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
[69]: https://codesweetly.com/web-tech-terms-e#expensive-operation-computing
[70]: https://codesweetly.com/web-tech-terms-c#cpu-intensive
[71]: https://dzhavat.github.io/2021/02/18/debugging-layout-repaint-issues-triggered-by-css-transition.html
[72]: https://amzn.to/3Pa4bI4
[73]: https://amzn.to/3Pa4bI4
[74]: /news/author/oluwatobiss/
[75]: https://www.freecodecamp.org/learn/