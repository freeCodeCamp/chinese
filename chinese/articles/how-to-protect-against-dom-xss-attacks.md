> -  原文地址：[What is XSS? How to Protect Your Website from DOM Cross-Site Scripting Attacks](https://www.freecodecamp.org/news/how-to-protect-against-dom-xss-attacks/)
> -  原文作者：[Andrej Kovacevic](https://www.freecodecamp.org/news/author/andrej/)
> -  译者：Papaya HUANG
> -  校对者：

![What is XSS? How to Protect Your Website from DOM Cross-Site Scripting Attacks](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/xss-code-case.jpg)

**Website security issues** and vulnerabilities are a global problem as cyber security vulnerabilities are increasing. We have seen a major rise in the average number of these cases in the past few years, and 2021 saw an all-time high.

So in this tutorial, we are going to talk about DOM XSS cross-site scripting security issues and what impact they can have on your data. Make sure you read till the end. Let's begin by brushing up on some basics about DOM XSS cross-site script security.

## What is Cross-Site Scripting?

Cross-site scripting, also called XSS, is a [website security issue](https://www.wix.com/blog/2022/01/website-security/) that compromises user information and data when those people use a vulnerable application. The attacker can use this to circumvent the origin policy, which separates two websites from one another.

Attackers may use XSS to pretend to be a user, perform actions that a user would, and gain access to the user’s information. This can also allow the attackers to gain full access to the user’s information if they have permissions and privileges. It can also take over the complete actions and performance of the website if this continues.

To help you better understand these types of attacks, we are going to discuss some fundamentals of how XSS operates and what it does.

## How Does XSS Work?

Cross-site scripting uses technology to manipulate a vulnerable site so that it sends dangerous JavaScript to users. This allows the attacker to gain complete access to the site when the script gains access to the user’s system. But the user needs to execute the JavaScript for this first.

### Types of XSS Attacks

#### Reflected XSS:

This malicious script comes from the HTTP request. This is the most basic type of XSS attack, where an application could receive malicious data and reflect it immediately towards the user.

The attacker’s payload must be part of the request sent to a server, which is then reflected and executed onto the user’s application.

One example of this would be an attacker convincing someone to click on a phishing link before it takes effect.

#### Stored XSS:

This malicious script comes from the database of the website. The attacker inputs the malicious request onto the server where it could stay permanently unless manually addressed.

For example, the attacker could input a malicious script into a comment field, which would be on display for everyone who visits the page. Even without directly engaging with the script, page visitors could fall victim to this attack.

#### DOM-based XSS:

This more advanced vulnerability exists in client code and not on the server code. DOM-based XSS is neither reflected nor stored onto the server, but exists in a page’s Document Object Model (DOM). The web application reads the malicious code and executes it in the browser as part of the DOM, which is more difficult to detect as it doesn’t come through the server.

The **security vulnerabilities** involved in DOM XSS attacks are a serious concern for most websites. We are going to talk about some of the most common risks that you have on open source web building platforms such as WordPress with regard to DOM - XSS hacks.

This allows the attacker to execute malicious JavaScript code in the victim's browser, potentially allowing the attacker to steal sensitive information or perform other harmful actions on the victim's behalf.

Here is an example of a DOM-based XSS attack:

```JavaScript
<script>
 // This function is intended to take a user supplied URL and display it on the page
 function displayURL(url) {
  // The URL is passed through innerHTML, which can execute JavaScript code
  document.getElementById("display").innerHTML = url;
 }
</script>

<!-- User supplied input is passed to the displayURL function -->
<p>Enter a URL to display: <input type="text" id="user-input" /></p>
<button onclick="displayURL(document.getElementById('user-input').value)">
 Display URL
</button>

<!-- The URL is displayed in this div -->
<div id="display"></div>
```

Remember that this tutorial is purely for educational purposes, to help you recognize and defend against XSS. You shouldn't use this information to perform any of these sorts of attacks.

## DOM XSS – WordPress Vulnerabilities

The main target of DOM XSS attacks on WordPress is its users. Users enter their details, accounts, and site credentials to access their WordPress sites and this is what the DOM XSS attacks aim to compromise online. The attackers can use DOM XSS to get access to user information and details with a single click.

This also includes your cookies, information, and others, making it one of the most common **WordPress security vulnerabilities.**

Following are some of the top WordPress website security issues you should bear in mind to ensure better cross-site script security.

### Accessing a User's Private Information

One of the most common WordPress security vulnerabilities involved with DOM XSS attacks is that attackers can gain useful information and even completely take over a user’s site. This can often make things escalate fast and cause complete data compromise.

### Impersonating a User

Attackers can pretend to be the user, to interact with the victim’s online users, clients, and customers to gain their information.

### Compromising a Site

Another common cross-site scripting security issue with websites is that these attacks can compromise the website and take access from the user. This includes displaying deviating content on the site (or content that is not originally from the site).

Other cases may involve changing the way WordPress looks online. Other people may also exploit the website by installing explicit content.

### Social Engineering

In more severe cases, attackers may impact the WordPress site through phishing attempts. This is a common concern for web builder security vulnerabilities that we will discuss shortly.

The impact of XSS cross script-security issues varies for each website. However, WordPress sites are usually at a higher risk of these kinds of compromises because users save their personal information on the website. The risk increases further if the user is an admin, as the attacker can compromise the complete WordPress site.

## DOM XSS and Closed Code Web Builder Platforms

Website builders such as Weebly, Squarespace, Webflow and Wix, unlike WordPress, are non-open source platforms. They allow users to intuitively create websites for their businesses via drag and drop DIY features without any coding or design experience. They also work hard to protect their users' security.

There are tons of useful tools, options, easy-to-integrate dashboards, and hosting opportunities available for users instilling their trust in these platforms. Website security issues are of course a major concern for the majority of the users on these platforms.

Many website builders try their best to protect the sites of their users from [hacker threats](https://techbullion.com/how-to-secure-your-online-store-from-hackers/). But out of all of the website builders available, I believe that Wix follows the NIST framework for cyber security the best and has become a major contributor to improvements in this field.

Wix protects users on their sites from being vulnerable to these kinds of attacks online with tools such as:

-   Third-party updates that project against DOM XSS attacks
-   A secure Sockets Layer that protects against unwanted access for users on site
-   Round-the-clock secure web hosting which protects users against any kind of unwanted logins or phishing attempts.
-   Granting its users admin privileges, which restrict site access and control to the original owner only
-   Highlighting weak passwords and suggesting more difficult-to-decipher passwords.

## Ways to Protect Against XSS Attacks

Defending your system and users against XSS attacks often requires a multifaceted approach to ensure that your servers and applications are protected against various types of attacks.

The best way to defend against XSS attacks is to properly sanitize user input. This means making sure that any user input is properly encoded so that it cannot be interpreted as code by the browser.

Additionally, you can use a web application firewall (WAF) to help identify and block XSS attacks. It's also a good idea to keep your software and web applications up to date, as many XSS vulnerabilities can be mitigated by simply applying the latest security patches.

### Input Validation

This programming technique ensures that only properly-formatted data can enter a software system. Websites can either allow or block certain values to ensure that no XSS can penetrate their servers.

### Escaping or Encoding User Input

Encoding and escaping changes user input to make them safer for the system. Encoding replaces special characters with more harmless equivalents (for example, translating < to &lt;), while escaping adds special characters to protect against injection attacks.

### Implementing a Content Security Policy (CSP)

Content security policies help administrators mitigate XSS attacks by restricting the resources a page can load at a given time. These resources can include scripts and images that could potentially harm clients and servers.

## Bottom Line

DOM XSS cross-site scripting security issues are a serious concern for users on websites. But closed code web building platforms provide features like admin privileges, password best practices, 3rd party updates, and much more. These features make them a more secure website building option than many open code platforms.

You can also prevent XSS attacks by filtering input once it arrives. You can do this by ensuring that only valid input is accepted.

When encoding data on output, the process should be done in HTTP responses so it will not be read as active content. More complex coding might be required, such as applying combinations of URL, JavaScript, CSS, and HTML encoding, depending on the context of output.

Keep response headers in check so browsers will have an appropriate interpretation of content.

Finally, use Content Security Policy (CSP) to minimize the severity of XSS attacks.

```
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">
```

This CSP will allow your website to load scripts and styles from the same origin (that is, your own website), but it will block scripts and styles from external sources. It will also allow the use of inline scripts and styles, but it will block eval() statements, which can be used to execute arbitrary code.

Of course, this is just a simple example, and you can customize your CSP to suit your specific needs. For more information on how to use CSPs to defend against XSS attacks, you can refer to the Content Security Policy Level 2 specification.

_Feature image via Unsplash (Florian Olivo)._
