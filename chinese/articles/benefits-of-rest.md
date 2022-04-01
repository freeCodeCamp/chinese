> -  原文地址：[The Benefits of Going RESTful – What is REST and Why You Should Learn About It](https://www.freecodecamp.org/news/benefits-of-rest/)
> -  原文作者：[YiğitKemalErinç](https://www.freecodecamp.org/news/author/erinc/)
> -  译者：
> -  校对者：

![The Benefits of Going RESTful – What is REST and Why You Should Learn About It](https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/1_sPLooWMag11pjZnzYXIQCA.png)

In this article, we will take a look at Representational State Transfer (REST) principles to learn what they are and what benefits you can get from applying them.

I believe it is important to understand why you're learning something – including REST. So let's look at what REST principles bring to the table.

## What is REST?

Representational State Transfer (REST) is an architectural style that has gained a lot of popularity in recent years due to its simplicity and scalability.

Before REST gained popularity, SOAP was the de-facto way of accessing resources and communicating over the web.

## Why should you care about REST?

In this section, I'll discuss why REST principles are important and why it's worth the effort to learn more about them. You'll also learn how to apply them to your backend projects.

### 1) REST is Easy to Understand and Implement

REST is meant to work over HTTP (actually HTTP was influenced by REST). Therefore it makes use of HTTP verbs that most of us know, such as GET, POST, and PUT.

Even if you do not know what these verbs are about, their names are pretty self-explanatory. Also, the clear separation of client and server code makes it easy for different teams to work on different parts (front end or back end) of applications.

Since it's easy to understand and also to implement, REST principles can help increase your dev team's productivity. They are also important if you are going to release a public API for people to develop applications with.

Many people know about REST and HTTP so it will be much easier for them to understand and use your API.

![How to Keep Your Developer Team Happy: Lead Dev New York 2019 | Arc Blog](https://ucarecdn.com/f9a4640d-ba7f-4f85-82eb-901a56362a9a/)

Happy Developers

### 2) REST Makes your Application More Scalable

There are 2 main reasons why REST can help make your application more scalable:

#### No State

As we will see in the next section (Principles of REST), one of the core principles of REST is that it's stateless on the server-side. Therefore each request will be processed independently from the previous ones.

In applications with a server-side state or sessions, a session is stored for possibly every logged-in user. This session data can easily get bloated and start to occupy a lot of resources on the server.

On the other hand, stateless servers only keep resources (memory) occupied when they are handling a request and they free it as soon as the request is processed.

Since the current trend in scalability is horizontal scaling (typically on the cloud), storing server-side sessions can also make it hard to scale your application because it creates some difficult problems.

For example, say that you have many servers that operate behind a load balancer. What will happen if the client gets to server1 in their first request (server1 now has the client's session) and, at a later time, due to the load on server1, the client gets to server2 which does not know about their previous session data which was stored on server1? Of course, this problem has solutions but it makes scalability more difficult.

#### Faster Data Interchange Format

RESTful APIs typically use JSON as the data interchange format. JSON is much more compact and smaller in size compared to XML. It can also be parsed faster than XML. ([source](http://ijcsn.org/IJCSN-2014/3-4/JSON-vs-XML-A-Comparative-Performance-Analysis-of-Data-Exchange-Formats.pdf))

While they mostly operate with JSON, also keep in mind that REST APIs are still able to respond with different formats by making use of the [Accept header.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)

### 3) Caching is Easier with REST

Caching is a critical factor for the scalability and performance of a modern web application. A well-established cache mechanism (with the best hit-rates possible) can drastically decrease the average response time of your server.

REST aims to make caching easier. Since the server is stateless and each request can be processed individually, GET requests should usually return the same response regardless of previous ones and the session.

This makes the GET requests easily cacheable and browsers usually treat them as such. We can also make our POST requests cacheable using **Cache-Control** and **Expires** headers.

### 4) REST is Flexibile

By flexibility, I mean that it's easy to modify and it's also able to answer many clients who can ask for different data types (XML, JSON, and so on).

The client can specify the type using the **Accept** header (as I mentioned earlier) and the REST API can return different responses depending on that.

Another mechanism that's worth mentioning is [HATEOAS](https://www.wikiwand.com/en/HATEOAS#:~:text=Hypermedia%20as%20the%20Engine%20of,provide%20information%20dynamically%20through%20hypermedia.). If you do not know the term, don't worry, it basically means: Return the related URLs in the server response for a particular resource.

Take a look at this example from Wikipedia. The client requests account information with `account_number` from a bank API and gets this response:

```

{
    "account": {
        "account_number": 12345,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposit": "/accounts/12345/deposit",
            "withdraw": "/accounts/12345/withdraw",
            "transfer": "/accounts/12345/transfer",
            "close": "/accounts/12345/close"
        }
    }
}
```

This server makes use of HATEOAS and returns the links for corresponding actions. This makes it very easy to explore the API and also makes it flexible by allowing the server to change the endpoints.

Think of it like this: if the server weren't applying HATEOAS, the client would need to hardcode the endpoints such as "/accounts/:account-id/deposit". But if the server changes the URL to "/accounts/:account-id/depositMoney", the client code also needs to be changed.

With the help of HATEOAS links, the client can check the link by parsing this JSON and easily make the request. If the endpoint changes, they will be provided with the new one, without the need to change the client code.

For more insights on this topic, you can check out [this](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven) blog post from Roy Fielding himself.

## Conclusion

In this article I have tried to express why I value REST and why I believe you should value it as well. I hope that after reading this, the reasons to apply REST standards are now more clear to you.

This article can serve as a motivation to learn more about the topic. And I have some good news: I am planning to write about REST Best Practices and common mistakes in the near future.

If you are interested you can keep an eye on or subscribe to my [blog](http://erinc.io/). You can also take a look at my previous posts there :)

If you have any questions or want to discuss the topic further, you can feel free to contact me.

Have a Happy New Year and thank you for reading. :)