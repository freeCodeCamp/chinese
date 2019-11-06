> * 原文地址：[How to build a real-time todo app with React Native](https://www.freecodecamp.org/news/how-to-build-a-real-time-todo-app-with-react-native-19a1ce15b0b3/)
> * 原文作者：Divyanshu Maithani
> * 译者：blackcai
> * 校对者：

# 未完成翻译,屏蔽了图片

[How to build a real-time todo app with React Native](https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png)

A todo app touches on all the important parts of building any data-driven app, including the  **C**reate,  **R**ead,  **U**pdate and  **D**elete (CRUD) operations. In this story I’ll be building a todo app with one of the  [most popular mobile frameworks][1],  **React Native**.
一个 todo app 涉及搭建任何数据驱动 app 的重要部分，包括**创建**，**读取**，**更新**和**删除**（CRUD）操作。 我将在这个案例里面使用[最流行的移动框架][1]之一 **React Native** 搭建一个 todo app。

I’ll be using ReactiveSearch Native, an open-source library which provides React Native UI components and simplifies building data-driven apps.
我将使用 [ReactiveSearch Native][2]，这是一个提供 React Native UI 组件并快捷搭建数据驱动 app 的开源库。

Here’s what I’ll be building in this story:
这是在这个故事中我将搭建的 app：

[图片](https://cdn-media-1.freecodecamp.org/images/1*bbDAbPL1rYl2k5fPFDtFHg.png)

Todo App
Check out the app on  [snack][3]  or on  [expo][4].
你可以在 [snack][3]或者 [expo][4] 上了解这个 app.

### What is React Native?
### 什么是 React Native？
Here’s what the  [docs][5]  say:
以下是[文档][5]的描述：

> React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
>React Native 允许您仅使用 JavaScript 搭建移动 app。它和 React 使用相同的设计，让你通过声明组件组成丰富的移动 UI。

Even if you’re just getting started with React or React Native, you should be able to follow along with this story and build your very own real-time todo app.
即使你刚开始使用 React 或 React Native，你也应该能够按照这个故事来搭建自己的实时待办事项 app。

### Why use ReactiveSearch? ⚛
### 为什么我们要使用 ReactiveSearch?⚛

[ReactiveSearch][6]  is an open-source React and React Native UI components library for Elasticsearch which I’ve co-authored with  [some awesome people][7]. It provides a variety of React Native components that can  [connect to any Elasticsearch][8]  cluster.
[ReactiveSearch][6] 是一款我和[一群很棒的小伙伴][7]合作为 Elasticsearch 开发的 React 和 React Native UI 开源组件库，它提供了各种可以[连接到任何的 Elasticsearch][8] 集群的 React Native 组件。

I’ve written another story on  [Building a GitHub Repo Explorer with React and Elasticsearch][9]  which you may check out for a brief overview of Elasticsearch. Even if you’ve had no experience with Elasticsearch you should be able to follow along with this story fine.
我用 [React 和 Elasticsearch 编写了另一个关于搭建 GitHub Repo Explorer 的故事][9]，你可以查看 Elasticsearch 的简要概述。 即使你没有 Elasticsearch 的经验，你也应该能够很好地跟上这个故事。

### Setting things up ⚒
### 先做一些设置准备。⚒

We will be using the  [React Native version][10]  of the library here.
我们将在这里使用的 [React Native 版本][10]库。

Before we start building the UI, we’ll need to create a datastore in Elasticsearch. ReactiveSearch works with any Elasticsearch index and you can easily  [use it with your own dataset][11].
在我们开始搭建 UI 之前，我们需要在 Elasticsearch 中创建一个数据存储区。 ReactiveSearch 可以与任何 Elasticsearch 索引一起使用，您可以轻松地将它与您[自己的数据集][11]一起使用。


[图片](https://cdn-media-1.freecodecamp.org/images/1*7be2L3leZOfV6hwRIcB9Mg.png)

View my app dataset  [here][12]. You can also clone this to your own app
在[此处][12]查看我的应用数据集。 您也可以将其克隆到您自己的应用中。

For brevity, you can use  [my dataset][13]  directly or create one for yourself using  [appbase.io][14]which lets you create a hosted Elasticsearch index (aka app).
为了简洁起见，您可以直接使用[我的数据集][13]或者使用可以让你创建一个 Elasticsearch 索引数据集的[appbase.io][14]。

All the todos are structured in the following format:
所有待办事项的结构都采用以下格式：

```js
{
  "title": "react-native",
  "completed": true,
  "createdAt": 1518449005768
}
```

### The starter project
### 启动项目

Before we get started, I would recommend installing  [yarn][15]. On Linux it can be done simply by adding the yarn repository and running the install command via your package manager. On Mac, you should install  [Homebrew][16]  first to make things simpler.  [Here][17]  are the yarn installation docs for more detail. The next thing which you may install is  [watchman][18]. Its a file watching service which will help the react-native packager to run smoothly.
在我们开始之前，我建议安装 [yarn][15]。 在 Linux 上，只需添加 yarn 存储库并通过包管理器运行 install 命令即可完成。 在 Mac 上，你应首先安装 [Homebrew][16] 以使事情变得更简单。 [这里][17]是 yarn 详细的安装文档。 接下来你需要安装 [watchman][18]。 它是一个文件监听服务，它将帮助 react-native packager 顺利运行。

I’ve setup the starter project with  [create-react-native-app][19]  in a GitHub branch  [here][20]. You may  [download a zip][21]  or clone the base branch by running the following command: 
我在[这里][20]使用 GitHub 分支中的 [create-react-native-app][19] 设置了启动项目。 你可以通过运行以下命令来[下载 zip][21] 或克隆基础分支：


```
git clone -b base https://github.com/appbaseio-apps/todos-native
```

-   Next install the dependencies and start the packager:
-   接下来安装依赖项并启动 packager：

```
cd todos-native && yarn && yarn start
```

-   After the packager starts, you may run the app on your phone using the  [Expo][22]  app or using an Android or IOS emulator:
打包机启动后，你可以使用 [Expo][22] app 或使用 Android 或 IOS 模拟器在手机上运行 app：

[图片](https://cdn-media-1.freecodecamp.org/images/1*vTzfrdAPwha5GKpkzxaOeQ.png)
Base setup with all tabs. Clone from  [here][23].
所有选项卡的基本设置，请从[这里][23]克隆。

### Diving into code ?
### 嵌入代码？

Once you have cloned the code from the  [base branch][24], you should see a directory structure like below:
从[基础分支][24]克隆代码后，你应该看到如下目录结构：

```
navigation
├── RootComponent.js         // Root component for our app
├── MainTabNavigator.js      // Tab navigation component
screens
├── TodosScreen.js           // Renders the TodosContainer
components        
├── Header.js                // Header component         
├── AddTodo.js               // Add todo input        
├── AddTodoButton.js         // Add todo floating button
├── TodoItem.js              // The todo item         
├── TodosContainer.js        // Todos main container api
├── todos.js                 // APIs for performing writes
constants                    // All types of constants used in app
types                        // Todo type to be used with prop-types
utils                        // Streaming logic goes here
```

Let’s breakdown what the base setup comes with:
让我们来解析一下基本的设置：

#### 1\. Navigation

-   All the necessary configurations for connecting to Elasticsearch are at  `constants/Config.js`.
-   连接到 Elasticsearch 的所有必要配置都在 `constants / Config.js` 中。

-   We’re using  [TabNavigator][25]  from  [react-navigation][26]  for showing the  **All**,  **Active** and  **Completed**  todos screen. This is rendered by the  `navigation/RootComponent.js`. You’ll notice the  `RootComponent`  wraps everything inside the  `[ReactiveBase][27]`component from ReactiveSearch. This component provides all the necessary data to the child ReactiveSearch components. You can connect your own Elasticsearch index here by just updating the configurations in  `constants/Config.js`.
-   我们使用来自 [react-navigation][26] 的 [TabNavigator][25]在屏幕上显示 todos 的 **All**、**Active** 和 **Completed**。 这由 `navigation / RootComponent.js` 呈现。 您会注意到 `RootComponent` 将 `[ReactiveBase][27]` 组件中的所有内容封装在 ReactiveSearch 中。 此组件为子 ReactiveSearch 组件提供所有必需的数据。 你可以通过更新 `constants / Config.js` 中的配置来连接你自己的 Elasticsearch 索引。

The navigation logic is present in  `navigation/MainNavigator.js`. Lets go over how it works.  [Here][28]  are the docs for tab navigation if you wish to reference anything.
导航的逻辑放在 `navigation / MainNavigator.js` 中。 让我们来看看它是如何工作的。 如果想要引用任何内容，[以下][28]是选项卡导航的文档。

```js
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';
const commonNavigationOptions = ({ navigation }) => ({
    header: null,
    title: navigation.state.routeName,
});
// we just pass these to render different routes
const routeOptions = {
    screen: TodosScreen,
    navigationOptions: commonNavigationOptions,
};
// different routes for all, active and completed todos
const TabNav = TabNavigator(
    {
        [CONSTANTS.ALL]: routeOptions,
        [CONSTANTS.ACTIVE]: routeOptions,
        [CONSTANTS.COMPLETED]: routeOptions,
    },
    {
        navigationOptions: ({ navigation }) => ({
            // this tells us which icon to render on the tabs
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case CONSTANTS.ALL:
                        iconName = 'format-list-bulleted';
                        break;
                    case CONSTANTS.ACTIVE:
                        iconName = 'filter-center-focus';
                        break;
                    case CONSTANTS.COMPLETED:
                        iconName = 'playlist-add-check';
                }
                return (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        // for rendering the tabs at bottom
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    },
);

```

-   The  `TabNavigator`  function accepts two arguments, the first being the route configurations and the second being the  `TabNavigator`  configurations. In the above snippet, we’re passing the configurations for showing a tab navigation bar at the bottom and setting different icons for each tab.
-   `TabNavigator`函数接受两个参数，第一个是路由配置，第二个是`TabNavigator`配置。 在上面的代码片段中，我们传递的配置是在底部显示选项卡导航栏并为每个选项卡设置不同的图标。

#### 2\. TodosScreen and TodosContainer

The  `TodosScreen`  component in  `screens/TodosScreen.js`  wraps our main  `TodosContainer`  component in  `components/TodosContainer.js`  where we’ll be adding various components for the app. The  `TodosContainer`  will show filtered data, based on whether we’re on the  **All**,  **Active,**  or  **Completed**  tab.
`screens / TodosScreen.js` 中的 `TodosScreen` 组件将我们的主要 `TodosContainer` 组件包装在 `components / TodosContainer.js`中，我们将为 app 添加各种组件。 `TodosContainer` 将根据我们是否在 **All**、**Active** 或者 **Completed**选项卡上显示已过滤的数据。

#### 3\. 用于创建，更新和删除待办事项的 API(APIs for Creating, Updating and Deleting todos)

The APIs for CUD operations on Elasticsearch are present in  `api/todos.js`  . It contains three simple methods  `add`,  `update`  and  `destroy`  which work with any Elasticsearch index as specified in  `constants/Config.js`. An important point to keep in mind is that each todo item we create will have a unique  `_id`  field. We can use this  `_id`  field for updating or deleting an existing todo.
用于 Elasticsearch 上的 CUD 操作的 API 存储在 `api / todos.js` 中。 它包含三个简单的方法 `add`，`update` 和 `destroy`，它们与 `constants / Config.js` 中指定的任何 Elasticsearch 索引一起使用。 需要记住的一点是，我们创建的每个待办事项都将具有唯一的 `_id` 字段。 我们可以使用此 `_id` 字段来更新或删除现有的待办事项。

For our app, we’ll just need three methods for adding, creating or deleting todos. However, you can find a detailed explanation about the API methods at the  [docs][29].
对于我们的 app，我们只需要三种方法来添加、创建或删除待办事项。 但是，你可以在[文档][29]中找到有关 API 方法的详细说明。

### Building the components and UI ?
### 搭建组件和 UI ？

Lets start adding some components to complete the functionality of the app.
让我们开始添加一些组件来完成 app 的功能。

#### 1\. 添加 Todos(Adding Todos)

We’ll use  `[Fab][30]`  from  `[native-base][31]`  to render a floating button for adding todos.
我们将使用来自 `[native-base][31]` 的 `[Fab][30]` 来渲染用于添加待办事项的浮动按钮。

<!--![](https://cdn-media-1.freecodecamp.org/images/1*C1-bdZSvCajaJ-dtSsWcjg.png)-->

```js
const AddTodoButton = ({ onPress }) => (
  <Fab
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: COLORS.primary }}
      position="bottomRight"
      onPress={onPress}
  >
      <Icon name="add" />
  </Fab>
);
```

Now you can use this component in  `components/TodosContainer.js`.
现在，您可以在 `components / TodosContainer.js` 中使用此组件。

```javascript
import AddTodoButton from './AddTodoButton';
...
export default class TodosContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        ...
        <AddTodoButton />
      </View>
    );
  }
}
```

Once we’ve added the button, we’ll see something like this:
一旦我们添加了按钮，我们就会看到如下内容：

[图片](https://cdn-media-1.freecodecamp.org/images/1*vWdtqKsk0gZzMC4UO35IGg.png)
After adding the AddTodoButton

Now, when someones clicks on this button, we’ll need to show the input for adding a todo. Lets add the code for this in  `components/AddTodo.js`.
现在，当有人点击此按钮时，我们需要显示添加待办事项的输入框。 让我们在 `components / AddTodo.js` 中添加这个代码。

```js
class AddTodo extends Component {
  constructor(props) {
    super(props);
    const { title, completed, createdAt } = this.props.todo;
    this.state = {
      title,
      completed,
      createdAt,
    };
  }
  onSubmit = () => {
    if (this.state.title.length > 0) this.props.onAdd(this.state);
    return null;
  };
  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

```

The main components used here are  `[TextInput][32]`,  `[Checkbox][33]`  and  `[Ionicons][34]`  with straightforward props. We’re using  `title`  and  `completed`  from the  `state`. We’ll be passing the props  `todo`,  `onAdd`,  `onCancelDelete`  and  `onBlur`  from the  `components/TodosContainer.js`. These will help us in adding new todos or resetting the view if you wish to cancel adding todos.
这里使用的主要组件是 `[TextInput][32]`，`[Checkbox][33]` 和 `[Ionicons][34]`，它们都有简单的 props 属性。 我们使用`标题`并且通过 `stated` `完成`任务。 我们将从 `components / TodosContainer.js` 传递以下 props 属性： `todo`、`onAdd`、`onCancelDelete` 和 `onBlur`。 这些将有助于我们添加新待办事项或当你想取消添加待办事项的时候重置视图。

Now we can update  `components/TodosContainer.js`  with the required changes for rendering  `AddTodo`  component:
现在我们可以使用渲染 AddTodo 组件所需的更改来更新components / TodosContainer.js：

```js
...
import AddTodoButton from './AddTodoButton';
import AddTodo from './AddTodo';
import TodoModel from '../api/todos';
...
// will render todos based on the active screen: all, active or completed
export default class TodosContainer extends React.Component {
  state = {
    addingTodo: false,
  };
  componentDidMount() {
    // includes the methods for creation, updation and deletion
    this.api = new TodoModel('react-todos');
  }

```

The  `AddTodo`  component is rendered inside a  `[ScrollView][35]`  component. We also pass an  `onPress`  prop to the  `AddTodoButton`  to toggle the state and conditionally display the  `AddTodo`  component based on  `this.state.addingTodo`. The  `onAdd`  prop passed to  `AddTodo`also creates a new todo using the  `add`  API at  `api/todos.js`.

`AddTodo` 组件在 [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html) 组件中呈现。 我们还将一个 `onPress` prop 传递给 `AddTodoButton` 来切换状态并有条件地显示基于 `this.state.addingTodo` 的 `AddTodo` 组件。 传递给 `AddTodo` 的 `onAdd` prop还使用 `api / todos.js` 中的 `add` API 创建了一个新的待办事项。

After clicking the add button, we’ll see the input for adding a todo like this:
单击添加按钮后，我们将看到添加这样的待办事项的输入框：

[图片](https://cdn-media-1.freecodecamp.org/images/1*VrlfuWW4tdj0TTrGjSfDSw.png)

[图片](https://cdn-media-1.freecodecamp.org/images/1*VrlfuWW4tdj0TTrGjSfDSw.png)
Adding a todo

#### 2\. 显示待办事项(Displaying Todos)

After you finish adding a todo, it’s added into Elasticsearch (which we configured in  `constants/Config.js`). All this data can be viewed in realtime by using  [ReactiveSearch Native][36]  components.
添加待办事项后，将其添加到 Elasticsearch（我们在 `constants / Config.js` 中配置）中。 可以使用 [ReactiveSearch Native][36] 组件实时查看所有这些数据。

There are over 10 native  [UI components][37]  that the library provides. For our todo app, we will primarily utilize the  [ReactiveList][38]  component to show the state of todos.
仓库提供了超过10个的本地 [UI 组件][37]。 对于我们的 todo app，我们将主要使用 [ReactiveList][38] 组件来显示待办事项的状态。

Lets add the  `ReactiveList`  component and get our todos displaying. We’ll add this component in  `components/TodosContainer.js`  and the necessary methods for it to work. Here’s how the  `ReactiveList`  will be used:
让我们添加 `ReactiveList` 组件并显示我们的待办事项。 我们将在 `components / TodosContainer.js` 中添加此组件以及它的必要工作方式。 以下是 `ReactiveList` 的使用方法：


```js

...
import { ReactiveList } from '@appbaseio/reactivesearch-native';
...

```

We haven’t added the  `onAllData`  method yet, but let’s understand a bit about the props that we have used here:
我们还没有添加 `onAllData` 方法，但是让我们先了解一下这里使用的 props：


-   `componentId`  — unique identifier for the component.
-   `componentId`  - 组件的唯一标识符。
-   `defaultQuery`: the query to be applied initially for the list. We’ll use  `match_all`to show all the todos in default case.
-   defaultQuery：最初应用于列表的查询。 我们将使用 `match_all` 显示默认情况下的所有待办事项。
-   `stream`: whether to stream new result updates or just show historical results. By setting this to  `true`, we now also listen for the live Todo updates. We’ll add the streaming related logic later.
-   `stream`：是否流式传输新结果更新或仅显示历史结果。 通过将此设置为 `true`，我们现在还可以收听实时 Todo 更新。 我们稍后会添加与流相关的逻辑。
-   `onAllData`  — a callback function which receives the list of current todo items and the streaming (new todos and any updates) and returns a React component or JSX to render. Here’s how the syntax looks like:
-   `onAllData`  - 一个回调函数，它接收当前待办事项列表和流媒体（新的待办事项和任何更新），并返回一个 React 组件或 JSX 进行渲染。 这是语法的样子：

```js
<ReactiveList
  onAllData(todos, streamData) {
    // return the list to render
  }
  ...
/>
```

You can read more about all of these props in detail on the ReactiveList’s  [docs page][39].
你可以在 ReactiveList 的[文档页面][39]上详细了解所有这些props。

To see something, we’ll need to return a JSX or React component from  `onAllData`callback. For this, we will use React Native’s  [FlatList][40]  which is composed of  [Text][41]components. In the next step we’ll add our custom  `TodoItem`  component.
要查看内容，我们需要从 `onAllData` 返回 JSX 或 React 组件。 为此，我们将使用由 [Text][41] 组件组成的 React Native 的 [FlatList][40] 。 在下一步中，我们将添加自定义 `TodoItem` 组件。

```
...
import { ScrollView, StyleSheet, StatusBar, FlatList, Text } from 'react-native';
import CONSTANTS from '../constants';
...

export default class TodosContainer extends React.Component {
  ...
  onAllData = (todos, streamData) => {
    // filter data based on "screen": [All | Active | Completed]
    const filteredData = this.filterTodosData(todos);

    return (
      <FlatList
        style={{ width: '100%', top: 15 }}
        data={filteredData}
        keyExtractor={item => item._id}
        renderItem={({ item: todo }) => (
            <Text>{todo.title}</Text>
        )}
      />
    );
  };

  filterTodosData = (todosData) => {
    const { screen } = this.props;

    switch (screen) {
      case CONSTANTS.ALL:
        return todosData;
      case CONSTANTS.ACTIVE:
        return todosData.filter(todo => !todo.completed);
      case CONSTANTS.COMPLETED:
        return todosData.filter(todo => todo.completed);
    }

    return todosData;
  };

  render() {
    ...
  }
}
```

[图片](https://cdn-media-1.freecodecamp.org/images/1*kobdkvtn9oZY7qvF9pzK0Q.png)
Integrating ReactiveList with onAllData
将reactiveList与onalldata集成

#### 3\. 添加 TodoItem(s)（Adding TodoItem(s)）

Next, we’ll create a separate component TodoItem for showing each todo which will contain all necessary markups for a todo item like the CheckBox, Text, and a delete Icon. This goes in components/TodoItem.js:
接下来，我们将创建一个单独的组件 TodoItem，用于显示每个待办事项，其中包含 Todo 项目的所有必要标记，如 [CheckBox][42]、[Text][43] 和一个删除[图标][44]。 这包含在 `components / TodoItem.js` 中：

```
class TodoItem extends Component {
  onTodoItemToggle = (todo, propAction) => {
    propAction({
      ...todo,
      completed: !todo.completed,
    });
  };

  render() {
    const { todo, onUpdate, onDelete } = this.props;

    return (
      <View style={styles.row}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => this.onTodoItemToggle(todo, onUpdate)}
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <CheckBox
              checked={todo.completed}
              onPress={() => this.onTodoItemToggle(todo, onUpdate)}
            />
            <Body
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 25,
              }}
            >
              <Text
                style={{
                  color: todo.completed ? 'grey' : 'black',
                  textDecorationLine: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </Text>
            </Body>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(todo)}
            style={{ paddingLeft: 25, paddingRight: 15 }}
          >
            <Ionicons
              name="ios-trash-outline"
              color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
```

This component gets the todo from its props along with onDelete and onUpdate which are used to update and delete the todo item respectively. We’re using these at the necessary places using the onPress prop of the components we’re using.
该组件从其 props 获取 `todo` 以及 `onDelete` 和 `onUpdate`，它们分别用于更新和删除 todo 项。 我们在必要的地方使用组件的 `onPress` prop。

Next, we can import and use the TodoItem component in our onAllData in components/TodosContainer.js. We’ll pass the todo as a prop along with the API methods for update and destroy which will be used by TodoItem component.
接下来，我们可以在 `components / TodosContainer.js` 中的 `onAllData` 中`导入`和使用 `TodoItem` 组件。 我们将传递由 `TodoItem` 使用的 `todo` 作为 prop 以及用于`更新`和`销毁`的 API 方法。

```
class TodosContainer extends Component {
  ...
  onAllData = (todos, streamData) => {
    ...
    return (
      <FlatList
        ...
        renderItem={({ item: todo }) => (
          <TodoItem 
            todo={todo}
            onUpdate={this.api.update} 
            onDelete={this.api.destroy}
          />
        )}
      />
    );
  }
}
```

<!--![](https://cdn-media-1.freecodecamp.org/images/1*46QMtTpPsof09oOBwvrELA.png)-->

After adding TodoItem in TodosContainer
在ToDoContainer中添加所有项后

#### 4\. 流数据更新(Streaming Data Updates)

You might have noticed that the todos are displaying fine, except you’re unable to view updated todos without refreshing the app. In this final step, we’re going to fit that missing part of the puzzle.
您可能已经注意到 todos 显示正常，但您无法在不刷新 app 的情况下查看更新的待办事项。 在最后一步中，我们将适应这个难题的缺失部分。

In the previous section, we added an onAllData method for the ReactiveListcomponent. The second parameter of onAllData receives streaming updates which we’re going to utilize to always keep the todos updated. Here’s how the updated onAllData method will look like in components/TodosContainer.js.
在上一节中，我们为 ReactiveListcomponent 添加了一个 `onAllData` 方法。 `onAllData` 的第二个参数接收流式更新，我们将利用这些更新来始终更新待办事项。 以下是更新的 `onAllData` 方法在 `components / TodosContainer.js` 中的外观。

```
import Utils from '../utils';
...

export default class TodosContainer extends React.Component {
  ...
  onAllData = (todos, streamData) => {
    // merge streaming todos data along with current todos
    const todosData = Utils.mergeTodos(todos, streamData);

    // filter data based on "screen": [All | Active | Completed]
    const filteredData = this.filterTodosData(todosData);

    return (
      <FlatList
        style={{ width: '100%', top: 15 }}
        data={filteredData}
        keyExtractor={item => item._id}
        renderItem={({ item: todo }) => (
            <TodoItem todo={todo} onUpdate={this.api.update} onDelete={this.api.destroy} />
        )}
      />
    );
  };
  ...
}

```

The mergeTodos method is present in utils/index.js. Here’s how it works:
`mergeTodos` 方法存在于 `utils / index.js` 中。 以下是它的工作原理：

```
class Utils {
  static mergeTodos(todos, streamData) {
    // generate an array of ids of streamData
    const streamDataIds = streamData.map(todo => todo._id);

    return (
      todos
        // consider streamData as the source of truth
        // first take existing todos which are not present in stream data
        .filter(({ _id }) => !streamDataIds.includes(_id))
        // then add todos from stream data
        .concat(streamData)
        // remove todos which are deleted in stream data
        .filter(todo => !todo._deleted)
        // finally sort on the basis of creation timestamp
        .sort((a, b) => a.createdAt - b.createdAt)
    );
  }
}

export default Utils;
```

The  `streamData`  receives an array of todo objects when they’re created, deleted, or updated. If an object is updated, it contains a  `_updated`  key set to  `true`. Similarly, if an object is deleted, it contains a  `_deleted`  key set to  `true`. If an object is created, it contains neither of the two. Using these points, we’ve added the  `mergeTodos`  function.
`streamData` 在创建、删除或更新时接收 todo 对象的数组。 如果更新了某个对象，则它包含一个设置为 `true` 的 `_updated` 键。 同样，如果删除了一个对象，则它包含一个设置为 `true` 的 `_deleted` 键。 如果创建了一个对象，则它不包含这两个对象。 利用这些点，我们添加了 `mergeTodos` 函数。

With this, you should be able to see the changes to todo items in realtime! If you have an additional device/emulator running the same app, both will stream new updates too. ?
有了这个，你应该能够实时看到 todo 项目的变化！ 如果您有一个运行相同 app 的其他设备/模拟器，它们也将流式传输新的更新。

### Useful links

1. Todos app [演示][45]，[expo 链接][46]，[入门项目][47]和[最终源代码][48]
2. [ReactiveSearch GitHub repo][49]⭐️
3. ReactiveSearch [文档][50]
4. 希望你喜欢这个故事。 如果您有任何想法或建议，请告诉我并享受乐趣！
特别感谢 [Dhruvdutt Jadhav][51] 帮我讲述这个故事和 Todos app。

[1]: https://stateofjs.com/2017/mobile/results/
[2]: https://github.com/appbaseio/reactivesearch/tree/dev/packages/native
[3]: https://snack.expo.io/@dhruvdutt/todo
[4]: https://expo.io/@dhruvdutt/todos
[5]: https://facebook.github.io/react-native/
[6]: https://github.com/appbaseio/reactivesearch
[7]: https://github.com/appbaseio/reactivesearch/graphs/contributors
[8]: https://opensource.appbase.io/reactive-manual/native/getting-started/reactivebase.html#connect-to-elasticsearch
[9]: https://medium.freecodecamp.org/building-a-github-repo-explorer-with-react-and-elasticsearch-8e1190e59c13
[10]: https://opensource.appbase.io/reactivesearch/native
[11]: https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html
[12]: https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAALwAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFs4RH-_LaQFp2SlHxdkdiaJMgDx8HsBmHrHmxFLRm7V1uYmmy_j7CIuOAUjTBNw0KgomWuYOXFddgJRsGIU7fsxTMJHKDeitU2LeOk2yVyC7H5mdOvPQ84QV-WGxMqxGGV7LjU-urZhg0CpMqTT3OZQPUib0tK7qbmGxGDnUaoY_1q4GKLDtvfIuD4EF0ZJHcCe_vWVP-1QtnZklZNaGFkoid1LOlZWFaH_-wziAA&editable=false
[13]: https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJuAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFs4RH-_LaQFp2SlHxdkdiaJMgDx8HsBmHrHmxFLRm7V1uYmmy_j7CIuOAUjTBNw0KgomWuYOXFddgJRsGIU7fsxTMJHKDeitU2LeOk2yVyC7H5mdPqXB8pzL_9FBmAA
[14]: https://appbase.io/
[15]: https://yarnpkg.com/lang/en/docs/install/
[16]: https://brew.sh/
[17]: https://yarnpkg.com/lang/en/docs/install/
[18]: https://facebook.github.io/watchman/docs/install.html
[19]: https://github.com/react-community/create-react-native-app
[20]: https://github.com/appbaseio-apps/todos-native/tree/base
[21]: https://github.com/appbaseio-apps/todos-native/archive/base.zip
[22]: https://expo.io/
[23]: https://github.com/appbaseio-apps/todos-native/tree/base
[24]: https://github.com/appbaseio-apps/todos-native/tree/base
[25]: https://reactnavigation.org/docs/tab-navigator.html
[26]: https://reactnavigation.org/
[27]: https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html
[28]: https://reactnavigation.org/docs/tab-based-navigation.html
[29]: http://docs.appbase.io/javascript/api-reference.html
[30]: https://docs.nativebase.io/Components.html#fabs-def-headref
[31]: http://docs.nativebase.io/
[32]: https://facebook.github.io/react-native/docs/textinput.html
[33]: http://docs.nativebase.io/Components.html#checkbox-headref
[34]: https://expo.github.io/vector-icons/
[35]: https://facebook.github.io/react-native/docs/scrollview.html
[36]: https://github.com/appbaseio/reactivesearch/tree/dev/packages/native
[37]: https://opensource.appbase.io/reactive-manual/native/getting-started/componentsindex.html
[38]: https://opensource.appbase.io/reactive-manual/native/components/reactivelist.html
[39]: https://opensource.appbase.io/reactive-manual/result-components/reactivelist.html
[40]: https://facebook.github.io/react-native/docs/flatlist.html
[41]: https://facebook.github.io/react-native/docs/text.html
[42]: https://docs.nativebase.io/Components.html#checkbox-headref
[43]: https://facebook.github.io/react-native/docs/text.html
[44]: https://docs.nativebase.io/Components.html#icon-def-headref
[45]: https://snack.expo.io/@dhruvdutt/todo
[46]: https://expo.io/@dhruvdutt/todos
[47]: https://github.com/appbaseio-apps/todos-native/tree/base
[48]: https://github.com/appbaseio-apps/todos-native
[49]: https://github.com/appbaseio/reactivesearch
[50]: https://opensource.appbase.io/reactive-manual/native
[51]: https://www.freecodecamp.org/news/how-to-build-a-real-time-todo-app-with-react-native-19a1ce15b0b3


