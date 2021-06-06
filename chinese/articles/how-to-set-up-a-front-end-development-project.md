> -  原文地址：[JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/how-to-set-up-a-front-end-development-project/)
> -  原文作者：[Hunor Márton BorbélyHunor Márton Borbély](https://www.freecodecamp.org/news/author/hunor/)
> -  译者：
> -  校对者：

![JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Set-up-a-frontend-project.001.jpeg)

Let’s say you plan to build a website. Before you start, you want to set up a few tools to make your life easier. But which tools should you have?

The JavaScript ecosystem is changing so fast that it can be overwhelming to pick the best tools to use. To solve this problem, in this article I’m going to walk you through how to set up a front end project from scratch.

We'll cover things like must-have editor extensions, how to add JavaScript libraries to your project, why you'll use Node.js even if you want to do front end development, and how to set up an application bundler that will generate a live preview as you code in your browser.

So let's dive in.

## How to Choose a Code Editor

Let’s start with the foundations. As a web developer, you mostly edit text, so you need a good editor. So which one should you use?

Picking an editor is highly based on personal preference as most editors have very similar features.

If you don’t have a personal preference, I’d highly recommend [VS Code](https://code.visualstudio.com/). Lately, VS Code has become the de facto standard editor for web development.

Here’s a chart from the latest edition of the [State of JS survey](https://stateofjs.com/). In this survey, more than 23,000 developers were asked about their preferences regarding web development. The vast majority picked VS Code.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-26-at-11.23.50.png)

If you haven’t checked out the [State of JS](https://stateofjs.com/) surveys before, I highly recommend that you do. It can give you a great overview of the latest trends with JavaScript. You can learn which tools and libraries people love to use and which ones will they abandon soon.

One of the greatest features of all the mainstream editors is that you can add extensions to them. Let’s walk through two extensions that are must-haves.

## How to Auto-format Your Code in VS Code

Prettier is an extension that makes your code more readable and more consistent.

Let’s say you copy-pasted something from Stack Overflow and it’s hard to read. The tabulation is off, a line is too long, and so on. Then you just save the file, and magically, everything looks as it should be.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001.jpeg)

This is what Prettier does. It formats the code based on best practices. It doesn't just fix tabulation and wrap the lines. It also adds parentheses to improve code readability, makes sure you are consistent with quotation marks, and many more.

To make it work, first, you have to install the Prettier extension. In VS Code go to the Extensions panel, search for Prettier, and then install it.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001-5.jpeg)

Installing the extension doesn’t format your files automatically on save by default. The default behavior is that once you've installed the extension you can right-click within a file then select **Format Document**. Or select part of a file then select **Format Selection**.

The first time you do this you need to select the default formatter. VS Code already has a formatter, it just isn’t as powerful as Prettier. So now that we have two formatters, we have to let VS Code know that in the future, when it comes to formatting, we want to use Prettier.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-29-at-13.37.54-2.png)

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-29-at-13.38.03-2.png)

Set Prettier as the default formatter

If you want to auto-format your files on Save, you need to change a setting.

Go to Settings in your VS Code Preferences and search for the **Format On Save** option. By default, this is false so make sure that you tick the checkbox. After that every time you save a file, formatting should happen automatically.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001-2.jpeg)

Formatting can be controversial, though. In most cases, especially for beginners, I highly recommend the default settings. But if you prefer a different style you can customize things.

You can indicate with comments to [ignore specific lines](https://prettier.io/docs/en/ignore.html) and you can create an rc file where you can list your preferences.

In the root folder of your project, you can create a file called **.prettierrc** and add a few options. A typical option could be if you prefer single quotes instead of double quotes in your files. Or if you don't want to have semi-colons at the end of your lines.

With this configuration, once you save your files you should see a different result.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-11.58.50.png)

There are many more options of course. If you want to dig deeper check out [Prettier's documentation](https://prettier.io/docs/en/configuration.html).

## Why Do You Need Node for a Front End Project?

Before we get to the second must-have extension we need to set up a few other things. First, we need to talk about Node.js. What is Node and why do you need it even if you work as a front end developer?

Node is often associated with back end development, but that is not entirely true.  
If you see a job description where they are looking for a Node developer, then probably they indeed look for a back end developer.

Yet you are going to use node even if you do front end development.

So what is Node, why do people think it’s for back end development and why do you need it even as a front end developer?

Node is a JavaScript runtime. It runs JavaScript files outside of a browser. There are two ways of running JavaScript code. You either have it as part of a website and run the entire website in a browser, or you run only the JavaScript file with Node.

In this example, we have a very simple JavaScript file that prints Hello World to the console.

If we have Node installed we can go to the terminal, navigate to the folder where this file is then run it with Node like this. You can see that the file was executed and the result is in the console.

That’s what Node really is, a tool that runs JavaScript files on their own.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-12.01.08.png)

