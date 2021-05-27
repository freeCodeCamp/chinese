> -   原文地址：[How to Build a Weather Application with React and React Hooks](https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/)
> -   原文作者：JeB Barabanov
> -   译者：Humilitas
> -   校对者：

![How to Build a Weather Application with React and React Hooks](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png)

React 是一个很棒的前端框架，可以用来构建用户界面。

使用 React 的优势之一是：我们创建的组件会被封装起来，换句话说，组件是不可见的。

我们通过构建一个天气应用来学习 React。

## 如何安装 Node 和 npm

为了构建 React 应用，我们需要安装 Node 运行时环境，它主要是用来执行 JavaScript 代码。

点击 [https://nodejs.org/en/](https://nodejs.org/en/)，下载安装包。

还需要安装 **npm**，它是用 Node 构建的一个包管理器，可以在 JavaScript 应用中用它来安装依赖包。幸运的是，**npm** 包含在 Node 中，所以不必另外安装它。

安装完成后，打开终端（terminal）或命令提示符（command prompt），输入 `node -v` 命令，查看当前系统中的 Node 版本。

## 如何创建 React 应用

要创建 react 应用，可以在终端输入 **`npx create-react-app <Your app name>`** 命令（此例中命令为 **`npx create-react-app my-weather-app`**）。

可以看到相关依赖包正在自动安装。

依赖包安装完成之后，进入项目根目录（通过 `cd` 命令），执行 **`npm start`** 命令。

可以看到默认的 React 模板页面：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-07-22.png)

默认的 React 代码模板：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-08-28.png)

<div style="text-align: center; margin-bottom: 2em;">App.js</div>

我们不需要这些，所以要清理一些无用代码。

在 **app.js** 中，删除 `div` 标签内的内容，删除导入 logo 的代码。

完成之后，页面内容会变成空白。

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-12-25.png)

<div style="text-align: center; margin-bottom: 2em;">清理之后的 app.js</div>

## 如何安装我们需要的依赖包

为了让这个应用更有吸引力，我们需要安装一些外部依赖包。

我们需要用到 [Semantic React UI](https://react.semantic-ui.com/usage/) 库，执行以下命令来安装：

```bash
npm install semantic-ui-react semantic-ui-css
```

安装完成后，在 **index.js** 中引入这个库，将以下代码复制到 **index.js** 中即可：

```
import 'semantic-ui-css/semantic.min.css'
```

还需要安装 [moment.js](https://momentjs.com/) 来格式化时间，执行以下命令：

```
npm install moment --save
```

可以查看 package.json 文件来了解安装了哪些包：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-21-01.png)

<div style="text-align: center; margin-bottom: 2em;">package.json</div>

在这里，可以看到目前安装的所有依赖包。

## 如何创建我们的天气应用

为了让我们的天气应用正常工作，需要使用 OpenWeatherMap 提供的 API 来获取天气信息。

访问 [https://home.openweathermap.org/users/sign\_up](https://home.openweathermap.org/users/sign_up) 页面，创建自己的账号。

完成之后，点击导航栏上的 API 选项，可以看到不同类型的天气数据，如当前天气、未来 4 天逐小时预报、未来 16 天预报等。这些就是用来获取天气信息的 API 端点。

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-30-10.png)

调用这些 API 需要用到 API key，点击右上角的用户名，接着点击 “My API Keys”，可以查看自己的 API key。

如果没有的话就创建一个。

在项目根目录新建一个 **.env** 文件。

这是一个环境变量文件，保存所有 API 端点和 key 信息。

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = 【把你的 API key 粘贴在这里】
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```

把你的 API key 粘贴在 REACT\_APP\_API\_KEY 变量中。

## 如何使用 React Hooks

React Hooks 让我们能够在函数组件中使用、管理 state。

我们会用到 `useState` 和 `useEffect` 两个 hook，在顶部引入它们：

```
import React, { useEffect, useState } from "react";
```

创建两个 state，一个是纬度（lat），一个是经度（long）。

```
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
```

创建一个 `useEffect` 函数，在应用加载及刷新时会执行它。

```
useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);
```

使用 `navigator.geolocation` 获取纬度和经度，并使用 **setLong** 和 **setLat** 来设置纬度和经度 state。

```
import './App.css';
import React, { useEffect, useState } from "react";
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="App">

    </div>
  );
}

