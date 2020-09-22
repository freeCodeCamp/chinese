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

比如，我们创建一个简单的回应。首先，将 `MessageParser` 改为：

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

Nice. Now if we type in "hello" into the chat field, we get this back:

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-10-at-16.39.48.png)

Fantastic. Now that we can control parsing the message and responding with an action, let's try to make something more complicated. Let's try to make a bot that provides you with learning resources for the programming language you ask for.

## Creating a learning bot

First, let's go back to our  `config.js`  file and make some slight changes:

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

OK, so we've added some properties here and changed our initial message. Most notably we have given the bot a name and changed the color of the  `messagebox`  and  `chatbutton`  components.

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-09.44.33.png)

Alright. Now we're getting to the good part.

Not only can we parse messages and the respond to the user with a chatbot message, we can define custom React components that we want to render with the message. These components can be anything we want – they are just plain old React components.

Let's try it out by creating an options component that will guide the user to possible options.

First, we define the learning options component:

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

Now that we have our component, we need to register it with our chatbot. Head over to  `config.js`  and add the following:

```jsx
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";

```

### Understanding widgets

Alright. Let's take a breather and explore what we've done.

1.  We created the  `LearningOptions`  component.
2.  We registered the component under  `widgets`  in our config.
3.  We gave the  `createChatbotMessage`  function an options object specifying which widget to render with this message.

The result:

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-10.41.49.png)

Fantastic, but why did we need to register our component in the config as a widget function?

By giving it a function, we control when we perform the invocation. This allows us room to decorate the widget with important properties inside the chatbot.

The widget that we define will receive a number of properties from the chatbot (some of which can be controlled by config properties):

1.  `actionProvider`  \- we give the  `actionProvider`  to the widget in order to execute actions if we need to.
2.  `setState`  \- we give the top level chatbot  `setState`  function to the widget in case we need to manipulate state.
3.  `scrollIntoView`  \- utility function to scroll to the bottom of the chat window, should we need to adjust the view.
4.  `props`  \- if we define any props in the widget config, those will be passed to the widget under the property name  `configProps`.
5.  `state`  \- if we define custom state in the config, we can map it to the widget by using the  `mapStateToProps`  property

If you recall, we defined some options in the  `LearningOptions`  component:

```
  const options = [
    { text: "Javascript", handler: () => {}, id: 1 },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];
```

Currently these have an empty handler. What we want to do now is to replace this handler by a call to the  `actionProvider`.

So what do we want to have happen when we execute these functions? Ideally, we'd have some sort of chatbot message, and an accompanying widget that displays a list of links to helpful resources for each topic. So let's see how we can implement that.

First, we need to create the link list component:

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

Great. We now have a component that can display a list of links. Now we need to register it in in the widget section of the config:

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

So far so good, but we want to dynamically pass in props to this component so that we can reuse it for the other options as well. This means that we need to add another property to the widget object in the config:

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

Now these props will be passed to the  `LinkList`  component as props.

Now we need to do two more things.

1.  We need to add a method to the  `actionProvider`

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

2\. We need to add this method as the handler in the  `LearningOptions`  component:

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

Alright! That was quite a lot of information. But if we now try to click the JavaScript option in the chatbot, we get this result:

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-17.35.27.png)

Perfect. But we don't want to stop there, this is a chatbot after all. We want to be able to respond to users who want to use the input field as well. So we need to make a new rule in  `MessageParser`.

Let's update our  `MessageParser.js`  file to look like this:

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

Now try typing "javascript" into the input field and sending the message. You should get the same list in response from the chatbot.

So there you have it. We've set up a chatbot that renders a list of possible options and responds to user input.

For now, we've only set up the bot to handle when someone clicks or types in JavaScript, but you can try to expand the other options on your own.  [Here's a link to the repository][9].

All the code is on GitHub, so feel free to dive into  [the react-chatbot-kit code or docs][10].

## Conclusion

Building things is fun, and a great way to expand your skillset. There are no limits to where you could take this next.

Perhaps you could make a chatbot that finds the ideal product in webshop based on some simple questions (utilising routing in the app), or maybe you can make one for your company taking care of the most common customer inquiries.

Feel free to expand, come up with new ideas, and test them out. And if you see something that can be improved, send a pull request.

If you want to improve as a developer, I encourage you to keep building. It truly is the only path forward. If you enjoyed this article, and would like to know when I post more content, you can  [follow me on Twitter][11].

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
