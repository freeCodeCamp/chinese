> -   原文地址：[How to Create and Publish a Vue Component Library 如何搭建、发布一个 Vue 组件库](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/)
> -   原文作者：Brian Barrow
> -   译者：Humilitas
> -   校对者：

![How to Create and Publish a Vue Component Library](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/trnava-university-BEEyeib-am8-unsplash.jpg)

如今，许多组件库风靡一时，使得我们能够轻易地在一个应用中保持一致的外观和体验。

我至今已经使用过许多不同的组件库，不过使用组件和深入了解构建组件的过程还是有很大不同的。

我想要更深入地理解组件库的构建过程，也希望能有助于你对于这一过程的理解。

我们接下来会使用 `vue-sfc-rollup` 这个 npm 包来构建这个组件库，这是一个非常实用的组件库构建工具。

如果想用这个工具管理现有的组件库，可以查看 [文档][1]。

这个工具为我们创建了项目的文件结构，如文档所说，它创建了以下文件（SFC 即 Single File Component）：

-   一个最简的 [rollup][2] 配置文件
-   一个包含 build/dev 脚本和项目依赖的 package.json 文件
-   一个最简的用于转译的 babel.config.js 和 .browserslistrc 文件
-   rollup 打包 SFC 时用到的包装器（wrapper）
-   一个 SFC 示例文件
-   组件库的使用示例

这个工具同时支持单文件组件和组件库，注意文档中的这句话：

> 在 library 模式下有一个 'index' 文件，其中声明了需要暴露哪些组件到你的库中。

也就是说，在设置过程中会额外生成一些文件。

# 开始构建

首先，全局安装 `vue-sfc-rollup`：

`npm install -g vue-sfc-rollup`

安装完成后，在命令行窗口进入想要在其中保存项目文件的目录，执行如下命令来初始化项目

`sfc-init`

在提示中选择如下选项：

-   **Is this a single component or a library?** Library
-   **What is the npm name of your library?** （名称在 npm 中必须是唯一的，这里我使用的是 _brian-component-lib_）
-   **Will this library be written in JavaScript or TypeScript?** JavaScript（可以放心地选择 TypeScript，只要你清楚自己的选择）
-   **Enter a location to save the library files:** （项目的文件夹名称，默认为之前步骤设置的 npm 名称，所以可以直接按 enter 取默认值。）

设置完成之后，进入项目目录并执行 npm install。

```
cd path/to/my-component-or-lib

npm install
```

完成之后，选择一个编辑器来打开项目目录。

如上所述，在 `/src/lib-components` 文件夹中可以看到，一个示例 Vue 组件已经为我们构建好了。要查看效果，可以运行 `npm run serve` 命令，然后在浏览器中访问 [http://localhost:8080/][3]。

开始添加我们的自定义组件。在这个示例中，我打算模拟 freeCodeCamp 的任务介绍部分的按钮，所以在 `lib-components` 文件夹中新建一个名为 `FccButton.vue` 的 Vue 文件。

![](https://www.freecodecamp.org/news/content/images/2020/07/Screen-Shot-2020-07-22-at-10.08.05-AM.png)

这就是我们将要构建的按钮。

可以直接将下面这段代码复制到你的文件中：

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

可以看到，在代码段的最上方部分是页面元素的模板：一个按钮，其 class 为 "btn-cta"，其文本内容为我们传递给它的变量 text 的值。

在 script 标签中，定义了组件名称及组件将要接收的属性（props），这个示例组件只接收一个默认值为 "Run the Tests" 的名为 `text` 的属性。

我们还定义了一些样式，以使这个按钮呈现出我们想要的外观。

为了查看这个组件的效果，需要将它添加到 `lib-components` 路径下的 `index.js` 文件中。index.js 文件内容如下：

```
/* eslint-disable import/prefer-default-export */
export { default as FccButton } from './FccButton';
```

src/lib-components/index.js

还需要在 `dev` 路径下的 `serve.vue` 文件中导入这个组件，代码如下：

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

再次执行 `npm run serve` 命令，在浏览器中访问 [http://localhost:8080/][4] 地址即可查看这个按钮组件的最终效果。

现在已经构建出我们想要的组件。之后可以参照这些步骤来构建自己的组件，切记要在 `/lib-components/index.js` 文件中将其导出，以确保在我们后续发布的 npm 包中这些组件是可用的。

# 发布到 NPM

现在，组件库发布前的准备工作已经完成，我们需要执行构建过程来将其打包。

由于这是我们组件库的第一次发布，建议在执行 build 命令之前在 `package.json` 文件中将版本号设置为 `0.0.1`。我们将会在发布第一个正式版本之前加入更多组件。想要了解更多关于语义化版本的信息，查看 [这里][5]。

执行 `npm run build`。

如文档所述：

> 执行 build 脚本将会在 `dist` 路径中生成 3 个编译后的文件，文件名和路径由 package.json 文件中的 `main`、`module`、`unpkg` 属性指定。这些文件生成之后，可以进行下一步。

命令执行完毕之后，我们已经准备好将组件库发布到 NPM 了。在此之前，确保你有一个 NPM 账号（没有的话，可以点击 [这里][6] 进行注册）。

接下来将你的 NPM 账户添加到终端（terminal）：

`npm adduser`

### 理解 package.json

我们使用 package.json 文件来控制要将哪些文件发布到 npm。初始化项目时生成的 `package.json` 文件内容如下：

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

`files` 属性中的配置指定 npm 将 `dist` 文件夹中所有内容及 `src` 文件夹下所有 `.vue` 文件发布。你可以根据需要更新配置，在本次教程中我们让它保持原样即可。

由于我们没有更改 package.json 的内容，现在可以直接发布了。只需执行如下命令：

`npm publish`

![](https://www.freecodecamp.org/news/content/images/2020/07/hy.gif)

真为你感到自豪！

恭喜！你已经成功发布了一个 Vue 组件库，可以访问 [npmjs.com][7] 进行查看。

[1]: https://www.npmjs.com/package/vue-sfc-rollup
[2]: https://rollupjs.org/
[3]: http://localhost:8080/
[4]: http://localhost:8080/
[5]: https://docs.npmjs.com/about-semantic-versioning
[6]: https://www.npmjs.com/
[7]: https://www.npmjs.com/
