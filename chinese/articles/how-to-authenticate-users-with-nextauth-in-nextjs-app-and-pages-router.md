> -  原文地址：[How to Authenticate Users in Next.js With NextAuth – App Router VS Pages Router](https://www.freecodecamp.org/news/how-to-authenticate-users-with-nextauth-in-nextjs-app-and-pages-router/)
> -  原文作者：[Njoku Samson Ebere](https://www.freecodecamp.org/news/author/ebereplenty/)
> -  译者：
> -  校对者：

![How to Authenticate Users in Next.js With NextAuth – App Router VS Pages Router](https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/pexels-isaque-pereira-394377--1-.jpg)

Authentication is a key security feature of any application. But it can be complex to implement properly.

This tutorial will show you an easy and secure way to handle authentication in your apps. It involves allowing trusted organizations (such as Google, Facebook, Github, and so on) to authenticate your users while you focus on building important features in your app.

You will learn how to do this using [Nextjs](https://nextjs.org/) and [NextAuth](https://next-auth.js.org/) step by step.

You should find this article helpful if you're new to NextAuth. But if you already know how to set up authentication with the Nextjs Page router and you're still trying to transition to the Nextjs App router, then this is for you, too.

[Here's a video I made](https://www.youtube.com/embed/pEAthPOxZd0) that you can use to supplement what you learn here.

## Prerequisites

You need to know the basics of Next.js and Prisma to benefit from this tutorial.

You can catch up on the official [Nextjs](https://nextjs.org/) and [Prisma](https://www.prisma.io/) documentation.

## What is NextAuth?

[NextAuth](https://next-auth.js.org/) is an open-source authentication solution for [Nextjs](https://nextjs.org/) applications. It is gradually being developed to provide solutions for every framework or library on the web. You can find more details on the [Authjs website](https://authjs.dev/).

You can think about NextAuth as an intermediary between your application and established authentication systems. So instead of re-inventing the wheel, you can add this solution to yours and keep building your application.

The cool thing about this tool is that you do not have to pay money to use it. Just pay attention. :)

## How to Setup the Project

NexthAuth gives you access to many organizations called [providers](https://next-auth.js.org/providers/). These organizations provide some credentials for you to use their authentication system.

This tutorial will cover three of them: Google, GitHub, and Email.

So you'll need to access credentials for each of these providers and bootstrap a boilerplate for Nextjs.

### How to Get Google Credentials

You can follow the steps below to get your Google `Client ID` and `Client Secret`.

Log in to [Google Console](https://console.cloud.google.com/):

![Google Console Home](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687211827437_Screenshot+2023-06-19+at+22.55.52.png)

Click on the menu icon by the top-left corner. Select `API & Services` and then choose `Credentials`.

![API & Services and Credentials drop-down](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687212097541_Screenshot+2023-06-19+at+22.57.35.png)

The screen below comes up. Click on `Create Project`:

![Credentials page](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687212437467_Screenshot+2023-06-19+at+23.03.12.png)

The page that follows is the form below:

![New Project form](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687212907725_Screenshot+2023-06-19+at+23.08.08.png)

Enter the name of your application and click `Create`. You will be redirected to the `Credentials` page:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213197204_Screenshot+2023-06-19+at+23.19.35](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213197204_Screenshot+2023-06-19+at+23.19.35.png)

Click on the `Create Credentials` button and select the `OAuth client ID` option:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213453758_Screenshot+2023-06-19+at+23.20.37](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213453758_Screenshot+2023-06-19+at+23.20.37.png)

You have to configure your consent screen to create an `OAuth client ID`. Click on the `Configure Consent Screen` button to do this:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213975354_Screenshot+2023-06-19+at+23.24.45](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687213975354_Screenshot+2023-06-19+at+23.24.45.png)

Set the `User Type` to `external` and click `Create`:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214119338_Screenshot+2023-06-19+at+23.33.51](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214119338_Screenshot+2023-06-19+at+23.33.51.png)

Next, enter a name, support email, and contact email:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214349378_Screenshot+2023-06-19+at+23.37.02](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214349378_Screenshot+2023-06-19+at+23.37.02.png)

Scroll to the bottom of the page and click `Save and Continue`.

The Scopes page now appears. Click `Save and Continue`. Then click `Save and Continue` on the `Tests Users` page. You will be directed to the `Summary` page. Review your information and click `Back To Dashboard`.

Now try to Create an OAuth client ID, and you should come to the following page:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214911510_Screenshot+2023-06-19+at+23.47.13](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687214911510_Screenshot+2023-06-19+at+23.47.13.png)

Select the `Web application` option because that is what suits this tutorial

Enter a name for the app:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687215239689_Screenshot+2023-06-19+at+23.52.03](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687215239689_Screenshot+2023-06-19+at+23.52.03.png)

