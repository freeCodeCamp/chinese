> * 原文地址：[How to Build a Chatbot with React React 项目实践——创建一个聊天机器人](https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/)
> * 原文作者：Fredrik Strand Oseberg
> * 译者：Chengjun.L
> * 校对者：

![How to Build a Chatbot with React](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/wooden-robot-6069-1.jpg)

我的哲学很简单：如果你想要在某个方面精通，那么你需要持续实践，实践一次不会有多少效果，你必须反复实践。

我在编程这件事上就是这么做的。

在这个过程中，我特别感受到：创建一些有意思的好东西是非常有趣的。你可以向朋友展示自己引以为傲的作品，坐下来敲代码实现它的过程会让你感觉欢喜。

比如说我创建了一个聊天机器人（[npm 包][1]）。

我们一起来创建吧！如果你想自己独立完成这个挑战，可以直接参考[这份文档（其实是一个聊天机器人成品）][2]。或者，你可以看[这个 YouTube 视频][3]来学习。

好啦，我们开始吧。我就假设你已经安装了 Node，可以运行 npx 命令。如果没有的话，访问[这里][4]。

## 初始设置

```
// 运行以下代码
npx create-react-app chatbot
cd chatbot
yarn add react-chatbot-kit
yarn start
```

安装 npm 包，启动开发服务器 localhost:3000。

然后打开 `App.js`，修改如下：

```jsx
import Chatbot from 'react-chatbot-kit'


```

现在你的开发服务器是这样的：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-10-at-16.03.51.png)

聊天机器人要正常工作，需要接收三个 props。首先，需要具有 `initialMessages` 属性，包含聊天信息对象。然后，需要有 `MessageParser` class 用于解析，还有 `ActionProvider` class 基于解析结果执行我们需要它执行的动作。

稍后我们进一步讲解这个。现在，[在这里获取代码][5]

- 把 `MessageParser` 代码放到 `MessageParser.js` 文件
- 把 `ActionProvider` 代码放到 `ActionProvider.js` 文件
- 把 config 代码放到 `config.js` 文件

现在返回到 `App.js` 文件，添加以下代码：

```jsx
import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

```

localhost:3000 现在应该是这样显示：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-10-at-16.16.57.png)

很棒！我们已经渲染了聊天机器人，可以输入和提交一些信息了。试试看，怎么没有显示什么呢？

## 理解聊天机器人是怎么工作的

我们暂停一下，看看 `MessageParser` 和 `ActionProvider` 是怎么配合让聊天机器人执行动作的。

机器人初始化的时候，内部 state 的 `messages` 属性获取 `initialMessages` 属性值, 将信息渲染到屏幕。

接着，当我们在聊天框输入信息，按下 submit 提交键时，`MessageParser`（作为 props 传递给机器人)调用 `parse` 方法。

我们进一步看看 `MessageParser` 的代码：

```jsx
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

```

代码中包含 `actionProvider`，这跟我们传递给聊天机器人的 props `ActionProvider` 是一样的。我们通过这个代码解析信息，并告诉机器人执行什么动作。

比如，我们创建一个简单的响应。首先，将 `MessageParser` 改为：

```
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
if (lowerCaseMessage.includes("hello")) {
  this.actionProvider.greet()
}  }
}

```

`MessageParser` 接收到用户的信息，检查是否包含 “hello”。如果包含，则调用 `actionProvider` 的 `greet` 方法。

不过现在还行不通，因为我们还没有执行 `greet` 方法。稍后再处理这个。先处理 `ActionProvider.js` 文件如下：


```
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  updateChatbotState(message) {
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
    }))
  }
}

```

现在我们在聊天框输入 “hello”，可以看到：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-10-at-16.39.48.png)

很好！解析信息和响应都没有问题了。我们再做一些更复杂的东西，让机器人提供我们想要的编程语言学习资料。

## 创建一个学习机器人

首先，回到 `config.js` 文件，稍作修改：

```
import { createChatBotMessage } from 'react-chatbot-kit';
const config = { 
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

```

我们增加了一些属性，修改了初始信息，特别是给机器人取了个名字，更改了 `messagebox` 和 `chatbutton` 组件的颜色。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-09.44.33.png)

好玩的部分来了。

我们不仅可以渲染信息和回复给用户，还可以根据想要的信息来自定义 React 组件。比如，我们创建一个选择组件，引导用户做不同选择。

首先，定义学习选项组件：

```jsx
// in src/components/LearningOptions/LearningOptions.jsx
import React from "react";
import "./LearningOptions.css";
const LearningOptions = (props) => {
  const options = [
    { text: "Javascript", handler: () => {}, id: 1 },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};
export default LearningOptions;
// in src/components/LearningOptions/LearningOptions.css
.learning-options-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

```