```

<div style="text-align: center; margin-bottom: 2em;">app.js</div>

现在 app.js 的内容如上。可以在浏览器控制台中查看纬度和经度的值：

```
Latitude is: 25.5922166
Longitude is: 85.12761069999999
```

<div style="text-align: center; margin-bottom: 2em;">纬度和经度值</div>

## 如何利用纬度和经度来获取当前位置的天气

创建 **getWeather** 函数，基于我们的纬度和经度从 API 中获取天气数据。

这个函数中，使用 fetch 方法调用 API 获取天气数据。**process.env.REACT\_APP\_API\_URL** 和 **process.env.REACT\_APP\_API\_KEY** 分别获取了 **.env** 文件中配置的 API 地址和 API key，lat 和 long 是之前获取到的纬度和经度。

接着将数据转换为 **JSON** 格式。

再接着，使用 **setData** 将结果存储在 **data** 对象中。

```
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
```

然后把数据打印在控制台：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-13-36-26.png)

现在可以看到基于纬度和经度获取到的天气数据。

现在，app.js 文件的内容如下：

```
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">

    </div>
  );
}

```

<div style="text-align: center; margin-bottom: 2em;">app.js</div>

### 如何创建天气组件

创建展示天气数据的组件。

在 src 文件夹中，创建 **components** 文件夹，并在其中创建 **weather.js** 文件。

在 **app.js** 中使用天气组件：

```
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}

    </div>
  );
}

```

<div style="text-align: center; margin-bottom: 2em;">在 app.js 文件中引入天气组件（Weather）</div>

我在 return 语句加了一个判断，如果 data.main 的值为 undefined 则展示一个空的 div。因为 fetch 函数是异步的，所以必须加入这个检查。所有其他函数（除了异步的 fetch 函数）执行完毕之后，就会执行这个 return 语句，如果没有这个判断就会报错：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-05-19-29-1.png)

这是由于我们的应用在 API 调用完成之前渲染了 return 语句中返回的内容，而此时没有数据可以展示，所以抛出了 undefined 错误。

关于 async/await 的更多信息，可以查看[这篇文章](https://www.freecodecamp.org/news/async-await-in-javascript/)。

### 如何创建天气组件的主体部分

这个部分我们将会使用 Semantic UI 来设计界面。（译注：Semantic UI 使用了严格模式下已经弃用的 findDOMNode() 方法，会在控制台抛出警告，不必理会。) 

创建展示天气信息的卡片：

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

<div style="text-align: center; margin-bottom: 2em;">Weather.js</div>

我们引入了并使用了 semantic\-ui\-react 的 Card 组件，在卡片中还有一个 Header 用来展示当前城市。

现在问题是，怎么把 app.js 中的数据传给 weather.js 组件？

答案很简单，可以使用 props 从父组件向子组件传递数据。本例中，父组件是 app.js，子组件是 weather.js。

只要在 **app.js** 中使用 Weather 组件的地方加上 props 即可：

```
<Weather weatherData={data}/>
```

我们在这里通过名为 weatherData 的 props 传入数据，就可以在 **weather.js.** 中接收到。

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-17-36-56.png)

可以看到，我们基于位置获取到了城市名。

同样的，我们可以为天气组件加入更多字段：

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

我们可以通过 API 获取温度、日出时间、日落时间以及描述信息。

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-17-45-36-1.png)

可以任意添加其他字段，比如湿度、风速、能见度等。

### 如何格式化数据和日期

格式化数据，使其更易读。我们会增加一些字段。

首先，为温度加上单位，在温度后面加上 **&deg;C**。

并把日出日落时间转换为本地时间。

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

使用 **moment.js.** 计算出当天的礼拜日期和公历日期：

```
import moment from 'moment';

<p>Day: {moment().format('dddd')}</p>
<p>Date: {moment().format('LL')}</p>
```

<div style="text-align: center; margin-bottom: 2em;">使用 moment.js</div>

在顶部引入 **moment** 包，并分别展示当天的礼拜日期和公历日期。这个包的好处在于，它会自动更新公历日期和礼拜日期。

现在 **weather.js** 内容如下：

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

<div style="text-align: center; margin-bottom: 2em;">weather.js</div>

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-16-14.png)

上图是现在的页面效果。

## 加上一些样式

现在已经得到了所有数据，我们加一些样式来让它更有吸引力。

首先，让卡片变大一点、改变 border\-radius、加入更酷的字体和颜色、删除文本对齐（译注：文中 css 代码没有涉及文本对齐）。

```
import React from 'react';
import './styles.css';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div>
        <p className="day">Day: {moment().format('dddd')}</p>
      </div>

      <div>
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
      </div>

  </div>
)

