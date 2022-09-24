> -  原文地址：[How to Deploy Your Node.js Application for Free with Render](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
> -  原文作者：[Yogesh Chavan](https://www.freecodecamp.org/news/author/yogesh/)
> -  译者：
> -  校对者：

![How to Deploy Your Node.js Application for Free with Render](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/pexels-pixabay-163235--1-.jpg)

For years, Heroku has been an excellent platform to host your Full Stack applications. freeCodeCamp made heavy use of Heroku early on – as have countless open source projects.

But that may change, as Heroku is bringing its generous free tier to an end.

You may have received email from Heroku informing you that, starting November 28, 2022, you will not be able to host any app for free on the platform, and that you will now need to purchase paid plan.

![no_free_heroku](https://www.freecodecamp.org/news/content/images/2022/08/no_free_heroku.png)

If you want to host static websites or webapps for free, you might use [Netlify](https://www.netlify.com/) as I explained in [this article](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/) but for backend apps. This said, there are not many free platforms that provide the same feel and ease of deployment as Heroku.

So in this article, we'll learn how to deploy your Node.js application with Express server on [Render](https://render.com/). It's a free alternative to Heroku with a similar easy deployment process.

So let's get started.

## What to Do Before Deploying Your Application

As you might know from your experience using Heroku, every application deployed runs on a specific port which Heroku assigns randomly. You can access it using the `process.env.PORT` variable.

The same is true with the Render platform.

So you need to make sure that, instead of providing a hardcoded port value for starting your Express server, you use the `process.env.PORT` variable like this:

```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
```

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## **How to Deploy an App to Render from a GitHub Repository**

Now, once you've made the port-related change, it's time to deploy your application.

I already have [this GitHub repository](https://github.com/myogeshchavan97/github-repos-nodejs-api) that I will be deploying to Render. This GitHub repository code just displays the list of top repositories and the numbers of stars for each repository in JSON format.

So let's get started.

[Render](https://render.com/) provides various ways to sign up as shown below:

![sign_up_render](https://www.freecodecamp.org/news/content/images/2022/08/sign_up_render.png)

Once signed up and logged in to your account, you will see a dashboard like this:

![dashboard](https://www.freecodecamp.org/news/content/images/2022/08/dashboard.png)

To deploy a Node.js application, click on the `New Web Service` button under the `Web Services` option.

You can also click on the `New +` button displayed in the header just before your profile picture and select `Web Service` option.

Once clicked, you will see the following screen:

![new_web_service](https://www.freecodecamp.org/news/content/images/2022/08/new_web_service.png)

Click on the `Connect account` button displayed on the right side under the GitHub menu. Once clicked, you will see the following screen:

![install_render](https://www.freecodecamp.org/news/content/images/2022/08/install_render.png)

Click on the `Configure` link and you can give permission to select all your GitHub repositories or only selected repositories.

I like to give access to only selected repositories which I currently need to deploy. So I selected the `Only select repositories` option.

Next, click on the `Select repositories` button displayed below the option and select the GitHub repository which you want to deploy.

![connect_github](https://www.freecodecamp.org/news/content/images/2022/08/connect_github.png)

Once selected, you will see the following screen displaying the selected repository.

![selected_repository](https://www.freecodecamp.org/news/content/images/2022/08/selected_repository.png)

Click on the green `Install` button to give access to the selected repository to the Render website.

Once clicked, you will be redirected to your dashboard where you will see your selected repository as shown below:

![connected_repository](https://www.freecodecamp.org/news/content/images/2022/08/connected_repository.png)

Now, click on the `Connect` button and you will see the following screen:

![deploy_details](https://www.freecodecamp.org/news/content/images/2022/08/deploy_details.png)

Here, for the `Name` field, enter the a short and simple name to identify your website.

**Note:** keep the `Name` value simple because it will become your application URL once the application is deployed. So if I enter `github-repos` as the value for the `Name`, my application URL will become [`https://github-repos.onrender.com`](https://github-repos.onrender.com).

So make sure to enter a short and meaningful value for `Name`.

Enter the details as shown below:

![details](https://www.freecodecamp.org/news/content/images/2022/08/details.png)

For `Build Command` enter `yarn` as the value which is equivalent to the `yarn install` command. Yarn is a package manager similar to npm but faster than npm.

And for the `Start Command` enter `node index.js` as the value, if your entry file is `index.js`.

After entering all the details, scroll down and you will see the `Plans` section where your free plan will be automatically selected. If not selected, you need to select it because we're deploying the application for free.

If you scroll down a bit more, you will see an `Advanced` button.

![advanced_options](https://www.freecodecamp.org/news/content/images/2022/08/advanced_options.png)

If your application is using any environment variables, you can enter them in the `Advanced` settings as shown below. You can also add your `.env` files so you don't need to enter them manually one by one.

![env_vars-1](https://www.freecodecamp.org/news/content/images/2022/08/env_vars-1.png)

Note that, the `Auto-Deploy` field has default value of `Yes` – so once you push your code changes to GitHub repository, they will be automatically deployed to Render.

If you don't want to auto-deploy your changes on every code change pushed to your GitHub repository, you can select the `No` value from the `Auto-Deploy` dropdown.

Now, you can click on the the `Create Web Service` button to start the deployment process.

![10-1](https://www.freecodecamp.org/news/content/images/2022/08/10-1.png)

Wait for a while until the deployment is going on. Sometimes, you might need to refresh the page if you keep seeing the "in progress" going on for long time.

Once the deployment is completed, you will see your application is deployed `Live` as shown below:

![11](https://www.freecodecamp.org/news/content/images/2022/08/11.png)

You can click on the deployed application URL which is displayed at the top as shown in the above screenshot. In my case, the application URL is [https://github-repos.onrender.com/](https://github-repos.onrender.com/).

When you're deploying the application for the first time, you might see a `Page is not working` error when you try to access your deployed site.

Wait for a little while and keep refreshing the page using `Ctrl + R` or `Cmd + R(Mac)`. Sometimes the Render platform takes some time to start the application as we're using a free service with limited hardware.

Once deployed, you will see your deployed application as shown below.

![deployed_live](https://www.freecodecamp.org/news/content/images/2022/08/deployed_live.png)

**Tip:** To see the JSON as it's formatted above, you can install the [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) Chrome Extension.

As you might know, when using Heroku with a free account, your application goes to sleep mode after every 30 minutes if there are no requests coming in for the application. This means it takes some time to load the application when the next request comes.  
  
Similarly, in case of Render, your application will go in sleep mode after 15 minutes if there are no requests for the application.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### **Thanks for reading!**

You can find the complete GitHub source code for the deployed application in [this repository](https://github.com/myogeshchavan97/github-repos-nodejs-api).

****You can see the live demo of the deployed application [here](https://github-repos.onrender.com/).****

If you want to learn Redux in detail from scratch and build 3 apps along with the [complete food ordering app](https://www.youtube.com/watch?v=2zaPDfCKAvM), check out my [Mastering Redux](https://master-redux.yogeshchavan.dev/) course.

In the course, you will learn:

-   Basic and advanced Redux
-   How to manage the complex state of array and objects
-   How to use multiple reducers to manage complex redux state
-   How to debug a Redux application
-   How to use Redux in React using the react-redux library to make your app reactive.
-   How to use the redux-thunk library to handle async API calls
-   Build 3 different apps using Redux

and much more.

Finally, we'll build a complete [food ordering app](https://www.youtube.com/watch?v=2zaPDfCKAvM) from scratch with stripe integration for accepting payments and deploy it to production.

****Want to stay up to date with regular content regarding JavaScript, React, Node.js? [Follow me on LinkedIn](https://www.linkedin.com/in/yogesh-chavan97/).****