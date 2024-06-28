> -  原文地址：[如何创建和发布一个 Vue 组件库 – 2023 更新](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library-update/)
> -  原文作者：[Brian Barrow](https://www.freecodecamp.org/news/author/brian/)
> -  译者：xgqfrms
> -  校对者：

![如何创建和发布一个 Vue 组件库 – 2023 更新](https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-pixabay-159711.jpg)

早在 2020 年，我就[写了一篇](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/) 关于构建 Vue 组件库的文章。自从那以后，我使用的包已被弃用了，构建一个库/包的推荐方法是使用 Vite。

## 入门

我通过运行 `npm create vite@latest` 启动该项目，并将我的项目命名为 `brian-component-lib`，以便与我之前的文章保持一致。当这些选项出现时，我也选择了使用 TypeScript 和 Vue。

## 组件

我构建的组件是 freeCodeCamp.org 上使用的按钮的一个克隆

![image-160](https://www.freecodecamp.org/news/content/images/2023/05/image-160.png)

我们正在构建的按钮组件

这是该组件的代码。请注意，它使用了 TypeScript 和 Vue 3 中可用的 `script setup` 格式。

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

然后我们需要在库中导出这个组件。我们通过从一个 `index.ts` 文件导出它来实现。

```js
import FccButton from "./components/FccButton.vue";

export { FccButton };
```

src/index.ts

## 配置

组件代码准备好了后，我们需要确保 Vite 和 `package.json` 文件被正确配置了。

Vite 在构建代码时有很多选择。 我们关注的是[“库模式”](https://vitejs.dev/guide/build.html#library-mode)。

```js
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // src/indext.ts 是我们导出组件的地方
      entry: resolve(__dirname, "src/index.ts"),
      name: "BrianComponentLibrary",
      // 运行构建时输出文件的名称
      fileName: "brian-component-lib",
    },
    rollupOptions: {
      // 确保外部依赖项不应捆绑到你的库中
      external: ["vue"],
      output: {
        // 提供全局变量以便在 UMD 构建中可以被外部依赖项使用
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
```

vite.config.ts

这是 `package.json` 文件。 我们需要确保拥有指向构建文件必要的属性。 有关每个属性的作用的更多信息，在 VS Code 中你可以用鼠标悬停的它们上面。

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

为了让 `vue-tsc --emitDeclarationOnly` 在构建时工作，我们需要将以下属性添加到 tsconfig.json 文件的 `compilerOptions` 部分:

```
"outDir": "dist",
"declaration": true,
```

我们还需要删除 `noEmit: true` 属性。这将使我们的类型在包中可用，因此一个使用 TypeScript 和 Vue 的项目不会因为没有声明类型而报错。

我还添加了这一行，以确保我的 `App.vue` 和 `main.ts` 文件不会包含在组件库构建文件中。

`"exclude": ["src/App.vue", "src/main.ts"],`

## 测试该库

我们现在可以运行 `npm run build`，然后测试我们的库。为此，请打开一个 Vue 项目（你可以打开一个当前拥有的 Vue 3 项目，或创建一个空白项目）。

在刚刚打开的项目的 package.json 文件中，将以下内容添加到依赖项中:

`"brian-component-lib": "file:../brian-component-library"`

确保你输入的文件路径指向组件库所在的正确文件夹。

运行 `npm install`，现在在你的 `node_modules` 中应该有了该组件库。

将组件导入其中一个页面以测试其是否正常工作。

注意: 你还需要导入 CSS，因为它在构建过程中构建到自己的文件中了。

```js
<script setup lang="ts">
import { FccButton } from 'brian-component-lib'
import "brian-component-lib/style.css"
</script>

<template>
    <FccButton text="Run the Tests" />
</template>
```

现在，当你运行项目时，你应该会看到该按钮。

## 如何发布到 NPM

如果你还没有在终端中登录 NPM，则可以通过运行 `npm adduser` 命令来登录。

然后只需运行 `npm publish` 命令，包就会被推送，并且在 NPM 上可用。

## 结论

Vite 使发布一个组件库变得相当容易。希望这有帮助。[请在 Twitter 上告诉我](https://twitter.com/the_brianb) 如果确实如此，或者你将来希望看到我的其他内容。

你可以在此处查看此代码的存储库：[https://github.com/briancbarrow/vue-component-library-2023](https://github.com/briancbarrow/vue-component-library-2023)
