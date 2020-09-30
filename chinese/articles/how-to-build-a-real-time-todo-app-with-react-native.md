> -   原文地址：[How to build a real-time todo app with React Native](https://www.freecodecamp.org/news/how-to-build-a-real-time-todo-app-with-react-native-19a1ce15b0b3/)
> -   原文作者：Divyanshu Maithani
> -   译者：blackcai
> -   校对者：

<center>![如何使用React Native构建实时todo应用程序
](https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png)</center>

一个待办事项应用程序涉及搭建任何数据驱动应用程序的所有重要部分，包括**创建**，**读取**，**更新**和**删除**（CRUD）操作。 我将在这个案例里面使用[最流行的移动框架][1]之一 **React Native** 搭建一个待办事项应用程序。

我将使用 [ReactiveSearch Native][2]，这是一个提供 React Native UI 组件并快捷搭建数据驱动应用程序的开源库。

我会在这个案例中搭建以下`待办事项应用程序`：

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*bbDAbPL1rYl2k5fPFDtFHg.png)</center>

<center>待办事项应用程序</center>

你可以在 [snack][3]或者 [expo][4] 上了解这个待办事项应用程序.

### 什么是 React Native？

以下是[文档][5]的描述：

> React Native 允许你仅使用 JavaScript 搭建移动待办事项应用程序。它和 React 使用相同的设计，让你通过声明组件组成丰富的移动 UI。

即使你刚开始使用 React 或 React Native，你也应该能够按照这个故事来搭建自己的实时待办待办事项应用程序。

### 为什么我们要使用 ReactiveSearch?⚛

[ReactiveSearch][6] 是一款我和[一群很棒的小伙伴][7]合作为 Elasticsearch 开发的 React 和 React Native UI 开源组件库，它提供了各种可以[连接到任何的 Elasticsearch][8] 集群的 React Native 组件。

我写了另一篇文章，介绍如何使用[ React 和 Elasticsearch 搭建一个 GitHub 仓库浏览器][9]。你可以在那篇文章里查看关于 Elasticsearch 的简要介绍。即使你没有 Elasticsearch 的相关经验，你应该也能够很好地理解这篇文章。

### 先做一些设置准备。⚒

我们将在这里使用的 [React Native 版本][10]库。

在我们开始搭建 UI 之前，我们需要在 Elasticsearch 中创建一个数据存储区。 ReactiveSearch 可以与任何 Elasticsearch 索引一起使用，你可以轻松地[将它与你自己的数据集一起使用][11]。

![图片](https://cdn-media-1.freecodecamp.org/images/1*7be2L3leZOfV6hwRIcB9Mg.png)

在[此处][12]查看我的应用数据集。 你也可以将其克隆到你自己的应用中。

为了简洁起见，你可以直接使用[我的数据集][13]或者使用可以让你创建一个 Elasticsearch 索引数据集（也称为应用程序）的[appbase.io][14]。

所有待办事项的结构都采用以下格式：

```js
{
  "title": "react-native",
  "completed": true,
  "createdAt": 1518449005768
}
```

### 启动项目

在我们开始之前，我建议安装 [yarn][15]。 在 Linux 上，只需添加 yarn 存储库并通过包管理器运行 install 命令即可完成。 在 Mac 上，你应首先安装 [Homebrew][16] 以使事情变得更简单。 [这里][17]是 yarn 详细的安装文档。 接下来你需要安装 [watchman][18]。 它是一个文件监听服务，它将帮助 react-native 包顺利运行。

我在[这里][20]使用 GitHub 分支中的 [create-react-native-app][19] 设置了启动项目。 你可以通过运行以下命令来[下载 zip][21] 或克隆基础分支：

```
git clone -b base https://github.com/appbaseio-apps/todos-native
```

-   接下来安装依赖项并启动包：

```
cd todos-native && yarn && yarn start
```

-   在包启动后，你可以使用 [Expo][22] 应用程序 或使用 Android 或 IOS 模拟器在手机上运行这个应用程序：

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*vTzfrdAPwha5GKpkzxaOeQ.png)</center>

<center>所有选项卡的基本设置，请从[这里][23]克隆。</center>

