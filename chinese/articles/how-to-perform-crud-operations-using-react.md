> -  原文地址：[How to Perform CRUD Operations using React, React Hooks, and Axios](https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/)
> -  原文作者：[Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)
> -  译者：luojiyin
> -  校对者：

![如何使用 React、React Hooks 和 Axios 执行 CRUD 操作](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/React-CRUD-Operations-using-React-and-React-Hooks.png)

如果你正在使用React，理解和实现API请求可能是相当困难的

所以在这篇文章中，我们将通过使用React、React Hooks、React Router和Axios实现CRUD操作来学习这一切。

让我们深入了解一下。

## **如何安装Node和npm**

首先，让我们在系统中安装Node。我们将主要用它来执行我们的JavaScript代码。

去官方网站下载Node,  [https://nodejs.org/en/](https://nodejs.org/en/).

你还需要**node包管理器**，如npm，它是内建在Node上的。你可以用它来为你的JavaScript应用程序安装包。幸运的是，Node自带npm，所以你不需要单独下载它。

一旦它们都完成了，打开你的终端或命令提示符，输入`node -v`。这将检查你有哪个版本的Node。

## **如何创建你的React应用**

为了创建你的React应用，在终端输入 ****`npx create-react-app <你的应用程序名称>`****， 或者**`npx create-react-app**react-crud`**在本例中。

你会看到软件包正在被安装。

一旦软件包安装完毕，进入项目文件夹，输入`npm start`。

你会看到默认的React模板，像这样。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-124754.png)

默认的 React Boilerplate 模板

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-124858.png)

我们的 App.js文件

## **如何为React 安装 Semantic UI 包(库)**

让我们在我们的项目中安装Semantic UI React软件包。Semantic UI是一个为React制作的UI库，它有预建的UI组件，比如表格、按钮和许多功能。

你可以使用下面的一个命令来安装它，这取决于你的包管理器。

```bash
yarn add semantic-ui-react semantic-ui-css
```

对于使用 Yarn 包管理器

```bash
npm install semantic-ui-react semantic-ui-css
```

对于使用 NPM 包管理器


同时，在你的应用程序的主入口文件中导入该库，也就是index.js。
```js
import 'semantic-ui-css/semantic.min.css'
```

在你的index.js文件中粘贴上面一行内容。

## **如何构建你的CRUD应用**

现在，让我们开始使用React构建我们的CRUD应用。

首先，我们要给我们的应用程序添加一个标题。

在我们的app.js文件中，添加一个标题，像这样。

```
import './App.css';

function App() {
  return (
    <div>
      React Crud Operations
    </div>
  );
}

export default App;
```

在我们的应用程序中添加一个标题

现在，让我们确保它居中。

给父级div一个classname，即main。在App.css文件中，我们将使用Flexbox来使标题居中。

```
import './App.css';

function App() {
  return (
    <div className="main">
      React Crud Operations
    </div>
  );
}

export default App;
```

app.js文件，在父 div 中的 className 为main的css定义。

```
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

我们的 app.css 文件

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-130340.png)

现在我们的标题已经完全居中了。

为了让它看起来更好一些，我们需要使它更大胆，并添加一些很酷的字体。要做到这一点，我们将在我们的标题周围使用标题标签，像这样。

```
import './App.css';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
    </div>
  );
}

export default App;
```

让我们从 Google Font导入一种字体. 从 [https://fonts.google.com/](https://fonts.google.com/)选择一种。

选择任何你喜欢的字体，但我将使用Montserrat字体家族。

在App.css文件中导入你选择的字体，像这样。

```
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
```

现在，让我们改变标题的字体。

```
<div className="main">
      <h2 className="main-header">React Crud Operations</h2>
    </div>