JavaScript mostly behaves the same way in both cases. But there are also differences in what JavaScript can do in a browser and when it runs with Node.

For instance, when running in the browser JavaScript can access the HTML elements and it can modify them. That’s the main point of having JavaScript in the first place.

In Node, there’s no surrounding HTML file that JavaScript can access. JavaScript runs on its own.

On the other hand in Node, JavaScript can access your file system and read and write your files.

For instance, you can run scripts on your machine that generates a project skeleton for you. You can run checks on your files and automatically correct the mistakes. Or you can run your test files.

In short, Node lets you run some scripts that make your life easier.

![](https://www.freecodecamp.org/news/content/images/2021/06/Set-up-a-frontend-project.001-1.jpeg)

To install node go to [nodejs.org](/news/p/61840bb6-377c-4565-aed6-c0efc682e112/nodejs.org) and install the latest stable version labeled as LTS. If you are unsure if you already have Node or not, you can also go to your terminal and run **node -v** to check it. If you get a version number, you have Node.

So to answer the question, why do people associate Node with backend development? Because if the back end code is written in JavaScript, the servers need a way to run them without a browser. So yes, if you are a back end developer using JavaScript, you are going to use Node. But Node is so much more than that.

## How to Run Your Project

Now that we have Node installed we can install a bundler. What is a bundler? A bundler is a tool that takes all your files and turns them into a neat package that you will be able to run in the browser.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.005.jpeg)

Why wouldn’t you be able to run your files in the browser? If you use plain HTML, CSS, and JavaScript files then you are right. You might not even need a bundler.

But the web development tools have evolved, and the moment you are using anything more advanced your browser won’t understand your files.

Are you using React? React's JSX syntax that looks like HTML is not part of the JavaScript syntax. You need a tool to turn that into plain JavaScript. Otherwise, it won’t run in the browser.

Are you using SCSS or some other CSS dialect? Then again, you have to turn it into plain CSS so the browser can understand it.

Another reason you want to use a bundler is that it can generate a live preview of your website as you are coding. Anytime you save a file you see the result right away in your browser.

So how to pick a bundler? There are several options. Currently, the most used bundler is [**webpack**](https://webpack.js.org/). Webpack is a very powerful tool with plenty of configuration options. But these many options are also its weakness. Setting it up is not an easy thing if you are new to it.

Another great option that recently gained popularity is **[Parcel](https://parceljs.org/)**. Parcel has similar features as webpack. In some ways, it's even better.

The great thing about it is once you installed it, it needs zero configuration. Parcel automatically figures out what are you using and interprets your files.

Are you using React? No problem, Parcel recognizes that and interprets JSX. Are you using SCSS? No problem. Parcel knows what to do.

To install Parcel you need to run a command in your terminal. We are going to use npm, node package manager, to install it. npm is a tool that comes with Node. If you installed Node you have npm as well.

With npm you can install JavaScript libraries on your computer globally or specifically for a project.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-14.32.40.png)

Go to your terminal and run the following command. The -g tag here means global. Once you installed Parcel on your computer you will be able to use it to run any project with it. You don’t have to install Parcel for each project you create, you just do it once.

```shell
npm install -g parcel-bundler
```

> Note: The command above will install Parcel 1. At the time of writing Parcel 2 is in beta and you can also install it with **npm install -g parcel**.

After installing Parcel globally, let's see how can we use it to run a project.

Let's say we have a website with HTML, CSS, and JavaScript files. We can use Parcel to create a live preview for us.

Open the terminal and make sure you are in the folder where your project is. If you are using VS Code you can use the built-in terminal that will automatically start in the right folder.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-18.35.20.png)

Running Parcel with VS Code's built in terminal

Once we make sure we are in the correct folder we can run parcel with the following command. This will give you a URL where you can see the results. And anytime we change a file we can see the result on save live in the browser.

```shell
parcel index.html
```

Once you start this script it will run and generate a live preview of your site until you stop it or close the terminal window. In general, you can keep it running while you are developing your site. Then once you finished you can press **Ctrl+C** to stop it.

If it gets desynchronized or you break it with an error, then you can also restart it by pressing Ctrl+C to stop it, then run the same script again.

