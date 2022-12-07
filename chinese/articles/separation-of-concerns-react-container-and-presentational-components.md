> -  原文地址：[Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：
> -  校对者：

![Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/container-and-presentational-component-pattern-image.jpeg)

Many new React developers combine logic and presentation inside the same React component. And they may not know why it's important to separate these two – they just want to make it work.

But later, they'll find that they need to make changes to the file and doing so becomes a humungous task. Then they'll have to re-work things to separate these two parts.

This comes from not knowing about the separation of concerns and the presentation and container components pattern. That's why I'm going to teach you about them so you can mitigate this problem early in your project's development lifecycle.

In this article, we are going to dive into container and presentational components and briefly touch on the concept of separation of concerns.

Without further ado, let's get started!

## Table of Contents

-   [What is the separation of concerns?](#whatistheseparationofconcerns)
-   [What are presentation and container components?](#whatarecontainerandpresentationalcomponents)
-   [Why do we need these components?](#whydoweneedthesecomponents)
-   [Presentation and container component example](#presentationandcontainercomponentexample)
-   [How to replace container components with React hooks](#howtoreplacecontainercomponentswithreacthooks)
-   [Summary](#summary)

## What is the Separation of Concerns?

Separation of concerns is a concept that is widely used in programming. It states that logic that performs different actions should not be groupled or combined together.

For example, what we discussed in the introduction section violates the separation of concerns, because we placed the logic of fetching the data and presenting the data in the same component.

To solve this and to adhere to the separation of concerns, we should separate these two pieces of logic – that is, fetching data and presenting it on the UI – into two different components.

This is were the container and presentation component pattern will help us solve this issue. In the following sections, we are going to dive deep into this pattern.

## What are Container and Presentational Components?

To achieve a separation of concerns we have two types of components:

-   Container components
-   Presentational components

### Container components

These are the components that provide, create, or hold data for the children components.

The only job of a container component is to handle data. It does not consist of any UI of its own. Rather, it consists of presentational components as its children that uses this data.

A simple example would be a component named `FetchUserContainer` that consists of some logic that fetches all the users.

### Presentational components

These are the components whose primary responsibility is to present the data on the UI. They take in the data from the container components.

These components are stateless unless they need their own state for rendering the UI. They do not alter the data that they receive.

An example of this would be a `UserList` component that displays all the users.

## Why Do We Need These Components?

To understand this, let's take a simple example. We want to display a list of posts that we fetch from the [JSON placeholder API](https://jsonplaceholder.typicode.com/). Here is the code for the same:

```tsx
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * An example of how we shouldn't combine the logic and presentation of data.
 */
export default function DisplayPosts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

// Logic
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

// Presentation
  return isLoading ? (
    <span>Loading... </span>
  ) : posts ? (
    <ul>
      {posts.map((post: Post) => (
        <li key={`item-${post.id}`}>
          <span>{post.title}</span>
        </li>
      ))}
    </ul>
  ) : (
    <span>{JSON.stringify(error)}</span>
  );
}
```

Here is what this component does:

-   It has 3 state variables: `posts`, `isLoading`, and `error`.
-   We have a `useEffect` hook that consists of the business logic. Here we are fetching the data from the API: `[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)` with the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
-   We make sure that when the data is fetched, we store it in the `posts` state variable using `setPosts`.
-   We also make sure that we toggle the `isLoading` and `error` values during the respective scenarios.
-   We put this entire logic inside an async IIFE.
-   Finally, we return the posts in the form of an unordered list and map through all the posts that we fetched earlier.

The problem with the above is that the logic of fetching the data and displaying the data is coded into a single component. We can say that the component is now tightly coupled with the logic. This is the exact thing that we don’t want.

Below are some reasons as to why we require container and presentational components:

-   They help us create components that are loosely coupled
-   They help us maintain separation of concerns
-   Code refactoring becomes much easier.
-   Code becomes more organized and maintainable
-   It makes testing much easier.

## Presentation and Container Component Example

Ok, enough talk – let’s get things working by starting off with a simple example. We are going to use the same example as above – fetching the data from a JSON placeholder API.

Let's understand the file structure here:

-   Our container component will be `PostContainer`
-   We will be having two presentation components:
    -   `Posts`: A component that has an unordered list.
    -   `SinglePost`: A component that renders a list tag. This will render each element of the list.

Note: We are going to store all the above components in a separate folder named `components`.

Now that we know which things go where, let's start off with the container component: `PostContainer`. Copy-paste the below code into the `components/PostContainer.tsx` file

```tsx
import { useEffect, useState } from "react";
import { ISinglePost } from "../Definitions";
import Posts from "./Posts";

export default function PostContainer() {
  const [posts, setPosts] = useState<ISinglePost[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setPosts(data.filter((post: ISinglePost) => post.userId === 1));
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <span>Loading... </span>
  ) : posts ? (
    <Posts posts={posts} />
  ) : (
    <span>{JSON.stringify(error)}</span>
  );
}
```

From the example we saw in the previous section of this article, the above code just contains the logic of fetching the data. This logic is present in the `useEffect` hook. Here this container component passes this data to the `Posts` presentational component.

Let's have a look at the `Posts` presentational component. Copy-paste the below code in the `components/Posts.tsx` file:

```tsx
/**
 * A presentational component
 */

import { ISinglePost } from "../Definitions";
import SinglePost from "./SinglePost";

export default function Posts(props: { posts: ISinglePost[] }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {props.posts.map((post: ISinglePost) => (
        <SinglePost {...post} />
      ))}
    </ul>
  );
}
```

As you can see, this is a simple file that consists of a `ul` tag – an unordered list. This component then maps over the `posts` that are being passed as props. We pass each to the `SinglePost` component.

There is another presentational component that renders the list tag, that is the `li` tag. It displays the title and the body of the post. Copy-paste the below code in the `components/SinglePost.tsx` file:

```tsx
import { ISinglePost } from "../Definitions";

export default function SinglePost(props: ISinglePost) {
  const { userId, id, title, body } = props;
  return (
    <li key={`item-${userId}-${id}`} style={{ width: 400 }}>
      <h4>
        <strong>{title}</strong>
      </h4>
      <span>{body}</span>
    </li>
  );
}
```

These presentational components, as you can see, just display the data on the screen. That’s all. They don’t do anything else. Since they are just displaying the data here, they will also have their own styling.

Now that we have setup the components, let's look back on what we have achieved here:

-   The concept of separation of concerns is not violated in this example.
-   Writing unit tests for each component becomes easier.
-   Code maintainability and readability are much better. Thus our codebase has become much more organized.

We have achieved what we wanted here, but we can further enhance this pattern with the help of hooks.

## How to Replace Container Components with React Hooks

Since **React 16.8.0**, it has become so much easier to build and develop components with the help of functional components and hooks.

We are going to leverage these capabilities here and replace the container component with a hook.

Copy-paste the below code in the `hooks/usePosts.ts` file:

```tsx
import { useEffect, useState } from "react";
import { ISinglePost } from "../Definitions";

export default function usePosts() {
  const [posts, setPosts] = useState<ISinglePost[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setPosts(data.filter((post: ISinglePost) => post.userId === 1));
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    posts,
    error
  };
}
```

Here we have,

-   Extracted logic that was present in the `PostContainer` component into a hook.
-   This hook will return an object that contains the `isLoading`, `posts`, and `error` values.

Now we can simply remove the container component `PostContainer`. Then, rather than passing the container's data to the presentational components as a prop, we can directly use this hook inside the `Posts` presentational component.

Make the following edits to the `Posts` component:

```tsx
/**
 * A presentational component
 */

import { ISinglePost } from "../Definitions";
import usePosts from "../hooks/usePosts";
import SinglePost from "./SinglePost";

export default function Posts(props: { posts: ISinglePost[] }) {
  const { isLoading, posts, error } = usePosts();

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : posts ? (
        posts.map((post: ISinglePost) => <SinglePost {...post} />)
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </ul>
  );
}
```

By making use of hooks we have eliminated an extra layer of component that was present on top of these presentational components.

With hooks, we achieved the same results as that of the container/presentational components pattern.

## Summary

So in this article, we learned about:

-   Separation of concerns
-   Container and presentational components
-   Why we need these components
-   How hooks can replace container components

For further reading I would highly recommend going through the [react-table:](https://tanstack.com/table/v8/). This library extensively uses hooks and it has great examples.

You can find the entire code for this article in this [codesandbox](https://codesandbox.io/s/container-presentation-pattern-lm1osl?file=/src/components/PostContainer.tsx).

Thanks for reading!

Follow me on [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar), and [LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/).