```
给 `h2`一个 `lassName` 为 `main-header`，就像上面。

然后, 在你的 App.css文件, 添加font family:

```
.main-header{
  font-family: 'Montserrat', sans-serif;
}
```

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-132749.png)

现在你会看到改变后的标题。

## 如何创建你的CRUD组件

让我们创建四个CRUD组件，它们将是创建、读取、更新和删除。

在我们的src文件夹中，创建一个名为组件的文件夹。在这个文件夹中，创建三个文件--创建、读取和更新。对于删除，我们不需要任何额外的组件。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133242.png)

现在，让我们来实现这些。

但为此，我们需要使用Mock API。这些API将向我们将要创建的假服务器发送数据，这只是为了学习的目的。

所以, 请前往 [https://mockapi.io/](https://mockapi.io/)，创建账号。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133456.png)

MockAPI

通过点击`(plus)加号`按钮创建一个项目。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133553.png)

点击`(plus)加号`按钮，创建一个新的项目。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133702.png)

添加你的项目名称，然后点击`(create)创建`按钮。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133748.png)

现在，通过点击 `(NEW RESOURCE)新资源` 按钮创建一个新资源。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-133847.png)

它将要求你提供`(RESOURCE name)资源名称`，所以输入你想使用的名称。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-134009.png)

删除额外的字段，`如姓名(name)、头像(avatar)或创建时间(createdAt）`，因为我们将不需要这些。然后，点击`创建(create)`。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-134140.png)

现在，我们已经创建了我们的 `fake API(假API)`，我把它命名为fakeData。

点击fakeData，你会看到API在一个新的标签中打开。现在的数据库是空的。

## 如何为(create Component)创建组件创建一个表格

让我们使用Semantic UI库中的一个表单。

前往Semantic React，在左边的搜索栏中搜索Form。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-134532.png)

你会看到一个像这样的表格，点击左上方的 `试试(Try it)`，就可以得到代码。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-134654.png)

复制这段代码并将其粘贴到你的Create.js文件中，像这样。

```
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;
```

在你的app.js文件中导入创建组件(Create Component)。

```
import './App.css';
import Create from './components/create';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;
```

就像这样。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-135249.png)

但这里有一个问题--项目没有正确对齐，文本输入标签颜色是黑色的。所以，让我们来改变它。

在create.js文件中，给**Form**一个`create-form`的className。

```
import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (
    <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;
```

app.js

并在你的App.css文件中添加以下类。

```
.create-form label{
  color: whitesmoke !important;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px !important;
}
```

App.css

这个类将针对所有的表格字段标签并应用白烟的颜色。它还将改变字体并增加字体大小。

现在，在我们的主`className`中，添加一个flex-direction属性。这个属性将设置方向为列，所以主`className`中的每个元素都将水平对齐。

```
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #212121;
  color: whitesmoke;
  flex-direction: column;
}
```

App.css

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-140141.png)

你可以看到，我们的表单现在看起来好多了。

接下来，让我们从表单字段中获取数据到我们的控制台(console)。为此，我们将使用React的`useState`钩子。

在我们的create.js文件中，从React中导入`useState`。

```
import React, { useState } from 'react';
```

然后，为名字(first name)、姓氏(last name)和复选框(checkbox)创建状态。我们将这些状态初始化为空或假。

```
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
```

你可以看到，这现在是作为一个功能组件。所以，我们需要把这个组件改成一个功能组件。这是因为我们只能在功能组件中使用钩子。

现在，让我们分别使用`setFirstName`、`setLastName`和`setCheckbox`属性来设置名字、姓氏和复选框。

```
<input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

<input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>

<Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
```

我们正在获得名字(first name)、姓氏(last name)和复选框(checkout)的状态。

创建一个名为`postData`的函数，我们将用它来向API发送数据。在该函数中，写下这段代码。

```
const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
}
```

我们在控制台中打印出名字(firstName)、姓氏(lastName)和复选框(checkbox)的值。

在(Submit button)提交按钮上，使用onClick事件调用这个函数，这样，每当我们按下提交按钮，这个函数就会被调用。

```
<Button onClick={postData} type='submit'>Submit</Button>
```

这里是 _create_ 文件的全部代码。

```
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
```

在名字和姓氏中输入一些数值，并勾选复选框。然后，点击提交按钮。你会看到控制台中打印出的数据是这样的。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-142717.png)

## 如何使用Axios向Mock APIs发送请求

让我们使用Axios来发送我们的表单数据到模拟服务器。

但首先，我们需要安装它。

只要输入`npm i axios`来安装这个包。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-174213.png)

软件包安装完毕后，让我们开始(create)创建操作。

在文件的顶部导入Axios。

```
import axios from 'axios';
```

导入Axios

在`postData`函数中，我们将使用Axios来发送POST请求。

```
const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
    }
