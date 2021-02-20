> * 原文地址：[What I Learned from Building My First Solo Project](https://www.freecodecamp.org/news/what-i-learned-from-building-my-first-solo-project/)
> * 原文作者：Jessica Wilkins
> * 译者：michaelhe545
> * 校对者：

![What I Learned from Building My First Solo Project](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/Screen-Shot-2021-02-03-at-2.51.14-AM.png)

After four long months of coding, researching, breaking things, and wondering if it would ever be finished, I finally deployed my very first website.

It was not an easy road, but in the end it was worth it.

This is what I learned from building the  [Black Excellence Music Project][1].

## Can I build that?

![Woman looking up](https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDV8fHRoaW5raW5nfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=2000)

Photo by  [Tachina Lee][2]  /  [Unsplash][3]

In June of 2020, racial tensions were at an all time high because of the recent events surrounding George Floyd's death. As a result, this spawned a conversation on the lack of diversity and representation of minorities in all industries.

I had a lot of friends reach out to me and ask for information on black composers from the past and present in hopes of getting their music performed more often.

In response to this, I decided to start the  [Black Excellence Youtube series][4], which profiled successful black composers.

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-11.11.27-AM.png)

The series was a hit and a new idea was born.

What if there was a website called the  [Black Excellence Music Project][5]?

It could be an educational website with profiles, games, music and more.

But there was one big issue: who on earth was going to create this?

I was only a few weeks into my coding journey and I didn't feel like I had the skills to build something like this. So I decided to put it on the back burner and continue with my learning.

## It's Now or Never

![A friend of mine, jumping off of Hawaii’s spitting cave](https://images.unsplash.com/photo-1505857231560-ec7df63800e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDd8fGp1bXBpbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Photo by  [Kekai AhSam][6]  /  [Unsplash][7]

A few months later, I started thinking more and more about the project. I thought about possible games, featured composers, and other cool features.

But I was still hesitant to start because I didn't feel like I was ready. I only knew HTML, CSS, and a little bit of JavaScript.

But I realized it's now or never.

Despite fear and hesitation, I decided to get started.

## Hello Git and Github

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.32.31-AM.png)

I first opened up my GitHub profile back in June 2020, when I decided to learn how to code. I didn't really do anything with it for a few months before this project.

My vague sense of what GitHub was is that you can save your code and people can look at it.

So I decided it was time to actually learn about GitHub and start working with the command line.

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-11.05.57-AM.png)

After watching a few tutorials, I had successfully created my first repo and pushed my first commit to GitHub.

I was proud of myself for getting started, but now I faced another dilemma.

What's next?

## Just HTML

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.34.18-AM.png)

I had all of these ideas but absolutely no clue on where to start.

Do I start with building games?

Do I build a mockup of a design?

Things quickly started becoming overwhelming and I didn't know where to turn to next. So I decided to just start with a simple HTML page and go from there.

I figured I could build some HTML pages for the composer profiles and worry about styling them later.

This approach calmed my nerves and lead to a very productive start to the project.

## Choosing the right color scheme

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.35.49-AM.png)

I wanted to choose a color scheme that was appropriate for the subject matter.

I wanted something that was calming but had power behind it.

After some research, I settled on the color purple. Purple is often associated with royalty and wisdom.

I thought this would be the perfect choice for these black composers who made significant contributions to the arts.

## How can I create a game?

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.57.40-AM.png)

At this point, I had a few HTML pages and some minimal styling. But now it was time to starting coding some games.

I thought it would be nice to have a few games that both kids and adults would enjoy.

I first started with mapping out how the games should work. Then I started tackling each functionality one at a time.

I did a lot of research and made a lot of mistakes but I finally got them working.

```js
// this is for the tour and local gig functions
function performanceOutcomes() {
  shuffle(gigResponses);
  if (randomMsg === 'You were late to the gig and not allowed to perform.' || randomMsg === 'You were mugged outside after the gig and they took all of your money.') {
    message.innerHTML = randomMsg;
    money += 0;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  } else {
    message.innerHTML = randomMsg;
    money += 5;
    earnings.innerHTML = `Total earnings: $ ${money}`;
  }
}
```

