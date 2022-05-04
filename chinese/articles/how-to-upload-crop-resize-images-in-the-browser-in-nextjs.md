> -  原文地址：[Next.js Image Tutorial – How to Upload, Crop, and Resize Images in the Browser in Next](https://www.freecodecamp.org/news/how-to-upload-crop-resize-images-in-the-browser-in-nextjs/)
> -  原文作者：[Idris Olubisi](https://www.freecodecamp.org/news/author/idris/)
> -  译者：bauhauce
> -  校对者：

![Next.js Image Tutorial – How to Upload, Crop, and Resize Images in the Browser in Next](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/pexels-cottonbro-5083407.jpg)

最基本的两个图像编辑功能是调整大小和裁剪。但是你应该谨慎执行这些操作，因为它们可能会降低图像质量。

裁剪总是会删除原始图像的一部分，从而导致一些像素的丢失。

这篇文章将教你如何在浏览器中上传、裁剪和调整图像大小。

我在[Codesandbox](https://codesandbox.io/s/serverless-leaf-vc9rls?file=/pages/index.js)中构建了这个项目。要快速开始的话，请克隆[Codesandbox](https://codesandbox.io/s/serverless-leaf-vc9rls?file=/pages/index.js)或运行项目。

## 先决条件

要学习本教程，你应该有一些 JavaScript 和 React.js 经验。但是Next.js 的经验不是必需的，有的话会更好。

你还需要一个 [Cloudinary account](https://cloudinary.com/users/register/free) 帐户来存储媒体文件。

[Cloudinary](https://cloudinary.com/documentation/image_video_and_file_upload#upload_options_overview) 提供了一个安全且完整的 API，用于从服务器、浏览器或移动应用程序快速有效地上传媒体文件。

最后你需要 [Next.js](https://nextjs.org/) 。它是一个基于 React 的开源前端开发 Web 框架，允许服务器端渲染和生成静态网站和应用程序。

## 项目设置和安装

使用 `npx create-next-app` 命令在你选择的目录中搭建新项目来创建一个新项目。

你可以使用以下命令执行此操作：

```
npx create-next-app <project name>
```

要安装依赖项，请使用以下命令：

```
cd <project name> 
npm install cloudinary-react
```

Once the app is created, and the dependencies are installed, you'll see a message with instructions for navigating to your site and running it locally.
创建应用程序并安装依赖项后，你将看到一条消息，其中包含导航到你的站点并在本地运行它的说明。
You can do this with the command:
你可以使用以下命令执行此操作：

```
npm run dev
```

Next.js will start a hot-reloading development environment accessible by default at `http://localhost:3000`.
Next.js 将启动一个默认可访问的热重载开发环境http://localhost:3000 。

## 如何构建用户界面

For our project, we'll want the user interface to upload, crop, and resize images on the home page. We will do this by updating the `pages/index.js` file to a component:
对于我们的项目，我们希望用户界面能够在主页上上传、裁剪和调整图像大小。我们将通过将pages/index.js文件更新为组件来做到这一点：

```
import React, { useState } from "react";
import Head from "next/head";

const IndexPage = () => {

  return (
    <>
      <div className="main">
        <div className="splitdiv" id="leftdiv">
          <h1 className="main-h1">
            How to Crop, Resize & Upload Image in the Browser using Cloudinary
            Transformation
          </h1>
          <div id="leftdivcard">
            <h2 className="main-h2">Resize Options</h2>
          </div>

          <button type="button" id="leftbutton">
            Upload Image
          </button>
        </div>

        <div className="splitdiv" id="rightdiv">
        <h1> Image will appear here</h1>
        </div>
      </div>
    </>
  );
};
export default IndexPage;

```

The current user interface doesn't look that great, though. We'll add some styling with CSS in the `style.css` file like this:
不过，当前的用户界面看起来并不那么好。我们将在style.css文件中添加一些带有 CSS 的样式，如下所示：

```
@import url("https://fonts.googleapis.com/css?family=Acme|Lobster");

/* This allow me to have the full width of the page without the initial padding/margin*/
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Acme;
  min-width: 700px;
}

.splitdiv {
  height: 100%;
  width: 50%;
}

/* This part contains all of the left side of the screen */
/* ----------------------------------------- */
#leftdiv {
  float: left;
  background-color: #fafafa;
  height: 932px;
}

#leftdivcard {
  margin: 0 auto;
  width: 50%;
  background-color: white;
  margin-top: 25vh;
  transform: translateY(-50%);
  box-shadow: 10px 10px 1px 0px rgba(78, 205, 196, 0.2);
  border-radius: 10px;
}

#leftbutton {
  background-color: #512cf3;
  border-radius: 5px;
  color: #fafafa;
  margin-left: 350px;
}

/* ----------------------------------------- */

/* This part contains all of the right side of the screen */
/* ----------------------------------------- */
#rightdiv {
  float: right;
  background-color: #cbcfcf;
  height: 932px;
}

#rightdivcard {
  margin: 0 auto;
  width: 50%;
  margin-top: 50vh;
  transform: translateY(-50%);
  background-position: bottom;
  background-size: 20px 2px;
  background-repeat: repeat-x;
}

/* ----------------------------------------- */

/* Basic styling */
/* ----------------------------------------- */

button {
  outline: none !important;
  font-family: Lobster;
  margin-bottom: 15px;
  border: none;
  font-size: 20px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -15px;
  cursor: pointer;
}

h1 {
  font-family: Lobster;
  color: #512cf3;
  text-align: center;
  font-size: 40px;
}

input {
  font-family: Acme;
  font-size: 16px;
  font-family: 15px;
}

input {
  width: 30%;
  height: 20px;
  padding: 16px;
  margin-left: 1%;
  margin-right: 2%;
  margin-top: 15px;
  margin-bottom: 10px;
  display: inline-block;
  border: none;
}

input:focus {
  outline: none !important;
  border: 1px solid #512cf3;
  box-shadow: 0 0 1px round #719ece;
}

/* ----------------------------------------- */

.main {
  height: 100%;
  width: 100%;
  display: inline-block;
}

.main-h2 {
  padding-top: 20px;
  text-align: center;
}

.body-h1 {
  padding-top: 20px;
  text-align: center;
  color: white;
}

.inner-p {
  color: white;
  text-align: center;
}

.main-align {
  text-align: center;
}

.form-control {
  margin-left: 15px;
}
```

Our application should now look like this on [http://localhost:3000/:](http://localhost:3000/:)
我们的应用程序现在应该在http://localhost:3000/上看起来像这样：

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650105687298/eeGTDWFHA.png)

## 如何创建图像上传小部件

Cloudinary's upload widget lets us upload media assets from multiple sources, including Dropbox, Facebook, Instagram, and images that were taken right from our device's camera. We'll use the upload widget in this project.
Cloudinary 的上传小部件让我们可以从多个来源上传媒体资产，包括 Dropbox、Facebook、Instagram 和直接从我们设备的相机拍摄的图像。我们将在这个项目中使用上传小部件。

Create a free cloudinary account to obtain your cloud name and upload\_preset.
创建一个免费的 cloudinary 帐户以获取您的云名称和 upload_preset。

`upload_presets` allows us to define a set of asset upload choices centrally rather than providing them in each upload call. A Cloudinary `cloud name` is a unique identifier associated with your Cloudinary account.
upload_presets允许我们集中定义一组资产上传选项，而不是在每次上传调用中提供它们。Cloudinarycloud name是与您的 Cloudinary 帐户关联的唯一标识符。

First, from a content delivery network (CDN), we will add the Cloudinary widget's JavaScript file in our `index.js` located in `pages/index.js.` We will include this file using `next/head` to include all meta tags, which lets us add data to the Head portion of our HTML document in React.

Next, in the `pages/index.js` file, we'll import Head from next/head and add the script file.

```
import React, { useState } from "react";
import Head from "next/head";

const IndexPage = () => {

  return (
    <>
      <Head>
        <title>How to Crop and Resize Image in the Browser</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Head>
      <div className="main">
          [...]
      </div>
    </>
  );
};
export default IndexPage;
```

In the `pages/index.js` file, we will create an instance of the widget in a method triggered when clicking a button and a state variable `imagePublicId.`.

```
import React, { useState } from "react";
import Head from "next/head";

const IndexPage = () => {
  const [imagePublicId, setImagePublicId] = useState("");

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "olanetsoft",
        uploadPreset: "w42epls7"
      },
      (error, result) => {
        if (
          result.event === "success" &&
          result.info.resource_type === "image"
        ) {
          console.log(result.info);
          setImagePublicId(result.info.public_id);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };

  return (
    <>
      //...
    </>
  );
};
export default IndexPage;
```

The widget requires our Cloudinary `cloud_name` and `uploadPreset.` The `createWidget()` function creates a new upload widget. On successfully uploading an image, we assign the `public_id` of the asset to the relevant state variable.

To get our `cloudname` and `uploadPreset,` we follow the steps below:

You can get the cloud name from your Cloudinary dashboard, as shown below.

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650106671153/wjBrA3_m0.png)

You can find an upload preset in the `Upload` tab of your Cloudinary settings page. You access this by clicking on the gear icon in the top right corner of the dashboard page.

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650106901391/73lFzuxLQ.png)

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650106814185/GqnIFsNYS.png)

Scroll down to the bottom of the page to the upload presets section, where you'll see your upload preset or the option to create one if you don't have any.

We'll proceed to call the `openWidget` function in the `onClick` handler of our image upload button, as shown below:

```
//...

const IndexPage = () => {
//...
  return (
    <>
     //....
      <div className="main">
        <div className="splitdiv" id="leftdiv">
          //...
          <div id="leftdivcard">
            <h2 className="main-h2">Resize Options</h2>
             //...
            </div>

          <button type="button" id="leftbutton" onClick={openWidget}>
            Upload Image
          </button>
        </div>

        <div className="splitdiv" id="rightdiv">
        <h1> Image will appear here</h1>
        </div>
      </div>
    </>
  );
};
export default IndexPage;

```

When we open our app in the browser and click the `Upload Image` button, we should see something like this:

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650111448538/pglrS-Exs.png)

## How to Implement Custom Transformation Functions

We need to create a component that handles the transformation depending on the props passed to it. We will create a `components/` directory in the root folder. Inside it, we will create a file called `image.js` with the following content:

```
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

const TransformImage = ({ crop, image, width, height }) => {
  return (
    <CloudinaryContext cloudName="olanetsoft">
      <Image publicId={image}>
        <Transformation width={width} height={height} crop={crop} />
      </Image>
    </CloudinaryContext>
  );
};

export default TransformImage;
```

In the code snippet above, we imported `CloudinaryContext`, a wrapper Cloudinary component used to manage shared information across all its children Cloudinary components. The rendered `TransformImage` component takes data of the image transformation as props.

The above code block will render the uploaded image when we import it into `pages/index.js`:

```
//...
import TransformImage from "../components/image";

const IndexPage = () => {
  const [imagePublicId, setImagePublicId] = useState("");
  const [alt, setAlt] = useState("");
  const [crop, setCrop] = useState("scale");
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  return (
    <>
     //...
      <div className="main">
        <div className="splitdiv" id="leftdiv">
          //...
       </div>
        <div className="splitdiv" id="rightdiv">
          <h1> Image will appear here</h1>
          <div id="rightdivcard">
            {imagePublicId ? (
              <TransformImage
                crop={crop}
                image={imagePublicId}
                width={width}
                height={height}
              />
            ) : (
              <h1> Image will appear here</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
```

Next, we will add the `Resize Options` radio button so that we can select different resize and crop options with the following code snippet:

```
//...

const IndexPage = () => {
//...

  return (
    <>
    //...
      <div className="main">
        <div className="splitdiv" id="leftdiv">
          //...
          <div id="leftdivcard">
            <h2 className="main-h2">Resize Options</h2>

          <label className="form-control">Select Crop Type</label>
            <div>
              <label className="form-control">Scale</label>
              <input
                type="radio"
                value="scale"
                name="crop"
                onChange={(event) => setCrop(event.target.value)}
              />
            </div>
            <div>
              <label className="form-control">Crop</label>
              <input
                type="radio"
                value="crop"
                name="crop"
                onChange={(event) => setCrop(event.target.value)}
              />
            </div>
            <input
              type="number"
              placeholder="Height"
              onChange={(event) => setHeight(event.target.value)}
            />
            <input
              type="number"
              placeholder="Width"
              onChange={(event) => setWidth(event.target.value)}
            />
          </div>

          <button type="button" id="leftbutton" onClick={openWidget}>
            Upload Image
          </button>
        </div>

        <div className="splitdiv" id="rightdiv">
          //...
        </div>
      </div>
    </>
  );
};
export default IndexPage;
```

In the code snippet above, we:

-   Added crop type and also width and height options
-   Added an `onChange` property to keep track of the changes in the height and width input field, respectively

Our application's final output should look similar to what we have below:

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650112568692/2htjubfOv.png)

![How to Upload, Crop, & Resize Image in the Browser in Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1650112581661/JnEP--CHC.png)

Here's the GitHub Repository for the project if you want to have a look at the full code: [https://github.com/Olanetsoft/how-to-upload-crop-and-resize-images-in-the-browser-in-next.js](https://github.com/Olanetsoft/how-to-upload-crop-and-resize-images-in-the-browser-in-next.js)

## Conclusion

This post shows how to upload, crop, and resize images in the browser in Next.js.

## Resources

You may find these resources helpful.

-   [Cloudinary transformation URL reference](https://cloudinary.com/documentation/transformation_reference)
-   [Cloudinary Image Transformation](https://cloudinary.com/documentation/image_transformations)