```

发送 Post 请求

如你所见，我们正在使用axios.post。在axios.post中, 我们有 API endpoint(接入点 请求地址), 这是我们之前创建的。然后，我们有被大括号包裹的表单字段。

当我们点击提交时，这个函数将被调用，它将向API服务器发布数据。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-174834.png)

输入你的名字(first name)，姓氏(last name)，并勾选复选框。点击提交。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-174930.png)

然后，你检查这个API的返回值，你会得到你的名字、姓氏，复选框为真的值，被包裹在一个对象中。

## 如何实现读取和更新操作

为了开始(read)读取操作，我们需要创建一个读取页面。我们还需要React Router包来导航到不同的页面。

前往[https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)查看文档，同时运行 `npm i react-router-dom`进行安装。

安装完毕后，从React Router导入一些东西:

```
import { BrowserRouter as Router, Route } from 'react-router-dom'
```

从`React Router`中导入`Router`和`Route`。

在我们的App.js中，把整个返回包成一个Router。这基本上意味着，无论这个Router里面有什么，都能在React中使用。

```
import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Create />
        </div>
      </div>
    </Router>
  );
}

export default App;
```

我们的App.js现在看起来会像上面的样子。

替换掉返回里面的Create，并添加以下代码。

```
import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
      </div>
    </Router>
  );
}

export default App;
```

在这里，我们使用Route组件作为Create。我们已经将Create的路径设置为'/create'。因此，如果我们进入[http://localhost:3000/create](http://localhost:3000/create)，我们将看到创建页面。

同样地，我们需要(read)读取和(update)更新的路由。

```
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
```

因此，(read)读取和(update)更新路由，类似你上面看到的。

如果你前往 [http://localhost:3000/read](http://localhost:3000/read), 会看到下面的:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-180318.png)

Read Route

在[http://localhost:3000/update](http://localhost:3000/update) 网址,我们可以看到 (更新组件)Update Component 像这样:

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-180440.png)

### 读取操作

对于读取操作，我们将需要一个表组件。因此，前往React Semantic UI，并使用库中的一个表。

```
import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie Harington</Table.Cell>
                        <Table.Cell>January 11, 2014</Table.Cell>
                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill Lewis</Table.Cell>
                        <Table.Cell>May 11, 2014</Table.Cell>
                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
```

Read.js

在这里，你可以看到我们有一个带有一些假数据(dummy data)的表。但我们只需要一个表行。所以，让我们删除其他的。

```
import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Lilki</Table.Cell>
                        <Table.Cell>September 14, 2013</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
```

Read.js

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-182905.png)

这是 "阅读 "页面的输出。我们有一个有四列的表，但我们只需要三列。

删除多余的字段列，并像这样重新命名字段。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-183105.png)

这就是我们的阅读页面现在的样子:

```
import React from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Nishant</Table.Cell>
                        <Table.Cell>Kumar</Table.Cell>
                        <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
```

Read.js

现在，让我们发送GET请求，从API获得数据。

当我们的应用程序加载时，我们需要这些数据。所以，我们要使用`useEffect`钩子(hook)。

```
import React, { useEffect } from 'react';

 useEffect(() => {
       
 }, [])
```

useEffect钩子(hook)

创建一个包含传入数据的状态。这将是一个数组。

```
import React, { useEffect, useState } from 'react';

const [APIData, setAPIData] = useState([]);
useEffect(() => {
       
}, [])
```

APIData state 来存储API传入的数据

在`useEffect`钩子(hook)中，让我们发送GET请求。

```
 useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
```

因此，我们使用axios.get来向API发送GET请求。然后，如果请求被满足，我们就在我们的_APIData_状态中设置响应数据。

现在，让我们根据API数据来映射我们的表行。

我们将使用Map函数来做这件事。它将对数组进行迭代，并在输出中显示数据。

```
<Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
```

我们根据API中的数据来映射firstName、lastName和checkbox。但我们的复选框有一点不同。我在这里使用了一个三元操作符（'?'）。如果data.checkbox为真，输出将是Checked，否则将是Unchecked。

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-184955.png)

Read.js Output

### 更新(Update)操作

再为更新创建一个标题，并在表行中为更新按钮创建一列。使用Semantic UI React的按钮。

```
<Table.HeaderCell>Update</Table.HeaderCell>

<Table.Cell> 
  <Button>Update</Button>
</Table.Cell>
```

创建(Update)更新按钮

现在，当我们点击这个按钮，我们应该被重定向到更新页面。为此，我们需要React Router的链接。

从React Router导入Link。并将更新按钮的表格单元格包装成Link标签。

```
import { Link } from 'react-router-dom';