### 嵌入代码？

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

让我们来解析一下基本的设置：

#### 1\. Navigation

-   连接到 Elasticsearch 的所有必要配置都在 `constants / Config.js` 中。

-   我们使用来自 [react-navigation][26] 的 [TabNavigator][25]在屏幕上显示 todos 的 **All**、**Active** 和 **Completed**。 这由 `navigation / RootComponent.js` 呈现。 你会注意到 `RootComponent` 将 `[ReactiveBase][27]` 组件中的所有内容封装在 ReactiveSearch 中。 此组件为子 ReactiveSearch 组件提供所有必需的数据。 你可以通过更新 `constants / Config.js` 中的配置来连接你自己的 Elasticsearch 索引。

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
                        color={
                            focused
                                ? Colors.tabIconSelected
                                : Colors.tabIconDefault
                        }
                    />
                );
            },
        }),
        // for rendering the tabs at bottom
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);
```

-   `TabNavigator` 函数接受两个参数，第一个是路由配置，第二个是`TabNavigator` 配置。 在上面的代码片段中，我们传递的配置是在底部显示选项卡导航栏并为每个选项卡设置不同的图标。

#### 2\. TodosScreen 和 TodosContainer

`screens / TodosScreen.js` 中的 `TodosScreen` 组件将我们的主要 `TodosContainer` 组件包装在 `components / TodosContainer.js`中，我们将为应用程序添加各种组件。 `TodosContainer` 将根据我们是否在 **All**、**Active** 或者 **Completed** 选项卡上显示已过滤的数据。

#### 3\. 用于创建，更新和删除待办事项的 API

用于 Elasticsearch 上的 CUD 操作的 API 存储在 `api / todos.js` 中。 它包含三个简单的方法 `add`，`update` 和 `destroy`，它们与 `constants / Config.js` 中指定的任何 Elasticsearch 索引一起使用。 需要记住的一点是，我们创建的每个待办事项都将具有唯一的 `_id` 字段。 我们可以使用此 `_id` 字段来更新或删除现有的待办事项。

对于我们的 app，我们只需要添加、创建或删除待办事项这三个方法。 但是，你可以在[文档][29]中找到有关 API 方法的详细说明。

### 搭建组件和 UI ？

让我们开始添加一些组件来完成应用程序的功能。

#### 1\. 添加 Todos

我们将使用来自 `[native-base][31]` 的 `[Fab][30]` 来渲染用于添加待办事项的浮动按钮。

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*C1-bdZSvCajaJ-dtSsWcjg.png)</center>

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

现在，你可以在 `components / TodosContainer.js` 中使用此组件。

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

一旦我们添加了按钮，我们就会看到如下内容：

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*vWdtqKsk0gZzMC4UO35IGg.png)
</center>

<center>添加了 AddTodoButton 之后</center>

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

这里的主要组件 `[TextInput][32]`，`[Checkbox][33]` 和 `[Ionicons][34]` 通过 props 直接使用。我们通过 `state` 使用 `title` 和 `completed`。 我们将从 `components / TodosContainer.js` 传递 props 属性 `todo`、`onAdd`、`onCancelDelete` 和 `onBlur`。 这些将有助于我们添加新待办事项或当你想取消添加待办事项的时候重置视图。

现在我们可以使用渲染 AddTodo 组件所需的更改来更新 `components / TodosContainer.js`：

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

`AddTodo` 组件在 [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html) 组件中呈现。 我们还将一个 `onPress` 传递给 `AddTodoButton` 来切换状态并有条件地显示基于 `this.state.addingTodo` 的 `AddTodo` 组件。 传递给 `AddTodo` 的 `onAdd` 还使用 `api / todos.js` 中的 `add` API 创建了一个新的待办事项。

单击添加按钮后，我们将看到添加这样的待办事项的输入框：

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*VrlfuWW4tdj0TTrGjSfDSw.png)</center>

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*VrlfuWW4tdj0TTrGjSfDSw.png)</center>
<center>添加一个待办事项</center>

#### 2\. 显示待办事项

添加待办事项后，将其添加到 Elasticsearch（我们在 `constants / Config.js` 中的配置）中。 可以使用 [ReactiveSearch Native][36] 组件实时查看所有这些数据。

仓库提供了超过 10 个的本地 [UI 组件][37]。 对于我们的待办事项应用程序，我们将主要使用 [ReactiveList][38] 组件来显示待办事项的状态。

让我们添加 `ReactiveList` 组件并显示我们的待办事项。 我们将在 `components / TodosContainer.js` 中添加此组件以及它的必要工作方式。 以下是 `ReactiveList` 的使用方法：

```js

