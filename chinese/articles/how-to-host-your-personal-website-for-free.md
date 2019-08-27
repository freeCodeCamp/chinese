> * 原文地址：[How To Host Your Personal Website for Free](https://medium.com/better-programming/how-to-host-your-personal-website-for-free-3101c4ab2e49)
> * 原文作者：[Joey Colon](https://medium.com/@joey_colon)
> * 译者：
> * 校对者：


# How To Host Your Personal Website for Free

## Through the magic of AWS S3 and Cloudflare

![img](https://miro.medium.com/max/1000/1*qpOIeHOF-U0XuODBODQLCQ.jpeg)

Picture from https://unsplash.com/@kevnbhagat

With the web rapidly evolving in the last five or so years, dev-op practices that used to be considered the standard are now obsolete.

To get a website online, the standard used to be to look at paid shared cPanel hosting services, such as NameCheap or GoDaddy. While shared hosting is still a valid solution for pushing your website to production, more intuitive solutions have surfaced. I’ll be explaining the approach that I took for deploying [my personal website](http://joey.dev/) where I effectively pay $0 per month to keep my website online.

## First things first — prerequisites:

You will need to have the static files (HTML/CSS/JS) to your website. This guide is only applicable to sites that utilize a static set of files.

You will also need a custom domain. Domains typically run around $15 a year on average, depending on the TLD extension you are looking at. It is definitely worth the investment for personal branding.

You will also need to have an account created on [Cloudflare](https://www.cloudflare.com/) and [Amazon Web Services](https://aws.amazon.com/). If you are not familiar with either of these services, that is OK — I will be explaining each step you need to take on both platforms. Let’s get started.

## Setting up AWS S3 bucket:

After signing into the AWS console, head over to the [S3 Management Console](https://console.aws.amazon.com/s3/home).

Go ahead and click the *Create Bucket* button. A modal will appear asking for details about the bucket you are creating.

![img](https://miro.medium.com/max/60/1*SQ-ze3rTSlM8M4FtHhm7vQ.png?q=20)

![img](https://miro.medium.com/max/1398/1*SQ-ze3rTSlM8M4FtHhm7vQ.png)

AWS S3 Management Console

For your *Bucket Name*, make sure you are entering exactly what your domain name is. For the example of this tutorial, I will be using the domain `**tutorial.joey.dev**`. For the region, I am picking what is geographically closest to me, *US East (N. Virginia)*. Feel free to pick what is closest to you as well. Click Next when you are ready to move on.

![img](https://miro.medium.com/max/60/1*8hN5P5cU0e2xR73btV3P0w.png?q=20)

![img](https://miro.medium.com/max/1093/1*8hN5P5cU0e2xR73btV3P0w.png)

AWS S3 Create Bucket — Step One

Once you are on step two, click Next. On step three, make sure you uncheck the *Block all public access* option, as well as the other checkboxes. We do not need to utilize S3 Log Delivery, so disable that option too. Click Next.

![img](https://miro.medium.com/max/60/1*6Dqwkgk5dUglp2fZAmZ94Q.png?q=20)

![img](https://miro.medium.com/max/1099/1*6Dqwkgk5dUglp2fZAmZ94Q.png)

AWS S3 Create Bucket — Step Three

On step four, go ahead and click the *Create bucket* button. After you have created the bucket, you should see the new bucket shown in the list of your buckets on the S3 Management Console page. Click your newly created bucket, and you should see something similar to this:

![img](https://miro.medium.com/max/60/1*DAws-OGBVHZrNKh0oAEZWQ.png?q=20)

![img](https://miro.medium.com/max/1251/1*DAws-OGBVHZrNKh0oAEZWQ.png)

AWS S3 — Newly Created S3 Bucket

Click the *Properties* tab near the top of the screen, and then *Static website hosting* on the first row of cards. Click the *Use this bucket to host a website*option. For the index document, go ahead and enter `index.html` and click save.

**Make sure you note down the endpoint they give you.**

![img](https://miro.medium.com/max/60/1*H_O_F82gTDOnmNjfYMYEag.png?q=20)

![img](https://miro.medium.com/max/1905/1*H_O_F82gTDOnmNjfYMYEag.png)

AWS S3 — Static website hosting configuration

Awesome! Now the last part of the AWS side is uploading your static site’s files to your new bucket. Click the *Overview* tab and then the *Upload* button. You will be greeted with the modal below. Go ahead and upload your site’s files.

![img](https://miro.medium.com/max/60/1*QZkDDVQGmYh6UaXNNnhP5w.png?q=20)

![img](https://miro.medium.com/max/1094/1*QZkDDVQGmYh6UaXNNnhP5w.png)

AWS S3 — Upload files step one

After selecting the files to upload, click the Next button. On step two, you will want to click the *Manage public permissions* dropdown and change it to the option *Grant public read access to this object(s)*. Click Next.

![img](https://miro.medium.com/max/60/1*k8j04DlNIT4XLZuCQVHFiQ.png?q=20)

![img](https://miro.medium.com/max/1095/1*k8j04DlNIT4XLZuCQVHFiQ.png)

AWS S3 — Upload files step two

From step three, ignore all the options and click the Next button. On step four, click the *Upload* button. After uploading, you should now be able to visit your website through the back end endpoint URL I told you to save.

Hooray! Let’s move on to setting up Cloudflare.

![img](https://miro.medium.com/max/60/1*TyrD5ejxnz0E0d2Sl201HQ.png?q=20)

![img](https://miro.medium.com/max/1272/1*TyrD5ejxnz0E0d2Sl201HQ.png)

AWS S3 Hosted website

## Setting up Cloudflare:

I am assuming that you are a first-time Cloudflare user and have not connected your site’s domain to Cloudflare’s services. From the Cloudflare dashboard, click the *Add a Site* button. Enter your website URL, and click Next. Click Next once more, and, when asked about a plan, select the Free plan and move on.

When you get to the DNS query results page, go ahead and delete all the records it has scanned. Your results should look similar to this:

![img](https://miro.medium.com/max/60/1*AOzFHjCSQ-6j12L84XHJ1A.png?q=20)

![img](https://miro.medium.com/max/1076/1*AOzFHjCSQ-6j12L84XHJ1A.png)

We want to add two different `**CNAME**` records.

For the first record, for *name*, enter `**www**`, and for *Domain name*, enter your domain name without http://. E.g. `**tutorial.joey.dev**`).

For the second record, for *name*, enter your domain name, and for *Domain name*, enter your back end S3 bucket endpoint we visited earlier in this tutorial. Make sure the orange cloud is enabled when adding these records.

![img](https://miro.medium.com/max/60/1*a1FiP8wLTfhBRkxi5iK-rQ.png?q=20)

![img](https://miro.medium.com/max/1074/1*a1FiP8wLTfhBRkxi5iK-rQ.png)

Cloudflare DNS records configuration

After you have confirmed that your records are set up correctly compared to my picture, click continue. You will now have to change your domain’s nameservers from your domain’s registrar to point to Cloudflare’s nameservers. You should reference your domain registrar’s knowledge base on a guide on how to change your nameservers, as every website is slightly different in terms of layout.

After changing your nameservers, you will need to set up a few page rules. Before that, let’s make sure the SSL certificate is on the correct setting. From the Cloudflare dashboard, click on the domain to be redirected to the domain dashboard. Click the *Crypto* tab and make sure your SSL is set to *Flexible*.

![img](https://miro.medium.com/max/60/1*lpTdVq6okXGcga07TeSNhQ.png?q=20)

![img](https://miro.medium.com/max/1196/1*lpTdVq6okXGcga07TeSNhQ.png)

Cloudflare SSL Configuration

The end is near! Click on the Page Rules tab. We will need to create two page rules to have all non-SSL traffic redirected to SSL. For this section, I will include the page rules I am using for my actual sites. If you are on a .dev domain, you will only need this page rule (this rule is required for all other domain TLD extensions as well):

![img](https://miro.medium.com/max/60/1*QT9LXp3wPcsrQap_4jb56w.png?q=20)

![img](https://miro.medium.com/max/797/1*QT9LXp3wPcsrQap_4jb56w.png)

Since .dev domains automatically redirect to SSL, the only case you need to take care of is the case when someone enters *www.domain.dev*. This rule combats that.

If you are not on a .dev domain, you will also have to include additional this page rule:

![img](https://miro.medium.com/max/60/1*ngy4I0l-fe5JGBzyESUH9w.png?q=20)

![img](https://miro.medium.com/max/793/1*ngy4I0l-fe5JGBzyESUH9w.png)

Visit your website using your custom domain. Ta-dah! You will be visiting an SSL enabled version of your site that is hosted on the cloud utilizing an AWS S3 Bucket.