<Link to='/update'>
  <Table.Cell> 
     <Button>Update</Button>
   </Table.Cell>
</Link>
```

Link for Update Button

So, if we click update button, we will be redirected to the update page.

In order to update the column data, we need their respective ID's, which comes from the APIs.

Create a function called `setData`. Bind it to the Update button.

```
 <Button onClick={() => setData()}>Update</Button>
```

Now, we need to pass the data as a parameter to the top function.

```
 <Button onClick={() => setData(data)}>Update</Button>
```

And in the function at the top, log this data in the console:

```
const setData = (data) => {
   console.log(data);
}
```

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-190515.png)

Data in the console

Click the update button in the table, and check the console. You will get the data of the respective table field.

Let's set this data into the localStorage.

```
const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}
```

Setting data in the Local Storage

We are destructuring our data into id, firstName, lastName, and checkbox, and then we are setting this data into local storage. You can use local storage to store data locally in the browser.

Now, in the Update component, we need one form for the update operation. Let's reuse the form from our Create component. Just change the name of the function from Create to Update.

```
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}
```

Our update Page

Create a `useEffect` hook in the Update component. We will use it to get data we previously stored in Local Storage. Also, create one more state for the ID field.

```
const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);
```

Set the respective data according to your keys from Local Storage. We need to set these values in form fields. It will automatically populate the fields when the Update page loads.

```
<Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
```

Setting the values in Form fields

Now, if we click the Update button in Read Page, we will be redirected to the update page, where we will see all the auto populated form data.

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-193521.png)

Update Page

Now, let's create the Update request to update the data.

Create a function called `updateAPIData`. Inside this function, we are going to use axios.put to send a PUT request that will update our data.

```
const updateAPIData = () => {
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
         lastName,
         checkbox
	})
}
```

Here, you can see we are appending the API endpoint with an id field.

When we click the field in the table, its ID is getting stored into Local Storage. And in the Update page, we are retrieving it. Then, we are storing that ID in the _`id`_ state.

After that, we pass the id to the endpoint. This allows us to update the field of which we are passing the ID.

Bind the `updateAPIData` function to the Update button.

```
<Button type='submit' onClick={updateAPIData}>Update</Button>
```

Binding the updateAPIData to Update Button

Click the Update button in the table in Read page, change your last name, and then click the Update button in the Update page.

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-194627.png)

Updating the fields

Go back to the Read page, or check the API. You will see your last name has been changed.

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-194756.png)

The Mock API

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-194822.png)

Our Read Table

### The Delete Operation

Add one more Button in the Read table, which we'll use for the Delete operation.

```
<Table.Cell>
   <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
```

Delete Button in Read Table

Create a function called `onDelete`, and bind this function to the Delete button. This function will receive an ID parameter on the Delete button click.

```
const onDelete = (id) => {

}
```

The Delete Function

We are going to use axios.delete to delete the respective columns.

```
const onDelete = (id) => {
  axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
}
```

Deleting fields from the API

Click the Delete button and check the API. You will see the data has been deleted.

We need to load the table data after it has been deleted.

So, create a function to load the API data.

```
const getData = () => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
```

Getting the API data

Now, in the `onDelete` function, we need to load the updated data after we delete a field.

```
const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
     .then(() => {
        getData();
    })
}
```

Loading Updated Data after Delete a field

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-201047.png)

Read table

So, now if we click Delete on any field, it will delete that field and refresh the table automatically.

![](https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-24-201423.png)

Read table after deleting one field

## Let's Make Some Improvements to our CRUD App

So, when we post our data in the Create page, we are just getting the data in the mock database. We need to redirect to the Read page when our data is created in the Create page.

Import `useHistory` from React Router.

```
import { useHistory } from 'react-router';
```

Importing useHistory from React Router

Create a variable called `let`, and set the `useHistory` inside that `let`.

```
let history = useHistory();
```

Then, use the history.push function to push to the Read page just after the post API gets called.

```
const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
```

Pushing to the Read page after Post API is successful

It will push to the Read page using the `useHistory` hook.

Do the same for the Update page.

```
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
```

Update.js

And now you know how to perform CRUD operations using React and React Hooks!

Alternatively, you can watch my Youtube video on [React CRUD Operations](https://youtu.be/-ZMP8ZladIQ) if you want to supplement your learning.

You can [find the code on GitHub](https://github.com/nishant-666/React-CRUD-Operation-V2) if you want to experiment further.

> __Happy Learning.__