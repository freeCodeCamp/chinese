> -   原文地址：[What is Data Analytics? A 30,000-Foot Intro to Key Data Analysis Concepts 关于数据分析核心概念的详细介绍](https://www.freecodecamp.org/news/a-30-000-foot-introduction-to-data-analytics-and-its-foundational-components/)
> -   作者：Adam Naor
> -   译者：
> -   校对者：

![What is Data Analytics? A 30,000-Foot Intro to Key Data Analysis Concepts](https://images.unsplash.com/photo-1423189871551-9b8513198c81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Data analytics is the process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information.

Data analytics is everywhere in the modern world: it helps inform the technology we use, how software is built, and the ways in which products are developed.

In this post I will cover core data analytics principles and how to apply them, providing examples that you can deploy to capture and obtain meaningful insights from your data.

I will also share examples of how data analytics is being used in a variety of products you are likely familiar with - website optimization, health and diet apps, agriculture, and insurance to name a few.

If you share my belief that data is a guide that can inform your decisions, it is worthy of further study.

## Sample Questions

First, see if you can answer these questions.

If these don’t come easily, don’t worry.

I will walk you through how to learn the basics of data analytics so that you can approach each of these questions with confidence.

The manager of an internet retailing operation selling a single product has found that people who visit the web site buy the product 26% of the time. He's also discovered and that the behavior of customers seems to be independent.

Assume that exactly 8 potential customers visit the site every day. Imagine that the manager is on an incentive plan that pays him $300 for any day in which the site generates three or more sales. Otherwise his pay is $100 per day.

a. What is the probability of him earning the \$300 on any random day?

Answer: ~35%

b. What is the expected value of his pay on any random day?

Answer: \$170

c. The manager is offered his choice of two alternative incentive schemes, by which he will receive either (a) no base salary, but a commission of $75 per sale, or (b) a fixed salary of $160 per day, or (c) the original plan outlined above.

Which plan should he select if he wants to maximize the expected value of his earnings?

Answer: the original plan

## The Basics of Data Analytics

Let’s walk through how to think about data and build on these learnings so that you can answer the above questions.

The first aspect of data analytics we must learn is that there are different types of data. Simple, right?

It sure is.

Data can be categorical (gender, location, and so on) or numerical (number of customers, active users, and so on).

Some data is discrete (that is, the number of job applicants applying to a job) and other data is continuous (infinite number of possible outcomes).

Before analyzing data, take a moment to understand the types of data you have.

Do you have continuous or discrete data? Is your data categorical or numerical?

After answering those questions, you are ready to dive deeper.

Data has three primary types of characteristics:

1.  Data can be cross-sectional. This means that the data is a snapshot of a pattern or trend. An example is the results of a survey, like the national census.
2.  Data can be a time series. An example is my test scores, [wages earned][1] in a period of time, or how companies measure and [apply discounts][2] throughout the year.
3.  There's also panel data. An example is data that a firm might store in a CRM. Panel data enables multiple subjects and multiple points in time. As storage is becoming increasingly cheap, this form of data is becoming more common.

Now that you know the data types and the primary characteristics of data, I want to provide an overview of how data is distributed.

## Dispersion: How Data is Organized

Unique insights can be gleaned by looking at the shape of your data.

Data can be organized via a central tendency.

To do so, order your data set from smallest to largest.

When data is neatly lined up, you can start to see dispersion for the first time.

By seeing how spread out data is you can compute the data’s range by subtracting the largest value from the smallest value.

If data has a large range (the distance between the minimum and maximum values) then it is said to have high dispersion.

Lastly, you can look at all available data or a snapshot of a dataset. You can easily compute the mean, median, and mode.

Think about the following thought experiment. If you place your hand into a jar of M&Ms and pull out one red one, what can you deduce?

Likely not much. Let us explain why by defining confidence intervals.

## Confidence Intervals

A confidence interval is a range of values that’s likely to include a population value with a certain degree of confidence.

Usually it is expressed as a percentage whereby the population mean lies between a lower and upper interval.

Back to our M&M example.

Imagine you did this activity (pulling an M&M out of an imagery jar) an infinite amount of times and got the same result. In other words you only saw red M&Ms. What could you possibly say then?

You would ascertain that it is _likely_ that only red M&Ms exist in the jar. This is a valid conclusion.

Notice that we are not saying “no other types of M&Ms exist”. Rather you are saying that there is a high probability that only red M&Ms exist in the jar.

Each time you remove an M&M your degree of confidence goes up.

## Sampling vs Measuring the Whole Population

When gathering data you can look at a population or you can sample the population.

Do you need to look at every M&M in the world to say that all are a certain color? Or could you look at a random sampling and make the same conclusion?

At its core, that is what sampling is about.

A sampling population is the selection of a subset (a statistical sample) of individuals from within a statistical population to estimate characteristics of the whole population.

Your ultimate goal may be to see how often events occur or how many types of outcomes show up in a distribution.

## Bringing It All Together: Sampling and Expected Value

Observations are key to data analytics because they can help you answer very specific questions:

1.  How likely are things to occur?
2.  If you have certain odds, what are the payoffs of that event occurring (that is, you will get paid off if a certain event happens)?

To capture expected value you need to know the probability of an event multiplied by the amount of times the event happens.

Expected payoffs can increase as they fall further from the data’s midpoint. Think about the likelihood of starting a company that is highly successful. Most firms don’t IPO.

But for those that do, the payoffs are very large. When I started a website to [help people work from home][3], I thought the odds of success were 10% at best.

Jeff Bezos famously said that the odds of Amazon being successful were 30%.

A commonly used measure of dispersion (and therefore the likelihood of an outcome) is the standard deviation, which is simply the square root of the variance.

The variance of a data set is calculated by taking the arithmetic mean of the squared differences between each value and the mean value.

## Example Questions & Answers

This article serves as a high level overview to introduce you to key foundational components of statistics and data analytics.

Now try these two questions.

If you can solve them, great! In order to solve these, think about expected value and payoffs.

Website designer and coder John Bell would like to determine whether it would be profitable to establish a website design company.

John believes there are four possible levels of demand for his services:

-   Very low demand — 1% of companies would use the service; John would lose \$100,000.
-   Low demand — 5% of companies would use the service; John would earn \$10,000.
-   Moderate demand — 10% of companies would use the service; John would earn \$25,000.
-   High demand — 29% of companies would use the service; John would earn \$75,000.

Based on past experiences in coding and building websites, John assigns the following probabilities to the various demand levels:

```plain
P(very low demand) = 0.20
P(low demand) = 0.50
P(moderate demand) = 0.20
P(high demand) = 0.10
```

(a) Set up the decision tree and compute the expected value of offering the service.

```plain
.2 * (-100,000) + .5 * (10,000) + .2 * (25,000) + .1 * (75,000)
= $ -2,500
```

(b) Compute the expected value with perfect information for John’s payoff.

```plain
.5*100,000 + .2*25,000 + .1*75,000 = $17,500
```

In other words, John believes he will earn \$17,500 if he opens his web design company.

With that forward looking guidance, John can decide if he wants to take the next steps or look for alternative paths for his skills and time.

## Final Thoughts on Data Analytics

This article is a primer and should help whet your appetite to dive deeper.

Learning data analytics will help you better understand software and how to build products. Like the scenario with John above, you can leverage data analytics to make better informed and forward looking decisions.

You can take risks and understand the odds of success and failure. You can use the principle of counting to determine your current actions.

Data analytics will also help you better understand how technology is transforming offline environments and therefore make you a more thoughtful consumer.

The range of uses for data analytics is incredibly large. Pause for a moment and ask yourself what areas of science, technology, business, software, or product design you find most interesting.

Now conceptualize how data analytics is profoundly influencing all of these fields.

Think about the human body.

[Health products][4], [wellness marketing][5] programs, and exercise apps all use data analytics to optimize exercises for the human body based on data that we emit (think: heart rates, blood oxygen levels, sleep patterns).

These tools are using data analytics to assess real-time customizations (sampling), biometric authentication, and sentiment analysis.

Think about software.

[Low code workflow automation][6] tools use data analytics for predictive experiences and enable developers of varied experience levels to create applications model-driven logic. Data modules are predefined.

Much like with software, education is being transformed by data analytics. Online learning for schools and [coding apps for kids][7] rely on data analytics for risk management (when students fall behind) and content retention.

Think about how risk is priced.

Sampling is being used to change how insurance companies like [True Blue][8] are pricing insurance policies. More financial institutions and insurance firms are using data analytics to assess credit quality, to price and market insurance contracts, and to automate client interaction.

Think about website design.

Whether or not you want to apply data analytics to build the next [call tracking software][9] or [fact aggregation site][10], data analytics will help you measure what matters and turn data into actionable insights.

Think about agriculture.

High-tech plant growers such as [JoyOrganics][11] and [TakeSpruce][12] are using seed-to-sale cycle tracking to follow plants through stages from cultivation to harvest to extraction.

Farmers are using data analytics to find signals for higher and uncorrelated returns and optimize growing.

Think about [indoor air quality][13] and [natural language processing][14].

Or the way in which [CRM software][15] is built, or how people [communicate in real time][16].

In short, think about the modern world.

All of these products leverage data analytics to calculate sampling errors, standard deviations, and regressions to ensure product quality and customer satisfaction.

But before calculating these more complicated statistics, each business or domain starts with foundational components. Each domain measures frequency, dispersion, averages, and standard deviations.

Upon these building blocks, data analytics can turn data into actionable insights.

Most importantly, all of these industries leverage data analytics to make go/no trade-offs and to more deeply understand how users are leveraging the tools and products they are building.

By exploring these topics in more depth you can undoubtedly embrace a more holistic and relentless builder’s mindset.

If for nothing else, the study of data analytics makes that outcome worthwhile.

[1]: http://www.humaverse.com/
[2]: https://www.couponupto.com/information/couponupto-data-analytics-department-report-for-the-last-6-months-of-2019?fbclid=IwAR3Uq1kfTh4vQ3cjzmR0Rj0LPv9eT4DOuxJ84rE_1nA2XVfeCN5vQBXEJm0
[3]: http://wfhadviser.com/
[4]: https://www.gilisports.com/
[5]: https://commonthreadco.com/blogs/coachs-corner/health-wellness-marketing-ecommerce
[6]: https://www.frevvo.com/low-code-development-platforms
[7]: https://alldigitalschool.com/top-10-best-coding-apps-for-your-kids/
[8]: https://www.truebluelifeinsurance.com/
[9]: https://getvoip.com/call-tracking-software/
[10]: https://www.factinate.com/
[11]: https://joyorganics.com/cbd-manufacturers/
[12]: https://takespruce.com/
[13]: https://wfhadviser.com/guides/health-and-well-being/keeping-your-indoor-air-quality-clean/
[14]: https://brooksmanley.com/entity-seo/
[15]: https://nethunt.com/
[16]: https://coastapp.com/
