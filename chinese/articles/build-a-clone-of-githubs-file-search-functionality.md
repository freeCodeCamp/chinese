> * 原文地址：[How to Build a Clone of GitHub's File Search Functionality React 项目实践——开发 GitHub 的文件搜索功能](https://www.freecodecamp.org/news/build-a-clone-of-githubs-file-search-functionality/)
> * 原文作者：Yogesh Chavan
> * 译者：RetownPlato
> * 校对者：

![How to Build a Clone of GitHub's File Search Functionality](https://images.unsplash.com/photo-1457694587812-e8bf29a43845?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

在本文中，我们将构建一个项目，该项目模仿GitHub提供的鲜为人知但功能强大的文件搜索功能。

要查看其工作原理，请转到任何GitHub存储库，然后按字母**t**，这将使您进入搜索视图。然后，您可以同时搜索并滚动列表，如以下gif所示：

![](https://www.freecodecamp.org/news/content/images/2020/07/Github_Search-1.gif)

Github文件搜索功能

通过构建此应用程序，您将学到以下内容：

- 如何创建类似于GitHub仓库的UI
- 如何在React中使用键盘事件
- 如何使用键盘上的箭头键进行导航
- 如何在搜索时突出显示匹配的文本
- 如何在React中添加图标
- 如何在JSX表达式中渲染HTML内容

以及更多。

您可以在[此处][1]查看该应用程序的实时演示。

### **让我们开始吧**

使用  `create-react-app`创建一个新项目:

```shell
create-react-app github-file-search-react
```

创建项目后，从`src`文件夹中删除所有文件，然后在`src`文件夹中创建`index.js`，`App.js`以及`styles.scss`文件。然后在`src`文件夹内创建`components`和`utils`文件夹。

安装必要的依赖项:

```bash
yarn add moment@2.27.0 node-sass@4.14.1 prop-types@15.7.2 react-icons@3.10.0
```

打开  `styles.scss`  并复制粘贴[这里的代码][2].

在`components`文件夹中创建`Header.js`文件，其内容如下：

```javascript
import React from 'react';
const Header = () => <h1 className="header">GitHub File Search</h1>;
```

在`components`文件夹中创建一个文件`Header.js`并复制粘贴[这里的代码][3]。

在此文件中，我们创建了要在UI上显示的静态数据，以使应用程序简单易懂

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

为了显示图标，我们将使用`react-icons`npm库。它有一个非常不错的网站，可让您轻松搜索和使用所需的图标。[在这里查看更多](https://react-icons.github.io/react-icons/)。

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
    filesList: files
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

在此文件中，我们添加了一个状态来存储静态文件数据，可以在需要时进行修改。然后，我们将其传递给`FilesList`组件以在UI上显示。

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

你可以在[此branch][5]中找到目前为止的代码.

## 添加基本搜索功能


现在，让我们添加功能，该功能可以更改UI，并允许我们在按键盘上的字母**t**时搜索文件。

在  `utils`  文件夹中创建新文件 `keyCodes.js` 内容如下：

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

我们在这里将React Hooks用于状态和生命周期方法。如果您是React Hooks的新手，请查看[本文][6]以获得简介。

在此文件中，我们首先声明了一个状态来存储用户键入的输入。然后我们添加了一个`ref`使用`useRef`Hook的钩子，以便在组件mount时可以聚焦于输入字段。

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

在此代码中，通过将空数组`[]`作为第二个参数传递给`useEffect`挂钩，`useEffect`挂钩中的代码仅在组件mounted时才执行一次。这充当类组件中的生命周期方法`componentDidMount`。

然后，我们将赋值`ref`给的输入字段为`ref={inputRef}`。当更改输入字段(`onChange`)时触发`onInputChange`，调用`onSearch`方法，其中`onSearch`方法是作为属性从`App.js`文件传递到该组件。

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
    filesList: files
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
          filesList: prevState.filesList.filter((file) => file.type === 'file')
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
          file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
          file.type === 'file'
      );
    } else {
      list = files.filter((file) => file.type === 'file');
    }

    this.setState({
      filesList: list
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
            <FilesList files={filesList} isSearchView={isSearchView} />
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

- 如果用户按下t键，则我们将`isSearchView`状态设置为`true`并将`filesList`状态数组更新为仅包括文件而排除文件夹。
- 如果用户按esc键，则将`isSearchView`状态设置为`false`并更新`filesList`状态数组以包括所有文件和文件夹。

我们在单独的文件声明`HOTKEY_CODE`和`ESCAPE_CODE`的原因（`keyCodes.js`，而不是直接使用keycode`84`）是以后，如果我们想改变热键从`t`到`s`，那么我们只需要在该文件中改变keycode。它将反映使用该文件的所有文件中的更改，而无需在每个文件中都进行更改。

现在，让我们理解一下`handleSearch`函数。在此函数中，我们检查用户是否在搜索框中输入了某些内容，然后过滤出包含该搜索词的匹配文件名。然后，我们使用过滤后的结果更新状态。

然后，在render方法中，基于该`isSearchView`值，我们向用户显示文件列表视图或搜索视图。

您可以在[此branch][7]找到到目前为止的代码。

## Add functionality to navigate between files  
  

Now, lets add the functionality to display an arrow in front of the currently selected file while navigating the list of files.

Create a new file called  `InfoMessage.js`  inside the  `components`  folder with the following content:

```js
import React from 'react';
const InfoMessage = () => {
  return (
    <div className="info-message">
      You've activated the <em>file finder</em>. Start typing to filter the file
      list. Use <span className="navigation">↑</span> and{' '}
      <span className="navigation">↓</span> to navigate,{' '}
      <span className="navigation">esc</span> to exit.
    </div>
  );
};

```

Now, open the  `App.js`  file and import the  `InfoMessage`  component to use it:

```js
import InfoMessage from './components/InfoMessage';
```

Add a new state variable called  `counter`  with the initial value of  `0`. This is to keep track of the index of the arrow.

Inside the  `handleEvent`  handler, get the  `filesList`  and  `counter`  values from state:

```js
const { filesList, counter } = this.state;
```

Add two new switch cases:

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

Here, we decrement the  `counter`  state value when we press the up arrow on the keyboard and increment when we press the down arrow.

Also import the up and down array constants at the top of the file:

```js
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  UP_ARROW_CODE,
  DOWN_ARROW_CODE
} from './utils/keyCodes';
```

Inside the  `handleSearch`  function, reset the  `counter`  state to  `0`  at the end of the function so the arrow will always display for the first file from the list while filtering the files list.

```js
this.setState({
  filesList: list,
  counter: 0
});
```

Change the render method to display the  `InfoMessage`  component and pass  `counter`  and  `isSearchView`  as props to the  `FilesList`  component:

```js
render() {
  const { isSearchView, counter, filesList } = this.state;

```

Now, open the  `FilesList.js`  file and accept the  `isSearchView`  and  `counter`  props and pass them to the  `ListItem`  component.

Your  `FilesList.js`  file will look like this now:

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

```

Now, open  `ListItem.js`  file and replace its contents with the following content:

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
  counter
}) => {
  const isSelected = counter === index;
  return (
    <React.Fragment>
      <div className={list-item </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>isSelected <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">'active'</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">''</span><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">}>
        <div className="file">
          {isSearchView && (
            <span
              className={arrow-icon </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>isSelected <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">'visible'</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">'invisible'</span><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">}
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

```

In this file, we first accept the  `isSearchView`  and  `counter`  prop. Then we check if the index of the currently displayed file from the list matches with the  `counter`  value.

Based on that, we display the arrow in front only for that file. Then when we use the down or up arrow to navigate through the list, we increment or decrement the counter value respectively in the  `App.js`  file.

Based on the  `isSearchView`  value we display or hide the comment and time column in the search view on the UI.

Now, restart the app by running the  `yarn start`  command again and check its functionality:

![](https://www.freecodecamp.org/news/content/images/2020/07/navigation.gif)

Search and Navigate

You can find the code up to this point in  [this branch][8].

## Add functionality to highlight matching text  
  

Now, let's add the functionality to highlight the matching text from the filename when we filter the file.

Open  `App.js`  and change the  `handleSearch`  function to the following code:

```js
handleSearch = (searchTerm) => {
  let list;
  if (searchTerm) {
    const pattern = new RegExp(searchTerm, 'gi');
    list = files
      .filter(
        (file) =>
          file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
          file.type === 'file'
      )
      .map((file) => {
        return {
          ...file,
          name: file.name.replace(pattern, (match) => {
            return &lt;mark&gt;</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>match<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">&lt;/mark&gt;;
          })
        };
      });
  } else {
    list = files.filter((file) => file.type === 'file');
  }

```

In this code, first we use the  `RegExp`  constructor to create a dynamic regular expression for global and case insensentive search:

```js
const pattern = new RegExp(searchTerm, 'gi');
```

Then we filter out the files which match that search criteria:

```js
files.filter(
  (file) =>
    file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
    file.type === 'file'
);
```

Then we call the array map method on the result we got from above filter functionality.

In the map method, we use the string  `replace`  method.  
The  `replace`  method accepts two parameters:

-   pattern to search for
-   function to execute for each matched pattern

We use the  `replace`  method to find all the matches for the  `pattern`  and replace it with the string  `<mark>${match}</mark>`. Here  `match`  will contain the matched text from the file name.

If you check the JSON structure from the  `utils/api.js`  file, the structure of each file looks like this:

```js
{
  id: 12,
  type: 'file',
  name: 'Search.js',
  comment: 'changes using react context',
  modified_time: '2020-06-30T07:55:33Z'
}
```

As we want to replace the text from the name field only, we spread out the file object properties and only change the name, keeping other values as they are.

```js
{
  ...file,
  name: file.name.replace(pattern, (match) => {
    return &lt;mark&gt;</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>match<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 18px; vertical-align: baseline; color: rgb(102, 153, 0);">&lt;/mark&gt;;
  })
}
```

Now, restart the app by running the  `yarn start`  command again and check its functionality.

You will see that the HTML is displayed as it is on the UI when you search:

![](https://www.freecodecamp.org/news/content/images/2020/07/rendered_html.png)

HTML not rendered correctly

This is because we are displaying the file name in the  `ListItem.js`  file in the following way:

```js
<span className="label">{name}</span>
```

And to prevent  `Cross-site scripting (XSS)`  attacks, React escapes all the content displayed using the JSX Expression (which is in curly brackets).

So if we want to actually display the correct HTML, we need to use a special prop known as  `dangerouslySetInnerHTML`. It passes the  `__html`  name with the HTML to display as the value like this:

```js
<span className="label" dangerouslySetInnerHTML={{ __html: name }}></span>
```

Now, restart the app by running the  `yarn start`  command again and check its functionality:

![](https://www.freecodecamp.org/news/content/images/2020/07/highlight-1.gif)

Final working application

As you can see, the search term is correctly getting highlighted in the name of the file.

### That's it!

You can find the code up to this point in  [this branch][9].

Complete GitHub Source Code:  [here][10]  
Live Demo:  [here][11]

**Check out my other React, Node.js, and Javascript articles at  [Medium][12],  [dev.to][13]  and subscribe to get weekly updates directly in your inbox  [here][14]**.

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
