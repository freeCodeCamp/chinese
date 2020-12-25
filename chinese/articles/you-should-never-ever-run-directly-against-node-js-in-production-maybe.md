> -   原文地址：[You should never ever run directly against Node.js in production. Maybe.](https://www.freecodecamp.org/news/you-should-never-ever-run-directly-against-node-js-in-production-maybe-7fdfaed51ec6/)
> -   原文作者：[Burke Holland](https://www.freecodecamp.org/news/author/burkeholland/)
> -   译者：samwangdd
> -   校对者：

![You should never ever run directly against Node.js in production. Maybe.](https://cdn-media-1.freecodecamp.org/images/1*Lh8JaRfiqPj9bTrd8a3xgQ.png)

我经常会怀疑自己是否一无所知。

就在几周前，我跟一个朋友聊天时，他随口提到：“在生产环境里，你绝对不要直接在 Node 上运行程序。”我点头如捣蒜，表示我也不会这样做，因为...哈哈哈，你懂的。但实际上我并不知道真正的原因！我早该知道吗？我还可以编程吗？

如果把我知道的和我觉得其他人都知道的画一个韦恩图，它大概长这样：

![](https://cdn-media-1.freecodecamp.org/images/1*ThJbM2JMjrnTuHczo0tLqw.png)

而且，随着我年龄的增长，那个点会越来越小。

[Alicia Liu][1] 则画出了更加贴切的图表，它改变了我的生活。她说它更像这样...

![](https://cdn-media-1.freecodecamp.org/images/1*N7vv39ri9yC0l6krsSFlQA.png)

我非常欣赏这个图表，因为我期望它是真的。我不想看到我花费余生精力，仍只是个无关紧要的小蓝点。

如此戏精。责怪潘多拉。当我在写这篇文章的时候不能控制接下来会写到什么，但是 [Dashboard Confessional][2] 是一种毒药。

好吧，假如 Alicia 的图表是正确的，我想与你分享我所知道关于在生产环境运行 Node 应用的知识。也许我们相对的韦恩图在这个问题上并不重复。

首先，让我们解决“在生产环境里，你绝对不要直接在 Node 上运行程序”这一说法。

#### 在生产环境里，你绝对不要直接在 Node 上运行程序

可能。但也可能不是。我们来谈谈这一说法背后的原因。首先，让我们看看为什么不要。

假设我们有一个简单的 Express 服务。我能想到的最简单的Express 服务...... 

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 在 http://localhost:3000 中查看
app.get('/', function (req, res) {
    res.send('我再次被忽略');
});
```

我们要在 `package.json` 文件中通过一个启动脚本来运行

```plain
"scripts": {
  "dev": "npx supervisor index.js",
  "start": "node index.js"
}
```

![](https://cdn-media-1.freecodecamp.org/images/1*VceC98Qk5zKqzBmiu1szDQ.png)

There are sort of two problems here. The first is a development problem and the second is a production problem.
这里存在两个问题。第一是开发问题，第二是生产问题。

The development problem is that when we change the code, we have to stop and start the application to get our changes picked up.
开发环境问题是每当我们修改了代码，我们不得不暂停程序再重新启动应用，才能获得我们的更改。

To solve that, we usually use some sort of Node process manager like . These packages will watch our project and restart our server whenever we make changes. I usually do that like this……
为了解决这个问题，我们通常使用某种 Node 进程管理工具，比如：`supervisor`  `nodemon`。这些工具将会监听我们的项目，每当我们有任何改变都会重启我们的服务。我通常这样使用......

```plain
"scripts": {  "dev": "npx supervisor index.js",  "start": "node index.js"}
```

Then I run `npm run dev`. Note that I’m running `npx supervisor` here which allows me to use the `supervisor` package without having to install it. I ❤️ 2019. Mostly.

Our other problem is that we’re still running directly against Node and we already said that was bad and now we’re about to find out why.

I’m going to add another route here that attempts to read a file from disk that does not exist. This is an error that could easily show up in any real-world application.

```js
const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
// viewed at http://localhost:3000
app.get('/', function (req, res) {
    res.send('Again I Go Unnoticed');
});
app.get('/read', function (req, res) {
    // this does not exist
    fs.createReadStream('my-self-esteem.txt');
});
```

If we run this directly against Node with `npm start` and navigate to the `read` endpoint, we get an error because that file doesn’t exist.

![](https://cdn-media-1.freecodecamp.org/images/1*pAUoJV-LRJwxs7MRegnuoA.png)

Which — no big deal right? It’s one error. It happens.

NO. Big deal. If you go back to your terminal you will see that the application is completely down.

![](https://cdn-media-1.freecodecamp.org/images/1*69LuEt53W2isIXP34vUlYA.png)

Which means if you go back to the browser and try to go to the root URL of the site, you get the same error page. One error in one method took the application down for **everyone**.

That’s bad. Like really bad. This is one of the main reasons why people say **“never run directly against Node in production”**.

OK. So if we can’t run against Node in production, what is the right way to run Node in production?

#### Options for production Node

We’ve got a few options.

One of them would be to simply use something like `supervisor` or `nodemon` in production the same way we are using them in dev. That would work, but these tools are a little on the lightweight side. A better option is something called pm2.

#### pm2 the rescue

pm2 is a Node process manager that has lots of bells and whistles. Just like everything else “JavaScript”, you install it (globally) from `npm` — or you can just use `npx` again. I don’t want to tell you how to live your life.

There are a lot of ways to run your app with pm2. The simplest way is to just call `pm2 start` on your entry point.

```plain
"scripts": {
  "start": "pm2 start index.js",
  "dev": "npx supervisor index.js"
},
```

And you’ll see something like this in the terminal……

![](https://cdn-media-1.freecodecamp.org/images/1*uvsnmQahRBHtnh0X7tt_xA.png)

That’s our process running in the background monitored by pm2. If you visit the `read`endpoint and crash the application, pm2 will automatically restart it. You won’t see any of that in the terminal because it’s running in the background. If you want to watch pm2 do its thing, you gotta run `pm2 log 0`. The `0` is the ID of the process we want to see logs for.

![](https://cdn-media-1.freecodecamp.org/images/1*AbR1eyySpr2IllYtA4wE-Q.png)

There we go! You can see pm2 restart the application when it goes down because of our unhandled error.

We can also pull out our dev command and have pm2 watch files for us and restart on any changes.

```plain
"scripts": {
  "start": "pm2 start index.js --watch",
  "dev": "npx supervisor index.js"
},
```

Note that because pm2 runs things in the background, you can’t just `ctrl+c` your way out of a running pm2 process. You have to stop it by passing the ID or the name.

`pm2 stop 0`

`pm2 stop index`

Also, note that pm2 retains a reference to the process so you can restart it.

![](https://cdn-media-1.freecodecamp.org/images/1*Z4yLru6TmwUVQv84DkZDAQ.png)

If you want to delete that process reference, you need to run `pm2 delete`. You can stop and delete a process in one command with `delete`.

`pm2 delete index`

We can also use pm2 to run multiple processes of our application. pm2 will automatically balance the load across those instances.

#### Multiple processes with pm2 fork mode

pm2 has a ton of configuration options and those are contained in an “ecosystem” file. To create one, run `pm2 init`. You’ll get something like this……

```js
module.exports = {
    apps: [
        {
            name: 'Express App',
            script: 'index.js',
            instances: 4,
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
```

I’m going to ignore the “deploy” section in this article because I have no idea what it does.

The “apps” section is where you define the apps you want pm2 to run and monitor. You can run more than one. A lot of these configuration settings are probably self-explanatory. The one that I want to focus on here is the **instances** setting.

pm2 can run multiple instances of your application. You can pass in a number of instances that you want to run and pm2 will spin up that many. So if we wanted to run 4 instances, we could have the following configuration file.

```js
module.exports = {
    apps: [
        {
            name: 'Express App',
            script: 'index.js',
            instances: 4,
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
```

Then we just run it with `pm2 start`.

![](https://cdn-media-1.freecodecamp.org/images/1*_rYp7NMQTCMmOfBV0w0RTw.png)

pm2 is now running in “cluster” mode. Each of these processes is running on a different CPU on my machine, depending on how many cores I have. If we wanted to run a process for each core without knowing how many cores we have, we can just pass the `max`parameter to the `instances` value.

```plain
{
   ...
   instances: "max",
   ...
}
```

Let’s find out how many cores I’ve got in this machine.

![](https://cdn-media-1.freecodecamp.org/images/1*nhjuG0xFsMgkYB382_xfyw.png)

8 CORES! Holy crap. I’m gonna install Subnautica on my Microsoft issued machine. Don’t tell them I said that.

The good thing about running processes on separate CPU’s is that if you have a process that runs amok and takes up 100% of the CPU, the others will still function. If you pass in more instances than you have cores, pm2 will double up processes on CPU’s as necessary.

You can do a WHOLE lot more with pm2, including monitoring and otherwise wrangling those pesky [environment variables][5].

One other item of note: if for some reason you want pm2 to run your `npm start` script, you can do that by running npm as the process and passing the `-- start`. The space before the “start” is super important here.

```plain
pm2 start npm -- start
```

In [Azure AppService][6], we include pm2 by default in the background. If you want to use pm2 in Azure, you don’t need to include it in your `package.json` file. You can just add an ecosystem file and you’re good to go.

![](https://cdn-media-1.freecodecamp.org/images/1*TYOm2q57lXad3te35tGwqg.png)

OK! Now that we’ve learned all about pm2, let’s talk about why you may not want to use it and it might indeed be ok to run directly against Node.

#### Running directly against Node in production

I had some questions on this so I reached out to [Tierney Cyren][7] who is part of the enormous orange circle of knowledge, especially when it comes to Node.

Tierney pointed out a few drawbacks to using Node based process managers like pm2.

The main reason is that you shouldn’t use Node to monitor Node. You don’t want to use the thing that you are monitoring to monitor that thing. It’s kind of like you asking my teenage son to supervise himself on a Friday night: Will that end badly? It might, and it might not. But you’re about to find out the hard way.

Tierney recommends that you not have a Node process manager running your application at all. Instead, have something at a higher level which watches multiple separate instances of your application. For example, an ideal setup would be if you had a Kubernetes cluster with your app running on separate containers. Kubernetes can then monitor those containers and if any of them go down, it can bring them back and report on their health.

In this case, you **can** run directly against Node because you are monitoring at a higher level.

As it turns out, Azure is already doing this. If we don’t push a pm2 ecosystem file to Azure, it will start the application with our `package.json` file start script and we can run directly against Node.

```plain
"scripts": {
  "start": "node index.js"
}
```

In this case, we are running directly against Node and it’s OK. If the application were to crash, you’ll notice that it comes back. That’s because in Azure, your app runs in a container. Azure is orchestrating the container in which your app is running and knows when it faceplants.

![](https://cdn-media-1.freecodecamp.org/images/1*YSvtZOR4DIt1McSdDChVew.png)

But you still only have one instance here. It takes the container a second to come back online after it crashes meaning that there could be a few seconds of downtime for your users.

Ideally, you would want more than one container running. The solution to this would be to deploy multiple instances of your application to multiple Azure AppService sites and then use Azure Front Door to load balance the apps behind a single IP address. Front Door will know when a container is down and will route traffic to other healthy instances of your application.

[**Azure Front Door Service | Microsoft Azure**][8]  
[\_Deliver, protect and track the performance of your globally distributed microservice applications with Azure Front Door……\_azure.microsoft.com][9]

#### systemd

Another suggestion that Tierney had is to run Node with `systemd`. I don’t understand too much (or anything at all) about `systemd` and I’ve already messed this phrasing up once already, so I’ll let Tierney say it in his own words……

> This option is only possible if you have access to Linux in your deployment and you control the way that Node is started on a service level. If you’re running your Node.js process in a long-running Linux VM, like Azure VMs, you’re in a good place to run Node.js with systemd. If you are just deploying your files to a service like Azure AppService or Heroku or running inside of a containerized environment like Azure Container Instances, you should probably steer clear of this option.

[**Running Your Node.js App With Systemd - Part 1**][10]  
[\_You've written the next great application, in Node, and you are ready to unleash it upon the world. Which means you can……\_nodesource.com][11]

#### Node.js Worker Threads

Tierney also wants you to know that Worker Threads are coming in Node. This will allow you to start your app on multiple “workers” (threads) thusly negating the need for something like pm2. Maybe. I don’t know. I didn’t really read the article.

[**Node.js v11.14.0 Documentation**][12]  
[\_The worker_threads module enables the use of threads that execute JavaScript in parallel. To access it: const worker =……\_nodejs.org][13]

#### Be an Adult

Tierney’s last suggestion was to just handle the error and write some tests like an adult. But who has time for that?

#### The tiny circle abides

Now you know most of what is in the tiny blue circle. The rest is just useless facts about emo bands and beer.

For more information on pm2, Node and Azure, check out the following resources……

-   [http://pm2.keymetrics.io/][14]
-   [Node.js deployment on VS Code][15]
-   [Deploy a simple Node site to Azure][16]

[1]: https://medium.com/counter-intuition/overcoming-impostor-syndrome-bdae04e46ec5
[2]: https://www.youtube.com/watch?v=ixG3DgrPC3c
[3]: http://localhost:3000/
[4]: http://localhost:3000/
[5]: https://medium.freecodecamp.org/
[6]: https://docs.microsoft.com/en-us/azure/app-service/?WT.mc_id=medium-blog-buhollan
[7]: https://twitter.com/bitandbang
[8]: https://azure.microsoft.com/en-us/services/frontdoor/?WT.mc_id=medium-blog-buhollan
[9]: https://azure.microsoft.com/en-us/services/frontdoor/?WT.mc_id=medium-blog-buhollan
[10]: https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/
[11]: https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/
[12]: https://nodejs.org/api/worker_threads.html
[13]: https://nodejs.org/api/worker_threads.html
[14]: http://pm2.keymetrics.io/
[15]: https://code.visualstudio.com/tutorials/nodejs-deployment/getting-started?WT.mc_id=medium-blog-buhollan
[16]: https://azurecasts.com/2019/03/31/002-node-vscode/