Of course, Parcel is much more than this. Now instead of plain CSS, you can also use SCSS for instance. This allows you to use many cool features like nesting declarations, using mixins or calling functions, and more. It's like a CSS with superpowers. Or you can even replace HTML and use Pug instead.

## How to Add Libraries to Your JavaScript Project

Now that we have Node installed, and we had a sneak preview of npm, let's see how can we add libraries to our project.

In the past developers were using a CDN to add libraries. You might import a library by having a script tag in your HTML pointing to a URL.

That is fine and it still works well, but many developers nowadays use npm, or node package manager to add libraries to their projects. So how does it work?

First, you have to initialize the project with the following command in your terminal. Again, you need to run this command in the root directory of your project (hint: use VS Code’s built-in terminal to start in the right folder).

```shell
npm init —yes
```

This command initialized a package.json file in your root with some metadata. It has things like project name, description, version number, and so on. When you add the yes flag, all these values will have a default value.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.36.56.png)

Initializing a project and installing Three.js

Now we can add libraries to our package with the npm install command. In my [previous article](/news/render-3d-objects-in-browser-drawing-a-box-with-threejs/), we used Three.js to render 3D boxes in the browser.

So as an example let's install Three.js. Go to your terminal again, make sure you are in the correct folder, and run the following command:

```shell
npm install three
```

This will install Three.js. How do you know the keyword is three here and not threejs?

When you don’t know the package name you can just google npm and the name of the library you need. Or in case you don't even know the library name you can also just search for npm 3D library and see what Google comes up with.

We can go through these packages one by one and pick one based on their capabilities and other info. These packages mostly come with descriptions and quick examples to give you an idea of what the library can do for you.

Another indicator you might want to look out for is the weekly downloads and the time of the last update to make sure you select an actively maintained library that people still use.

![](https://www.freecodecamp.org/news/content/images/2021/06/Set-up-a-frontend-project.001-2.jpeg)

Once you found the package you are looking for you, you can see the command to install it at the top right corner: **npm i three**. The i here is just a shorthand for install.

When we run this command, three things happen.

First, it will add the latest version of Three.js to your package.json file as a project dependency.

Then it also creates a package-lock file. Both of these things, the dependency section of your package.json file and the package-lock file, are things that you should never ever edit manually. For adding, removing, or updating packages you always use commands like npm install, npm uninstall, and so on.

The third thing that’s going to happen once you run the npm install command is that a node\_modules folder gets created. This is the folder where the actual source code of Three.js will be.

So when you import Three.js in your project, it will look it up in this folder. This folder is again something that you never ever want to change manually.

So now that we installed Three.js we can create a very simple website that displays a 3D box. It’s a simple HTML file and a JavaScript file with the code for the 3D box.

The key here is that in your JavaScript file you import Three.js with the import statement. And that will use the package that you just installed.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.47.00.png)

Then we can run the project with Parcel. Using imports means that we use the module system now. Running a project with the module syntax can be a bit tricky, but as we are using Parcel to run our project, it works seamlessly without any questions. That’s one of the reasons we use Parcel.

If you want to learn more about building 3D games with Three.js check out my [earlier article](/news/three-js-tutorial/) on how to build a minimalistic car in the browser.

## How to Get Coding Tips While You Code

The second must-have extension for VS Code is ESLint. While Prettier was formatting the code, ESLint can give you coding tips.

There are several patterns in JavaScript that can cause a bug or can be misleading when you try to understand the code.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-06-01-at-01.49.24.png)

A typo can lead to annoying bugs

In this example, we declare a variable, but then we have a typo and we try to use another variable that does not exist.

ESLint will highlight this for you. It will give you a warning both at the variable declaration saying that you created a variable that you don’t use, and at the usage where it will say that you try to use a variable that is not declared.

After these warnings, it’s easy to spot that you made a typo. ESLint is of course much more complex than just catching this simple error. There are also less obvious ones where you might not understand first why does it complain.

At that point, you can also click the link to see a more detailed explanation of why this pattern is considered harmful and what can you do to avoid it.

So how can you use ESLint in your project? Setting it up requires a few more steps than installing an extension. Luckily most of these steps you only have to do once.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.002-1.jpeg)

First, as you did with Prettier, you have to install the ESLint extension. Go to Extensions, search for ESLint and install it.

Then you also need to generate an ESLint configuration. Before you do that though, first you need to make sure that your project is initialized with npm init.

If you don’t already have a package.json file then first you have to run npm init —yes to initialize your project.

Then you can generate an ESLint config with the following command.

```shell
npx eslint —init
```

