> - 原文地址：[How to Style Your React App – 5 Ways to Write CSS in 2021](https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/)
> - 原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Style Your React App – 5 Ways to Write CSS in 2021](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/how-to-style-react-apps.png)

当谈到你的 React 应用程序的 styling ，你有一大堆不同的选择。你会选择哪一种呢？

我分析了在 React 应用中编写 CSS 时，你必须选择的 5 种主要方式。

对于每个项目来说，在 React 中编写样式并没有第一种方法。每个项目都是不同的，有不同的需求。

这就是为什么在每个部分的末尾，我将介绍每种方法的优点和缺点，以帮助你在项目中选择最适合你的方法。

让我们开始吧!

> 想成为一名专业的 React 开发人员，同时建立令人惊叹的项目吗？看看 [**The React Bootcamp**](https://reactbootcamp.com)。

## 我们要编程的内容

为了看看这些造型方法的代码是如何相互比较的，我们将创建同一个例子：一个简单但干净的推荐卡。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-14-at-12.07.40-PM.png)

> 想和这些例子中的每一个一起编程吗？去 [react.new](https://react.new) 即时创建一个新的 React 应用程序✨

## Inline Styles（内联样式）

内联样式是对任何 React 应用程序进行样式化的最直接方式。

内联元素的样式不需要你创建一个单独的样式表。

与样式表中的样式相比，直接应用于元素的样式具有更高的优先权。这意味着它们 "凌驾于 "可能应用于元素的其他样式规则。

下面是我们用内联样式制作的推荐卡:

```js
export default function App() {
  return (
    <section
      style={{
        fontFamily: '-apple-system',
        fontSize: "1rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        color: "#292b2c",
        backgroundColor: "#fff",
        padding: "0 2em"
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px"
        }}
      >
        <img
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Tammy Stevens"
          style={{
            margin: "-90px auto 30px",
            width: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0"
          }}
        />
        <div>
          <p
            style={{
              lineHeight: 1.5,
              fontWeight: 300,
              marginBottom: "25px",
              fontSize: "1.375rem"
            }}
          >
            This is one of the best developer blogs on the planet! I read it daily to improve my skills.
          </p>
        </div>
        <p
          style={{
            marginBottom: "0",
            fontWeight: 600,
            fontSize: "1rem"
          }}
        >
          Tammy Stevens
          <span style={{ fontWeight: 400 }}> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}
```

尽管有一些快速的好处，内联样式只对非常小的应用程序是一个可接受的选择。当你的代码库稍有增长，内联样式的困难就会变得很明显。

正如上面的代码例子所示，如果所有的样式都是内联的，即使是这样的小组件也会变得非常笨重。

然而，一个快速的技巧是将内联样式放入可重用的变量中，这些变量可以存储在一个单独的文件中:

```js
const styles = {
  section: {
    fontFamily: "-apple-system",
    fontSize: "1rem",
    fontWeight: 1.5,
    lineHeight: 1.5,
    color: "#292b2c",
    backgroundColor: "#fff",
    padding: "0 2em"
  },
  wrapper: {
    textAlign: "center",
    maxWidth: "950px",
    margin: "0 auto",
    border: "1px solid #e6e6e6",
    padding: "40px 25px",
    marginTop: "50px"
  },
  avatar: {
    margin: "-90px auto 30px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0"
  },
  quote: {
    lineHeight: 1.5,
    fontWeight: 300,
    marginBottom: "25px",
    fontSize: "1.375rem"
  },
  name: {
    marginBottom: "0",
    fontWeight: 600,
    fontSize: "1rem"
  },
  position: { fontWeight: 400 }
};

export default function App() {
  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        <img
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Tammy Stevens"
          style={styles.avatar}
        />
        <div>
          <p style={styles.quote}>
            This is one of the best developer blogs on the planet! I read it
            daily to improve my skills.
          </p>
        </div>
        <p style={styles.name}>
          Tammy Stevens
          <span style={styles.position}> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}
```

尽管有这样的改进，内联样式并不具备任何简单的 CSS 样式表可以提供的一些基本功能。

例如，你不能编写动画、嵌套元素的样式（即所有子元素、首子、末子）、伪类（即:hover）和伪元素（:首行）等等。

如果你正在设计一个应用程序的原型，内联样式是很好的。然而，当你进一步制作时，你将需要切换到另一个 CSS 样式选项，以给你提供基本的 CSS 功能。

👍 优点:

- 编写样式的最快捷方式
- 有利于原型设计（先写内联样式，然后再移到样式表）
- 有很大的优先权（可以覆盖样式表中的样式）

👎 缺点:

- 将普通的 CSS 转换为内联样式很繁琐
- 大量的内联样式使 JSX 无法阅读
- 你不能使用基本的 CSS 功能，如动画、选择器等
- 不能很好地扩展

## Plain CSS

不使用内联样式，而是导入一个 CSS 样式表来给组件的元素设置样式是很常见的。

在样式表中编写 CSS 可能是为 React 应用程序设置样式的最常见和最基本的方法，但它不应该被轻易否定。

在 plain CSS 样式表中编写样式一直在变得更好，因为 CSS 标准中的功能越来越多。

这包括像用于存储动态值的 CSS 变量、用于精确选择子元素的各种高级选择器，以及像 `:is` 和 `:where` 这样的新伪类。

这是我们用 plain CSS 写的推荐卡，并在我们的 React 应用程序的顶部导入。

```css
/* src/styles.css */

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  font-size: 1rem;
  font-weight: 1.5;
  line-height: 1.5;
  color: #292b2c;
  background-color: #fff;
}
.testimonial {
  margin: 0 auto;
  padding: 0 2em;
}
.testimonial-wrapper {
  text-align: center;
  max-width: 950px;
  margin: 0 auto;
  border: 1px solid #e6e6e6;
  padding: 40px 25px;
  margin-top: 50px;
}
.testimonial-quote p {
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 25px;
  font-size: 1.375rem;
}
.testimonial-avatar {
  margin: -90px auto 30px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0;
}
.testimonial-name {
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1rem;
}
.testimonial-name span {
  font-weight: 400;
}
```

```js
// src/App.js

import "./styles.css";

export default function App() {
  return (
    <section className="testimonial">
      <div className="testimonial-wrapper">
        <img
          className="testimonial-avatar"
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Tammy Stevens"
        />
        <div className="testimonial-quote">
          <p>
            This is one of the best developer blogs on the planet! I read it daily to improve my skills.
          </p>
        </div>
        <p className="testimonial-name">
          Tammy Stevens<span> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}
```

对于我们的推荐卡，请注意，我们正在创建应用于每个单独元素的类。这些类都以相同的名称 `testimonial-` 开始。

写在样式表中的 CSS 是你的应用程序的一个很好的首选。与内联样式不同，它几乎可以以任何你所需要的方式为你的应用程序设置样式。

一个小问题可能是你的命名惯例。一旦你有了一个非常完善的应用程序，你就很难为你的元素想出独特的类名，尤其是当你有 5 个 div 互相包裹的时候。

如果你没有一个你有信心的命名规则（如 BEM），就很容易犯错，再加上创建多个同名的类，这就导致了冲突。

此外，与 SASS/SCSS 等新工具相比，编写 plain CSS 可能更加繁琐和重复。因此，与 SCSS 等工具或 CSS-in-JS 库相比，用 CSS 写样式可能需要更长的时间。

另外，需要注意的是，由于 CSS 会级联到所有的子元素，如果你把 CSS 样式表应用到一个组件上，那么它就不仅仅局限于该组件了。它的所有声明规则将被转移到任何作为你的样式表组件的子元素上。

如果你对 CSS 很有信心，它绝对是你为任何 React 应用程序设计样式的一个可行的选择。

说到这里，有一些 CSS 库为我们提供了 CSS 的所有功能，但代码更少，并包括许多 CSS 本身永远不会有的额外功能（如范围内的样式和自动提供前缀）。

👍 优点:

- 给我们提供了现代 CSS 的所有工具（变量、高级选择器、新的伪类等等）。
- 帮助我们从内联样式中清理我们的组件文件

👎 缺点:

- 需要设置统一的前缀，以确保最新的功能对所有用户有效
- 与其他 CSS 库（如 SASS）相比，需要更多的代码量和模板。
- 任何样式表都会级联到组件和所有的子组件；没有范围。
- 必须使用一个可靠的命名规则，以确保样式不冲突。

## SASS / SCSS

什么是 SASS？SASS 是一个首字母缩写，代表。Syntactically Awesome Style Sheets。

SASS 为我们提供了一些强大的工具，其中许多是 plain CSS 样式表所不具备的。它包括变量、扩展样式和嵌套等功能。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-14-at-12.36.47-PM.png)

