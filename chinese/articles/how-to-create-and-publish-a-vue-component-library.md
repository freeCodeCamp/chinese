> * 原文地址：[How to Create and Publish a Vue Component Library 如何搭建、发布一个 Vue 组件库](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/)
> * 原文作者：Brian Barrow
> * 译者：
> * 校对者：

![How to Create and Publish a Vue Component Library](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/trnava-university-BEEyeib-am8-unsplash.jpg)

Component libraries are all the rage these days. They make it easy to maintain a consistent look and feel across an application.

I've used a variety of different libraries in my career so far, but using a library is very different than knowing exactly what goes into making one.

I wanted a more in depth understanding of how a component library is built, and I want to show you how you can get a better understanding too.

To create this component library, we're going to use the  `vue-sfc-rollup`  npm package. This package is a very useful utility when starting a component library.

If you have an existing library that you want to use the utility with, refer to the  [documentation][1]  they provide.

This package creates a set of files for the project to start out. As their documentation explains, the files it creates includes the following (SFC stands for Single File Component):

-   a minimal  [rollup][2]  config
-   a corresponding package.json file with build/dev scripts and dependencies
-   a minimal babel.config.js and .browserslistrc file for transpiling
-   a wrapper used by rollup when packaging your SFC
-   a sample SFC to kick-start development
-   a sample usage file which can be used to load/test your component/library during development

The utility supports both Single File Components as well as a library of components. It is important to note this sentence from the documentation:

> In library mode, there is also an 'index' which declares the components exposed as part of your library.

All this means is that there is some extra files generated in the setup process.

# Cool, let's build the library

First you'll want to install the  `vue-sfc-rollup`  globally:

`npm install -g vue-sfc-rollup`

Once that is installed globally, from the command line, go into the directory where you want your library project to be located. Once you are in that folder, run the following command to initialize the project.

`sfc-init`

Choose the following options within the prompts:

-   **Is this a single component or a library?**  Library
-   **What is the npm name of your library?**  (this will need to be unique on npm. I used  _brian-component-lib_)
-   **Will this library be written in JavaScript or TypeScript?** JavaScript (feel free to use TypeScript if you know what you're doing)
-   **Enter a location to save the library files:** This is the folder name you want your library to have. It will default to the npm name you gave it above so you can just hit enter.

After the setup is complete, navigate to your folder and run an npm install.

```
cd path/to/my-component-or-lib


```

Once that is done, you can open the folder up in your editor of choice.

As stated above, there is a sample Vue component built for us. You can find it inside of the  `/src/lib-components`  folder. To see what this component looks like, you can run  `npm run serve`  and navigate to  [http://localhost:8080/][3]

Now let's add our own custom component. Create a new Vue file inside of the  `lib-components`  folder. For this example, I am going to imitate the button used in the freeCodeCamp assignment sections, so I'll name it  `FccButton.vue`

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-22-at-10.08.05-AM.png)

This is the button component we'll build

You can copy and paste this code into your file:

```vue
<template>
  <button class="btn-cta">{{ text }}</button>
</template>
<script>
export default {
  name: "FccButton", // vue component name
  props: {
    text: {
      type: String,
      default: "Enter Button Text Here"
    }
  },
  data() {}
};
</script>
<style>
.btn-cta {
  background-color: #d0d0d5;
  border-width: 3px;
  border-color: #1b1b32;
  border-radius: 0;
  border-style: solid;
  color: #1b1b32;
  display: block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

```

src/lib-components/FccButton.vue

You can see we have the basic template section at the top with the class we want it to have. It also uses the text that the user will pass in.

Inside the script tag we have the Component name and the props that the component will take in. In this case there is only one prop called  `text`  that has a default of "Run the Tests".

We also have some styling to give it the look we want it to have.

To see how the component looks, we'll need to add it to the  `index.js`  file located in the  `lib-components`  folder. Your index.js file should look like this:

```
/* eslint-disable import/prefer-default-export */
export { default as FccButton } from './FccButton';
```

src/lib-components/index.js

You'll also need to import the component into the  `serve.vue`  file inside of the  `dev`  folder to look like this:

```
<script>
import Vue from "vue";
import { FccButton } from "@/entry";
export default Vue.extend({
  name: "ServeDev",
  components: {
    FccButton
  }
});
</script>

```

/dev/serve.vue

You might need to run  `npm run serve`  again to be able to see the button, but it should be visible when you navigate to  [http://localhost:8080/][4]  in your browser.

So, we've built the component we wanted. You will follow this same process for any other component you want to build. Just make sure you are exporting them in the  `/lib-components/index.js`  file in order to make them available from the npm package we are about to publish.

# Publishing to NPM

Now that we're ready to publish the library to NPM, we need to go through the build process for it to be packaged up and ready to go.

Before we run the build command, I recommend changing the version number in the  `package.json`  file to be  `0.0.1`  since this is the very first publish event for our library. We will want more than just one component in the library before we release the official 'first' version. You can read more about semantic versioning  [here][5].

To do this, we run  `npm run build`.

As the documentation states:

> Running the build script results in 3 compiled files in the  `dist`  directory, one for each of the  `main`,  `module`, and  `unpkg`  properties listed in your package.json file. With these files are generated, you're ready to go!

With this command run, we are ready to publish to NPM. Before we do that, make sure you have an account on NPM (which you can do  [here][6]  if you need to).

Next we'll need to add your account to your terminal by running:

`npm adduser`

### Understanding package.json

When we publish to npm, we use the package.json file to control what files are published. If you look at the  `package.json`  file that was created when we initially set up the project you'll see something like this:

```json
"main": "dist/brian-component-lib.ssr.js",
"browser": "dist/brian-component-lib.esm.js",
"module": "dist/brian-component-lib.esm.js",
"unpkg": "dist/brian-component-lib.min.js",
"files": [
    "dist/*",
    "src/*/.vue"
],
```

The section under  `files`  tells npm to publish everything in our  `dist`  folder as well as any  `.vue`  files inside of our  `src`  folder. You can update this as you see fit, but we'll be leaving it as is for this tutorial.

Because we aren't changing anything with the package.json file, we are ready to publish. To do that we just need to run the following command:

`npm publish`

![](https://www.freecodecamp.org/news/content/images/2020/07/hy.gif)

I'm so proud of you!

And that is it! Congratulations! You've now published a Vue component library. You can go to  [npmjs.com][7]  and find it in the registry.

[1]: https://www.npmjs.com/package/vue-sfc-rollup
[2]: https://rollupjs.org/
[3]: http://localhost:8080/
[4]: http://localhost:8080/
[5]: https://docs.npmjs.com/about-semantic-versioning
[6]: https://www.npmjs.com/
[7]: https://www.npmjs.com/
