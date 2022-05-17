> -  原文地址：[JSON Stringify Example – How to Parse a JSON Object with JS](https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/)
> -  原文作者：[
                    
                        Kris Koishigawa
                    
                ](https://www.freecodecamp.org/news/author/kris/)
> -  译者：
> -  校对者：

![JSON Stringify Example – How to Parse a JSON Object with JS](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/602358380a2838549dcc2554.jpg)

JSON, or JavaScript Object Notation, is all around us. If you've ever used a web app, there's a very good chance that it used JSON to structure, store, and transmit data between its servers and your device.

In this article, we'll briefly go over the differences between JSON and JavaScript, then jump into different ways to parse JSON with JavaScript in the browser and in Node.js projects.

## Differences between JSON and JavaScript

While JSON looks like regular JavaScript, it's better to think of JSON as a data format, similar to a text file. It just so happens that JSON is inspired by JavaScript syntax, which is why they look so similar.

Let's take a look at JSON objects and JSON arrays and compare them to their JavaScript counterparts.

### JSON objects vs JavaScript Object Literals

First, here's a JSON object:

```json
{
  "name": "Jane Doe",
  "favorite-game": "Stardew Valley",
  "subscriber": false
}
```

jane-profile.json

The main difference between a JSON object and a regular JavaScript object – also called an object literal – comes down to the quotation marks. All the keys and string type values in a JSON object have to be wrapped in double quotation marks (`"`).

JavaScript object literals are a bit more flexible. With object literals, you don't need to wrap keys and strings in double quotation marks. Instead, you could use single quotation marks (`'`), or not use any type of quotation mark for the keys.

Here's what the code above might look like as a JavaScript object literal:

```js
const profile = {
  name: 'Jane Doe',
  'favorite-game': 'Stardew Valley',
  subscriber: false
}
```

Note that the key `'favorite-game'` is wrapped in single quotes. With object literals, you'll need to wrap keys where the words are separated by dashes (`-`) in quotes.

If you'd like to avoid quotation marks, you could rewrite the key to use camel case (`favoriteGame`) or separate the words with an underscore (`favorite_game`) instead.

### JSON arrays vs JavaScript arrays

JSON arrays work pretty much the same way as arrays in JavaScript, and can contain strings, booleans, numbers, and other JSON objects. For example:

```json
[
  {
    "name": "Jane Doe",
    "favorite-game": "Stardew Valley",
    "subscriber": false
  },
  {
    "name": "John Doe",
    "favorite-game": "Dragon Quest XI",
    "subscriber": true
  }
]
```

profiles.json

Here's what that might look like in plain JavaScript:

```js
const profiles = [
  {
    name: 'Jane Doe',
    'favorite-game': 'Stardew Valley',
    subscriber: false
  },
  {
    name: 'John Doe',
    'favorite-game': 'Dragon Quest XI',
    subscriber: true
  }
];
```

## JSON as a string

You might be wondering, if there are JSON objects and arrays, couldn't you use it in your program like a regular JavaScript object literal or array?

The reason why you can't do this is that JSON is really just a string.

For example, when you write JSON in a separate file like with `jane-profile.json` or `profiles.json` above, that file actually contains text in the form of a JSON object or array, which happens to look like JavaScript.

And if you make a request to an API, it'll return something like this:

```
{"name":"Jane Doe","favorite-game":"Stardew Valley","subscriber":false}
```

Just like with text files, if you want to use JSON in your project, you'll need to parse or change it into something your programming language can understand. For instance, parsing a JSON object in Python will create a dictionary.

With that understanding, let's look at different ways to parse JSON in JavaScript.

## How to parse JSON in the browser

If you're working with JSON in the browser, you're probably receiving or sending data through an API.

Let's take a look at a couple of examples.

### How to parse JSON with `fetch`

The easiest way to get data from an API is with `fetch`, which includes the `.json()` method to parse JSON responses into a usable JavaScript object literal or array automagically.

Here's some code that uses `fetch` to make a `GET` request for a developer-themed joke from the free [Chuck Norris Jokes API](https://api.chucknorris.io/):

```js
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));
```

If you run that code in the browser, you'll see something like this logged to the console:

```js
{
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
}
```

While that looks like a JSON object, it's really a JavaScript object literal, and you can use it freely in your program.

### How to stringify JSON with `JSON.stringify()`

But what if you want to send data to an API?

For instance, say you'd like to send a Chuck Norris joke to the Chuck Norris Jokes API so other people can read it later.

First, you'd write your joke as a JS object literal:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
```

