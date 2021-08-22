> -  原文地址：[Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/what-is-cross-site-request-forgery/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：ilam0x
> -  校对者：

![Cross Site Request Forgery – What is a CSRF Attack and How to Prevent It](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/megan-article-image.jpg)

Cross Site Request Forgery, or CSRF occurs when a malicious site or program causes a user's browser to perform an unwanted action on a trusted site when the user is authenticated. Any malicious action is limited to the capability of the website to which the user is authenticated.

For example, Jane might login to her online banking portal while checking her email. While there, she may click a link in a phishing email (likely obfuscated by a link-shortening site) which would include a request for Jane's bank to transfer money to an account the attacker controls.

Since Jane is already authenticated by her bank, they automatically carry out the transaction, believing that because it is being requested by Jane's browser that she has authorized it.

## What Are HTTP Requests and Cookies?

### HTTP GET Request

This is a request used to request data from a web server (for example typing in a URL (requesting a website) which results in it loading).

### HTTP POST Request

This is a request used to send data to a web server (for example, a web form submission).

Some GET and POST requests are triggered automatically, without user interaction (like fetching search suggestions or loading image content with the img src attribute).

### Session Cookies

Session cookies are a way that HTTP handles state (since it doesn't handle state natively). Websites use session cookies (containing a unique ID) to identify users and to retain their session.

After being set, the user's browser sends the cookie to the server with every request it makes in order to identify the user to the site.

An attacker can leverage the cookie to impersonate the user by forcing a user's browser to execute a request. If the user is already logged into the site, the cookie will be sent automatically with the request.

## How does Cross Site Request Forgery work?

In order for an attacker to carry out a CSRF attack, several things need to be true:

-   There is an action in the application which an attacker wants to take – like changing a password, transferring funds, and so on.
-   There are not unpredictable request parameters – the attacker can guess (or knows) all of the parameters which the application expects to see from this type of request.
-   The action can be carried out by HTTP request(s) and it relies only on cookies in order to verify that the request is coming from the user.

CSRF can impact web applications which use cookies, browser authentication, or client side certificates to authenticate users. Essentially it can occur in any case where the application automatically appends a users' credentials or identity to a request.

A CSRF attack can either leverage a GET request or a POST request (though a POST request is more complicated and is thus uncommon).

Either one needs to start with an attacker tricking a victim into loading or submitting the information to a web application. This can take place in a number of ways – for example via a phishing link.

Alternatively, similar to XSS (Cross-site scripting), CSRF can be a stored vulnerability. Stored CSRF occurs when an attacker stores the attack in a field which accepts HTML such as an IMG or IFRAME tag. This would mean that anyone who views the page could be impacted.  The exploit can be disguised as an ordinary link or hidden in an image tag.

For example, as an ordinary link on a webpage: `<a href=“malicious link”>Unsubscribe here</a>`

Or, as an image tag : `<img src=“malicious link” width=“0” height=“0” border=“0”>`

## Example of CSRF

Imagine that your bank (bank.com) processes transfers using GET requests which include several parameters (the identity of the recipient of the transfer and how much you want to transfer).

For example, if Jim wants to send his friend Bob $10, the request might look like this:

`http://bank.com/transfer?recipient=Bob&amount=10`

The request also includes a session cookie identifying the account owner so the bank knows where to get the money from.

Now, an attacker may convince Jim to click a link that looks like this (but has been shorted by a URL shortener or hyperlinked cleverly):

`http://bank.com/transfer?recipient=Hacker&amount=100000`

Because Jim is already logged in, his browser sends his cookie with the request – so his bank believes that he is requesting the transfer and it is carried out.

## How to Stop CSRF Attacks

### Choose Your Frameworks Carefully

Use frameworks which have built in protections against CSRF, like .NET. Correct configuration is key. If the framework you're using doesn't have protection, you can add protection with Anti-CSRF Tokens.

### Use Anti-CSRF Tokens

Tokens (also known as synchronizer token patterns) are a server-side protection where the server provides a user's browser with a unique, randomly generated token and checks each request to see if the browser sends it back before carrying out a request.

This token is sent via a hidden field and should be a non-predictable, random number which expires after a short time and cannot be reused.

Depending on the sensitivity of the page, different tokens can be used for each request, or simply for different forms. The tokens should be compared in a safe way (such as by comparing hashes) and should not be sent in an HTTP get request so they are not a part of the URL and cannot leak via the Referrer header.

### Use the SameSite Flag in Cookies

The SameSite flag marks a cookie so it can only be sent for requests which originate from the same domain.

Essentially if www.bank.com wants to make a request to `www.bank.com/updatepassword`, it's allowed to. But if `www.maliciousdomain.com` wants to make a request to www.bank.com/updatepassword, it can't send the session cookie and therefore cannot carry out the attack.

Most browsers now support this flag, but not all. It should be part of a comprehensive defense strategy.

### Practice Defense in Depth

You can implement a number of other controls which, when used in conjunction with other measures, can provide protection against CSRF.

For example, here are some other protections you can put in place:

-   verify the origin with standard headers (determine where the request originates and where it's targeted to ensure they match)
-   use a custom request header (so that without the header the site will not accept the request)
-   double submit cookies (essentially a second, randomly generated and unknown – to the attacker – parameter which an attacker has to submit with a request in order for it to be successful).

### Involve the User in the Transaction

For sensitive actions such as money transfers or password changes, require the user to take action (such as CAPTCHA, one-time tokens, or re-authentication).

## Examples of Measures that Don't Work:

-   **Multi-Step Transactions:** It doesn't matter how many steps there are as long as the attacker can predict/determine each one.
-   **HTTPS:** Always a good idea, but doesn't do anything to protect against CSRF.
-   **URL Rewriting:** This would prevent attackers from guessing the victim's session ID during a CSRF attack, but would then allow an attacker to see it in the URL. Swapping one flaw for another isn't a good idea.
-   **Using a Secret Cookie:** Even a secret cookie is submitted as part of the request, meaning that the attacker can still leverage it.
-   **Only Accepting POST Requests/avoiding GET Requests:** Forged POST requests can still be used to execute a CSRF attack.

### Other Names for CSRF

CSRF is also known as XSRF, Sea Surf, Session Riding, Cross-Site Reference Forgery, Hostile Linking, One-Click Attack.

### Sources/Further Reading:

-   [OWASP CSRF](https://owasp.org/www-community/attacks/csrf)
-   [OWASP CSRF Prevention](https://owasp.org/www-community/attacks/csrf)
-   [CSRF Attacks](https://www.netsparker.com/blog/web-security/csrf-cross-site-request-forgery/)
-   [Anti-CSRF Tokens](https://www.netsparker.com/blog/web-security/protecting-website-using-anti-csrf-token/)
-   [CSRF Basics](https://www.acunetix.com/websitesecurity/csrf-attacks/)
-   [PortSwigger CSRF](https://portswigger.net/web-security/csrf)