Add a URI to the `Authorized JavaScript origins`. Use `http://localhost:3000`. This is the landing page of your application. You will add more URIs as you move to production.

Add `http://localhost:3000/api/auth/callback/google` as one of the `Authorized redirect URIs`. This is where users will be directed to complete their login with Google.

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687215921609_Screenshot+2023-06-20+at+00.03.25](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687215921609_Screenshot+2023-06-20+at+00.03.25.png)

Click `Create`, and that will produce the `Client ID` and `Client Secret` like in the image below:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687216263525_Screenshot+2023-06-20+at+00.07.31](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687216263525_Screenshot+2023-06-20+at+00.07.31.png)

Copy them or download the JSON file. You will need them soon.

### How to Get GitHub Credentials

The directions below will guide you to get your GitHub `Client ID` and `Client Secret`.

Login to your [Github](https://github.com/) dashboard and click on the profile image at the top-right-hand corner.

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687779963670_Screenshot+2023-06-26+at+12.42.49](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687779963670_Screenshot+2023-06-26+at+12.42.49.png)

Select `Settings` in the drop-down menu:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687780111055_Screenshot+2023-06-26+at+12.45.10](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687780111055_Screenshot+2023-06-26+at+12.45.10.png)

In the page that follows, scroll down and select `Developer Settings`:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687780839002_Screenshot+2023-06-26+at+12.49.08](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687780839002_Screenshot+2023-06-26+at+12.49.08.png)

Click on `OAuth Apps` on the next page and choose to `Register a New Application`:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687781085633_Screenshot+2023-06-26+at+13.01.09](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687781085633_Screenshot+2023-06-26+at+13.01.09.png)

Fill out the form that you see on the page that follows:

-   Application name - `auth app`
-   Homepage URL - `http://localhost:3000/`
-   Authorization callback URL - `http://localhost:3000/api/auth`

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687795316847_Screenshot+2023-06-26+at+17.01.35](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687795316847_Screenshot+2023-06-26+at+17.01.35.png)

Click on the `Register Application` button. A new page appears with the `GITHUB_ID` and `GITHUB_SECRET`:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687796314704_Screenshot+2023-06-26+at+17.05.21](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687796314704_Screenshot+2023-06-26+at+17.05.21.png)

Click on `Generate a new client secret` to see the `GITHUB_SECRET`.

### How to Get Email Credentials

You can use any email vendor that provides SMTP services. This tutorial will use Gmail. You can check out Mailgun, SendGrid, and others.

You will need the following details:

-   EMAIL\_SERVER\_HOST
-   EMAIL\_SERVER\_PORT
-   EMAIL\_SERVER\_USER
-   EMAIL\_SERVER\_PASSWORD
-   EMAIL\_FROM

The following steps will lead you to your `EMAIL_SERVER_PASSWORD`:

Log in to your [Gmail](https://mail.google.com/mail/u/3/#inbox) account.  
Click on your profile image. It will drop down a menu.

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901339179_Screenshot+2023-06-27+at+22.01.43](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901339179_Screenshot+2023-06-27+at+22.01.43.png)

Click on the `Manage your Google Account` button. You will be redirected to the page below:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687900621088_Screenshot+2023-06-27+at+22.15.15](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687900621088_Screenshot+2023-06-27+at+22.15.15.png)

Click on `Security` on the side menu. The following page will appear.

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687900801137_Screenshot+2023-06-27+at+22.18.37](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687900801137_Screenshot+2023-06-27+at+22.18.37.png)

You will need to set up 2-Step Verification for this process to work. If you have yours done already, click on it.

It will require your password, after which you will be redirected to the following page:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901149393_Screenshot+2023-06-27+at+22.22.15](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901149393_Screenshot+2023-06-27+at+22.22.15.png)

Scroll to the bottom and click on `App passwords`, as in the image above.  
The page that shows will look like the image below:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901526239_Screenshot+2023-06-27+at+22.29.52](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901526239_Screenshot+2023-06-27+at+22.29.52.png)

Select an `App` and a `device` from the drop-down and click on the `Generate` button:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901737092_Screenshot+2023-06-27+at+22.34.53](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687901737092_Screenshot+2023-06-27+at+22.34.53.png)

That will now generate a 16-digit text like this:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687902422543_Screenshot+2023-06-27+at+22.42.22](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687902422543_Screenshot+2023-06-27+at+22.42.22.png)

