> -   原文地址：[How to Be a Good Open Source Project Owner – The Ultimate Guide](https://www.freecodecamp.org/news/ultimate-owners-guide-to-open-source/)
> -   原文作者：JeB Barabanov
> -   译者：
> -   校对者：

![How to Build a Weather Application with React and React Hooks](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png)

React is a super\-awesome front\-end library that you can use to build user interfaces.

One of the best things about React is that the components we create are encapsulated. In other words, they can't be seen.

Let's learn more about how all this works by building a weather application using React.

## How to Install Node and npm

To build our React application, we need a run\-time environment called Node. It is mainly used to execute JavaScript code.

To download it, go to [https://nodejs.org/en/](https://nodejs.org/en/).

You'll also need **npm**, which is a package manager built on Node. You can use it to install packages for your JavaScript apps. Fortunately it comes with Node, so you don't need to download it separately.

Once both of them are finished, open your terminal or command prompt and type `node -v`. This checks which version of Node you have.

## How to Create a React App

To create our react application, type **`npx create-react-app <Your app name>`**  in your terminal, or **`npx create-react-app my-weather-app`** in this case.

You'll see that the packages are being installed.

Once the packages are done, go into the project folder and type **`npm start`**.

You'll see the default React template, like this:

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-07-22.png)

The default React Boilerplate Template

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-08-28.png)

App.js

We don't need all of this right now. So, let's clear out some code.

In your **app.js** file, clear everything inside the `div` tag. Remove the logo import.

You will receive a blank screen on the output once you have done that.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-12-25.png)

App.js after cleanup

## How to Install the Packages We Need

To make this application more attractive, we need some external packages. So, let's install them.

