> -  原文地址：[How to Build React Applications with Deno Using the AlephJS Library](https://www.freecodecamp.org/news/build-react-app-using-deno-and-alephjs/)
> -  原文作者：[Akash JoshiAkash Joshi](https://www.freecodecamp.org/news/author/akash/)
> -  译者：
> -  校对者：

![How to Build React Applications with Deno Using the AlephJS Library](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Kapture-2021-03-11-at-11.33.15-4.gif)

If you're a front end developer who's just getting started with Deno, you might be wondering – can you build something as complex as a NextJS or create-react-app (CRA) application using Deno?

I was recently thinking the same thing. I wanted to try Deno because of its shareability that results from being able to run an application directly from a URL. The Deno compiler supports running JavaScript and TypeScript files from a URL and it also supports imports from a URL, resulting in extreme portability.

I looked to see if there were any existing solutions online, but I only found [this article](https://dev.to/adriantwarog/react-deno-server-side-rendering-with-deno-ssr-4438), which built an SSR'd React application using some complex techniques. It wasn't simple, like getting started with NextJS or CRA.

So, through my searches online, I ended up at [AlephJS](https://alephjs.org/), which has one of the coolest landing page animations ever.

![](https://www.freecodecamp.org/news/content/images/2021/03/Kapture-2021-03-11-at-11.33.15-3.gif)

Aleph is a Zero-Config, Typescript-driven React framework, just like NextJS. The only drawback is that that Aleph is still very much in alpha.

So to get a true Next-like React experience inside Deno, let's get started with AlephJS. It has many of the same conventions as Next, such as:

-   A `/pages` directory for creating URL routes
-   Direct `.js, .jsx, .ts, .tsx` support in pages
-   A `/public` directory for serving static assets like video, audio, or image files
-   A `/pages/api` folder for serving JavaScript or TypeScript files as serverless APIs.

## How to Get Started with AlephJS

To be able to use AlephJS, you need Deno installed on your machine. You can see how to install and get started with Deno in my [previous article here](/news/build-a-url-shortener-in-deno/).

To get started with Aleph, you need to first install the Aleph CLI by running this command:

```bash
deno install -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts
```

After installation, you can run `aleph -h` to check whether it got installed correctly.

Because of the portability of Deno, you can replace `aleph` with `deno run -A https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts start $app_URI` for any command and it will be able to run the Aleph program without having the CLI locally installed.

To create a starter app, run:

```bash
aleph init hello
cd hello
```

And start the app in development mode using `aleph dev` to start a server at port `8080`.

To start the app in production mode, you have to first `build` the app and then run the built app. You can do this through these commands:

```bash
aleph build # build your app
aleph start # runs built app
```

After you initialise your Aleph app, you will find that the root component is defined at `pages/index.tsx`. It's a normal React component. You can experiment with it to see how Aleph works.

You can add more routes to your application by creating more `.jsx` or `.tsx` files inside the `pages` folder. You can read more on routing in Aleph [here](https://alephjs.org/docs/basic-features/routing).

## How to Import Libraries in Deno

I've written about Deno previously on [freeCodeCamp](/news/build-a-url-shortener-in-deno/) where I demoed some Deno basics, including URL imports. Since Aleph is a Deno framework, all imports happen in the "Deno way".

There are two kinds of libraries which you can import in a Deno application.

1.  Importing Deno-Native Libraries: These libraries were either built for Deno, or ported over from npm to support Deno usage.
2.  Importing from NPM: if you've worked with JS recently you probably know about npm. If you don't, npm (the company behind node package manager) is the standard repository for all JavaScript libraries. Luckily, Deno has limited support for npm libraries. Using tools like [esm.sh](http://esm.sh) or skypack.dev, users can import npm libraries into Deno.

### 1\. How to Import Deno-Native Libraries

You can import Deno-Native libraries in your application by importing their URLs directly. You can find a list of Deno libraries here: [deno.land/x](http://deno.land/x)

To test this out, let’s import this [standard Deno date formatting library](https://deno.land/std@0.88.0/datetime), and call a date format function in a React page. Create a file `date-import.tsx` in the `pages` folder of your app. Inside the file, write the following code:

```jsx
// react is a compulsoy import in Aleph
import React from "react";

// import the format function from its URL
import { format } from "https://deno.land/std@0.88.0/datetime/mod.ts";

// capitalize the function name so it's recognized as a React component
export default function DateImport() {
	// Here, directly calling the format function works as expected.
  return <section>Hello all! Today is: {format(new Date(), "dd-MM-yyyy")}</section>;
}
```

To see the output of this file, go to [localhost:8080/date-import](http://localhost:8080/date-import), or its equivalent for your server. You should see the page displaying today's date.

### 2\. How to Import Libraries from NPM

To import an npm library, you can also import directly from a URL – but in this case there's a slight change. Since we talked about [esm.sh](http://esm.sh) and skypack.dev, let's try to use them in action. In this case, let's try to use the [dayjs](https://www.npmjs.com/package/dayjs) library in our project.

> Note: Not all npm libraries work correctly in Deno because they may be relying on Node-specific functions.

To import a library in [esm.sh](http://esm.sh), you post-pend the library's package name to the URL. In this case to import dayjs, we would be importing [`https://esm.sh/dayjs`](https://esm.sh/dayjs). This also works for any CSS files you might want to import from a library.

Now, let's create a file in `pages` called `dayjs-import.tsx`. So, the code in our page will look like this:

```jsx
// react is a compulsoy import in Aleph
import React from "react";

// import the dayjs npm library using esm.sh
import dayjs from "https://esm.sh/dayjs";

// capitalize the function name so it's recognized as a React component
export default function DateImport() {
	// call the dayjs function directly to display today's date
  return <section>Hello all! Today is: {dayjs().format("DD-MM-YYYY")}</section>;
}
```

To see the output of this file, go to [localhost:8080/dayjs-import](http://localhost:8080/dayjs-import), or its equivalent for your server. You should see the page displaying the day's date.

There's one important thing before we go ahead, though – how do you handle **React imports** like importing `useState`, `useEffect`, and so on? Luckily, the devs at Aleph have already written an example for us.

Go into `./lib/useCounter.ts` and you'll find the code for the custom hook that's used for the counter in the home page.

Since I want to focus on Aleph and React themselves in this article, to check out all the different ways you can import a CSS file in Aleph, visit [this page from the official documentation](https://alephjs.org/docs/basic-features/built-in-css-support).

## How to Build a Sample App with Deno and AlephJS

Now, let's get into the nitty gritty and try to build a React app in Aleph ourselves. We're going to be building "Is It Down?", a sample app I had made using an existing website-checking API. This app will allow us to check whether a website is currently up or down.

Here's the CodeSandbox link: [https://codesandbox.io/s/awesome-firefly-5dofg](https://codesandbox.io/s/awesome-firefly-5dofg)

Building this application will show you how to use the State hook, the Effect hook, and how to make API calls in Aleph.

Create a new file called `web-checker.tsx` in your `pages` folder. Let's start by just adding the UI elements first. We'll display an `h1` element with the title, an `h2` element linking to the API, and a form element to take user input. This is a non-interactive page that just displays the elements.

```jsx
import React from "react";

export default function App() {
	return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Is it Down?</h1>
      <h2>
        Go{" "}
        <a
          href="https://rapidapi.com/jakash1997/api/website-data-gathering-and-update-tracking"
          target="_blank"
        >
          here
        </a>{" "}
        to get an API key
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

Next, to capture the state of the input field, and also to capture the response of the API call we will have to make, let's introduce state.

```jsx
// import useState from react
import React, { useState } from "react";

export default function App() {
  // define both state variables
  const [siteURL, setUrl] = useState("");
  const [response, setResponse] = useState(undefined);
...
```

Now, we'll use this state inside our input element so it can react to it.

```jsx
...
<input
  value={siteURL}
  onChange={(e) => setUrl(e.target.value)}
  type="text"
/>
...
```

We'll also add some code to display a response when it's returned from the API response:

```jsx
...
	</form>
	
	<br />
	
	<code>{JSON.stringify(response, null, 2)}</code>
</div>
...
```

Now, to get started with integrating the API, let's try to form the request correctly. In this case, the API is a simple `GET` call, so we only need to pass a param and an API key.

Firstly, go here, and generate an API key: [https://rapidapi.com/jakash1997/api/website-data-gathering-and-update-tracking](https://rapidapi.com/jakash1997/api/website-data-gathering-and-update-tracking). Find the API key like you see in the screenshot below, and keep it somewhere safe:

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot_2021-03-08_at_3.47.01_PM.png)

Next, let's create a separate function `submitData` which will generate the required request data. We will be using the `axios` library to make our `GET` call, so we will be forming its options object.

```jsx
...
const [response, setResponse] = useState(undefined);

const submitData = (siteURL) => {
  setResponse("Loading...");
  const options = {
		// passing siteURL here through object shorthand
    params: { siteURL },

		// passing the required headers here
    headers: {
      "x-rapidapi-key": "YOUR_API_KEY",
      "x-rapidapi-host":
        "website-data-gathering-and-update-tracking.p.rapidapi.com",
    },
  };

	// print options here
	console.log("options", options);
};

return (
...
```

And we add this to the `onSubmit` function in our form.

```jsx
onSubmit={(e) => {
  e.preventDefault();
  submitData(siteURL);
}}
```

Now, whenever you press the Submit button, you will see the `options` we generated in the console. If you see the `options` object in the console, you're doing well so far!

Next we just have the simple step of importing the `axios` library using [`http://esm.sh`](http://esm.sh) and using it to make an API call.

Import `axios` after the `react` import like this:

```jsx
import React, { useState } from "react";
import axios from "https://esm.sh/axios";

...
```

And use it in the `submitData` function as:

```jsx
...
	axios
    .get(
      "https://website-data-gathering-and-update-tracking.p.rapidapi.com/sitecheck",
      options
    )
    .then(function (response) {
      setResponse(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
...
```

And that's it! Try submitting the form again, and this time you'll see the result both on screen and in the console.

## Conclusion

Now you know the basics of Aleph. It's a really interesting tool which allows you to mix your existing React knowledge with the forward-looking nature and security of [deno.land](http://deno.land).

If you liked this tutorial, you can follow me on Twitter [@thewritingdev](http://twitter.com/thewritingdev).