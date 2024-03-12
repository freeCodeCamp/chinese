> -   原文地址：[How to Build a Clone of GitHub's File Search Functionality React 项目实践——开发 GitHub 的文件搜索功能](https://www.freecodecamp.org/news/build-a-clone-of-githubs-file-search-functionality/)
> -   原文作者：Yogesh Chavan
> -   译者：RetownPlato
> -   校对者：

![How to Build a Clone of GitHub's File Search Functionality](https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

在本文中，我们将构建一个项目，该项目模仿 GitHub 提供的鲜为人知但功能强大的文件搜索功能。

要查看其工作原理，请转到任何 GitHub 仓库，然后按字母**t**，这将使您进入搜索视图。然后，您可以同时搜索并滚动列表，如以下 gif 所示：

![](https://www.freecodecamp.org/news/content/images/2020/07/Github_Search-1.gif)

Github 文件搜索功能

通过构建此应用程序，您将学到以下内容：

-   如何创建类似于 GitHub 仓库的 UI
-   如何在 React 中使用键盘事件
-   如何使用键盘上的箭头键进行导航
-   如何在搜索时突出显示匹配的文本
-   如何在 React 中添加图标
-   如何在 JSX 表达式中渲染 HTML 内容

以及更多。

您可以在[此处][1]查看该应用程序的实时演示。

### **让我们开始吧**

使用 `create-react-app`创建一个新项目:

```shell
create-react-app github-file-search-react
```

创建项目后，从`src`文件夹中删除所有文件，然后在`src`文件夹中创建`index.js`，`App.js`以及`styles.scss`文件，并创建`components`和`utils`文件夹。

安装必要的依赖项:

```bash
yarn add moment@2.27.0 node-sass@4.14.1 prop-types@15.7.2 react-icons@3.10.0
```

打开 `styles.scss` 并复制粘贴[这里的代码][2].

在`components`文件夹中创建`Header.js`文件，其内容如下：

```javascript
import React from 'react';
const Header = () => <h1 className="header">GitHub File Search</h1>;
```

在`components`文件夹中创建一个文件`Header.js`并复制粘贴[这里的代码][3]。

在此文件中，我们创建了要在 UI 上显示的静态数据，以使应用程序简单易懂

在`components`文件夹中新建`ListItem.js`文件，其内容如下：

```javascript
import React from 'react';
import moment from 'moment';
import { AiFillFolder, AiOutlineFile } from 'react-icons/ai';

const ListItem = ({ type, name, comment, modified_time }) => {
    return (
        <React.Fragment>
            <div className="list-item">
                <div className="file">
                    <span className="file-icon">
                        {type === 'folder' ? (
                            <AiFillFolder color="#79b8ff" size="20" />
                        ) : (
                            <AiOutlineFile size="18" />
                        )}
                    </span>
                    <span className="label">{name}</span>
                </div>
                <div className="comment">{comment}</div>
                <div className="time" title={modified_time}>
                    {moment(modified_time).fromNow()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ListItem;
```

在此文件中，我们将获取要显示的每个文件的数据，并显示文件夹/文件图标，文件名，注释和上次修改文件的时间。

为了显示图标，我们将使用`react-icons`npm 库。它有一个非常不错的[网站][4]，可让您轻松搜索和使用所需的图标。

图标组件接受`color`和`size`属性以自定义我们在以上代码中使用的图标。

在`components`文件夹中新建`FilesList.js`文件，内容如下：

```javascript
import React from 'react';
import ListItem from './ListItem';

const FilesList = ({ files }) => {
    return (
        <div className="list">
            {files.length > 0 ? (
                files.map((file, index) => {
                    return <ListItem key={file.id} {...file} />;
                })
            ) : (
                <div>
                    <h3 className="no-result">No matching files found</h3>
                </div>
            )}
        </div>
    );
};

export default FilesList;
```

在此文件中，我们从`api.js`文件中读取静态数据，然后使用数组`Array.proptotype.map()`方法显示文件数组的每个元素。

现在打开`src/App.js`文件，并在其中添加以下代码：

```js
import React from 'react';
import Header from './components/Header';
import FilesList from './components/FilesList';
import files from './utils/api';

export default class App extends React.Component {
    state = {
        filesList: files,
    };

    render() {
        const { counter, filesList } = this.state;

        return (
            <div className="container">
                <Header />
                <FilesList files={filesList} />
            </div>
        );
    }
}
```

在此文件中，我们添加了一个状态来存储静态文件数据，可以在需要时进行修改。然后，我们将其传递给`FilesList`组件以在 UI 上显示。

现在，打开`index.js`文件并在其中添加以下代码：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));
```

现在，通过`yarn start`从终端或命令提示符处运行命令来启动应用程序，您将看到以下初始屏幕：

![](https://www.freecodecamp.org/news/content/images/2020/07/initial_screen.png)

初始画面

你可以在[此 branch][5]中找到目前为止的代码.

## 添加基本搜索功能

现在，让我们添加功能，该功能可以更改 UI，并允许我们在按键盘上的字母**t**时搜索文件。

在 `utils` 文件夹中创建新文件 `keyCodes.js` 内容如下：

```js
export const ESCAPE_CODE = 27;
export const HOTKEY_CODE = 84; // key code of letter t
export const UP_ARROW_CODE = 38;
export const DOWN_ARROW_CODE = 40;
```

在`components`文件夹中新建`SearchView.js`文件，内容如下：

```javascript
import React, { useState, useEffect, useRef } from 'react';

const SearchView = ({ onSearch }) => {
    const [input, setInput] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onInputChange = (event) => {
        const input = event.target.value;
        setInput(input);
        onSearch(input);
    };

    return (
        <div className="search-box">
            My Repository <span className="slash">/</span>
            <input
                type="text"
                name="input"
                value={input}
                ref={inputRef}
                autoComplete="off"
                onChange={onInputChange}
            />
        </div>
    );
};

export default SearchView;
```

我们在这里将 React Hooks 用于状态和生命周期方法。如果您是 React Hooks 的新手，请查看[本文][6]以获得简介。

在此文件中，我们首先声明了一个状态来存储用户键入的输入。然后我们使用`useRef`钩子（Hook）添加了一个`ref`，以便在组件 mount 时可以聚焦于输入字段。

```js
const inputRef = useRef();

useEffect(() => {
  inputRef.current.focus();
}, []);

...

<input
    type="text"
    name="input"
    value={input}
    ref={inputRef}
    autoComplete="off"
    onChange={onInputChange}
  />
```

在此代码中，通过将空数组`[]`作为第二个参数传递给`useEffect`挂钩，`useEffect`挂钩中的代码仅在组件 mounted 时才执行一次。这充当类组件中的生命周期方法`componentDidMount`。

然后，我们将`ref`赋值给输入字段为`ref={inputRef}`。当更改输入字段(`onChange`)时触发`onInputChange`，调用`onSearch`方法，其中`onSearch`方法是作为属性从`App.js`文件传递到该组件。

现在，打开`App.js`并用以下代码替换其内容：

```js
import React from 'react';
import Header from './components/Header';
import FilesList from './components/FilesList';
import SearchView from './components/SearchView';
import { ESCAPE_CODE, HOTKEY_CODE } from './utils/keyCodes';
import files from './utils/api';

export default class App extends React.Component {
    state = {
        isSearchView: false,
        filesList: files,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEvent);
    }

    handleEvent = (event) => {
        const keyCode = event.keyCode || event.which;

        switch (keyCode) {
            case HOTKEY_CODE:
                this.setState((prevState) => ({
                    isSearchView: true,
                    filesList: prevState.filesList.filter(
                        (file) => file.type === 'file'
                    ),
                }));
                break;
            case ESCAPE_CODE:
                this.setState({ isSearchView: false, filesList: files });
                break;
            default:
                break;
        }
    };

    handleSearch = (searchTerm) => {
        let list;
        if (searchTerm) {
            list = files.filter(
                (file) =>
                    file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1 && file.type === 'file'
            );
        } else {
            list = files.filter((file) => file.type === 'file');
        }

        this.setState({
            filesList: list,
        });
    };

    render() {
        const { isSearchView, filesList } = this.state;

        return (
            <div className="container">
                <Header />
                {isSearchView ? (
                    <div className="search-view">
                        <SearchView onSearch={this.handleSearch} />
                        <FilesList
                            files={filesList}
                            isSearchView={isSearchView}
                        />
                    </div>
                ) : (
                    <FilesList files={filesList} />
                )}
            </div>
        );
    }
}
```

现在，通过再次运行命令`yarn start`重新启动应用程序并检查其功能。

![](https://www.freecodecamp.org/news/content/images/2020/07/search.gif)初始起作用的搜索功能

如您所见，最初显示所有文件夹和文件。然后，当我们按`t`键盘上的字母时，视图将更改，以允许我们搜索显示的文件。

现在，让我们理解`App.js`文件中的代码。

在此文件中，我们首先声明`isSearchView`为状态变量。然后在`componentDidMount`和`componentWillUnmount`生命周期方法内部分别添加和删除事件处理器`keydown`。

然后在`handleEvent`函数内部，我们正在检查用户按下了哪个键。

-   如果用户按下 t 键，则我们将`isSearchView`状态设置为`true`并将`filesList`状态数组更新为仅包括文件而排除文件夹。
-   如果用户按 esc 键，则将`isSearchView`状态设置为`false`并更新`filesList`状态数组以包括所有文件和文件夹。

我们在单独的文件声明`HOTKEY_CODE`和`ESCAPE_CODE`（`keyCodes.js`，而不是直接使用 keycode---`84`）是因为，以后如果我们想改变热键从`t`到`s`，那么我们只需要在该文件中改变 keycode。它将反映使用该文件的所有文件中的更改，而无需在每个文件中都进行更改。

现在，让我们理解一下`handleSearch`函数。在此函数中，我们检查用户是否在搜索框中输入了某些内容，然后过滤出包含该搜索词的匹配文件名。然后，我们使用过滤后的结果更新状态。

然后，在 render 方法中，基于该`isSearchView`值，我们向用户显示文件列表视图或搜索视图。

您可以在[此 branch][7]找到到目前为止的代码。

## 添加在文件之间导航的功能

现在，让我们添加功能以在浏览文件列表时在当前选定文件的前面显示箭头。

在`components`文件夹中新建名为 `InfoMessage.js` 的文件内容如下：

```js
import React from 'react';

