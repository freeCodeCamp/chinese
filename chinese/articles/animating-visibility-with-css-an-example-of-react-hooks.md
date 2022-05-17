> -   原文地址：[How to build a reusable animation component using React Hooks](https://www.freecodecamp.org/news/animating-visibility-with-css-an-example-of-react-hooks/)
> -   原文作者：Christian Sepulveda
> -   译者：[zlv2s](https://github.com/zlv2s)
> -   校对者：

动画总是会取悦用户。就像你认为的那样，大量的文章也表明，开发者们更喜欢使用 React Hooks 。但我发现自己开始慢慢对 Hooks 产生厌倦了。

某个意外的发现让我对 React Hooks 有了新的认识，它不仅仅是一种新的开发方式。也许你已经从文章标题猜到是什么了，没错！就是动画。

我正在开发一个基于 React 的、使用网格布局组合卡片组件的应用，当删除某个卡片组件时，为它添加动画效果，看起来像下面一样：

但是，和图中效果相比较始终还是有点细微差别。在我的接下来的解决方案中，很好地利用了 React Hooks。

## 我们将要做什么

-   开始构建一个基本的项目骨架
-   为元素的消失添加动画效果，解决一些小问题
-   最终效果实现后，将其重构为一个可复用的动画组件
-   在顶部导航和侧边导航中使用该动画组件
-   ...（文末需要阅读）

如果你没耐心，这里有整个项目的仓库[地址](https://github.com/csepulv/animated-visibility)，每一步都有相应的标记（链接地址和描述参考 README 文件）

## 骨架

我使用 [create-react-app](https://facebook.github.io/create-react-app/) 创建了一个简单的应用程序，它是一个简单的卡片网格结构，每个单独卡片可以被隐藏。

实现代码很简单，效果也很无趣。当用户点击眼睛图标时，我们改变卡片的 `display` 属性。

```plain
function Box({ word }) {
  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);
  function hideMe() {
    setVisible(false);
  }
  let style = { borderColor: color, backgroundColor: color };
  if (!visible) style.display = "none";
  return (
    <div className="box" style={style}>
      {" "}
      <div className="center">{word}</div>{" "}
      <button className="button bottom-corner" onClick={hideMe}>
        {" "}
        <i className="center far fa-eye fa-lg" />{" "}
      </button>{" "}
    </div>
  );
}
```

（上面的代码中使用到了 React Hooks，但这不是 Hooks 最有趣的用途）

## 添加动画

我没有构建自己的动画库，而是使用了一个像 [animate.css](https://daneden.github.io/animate.css/) 这样的动画库。[react-animated-css](https://github.com/digital-flowers/react-animated-css) 是一个很好的库，它为 animate.css 提供了一个包装器。

安装 react-animated-css

```shell
npm install --save react-animated-css
```

在 `index.html` 中添加 animate.css

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
/>
```

在上面的 `Box` 组件中，将渲染结果改为

```plain
return (
  <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={visible}>
    <div className="box" style={style}>
      <div className="center">{word}</div>
      <button className="button bottom-corner" onClick={hideMe}>
        <i className="center far fa-eye fa-lg" />
      </button>
    </div>
  </Animated>
);
```

## 不完全是我们想要的东西

animate.css 会为 `opacity` 和其他 css 属性添加动画；但不能在 `display` 属性上添加 css 过度效果，所以将卡片隐藏后，它始终在文档流中占据着位置。

如果你 [Google](https://www.google.com/search?q=animate+css+display+none&oq=animate+css+display) 一下，有些解决方案是建议使用定时器在动画结束时设置 `display: none`。

所以我们可以添加以下代码。

```plain
function Box({ word }) {
  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  function hideMe() {
    setFading(true);
    setTimeout(() => setVisible(false), 650);
  }

  let style = { borderColor: color, backgroundColor: color };

  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={!fading}
      style={visible ? null : { display: "none" }}
    >
      <div className="box" style={style}>
        <div className="center">{word}</div>
        <button className="button bottom-corner" onClick={hideMe}>
          <i className="center far fa-eye fa-lg" />
        </button>
      </div>
    </Animated>
  );
}
```

(注意：默认的动画时长是 1000ms，我使用的是 650ms，为了在设置 `display` 属性之前 减少卡顿/暂停现象，这只是个人喜好)

这样我们就能得到想要的效果。

## 构建一个可复用的组件

现在到此为止，但目前有两个问题（对于我来说）

1. 我不想复制/粘贴 `Animated` 代码块，样式，功能，来重复实现相同效果。
2. `Box` 组件混合了不同类型的逻辑，例如：违反了 [关注点分离](https://en.wikipedia.org/wiki/Separation_of_concerns)的概念。准确的说，`Box` 的主要功能是渲染卡片内容，但是动画细节混入了。

## 类组件

我们可以创建一个传统的 React 类组件来管理和动画相关的状态：切换隐藏/显示，设置 `display` 属性的超时时间

```plain
class AnimatedVisibility extends Component {
  constructor(props) {
    super(props);
    this.state = { noDisplay: false, visible: this.props.visible };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!nextProps.visible) {
      this.setState({ visible: false });
      setTimeout(() => this.setState({ noDisplay: true }), 650);
    }
  }

  render() {
    return (
      <Animated
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={this.state.visible}
        style={this.state.noDisplay ? { display: "none" } : null}
      >
        {this.props.children}
      </Animated>
    );
  }
}
```

然后使用它

```plain
function Box({ word }) {
  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);

  function hideMe() {
    setVisible(false);
  }

  let style = { borderColor: color, backgroundColor: color };

  return (
    <AnimatedVisibility visible={visible}>
      <div className="box" style={style}>
        <div className="center">{word}</div>
        <button className="button bottom-corner" onClick={hideMe}>
          <i className="center far fa-eye fa-lg" />
        </button>
      </div>
    </AnimatedVisibility>
  );
}
```

这就实现了一个可复用的组件，但是还有点复杂，我们还可以优化一下。

## React Hooks and useEffect

[React Hooks](https://reactjs.org/docs/hooks-intro.html) 是 React 16.8 中的新特性，它们为 React 组件的生命周期和状态管理提供了一种更简单的方法

[useEffect](https://reactjs.org/docs/hooks-effect.html) 钩子为 `componentWillReceiveProps` 的使用提供了一种优雅的替代方案。它的代码更简洁，我们还可以使用函数式组件。

```plain
function AnimatedVisibility({ visible, children }) {
  const [noDisplay, setNoDisplay] = useState(!visible);
  useEffect(() => {
    if (!visible) setTimeout(() => setNoDisplay(true), 650);
    else setNoDisplay(false);
  }, [visible]);

  const style = noDisplay ? { display: "none" } : null;
  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={visible}
      style={style}
    >
      {children}
    </Animated>
  );
}
```

`useEffect` 钩子还是有点不一样，它的主要目的是副作用：改变状态，调用异步函数等等。在我们的例子中，它根据之前的 `visible` 的值修改了内部的 `noDisplay` 布尔值。

将 `visible` 作为依赖添加到 `useEffect` 的依赖数组中，当 `visible` 的值发生变化时， `useEffect` 钩子才会被调用。

和类组件的杂乱相比较，我认为 `useEffect` 是一种更好的解决方案。

## 组件复用：Sidebars 和 Navbars

大家都喜欢 Sidebar 和 Navbar，我们来添加一个吧。

```plain
function ToggleButton({ label, isOpen, onClick }) {
  const icon = isOpen ? (
    <i className="fas fa-toggle-off fa-lg" />
  ) : (
    <i className="fas fa-toggle-on fa-lg" />
  );
  return (
    <button className="toggle" onClick={onClick}>
      {label} {icon}
    </button>
  );
}

function Navbar({ open }) {
  return (
    <AnimatedVisibility
      visible={open}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      animationInDuration={300}
      animationOutDuration={600}
    >
      <nav className="bar nav">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </nav>
    </AnimatedVisibility>
  );
}

function Sidebar({ open }) {
  return (
    <AnimatedVisibility
      visible={open}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      animationInDuration={500}
      animationOutDuration={600}
      className="on-top"
    >
      <div className="sidebar">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </AnimatedVisibility>
  );
}

function App() {
  const [navIsOpen, setNavOpen] = useState(false);
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navIsOpen);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarIsOpen);
  }

  return (
    <Fragment>
      <main className="main">
        <header className="bar header">
          <ToggleButton
            label="Sidebar"
            isOpen={sidebarIsOpen}
            onClick={toggleSidebar}
          />
          <ToggleButton label="Navbar" isOpen={navIsOpen} onClick={toggleNav} />
        </header>
        <Navbar open={navIsOpen} />
        <Boxes />
      </main>
      <Sidebar open={sidebarIsOpen} />
    </Fragment>
  );
}
```

## 还没结束

到这里我们就可以停下了，但就像我之前提到的关注点分离，我更倾向于避免在 `Box`、`Sidebar` 和 `Navbar` 的 render 方法中混合 `AnimatedVisibility` 组件（代码有点重复）。

我们可以创建一个高阶组件（HOC）。（实际上，我写了一篇关于动画和 HOC 的文章，[如何在 React 中创建动态微交互](https://medium.com/free-code-camp/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8)）由于状态管理的原因， HOCs 通常会涉及到类组件。

但是使用了 React Hooks，我们只需要组合 HOC 就可以了（函数式编程概念）

```js
function AnimatedVisibility({
  visible,
  children,
  animationOutDuration,
  disappearOffset,
  ...rest
})
// ... same as before
}


