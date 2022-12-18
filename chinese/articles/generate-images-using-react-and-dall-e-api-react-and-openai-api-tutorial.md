> -  原文地址：[How to Generate Images using React and the Dall-E 2 API – React and OpenAI API Tutorial](https://www.freecodecamp.org/news/generate-images-using-react-and-dall-e-api-react-and-openai-api-tutorial/)
> -  原文作者：[Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)
> -  译者：dake0913
> -  校对者：

![How to Generate Images using React and the Dall-E 2 API – React and OpenAI API Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/Important-Concepts-and-questions--1-.png)

嘿,大家好!OpenAI刚刚发布了它的DALL-E API，用户可以通过键入查询生成自定义图像。

在本教程中，您将学习如何集成OpenAI DALL-E 2 API与React app。

## 但首先，Dell-E 是如何工作的呢?

正如你已经知道的，你必须输入一个查询 – 就像 **熊拿着画笔在星空里, 文森特·梵高画**。这里面有很多关键词，比如“画笔”、“星空”和“文森特·梵高”。

Dall-E要做的是搜索这些与我上面提到的关键字相关的图像。然后它将使用人工智能将所有的图像合并为一个，然后提供给我们。

现在让我们学习如何将其集成到React应用程序中，以创建具有这些惊人特性的应用程序。

## 如何创建React应用程序

至于，创建一个React应用程序。您可以使用CRA (create-react-app)命令创建它，也可以使用Vite。

我们需要一个文本字段和一个按钮作为UI组件。文本字段将用于从用户获取查询和触发API请求的按钮。让我们同时创建一个状态来存储查询和一个函数，该函数将在单击按钮时运行。

```
import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");

  const generateImage = async () => {};

  return (
    <div className="app-main">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>
      </>
    </div>
  );
}

export default App;
```

我们的输出将会像这样：

![Screenshot-2022-11-05-212826](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-212826.png)

### 如何将DALL-E 2 API集成到React应用程序

让我们看看如何将DALL-E 2 API集成到我们的应用程序中。

首先，我们需要访问[OpenAI](https://beta.openai.com)网站。您需要注册以生成一个API密钥。你的账户里还会有18美元可以使用。

选择在注册时创建应用程序。

因此，在您创建了您的帐户之后，转到View API Keys部分，在那里您可以创建您惟一的API密钥。查看下面的图片作为参考。

![Screenshot-2022-11-05-213523](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-213523.png)

现在在React App中，创建一个 **.env** 文件。这是为了存储API键。

![Screenshot-2022-11-05-213733](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-213733.png)

在这里添加API密钥。请注意，在CRA和Vite React App中，从.env文件中获取密钥的方法是不同的。所以请记住这一点。我使用的是Vite，所以我们是这样做的:

```
VITE_Open_AI_Key = "Your API Key"
```

现在已经添加了API键，我们需要在App.js或App.jsx文件中导入一些东西。 包括 **Configuration** 和来自 **openai SDK** 的 **OpenAIApi**. But first, we need to install the **openai SDK** into the React App.

只需输入下面的指令安装:

```
npm install openai
```

安装可能需要一些时间。然后，像这样导入我们之前提到的两个东西:

```
import { Configuration, OpenAIApi } from "openai";
```

我们需要创建一个配置变量，它将从.env文件中获取API键。

```
const configuration = new Configuration({
	apiKey: import.meta.env.VITE_Open_AI_Key,
});
```

现在，我们需要将这个配置实例传递给OpenAIApi，并为OpenAIApi创建一个新实例。
```
const openai = new OpenAIApi(configuration);
```

以下是到目前为止的全部代码:

```
import { Configuration, OpenAIApi } from "openai";

import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  

  return (
    <div className="app-main">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>
      </>
    </div>
  );
}

export default App;
```

现在，在**generateImage**函数中，我们需要调用之前创建的OpenAIApi实例。记住，功能需求是异步的。

```
const generateImage = async () => {
    await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
  };
```

如您所见，我们使用的是**openai.createImage**。这个API用于使用用户查询创建图像。它还需要**数量n**，这是我们希望API返回的图像的数量，以及**图像的尺寸size**。

有三种不同的图像尺寸，不同的价格，如下表所示。如果您使用的是1024x1024大小，每张图像将花费0.020美元。

![Screenshot-2022-11-05-215314](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-215314.png)

现在这个**openai.createImage**返回一些可以存储在变量中的response接口。然后，我们可以从response变量获得生成的图像链接。

```
const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    console.log(res.data.data[0].url);
  };
```

但我们还是别这么做了。让我们再创建一个状态来存储这个图像链接，这样我们就可以在UI本身中查看图像。

```
const [result, setResult] = useState("");

const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };
```

现在，图像链接将存储在**result**状态中。让我们在UI中渲染图像。但是由于结果最初是空的，我们可以创建一个查验。我们将只看到在状态中有链接的图像标记。

```
{result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
```

And here's the styling too:

```
.result-image {
  margin-top: 20px;
  width: 350px;
}
```

UI现在看起来像这样:

![Screenshot-2022-11-05-220108](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-220108.png)

让我们输入一些东西并查看输出:

![Screenshot-2022-11-05-220222](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-220222.png)

在上面的例子中，我输入了**一匹在红色沙滩里的马**这是结果。

让我们尝试一些更复杂的东西，比如**熊拿着画笔在星空里, 文森特·梵高画**

结果如下:

![Screenshot-2022-11-05-220423](https://www.freecodecamp.org/news/content/images/2022/11/Screenshot-2022-11-05-220423.png)

This is how you do it. You can type any input query and it will generate that image through Artificial Intelligence.

## 总结

这就是所有的内容。现在您知道了如何使用DALL-E 2 API创建自己的React应用程序，以使用AI生成图像。你可以添加更多的功能，所以不妨尝试一下。

如果你想看视频版本，请点击我的视频 [使用React和Dall-E API生成图像- React和OpenAI API教程](https://youtu.be/oacBV4tnuYQ) 在我的YouTube频道 [Cybernatico](https://www.youtube.com/c/CybernaticoByNishant).

查看代码[GitHub](https://github.com/nishant-666/Dall-E-API-with-React)以供参考.

> 学习快乐~