const InfoMessage = () => {
    return (
        <div className="info-message">
            You've activated the <em>file finder</em>. Start typing to filter
            the file list. Use <span className="navigation">↑</span> and{' '}
            <span className="navigation">↓</span> to navigate,{' '}
            <span className="navigation">esc</span> to exit.
        </div>
    );
};

export default InfoMessage;
```

现在，打开`App.js`文件并导入`InfoMessage`组件以使用它：

```js
import InfoMessage from './components/InfoMessage';
```

添加一个初始值为`0`的新状态变量`counter`。这是为了跟踪箭头的索引。

Inside the `handleEvent` handler, get the `filesList` and `counter` values from state:

在`handleEvent`处理程序内部，从状态获取`filesList`和`counter`值：

```js
const { filesList, counter } = this.state;
```

增加两个`switch`情况 :

```js
case UP_ARROW_CODE:
  if (counter > 0) {
    this.setState({ counter: counter - 1 });
  }
  break;
case DOWN_ARROW_CODE:
  if (counter < filesList.length - 1) {
    this.setState({ counter: counter + 1 });
  }
  break;
```

在这里，当我们按下键盘上的向上箭头时，`counter`值将减小，而当我们按下向下箭头时，`counter`将增大值。

还要在文件顶部导入 up 和 down 箭头 keycode 常量：

```js
import {
    ESCAPE_CODE,
    HOTKEY_CODE,
    UP_ARROW_CODE,
    DOWN_ARROW_CODE,
} from './utils/keyCodes';
```

在 handleSearch 函数内部，在函数末尾将 counter 重置为 0，以便在过滤文件列表时，箭头始终显示在列表中第一个文件前。

```js
this.setState({
    filesList: list,
    counter: 0,
});
```

更改`render`方法以显示`InfoMessage`组件并传递`counter`和`isSearchView`属性给`FilesList`组件：

```js
render() {
  const { isSearchView, counter, filesList } = this.state;

  return (
    <div className="container">
      <Header />
      {isSearchView ? (
        <div className="search-view">
          <SearchView onSearch={this.handleSearch} />
          <InfoMessage />
          <FilesList
            files={filesList}
            isSearchView={isSearchView}
            counter={counter}
          />
        </div>
      ) : (
        <FilesList files={filesList} />
      )}
    </div>
  );
}
```

现在，打开`FilesList.js`文件并接受`isSearchView`和`counter`属性并将其传递给`ListItem`组件。

您的`FilesList.js`文件现在看起来像这样：

```js
import React from 'react';
import ListItem from './ListItem';