...
import { ReactiveList } from '@appbaseio/reactivesearch-native';
...

```

我们还没有添加 `onAllData` 方法，但是让我们先了解一下这里使用的 props：

-   `componentId` - 组件的唯一标识符。

-   `defaultQuery`：最初应用于列表的查询。 我们将使用 `match_all` 显示默认情况下的所有待办事项。

-   `stream`：是否流式传输新结果更新或仅显示历史结果。 通过将此设置为 `true`，我们现在还可以实时监听 Todo 的更新。 我们稍后会添加与流相关的逻辑。

-   `onAllData` - 一个回调函数，它接收当前待办事项列表和数据流（新的待办事项和任何更新），并返回一个 React 组件或 JSX 进行渲染。 这是语法大概的样子：

```js
<ReactiveList
  onAllData(todos, streamData) {
    // return the list to render
  }
  ...
/>
```

你可以在 ReactiveList 的[文档页面][39]上详细了解所有这些 props。

要查看内容，我们需要从 `onAllData` 返回 JSX 或 React 组件。 为此，我们将使用由 [Text][41] 组件组成的 React Native 的 [FlatList][40] 。 在下一步中，我们将添加自定义的 `TodoItem` 组件。

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

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*kobdkvtn9oZY7qvF9pzK0Q.png)</center>

<center>集成reactiveList与onalldata</center>

#### 3\. 添加 TodoItem(s)

接下来，我们将创建一个单独的组件 TodoItem，用于显示每个待办事项，其中包含 Todo 项目的所有必要标记，如 [CheckBox][42]、[Text][43] 和一个删除 [Icon][44]。 这包含在 `components / TodoItem.js` 中：

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

该组件从其 props 获取 `待办事项` 以及用于更新和删除待办事项的 `onDelete` 和 `onUpdate`。 我们在必要的地方使用组件的 `onPress`。

接下来，我们可以在 `components / TodosContainer.js` 中的 `onAllData` 中`导入`和使用 `TodoItem` 组件。 我们将把 `todo` 和 `更新`、`销毁的` API 方法作为属性传递给 `TodoItem` 组件。

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

<center>![图片](https://cdn-media-1.freecodecamp.org/images/1*46QMtTpPsof09oOBwvrELA.png)</center>

<center>在ToDoContainer中添加 TodoItem 后</center>

#### 4\. 流数据更新

你可能已经注意到 todos 显示正常，但你无法在不刷新 app 的情况下查看更新的待办事项。 在最后一步中，我们将解决这个难题的缺失部分。

在上一节中，我们为 ReactiveListcomponent 添加了一个 `onAllData` 方法。
我们将利用接收的第二个参数 `onAllData` 结构更新流来保持待办事项的更新。以下是更新的 `onAllData` 方法在 `components / TodosContainer.js` 中的大概的样子。

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

`streamData` 在创建、删除或更新时接收待办事项对象的数组。 如果更新了某个对象，则它包含一个设置为 `true` 的 `_updated` 键。 同样，如果删除了一个对象，则它包含一个设置为 `true` 的 `_deleted` 键。 如果创建了一个对象，则它不包含这两个对象。 利用这些点，我们添加了 `mergeTodos` 函数。

有了这个，你应该能够实时看到 todo 项目的变化！ 如果你有一个运行相同 app 的其他设备/模拟器，它们也将流式传输新的更新。

### Useful links

1. Todos app [演示][45]，[expo 链接][46]，[入门项目][47]和[最终源代码][48]
2. [ReactiveSearch GitHub repo][49]⭐️
3. ReactiveSearch [文档][50]
4. 希望你喜欢这个故事。 如果你有任何想法或建议，请告诉我并享受乐趣！
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