We need the [Semantic React UI](https://react.semantic-ui.com/usage/) library. To install it, type the following command in the terminal:

```bash
npm install semantic-ui-react semantic-ui-css
```

Once it has been installed, open **index.js** and import the library. Just copy and paste the following command in your **index.js** file:

```
import 'semantic-ui-css/semantic.min.css'
```

We also need [moment.js](https://momentjs.com/) to format our time. Install it using the following command:

```
npm install moment --save
```

You can check your package.json file to keep track of all the installed packages.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-21-01.png)

package.json

Here, you can see all the packages you have so far.

## How to Create Our Weather Application

To make our weather application work, we need OpenWeatherMap, a third\-party API that'll let us fetch the weather data.

Go to [https://home.openweathermap.org/users/sign\_up](https://home.openweathermap.org/users/sign_up) and create your own account.

After you are done, click on the API option on the Navigation bar. You'll see different options like Current Weather Data, Hourly 4 hour forecasts, 16 day forecasts, and others. These are API endpoints that you'll need to fetch the data.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-30-10.png)

You also need an API key to call these APIs. To get your API key, click on your username in the top right corner, and then on "my API keys".

Create an API key if it doesn't already exist.

In your main app folder, create a file called **.env.**

This is an environment variable file that will contain all your API endpoints and keys.

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = Paste your API key here.
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```

Paste your copied API key in the REACT\_APP\_API\_KEY variable.

## How to Use React Hooks

React Hooks lets us use and manage state in our functional components.

We will use the `useState` hook and the `useEffect` hook. Let's import them at the top.

```
import React, { useEffect, useState } from "react";
```

Let's create two states. One is for latitude and another is for longitude.

```
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
```

Now, create the `useEffect` function. Its goal is to load the functions when the application is loaded and reloaded.

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

We get our latitude and longitude using `navigator.geolocation` and we use **setLong**  and **setLat**  to set our longitude and latitude states.

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

app.js

This is how our app.js file looks like now. You can check the console for the latitude and longitude values.

```
Latitude is: 25.5922166
Longitude is: 85.12761069999999
```

Our latitude and longitude

## How to Get Our Current Location Using Latitude and Longitude.

Let's create another function **getWeather** that will fetch the weather data from the Weather API, based on our latitude and longitude.

In this function, we are using a fetch call to get the data from the API. The **process.env.REACT\_APP\_API\_URL** gets your API address  and **process.env.REACT\_APP\_API\_KEY** gets your API Key from the **.env** file. The lat and long are the latitude and longitude that we got previously.

And then we convert the data into **JSON** format.

In the next step, we use **setData** to store our result into the **data** object.

```
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
```

And we log the data in the console.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-13-36-26.png)

Here, you can see all the weather data based on our Latitude and Longitude.

Here is our new app.js file that fetches the weather data based on Longitude and Latitude:

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

app.js

### How to Create the Weather Components

Let's create our weather components where we will display our weather data.

In your src folder, create a folder called **components**, and in that folder, create a file called **weather.js.**

Now, let's call our weather component in our main **app.js** file.

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

Importing Weather Component in app.js file

You can see that I've included a check in the return statement. If the type of data we are getting is undefined, it will show us an empty div. And since the fetch data is an async function, it's mandatory to include this check. It loads the function after all other functions are done executing. So, if you remove this check, you will get an error.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-05-19-29-1.png)

This is because our application renders the return statement before the API call is made, and there is nothing to show in that case so it throws an undefined error.

To learn more about async/await, check out [this article](https://www.freecodecamp.org/news/async-await-in-javascript/).

### How to Create our Weather Body

For this part, we are going to use the Semantic UI library to design our interface.

Let's create a card that will display our weather information.

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

Weather.js

Here, we import a card from semantic\-ui\-react, and inside that card, a header that will show the name of your city.

But the question is, how do we get data from our app.js to the weather.js component?

The answer is simple. We can use props in React to send data from a parent component to a child component. In our case, our parent component is app.js and our child component is weather.js.

And to do that, just add the props in the component in **app.js.**

```
<Weather weatherData={data}/>
```

Here, we are passing the data with the props name as weatherData. And we will receive the weatherData props in **Weather.js.**

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

You can see we get the name of the city according to the location.

Similarly, we can add more fields to our weather component.

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

We can get the Temperature, Sunrise, Sunset, and Description from the API.

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-17-45-36-1.png)

You can add any other fields you want, like Humdity, Windspeed, Visibility, and more.

### How to Format the Data and Add Today's Day and Date

Let's format the data so that it's easy to understand. We will add some more fields.

To start, add the unit of temperature. You can do this by adding **&deg;C** after the temperature.

Also, let's change sunrise and sunset to local time.

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

Now, let's add today's day and date using **moment.js.**

```
import moment from 'moment';

<p>Day: {moment().format('dddd')}</p>
<p>Date: {moment().format('LL')}</p>
```

Using moment.js

We import the **moment** package at the top and display today's day and date respectively. The great thing about this package is that it automatically updates the date and the day.

This is how our **weather.js** look like now:

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

weather.js

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-16-14.png)

And the above is our output.

## Let's Do Some Styling

Now that we have all our data, let's style them to make it more attractive.

First of all, let's make the card bigger, change the border\-radius, add a cooler font and a color, and remove the text alignment.

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

weather.js

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

styles.css

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-48-03.png)

This is how our app looks now.

Let's use **flexbox** to arrange the data column\-wise.

```
<div className="flex">
   <p className="day">Day: {moment().format('dddd')}</p>
</div>

<div className="flex">
   <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
</div>
```

Name the divs as 'flex' and add the following property in ***styles.css.***

```
.flex{
    display: flex;
    justify-content: space-between;
}
```

Our weather.js will now look something like this.

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

Similarly, add the remaining fields.

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

weather.js

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

styles.css

This is how our application looks now:

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-37-46.png)

### How to Add a Refresh Button.

Let's add a refresh button at the top of our page.

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

weather.js

```
.button{
    width: 35px;
    height: 35px;
}
```

styles.css

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-51-37.png)

You can see a button that will trigger the refresh function. When you push it, it will refresh the page.

### How to Add a Loader When Our Application is Loading.

Let's add a loader to make the app even more amazing.

Import Loader from Semantic UI and add it in the return function, where we check for undefined data.

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

app.js

## Let's Recap What We've Done

We have created a React application that shows the current weather based on your location.

Let's go through everything we have done so far.

### We Learned about State and Props

State and Props are very powerful features in React. They are used to manage data and control its flow within different components.

In our application, we are managing the state which the state of the application. For example, the name of the city, the temperature, the date, humidity, and all. They vary from user to user, depending on their location.

Props, on the other hand, are used to pass data between components. We are getting the data in our **app.js** file, but we are reading it in **weather.js.** Remember, props can only be used to pass data from the parent component to the child component.

### We Used React Hooks

If you have used class components, then you must know about life\-cycle methods. If not, they are the methods that are called when our page renders or re\-renders. But we can't use life\-cycle methods in functional components, as they are specially built for class components.

So, React Hooks is the alternative. We have used two hooks in our application. One is useState, used to manage the state of the application. The other is the useEffect, which loads when the page is rendered or loaded.

### We Tried Out Semantic UI

Semantic UI is a library for React which has predefined awesome components.

That's all, folks. You can add more features to the app, like a five\-day forecast, icons, and more.

You can [find the code on Github](https://github.com/nishant-666/React-weather) if you want to experiment further.

> Try and experiment, happy learning.
