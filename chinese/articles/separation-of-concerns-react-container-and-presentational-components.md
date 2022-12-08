> - 原文地址：[Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/)
> - 原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> - 译者：Papaya HUANG
> - 校对者：

![Separation of Concerns in React –How to Use Container and Presentational Components](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/container-and-presentational-component-pattern-image.jpeg)

许多 React 新手会将逻辑和展示代码放在同一个 React 组件中，不知道将两者分离的重要性，对于他们来说，最重要的是代码能运行。

但之后当他们需要对文件进行改动，就面临一项艰巨的任务。这个时候他们就得重新考虑将两者分离的问题。

产生问题的原因是他们不了解关注点分离的概念、展示组件和容器组件模型。所以我将在这篇文章讲解这方面内容，帮助你在项目开发早期缓解这个问题。

本文将深入探讨容器和展示组件，稍微讲解一下关注点分离。

话不多说，让我们开始吧！

## 目录

- [什么是关注点分离](#whatistheseparationofconcerns)
- [什么是容器组件和展示组件？](#whatarecontainerandpresentationalcomponents)
- [为什么需要这两种组件?](#whydoweneedthesecomponents)
- [展示组件和容器组件示例](#presentationandcontainercomponentexample)
- [如何通过 React 钩子取代容器组件](#howtoreplacecontainercomponentswithreacthooks)
- [总结](#summary)

<h2 id="whatistheseparationofconcerns">什么是关注点分离</h2>

关注点分离是一个在编程中广泛使用的概念。它指的是执行不同操作的逻辑不应被分组或结合在一起。

例如接下来的代码示例就违反了关注点分离。我们把获取数据和展示数据放在了同一个组件中。

若要解决这个问题，并且遵循关注点分离，我们应该将两块（即：获取数据和在 UI 上展示）逻辑分开放置在不同的组件。

此时就需要容器组件和展示组件模式。在下文将做详细讲解。

<h2 id="whatarecontainerandpresentationalcomponents">什么是容器组件和展示组件？</h2>

为了实现关注点分离我们需要两种类型的组件：

- 容器组件
- 展示组件

### 容器组件

是提供、创建和持有数据并服务于子组件的组件。

容器组件的唯一工作是处理数据。它不包含自己的任何 UI。相反，展示组件作为使用这些数据的子组件。

一个简单的示例就是 `FetchUserContainer` 组件，包含获取所有用户的逻辑。

### 展示组件

主要职责是在 UI 上呈现数据。从容器组件中获取数据。

这些组件是无状态的，除非它们需要状态来呈现 UI。它们不会更改收到的数据。

一个简单的示例就是 `UserList`组件，展示所有用户。

<h2 id="whydoweneedthesecomponents">为什么需要这两种组件?</h2>

我们可以通过一个示例来理解，假设我们需要展示一份从[JSON placeholder API](https://jsonplaceholder.typicode.com/)获取的帖子列表。代码如下：

```typescript
import { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * 我们不应该把逻辑和数据展示结合的例子
 */
export default function DisplayPosts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  // 逻辑
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  //展示
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

这个组件做了这些事：

- 它包含三个变量： `posts`, `isLoading` 和 `error`.
- 使用 `useEffect` 来处理业务逻辑。 从 API 获取数据： `[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)`，获取方法采用的是[fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)。
- 确保数据获取完毕后，使用 `setPosts`存储到 `posts`状态。
- 确保在不同的场景变换 `isLoading` 和 `error` 的值。
- 将这个逻辑放置在一个异步的 IIFE（立即调用函数）。
- 最后，我们以无序列表的形式返回帖子并映射我们获取的所有帖子

上面的问题是获取数据和显示数据的逻辑被编码到一个组件中。可以说组件现在与逻辑高耦合。这正是我们不想要的。

以下是我们需要容器和展示组件的原因：

- 创建低耦合的组件
- 保持关注点分离
- 代码更易重构
- 代码更有组织性和可维护性
- 更易测试

<h2 id="presentationandcontainercomponentexample">展示组件和容器组件示例</h2>

好了，讲解部分就到这里——让我们从一个简单的例子开始吧。我们将使用与上面相同的示例——从 JSON placeholder API 获取数据。

先理解文件结构：

- 容器组件为 `PostContainer`
- 有两个展示组件:
  - `Posts`: 展示无序列表
  - `SinglePost`: 呈现单个列表标签的组件。即呈现列表的每个元素。

注意：我们将把上述所有组件存储在一个名为 `components` 的单独文件夹中。

了解文件结构后，让我们从容器组件开始： `PostContainer`。将下面代码复制到 `components/PostContainer.tsx` 文件。

```tsx
import { useEffect, useState } from 'react';
import { ISinglePost } from '../Definitions';
import Posts from './Posts';

export default function PostContainer() {
  const [posts, setPosts] = useState<ISinglePost[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
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

从本文上一节我们看到的例子来看，上面的代码只是包含了获取数据的逻辑。此逻辑存在于 `useEffect` 中。容器组件将数据传递给 `Posts` 展示组件。

让我们看一看 `Posts` 展示组件。将下面代码复制粘贴到 `components/Posts.tsx` 文件：

```tsx
/**
 * 展示组件
 */

import { ISinglePost } from '../Definitions';
import SinglePost from './SinglePost';

export default function Posts(props: { posts: ISinglePost[] }) {
  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {props.posts.map((post: ISinglePost) => (
        <SinglePost {...post} />
      ))}
    </ul>
  );
}
```

如你所见，这是一个简单的文件，包含一个 `ul` 标签——一个无序列表。该组件映射作为 props 传递的`posts`。然后传递给 `SinglePost` 组件。

还有另一个呈现列表标签的展示组件，即 `li` 标签。它显示帖子的标题和正文。将以下代码复制粘贴到 `components/SinglePost.tsx` 文件中：

```tsx
import { ISinglePost } from '../Definitions';

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

正如你所见，这些展示组件只是在屏幕上显示数据。就这样。其他什么都不做。由于它们用于显示数据，因此会有自己的样式。

我们已经设置好组件，让我们回顾一下做了些什么：

- 在例子中没有违反关注点分离的概念。
- 为每个组件编写单元测试变得更加容易。
- 代码的可维护性和可读性要好得多。因此，我们的代码库变得更有条理。

我们实现了我们想要的，但是我们利用钩子进一步增强这个模式。

<h2 id="howtoreplacecontainercomponentswithreacthooks">如何通过React钩子取代容器组件</h2>

自**React 16.8.0**以来，借助函数组件和钩子构建和开发组件变得更加容易。

我们将利用这一能力，用钩子替换容器组件。

将以下代码复制粘贴到 `hooks/usePosts.ts` 文件中：

```tsx
import { useEffect, useState } from 'react';
import { ISinglePost } from '../Definitions';

export default function usePosts() {
  const [posts, setPosts] = useState<ISinglePost[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
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

在这里：

- 将 `PostContainer` 组件的逻辑提取到挂钩中。
- 此钩子将返回一个包含 `isLoading`、`posts` 和`error`的对象。

现在我们可以简单地移除容器组件 `PostContainer`。然后，我们可以直接在 `Posts` 展示组件中使用这个钩子，而不是将容器的数据作为 `prop` 传递给展示组件。

对`Post`组件进行以下编辑：

```tsx
/**
 * 展示组件
 */

import { ISinglePost } from '../Definitions';
import usePosts from '../hooks/usePosts';
import SinglePost from './SinglePost';

export default function Posts(props: { posts: ISinglePost[] }) {
  const { isLoading, posts, error } = usePosts();

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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

通过使用钩子，我们消除了存在于这些展示组件之上的额外组件层。

使用钩子，我们获得了与容器/展示组件模式相同的结果。

<h2 id="summary">总结</h2>

通过这篇文章，我们学习了：

- 关注点分离
- 容器和展示组件
- 为什么需要这两种组件
- 钩子如何取代容器组件

如果想要了解更多，我强烈推荐你阅读 [react-table:](https://tanstack.com/table/v8/)。这个库使用了大量的钩子都是很好的示例。

你可以在[codesandbox](https://codesandbox.io/s/container-presentation-pattern-lm1osl?file=/src/components/PostContainer.tsx)找到本文的完整代码。

感谢阅读！

可以在[Twitter](https://twitter.com/keurplkar)、[GitHub](https://github.com/keyurparalkar)和[LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/)上关注我。
