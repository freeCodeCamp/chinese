> -   原文地址：[How I Built a Web Scraper with Beautiful Soup and Used it to Land My First Job](https://www.freecodecamp.org/news/how-i-used-a-side-project-to-land-a-job/)
> -   原文作者：Daniel Chae
> -   译者：17gttk
> -   校对者：

![How I Built a Web Scraper with Beautiful Soup and Used it to Land My First Job](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg)

找到任何工作，更不用说第一份工作，可能是一个困难的过程。雇主经常告诉你，你没有足够的经验，他们不可能雇用你。但这意味着你也不会有机会来获得这种经验（例如一份工作）。

在技术领域找到一份工作会感觉更有挑战性。一方面，你必须很好地回答面试问题，像其他工作一样。另一方面，你必须证明你的技术能力能够胜任你所面试的工作。

这些障碍可能是难以克服的。在这篇文章中，我将分享我如何创建一个网络爬虫程序来帮助我在技术领域找到第一份工作。我将解释我到底做了什么，以及我学到的关键经验。最重要的是，我将分享我是如何利用这些经验教训，在面试中取得胜利并获得工作机会的。

## 我创建了什么

![](https://www.freecodecamp.org/news/content/images/2021/02/william-iven-gcsNOsPEXfs-unsplash.jpg)

当我在寻找我的第一份工作时，我正准备进入大四。我准备提前一个学期毕业，所以我把在 12 月前找到一份全职工作作为目标。考虑到这一点，我知道我必须想出有创造力的方法，让我在我的同龄人中脱颖而出。

我有几个很好的实习机会（其中一个是在 Facebook），但我知道我需要一些东西来提升我的简历。

我发现业余项目有很大的潜力可以做到这一点。我寻找具有挑战性但可以做的项目。这些项目需要展示我的编程技能和对软件的热情。但它们也需要展示我处理数据的诀窍（我想找到一个数据分析方面的工作）。

在进行了更多的研究之后，我发现了一个类似于[这个]（https://realpython.com/beautiful-soup-web-scraper-python/） 的有用的教程，它向我展示了如何从一个网站上爬取数据。该教程启发了我建立自己的网络爬虫项目。但是，我并不是随意爬取一个网站，而是想爬取股票数据。下面是我如何建立我的业余项目的细节。 

## 我是如何创建网络爬虫程序的

我做的第一件事是思考我想爬取的数据类型。当时，我对金融数据感兴趣。我做了一些研究，发现[纳斯达克网站]（https://www.nasdaq.com/） 是一个很好的开始。我前年夏天在 Facebook 实习过，所以我想我可以尝试爬取 Facebook 的股票数据。

```python
#import libraries
import urllib.request
from bs4 import BeautifulSoup

#specify the url
quote_page = 'https://www.nasdaq.com/symbol/fb/after-hours'

# query the website and return the html to the variable 'page'
page = urllib.request.urlopen(quote_page)

# parse the html using beautiful soup and store in the variable 'soup'
soup = BeautifulSoup(page, 'html.parser')

# Take out the <div> of name and get its value
name_box = soup.find('h1')

#define variable for where we'll store the name of our stock
name = name_box.text.strip() # strip() is used to remove starting and trailing
print(name)

# get the index price
price_box = soup.find('div', attrs={'class':'qwidget-dollar'})
# define variable for where we'll store the price of our stock
price = price_box.text
print(price)
```

上面的代码打印出了当天 Facebook 股票的任何价格。但我知道我不能止步于此。我需要展示我可以爬取股票数据，并利用这些数据做一些事情。我不想让这个项目过于复杂化。但我也想包括足够的数据分析来打动潜在的雇主。

经过一个月的工作，我想出了一个 Python 程序，做了以下工作：

* 爬取三家公司 30 天内的股票价格并附加到一个 CSV 文件中
* 将 CSV 文件导入数据框架，并计算出每只股票在过去 30 天内的平均价格
* 使用 matplotlib 可视化每个公司的股价变化

当我买了一台新电脑时，我忘了保存实际的代码。这里有一些伪代码，如果你们有人想重现我的做法：

```python
#import libraries
import pandas as pd
from datetime import date, datetime, timedelta
import math
import numpy as np

#Scrape and append three companies' stock prices to a pandas dataframe over the course of 30 days

#1) Scrape stock prices for Company A, Company B, and Company C
#2) Append each stock price for the day to a separate column within a CSV using ExcelWriter (pandas function)
#3) Include a single column in the CSV for the date
#4) Repeat until you have 30 days' worth of data for each company

#Calculate the average price for each stock over the course of the 30 days in the dataframe
#1) Import CSV file back into the script as a dataframe
#2) Generate basic statistics (describe() function) for each column or use the .mean() function if you're looking for just the average

#Visualize the average stock price over the last 30 days using matplotlib
#1) Create a different Time Series line plot for Company A, Company B, and Company C

```

在我完成了脚本的编写和测试之后，我写了一份关于我所做工作的简短报告。我总结了这个爬虫程序能做的一切，以及它如何适用于不同的使用案例。

当我向雇主提及这份报告时，他们很少要求阅读它。但我还是把它放在手边以备不时之需。


## 我学到的关键经验

![](https://www.freecodecamp.org/news/content/images/2021/02/moren-hsu-8mifpgpiyBs-unsplash.jpg)

我从这个项目中学到了三个关键的经验。

1.  Beautiful Soup 库是一个有趣的、可以从公共网站上爬取数据的资源（尽管它有点被人瞧不起）。
2.  对于那些想在技术领域，特别是数据领域开拓事业的人来说，有一个有用的框架。该框架是关于数据来源（查询数据库、网络爬虫等）、数据格式化（Excel、DataFrames 等）以及从中获得洞见（重要推荐、统计数据等）。
3.  建立业余项目是最容易的部分。你必须能够说清楚你做了什么，为什么这么做，以及你所做的事情如何能够适用于潜在的雇主。


## 我是如何利用这些经验在面试中获胜并找到第一份工作的

![](https://www.freecodecamp.org/news/content/images/2021/02/linkedin-sales-navigator-W3Jl3jREpDY-unsplash.jpg)

在我写完网络爬虫和分析的脚本后，我觉得我已经准备好开始申请工作。我需要关注两个关键领域：我的简历和面试。

### 我如何改进我的简历

我需要把重点放在如何在我的简历上介绍网络爬虫。我想清楚地表明，网络爬虫可以为我所申请的公司带来价值和好处。

首先，我在简历上留出了一个业余项目的部分。然后我列出了我用 Python 建立了一个使用 Beautiful Soup 库的网络爬虫程序。

也就是说，我不能只说我建立了一个网络爬虫程序，我还确保列出了描述我爬取的数据类型的要点。我还列出了脚本的组成部分和我对数据的处理。以下是我写出的几个要点：

* 爬取了纳斯达克指数中基于 YTD 回报率的前十只股票。
* 生成一个月的纳斯达克数据并将其写入 CSV 文件中
* 使用纳斯达克数据进行深入的、自动的统计分析

### 我如何准备面试

我想确保我能够向面试官解释网络爬虫。我知道我必须先解释为什么我建立了网络爬虫程序。但我也需要准备好解释为什么网络爬虫对这份工作有价值。

这需要两个步骤：确定我在业余项目中使用的硬技能，并将这些技能与职位描述中的关键职责联系起来。

我花了一些时间来思考我为建立网络爬虫所做的每一件事。经过头脑风暴，我想到了以下这些硬技能：

* Python
* Excel
* 网络爬虫
* 数据处理
* 数据自动化
* 数据分析
* 统计分析
* 财务预测

对于关键职责，我一定要准备好面试答案。我的做法是将我用于网络爬虫项目的硬技能与相应的责任联系起来。

让我们从 Hulu 的一个数据分析师工作中提取这个关键职责：

> "建立数据模型、数据可视化和自动分析，使整个业务的洞察力得以运作"

因此，我为此准备了一个故事，说明我如何使用纳斯达克的数据来创建一个财务预测的可视化。我还准备了一个关于我如何使网络爬虫和分析自动化的故事。

## 之后我得到了这份工作

![](https://www.freecodecamp.org/news/content/images/2021/02/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg)

几个星期过去了，我遇到了一家娱乐公司的数据分析师的职位。

他们通过我的申请联系到我，并让我参加了面试。我做了充分的准备并且确保我能够将网络爬虫的每一项硬技能与工作描述中的关键职责联系起来。

每个面试官都问了网络爬虫程序的不同部分。他们对业余项目中的数据处理和自动分析部分非常感兴趣。我确保我能够解释网络爬虫这些方面的知识。我的每一个面试答案都使用了 S.T.A.R.（情境、任务、行动和结果）的格式。

四轮面试后，公司为我提供了一个全职带薪的职位。这个工作机会是在 12 月中旬收到的。

## 去找你的下一个业余项目

![](https://www.freecodecamp.org/news/content/images/2021/02/sigmund-Fv2J-aK0Acs-unsplash.jpg)

当我回顾我获得第一个工作机会的过程时，我很高兴我建立了网络爬虫程序。通过行为和技术面试是很伤脑筋的。但我很高兴我有办法准备充分并在这些面试中表现很好。

找到第一份工作可能很困难，因为你需要在实际工作之前以某种方式获得经验。这是一个潜在的恶性循环，可能很难突破。

话虽如此，请放心，有一条明确的成功之路。你有一个难以置信的机会，以创造性的方式获得经验（如建立一个网络爬虫项目），并找到第一份工作。