const FilesList = ({ files, isSearchView, counter }) => {
    return (
        <div className="list">
            {files.length > 0 ? (
                files.map((file, index) => {
                    return (
                        <ListItem
                            key={file.id}
                            {...file}
                            index={index}
                            isSearchView={isSearchView}
                            counter={counter}
                        />
                    );
                })
            ) : (
                <div>
                    <h3 className="no-result">No matching files found</h3>
                </div>
            )}
        </div>
    );
};

export default FilesList;
```

现在，打开`ListItem.js`文件并将其内容替换为以下内容：

```js
import React from 'react';
import moment from 'moment';
import { AiFillFolder, AiOutlineFile, AiOutlineRight } from 'react-icons/ai';

const ListItem = ({
    index,
    type,
    name,
    comment,
    modified_time,
    isSearchView,
    counter,
}) => {
    const isSelected = counter === index;

    return (
        <React.Fragment>
            <div className={`list-item ${isSelected ? 'active' : ''}`}>
                <div className="file">
                    {isSearchView && (
                        <span
                            className={`arrow-icon ${
                                isSelected ? 'visible' : 'invisible'
                            }`}
                        >
                            <AiOutlineRight color="#0366d6" />
                        </span>
                    )}
                    <span className="file-icon">
                        {type === 'folder' ? (
                            <AiFillFolder color="#79b8ff" size="20" />
                        ) : (
                            <AiOutlineFile size="18" />
                        )}
                    </span>
                    <span className="label">{name}</span>
                </div>
                {!isSearchView && (
                    <React.Fragment>
                        <div className="comment">{comment}</div>
                        <div className="time" title={modified_time}>
                            {moment(modified_time).fromNow()}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};

export default ListItem;
```

在此文件中，我们首先接受 `isSearchView` 和 `counter` 属性。然后，我们检查列表中当前显示的文件的索引是否与该`counter`值匹配。

基于此，我们仅在满足条件的文件前面显示箭头。然后，当我们使用向下或向上箭头浏览列表时，我们分别在`App.js`文件中增加或减少`counter`值。

基于 `isSearchView` 值，我们在 UI 的搜索视图中显示或隐藏注释和时间列。

现在，再次运行命令`yarn start`来重新启动应用程序并检查其功能：

![](https://www.freecodecamp.org/news/content/images/2020/07/navigation.gif)

搜素与导航

您可以在[此 branch][8]中找到到目前为止的代码。

## 添加功能以高亮匹配的文本

现在，让我们添加功能，以在过滤文件时突出显示文件名中的匹配文本。

打开 `App.js` 并更改 `handleSearch` 函数为以下代码：

```js
handleSearch = (searchTerm) => {
    let list;
    if (searchTerm) {
        const pattern = new RegExp(searchTerm, 'gi');
        list = files
            .filter(
                (file) =>
                    file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1 && file.type === 'file'
            )
            .map((file) => {
                return {
                    ...file,
                    name: file.name.replace(pattern, (match) => {
                        return `<mark>${match}</mark>`;
                    }),
                };
            });
    } else {
        list = files.filter((file) => file.type === 'file');
    }

    this.setState({
        filesList: list,
        counter: 0,
    });
};
```

在这段代码中，首先我们使用`RegExp`构造函数为全局和不区分大小写的搜索创建动态正则表达式：

```js
const pattern = new RegExp(searchTerm, 'gi');
```

然后，我们筛选出符合搜索条件的文件：

```js
files.filter(
    (file) =>
        file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
        file.type === 'file'
);
```

然后，根据从上述`filter`获得的结果调用数组`map`方法。

在`map`方法中，我们使用字符串`replace`方法。

该`replace`方法接受两个参数：

-   搜索模式
-   为每个匹配的模式执行的函数

我们使用`replace`方法查找所有匹配`pattern`的项，并将其替换为字符串`<mark>${match}</mark>`。这里`match`将包含文件名中的匹配文本。

如果您检查`utils/api.js`文件中的 JSON 结构，则每个文件的结构如下所示：

```js
{
  id: 12,
  type: 'file',
  name: 'Search.js',
  comment: 'changes using react context',
  modified_time: '2020-06-30T07:55:33Z'
}
```

因为我们只想替换名称字段中的文本，所以我们展开(spread syntax)文件对象属性，仅更改名称，并保持其他值不变。

```js
{
  ...file,
  name: file.name.replace(pattern, (match) => {
    return `<mark>${match}</mark>`;
  })
}
```

现在，再次运行命令`yarn start`来重新启动应用程序并检查其功能。

搜索时，您将看到 HTML 在 UI 上按原样显示：

![](https://www.freecodecamp.org/news/content/images/2020/07/rendered_html.png)

HTML 无法正确渲染

这是因为我们在`ListItem.js`通过以下方式在文件中显示文件名：

```js
<span className="label">{name}</span>
```

为了防止 `Cross-site scripting (XSS)` 攻击, React 会在使用 JSX 的表达式中转义所有显示的内容。

因此，如果要实际显示正确的 HTML，则需要使用特殊的属性 `dangerouslySetInnerHTML`。它传递`__html: name`以显示带有 HTML 的`name`。

```js
<span className="label" dangerouslySetInnerHTML={{ __html: name }}></span>
```

现在，再次运行命令`yarn start`来重新启动应用程序并检查其功能：

![](https://www.freecodecamp.org/news/content/images/2020/07/highlight-1.gif)

最终成果

如您所见，搜索词在文件名中被正确高亮。

### 结束

您可以在[此 branch 中][9]找到到目前为止的代码。

完整的 GitHub 源代码： [此处][10]  
在线演示：[此处][11]

**在[Medium][12]，[dev.to][13]上查看其他我的关于 React，Node.js 和 Javascript 的文章，并[此处][14]订阅以在收件箱中获取每周更新。**.

[1]: https://github-file-search-react.netlify.app/
[2]: https://github.com/myogeshchavan97/github-file-search-react/blob/master/src/styles.scss
[3]: https://github.com/myogeshchavan97/github-file-search-react/blob/master/src/utils/api.js
[4]: https://react-icons.github.io/react-icons/
[5]: https://github.com/myogeshchavan97/github-file-search-react/tree/initial_code
[6]: https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe
[7]: https://github.com/myogeshchavan97/github-file-search-react/tree/switching_view
[8]: https://github.com/myogeshchavan97/github-file-search-react/tree/navigation_functionality
[9]: https://github.com/myogeshchavan97/github-file-search-react/tree/text_highlighting
[10]: https://github.com/myogeshchavan97/github-file-search-react
[11]: https://github-file-search-react.netlify.app/
[12]: https://medium.com/@yogeshchavan
[13]: https://dev.to/myogeshchavan97
[14]: https://subscribe-user.herokuapp.com/