SASS 允许我们用两种不同的样式表编写样式，扩展名为.scss 和.sass。

SCSS 样式的写法与普通 CSS 相似，但 SASS 样式不要求我们在写样式规则时使用开括号和闭括号。

下面是一个带有一些嵌套样式的 SCSS 样式表的快速例子:

```css
/* styles.scss */

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

将此与写在 SASS 样式表中的相同代码进行比较:

```css
/* styles.sass */

nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

```

因为这不是普通的 CSS，所以需要从 SASS 编译成 plain CSS。为了在我们的 React 项目中做到这一点，你可以使用一个像 node-sass 这样的库。

如果你使用的是 Create React App 项目，要开始使用.scss 和.sass 文件，你可以用 npm 安装 node-sass:

```bash
npm install node-sass
```

这是我们用 SCSS 设计的推荐卡的样式:

```css
/* src/styles.scss */

$font-stack: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$text-color: #292b2c;

%font-basic {
  font-size: 1rem;
}

body {
  @extend %font-basic;
  font-family: $font-stack;
  color: $text-color;
  margin: 0;
  font-size: 1rem;
  font-weight: 1.5;
  line-height: 1.5;
  background-color: #fff;
}

/* unchanged rules skipped */

.testimonial-name {
  @extend %font-basic;
  margin-bottom: 0;
  font-weight: 600;

  span {
    font-weight: 400;
  }
}
```

这些样式为我们提供了以下功能：变量、扩展样式和嵌套样式。

**Variables（变量）**: 你可以通过编写变量来使用动态值，就像在 JavaScript 中一样，在开头用"$"来声明它们。

有两个变量可以在多个规则中使用。`$font-stack`, `$text-color`。

**Extending（扩展） / Inheritance（继承）**: 你可以通过扩展样式规则来增加它们。为了扩展规则，你可以创建你自己的选择器，它可以像一个变量一样被重复使用。你想扩展的规则的名字以`%`开头。

变量 `%font-basic` 被规则 `body` 和 `.testimonial-name` 所继承。

**Nesting（嵌套）**: 你可以不写以相同选择器开头的多个规则，而是嵌套它们。

在`.testimonial-name`中，我们使用一个嵌套的选择器来定位其中的`span`元素。

你可以找到一个使用 SCSS 的 React 应用程序的工作版本 [这里](https://codesandbox.io/s/react-and-scss-forked-2xeu0?file=/src/styles.scss)。

👍 优点:

- 包括许多动态的 CSS 功能，如扩展、嵌套和混合器
- 编写 CSS 样式时，可以比 plain CSS 少用很多模板

👎 缺点:

- 和普通 CSS 一样，样式是全局性的，不属于任何一个组件的范围。
- CSS 样式表开始包括一些 SASS 独有的功能，如 CSS 变量（不一定是缺点，但值得注意）。
- SASS/SCSS 通常需要设置，比如安装 Node 库`node-sass`。

## CSS Modules

CSS Modules 是对 CSS 或 SASS 这样的东西的另一种轻量替代。

CSS Modules 的好处是，它们可以与普通 CSS 或 SASS 一起使用。另外，如果你使用的是 Create React App，你就可以开始使用 CSS Modules，根本不需要设置。

下面是我们用 CSS 模块编写的应用程序:

```css
/* src/styles.module.css */

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  font-size: 1rem;
  font-weight: 1.5;
  line-height: 1.5;
  color: #292b2c;
  background-color: #fff;
}

