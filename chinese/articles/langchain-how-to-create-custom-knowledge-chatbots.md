> -  原文地址：[LangChain Tutorial – How to Build a Custom-Knowledge Chatbot](https://www.freecodecamp.org/news/langchain-how-to-create-custom-knowledge-chatbots/)
> -  原文作者：[Shane Duggan](https://www.freecodecamp.org/news/author/shane/)
> -  译者：[luojiyin](https://github.com/luojiyin1987)
> -  校对者：

![LangChain Tutorial – How to Build a Custom-Knowledge Chatbot](https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/ThumbnailArticle--1-.png)

你可能已经了解到过去几个月中发布的大量人工智能应用程序。您甚至可能已经开始使用其中的一些。

[ChatPDF](https://www.chatpdf.com/) 和 [CustomGPT AI](https://customgpt.ai/use-cases/) 等人工智能工具对人们非常有用，这是有道理的。你需要翻阅长达 50 页的文档才能找到一个简单答案的时代已经一去不复返了。取而代之的是，你可以依靠人工智能来完成繁重的工作。

但是，这些开发人员究竟是如何创建和使用这些工具的呢？他们中的许多人都在使用一个名为 LangChain 的开源框架。

在本文中，我将向您介绍 LangChain，并向您展示如何将其与 OpenAI 的 API 结合使用，以创建这些改变游戏规则的工具。希望我的介绍能激发你们的灵感，创造出属于自己的工具。那么，让我们开始吧！

## What Is LangChain?

![Screenshot-2023-05-29-at-5.40.38-PM](https://www.freecodecamp.org/news/content/images/2023/05/Screenshot-2023-05-29-at-5.40.38-PM.png)

[LangChain](https://github.com/hwchase17/langchain/)是一个开源框架，允许人工智能开发人员将 GPT-4 等大型语言模型（LLM）与外部数据相结合。它提供 Python 或 JavaScript（TypeScript）包。

大家可能知道，GPT 模型是在 2021 年之前的数据上训练出来的，这可能是一个很大的局限。虽然这些模型的常识很不错，但如果能将它们与自定义数据和计算连接起来，就会打开很多大门。这正是 LangChain 所要做的。

从本质上讲，它可以让你的 LLM 在得出答案时参考整个数据库。因此，你现在可以让您的 GPT 模型访问报告、文档和网站信息等形式的最新数据。

最近，LangChain 的受欢迎程度大幅上升，尤其是在三月份推出 GPT-4 之后。这要归功于它的多功能性，以及与功能强大的 LLM 配合后所带来的多种可能性。

## How Does LangChain Work?

可能会觉得 LangChain 听起来很复杂，但实际上它非常容易上手。

简而言之，LangChain 就是将大量数据组成一个 LLM 可以轻松引用的数据链，而且计算能力越低越好。它的工作原理是将大量数据（例如 50 页的 PDF 文件）分解成 `块(chunks)`，然后将这些 `块(chunks)` 嵌入到 向量存储(Vector Store) 中。

![------LangChain](https://www.freecodecamp.org/news/content/images/2023/05/------LangChain.png)

创建 向量存储(Vector Store) 的简单示意图

现在，我们已经有了大型文档的向量化表示，可以将其与 LLM 结合使用，在创建 提示-完成对
(prompt-completion pair) 时，只检索我们需要引用的信息。

当我们在新聊天机器人中插入 提示(prompt) 时，LangChain 会查询 向量存储库(Vector Store) 以获取相关信息。把它想象成你文档的迷你谷歌。一旦检索到相关信息，我们就会将其与 提示(prompt ) 信息一起输入 LLM，生成我们的答案。

![ByteSizedThumbnail--1200---800-px---10-](https://www.freecodecamp.org/news/content/images/2023/05/ByteSizedThumbnail--1200---800-px---10-.png)

LangChain 如何与 OpenAI 的 LLM 协同工作

LangChain 还允许您创建可以执行操作的应用程序，例如上网、发送电子邮件和完成其他与 API 相关的任务。请查看 [AgentGPT](https://agentgpt.reworkd.ai/)，这就是一个很好的例子。

这有很多可能的用例，以下是我想到的几个：

-   个人 AI 电子邮件助理
-   人工智能学习伙伴
-   人工智能数据分析
-   定制公司客户服务聊天机器人
-   社交媒体内容创建助手

还有更多。我将在今后的文章中介绍正确的构建教程，敬请期待。

## How to Get Started with LangChain

LangChain 应用程序由 5 个主要部分组成：

1.  Models (LLM Wrappers)
2.  Prompts
3.  Chains
4.  Embeddings and Vector Stores
5.  Agents

我将为您逐一介绍，以便您对 LangChain 的工作原理有一个高层次的了解。接下来，您应该能够应用这些概念，开始制作自己的用例并创建自己的应用程序。

我将用 Rabbitmetrics 的简短代码片段（[Github](https://github.com/rabbitmetrics/langchain-13-min/blob/main/notebooks/langchain-13-min.ipynb)）来解释一切。他就这一主题提供了很好的教程。通过这些代码片段，您可以完成所有设置并准备使用 LangChain。

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

In essence, the SystemMessage provides context to the GPT-3.5-turbo module that it will reference for each prompt-completion pair. The HumanMessage refers to what you would type into the ChatGPT interface – your prompt.

But with a custom-knowledge chatbot, we often abstract away the repetitive components of a prompt. For example, if I was creating a Tweet generator app, I wouldn't want to keep typing "Write me a Tweet about...". In fact, that's how simple [AI writing tools](https://ilampadman.com/best-ai-writer-best-ai-copywriter) are developed!

So let's look at how we can abstract that away with prompt templates.

### Prompts

LangChain provides PromptTemplates that allow you to dynamically change the prompts with user input, similar to how regex are used.

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

You can vary these in different ways to fit your use-case. If you are familiar with using ChatGPT, this should be comfortable for you.

### Chains

Chains allow you to take simple PromptTemplates and build functionality on top of them. Essentially, chains are like [composite functions](https://www.freecodecamp.org/news/function-composition-in-javascript/) that allow you to integrate your PromptTemplates and LLMs together.

Using the wrappers and PromptTemplates from earlier, we can run the same prompts with a single chain that takes a PromptTemplate and composes it with an LLM:

```Python
# Import LLMChain and define chain with language model and prompt as arguments.

from langchain.chains import LLMChain
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain only specifying the input variable.
print(chain.run("autoencoder"))
     
```

On top of that, as the name suggests, we can chain these together to create even bigger compositions.

For example, I can take the result from one chain and pass it into another chain. In this snippet, Rabbitmetrics takes the completion from the first chain and passes it into the second chain to explain it to a 5 year old.

You can then combine those chains into a larger chain and run that.

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

With chains, you can create a huge array of functionality, which is what makes LangChain so versatile. But where it really shines is using it in conjunction with a Vector Store as discussed earlier. Let's introduce that component.

### Embeddings and Vector Stores

This is where we incorporate the custom data aspect of LangChain. As mentioned earlier, the idea behind embeddings and Vector Stores is to break large data into chunks and store those to be queried when relevant.

LangChain has a text splitter function to do this:

```Python
# Import utility for splitting up texts and split up the explanation given above into document chunks

from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 100,
    chunk_overlap  = 0,
)

texts = text_splitter.create_documents([explanation])
```

Splitting up text requires two parameters: How big a chunk is (chunk\_size) and how much each chunk overlaps (chunk\_overlap). Having an overlap between each chunk is important to help identify relevant adjoining chunks.

Each of those chunks can be retrieved as such:

```Python
texts[0].page_content
```

After we have those chunks, we need to turn them into embeddings. This allows the Vector Store to find and return each chunk when queried. We'll use OpenAI's embedding model to do this.

```Python
# Import and instantiate OpenAI embeddings

from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model_name="ada")
     

# Turn the first text chunk into a vector with the embedding

query_result = embeddings.embed_query(texts[0].page_content)
print(query_result)
```

And finally, we need to have a place to store these vectorized embeddings. As mentioned earlier, we will be using Pinecone for this. Using the API keys from the environment file earlier, we can initialize Pinecone to store our embeddings.

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

And now we are able to query relevant information from our Pinecone Vector Store! All that's left to do is to combine what we have learned to create our specific use case – giving us our specialized AI "Agent".

### Agents

An agent is essentially an autonomous AI that takes in inputs and completes those as tasks sequentially until the end goal is reached. This involves our AI using other APIs that allows it to complete tasks such as sending emails or doing math problems. Used in conjunction with our LLM + prompt chains, we can string together a proper AI app.

Now, explaining this part will be extensive, so here's a simple example of how a Python agent can be used in LangChain to solve a simple mathematical problem. This agent in this case solves the problem by connecting our LLM to run Python code, and finding the roots with NumPy:

```Python
# Import Python REPL tool and instantiate Python agent

from langchain.agents.agent_toolkits import create_python_agent
from langchain.tools.python.tool import PythonREPLTool
from langchain.python import PythonREPL
from langchain.llms.openai import OpenAI

agent_executor = create_python_agent(
    llm=OpenAI(temperature=0, max_tokens=1000),
    tool=PythonREPLTool(),
    verbose=True
)
     

# Execute the Python agent

agent_executor.run("Find the roots (zeros) if the quadratic function 3 * x**2 + 2*x -1")
```

A custom-knowledge chatbot is essentially an agent that chains together prompts and actions that query the Vectorized Storage, take the results, and chain that with the original question!

If you would like to read more about AI agents, [this](https://lablab.ai/t/ai-agents-tutorial-how-to-use-and-create-them) is a great resource.

## Other Variations

Even with your newfound basic understanding of the functionality of LangChain, I'm sure you are bubbling with ideas at this point.

But we've only looked at one OpenAI model so far, and that's the text-based GPT-3.5-turbo. OpenAI has an array of models that you could use with LangChain – including image generation with Dall-E. Applying the same concepts we've discussed, we can create [AI Art Generator](https://julianlankstead.com/ai-nft-art-generator) agents, Website Builder agents, and much more.

Take some time to explore the AI landscape and I'm confident that you'll start getting more and more ideas.

## Conclusion

I hope you've learnt a bit more on what's going on behind the scenes of all of these new AI tools. Understanding how LangChain works is a valuable skill to have as a programmer these days and can open up the possibilities for your AI development.

If you enjoyed this article and you would like to find out more about the cool new tools AI creators are building, you can stay up-to-date with my [Byte-Sized AI Newsletter](https://bytesizedai.beehiiv.com/subscribe). There are tons of exciting stories of what people are building in the AI space, and I'd love for you to join our community.

You can also drop me a follow on [Twitter](https://twitter.com/Shuggggan), where we can also get in touch.

Other than that, start experimenting with LangChain and create some nifty AI projects.