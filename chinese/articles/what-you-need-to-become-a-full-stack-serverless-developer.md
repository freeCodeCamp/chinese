> * 原文地址：[What you need to know to become a full-stack serverless developer](https://www.freecodecamp.org/news/what-you-need-to-become-a-full-stack-serverless-developer/)
> * 原文作者：Sam Williams
> * 译者：
> * 校对者：

The are the 4 areas of development you need to know to call yourself a full-stack developer
Becoming a full-stack developer is the goal of a lot of developers. Being able to create a complete software product, getting to understand how the whole system works, and the very nice wage increase (Over £5,500**) are all reasons people want to level up their skills and become a full-stack developer.

The issue is that learning all of the skills you need can take a lot of time. We’ll cover the 4 areas of development that you need to know, and discuss the best ways that you can learn them.

Front End /Website Hosting
Whenever you build any sort of application, it needs to have a front end. This is what your users will see and how they interact with your product.

This is often the first serverless skill that developers gain, often without realising it. This is often through GitHub pages or a hosting service.

Whilst these services are great for quick and simple project hosting, you will need something more robust for larger and more technical serverless web hosting.

What you’ll need to be able to do
To be able to host the files required for a front end application.
To be able to serve these files on a given URL at scale
Point a registered domain name at these files
How to do this with Serverless?
Host the files on Amazon S3 (file storage system)
Create a CloudFront distribution to serve the files at scale
Use Route 53 to register a domain name and point it at the Cloudfront Distribution
Why Serverless is the best way to do this
S3, CloudFront and Route 53 all scale so you don’t have to work out (guess) how many visitors your site will get

You don’t need to set up or maintain the servers
You don’t need to set up DNS, nameservers or anything else to get the site up on your URL. Route 53 handles all of this.
Create an API
Every app needs APIs so that the front end can interact with the back end (databases, storage, email, etc.) which is where most of the power of a full-stack app comes from.

What you’ll need to be able to do
To be able to create restful API endpoints
To be able to access your databases
To be able to access other services (Storage, SMS, email, other APIs)
Protect your endpoints with API keys
How to do this?
Use API Gateway to build the API endpoints
Create Lambda functions to execute your logic and access other services (database access, SMS, email, etc.)
Create API keys that provide access to your API endpoints
Why Serverless is the best way to do this
Each endpoint is an isolated function, so if one breaks it doesn’t crash the others
You have very easy access to the rest of the serverless services through the aws-sdk, reducing code and speeding up development
You can easily create, limit and remove API keys to make sure that the right people are able to invoke your API endpoints.
Databases
All full-stack services need a way to store data about users, products, and everything else. This might be in a relational or non-relational database but you need to store the data somewhere organised.

What you’ll need to be able to do
Create a scalable non-relational or relational database
Access this database
How to do this?
Create a DynamoDB (non-relational) or Aurora (relational) database
Access your tables within your API Lambdas using the built-in tools within the AWS SDK
Why Serverless is the best way to do this
Your tables automatically scale and have built-in redundancy, removing the need to manage and sync multiple copies of databases
You can easily access the databases with the AWS SDK without having to expose it to the outside world.
Deployment and Maintainance
Once you’ve designed and built all of your systems, you need to deploy them into a production environment, maintain and upgrade them.

What you’ll need to be able to do
Deploy all of the resources we’ve talked about so far
Provide version-controlled configuration for all of the resources
Maintain and update the software and hardware that your systems are running on
How to do this?
Create the resources using the Serverless framework
Why Serverless is the best way to do this
When you create your serverless.yml file, you define all of the resources that you need to get your application running
This serverless.yml file can be version controlled to track changes over time
You can deploy your whole architecture in minutes with a single command
All of the underlying software and hardware is maintained, updated and upgraded by your service provider (AWS) so you don’t need to worry about it
If you’ve liked this article and want to start learning how you can become a full-stack developer, I have a free 3 part video course on how to build and deploy your own serverless API.