/* styles skipped */

.testimonial-name span {
  font-weight: 400;
}
```

```js
import styles from './styles.module.css';

export default function App() {
  return (
    <section className={styles.testimonial}>
      <div className={styles['testimonial-wrapper']}>
        <img
          src="https://randomuser.me/api/portraits/women/48.jpg"
          alt="Tammy Stevens"
          className={styles['testimonial-avatar']}
        />
        <div>
          <p className={styles['testimonial-quote']}>
            This is one of the best developer blogs on the planet! I read it
            daily to improve my skills.
          </p>
        </div>
        <p className={styles['testimonial-name']}>
          Tammy Stevens
          <span> · Front End Developer</span>
        </p>
      </div>
    </section>
  );
}
```

我们的 CSS 文件在扩展名 `.css` 之前有 `.module` 这个名字。任何 CSS 模块文件都必须有 `module` 的名字，并以适当的扩展名结尾（如果我们使用的是 CSS 或 SASS/SCSS）。

如果我们看一下上面的代码，有趣的是，CSS modules 的写法与普通的 CSS 一样，但被导入和使用时就像它被创建为对象一样（内联样式）。

CSS modules 的好处是，它有助于避免我们与普通 CSS 的类冲突问题。我们所引用的属性变成了独特的类名，在我们的项目建立时不会相互冲突。

我们生成的 HTML 元素将看起来像这样:

```html
<p class="_styles__testimonial-name_309571057">
  Tammy Stevens
