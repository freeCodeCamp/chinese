> -  原文地址：[How to Use Github Actions to Deploy a Next.js Website to AWS S3](https://www.freecodecamp.org/news/how-to-use-github-actions-to-deploy-a-next-js-website-to-aws-s3/)
> -  原文作者：[Colby Fayock](https://www.freecodecamp.org/news/author/colbyfayock/)
> -  译者：luojiyin
> -  校对者：

![如何使用Github Actions将Next.js网站部署到AWS S3](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/actions-s3.jpg)

Next.js和静态 web应用的好处是，你将它们储存在对象储存里，几乎可以在任何地方运行, 比如AWS S3。但是每次手动更新这些文件可能是一件痛苦的事.

我们如何用Github Actions来自动持续部署我们的应用程序到S3?

-   [什么是GitHub Actions?](#what-are-github-actions)
-   [什么是持续部署?](#what-is-continuous-deployment)
-   [我们怎么去构建?](#what-are-we-going-to-build)
-   [Step 0: 在Gihub上建立一个新的Next.js项目](#step-0-setting-up-a-new-next-js-project-on-github)
-   [Step 1: 手工创建一个用于部署next.js项目的新S3桶 ](#step-1-manually-creating-and-deploying-a-next-js-project-to-a-new-s3-bucket)
-   [Step 2: 创建一个新的Github Action工作流来自动化构建一个Next.js项目](#step-2-creating-a-new-github-action-workflow-to-automatically-build-a-next-js-project)
-   [Step 3: 配置一个Github Action，部署静态网站到S3上](#step-3-configuring-a-github-action-to-deploy-a-static-website-to-s3)

## 什么是Gtihub Actions?

Github Actions是Github的一项免费服务，它允许我们用代码实现任务自动化。

我[之前写个](/news/what-are-github-actions-and-how-can-you-automate-tests-and-slack-notifications/) 我们任何用它来自动化任务，比如在运行代码中的测试，并向Slack发送通知。

它们提供一种灵活的方式，在我们现有的工作流基础上为自动化运行代码。这提供了很多的可能性，比如部署我们的网站。

## 什么是 AWS S3？

[S3](https://aws.amazon.com/s3/) (简单存储服务)是AWS的一个对象存储服务。它允许你在云上轻松存储文件，使它们在世界各地都可以使用。

它还允许你将这些文件作为一个网站使用。因为我们可以把HTML文件作为一个对象上传，我们也可以配置S3，让一个HTTP请求访问该文件。 这意味着，我们可以[在S3中直接托管整个网站](/news/how-to-host-and-deploy-a-static-website-or-jamstack-app-to-s3-and-cloudfront/).

## 什么使持续部署？

持续部署(Continuous Deployment),通常是指将代码处在可发布的状态，自动化部署代码，缩短部署部署时间。

特别是在我们的情况中，我们将配置我们的项目，以便任何有更新的更新被推送或者合并到git主分支，我们的网站将被部署。

## 我们怎样去构建?

我们首先要使用默认的Next.js起始模板初始化一个简单的[Next.js](https://nextjs.org/)应用，并配置将其编译成静态文件。

如果你不向创建一个Next.js项目，你甚至用一个简单的HTML文件跟着做，并不运行任何构建命令。但Next.js是构建动态网站应用的一种现代化方式，所以我将从这里开始。

随着我们的网站文件准备就绪，我们将在AWS中创建和配置一个S3桶，在S3桶上托管我们的网站。

最后，我们将创建一个新的Github Action工作流，当我们的主分支(`main`)发生新的变化时，它将自动更新S3中网站文件。

## 第一步：在Github上创建一个新的Next.js项目

我们将从Next.js的默认模板开始。

在创建你像创建项目的目录后，运行:

```
yarn create next-app my-static-website
# 或者
npx create-next-app my-static-website
```

注意： 请注意将`my-static-website`替换为你想选择的名称。我们将在本教程的其余部分使用这个名字。

如果进入到该目录并运行开发命令，你应该能够成功启动你的开发服务器。

```
cd my-static-website
yarn dev
# or
npm run dev
```

![](https://www.freecodecamp.org/news/content/images/2020/10/new-nextjs-app.jpg)

New Next.js App

接下来，让我们把我们的项目配置为静态编译。

在 `package.json`文件, 把`build` 脚本改为 :

```json
"build": "next build && next export",
```

这样做的目的时告诉Next将网站导出为静态文件，我们将它用于托管网站。

```
yarn build
# 或者
npm run build
```

一旦完成, 我们将查看 `out`目录，看到我们新网站的所有文件。

![](https://www.freecodecamp.org/news/content/images/2020/10/nextjs-build-export-output.jpg)

Next.js 的静态输出

最后，我们要把它推送到github上。

在你的Github账号中 [创建一个新的仓库](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo)。然后会提供如何 [添加现有项目](https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)到该仓库的说明。

一旦把你的项目推送到Github上，我们就做好了建立我的新网站项目的准备。

![](https://www.freecodecamp.org/news/content/images/2020/10/project-on-github.jpg)

Github中的新repo

有下面的提交内容

-   [添加初始Next.js项目](https://github.com/colbyfayock/my-static-website/commit/ca9e4bca3c37fbd8553b0b183890c32836c35296) 通过 [创建Next引用](https://nextjs.org/docs/api-reference/create-next-app)
-   [配置Next.js导出](https://github.com/colbyfayock/my-static-website/commit/7907f4a0fac5f0aed2922202c5f0070dfc055f83)

## 第二步: 手动创建新的S3桶，并将Next.js项目部署到上面。

要开始使用我们的新S3桶，首先登录你的AWS账号，并进入到S3服务。

![](https://www.freecodecamp.org/news/content/images/2020/10/aws-s3-console.jpg)

发现没有桶

我们要创建一个新桶，使用我们选择的名字命名，用于我们网址托管的S3，我们还要配置我们的S3桶，使其能够托管一个网站。

_注意: 本教程步会指导你如何在S3上托管网站，但是你可以查看我的另一个教程，该教程将一步步地 [指导你在S3上托管网站](/news/how-to-host-and-deploy-a-static-website-or-jamstack-app-to-s3-and-cloudfront/)。_

![](https://www.freecodecamp.org/news/content/images/2020/10/s3-bucket-website-hosting.jpg)

静态网站在AWS S3上托管

当我们把S3桶配置成一个网站，我们就可以回到Next.js项目文件夹，运行我们的构建命令，然后把`out`文件夹中的所有文件上传到我们的新建的S3桶。

![](https://www.freecodecamp.org/news/content/images/2020/10/website-files-in-s3.jpg)

S3桶上的静态应用

当这些文件被上传，并且我们已经为网站托管配置了S3桶，我们现在应该能看到我们的项目在网络上线运行！

![](https://www.freecodecamp.org/news/content/images/2020/10/nextjs-s3-website.jpg)

AWS S3托管Next.js应用程序

## 第三步: 创建一个新的Github Action工作流来自动构建一个Next.js项目。

首先，我们需要创建一个新的工作流程(workflow)。

如果你熟悉Github Actions，你可以手动创建一个，单我们将通过用户界面快速创建一个。

进入Github的仓库中的`Action`标签，点击`set up a workflow yourself`,来自行设置工作流。

![](https://www.freecodecamp.org/news/content/images/2020/10/github-actions-new-workflow.jpg)

新的Github Action工作流

Github提供了一个模板，我们可以在工作流程中使用，不过我们要做一些修改。

让我们做以下工作。

-   可选: 将文件重名为deploy.yml
-   可选: 将workflow重名为CD (因为它与CI不同)
-   可选: 删除所有的注释，使其更容易阅读
-   删除`on` 属性中的`pull_request`
-   删除所有的 `steps` 除了`uses: actions/checkout@v2`

因此，在这一点上，我们应该剩下的是:

```yaml
name: CD

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
```

仅仅这段代码会触发一个流程，会启动一个新的Ubuntu实例，并在Github上有新的改动推送到主分支后，拉取代码到Ubuntu上。

接下来， 当我们获取我们的代码后，我们要构建它。然后将输出文件同步到S3。

这一步将不同，取决于你的项目使用yarn还是npm。

如果你使用yarn，在 `steps`定义下，添加以下内容。

```yaml
- uses: actions/setup-node@v1
  with:
    node-version: 12
- run: npm install -g yarn
- run: yarn install --frozen-lockfile
- run: yarn build
```

如果是使用npm，添加以下内容:

```yaml
- uses: actions/setup-node@v1
  with:
    node-version: 12
- run: npm ci
- run: npm run build
```

在这两个步骤之间，我们要做的是:

-   设置 node: 这是为了我们能够使用npm 和node 来安装和运行的脚本
-   安装Yarn (仅对使用Yarn): 如果我们使用Yarn，我们将为其安装全局依赖，以便我们使用它
-   安装依赖: 我们安装我们的依赖，我们使用一个特定命令，确保我们使用`lock`文件，以避免任何意外的软件包升级
-   构建: 最后, 我们运行我们的构建命令，将我们的Next.js项目编译到`out`目录中。

现在我们可以将该该文件直接提交到我们的`main`分支，这触发我们的workflow的运行，我们可以子啊`Actions`标签里看到。

![](https://www.freecodecamp.org/news/content/images/2020/10/github-action-run-workflow.jpg)

在Github Actions中新的workflow

为了看到它的运行状态，我们进入运行的`workflow`，选择我们的`workflow`，看到所有我们的项目包含的步骤。

![](https://www.freecodecamp.org/news/content/images/2020/10/github-action-successful-build.jpg)

Github Action成功构建日志

[随着提交!](https://github.com/colbyfayock/my-static-website/commit/59e0a5158d6afbf54793d826d05455f5205c98fb)

## 第四步: 配置一个Github Action，将静态网站部署到S3上

现在我们正在自动构建我们的项目，我们想在S3中自动更新我们的网站。

 为了做到这一点，我们将使用Github Action [aws-actions/configure-aws-credentials(配置aws凭证)](https://github.com/aws-actions/configure-aws-credentials) 和 the AWS CLI(AWS提供的命令行)。

我们使用Github Action 将接收我们的AWS凭证和配置，并在workflow的生命周期内使用。

目前，Github Action中的Ubuntu实例允许使用AWS CLI，因为它包含在其中。因此，我们将能够在workflow中使用CLI命令。

另外，我们也可以使用[S3 Sync action](https://github.com/jakejarvis/s3-sync-action)。但是通过使用AWS CLI，我们可以获得更多的灵活性来定制我们的设置，我们可以使用它来获得额外的CLI命令，一般来说，熟悉AWS CLI也是不错的。

为了开始，让我们在workflow添加以下片段作为附加步骤。

```yaml
- uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1
```

上面要做的是使用AWS凭证配置action，根据我们的设置来设置我们的AWS的Access Key和Secret Key还有region(区域)。

AWS Region可以自定义为你通常使用的AWS账号的任何区域，我在美国东北部，所以我设置为`us-east-1`。

Access Key和Secret Key是你需要你的AWS账号生成的凭证。我们的代码设置方式是，我们将这些值存储在Github Secrets里，要防止这些密钥被泄。当action运行时，Github会将这些值改为星星(`***`)，这样人们就无法访问这些密钥。

为了设置这些secrets,我们首先要在AWS生成 `Access Keys`。

进入了AWS控制台。在用户菜单下，选择 **My Security Credentials**，然后选择 **Create access key**。

![](https://www.freecodecamp.org/news/content/images/2020/10/aws-console-create-access-key.jpg)

在AWS创建一个 `Access Key`

这会生成两个值  **Access key ID** 和**Secret access key**。必须保存好这些值，因为你将无法再次访问`Secret key ID `。

![](https://www.freecodecamp.org/news/content/images/2020/10/aws-secret-access-keys.jpg)

在AWS中寻找 `Secret Key` 和 `Access Key`

_注意: 记住不要再你的代码中包含`Access Key`和`Secret Key`。这可能导致有人破坏你的AWS凭证。_

下一步, 再Github repo中, 进入到 Settings -> Secrets, 然后选择 `New secret`。

在这里，我们要使用AWS keys添加到下面的secrets:

-   AWS\_ACCESS\_KEY\_ID: your AWS Access key ID
-   AWS\_SECRET\_ACCESS\_KEY: your AWS Secret key

当保存下来，你就应该记住这两个新的`secrets`。

![](https://www.freecodecamp.org/news/content/images/2020/10/github-secrets-access-keys.jpg)

在Github中创建`Secrets`

现在我们已经配置好了我们的凭证，我们应该为运行命令，将我们的项目同步到S3，做好准备。

在Github Action，添加以下步骤:
```yaml
- run: aws s3 sync ./out s3://[bucket-name]
```

_注意: 请确保`[bucket-name]` 替换为你的S3桶的名称。_

这个命令会触发与我们的S3桶的同步(sync)，使用`out`目录的文件，也就是我们项目构建的地方。

现在，如果我们提交我们的修改，我们可以看到，一旦提交到`main`分支，我们的actions会自动触发，我们构建我们的项目并同步到S3！

![](https://www.freecodecamp.org/news/content/images/2020/10/github-action-sync-s3-bucket.jpg)

成功通过GitHub Action workflow 同步到AWS S3

_注意: 请确保在设置这个action之前，你已经将S3桶配置为网站托管(包括解除S3桶权限) --否则这个action可能失败。_

在这一点上，我们的项目可能看起来是一样的，因为我们对代码进行任何修改。

![](https://www.freecodecamp.org/news/content/images/2020/10/nextjs-s3-website.jpg)

AWS S3的Next.js应用程序

但如果你做了一个代码修改，比如在`pages/index.js`中改变主页的标题，并提交该修改:

```jsx
<h1 className={styles.title}>
  Colby's <a href="https://nextjs.org">Next.js!</a> Site
</h1>
```

我们可以看到，我们的修改触发了workflow的启动:

![](https://www.freecodecamp.org/news/content/images/2020/10/github-action-commit-workflow.jpg)

新的Github Action workflow的触发来自代码改变

一旦我们的workflow完成，我们可以看到我们的内容已经在我们的网站上自动更新。

![](https://www.freecodecamp.org/news/content/images/2020/10/updated-nextjs-site-title.jpg)

AWS S3托管的应用程序，代码已经更新

随着内容的提交

-   [添加ASW的配置和S3 sync命令](https://github.com/colbyfayock/my-static-website/commit/f891412b827aca4b06e9bf3de8e4e5b4c5704fc8)
-   [测试workflow的标题的更新](https://github.com/colbyfayock/my-static-website/commit/bb9b981416645e35c6d3442e02d6b61f2ba032d2)

## 我们还能做什么?

### 设置CloudFront

这个篇文章的目的不是要经历AWS配置网站的整个过程，但是你在S3上运行网站服务，你可能在之前考虑过CloudFront。

你可以查看以下[我的另一个指南](/news/how-to-host-and-deploy-a-static-website-or-jamstack-app-to-s3-and-cloudfront/)，它指导你如何设置CloudFront，以及如何在S3中创建网站的手把手指南。

### CloudFront的缓存失效

如果你的S3网站在CloudFront后面，有可能你会确保CloudFront没有缓存新的变化。

通过AWS CLI，我们也可以触发CloudFront的缓存失效，以确保它正在抓取最新的变化。

[请看这里的文档](https://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html)学习更多的知识.

### pull request部署

如果你不断地在pull request中的网站修改，有时候更容易看到网站的修改。

你可以设置一个新的workflow，只在pull request上运行，workflow可以根据分支或者环境动态创建一个新的桶，并在pull request上添加一个带有该URL的comment。

你也许能找到一个GitHub Action 作为你管理你pull request上带的comments,你可以查询[GitHub Actions文档](https://docs.github.com/en/free-pro-team@latest/rest/reference/actions).

 [![关注我，了解更多的Javascript、UX和其他有趣的事情!](https://res.cloudinary.com/fay/image/upload/w_2000,h_400,c_fill,q_auto,f_auto/w_1020,c_fit,co_rgb:007079,g_north_west,x_635,y_70,l_text:Source%20Sans%20Pro_64_line_spacing_-10_bold:Colby%20Fayock/w_1020,c_fit,co_rgb:383f43,g_west,x_635,y_6,l_text:Source%20Sans%20Pro_44_line_spacing_0_normal:Follow%20me%20for%20more%20JavaScript%252c%20UX%252c%20and%20other%20interesting%20things!/w_1020,c_fit,co_rgb:007079,g_south_west,x_635,y_70,l_text:Source%20Sans%20Pro_40_line_spacing_-10_semibold:colbyfayock.com/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_68,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_145,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_222,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_295,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/v1/social-footer-card)](https://twitter.com/colbyfayock) 

-   [🐦 在推特上关注我](https://twitter.com/colbyfayock)
-   [🎥 在油管上订阅我](https://youtube.com/colbyfayock)
-   [✉️ 订阅我的Newsletter](https://www.colbyfayock.com/newsletter/)
-   [💝 赞助我](https://github.com/sponsors/colbyfayock)