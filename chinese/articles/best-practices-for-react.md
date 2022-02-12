> -  原文地址：[React Best Practices – Tips for Writing Better React Code in 2022](https://www.freecodecamp.org/news/best-practices-for-react/)
> -  原文作者：[Jean-Marc Möckel](https://www.freecodecamp.org/news/author/jeanmarcmoeckel/)
> -  译者：luojiyin
> -  校对者：

![React Best Practices – Tips for Writing Better React Code in 2022](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/React-Best-Practices-Thumbnail.png)

两年前，我开始学习和使用React。今天，我仍然在我的日常工作中使用它，作为一个软件开发人员和我自己的业余项目。

在这段时间里，我遇到了很多典型的问题。所以我四处搜寻，找到了一些最佳实践，并将其整合到我的工作流程中，我想出了一些让我的生活或我的团队成员的生活更轻松的东西。

一路走来，我也遇到了一些挑战，当时我没有以最好的方式来解决，我希望将来能以更好的方式来处理这些问题。

这就是我写这个指南的原因。我认为它就像两年前我开始工作时给自己的技巧收集。

## 目录:

-   [React开发者面临的三大挑战](#three-major-challenges-react-developers-face)
-   [学习React的构建模块](#learn-the-building-blocks-of-react)
-   [学习如何构建简洁、性能良好、可维护的React组件](#learn-how-to-build-clean-performant-and-maintainable-react-components)
-   [帮助你写出更好的React代码的技巧 – The Cherries on Top](#tips-to-help-you-write-better-react-code-the-cherries-on-top)
-   [结束语](#final-words)

首先，你会了解到每个React开发者必须面对的 **三个主要挑战** ，这很重要，因为当你意识到潜在的挑战时，你会更深入地理解这些最佳实践背后的原因。从一开始就有这种心态，也有助于你在设计你的组件或组织你的项目。

在这第一个重要步骤之后，我将向你介绍**的三个最佳实践**。它们是理论和实践技巧的混合体，带有代码实例。我尽量减少 _hello world_ 的问题，并拿出我在 _真实世界_ 看到的代码。

## Three Major Challenges React Developers Face

![christian-erfurt-sxQz2VfoFBE-unsplash](https://www.freecodecamp.org/news/content/images/2022/01/christian-erfurt-sxQz2VfoFBE-unsplash.jpg)

在我日常使用React的两年时间里，我认识到React开发者在构建他们的应用时面临的三大挑战。忽视这些挑战可能会带来困难，损害你的应用程序的发展。

因此，在协调你的应用程序时要记住这些挑战,这将节省你的时间和精力。

### ⚙️ 可维护性

这与 _可重用性_ 是相辅相成的。一开始，当应用程序和组件非常轻巧时，它们很容易维护。但是，一旦需求开始增长，组件就会变得非常复杂，因此可维护性就会降低。

我经常看到一个组件有很多不同的情况，每个都代表不同的结果。JSX中充斥着条件渲染（三元运算符和简单的`&&`运算符），`classnames`被有条件地应用，或者组件使用巨大的`switch`语句。有许多可能的`props`和`state`值，每个都负责不同的结果。

在我看来，这些技术本身并没有错。但我认为每个人都应该培养一种感觉，知道什么时候一个组件开始变得不那么可维护，什么时候这些技术被过度使用。我们将在文章的后面学习如何更好地控制这个问题。

问题是（我也曾犯过这样的错误），一个组件的复杂性和不同结果越多（polymorphism），它就越难维护。

说实话，其根本原因往往是懒惰，没有足够的经验，或时间压力，无法正确地重构一个组件，以使其更可维护和更简洁。

我看到的另一个关键因素是没有或很少进行测试。我知道，测试并不是很多开发人员喜欢的工作，但从长远来看，它确实可以帮助你。测试本身不会是这篇文章的一个主要话题，所以请留意我的另一篇关于测试的博文。

### 🧠 对React的深刻理解

React开发者出现问题的另一个根本原因是对React在工作底层原理缺乏基本了解。我也遇到过这种情况。

我见过很多人在没有坚实基础的情况下过快地进入中级或高级概念。但这并不仅仅是React的问题。这也是编程中的一个普遍问题。

对React没有扎实的了解也会给你这个开发者带来问题。我记得当我想使用不同的组件生命周期，但不知道如何真正使用它们时，我很头疼。所以我不得不退回去，深入了解这个话题。

因为我认为这是最重要的事情之一，所以我在下面这篇博文中专门用了一整章来介绍。

### 📈 可扩展性

这个挑战与 _可维护性_ 并驾齐驱。它不仅是React所特有的，而且普遍适用于软件中。

我已经了解到，制作优秀的软件不仅仅是用户体验、干净的代码模式或聪明的架构，例如。对我来说，一个软件的质量也随着它的扩展能力而上升或下降。

对我来说，很多东西都能提高软件的可扩展性。在这篇文章中，你会学到我最重要的技巧。

我认为，当你在调整你的组件和组织你的项目结构时，把 _可维护性_ 和 _可扩展性_ 放在心上，你就不太可能以需要重大重构的混乱的源代码。

# 如何学习React

好了，现在让我们深入了解学习React的一些最佳实践。

## Learn the Building Blocks of React

![brett-jordan-Lzfxzip-pNI-unsplash](https://www.freecodecamp.org/news/content/images/2022/01/brett-jordan-Lzfxzip-pNI-unsplash.jpg)

正如我们在上面简单讨论的那样，building blocks不仅与学习React有关，而且与其他技术或编程语言也有关。你不能在浮沙上建造一座摩天大楼，并期望它是牢固的。

这对你们中的许多人来说可能是显而易见的，但我见过一些开发者在没有真正理解基础知识的情况下就跳进React的中级或高级概念。

这对一般的Javascript来说也是如此。我非常相信，如果你没有坚实的Vanilla Javascript基础，学习React是没有意义的。

所以，如果这听起来很熟悉，而且你正在考虑学习React，但对Vanilla Javascript已经感觉不是很舒服，那就先多花些时间加强Javascript。这将为你在未来节省大量的头痛和时间。

如果你想回顾一下，这里有一份关于[学习React之前你需要知道的核心JavaScript概念](https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/) 

但仅仅了解基础知识对我来说是不够的。知道React的底层是如何工作的，这有点强制性。如果你想成为一个优秀的React开发者（我想你是这样想的，因为你正在阅读这篇文章），你必须了解你所使用的工具。这对作为开发者的你和你的客户来说都是有益的。

一方面，它可以为你节省大量的时间来调试你的应用程序。另一方面，它使你更有效率，因为你不必一次又一次地来重新学习基本知识。你基本上知道你在说什么。

当然，你不可能知道所有的东西，你不应该在这个话题上给自己压力。当你通过实际问题和建立更多项目时，你会学到越来越多的东西。但是，有了良好扎实的知识，你可以事半功倍。

好的，这很有意义。但你可能想知道，为了在React方面有一个坚实的基础，你到底需要知道什么？

作为一个最低要求，你应该了解所有的主题。 在官方的React Docs里面的[**主要概念** 章节](https://reactjs.org/docs/hello-world.html)。

另一个 [你应该非常熟悉的章节是关于 **Hooks**](https://reactjs.org/docs/hooks-intro.html)，因为它们已经成为一种惯例，并且到处都在使用，特别是在第三方React包中。

当然，有一些你可能更经常使用，如`useState`和`useEffect`，但了解其他的如`useMemo`、`useCallback`或`useRef`也是必不可少的。

还有[另一章叫做**高级指南**](https://reactjs.org/docs/accessibility.html)，我不认为这是开始时的必修课，但我强烈建议你在React旅程中掌握这些概念。

一如既往，当你已经有一些实践经验时，往往更容易理解高级主题。但你在早期了解的那些东西越多越好。

当然，你不应该把自己限制在只遵循React文档上。通过涵盖这些构件的在线课程，观看教程或阅读其他博客文章也是打下坚实基础的一部分。所以，测试一下什么对你最有效。

如果我不得不选择最重要的概念来了解，我会建议这些:

-   什么是 "state"?
-   类(class)和功能部件(functional components)的起伏变化
-   什么是组件重新渲染，它们是如何工作的?
-   如何触发重新渲染
-   不同组件的生命周期以及如何交互
-   虚拟DOM
-   CSR（客户端渲染）和SSR（服务器端渲染）在一般情况下和React中的好处
-   受控组件 VS 非受控组件
-   State 提升
-   至少一种全局状态管理技术（Context API, Redux/Toolkit, Recoil）。
-   组件模式（特别是如何选择正确的模式）。

## Learn How to Build Clean, Performant and Maintainable React Components

![wesley-tingey-mvLyHPRGLCs-unsplash](https://www.freecodecamp.org/news/content/images/2022/01/wesley-tingey-mvLyHPRGLCs-unsplash.jpg)

我知道--这是每个程序员的梦想（或者至少我希望是这样）。而对我来说，这种能力将一个好的程序员和一个伟大的程序员分开。有趣的是，它从未真正完成，因为总有一些东西需要学习和改进。

遵循这些最佳实践不仅会让你更轻松，也会让你的队友更轻松。我见过一些开发团队创建了一个 _代码风格指南_，他们在其中定义了关于他们如何编写代码的重要基石。如果你问我，这是一个非常聪明的想法。

他们中的一些人是:

-   使用功能组件（如箭头函数）
-   不要使用内联风格(inline-styles)
-   保持适当的导入结构(首先是第三方导入-->下面是内部导入)
-   在提交之前格式化你的代码

以此类推。

当然，你可以把它说得很详细。这取决于你的团队。我个人不喜欢非常详细的风格指南，因为我认为作为一个熟练的开发者，你应该有某种自由，不应该受到太多的限制。

但一般来说，代码风格指南是概述和保持最佳实践的好方法，并确保你的团队在一些重要领域有相同的看法。我认为这能极大地提高团队合作和产出。

让我们来看看这些最佳实践到底是什么，以创建干净、性能好、可维护的组件。让自己舒服一点，拿上东西做个笔记，然后享受吧

### 📁 创建一个良好的文件夹结构

在你的React应用程序中组织你的文件和文件夹对于可维护性和可扩展性是必须的。

一个**好的**文件夹结构取决于你的应用程序的大小和你的团队。所以，这没有一个普遍的答案。特别是因为这是一个非常有讨论性的话题，也取决于个人的喜好。

但随着时间的推移，针对不同规模的应用程序的一些最佳实践已经发展起来。

[这篇很好的博文](https://www.robinwieruch.de/react-folder-structure/)介绍了五种不同的应用程序规模，并介绍了如何组织你的文件和文件夹的好想法。在计划或开始你的应用程序时，考虑到这一点，从长远来看会有很大的不同。

不要过度设计，但要尽力保持一个适当的结构，最适合你目前的应用和你的团队规模。

### 👇 保持结构化的导入顺序

如果你已经有了一些React的经验，你可能已经看到了有很多导入语句的臃肿文件。它们可能还混杂着来自第三方包的外部导入和内部导入，如其他组件、util函数、styles等等。

真实世界的例子(截取部分):

```javascript
import React, { useState, useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import DialogActions from "@material-ui/core/DialogActions"
import { getServiceURL } from '../../utils/getServiceURL";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../components/Paragprah";
import { sectionTitleEnum } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import axios from 'axios';
import { DatePicker } from "@material-ui/pickers";
import { Formik } from "formik";
import CustomButton from "../components/CustomButton";
...
```

实际上，这些导入语句跨越了55行。

你可能认识到这里的问题。很难区分什么是所有的第三方和本地（内部）导入。它们没有被分组，似乎到处都是。

更好的版本:

```javascript
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { DatePicker } from "@material-ui/pickers";

import { getServiceURL } from '../../utils/getServiceURL";
import { sectionTitleEnum } from "../../constants";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
...
```

结构更清晰了，而且非常容易区分外部和内部导入的位置。当然，如果你使用更多的命名导入，你可以对它进行更多的优化（如果有可能的话！:) ）。这样你就可以在一行中导入所有来自 material-ui 的组件。

我见过其他开发者喜欢把导入结构分成三个不同的部分:

内置的（如'react'）-->外部（第三方node模块）-->内部。

你可以每次都自己管理，或者让**linter**做这个工作。[这里是](https://dev.to/otamnitram/sorting-your-imports-correctly-in-react-213m)一篇关于如何为你的React应用配置linter以保持正确的导入结构的好文章。

### 📔 学习不同的组件模式

为了确保你不会以不可维护和不可扩展的意大利面条代码而告终，随着你在React中的经验增加，学习不同的组件模式是必不可少的。

但这并不是全部。了解不同的模式是一个良好的基础。但关于它最重要的一点是，你知道**什么时候**使用哪种模式来解决你的问题。

每个模式都有一定的作用。例如，**复合组件模式**避免了不必要的许多组件级别的 _prop-drilling_。所以，下一次你开始做通过五个组件层来传递道具，最后到达对道具感兴趣的组件时，你就开始以不同的方式来协调这些组件。

这里有一个关于`props-drilling`的简短的附带说明，因为我过去曾有过许多关于它的讨论。外面有很多关于它是否不好的意见。就我而言，如果我开始通过两个以上的组件级别来传递`props`，我喜欢尝试思考不同的方式/模式。

这个事实让你作为一个开发者更有效率，让你写的组件更可维护或可扩展。在你的工具包中拥有这些模式，也让你从其他React开发者中脱颖而出。我非常鼓励你做你自己的研究，但 [这](https://www.udemy.com/course/the-complete-guide-to-advanced-react-patterns/)Udemy课程对我帮助非常大。

### 🔒用linter并遵守其规则

linter不仅可以帮助你保持你的依赖关系的可区分的导入顺序。它可以帮助你写出更好的代码。

当你使用_create-react-app_时，已经配置了ESLint，但你也可以完全自己设置，或者扩展预先配置的规则集的规则。

linter观察你正在编写的JavaScript代码，并提醒你在执行代码时更有可能发现的错误。我花了一段时间才真正重视linter的使用，但今天我无法想象没有它怎么工作。

使用linter是一回事，但遵守其规则是另一回事。当然，你可以禁用它。无论是对某一行代码还是对整个文件本身。但根据我的经验，这是很罕见的。

另一个很大的好处是，你也可以调整样式检查。这对团队来说特别有帮助。一旦你接受了如何写你的代码以及它应该如何格式化的某些约定，你就可以很容易地将ESLint与JSPrettify这样的东西结合起来。

### 🧪 测试你的代码

我知道，作为一个开发者，测试可能不是你最喜欢的任务。我曾经也是这样。开始时，它似乎是一项不必要的、令人不安的任务。这在短期内可能是真的。但从长远来看--以及当应用程序增长时--它是至关重要的。

对我来说，测试已经成为一种实践，确保我更专业地完成工作，并提供更高质量的软件。

基本上，由人进行手动测试没有错，不应该完全避免。但是，想象一下，你正在集成一个新的功能，并想确保没有任何问题。这可能是一个耗时的任务，而且容易出现人为错误。

在你写测试的时候，你已经在思考如何组织你的代码，以便通过这个测试。对我来说，这总是很有帮助的，因为我认识到可能会出现哪些陷阱，而且我必须要注意这些陷阱。

你也不是直接跳着写你的代码（我一点也不建议这样做），而是先思考目标。

比如说 "那个特定的组件应该做什么？可能会出现哪些重要的边缘情况，我必须要测试？我可以让这个组件更加纯粹，只为一个目的服务吗？ ..."

对你要写的代码有一个愿景，也有助于你保持对服务于这个愿景的敏锐关注。 

测试也可以作为一种文档，因为对于一个刚接触代码库的新开发者来说，了解软件的不同部分以及它们应该如何工作是非常有帮助的。

所以，不要因为测试似乎是`额外的工作`而回避它。现实是，当你正确地设置它时，它可以在未来为你节省额外的工作。

看看[React文档中的 "测试 "章节](https://reactjs.org/docs/testing.html),通过一些关于React测试的教程，然后开始编写你的第一个小型TDD应用，或者在你目前正在开发的应用中实施测试。

### 🧰 整合Typescript(或至少使用默认的props和prop类型)

我记得我作为软件开发者的第一个React项目，我们的团队收到了一个基本上已经由其他公司写好的项目。然后我们不得不在此基础上建立客户的项目，而Typescript已经被集成了。

在那之前，我和我的队友们对TypeScript并没有什么经验，因为我们都是来自于普通的JavaScript背景。

在与该项目合作的几周后，我们觉得TypeScript并不是一个好处，而是一个阻碍我们工作流程的障碍。我们也没有真正使用它的好处，因为我们用`any`类型定义了所有东西，以抑制Typescript的警告。

这导致我们决定将TypeScript从项目中移除，用vanilla JavaScript来处理我们已知的地形。起初这很顺利，但我们的项目变得越复杂，出现的类型错误就越多。所以我们很怀疑自己完全摆脱TypeScript的决定。但这些事情可能会发生，并为我们的未来提供了宝贵的经验。

这种情况使我又给了TypeScript一个机会，我在业余时间学习了它。在用它构建了一些业余项目后，我再也无法想象没有它的生活了。

使用TypeScript有很多好处，比如静态类型检查，在你的IDE中更好地完成代码（intellisense），改善开发者体验，以及在你写代码时捕捉类型错误--仅举几例。

另一方面，它当然也有一些挑战，因为如果你不是来自强类型语言（如Java或C#）的背景，在开始时可能更难掌握它。

但我可以说，它真的值得你去学习和整合。[这里有](https://blog.bitsrc.io/5-strong-reasons-to-use-typescript-with-react-bc987da5d907)一篇不错的文章，可以帮助你了解在React应用中使用Typescript的历程。还有[这里有一个教程](https://www.freecodecamp.org/news/how-to-code-your-react-app-with-typescript/)是关于如何在TypeScript中编写你的React应用。

你可能有理由不想在你的React应用程序中使用TypeScript。这很好。但至少我建议你为你的组件使用**prop-types**和**default-props**，以确保你不会弄乱你的props。

### 💎 使用懒加载/代码拆分

如果你在JavaScript和React领域花了一些时间，你很可能已经偶然发现了**bundling**。对于那些第一次听到这个术语的人，让我们看看React官方文档是怎么说的:

大多数React应用会使用Webpack、Rollup或Browserify等工具对其文件进行 "bundling"。"bundling"是跟随导入的文件并将它们合并成一个文件的过程：一个 "bundling"。然后，这个捆绑文件可以包含在一个网页上，以便一次性加载整个应用程序。

基本上这是个很好的技术，但随着你的应用程序的增长，就会出现一个挑战。你的"bundling"程序也开始增长。特别是当你使用像three.js这样的大型第三方库时。

隐患在于，即使用户只需要一小部分的代码，这个"bundling"也需要一直完全加载。这导致了性能问题，因为它可能需要不必要的时间来加载你的应用程序。

为了避免这种情况，有一种叫做代码拆分(code splitting)的技术，你把你的捆绑程序分割成用户需要的代码片段。最常见的捆绑器如Webpack、Rollup和Browserify都支持这种做法。它的最大好处是，你可以创建多个捆绑包并动态加载它们。

拆分你的"bundling"程序可以帮助你通过懒加载(lazy load)用户需要的东西。

为了说明这一点，想象一下你进入一家杂货店，只想拿一些香蕉、苹果和面包。在这种情况下，你并不是买下整个商店的范围，然后从里面抓出你的香蕉、苹果和面包。你只是对其中的一小部分感兴趣。那么，你为什么要买所有的东西呢？这将花费更长的时间，当然也更昂贵。

我认为重要的是要意识到在你的应用程序成长过程中可能出现的潜在挑战，而且有一些技术在手，可以摆脱这些问题。进一步阅读请查看[有关code splitting的React文档.](https://reactjs.org/docs/code-splitting.html)

### 🗄️ Extract reusable logic into custom hooks

According to the React docs,

> _Hooks allow us to reuse stateful logic without changing our component hierarchy._

Basically they're a better solution to the techniques that were used before in combination with class components. If you've been coding for a while, you might remember the use of **Higher Order Components** or **render props.**

Whenever you find yourself in a situation where you have to reuse the same stateful logic that is already used in another functional component, that's a great time to create a custom hook. Inside it you encapsulate the logic and just have to call the hook as a function inside your components.

Let's take a look at a quick example where we need to update our UI according to the screen size and want to keep track of the current window size when resizing the browser window manually.

```jsx
const ScreenDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
  	<>
    	<p>Current screen width: {windowSize.width}</p>
        <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
```

Thanks to: https://usehooks.com/useWindowSize/

As you can see, the solution is pretty straightforward and there's nothing wrong with defining it like this.

Now comes the tricky part. Imagine we'd like to use the exact logic in another component, where we'll render a different UI (one for smartphones and one for desktops) based on the current screen size.

Of course we could just copy the logic, paste it in and we're done. But this is not a good practice, as you might know from the DRY principle.

If we'd like to adjust our logic, we have to do it in both components. And when we paste our logic in even more components, it becomes less maintainable and more error prone.

So, what would you normally do in a vanilla JavaScript project? You'd most likely define a function that encapsulates the logic and can be used in many different places. That's exactly what we'll achieve with hooks. They are nothing more than JavaScript functions but with some React specialities because they're using React hooks.

Let's see how our custom hook would look:

```jsx
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}
```

Now let's simply call it inside our **ScreenDimensions** component:

```jsx
const ScreenDimensions = () => {
  const windowSize = useWindowSize()
  
  return (
  	<>
    	<p>Current screen width: {windowSize.width}</p>
        <p>Current screen height: {windowSize.height}</p>
    </>
  )
}
```

This enables us to just call the custom hook in any other component and save the return value (which is the current window size) in a variable that we can use inside the component.

```jsx
const ResponsiveView = () => {
  const windowSize = useWindowSize()
  
  return (
  	<>
    	{windowSize.width <= 960 ? (
          <SmartphoneView />
        ) : (
          <DesktopView />	
        )}
    </>
  )
}
```

### 🖥️ Handle errors effectively

Handling errors effectively is often overlooked and underestimated by many developers. Like many other best practices this seems to be an afterthought at the beginning. You want to make the code work and don't want to "waste" time thinking much about errors.

But once you've become more experienced and have been in nasty situations where better error handling could have saved you a lot of energy (and valuable time of course), you realize that it's mandatory in the long run to have a solid error handling inside your application. Especially when the application is deployed to production.

But what exactly does _error handling_ mean in the React world? There are some different parts that play a role. One is to **catch** errors, another one to **handle** the UI accordingly, and the last one to **log** them properly.

#### React Error Boundary

This is a custom class component that is used as a wrapper of your entire application. Of course you can wrap the ErrorBoundary component also around components that are deeper in the component tree to render a more specific UI, for example. Basically it's also a best practice to wrap the ErrorBoundary around a component that is error prone.

With the lifecycle method `componentDidCatch()` you're able to catch errors during the rendering phase or any other lifecycles of the child components. So when an error arises during that phase, it bubbles up and gets caught by the ErrorBoundary component.

If you're using a logging service (which I also highly recommend), this is a great place to connect to it.

The static function `getDerivedStateFromError()` is called during the render phase and is used to update the state of your ErrorBoundary Component. Based on your state, you can conditionally render an error UI.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //log the error to an error reporting service
    errorService.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong.</h1>;
    }
    return this.props.children; 
  }
}
```

The big drawback of this approach is that it doesn't handle errors in asynchronous callbacks, on server-side-rendering, or in event-handlers because they're outside the boundary.

#### Use try-catch to handle errors beyond boundaries

This technique is effective to catch errors that might occur inside asynchronous callbacks. Let's imagine we're fetching a user's profile data from an API and want to display it inside a Profile Component.

```jsx
const UserProfile = ({ userId }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [profileData, setProfileData] = useState({})
    
    useEffect(() => {
    	// Separate function to make of use of async
        const getUserDataAsync = async () => {
        	try {
            	// Fetch user data from API
            	const userData = await axios.get(`/users/${userId}`)
                // Throw error if user data is falsy (will be caught by catch)
                if (!userData) {
                	throw new Error("No user data found")
                }
                // If user data is truthy update state
                setProfileData(userData.profile)
            } catch(error) {
            	// Log any caught error in the logging service
            	errorService.log({ error })
                // Update state 
                setProfileData(null)
            } finally {
            	// Reset loading state in any case
                setIsLoading(false)
            }
        }
        
        getUserDataAsync()
    }, [])
    
    if (isLoading) {
    	return <div>Loading ...</div>
    }
    
    if (!profileData) {
    	return <ErrorUI />
    }
    
    return (
    	<div>
        	...User Profile
        </div>
    )
}
```

When the component gets mounted, it starts a GET request to our API to receive the user data for the corresponding userId that we'll get from the props.

Using try-catch helps us catch any error that might occur during that API call. For example this could be a 404 or a 500 response from the API.

Once an error gets caught, we're inside the catch block and receive the error as a parameter. Now we're able to log it in our logging service and update the state accordingly to display a custom error UI.

#### Use the react-error-boundary library (personal recommendation)

This library basically melts those two techniques from above together. It simplifies error handling in React and overcomes the limitations of the ErrorBoundary component we've seen above.

```jsx
import { ErrorBoundary } from 'react-error-boundary'

const ErrorComponent = ({ error, resetErrorBoundary }) => {
  
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const App = () => {
  const logError = (error, errorInfo) => {
  	errorService.log({ error, errorInfo })
  }
  

  return (
    <ErrorBoundary 
       FallbackComponent={ErrorComponent}
       onError={logError}
    >
       <MyErrorProneComponent />
    </ErrorBoundary>
  );
}
```

The library exports a component that is made up of the ErrorBoundary functionality we already know and adds some nuances to it. It allows you to pass a `FallbackComponent` as a prop that should be rendered once an error got caught.

It also exposes a prop `onError` which provides a callback function when an error arises. It's great for using it to log the error to a logging service.

There are some other props that are quite useful. If you'd like to know more, feel free to checkout [the docs.](https://www.npmjs.com/package/react-error-boundary?activeTab=readme)

This library also provides a hook called `useErrorHandler()` that is meant to catch any errors that are outside the boundaries like event-handlers, in asynchronous code and in server-side-rendering.

#### Logging errors

Catching and handling errors effectively is one part, logging them properly is another. Once you've set up your error handling inside your application, you need to log them persistently.

The most frequently used way is the good old **console.log**. This might be good during development when you want a quick log, but once your application is deployed to production it becomes useless. This is because you only see the error inside the user's browser, which is not effective at all.

When logging errors in production, **you** as the developer want to see the errors in one dedicated place in order to fix them.

For that reason we need a logging service created by our own or a third-party one.

When using third-party logging services my personal recommendations is definitely **Sentry.** So I highly encourage you to check it out.

### ☝️ Keep your key prop unique across your whole app

When mapping over an Array to render its data, you always have to define a **key** property for each element. A common practice I've seen and used myself as well is to use simply the **index** of each element as the key prop.

Using the key prop is important because it helps React to identify the exact element that has changed, is added or is removed. Imagine the state of your component changes and the UI needs to be re-rendered with the new state. React needs to figure out the differences between the previous UI and new UI in order to update it.

"What elements are added/removed or have changed?"

Therefore the key prop has to be unique. Using the index of the current element makes sure that it is only unique in this particular map function.

It could look like this, if we'd pretend to show a score history of a football team from the current season:

```jsx
const SeasonScores = ({ seasonScoresData }) => {
	
    return (
    	<>
        	<h3>Our scores in this season:<h3>
        	{seasonScoresData.map((score, index) => (
    			<div key={index}>
        			<p>{score.oponennt}</p>
        			<p>{score.value}</p>
        		</div>
    		))}
        </>
    )
}
```

While this is only unique inside this map function here, this could lead to potential issues. It's pretty common to have more than one map function inside your React application or even in one component.

Let's assume we've got another map-function in our component to display the current roster:

```jsx
const SeasonScores = ({ seasonScoresData, currentRoster }) => {
	
    return (
    	<>
        	<h3>Our scores in this season:<h3>
        	{seasonScoresData.map((score, index) => (
    			<div key={index}>
        			<p>{score.oponennt}</p>
        			<p>{score.value}</p>
        		</div>
    		))}
            </br>
			<h3>Our current roster:<h3>
        	{currentRoster.map((player, index) => (
            	<div key={index}>
                	<p>{player.name}</p>
                    <p>{player.position}</p>
                    <p>{player.jerseyNumber}</p>
                    <p>{player.totalGoals}</p>
                </div>
    		))}
        </>
    )
}
```

Now we end up in the situation where we used many keys twice inside our component. Let's assume we got **14** elements inside `seasonScoresData` and **30** in `currentRoaster`. We have used the numbers 0-13 two times as a key prop. Now we're not serving the purpose anymore to have unique key props.

This could lead to potential problems because React might only re-render only one item and omit the other one. Or it can lead to inefficiencies with updating the UI tree. Check out the recommended blog post at the end of this tip to get a more in depth example.

To avoid this unwanted behavior, make sure to always use **unique keys across your whole application.** Ideally each item in the Array has got its own unique id that you can use. But this isn't always the case, so you can use an external library like **uuidv4** for generating unique id's.

With that in mind and with the assumption that every item in both Arrays has an id property, the component would look like this:

```jsx
const SeasonScores = ({ seasonScoresData, currentRoster }) => {
	
    return (
    	<>
        	<h3>Our scores in this season:<h3>
        	{seasonScoresData.map((score, index) => (
    			<div key={score.id}>
        			<p>{score.oponennt}</p>
        			<p>{score.value}</p>
        		</div>
    		))}
            </br>
			<h3>Our current roster:<h3>
        	{currentRoster.map((player, index) => (
            	<div key={player.id}>
                	<p>{player.name}</p>
                    <p>{player.position}</p>
                    <p>{player.jerseyNumber}</p>
                    <p>{player.totalGoals}</p>
                </div>
    		))}
        </>
    )
}
```

If you want to go into more depth, feel free to check out [this great post](https://medium.com/swlh/understanding-the-importance-of-the-key-prop-in-react-f2b92ce65f45) about that topic.

## Tips to Help You Write Better React Code,  The Cherries on Top

![joanna-kosinska-_xN7UbcZ33I-unsplash](https://www.freecodecamp.org/news/content/images/2022/01/joanna-kosinska-_xN7UbcZ33I-unsplash.jpg)

I'd like to compare this guide to the process of building a house. The first part, _Learn the Building Blocks of React_, is the solid foundation you build your application on. The second one, _How to Build Clean, Performant and Maintainable React Components_, is for building the walls.

This section is basically the roof that comes on top to complete the house. That's the reason I'd like to call it _Cherries on Top_. These tips here are more granular.

Most of these practices are more optional than those before, but can make a difference if you use them properly.

### 🪄 Implement the useReducer hook earlier

Probably one of the most frequently used hooks in React is **useState**. I've created and seen components over the time that have got a lot of different states. So it's natural that they become flooded with a lot of useState hooks.

```jsx
const CustomersMap = () => {
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [customersData, setCustomersData] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasMapLoaded, setHasMapLoaded] = useState(false)
  const [mapData, setMapData] = useState({})
  const [formData, setFormData] = useState({})
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  
  ...
  
  return ( ... )
}
```

Having a lot of different useState hooks is always a great sign that the size and therefore the complexity of your component is growing.

If you can create some smaller sub components where you can transfer some state and JSX in, then this is a great way to go. So you're cleaning up your useState hooks and your JSX in one step.

In our example above, we could put the last two states into a separate component that handles all state and JSX that has to do with a form.

But there are scenarios where this doesn't make sense, and you have to keep those many different states inside one component. To increase the legibility of your component, there is the **useReducer** hook.

The official React docs say this about it:

> `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

With that in mind, the component would like this when using `useReducer`:

```jsx
// INITIAL STATE
const initialState = {
  isDataLoading: false,
  customerData: [],
  hasError: false,
  isHovered: false,
  hasMapLoaded: false,
  mapData: {},
  formdata: {},
  isBtnDisabled: false
}

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CUSTOMER_DATA':
      return {
        ...state,
        customerData: action.payload
      }
    case 'LOAD_MAP':
      return {
        ...state,
        hasMapLoaded: true
      }
    ...
    ...
    ...
    default: {
      return state
    }	
  }
}

// COMPONENT
const CustomersMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  ...
  
  return ( ... )
}
```

The component itself looks cleaner and comes along with some great benefits as you can see inside the docs. If you're used to Redux, the concept of a reducer and how it is built isn't new to you.

My personal rule is to implement the useReducer hook if my component exceeds four useState hooks, or if the state itself is more complex than just a boolean, for example. It might be an object for a form with some deeper levels inside.

### 🔌 Use shorthand for boolean props

Often there are scenarios where you pass boolean props to a component. I've seen a lot of developers doing it like this:

```jsx
<RegistrationForm hasPadding={true} withError={true} />
```

But you don't need to do it necessarily like this because the occasion of the prop itself is either truthy (if the prop is passed) or falsy (if the prop is missing).

A cleaner approach would be:

```jsx
<RegistrationForm hasPadding withError />
```

### 👎 Avoid curly braces for string props

A similar use case like we've seen in the tip before is using string props:

```jsx
<Paragraph variant={"h5"} heading={"A new book"} />
```

You don't need the curly braces in that case because you're allowed to directly use strings inside your props. When you want to attach a className to a JSX Element you're most likely using it also directly as a string.

When you'd like use a JavaScript expression different from a string, you need to use the curly braces. For example if you want to use a number or an object. This is also true for template strings (don't get caught up like I did many times, haha).

With plain strings, like in the example, it would look like this:

```jsx
<Paragraph variant="h5" heading="A new book" />
```

### 🧹 Erase non-html attributes when spreading props

Let's take a look at a quick example:

```jsx
const MainTitle = ({ isBold, children, ...restProps }) => {
	
  return (
    <h1 
      style={{ fontWeight: isBold ? 600 : 400 }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
```

We've just created a component that will render a h1 tag, extracted some props, and spread out all other potential props on the h1 tag. So far, so good.

Now, we're able to use it in other components and can trigger manually if the h1 should be bold or not:

```jsx
// WITH BOLD TITLE
const IndexPage = () => {
	
  return (
    <>
      <MainTitle isBold>
        Welcome to our new site!
      </MainTitle>
      ...
    </>
  )
}
```

```jsx
// WITHOUT BOLD TITLE
const AboutPage = () => {
	
  return (
    <>
      <MainTitle>
      	Some quick lines about us!
      </MainTitle>
      ...
    </>
  )
}
```

Up to now, everything works perfectly without any errors or warnings. The interesting part starts now when we're using other props that are directly spread onto the h1 tag.

When you're using valid HTML attributes like id or a class, everything works without any error (remember --> "className" will become "class"):

```jsx
const IndexPage = () => {
	
  return (
    <>
      <MainTitle isBold id="index-main-title" className="align-left">
        Welcome to our new site!
      </MainTitle>
      ...
    </>
  )
}
```

So all props above will be added as an attribute to the h1 because we're using **{...restProps}** on it. No matter what, props we are adding and NOT extracting will be added to the h1 tag.

This is great for many use cases but can be a problem at the same time:

```jsx
// Page Component
const IndexPage = () => {
	
  return (
    <>
      <MainTitle isBold hasPadding>
        Welcome to our new site!
      </MainTitle>
      ...
    </>
  )
}

// MainTitle Component
const MainTitle = ({ isBold, children, ...restProps }) => {
	
  return (
    <h1 
      style={{ 
        fontWeight: isBold ? 600 : 400,
        padding: restProps.hasPadding ? 16 : 0
      }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
```

In the code above we were adding a new prop called `hasPadding` to the `MainTitle` component, that is optional. Inside the component we are not extracting it from the props and call it via `restProps.hasPadding`.

The code works, but when you open your browser you'll receive a warning that `hasPadding` is a non-HTML attribute you're trying to apply on the h1 tag. This is because of `{...restProps}` on the h1 tag and not extracting `hasPadding` like `isBold` for example.

To avoid this, always extract all non-HTML attributes from the props first, to make sure that there are only valid HTML attributes in `restProps` that you're spreading onto a JSX element.

In our example it would look like this:

```jsx
// Page Component
const IndexPage = () => {
	
  return (
    <>
      <MainTitle isBold hasPadding>
        Welcome to our new site!
      </MainTitle>
      ...
    </>
  )
}

// MainTitle Component
const MainTitle = ({ isBold, children, hasPadding, ...restProps }) => {
	
  return (
    <h1 
      style={{ 
        fontWeight: isBold ? 600 : 400,
        padding: hasPadding ? 16 : 0
      }}
      {...restProps}
    >
      {children}
    </h1>
  )
}
```

Many of those warnings can unnecessary flood your browser's console, which can be very nasty. Especially when you're debugging.

To get more information about this topic and some other ways to solve this, check out [this part of the React docs](https://reactjs.org/warnings/unknown-prop.html).

### 🔥 Use snippet extensions

In Visual Studio Code, for example, there are certain extensions available that increase your productivity a lot. One type of these extensions are **snippet extensions.**

The great benefit about them is that you don't have to write all that boilerplate code again. Imagine you're building many new components and have to type it all out again and again:

```jsx
import React from 'react'

const GoogleMap = () => {

}

export default GoogleMap
```

With these snippets you just have to type **`rafce`,** for example, hit tab and you have the same boilerplate code. It is a real time saver and makes development faster.

**But use them with caution!** I wouldn't recommend using snippets to all developers. In my opinion, beginners shouldn't use any snippets and should type the boilerplate out by hand. When you're doing that, you'll get muscle memory which manifests the stuff you learn.

If you have done it so often that you can type it out in your sleep and it becomes boring, that's the right time to use snippets.

Here are my recommendations:

![Bildschirmfoto-2022-02-01-um-14.55.02](https://www.freecodecamp.org/news/content/images/2022/02/Bildschirmfoto-2022-02-01-um-14.55.02.png)

![Bildschirmfoto-2022-02-01-um-15.05.01](https://www.freecodecamp.org/news/content/images/2022/02/Bildschirmfoto-2022-02-01-um-15.05.01.png)

![Bildschirmfoto-2022-02-01-um-15.06.59](https://www.freecodecamp.org/news/content/images/2022/02/Bildschirmfoto-2022-02-01-um-15.06.59.png)

### ❌ Write a fragment when a div is not needed

A React component can only render one single HTML tag at its root. So if you'd like to render two adjacent elements, you'll get the famous error called **Adjacent JSX elements must be wrapped in an enclosing tag**.

```jsx
const InfoText = () => {
	
  // Will throw an error
  return (
    <h1>Welcome!</h1>
    <p>This our new page, we're glad you're are here!</p>
  )
}
```

So, what can you do? You just wrap the rendered output into a fragment, which satisfies React and doesn't render an extra HTML element in the browser.

```jsx
const InfoText = () => {
	
  return (
  	<>
      <h1>Welcome!</h1>
      <p>This our new page, we're glad you're are here!</p>
    </>
  )
}
```

Of course you could have solved this with a div tag as well. But using div after div will create something I like to call **div hell** in the browser where you got many deep nested div tags without any sense.

So whenever you have to use a wrapper tag in React but don't necessarily need an HTML tag, then simply use a fragment.

### 👈 Integrate self closing tags when no children are needed

From my experience, this tip right here is often overlooked, but could make your code so much cleaner with little effort.

In React you've got the opportunity to pass children elements to a component, which are then available to the component via its children property. Those components are often called **composite components.**

In that case you have to use an opening tag and a closing tag of course:

```jsx
<NavigationBar>
  <p>Home</p>
  <p>About</p>
  <p>Projects</p>
  <p>Contact</p>
</NavigationBar>
```

But when there are no children needed, there isn't any sense in using an opening and closing tag, right?

```jsx
<NavigationBar></NavigationBar>
```

Instead of doing this, I recommend that you just use the component as a self closing element like the input tag in HTML, that doesn't take children as well.

```jsx
<NavigationBar />
```

Looks much cleaner right away, doesn't it?

### ✅ Follow common naming conventions

The sense behind naming conventions is to more easily recognize what type of element you're dealing with and to have something in your code that is common in the community.

From my standpoint, there are two major naming conventions involved in React and JavaScript that you should follow:

#### Use PascalCase in components, interfaces, or type aliases

```jsx
// React component
const LeftGridPanel = () => {
  ...
}

// Typescript interface
interface AdminUser {
  name: string;
  id: number;
  email: string;
}

// Typescript Type Alias
type TodoList = {
	todos: string[];
    id: number;
    name: string;
}

```

#### Use camelCase for JavaScript data types like variables, arrays, objects, functions, and so on

```jsx
const getLastDigit = () => { ... }

const userTypes = [ ... ]

```

Naming React components in PascalCase is especially important. Because when you've got a linter configured for React, but you named the component in camelCase and you're using hooks inside it, you'll get a warning message all the time that hooks are only allowed in components. That's because the linter recognizes a React components if it's written in PascalCase or not.

This can be nasty, but is fixed quickly with sticking to the established naming conventions.

### 🧨 Sanitize your code to prevent XSS Attacks

Maybe you've found yourself in a scenario where you have to use the property `dangerouslySetInnerHTML` on an element in React. Basically it's React's equivalent to `innerHTML` you might know from Javascript.

So using it, you can set HTML directly from React.

Let's consider the following example, where we'd like to render an HTML string inside a div. The string could come from a rich text editor where it's already formatted HTML.

```jsx
const Markup = () => {
  const htmlString = "<p>This is set via dangerouslySetInnerHTML</p>"
  
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  )
}
```

The term **dangerously** is chosen with intention. Using this property can open you up to a cross-site-scripting (XSS) attack. So it's mandatory that the code that gets set is sanitized first.

A great library is **[dompurify](https://www.npmjs.com/package/dompurify)** that can help you out with this.

## Final words

Wow, that was fun right? I tried my best to let everything out that got piled up over the past in my head. My motivation behind this guide is to share my experience with you so you can avoid some harder times during your React learning and development.

Of course there might be best practices you consider more important that I've missed here. That's great. I'd love to hear what you'd like to add to this guide.

Remember, it's always all about adapting what's useful for you. So, don't take it all for granted and think about what might be helpful in your situation. Then you can just add it to your own stack of best practices.

You can also follow my developer journey and get many more useful insights about the life of a developer on my [Instagram Profile](https://www.instagram.com/jean_marc.dev/). I'm always there to help you and happy about every feedback I can get. So, feel free to reach out.