> -  原文地址：[How to Build a URL Shortener in Deno](https://www.freecodecamp.org/news/build-a-url-shortener-in-deno/)
> -  原文作者：[Akash JoshiAkash Joshi](https://www.freecodecamp.org/news/author/akash/)
> -  译者：
> -  校对者：

![How to Build a URL Shortener in Deno](https://cdn-media-2.freecodecamp.org/w1280/5f9c9848740569d1a4ca192c.jpg)

In this article, we’re going to learn the basics of Deno, like how to run a program and embrace security.

Deno is the new JavaScript and TypeScript runtime written in Rust. It offers tight security, TypeScript support out-of-the-box, a single executable to run it, and a set of reviewed and audited standard modules.

Like [npm](https://npmjs.com) in Node.js, packages in Deno are managed in a centralized package repository called [X](https://deno.land/x/). We'll be using one of these libraries, Oak, to build a REST API-based server in Deno.

After learning the basics by using the Express-like router package [Oak](https://deno.land/x/oak@v6.3.0), we will jump into the deep end of Deno and build a complete application.

Here's what we will set up in this application:

1.  Mapping URL shortcodes to endpoints using a JSON-based config file.
2.  Have expiration dates attached to each URL so that these redirects are only valid for a limited period of time.

## 0\. Prerequisites

1.  Install Deno from [this link](https://deno.land/#installation).
2.  Make sure you know the basics of JavaScript.

Although not really required to follow along with this article, you can check out the YouTube video below to get an intro to Deno in video-format.

A video tutorial for setting up Deno

So, let’s get started. ?

## 1\. How to Build the Router

To write the server-side code for our application, we'll use the Oak module. It has an Express-like syntax for defining API routes.

If we look at its [documentation here](https://deno.land/x/oak), the "[Basic Usage](https://deno.land/x/oak#basic-usage)" section pretty much covers all the use cases we will need in our router. So, we will expand on that code to build our application.

To test this code, you can create a file called `index.ts` in a folder, and copy the "Basic Usage" code into it.

To understand how to run TypeScript or JavaScript files in Deno, you first need to understand how Deno runs files.

You run a file by running the command `deno run file_name.ts` or `file_name.js`, followed by a set of flags providing certain system permissions to your application.

To test this, run the file we just created, containing the "Basic Usage" code, by using the command `deno run index.ts`.

You will see that Deno complains that you haven't given network access to your application. So, to do that, you add the `-allow-net` to the run command. The command will look like `deno run index.ts -allow-net`.

The router written down in the "Basic Usage” code looks like this:

```jsx
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });
```

To break down the above code, first a `router` object has been defined. Then the `get` function is called on the router, to define the various endpoints for our application. The respective logic is defined inside the callback functions.

For example, for the "/" endpoint, a callback function which returns "Hello World" in the response body has been defined. We can keep this endpoint unchanged to test whether our application server is running by receiving this response.

We don’t need the “/book” URL which has been defined, so its definition can be safely removed. At this point, your router should have the below structure:

```
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book/:id", (context) => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });
```

In the next section, we'll be focussing on starting to build the actual application.

## 2\. How to Build the URL Shortener

Now let's get started with building the actual URL shortener.

It should redirect to a destination (`dest`), based on a `shortcode`. The redirect should also only be valid up to an `expiryDate`, which can be provided in the Year-Month-Day format.

Based on these assumptions, let's create the config file, named `urls.json`. The format of the file will be:

```jsx
{
  "shortcode": {
    "dest": "destination_url_string",
    "expiryDate": "YYYY-MM-DD"
  }
}
```

You can [check out the JSON file here](https://github.com/akash-joshi/deno-url-shortener/blob/master/urls.json).

To read this JSON file in your code, add the following to the top of your `index.ts`:

```jsx
import { Application, Router } from "<https://deno.land/x/oak/mod.ts>";

const urls = JSON.parse(Deno.readTextFileSync("./urls.json"));

console.log(urls);
```

Now, to run your `index.ts`, you will need another flag `—allow-read`, otherwise Deno will throw a "read permissions not provided" error. Your final command becomes `deno run —allow-net —allow-read index.ts`.

After running this command, you'll see the JSON file being printed in your terminal window. This means that your program is able to read the JSON file correctly.

If we go back to the "Basic Usage" example that we saw above, the route “/book/:id” is exactly what we need.

Instead of "/book/:id", we can use "/shrt/:urlid", where we will get the individual URLs based on the URL ID (`:urlid`).

Replace the existing code present inside the "/book/:id" route with this:

```jsx
.get("/shrt/:urlid", (context) => {
    if (context.params && context.params.urlid && urls[context.params.urlid]) {
      context.response.redirect(urls[context.params.urlid].dest);
    } else {
      context.response.body = "404";
    }
  });
```

The `if` condition in the route does the following:

1.  Checks if parameters are attached to the route
2.  Checks if the parameter `urlid` is in the parameter list.
3.  Checks whether the `urlid` matches with any URL in our JSON.

If it matches with all these, the user is redirected to the correct URL. If it doesn't, a 404 response on the body is returned.

To test this, copy this route into `index.ts`. The router will now look like this:

```jsx
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
	.get("/shrt/:urlid", (context) => {
	    if (context.params && context.params.urlid && urls[context.params.urlid]) {
	      context.response.redirect(urls[context.params.urlid].dest);
	    } else {
	      context.response.body = "404";
	    }
	  });
```

And run the file using `deno run —allow-net —allow-read index.ts`.

If you copied the JSON file from the example, and if you go to `http://localhost:8000/shrt/g`, you'll be redirected to Google's homepage.

On the other hand, if you use a random shortcode that doesn't work in our URL's config, it brings you to the 404 page.

However, you'll see that our shortener doesn't react live to changes in the JSON file. To test this, try adding a new redirect to `urls.json` in the same format as:

```
"shortcode": {
    "dest": "destination_url_string",
    "expiryDate": "YYYY-MM-DD"
  }
```

The reason for this is that `urls.json` is only read once at that start. So, now we will add live-reloading to our server.

## 3\. How to Add Live-Reloading

To make the `urls` object react live to changes in the JSON file, we simply move the read statement inside our route. This should look like the following:

```jsx
.get("/shrt/:urlid", (context) => {
  const urls = JSON.parse(Deno.readTextFileSync("./urls.json"));

  if (context.params && context.params.urlid && urls[context.params.urlid]) {
    context.response.redirect(urls[context.params.urlid].dest);
  } else {
    context.response.body = "404";
  }
});
```

Note how we have moved the URLs object inside our router. Now in this case, the config file is read every time that route is called, so it can react live to any changes made in the `urls.json` file. So even if we add or remove other redirects on the fly, our code reacts to it.

## 4\. How to Add an Expiration to the URLs

To make our URLs expire at a certain date, we will be using the popular Moment.js library, which makes it easy to work with dates.

Luckily, it has also been [ported for Deno](https://deno.land/x/moment). To understand how it works, check out its documentation in the previous link.

To use it in our code, import it directly through its URL like this:

```jsx
import { Application, Router } from "<https://deno.land/x/oak/mod.ts>";
import { moment } from "<https://deno.land/x/moment/moment.ts>";

const router = new Router();
```

To check the date for when the URL will expire, we check the `expiryDate` key on our `urls` object. This will make the code look like this:

```jsx
if (context.params && context.params.urlid && urls[context.params.urlid]) {
  if (
    urls[context.params.urlid].expiryDate > moment().format("YYYY-MM-DD")
  ) {
    context.response.redirect(urls[context.params.urlid].dest);
  } else {
    context.response.body = "Link Expired";
  }
} else {
  context.response.body = "404";
}
```

In `moment().format("YYYY-MM-DD")`, we get the current date and time using `moment()`. We can convert it to the "YYYY-MM-DD" (Year-Month-Date) format using the function `.format("YYYY-MM-DD")`.

By comparing it against our `expiryDate` key, we can check whether the URL has expired or not.

That's it! You have built a fully functional URL shortener in Deno. You can find the final code [in the GitHub repo here](https://github.com/akash-joshi/deno-url-shortener).

Test it out by setting `expiryDate` as the current date and by making other changes to `urls.json` and our code.

### My Thoughts on Deno

To wrap the article up, I'll put my forward final thoughts on deno.land.

While it's refreshing to see a server-side language which takes security into consideration and supports TypeScript out-of-the-box, Deno still has a long way to go before being ready for use in production systems.

For example, the TypeScript compilation is still very slow, with compilation times ~20 seconds, even for simple programs like the one we just developed.

On the error-reporting front, it still is pretty bad with describing the errors. For example, while embedding the code to read `urls.json` in the function itself, Deno isn't able to report that the `-allow-read` flag hasn't been set. Instead, it just throws an internal server error without a proper error printed on the terminal.

### What Next?

You can improve your Deno or Typescript skills by building more complex applications like a [Chatting Application](https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/) or a [Wikipedia Clone](https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/).

You can also go through the Deno documentation at [deno.land](http://deno.land/) to get more familiar with the basics.

Thank you for reading this far and happy programming ? !!

### Important Links

Deno - https://deno.land  
Deno X (package repository) - https://deno.land/x/  
Oak (REST framework) - [https://deno.land/x/oak](https://deno.land/x/oak)  
Oak Basic Usage - [https://deno.land/x/oak@v6.3.1#basic-usage](https://deno.land/x/oak@v6.3.1#basic-usage)  
Final GitHub Repo - [https://github.com/akash-joshi/deno-url-shortener](https://github.com/akash-joshi/deno-url-shortener)