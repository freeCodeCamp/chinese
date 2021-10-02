> -  原文地址：[Event Bubbling and Event Catching in JavaScript and React – A Beginner's Guide](https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/)
> -  原文作者：[Mariya Diminsky](https://www.freecodecamp.org/news/author/mariya-diminsky/)
> -  译者：PapayaHUANG
> -  校对者：

![Event Bubbling and Event Catching in JavaScript and React – A Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/pexels-anthony-132477.jpg)

In this article, I'll help you understand event bubbling and event catching like a pro. I created this resource to help you understand event propagation and how it works in JavaScript and React in a clear and comprehensible way. ❤

Once you've gone through this thorough introduction to event bubbling and event caching, you should be able to start applying what you've learned here in your projects right away.

Here's what you’ll learn:

-   **✨** [What is Event Delegation?](#what-is-event-delegation)
-   ✨ [What is Event Bubbling?](#what-is-event-bubbling)
-   ✨ [How Event Bubbling Happens in JavaScript](#how-event-bubbling-happens-in-javascript)
-   ✨ [How Event Bubbling Happens in React](#how-event-bubbling-happens-in-react)
-   ✨ [How to Stop Event Bubbling in Your Components](#how-to-stop-event-bubbling-in-your-components)
-   ✨ [Event.target vs Event.currentTarget](#event-target-vs-event-currenttarget)
-   ✨ [Updated Event Firing Order and useCapture Param in JavaScript](#updated-event-firing-order-and-usecapture-param-in-javascript)
-   ✨ [Which Events Do Not Bubble and How Are They Handled?](#which-events-do-not-bubble-and-how-are-they-handled)
-   ✨ [Event Listeners In React Version 16 and before VS Version 17+](#event-listeners-in-react-version-16-and-before-vs-version-17-)
-   ✨ [Special Edge Case: What If You Need an Outer Parent to Fire too?](#special-edge-case-what-if-you-need-an-outer-parent-to-fire-too)

## What is Event Delegation?

Long story short, event delegation is simply put a powerful JavaScript technique that allows more efficient event handling.

### 👍 Pros (more later)

-   This technique is generally considered performant since only one event listener function is being used at the top-level parent rather than one for every child element.

### 👎 Cons (more later)

-   Once an inner child element’s event is called, all elements above/below it will also be called (bubbling/capturing). To stop this from happening ,  a method on the `event` object must be called.

**Bubbling** and **capturing** (explained later) allow us to implement the event delegation pattern.

## What is Event Bubbling?

Let’s say we know a girl named `Molly`, who also happens to be not a real person, but — 🥁drum roll — a React component. Wow – such convenience!

![shiba inu meme "wow such convenience. much impress. so wow"](https://www.freecodecamp.org/news/content/images/2021/09/image-19.png)

generated via [https://memegenerator.net/](https://memegenerator.net/)

She has a single parent `div` with an `onClick` event handler that, when clicked,  calls everyone to the table to eat her food.

Within this parent `div` are several child `button` elements   that, when clicked, create a pretend food item (that is, the `console.log`'s).

```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat() {
        console.log("Hey fam! Food's ready!");
    }

    handleCookEggs() {
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}>
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

And this is what happens when you click each:

Here's a little codepen version if you'd like to follow along this way instead:

[**event-bubbling-exampl**](https://codepen.io/maariyadiminsky/pen/MWobvZd)**e**

As you can see, this happens for every child:

1.  First, the button’s event handler gets triggered.
2.  Second, the parent div’s event handler gets triggered.

In most cases, you probably want only the button’s event handler to get called when you click it. But as you can see, the parent’s event also gets triggered...!?

This is called ****✨Event Bubbling✨****.

In the next few sections, I’ll be discussing what the heck is happening and how we can fix it.

## How Event Bubbling Happens in JavaScript

### Why Does Event Bubbling Exist?

One of JavaScript’s intentions with the creation of the Event Propagation pattern was to make it easier to capture events from one source – the parent element – rather than setting an event handler on each inner child.

### Event Propagation Firing Order

There are three phases that Event Propagation goes through:

![chart displaying event propagation](https://www.freecodecamp.org/news/content/images/2021/09/image-20.png)

Image from [https://ehsankorhani.com/](https://ehsankorhani.com/)

1.  **🟢 Capturing Phase**  –  The is first phase when an event is actually triggered. This event “captures” or propagates first through the topmost event, that is the `window` object, then the `document`, then the `html` element, and then the innermost elements. It goes down until it reaches the `event.target`(what you clicked/event triggered).
2.  🟢 **Target Phase**  –  The second phase is when we have arrived at the `event.target`. For example, when a user clicks a button, this is the actual button element.
3.  🟢 **Bubbling Phase** – The third phase. This event starts from the `event.target` and propagates up until it reaches the top parent again (although the top parent’s event isn’t called again).

Note that while there are 3 main phases, the Target Phase is actually not handled separately. Event handlers on both the Capturing and Bubbling phases are triggered here.

There is also technically another phase called the “None Phase”, where no event phase is occurring. You can access which phase an element is on via `[event.eventPhase](https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase)`.

Considering what you just learned, take a look at the example below.

Let’s say a user clicked a `td` element in a `table`. How would Event Propagation happen here? **🤔** Take a moment to think about it.

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  </head>
  <body>
    <div id="root">
      <table>
        <tbody>
          <tr>
            <td>Shady Grove</td>
            <td>Aeolian</td>
          </tr>
          <tr>
            <td>Over the River, Charlie</td>
            <td>Dorian</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
```

This is what’s actually happening, in the same order just mentioned:

Note that `DefaultView` here would be the `Window` object.

![another chart displaying event propagation in more detail](https://www.freecodecamp.org/news/content/images/2021/09/image-21.png)

Image by [https://www.w3.org/](https://www.w3.org/)

## How Event Bubbling Happens in React

React, on the other hand, has created something called the [SyntheticEvent](https://reactjs.org/docs/events.html).

These are simply wrappers for the browser’s event object. The basic use case is similar and includes methods like `stopPropagation` and `preventDefault` (which I will discuss later) . The biggest benefit is they work the same across browsers.

React doesn’t attach event handlers to nodes – rather to the root of the document instead. When an event is fired, React calls the proper element first (that is the Target Phase – element you clicked) then it starts to bubble.

Why does React do this instead of simply handling events similarly to the native DOM?

### Browser Consistency

It’s important that events work the same across all browsers. React created Synthetic Events to make sure properties remain consistent across different browsers and platforms.

You wouldn’t want to create an app when an event works in one browser but then a user in a different browser uses your application and it doesn't work anymore – that’s a poor user experience.

### Trigger From The Element You Actually Want to Trigger From

Where the event handler is set is where the intention is to call it  –  on that particular element and nowhere else (I’m temporarily ignoring some edge cases here of course for the sake of understanding the basic concept first).

That event knows the most about the element it’s set to, so it should be the first one to trigger. After that, as Event Propagation goes higher up, each element above knows less and less.

Take, for example, our previous example with our `Molly` component. I know you miss her so here she is again below:

🤔 Did you notice then when a button is clicked the event handler on that button gets called first and only then the parent event handler is called?

It never happens in reverse (that is, the Capturing Phase is never triggered).

That is because React’s SyntheticEvent only uses the Bubbling Phase (Target Phase is included here). This makes sense if the intention is to focus on the `event.target` (the button in this example) that triggered the event first.

Keep in mind that React is only _simulating_ JavaScript’s native Bubbling and Capturing phase with these SyntheticEvents, which is why you may notice some differences as time goes by (explained further down in this article).

**⚠️ SyntheticEvent** does not natively focus on the Capturing Phase unless you specifically set it to. To have the Capture Phase trigger ,  just set the parent `div`'s event handler `onClick` to `onClickCapture`:

```javascript
import React, { Component } from "react";

class Molly extends Component {
    ...

    render() {
        return (
            <div className="im-a-parent" onClickCapture={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

Notice that instead of the Bubbling Phase, the Capture Phase is triggered below:

**⚠️** Lastly, I wanted to mention that in React Version 16 and lower, when the Bubbling Phase is triggered in SyntheticEvents ,  it acts similarly to JavaScript’s native Bubbling Phase by attaching event handlers all the way up until `Document`.

Now in React Version 17+ event handlers only reach up to the `root` element.

![Image displaying React's bubbling phase ending at the root level in React Version 17 but it ends at Window/Document in React Version 16 or lower](https://www.freecodecamp.org/news/content/images/2021/09/image-22.png)

Image by [React](https://reactjs.org/blog/2020/08/10/react-v17-rc.html)

## How to Stop Event Bubbling in Your Components

Now that you understand the core concepts of **Event Propagation**, **Event Bubbling** and **Event Capturing,** let’s discuss how to fix our initial issue.

You have a button (or some other element) and you want only the button’s event handler to fire  –  no other parent should be triggered.

🤔 So how can we stop this from happening? You have a few options:

### event.stopPropagation()

This will stop any parent component’s event from firing. To use this:

1.  Make sure to pass the `event` object as a parameter.
2.  Use the `stopPropagation` method on the event object above your code within your event handler function.

Note that I changed the parent’s `div` back to `onClick` from `onClickCapture`:

```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat() {
        console.log("Hey fam! Food's ready!");
    }

    handleCookEggs(event) {
        event.stopPropagation(); // USED HERE!
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

Above I only added `stopPropagation` to the `handleCookEggs` function. So when the `Cook Eggs` button is clicked, it only fires that event for that element only.

### event.stopImmediatePropagation()

Say you have multiple events on the same element. If you use `event.stopPropagation()`, sure it will stop any parent events from firing. But if you have multiple events on the same element, they will still all fire.

To prevent other events on the same element from firing, use `event.stopImmediatePropagation()`instead. It will stop both parents and the same element events from firing.

If you are in a situation where `event.stopPropagation()`doesn’t work for you, try `event.stopImmediatePropagation()`instead.

Note: Once in a while there could be a third-party library in your app causing the former not to work. Of course, it would still be a good idea to see what caused the latter to work but not the former and might give you another clue on fixing the issue.

### event.preventDefault()

Depending on the event handler and element, you may want to use this.

For example:

-   If you have a form and don’t want the page to refresh when it’s submitted.
-   You’re setting up your own route functionality and don’t want the page to refresh.

## Event.target vs Event.currentTarget

Understanding the difference between these two target properties on the `Event` object can really save you a headache down the road.

Remember: The element that triggers the event is not always the same as the element that has the event listener attached to it.

**🤔** Confused? Don’t worry, let's walk through this together.

Let’s take our previous example and `console.log` both the `event.target` and the `event.currentTarget` inside the parent div’s event handler.

```javascript
import React, { Component } from "react";

class Molly extends Component {
    // CHECKING THE PARENT
    handleCallFamilyToEat(event) {
        console.log("Hey fam! Food's ready!");

        console.log("event.target:", event.target);
        console.log("event.currentTarget", event.currentTarget);
    }

    ...

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

Now when we click the `Cook Eggs` button what do we see?

![](https://www.freecodecamp.org/news/content/images/2021/09/image-23.png)

Image by Mariya Diminsky(me)

Notice the parent div’s event handler is aware that the intended `target` is the button.

But  since we are checking inside the parent’s event handler, we see that the parent div is the `currentTarget`.

Ok, let’s look further into this.

What if we take the same `console.log`s and check within the actual button’s event handler?

🤔 What would we see now?

```javascript
import React, { Component } from "react";

class Molly extends Component {
    handleCallFamilyToEat(event) {
        console.log("Hey fam! Food's ready!");
    }

    // CHECKING A CHILD BUTTON
    handleCookEggs(event) {
        console.log("Molly is cooking fluffy eggs...");
        
        console.log("event.target:", event.target);
        console.log("event.currentTarget", event.currentTarget);
    }

    ...

    render() {
        return (
            <div className="im-a-parent" onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Molly;
```

![](https://www.freecodecamp.org/news/content/images/2021/09/image-24.png)

Image by Mariya Diminsky(me)

Notice that since we are now checking inside the button’s event handler ,  we see that the `currentTarget` has changed to the button.

And of course, since we are clicking the button, we already know the `target` will once again be the `button`.

Considering what you just learned, now you know that the:

-   `event.target` is the most deeply nested element that caused the event.
-   `event.currentTarget` is the element that listens to the event (where the event listener is attached to).

## Updated Event Firing Order and useCapture Param in JavaScript

In JavaScript the `EventTarget.addEventListener` will be used to add a handler to an event.

When we take a look at the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) we see that either you can set optionally `capture` within the `options` object or via the `useCapture` parameter (also now optional), which does the same thing.

```javascript
// So you can do this:
yourElement.addEventListener(type, listener, { capture: true });

// or this:
yourElement.addEventListener(type, listener, useCapture: true);
```

⚠️ The reason for this is that unless you specifically set it, the Capturing Phase will be ignored and instead, only the Bubbling Phase (after the Target phase) will be triggered natively in JavaScript. MDN also explains this:

> For event listeners attached to the event target, the event is in the target phase, rather than the capturing and bubbling phases. Event listeners in the “capturing” phase are called before event listeners in any non-capturing phases.

Note that the `useCapture` parameter has not always been optional in older browsers. Make sure to check [caniuse.com](https://caniuse.com/?search=usecapture) before implementing it.

## Which Events Do Not Bubble and How Are They Handled?

Although most events bubble ,  did you know several do not?

Here are some examples in native JavaScript:

-   [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) ([focusout](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) is the same but it actually bubbles).
-   [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) ([focusin](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) is the same but it actually bubbles).
-   [mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event) ([mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) is the same but it actually bubbles).
-   [mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) ([mouseover](https://transang.me/everything-about-event-bubbling/mouseover) is the same but it actually bubbles).
-   [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event), [unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event), [abort](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event), [error](https://developer.mozilla.org/en-US/docs/Web/API/Element/error_event), [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event).

⚠️ The events that do bubble have `true` set on the `bubbles` option [when the](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event) `[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)` [is created](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)  –  although they still go through the Capturing phase.

## Event Listeners In React Version 16 and before VS Version 17+

As you learned, React’s SyntheticEvent does not always act the same as its native JavaScript equivalents.

Let’s learn about some of these differences as well as changes made between React versions.

### Events You Wouldn’t Expect to Bubble In React

For example, you would expect React’s `onBlur` and `onFocus` to not bubble since JavaScript’s native equivalent does not, correct? Yet React has intentionally had these events among others continue bubbling.

⚠️ While React Version 17 has [made some changes](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#aligning-with-browsers) to certain events like `onScroll`  –  which no longer bubbles  –  most events still continue to bubble.

See [this answer](https://stackoverflow.com/questions/34926910/onfocus-bubble-in-react) and [this article](https://www.quirksmode.org/blog/archives/2008/04/delegating_the.html) for more details on this topic.

### `event.target.value` Used to be Nullified in Async Functions

Prior to React Version 17, if you tried to access an event in an async function you’d notice it would be undefined.

This is because React’s SyntheticEvent objects were pooled  –  meaning that after the event handlers had been called, you would no longer have access to them since they would be reset and put back in the pool.

![](https://www.freecodecamp.org/news/content/images/2021/09/image-25.png)

Image from [React](https://reactjs.org/docs/legacy-event-pooling.html)

This causes issues for async functions that need access to the information within that event at a later time.

⚠️ The only way to persist this information within async functions was to call `event.persist()`:

![](https://www.freecodecamp.org/news/content/images/2021/09/image-26.png)

Image from [React](https://reactjs.org/docs/legacy-event-pooling.html)

The intention of this was to improve performance. But upon closer inspection, React’s team discovered that it only confused developers and actually did not really boost performance much, so it was completely scraped.

⚠️ With the release of React Version 17, React no longer pools SyntheticEvent objects. So you can expect to receive the intended `event.target.value` within your async functions without needing `event.persist()`.

Be sure to read more about this update [here](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#no-event-pooling).

## Special Edge Case: What If You Need an Outer Parent to Fire too?

Let’s take everything you learned and fix a special edge case so you can apply it in your next (or current) React app!

🤔 Say we want to have both of these work in our app:

1.  When a user clicks the inner div/button/etc. element, we want that event to trigger only (or in our example below, changing channels on the TV).
2.  When a user clicks the outer parent div, that parent’s event is triggered (this could be useful for a popup modal. When a user clicks outside the modal, you want the popup to close  –  or in our example below, a TV being turned back on).

Currently, you know that if you click either the parent/child element, React’s SyntheticEvent system would trigger bubbling.

You also know to stop this we can use `event.stopPropagation()`.

But we’re left with a dilemma.

What if you want one event handler to trigger in one situation (our #1), and another event handler to trigger in another situation (#2)?

⚠️ If we use `event.stopPropagation()`, it would stop one event handler from triggering – but then you would never be able to call the other event handler in another situation. How can we fix this?

To solve this issue, let’s utilize React’s state pattern!

Note that I’m utilizing arrow functions here so `bind`ing state isn’t necessary. If you aren’t sure what this means, feel free to [read another article I wrote about this topic here](/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/).

ℹ️ Below I’ve included a React Class Component version and a React Hooks version  –  use whichever you prefer. Make sure to read through the comments carefully:

```javascript
import React, { Fragment, Component } from "react";

import "./TV.css" // you can ignore this since this won't exist on your end

class TV extends Component {
    state = { channel: 1, shouldTurnOffTV: false };

    // the parent div triggered if TV is turned OFF
    // clicking change channel or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    handleTurnOnTV = (event) => {
        console.log("In HandleTurnOnTV");

        const { shouldTurnOffTV } = this.state;

        if (shouldTurnOffTV) {
            event.stopPropagation();

            // I reset the channel by 1, but you can do whatever you need here
            this.setState({ shouldTurnOffTV: false, channel: 1 });
        }
    }

    // the child change channel button triggered if TV is turned ON
    // clicking the parent div, or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    handleChangeChannel = (event) => {
        console.log("In HandleChangeChannel");

        const { channel, shouldTurnOffTV } = this.state;

        if (!shouldTurnOffTV) {
            event.stopPropagation();

            // I increase the channel by 1, but you can do whatever you need here
            this.setState({ channel: channel + 1 });
        }
    }

    // the turn off TV button is triggered
    // clicking the parent div or changing the channel won't trigger at the same time 
    // because of event.stopPropagation() here
    handleTurnOffTV = (event) => {
        console.log("In HandleTurnOffTV");

        event.stopPropagation();

        this.setState({ shouldTurnOffTV: true });
    }

    renderChannel = () => {
        const { channel, shouldTurnOffTV } = this.state;

        if (shouldTurnOffTV) {
            return (
                <div>That's it, no more TV time!</div>
            )
        }

        return (
            <Fragment>
                <div>Current Channel: {channel}</div>
                <button className="im-a-child-button" onClick={this.handleTurnOffTV}>Turn Off TV</button>
            </Fragment>
        )
    }

    render() {
        const { shouldTurnOffTV } = this.state;
        return (
            <div className="im-a-parent" onClick={this.handleTurnOnTV}> 
                {this.renderChannel()}
                <hr />
                <button 
                    disabled={shouldTurnOffTV}
                    className="im-a-child-button" 
                    onClick={this.handleChangeChannel}
                >
                    Change Channel
                </button>
            </div>
        );
    }

}

export default TV;
```

Example written as a Component Class

```javascript
import React, { Fragment, useState } from "react";

import "./TV.css" // you can ignore this since this won't exist on your end

const TV = () => {
    const [channel, setChannel] = useState(1);
    const [shouldTurnOffTV, setTurnOffTV] = useState(false);

    // the parent div triggered if TV is turned OFF
    // clicking change channel or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    const handleTurnOnTV = (event) => {
        console.log("In HandleTurnOnTV");

        if (shouldTurnOffTV) {
            event.stopPropagation();

            // I reset the channel by 1, but you can do whatever you need here
            setTurnOffTV(false);
            setChannel(1);
        }
    }

    // the child change channel button triggered if TV is turned ON
    // clicking the parent div, or turning off TV won't trigger at the same time  
    // because of event.stopPropagation() here
    const handleChangeChannel = (event) => {
        console.log("In HandleChangeChannel");

        if (!shouldTurnOffTV) {
            event.stopPropagation();

            // I increase the channel by 1, but you can do whatever you need here
            setChannel(channel + 1);
        }
    }

    // the turn off TV button is triggered
    // clicking the parent div or changing the channel won't trigger at the same time 
    // because of event.stopPropagation() here
    const handleTurnOffTV = (event) => {
        console.log("In HandleTurnOffTV");

        event.stopPropagation();

        setTurnOffTV(true);
    }

    const renderChannel = () => {
        if (shouldTurnOffTV) {
            return (
                <div>That's it, no more TV time!</div>
            )
        }

        return (
            <Fragment>
                <div>Current Channel: {channel}</div>
                <button className="im-a-child-button" onClick={handleTurnOffTV}>Turn Off TV</button>
            </Fragment>
        )
    }

    return (
        <div className="im-a-parent" onClick={handleTurnOnTV}> 
            {renderChannel()}
            <hr />
            <button 
                disabled={shouldTurnOffTV}
                className="im-a-child-button" 
                onClick={handleChangeChannel}
            >
                Change Channel
            </button>
        </div>
    );

}

export default TV;
```

Example written as a Functional Component utilizing React Hooks

🤔 And here’s what happens when we run the code:

1.  When we click `Change Channel`, the channel is increased. Notice that the other two event handlers do not run.
2.  When we click `Turn Off TV`, the UI changes and if we try to click anywhere outside the parent div, the other two event handlers do not run.
3.  When we click inside the outer parent div when the TV is turned off, only one event handler is run.

Please note: In my example above I’m using `state = {}` instead of `constructor(){...}`. This is because when `Babel` (a JavaScript compiler) converts your React code, it spits out a `constructor` with everything inside. If you know this, feel free to skip the image below:

![](https://www.freecodecamp.org/news/content/images/2021/09/image-27.png)

Screenshot by Mariya Diminsky taken from [Babel](https://babeljs.io/)

### An Even Simpler Fix

So that’s one way to go about it  – but there’s an even simpler fix!

Simply check inside the event handler if the `target` (what was clicked) is the same as the `eventTarget` (the event handler listening to the event).

If it’s the same, then you can just call `stopPropagation`. Here’s a quick example below:

```javascript
...

const Modal = ({ header, content, cancelButtonText, confirmButtonText, history, handleConfirm }) => {
    const handleCancel = (event) => {
        stopEventPropagationTry(event);

        // do something here
    }

    const handleConfirmButton = (event) => {
        stopEventPropagationTry(event);

        // do something here
    }
    
    // so elements with multiple event handlers aren't unnecessarily 
    // called more than once(ie. SyntheticEvent Bubbling)
    export const stopEventPropagationTry = (event) => {
        if (event.target === event.currentTarget) {
            event.stopPropagation();
        }
    }

    return createPortal(
        <div onClick={handleCancel} className="ui dimmer modals visible active">
            <div className="ui tiny modal visible active">
                <div className="header">{header}</div>
                <div className="content">{content}</div>
                <div className="actions">
                    <button onClick={handleCancel} className="ui button">{cancelButtonText}</button>
                    <button onClick={handleConfirmButton} className="ui red button">{confirmButtonText}</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
```

## You did it! ✨🎉✨

You’ve made it through this article and now hopefully you understand event bubbling and event catching like a pro. Yay!

Now you know:

-   What Event Delegation means and how Event Bubbling and Event Capturing work.
-   How Event Propagation works differently in JavaScript and React.
-   You have a better understanding of both the benefits and caveats with event handling in React.
-   Several methods you can use to fix issues that may come up for your particular case.
-   The difference between `Event.target` and `Event.currentTarget` as well as that the event triggered is not always the same as the one with the event listener attached to it.
-   How Event Propagation happens in modern JavaScript and how to use `useCapture` parameter if you need to use the Capturing Phase.
-   You learned that not all Events bubble in native JavaScript as well as some of their aliases that do Bubble.
-   You also learned that almost all React’s SyntheticEvents (other than some updates in React Version 17) do bubble.
-   Lastly, you now have a better understanding on how to handle the edge case of an outer parent needing to fire without stopping other event handlers by utilizing React state.

### More Resources / Further reading:

-   [https://www.youtube.com/watch?v=Q6HAJ6bz7bY](https://www.youtube.com/watch?v=Q6HAJ6bz7bY)
-   [https://javascript.info/bubbling-and-capturing](https://javascript.info/bubbling-and-capturing)
-   [https://www.w3.org/TR/uievents/](https://www.w3.org/TR/uievents/)
-   [https://chrisrng.svbtle.com/event-propagation-and-event-delegation](https://chrisrng.svbtle.com/event-propagation-and-event-delegation)
-   [https://jsbin.com/hilome/edit?js,output](https://jsbin.com/hilome/edit?js,output)

👋🏻Hi there! 👩🏻‍💻I'm Mariya Diminsky, a passionate self-taught [Software Engineer](https://github.com/maariyadiminsky). I've worked as a Full Stack Engineer, a Frontend Developer (I 💖 React), and a Unity/C# developer. I'm also the Founder of [TrinityMoon Studios](https://trinitymoonstudios.com/) and creator of [The Girl Who Knew Time](https://play.google.com/store/apps/details?id=com.trinitymoonstudios.thegirlwhoknewtime).

✨🥰 If you enjoyed the read and would like to learn more about various React/System Design topics and more, consider following to get the latest updates. 🎉