export default CardExampleCard;
```

<div style="text-align: center; margin-bottom: 2em;">weather.js</div>

```
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

.main{
    width: 700px;
    border-radius: 15px;
    background-color: #01579b;
}

.header{
    background-color: #424242;
    color: whitesmoke;
    padding: 10px;
    font-size: 28px;
    border-radius: 15px;
    font-family: 'Recursive', sans-serif;
}

.day{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}

.temp{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
}
```

<div style="text-align: center; margin-bottom: 2em;">styles.css</div>

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-48-03.png)

现在我们的应用效果如上。

使用 **flexbox** 来排列数据：

```
<div className="flex">
   <p className="day">Day: {moment().format('dddd')}</p>
</div>

<div className="flex">
   <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
</div>
```

给 div 元素加上“flex”类，并在 ***styles.css.*** 中加入以下样式：

```
.flex{
    display: flex;
    justify-content: space-between;
}
```

现在 weather.js 内容如下：

```
import React from 'react';
import './styles.css';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">Day: {moment().format('dddd')}</p>
        <p className="day">{moment().format('LL')}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

  </div>
)

export default CardExampleCard;
```

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-56-27.png)

同样的，加入剩下的字段：

```
import React from 'react';
import './styles.css';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

  </div>
)

export default WeatherCard;
```

<div style="text-align: center; margin-bottom: 2em;">weather.js</div>

```
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

.main{
    width: 700px;
    border-radius: 20px;
    background-color: #01579b;
}

.top{
    height: 60px;
    background-color: #424242;
    color: whitesmoke;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    font-family: 'Recursive', sans-serif;
    display: flex;
    justify-content: space-between;
}

.header{
    background-color: #424242;
    color: whitesmoke;
    margin: 10px 0px 0px 10px;
    font-size: 25px;
    border-radius: 20px 20px 0 0;
    font-family: 'Recursive', sans-serif;
}

.day{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}

.temp{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
}

.flex{
    display: flex;
    justify-content: space-between;
}

.sunrise-sunset{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
}

.description{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}
```

<div style="text-align: center; margin-bottom: 2em;">styles.css</div>

现在我们的应用效果如下：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-37-46.png)

### 如何加入刷新按钮

在页面顶部增加一个刷新按钮：

```
import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

  </div>
)

export default WeatherCard;
```

<div style="text-align: center; margin-bottom: 2em;">weather.js</div>

```
.button{
    width: 35px;
    height: 35px;
}
```

<div style="text-align: center; margin-bottom: 2em;">styles.css</div>

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-51-37.png)

可以看到，页面上多了一个刷新按钮，点击它就会触发 refresh 函数、刷新页面。

### 如何加入页面加载动画

加入加载动画，增强应用的用户体验。

引入 Semantic UI 的 Loader 组件，并在数据尚未加载完成的情况下显示：

```
import { Dimmer, Loader } from 'semantic-ui-react';

<div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
 </div>
```

<div style="text-align: center; margin-bottom: 2em;">app.js</div>

## 回顾一下

我们创建了一个基于地理位置展示当前天气信息的 React 应用。

一起回顾一下我们所做的东西。

### 我们学习了 State 和 Props

State 和 Props 是 React 提供的非常强大的特性，可以用来管理数据、控制不同组件之间的数据流。

在我们的应用中，使用 State 管理应用程序的状态，比如城市名称、温度、日期、湿度等。这些数据因人而异，取决于用户所处的位置。

另一方面，使用 Props 在不同组件之间传递数据。我们在 **app.js** 中获取天气数据，又在 **weather.js** 中读取这些数据。记住，使用 props 只能从父组件向子组件传递数据。

### 我们使用了 React Hooks

如果使用过类组件（class component），那么你肯定了解生命周期方法（life\-cycle methods）。如果没用过的话，可以把它们理解为一些在页面渲染或重新渲染是执行的方法。但是我们不能在函数组件（functional component）中使用生命周期方法，因为它们是专门为类组件设计的。

所以，使用 React Hooks 来替代。在我们的应用中用到了两个 hook，一个是用来管理应用 state 的 useState，另一个是用来在页面渲染或加载时执行一些任务的 useEffect。

### 我们尝试了 Semantic UI

Semantic UI 是为 React 设计的库，它提供了许多出色的组件。

朋友们，以上就是本文的全部内容了。你可以试着为这个应用添加更多特性，比如未来 5 天预报、图标说明等。

想要进一步了解的话，可以查看[项目代码](https://github.com/nishant-666/React-weather)。

> 不断尝试，快乐学习。
