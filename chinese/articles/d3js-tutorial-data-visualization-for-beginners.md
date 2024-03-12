> -  原文地址：[D3.js Tutorial – Data Visualization for Beginners](https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/)
> -  原文作者：[Spruce Emmanuel](https://www.freecodecamp.org/news/author/spruce/)
> -  译者：
> -  校对者：

![D3.js Tutorial – Data Visualization for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/Group-1.png)

In this article, I'm going to walk you through how to use D3.js in a step by step and beginner-friendly way.

We'll talk about what D3.js is, how it works, and we'll create some basic visualizations to add transitions, interactions, and zooming.

## Table of Contents

-   [Getting Started](#getting-started)  
    What is D3.js?  
    How to Set Up a D3.js Environment
-   [Selections](#selections)  
    How to Select Elements in D3  
    How to Modify Elements in D3
-   [D3 is Data Driven](#data-driven)  
    Data Join in D3  
    Data Loading in D3
-   [Scales in D3](#scales)
-   [Create a bar chart with d3.js](#create-a-bar-chart-with-d3.js)  
    Axis Component in D3  
    D3 Margin Convention  
    How to Style it With CSS in D3
-   [Create a World Map with d3.js](#create-a-world-map-with-d3.js)  
    How to Use Multiple Datasets in D3.js  
    Map with city names  
    Event Handling with D3.js  
    Map with Panning and Zooming  
    Programmatic zooming  
    Adding ToolTips
-   [Conclusion](#conclusion)

## Who is this article for?

This article is aimed at developers who already have a basic knowledge of HTML, CSS, SVG and JavaScript who want to learn how to visualize data with D3.js.

This article is suitable for both complete beginners and those who already have some experience working with D3.js.

By the end of this article, you should understand how D3.js works and how to create visualizations with your data.

## Getting Started with D3.js

D3.js is a JavaScript library for creating visualizations like charts, maps, and more on the web.

> **D3.js** (also known as **D3**, short for **Data-Driven Documents**) is a JavaScript library for producing dynamic, interactive [data visualizations](https://en.wikipedia.org/wiki/Data_visualization) in web browsers. It makes use of Scalable Vector Graphics (SVG), HTML5, and Cascading Style Sheets (CSS) standards. – Wikipedia

Unlike many other data visualization libraries that provide ready made charts, D3 gives you lots of creative freedom as you have total control over the visualizations you create. D3 also uses web technologies like HTML, CSS, SVG and JavaScript.

In addition to the fact that D3 uses these familiar technologies, it has several other benefits:

-   D3 is extremely fast,
-   It encourages code reusability
-   It supports large datasets and provides an easy way of loading and transforming data
-   It's good for creating visualizations with rich interactions

### How to Set Up a D3 Environment

D3 works in all modern browsers, and at the time of writing this article, D3.js is on version 7 (v7).

To use the latest version of D3 you have to link to it on your web page like this:

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
```

However for the purposes of teaching, all examples in this article are on [Codepen](https://codepen.io), so you can edit the live examples.

## How to Select Elements in D3

When you're coding in JavaScript and you need to modify elements on a page, you need to select those elements. D3.js works the same way, and provides us with two methods to select DOM elements:

-   `d3.select()`
-   `d3.selectAll()`

Both of this selector methods will take in any CSS selector and return the element that matches the specified selector. If no element matches the selector it will return an empty selection.

The `d3.select()` method will select the first element that matches in the DOM (from top to bottom).

```js
d3.select("#d3_p").style("color", "blue");
```

Example output

hello world 1

If there are multiple elements that match the specified selector, `d3.select()` will match the first one it finds.

Example output

hello world 1

hello world 2

hello world 3

hello world 4

The `d3.selectAll()` method works very similarly to `d3.select()` – but instead it selects ALL elements that match the selector:

```js
d3.selectAll
(".d3_p").style("color", "blue");
```

Example output

hello world 1

hello world 2

hello world 3

hello world 4

### How to Modify Elements in D3

After you have selected your DOM elements, D3 provides the following methods to modify them:

| Method | Usage | Example |
| --- | --- | --- |
| `.attr()` | Update selected element attribute | `d3.select("p").attr("name", "fred")` |
| `..classed()` | Assigns or unassigns the specified CSS class names on the selected elements | `d3.select("p").classed("radio", true);` |
| `.style()` | Updates the style property | `d3.select("p").style("color", "blue");` |
| `.property()` | Used to set an element property | `d3.select('input').property('value', 'hello world')` |
| `.text()` | Updates selected element text content | `d3.select('h1').text('Learning d3.js')` |
| `.html()` | Sets the inner HTML to the specified value on all selected elements | `d3.select('div').html('h1>learning d3.js</h1>')` |
| `.append()` | Appends a new element as the last child of the selected element | `d3.select("div").append("p")` |
| `.insert()` | Works the same as the `.append()` method, except you can specify another element to insert before | `d3.select("div").insert("p", "h1")` |
| `.remove()` | Removes selected element from the DOM | `d3.select("div").remove("p")` |

Don't worry if all these doesn't make sense right away – we will soon be using all these methods in our examples.

Each of the above DOM manipulation methods takes in a constant value or a function as a parameter which gives rise to creating **Dynamic Properties.**

The function takes in two properties: the first is the data which is conventionally called `d` in d3.js, and the other is the `index`.

```js
d3.selectAll("circle").attr('cx', ((d, i) => i * 100))
```

Example output

As you can see above, within this function we can apply any logic to manipulate the data and output.

## D3 is Data Driven

D3.js itself is data-driven, which means it gets its super powers from data. D3 supports different types of data like arrays, CSV, XML, TSV, JSON, and so on.

This data can come from a local file in your working directory or can be fetched from an API.

### Data Join in D3

D3's data join lets us join the specified data to the selected element(s). To create a data join, you can use the `.data()` method:

```js
let fruits = ['Apple', 'Orange', 'Mango']

d3.selectAll(".d3_fruit").data(fruits).text((d) => d)

// html

<p class="d3_fruit"></p>
```

Example output

Let's see what's going on here and why we got only one output instead of three.

So far, we have:

1.  3 data points in our Fruits Array
2.  1 `p` element in our selection

D3 just assigns the first fruit (Apple) in our array to the only selection `p` it got and forgets about the rest.

A quick fix for this is to manually create the other 2 p elements and just move on with your life. But most of the time you don't actually know how many items are in your array of data that is fetched from an external API.

To solve this problem, the latest versions of D3 provides us with a `.join()` method. It appends, removes, and reorders elements as necessary to match the specified data. Let's try it with our previous example to see what happens:

```js
let fruits = ['Apple', 'Orange', 'Mango']

d3.select(".d3_fruit")
    .selectAll("p")
    .data(fruits)
    .join("p") // the join method
        .attr("class", "d3_fruit")
        .text((d) => d)

// html

<div class="d3_fruit"></div>
```

Example output

Let's break this down a bit:

1.  Select the `div` wrapper `d3_fruit`
2.  Select all the `p` elements even when there are no `p` elements in the div - this returns an empty selection
3.  `.data(fruits)` - Binds the fruits array to the empty selection
4.  `.join("p")` - This methods creates all the `p` elements for each item in our Array
5.  `.attr("class", "d3_fruit")` - We set a class for each `p` element that was created
6.  `.text((d) => d)` - Sets the text of each created `p` based on the fruits Array

### Data Loading in D3

We have seen what data is to D3 and how to join data to our selections. But so far we have only used our own self-created data `let fruits = ['Apple', 'Orange', 'Mango']`.

In a real world scenario this is not usually the case – you sometimes have to fetch data from an API or a local file.

D3 has some methods to load various types of files:

-   d3.json
-   d3.csv
-   d3.xml
-   d3.tsv
-   d3.text

When using any of these methods, the syntax is generally the same:

```js
// async await
const data = await d3.csv("/path/to/file.csv");
console.log(data);

// or
d3.json("/path/to/file.json").then((data) => {  console.log(data); })
```

Let's see this in action by loading data from an actual external JSON file.

For this example I have a JSON file that contains all the info about Nigeria and all its states:

```js
const el = d3.select("#d3_svg_demo2");

d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/nigeria-states.json").then(({data}) => {
    el
     .selectAll("p")
     .data(data)
	 .join("p")
	  .text((d) => d.Name)
});

```

Example output

... + 31 others

Using the above method you can fetch any data in D3.

## Scales in D3

Thus far, you've learned how to load and use data in D3.js. Now we need to learn about **Scales**. **T**his can be the most confusing part to learn for most folks and it's also the most important concept of D3.

In the last example we just looked at above, we loaded JSON data from an API and for each State in Nigeria we appended the name to a `p` element. That JSON file also contains the population of each state and some other info.

The population of each state ranges from the lowest at `2 million` to the highest at `16 million`. To correctly represent that data on a bar chart, for example, you need to create a bar chart with a height of `16000000px`.

Just imagining that, you'd probably agree that it would be a very long bar chart. That's where `d3.scale` comes in.

The `d3.scale` function takes in data as input and returns a visual value in pixels. `d3.scale` needs to be set with a **domain** and a **range.** The domain sets a LIMIT for the data we are trying to represent visually.

```js
const x_scale = d3.scaleLinear()
    .domain([10, 500])
    .range([2000000, 16000000]);
```

Let's break this down a bit:

-   `d3.scaleLinear()` - we tell D3 we are going to use the scaleLinear
-   `.domain([10, 500])` - we set the domain (Limit) from 10 to 500
-   `.range([2000000, 16000000])` - we set our minimum value to 2 million and maximum to 16 million which means we map out 2 million to `10px` and 16 million to `500px`

Now if we have a city with a population of about `8000000`(half of 15 million) it would map out to a pixel value of  `250px`(half of 500).

It is important to point out that D3 has various form of [Scales](https://github.com/d3/d3-scale). The one you decide to use we be determined by the type of data you are trying to represent.

-   When you're working with data that represents dates, use [d3.scaleTime](https://github.com/d3/d3-scale#scaleTime)
-   When you're creating bar charts, use [d3.scaleBand](https://github.com/d3/d3-scale#scaleBand)
-   For other scales, refer to [d3.scale](https://github.com/d3/d3-scale)

## How to Create a Bar Chart with D3.js

Now let's apply everything we've learned to create a real world bar chart with D3.

For this example we are going to continue building from the example code in the data loading section of this tutorial:

```js
const el = d3.select("#d3_svg_demo2");

d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/nigeria-states.json").then(({data}) => {
    el
     .selectAll("p")
     .data(data)
	 .join("p")
	  .text((d) => d.Name)
});
```

First let's create the scales for our bar chart:

```js
const width = 960, height = 500;
const x_scale = d3.scaleBand().range([0, width])
const y_scale = d3.scaleLinear().range([height, 0])
```

What's going on here:

-   First we defined our x scale (horizantal scale) with a minimum of 0 and maximum of our SVG width
-   Secondly we set our y scale (vertical scale) to range from 0 to our SVG height

Next we need to select our SVG element in the document:

```js
const svg = d3.select("#d3_demo")
    .attr("width", width)
    .attr("height", height)
```

Here we selected our SVG element and set the height and width to our specified height and width. Next let's fetch the JSON data from our API:

```js
d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/nigeria-states.json").then(({ data }) => {
    data.forEach((d) => (d.Population = +d.info.Population))
})
```

If this doesn't look familiar please re-read the data loading section. Because of the way our JSON data is structured I destructed `{ data }` from the API.

The fetched data comes in as a string but we need the Population field to be a number. So using the JavaScript `+` operator we convert each Population field to a number:

```js
data.forEach((d) => (d.Population = +d.info.Population))
```

Next we need to set the domain of our scales – and now that we have fetched our data we can do that:

```js
x_scale.domain(data.map((d) => d.Name);
y_scale.domain([0, d3.max(data, (d) => d.Population)]);
```

Let's see what's going on here:

-   `x_scale.domain(data.map((d) => d.Name)` - The x scale is a band scale so we set the domain to the name of states (36 states)
-   `y_scale.domain([0, d3.max(data, (d) => d.Population)])` - The y scale is a linear scale so we set the minimum value to 0. And rather than setting the maximum value ourselves, we let D3 do that for us by using the `d3.max()` method.

NOTE: with the `d3.max()` method we loop through the provided data and always return the maximum value of the specified field (Population in our case).

Lastly we need to add the rectangles so we can see our bar chart:

```js
svg
 .selectAll("rect")
 .data(data)
 .join("rect")
  .attr("class", "bar")
  .attr("x", (d) => x_scale(d.Name))
  .attr("y", (d) => y_scale(d.Population))
  .attr("width", x_scale.bandwidth())
  .attr("height", (d) => height - y_scale(d.Population));
```

Okay this isn't something new right? If this is still new please re-read the data join section of this tutorial. But there are some things we are seeing for the first time:

-   `.attr("x", (d) => x_scale(d.Name))` - We set the x (horizontal) position of each `rect` created according to the generated scale. Same for the y (vertical position `.attr("y", (d) => y_scale(d.Population))`.
-   `.attr("width", x_scale.bandwidth())` - here we set the width of each `rect`. Of course we can set this to any number we like, but using `x_scale.bandwidth()` D3 automatically sizes the `rect` for us to match the width of our SVG.
-   `.attr("height", (d) => height - y_scale(d.Population))` - lastly we set the height of each `rect` to the SVG height and then subtract the height generated by the `y_scale(d.Population)`, making sure each `rect` is represented correctly.

Here is the full code put together in one place:

```js
const width = 960, height = 500;

const x_scale = d3.scaleBand().range([0, width]).padding(0.1);
const y_scale = d3.scaleLinear().range([height, 0]);

const svg = d3.select("#d3_demo")
    .attr("width", width)
    .attr("height", height);

d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/nigeria-states.json")
    .then(({ data }) => {
    
	 data.forEach((d) => (d.Population = +d.info.Population));

	 // Scale the Domain
	 x_scale.domain(data.map((d) => d.Name));
	 y_scale.domain([0, d3.max(data, (d) => d.Population)]);

	 // add the rectangles for the bar chart
	 svg
	  .selectAll("rect")
	  .data(data)
	  .join("rect")
	  .attr("class", "bar")
	  .attr("x", (d) => x_scale(d.Name))
	  .attr("y", (d) => y_scale(d.Population))
	  .attr("width", x_scale.bandwidth())
	  .attr("height", (d) => height - y_scale(d.Population));
	});

```

And here's the output:

And there you have it, a very basic D3.js bar chart. But if you showed that bar chart to a colleague or friend, they would probably ask you "what's going on here, what are we looking at?" That would lead us to another topic – the **Axis**.

### Axis Component in D3

> The axis component renders human-readable reference marks for scales. – D3 docs

To create these human readable reference marks, the `d3.axis` makes uses the `d3.scale` function to determine the number of ticks to generate.

To create different orientations for our axis, D3 provides four methods:

-   d3.axisTop
-   d3.axisBottom
-   d3.axisLeft
-   d3.axisRight

Let's see an example of these:

```js
let svg = d3.select("#d3_demo8").attr('width', 200).attr('height', 200)
let scale = d3.scaleLinear().domain([0, 100]).range([0, 200]);


let bottom_axis = d3.axisBottom(scale);

svg.append("g").call(bottom_axis);

// html
<svg id="d3_demo">
</svg>
```

Example output

To make all this work, you only need to pass in your existing `d3.scale` function. Let's apply this to our previous example.

The first thing we need to do is to set up the D3 margin convention.

### D3 Margin Convention

The margin convention is just a way of adding margins to our graphics so as to have space to add our Axis.

To create the margin, first create an object with a property for each of the four sides:

```js
const margin = { top: 20, right: 30, bottom: 55, left: 70 }
```

Then you need to define the width and height for our SVG. For a responsive graphic we set the width to the document body:

```js
const width = document.querySelector("body").clientWidth;
const height = 500;
```

Next we need to apply this width as a view box to our SVG element:

```js
const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height])
```

Next we need to set the `x_scale` and `y_scale` to work with our new margins:

```js
const x_scale = d3
	.scaleBand()
	.range([margin.left, width - margin.right])
	.padding(0.1);

const y_scale = d3.scaleLinear()
    .range([height - margin.bottom, margin.top]);
```

Next let's define our left and bottom axis – remember we only need to pass in our existing scale (the ones above):

```js
let x_axis = d3.axisBottom(x_scale);

let y_axis = d3.axisLeft(y_scale);
```

Everything else is the same as our previous example except the last part where we add the Axis:

```js
// append x axis
svg
 .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(x_axis)
  .selectAll("text") // everything from this point is optional
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", ".15em")
  .attr("transform", "rotate(-65)");

// add y axis
svg
 .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(y_axis);
```

You can view the output and full code on Codepen:

### How to Style it With CSS in D3

You'll notice that our bar chart is green in color – how come? Well, we added a class of `bar` to each bar in the chart:

```js
.attr("class", "bar")
```

We can use that class to style our bar chart with CSS:

```css
.bar {
  fill: green;
}
```

## How to Create a World Map With D3.js

One of the things I personally love about D3 is its ability to handle geographic data. Unlike our former examples, which used JSON data format maps, now we'll use a special form of JSON data called [GeoJSON](http://geojson.org/).

You can find the GeoJSON data we are going to use [here](https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/countries-110m.geojson).

Like in our other examples, let's first select our SVG element in the document and also set up **the margin convention:**

```js
const margin = { top: 5, right: 5, bottom: 5, left: 5 },
	width = document.querySelector("body").clientWidth,
	height = 500;

const svg = d3.select("#d3_demo").attr("viewBox", [0, 0, width, height]);


// html
<body>
<svg id="d3_demo"></svg>
</body>
```

Next, to generate our map we'll need a projection to render spherical coordinates (in our data file) and a Path Generator to convert the projected coordinates to a SVG path which is then rendered on the screen:

```js
let projection = d3.geoEquirectangular().center([0, 0]);
```

D3 provides a lot of [projections](https://github.com/d3/d3-geo-projection) (I only used this one because I like it). Now that we have chosen our projection, let's convert it to an SVG path. D3 handles the conversion for us when we use the `d3.geoPath()` method. This method takes in a projection (the one we defined above):

```js
const pathGenerator = d3.geoPath().projection(projection);
```

We don't want to draw the map directly on the SVG because we are going to be adding animations and zooming later on. So we append a `g` element to the selected SVG:

```js
let g = svg.append("g");
```

Then we'll load our data for the map:

```js
d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/countries-110m.geojson")
  .then((data) => {
      console.log(data)
  });
```

If this doesn't make sense I suggest you re-read the data loading section.

Lastly let's use our `pathGenerator` to generate our paths:

```js
   g.selectAll("path")
    .data(data.features)
    .join("path")
    .attr("d", pathGenerator);
```

Above we used D3 data join to append a path for each country and then set the `d` attribute to our `pathGenerator`:

```js
.attr("d", pathGenerator);
```

And in case that isn't clear, it's the equivalent of writing this:

```js
.attr('d', (d) => pathGenerator(d))
```

You can find the final code and live preview on Codepen:

### How to Use Multiple Datasets in D3.js

Sometimes you'll want to visualize two datasets from different sources. For example I have a data [file](https://github.com/iamspruce/intro-d3/blob/main/data/nigeria_state_boundaries.geojson) that contains the geographic data of Nigeria and another [file](https://github.com/iamspruce/intro-d3/blob/main/data/nigeria-states.json) that contains information about states in Nigeria.

In the data loading section of this tutorial, we only covered loading a single data set. Loading multiple datasets in D3 looks like this:

```js
Promise.all([
	d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"),
	d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json")
]).then(([geoJSONdata, countryData]) => {
    console.log(geoJSONdata)
    console.log(countryData)
});
```

By adding all the D3 data loading methods `d3.json()` inside the `Promise.all`, the `.then()` callback will only get called when all the data have finished loading, although if one of the data file fails to load the callback will not be called and would result in an error.

### Map with City Names

Now let's use the **loading multiple datasets** idea to create a map with city names.

For simplicity we are going to leave out the part of creating the map because we already covered that above. Now, we'll only focus on adding the cities names:

Once we have loaded the data we need to format it:

```js
countryData.data.forEach((d) => {
 d.info.Longitude = +d.info.Longitude;
 d.info.Latitude = +d.info.Latitude;
});
```

Above we converted the longitudes and latitudes. Next we need to fit our map to our container. To do that you'll use the `d3.fitSize()` method:

```js
projection.fitSize([width, height], geoJSONdata);
```

Lastly we need to add the city names:

```js
g.selectAll("text")
 .data(countryData.data)
 .join("text")
  .attr("x", (d) => projection([d.info.Longitude, d.info.Latitude])[0])
  .attr("y", (d) => projection([d.info.Longitude, d.info.Latitude])[1])
  .attr("dy", -7)
  .style("fill", "black")
  .attr("text-anchor", "middle")
  .text((d) => d.Name);
```

And that's it! We have a map with name of cities (I might have added circles too, because I think it's cool). The full code is on Codepen:

## Event Handling with D3.js

At the beginning of this tutorial we talked about selections, but one thing we didn't cover was event handling.

In D3 we can add or remove event handlers to or from selected document elements using the `.on()` method.

The `.on()` method accepts two arguments:

1.  Event type (usually a string)
2.  A callback function that is called when our event is fired

#### Event Types in D3

The D3 `.on()` event type can be any [DOM event type](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events), but the most common events with D3 are:

| Event Type | Description |
| --- | --- |
| zoom | selection is being panned and zoomed |
| click | selection got clicked |
| mouseover | mouse pointer moves over a selection |
| mouseout | mouse pointer leaves a slection |

### Map with Panning and Zooming

To see how D3 event handling works let's add pan and zoom to our previously created map.

The first thing we need to do is to define the zoom function:

```js
let zooming = d3
  .zoom()
  .scaleExtent([1, 8])
  .on("zoom", (event) => {
   console.log(event)
  })
```

The first thing we need to do is use the `d3.zoom()` method. We also set the `scaleExtent([1,8])`. We do this to set the limit of the zoom, otherwise you'll keep zooming to infinity. Now let's add the transformation to our map paths in the callback function:

```js
.on("zoom", (event) => {
  // transform paths when zoomed
  g.selectAll("path").attr("transform", event.transform);
  
  // transform circles when zoomed
  g.selectAll("circle")
    .attr("transform", event.transform)
	.attr("r", 5 / event.transform.k);
  
  // transform text when zoomed
  g.selectAll("text")
	.attr("transform", event.transform)
	.style("font-size", `${18 / event.transform.k}`)
	.attr("dy", -7 / event.transform.k);
});
```

NOTE: The `event.transform` is a short hand for setting the `translate('x','y')` and `scale` (event.transform.k).

Lastly let's call the zooming function on our SVG selection:

```js
svg.call(zooming)
```

You can find the full code and preview on Codepen:

### Programmatic zooming in D3

Turns out in D3 we can control zooming programmatically, this let us create buttons that can be used to control the zoom behavior:  

Let's add those buttons to our previous map:

```html
<body>
 <div class="btn-group-vertical" role="group" aria-label="..." id="float-button-group">
  <button class="btn-default" id="zoomIn">
   <svg class="svg-icon" viewBox="0 0 20 20">
    <title>Zoom In</title>
	...svg icon
	</svg>
  </button>
  <button class="btn-default" id="zoomOut">
   <svg class="svg-icon" viewBox="0 0 20 20">
  <title>Zoom Out</title>
  ...svg icon
	</svg>
  </button>
  <button class="btn-default" id="resetZoom">
   <svg class="svg-icon" viewBox="0 0 20 20">
	<title>Reset Zoom</title>
	...svg icon
	</svg>
  </button>
</div>
    
<svg id="d3_demo"></svg>
</body>
```

The next step is to select those buttons and control the zoom behavior:

```js
d3.select("#zoomIn").on("click", () => {
  svg.transition().call(zooming.scaleBy, 2);
});
d3.select("#zoomOut").on("click", () => {
  svg.transition().call(zooming.scaleBy, 0.5);
});
d3.select("#resetZoom").on("click", () => {
  svg.transition().call(zooming.scaleTo, 1);
});
```

What is `scaleBy` and `scaleTo`? `scaleBy` multiplies the current scale by our given value (2), while `scaleTo` sets the scale factor to our given value (1) which resets the zoom.

You can find the preview and full code on Codepen:

### How to Add ToolTips in D3

Let's add ToolTips to our map. A tooltip shows more information about an item when the user hovers over that item.

Let's first create the tooltip:

```js
let tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
```

Next let's add the tooltip when the circle is hovered over, and remove it when the mouse pointer leaves the circle:

```js
g.selectAll("circle")
  ...
  .style("fill", "green")
  .on("mouseover", (event, d) => {
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip.html(`<p>Population: ${d.info.Population}</a>` + `<p>Name: ${d.Name}</p>`)
    .style("left", event.pageX + "px")
    .style("top", event.pageY - 28 + "px");
  })
  .on("mouseout", (d) => {
    tooltip.transition().duration(500).style("opacity", 0);
  });
```

Here's the final code and preview (try hovering on the circles):

## Conclusion

Congratulations D3 Ninja! You've made it this far. Hopefully you have learnt the basics of Data Visualization with D3.

Here are some next steps:

-   Check out the [freeCodeCamp Data Visualization](https://www.freecodecamp.org/learn/data-visualization/) certification
-   Check out the docs and more on [D3's officail website](https://d3js.org/)

If you created something wonderful with this, please feel free to tweet about it and tag me [@sprucekhalifa](https://twitter.com/sprucekhalifa). And don't forget to hit the follow button.

Oh and happy coding!