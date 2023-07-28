> - 原文地址：[TypeScript for React Developers – Why TypeScript is Useful and How it Works](https://www.freecodecamp.org/news/typescript-for-react-developers/)
> - 原文作者：[Daniel Asta](https://www.freecodecamp.org/news/author/daniel-asta/)
> - 译者：Papaya HUANG
> - 校对者：

![TypeScript for React Developers – Why TypeScript is Useful and How it Works](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/typescript-cover.jpg)

如果你已经使用 React 一段时间，你会察觉 JavaScript 一些自由野性的天性让你难以驾驭（这当然不是 JS 的问题 😄），当你和团队协作的时候，这个特点尤为显著。

**或许你不知道，你需要 TypeScript，至少试一下**。

我先声明一下，我喜欢 JavaScript 的自由，甚至有相当长的时间，我“反对”使用 TypeScript。

我想和你一起探索 TypeScript 是否值得使用，还只是适合那些不怎么会写代码的人（这是我们团队内部玩笑）。

本文旨在介绍 TS 的基础以便你了解它的优势，决定是否使用它。本文的第二部分会介绍在 React 中的 TS。

## 目录

- [参考资料](#resources)
- [为什么使用 ESLint、Prettier 和 Husky？](#whyuseeslintprettierandhusky)
- [何为 TypeScript?](#whatistypescript)
- [为什么要使用 TS?](#whybotherdealingwithts)
- [如何设置 TypeScript](#howtosetuptypescript)
- [购物清单项目示例](#sampleshoppinglistproject)
  - [TypeScript 模块](#typescriptmodules)
  - [TypeScript 类型](#typescripttypes)
    - [TypeScript 中的类型推论](#inferenceintypescript)
    - [TypeScript 中的`any` 和 `unknown`](#anyandunknownintypescript)
    - [TypeScript 中的数组](#arraysintypescript)
    - [TypeScript 中的对象](#objectsintypescript)
    - [TypeScript 中的类型别名](#aliasesintypescript)
  - [TypeScript 中的函数](#functionsintypescript)
    - [TypeScript 中的可选参数](#optionalparametersintypescript)
  - [TypeScript 枚举](#typescriptenums)
  - [TypeScript 泛型](#typescriptgenerics)
  - [TypeScript 中的元祖](#tuplesintypescript)
  - [TypeScript 中的类](#classesintypescript)
  - [TypeScript 中的接口](#interfacesintypescript)
  - [TypeScript 中的 DOM 操作](#dommanipulationintypescript)
- [如何结合 React + TypeScript](#howtocombinereacttypescript)
  - [设置](#setup)
  - [设置组件 Props 类型](#typingcomponentprops)
    - [React 内置类型](#reactbuiltintypes)
    - [React 组件返回类型](#returntypeofareactcomponent)
    - [结合模板字面量](#combinationswithtemplateliterals)
    - [如何使用`Exclude`](#howtouseexclude)
    - [自定义 HTML 组件](#customhtmlcomponents)
  - [定义 hook 的类型](#typinghooks)
    - [useState hook](#usestatehook)
    - [useReducer hook](#usereducerhook)
    - [useContext](#usecontext)
    - [useRef hook](#userefhook)
  - [传递 ref](#forwardingref)
  - [如何在 React 中使用 TypeScript 泛型](#howtousetypescriptgenericsinreact)
  - [定义自定义 useFetch Hook 类型](#typingacustomusefetchhook)
- [总结](#conclusion)

<h2 id="resources">参考资料</h2>

你可以从以下样板着手：

- [Create React App + TypeScript + ESLint + Prettier Boilerplate](https://github.com/dastasoft/react-boilerplate/tree/cra-typescript)
- [Vite + TypeScript + ESLint + Prettier Boilerplate](https://github.com/dastasoft/react-boilerplate/tree/vite-typescript)

如果你喜欢游戏编程，可以尝试 [PhaserJS](https://phaser.io/)。你可以在浏览器通过创建游戏边玩边学 TypeScript 。

确保你也阅读了[TS 官方文档](https://www.typescriptlang.org/docs/handbook/intro.html)。里面包含大量有用的文档和案例。

另外还有两个示例项目，这样你就可以看到代码是如何实现的：

### 购物清单项目

![shopping-list](https://www.freecodecamp.org/news/content/images/2022/10/shopping-list.jpg)

这是一个简单的体验 TypeScript 开发的项目，不需要 Webpack、React 以及任何其他组件，仅需要把 TypeScript 转换成 JavaScript。

- [在线示例](https://shopping-list.dastasoft.com/)
- [源码](https://github.com/dastasoft/shopping-list)

### 动漫预告片项目

![animetrailers-screenshot](https://www.freecodecamp.org/news/content/images/2022/10/animetrailers-screenshot.jpg)

借助 [JikanAPI](https://jikan.moe/)我搭建了一个简单的结合 React 和 TypeScript 的应用，该应用提供一系列动画和基本信息，你可以观看你最喜欢的动画的最新预告。

- [在线示例](https://animetrailers.dastasoft.com/)
- [源码](https://github.com/dastasoft/animetrailers)

<h2 id="whyuseeslintprettierandhusky">为什么使用 ESLint、Prettier 和 Husky？</h2>

在样板中我使用了 Airbnb 的 ESlint 规则、Prettier 建议规则以及 Husky 的提前提交（pre-commit)行为。团队协作的时候，这样可以促使大家遵循同样的代码规则，即便你是单人作业或者学习开发，这样操作也会对你的项目有所助益。

有些 Airbnb 的规则可能会有些奇怪，但是规则都有注解和示例，你可以以此来决定采不采用，如果想要关闭某个规则，可以放在`.eslintrc`文件中。

这些规则对入门开发和刚刚开始使用 JS 或者 TS 的人来说非常有用。所以我建议你将它们纳入你的项目，尝试一下。 😉

<h2 id="whatistypescript">何为TypeScript</h2>

[TypeScript](https://www.typescriptlang.org/)或者 TS 是由微软开发并且维护的开源语言，它具有以下特性：

- 它是一个多范式语言 (和 JavaScript 一样)；
- 它是 JavaScript 的一个替代品 (更准确地说，是一个超集)；
- 它允许静态类型；
- 它具有额外的特性: 泛型（generics)、接口(interfaces)、元组(tuples)等，将在下文详细说明；
- 它允许阶段性采用（也就是你可以一个文件一个文件地将现有的项目改写成 TS，而不是一次性改变）；
- 你可以在前端和后端中使用（和 JS 一样）。

浏览器不能解读 TS 代码，必须 _转译_ 为 JS。JS 为动态类型映射值，而 TS 是静态类型，所以不易出错。

React 中已经是通过[Babel](https://babeljs.io/)_转译_ JS 了 ，所以 _转译_ 代码并不是 TS 额外的优势。

<h2 id="whybotherdealingwithts">为什么要使用TS？</h2>

问题就在这儿： 为什么要使用 TS，JS 不好用吗？你用得不开心吗？你不怕麻烦吗？正如上文所诉，过去我们团队内部会取笑像 TS 这样带类型的语言（当时我还在使用 Java）。我们团队会说如果你需要类型，证明你不会正确地写代码。

TypeScript、 Java 以及其他一些语言具备 **静态类型** ，也就是会定义变量的类型。一旦你将变量定义为 _string_ 或者 _boolean_ ，你就不能改变它的类型。

而 JavaScript 拥有 **动态类型**。也就是说，变量一开始是字符串，之后可以变为布尔值、数字或者任意你想要的值。变量类型会在运行时动态分配。

当你浏览网络上的 TS 代码，你会看到……（语法糖）。

![sintactic sugar](https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fcontent%2Ftypescript%2Fsyntaxsugar.jpeg&w=1920&q=75 'Syntactic Sugar, syntactic sugar everywhere.')

回到我们团队的玩笑，当然这个说法**没错**: 如果你知道自己在做什么，你不需要别人不断提醒你这是字符串，也只能是字符串，在某一刻它变成了布尔值或者其他类型……我知道自己在做什么！

真相是人非完人，总有这样的事情发生：

- 赶进度的时候；
- 心情糟糕的时候；
- 周五的想法下周一再回顾的时候发现自己无法理解；
- 团队协作时，团队成员的技术和看法不在一个水平。

出于同样的原因，我们使用 IDE、IDE 插件、代码高亮、linter 而不是记事本应用。TypeScript 和这些辅助工具一样。

![airbnb bugs](https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fcontent%2Ftypescript%2Fairbnb.jpg&w=1920&q=75 'Airbnb claims that 38% of bugs on Airbnb could have been prevented by using TypeScript.')

### 一些常见的问题

让我们看一看使用和不使用 TS 的一些对比示例：

#### 拜托，我知道自己用的是什么！

```js
// App.js
import { MemoryRouter as Router } from 'react-router-dom';

import Routes from './routes';

export default function App() {
  return (
    <Router basename="/my-fancy-app">
      <Routes />
    </Router>
  );
}
```

你知道上面代码块的问题出在哪儿吗？如果知道的话，请给自己一朵大红花！

这个文件在我的样板中存在了很长时间，这并不是一个 bug，但是…… `MemoryRouter`并不需要任何 `basename`。它出现的原因是我之前使用了`BrowserRouter`，所以需要`basename`属性。

如果使用 TS 你会被提示 `No overload matches this call` 告诉你有这个属性的组件并没有被签名。

**TypeScript 不仅可以使用静态类型，也可以帮助你决定是否需要其他的库**。 这里的库可以是第三方或者同事提供的组件和函数。

肯定会有一些声音——“了解正在使用的库不是必须么”，是的，你是对的。但是让参与项目的每个人都知道每个“外部”库以及版本的细微差别，可是艰巨的任务！

#### 魔鬼标志变量

```javascript
let isVerified = false;
verifyAmount();

// isVerified = "false"
if (isVerified) proceedPayment();
```

我被这个问题困扰了很多次。虽然每次不是一模一样的代码，一些细微的差别，但是你可以从这个示例中体会我的用意：你设置一个布尔值变量来决定一些代码运不运行，但很有可能其他人（或者你自己）后来将布尔值变成了字符串，而非空字符串为真值。

如果使用 TypeScript，会出现报错: `The type 'string' is not assignable to the type 'boolean'`。代码在编译时就会出现这个报错，不需要等到运行时，那么在生产阶段出现这样的报错的机率非常低。

当然，和前文的规则一样，如果你正确编写代码，这个问题不会发生，如果你采用简洁代码的策略并且在编码的时候非常小心也可以避免这样的错误。 **TypeScript 并不是为了让我们偷懒，而是我们的好帮手**，正如代码高亮可以帮助我们避免错误，找出不正常的变量。

#### 我以为盒子里面的猫是活着的

```ts
const MONTH_SELECT_OPTIONS = MONTHS.map((month) => ({
  label: getMonthName(month),
  value: month
}));

export default function PaymentDisplayer() {
  const [currentMonthFilter, setCurrentMonthFilter] = useState(
    MONTH_SELECT_OPTIONS[0]
  );

  const onChangeHandler = (option) => {
    setCurrentMonthFilter(option.value);
  };

  return (
    <select onChange={onChangeHandler}>
      {MONTH_SELECT_OPTIONS.map(({ label, value }) => (
        <option key="value" value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
```

改变一个 state 的类型非常常见（虽然不建议这么做），有些时候会设置一个`isError` 标志变量，突然从布尔假值变成表示错误信息的字符串（也不建议这么做！）。还有一些时候是无意为之。

编写这段代码的人一开始认为 `currentMonthFilter` 会存储实际的选项，一个包含 label 和 value 的`HTMLOptionElement`。之后，同样的开发在另一个天（或者另一个开发）创建了 `changeHandler`函数并只设置了`value`而不是整个选项。

上述代码可以运行，为了方便学习我也做了简化，但是假设项目规模更大，特别是组件的行为是由 props 传递的时候，问题就复杂得多。

使用 TypeScript 可以从两个方面解决这个问题：

- 当你将`currentMonthFilter`的`{label: string, value: number}`改成`number`时，静态类型会报错。
- 下一个步骤的开发人员，在调用服务回溯包含这个筛选条件的付款时候，会通过 _IntelliSense_（VS Code 中的代码提示）了解他从 state 中获得什么类型，这个类型是否和服务匹配。

所以使用 TypeScript，**可以从 IDE 检查第三方库提供的函数、参数以及文档或者是同事编写的组件**。

从上文例子中（可能不那么典型），我们可以得出，TypeScript 在 React 的环境中，可以帮助我们：

- 代码前后一致，静态类型一致
- 提供文档记录，并通过 _IntelliSense_ 了解可能性
- 尽早发现问题

<h2 id="howtosetuptypescript">如何设置TypeScript</h2>

在本文中我们将使用全局安装。因为我认为第一次探索 TypeScript 应该不受到 Webpack、React 等其他变量的干扰，这样才能更加了解 TypeScript 是如何运行和处理问题的。

### 如何全局安装 TypeScript

```bash
npm install -g typescript

#或

yarn install --global typescript
```

### TypeScript 编译器（tsc）是如何工作的

在系统中安装好 TypeScript 之后，就可以使用 TypeScript 的编译器，使用 `tsc` 命令行。

让我们通过简单配置编译器测试一下：

- 创建一个新的空文件夹。
- 放置一个`index.html`文件，文件内容是基础的 HTML5 结构。
- 在`index.html`同一层，创建一个空的`index.ts`文件。
- 打开终端，并输入`tsc --init` (假设你是全局安装 TypeScript)，便会创建一个 `tsconfig.json`文件。 (我们将在下一章详细探讨这个文件)

你的文件夹结构如下：

```sh
- index.html
- index.ts
- tsconfig.json
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

你需要在 HTML 中添加 TS 文件，但是浏览器并不理解 TypeScript，只认识 JavaScript，所以你可以将`index.html`修改为：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script src="./index.js"></script>
</html>
```

打开一个新的终端，并输入`tsc`，你的 `index.ts` 文件将转换为 `index.js`，浏览器就可以理解。

为了不在每一次将 TS 文件转换为 JS 文件的时候都输入`tsc`，你可以将 TypeScript 设置为监控模式，使用`tsc -w`。

现在我建议你同时打开 TS 文件和 JS 文件，在`index.ts`文件中输入普通的 JS，测试输出是什么。（我们将在接下来的章节大量使用这样的方法）。

![side by side](https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fcontent%2Ftypescript%2Fside-by-side.png&w=1920&q=75 'Do some test using tsc -w option')

### `tsconfig.json`里是什么？

跟着文章一边看一边实践的话，通过`tsc --init`命令，你将创建 `tsconfig.json`并包含默认配置和初始化的注解。

让我们看一看一些关键的属性：

- `target`是 TS 代码将要转换成的 JS 的版本。版本主要取决于支持的浏览器，你可能需要使用比较早期版本的 JS。这也是很好的学习资源，你可以修改不同版本来看生成什么样的 JS 代码。
- `module` 设置模块的语法。 `commonjs`默认使用`require/module.exports`，现代 JS (ES6+)使用`import/export`。如果你希望使用 `import/export`，你需要将`target`设置为 ES6 或更高。 本文中的示例项目将使用这个语法。
- `lib`你需要指定你在项目中额外使用的库，检查额外的类型，如 DOM 相关。
- `jsx`如果使用 React，我们需要把这一项设置为`preserve`，也就是由另一个工具(即 Babel)来编译这 JSX，TSC 仅用于检查类型。你也可以设置为`react`或者`react-native`。这个配置决定是否使用 TSC 将你的 JSX 代码转换为常规的 JS 代码。大多数情况，我们将这个属性设置为`preserve`，将文件设置为常规的 JSX 并由 Babel 或者 Webpack 来处理编译工作。
- `outDir`是编译后文件存储的地方，例如大部分 React 项目会被存放在`build`文件。
- `rootDir` 是需要被编译的文件的位置，大部分 React 项目的位置为`./src`。
- `strict`开启一系列检查类型的规则，这些规则对"正确"的要求更为严格。我建议在学习阶段将它设置为 false，当你掌握得还不错了之后再开启。记住开启这个选项就是开启了 TS 的所有潜能，其中包含的一些选项你可以单独关闭。
- `include` 你想要编译的文件夹，如`src`文件夹。
- `exclude` 你不想要编译的文件夹，如`node_modules`文件夹。

在示例中，我们将 `rootDir`设置为 `./src`， `outDir`设置为 `public`文件夹。

<h2 id="sampleshoppinglistproject">购物清单项目示例</h2>

项目示例很简单：你可以在购物清单中添加不同的物品、修改数量、删除物品以及查看需要买什么物品。

示例项目是为了让你适应 TypeScript 的工作流。一旦使用 React 环境，Webpack 和其他一些打包器就完成很多神奇的事情，所以我认为了解基础之后再接触 React 的打包器比较重要。

让我们来看看如何使用 TS 来获得一个更优并不容易出错的代码库。

<h3 id="typescriptmodules"> TypeScript 模块</h3>

你如果想使用 ES6 `import/export`模块，你必须设置 `tsconfig` ：

- **target**: es6 or higher
- **module**: es2015 or later

并且在`index.html` 文件中增加模块类型：

```html
<script type="module" src="app.js"></script>
```

注意使用模块有两个弊端：

- 和旧浏览器的兼容性不好
- 生产阶段的文件很分散，所以在文件间需要使用大量的请求（这可以通过使用 Webpack 这样的打包器来处理）。

<h3 id="typescripttypes"> TypeScript 类型</h3>

在 JavaScript 中，类型在运行时分配。当编译器遇到变量和值时候再决定它们的类型是什么。这就意味着我们可以这样做：

```js
let job = 'Warrior'; // 字符串
let level = 75; // 数字
let isExpansionJob = false; // 布尔值

level = 'iLevel' + 75;
// 现在是一个字符串
```

在 TypeScript 中，类型在编译时分配，一旦一个类型被定义就受到该签名的保护：

```ts
let job: string = 'Samurai';
let level: number = 75;
let isExpansionJob: boolean = true;

level = 'iLevel' + 75;
// Error, Type string cannot
// be assign to type number!
```

<h4 id="inferenceintypescript"> TypeScript 中的类型推论</h4>

实际上不需要明确指定变量类型，TS 可以自行推断：

```ts
let job = 'Samurai';
let level = 75;
let isExpansionJob = true;

level = 'iLevel' + 75;
// Error, Type string cannot
// be assign to type number!
```

在接下来的 React 项目中，我们也会看到类似的推论，如在使用`useState`的时候：

```ts
const [currentMonthFilter, setCurrentMonthFilter] = useState('January');

useEffect(() => {
  setCurrentMonthFilter(1);
  // Error, Type number cannot
  // be assign to type string!
}, []);
```

<h4 id="anyandunknownintypescript"> TypeScript 中的`any`和`unknown`</h4>

我一直说 TS 有静态类型，但有一个细微的点需要说明：

```ts
let level: any = 10;

level = 'iLevel' + 125;
// OK, still type any

level = false;
// OK, still type any
```

欢迎回到 JavaScript！ `any` 是一种动态类型，当你不知道这个变量在未来的值为何时可以使用，当然这也就放弃掉了 TS 提供的所有优势。

```ts
let level: any = 10;

level = 'iLevel' + 125;

level = false;

let stringLevel: string = level;
console.log(typeof stringLevel);
stringLevel.replace('false', 'true');
```

当你将 `level`分配给`stringLevel`时，变量类型并没有变成`string`，而是保持布尔值。所以`replace`函数并不存在，代码在运行时失效，你会收到报错： `Uncaught TypeError: stringLevel.replace is not a function`。

在这种情况下我们可以使用比`any`更安全的替换方案:

```ts
let level: unknown = 10;

level = 'iLevel' + 125;

level = false;

let stringLevel: string = level;
// Error
```

`unknown`和`any`一样，可以分配任何类型，当但你想要将它分配给另外一个变量时，编译器会报错。所以当你不知道变量未来是什么类型的值时，使用 `unknown` 而不是 `any`。

<h4 id="arraysintypescript"> TypeScript 中的数组</h4>

```ts
let job = 'Red Mage';
let level = 75;
let isExpansionJob = false;
let jobAbilities = ['Chainspell', 'Convert'];

jobAbilities.push('Composure'); // OK
jobAbilities.push(2); // Error
jobAbilities[0] = 2; // Error
```

在上面例子中，我们定义了一个由字符串组成的数组：`jobAbilities`，我们可以在这个数组中添加其他的字符串，但是不能添加其他类型的值，也不能将当前值转换成其他类型。因为在声明数组时，我们将类型推论设置为了 `string[]`。

```ts
let job = 'Red Mage';
let level = 75;
let isExpansionJob = false;
let jobAbilities = ['Chainspell', 'Convert'];
let swordSkill = ['B', 5, 144, 398];

swordSkill.push('B+'); // OK
swordSkill.push(230); // OK

swordSkill[1] = 'C';
// OK, the type is not position related

swordSkill.push(true); // Error
```

和之前的例子一样，声明时类型推论就形成。所以我们声明了一个由字符串和数组组成的数组`swordSkill`。

如果你希望指定声明数组的类型，可以：

```ts
let jobAbilities: string[] = ['Chainspell', 'Convert'];
let swordSkill: (string | number)[] = ['B', 5, 144, 398];
```

`|` 是 `union`（联合声明）不同的类型。

<h4 id="objectsintypescript"> TypeScript 中的对象</h4>

让我们回到例子，不过这一次是以对象的形式：

```ts
let job = {
  name: 'Summoner',
  level: 75,
  isExpansion: true,
  jobAbilities: ['Astral Flow', 'Elemental Siphon']
};

job.name = 'Blue Mage'; // OK
job.level = 'Four'; // Error
job.avatars = ['Carbuncle']; // Error
```

- `job.level = "Four"` 不可以实现，因为我们不可以修改属性的类型。对象的属性也是静态类型。
- `job.avatars = ["Carbuncle"]` – 我们不能增加新的属性，因为 `job` 对象已经拥有一个类型和定义好的结构。

```ts
let job = {
  name: 'Summoner',
  level: 75,
  isExpansion: true,
  jobAbilities: ['Astral Flow', 'Elemental Siphon']
};

job = {
  name: 'Blue Mage',
  level: 4,
  isExpansion: true,
  jobAbilities: ['Azure Lore', 'Burst Affinity']
}; // OK

job = {
  name: 'Corsair',
  level: 25,
  isExpansion: true
}; // Error
```

我们可以分配另一个对象，因为对象是由 `let` 声明的，但必须是一模一样的形式。

停下来思考一下：有多少次你在前端的工作中，在没有检查的情况下，像这样重复对象结构？有多少次你犯过如`data.descrption`这样的拼写错误，几天之后你发现问题？如果没有发生过，我保证这种问题迟早会发生。

让我们看看如何指定具体类型：

```ts
let job: {
  name: string;
  level: number;
  isExpansion: boolean;
  jobAbilities: string[];
} = {
  name: 'Summoner',
  level: 75,
  isExpansion: true,
  jobAbilities: ['Astral Flow', 'Elemental Siphon']
};
```

对于一个简单的对象来说，这样可能有一点复杂了，所以我们可以使用`类型别名`(Type Aliases)。

<h4 id="aliasesintypescript">TypeScript 中的类型别名</h4>

```ts
type Job = {
  name: string;
  level: number;
  isExpansion: boolean;
  jobAbilities: string[];
};

let Summoner: Job = {
  name: 'Summoner',
  level: 75,
  isExpansion: true,
  jobAbilities: ['Astral Flow', 'Elemental Siphon']
};

let BlueMage: Job = {
  name: 'Blue Mage',
  level: 4,
  isExpansion: true,
  jobAbilities: ['Azure Lore', 'Burst Affinity']
};
```

使用类型别名可以定义可复用的常见类型。在 React、DOM 和其他的库中有很多这种即用型定义类型。

<h3 id="functionsintypescript"> TypeScript 中的函数</h3>

TS 中的函数语法和 JS 类似，但是你可以指定参数类型和返回类型。

```ts
type Enemy = {
  name: string;
  hp: number;
  level: number;
  exp: number;
};

let attack = (target: Enemy) => {
  console.log(`Attacking to ${target.name}`);
};

attack = 'Hello Enemy'; // Error
```

在示例中我使用了箭头函数，你也可以使用普通的函数声明。JS 和 TS 函数的两大不同是：

- 你需要指定传入参数的类型，如 `target: Enemy`。
- `attack`变量已经设定了返回类型，之后就不能修改。

函数的类型可以这样声明：

```ts
let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};
```

当返回值为空的时候可以用`void`类型，也不需要指定特定类型。

```ts
// let attack = (target: Enemy): number => {
let attack = (target: Enemy) => {
  return target.hp - 2;
};
```

`any`和`void`类型有一些不同：

```ts
let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};

attack = (target: Enemy): number => {
  return target.hp - 2;
};

// lizard has 200hp
console.log(attack(lizard)); // 198
```

上面的示例没有报错：即便你认为将 `attack`从`(target: Enemy) => void`变成了 `(target: Enemy) => number`，类型实际上还是 `void`。

尝试一下如果首先使用 `number`来定义函数会怎么样：

```ts
let attack = (target: Enemy) => {
  return target.hp - 2;
};

attack = (target: Enemy) => {
  console.log(`Attacking to ${target.name}`);
}; // Error

let attackResult = attack(lizard);
```

`Type '(target: Enemy) => void' is not assignable to the type '(target: Enemy) => number'`. `Type 'void' is not assignable to the type 'number'`，所以在这个情况下 `void` 和 `any`类似。

`attackResult`的类型为 `number`，没有必要重新指定，TS 会通过函数的返回类型完成推论。

<h4 id="optionalparametersintypescript"> TypeScript 中的可选参数</h4>

使用 `?`来定义 TS 函数中的可选参数：

```ts
let heal = (target: Player | Enemy, spell: Spell, message?: string) => {
  if (message) console.log(message);
  return target.hp + spell.power;
};

heal(player1); // Error
heal(player1, cure, 'Healing player1'); // OK
heal(skeleton, cure); // OK
```

第一个函数调用不成功是因为我们必须至少传入两个参数，后面两次调用成功。 `message`是一个可选参数，如果没有传入的话，就被定义为`undefined`。

这个示例转换为 JS 为：

```ts
let heal = (target, spell, message) => {
  if (message) console.log(message);
  return target.hp + spell.power;
};

heal(player1); // Error
heal(player1, cure, 'Healing player1'); // OK
heal(skeleton, cure); // OK
```

两个函数的基本行为一致，只是 JS 的问题会在运行时显示出来，第一个调用出错的原因是不可以从一个没有定义的值获取 `power`。

从示例中我们可以发现，TS 的函数更安全，因为你不需要依赖外部环境，也清楚知道需要传入什么参数。

这对于其他使用这个函数的开发者说也是一样的，他们知道需要使用什么参数、形式以及会返回什么参数。

<h3 id="typescriptenums">TypeScript 枚举（Enum）</h3>

使用枚举，我们可以定义一个常量集合。

```ts
enum BattleMenu {
  ATTACK,
  MAGIC,
  ABILITIES,
  ITEMS,
  DISENGAGE
}

enum Equipment {
  WEAPON = 0,
  HEAD = 1,
  BODY = 2,
  HANDS = 3,
  LEGS = 4
}

console.log(BattleMenu.ATTACK, Equipment.WEAPON);
// 0 0
```

枚举默认是自动序列化的，示例中的两种声明方式对等。

也可以使用枚举来存储字符串，我常在 React 中使用枚举来存储路径：

```ts
enum Routes {
  HOME = '/',
  ABOUT = '/about',
  BLOG = '/blog'
}
```

<h3 id="typescriptgenerics"> TypeScript 泛型(Generics)</h3>

```ts
const getPartyLeader = (memberList: Player[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA);
```

上面代码想要实现一个 `getPartyLeader` 函数，返回党魁（数组的第一位）。

如果我们想要函数支持除 `Player`以外的类型呢？根据我们所知的信息，可以采取这样的做法：

```ts
const getPartyLeader = (memberList: Player[] | Enemy[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA);
// Player[] | Enemy[]
```

现在我们可以传入 `Player`组也可以传入 `Enemy`组，但是 `PartyLeader`常数可以为两组中任意一种类型，所以使用 `Player[] | Enemy[]`。

如果我们想要使用指定类型的话，也可以使用泛型：

```ts
const getPartyLeader = <T>(memberList: T[]) => {
  return memberList[0];
};

const partyLeader = getPartyLeader(partyA); // Player
```

`partyA` 数组内是`Player`类型， `partyLeader` 就为 `Player`类型。 让我们查看语法：

- `T` 是通常定义泛型的方法，但是你可以采用任意你喜欢的方式。

和使用 `any`一样， T 接收任意类型。所以我们可以修改传入的参数类型：

```ts
type Player = {
  name: string;
  hp: number;
};

type Enemy = {
  name: string;
  hp: number;
};

type Spell = {
  name: string;
  power: number;
};

const getPartyLeader = <T extends { hp: number }>(memberList: T[]) => {
  return memberList[0];
};

const playerPartyLeader = getPartyLeader(partyOfPlayers); // Ok
const enemyPartyLeader = getPartyLeader(partyOfEnemies); // Ok
const whatAreYouTrying = getPartyLeader(spellList); // Error
```

我们只能传入包含`hp`属性的对象。

<h3 id="tuplesintypescript">TypeScript中的元祖(Tuples)</h3>

正如我们之前看到的，数组可以包含不同的类型但不受位置限制。元组可以补充这一点。

```ts
type Weapon = {
  name: string;
  damage: number;
};

type Shield = {
  name: string;
  def: number;
};

const sword: Weapon = {
  name: 'Onion Sword',
  damage: 10
};

const shield: Shield = {
  name: 'Rusty Shield',
  def: 5
};

let equipment: [Weapon, Shield, boolean];

equipment = [sword, shield, true]; // OK
equipment[2] = false; // OK

equipment = [shield, sword, false]; // Error
equipment[1] = true; // Error
```

这样我们就拥有了类数组的类型，它关心类型的放置位置。

<h3 id="classesintypescript"> TypeScript中的类</h3>

由于从 ES6 开始 JS 中添加了类，TS 和 JS 的类大同小异：

```ts
class Job {
  public name: string;
  private level: number;
  readonly isExpansion: boolean;

  constructor(name: string, level: number, isExpansion: boolean) {
    this.name = name;
    this.level = level;
    this.isExpansion = isExpansion;
  }
}

const whiteMage = new Job('White Mage', 75, false);

console.log(whiteMage.name); // "White Mage"
console.log(whiteMage.level); // Error
console.log(whiteMage.isExpansion); // false

whiteMage.name = 'Blue Mage'; // Ok
whiteMage.level = 50; // Error
whiteMage.isExpansion = true; // Error
```

在 TS 类中，你可以访问类属性的修饰符（modifiers)：

- **public** - 可以自由访问属性和方法，这时 TS 类的默认值
- **private** - 只能从声明它的类访问
- **protected** - 限制声明类和子类访问
- **readonly** - 标记属性为不可变

<h3 id="interfacesintypescript">TypeScript中的接口(interfaces)</h3>

和 `类型别名`（type aliases)相同，我们可以使用`接口`(interfaces)来定义类：

```ts
interface Enemy {
  name: string;
  hp: number;
}

let attack = (target: Enemy): void => {
  console.log(`Attacking to ${target.name}`);
};
```

是不是看上去和`类型别名`很像？那应该使用哪一个呢？两种方法都可以控制不同类型的 TS，并且区别非常小：

你可以遵循以下规则来做取舍：

- 如果你编写面向对象的代码，可以使用接口，如果你编写函数式代码，可以使用 aliases。
- 公共 API 库、组件类型、state、JSX 使用接口。

因此，我在样板中加入了 ESLint 自动将类型别名转换为接口。

如果想要深入了解两者的区别，可以阅读[TS 手册中的这篇文章](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) ，但现在很多使用接口的功能都可以使用类型别名，反之亦然。

<h3 id="dommanipulationintypescript">TypeScript中的DOM操作</h3>

虽然在 React 中直接操作 DOM 的机会不多，但是我觉得还是有必要知道 DOM 的相关知识。

#### 如何从 DOM 检索元素

```ts
// HTMLFormElement | null
const form = document.querySelector('form');

// HTMLElement | null
const otherForm = document.getElementById('myFancyForm');

// HTMLSelectElement
const select = document.createElement('select');
```

执行`document.querySelector("form")`时， 常量`form`被类型推论为`HTMLFormElement` 或 `null`。 但在第二个例子中，我们通过 ID 来获取 dom，TS 并不知道是什么 HTML 元素，所以推论为泛型 `HTMLElement`。

```ts
const form = document.querySelector('form');

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(e);
}); // Error
```

TS 不知道是否能够通过查询选择器在 HTML 找到元素，所以不能对一个可能为 null 的类型添加 `addEventListener` 函数，你可以这样修改：

我确认会找到元素：

```ts
// HTMLFormElement
const form = document.querySelector('form')!;
```

使用 `!` 告诉 TS 放心，一定不会是`null`。

如果不为 null 运行：

```ts
const form = document.querySelector('form');

form?.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```

你可能在 [JS 可选链式运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)中见过“？”。

是铸造类型的时候了：

```ts
const otherForm = document.getElementById('myFancyForm') as HTMLFormElement;

otherForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(e);
});
```

通过 `HTMLFormElement` 告诉 TS 会找到什么类型的元素，而不是 `null`。

<h2 id="dommanipulationintypescript"> 如何结合React + TypeScript</h2>

让我们进入文章的第二个部分，记住，在第一个部分我们探讨了为什么使用 TypeScript，如何使用，以及这个语言的概览。

在这个部分，我们将学习如何在 React 中使用 TypeScript，如何解决相应的难题，以及如何使用 React 和 TypeScript 共同创建一个应用。

<h3 id="setup"> 设置</h3>

#### Create React App

对于 [CRA](https://create-react-app.dev) 用户来说，你们只需要设定模板：

```bash
npx create-react-app my-awesome-project --template typescript
```

#### Vite

使用 [Vite](https://vitejs.dev) 创建 TypeScript 项目和使用 CLI 一样简单，只需要选择 TypeScript 模板：

```bash
npm create vite@latest my-awesome-project
```

#### 添加到现有项目

如果你想要对已经存在的 JavaScript 项目添加 TypeScript，只需要添加对应开发依赖项：

```bash
npm install -D typescript
```

需要提醒你的事，如果是首次使用 TypeScript，不建议你从现有的项目着手。因为这样的话，你会不断地认为有一些部分还能运转，这对于学习来说没什么好处，你没办法从中体会 TypeScript 的优势。

<h3 id="typingcomponentprops"> 设置组件Props类型</h3>

在 React 项目中使用 TypeScript 最常用的场景是编写组件 props。

想要正确地编写组件 props，必须定义清楚组件接受什么样的 props、props 类型以及是否是必要的。

```ts
// src/components/AnimeDetail/Cover/index.tsx

type CoverProps = {
  url: string;
};

export default function Cover({ url }: CoverProps) {
  // ...
}
```

我们只使用 `url` prop ，类型为 `string` 并且是强制的。

另一个有多个 props 和可选项的例子：

```ts
// src/components/AnimeDetail/StreamingList/PlatformLink/index.tsx

type PlatformLinkProps = {
  name: string;
  url?: string;
};

export default function PlatformLink({ name, url }: PlatformLinkProps) {
  // ...
}
```

使用 `?` 来定义可选参数， TypeScript 知道在这个例子中`url` 的类型是 `string`，默认值为`undefined`，即便未传入`url` ，消费组件也不会报错。

让我们看一个更复杂的例子：

```ts
// src/components/AnimeDetail/Detail/index.tsx

type AnimeType = 'TV' | 'Movie';

type DetailProps = {
  liked: boolean;
  toggleFav: () => void;
  title: string;
  type: AnimeType;
  episodeCount: number;
  score: number;
  status: string;
  year: number;
  votes: number;
};

export default function Detail({
  liked,
  toggleFav,
  title,
  type,
  episodeCount,
  score,
  status,
  year,
  votes
}: DetailProps) {
  // ...
}
```

这次包含无数类型，包括 `function`和一个自定义类型 `AnimeType`。

所以总结一下，使用 TS 来编写 props：

- 对于消费组件来说的 props 验证
  - 不需要猜测组件需要什么
  - 不需要打开组件源码来检查需要什么数据
- 自动填充和文档记录
  - 直接从消费组件端知道自动填充的 prop 和 value，不需要提前浏览

![autocomplete](https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fcontent%2Ftypescript2%2Fautocomplete.webp&w=1920&q=75)

如果是使用复杂的组件，或是从第三方库使用组件的，这一定可以派上用场。

<h4 id="reactbuiltintypes"> React内置类型</h4>

在 React 和很多其他的库中，你会发现大量预置的类型，可以减轻开发者的编写负担。如以下示例：

```ts
// src/components/Layout/index.tsx

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // ...
}
```

一个自定义的 React 组件，接受其他元素作为子元素，在这种情况下 `children`被定义为`ReactNode` 类型。

##### 一个关于 React.FC 和 React.FunctionComponent 的提醒

你可以能会遇到这样定义组件 props 的语法：

```ts
type PlatformLinkProps = {
  name: string;
  url?: string;
};

const PlatformLink: React.FC<PlatformLinkProps> = ({ name, url }) => {
  // ...
};
```

使用 `React.FC`或者使用 `React.FunctionComponent`时，上面的代码生效，但是你需要知道这样使用的弊端，也就是为什么在本文中我们不这样用：

- 必须使用函数表达式而不是函数声明，虽然这是一个很小的点，但是我的编码习惯是使用函数声明。
- 不可以使用泛型（之后会讨论）。
- 在过去，这样会导致 props 非直接地接受`children`属性，即便该组件并不使用这个属性。直到 React18 之后，这个问题才改善。

<h4 id="returntypeofareactcomponen"> React 组件的返回类型</h4>

最后一块拼图，组件返回什么？可以使用内置的类型：`React.ReactElement`、 `React.ReactNode`和 `JSX.Element`:

```ts
export default function Favorites(): JSX.Element {
  // ...
}
```

总结一下： **让 TypeScript 自行推论返回类型**。 如果你需要这一部分的详细介绍，我推荐[阅读这个来自 stack overflow 的帖子](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)。

<h4 id="combinationswithtemplateliterals"> 集合模板字面量 </h4>

在[动漫预告片项目](https://animetrailers.dastasoft.com/)中，我引入的一个自定义 UI 就是很好的示例。你可以查看`src/components/UI`中的组件，其中大部分内容都会在本文讨论：

让我们看一下自定义组件`Position`：

```ts
// src/components/UI/Position/index.tsx

import React from 'react';

import { StyledPosition } from './StyledPosition';

type VPosition = 'top' | 'bottom';
type HPositon = 'left' | 'right';

export type PositionValues = `${VPosition}-${HPositon}`;

type PositionProps = {
  children: React.ReactNode;
  position?: PositionValues;
};

export default function Position({
  children,
  position = 'top-right'
}: PositionProps) {
  return <StyledPosition position={position}>{children}</StyledPosition>;
}
```

Position 是一个简单的组件，可以与任何其他具有绝对位置的组件一起使用，可以通过 `top-left`, `top-right`, `bottom-left`和 `bottom-right`将组件放置在四个边上。

使用字面量模板来创建新的类型并不新鲜，在这里有趣的地方是结合 `${VPosition}-${HPositon}`和联合类型 `top` | `bottom` ，TypeScript 会自动生成所有组合，就可以创建我们需要的四种类型。

<h4 id="howtouseexclude"> 如何使用 `Exclude`</h4>

让我们给上面的例子添加更多值：

```ts
type VPosition = 'top' | 'middle' | 'bottom';
type HPositon = 'left' | 'center' | 'right';

export type PositionValues = `${VPosition}-${HPositon}`;
```

模板会创建所有可能的组合，所以我们将拥有 `"top-left" | "top-center" | "top-right" | "top-left" | "center-left" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right"`。

有一条比较奇怪： `middle-center`，我们只需要`center`，这时就可以使用 `Exclude` ：

```ts
type PositionValues =
  | Exclude<`${VPosition}-${HPositon}`, 'middle-center'>
  | 'center';
```

这时 `PositionValues`会生成`"center" | "top-left" | "top-center" | "top-right" | "middle-left" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right"`。

使用 exclude 删除`middle-center`之后再添加`center`。

<h4 id="customhtmlcomponents"> 自定义 HTML 组件</h4>

如果你想创建一个行为类似`input`的组件，但是你又不想编写 input HTML 的所有属性和方法，你可以这样：

```ts
// src/components/UI/Input/index.tsx

import React from 'react';

import styles from './StyledInput.module.css';

type InputProps = React.ComponentProps<'input'>;

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return <input {...props} className={styles.StyledInput} ref={ref} />;
  }
);

export default Input;
```

使用`React.ComponentProps`，你可以指定你需要基于什么类型创建一个组件，获取一个真正的 HTML input 的功能来自定义 UI 组件。但如果你想覆盖掉一些属性甚至禁用怎么办？

##### 忽略（Omit）

让我们以 UI 组件中的 `Tag`为例：

```ts
// src/components/UI/Tag/index.tsx

import React from 'react';

import { StyledTag } from './StyledTag'; // aka a styled span

type TagProps = {
  variant?: 'solid' | 'outlined';
  text: string;
} & Omit<React.ComponentProps<'span'>, 'children'>;

export default function Tag({ text, variant = 'solid' }: TagProps) {
  return <StyledTag variant={variant}>{text}</StyledTag>;
}
```

在这个例子中，我们显式地传递了一个`text`展示组件的 `children` 。你或许不希望消费组件使用原始的`children`，你可以忽略掉 `React.ComponentProps`中的这个属性。

<h3 id="typinghooks"> 定义Hook的类型</h3>

现在让我们看一下如何编写 React 中一些常用的 hook。

<h4 id="usestatehook"> useState hook</h4>

大多数情况下，`useState` 不需要额外的操作，TypeScript 会自行推论。但是如果初始值和未来值不同则需要特别声明。

```ts
// src/pages/Search.tsx

export default function Search() {
  const [animeList, setAnimeList] = useState<Anime[] | null>(null);
  const [page, setPage] = useState(1);
  // const [page, setPage] = useState<number>(1)
  // ...
}
```

`page`的状态可以根据初始值推论为数字，它的行为和注解里的代码一模一样。state 的 setter 也会定义为 `React.Dispatch<React.SetStateAction<number>>`， `number`来替换推论的类型。

如果`animeList` 没有任何显式类型的话就为 `null`。在组件获取必要的数据之前这都是正确的，但是最终会是包含 `Anime`类型集合，所以必须将这个类型显式地设置为这两个可能类型的组合。

除了给 useState 的初始 state 设置为 null 以外，还可以：

```ts
export default function Search() {
  // const [animeList, setAnimeList] = useState<Anime[] | null>(null)
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [anime, setAnime] = useState<Anime>({} as Anime);
  // ...
}
```

请仔细观察 `anime, setAnime` 代码行，它之所以生效是因为这不是一个集合，而是单个元素。
这里的区别在于你对编译器没有完全诚实，你预设会得到这个对象形状(shape)的值，有一定风险。

```ts
export default function Search() {
  const [anime, setAnime] = useState<Anime>({} as Anime);
  // ...

  return <div>{anime.coverURL}</div>;
}
```

如果没有在可选项中提供正确的值，会在运行时报错。

##### 如何将 state 作为 props 传递

多数情况下，是由上至下传递 state，并且等 state 完成或者设置好了才能传递到子组件，所以需要在编写 props 的时候想好状态的类型。

```ts
type FancyComponentProps = {
  anime: Anime;
  setAnime: React.Dispatch<React.SetStateAction<Anime>>;
};

const FancyComponent = ({ anime, setAnime }: FancyComponentProps) => {
  // ...
};
```

最好清楚自己传递的是什么类型。如果你觉得困难的话，可以使用 IDE 的提示。

![type intellisense](https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fcontent%2Ftypescript2%2Ftype-intellisense.webp&w=1920&q=75)

<h4 id="usereducerhook"> useReducer hook</h4>

你已经具备正确定义 `useReducer`所需的所有知识。

下面的例子中我简化了代码，正式代码会在泛型部分讲解：

```ts
// src/hooks/useFetch.ts

const enum ACTIONS {
  LOADING,
  FETCHED,
  ERROR
}

type State = {
  data?: Anime[];
  loading: boolean;
  error?: Error;
};

type Action =
  | { type: ACTIONS.LOADING }
  | { type: ACTIONS.FETCHED; payload: Anime }
  | { type: ACTIONS.ERROR; payload: Error };

const initialState: State = {
  loading: true,
  error: undefined,
  data: undefined
};

const fetchReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...initialState };
    case ACTIONS.FETCHED:
      return { ...initialState, data: action.payload, loading: false };
    case ACTIONS.ERROR:
      return { ...initialState, error: action.payload, loading: false };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(fetchReducer, initialState);
```

和往常一样， `status` 和 `dispatch` 来自于使用 `useReducer`时的 `reducer function` 以及一个 `initial state`。你不需要额外编写其他内容，但是你必须编写`state` 和 `actions`，因为 state 和 dispatch 的行为是根据它们来的。

##### initialState

我们可以简化`initial state` 这个部分。 不是创建一个`State`类型，而是使用 `typeof initialState` 来定义。

```ts
const initialState: State = {
  loading: true,
  error: undefined,
  data: undefined
};

const fetchReducer = (state: typeof initialState, action: Action) => {
  // ...
};
```

这样写的弊端是无法控制未来的 `data`和`error`的值，如果 state 的类型始终保持一致的话，没有问题，除此之外可以使用 `State`类型。

##### Actions

你可以使用组合（union）来处理 reducer 的 action 部分，你也可以选择使用枚举（Emun），这样写的话比在多个地方写字符串要更不容易出错。

##### reducer function

你只需要指定传入函数的参数的类型，这个已经在上一部分完成。

##### 作为 props 传递

另外，如果你需要从 useReducer 传出 prop，你必须编写对应的消费组件 props。

- `state` 必须是你定义在 `initialState` 的类型，或者是例子中的自定义 `State`类型。
- `dispatch` 是 `React.Dispatch<Action>` 中自定义 `Action`类型。

<h4 id="usecontext"> useContext </h4>

示例项目中的上下文用于管理你喜欢动漫的列表，你可以在应用不同地方切换它们的 state。 `useContext` 并不是一个难点，使用它的方法就是上述内容的结合——让我们一起看代码：

```ts
// src/context/FavContext.tsx

type FavContextType = {
  favList: Favorite[];
  // setFavList: React.Dispatch<React.SetStateAction<Favorite[]>>
  toggleFav: (id: number, favorite: Favorite) => void;
};

export const FavContext = createContext({} as FavContextType);

export const FavContextProvider = ({ children }: FavContextProviderProps) => {
  const [favList, setFavList] = useState<Favorite[]>([]);

  const toggleFav = (id: number, favorite: Favorite) => {
    /* ... */
  };

  // ...

  return (
    <FavContext.Provider value={{ favList, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
};
```

`useContext`和 `useState`定义类型的规则相同。在我们的示例中，初始值应该为 null，但是我们使用了一个小技巧，在`createContext`添加`as`，并且定义了一个对象，包含一个`favourite animes`数组，和负责切换的函数。

注解部分是你根据场景需要的特定 setter。

接下来的代码都是你在 `useState` 中学过的内容。 在 `Favorite` 类型中，useState 会推断必要的类型，这些类型可以直接在消费组件中访问。

```ts
// src/components/AnimeDetail/index.tsx

const { favList, toggleFav } = useContext(FavContext);
```

<h4 id="userefhook"> useRef hook</h4>

可以通过两种方式来使用 `useRef`，我们将分别讲解。

##### DOM 引用

其中一个方式是使用`useRef`保持一个 DOM 元素的引用 。

在示例项目中，通过持有对动画列表中最后一项的可观察对象的引用，你会发现它可以无限滚动。这让你知道用户何时在视口中查看该项目并触发新的获取。

让我们查看使用 useRef 来引用 DOM 一个更简短的示例，你也可以 [查看 useRef + observer 的完整版本](https://github.com/dastasoft/animetrailers/blob/main/src/components/AnimeList/index.tsx):

```ts
const myDomReference = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (myDomReference.current) myDomReference.current.focus();
}, []);
```

一个典型的情况是当页面加载的时候，你希望自动聚焦在输入框，只需要指定好引用的 DOM 元素，在这个示例中就是`HTMLInputElement`。

使用上面代码需要注意的是：

- 钩子会返回一个只读的 `current` 属性。
- 你不需要手动编写`current`，React 会通过`React.RefObject<HTMLInputElement>`处理。
- 如果 DOM 元素永远指向现在，你可以将初始值设定为 `null!` 以避开 if 检查。

##### 可变引用

`useRef` 的第二个使用场景是在渲染之间保持可变值。例如，在你需要为组件的每个实例提供一个唯一变量的情况下，该变量在渲染之间存在并且不会触发重新渲染。

```ts
const isFirstRun = useRef(true);

useEffect(() => {
  if (isFirstRun) {
    // ...
    isFirstRun.current = false;
  }
}, []);
```

使用上面代码，你需要注意的是：

- 现在你可以改变`current`的值。
- React 提供的 `React.MutableRefObject<boolean>`现在是`RefObject`内部的`MutableRefObject`（可变引用对象）。

<h3 id="forwardingref">传递ref</h3>

如果在某些时候你需要像 useRef 部分那样传递对 HTML 元素的引用，那么为该组件编写 props 会略有不同：

```ts
// src/components/AnimeGrid/Card/index.tsx

const Card = React.forwardRef(
  (
    { id, coverURL, title, status, score, type, year }: CardProps,
    ref: React.Ref<HTMLImageElement>
  ) => {
    // ...
  }
);
```

要传递引用，需要用`React.forwardRef`打包组件，这将与组件的常规 props 一起注入 `ref`（是包装在 `React.Ref` 类型中的任何 HTML 元素）。

这样我们就知道我们传递的 HTML 元素的类型，如果你的使用场景不是这样，可以使用泛型。

<h3 id="howtousetypescriptgenericsinreact">如何在React中使用TypeScript范型</h3>

假设我们想通过包装现有的 HTML 元素来创建自定义 UI 组件，但像大多数组件库一样为它提供一组自定义属性。

这些组件库也提供一些灵活性，如哪一个 HTML 元素被渲染由 `as`属性控制 – `Text` UI 组件的示例就是这样。

Text UI 组件用来显示一组尺寸和颜色的任意文本，同时我们也希望使用者选择他们需要的 HTML 元素，而不是只限定于 `p` 或 `span`。

在这个示例中，你不能提前知道用户会选择什么元素传入组件，所以你需要使用泛型来推断它们使用了什么类型。

所以组件的 prop 如下：

```ts
// src/components/UI/Text/index.tsx

type TextOwnProps<T extends React.ElementType> = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'base' | 'primary' | 'secondary';
  as?: T | 'div';
};

type TextProps<T extends React.ElementType> = TextOwnProps<T> &
  React.ComponentPropsWithoutRef<T>;

export default function Text<T extends React.ElementType = 'div'>({
  size = 'md',
  variant = 'base',
  children,
  as = 'div'
}: TextProps<T>) {
  // ...
}
```

让我们仔细查看上面代码：

- 我们使用`T`来命名泛型，你也可以使用任意字母。
- T 扩展自`React.ElementType`，即 HTML 元素的最通用的类型。所以我们知道传递给组件的任何东西都是基于 HTML 元素，而不是所有可能的 HTML 元素的手动类型的组合。
- `TextProps` 的第二个类型有两个用途：
- 根据 HTML 元素的类型，我们需要额外的属性。当消费组件使用 Text 组件作为`label`时，我们希望检查并建议与为`span`时不同的属性。为此，我们需要使用 `React.ComponentProps`。在这种情况下，我们不需要引用，因此我们显式使用`ComponentPropsWithoutRef`类型。
- `React.ComponentProps`同时也提供 `children` prop，所以不需要在 `TextOwnProps`引入。
- 你也不需要处理`Omit` 或者其他排除技术，因为 `children` 并没有被 `TextOwnProps` props 修改或者覆盖。

通过这个例子，我们有一个非常灵活的组件，它的类型正确并且提供了良好的开发者体验。

在示例项目中，你可以测试不同的自定义 UI 组件，来检查上述模式的实现。

<h3 id="typingacustomusefetchhook"> 定义自定义useFetch Hook类型</h3>

在示例项目中，我编写了一个简单的钩子来获取数据，并且利用`localStorage`来暂时缓存数据，这样就不会超出 API 的限制。这没什么大不了的，但我认为它是本文中解释的所有内容的完整示例。

让我们一起看看这个钩子 – 但是我更推荐你查看 [实际文件](https://github.com/dastasoft/animetrailers/blob/main/src/hooks/useFetch.ts) ，以及理解这本文章不同部分的讲解。

```ts
// src/hooks/useFetch.ts

type State<T> = {
  data?: T;
  loading: boolean;
  error?: Error;
};

function useFetch<T = unknown>(
  url?: string,
  { initialFetch, delayFetch }: Options = { initialFetch: true, delayFetch: 0 }
): State<T> {
  // ...
}
```

- 钩子接受一个泛型，你并不能提前知道你将处理什么类型的数据。
- 钩子接受 `url`来确定从哪里获取资源，以及一个选项来决定是否需要初始获取，以及两次获取之间有没有延迟。
- 如果不设置`options`拥有默认值。
- 钩子返回一个类的`State`，由消费组件通过泛型指定。
- 状态类型定义由消费组件提供的可选数据类型：如加载标志变量，或者发生错误时返回的 error。

让我们看一下消费组件的使用情况：

```ts
// src/pages/AnimeDetail.tsx

const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData>>(
  getAnimeFullById(Number(id))
);
```

- `getAnimeFullById` 返回终端的 URL。
- `useFetch`会返回 `JikanAPIResponse`类型的`data`，根据情况不同，返回的数据也不同。在我们的示例中为 `RawAnimeData`。

<h2 id="conclusion">总结</h2>

本文探索了 TypeScript 能够解决的一些常见痛点。特别是当你和团队一起工作，并且完全理解每一个组件的输入和输出、钩子以及上下文，TypeScript 非常有用。

使用 TypeScript 意味着代码更加可靠、记录更完善以及可读性更强。同时也更不容易出错并且更好管理。

编写代码不仅仅是创建一个有效的算法。你也和别人一起工作（即便你是独立开发者，你也要发表你的作品，寻求他人的帮助和协作），在这些场景中，组员之间的沟通是关键。

我喜欢将 TypeScript 类比为人类的 Babel：我们通过 Babel 来优化 CPU 的使用，同时也需要一个类似的 Babel 来指导和扩展团队合作。

还剩下一个问题， **什么时候需要使用 TypeScript**?

- 如果你和别人协作，或者你计划发表代码，你可能希望代码可读性更好，更能够清晰表达你的想法。
- 如果你在编写一个大型项目。

所有大项目都是由小项目组成，所以注意这里“大型”的定义。

这篇文章相当长，如果你读到这里，我对你的付出和热情表示感谢。我的初衷并不是文章的曝光，而是解释清楚为什么。

希望你喜欢这篇文章，如果你已经从 JS 转换成 TS，或者两个都在使用，或者思考过是否使用但是暂时不考虑以及其他任何情况– **我非常渴望听到你的分享**。