</p>
```

另外，CSS modules 解决了 CSS 中全局范围的问题。与我们普通的 CSS 样式表相比，使用模块向单个组件声明的 CSS 不会层叠到子组件。

因此，CSS modules 最好在 CSS 和 SASS 之上使用，以确保类不冲突，并编写只适用于一个或另一个组件的可预测样式。

👍 优点:

- 样式的范围是一个或另一个组件（与 CSS/SASS 不同）。
- 独特的、生成的类名确保没有样式冲突
- 可以在 CRA 项目中立即使用，无需设置
- 可与 SASS/CSS 一起使用

👎 缺点:

- 引用类名可能比较麻烦
- 使用 CSS 样式（如对象属性）可能是一个学习曲线比较高

## CSS-in-JS

类似于 React 允许我们用 JSX 将 HTML 写成 JavaScript，CSS-in-JS 也对 CSS 做了类似的事情。

CSS-in-JS 允许我们直接在我们组件的 javascript（.js）文件中编写 CSS 样式。

它不仅允许你编写 CSS 样式规则而不需要制作一个.css 文件，而且这些样式是针对单个组件的。

换句话说，你可以在没有任何意外的情况下添加、改变或删除 CSS。改变一个组件的样式不会影响你的应用程序的其他部分的样式。

CSS-in-JS 经常使用一种特殊类型的 JavaScript 函数，称为标签模板字面。这样做的好处是，我们仍然可以直接在 JS 中编写 plain CSS 样式规则

下面是一个流行的 CSS-in-JS 库的快速例子，Styled Components:

```js
import styled from "styled-components";

const Button = styled.button`
  color: limegreen;
  border: 2px solid limegreen;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-14-at-11.18.06-AM.png)

这里要注意几件事:

1. 你可以写普通的 CSS 样式，但可以包括嵌套样式和伪类（如 hover）。
2. 你可以将样式与任何有效的 HTML 元素相关联，比如上面的按钮元素（见`styled.button`）。
3. 你可以用这些关联的样式创建新的组件。请看 `Button` 是如何在我们的 App 组件中使用的。

既然这是一个组件，它可以传递 props 吗？是的！我们可以导出这个组件，并在我们喜欢的地方使用它。我们可以导出这个组件，并在我们的应用程序中的任何地方使用它，另外还可以通过 props 赋予它动态功能。

比方说，你想要一个倒置的 `Button` 的变体，有一个倒置的背景和文本。没问题。

将 `inverted` prop 传递给我们的第二个按钮，在 `Button` 中，你可以使用 `${}` 语法和内部函数访问传递给该组件的所有 props。

```js
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.inverted ? "limegreen" : "white"};
  color: ${props => props.inverted ? "white" : "limegreen"};
  border: 2px solid limegreen;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button inverted>Click me</Button>
    </div>
  );
}
```

在该函数的返回中，你可以选择`inverted` prop，并使用三元组来有条件地确定背景和文本的颜色。

下面是结果:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screen-Shot-2021-07-14-at-11.31.52-AM.png)

使用 CSS-in-JS 库来设计你的 React 应用程序还有很多好处（太多了，这里就不多说了），下面我将列出其中的一些。

请务必查看两个最受欢迎的 React 的 CSS-in-JS 库。Emotion 和 Styled Components。

使用 CSS-in-JS 库的一个缺点是给你的项目增加一个额外的库。然而，我认为这很容易值得你在为你的 React 应用程序设计样式时，与普通的 CSS 相比，你有更好的开发者体验。

👍 优点:

- CSS-in-JS 是可预测的--样式的范围是针对单个组件的
- 由于我们的 CSS 现在是 JS，我们可以通过 props 导出、重用甚至扩展我们的样式。
- CSS-in-JS 库通过为你编写的样式生成唯一的类名来确保没有样式冲突。
- 不需要关注你的类的命名规则，只需要编写样式即可

👎 缺点:

- 与普通的 CSS 不同，你需要安装一个或多个第三方的 JavaScript 库，这将增加你所建项目的重量

## 结语

请注意，我在这个比较中没有包括组件库。我想把重点主要放在自己编排样式的不同方式上。

请注意，选择一个有预制组件 style 的库，如 Material UI 或 Ant Design（仅举几例），对你的项目来说是一个完全有效的选择。

我希望这个指南能让你很好地理解如何为你的 React 应用程序设计样式，以及为你的下一个项目选择哪种方法。

## 想了解更多？加入 React Bootcamp

**[The React Bootcamp](http://bit.ly/join-react-bootcamp)** 将你应该知道的关于学习 React 的一切，捆绑在一个综合包中，包括视频、手册，以及特别奖金。

获得内幕信息，**100** 名开发者已经用它掌握了 React，找到了他们梦想的工作，并掌握了他们的未来:

[![The React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](http://bit.ly/join-react-bootcamp)  
_点击这里获得开课通知_