Your Email credentials will be as follows:

-   EMAIL\_SERVER\_HOST="smtp.gmail.com"
-   EMAIL\_SERVER\_PORT=465
-   EMAIL\_SERVER\_USER="<your\_email\_address>". An example is “eberenjoku@gmail.com”
-   EMAIL\_SERVER\_PASSWORD="<the\_password\_you\_just\_generated\_with\_no\_spaces>"
-   EMAIL\_FROM="<the\_email\_address\_you\_want\_recipient\_to\_see\_as\_the\_sender>". This email doesn’t have to be in existence.

### How to Bootstrap a Next.js Project

You will create 2 Next.js boilerplates. One will use the `page router`, while the other will work with the `app router`.

#### Page Router

Run the following command to create a Next.js project:

```cmd
    npx create-next-app@latest
```

You will get multiple prompts. Your answers should be as follows:

```javascript
    What is your project named? page_router_tutorial
    Would you like to use TypeScript with this project? No
    Would you like to use ESLint with this project? No
    Would you like to use Tailwind CSS with this project? No
    Would you like to use `src/` directory with this project? No
    Use App Router (recommended)? No
    Would you like to customize the default import alias? No
```

You will now have a project created with a `pages` directory like this:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687907082697_Screenshot+2023-06-28+at+00.02.05](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687907082697_Screenshot+2023-06-28+at+00.02.05.png)

#### App Router

Run the following command to create a Next.js project:

```cmd
    npx create-next-app@latest
```

You will get multiple prompts. Your answers should be as follows:

```javascript
    What is your project named? app_router_tutorial
    Would you like to use TypeScript with this project? No
    Would you like to use ESLint with this project? No
    Would you like to use Tailwind CSS with this project? No
    Would you like to use `src/` directory with this project? No
    Use App Router (recommended)? Yes
    Would you like to customize the default import alias? No
```

You will now have a project created with an `app` directory like this:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687907117476_Screenshot+2023-06-28+at+00.02.00](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687907117476_Screenshot+2023-06-28+at+00.02.00.png)

Everything is now set. You will now begin creating the authentication application.

## How to Setup Prisma and NextAuth on the Page and App Router

This section will focus on processes that didn’t change with the release of Next.js 13. So everything you will do in this section will be applied to both the `page_router_tutorial` and `app_router_tutorial` projects.

You will do the following:

-   Install Dependencies
-   Create and migrate a database model
-   Add the credentials that you got in the previous segment to a file

### How to Install Dependencies

The command below will install all the modules for the project:

```cmd
    npm i next-auth prisma nodemailer faunadb @next-auth/prisma-adapter
```

It adds NextAuth, Prisma, Node Mailer, Fauna DB, and Prisma Adapter modules to the project.

### How to Create and Migrate a Database Model

A database model defines how tables in the database communicate with each other. You will create that in this part.

Begin by running the following command:

```cmd
    npx prisma init
```

It creates a `Prisma` directory with a file inside called `schema.prisma` and a `.env` file in the project’s root folder. The file will contain your model definition.

Currently, the file content looks like this:

```javascript
    // This is your Prisma schema file,
    // learn more about it in the docs: https://pris.ly/d/prisma-schema
    
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
```

This tutorial will use the Postgres database as indicated in the code above. The `.env` file has the `DATABASE_URL` that you need to replace with your own. Do not forget to do that to avoid bugs later in the project.

Add the code below to the `schema.prisma` file:

```javascript
    model Account {
      id                 String  @id @default(cuid())
      userId             String
      type               String
      provider           String
      providerAccountId  String
      refresh_token      String? @db.Text
      access_token       String? @db.Text
      expires_at         Int?
      token_type         String?
      scope              String?
      id_token           String? @db.Text
      session_state      String?
      oauth_token_secret String?
      oauth_token        String?
    
      user User @relation(fields: [userId], references: [id], onDelete: Cascade)
    
      @@unique([provider, providerAccountId])
    }
    
    model Session {
      id           String   @id @default(cuid())
      sessionToken String   @unique
      userId       String
      expires      DateTime
      user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
    }
    
    model User {
      id            String    @id @default(cuid())
      name          String?
      email         String?   @unique
      emailVerified DateTime?
      image         String?
      accounts      Account[]
      sessions      Session[]
    }
    
    model VerificationToken {
      identifier String
      token      String   @unique
      expires    DateTime
    
      @@unique([identifier, token])
    }
```

This defines four (4) tables: `Account`, `User`, `Session`, and `VerificationToken`. The model shows that a `user` can have multiple accounts, and each `account` may be logged into many places (`sessions`). The `VerificationToken` table is for verifying a user.

