> * 原文地址：[web-scraping-101-in-python](https://www.freecodecamp.org/news/web-scraping-101-in-python/)
> * 原文作者：Pierre
> * 译者：CoderSan1997
> * 校对者：

![Web Scraping 101 in Python: an overview of the tools & the pros and cons of each](https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/oNWkJnaPpRTRTQaw.jpg)

作为我网页爬虫最终指南的后续, 我们将在这篇文章中涵盖python提供给您的几乎所有的网页爬取工具。我们将从最基本的开始讲起，并逐步涉及到当前最前沿的技术，并且对他们的利弊进行分析。

当然，我们不能涵盖我们讨论的每个工具的所有方面。但这篇文章应该足以让你很好地知道哪些工具做什么，以及何时使用每一种工具。

_注意: 本文中所涉及到的python均指Python3_

### 总结:

-   Web 基础
-   手动创建一个socket并且发送HTTP请求
-   urllib3 & LXML
-   requests & BeautifulSoup
-   Scrapy（爬虫框架）
-   Selenium（浏览器自动化测试框架） & Chrome —headless
-   总结

# Web 基础

互联网其实是**非常复杂的**–我们通过浏览器浏览一个简单的网页时，其背后其实涉及到许多技术和概念。 我并不打算对其进行逐一讲解, 但我会告诉你如果想要从网络中爬取数据需要了解哪些最重要的知识。

## HyperText Transfer Protocol（超文本传输协议，简称HTTP）

HTTP 采用  **C/S模型**, 在HTTP客户机 (如 浏览器, python程序, curl（命令行工具）, Requests等等) 创建一个连接并向HTTP服务器（如 Nginx，Apache等）发送信息 (“我想浏览产品页”)。

然后服务器返回一个响应 (如HTML代码)并且关闭连接.与FTP这些 有状态协议 不同，HTTP的每个事务都是独立的，因此被称为无状态协议。

基本上，当您在浏览器中键入网站地址时，HTTP请求如下所示:

```python
GET /product/ HTTP/1.1
Host: example.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/web\
p,*/*;q=0.8
Accept-Encoding: gzip, deflate, sdch, br
Connection: keep-alive
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\
/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
```

在这个请求的第一行, 你可以获得如下的信息:

-   使用Get动词或者方法, 意味着我们从指定的路径 `/product/` 请求数据。还有其他HTTP谓词，您可以在[这里][2]看到完整的列表。
-   HTTP协议的版本。在本教程中，我们将重点讨论HTTP1。
-   多个header字段。

以下是最重要的header字段:

-   **Host：**  服务器的域名。如果没有给出端口号，则默认为80\*_._\*
-   **User-Agent：**  包含有关发起请求的客户端的信息, 包括OS等信息。比如说上面的例子中,表明了我的浏览器(Chrome),在Mac OS X系统上. 这个header字段很重要，因为它要么用于统计(有多少用户访问我的移动和桌面网站)，要么用于防止机器人的任何违规行为。因为这些标头是由客户端发送的，所以可以使用一种名为“报头欺骗”的技术对其进行修改。这正是我们的爬虫程序要做的，使他们看起来像一个正常的网页浏览器。
-   **Accept：**  表明响应可接受的内容类型. 有许多不同的内容类型和子类型:  **text/plain, text/html, image/jpeg, application/json**  ...
-   **Cookie：**name1=value1;name2=value2... 这个header字段包含一组键值对。这些称为会话cookie,是网站用来验证用户身份和在浏览器中存储数据的工具。比如说, 当你登录时填写完账号密码并提交,服务器会检查你输入的账号密码是否正确。如果无误,它将重定向并且在你的浏览器中注入一个会话cookie，浏览器会将此cookie连同随后的每个请求一起发送给服务器。
-   **Referrer**: 这个字段包含请求实际URL的URL。网站通过此header字段来判断用户的来源，进而调整该用户的网站权限。例如,很多新闻网站都有付费订阅，只允许你浏览10%的帖子。但是，如果用户来自像Reddit这样的新闻聚合器,你就能浏览全部内容。网站使用referrer头字段来进行检查这一点。 有时，我们不得不伪造这个header字段来获取我们想要提取的内容。

当然header字段不仅仅是这些.你可以在[此处][3]获取更多的信息。

服务器将返回类似如下的响应:

```
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu) Content-Type: text/html; charset=utf-8 <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" /> ...[HTML CODE]
```

在第一行我们能看到一个HTTP代码  `200 OK`。这意味着我们的请求成功了。至于请求头，有很多HTTP代码，分为四个常见的类：2XX用于成功请求，3XX用于重定向，4xx用于错误请求(最著名的是404未找到)，5XX用于服务器错误。

如果您使用Web浏览器发送HTTP请求，它将解析HTML代码，获取所有最终资源(JavaScript、CSS和图像文件)，并将结果呈现到主窗口中。

在下一节中，我们将看到使用Python执行HTTP请求的不同方法，并从响应中提取我们想要的数据。

# 手动创建一个socket并且发送HTTP请求

## Socket（套接字）

在Python中执行HTTP请求的最基本方法是打开一个[socket][4]并手动发送HTTP请求:

```python
import socket

HOST = 'www.google.com'  # Server hostname or IP address
PORT = 80        # Port
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_address = (HOST, PORT)
client_socket.connect(server_address)
request_header = b'GET / HTTP/1.0\r\nHost: www.google.com\r\n\r\n'
client_socket.sendall(request_header)
response = ''
while True:
    recv = client_socket.recv(1024)
    if not recv:
        break
    response += str(recv)

```

现在我们有了HTTP响应，从其中提取数据的最基本方法就是使用正则表达式。

## 正则表达式

正则表达式(RE, or Regex) 是字符串的搜索模式。使用regex,您可以在更大的文本中搜索特定的字符或单词。

例如，您可以识别网页上的所有电话号码。您也可以轻松地替换字符串。例如，可以用小写标记替换格式较差的HTML中的所有大写标记。还可以验证一些输入。

您可能想知道，为什么在进行Web抓取时了解正则表达式很重要？毕竟，有各种不同的Python模块来解析HTML、XPath和CSS选择器。

在一个理想的[语义世界中][7] ，数据很容易被机器读取，信息被嵌入到相关的HTML元素中，并具有意义的属性。

但现实世界是混乱的。您经常会在p元素中找到大量的文本。当您想要在这个巨大的文本块(如价格、日期或名称)中提取特定数据时，您必须使用正则表达式

**注意：**  [这][8]是一个很棒的用来锻炼你regex能力的网站,还有[一个很棒的博客][9]来了解学习他们。这篇文章只涉及一小部分你可以用正则表达式做的事情。

当你的数据类似于下面这种的时候，正则表达式就能发挥很大的作用:

```
<p>Price : 19.99$</p>

```

我们可以使用XPath表达式选择这个文本节点，然后使用这种regex提取price。请记住，正则表达式模式是从左到右应用的，每个源字符只使用一次。:

```
^Price\s:\s(\d+.\d{2})$

```

要提取HTML标记中的文本，使用regex是很烦人的，但它是可行的:

```py
import re
html_content = '<p>Price : 19.99$</p>'

```

如您所见，通过socket手动发送HTTP请求并使用正则表达式解析响应是可以完成的，但这很复杂。所以有更高级别的API可以使这个任务变得更容易。

## urllib3 & LXML

> **免责声明**: 在学习Python中的urllib系列的库的时候很容易学懵逼。python除了有作为标准库一部分的urlib和urlib2，还有urlib3。urllib2在Python3中被分成很多模块以及urllib 3不应在短期内成为标准库的一部分。所有这些令人困惑的细节都将成为它自己的博客文章的主题。 在本节中，我选择只讨论urllib 3，因为它在Python世界中被广泛使用。

urllib3是一个高级包，它允许您对HTTP请求做任何您想做的事情。我们可以用更少的代码行来完成上面的套接字操作：

```python
import urllib3
http = urllib3.PoolManager()
r = http.request('GET', 'http://www.google.com')
print(r.data)
```

比套接字版本要简洁得多，不是吗？不仅如此，API也很简单，您可以轻松地做许多事情，比如添加HTTP头、使用代理、发布表单等等。

例如，如果我们必须设置一些header字段来使用代理，我们只需这样做：
```python
import urllib3
user_agent_header = urllib3.make_headers(user_agent="<USER AGENT>")
pool = urllib3.ProxyManager(f'<PROXY IP>', headers=user_agent_header)
r = pool.request('GET', 'https://www.google.com/')
```

看见没?完全相同的行数

然而，有些事情urllib 3并不容易处理。如果要添加cookie，则必须手动创建相应的header字段并将其添加到请求中。

此外，urllib 3还可以做一些请求不能做的事情，比如池和代理池的创建和管理，以及重试策略的控制。

简单地说，urllib 3在抽象方面介于请求和套接字之间，尽管它比套接字更接近请求。

为了解析响应，我们将使用lxml包和XPath表达式。

## XPath

XPath是一种使用路径表达式在XML或HTML文档中选择节点或节点集的技术。与文档对象模型(DocumentObjectModel)一样，XPath自1999年以来一直是W3C标准。即使XPath本身不是一种编程语言，它允许您编写可以直接访问特定节点或节点集的表达式，而无需遍历整个XML或HTML树。

可以将XPath看作一种正则表达式，但专门用于XML或HMTL。

要使用XPath从HTML文档中提取数据，我们需要3件事:

-   HTML文档
-   一些XPath表达式
-   运行这些表达式的XPath引擎

首先，我们将使用我们通过urllib 3获得的HTML。我们只想从Google主页中提取所有链接，所以我们将使用一个简单的XPath表达式 `//a`，并使用LXML来运行它。LXML是一个快速易用的XML和HTML处理库，支持XPath。

_安装_:

```
pip install lxml

```

下面是前面片段之后的代码:

```python
from lxml import html

```

输出如下:

```python
https://books.google.fr/bkshp?hl=fr&tab=wp
https://www.google.fr/shopping?hl=fr&source=og&tab=wf
https://www.blogger.com/?tab=wj
https://photos.google.com/?tab=wq&pageId=none
http://video.google.fr/?hl=fr&tab=wv
https://docs.google.com/document/?usp=docs_alc
...
https://www.google.fr/intl/fr/about/products?tab=wh
```

请记住，这个示例非常简单，并没有向您展示XPath有多强大。 (注意: 这个XPath表达式应该更改为 `//a/@href`  为了避免在`links`中迭代以获得它们的 `href`)。

如果您想了解更多关于XPath的知识，可以阅读这个[很棒的介绍文档][12]. LXML文档也编写得很[好是一个好的起点][13].

XPath表达式(如regexp)非常强大，是从HTML中提取信息的最快方法之一。虽然XPath也像regexp一样，但它很快就会变得凌乱、难以阅读和难以维护。

# requests & BeautifulSoup（库）

![](https://res.cloudinary.com/practicaldev/image/fetch/s--HrgsYR9Q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/requests/requests/master/docs/_static/requests-logo-small.png)

下载量已经超过11,000,000次的[Requests库][14]是Python包中的佼佼者,它是Python使用最广泛的包。

安装:

```
pip install requests

```

使用Requests库发送一个请求是非常容易的事情:

```python
import requests

```

使用Requests库可以很容易地执行POST请求、处理cookie和查询参数

### Hacker News认证

假设我们想要创建一个工具来自动提交我们的博客文章给Hacker News或任何其他论坛如Buffer。在提交我们的链接之前，我们需要认证到这些网站。这就是我们要通过Requests和BeautifulSoup做的事情！

下面是Hacker News登录表单和相关的DOM:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Dr2y7j7F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://ksah.in/content/images/2016/02/screenshot_hn_login_form.png)

这个表单上有三个 `<input>`标签。第一个带有hidden类型的名字为“goto”输入，另外两个是用户名和密码。

如果你在Chrome浏览器中提交表单，你会发现有很多事情发生：重定向和正在设置cookie。这个cookie将由Chrome在每个后续请求上发送，以便服务器知道您已通过身份验证。

通过Requests来做这些工作将会变得非常简单，它将自动为我们处理重定向，而处理cookie则可以使用_Session_Object完成。

接下来我们需要的是BeautifulSoup，它是一个Python库，它将帮助我们解析服务器返回的HTML，以确定我们是否登录。

安装:

```
pip install beautifulsoup4

```

所以我们要做的就是通过POST请求将这三个带有我们登录凭证的输入发送到 /login 终端，并且检查是否存在一个只在登录

```python
import requests
from bs4 import BeautifulSoup
BASE_URL = 'https://news.ycombinator.com'
USERNAME = ""
PASSWORD = ""
s = requests.Session()
data = {"gogo": "news", "acct": USERNAME, "pw": PASSWORD}
r = s.post(f'{BASE_URL}/login', data=data)

```

为了了解更多关于BeautifulSoup, 我们可以尝试提取主页上的每一个链接。

_顺便说一句，Hacker News提供了一个[功能强大的API][17], 所以我们以它为例。您真的应该使用API，而不是爬取它!_

我们需要做的第一件事是观察分析Hacker News主页，以了解我们必须选择的结构和不同的CSS类：

我们可以看到所有的posts都在  `<tr class="athing">`里 ,因此，我们需要做的第一件事是选择所有这些标记。通过下面这行代码我们很容易实现：

```
links = soup.findAll('tr', class_='athing')

```

然后，对于每个链接，我们将提取其ID、标题、url和排名：

```python
import requests
from bs4 import BeautifulSoup
r = requests.get('https://news.ycombinator.com')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.findAll('tr', class_='athing')
formatted_links = []
for link in links:
    data = {
        'id': link['id'],
        'title': link.find_all('td')[2].a.text,
        "url": link.find_all('td')[2].a['href'],
        "rank": int(links[0].td.span.text.replace('.', ''))
    }
    formatted_links.append(data)

```

正如您所看到的，Requests和BeautifulSoup是提取数据和自动化实现各种操作(如填写表单)的很好的库。如果你想做大规模的网络抓取项目，你仍然可以使用请求，但你需要自己处理很多事情。

当你需要刮很多网页的时候，有很多事情你需要处理：

-   找到并行化代码的方法，使代码更高效
-   处理错误
-   存储爬取的数据
-   过滤和筛选数据
-   控制请求速度，这样就不会使服务器超载

对我们来说幸运的是，有工具可以为我们处理所有这些事情。

# Scrapy

![](https://res.cloudinary.com/practicaldev/image/fetch/s--VIvNnTuY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://secure.meetupstatic.com/photos/event/1/b/6/6/600_468367014.jpeg)

scrapy是一个强大的Python Web抓取框架。它提供了许多特性来异步下载、处理和保存网页。它处理多线程、爬行(从链接到查找网站中的每个URL的过程)、站点地图爬行等等。

Scrapy还有一个名为ScrapyShell的交互模式。使用ScrapyShell，您可以在您的代码中快速测试您的东西，比如XPath表达式或CSS选择器。

Scrapy的缺点是学习曲线陡峭-有很多东西要学。

为了跟进我们关于 Hacker News的例子，我们将编写一个ScrapySpider，它会抓取前15页的结果，并将所有内容保存在CSV文件中。

pip安装Scrapy:

```
pip install Scrapy

```

然后，您可以使用scrapycli为我们的项目生成样板代码：

```
scrapy startproject hacker_news_scraper

```

在`hacker_news_scraper/spider` 我们将使用Spider的代码创建一个新的Python文件:

```python
from bs4 import BeautifulSoup
import scrapy
class HnSpider(scrapy.Spider):
    name = "hacker-news"
    allowed_domains = ["news.ycombinator.com"]
    start_urls = [f'https://news.ycombinator.com/news?p={i}' for i in range(1,16)]
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">def</span> <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">parse</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> response<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
    soup <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> BeautifulSoup<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>response<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>text<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'html.parser'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
    links <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> soup<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>findAll<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'tr'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> class_<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'athing'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>

    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">for</span> link <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">in</span> links<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
        <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">yield</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
            <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'id'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> link<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'id'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
            <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'title'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> link<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>find_all<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'td'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span><span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">2</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>a<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>text<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
            <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">"url"</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> link<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>find_all<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'td'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span><span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">2</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>a<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'href'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
            <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">"rank"</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">int</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>link<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>td<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>span<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>text<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>replace<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'.'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">''</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
        <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></code></pre><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">Scrapy中有很多规定.这里我们定义了一个启动URL数组。属性name将用于使用Scrapy命令行调用我们的Spider。</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">对<span> </span><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: rgb(208, 208, 213); word-break: break-all;">start_urls</code><span> </span>数组中的每个URL调用解析方法</p><p style="box-sizing: inherit; margin: 0px 0px 1.5em; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 22px; vertical-align: baseline; min-width: 100%;">然后，为了让我们的爬虫更好的在目标网站上爬数据，我们要对Scrapy进行微调。</p><pre style="box-sizing: inherit; margin: 1.5em 0px 3em; padding: 20px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: 1.5em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 1.4rem; vertical-align: baseline; min-width: 100%; overflow-x: auto; max-width: 100%; color: rgb(27, 27, 50); background: rgb(238, 238, 240);"><code style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: inherit; font-family: &quot;Roboto Mono&quot;, monospace; font-size: inherit; vertical-align: baseline; background: transparent;"># Enable and configure the AutoThrottle extension (disabled by default)See https://doc.scrapy.org/en/latest/topics/autothrottle.html
AUTOTHROTTLE_ENABLED = True
The initial download delay

```

你应该一直把这个爬虫程序一直运行着。它将通过分析响应时间和调整并发线程的数量来确保目标网站不会而负载过大。

您可以使用ScrapyCLI运行下面的代码并且设置不同的输出格式(CSV、JSON、XML等)

```
scrapy crawl hacker-news -o links.json

```

类似于这样，最终爬取的结果会按照json的格式导出到一个名为links的json文件中

# Selenium & Chrome —headless

对于大规模的网络抓取任务来说，Scrapy是非常好的。但是，如果需要爬取用JavaScript框架编写的单页应用程序，这是不够的，因为它无法呈现JavaScript代码。

爬取这些SPAs是很有挑战性的，因为经常涉及很多Ajax调用和WebSocket连接。如果性能存在问题，你将不得不逐个复制JavaScript代码，这意味着使用浏览器检查器手动检查所有网络调用，并复制和你感兴趣的数据相关的Ajax调用。

在某些情况下，涉及到的异步HTTP调用太多，无法获取所需的数据，在headless模式的浏览器中呈现页面可能会更容易。

另一个很好的用例是对一个页面进行截图。这是我们将要对Hacker News主页做的事情(再次！)
pip安装Selenium包:

```
pip install selenium

```

你还需要[Chromedriver][21]:

```
brew install chromedriver

```

然后，我们只需从Selenium包中导入Webriver，配置Chrome的Headless=True，并设置一个窗口大小(否则它非常小)：

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

```

然后你应该得到一个很好的主页截图

![](https://landen.imgix.net/blog_pkzRugQgwaDvAtAE/assets/kfyrFQpXOyHUbqzq.png)

您可以使用SeleniumAPI和Chrome做更多的事情，比如:

-   执行JavaScript
-   填写表单
-   点击元素
-   用CSS选择器或XPath表达式提取元素

Selenium和headless模式下的Chrome是能爬取到任何你想要爬取的数据的最终最棒的组合. 你可以用你普通的Chrome浏览器自动完成你能做的任何事情。

最大的缺点是Chrome需要大量的内存/CPU能力。通过一些微调，您可以将每个Chrome实例的内存占用减少到300-400MB，但每个实例仍然需要一个CPU核心。

如果您想同时运行多个Chrome实例，您将需要强大的服务器(其成本迅速上升)和对资源的持续监视。

## 总结

下面是我们在本文中讨论的每一项技术的简要概述表。如果你想要对此表进行补充，请不要犹豫，直接在评论中回复我。

| NAME | SOCKET | URLLIB3 | REQUESTS | SCRAPY | SELENIUM |
| --- | --- | --- | --- | --- | --- |
| 易用性 | \- - - | \+ + | \+ + + | \+ + | + |
| 灵活性 | \+ + + | \+ + + | \+ + | \+ + + | \+ + + |
| 执行速度 | \+ + + | \+ + | \+ + | \+ + + | + |
| 适用范围 | \-编写底层编程接口 | \-需要对HTTP进行精细控制的高级应用程序(pip, aws client, requests, streming) | \-调用API  \-简单的应用程序(就HTTP需求而言) | \-爬取一个重要的网站列表  \- 对爬取到的数据进行过滤、提取和加载 | \-JS 渲染 \-Scraping SPA  \-自动化测试  \-程序截图 |
| 更多 | \-  [官方文档][23]  \-  [不错的教程][24]  👍 | \-  [官方文档][25]  \-  [urllib 3的PIP使用][26], 很有趣 | \-  [官方文档][27]  \-  [Requests usage of urllib3][28] | \-  [官方文档][29]  \-  [Scrapy overview][30] | \-  [官方文档][31]  \-  [Scraping SPA][32] |

  
我希望这个概述将帮助您选择您的Python抓取工具，并希望您通过本文能有所收获。

我在这篇文章中所说的一切都是我用来建立我新的黑客项目的东西。:  [ScrapingNinja][33], 最简单的web爬虫API 😊.

在这篇文章所提及的每一个工具，我都会在之后单独为其写一篇博客来进行深入研究其细节

不要犹豫，在评论中告诉我你还想知道关于爬虫的哪些知识。我将会在下一篇文章中进行讲解分析
Happy Scraping!

  

  

[1]: https://www.freecodecamp.org/news/guide-to-web-scraping/
[2]: https://www.w3schools.com/tags/ref_httpmethods.asp
[3]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
[4]: https://docs.python.org/3/howto/sockets.html
[5]: http://www.google.com%27/
[6]: http://www.google.com%5Cr%5Cn%5Cr%5Cn'
[7]: https://en.wikipedia.org/wiki/Semantic_Web
[8]: https://regex101.com/
[9]: https://www.rexegg.com/
[10]: http://www.google.com'
[11]: https://www.google.com/'
[12]: https://librarycarpentry.org/lc-webscraping/02-xpath/index.html
[13]: https://lxml.de/tutorial.html
[14]: https://github.com/psf/requests
[15]: https://www.scrapingninja.co'
[16]: https://news.ycombinator.com'
[17]: https://github.com/HackerNews/API
[18]: https://news.ycombinator.com'
[19]: https://news.ycombinator.com/news?p=
[20]: https://doc.scrapy.org/en/latest/topics/autothrottle.html
[21]: http://chromedriver.chromium.org/
[22]: https://news.ycombinator.com/"
[23]: https://docs.python.org/3/library/socket.html
[24]: https://realpython.com/python-sockets/
[25]: https://urllib3.readthedocs.io/en/latest/
[26]: https://github.com/pypa/pip/search?q=urllib3&unscoped_q=urllib3
[27]: https://github.com/psf/requests
[28]: https://github.com/psf/requests/search?q=urllib3&unscoped_q=urllib3
[29]: https://scrapy.org/
[30]: https://www.datacamp.com/community/tutorials/making-web-crawlers-scrapy-python
[31]: https://www.seleniumhq.org/
[32]: https://www.scrapingninja.co/blog/scraping-single-page-applications
[33]: https://www.scrapingninja.co/
