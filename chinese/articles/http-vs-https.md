> -  原文地址：[HTTP vs HTTPS – What's the Difference?](https://www.freecodecamp.org/news/http-vs-https/)
> -  原文作者：[Annoh Karlgusta](https://www.freecodecamp.org/news/author/annoh/)
> -  译者：Papaya HUANG
> -  校对者：

![HTTP vs HTTPS – What's the Difference?](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/HTTP-VS-HTTPS.png)

We interact with HTTP and HTTPS a lot in our day-to-day lives, but many people don't know the difference.

Most computer users just see that the browser is telling them their application is not safe and that a hacker might want to steal their important information. This leads to users running away faster than Usain Bolt's current record.

But this is avoidable. That is where HTTPS comes in and replaces HTTP. And we are going to discuss that today. :)

## Here's What We'll Cover:

1.  What is HTTP?
2.  How HTTP works
3.  Features of HTTP
4.  How to know if a site is not secure
5.  Are all HTTP websites insecure?
6.  What is HTTPS?
7.  How HTTPS works
8.  Features of HTTPS
9.  How encryption works
10.  How to know if a site is secure
11.  What is an SSL certificate?
12.  How does SSL work?
13.  How can I get SSL for my website?
14.  Where can I get an SSL certificate?
15.  Can I get an SSL certificate for free?
16.  The main differences between HTTPS and HTTP
17.  Conclusion

## What is HTTP?

Hyper Text Transfer Protocol, or HTTP, is a communication method between your browser and the site you want to visit (web server).

This allows you to get the information that you need from the server on your browser.

A good way to understand HTTP and HTTPS is by using an analogy. We know that browsers and servers communicate using HTTP. HTTP is usually in plain text. Many people around the world speak English. If a hacker who knows English hacks into your computer, they can easily see any password you input.

Here in Kenya, in my mother tongue, we speak Turkana. If you don't speak the language and you come to Kenya and find two Turkanas speaking, you may not understand what they are saying.

That's the beauty of HTTPS. It is encrypted so that the hacker hopefully doesn't understand the communication between the browser and the server.

![Client to server](https://user-images.githubusercontent.com/33565767/178446926-d904cc04-57cd-4427-bdcc-e76c35f8b51b.png "client/browser communicating with server")

If I was to go to [http://www.google.com](http://www.google.com), I would expect to see Google's default page.

![Googles default page](https://user-images.githubusercontent.com/33565767/178450768-e1fed4a5-993d-4d49-a47f-83cce6473085.png "Google's default page")

The client, which in most cases is the web browser, sends a message which in computer terms is a request. Then the server will give back an answer, which is the response.

HTTP is very useful in sending HTML documents as well as images and videos to the web browser for the user to see. It is also used to send data to the server in HTML forms.

![Where HTTP Protocol sits](https://user-images.githubusercontent.com/33565767/178460366-d0568e2d-d107-4afe-a778-0ce1d224b176.png "HTTP Protocol is between the web browser(client) and the web server, which is in constant communication with the server side script and the database.")

## How HTTP Works

HTTP sends data through plain text. For example, if you were to access your bank's web page and they are using HTTP, a hacker may be able to access it and read any information that you send.

This is where HTTPS comes in. Many companies have implemented HTTPS to be able to allow their users to send data securely. We'll discuss this further below.

## Features of HTTP

-   Plain text. Initially when HTTP was developed, developers had one thing in mind: to serve only text documents. Now, HTTP is used in more ways than it was initially intended.
    
-   Layer 7 protocol. HTTP is a layer 7 protocol in the OSI Model of networking. Layer 7 is the application layer. This layer is the top-most layer in the OSI model. The other layers include the physical, data link, network, transport, session, and presentation layer. To learn more about the OSI model, you can check out this free video on freeCodeCamp's YouTube channel by Brian Ferrill about how the internet works. There are more cookies in the jar other than the OSI model. [Computer Networking Course - Network Engineering \[CompTIA Network+ Exam Prep\]](https://www.youtube.com/watch?v=qiQR5rTSshw&t=27s&ab_channel=freeCodeCamp.org)
    
-   Insecure. When you send HTTP requests they are sent through plain text. Also, when you get a response, you get it through plain text. This means that anyone who can access the requests and the responses can read them.  
    ![Insecure connection](https://user-images.githubusercontent.com/33565767/179723161-3ec27c27-df79-4749-b810-974583cf1687.png "Insecure connection during a normal HTTP connection by the user")
    
-   Light weight. The advantage of HTTP is that it is very lightweight. It is therefore very fast since it doesn't do the encryption stuff to secure the data, like HTTPS does.
    
-   HTTP usually listens on port 80.
    

## How to Know if a Site is Not Secure

When a site is not secure, Chrome will usually send a warning that says `Your connection is not private`.  
![HTTP Not secure](https://user-images.githubusercontent.com/33565767/182329336-d405d5b4-f5bb-45df-b936-aa1d04b9dffd.png "Your connection is not secure when going to a site that is not secure")

On Chrome, the URL bar will usually show `Not Secure` in red if a site is not secure.  
![Not secure URL image](https://user-images.githubusercontent.com/33565767/182329466-d2db68a8-7033-4f64-bb66-0665e8fc0c62.png "URL of an insecure website")

## Are All HTTP Websites Insecure?

Well, let's look at an example. Imagine you are browsing a meme website, laughing at each one as you scroll by. If it is using HTTP, then you are off the hook. It's not a big deal.

You get bored and decide to go to your bank's site to access your account on your browser. If the site is not using HTTPS, you might as well be serving your account details to a hacker on a silver plate.

So the bottom line is, if you're browsing inconsequential information, HTTP is ok. But if you are dealing with insecure information, HTTP isn't enough.

## What is HTTPS?

Hyper Text Transfer Protocol Secure, or HTTPS, is a way that communication can happen SECURELY between your browser and the site you want to visit (web server).

## How HTTPS Works

HTTPS makes a secure connection by using a secure protocol that encrypts your data.

For most websites, the best way to have HTTPS is by getting an SSL (Secure Sockets Layer) Certificate or a TLS (Transport Layer Security) certificate.

At the moment, SSL has become advanced enough that it supports TLS. So you don't need to get a TLS certificate.

## Features of HTTPS

-   Encrypts data. Data encryption happens through the TLS/SSL protocol.
-   It is a layer 4 (Transport layer) protocol.
-   Key exchanges of public and private keys happen in HTTPS to encypt and decrypt data.
-   Compared to HTTP, is it heavier. When encrpytion and decryption happens in HTTPS, it becomes heavier.
-   HTTP listens on port 443.

## How Encryption Works

![How encryption works](https://user-images.githubusercontent.com/33565767/180215739-5e731309-eda1-4993-927c-c9daa400c3c5.png "I am a dev from the client text passing through an encyption")

Let's say I type "I am a dev". This text gets encrypted when I click send, and then it gets decrypted on the server side.

The same is also true from the server side. If I get a response from the server, it will first get encrypted, then it will get decrypted on the client side.

## How to Know if a Site is Secure

To know that a site is secure, you usually look at the URL bar where you can see a lock. If there is a lock, the connection from the client to the server is secure.

![Showing that the site is secure](https://user-images.githubusercontent.com/33565767/178449484-738fb908-901d-4a61-9f8f-fa5a39029012.png "A padlock that shows the site is secure on the URL")

When you click on the lock icon, it tells you more about the secure connection.

![Shows site is secure](https://user-images.githubusercontent.com/33565767/180213859-21460cfa-6a8c-484e-81e5-5dba4fc31f2a.png "The URL section with more details of a secure site")

## What is an SSL Certificate?

An SSL certificate is a little file that tells browsers that your website –for example, freecodecamp.org – is who it says it is, and that it is reliable.

In order to authenticate, the certificate is able to confirm to the client (user) that the server they are connecting to is the one that manages that domain. All this is to keep the user safe from security issues such as domain spoofing.

It contains a public key and tells you who the onwer of the website is that you are trying to connect to. If a website doesn't have an SSL certificate, it cannot be encrypted with TLS.

You can personally create your own SSL certificate (also known as a self-signed certificate), if you are the website owner. The problem with this approach is that browsers like Chrome don't trust these certificates. They prefer trusting certificates that are issued by a certificate authority.

## How Does SSL Encryption Work?

There are two types of SSL encryption, asymmetric and symmetric. The combination of asymmetric and symmetric is what makes SSL Encryption work. Let's look at them below to learn more.

### What is asymmetric encryption?

In Asymmetric encryption, you have two keys. These are:

1.  Public key.
2.  Private key.

![Asymmetric encryption](https://user-images.githubusercontent.com/33565767/181718454-847858dc-0df5-4bc5-bfaf-b6210c571d8f.png "Asymmetric (Public key) encryption")

The client/user/browser gives the public key to the server with which they are communicating. Then, the encyption happens with the help of the public key, and the decryption happens with the help of the server's private key.

The private key can only be found on that particular server. No one else has it. This shows you why asymmetric encryption is stronger and tougher to hack, because it has two different keys, the private and public key. The two keys work together to make sure the data is more secure.

This also tells you why the size of this encryption is 1024/2048 bits.

### What is symmetric encryption?

In symmetric encryption, it's very simple. You have one key, and that's it. The client uses one key for encryption, and the server uses the same key for decrypting the data.

Symmetric encryption is very light weight. The size is 128/256 bits. But it is a bit easier to hack into as compared to asymmetric. This doesn't mean it is not useful. When we use SSL, we combine Asymmetric and Symmetric to be able to make the communication safer and more secure.

![Symmetric encryption](https://user-images.githubusercontent.com/33565767/181720497-326e0dd9-5e0b-4bfb-b01a-2effec5ab9e0.png "How symmetric encryption works by using one key on the client side to encrypt and the same key on the server side to decrypt")

### How asymmetric + symmetric encryption work

The combination of both asymmetric and symmetric is now the double-sided wall.  
![Asymmetric and Symmetric](https://user-images.githubusercontent.com/33565767/182565306-224f199a-da88-4a68-be81-707636cc1069.png "How asymmetric and symmetric encryption work by client first sending a Hello to the server. The server then sends to the client, its public key and certificate in response. The client on step 3, sends a session key that is encrypted using the public key. On step 4, the server will decrypt the session key using the server's private key. Finally, step 5, the connection is established between the client and the server.")

In the first step, the server will send to the broswer the asymmetric public key. As we now know, the asymmetric key has both the public key and the private key. Therefore, the browser will receive the public key.

After this, the browser generates a session key.

Symmetric encryption uses only one single key for both the client and the server. So what will happen is, the browser will generate a local session key. This is a symmetric encryption session key. It will then encrypt it, with the use of the public key which is asymmetric, given in the first step. The locally generated session key will then be combined with the public key, and sent to the server.

The server will then use a private key to decrypt the encrypted session key it has received. In this particular step, the server will use asymmetric private key to decrypt the session key it has received.

Now, once the decryption has happened, the server and the browser will use the session key for communication. The session key will only be used for that specific session.

Let's say you close your browser, and maybe sign in the next day – everything starts all over again. Session keys get created again.

## How Can I Get SSL for My Website?

If you are a website owner, you can acquire an SSL certificate from a certificate issuing authority.

You will then need to install the certificate on you web server where your website is hosted. Most of the time, the hosting company where you host your website handles this process for you.

## Where Can I Get an SSL Certificate?

There are organizations that issue security certificates. These organizations are called certificate authorities. Some of these certificate authorities include: DigiCert, Comodo, and many others.

Many developers get certificates from these organizations. Since they are the most widely used certificate issuers, browsers usually trust certificates from these organizations.

## Can I Get an SSL Certificate for Free?

Cloudflare offers SSL certificates for free. It is one of the first internet security companies to do so.

If you want to get one, you can [check it out here](https://www.cloudflare.com/ssl/).

## What is HTTPS Used For?

HTTPS helps a lot with security. Without it, passing sensitive information becomes a big challenge especially if your business requires a secure way of communication.

Sites that accept online payments like ecommerce sites typically require HTTPS. This is to avoid information such as credit card details and login information from being stolen (Source: [Tony Messer](https://www.entrepreneur.com/article/281633)).

## The Main Differences between HTTPS and HTTP

-   The encryption layer is enabled in HTTPS while there is no encryption layer in HTTP.
-   Your data is protected in HTTPS while in HTTP it is not.
-   Your ranking is boosted in Google when you use HTTPS while with HTTP, you don't get any ranking boost.
-   You are protected against phishing when you use HTTPS while there is not protection when using HTTP.
-   You are compliant with the regulations of the payment industry when you use HTTPS while HTTP is non-compliant.
-   Loading HTTPS in the first few seconds may be slower than loading HTTP.
-   Getting SSL certificates can cost money while there is no certification costs with HTTP.
-   While using HTTPS, you become buddies with Google Chrome. Google Chrome doesn't like HTTP and therefore you will always be getting unsecured site notifications.

## Conclusion

HTTP and HTTPS are very important in our day to day lives as developers. The communication between the browser and the server is what fuels much the work we do.

By protecting your users' data as much as you're able so their information doesn't get stolen, you'll gain their trust and provide a better user experience.

See you soon.
