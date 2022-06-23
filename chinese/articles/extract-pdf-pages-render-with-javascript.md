> - 原文地址：[How to Extract Pages from a PDF and Render Them with JavaScript](https://www.freecodecamp.org/news/extract-pdf-pages-render-with-javascript/)
> - 原文作者：[Hrishikesh Pathak](https://www.freecodecamp.org/news/author/hrishikesh/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Extract Pages from a PDF and Render Them with JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/pdf-extract.png)

PDF 是便携式文档格式( portable document format)的缩写。PDF 是由 Adobe 在 90 年代为 Windows 设计的。它们是独立的文件，几乎所有主要的操作系统都支持。

但有时你需要修改 PDF 以满足你的需要，而不仅仅是查看它。不幸的是，用于 PDF 的现有软件往往不能满足你的特别要求。

但你是一个程序员，对吗？为什么不做一些软件来帮助 PDF 按你的要求工作呢？嗯，这就是本文的灵感所在。

在这篇文章中，我们将探讨所有流行的 PDF 相关的 JavaScript 库。为什么是 JavaScript？因为它有一些相当不错的 PDF 包可用，而且人们喜欢它。特别是我自己。

## The PDF Viewer Project You Will Build in this Tutorial

![Pdf_Modification_--](https://www.freecodecamp.org/news/content/images/2022/06/Pdf_Modification_--.png)

你将建立的 PDF 阅读器的截图

以下是本教程中，[你将建立的演示](https://hrishiksh.github.io/modify-pdf-fcc/) 。

1. 首先，我们将探索一些流行的 PDF 包，用于 JavaScript 中与 PDF 相关的工作。然后，我们将对它们进行比较，找到适合我们要求的最佳软件包。
2. 接下来，我们将加载一个现有的 PDF，并从中提取一些页面。提取的页面将组成一个新的 PDF 文档。
3. 然后，我们将在浏览器中渲染新的 PDF（我们在第二步中制作的）。
4. 最后，我们将下载新的 PDF 文件供以后使用。

因此，这些就是我们在这里要经历的所有步骤。我希望你能兴奋地看到结果。让我们深入了解一下。

## PDF Libraries for JavaScript

我发现 JavaScript 中的 PDF 库主要有两种类型。一种是用于 PDF 渲染生成，另一种是用于 PDF 操作（或修改）。我在搜索了一个多小时后发现了一堆 PDF 库，这些是我最好的选择。

这里列出的所有软件包都是免费的、开源的软件包。你可以在 npm 注册表中找到所有这些包。

### [pdfjs](https://mozilla.github.io/pdf.js)

该软件包由 Firefox 网络浏览器背后的公司 Mozilla 制作。 pdfjs 是一个基于 Web 标准的解析和呈现 PDF 的平台。
当您在 Firefox 中查看 PDF 时，PDF 查看器是使用此 pdfjs 包制作的。

这个包的核心优势是在网页上进行 PDF 渲染。其他的 PDF 修改功能在这个包里是非常有限的。如果你想为你的网站制作一个自定义的 PDF 浏览器，这可能是你正在寻找的软件包。

pdfjs 有一个非常简单的 API。他们有很多教程可以让你开始使用这个库。如果你还不相信，可以使用这个库一段时间，你一定会爱上它的。

### [pdf-lib](https://pdf-lib.js.org/)

与之前的 pdfjs 包不同，pdf-lib 主要用于 PDF 的创建和操作。你可以根据你的需要用这个包动态地生成一个新的 PDF 文档。

这个包对修改现有文档有强大的支持。你可以用这个库做很多 PDF 的修改。例如，你可以做 PDF 的分割和合并，你可以提取一个页面，注释一个 PDF 文档，添加一个大纲，以及更多你能想象的事情。

它只有 JavaScript 作为一个依赖项。所以，它可以运行在任何有 JavaScript 运行时间的设备上。浏览器、Nodejs、Deno 和 React Native 都得到良好的支持。如果能在设备上安装 JavaScript，那么这个库就肯定能工作。

pdf-lib 的主要缺点是，它没有强大的渲染支持。如果你想用这个库做一个漂亮的 PDF 浏览用户界面，那么 pdf-lib 不是你的正确选择。在这种情况下，你应该使用 pdfjs 来代替。

### [pdfjs](https://github.com/rkusa/pdfjs) #2

如果你认为我在重复自己的话（跟 Mozilla 维护的 `pdfjs` 不一样），那么我没有。这是一个用于创建 PDF 文档的 JavaScript 库。它有一个非常简单的 API 可以使用。

我们之前讨论过的 pdfjs 库在用户界面上有非常强大的渲染支持，但它缺乏 PDF 创建和修改功能。

但这个库是以创建 PDF 为目的而建立的。它有一个非常简单的 API，对初学者很友好。你可以将它与 pdf-lib 包进行比较。

这个 pdfjs 库的主要缺点是，对现有文件的修改支持仍处于测试阶段。它并不是很稳定，而且仍在进行中。

如果你的主要关注点是 PDF 修改（例如，页面提取、合并、拆分、注释等），那么这个库可能不适合你。

如果贡献者能够进行维护，那么这可能是对 JavaScript 来说最好的 PDF 包。

### [js-pdf](https://parall.ax/products/jspdf)

与上面列出的所有 PDF 包不同，这个库是一个完整的野兽。你可以用这个库做任何与 PDF 有关的工作。这就像一个万能的库。如果你想要一些复杂的 PDF 相关的东西，那么这个库可以做到。

但在 JavaScript 中还有更好的包，它们对个别任务非常好。例如，pdfjs 是一个比 js-pdf 更好的 PDF 渲染器，而 pdf-lib 比 js-pdf 有更好的修改支持。

这里我说的不是实际性能或其他类型的指标，我说的是开发者的体验。我发现它的 API 不是很直观。对于一个初学者来说，第一眼就会感到不知所措。不过，这是我的看法，也是我使用它时的体验

PDF 生成是这个库的主要优势。你可以用你的任何设计来生成任何类型的 PDF。这个软件包将为你完成所有繁重的工作。如果你有经验，那么这可能是你的最佳选择。

### [react-pdf](https://react-pdf.org/)

As the name suggests, this library is specialized in React ecosystems. The usage is very React-ish. You can easily create a document with its JSX-like syntax.

You can create and display a PDF document with simple React components. But the features are very limited. This library is mainly for PDF generation.

If your goal is to display a PDF to the user, then you can use this package. As a React lover, you will love this library. Check out their playground and spend some time with this package. This way you will know if you need this library or not.

## Why We'll Use pdf-lib in This Tutorial

Out of all these PDF libraries mentioned above, I'll use pdf-lib for this article. As we are going to split and merge PDF pages and also render them in the browser, pdf-lib seems to be the best choice for this context.

Also, pdf-lib has a pretty simple API to work with and all these APIs are well documented. If you are using TypeScript, you can also get type inference, which is very helpful.

Last but not least, their examples are very good. You can get up and running in a few minutes. So I like this library for my use cases.

## How to Read a Local PDF File in JavaScript

Before doing any operations on our PDF document, we have to get the document from the user. Reading any file in the browser can be handled by `FileReader` web API.

First, we'll make and file input button and then process the uploaded file using the `FileReader` web API.

```html
<input
  type="file"
  id="file-selector"
  accept=".pdf"
  onChange="{onFileSelected}"
/>
```

As the Filereader API works with callbacks, I find async/await a lot cleaner and easier to work with. So let's make a helper function to modify Filereader callbacks into async/await.

```js
function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
```

Now when a user uploads a file using the previous file input, we listen to the file input event and then read the file using this `readFileAsync` function.

The implementation of this logic looks like this in code:

```js
const onFileSelected = async (e) => {
  const fileList = e.target.files;
  if (fileList?.length > 0) {
    const pdfArrayBuffer = await readFileAsync(fileList[0]);
  }
};
```

## How to Extract PDF Pages

Up to this point, our PDF is uploaded and converted into JavaScript `ArrayBuffer`. As we are extracting a range of pages from the PDF, we want an array with those page numbers of the PDF.

Generating an array of natural numbers is not hard in JavaScript. So we make a function named `range()` to generate all the indexes we want.

We have to provide the start page number and end page number and then this `range()` function can generate an array with appropriate page numbers.

```js
function range(start, end) {
  let length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i - 1);
}
```

Here we add -1 at the end. Do you know the reason? Yes – in programming, indexes start from 0, not 1. So we have to deduct -1 from every page number to get the behaviour we want.

Now let's start the main part of this article: the extraction. Before doing any of the work, import the pdf-lib library.

```js
import { PDFDocument } from 'pdf-lib';
```

At first, we load the PDF `ArrayBuffer` we got from the previous `onFileSelected` function. Then we load the `ArrayBuffer` into the `PDFDocument.load(arraybuffer)` function. This is our user-provided PDF. For convenience, we'll call it `pdfSrcDoc`.

Now we'll create a new PDF. All the extracted PDF pages from the user-provided document are merged in the new document. We use the `PDFDocument.create()` function to do that. For ease of use, we call it `pdfNewDoc`.

After that we copy our desired pages from the `pdfSrcDoc` into `pdfNewDoc` by using the `copyPages()` function. Then we'll add the copied page to `pdfNewDoc`.

To save the changes, run `pdfNewDoc.save()`. Let's create a function called `extractPdfPage()` to reuse the logic. The code inside the function will look like this:

```js
async function extractPdfPage(arrayBuff) {
  const pdfSrcDoc = await PDFDocument.load(arrayBuff);
  const pdfNewDoc = await PDFDocument.create();
  const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(2, 3));
  pages.forEach((page) => pdfNewDoc.addPage(page));
  const newpdf = await pdfNewDoc.save();
  return newpdf;
}
```

We are returning a `Uint8Array` from the `extractPdfPage()` function.

## How to Render the PDF in the Browser

As of now, we have a `Uint8Array` of a modified PDF. To render it inside your browser, we have to convert it into a Blob.

Then we'll make a URL out of it and render it inside an iframe.

You can also make your custom PDF viewer using the pdfjs library as I mentioned above. But if you don't need such branding and customization, the browser's default PDF viewer is fine for this purpose.

```js
function renderPdf(uint8array) {
  const tempblob = new Blob([uint8array], {
    type: 'application/pdf'
  });
  const docUrl = URL.createObjectURL(tempblob);
  setPdfFileData(docUrl);
}
```

Now you can easily render this docUrl returned from the `renderPdf()` function inside an `iframe`.

## Complete Code Example

I am using Next.js for this tutorial. If you are using some other framework or vanilla JavaScript, the results will be similar. Here's all the code for this project:

```js
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function Home() {
  const [pdfFileData, setPdfFileData] = useState();

  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  function renderPdf(uint8array) {
    const tempblob = new Blob([uint8array], {
      type: 'application/pdf'
    });
    const docUrl = URL.createObjectURL(tempblob);
    setPdfFileData(docUrl);
  }

  function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  }

  async function extractPdfPage(arrayBuff) {
    const pdfSrcDoc = await PDFDocument.load(arrayBuff);
    const pdfNewDoc = await PDFDocument.create();
    const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(2, 3));
    pages.forEach((page) => pdfNewDoc.addPage(page));
    const newpdf = await pdfNewDoc.save();
    return newpdf;
  }

  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
      renderPdf(newPdfDoc);
    }
  };

  return (
    <>
      <h1>Hello world</h1>
      <input
        type="file"
        id="file-selector"
        accept=".pdf"
        onChange={onFileSelected}
      />
      <iframe
        style={{ display: 'block', width: '100vw', height: '90vh' }}
        title="PdfFrame"
        src={pdfFileData}
        frameborder="0"
        type="application/pdf"
      ></iframe>
    </>
  );
}
```

You can now save the resulting PDF using the download button on the PDF viewer.

## Where to Go from Here

In this article, I've touched just the tip of the iceberg. If you want to work with PDFs and want to make something out of it, then pdf-lib is a very powerful library for this purpose.

You can merge two PDFs into one, you can rotate pages, or delete some pages from a PDF. These are just some examples – the possibilities are endless.

If you want to deploy your Next.js application to Cloudflare pages, [this is the article](https://hrishikeshpathak.com/blog/deploy-nextjs-cloudflare-pages) you should check out.

Make something out of it. Do some creative stuff and show me on [Twitter](https://twitter.com/hrishikshpathak).

## Conclusion

If you've read until now, I am very grateful. It feels like I am making content that someone from another part of the world will read. Do share with your coding friends.

Do you want to add an outline to your PDF doc? I know this is a very hard task to achieve. I have gone through a lot of pain to add this feature in a PDF document using JavaScript. Are you interested?  That's a story for the future.

Have a good day.
