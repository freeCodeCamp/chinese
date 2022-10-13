> -  原文地址：[How to get started with D3 and React](https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/)
> -  原文作者：[Magdalena Stenius](https://www.freecodecamp.org/news/author/magdalena/)
> -  译者：
> -  校对者：

![How to get started with D3 and React](https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg)

Data Driven Documents (D3.js) is a JavaScript library used to create visualizations of data using HTML, CSS, and SVG. It does this by binding data to the DOM (Document Object Model) and its elements and allowing them to transform when the data changes.

For example, let’s say we want to create a pie chart of amounts of books in every genre in a library. We have some data which we update every time a librarian enters a new book. We store it in the application state, in a variable called “books”.

```js
const [books, setBooks] = useState(initialBooks)
const initialBooks = [
    {
        name: "Harry Potter and the Philosophers Stone",
        author: "J. K. Rowling",
        genre: "fantasy"
    },{
        name: "The Pedagogy of Freedom",
        author: "Bell hooks",
        genre: "non-fiction"
    },{
        name: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        genre: "fantasy"
    },{
        name: "Gilgamesh",
        author: "Derrek Hines",
        genre: "poetry"
    }
]
```

Right now we could create a chart that has 50% of fantasy, 25% of non-fiction and 25% of poetry. When the librarian adds a new book to the database, the data changes, and your graft shifts. Let’s say we add “50 vegan dishes”.

```js
setBooks(books.concat(
    {
        name: "50 vegan dishes",
        author: "Antti Leppänen",
        genre: "non-fiction"
    }
))
```

When this data changes, our D3 graph updates the DOM to match the new data. We now have 40% fantasy, 40% non-fiction, and 20% poetry. D3 makes manipulating the website DOM easy. This means that you can use it to create, update and delete elements in the page structure.

If you want to follow along with this example, you can use [Create React App](https://github.com/facebook/create-react-app) to create a simple React web app. If React is still unfamiliar to you, you can [check out this tutorial](https://reactjs.org/tutorial/tutorial.html) from the React documentation.

1.  Create a new app, called my-d4-app `npx create-react-app my-d3-app`. Change directory into the created folder by using `cd my-d3-app`.
2.  Install D3 by running `npm install d3 --save` .
3.  Import D3 to App.js by adding `import * as d3 from d3` . You need to use import \* (“import everything”) since D3 has no default exported module.

#### Selecting DOM elements

D3 makes manipulating the DOM easy. For example, let’s try to change all `<p&g`t;</p> -elements to have an inline style setting the color to blue.

`d3.selectAll("p").style("color", "blue")`

The `.selectAll()`\-method allows us to select all elements of a specific type. We can also use `.select()` to select individual nodes.

The React library also manipulates the DOM. This means we have to make a little extra effort to get it to work together with D3. Luckily React already has a solution for allowing targeting and updating DOM elements. To do this, React uses references.

Let’s create a `<div>`\-element and add a reference to it, and then use the reference to pick it up with D3.

```js
d3.select(this.refs.myDiv).style(“background-color”, “blue”)
render(<div ref=”myDiv”></div>)
```

#### Appending elements to the DOM

Once you have selected the element you want to manipulate, you can start appending more elements to it. For example, imagine we have a `<ol ref="myList">`. We can use D3 to append a new list item element, containing the text “bananas”.

```js
d3.select(this.refs.myList)
    .append("li")
    .text("bananas")
```

#### Using data to create

You can make D3 aware of your data by selecting DOM elements and attaching the data to them using `.data()`. D3 has a method called `.enter()`, which is often used for working with data. It signifies that these data elements need to be added to the DOM. Enters counterpart, `.exit()` , is used to signify those elements that no longer exist in the data but do exist in the DOM. We can use it to remove those elements together with remove, as in `.exit().remove()`.

Let’s take a look at an example.

```js
import React, { component } from 'react'
import * as d3 from 'd3'
class App extends Component {
    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(this.refs.temperatures)
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text("New Temperature")
 
    render(<div ref="temperatures"></div>)
}
export default App
```

This reads “D3, select the element with reference ‘temperatures’. Then, attach temperatureData to it’s `<h2>`\-elements. For the parts of data which aren’t represented in the DOM yet, append new `<h2>`\-element with the text “New Temperature”.

Wait, now it says “New temperature” over and over again! What if we want to display the actual datapoint value?

#### Properties as functions

In D3, styles, attributes and other element properties can be set using functions. Let’s refactor the code above to use a function that sets the texts of the `<`h2>-elements to the datapoint value they represent.

```js
d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(temperatureData)
    .enter()
        .append("h2")
        .text((datapoint) => datapoint + " degrees")
```

We can use an arrow function to take the datapoint value and return the value added to “ degrees”. Functions in properties allow us to get creative with the elements. In this example from the [D3 documentation](https://d3js.org/), a paragraph is given a random color using a function to set the elements style property.

```js
d3.selectAll("p")
    .style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    }
);
```

You can also use conditionals, just as in any function. Let’s say we want to set the style of an element of our temperature list based on the data.

```js
d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(temperatureData)
    .enter()
        .append("h2")
        .text((datapoint) => `${datapoint} degrees`)
        .style((datapoint) => {
            if (datapoint > 10) {
                return "red"
            } else { return "blue" }     
        }) 
```

However, adding inline styles is a tedious job, and we would like to use classes and ids instead so that we could set the styles in our CSS. To set attributes like classes and ids, we use `.attr()`. The code above could be refactored to `.attr("class", (datapoint) => { datapoint > 10 ? "highTemperature" : "lowTemperature" }`.

#### Animating with transitions

Finally, D3 makes animating transitions easy. We could change text color to red.

```js
d3.select(this.ref.descr)
    .transition()
    .style("background-color", "red");
render(<p ref="descr"></p>)
```

We can modify the animation to happen after 1 second using `.duration(1000)`. We can also use functions together with transitions. For example, we can make our elements to appear in a staggered transition. The following example from the D3 documentation makes circles appear one at a time, using a `delay()` function that takes `dataPoint` and `iteration` as parameters, and returns the iteration multiplied by 10. Iteration refers to the position of the datapoint in the list of data.

```js
d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(dataPoint, iteration) => iteration * 10)
    .attr("r", (dataPoint) => Math.sqrt(d * scale))
```

#### Our first chart

Let’s create a new component. Create a new file, called `BarChart.js`. Modify App.js to look like this.

```js
import React from React
import BarChart from './BarChart'
const App = () => {
    return ( <BarChart /> )
}
```

Paste the following boilerplate into `BarChart.js`. Call `npm start` to start the app.

```js
import React, { Component } from 'react'
import * as d3 from 'd3'
class BarChart extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawBarChart(data)
    }
    drawBarChart(data)  {}
    render() { return <div ref="canvas"></div> }
}
export default BarChart
```

We have a set of dummy data, which we pass to the drawing function as a parameter. From now on, we’ll be working inside `drawBarChart()`. First, select the `div` with the reference `canvas`. Inside `drawBarChart()`, we append a `svg` element inside the `div` we referenced. We set the `svg` to have a with of 600, a height of 400 and a black border. You should see this empty box appear on the page.

```js
const svgCanvas = d3.select(this.refs.canvas)
    .append(“svg”)
    .attr(“width”, 600)
    .attr(“height”, 400)
    .style(“border”, “1px solid black”)
```

![4SGaco4vI2i7aFkKQsgwwIOYIXRaLXbHrysJ](https://cdn-media-1.freecodecamp.org/images/4SGaco4vI2i7aFkKQsgwwIOYIXRaLXbHrysJ)

An empty SVG element with a black border.

Next, we need some bars on our bar chart. We select all `rect` elements, or rectangles, of the `svg`. Then we append the data to the rectangles and use enter to step into the data. For each data in the element, we append a rectangle with a width of 40 and the height of the datapoint value multiplied by 20.

```js
svgCanvas.selectAll(“rect”)
    .data(data).enter()
         .append(“rect”)
         .attr(“width”, 40)
         .attr(“height”, (datapoint) => datapoint * 20)
         .attr(“fill”, “orange”)
```

![Ihtl3uCAtOkuHQdndzg7YyLabgnG2JWzF35T](https://cdn-media-1.freecodecamp.org/images/Ihtl3uCAtOkuHQdndzg7YyLabgnG2JWzF35T)

After appending the rectangles with data to the SVG.

Wait, why does it look like we only have one rectangle? Since we didn’t specify where on the `svg` the rectangle should appear, they all piled up at 0, 0. Let’s add the x and y positions to them. Let’s also refactor the code to keep the canvas width, height and the scale of the bars in variables.

```js
drawBarChart(data) {
const canvasHeight = 400
const canvasWidth = 600
const scale = 20
const svgCanvas = d3.select(this.refs.canvas)
    .append(“svg”)
    .attr(“width”, canvasWidth)
    .attr(“height”, canvasHeight)
    .style(“border”, “1px solid black”)
svgCanvas.selectAll(“rect”)
    .data(data).enter()
        .append(“rect”)
        .attr(“width”, 40)
        .attr(“height”, (datapoint) => datapoint * scale)
        .attr(“fill”, “orange”)
        .attr(“x”, (datapoint, iteration) => iteration * 45)
        .attr(“y”, (datapoint) => canvasHeight — datapoint * scale)
}
```

Now we set the position x to the iteration multiplied by 45, which is 5 wider than the column width, leaving a small gap between the columns. The y position is a bit trickier. We set it to the canvas height minus the height of the bar, which is the datapoint value multiplied by 20. Now our chart looks like this.

![JwFsJSO0BpGCxlEq6GWWnVruQvzGiLJb26sC](https://cdn-media-1.freecodecamp.org/images/JwFsJSO0BpGCxlEq6GWWnVruQvzGiLJb26sC)

After setting the x and y positions of the rectangles.

To give our bars a final touch, let’s add the data point values to the bars. We append some text elements to the `svg` and set their x-attribute 10 units greater than each bars starting point. We set the y-attribute to be 10 units less than the starting point of the bar.

```js
svgCanvas.selectAll(“text”)
    .data(data).enter()
        .append(“text”)
        .attr(“x”, (dataPoint, i) => i * 45 + 10)
        .attr(“y”, (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
        .text(dataPoint => dataPoint)
```

![As7X63uSvkE7VEzy56P2toGboiIqFbTEPf5O](https://cdn-media-1.freecodecamp.org/images/As7X63uSvkE7VEzy56P2toGboiIqFbTEPf5O)

Adding text labels to our bars.

Now the texts sit just above the bars. You can continue working with the chart, adding styles (using `.attr("class", "bar")` ) and adding a CSS file. You can also add an axis to the chart and add a tooltip when mousing over the bar.

**Get creative and enjoy!**

Working with D3 can seem difficult in the beginning. Once you get the basics down it becomes a powerful tool to express and visualize data. I recommend using D3 over picking a ready-made chart library, since it allows for more personal and modifiable pieces.

Finally, learning D3 is also a good way of getting fluent at traversing and manipulating the DOM. Understanding the DOM is often a quality interviewers look for in front end developers.

#### Resources:

[D3 Tutorials](https://github.com/d3/d3/wiki/Tutorials) suggested by D3

[React tutorial from the React documentation](https://reactjs.org/tutorial/tutorial.html)