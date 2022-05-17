> -  原文地址：[The Ultimate Node.js Production Checklist](https://www.freecodecamp.org/news/node-js-production-checklist/)
> -  原文作者：[
                    
                        Mehul Mohan
                    
                ](https://www.freecodecamp.org/news/author/mehulmpt/)
> -  译者：
> -  校对者：

![The Ultimate Node.js Production Checklist](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/screely-1585049597841.png)

Are you doing this Node thing right on production? Let's see some common mistakes people make running Node on production (coming straight from my own projects - like [codedamn](https://codedamn.com)) and how they can be mitigated.

You can use this as your checklist on production when you're deploying Node apps. Since this is a _production-ready-practices_ article, a lot of them won't apply when you're developing apps on your local system.

## Run node in cluster mode/separate node processes

Remember that Node is single threaded. It can delegate a lot of things (like HTTP requests and filesystem read/writes) to the OS which handles it in a multithreaded environment. But still, the code YOU write, the application logic, always runs in a single thread.

By running in a single thread, your Node process is always limited to only a single core on your machine. So if you have a server with multiple cores, you're wasting computation power running Node just once on your server.

What does "running Node just once" mean? You see, operating systems have a scheduler built into them which is responsible for how the execution of processes is distributed across the CPUs of the machine. When you run only 2 processes on a 2-core machine, the OS determines it is best to run both of the processes on separate cores to squeeze out maximum performance.

A similar thing needs to be done with Node. You have two options at this point:

1.  **Run Node in cluster mode -** Cluster mode is an architecture which comes baked into Node itself. In simple words, Node forks more processes of its own and distributes load through a single master process.
2.  **Run Node processes independently -** This option is slightly different from the above in the sense that you now do not have a master process controlling the child Node processes. This means that when you spawn different Node processes, they'll run completely independent of each other. No shared memory, no IPC, no communication, nada.

According to a [stackoverflow answer](https://stackoverflow.com/a/47122606/2513722), the latter (point 2) performs far better than the former (point 1) but is a little tricker to setup.

Why? Because in a Node app, not only is there application logic, but almost always when you're setting up servers in Node code you need to bind ports. And a single application codebase cannot bind the same port twice on the same OS.

This problem is, however, easily fixable. Environment variables, Docker containers, NGiNX frontend proxy, and so on are some of the solutions for this.

## Rate Limiting your endpoints

Let's face it. Not everybody in the world has best intentions for your architecture. Sure, attacks like DDoS are simply very complicated to mitigate, and even giants like GitHub go down when something like that happens.

But the least you can do is prevent a script-kiddie from taking down your server just because you have an expensive API endpoint exposed from your server without any rate-limiting in place.

If you use Express with Node, there are 2 beautiful packages which work seamlessly together to rate limit traffic on Layer 7:

1.  Express Rate Limit - [https://www.npmjs.com/package/express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
2.  Express Slow Down - [https://www.npmjs.com/package/express-slow-down](https://www.npmjs.com/package/express-slow-down)

Express Slow Down actually adds incremental delay to your requests instead of dropping them. This way legit users, if they DDoS by accident (super activity of clicking buttons here and there), are simply slowed down and are not rate limited.

On the other hand, if there's a script-kiddie running scripts to take down the server, Express rate limiter monitors and rate limits that particular user, depending on the user IP, user account, or anything else you want.

Rate limiting could (should!) be applied on Layer 4 as well (Layer 4 means blocking traffic before discovering the contents of it - HTTP) through IP address. If you want, you can setup an NGiNX rule which blocks traffic on layer 4 and rejects the flood of traffic coming from a single IP, thus saving your server processes from overwhelming.

## Use a frontend server for SSL termination

Node provides out of the box support for SSL handshakes with the browser using the `https` server module combined with the required SSL certs.

But let's be honest here, your application should not be concerned with SSL in the first place anyway. This is not something the application logic should do. Your Node code should only be responsible for what happens with the request, not the pre-processing and post-processing of data coming in and out of your server.

SSL termination refers to converting traffic from HTTPS to HTTP. And there are much better tools available than Node for that. I recommend NGiNX or HAProxy for it. Both have free versions available which get the job done and offload SSL termination from Node.

## Use a frontend server for static file serving

Again, instead of using built in methods like `express.static` to serve static files, use frontend reverse proxy servers like NGiNX to serve static files from disk.

First of all, NGiNX can do that faster than Node (because it is built from scratch down to do only that). But it also offloads file serving from a single-threaded Node process which could use its clock cycles on something better.

Not only this – frontend proxy servers like NGiNX can also help you deliver content faster using GZIP compression. You can also set expiry headers, cache data, and much more, which is not something we should expect Node to do (however, Node can still do it).

## Configure error handling

Proper error handling can save you from hours of debugging and trying to reproduce difficult bugs. On server, it is especially easy to setup architecture for error handling because you're the one running it. I recommend tools like [Sentry](https://sentry.io) with Node which records, reports, and emails you whenever the server crashes due to an error in the source code.

Once that is in place, now it is time to restart the server when it crashes so the whole site doesn't just go down for hours until you manually take it up again.

For this, you can use a process manager like [PM2](https://www.npmjs.com/package/pm2). Or even better, use a dockerized container environment with policies like `restart: always` with proper memory and disk limits setup.

Docker setup ensures that even if your container runs in OME, the process spins up again (which might not happen on a PM2 environment, as the OS might kill PM2 if there's a memory leak somewhere in a running process).

## Configure logs properly

All the answers lie in logs. Server hacks, server crashes, suspicious user behavior, etc. For that, you have to make sure that:

1.  Each and every request attempt is logged with the IP address/method of request/path accessed, basically as much information as you can log (except for private information like passwords and credit card information, of course)
2.  This can be achieved through the [morgan](https://www.npmjs.com/package/morgan) package
3.  Setup **file stream logs** on production instead of console output. This is faster, easier to see and allows you to export logs to online log viewing services.
4.  Not all log messages have equal weight. Some logs are just there for debugging, while if some are present, it might indicate a pants-on-fire situation (like a server hack or unauthorized access). Use winston-logger for logging different levels of logs.
5.  Setup **log rotation** so that you don't get a log size in GBs after a month or so, when you see the server.
6.  **GZIP** your log files after rotation. Text is cheap, and is highly compressible and easy to store. You should never face problem with text logs as long as they are compressed and you're running a server with a decent disk space (25GB+).

## Conclusion

It is easy to take note of a few practices in production which could save you tears and hours of debugging later on. Make sure you follow these best practices and let me know what you think by saying Hi on my [twitter handle](https://twitter.com/mehulmpt).

If you liked this article, let's meet on social media. Here's my [Instagram](https://instagram.com/mehulmpt) and [Twitter](https://twitter.com/mehulmpt). I'm super active, and would love to have a chat! Let's connect.

Peace!  
Mehul