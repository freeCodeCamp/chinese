> -  原文地址：[如何创建和发布一个 Vue 组件库 – 2023 更新](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library-update/)
> -  原文作者：[Brian Barrow](https://www.freecodecamp.org/news/author/brian/)
> -  译者：xgqfrms
> -  校对者：

![如何创建和发布一个 Vue 组件库 – 2023 更新](https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-pixabay-159711.jpg)

Back in 2020, I [wrote a post](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/) about building a Vue Component library. Since then the package I used has been deprecated, and the recommended way to build a library/package is to use Vite.

## Getting Started

I started off the project by running `npm create vite@latest` and naming my project `brian-component-lib` to stay consistent with my previous post. I also chose to use TypeScript and Vue when those options came up.

## The Component

The component I built is a clone of the buttons used on freeCodeCamp.org

![image-160](https://www.freecodecamp.org/news/content/images/2023/05/image-160.png)

Button component we are building

Here is the code for that component. Note that it is using TypeScript and the `script setup` format available in Vue 3.

```js
<script setup lang="ts">

defineProps<{ text: string }>()

</script>

<template>
  <button class="btn-cta">{{ text }}</button>
</template>

<style scoped>
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

.btn-cta:active:hover,
.btn-cta:focus,
.btn-cta:hover {
  background-color: #1b1b32;
  border-width: 3px;
  border-color: #000;
  background-image: none;
  color: #f5f6f7;
}
</style>
```

src/components/FccButton.vue

Then we need to expose this component in the library. We do that by exporting it from an `index.ts` file.

```js
import FccButton from "./components/FccButton.vue";

export { FccButton };
```

src/index.ts

## Config

With the component code ready to go, we need to make sure Vite and the `package.json` file are configured properly.

Vite has a lot of options when building code. We are interested in the ["Library Mode"](https://vitejs.dev/guide/build.html#library-mode).

```js
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "BrianComponentLibrary",
      // the name of the output files when the build is run
      fileName: "brian-component-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
```

vite.config.ts

Here is the `package.json` file. We need to make sure we have the properties necessary for pointing to our built files. For more information on what each property does, you can hover over them in VS Code.

```json
{
  "name": "brian-component-lib",
  "version": "1.0.0",
  "type": "module",
  "files": ["dist"],
  "main": "./dist/brian-component-lib.umd.cjs",
  "module": "./dist/brian-component-lib.js",
  "exports": {
    ".": {
      "import": "./dist/brian-component-lib.js",
      "require": "./dist/brian-component-lib.umd.cjs"
    },
    "./style.css": "./dist/style.css"
  },
  "types": "./dist/index.d.ts",
  "scripts": {
    "dev": "vite",
    "build": "vite build && vue-tsc --emitDeclarationOnly",
    "types": "vue-tsc ",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.47"
  },
  "devDependencies": {
    "@types/node": "^20.2.5",
    "@vitejs/plugin-vue": "^4.2.3",
    "typescript": "^5.0.2",
    "vite": "^4.3.9",
    "vue-tsc": "^1.4.2"
  }
}
```

package.json

In order for the `vue-tsc --emitDeclarationOnly` to work when building, we need to add the following properties to the `compilerOptions` section of the tsconfig.json file:

```
"outDir": "dist",
"declaration": true,
```

We will also need to remove the `noEmit: true` property.  This will make it so our types are available in the package, so a project using TypeScript with Vue doesn't yell at us for not having declared types.

I also added this line to make sure my `App.vue` and `main.ts` file aren't included in the component library built files.

`"exclude": ["src/App.vue", "src/main.ts"],`

## Test the Library

We can now run `npm run build` and then test out our library. To do this, open up a Vue project (you can open a current Vue 3 project you have, or create a blank one).

Inside the package.json file for the project you just opened add the following to the dependencies:

`"brian-component-lib": "file:../brian-component-library"`

Make sure the file path you put in points to the correct folder where the component library lives.

Run `npm install` and you should now have the component library in your `node_modules`.

Import the component into one of the pages to test that it is working.

Note: You will need to also import the CSS because it gets built to its own file during the build process.

```js
<script setup lang="ts">
import { FccButton } from 'brian-component-lib'
import "brian-component-lib/style.css"
</script>

<template>
    <FccButton text="Run the Tests" />
</template>
```

You should now see the button when you run the project.

## How to Publish to NPM

If you haven't signed into NPM inside your terminal you can do that by running the `npm adduser` command.

Then just run the `npm publish` command and the package should be pushed up and made available on NPM.

## Conclusion

Vite makes it pretty easy to get a component library published. Hopefully this helped. [Let me know on Twitter](https://twitter.com/the_brianb) if it did or if you'd like to see something else from me in the future.

You can see the repository for this code here: [https://github.com/briancbarrow/vue-component-library-2023](https://github.com/briancbarrow/vue-component-library-2023)
