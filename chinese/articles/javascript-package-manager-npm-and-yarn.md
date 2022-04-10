> - 原文地址：[JavaScript Package Manager – Complete Guide to NPM and Yarn](https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/)
> - 原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![JavaScript Package Manager – Complete Guide to NPM and Yarn](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/package-manager-npm-and-yarn-explained-curology-pDsmoI5j3B8-unsplash.jpg)

A **package manager** is a tool developers use to automate finding, downloading, installing, configuring, upgrading, and removing a system's packages.

This article will show you all you need to get started with package managers like NPM and Yarn.

But why exactly do we need a package manager in our development workflow? Let's find out.

## Why Do You Need a Package Manager?

Suppose there were no package managers. In that case, you would have to do the following manually:

- Find all the correct packages for your project
- Verify that the packages don't have any known vulnerabilities
- Download the packages
- Install them at the appropriate location
- Keep track of new updates for all your packages
- Upgrade each package whenever there is a new release
- Remove the packages you no longer need

Manually managing tens or hundreds of packages is a tiresome and time-consuming endeavor.

Therefore, package managers—such as [NPM](https://www.npmjs.com/), [pNPM](https://pnpm.io/), [Bower](https://bower.io/), and [Yarn](https://yarnpkg.com/)—help automate and eliminate the tedious process of managing all your packages manually.

Keep in mind that a package manager is not the same as a package registry. So, let's find out the main difference.

## Package Manager vs. Package Registry – What's the Difference?

A **package manager** is a tool developers use to automatically find, download, install, configure, upgrade, and uninstall a computer's packages.

NPM (Node Package Manager) and Yarn (Yet Another Resource Negotiator) are two popularly used package managers.

A **package registry** is a database (storage) for thousands of packages (libraries, plugins, frameworks, or tools).

In other words, a package registry is the place packages get published to and installed from.

[NPM registry](https://www.npmjs.com/) and [GitHub Packages](https://github.com/features/packages) are two popularly used package registries.

So, now that we know what a package manager is and why it is needed, we can discuss how to use the two popular ones—NPM and Yarn.

Note that there are numerous NPM vs. Yarn debates out there – so we will avoid them here because the best package manager is the one that works best for you.

Therefore, this article will show you how NPM and Yarn work rather than tell you which package manager is best. It is then up to you to decide which you prefer.

Alternatively, you can choose to use NPM for a specific project and Yarn for another—depending on which manager you believe is best suited for the job.

So, without any further ado, let's begin by learning how to install the two managers.

## How to Install Node Package Manager (NPM)

NPM gets installed automatically while installing Node.

Therefore, to get NPM installed on your system, go to the [NodeJS](https://nodejs.org/en/) website and get Node's [latest LTS or the current version](https://tamalweb.com/which-nodejs-version).

## How to Install Yarn

It is best to install Yarn through NPM. So, first, install NPM from the [Node.js](https://nodejs.org/en/) website.

Once you've installed NPM, proceed to install Yarn like so:

```bash
npm install -g yarn
```

## How to Check the Installed Node Version

To check the Node.js version installed on your system, run:

```bash
node -v
```

The `-v` flag in the snippet above is a shorthand for `--version`.

## How to Check the Installed NPM Version

To check the NPM version installed on your system, run:

```bash
npm -v
```

## How to Check the Installed Yarn Version

To check the Yarn version installed on your system, run:

```bash
yarn -v
```

## How to Upgrade Node Package Manager

Update to the latest NPM version by running:

```bash
npm install npm@latest -g
```

## How to Upgrade NodeJS

Suppose you wish to upgrade your Node.js installation. In that case, you have two options:

### Option 1: Upgrade via the NodeJS website

One way to upgrade your NodeJS installation is to manually download and install the latest version from the [Node.js website](https://nodejs.org/en/).

### Option 2: Upgrade via a version management tool

Another way to upgrade your NodeJS installation is to use a [version manager](https://nodejs.org/en/download/package-manager/) such as [NVM](https://github.com/nvm-sh/nvm), [n](https://github.com/tj/n), or [nvs](https://github.com/jasongin/nvs).

## How to Upgrade Yarn

Update to the latest Yarn version by running:

```bash
yarn set version latest
```

So, now that we have NPM (or Yarn) on our computer, we can start using the installed manager to find, install, configure, and remove our project's packages.

But what exactly is a package? Let's find out.

## What Exactly Is a Package?

A **package** is a [directory](https://www.codesweetly.com/git-basic-introduction/#h-working-directory) (or project) that has a `package.json` file used to record information about it.

**Note:** You can only publish packages (a project described by a `package.json` file) to the [NPM registry](https://docs.npmjs.com/cli/v6/using-npm/registry).

## How to Install Packages

There are two ways to install a package: locally or globally.

### Local package installation

A locally installed package is one that you can use only in the project in which you've installed it.

To install a package locally, do the following:

1. Navigate to the [root directory](https://www.codesweetly.com/web-tech-glossary/#h-root-directory) of your project from the command line.
2. Install your package using the NPM or Yarn installation command below (depending on the package manager you've chosen to use for your project).

**Note:** You must have Node and NPM installed on your system for the NPM (and Yarn) installation commands below to work. You can get both by installing the latest LTS or the current version from the Node.js website.

#### NPM installation command

```bash
npm install package-name --save
```

Note that the `--save` command above instructs NPM to save `package-name` in the `package.json` file as one of the packages on which the project depends.

Suppose you wish to install an exact version of a package. In such a case, add a `@[version-number]` after the package's name like so:

```bash
npm install package-name@4.14.1 --save
```

Alternatively, if the package you are installing is for development and testing purposes, use:

```bash
npm install package-name --save-dev
```

The commands above will cause NPM to download three items into your project's root directory: a `node_modules` folder, a `package.json` file, and a `package-lock.json` file. We will discuss these items in detail later on in this article.

#### Yarn installation command

```bash
yarn add package-name
```

Suppose you wish to install an exact version of a package. In such a case, add a `@[version-number]` after the package's name like so:

```bash
yarn add package-name@4.14.1
```

Alternatively, if the package you are installing is for development and testing purposes, use:

```bash
yarn add package-name --dev
```

The commands above will cause Yarn to download three items into your project's root directory: a `node_modules` folder, a `package.json` file, and a `yarn.lock` file. We will discuss these items in detail later on in this article.

So, now that we know how to install a package locally, we can discuss the global package installation.

### Global package installation

A globally installed package is a package that you can use anywhere on your system.

To install a package globally, run the code below on your terminal:

```bash
npm install package-name -g
```

Alternatively, you can use Yarn like so:

```bash
yarn global add package-name
```

Note that you can run the commands above from any location on your system.

### Local vs. global package installation

Generally, it is better to install a package locally. Below are some of the differences between a local and global installation.

#### Difference 1: Installation location

A locally installed package gets installed in the directory where you executed the `npm install package-name` (or `yarn add package-name`) command.

Specifically, you will find a project's locally installed packages in its `node_module` directory.

In contrast, a globally installed package gets installed in a single location on your system. The exact location depends on your system's configuration.

#### Difference 2: Package versions

Suppose you installed your package locally. Then, you can use different versions of the same package for multiple app development.

However, you are forced to use the same package version for all your apps when you install globally.

#### Difference 3: Updates

A local installation allows you to choose the project's packages you wish to upgrade to the latest version. This makes it easier to manage upgrades that break compatibility with other packages.

However, upgrading a globally installed package updates the package for all projects—which can cause maintenance nightmares if the upgrade breaks compatibility with other packages.

#### Difference 4: Usage recommendation

Global installation is best for packages you intend to use only on your command line—especially when they provide executable commands reusable across projects.

However, local installation is best for packages you intend to use in your program—through the `import` statement or `require()` function.

#### Difference 5: Examples

[NPM](https://www.npmjs.com/), [React Native CLI](https://reactnative.dev/docs/environment-setup), [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/), [Grunt CLI](https://gruntjs.com/getting-started), and [Vue CLI](https://cli.vuejs.org/) are well-known examples of global packages.

Common examples of local packages are [Webpack](https://webpack.js.org/), [Lodash](https://lodash.com/), [Jest](https://jestjs.io/), and [MomentJS](https://momentjs.com/).

**Note:**

- You can [do both local and global installation](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/#when-you-can-t-choose) of packages you intend to use both on the command line and in your project. Typical examples of such packages are [ExpressJS](https://expressjs.com/) and [CoffeeScript](https://coffeescript.org/).
- Your package manager does not execute an installed package. NPM (and Yarn) only install packages to the `node_modules` directory. And if you had specified the `--save` command, your manager would add details about the package to the `package.json` file.
- To execute (run) any [executable](https://helpdeskgeek.com/how-to/what-is-an-executable-file-how-to-create-one/) package, you must explicitly do so yourself. We will discuss how in a later section of this article.

But what exactly are the `node_modules` folder, `package.json` file, `package-lock.json` file, and `yarn.lock` file? Let's find out.

## What Is a `node_modules` Folder?

The **node\_modules** directory is the folder where NPM places all the packages it downloads locally for your project.

## What Is a `package.json` File?

A **package.json** file is a JSON document that package managers—like NPM and Yarn—use to store information about a specific project.

In other words, a `package.json` file is a project's metadata file.

### Advantages of a `package.json` File

A `package.json` file:

- makes it possible to publish your project to the NPM registry
- makes it easy for others to manage and install your package
- helps NPM manage a [module](https://www.codesweetly.com/javascript-modules-tutorial/)'s dependencies easily
- makes your package reproducible and shareable with other developers

### How to Create a `package.json` File

Go to your project's root directory and initialize the creation of a `package.json` file by running:

```bash
npm init
```

Or, if your package manager is Yarn, run:

```bash
yarn init
```

Once you've executed the initialization command above, your package manager will walk you through creating the `package.json` file by asking a few questions about your project.

If you wish to skip the questionnaire, you can create a default `package.json` file. Let's see how.

### How to Create a Default `package.json` File

Suppose you prefer to skip the questionnaire prompted by the `npm init` (or `yarn init`) command. In such a case, go to your project's [root directory](https://www.codesweetly.com/web-tech-glossary/#h-root-directory) and run:

```bash
npm init -y
```

Or, if your package manager is Yarn, run:

```bash
yarn init -y
```

The command above will use [default values extracted from the current directory](https://docs.npmjs.com/creating-a-package-json-file#default-values-extracted-from-the-current-directory) to create your project's `package.json` file.

**Note:** The `-y` flag is a shorthand for `--yes`.

Once your package manager finishes its initialization process, your project's `package.json` file will contain an object with a set of properties.

**Here's an example:**

```json
{
  "name": "codesweetly-project",
  "version": "1.0.0",
  "main": "index.js"
}
```

You can see that the `package.json` file above contains the `name`, `version`, and `main` fields. Let's learn more about these properties below.

### The `package.json`'s Fields

The `package.json`'s properties make your project usable to package managers and end-users.

Suppose you wish to publish your package to the NPM registry. In that case, your `package.json` file must have the `"name"` and `"version"` fields.

However, if you do not intend to publish your package, in that case, all fields—including the `"name"` and `"version"` properties—are optional.

Let's learn more about the commonly used fields in a `package.json` file.

#### name

The `"name"` field is a property used to record a project's name.

The `"name"` property's value must be:

- a single word
- lowercase lettering
- and less than or equal to 214 characters

Note that you can join words together with hyphens and underscores.

**Here's an example:**

```json
{
  "name": "code_sweetly-project"
}
```

#### version

The `"version"` field indicates a project's current version number.

The `"version"` property must be in the form of a `major.minor.patch` format. It must also follow the [semantic versioning guidelines](https://docs.npmjs.com/about-semantic-versioning).

**Here's an example:**

```json
{
  "version": "1.0.0"
}
```

#### description

The `"description"` field is a property containing a brief description of a project's purpose.

NPM recommends having a `"description"` property to make your package easier to find on the NPM website.

Your description will be one of the things that's shown when people run the `npm search` command.

**Here's an example:**

```json
{
  "description": "A brief description about this package (project)"
}
```

#### main

The `"main"` field indicates a project's [entry point](https://www.codesweetly.com/web-tech-glossary/#entry-point).

In other words, when someone runs the `require()` function, Node will resolve the invocation to `require(<package.json:main>)`.

**Here's an example:**

```json
{
  "main": "./src/index.js"
}
```

#### private

The `"private"` field lets package managers know whether they should publish your project to the NPM registry.

**Here's an example:**

```json
{
  "private": true
}
```

If you set your package.json's `"private"` property to `true`, package managers will not publish your project.

Therefore, setting the property is an excellent way to prevent accidental publication of your package.

#### scripts

The `"scripts"` field defines the script commands you want to run at various times in your project's lifecycle.

**Here's an example:**

```json
{
  "scripts": {
    "test": "jest",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build" 
  }
}
```

The `"scripts"` field above contains five properties whose values are the commands we want our package manager to run whenever we invoke the property's key.

So, for instance, running `npm run dev` will execute the `"webpack --mode development"` command.

#### keywords

The `"keywords"` field specifies an array of keywords that can help people discover your package.

**Here's an example:**

```json
{
  "keywords": [
    "drag",
    "drop",
    "drag and drop",
    "dragndrop",
    "draggable" 
  ]
}
```

The `"keywords"` property is part of the information shown when people run the `npm search` command.

#### author

The `"author"` field lists a project's author's details.

**Here's an example:**

```json
{
  "author": "Oluwatobi Sofela <oluwatobiss@codesweetly.com> (https://www.codesweetly.com)"
}
```

You can also write the snippet above as:

```json
{
  "author": {
    "name": "Oluwatobi Sofela",
    "email": "oluwatobiss@codesweetly.com",
    "url": "https://www.codesweetly.com"
  }
}
```

Note that the `"email"` and `"url"` properties are optional.

#### dependencies

The `"dependencies"` field lists all the packages a project depends on in production.

**Here's an example:**

```json
{
  "dependencies": {
    "first-package": "^1.0.4",
    "second-package": "~2.1.3"
  }
}
```

So, whenever a user installs your project from the NPM registry, the dependencies property ensures package managers can automatically find and install the packages listed.

Note that you can add a package to the `"dependencies"` field through either of the following ways:

- Manually add the name and the [semantic version](https://docs.npmjs.com/about-semantic-versioning) of each package your project depends on in production.
- Run the `npm install package-name --save-prod` command on your terminal. Or `yarn add package-name` if Yarn is your package manager.

#### devDependencies

The `"devDependencies"` field lists all the packages a project does not need in production—but requires for its local development and testing purposes.

**Here's an example:**

```json
{
  "devDependencies": {
    "first-dev-package": "^5.8.1",
    "second-dev-package": "3.2.2—4.0.0"
  }
}
```

Note that the packages listed in the `"devDependencies"` field will be available in the project's development environment but not on its production server.

Suppose a user installs the project through the `npm install` (or `yarn add`) command. In such a case, the package manager will find and download all the listed `devDependencies` to the project's `node_modules` directory.

Keep in mind that you can add a package to the `"devDependencies"` field through either of the following ways:

- Manually add the name and the semantic version of each package on which your project depends for its development and testing purposes.
- Run the `npm install package-name --save-dev` command on your terminal. Or `yarn add package-name --dev` if Yarn is your package manager.

#### homepage

The `"homepage"` field specifies the URL to your project's homepage.

**Here's an example:**

```json
{
  "homepage": "https://codesweetly.com/package-json-file-explained"
}
```

So, now that we know what a `package.json` file is, we can discuss `package-lock.json`.

## What Is a `package-lock.json` File?

The **package-lock.json** file is a [document](https://www.codesweetly.com/document-vs-data-vs-code/#h-what-is-a-document) NPM uses to record the exact version of all the packages you've installed locally to your project's `node_modules` directory.

A `package-lock.json` file makes an app 100% reproducible in the exact way you published it to the NPM registry.

So, suppose a user clones your app and runs the `npm install` command. In such a case, `package-lock.json` ensures that the user downloads the exact version of the packages you used to develop the application.

For instance, let's say a user cloned your app containing _no_ `package-lock.json` file, and a dependency used in the app has a newer version.

Suppose the dependency's version number in the `package.json` file has a caret sign (for example, `^2.6.2`). In that case, NPM will install the latest minor version of the dependency—which might cause the app to produce erroneous results.

However, suppose the user cloned your app containing a `package-lock.json` file. In that case, NPM will install the exact version of the dependency as recorded in the `package-lock.json` file—regardless of whether a newer version exists.

Therefore, users will always get your app the precise way you published it to the NPM registry.

In other words, NPM uses the `package-lock.json` file to lock your package's dependencies to the specific version numbers you used for the project's development.

**Note:** NPM will update the packages recorded in the `package-lock.json` file whenever you run the `npm update` command.

## What Is a `yarn.lock` File?

The `yarn.lock` file is a document Yarn uses to record the exact version of all the packages you've installed locally to your project's `node_modules` directory.

The `yarn.lock` file is comparable to NPM's [package-lock.json](#what-is-a-package-lock-json-file) lockfile.

We earlier mentioned that your package manager does not execute an installed package—you must explicitly do so yourself. Let's discuss how.

## How to Run an Executable Package

There are several ways to run an executable package. Below are the standard techniques.

### Manually locate and execute the package

One way to run an executable package is to type its local path on your command line like so:

```bash
./node_modules/.bin/package-name
```

### Add the package to the package.json's `scripts` field

An alternate way to execute a package is to first add it to the `"scripts"` field of your project's package.json file like this:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "desired-name": "name-of-package-to-execute"
  }
}
```

Afterward, you can run the package like so:

```bash
npm run desired-name
```

Note that the command above is shorthand for `npm run-script desired-name`.

Alternatively, you can execute the package with Yarn like so:

```bash
yarn run desired-name
```

**Here's an example:**

```json
{
  "name": "codesweetly-app",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
  }
}
```

The snippet above added [webpack](https://www.codesweetly.com/javascript-module-bundler/) to your `package.json`'s `"scripts"` field. So, we can now execute `webpack` on the command line like this:

```bash
npm run build
```

Or, if your package manager is Yarn, you can run webpack like this:

```bash
yarn run build
```

### Use NPX

A faster way to run an executable package is to use NPX like so:

```bash
npx package-name
```

With NPX, you no longer need to add your package to the `"scripts"` field of your project's `package.json` file.

NPX (Node Package Execute) is a [Node package runner](https://nodejs.dev/learn/the-npx-nodejs-package-runner) that automatically finds and executes a specified package.

**Here's an example:**

```bash
npx webpack
```

The command above will automatically find and execute [webpack](https://www.codesweetly.com/javascript-module-bundler/). So, we do not need to add the `"build": "webpack"` property to the `"scripts"` field of our `package.json` file.

**Note:** NPX automatically gets installed when you install Node 8.2/NPM 5.2.0 or higher.

You can also run some code using your preferred Node.js version. Let's find out how.

## How to Run Code Using Your Preferred Node.js Version

You can use the `@` character and the [node npm package](https://www.npmjs.com/package/node) to specify the Node.js version you wish to use to execute your code.

**Here's an example:**

```bash
npx node@7 index.js
```

The snippet above tells NPX to run `index.js` with the latest version of Node from version 7 major.

Using the `node@` command is a helpful way to avoid using Node.js version management tools like [nvm](https://github.com/nvm-sh/nvm) to switch between Node versions.

Suppose you wish to confirm the Node version NPX will use to run your code. In that case, run:

```bash
npx node@7 -v
```

The snippet above will display the latest Node version from version 7 major that NPX will use to run your code—for example, `v7.10.1`.

## How to Check for Outdated Local Packages

To determine if any of your project's packages are outdated, run:

```bash
npm outdated
```

If the command outputs nothing, it means all your project's packages are up to date.

Otherwise, see this [npm-outdated article](https://docs.npmjs.com/cli/v6/commands/npm-outdated) for a detailed explanation of the command's output.

Alternatively, you can use Yarn like so:

```bash
yarn outdated
```

**Note:** To check a specific package's outdated status, add the package's name after the `outdated` keyword—for example, `npm outdated lodash`.

## How to Check for Outdated Global Packages

To confirm which global package is outdated, run:

```bash
npm outdated -g --depth=0
```

## How to Check for Locally Installed Packages

Here are three ways to check for locally installed packages:

### Locally installed packages and their dependencies

```bash
npm list
```

Or use Yarn like so:

```bash
yarn list
```

### Locally installed packages—without their dependencies

```bash
npm list --depth=0
```

Or,

```bash
yarn list --depth=0
```

### Check if a specific package got installed locally

```bash
npm list package-name
```

## How to Check for Globally Installed Packages

Here are three ways to check for globally installed packages:

### Globally installed packages and their dependencies

```bash
npm list -g
```

Or use Yarn like so:

```bash
yarn list -g
```

### Globally installed packages—without their dependencies

```bash
npm list -g --depth=0
```

Or,

```bash
yarn list -g --depth=0
```

### Check if a specific package got installed globally

```bash
npm list -g package-name
```

## How to Update Packages

Here's how to update packages with NPM and Yarn:

### How to update a specific package to its latest version

```bash
npm update package-name
```

Or, for projects managed with Yarn, run:

```bash
yarn upgrade package-name
```

### How to update all of a project's locally installed packages

```bash
npm update
```

Or,

```bash
yarn upgrade
```

### How to update a specific globally installed package

You can update a globally installed package like this:

```bash
npm update package-name -g
```

### How to update all your system's globally installed packages

```bash
npm update -g
```

## How to Uninstall Packages

Here's how to uninstall packages with NPM and Yarn:

### How to uninstall a package from a specific project

First, navigate to the project's [root directory](https://www.codesweetly.com/web-tech-glossary/#h-root-directory) from the command line and run:

```bash
npm uninstall package-name
```

**Note:**

- Add the `-S` (or `--save`) flag to remove references to the package in the `dependencies` field of the project's `package.json` file.
- Add the `-D` (or `--save-dev`) flag to remove references to the package in the `devDependencies` field of the project's `package.json` file.

For projects managed with Yarn, run:

```bash
yarn remove package-name
```

**Note:** The `yarn remove` command will automatically update the project's `package.json` and `yarn.lock` files.

### How to uninstall a global package

```bash
npm uninstall package-name -g
```

Note that it is best practice not to remove packages manually from the `node_modules` folder as such action can affect other _modules_ depending on it.

But what exactly is a module in NodeJS? Let's find out below.

## What Exactly Is a Module in NodeJS?

A **module** in NodeJS is any file in the `node_modules` folder that the computer can load through Node's `require()` function.

**Here's an example:**

```js
const myModule = require("./codesweetly.js");
```

Suppose the computer successfully used the `require()` function to load the `codesweetly.js` file. In such a case, it means `codesweetly.js` is a module—assigned to the `myModule` variable.

Keep in mind that a module may also be a package—but not always.

A module is _not_ a package if it does _not_ have a `package.json` file used to record information about it.

Also, note that for a module to be loadable by the `require()` function, the module must be one of the following:

- A package—whose `package.json` file contains a `"main"` field.
- A JavaScript file.

## How to Publish Your Project to the NPM Registry

NPM is a free registry for [public package authors](https://www.npmjs.com/products).

So, you can use it to publish any project (folder) from your computer that has a `package.json` file.

Below are the steps required to share your package with the world.

### Step 1: Sign in or sign up

Go to the [NPM website](https://www.npmjs.com/) and sign in (or sign up if you do not yet have an account).

**Note:** make sure that you verify your email after creating a new account. Otherwise, you will get a `403 Forbidden` error while publishing your package.

### Step 2: Log in

Login to your NPM account from the command line like so:

```bash
npm login
```

**Note:** You can use the `npm whoami` command to check if you are currently logged in.

### Step 3: Publish your package

Go to your project's root directory and publish it like so:

```bash
npm publish
```

Make sure that your package's name does not currently exist on NPM. Otherwise, you will get an error while publishing.

You can use the `npm search` command (or the [NPM website](https://www.npmjs.com/)'s search bar) to search if the name you wish to use already exists on NPM.

Suppose all the suitable names for your package are already taken. In that case, NPM allows you to publish your project as a scope.

In other words, you can publish your package as a sub-section of your username. Let's see how below.

### How to publish your package as a scope of your username

Open your `package.json` file and prefix your package's name with your username.

**Here's an example:**

```json
{
  "name": "@username/package-name",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

NPM's default setting assumes that a scoped name package is a private project. So, you will get an error if you use the `npm publish` command to share a scoped name package.

Therefore, to publish your package as a scope of your username, add the `--access=public` flag to the `npm publish` command:

```bash
npm publish --access=public
```

**Note:** You can make your project a scoped package during the initialization process by using the `npm init --scope=username` command instead of `npm init`.

## Overview

This article discussed what a package manager is. We also looked at how two popular package managers (NPM and Yarn) work.

Thanks for reading!

### **And here's a useful ReactJS resource:**

I wrote a book about React!

- It's beginners friendly ✔
- It has live code snippets ✔
- It contains scalable projects ✔
- It has plenty of easy-to-grasp examples ✔

The [React Explained Clearly](https://amzn.to/30iVPIG) book is all you need to understand ReactJS.

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://amzn.to/30iVPIG)
