> -  原文地址：[How to Host an Angular Application on GitHub Pages with Travis CI](https://www.freecodecamp.org/news/host-an-angular-application-on-github-pages-with-travis-ci/)
> -  原文作者：[Rodrigo Kamada](https://www.freecodecamp.org/news/author/rodrigokamada/)
> -  译者：bauhauce
> -  校对者：

![How to Host an Angular Application on GitHub Pages with Travis CI](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/angular-travisci-cover.png)

在本文中，我们将使用最新版本的 Angular 创建一个应用程序。然后我们将它托管在 GitHub 页面的静态网站服务上，使用持续集成工具 Travis CI 来部署该应用程序。

## 前提

在开始之前，你需要安装和配置以下工具来创建 Angular 应用程序。

-   [Git](https://git-scm.com/):  Git 是一个分布式版本控制系统，我们将使用它来同步仓库。
-   [Node.js and npm](https://nodejs.org/): Node.js 是一个基于谷歌 V8 引擎的 JavaScript 代码运行时软件。 npm 是 Node.js 的包管理器（Node Package Manager）。我们将使用这些来构建和运行 Angular 应用程序并安装库(依赖库)。
-   [Angular CLI](https://angular.io/cli): Angular CLI 是 Angular 的一个命令行实用工具，我们将使用它来创建 Angular 应用程序的基本结构。
-   An IDE (例如 [Visual Studio Code](https://code.visualstudio.com/) 或 [WebStorm](https://www.jetbrains.com/webstorm/)): IDE（集成开发环境）是具有图形界面的工具，可帮助我们开发应用程序。在这里，我们将使用其中一个来开发 Angular 应用程序。

## 开始

### 在 GitHub 上创建和配置你的帐户

[GitHub](https://github.com/) 是一个使用 Git 工具进行版本控制的源代码和文件存储服务。 [GitHub Pages](https://pages.github.com/) 是使用公共仓库的静态文件托管服务。

首先，如果你还没有帐户，则需要在 GitHub 上创建一个帐户。访问 [https://github.com/](https://github.com/) 并点击按钮_Sign up_.

![github-step1](https://www.freecodecamp.org/news/content/images/2022/04/github-step1.png)

填写用户名、电子邮件地址和密码字段，单击按钮验证以解决挑战，然后单击按钮创建帐户。

![github-step2](https://www.freecodecamp.org/news/content/images/2022/04/github-step2.png)

接下来，我们将生成将在 Travis CI 中使用的令牌。单击带有头像的菜单，然后单击菜单 Settings。

![github-step3](https://www.freecodecamp.org/news/content/images/2022/04/github-step3.png)

单击菜单 Developer settings。

![github-step4](https://www.freecodecamp.org/news/content/images/2022/04/github-step4.png)

单击菜单 Personal access tokens。

![github-step5](https://www.freecodecamp.org/news/content/images/2022/04/github-step5.png)

点击按钮 Generate new token。

![github-step6](https://www.freecodecamp.org/news/content/images/2022/04/github-step6.png)

填写字段 Note，选择选项 repo 并点击按钮 Create token。

![github-step7](https://www.freecodecamp.org/news/content/images/2022/04/github-step7.png)

Copy the generated token. In my case, the token `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` was generated because this token will be configured in Travis CI.
复制生成的令牌。因为接下来该令牌将在 Travis CI 中配置。在我的例子中, “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” 就是我生成的令牌。

![github-step8](https://www.freecodecamp.org/news/content/images/2022/04/github-step8.png)

让我们创建仓库。单击带有头像的菜单，然后单击菜单 Your repositories。

![github-step9](https://www.freecodecamp.org/news/content/images/2022/04/github-step9.png)

点击按钮 New。

![github-step10](https://www.freecodecamp.org/news/content/images/2022/04/github-step10.png)

填写仓库名称字段并单击按钮 Create repository。

![github-step11](https://www.freecodecamp.org/news/content/images/2022/04/github-step11.png)

Ready! Account created, token generated, and repository [`https://github.com/rodrigokamada/angular-travisci`](https://github.com/rodrigokamada/angular-travisci) created.
准备好！帐户已创建好、令牌已生成, 并且仓库 [`https://github.com/rodrigokamada/angular-travisci`](https://github.com/rodrigokamada/angular-travisci) 也创建好了。

![github-step12](https://www.freecodecamp.org/news/content/images/2022/04/github-step12.png)

### 在 Travis CI 上创建和配置你的帐户

[Travis CI](https://www.travis-ci.com/) 是与 GitHub 集成的部署服务。

首先，如果你还没有 Travis CI 帐户，则需要创建一个。访问 [https://travis-ci.com/](https://travis-ci.com/) 并点击按钮 Sign up。

![travisci-step1](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step1.png)

单击 SIGN IN WITH GITHUB 按钮以使用你的 GitHub 帐户登录。

![travisci-step2](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step2.png)

如果 Travis CI 请求列出 GitHub 仓库的权限，则接受该请求。单击仓库链接 angular-travisci。

![travisci-step3](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step3.png)

让我们设置 GitHub 访问令牌。单击菜单 More options，然后单击菜单 Settings。

![travisci-step4](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step4.png)

字段 NAME的值填写为 GITHUB\_TOKEN ，VALUE 的值填写为你在 GitHub 上生成的令牌的值，然后单击按钮 Add。

![travisci-step5](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step5.png)

准备好了！账户已创建, 仓库也已配置好了。

![travisci-step6](https://www.freecodecamp.org/news/content/images/2022/04/travisci-step6.png)

### 创建你的 Angular 应用程序

[Angular](https://angular.io/) 是一个使用 HTML、CSS 和 TypeScript (JavaScript) 构建 Web、移动和桌面应用程序的开发平台。目前，Angular 的版本为 13，Google 是该项目的主要维护者。

让我们使用带有路由文件和 SCSS 样式格式的 `@angular/cli` 创建具有 Angular 基础结构的应用程序。

```powershell
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE angular-travisci/README.md (1061 bytes)
CREATE angular-travisci/.editorconfig (274 bytes)
CREATE angular-travisci/.gitignore (604 bytes)
CREATE angular-travisci/angular.json (3267 bytes)
CREATE angular-travisci/package.json (1078 bytes)
CREATE angular-travisci/tsconfig.json (783 bytes)
CREATE angular-travisci/.browserslistrc (703 bytes)
CREATE angular-travisci/karma.conf.js (1433 bytes)
CREATE angular-travisci/tsconfig.app.json (287 bytes)
CREATE angular-travisci/tsconfig.spec.json (333 bytes)
CREATE angular-travisci/src/favicon.ico (948 bytes)
CREATE angular-travisci/src/index.html (301 bytes)
CREATE angular-travisci/src/main.ts (372 bytes)
CREATE angular-travisci/src/polyfills.ts (2820 bytes)
CREATE angular-travisci/src/styles.scss (80 bytes)
CREATE angular-travisci/src/test.ts (743 bytes)
CREATE angular-travisci/src/assets/.gitkeep (0 bytes)
CREATE angular-travisci/src/environments/environment.prod.ts (51 bytes)
CREATE angular-travisci/src/environments/environment.ts (658 bytes)
CREATE angular-travisci/src/app/app-routing.module.ts (245 bytes)
CREATE angular-travisci/src/app/app.module.ts (393 bytes)
CREATE angular-travisci/src/app/app.component.scss (0 bytes)
CREATE angular-travisci/src/app/app.component.html (23809 bytes)
CREATE angular-travisci/src/app/app.component.spec.ts (1087 bytes)
CREATE angular-travisci/src/app/app.component.ts (221 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

创建 `.travis.yml` 文件。

```powershell
touch .travis.yml
```

使用以下内容配置  `.travis.yml` 文件。

```yaml
notifications:
  email:
    recipients:
      - rodrigo@kamada.com.br

language: node_js

node_js:
  - 16

before_script:
  - npm install

script:
  - npm run test:headless

before_deploy:
  - npm run build:prod

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  local_dir: dist/angular-travisci
  on:
    branch: main
```

更改 `package.json` 文件, 并添加以下脚本。 将 `rodrigokamada` 替换为你的 GitHub 用户名。

```json
  "build:prod": "ng build --prod --base-href https://rodrigokamada.github.io/angular-travisci/",
  "test:headless": "ng test --watch=false --browsers=ChromeHeadless"
```

更改 `src/app/app.component.spec.ts` 文件并删除测试 `should have as title 'angular-travisci'` 和 `should render title`。

使用以下命令运行测试:

```powershell
npm run test:headless

> angular-travisci@1.0.0 test:headless
> ng test --watch=false --browsers=ChromeHeadless

⠋ Generating browser application bundles (phase: setup)...Compiling @angular/core/testing : es2015 as esm2015
Compiling @angular/compiler/testing : es2015 as esm2015
Compiling @angular/platform-browser/testing : es2015 as esm2015
Compiling @angular/common/testing : es2015 as esm2015
Compiling @angular/platform-browser-dynamic/testing : es2015 as esm2015
Compiling @angular/router/testing : es2015 as esm2015
⠸ Generating browser application bundles (phase: building)...05 09 2021 19:40:04.329:INFO [karma-server]: Karma v6.3.4 server started at http://localhost:9876/
05 09 2021 19:40:04.331:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
05 09 2021 19:40:04.369:INFO [launcher]: Starting browser ChromeHeadless
✔ Browser application bundle generation complete.
05 09 2021 19:40:09.704:INFO [Chrome Headless 92.0.4515.159 (Linux x86_64)]: Connected on socket NUtJhjavb1JvssqOAAAB with id 25989029
Chrome Headless 92.0.4515.159 (Linux x86_64): Executed 1 of 1 SUCCESS (0.068 secs / 0.042 secs)
TOTAL: 1 SUCCESS
```

使用以下命令运行应用程序, 访问地址  `http://localhost:4200/` , 并检查该应用程序是否正常工作。

```powershell
npm start

> angular-travisci@1.0.0 start
> ng serve

✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   2.39 MB
polyfills.js        | polyfills     | 128.51 kB
main.js             | main          |   8.89 kB
runtime.js          | runtime       |   6.63 kB
styles.css          | styles        |   1.18 kB

                    | Initial Total |   2.53 MB

Build at: 2021-09-05T22:35:38.010Z - Hash: a4cfc9149589386eca5b - Time: 39997ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

使用以下命令构建应用程序:

```powershell
npm run build:prod

> angular-travisci@1.0.0 build:prod
> ng build --configuration production --base-href https://rodrigokamada.github.io/angular-travisci/

✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files           | Names         |      Size
main.c678fa8750e7c769.js      | main          | 177.63 kB
polyfills.6d7801353e02e327.js | polyfills     |  36.21 kB
runtime.b136bda8a38c4f2e.js   | runtime       |   1.06 kB
styles.ef46db3751d8e999.css   | styles        |   0 bytes

                              | Initial Total | 214.90 kB

Build at: 2021-09-05T22:42:19.525Z - Hash: 83bfffc079b083727ca4 - Time: 26030ms
```

在你创建的 GitHub 仓库上同步应用程序。

准备好了！在 GitHub 仓库上同步应用程序后，Travis CI 会构建应用程序并在分支 `gh-pages` 上同步。

Access the URL [`https://rodrigokamada.github.io/angular-travisci/`](https://rodrigokamada.github.io/angular-travisci/) and check if the application is working. Replace the `rodrigokamada` value with your GitHub username.
访问地址 [`https://rodrigokamada.github.io/angular-travisci/`](https://rodrigokamada.github.io/angular-travisci/) 并检查应用程序是否正常工作。将 `rodrigokamada` 值替换为你的 GitHub 用户名。

And that's it! The application repository is available at [https://github.com/rodrigokamada/angular-travisci](https://github.com/rodrigokamada/angular-travisci).
就是这样！[https://github.com/rodrigokamada/angular-travisci](https://github.com/rodrigokamada/angular-travisci) 上的应用程序仓库现在可以用了。

## 结论

总结本文所涵盖的内容：

-   我们在 GitHub 上创建了一个帐户。
-   我们在 GitHub 上创建了一个访问令牌。
-   我们在 GitHub 上创建了一个仓库。
-   我们在 Travis CI 上创建了一个帐户。
-   我们在 Travis CI 上配置了 GitHub 访问令牌。
-   我们创建一个 Angular 应用程序。

你可以使用本文创建你的个人网站并拥有在线作品集。

感谢你的阅读，希望你喜欢这篇文章！

需要在我发布新文章时获得最新内容的话，请在 [Twitter](https://twitter.com/rodrigokamada) 上关注我。

本教程以葡萄牙语发布在我的 [博客](https://rodrigo.kamada.com.br/share/blog/hospedando-uma-aplicacao-angular-no-github-pages-usando-o-travis-ci)。 