It is now time to create the tables in the database. Run the command below to make it happen:

```cmd
    npx prisma migrate dev
```

You can then check your database dashboard for the new tables.

You can manage your database from the browser using Prisma by executing the command below:

```cmd
    npx prisma studio
```

### How to Add Credentials to the .env File

The .env file will hold all the details of your providers and other items. These are the credentials:

-   EMAIL\_SERVER\_USER
    
-   EMAIL\_SERVER\_PASSWORD
    
-   EMAIL\_SERVER\_HOST
    
-   EMAIL\_SERVER\_PORT
    
-   EMAIL\_FROM
    
-   GITHUB\_ID
    
-   GITHUB\_SECRET
    
-   GOOGLE\_CLIENT\_ID
    
-   GOOGLE\_CLIENT\_SECRET
    

Aside from these that you already know, you need two more:

-   NEXTAUTH\_SECRET
-   NEXTAUTH\_URL

`NEXTAUTH_SECRET` can be anything you choose. However, you want something hard to predict. Run the following command to get a very random string:

```cmd
    openssl rand -base64 32
```

Use the output as the `NEXTAUTH_SECRET`.

`NEXTAUTH_URL` is the base URL of your project. Since the project is still in development, the `NEXTAUTH_URL` is `http://localhost:3000`.

Here is what your `.env` file should look like this:

```javascript
DATABASE_URL="postgres://postgres:IcuI4cu.31904145.@db.tbwiajqcroukpykndvft.supabase.co:5432/postgres"
    
    EMAIL_SERVER_HOST="smtp.gmail.com"
    EMAIL_SERVER_PORT=465
    EMAIL_SERVER_USER="tsendgrid7@gmail.com"
    EMAIL_SERVER_PASSWORD="cnbpfzfrjnxvfgcv"
    EMAIL_FROM="no-reply@tsendgrid7.com"
    
    GOOGLE_CLIENT_ID="196506336558-lh9qhavsi224v00n7q6ggn1f6cur9epr.apps.googleusercontent.com"
    GOOGLE_CLIENT_SECRET="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"
    
    GITHUB_ID="11a8144f2897384cfedf"
    GITHUB_SECRET="6599042d48110bbda9fcd1ec6ede61f4320adc9d"
    
    NEXTAUTH_SECRET="YegyDIZNJPqxOkGS4K0F/o9l3SjCxCUR4Q/45rGyOtA="
    NEXTAUTH_URL="http://localhost:3000"
```

That concludes what is the same process for both projects. The following section will now focus on the `page_router_tutorial` directory.

## How to Create Authentication with the Next.js Page Router

Now I'll go through what you need to do in the `page_router_tutorial` folder. Follow the steps below:

Make a folder called `auth` in the `pages/api/` directory. Create a file in the `pages/api/auth` directory and name it `[...nextauth].js`.

Import `PrismaAdapter`, `PrismaClient`, and `NextAuth`:

```javascript
    import { PrismaAdapter } from '@next-auth/prisma-adapter';
    import { PrismaClient } from '@prisma/client';
    import NextAuth from "next-auth";
```

Also, import the providers like this:

```javascript
    import EmailProvider from "next-auth/providers/email";
    import GitHubProvider from "next-auth/providers/github";
    import GoogleProvider from "next-auth/providers/google";
```

Instantiate the `PrismaClient` and export NextAuth as default. Use the code below:

```javascript
    const prisma = new PrismaClient();
    
    export default NextAuth();
```

This code will automatically create and handle the API routes for authentication.

Next, export a `NextAuth` function and add the adapter to it like this:

```javascript
    export default NextAuth({
      providers: [...],
      adapter: PrismaAdapter(prisma),
    });
```

The `providers` key is an array of functions, where each one is the provider that you want to add to your project. You are to add three of them, so your code should look like this:

```javascript
    import { PrismaAdapter } from "@next-auth/prisma-adapter";
    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    export default NextAuth({
      providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
          server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD,
            },
          },
          from: process.env.EMAIL_FROM,
        }),
      ],
      adapter: PrismaAdapter(prisma),
    });
```

That is all you need to create an authentication application using Next.js and NextAuth.

Start the local server by running the following command:

```cmd
    npm run dev
```

Navigate to [http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin), and you will be on this page:

