> -  原文地址：[How to Optimize Your Node.js API](https://www.freecodecamp.org/news/how-to-optimize-nodejs-apis/)
> -  原文作者：[Kayode Adeniyi](https://www.freecodecamp.org/news/author/mkbadeniyi/)
> -  译者：
> -  校对者：

![How to Optimize Your Node.js API](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/pexels-ann-marie-kennon-1296000.jpg)

In this article, I will walk you through some of the best methods to optimize APIs written in Node.js.

### Prerequisites

To get the most out of this article, you will need an understanding of the following concepts:

-   Node.js setup and installation
-   How to build APIs with Node
-   How to use the Postman tool
-   How JavaScript async/await works
-   How to work with a basic Redis application

## What API Optimization Actually Means

Optimization involves improving the response time of your API. The shorter the response time is, the faster the API will be.

The tips I will share in this article will help you reduce response time, lower latency, manage errors and throughput, and minimize CPU and memory usage.

# How to Optimize Node.js APIs

## 1\. Always Use Asynchronous Functions

Async functions are like the heart of JavaScript. So, the best we can do to optimize CPU usage is to write asynchronous functions to perform nonblocking I/O operations.

I/O operations include the processes which perform read and write data operations. It can be the database, cloud storage, or any local storage disk on which the I/O operations are performed.

Using asynchronous functions in an application that heavily uses I/O operations will improve it. This is because the CPU will be able to handle multiple requests simultaneously due to non-blocking I/O, while one of these requests is making an Input/Output operation.  
  
Here's an example:

```js
var fs = require('fs');
// Performing a blocking I/O
var file = fs.readFileSync('/etc/passwd');
console.log(file);
// Performing a non-blocking I/O
fs.readFile('/etc/passwd', function(err, file) {
    if (err) return err;
    console.log(file);
});
```

-   We use the **fs** Node package to work with files.
-   **readFileSync()** is synchronous and blocks execution until finished.
-   **readFile()** is asynchronous and returns immediately while things function in the background.

## 2\. Avoid Sessions and Cookies in APIs, and Send Only Data in the API Response.

You use cookies and sessions to store temporary states in the server. They cost a lot for servers.

Now, stateless APIs are common and provide JWT, OAuth, and other authentication mechanisms. These authentication tokens are kept on the client side and protect the servers to manage the state.

JWT is a JSON-based security token for API Authentication. JWTs can be seen but they're not modifiable once they're sent. JWT is just serialized, not encrypted. OAuth is not an API or a service – rather, it's an open standard for authorization. OAuth is a standard set of steps for obtaining a token.

Also, don’t waste your time in making your Node.js server serve static files. Use NGINX and Apache instead, as they work far better than Node for this purpose.

While building APIs in Node, don’t send the full HTML page in the response of the API. Node servers work better when only data is sent by the API. Generally, this kind of application works with JSON data.

## 3\. Optimize Database Queries

Query optimization is an essential part of building optimized APIs in Node. Especially in larger applications, you'll need to query databases many times. So, a bad query can reduce the overall performance of the application.

Indexing is an approach to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed. It is a data structure technique that is used to quickly locate and access the data in a database. Indexes are created using a few database columns.

Let's say we have a DB schema without indexing and the database contains 1 million records. A simple find query will go through a larger number of records to find the matching one compared to the schema with indexing.

-   Query without indexing:

```js
> db.user.find({email: 'ofan@skyshi.com'}).explain("executionStats")
```

-   Query with indexing:

```js
> db.getCollection("user").createIndex({ "email": 1 }, { "name": "email_1", "unique": true })
{
 "createdCollectionAutomatically" : false,
 "numIndexesBefore" : 1,
 "numIndexesAfter" : 2,
 "ok" : 1
}
```

There is a huge difference in the number of documents scanned ~ 1038:

| Method | Document Scanned |
| --- | --- |
| Without indexing | With indexing |
| 1039 | 1 |

## **4\. Optimize APIs with PM2 Clustering**

PM2 is a production process manager designed for Node.js applications. It has a built-in load balancer and allows the application to run as multiple processes without code modifications.

Application downtime is almost zero using PM2. Overall, PM2 can really improve the performance and concurrency of your API.

Deploy the code on production and run the following command to see how the PM2 cluster has scaled on all available CPUs:

```js
pm2 start  app.js -i 0
```

## **5\. Reduce TTFB (Time to First Byte)**

Time to the first byte is a measurement used as an indication of the responsiveness of a web server or other network resource. TTFB measures the duration from the user or client making an HTTP request to the first byte of the page being received by the client's browser.

It is unlikely that the page all users are accessing on the web browser loads within 100ms. This is simply because of the physical distance between the server and the users.

Here, we can reduce the Time to First Byte by using a CDN and caching content in local data centers across the globe. This helps users access the content with minimal latency. Cloudflare is one of the CDN solutions you can use to start with.

## **6\. Use Error Scripts with Logging**

The best way to monitor the proper functioning of your APIs is to keep track of their activity. This is where logging the data comes into play.

A common example of logging is printing out the logs to the console (using `console.log()`).

More efficient logging modules as compared to console.log are Morgan, Buyan, and Winston. Here, I’ll go with the example of Winston.

### How to log with Winston – features

-   Provides 4 custom levels that we can use such as info, error, verbose, debug, silly, and warn.
-   Supports querying the logs
-   Simple profiling
-   You can use multiple transports of the same type
-   Catches and logs uncaughtException

You can set up Winston with the following command:

```js
npm install winston --save
```

And here's a basic configuration of Winston for logging:

```js
const winston = require('winston');

let logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'verbose',
      timestamp: new Date(),
      filename: 'filelog-verbose.log',
      json: false,
    }),
    new winston.transports.File({
      level: 'error',
      timestamp: new Date(),
      filename: 'filelog-error.log',
      json: false,
    })
  ]
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};
```

## **7\. Use HTTP/2 Instead of HTTP**

In addition to these techniques, we can also apply some other techniques like using HTTP/2 over HTTP, as it has the following advantages:

-   Multiplexing
-   Header compression
-   Server push
-   Binary format

It focuses on the performance and issues that the previous version of HTTP has. It makes web browsing faster and easier and consumes less bandwidth.

## **8\. Run Tasks in Parallel**

Use [async.js](https://caolan.github.io/async/v3/) to help you run tasks. Parallelizing tasks has a great impact on the performance of your API. It reduces latency and minimizes blocking operations.  
  
Parallel means running multiple things at the same time. However, when you run things in parallel, you don’t need to control the execution sequence of the program.

Here's a simple example using async parallel with an array:

```js
const async = require("async");
// an example using an object instead of an array
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
    }
}, function(err, results) {
  console.log(results);
  // results now equals to: {task2: 2, task1: 1}
});
```

In this example, we used [async.js](https://caolan.github.io/async/v3/) to execute the two tasks in asynchronous mode. Task 1 requires 200 ms to complete, but task 2 does not wait for its completion – it executes at its specified delay of 100ms.

Parallelizing tasks has a great impact on the performance of API. It reduces latency and minimizes blocking operations.

## **9\. Use Redis to Cache the App**

Redis is the advanced version of Memcached. It optimizes the APIs response time by storing and retrieving the data from the main memory of the server. It increases the performance of the database queries which also reduces access latency.

In the following code snippets, we have called the APIs without and with Redis, respectively, and compared the response time.

There is a huge difference in the response time ~ 899.37ms:

| Method | Response Time |
| --- | --- |
| Without using Redis | With Redis |
| 900ms | 0.621 |

Here's Node without Redis:

```js
'use strict';

//Define all dependencies needed
const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');

//Load Express Framework
var app = express();

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());

const getBook = (req, res) => {
  let isbn = req.query.isbn;
  let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  axios.get(url)
    .then(response => {
      let book = response.data.items
      res.send(book);
    })
    .catch(err => {
      res.send('The book you are looking for is not found !!!');
    });
};

app.get('/book', getBook);

app.listen(3000, function() {
  console.log('Your node is running on port 3000 !!!')
});
```

And here's Node with Redis:

```js
'use strict';

//Define all dependencies needed
const express = require('express');
const responseTime = require('response-time')
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();

//Load Express Framework
var app = express();

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());

const getBook = (req, res) => {
  let isbn = req.query.isbn;
  let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
  return axios.get(url)
    .then(response => {
      let book = response.data.items;
      // Set the string-key:isbn in our cache. With the contents of the cache : title
      // Set cache expiration to 1 hour (60 minutes)
      client.setex(isbn, 3600, JSON.stringify(book));

      res.send(book);
    })
    .catch(err => {
      res.send('The book you are looking for is not found !!!');
    });
};

const getCache = (req, res) => {
  let isbn = req.query.isbn;
  //Check the cache data from the server redis
  client.get(isbn, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getBook(req, res);
    }
  });
}
app.get('/book', getCache);

app.listen(3000, function() {
  console.log('Your node is running on port 3000 !!!')
)};
```

## Conclusion

In this guide, we have learned how can we optimize the response time of Node.js APIs.

JavaScript depends heavily on functions. So, using async functions can make the script faster and non-blocking.

Other than this, we used cache memory (Redis), database indexing, TTFB and PM2 clustering to enhance the response times.

Lastly, keep in mind that it's important to pay attention to the security of the routes and make sure they're as optimized as possible. We cannot compromise a quick API response over a security loophole. So, you should keep all your standard security checks while building optimized APIs in Node.

Connect with me on [LinkedIn](https://www.linkedin.com/in/kadeniyi/).

Hasta la vista!