Then, since you're sending data to an API, you'd need to turn your `newJoke` object literal into a JSON string.

Fortunately, JavaScript includes a super helpful method to do just that – `JSON.stringify()`:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}

console.log(typeof JSON.stringify(newJoke)); // string
```

While we're converting an object literal into a JSON string in this example, `JSON.stringify()` also works with arrays.

Finally, you'd just need to send your JSON stringified joke back to the API with a `POST` request.

Note that the Chuck Norris Jokes API doesn't actually have this feature. But if it did, here's what the code might look like:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

fetch('https://api.chucknorris.io/jokes/submit', { // fake API endpoint
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newJoke), // turn the JS object literal into a JSON string
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.error(err);
  });
```

And just like that, you've parsed incoming JSON with `fetch` and used `JSON.stringify()` to convert a JS object literal into a JSON string.

### How to work with local JSON files in the browser

Unfortunately, it's not possible (or advisable) to load a local JSON file in the browser.

`fetch` will throw an error if you try to load a local file. For example, say you have a JSON file with some jokes:

```json
[
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.json

And you want to parse it and create a list of jokes on a simple HTML page.

If you create a page with the following and open it in your browser:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <title>Fetch Local JSON</title>
  </head>
  <script>
    fetch("./jokes.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
      .then((res) => res.json())
      .then((data) => console.log(data));
  </script>
</html>
```

index.html

You'll see this in the console:

```
Fetch API cannot load file://<path>/jokes.json. URL scheme "file" is not supported
```

By default, browsers don't allow access to local files for security reasons. This is a good thing, and you shouldn't try to work around this behavior.

Instead, the best thing to do is to convert the local JSON file into JavaScript. Fortunately, this is pretty easy since JSON syntax is so similar to JavaScript.

All you need to do is create a new file and declare your JSON as a variable:

```js
const jokes = [
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.js

And add it to your page as a separate script:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <title>Fetch Local JSON</title>
  </head>
  <script src="jokes.js"></script>
  <script>
    console.log(jokes);
  </script>
</html>
```

You'll be able to use the `jokes` array freely in your code.

You could also use JavaScript `[modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)` to do the same thing, but that's a bit outside the scope of this article.

But what if you want to work with local JSON files and have Node.js installed? Let's take a look at how to do that now.

## How to parse JSON in Node.js

Node.js is a JavaScript runtime that allows you to run JavaScript outside of the browser. You can read all about [Node.js here](https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/).

Whether you use Node.js to run code locally on your computer, or to run entire web applications on a server, it's good to know how to work with JSON.

For the following examples, we'll use the same `jokes.json` file:

```json
[
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "elgv2wkvt8ioag6xywykbq",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
    "value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
  },
  {
    "categories": ["dev"],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "ae-78cogr-cb6x9hluwqtw",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
    "value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
  }
]
```

jokes.json

### How to parse a JSON file with `require()`

Let's start with the easiest method.

If you have a local JSON file, all you need to do is use `require()` to load it like any other Node.js module:

```js
const jokes = require('./jokes.json');
```

The JSON file will be parsed for you automatically and you can start using it in your project:

```js
const jokes = require('./jokes.json');

console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
```

Note that this is synchronous, meaning that your program will stop until it parses the entire file before continuing. Really large JSON files can cause your program to slow down, so just be careful with that.

Also, because parsing JSON this way loads the entire thing into memory, it's better to use this method for static JSON files. If the JSON file changes while your program is running, you won't have access to those changes until you restart your program and parse the updated JSON file.

### How to parse a JSON file with `fs.readFileSync(`) and `JSON.parse()`