![s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687943428651_Screenshot+2023-06-28+at+10.04.56](https://paper-attachments.dropboxusercontent.com/s_D592C23061BDAFBA9E611AEDC8048F685A5679FCF2C57746CD5AE80A3DAD15B0_1687943428651_Screenshot+2023-06-28+at+10.04.56.png)

Voilà...Surprise! Surprise! Surprise!

You didn’t create any UI, so where did this UI come from?

Now that is the beauty of NextAuth. It creates endpoints and an accompanying UI for each provider. You don’t have to sweat it, but you can use your UI.

### How to Test the Page Router Authentication

The following videos demonstrate how the authentication app you built works:

-   [Google Provider](https://www.youtube.com/embed/0HSFAH04px4)
-   [GitHub Provider](https://www.youtube.com/embed/OS0oQeXaNDw)
-   [Email Provider - Magic Link](https://www.youtube.com/embed/mP47WwRiCd0)
-   [Signout](https://youtu.be/MnTutPYO6NU)

NextAuth also provides a signout functionality. Navigate to [http://localhost:3000/api/auth/signout](http://localhost:3000/api/auth/signout).

Click on the `Signout` button that shows when the page is done loading:

In this section, you learned how to build a Next.js authentication application using the `pages` routing pattern. You can find the code for this segment on GitHub: [https://github.com/EBEREGIT/nextjs-nextauth-tut/tree/main/page\_router\_tutorial](https://github.com/EBEREGIT/nextjs-nextauth-tut/tree/main/page_router_tutorial).

But Next.js version 13 was released a while ago and has gotten stable. It comes with the app routing pattern, and Next.js developers are advised to embrace it since the `pages` router may become deprecated soon.

You'll see how to set up Next.js authentication using the `app` routing pattern in the next segment.

## How to Implement Authentication with the Next.js App Router

This section will show a slightly different and maybe effortless way to implement authentication with the `app` router.

You will now turn your attention to the `app_router_tutorial` folder.

Do not forget to set up Prisma and NextAuth as you did in the previous section for the `page_router_tutorial` project.

Now, do the following:

Create an `api` folder in the `app`  directory.

Make a folder called `auth` in the `app/api/` directory.

Make a folder called `[...nextauth]` in the `app/api/auth` directory

Create a file in the `[...nextauth]` folder called `route.js`. This is in line with [Nextjs 13 Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) directive.

In the file, import `PrismaAdapter`, `PrismaClient`, `NextAuth`, and the providers like this:

```javascript
    import { PrismaAdapter } from '@next-auth/prisma-adapter';
    import { PrismaClient } from '@prisma/client';
    import NextAuth from "next-auth";
    
    import EmailProvider from "next-auth/providers/email";
    import GitHubProvider from "next-auth/providers/github";
    import GoogleProvider from "next-auth/providers/google";
```

Instantiate the `PrismaClient`:

```javascript
    const prisma = new PrismaClient();
```

Create a `handler` function to run the `NextAuth` configurations with the code below:

```javascript
    const handler = NextAuth(...);
```

Pass the providers and adapter as one argument into the `NextAuth` method. Type the following code:

```javascript
    const handler = NextAuth({
      providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
          server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD,
            },
          },
          from: process.env.EMAIL_FROM,
        }),
      ],
      adapter: PrismaAdapter(prisma),
    });
```

Finally, export the handler with the following line of code:

```javascript
    export { handler as GET, handler as POST };
```

That is all you need for the authentication to work with the `app` router.

You will have the same interface as in the previous section if you navigate to [http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin).

The code for this section is on GitHub: [https://github.com/EBEREGIT/nextjs-nextauth-tut/tree/main/app\_router\_tutorial](https://github.com/EBEREGIT/nextjs-nextauth-tut/tree/main/app_router_tutorial).

### How to Test the App Router Authentication

Testing the `app` router authentication follows the same procedure as in the `page` router.

## Conclusion

Implementing authentication can be difficult. But with these helpful tools, it can only get better. This tutorial aimed to teach how to implement authentication using NextAuth both in the Next.js `pages` and `app` router.

You saw how to set up Prisma and NextAuth in any Next.js project. You also learned the difference between Next.js `pages` and `app` routing patterns and how to implement the NextAuth authentication logic.

This tutorial just scratched the surface, but it gives you an angle to start building personal projects. Please check out the documentation below to keep learning.

-   [React](https://react.dev/)
-   [Next](https://nextjs.org/)
-   [faunadb](https://fauna.com/)
-   [NextAuth](https://next-auth.js.org/)
-   [Prisma](https://www.prisma.io/)
-   [Postgres](https://www.postgresql.org/)

All the code for this tutorial is one GitHub: [https://github.com/EBEREGIT/nextjs-nextauth-tut](https://github.com/EBEREGIT/nextjs-nextauth-tut). Please leave a star 😊.