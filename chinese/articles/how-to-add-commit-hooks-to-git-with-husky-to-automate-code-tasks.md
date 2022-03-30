> -  原文地址：[How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
> -  原文作者：[
                    
                        Colby Fayock
                    
                ](https://www.freecodecamp.org/news/author/colbyfayock/)
> -  译者：
> -  校对者：

![How to Add Commit Hooks to Git with Husky to Automate Code Tasks](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/husky.jpg)

There are a lot of tools to automate our code tasks. We can check for syntax issues with ESLint and format our code with Prettier.

But not everyone on the team will remember to run those commands every time they commit. How can we use Husky to add Git hooks to run them for us?

-   [What are Git Hooks?](#what-are-git-hooks)
-   [What is Husky?](#what-is-husky)
-   [What are we going to build?](#what-are-we-going-to-build)
-   [Step 0: Setting up a new project](#step-0-setting-up-a-new-project)
-   [Step 1: Installing Husky to a project](#step-1-installing-husky-to-a-project)
-   [Step 2: Configuring Husky to run Git hooks](#step-2-configuring-husky-to-run-git-hooks)
-   [Step 3: Using Husky to format code with Prettier](#step-3-using-husky-to-format-code-with-prettier)

## What are Git Hooks?

[Git hooks](https://git-scm.com/docs/githooks) are scripts that you can set up to [run at certain events](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) in the Git lifecycle. These events include different stages of a commit, like before a commit (pre-commit) and after a commit (post-commit).

These are useful in that they allow developers to run custom code tasks or even enforce standards by automating other scripts to run those tasks.

## What is Husky?

[Husky](https://github.com/typicode/husky) is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.

It works by including an object right within our `package.json` file that configures Husky to run the scripts we specify. After that, Husky handles managing at which point in the Git lifecycle our scripts will run.

## What are we going to build?

We’re going to set up a simple project that we can use to test out Git hooks.

While you should be able to follow along with any project that you’re working with, I’m going to use [Next.js](https://nextjs.org/) as the starting point for this project, simply for the fact that we can run a single command to get a project started.

One consideration about following along with this project, though, is that we’ll use [Prettier](https://prettier.io/) as an example of what you can do with Git hooks.

Prettier is a tool that will automatically format our code for us, which if you’re not expecting that to happen, can cause a lot of stress. Following along with me using the Next.js project will allow you to test this out without making any unintentional changes.

As for testing the Git hooks, we’ll start by adding a simple command line statement to see Husky work. But we’ll also test out adding Prettier, which will automatically format our code for us.

Finally, at the time of writing this, Husky released an [v5 Alpha](https://typicode.github.io/husky/#/) version of their Git hook solution. Given it’s still just an Alpha version, we’re going to move forward with [v4](https://github.com/typicode/husky/tree/v4.3.0), which allows us to easily install Husky with npm.

## Step 0: How to set up a new project

As I mentioned, you can really follow the same steps here with any project that’s managed with a `package.json` file.

Next.js is absolutely overkill for this walkthrough, but the goal is to minimize the steps for getting set up to actually work with Husky.

To get started with Next.js, navigate to the directory you want to start your project in and run the following:

```
yarn create next-app my-husky-project
# or
npx create-next-app my-husky-project
```

_Note: feel free to replace `my-husky-project` to whatever you’d like to name your directory._

This will create a new folder, create a new Next.js project, and install all the dependencies.

![create-next-app](https://www.freecodecamp.org/news/content/images/2020/10/create-next-app.jpg)

Once it’s done, navigate to that new folder, and we should be ready to go!

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/9e0b39c8f34c2755e074a32ef9de8d4047b68f67).

## Step 1: How to install Husky to a project

To install Husky, we can use yarn or npm.

```
yarn add husky
# or
npm install husky
```

_Note: if installing Husky at this point installs v5, that means v5 has been officially released. Please see the [updated Husky documentation](https://typicode.github.io/husky/#/) or you can install the latest v4 version by specifying husky@4.3.0 (or whatever the latest version is) when installing._

Once the package is finished installing, we should be ready to go with Husky.

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/720728cd595d41c9197640bd4c48e9133bd7d956).

## Step 2: How to configure Husky to run Git hooks

Next, we’re going to set up Husky so we can use it for our Git hooks.

Inside of our `package.json` file, create a new property called `husky` with an empty object.

```json
"husky": {},
```

You can add this really wherever you want in the `package.json` file, but I’m going to add it right below the `scripts`  property so I can more easily manage them together.

Inside of that, we want to add another property called `hooks` that also specifies an empty object:

```json
"husky": {
  "hooks": {}
},
```

This is where we’re going to add our Git hooks. Husky supports pretty much [all Git hooks defined by Git](https://git-scm.com/docs/githooks), so we can be as flexible we would like within our Git event flow.

To test this out, I created [a new branch](https://github.com/colbyfayock/my-husky-project/tree/main+test) where I literally added every Git hook from that page including a script that simply writes to the terminal `[Husky] event name`.

_Note: don’t feel like you need to do this unless you’re curious. The goal is to be able to show you with my example how it works._

```
“husky”: {
  “hooks”: {
    “applypatch-msg”: “echo \”[Husky] applypatch-msg\””,
    “pre-applypatch”: “echo \”[Husky] pre-applypatch\””,
    “post-applypatch”: “echo \”[Husky] post-applypatch\””,
    “pre-commit”: “echo \”[Husky] pre-commit\””,
```

What this will do is tell Husky that at every single stage where we’re permitted to hook into Git, tell us!

When I commit that change, we can immediately see that Husky fires off some of our scripts.

![husky-commit-hooks](https://www.freecodecamp.org/news/content/images/2020/10/husky-commit-hooks.jpg)

These are all of the events that Git allows us to hook into that happen during the commit process.

And similarly, if I push those changes out to Github, I can see that the push process runs the `pre-push` hook!

![husky-push-hooks](https://www.freecodecamp.org/news/content/images/2020/10/husky-push-hooks.jpg)

You may never use most of the hooks that Husky and Git provide (we only saw a few between those two commands).

But it’s awesome to be able to see how powerful this can be, whether it’s running code that formats our code, prevents secret access keys from being committed, or really anything else that can help automate important tasks to your workflow.

We can now see that we can configure Husky by specifying the configuration and the hooks right in our `package.json`.

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/108583a7e96564baf0fac994eafa6cf98d65d03e).

_Note: If you want to check out my branch that includes every Git hook to test with, [you can find it on Github](https://github.com/colbyfayock/my-husky-project/tree/main+test)._

## Step 3: How to use Husky to format code with Prettier

Finally, for a real-world use case, we’re going to test out using Prettier to automatically format our code.

Prettier is an opinionated code formatting tool that allows you to easily clean up your code to make it look like a single person wrote it.

Why are tools like Prettier important? When working through code, especially with a team, it’s important to maintain consistency so everyone knows what to expect. It will help prevent arguing over a semi-colon in a code review, but it will also help catch syntax errors and prevent bugs.

_Warning: running Prettier will automatically format all of your code. While we’re going to test this out before committing the changes, once you apply this as a Git Hook, it will automate this process._

To get started with Prettier, let’s install it with our package manager:

```
yarn add prettier -D
# or
npm install prettier --save-dev
```

_Note: we’re installing Prettier as a `devDependency` as our application doesn’t need this to run._

Next, we can add a new script in our `package.json` that will make it easier to run Prettier to test this out.

Inside the `scripts` property, add:

```json
"lint": "prettier --check ."
```

For this first test, we’re going to run it as a “check” which will allow us to see which files would change.

Run the following:

```
yarn lint
# or 
npm run lint
```

And once we do, we can see that Prettier is telling us that would change the files listed.

![prettier-check](https://www.freecodecamp.org/news/content/images/2020/10/prettier-check.jpg)

At this point, our code will remain unchanged. But if we want to run Prettier for real to make those changes, we can first add an additional script:

```json
"format": "prettier --write ."
```

And if we run that script, it will update all of those files to format the code to Prettier’s specification.

_Warning: just another note, running Prettier to write the changes will make changes in your files. These are all code-style changes that shouldn’t impact how the code runs, but how the code looks. Before running format, you should save any changes by committing with Git so that you can easily revert the changes if you’re not happy with them._

You can now run the script with:

```
yarn format
```

And we can see that Prettier updated our files!

![prettier-write](https://www.freecodecamp.org/news/content/images/2020/10/prettier-write.jpg)

Now the part that’s relevant to this walkthrough: we can add this as a Git hook. This way, when someone tries to commit code, Prettier is run before the code is saved. This means that we’ll always keep code consistent with Prettier’s formatting style.

Inside our Husky hooks configuration, let’s add:

```json
"husky": {
  "hooks": {
    "pre-commit": "prettier --write . && git add -A ."
  }
},
```

If you notice in our pre-commit hook, we’re also adding `git add -A .`.

When Husky runs, it simply runs the script provided. When running our Prettier command, we’re only formatting the code, but we never save those changes as part of the process. So we use `git add` to store all of those changes and include them in the commit.

To test this out, I reverted the changes to all of the files that were formatted before. If you’re following along with the same project, you can run:

```
git checkout pages
```

Which will reset all of the changes in `pages` to the last commit.

Now, let’s try to add all of our files with Git and commit the changes.

![git-commit-husky-precommit-prettier](https://www.freecodecamp.org/news/content/images/2020/10/git-commit-husky-precommit-prettier.jpg)

And once we run our commit command, we can see that the Husky pre-commit hook kicks in already and formats our code!

[Follow along with the commit](https://github.com/colbyfayock/my-husky-project/commit/315112d062a791f20eda11f9c608c5fa794ba73e).

## What can I do next?

### Use lint-staged to only run formatting on changed files

We’re using Prettier right in our pre-commit hook and specifying `.` which means it’s going to run on all files every time.

We can use a tool called [lint-staged](https://github.com/okonet/lint-staged), which allows us to still run our Git hooks with Husky, but it will only run on files that are staged.

For instance, if we wanted to do this with Husky and Prettier, our configuration might look like:

```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*": "prettier --write"
},
```

As part of how lint-staged runs, it will attach the changed files to the end of our Prettier statement automatically for us.

You’ll also notice we didn't include `git add`. lint-staged will also add any changes to Git for us automatically.

### Set up a Prettier config to customize formatting rules

Prettier is very opinionated. There are some things I personally don’t prefer and you might feel the same.

Luckily, Prettier allows you to set up a configuration file that can override some of those files to make your code just the way you and your team want it.

### Tell Prettier to ignore files with .prettierignore

You also probably don’t want Prettier running on “all the things” (maybe you do).

Prettier allows you to set up a `.prettierignore`  file right inside of the root of the project next to `package.json`, similar to `.gitignore`, that allows you to tell Prettier what files it should not run on.

 [![Follow me for more Javascript, UX, and other interesting things!](https://res.cloudinary.com/fay/image/upload/w_2000,h_400,c_fill,q_auto,f_auto/w_1020,c_fit,co_rgb:007079,g_north_west,x_635,y_70,l_text:Source%20Sans%20Pro_64_line_spacing_-10_bold:Colby%20Fayock/w_1020,c_fit,co_rgb:383f43,g_west,x_635,y_6,l_text:Source%20Sans%20Pro_44_line_spacing_0_normal:Follow%20me%20for%20more%20JavaScript%252c%20UX%252c%20and%20other%20interesting%20things!/w_1020,c_fit,co_rgb:007079,g_south_west,x_635,y_70,l_text:Source%20Sans%20Pro_40_line_spacing_-10_semibold:colbyfayock.com/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_68,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_145,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_222,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/w_300,c_fit,co_rgb:7c848a,g_north_west,x_1725,y_295,l_text:Source%20Sans%20Pro_40_line_spacing_-10_normal:colbyfayock/v1/social-footer-card)](https://twitter.com/colbyfayock) 

-   [? Follow Me On Twitter](https://twitter.com/colbyfayock)
-   [? Subscribe To My Youtube](https://youtube.com/colbyfayock)
-   [✉️ Sign Up For My Newsletter](https://www.colbyfayock.com/newsletter/)
-   [? Sponsor Me](https://github.com/sponsors/colbyfayock)