> -  原文地址：[React Hooks for Beginners – Learn to Use the useState Hook in 10 Minutes](https://www.freecodecamp.org/news/learn-react-usestate-hook-in-10-minutes/)
> -  原文作者：[Eduardo Vedes](https://www.freecodecamp.org/news/author/evedes/)
> -  译者：dake0913
> -  校对者：

![React Hooks for Beginners – Learn to Use the useState Hook in 10 Minutes](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/philipp-katzenberger-jVx8JaO2Ddc-unsplash.jpg)

大家好🌈我很久没有写关于在React中处理状态的文章了。上一次是在[这篇文章](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/)中，四年前，它似乎帮助了很多人。

我收到了大量的观看和惊人的反馈，所以非常感谢——你们真的很棒!🎸

从那以后已经过去很久了。hook从v16.8版本(2019年)开始在React中出现，在React中使用state时有很多需要跟上的地方。

您正在学习state并想通过**useState** hook成为专业人员吗?

太好了，你来对地方了!拿上一杯咖啡(或茶)，系好安全带，我们出发吧!

顺便说一下——如果您正在寻找如何使用setState(在类组件中)，那么我建议您查看我以前的文章
 [“如何在10分钟内成为使用React setState()的专家”](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/)。

## 什么是React Hook?

hook(钩子）是一种特殊的函数，它允许您“钩入”各种React特性。假设一个函数返回一个有两个值的数组:

-   **第一个值:** 一个带有状态state的变量。
-   **第二个值:** 一个带有处理程序handle(改变当前状态的函数)的变量。

就是这样，很简单。 🥞

记住，在JavaScript中 **"值是函数，函数是值"**。 我是在2017年从 [**MPJ**](https://www.youtube.com/c/funfunfunction)学到这一点的，MPJ是我最喜欢的开发者和youtuber之一。谢谢MPJ所做的一切!！

如果这让你有点困惑，这里有一个例子:

![01](https://www.freecodecamp.org/news/content/images/2022/06/01.png)

值就是函数，函数就是值

Let's see what's happening here:
让我们看看这里发生了什么:

-   在**a**中，存储一个数字。我的意思是，将值**1**(这是一个数字)赋给一个名为**a**的变量。
-   在**b**中，存储计算表达式的结果(值)。
-   在**c**中存储一个函数。您存储了一个未执行的函数，它被存储为一个值，随时可以执行。
-   在**d**中，我们将**c**的计算结果赋值。

有道理吗?你明白我的意思了吗?是的，**函数就是值，值就是函数**!这就是你现在需要知道的。

**useState**,特别地,它允许您向函数组件(声明为函数而不是类的组件)添加React状态。

实际上，状态保存在钩子内部，但是可以从“调用”钩子的组件访问。

## React Hooks的规则

除了hook是JavaScript函数这一事实之外，在使用它们时还需要遵循一些规则:

### 只在顶层调用钩子

不要在循环、条件或嵌套函数中调用钩子。总是在React函数(组件)的顶层使用钩子，在任何早期返回之前。

这背后的原因是，每次组件呈现时，必须以相同的顺序调用钩子。这使得React能够正确地保存多个useState和useEffect调用之间的钩子状态。

#### 只有React函数的调用钩子

这意味着您可以从React函数(组件)或自定义钩子调用钩子，但不能从常规JavaScript函数调用。

这里有一个有用的插件[here](https://www.npmjs.com/package/eslint-plugin-react-hooks),它强制执行钩子的规则。这是一个非常有用的方法，所以一定要尝试一下。

## useState hook的结构

要使用useState钩子，您需要知道一些事情。

💡你可以查看下面的图来更好地理解我将在这里解释的内容。

1. 您必须从React库导入它。
2.您必须在React组件中调用它

```javascript
const [state, setState] = useState(initialValue)
```

不确定你是否理解了它的解构，所以对于那些第一眼没看出来的人:

我尝试这样做:

```javascript
const array = useState(initialValue)
```

然后我可以使用状态，在位置0内，作为数组[0]，用处理函数setState，在位置1内，作为数组\[1\]。

解构数组的声明性更强，因为我们知道它的第一个和第二个位置值，我们知道它们对应于状态值和用于更改它的处理程序。

```javascript
const [first, second] = useState(initialValue)
```

是的，我们做到了。但我们可以把任何东西称为first和second。唯一的规则是这些变量对应于**useState**函数(hook)返回的数组的第一个和第二个位置。

```javascript
const [state, setState] = useState(initialValue)
const [counter, setCounter] = useState(initialCount)
const [something, setSomething] = useState(initialSomething)
```

如果您不熟悉解构赋值语法，可以暂停阅读，偷偷了解一下[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 或[阅读本教程](https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/).

去吧——我会等的! (_Edo 喝了一小口_ ☕)

3\.  然后可以自由呈现状态，或者调用setState来更新状态值。

这是一个最简单的全功能示例:

![carbon](https://www.freecodecamp.org/news/content/images/2022/06/carbon.png)

useState hook的结构

## 何时使用 useState Hook

为了理解何时使用这个钩子hook，我们需要从学习何时需要状态state开始。

乍一看，我们认为当我们需要一个随时间变化的变量时，我们需要保持它in state。但在大多数情况下，事实并非如此。我的意思是，如果你的变量可以从其他数据推导出来，那么你就不需要状态了。

### State 案例 1:

主题颜色, 根据时间变暗或变亮的，可以从系统数据中推导出来。、

我们可以简单地从JS的date函数中获得时间(日期)。所以我们在这里不需要状态，对吧?这是一个可以用表达式或函数声明的常量const。

### State 案例 2:

一个模式开关 (显示/隐藏模式).

模式切换可以为true或false，当用户单击按钮时触发。因此，在这种情况下，我们真的需要状态，因为我们不能推导这类信息-它只取决于“何时和是否”用户触发事件。

要注意这个区别——什么可以派生推导，什么取决于用户。

当需要存储来自用户的输入时，您将需要使用 **useState** 钩子。

💡作为经验法则，您应该只使用状态state来保存这类信息——需要用户输入数据或触发事件。

另一个常用的例子是表单数据。几乎每个应用程序或网站都需要从用户那里收集信息。要做到这一点，通常(或强制)需要有一个表格。

表单数据必须以状态存储，至少在将其持久化到数据库之前是这样。但它也可以从数据库中检索，并使其再次可编辑。

很好，我们继续。

## 如何在React中使用多个状态变量

如果我们需要处理多个状态，最好和推荐的第一种方法是分别处理它们，像这样:

![carbon--1-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--1-.png)

猫狗计数器(处理多个状态变量)

这样做并没有什么错，尽管它看起来很原始。 当我们继续使用JavaScript原语(在本例中是数字)时，这是一种很好的线性方法。

你也可以在一个对象中混合状态:

![carbon--2-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--2-.png)

这个例子变得有点复杂。我们已经初始化了一个对象，而不是一个原语值。当我们调用setPets时，我们必须意识到我们需要展开现有的pets对象，然后添加更改，否则我们将丢失它。

对于旧的setState API，这不是强制性的 – 它会理解您想要更新state object的key。但现在它不是了，我喜欢它。现在它更具声明性，是JavaScript中的基本概念。

如果您不熟悉spread语法，请查看或阅读这个有用的[教程](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or [read this helpful tutorial](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/)。

## 异步状态

注意，改变/突变状态是一个异步操作。

让我们来看一个证据:

![carbon--3-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--3-.png)

状态是异步的(它是有延迟的批处理和更新)

所以，我更新了我们最初的狗的例子。这次我创建了一个**handleDogsCount**函数来向您显示它。

在handleDogsCount内部，我用新值调用 **setDogs**。

如果我需要立即为另一个操作使用状态值，会发生什么?

对，状态还没更新。实现即时操作的最佳方法是使用传递给handleDogsCount函数的值，并且——暂时忘记狗的状态值——事先知道该值没有及时更新(这很棘手，但事实就是如此)。


## 如何以函数的方式突变状态

好了，现在我们知道状态不会立即改变。还有一个相关的问题。如果你可以每秒点击More按钮1M次，会发生什么?

可能，在点击1M的最后，计数器将是999\_998(或更少)，而不是预期的 1\_000\_000。

为了避免这种情况发生，我们可以用函数的方式设置状态。我们将获取前一个状态的值，以便React能够正确地批处理所有请求并线性更新状态。这样我们就不会在中间丢失信息。

要做到这一点，你可以简单地做以下几点:

![carbon--4-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--4-.png)

以函数的方式改变状态

好的,很酷。现在我们确信React在处理我们的1M请求以改变状态时不会错过任何东西。

我们不是抓取dogs变量来添加或减去1，而是依赖于暴露在useState setState handle内部的previousState(在本例中是setDogs函数)。

注意，对象和数组是通过引用进行比较的，因此复杂的状态应该在其他钩子(如**useEffect**)的依赖项数组中得到适当的控制。我们将在后面的另一篇文章中讨论它!

如果你是JavaScript新手，让我给你一个关于我所说的内容的剧透:

![carbon--5-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--5-.png)

引用类型比较

正如你所看到的，**c**并不严格等于**d**。是的，去试试吧!JavaScript比较复杂对象(所有非[基本类型](https://developer.mozilla.org/en-US/docs/Glossary/Primitive))的方法是引用，而不是值。

如果我将它字符串化，就意味着我在比较字符串。因为它们都是基本类型，所以它们严格相等(按值比较)。

## 如何将状态初始化为函数

如果需要使用庞大的计算量来初始化状态，那么最好使用函数而不是值来初始化它。(译者注：**expensiveComputation()**最小化局部变量作用域,保持方法小而集中。）

```javascript
const [ dogs, setDogs] = useState(() => expensiveComputation())
```

这意味着我们在延迟初始化变量。初始值只会在初始渲染时赋值(如果是函数的话)。

In subsequent renders (due to change of state in the component or a parent component), the argument of the useState hook will be ignored and the current value will be retrieved.在随后的渲染中(由于组件或父组件的状态更改)，useState钩子的参数将被忽略，并将检索当前值。

## 总结

看来我们的旅程已经走到了尽头。

您已经了解了什么是钩子、钩子的规则、useState如何工作、它的结构以及如何处理多个状态。

您还了解了一些陷阱(比如处理状态对象，或者该状态是异步的)，以及一些改进性能的技巧，比如将状态初始化为函数，以避免不断地计算该计算。

希望您喜欢这篇关于**useState**钩子或简单的"state hook"的文章。

## 最后但同样重要的

我是 [Edo](https://eduardovedes.com/)。我是freeCodeCamp的倡导者，喜欢帮助人们转行从事软件工程。

如果你正在转行，或者正在考虑转行，读一点在freeCodeCamp出版物上发表的我的[故事](https://www.freecodecamp.org/news/from-civil-engineer-to-web-developer-with-freecodecamp/)可能会激励你。

你可能也对 ["如何在6个月内成为一名初级软件工程师"](https://www.freecodecamp.org/news/how-to-become-a-junior-software-engineer-in-6-months/)感兴趣。

如果你喜欢这篇文章，请在[Twitter](https://twitter.com/eduardovedes) 上关注我，联系我，这样我们就可以聊天了!

谢谢大家🌈，你太棒了!

Edo

### 更多关于 React Hooks...

1.  [React Documentation](https://reactjs.org/docs/hooks-state.html)
