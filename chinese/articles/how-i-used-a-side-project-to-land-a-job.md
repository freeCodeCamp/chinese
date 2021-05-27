> -   原文地址：[How I Built a Web Scraper with Beautiful Soup and Used it to Land My First Job](https://www.freecodecamp.org/news/how-i-used-a-side-project-to-land-a-job/)
> -   原文作者：Daniel Chae
> -   译者：
> -   校对者：

![How I Built a Web Scraper with Beautiful Soup and Used it to Land My First Job](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg)

Landing any job, let alone a first job, can be a difficult process. Employers often tell you that you don't have enough experience for them to hire you. But that means you also won't get an opportunity to gain that experience (like a job).

Landing a job in tech can feel even more challenging. On the one hand you have to answer interview questions well, like any other job. On the other you have to prove that your technical skills can do the job you're interviewing for.

These hurdles can be difficult to overcome. In this article I'll share how I built a web scraper to help me land my first job in tech. I'll explain what exactly I built and the key lessons I learned. Most importantly, I'll share how I leveraged those lessons to ace my interviews and land a job offer.

## What I Built

![](https://www.freecodecamp.org/news/content/images/2021/02/william-iven-gcsNOsPEXfs-unsplash.jpg)

When I was looking for my first job, I was heading into my senior year of college. I was set to graduate a semester early so I made it a goal to land a full\-time job by December. With this in mind, I knew I had to come up with creative ways to stand out among my peers.

I had a few great internships (one of which was at Facebook), but I knew I needed something to bolster my résumé.

I discovered that side projects had a lot of potential to do just that. I looked for challenging but doable projects. These projects needed to showcase my programming skills and passion for software. But they also needed to show my knack for scrappy data wrangling (I wanted to get into a data analytics\-type of role).

After a little more research I found a helpful tutorial similar to [this one](https://realpython.com/beautiful-soup-web-scraper-python/) that showed me how to scrape data from a website. The tutorial inspired me to build my own web scraper. But instead of scraping a random site, I wanted to scrape stock data. Below is a breakdown of how I set out to build my side project.

## How I Built the Web Scraper

The first thing I did was think through the type of data I wanted to scrape. At the time, I had an interest in financial data. I did a bit of research and discovered that the [NASDAQ website](https://www.nasdaq.com/) was a good place to start. I interned at Facebook the summer before so I thought I would try scraping Facebook stock data:

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

The above script printed out whatever price the Facebook stock was that day. But I knew I couldn't stop there. I needed to show I could scrape stock data as well as do something with the data. I didn't want to overcomplicate the project. But I also wanted to include enough analysis to impress potential employers.

After a month of work, I came up with a Python script that did the following:

*   Scrape and append three companies' stock prices to a CSV file over the course of 30 days
*   Import the CSV as a dataframe and calculate the average price for each stock for the last 30 days
*   Visualize the change in stock price for each company using matplotlib

When I bought a new computer I forgot to save the actual script. Here is some pseudocode in case any of you wanted to reproduce what I did:

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

After I finished writing and testing the script, I wrote up a brief report on what I did. I summarized everything the scraper could do and how it could apply to different use cases.

When I mentioned the report to employers, they rarely asked to read it. But I kept it on hand anyway for good measure.

## The Key Lessons I Learned

![](https://www.freecodecamp.org/news/content/images/2021/02/moren-hsu-8mifpgpiyBs-unsplash.jpg)

There were three key lessons I learned from this project.

1.  The Beautiful Soup library is a fun and scrappy resource for scraping data off public websites (although it's a bit looked down upon).
2.  A helpful framework exists for those who want to carve out a career in tech, specifically data. That framework is all about sourcing data (querying a database, web scraping, and so on), formatting that data (Excel, DataFrames, and the like), and deriving insights from it (key recommendations, statistics, and so on).
3.  Building side projects is the easy part. You have to be able to talk through what you did, why you did it, and how what you did can apply to a potential employer.

## How I Leveraged those Lessons to Ace My Interviews and Land My First Job

![](https://www.freecodecamp.org/news/content/images/2021/02/linkedin-sales-navigator-W3Jl3jREpDY-unsplash.jpg)

After I wrote the scripts for the web scraper and analysis, I felt ready to start applying for jobs. There were two key areas I needed to focus on: my résumé and the interview.

### How I Improved My Résumé

I needed to focus on how I would present the web scraper on my résumé. I wanted to make it clear that the web scraper could add value and be beneficial to the companies I applied to.

First, I set aside a section for side projects on my résumé. Then I listed that I built a web scraper with Python using the Beautiful Soup library.

That said, I couldn't just say I built a web scraper and leave the résumé like that. I also made sure to list out bullet points that described the types of data I scraped. I also listed the script's components and what I did with the data. Here are a few of the bullet points I wrote out:

*   Scraped the top ten stocks in the NASDAQ index based on YTD returns
*   Generated a month's worth of NASDAQ data and wrote it to a CSV file
*   Conducted in\-depth, automated statistical analysis using the NASDAQ data

### How I Prepared for the Interview

I wanted to be sure that I could explain the web scraper to an interviewer. I knew I had to explain why I built the web scraper in the first place. But I also needed to be ready to explain why the web scraper was valuable for the job.

This required two steps: identify the hard skills I used in the side project and connect those skills to key responsibilities in the job description.

I took some time to think through every single thing I did to build the web scraper. After brainstorming, here were the hard skills I came up with:

*   Python
*   Excel
*   Web Scraping
*   Data Wrangling
*   Data Automation
*   Data Analysis
*   Statistical Analysis
*   Financial Forecasting

For key responsibilities, I made sure to prepare interview answers. I did this by connecting a hard skill I used for the web scraper to the corresponding responsibility.

Let's take this key responsibility from a data analyst role from Hulu:

> "Build data models, data visualizations and automated analytics that operationalize insights across the business"

So for this I prepared a story for how I used the NASDAQ data to create a financial forecasting visual. I also prepped a story about how I automated the web scraping and analysis.

## Then I Got a Job Offer

![](https://www.freecodecamp.org/news/content/images/2021/02/stefan-stefancik-Ue2-23uBwNw-unsplash.jpg)

Several weeks went by before I came upon a data analyst role for an entertainment company.

They reached out about my application and took me through the interview process. I dotted my i's and crossed my t's. I made sure I could connect every hard skill from the web scraper with key responsibilities from the job description.

Each interviewer asked about different parts of the web scraper. They were very interested in the data wrangling and automated analysis portions of the side project. I made sure I could explain those facets of the web scraper. I used the S.T.A.R. (Situation, Task, Action, and Result) format for each of my interview answers.

Four rounds of interviewers later the company offered me a full\-time, salaried role. The offer letter came in mid December.

## Go find your next side project

![](https://www.freecodecamp.org/news/content/images/2021/02/sigmund-Fv2J-aK0Acs-unsplash.jpg)

When I look back at the process of landing my first job offer, I'm glad I built the web scraper. It was nerve wracking to go through the behavioral and technical interviews. But I'm glad I had the means to prepare and ace those interviews.

Landing that first job can be tough because you need to somehow get experience before you can practically do so. It's a potentially vicious cycle that can be difficult to break out from.

That said, rest assured there's a clear path to success. You have an incredible opportunity to gain experience in creative ways (like building a web scraper) and land that first job.