Once I finished up the games, I decided to take care of some housekeeping.

## How am I going to organize all of this?

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.37.01-AM.png)

There were going to be a lot of moving parts to the site so I needed to be smart about managing all of these files.

I was very conscious about picking short descriptive file and folder names so I could easily find them.

There were also a few times I had to reorganize some files into different folders.

For example, I originally had the composer quizzes in individual composer folders. But then I realized that it might be better to just have a folder called quizzes and keep all of those files in there.

I also ran into the issue of having multiple stylesheets. Since I was reusing a lot of the same styles, it made more sense to just have a main stylesheet and link that to all of the HTML pages.

## Can you look at my project?

![](https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDF8fGNvZGUlMjByZXZpZXd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Photo by  [heylagostechie][8]  /  [Unsplash][9]

By the end of January of 2021, the site was finally ready for someone else to take a look at it.

I decided to reach out to Nicholas Carrigan who is a freeCodeCamp developer and moderator. He had a service for code review sessions on  [his website][10]  and I wanted him to take a look at my code.

The code review session was very valuable and I learned a lot about how to make the site even better.

## A deployment nightmare

![](https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDJ8fGZydXN0cmF0ZWR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Photo by  [Dev Asangbam][11]  /  [Unsplash][12]

I was finally ready to take the plunge and deploy my website. I had registered for a custom domain name with  [Bluehost][13]  and read the documentation on how to setup the live site with GitHub pages.

At four o'clock in the morning, I finally published the site.

When I clicked on the live link, I was horrified at what I saw.

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.41.03-AM.png)

No Navbar. No footer. No CSS.

Why was this happening?

Everything was fine when I tested it locally.

After hours of tinkering and research I finally reached out for help. I messaged Nicholas and explained the issue.

He looked at my code and explained that there was an issue with my file paths and showed me how to fix it.

I was relieved to hear a solution for my problem and was able to make all of the necessary changes.

```html
    <script src="landing-page-nav.js"></script>
    <script src="landing-page-footer.js"></script>
    <script src="index.js"></script>
```

I was finally ready to share it on the  [freeCodeCamp forum][14]  for feedback.

## It is a good start but fix this

![](https://www.freecodecamp.org/news/content/images/2021/02/Screen-Shot-2021-02-03-at-10.42.55-AM.png)

Over the next few days, I received a lot of comments on how to improve the site.

At first it is was a little overwhelming and I took the comments personally.

I guess in some fantasy world I had hoped that everyone was going to love it and think it was perfect.

But a lot people pointed out some bugs, and some design issues that made the user experience a little confusing.

I knew that my strong suit was not in design and so that is probably why I took it personally. But I realized that people were just trying to help and their suggestions did make the site look better.

## Advice to beginners

![](https://images.unsplash.com/photo-1566837945700-30057527ade0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDIwfHxjb2Rpbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Photo by  [Tudor Baciu][15]  /  [Unsplash][16]

I learned a lot by building this project and there were definitely a fair share of ups and downs. But in the end, I am very happy with the result.

If you have an idea for a project, just start. Don't wait until you are ready.

Build it the best way you know how and deploy it.

It is completely fine it is not perfect or polished.

Just keep building and learning.

  

[1]: https://blackexcellencemusicproject.com/
[2]: https://unsplash.com/@chne_?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[3]: https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[4]: https://www.youtube.com/watch?v=FIWELCEBG0E&list=PLqHdMZJ08WM11cAx7YqdmvHb5YawvM0sq
[5]: https://blackexcellencemusicproject.com/
[6]: https://unsplash.com/@kekaiahsam?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[7]: https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[8]: https://unsplash.com/@heylagostechie?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[9]: https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[10]: https://www.nhcarrigan.com/home
[11]: https://unsplash.com/@devasangbam?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[12]: https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[13]: https://www.bluehost.com/
[14]: https://forum.freecodecamp.org/
[15]: https://unsplash.com/@baciutudor?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
[16]: https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit
