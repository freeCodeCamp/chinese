> -  原文地址：[Different Types of APIs – SOAP vs REST vs GraphQL](https://www.freecodecamp.org/news/rest-vs-graphql-apis/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Jing Yan
> -  校对者：

![Different Types of APIs – SOAP vs REST vs GraphQL](https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/john-towner-p-rN-n6Miag-unsplash.jpg)

大家好！在这篇文章中，我们会详细介绍现代软件开发中的核心概念————APIs。

我们将讨论当今使用的主要 API 类型（SOAP、REST 和 GraphQL）、它们的特性、优缺点以及让它们各自发挥最大效用的实践情况。

现在开始吧！🙃

# 目录

-   [How SOAP APIs Work](#how-soap-apis-work)
    -   [About XML](#about-xml)
    -   [How to Consume a SOAP API](#how-to-consume-a-soap-api)
-   [How REST APIs Work](#how-rest-apis-work)
    -   [How to Consume a REST API](#how-to-consume-a-rest-api)
-   [How GraphQL APIs work](#how-graphql-apis-work)
    -   [How to Consume a GraphQL API](#how-to-consume-a-graphql-api)
-   [Wrapping Up](#wrapping-up)

## 介绍

在 [最近的一篇文章里](https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/)，我简要介绍了两个在现代软件开发中非常重要的概念：客户端和 API。

****客户端**** 是一种在资源或 ****服务商**** （服务器）和服务或资源请求者（客户端）之间构建应用程序任务或工作负载的模式。

简单来说，客户端是请求某种信息或执行某种操作的应用程序，而服务器则是根据客户端的操作发送信息或执行操作的程序。

Most applications nowadays use a client-server model. The most important concept to remember about it is that ****clients request resources or services**** that ****the server performs****. The way in which these two parts usually communicate is through an **API** (application programming interface).

An API is nothing more than a **set of defined rules that establishes how one application can communicate with another**. It's like a contract between the two parts that says "If you send A, I'll always respond B. If you send C, I'll always respond D..." and so on.

有了这组规则，客户端就确切地知道完成某项任务需要什么，服务器则确切地知道当必须执行某项操作时，客户端需要什么。

在当前的软件开发中，应用程序接口（API）无处不在。几乎所有类型的应用程序都会使用 API 通信所支持的主从式架构模型。因此，作为开发人员，熟悉 API 会对你大有裨益。

时下最流行的 API 实现方式是 REST 和 GraphQl。接下来我们还将了解一下 SOAP，它在几年前相当流行，现在仍在一些小众领域使用。

如果你想要了解更多有关 API 的知识, [可以参阅这个视频了解](https://www.youtube.com/watch?v=yBZO5Rb4ibo)。

有鉴于此，让我们来详细了解 SOAP、REST 和 GraphQL API 的工作原理。

# SOAP APIs 如何运作

Simple Object Access Protocol (SOAP) is a messaging protocol used for exchanging structured data between different systems over the internet. SOAP is an XML-based protocol and is considered one of the earliest web service protocols.
简单对象访问协议 （SOAP） 是一种消息传递协议，用于通过互联网在不同系统之间交换结构化数据。SOAP 是一种基于 XML 的协议，是最早的 Web 服务协议之一。

SOAP was first introduced in 1998 by Microsoft as a successor to Common Object Request Broker Architecture (CORBA) and Distributed Component Object Model (DCOM).

SOAP was designed to provide a platform-independent way to exchange data between different systems over the internet. SOAP was later standardized by the World Wide Web Consortium (W3C) in 2003.

**主要特点：**

1.  **Protocol-Independent:** SOAP is designed to work with any protocol that supports the transmission of messages over the internet, including HTTP, SMTP, and FTP.
2.  **Platform-Independent:** SOAP is designed to work with any programming language or platform that supports XML and can send and receive HTTP messages.
3.  **Messaging:** SOAP is a messaging protocol and defines a set of rules for exchanging structured data between different systems.
4.  **Security:** SOAP supports several security standards, including encryption, digital signatures, and authentication.
5.  **Extensibility:** SOAP allows for the creation of custom extensions to the protocol to support specific requirements.

**Pros:**

1.  **Standardization:** SOAP is a well-established and standardized protocol, making it a reliable choice for exchanging data between different systems.
2.  **Security:** SOAP provides built-in support for several security standards, making it a secure choice for transmitting sensitive data.
3.  **Extensibility:** SOAP is highly extensible and allows for the creation of custom extensions to support specific requirements.

**Cons:**

1.  **Complexity:** SOAP can be complex to implement and may require specialized expertise.
2.  **Overhead:** SOAP messages can be large and can require significant processing resources, resulting in increased overhead.
3.  **Performance:** SOAP can be slower compared to other API protocols due to its messaging nature.

**最佳实践：**

1.  **When you need to transmit sensitive data:** SOAP supports several security standards, making it a secure choice for transmitting sensitive data.
2.  **When you need to support complex data structures:** SOAP supports complex data structures, making it a good choice for transmitting and exchanging data between different systems.
3.  **When you need a reliable and standardized protocol:** SOAP is a well-established and standardized protocol, making it a reliable choice for exchanging data between different systems.

SOAP APIs were widely used in the early days of web services and are still used in several industries and sectors today, although REST and GraphQL have become more popular in recent years.

Here are some industries, sectors, and types of applications in which SOAP is still the main option:

1.  **Healthcare:** SOAP is still widely used in healthcare applications, especially in electronic health records (EHR) and health information exchanges (HIE). This is because SOAP provides a secure and reliable way to transmit sensitive patient information between different systems.
2.  **Finance:** SOAP is still used in financial applications, such as payment gateways and trading platforms, because it provides a secure and reliable way to transmit financial data.
3.  **Enterprise applications:** SOAP is still used in enterprise applications, such as customer relationship management (CRM) and enterprise resource planning (ERP) systems, because it provides a standardized and reliable way to exchange data between different systems.
4.  **Legacy systems:** Many older systems and applications still use SOAP APIs, and it can be costly and time-consuming to migrate them to newer technologies.

In conclusion, SOAP APIs have been around for a long time and are still used in several industries to exchange data between different systems.

SOAP might be the most beneficial option for developing an API when you need to transmit sensitive data, support complex data structures, or need a reliable and standardized protocol.

## About XML

As mentioned, SOAP APIs use XML as the main format for data transmission, so let's explain how XML works.

XML stands for Extensible Markup Language. It is a markup language that allows users to create custom tags and attributes to describe the structure and content of data.

XML uses a set of rules for encoding documents in a format that is both human-readable and machine-readable. This is achieved by using tags to define elements of a document, similar to HTML.

For example, an XML document may have a tag called `<person>` to define an element representing a person, with nested tags for properties such as `<name>`, `<age>`, and `<address>`. XML also allows users to define custom tags to describe their data in a way that is specific to their needs.

XML is widely used in various industries, including finance, healthcare, and government. It is often used for data exchange between different applications and systems, as it provides a standardized way of representing data that can be easily parsed by computers. XML is also used for storing configuration files and metadata for various applications.

Overall, XML provides a flexible and extensible way of describing and exchanging data that can be easily processed by computers. However, its use has declined in recent years with the rise of more modern formats such as JSON and YAML, which are more lightweight and easier to use for many applications.

## 如何使用 SOAP API

Here's an example of how you can make a simple request to a SOAP API from a JavaScript front-end application:

```javascript
// specify the URL of the SOAP API endpoint
const url = 'http://www.example.com/soap-api';

// specify the SOAP message to send
const soapMessage = '<?xml version="1.0" encoding="UTF-8"?>' +
                    '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://example.com">' +
                    '<SOAP-ENV:Header/>' +
                    '<SOAP-ENV:Body>' +
                    '<ns1:GetData>' +
                    '<ns1:Id>123</ns1:Id>' +
                    '</ns1:GetData>' +
                    '</SOAP-ENV:Body>' +
                    '</SOAP-ENV:Envelope>';

// set the content type of the SOAP message
const contentType = 'text/xml';

// make the fetch request
fetch(url, {
  method: 'POST', // SOAP uses the HTTP POST method to send requests to a server.
  headers: {
    'Content-Type': contentType,
    'SOAPAction': 'http://example.com/GetData'
  },
  body: soapMessage
})
  .then(response => response.text())
  .then(xml => {
    // handle the XML response
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    const value = xmlDoc.getElementsByTagName('Value')[0].childNodes[0].nodeValue;
    console.log(value);
  })
  .catch(error => console.error(error));
```

Let's break down what each line does:

1.  `const url = 'http://www.example.com/soap-api';` specifies the URL of the SOAP API endpoint.
2.  `const soapMessage = '<?xml version="1.0" encoding="UTF-8"?>' + ...` specifies the SOAP message to send to the API endpoint. This is a string that contains the XML markup for the SOAP message.
3.  `const contentType = 'text/xml';` specifies the content type of the SOAP message.
4.  `fetch(url, { ... })` makes a fetch request to the API endpoint using the specified URL and options.
5.  `method: 'POST',` specifies the HTTP method to use for the request.
6.  `headers: { ... }` specifies the headers to include in the request.
7.  `'Content-Type': contentType,` sets the content type of the request header to the value of `contentType`.
8.  `'SOAPAction': 'http://example.com/GetData'` sets the SOAPAction header to the value of the SOAP action that corresponds to the API method being called.
9.  `body: soapMessage` sets the body of the request to the value of `soapMessage`.
10.  `.then(response => response.text())` converts the response to text format.
11.  `.then(xml => { ... })` handles the response from the server.

A typical response might look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
      <ns1:GetDataResponse xmlns:ns1="http://example.com">
         <ns1:Result>
            <ns1:Id>123</ns1:Id>
            <ns1:Value>42</ns1:Value>
         </ns1:Result>
      </ns1:GetDataResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

To access the values in the XML response, you can use the DOMParser API to parse the response into an XML document object, and then use DOM traversal methods to navigate the document and extract the values.

For example, the following code extracts the value of the `Value` element from the XML document object:

```javascript
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml, 'text/xml');
const value = xmlDoc.getElementsByTagName('Value')[0].childNodes[0].nodeValue;
console.log(value); // output: 42
```

Here's what each line does:

1.  `const parser = new DOMParser();` creates a new instance of the DOMParser object, which is used to parse the XML response.
2.  `const xmlDoc = parser.parseFromString(xml, 'text/xml');` parses the XML response into an XML document object.
3.  `const value = xmlDoc.getElementsByTagName('Value')[0].childNodes[0].nodeValue;` retrieves the value of the `Value` element from the XML document object. This line uses the `getElementsByTagName()` method to get all elements with the tag name `Value`, and then accesses the first element (assuming there's only one), and gets the value of its first child node. The value is then assigned to the `value` variable.
4.  `console.log(value); // output: 42` logs the value of the `Value` element to the console.

Overall, SOAP responses tend to be more verbose and complex than responses from REST or GraphQL APIs, due to their use of XML and the envelope format. But this format provides a standardized way of exchanging information that can be useful in certain industries and use cases.

# REST APIs 如何运作

Representational State Transfer (REST) is a widely used architectural style for building web services and APIs.

REST was first introduced in 2000 by Roy Fielding in his doctoral dissertation, "Architectural Styles and the Design of Network-based Software Architectures." Fielding, who was also one of the primary authors of the HTTP protocol, defined REST as an architectural style that is based on the principles of the web.

RESTful APIs are designed to be simple, scalable, and flexible. They are often used in web and mobile applications, as well as in Internet of Things (IoT) and microservices architectures.

**主要特点：**

1.  **Stateless:** REST APIs are stateless, which means that each request contains all the necessary information to process it. This makes it easier to scale the API and improves performance by reducing the need to store and manage session data on the server.
2.  **Resource-based:** REST APIs are resource-based, which means that each resource is identified by a unique URI (Uniform Resource Identifier) and can be accessed using standard HTTP methods such as GET, POST, PUT, and DELETE.
3.  **Uniform Interface:** REST APIs have a uniform interface that allows clients to interact with resources using a standardized set of methods and response formats. This makes it easier for developers to build and maintain APIs, and for clients to consume them.
4.  **Cacheable:** REST APIs are cacheable, which means that responses can be cached to improve performance and reduce network traffic.
5.  **Layered System:** REST APIs are designed to be layered, which means that intermediaries such as proxies and gateways can be added between the client and server without affecting the overall system.

**优点：**

-   **Easy to learn and use:** REST APIs are relatively simple and easy to learn compared to other APIs.
-   **Scalability:** The stateless nature of REST APIs makes them highly scalable and efficient.
-   **Flexibility:** REST APIs are flexible and can be used to build a wide range of applications and systems.
-   **Wide support:** REST APIs are widely supported by development tools and frameworks, making it easy to integrate them into existing systems.

**缺点：**

-   **Lack of standards:** The lack of strict standards for REST APIs can lead to inconsistencies and interoperability issues.
-   **Limited functionality:** REST APIs are designed to handle simple requests and responses and may not be suitable for more complex use cases.
-   **Security concerns:** REST APIs can be vulnerable to security attacks such as cross-site scripting (XSS) and cross-site request forgery (CSRF) if not implemented properly.

**最佳实践：**

-   REST APIs are well-suited for building web and mobile applications, as well as microservices architectures and IoT systems.
-   They are particularly useful in situations where scalability and flexibility are important, and where developers need to integrate with existing systems and technologies.

In summary, REST APIs are a popular and widely used architectural style for building web services and APIs. They are simple, scalable, and flexible, and can be used to build a wide range of applications and systems.

While there are some limitations and concerns with REST APIs, they remain a popular and effective option for building APIs in many different industries and sectors.

## 如何使用 REST API

Here's an example of how to make a simple GET request to a REST API from a JavaScript front-end application, and how to access the values within the response:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Access the values within the response here
  })
  .catch(error => console.error(error));
```

Here's what each line does:

1.  `fetch('https://jsonplaceholder.typicode.com/todos/1')` initiates a GET request to the specified URL.
2.  `.then(response => response.json())` converts the response from JSON format to a JavaScript object.
3.  `.then(data => { ... })` defines a function that will be executed when the response has been successfully converted to a JavaScript object. This function will have access to the JavaScript object containing the response data.
4.  `console.log(data);` logs the response data to the console. You can inspect the response data to determine how to access the values within the response.

To access the values within the response, you can use standard JavaScript object traversal techniques, such as dot notation or bracket notation. For example, if the response from the REST API is in the following format:

```javascript
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

You can access the `title` value using dot or bracket notation like this:

```
console.log(data.title); // output: "delectus aut autem"
console.log(data['title']); // output: "delectus aut autem"
```

Here, `data` refers to the JavaScript object that contains the response data.

REST API responses are generally simpler and more lightweight than SOAP responses, and they are often formatted in either JSON or XML. The use of standard formats makes it easier for clients to parse the response and extract the relevant data.

Additionally, REST APIs often use standard HTTP status codes to indicate the success or failure of a request, which can simplify error handling on the client side.

Overall, REST APIs are a popular and widely used approach to building web APIs due to their simplicity, flexibility, and ease of use.

# GraphQL APIs 如何运作

GraphQL is a query language and runtime for APIs that was developed by Facebook in 2012. It was released to the public in 2015 and has since gained popularity as an alternative to REST APIs.

GraphQL was originally developed by Facebook as a way to simplify data fetching for their mobile applications. They needed a way to make complex data requests from the server without causing performance issues or over-fetching data. GraphQL was born out of the need to solve these problems.

GraphQL was released as an open-source project in 2015 and has since gained popularity in the developer community. It is now supported by many development tools and frameworks, including Apollo, Prisma, and Hasura.

**主要特点：**

1.  **Strongly Typed:** GraphQL APIs are strongly typed, which means that each field has a specific data type. This makes it easier to validate and handle data on the client and server sides.
2.  **Query Language:** GraphQL has its own query language that allows clients to specify exactly what data they need. This reduces over-fetching of data and improves performance.
3.  **Single Endpoint:** GraphQL APIs have a single endpoint, which means that clients can fetch all the data they need from a single request.
4.  **Declarative:** GraphQL APIs are declarative, which means that clients specify what they want, not how to get it. This allows for more efficient and flexible data fetching.
5.  **Schema-Driven:** GraphQL APIs are schema-driven, which means that the schema defines the structure of the data and the available queries and mutations. This makes it easier for developers to understand and work with the API.

**优点：**

-   **Efficient Data Fetching:** GraphQL APIs allow clients to fetch only the data they need, reducing over-fetching and improving performance.
-   **Strongly Typed:** GraphQL APIs are strongly typed, making it easier to validate and handle data.
-   **Single Endpoint:** GraphQL APIs have a single endpoint, reducing the complexity of the API and making it easier to work with.
-   **Schema-Driven:** GraphQL APIs are schema-driven, which makes it easier for developers to understand and work with the API.

**缺点：**

-   **Complexity:** GraphQL APIs can be more complex to set up and work with compared to REST APIs.
-   **Caching:** Caching can be more challenging with GraphQL APIs due to the flexible nature of the API.
-   **Learning Curve:** GraphQL requires a learning curve for both developers and clients, as it has its own query language and approach to data fetching.

**最佳实践：**

-   **Efficient and flexible needs:** GraphQL is well-suited for building applications that require efficient and flexible data fetching, such as mobile and web applications.
-   **Complex data requirements:** It is particularly useful in situations where there are complex data requirements and where over-fetching data can cause performance issues.

In conclusion, GraphQL is a query language and runtime for APIs that provides efficient and flexible data fetching capabilities.

While it can be more complex to set up and work with compared to REST APIs, it offers benefits such as strongly typed data, single endpoints, and schema-driven development. It is well-suited for building applications with complex data requirements and where efficient data fetching is important.

## 如何使用 GraphQL API

Here's an example of how to make a simple request to retrieve information from a GraphQL API from a JavaScript front-end application, and how to access the values within the response:

```javascript
fetch('https://api.example.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      query {
        user(id: 123) {
          name
          email
          posts {
            title
          }
        }
      }
    `
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  // Access the values within the response here
})
.catch(error => console.error(error));
```

Here's what each line does:

1.  `fetch('https://api.example.com/graphql', { ... })` initiates a POST request to the specified GraphQL API endpoint. The second argument to the `fetch()` function is an options object that specifies the HTTP method, headers, and request body.
2.  `method: 'POST'` specifies that the HTTP method for the request is `POST`.
3.  `headers: { 'Content-Type': 'application/json' }` specifies the `Content-Type` header for the request, which is `application/json` to indicate that the request body is in JSON format.
4.  `body: JSON.stringify({ ... })` specifies the request body as a JSON-encoded string. In this example, the request body is a GraphQL query that retrieves information about a user with the ID `123`.
5.  `.then(response => response.json())` converts the response from JSON format to a JavaScript object.
6.  `.then(data => { ... })` defines a function that will be executed when the response has been successfully converted to a JavaScript object. This function will have access to the JavaScript object containing the response data.
7.  `console.log(data);` logs the response data to the console. You can inspect the response data to determine how to access the values within the response.

To access the values within the response, you can use standard JavaScript object traversal techniques, such as dot notation or bracket notation. For example, if the response from the GraphQL API is in the following format:

```javascript
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "posts": [
        { "title": "Post 1" },
        { "title": "Post 2" }
      ]
    }
  }
}
```

You can access the `name` value using dot or bracket notation like this:

```javascript
console.log(data.data.user.name); // output: "John Doe"
console.log(data['data']['user']['name']); // output: "John Doe"
```

在这里, `data` 指的是 the JavaScript object that contains the response data. The response data is wrapped in a `data` object, and the values can be accessed by traversing the object using dot notation or bracket notation.

GraphQL API responses are typically more focused and specific than REST API responses because the client can specify exactly what data they want to receive. This makes it easier to avoid overfetching or underfetching data, and can improve performance by reducing the amount of data transferred over the network.

Additionally, GraphQL APIs can provide a more flexible schema that can be easily modified over time without breaking existing clients. Overall, GraphQL APIs are a popular choice for building modern web applications due to their flexibility, efficiency, and ease of use.

# **总结**

各位，我希望你们能一如往常地享受阅读本文的过程，并学到新知识。

如有需要，你可以在 [领英](https://www.linkedin.com/in/germancocca/) 或 [推特](https://twitter.com/CoccaGerman) 上关注我。下次再见！

![giphy](https://www.freecodecamp.org/news/content/images/2023/03/giphy.gif)