function makeAnimated(
  Component,
  animationIn,
  animationOut,
  animationInDuration,
  animationOutDuration,
  disappearOffset
) {
  return function({ open, className, ...props }) {
    return (
      <AnimatedVisibility
        visible={open}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInDuration={animationInDuration}
        animationOutDuration={animationOutDuration}
        disappearOffset={disappearOffset}
        className={className}
      >
        <Component {...props} />
      </AnimatedVisibility>
    );
  };
}

export function makeAnimationSlideLeft(Component) {
  return makeAnimated(Component, "slideInLeft", "slideOutLeft", 400, 500, 200);
}

export function makeAnimationSlideUpDown(Component) {
  return makeAnimated(Component, "slideInDown", "slideOutUp", 400, 500, 200);
}

export default AnimatedVisibility
```

然后在 App.js 中使用这些基于函数式的 HOCs

```plain
function Navbar() {
  return (
    <nav className="bar nav">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

const AnimatedSidebar = makeAnimationSlideLeft(Sidebar);
const AnimatedNavbar = makeAnimationSlideUpDown(Navbar);

function App() {
  const [navIsOpen, setNavOpen] = useState(false);
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navIsOpen);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarIsOpen);
  }

  return (
    <Fragment>
      <main className="main">
        <header className="bar header">
          <ToggleButton
            label="Sidebar"
            isOpen={sidebarIsOpen}
            onClick={toggleSidebar}
          />
          <ToggleButton label="Navbar" isOpen={navIsOpen} onClick={toggleNav} />
        </header>
          <AnimatedNavbar open={navIsOpen} />
        <Boxes />
      </main>
      <AnimatedSidebar open={sidebarIsOpen} className="on-top"/>
    </Fragment>
  );
}
```

## 接下来呢

对于简单的动画，可以使用我所提到的方法。如果比较复杂，我会使用像 [react-motion](https://github.com/chenglou/react-motion) 这样的库。

不仅仅是动画，React Hooks 让我们有机会编写可读性高、更简洁的代码。但是，我们需要在思维上有个调整，像 useEffect 这样的 Hooks 不完全是 React 生命周期函数的替代品，你需要深入学习和研究。

我建议看看像 [useHooks.com](https://usehooks.com/) 这样的网站，还有像 [react-use](https://github.com/streamich/react-use) 这样的库（不同钩子用例的集合）。