This is the more traditional way (for lack of a better term) to parse JSON files in Node.js projects – read the file with `fs` (file system) module, then parse with `JSON.parse()`.

Let's see how to do this with the `fs.readFileSync()` method. First, add the `fs` module to your project:

```js
const fs = require('fs');
```

Then, create a new variable to store the output of the `jokes.json` file and set it equal to `fs.readFileSync()`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync();
```

`fs.readFileSync()` takes a couple of arguments. The first is the path to the file you want to read:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json');
```

But if you log `jokesFile` to the console now, you'd see something like this:

```
<Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 63 61 74 65 67 6f 72 69 65 73 22 3a 20 5b 22 64 65 76 22 5d 2c 0a 20 20 20 20 22 63 72 65 61 74 65 64 5f 61 74 22 3a ... 788 more bytes>
```

That just means that the `fs` module is reading the file, but it doesn't know the encoding or format the file is in. `fs` can be used to load pretty much any file, and not just text-based ones like JSON, so we need to tell it how the file is encoded.

For text-based files, the encoding is usually `utf8`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
```

Now if you log `jokesFile` to the console, you'll see the contents of the file.

But so far we're just reading the file, and it's still a string. We'll need to use another method to parse `jokesFile` into a usable JavaScript object or array.

To do that, we'll use `JSON.parse()`:

```js
const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
const jokes = JSON.parse(jokesFile);

console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
```

As the name suggests, `JSON.parse()` takes a JSON string and parses it into a JavaScript object literal or array.

Like with the `require` method above, `fs.readFileSync()` is a synchronous method, meaning it could cause your program to slow down if it's reading a large file, JSON or otherwise.

Also, it only reads the file once and loads it into memory. If the file changes, you'll need to read the file again at some point. To make things easier, you might want to create a simple function to read files.

Here's what that might look like:

```js
const fs = require('fs');
const readFile = path => fs.readFileSync(path, 'utf8');

const jokesFile1 = readFile('./jokes.json');
const jokes1 = JSON.parse(jokesFile1);

console.log(jokes1[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."

// the jokes.json file changes at some point

const jokesFile2 = readFile('./jokes.json');
const jokes2 = JSON.parse(jokesFile2);

console.log(jokes2[0].value); // "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
```

### How to parse JSON with `fs.readFile(`) and `JSON.parse()`

The `fs.readFile()` method is very similar to `fs.readFileSync()`, except that it works asynchronously. This is great if you have a large file to read and you don't want it to hold up the rest of your code.

Here's a basic example:

```js
const fs = require('fs');

fs.readFile('./jokes.json', 'utf8');
```

So far this looks similar to what we did with `fs.readFileSync()`, except we're not assigning it to a variable like `jokesFile`. Because it's asynchronous, any code after `fs.readFile()` it will run before it's finished reading the file.

Instead, we'll use a callback function and parse the JSON inside it:

```js
const fs = require('fs');

fs.readFile('./jokes.json', 'utf8', (err, data) => {
  if (err) console.error(err);
  const jokes = JSON.parse(data);

  console.log(jokes[0].value);
});

console.log("This will run first!");
```

Which prints the following to the console:

```
This will run first!
Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.
```

Like with `fs.readFileSync()`, `fs.readFile()` loads the file into memory, meaning you'll need to read the file again if it changes.

Also, even though `fs.readFile()` is asynchronous, it eventually loads the entire file it's reading into memory. If you have a massive file, it may be better to look into [Node.js streams](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/) instead.

### How to stringify JSON with `JSON.stringify()` in Node.js

Finally, if you're parsing JSON with Node.js, there's a good chance that you'll need to return JSON at some point, maybe as an API response.

Luckily, this works the same way as in the browser – just use `JSON.stringify()` to convert JavaScript object literals or arrays into a JSON string:

```js
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};

console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}
```

And that's it! We've covered just about everything you need to know about working with JSON in the browser and in Node.js projects.

Now get out there and parse or stringify JSON to your heart's content.

Did I miss something? How do you parse JSON in your projects? Let me know over on [Twitter](https://twitter.com/kriskoishigawa).