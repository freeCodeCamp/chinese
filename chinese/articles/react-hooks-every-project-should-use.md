> -  原文地址：[React Hooks You Can Use in Every Project – Explained with Examples](https://www.freecodecamp.org/news/react-hooks-every-project-should-use/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：
> -  校对者：

![React Hooks You Can Use in Every Project – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/7-react-hooks.png)

Hooks are one of the most powerful features of React.

They enable us to easily reuse functionality across our application's components. What's best about hooks is their reusability – you can reuse your hooks both across components and your projects.

Here are seven of the most important React hooks that I reuse across every react project I create. Give them a try today and see if they're as useful for you when building your own React apps.

Looking for a great resource to learn React in 2023? Check out the [**React Bootcamp**](https://reactbootcamp.com).

Before we begin, it's important to clarify that not every custom React hook needs to be written by you. In fact, all of the hooks that I will mention come from the library `@mantine/hooks`.

Mantine is great third-party library that includes these hooks and many more. They will add just about every significant feature to your React app that you can think of.

You can check out the documentation for `@mantine/hooks` at [mantine.dev](https://mantine.dev).

## The `useIntersection` Hook

When a user scrolls down the page in your application, you may want to know when an element is visible to them.

For example, you might want to start an animation only when a user sees a specific element. Or, you may want to show or hide an element after they've scrolled a certain amount down the page.

![use-intersection](https://www.freecodecamp.org/news/content/images/2023/01/use-intersection.gif)

useIntersection demo

To get information about whether an element is visible, we can use the **Intersection Observer API.** This is a JavaScript API that's built into the browser.

We can use the API on its own using plain JavaScript, but a great way to get information about whether a particular element is being intersected within its scroll container is to use the `useIntersection` hook.

```js
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <main ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div ref={ref}>
        <span>
          {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
        </span>
      </div>
    </main>
  );
}
```

To use it, all we need to do is call the hook in our component and provide a root element. Root is the scroll container, and this can be provided as a ref with the `useRef` hook. `useIntersection` returns a ref which we pass to the target element, whose intersection in the scroll container we want to observe.

Once we have a reference to the element, we can keep track of whether the element is intersecting or not. In the example above, we can see when the element is obscured or when it's fully visible based off the value of `entry.isIntersecting`.

You can pass additional arguments that allow you to configure the **threshold** which is related to what percentage of the target is visible.

## The `useScrollLock` Hook

Another hook related to scrolling is the `useScrollLock` hook. This hook is very simple: it enables you to lock any scrolling on the body element.

I have found it to be helpful whenever you want to display an overlay or a modal over the current page and do not want to allow the user to scroll up and down on the page in the background. This lets you either focus attention on the modal or allow scrolling within its own scroll container.

```js
import { useScrollLock } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';
import { IconLock, IconLockOpen } from '@tabler/icons';

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <IconLock size={16} /> : <IconLockOpen size={16} />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}
```

`useScrollLock` locks the user's scroll at their current position on the page. The function returns an array, which can be destructured, as in the code above.

The second value is a function that allows us to lock the scroll. The first destructured value, on the other hand, is a boolean that tells us whether the scroll has been locked or not.

This value is useful for example, if you want to show certain content when the scroll is locked or to tell the user that it has been locked. You can see in the example below that we are indicating within our button when the scroll has been locked or unlocked.

![use-scroll-lock](https://www.freecodecamp.org/news/content/images/2023/01/use-scroll-lock.gif)

useScrollLock demo

## The `useClipboard` Hook

In many cases, you want to provide a button that allows the user to copy something to their clipboard, which is where copied text is stored.

A great example of this is if you have a code snippet on your website and you want to users to easily copy it. For this, we can use another web API – the **Clipboard API**.

`@mantine/hooks` gives us a convenient `useClipboard` hook, which returns a couple of properties: `copied`, which is a boolean that tells us whether a value has been copied to the clipboard using the hook as well as a `copy` function, to which we can pass whatever string value we like to it to be copied.

In our example, we would like to copy a code snippet for our users to paste where they like, as seen in the video below:

![use-clipboard](https://www.freecodecamp.org/news/content/images/2023/01/use-clipboard.gif)

useClipboard demo

We call our `copy` function when they hit our designated copy button, pass to it the code snippet, and then show a little checkmark or something that indicates to them that the text has been copied.

What's neat is the `useClipboard` hook comes with a **timeout value**. After a given timeout period, which is in milliseconds, the copied state will be reset, showing the user that they can copy the text again.

## The `useDebouncedValue` Hook

The next hook, `useDebouncedValue`, is essential if you have a search input in your app.

Whenever a user performs a search using an input, the search operation usually involves an HTTP request to an API.

A typical problem you will encounter, especially if you want your users to receive search results as they are typing, is that a query (request) will be performed on every keystroke. Even for a simple search query, there is no need to perform so many requests before a user has finished typing what they want.

This is a great use case for the `useDebounceValue` hook, which applies a debounce function on the text that's has been passed to it.

```js
import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { getResults } from 'api';

function Demo() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([])
  const [debounced] = useDebouncedValue(value, 200); // wait time of 200 ms
    
  useEffect(() => {
    if (debounced) {
      handleGetResults() 
    }
     
    async function handleGetResults() {
       const results = await getResults(debounced)   
       setResults(results)
    }
  }, [debounced])

  return (
    <>
      <input
        label="Enter search query"
        value={value}
        style={{ flex: 1 }}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <ul>{results.map(result => <li>{result}</li>}</ul>
    </>
  );
}
```

You store the text from your input in a piece of state with `useState` and pass the state variable to `useDebouncedValue`.

As the second argument to that hook, you can provide a wait time, which is the period of time that the value is debounced. The debounce is what enables us to perform far fewer queries.

You can see the result in the video below where the user types something and only after 200 milliseconds, do we see the debounced value.

![use-debounced-value](https://www.freecodecamp.org/news/content/images/2023/01/use-debounced-value.gif)

useDebouncedValue demo

## The `useMediaQuery` Hook

Another very useful hook that I use all the time is the `useMediaQuery` hook.

Media Queries are used in plain CSS and the `useMediaQuery` hook allows us to subscribe to whatever media query we pass to the hook.

For example, within our component, let's say that we want to show some text or change the styles of a component based off of a certain screen width, such as 900 pixels. We provide a media query just like we would in CSS and `useMediaQuery` returns to us a `matches` value which is either true or false.

```js
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <div style={{ color: matches ? 'teal' : 'red' }}>
      {matches ? 'I am teal' : 'I am red'}
    </div>
  );
}
```

It tells us the result of that media query in JavaScript, which is particularly useful when we have styles that we want to change directly within our JSX using the `style` prop, for example.

![use-media-query](https://www.freecodecamp.org/news/content/images/2023/01/use-media-query.gif)

useMediaQuery

In short, this is an essential hook for those handful of cases in which CSS cannot be used to handle media queries.

## The `useClickOutside` Hook

This next hook – `useClickOutside` – might seem like a strange one, but you'll see how important it is when you actually need it.

When you develop a dropdown or something that pops up in front of a page's content and needs to be closed afterwards (such as a modal or drawer), this hook is indispensable. It's very easy to open one of these types of components by clicking a button. Closing these components is a little harder.

To follow good UX practices, we want anything that obstructs our user's view to be easily closable by clicking outside of the element. This is specifically what the `useClickOutside` hook lets us do.

When we call `useClickOutside`, it returns a ref that we must pass to the element outside of which we want to detect clicks. Usually that element is going to be controlled by a boolean piece of state such as the one we have in our example below (that is, the value `opened`).

```js
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <button onClick={() => setOpened(true)}>Open dropdown</button>
      {opened && (
        <div ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </div>
      )}
    </>
  );
}
```

`useClickOutside` accepts a callback function which controls what happens when you actually click outside that element.

In most cases, we want to do something quite simple, which is to just close it. To do so, you'll likely need to have a state setter (like `setOpened`) and pass it a value of false to then hide your overlayed content.

![use-click-outside](https://www.freecodecamp.org/news/content/images/2023/01/use-click-outside.gif)

useClickOutside demo

## The `useForm` Hook

My favorite and most helpful hook in this list is the `useForm` hook.

This hook comes specifically from Mantine and involves installing a specific package from the library: `@mantine/form`. It should give you everything that you need to create forms in React, including the ability to validate inputs, display error messages, and ensure the input values are correct before the form is submitted.

`useForm` accepts some initial values which correspond to whatever inputs you have within your form.

```js
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    initialValues: {
      email: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
```

The great benefit of `useForm` is its helpers, such as the `validate` function, which receives the value that's been typed in to each input then allows you to create validation rules.

For example, if you have an email input, you might have a regular expression to determine whether it is in fact a valid email (as you can see in the code above). If not, then you can show an error message and prevent the form from being submitted.

![use-form](https://www.freecodecamp.org/news/content/images/2023/01/use-form.gif)

useForm demo

How do you get the values that have been typed into the form?

Mantine provides a very convenient helper called `getInputProps`, where you simply provide the name of the input you're working with (like email) and it automatically sets up an onChange to keep track of the values that you've typed into your form.

Additionally, to handle form submission and prevent submission if its values do not pass validation rules, it has a special `onSubmit` function which you wrap around your regular onSubmit function. On top of applying the validation rules, it will take care of calling `preventDefault()` on the form event so that you don't have to do it manually.

I am just scratching the surface with this hook, but I would highly recommend you use it for your next project. Forms are traditionally a pain to get working properly, especially forms that require validation and visible error messages. `useForm` makes it incredibly easy!

## **Want the All-in-one Way to Learn React?**

As we've seen in this post, there are tons of powerful hooks that we can use to build our applications.

If you want to really learn React in depth, including writing and using amazing hooks like these, I have made a complete resource for you called the [**React Bootcamp**](https://reactbootcamp.com).

It will teach you everything you need to be a React pro, from the fundamentals of the library (even if you've never used it before) to building complete, fullstack applications.

Just click the link below to get started. Enjoy!

[![Click to join the React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](https://reactbootcamp.com)  
_Click to join the React Bootcamp_