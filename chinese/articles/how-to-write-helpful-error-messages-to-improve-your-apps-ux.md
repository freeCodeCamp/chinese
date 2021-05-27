> -  原文地址：[How to Write Helpful Error Messages to Improve Your App's User Experience](https://www.freecodecamp.org/news/how-to-write-helpful-error-messages-to-improve-your-apps-ux/)
> -  原文作者：[Andrico KaroullaAndrico Karoulla](https://www.freecodecamp.org/news/author/andrico/)
> -  译者：
> -  校对者：

![How to Write Helpful Error Messages to Improve Your App's User Experience](https://images.unsplash.com/photo-1594322436404-5a0526db4d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fGVycm9yfGVufDB8fHx8MTYxNzI2MTMwNw&ixlib=rb-1.2.1&q=80&w=2000)

Gone are the days of useless and generic error messaging.

![A generic error message displaying: "Oops, something went wrong. Please try again later"](https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png)

_Screenshot taken moments before a rage-quit_

If you're here, you're likely concerned with making your user-facing products as delightful as possible. And error messaging plays an important role in that.

Having useful error messages can go a long way toward making a frustrating scenario for an end-user as pleasant as possible.

This article is split into two parts. The first builds context around error messages and why they're important. This section should be useful, regardless of whether you're a JavaScript developer or not.

The second part is a short follow-along to help get you started managing your own error messages.

## **The current state of error messaging**

In a perfect world, error messages would be redundant and users would be able to use anything you've built a-okay, no problem-o. But errors will happen, and your end-users will run into them.

These errors can stem from:

-   Failing validation
-   Server-side failures
-   Rate limiting
-   Borked code
-   Acts of god

And when things go wrong, often the client-facing error messaging takes shape in one of two ways:

-   Generic errors with no meaningful information, e.g. `Something went wrong, please try again later`
-   Hyper specific messages from the stack trace sent by the server, e.g. `Error 10x29183: line 26: error mapping Object -> Int32`

Neither are helpful for our end-users.

For our users, the generic error can create a feeling of helplessness and frustration. If they get such a message, they can't complete an action, and have no way of knowing why the error happened and how (or if) they can resolve it. This can result in loss of end-user trust, loss of customer, or an angry review.

On the other hand, hyper-specific error messages are a leaky abstraction and shouldn't be seen by our end-user's eyes.

For one, these kind of errors provide implementation information about our server-side logic. Is this a security concern? probably? I'm no pen-tester.

Secondly, if we're in the business of crafting engaging user experiences, (and why wouldn't you be?) our error messages should feel human and be service-oriented. This is a sentiment shared in a number of resource I've come across, many of which of I've included in a further reading section at the end.

## **Why should I create sane error messaging?**

### To help maintain developer sanity

Hunting bugs is hard, and scanning logs is tedious. Sometimes we're provided with context about why things failed, and other times we aren't. If an end-user reports a bug it's important they can present to us as much useful information as possible.

A report from a user that says:

`Hi, I was using the app sometime last night updating my profile and all of a sudden it stopped working. The error said something about a validation error, but I don't know what that means`

is much less useful than:

`Hi, I was using the app sometime last night updating my profile and all of a sudden it stopped working. The error said "We had trouble updating your details. Your address must be located within the EU" but I live in England`

This saves us time and cuts down on red herrings. A clear and specific error message may also help an end-user understand what they themselves have done wrong, and can allow them to fix their mistake.

### To help maintain organisation sanity

Sane error messages also yield benefits on an organisation level. For those working in larger companies, copy/messaging may be the responsibility of an entirely separate department. The more places in the code that require copy changes, the easier it is for the copy to get out of sync with your company's brand guidelines.

Conversely, keeping all of your error messages in a single source makes it much easier for those owning copy to adhere to those brand guidelines.

Other departments, like the support team, may be inundated with support tickets from users. If you're an engineer, why not reach out to your support team to see how many support tickets could be avoided with improved error messaging.

Fixing the problems with your messaging when a user incorrectly fills out a form, has missing data, or doesn't have permissions for a specific action could positively impact the lives of the support team.

### To help maintain end-user sanity

By providing sane error messaging we hope to not leave our end users feeling helpless.

As described earlier, our messaging should be __service_\-_oriented__. They should guide our user on how to complete their process, or at least let them know where they can go and get help if the problem is beyond their control.

In Jon Yablonski's book, the Laws of UX, he describes a psychological concept called the Peak-end Rule:

> __People judge an experience largely based on how they felt at its peak and at its end rather than the total sum or average of every moment of the experience__

In the context of this article, if people become so frustrated that they rage quit your site, their lasting memory of your application is of how frustrating it is to use.

Error messages play a large part in preventing this, as they can act as the final gatekeeper preventing a user who is simply stuck from turning to one so frustrated they quit your app.

If someone is using your product for a transactional purpose like buying an airplane ticket or shopping online, and they've been stopped dead in their tracks during a task with no way to continue, the likelihood of them leaving your site for another skyrockets. Another lost customer.

While this is wholly anecdotal, I've rage quit sites often from not knowing how to complete a process – either nothing happened when I clicked a button, or I just kept getting vague error messages.

Unless these sites/apps are one of those few ubiquitous platforms (like Google, Instagram, Apple), I likely haven't have used them since. I'm sure you can even remember a time this happened to you. In fact, I'll openly welcome pictures of awful error messages via [Twitter](https://twitter.com/andricokaroulla?lang=en)

Using sane error messaging can help offset this frustration if something doesn't go right. Surprisingly, creating a useful error message only requires a handful of qualities.

## What makes a good error message?

Taken from [Microcopy: A complete guide](https://www.microcopybook.com/). A useful error message should satisfy these qualities:

-   Explain clearly that there is a problem
-   Explain what the problem is
-   If possible, provide a solution so that the user can complete the process, or
-   Point them to where they can go for help
-   Make a frustrating scenario as pleasant as possible

This might sound like a lot to cover with just a couple of sentences, but here are some examples of what I deem to be good error messages:

-   We've limited how many times you can reset your password every hour. You can try again later.
-   Please log in to view this profile
-   We couldn't create your profile, only UK residents can use our app.

It's worth noting that I'm not a UX researcher/designer, just a frontend developer with a keen interest in UX. It may be that my above examples miss the mark on what's required within your project or organisation.

Saying that, if you're a frontend engineer, improving your organisation's error messaging makes for an excellent opportunity to upskill and collaborate with your UXer colleagues.

## How can I start writing sane error messages?

I've open-sourced a simple tool called `sane-error-messages`. Running the tool will generate a brand new repo designed to house your default error messaging. You can tweak the default values, add or remove messages, and then publish it to consume within your client facing apps.

`sane-error-messages` works by aggregating all of your messaging in to a single JavaScript object. The key is an error code, and the value is a corresponding message.

The error codes should be the same codes you receive from your server, such as  `POSTS_NOT_FOUND` or `CONFLICTING_USER_RECORD`. Your error messaging repo exposes a function to get your error message from an error code.

This approach was inspired by how tools like [Cypress](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://github.com/cypress-io/cypress/blob/develop/packages/server/lib/errors.js*) handle their error messaging.

As long as your server returns predictable error codes, the server-side implementation doesn't matter. The following sequence is just one way of implementing __`sane-error-messages`__

![A sequence diagram showing the process of displaying a sane error message.](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-15-at-21.41.28.png)

Having a separate repo becomes more important the more user-facing apps you have.

In short:

-   The user "views all products"
-   The frontend makes a network request
-   The network request fails and returns an error code "USER\_NOT FOUND"
-   The frontend requests the corresponding error message from your `error-messages` package.
-   The frontend applies any relevant contextual information
-   The frontend displays this information to the end user.

If you want to try something hands on, you can play with this [CodeSandbox](https://codesandbox.io/s/amazing-platform-dxtjc?file=/src/App.js). The CodeSandbox fires off a request to a mock server which returns 1 of 12 error codes at random.

The client side will use the error code to retrieve a sane error message from the error messages repo. The client side then displays the error message to the user. If the code doesn't have a specified message, the generic fallback gets shown (and it sucks).

![A gif of relevant error messages displaying on a code sandbox](https://www.freecodecamp.org/news/content/images/2021/03/ezgif.com-gif-maker--2-.gif)

Some sane error messages in the wild

## How to set up your error messages

Note: You can find the [repo here](https://github.com/andrico1234/sane-error-messages#readme). If you come across any problems during the tutorial process you can file a GitHub issue.

Begin by running

`yarn global add sane-error-message`

then

`sane-error-messages create <dirName>`

to scaffold your project. Doing so will create a brand new module for you to customise with your default error messages.

Your new module uses `tsdx` under-the-hood to handle all of the module management scripts, such as running, building, and testing.

You can learn more about [tsdx here](/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://tsdx.io/*).

In short, the contents of your new package will look like this:

```typescript
/* errorCodes.ts: The file that defines each error code like */
const USER_NOT_ADMIN = '403_USER_NOT_ADMIN'

/* defaultErrorMessages.ts: Maps each code to a default message */
const errorCodes {
  // your codes and messages go here...
  [USER_NOT_ADMIN]: "We're afraid only administrators have access to "
}

/* ErrorMessages.ts: The class you'll use to instantiate your error messages object in the consuming project */
class ErrorMessages {
  // You can override default messages with more specific ones
  constructor: (customErrorMessages: Partial<Record<string | number, string>>): ErrorMessages;

  // Pass through an error code to get your custom message
  getErrorMessage: (code: string | number, fallbackMessage?: string): string;

  // Checks to see if the argument is a valid error code and acts as a guard for non-ErrorCode values
  isErrorCode(code: string | number): boolean;

  // Returns the errorCodes object with your custom messages
  messages: Record<ErrorCode, string>
}

type ErrorCode = ValueOf<errorCodes>
```

## How to consume your error messages

If you created a repo with the name `custom-error-messages` and published it to npm, you'd be able to consume it within your apps by doing the following:

```typescript
import { ErrorMessages } from 'custom-error-messages';

const customErrorMessages = {
  '400_validation': 'Please enter the fields in your form correctly',
};

// Initialise your errorMessages object with your custom messages
const errorMessages = new ErrorMessages(customErrorMessages);

function riskyFunction() {
  try {
    // Throws an error 
    await boom();
  } catch (err) {
    // Get the error code our server sent over
    const { code } = err;
		
    // Get the code's corresponding message
    const message = errorMessages.getErrorMessage(code);
    
    // Display the message to the client
    displayNotification(message);
  }
}
```

You can then take all of the error codes that your server-side returns and apply corresponding messages to them.

Once you're ready, you can publish your tool to NPM, and then consume it from your client-facing apps.

## **Conclusion**

I hope you've enjoyed learning about an often overlooked aspect of web development.

I've done a bunch of reading to learn about error messaging and I've shared some of my favourite resources below. Some are books and others are short articles, but they're all worth your time.

You can also reach out if any part of the tutorial wasn't clear, or if you feel I can streamline things. Thanks for reading.

## FAQs

### Why can't the server-side just return these messages?

The server shouldn't be concerned with any client-facing logic. But if you're fortunate enough to work with an API that gives useful error codes with each failed request, then you're nearly there.

### Will I need to create an instance of error-messages for every API consumer?

Not necessarily. Because this package can take a list of default messages and codes, as long as it's in sync with the APIs, your frontends will be able to consume the same package.

In each client-side instance, you can pass through additional error codes, or override existing messages to tailor your frontend messaging.

### I think this package should have X or do Y differently

I'm dogfooding this internally at my job, and this is a problem space I'm very new to. I would love to hear of any suggestions, or improvements to the overall architecture or feature-set of __`sane-error-messages`.__

## **Further Reading**

****Microcopy: A Complete Guide****  
I mentioned this book a little earlier, and it's one of my favourites when it comes to making my user-facing products a lot more personable.

The book's author Kinneret Yifrah, has graciously provided a coupon for 10% off, you can purchase it [here](https://www.microcopybook.com/).

Coupon code for the eBook: andrico-ebook

Coupon code for the bundle: andrico-bundle

****Error messaging guidelines: NN Group****  
A [short article](https://www.nngroup.com/articles/error-message-guidelines/) on the importance of sane error messaging which shares some very useful tips on how to create sane error messaging.

In short:

-   Errors should be expressed in plain language
-   Indicate what the problem is
-   Suggest a solution

****Error Messages (Design basics): Microsoft****  
An [in-depth article](https://docs.microsoft.com/en-us/windows/win32/uxguide/mess-error) that covers both design guidelines messaging practices

****Laws of UX****  
A [short book](https://www.amazon.co.uk/gp/product/149205531X/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=149205531X&linkCode=as2&tag=calistheni02b-21&linkId=3f089ce27d59c4eeb48522be9ac52fb2) that introduces how a handful of psychology concepts can be used to improve your products UX.