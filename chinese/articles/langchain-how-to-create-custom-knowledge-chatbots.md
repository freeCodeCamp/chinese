> -  原文地址：[LangChain Tutorial – How to Build a Custom-Knowledge Chatbot](https://www.freecodecamp.org/news/langchain-how-to-create-custom-knowledge-chatbots/)
> -  原文作者：[Shane Duggan](https://www.freecodecamp.org/news/author/shane/)
> -  译者：[luojiyin](https://github.com/luojiyin1987)
> -  校对者：

![LangChain Tutorial – How to Build a Custom-Knowledge Chatbot](https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/ThumbnailArticle--1-.png)

你可能已经了解到过去几个月中发布的大量人工智能应用程序。你甚至可能已经开始使用其中的一些。

[ChatPDF](https://www.chatpdf.com/) 和 [CustomGPT AI](https://customgpt.ai/use-cases/) 等人工智能工具对人们非常有用，这是有道理的。你需要翻阅长达 50 页的文档才能找到一个简单答案的时代已经一去不复返了。取而代之的是，你可以依靠人工智能来完成繁重的工作。

但是，这些开发人员究竟是如何创建和使用这些工具的呢？他们中的许多人都在使用一个名为 LangChain 的开源框架。

在本文中，我将向你介绍 LangChain，并向你展示如何将其与 OpenAI 的 API 结合使用，以创建这些改变游戏规则的工具。希望我的介绍能激发你们的灵感，创造出属于自己的工具。那么，让我们开始吧！

## 什么是 LangChain?

![Screenshot-2023-05-29-at-5.40.38-PM](https://www.freecodecamp.org/news/content/images/2023/05/Screenshot-2023-05-29-at-5.40.38-PM.png)

[LangChain](https://github.com/hwchase17/langchain/)是一个开源框架，允许人工智能开发人员将 GPT-4 等大型语言模型（LLM）与外部数据相结合。它提供 Python 或 JavaScript（TypeScript）包。

大家可能知道，GPT 模型是在 2021 年之前的数据上训练出来的，这可能是一个很大的局限。虽然这些模型的常识很不错，但如果能将它们与自定义数据和计算连接起来，就会打开很多大门。这正是 LangChain 所要做的。

从本质上讲，它可以让你的 LLM 在得出答案时参考整个数据库。因此，你现在可以让你的 GPT 模型访问报告、文档和网站信息等形式的最新数据。

最近，LangChain 的受欢迎程度大幅上升，尤其是在三月份推出 GPT-4 之后。这要归功于它的多功能性，以及与功能强大的 LLM 配合后所带来的多种可能性。

## LangChain 是怎样工作的?

可能会觉得 LangChain 听起来很复杂，但实际上它非常容易上手。

简而言之，LangChain 就是将大量数据组成一个 LLM 可以轻松引用的数据链，而且计算能力越低越好。它的工作原理是将大量数据（例如 50 页的 PDF 文件）分解成 `块(chunks)`，然后将这些 `块(chunks)` 嵌入到 向量存储(Vector Store) 中。

![------LangChain](https://www.freecodecamp.org/news/content/images/2023/05/------LangChain.png)

创建 向量存储(Vector Store) 的简单示意图

现在，我们已经有了大型文档的向量化表示，可以将其与 LLM 结合使用，在创建 提示-完成对
(prompt-completion pair) 时，只检索我们需要引用的信息。

当我们在新聊天机器人中插入 提示(prompt) 时，LangChain 会查询 向量存储库(Vector Store) 以获取相关信息。把它想象成你文档的迷你谷歌。一旦检索到相关信息，我们就会将其与 提示(prompt ) 信息一起输入 LLM，生成我们的答案。

![ByteSizedThumbnail--1200---800-px---10-](https://www.freecodecamp.org/news/content/images/2023/05/ByteSizedThumbnail--1200---800-px---10-.png)

LangChain 如何与 OpenAI 的 LLM 协同工作

LangChain 还允许你创建可以执行操作的应用程序，例如上网、发送电子邮件和完成其他与 API 相关的任务。请查看 [AgentsGPT](https://Agentsgpt.reworkd.ai/)，这就是一个很好的例子。

这有很多可能的用例，以下是我想到的几个：

-   个人 AI 电子邮件助理
-   人工智能学习伙伴
-   人工智能数据分析
-   定制公司客户服务聊天机器人
-   社交媒体内容创建助手

还有更多。我将在今后的文章中介绍正确的构建教程，敬请期待。

##  怎样开始使用 LangChain

LangChain 应用程序由 5 个主要部分组成：

1.  Models (LLM Wrappers)
2.  Prompts
3.  Chains
4.  Embeddings and Vector Stores
5.  Agents

我将为你逐一介绍，以便你对 LangChain 的工作原理有一个高层次的了解。接下来，你应该能够应用这些概念，开始制作自己的用例并创建自己的应用程序。

我将用 Rabbitmetrics 的简短代码片段（[Github](https://github.com/rabbitmetrics/langchain-13-min/blob/main/notebooks/langchain-13-min.ipynb)）来解释一切。他就这一主题提供了很好的教程。通过这些代码片段，你可以完成所有设置并准备使用 LangChain。

首先，我们来设置环境。你可以用 pip 安装 3 个需要的库：

```shell
pip install -r requirements.txt
```

```requirements.txt
python-dotenv==1.0.0
langchain==0.0.137
pinecone-client==2.2.1
```

[Pinecone](https://www.pinecone.io/)是我们将与 LangChain 结合使用的向量存储。使用这些工具时，请确保将 OpenAI、Pinecone Environment 和 Pinecone API 的 API 密钥存储到环境文件中。你可以在它们各自的网站上找到这些信息。然后，我们只需在环境文件中加载以下内容即可：

```Python
# Load environment variables

from dotenv import load_dotenv,find_dotenv
load_dotenv(find_dotenv())
```

现在，我们可以开始了！

### Models (LLM Wrappers)

为了与我们的 LLM 进行交互，我们将为 OpenAI 的 GPT 模型实例化一个封装器。在本例中，我们将使用 OpenAI 的 GPT-3.5-turbo，因为它最具性价比。但如果你有授权，也可以使用功能更强大的 GPT4。

```Python
# import schema for chat messages and ChatOpenAI in order to query chatmodels GPT-3.5-turbo or GPT-4

from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
from langchain.chat_models import ChatOpenAI
     

chat = ChatOpenAI(model_name="gpt-3.5-turbo",temperature=0.3)
messages = [
    SystemMessage(content="You are an expert data scientist"),
    HumanMessage(content="Write a Python script that trains a neural network on simulated data ")
]
response=chat(messages)

print(response.content,end='\n')
     
```

本质上，`SystemMessage` 为 GPT-3.5-turbo 模块提供了上下文，它将为每个提示-完成对引用该模块。 HumanMessage 指的是你在 ChatGPT 界面中输入的内容(你的提示)。

但对于定制知识聊天机器人，我们经常抽象出 提示(prompt) 中的重复组件。 例如，如果我正在创建一个推文生成器应用程序，我不想继续输入`给我写一条关于...的推文`。 其实，[AI 写作工具](https://ilampadman.com/best-ai-writer-best-ai-copywriter) 就是这么简单开发出来的！

那么让我们看看如何使用 提示模板(prompt templates) 将其抽象出来。

### Prompts(提示)

LangChain 提供 PromptTemplates，允许你根据用户输入动态更改提示，类似于使用正则表达式。

```Python
# Import prompt and define PromptTemplate

from langchain import PromptTemplate

template = """
You are an expert data scientist with an expertise in building deep learning models. 
Explain the concept of {concept} in a couple of lines
"""

prompt = PromptTemplate(
    input_variables=["concept"],
    template=template,
)
     

# Run LLM with PromptTemplate

llm(prompt.format(concept="autoencoder"))
llm(prompt.format(concept="regularization"))
```

你可以通过不同的方式改变它们以适合你的用例。 如果你熟悉使用 ChatGPT，这对你来说应该很舒服。

### Chains(链)

 链(Chains) 允许你采用简单的 PromptTemplates 并在它们之上构建功能。 本质上，链就像 [复合函数(composite functions)](https://www.freecodecamp.org/news/function-composition-in-javascript/)，允许你将 PromptTemplates 和 LLM 集成在一起。

使用之前的装饰器(wrappers) 和 PromptTemplates，我们可以使用单个链运行相同的提示，该链采用 PromptTemplate 并将其与 LLM 组合：

```Python
# Import LLMChain and define chain with language model and prompt as arguments.

from langchain.chains import LLMChain
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain only specifying the input variable.
print(chain.run("autoencoder"))
     
```

最重要的是，顾名思义，我们可以将它们链接在一起以创建更大的作品。

例如，我可以从一个链中获取结果并将其传递到另一个链中。 在此片段中，Rabbitmetrics 从第一个链中获取补全内容，并将其传递到第二个链中，以便向 5 岁的孩子解释。

然后，你可以将这些链组合成一个更大的链并运行它。

```Python
# Define a second prompt 

second_prompt = PromptTemplate(
    input_variables=["ml_concept"],
    template="Turn the concept description of {ml_concept} and explain it to me like I'm five in 500 words",
)
chain_two = LLMChain(llm=llm, prompt=second_prompt)

# Define a sequential chain using the two chains above: the second chain takes the output of the first chain as input

from langchain.chains import SimpleSequentialChain
overall_chain = SimpleSequentialChain(chains=[chain, chain_two], verbose=True)

# Run the chain specifying only the input variable for the first chain.
explanation = overall_chain.run("autoencoder")
print(explanation)
```

通过链，你可以创建大量的功能，这就是 LangChain 如此多功能的原因。 但它真正的亮点在于将其与前面讨论的向量存储结合使用。 我们来介绍一下这个组件。

### Embeddings(嵌入) 和 Vector Stores(向量存储)

这就是我们整合 LangChain 的自定义数据方面的地方。 如前所述，嵌入(embeddings) 和向量存储背后的想法是将大数据分成块并在相关时存储要查询的数据。

LangChain 有一个文本分割器函数(text splitter function) 可以做到这一点：

```Python
# Import utility for splitting up texts and split up the explanation given above into document chunks

from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 100,
    chunk_overlap  = 0,
)

texts = text_splitter.create_documents([explanation])
```

分割文本需要两个参数：块有多大 (chunk_size) 以及每个块重叠的程度 (chunk_overlap)。 每个块之间的重叠对于帮助识别相关的相邻块非常重要。

每个块都可以这样检索：

```Python
texts[0].page_content
```

获得这些块后，我们需要将它们转化为嵌入(embeddings)。 这允许向量存储在查询时查找并返回每个块。 我们将使用 OpenAI 的 嵌入模型(embedding model) 来完成此操作。

```Python
# Import and instantiate OpenAI embeddings

from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model_name="ada")
     

# Turn the first text chunk into a vector with the embedding

query_result = embeddings.embed_query(texts[0].page_content)
print(query_result)
```

最后，我们需要有一个地方来存储这些 矢量化嵌入(vectorized embeddings)。 如前所述，我们将为此使用 Pinecone。 使用之前环境文件中的 API key，我们可以初始化 Pinecone 来存储我们的嵌入。

```Python
# Import and initialize Pinecone client

import os
import pinecone
from langchain.vectorstores import Pinecone


pinecone.init(
    api_key=os.getenv('PINECONE_API_KEY'),  
    environment=os.getenv('PINECONE_ENV')  
)
     

# Upload vectors to Pinecone

index_name = "langchain-quickstart"
search = Pinecone.from_documents(texts, embeddings, index_name=index_name)
     

# Do a simple vector similarity search

query = "What is magical about an autoencoder?"
result = search.similarity_search(query)

print(result)
```

现在，我们能够从 Pinecone 向量存储中查询相关信息了！剩下要做的就是把我们学到的知识结合起来，创建我们的特定用例。这就是我们的专业人工智能 `Agents`。

### Agents

Agents 本质上是一种自主的人工智能，它接收输入并按顺序完成这些任务，直至达到最终目标。这就需要我们的人工智能使用其他应用程序接口，从而完成发送电子邮件或做数学题等任务。结合我们的 LLM + 提示链(prompt chains)，我们可以串联起一个合适的人工智能应用程序。

现在，要解释这部分内容会很费劲，因此这里有一个简单的例子，说明如何在 LangChain 中使用 Python Agents 来解决一个简单的数学问题。本例中的 Agents 通过连接我们的 LLM 来运行 Python 代码，并使用 NumPy 求根来解决问题：

```Python
# Import Python REPL tool and instantiate Python Agents

from langchain.Agents.Agents_toolkits import create_python_Agents
from langchain.tools.python.tool import PythonREPLTool
from langchain.python import PythonREPL
from langchain.llms.openai import OpenAI

Agents_executor = create_python_Agents(
    llm=OpenAI(temperature=0, max_tokens=1000),
    tool=PythonREPLTool(),
    verbose=True
)
     

# Execute the Python Agents

Agents_executor.run("Find the roots (zeros) if the quadratic function 3 * x**2 + 2*x -1")
```

定制知识聊天机器人本质上是一个 Agents，它可以将查询向量化存储的 提示(prompts) 和操作串联起来，获取结果，并将其与原始问题串联起来！


如果你想了解更多关于人工智能 Agents 的信息，[这个](https://lablab.ai/t/ai-Agents-tutorial-how-to-use-and-create-them) 是一个很好的资源。

## 别的因素

即使你刚刚对 LangChain 的功能有了基本的了解，我相信你此时也会有很多想法。

但到目前为止，我们只研究了一个 OpenAI 模型，那就是基于文本的 GPT-3.5-turbo。OpenAI 有一系列模型可供 LangChain 使用，包括使用 Dall-E 生成图像。应用我们讨论过的相同概念，我们可以创建 [人工智能艺术生成器](https://julianlankstead.com/ai-nft-art-generator) 代理、网站生成器代理等。

花点时间探索一下人工智能领域，我相信你会有越来越多的想法。

## 总结

我希望你已经对所有这些新人工智能工具的幕后工作有了更多了解。作为一名程序员，了解 LangChain 的工作原理是一项宝贵的技能，它可以为你的人工智能开发带来无限可能。

如果你喜欢这篇文章，并想了解更多有关人工智能创造者们正在构建的新工具的信息，你可以通过我的 [Byte-Sized AI Newsletter](https://bytesizedai.beehiiv.com/subscribe) 随时了解最新信息。我希望你能加入我们的社区。

你也可以在[Twitter](https://twitter.com/Shuggggan) 上关注我，我们也可以在那里保持联系。

除此之外，请开始尝试使用 LangChain 并创建一些有趣的人工智能项目。