然后在机器人代码中使用组件。对 `config.js` 文件作如下操作：

```jsx
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";

```

### 理解控件

小结一下：

- 我们创建了 `LearningOptions` 组件
- 在 config 的  `widgets` 下使用组件
- 给 `createChatbotMessage` 函数一个选项对象，说明需要渲染哪个控件和信息

结果：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-10.41.49.png)

很棒！但是，为什么要在 config 中以控件函数的形式引入组件呢？

通过将其设置为函数，我们可以在调用时以聊天机器人的重要属性来装饰控件。

我们定义的控件会接收到机器人的各种属性：

- `actionProvider`  \- 将 `actionProvider` 添加到控件，以执行动作
- `setState`  \- 将 `setState` 添加到控件，以操作 state
- `scrollIntoView`  \- 滑动到聊天框底部，在需要调整视图时使用这个函数
- `props`  \- 给控件定义的 props 将通过 `configProps` 传递给控件
- `state`  \- 通过 `mapStateToProps` 属性将自定义 state 传递给控件

回头想想，我们给 `LearningOptions` 组件设置了一些选项：

```
  const options = [
    { text: "Javascript", handler: () => {}, id: 1 },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];
```

暂时这些选项有一个空的 handler，我们想调用 `actionProvider` 替换 handler。

那么，我们想在执行这些函数的时候发生什么呢？理想状况下，机器人已经具有一些回复信息以及一个控件显示每个主题对应的资源列表链接。我们看看怎么实现。

首先，创建一个链接列表组件：

```jsx
// in src/components/LinkList/LinkList.jsx
import React from "react";
import "./LinkList.css";
const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));
  return <ul className="link-list">{linkMarkup}</ul>;
};
export default LinkList;
// in src/components/LinkList/LinkList.css
.link-list {
  padding: 0;
}
.link-list-item {
  text-align: left;
  font-size: 0.9rem;
}

```

将这个组件添加到控件中：

```jsx
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
const config = {
  ...
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
    },
  ],
};

```

如果我们想动态给这个组件传递参数，以便对其他选项复用，那就需要给控件添加另一个属性：

```jsx
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
const config = {
  ...,
  widgets: [
    ...,
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

```

现在，这些 props 会作为参数传递给 `LinkList` 组件。

我们再做两件事情。

- 给 `actionProvider` 添加一个方法

```jsx
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );
this.updateChatbotState(message);  };
  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
this.setState((prevState) =&gt; ({
  ...prevState,
  messages: [...prevState.messages, message],
}));  }
}

```

- 把这个方法作为 `LearningOptions` 组件 handler

```jsx
import React from "react";
import "./LearningOptions.css";
const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};

```

好啦，信息量比较大。现在如果我们点击聊天机器人的 JavaScript 选项，会出现：

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-17.35.27.png)

完美！再进一步，如果用户输入信息，机器人也应该响应。所以我们需要给 `MessageParser` 创建新规则。

更新 `MessageParser.js` 文件：

```jsx
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
if (lowerCaseMessage.includes("hello")) {
  this.actionProvider.greet();
}

if (lowerCaseMessage.includes("javascript")) {
  this.actionProvider.handleJavascriptList();
}  }
}

```

在输入框键入 “javaScript”，机器人会回复同样的清单。完成啦！

欢迎在 GitHub 访问[代码和文档][10].

## 结语

创建项目很有趣，也是一个帮助你拓展技能的很棒的方式。你完全可以动动脑筋，在这个项目基础上再开发别的，比如一个机器人通过一些简单的问题找到网店里最适合的产品，或者是一个帮公司回复顾客常见问题的机器人。你可以尽量实践你的新想法。也欢迎你 pull request，帮我完善这个项目。

我觉得持续创建项目真的是开发者提升自己的唯一方式，建议你现在就动起来！

[1]: https://www.npmjs.com/package/react-chatbot-kit
[2]: https://fredrikoseberg.github.io/react-chatbot-kit-docs/
[3]: https://youtu.be/vTpk-PKZwTs
[4]: https://nodejs.org/
[5]: https://gist.github.com/FredrikOseberg/c1e8ec83ade6e89ca84882e33caf599c
[6]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/%22
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide%22
[8]: https://frontendmasters.com%22/
[9]: https://github.com/FredrikOseberg/fcc-chatbot-example
[10]: https://github.com/FredrikOseberg/react-chatbot-kit
[11]: https://twitter.com/foseberg