npx is another tool that comes with Node. It can run scripts that are not even on your computer.

In this case, we run the ESlint script but we never actually installed ESlint. We installed the ESLint extension, but that’s not the script we are executing here.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.07.47.png)

Initializing ESLint config from the terminal, adding an .eslintignore file

This script will ask you a few questions. Most of these are obvious except the first one.

-   **How would you like to use ESLint?**

Do you want ESLint to only check for syntax issues, or you want it to find possible problems as well, or you even want it to check for stylistic issues?

If you use Prettier as well, you need to select the second option. Because if both Prettier and ESLint try to recommend a styling for you, they likely end up in a conflict.

So if you use Prettier you don’t want ESLint to check for style, only for syntax and possible problems.  

-   **What type of modules does your project use?**

In a frontend project you probably use imports and exports so you select the first option.  

-   **Which framework does your project use?**

If you use React or Vue.js the select the appropriate option, otherwise select none.  

-   **Does your project use Typescript?**

If you use Typescript select yes, otherwise just press enter to continue.  

-   **Where does your project run?**

Is your project supposed to run in a browser or with Node? Here we set up a front end project so we select Browser.  

-   **What format do you want your config file to be in?**

This doesn’t really matter, but if you later want to customize the config you probably want to pick either JavaScript or JSON.

The script finally asks if it should install ESlint as a development dependency. Here you should select yes. This will install ESlint so it will be available in your node\_modules folder.

After this step, you will have your config and you can find ESlint in your package.json file as a development dependency.

Development dependency means ESlint is not part of your website’s source code, but the tooling requires it. In this case, the ESLint extension requires that the ESlint package is installed to your project.

Now that we have the ESLint extension installed, have an ESLint configuration, and we have the ESlint package installed, we also need to grant the extension access to this package.

This is a security requirement you only have to do once. At the bottom of the editor, once you've installed the extension you’ll find the ESLint button with a crossed circle in front of it. Click that and select **Allow Everywhere**. This allows the ESLint extension to work properly for any future projects as well.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.17.14.png)

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.16.59.png)

After all these steps, ESLint finally should work. If we go to a JavaScript file and try to use an undeclared variable, then on save it will highlight the issue.

ESLint might also give you errors at places where things are actually all right. Ironically if you selected that the ESlint config should be in a JavaScript file, then it will give you an error in the config itself.

This is because we set that the environment for our project is the browser and this config relies on a global variable that does not exist in browsers.

This file is not exactly part of our website, though. It’s a configuration file that won’t be part of the final source code and its natural environment is not the browser but rather Node.js. And in Node this global variable does exist. So this file is actually correct and there shouldn’t be an error here.

One way to fix this is to set a list of files that ESLint should ignore. In the root folder of the application, you can create a file called **.eslintignore** and add **.eslintrc.js** to it. Once we save this ESLint won’t run any checks on the config file anymore.

ESLint is also highly customizable. For more details check out the [documentation of ESLint](https://eslint.org/docs/user-guide/configuring/).

## How to Set Up a React or Vue Project

Do you plan to build a website with React or Vue.js? You essentially need to do the same steps.

Initialize a project with npm init, install the dependencies, set up ESLint then run your project with Parcel.

Check out my video on YouTube where we go through the steps we did before and a quick example project with React and Vue.js.

## Next steps

Those are the basic tools you can use when working on a front end JS project. Add libraries with npm, keep your code tidy with Prettier, avoid unnecessary headaches with ESLint, and run your project with Parcel.

Now that we've set up a front end project you are ready to start building your website.

What happens once you finish it? You need to bundle it to a final production build that you can upload to the web. If you use parcel you can create a final bundle with the following command:

```shell
parcel build index.html —public-url '.'
```

This will create a bundle in the dist folder that you can run in the browser. You can simple run the new index.html file from the dist folder in the browser to see your final result.

And that's it! Thank you for reading :)

### **Subscribe for more tutorials on Web Development:**

[

Hunor Márton Borbély

Game development with JavaScript, creative coding tutorials, HTML canvas, SVG, Three.js, and some React and Vue https://twitter.com/HunorBorbelyhttps://codepen.io/HunorMarton…

![](https://www.youtube.com/s/desktop/a2ac178f/img/favicon_144x144.png)YouTube

![](https://yt3.ggpht.com/ytc/AAUvwngQ7khZMu7fnitunQnU-P6UB7VXPRwz_9jZm-WwxA=s900-c-k-c0x00ffffff-no-rj)

](https://www.youtube.com/channel/UCxhgW0Q5XLvIoXHAfQXg9oQ)