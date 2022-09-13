> -  原文地址：[How to Sign and Validate JSON Web Tokens – JWT Tutorial](https://www.freecodecamp.org/news/how-to-sign-and-validate-json-web-tokens/)
> -  原文作者：[Rohit Jacob Mathew](https://www.freecodecamp.org/news/author/rohitjmathew/)
> -  译者：
> -  校对者：

![How to Sign and Validate JSON Web Tokens – JWT Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/rohit-code-2400x1260.jpg)

Ever since I started learning about JSON Web Tokens, I have been wondering how we validate them.

I understood that we sign the token and that we use that signed token to validate its authenticity. But I was still curious to know more and wondered why I never learned about the process in detail.

I hope this article helps you understand how signing a JWT works and how you validate the signed token.

## What are JWTs?

Before we start, let's quickly review what JSON Web Tokens are.

JSON Web Tokens (or JWT) are a compact, URL-safe way to transfer pieces of data between two parties.

They are defined by the open standard (RFC 7519) and they're composed of three segments: a header, a payload, and a crypto segment in general.

JWT's are signed when generated, and the same signed JWT is validated upon receipt to make sure that it hasn't been modified in transit.

For a more detailed intro to what JWTs are, I recommend that you read my blog on [JSON Web Token (JWT) and why we use them](https://blog.rohitjmathew.space/json-web-token-jwt-and-why-we-use-them).

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Why Don't You Need to Know How Signing and Validation Actually Work? 🤔

Now, why is it that most JWT resources simply say "and then you sign and validate" and leave it at that? Well, the answer is abstraction.

For example, when you drive a car you don't need to know how the engine works nor do you personally tune the engine to get the best performance out of the car.

Rather, you trust that the manufacturers have used their expertise and have done their due diligence to make something that is useful for you.

In the same way, you don't need to know the exact process for signing and validating JWTs in order to effectively use them for authenticating and authorizing your applications and APIs.

Do note that while **you generally should not sign and validate tokens yourself**, knowing how it works can help make you feel more comfortable with using JWTs. But in general, identity providers and Identity-as-a-Service platforms like Auth0, Okta, and Microsoft Active Directory ensure that this process is simple.

So if you are still curious (like I was) to know how it works, then do read on.

## What Makes a JSON Web Token? 🤔

I cover this in more detail [in this tutorial](https://blog.rohitjmathew.space/json-web-token-jwt-and-why-we-use-them) but let's do a quick recap.

JSON Web Tokens are composed of three URL-safe string segments concatenated with periods `.`

### Header Segment of a JWT

The first segment is the header segment. It generally looks like this:

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9`

The header segment is a JSON object containing a signing algorithm and token type. It is base64Url encoded.

Decoded, it looks something like this:

```
{
  "alg": "RS256",
  "typ": "JWT"
}
```

### Payload Segment of a JWT

The second segment is the payload segment:

`eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0`

This is a JSON object containing data claims, which contains information regarding the user and other authentication-related information.

This is the information that the JWT is conveying from one entity to another. It's also base64Url encoded. Data claims might look something like this:

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Crypto/Signature Segment of a JWT

The final segment is the crypto/signature segment. JWTs are signed so they can't be modified in transit. When an authorization server issues a token, it signs it using a key.

When the client receives the ID token, the client validates the signature using a key as well.

Depending on the signing algorithm the key used could differ. If it is an asymmetric signing algorithm that was used, you use different keys to sign and validate. In that case, only the authorization server is able to sign tokens.

## How Does Signing and Validating a JWT Work? 🤔

### How to sign a JWT

For this article, I'm going to use the RS256 signing algorithm. RS256 is an RSA Digital Signature Algorithm with SHA-256.

SHA-256 is an Asymmetric Key Cryptography algorithm, which uses a pair of keys: a public key and a private key to encrypt and decrypt.

Here, the authorization server will use the private key and the application receiving the token in order to validate it will use the public key.

#### Signing Input

First, we take the first two segments of the JWT (the header and the payload). It looks something like this:

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0`

This is basically the base64url encoded header and payload, joined with a `.`

```
base64UrlEncode(header) + "." 
+ base64UrlEncode(payload)
```

And the above is the signing input.

#### Hash the signing input

We then hash the signing input using the [SHA-256 hashing algorithm](https://dev.to/wagslane/how-sha-2-works-step-by-step-sha-256-11ci). Hashing converts one value into a different value. A hash function uses a mathematical algorithm to generate a new value from an existing one.

Note:

-   Hashing is irreversible. Once we have hashed an input, we cannot get back to the original input again.
-   Hashing will always produce the same output for the same input.
-   No two different hashing inputs will produce the same output.

```
SHA-256 (
    base64UrlEncode(header) + "." 
    + base64UrlEncode(payload)
)
```

At this point, we have a hash of the header and payload segments. We can compare it to other hashes, but we can't reverse to return to the original signing input.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

#### Encrypt the signing input

Next, we encrypt the hashed signing input. Unlike hashing, encryption is reversible. The authorization server encrypts the hashed signing input using a private encryption key to produce an output.

This final output (the hashed, encrypted, encoded header and payload) is the crypto/signature segment of the JWT.

```
RSA (
    SHA-256 (
        base64UrlEncode(header) + "." 
        + base64UrlEncode(payload)
    ),
    {RSA Private Key}
)
```

There you have it. That's how the signature of a JSON Web Token is generated.

### How to Validate a JWT

Now that you know how the token gets signed, we can go ahead and understand how someone who receives the token can validate that this JWT contains data that hasn't been tampered with.

Let's take an application that has received a JWT and needs to validate it. The application also has access to the public key of the authorization server.

Validation of the JWT is about getting to a point where we can effectively compare what we received to what we expect.

#### Decode Claims

The application can decode the header and payload to get some information.

Remember that these two segments are base64Url encoded to make them URL safe. There is nothing cryptographically secure about these segments.

You can do so with a simple online base64 decoding tool. Once they're decoded, we can easily read the information in them.

For instance, we could decode the header segment to see what algorithm the JWT says it was signed with.

From the decoded header, we can see:

```
{
  "alg": "RS256",
  "typ": "JWT"
}
```

When we read the algorithm in the JWT's header, we should verify that it matches our configured expectation. If it doesn't match, we should reject the token outright.

#### Hashing (Again)

If the algorithm in the token matches our expectation of RS256, we know we need to generate the SHA-256 hash of the header and payload segments.

Remember that hashing is irreversible, but the same input will always produce the same output. So we will hash the concatenated, base64Url encoded header and payload. Now we have the signing input hash freshly calculated on the application side.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

#### Decryption

The hashed signing input is also in the signature of the JWT, but it's been encrypted by the authorization server with a private key. The application has access to the public key, so we can decrypt the signature.

Once this is done, we have access to the original hash: the one generated by the authorization server when the token was first generated.

#### Compare Hashes

Now we can compare the decrypted hash to the calculated hash. If they are the same, then we've verified that the data in the JWT header and payload segments has not been modified between the time the authorization server created the token and the time our application received it.

#### Verify Token Claims

Additionally, once we've validated the signature, we can verify the JSON Web Token's data. Claims in the payload segment could also be validated because they contain information about the token issuer, token expiration, intended audience for the token, information binding the token to the authorization request, and more.

These claims give the application details about the token that the signature validation alone does not.

For instance, examination of claims can reveal that a technically valid token was actually intended for a different application or user, that it has expired, that it came from an issuer that the application has no affiliation with, and so on.

## Conclusion

We've now covered how to sign JWTs and validate JWT signatures. I hope this helps you better understand JWTs and work with them. I would still like to reiterate that **you should not sign and validate tokens yourself**.

There are identity platforms like [Auth0](https://auth0.com/), [Okta](https://www.okta.com/), [Ping Identity](https://www.pingidentity.com/en.html), and more that do all of this for you. They also provide SDKs and libraries for validation and token management on the application or API side.

If you are interested in securing your applications with Auth0, you need an Auth0 account. If you haven’t got one, you can [sign up for a free one](https://a0.to/signup-for-auth0).

Thanks for reading! I really hope that you found this article useful. I'm always interested to know your thoughts and happy to answer any questions you might have in your mind. If you think this post was useful, please share it to help promote it to others.

Thanks for reading! :)

P.S Do feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/rohitjmathew/) or [Twitter](https://twitter.com/iamrohitjmathew)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Appendix

The following have been great material that helped me write this article:

-   [Signing and Validating JSON Web Tokens (JWT) For Everyone](https://dev.to/kimmaida/signing-and-validating-json-web-tokens-jwt-for-everyone-25fb) by [Kim Maida](https://twitter.com/KimMaida)
-   [JSON Web Token (JWT) Signing Algorithms Overview](https://auth0.com/blog/json-web-token-signing-algorithms-overview/) by Auth0