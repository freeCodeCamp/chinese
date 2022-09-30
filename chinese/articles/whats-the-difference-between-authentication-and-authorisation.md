> -  原文地址：[Authentication vs Authorization – What's the Difference?](https://www.freecodecamp.org/news/whats-the-difference-between-authentication-and-authorisation/)
> -  原文作者：[Grant Weatherston](https://www.freecodecamp.org/news/author/gweaths/)
> -  译者：
> -  校对者：

![Authentication vs Authorization – What's the Difference?](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/Background1.jpg)

When you're starting out in web development, you'll likely hear the terms authentication and authorization all the time. And it doesn't help that they're both usually abbreviated 'auth', so it's very easy to get the two confused.

In this article, you will learn:

-   The differences between authentication and authorization
-   How each of these processes work
-   Examples of authorization and authentication in everyday life.

‌‌‌‌Ok, let's get started.

## What is Authentication?

Authentication is the the process of **verifying** the credentials a user provides with those stored in a system to **prove** the user is who they say they are. If the credentials match, then you grant access. If not, you deny it.

### Methods of Authentication

#### Single Factor authentication:

This is often used as the authentication process for lower risk systems. You only need a single factor to authenticate, with the most common being a password, so it's more vulnerable to phishing attacks and key loggers.

In addition to this, a recent [article](https://dataprot.net/statistics/password-statistics/) by DataProt showed that  78% of Gen-Z people utilize the same password for multiple services. This means that if an attacker gained access to one user account, they have a high probability of gaining access to others by simply using the same password.

#### 2-Factor Authentication:

This method is more secure, as it comprises two factors of authentication – typically something you know, for example username and password , plus something you have / own, for example a phone SMS or a security token.

For 2-factor authentication, you would enter a one-time SMS password sent to your device, or perhaps a linked authenticator app code and provide an ever-changing access code.

As you can imagine, this is a lot more secure than simply entering a password, or a single authentication credential. You would need to know the login credentials, as well as have access to the physical device for the second part.

2-factor authentication has become very common amongst online services in recent years, and with many large companies it is the default authentication method. Many require that you setup 2-factor auth in order to even utilize the service.

#### Multi-Factor Authentication:

Going one step further to make your authentication process even more secure is having 3 or more factors. This form of authentication usually works on the premise of:

-   something you know (username + password or a username + security question and answer)
-   something you have (mobile phone sms, authenticator app, USB key)
-   something you are (like a fingerprint / face recognition)

For these reasons, multi-factor authentication offers the most protection, as you would need to compromise multiple factors, and these factors are a lot more difficult to "hack" or replicate.  
  
The downside to this method of authentication, and the reason it's not utilized in many average systems, is it can be cumbersome to setup and maintain. So the data / system you're protecting really has to justify the need for such security.

## So, How Much Information Do You Need to Authenticate?

This question comes up at many security architecture meetings, and the answer is "_it depends_".

It is not unusual for companies to combine various authentication methods to increase security based on the nature of application.

For example, take a banking app. It contains very sensitive information, and could have a huge financial and reputational impacts should it be obtained by the wrong person. The bank may combine personal questions to be answered, along with a customer number and complex password.

On the other hand, for a social media site, you might only require a username and password, which is then checked and verified before allowing access.

![Auth_Process-1](https://www.freecodecamp.org/news/content/images/2022/09/Auth_Process-1.png)

It's all about the level of risk involved and what information someone can access once they're in the application. This helps determine the level of authentication you need.

If you or your team underestimates the level of authentication your app needs, you could be prosecuted for not securing the data within your system adequately. So companies employee security specialists to advise on best practices and appropriate solutions.

## How Does Authentication Work in the Real World?

Let's take an example of a social media account. You choose your favorite social media site (which is hosted on a server). The server will ask you to provide credentials to access the site via a sign in page. Here you would type in your username and password that you used when creating the account.

![server-process-2](https://www.freecodecamp.org/news/content/images/2022/09/server-process-2.png)

Image showing the authentication process

These details are then sent to the server, and the authentication process begins. The details you provided are verified and checked in the server's database, and if they match the details on record you are authenticated. Then you're provided with a form of identification data, for example a cookie or Json Web Token (JWT token).

Success! You have accessed the site and are given entry.

You can learn more about JWT tokens in another FreeCodeCamp article by Beau Carnes [here](https://www.freecodecamp.org/news/what-are-json-web-tokens-jwt-auth-tutorial/).

Next, let's look at authorization.

## What is Authorization?

Authorization, is the process of verifying that you're **allowed** to access an area of an application or perform specific actions, based on certain criteria and conditions put in place by the application. You may also hear it called access control or privilege control.

Authorization can either grant or deny permission to carry out tasks, or access areas of an application.

Let's look at an example:

We've gained access to the social media site, but what we're allowed to do there depends on what we're authorized to to do.

If we try to access someone's profile that we're not friends with (they've not accepted our connection request), we're not **authorized** to view their profile. This means that we are denied permission to view their shared posts.

![Basic Authorisation Process](https://www.freecodecamp.org/news/content/images/2022/09/auth-process2-1.png)

Image of authorization flow

### How to Implement Authorization

There are many ways you can implement authorization depending on the frameworks you are using.

Within the .NET framework, for example, you could use role-based access control, or claims-based access control.

Role-based access control is centered around the ideology that each user within your system is assigned a role. These roles have predefined permissions associated with them. Being granted a role means that user will automatically inherit all these permissions. The roles are assigned at time of user creation and setup.

The endpoint or site simply then checks if the current logged-in user has the role of Admin when attempting to access the admin area.

The downside to this approach is that sometimes users are granted too many permissions that they don't need or shouldn't have.

For example, giving a user the role of `Admin` may mean they would have been given`Advanced Create`, `Edit`, `Delete`, and `View` user privileges. Whereas, you may want to only give them `View` and `Basic Create` permissions.

Claims-based access control can allow for finer tuning of a specific user's permissions. The application can either check that the claim simply exists on a user, or whether a particular value is assigned to the claim.

As an example, a claim called `CreateUser` could be given to a user, and this is checked when creating a user. Or you could assign a value of `Advanced` to the same claim, and then have different actions and user interface available depending whether the value was `Advanced` or `Basic`.

## What's the Difference between Authentication and Authorization?

So now that we have a better understanding of the terms, let's look at a scenario you may be familiar with that involves both processes.

At a dinner party with an exclusive guest list, each guest is given a nickname and a secret password.

Upon arrival, a security guard asks you for your nickname and secret password. They then **authenticate** your credentials against the list they have. If your credentials match, you are handed an envelope showing you've been allowed in.

Once inside you are allowed to access the party and public areas of the venue as these require no **authorization** _(_everyone has the permission to enjoy the party). However, you then want to visit the VIP area.

As you approach, another security personnel asks to open your envelope (your permissions and roles). They take a look but unfortunately you do not have the VIP role, and therefore are not **authorized** to access.‌‌‌‌Put as simply as possible, authentication verifies the identity of a user or service allowing access, whereas authorization determines what they can do once they're in.

## Why Should You Implement Both Authentication and Authorization?

As you can see, although authentication and authorization are very different, each plays an integral part in the security and integrity of the application or system.

These processes go hand in hand, and without one the other is kind of meaningless. If you can gain access to the Admin area, but do whatever you want once in there, it could lead to big problems.

On the other hand, you can't authorize individuals without knowing who they are! Which is why authentication always comes before authorization.

## Closing Thoughts

I hope this has been insightful and you now have a clearer understanding of the differences between Authorization and Authentication, and how to use them.

Remember:

-   Authenticate =  Verifies the identity of a user or process.
-   Authorize = Determines if the user / system has permission to use a resource or carry out an action.

Feel free to get in touch via Twitter if you wish to discuss this article in more detail [@gweaths](http://twitter.com/gweaths).