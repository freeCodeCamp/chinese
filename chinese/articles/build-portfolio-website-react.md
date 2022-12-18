> -  原文地址：[How to Build a Portfolio Website with React](https://www.freecodecamp.org/news/build-portfolio-website-react/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：luojiyin
> -  校对者：

![如何使用React创建一个作品集网站](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/react-portfolio-2021.png)

今天，你将为自己创建一个最重要的应用程序，你的作品集。

每个React开发者或者Web开发者通常需要向潜在的客户或者雇主，展示他们能做什么。

这是我们现在要做的，在一些行业标准工具帮助下，包括React，Tailwind CSS，和Netlify。

开始吧!

## 作品集是怎样的？

![](https://www.freecodecamp.org/news/content/images/2021/06/portfolio-1-min.gif)

这是你将要建立的最终版本。

它的作用是展示你自己，你做过什么项目，你在做这些项目的时用了什么技能，还有一个联系列表，以便客户或者雇主联系上你。

## 我们将使用什么工具？

-   我们将用React来创建应用程序的用户界面。它将允许我们通过可重复使用的组件来组成登录页面的每一部分，和添加我们想要的功能，如果博客。
-   为了设计我们的应用程序， 我们将使用Tailwind CSS。为了给我们的应用程序一个专业的外观，Tailwind允许我们通过在React元素上组合类名(classnames)。
-   为了把我们的应用程序部署收到网络上，我们将使用免费的Netlify。通过CDN的帮助下，用户可以通过我们自己的的域名，快速访问到我们的项目。

## 怎样开始

**[你可以在这里下载我们项目的开始文件](https://reedbarger.com/resources/react-portfolio-2021)**

当你获取到代码，你要做的是把你的(解压好)的项目文件夹拖到你的代码编辑器中然后在终端运行命令。

```bash
npm install
```

然后可以开始了！

## 我需要什么工具来构建我的作品集？

创建我们的应用程序从开始到部署，需要以下的条件。

1.  你的电脑安装Node.js。 你可以在nodejs.org下载安装程序。
2.  在你的电脑安装Git，你可以在git-scm.com下载。
3.  我建议使用VS Code作为你的代码编辑器。你可以在code.visualstudio.com下载它。
4.  一个在Netlify.com上的免费的Netlify账户。
5.  一个免费的 GitHub账号。

## 如何建立作品集的结构

使用React的好处是，我们可以将我们的应用程序扩展到任意多的页面，并添加大量的内容，这是非常容易的。

在我们只是在处理一个页面，我们可以在我们的应用程序组件中非常迅速找到需要的不同组件。我们将在顶部有一个导航栏，上面有所有的链接，可以跳转到我们作品集的不同部分。

在此之后，我们将包含一个部分，这是关于我们的项目，推荐书，最后是我们的联系表格。

这种快速的规划使我们能够弄清楚我们的组件怎样命名，以什么顺序命名。下一步，把它们全部添加到我们的App.js文件中(在src文件夹):

```js
// src/App.js

import React from "react";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
```

## 如何创建我们的组件

现在我们已经列出这些我们创建的组件，

在我们的源代码(src)文件夹中，我们将创建一个`components`的文件夹，里面有我们需要的所有文件。
```
my-portfolio
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── data.js
    ├── index.css
    ├── index.js
    └── components
        ├── About.js
        ├── Contact.js
        ├── Navbar.js
        ├── Projects.js
        ├── Skills.js
        └── Testimonials.js
```

 然后我们将创建每个React组件的基本结构，并从该文件导出,通过使用`export default`:

```js
// src/components/About.js

export default function About() {}

// repeat the same basic structure for all 6 components (在所有的6个组件中重复相同的结构)
```

最后在App.js中导入它:

```js
// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
```

_请注意，总共应该有个6个组件_

## Tailwind CSS介绍

做完上面的，我们可以开始使用Tailwind CSS，给我们的应用程序一个基本的外观。

使用Tailwind CSS的好处，我们不必在CSS样式中手工编写任何样式。我们所做的就是组合多个类(class)来创建我们想要的外观。

```js
// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
```

## 如何构建 `About` 组件

从我们的第一部分开始，在`about`部分，这包含对我们的基本介绍和我们的擅长的技能。

它还将包含联系表格的链接，以及我们过去的项目。由于这些链接将指向同一页面的不同部分，我们能使用哈希值
"/#projects "和"/#contact"。

为了使这些链接，能跳转到每个部分，我们把项目部分`id`的属性设置为`projects`，把联系部分的`id` 属性设置为`contact`。
```js
// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
```

对于本节右侧的图片，我使用的`public`文件夹中的一个svg文件(coding.svg)。

这个图片只是作为一个临时的占位符，我强烈建议使用你自己的图片。

## 如何构建`projects`组件。

我们的项目部分是由一个`section`元素组成，id为`prpjects`。这将是包含所有项目的图片组成的画廊。

```js
// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

注意，我们还将使用库`@heroicons/react`，以便将SVG图片写成React组件。

我们从同一个文件夹中的`data.js`文件导入一个项目数组。在那里，我们导出一个对象数组，每个对象包含项目的数据。

```js
// src/data.js

export const projects = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-1.gif",
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-3.gif",
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-4.gif",
    link: "https://pythonbootcamp.com",
  },
];
```

## 怎么构建`Skills`组件

让我们填写我们的会的技能和技术的部分。

这将包含一个简单的清单，列出在我们的雇主或客户的项目中，使用的主要工具。

再一次，我们将从`data`文件夹导入一个数组。但是这个数组是由字符串组成，是我们所知道的技能，如JavaScript，React和Node。

```js
// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 怎么构建 `Testimonials` 组件

在`Testimonials`组件中，我们将列出一些过去的比较熟悉的客户的推荐信。

这些将由几个卡片组成，里面有推荐人和推荐人所在的公司。

我们将导入一个含推荐信息的数组，里面的对象包含了评价，图片和公司。
```js
// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 怎样构建`Contact`组件

在登录页的尾部，我们将加入我们的联系表格，以便潜在的雇主能联系到我们。

这个表格包含3个输入：姓名、电子邮件和输入信息。

为了接收这些表格所提交的信息，我们将使用Netlify表格工具，非常容易保存处理这些信息。

```js
// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                reedbarger@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
```

## 如何潜入`Google Maps` 位置

在表格的左边，我们将一个`Google Maps`嵌入，显示我们的所在位置。

我们可以在一个在线工具(embed-map.com)的帮助下这样做。你所要做的事只是输入你的位置并点击`Generate HTML code`

在给我们生成的代码中，不要复制所有的代码，只要复制ifame中的`src`属性，然后替换掉`src`的默认值。
![](https://www.freecodecamp.org/news/content/images/2021/06/portfolio-2.png)

向Netlify发送任何提交的表单数据，Netlify Forms需要将从静态HTML中识别表单。因为的我们的React应用是由Javascript控制的，而不是普通的HTML组成，所以我们需要在`public`文件夹下的index.html文件中添加一个隐藏的表单。

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- head content skipped -->
  </head>
  <body>

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
  
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

我们需要隐藏这个表单，因为它不需要被用户看到，它只需要被Netlify看到。

## 如何从联系表单提交

完成上面这些，我们将回到Contact.js。我们将使用Javascript提交这个表单。

```js
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");
```

我们将在`onChange`处理程序的帮助下，将用户在每个输入项的信息存储在`state`。

```js
// src/components/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                reedbarger@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
```

正如你在上面看到的，我们正在用一个特殊的`encode`(编码)函数对表单数据进行编码。

## 如何构建`Navbar`组件

最后一步是构建我们的`Navbar`组件。

```js
// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Reed Barger
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
```

如何在较大的设备上将`Navbar`组件在页面的顶部显示？我们将使用`md:sticky`类添加到`header`元素。

## 如何部署的你作品集

现在为了使我们的作品集上线，我们需要把我们的应用程序推送到Github。

一旦你熟悉了这个流程，我们可以首先创建一个新的Github仓库。之后，我们将运行`git add .`，`git commit -m "Deploy"`，创建我们的git 远程，然后`git push -u orgin master`。

一旦我们的项目建立在Github上，我们就可以去Netlify，选择`Choose Site from Git`。然后选择Github作为我们的持续部署，并选择我们刚刚推送代码的Github仓库。

![](https://www.freecodecamp.org/news/content/images/2021/06/portfolio-3-min.gif)

之后，我们的项目将自动部署到网络上！

## 下一步是什么？

祝贺你！你现在在网上由一个作品集的应用程序，向潜在雇主展示你的所有的项目和技能。

下一步要做的事设置一个自己的域名，最好用你的名字(i.e. [reedbarger.com](https://reedbarger.com/)). 
由于Netlify包含一个DNS，你可以很容易在他们那里设置一个自己的域名。

可以考虑在你的React应用程序中，添加一个博客，向潜在的雇主展示你更多的开发知识。

个人作品集是作为一个开发者所热衷表达自己的方式，你会从中获得成就。

## 想获得学习React的方法？

**[The React Bootcamp](http://bit.ly/join-react-bootcamp)** 本书有你应该学习React的所有知识，里面有视频、手册，还有特别的奖金。

 获得内幕信息 **100s** ，开发人员通过已经掌握React，找到他们梦想的工作，并掌握他们的未来

[![The React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](http://bit.ly/join-react-bootcamp)  
_点击这里，将得到通知，当它开放时_