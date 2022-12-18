> -   原文地址：[We Created a Local Free Coding School Using the freeCodeCamp Curriculum. Here's What We Learned. 我们是如何采用 freeCodeCamp 的课程创办一所免费编程学校的](https://www.freecodecamp.org/news/how-we-created-a-free-coding-school-with-the-freecodecamp-curriculum/)
> -   原文作者：Gwendolyn Faraday
> -   译者：
> -   校对者：

![We Created a Local Free Coding School Using the freeCodeCamp Curriculum. Here's What We Learned.](https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

_While this picture shows an in-person classroom, we have moved our school fully remote as a result of the COVID-19 situation._

If you want to learn how to code, there are generally three options to choose from:

1.  You can teach yourself and find your own curriculum.
2.  Go to college and get a computer science/IT degree.
3.  Or attend a coding school. Coding schools are hands-on crash courses that are designed to get you up to speed quickly so you can find your first software development job within three months to one year.

Option number one is the cheapest, but also the most frustrating and difficult. It's so easy to get stuck along the way and want to give up.

Options two and three could work out well, if you can afford to take time off work (or at least work fewer hours), pay the tuition plus living expenses while you are attending and looking for a job, and still be able to manage your family and personal life. Not everyone is able to do that.

This is why we created [freeCodeSchool Indy][1]. It's a free coding program based off of the freeCodeCamp curriculum where we guide students through part-time coding school programs for three months.

We have two two-hour classes per week - Monday and Wednesday from 6-8 pm, where we teach them everything from HTML basics to JavaScript and Intro to React.

The students are expected to spend at least 6 hours per week studying on their own, and can optionally attend office hours on Sundays that we hold from 1-5 pm. If they complete the first three months, then they are able to attend a second three month program, where they can learn about back-end web development in Node.js.

We started working on this idea over a year ago and it's exciting to be able to say that we completed our first cohort in May. Now we can share what we have learned in this article.

## Our Goal in Building a Free Coding School

Our goal from the beginning was to provide accessible, supportive education for everyone regardless of income or life circumstances (like ability to take time off work).

We are not trying to compete with bootcamps or regular coding schools – they also provide a valuable service for students. We are just trying to have another, more accessible option for people who need a more flexible schedule or cannot afford a paid coding school.

Students will receive guidance and direction from the staff, volunteers, and members of the community throughout the program, and as alumni afterward.

Of course, we want our students to be able to get jobs in the industry if that is their goal. But we do not have the resources to guarantee anything. We just want to provide as much support as we can for the students whether they decide to keep learning on their own, or go to a more formal program, like a coding school or college.

Like I mentioned before, it took us about a year to get everything set up - between finding the space and instructors, as well as deciding on the type of program and curriculum. Here is everything that went into our program preparation.

## How We Planned the Program

The first things we did were choose the length of time and goals for the program. We landed on having three-month-long classes where the students would learn the basics of HTML, CSS, and JS, with some extras like Bootstrap and React Components.

If everything went well, our goal was to take a month off and host a level two course for the students who completed the first one. Level two would be another three months where we would build off of what we taught in level one and teach more about JavaScript frameworks and introduce Node.js.

Starting small with just a three month part-time program helped us to be able to learn and make adjustments as we went along. It also gave the students a short, time-based goal to be able to complete the program and have a small portfolio in just a few months.

[Here is our organization on Github][2]. We are in the process of updating and open-sourcing our material as we go along.

## Adopting freeCodeCamp's Curriculum

Curriculum development is time consuming and expensive. Fortunately, freeCodeCamp already has an awesome free curriculum that we can use and modify with no strings attached.

We took freeCodeCamp's curriculum and followed it as an outline for our lectures. We used the challenges as assignments for students to complete between classes. We also used freeCodeCamp's projects as individual and group assignments along the way.

Throughout the lessons, we also encouraged students to try to do a little bit of extra work to be able to get their freeCodeCamp certifications during, or after the end of, the program.

## How We Found a Space to Host Classes

The Indianapolis Public Library generously agreed to host our classes and give us space for office hours as well. The size of the space in the computer lab was limited, so the maximum number of students we could take per class was 22.

We could have used a larger conference room in the library to accommodate a larger class, but then we wouldn't have been able to take students who didn't own a laptop – and that wouldn't have been very accessible for everyone.

We didn't plan to be a remote program, so we had to adjust our classes to use Discord for lectures and all student communication when COVID-19 happened. More on that later.

## How we Chose Technology Tools

We prepared a Discourse forum (like the freeCodeCamp forum) before the classes started so students could log in, get announcements, ask questions, and post assignments. It also gave the admin staff some privileges to keep track of students and moderate student interactions.

## How we Administered the School

### Finding Students

When we were planning this program, our worry was that we would not get enough interest and all our planning would be for nothing. The reality was that we had way too much interest and could not accommodate every student. For 22 slots, we had over 140 people who wanted to participate! And that was without doing that much marketing.

It was very exciting to get so much interest in our program, but we also had to decide which students to take and how to choose in a fair way.

We decided to whittle down the field by requiring people to show up for three pre-screening activities where they would complete some basic challenges, like [Code.org's Flappy Game][3]. This let us know which students were dedicated to showing up and got the number of people in line down to around 80. That was still too way too many for the space we had so had to do a random lottery to select the final students.

### Teaching Students

Every student learns differently and has their own personality and preferences. It's unreasonable to expect that we can just lecture the students for an hour and they will all be able to pick up all that information and build the lab without issue.

We decided on a format for lectures where we start off every lecture by asking if anyone has questions – usually we don't get many. Then, we go into the slides, and pause every ~15 minutes to give the students guided 'labs' so they can try out coding on their own with the support of having instructions and still being able to ask questions in the classroom.

We also often leave the last 30+ minutes of the 2-hours classes for the students to be able to work on their class projects.

### Collecting Assignments

Some people don't turn in assignments. This could mean they are shy about sharing their code where other students can see, or that they just don't think it's necessary since it's a free coding school after all, and some of their classmates aren't doing it either.

If it's the former, then we encourage them to share assignments with just the staff and let them know that we have all been in their shoes before.

If they aren't turning in assignments because they don't want to... well, there isn't much we can do about that. We try to discourage students from joining the class who don't want to fully participate in the program.

The assignments were originally being turning in on the forum, but we were getting really low engagement on there. Students weren't logging in very often and they were never asking questions there.

Now assignments are turned in via a Discord channel on the server we have for our coding school.

Since we manage our whole program from the same Discord server – including hosting lectures, answering questions, and managing the program – we are seeing an increase in the number of assignments turned in. We are also getting more useful feedback that students are getting from staff and volunteers.

### Deadlines

Should we have deadlines for turning in projects? Our opinion right now is no, we shouldn't.

Most of the first cohort got a bit behind and some of them finished the program weeks after the end. Should we punish people who finish, but just not on time? We don't think so and here is why: Everyone learns at their own pace.

If someone finishes in 3 months and another student in 4 months, then they both should be rewarded the same for completing the program.

Someday, we will be able to have rolling admissions for our coding and help students at a more granular level. Until then, the least we can do is stay flexible to accommodate them and let them turn in the rest of the projects whenever they can.

### Getting Students to Ask for Help

This has been one of our biggest problems! Some people fall behind and some students are confused but don't want to ask for help. Some students are so confused that they don't even know what kind of help to ask for.

You can't really force people to get help, but you can prompt them. The best way we have found to get them to ask questions is to do short review segments at the beginning of lectures and have scheduled study times where students can pop in and ask questions in a much smaller group setting.

If they prefer to type out the question, they can post it in the student chat or send a private message to one of the organizers.

We can only do so much. If students are lost or confused and don't want to ask for help, there is no way for us to fix that. We try hard to meet them where they are, but they also have to make some effort to come to us.

### Student Surveys

Performing regular student surveys is really helping us to get critical feedback for our program.

Our first time through, we collected information about student goals and background at the beginning, then took a student survey at the half-way point - around 6 weeks in – and then another survey at the end.

While we received a lot of good information, in hindsight, we should have taken more surveys and added a few more questions. This time, we will probably perform surveys to get student feedback every month. Here are some of the questions we are asking:

1.  What do you think about the program so far? Is it meeting your expectations?
2.  Do you feel like the lectures are helpful for doing the assignments?
3.  How can we better help you achieve your goals?
4.  Do you have any other feedback for us?

### Dealing with Drop Outs

Life happens, things change. We have to understand that students who fully intend to participate might have to drop out due to unavoidable circumstances.

If they communicate with us about the situation, we offer them a spot in the next cohort.

If they simply do not show up or communicate with us, then they are free to reapply in the future, but no spot will be saved for them.

## Staff and Volunteers

### Soliciting Volunteers

Without volunteers, it would be quite overwhelming to run a program like this. Here are some of the different types of volunteers you will need to be successful.

### Responsibilities

1.  **Organizers –** Yes, we are volunteers too. We are fortunate to have an amazing team of organizers who run the program. This includes myself, two other developers, and a computer lab supervisor from the library who also knows how to code. We chat several times per week in Discord to make sure the program is running smoothly and students are progressing. I think 3-5 is a pretty good number for an organizing team, but we might add more to do specific things, such as 'community manager' or 'volunteer coordinator.'
2.  **Presenters –** These people give lectures during class times or special help sessions held on weekends usually. This is the hardest type of volunteering to manage. In our program, the lectures are 1.5-2 hours long and there are only 24 of them, so every single one has to be on point and flow with the rest of the curriculum. Some well-meaning volunteers might not be the right fit for giving lectures for people who are brand new to development. It is **very** important to be clear about what you want them to cover in the lecture, down to the individual points and expected learning outcomes. We also made sure to give volunteers a boilerplate slide deck to work off of so it matched the rest of the curriculum.
3.  **Mentors –** Students will not only have coding questions, but also have questions about their careers, networking, etc. Mentorship is great for answering these types of questions. We are currently working on setting up our mentorship program where volunteer mentors will check in with students at least once per week to make sure they are on track and answer any questions they have. One of the reasons for the delay is we have been working on a system for how to handle any complaints of inappropriate language or behavior that might take place when students meet one on one with volunteers.
4.  **Lab Assistants –** Lab assistants are there to help out synchronously during live lab sessions, usually with problems running software or debugging. We utilized lab assistants much more when we held in-person classes. With things being remote, we can't see the students' screens so we have had to just have a few people available to answer questions in the chat if people get stuck.
5.  **General Helpers –** These people help answer students' questions in the chat and perform other tasks like reviewing projects and portfolios. They are also useful for students to rubber duck off of or for encouragement.

### Volunteer Handbook

We made a two-page handbook detailing expectations for volunteer behavior as well as requirements for participation in our program. It's pretty basic right now, but we will be building off of it as we go along I'm sure.

We also give them a link to the [freeCodeCamp code of conduct][4] because it's short, sweet, and to the point: be kind, understanding, etc.

### Making Sure Staff has the Tools to Succeed

We have definitely made a few mistakes, including letting a presenter make his own slides and then having to tell him at the last minute that they needed to change. It didn't go over well. We should have been much clearer with what we wanted from him.

Now, everyone receives a boilerplate slide deck from us as well as a list of topics to cover. We also connect with them several times to go over the progress in their presentation to make sure it's on the right track.

Right now, we have a volunteer handbook, lesson plans and slide decks for teaching, guidelines for mentoring, and google drive folder where we keep all of the documentation for the program, student progress, curriculum materials, and future plans. We recently re-organized all of these materials to make them easier to locate when we need them.

As this program grows, we are going to need to manage more volunteers and even paid staff. We are preparing for this by documenting our processes to make onboarding a little bit smoother each time.

### Community Partners

We are currently trying to form community partnerships to get sponsors for funding as well as donations of tech equipment.

Some of our students don't have access to good computers or a fast internet connection. The library provided those things for us when we hosted in person classes, but it's been more difficult now that we are remote.

Also, libraries only have limited hours, and, for students who work multiple jobs or have other family obligations, it can be difficult to make the time to do all of the class work during the day. This is why the sponsorship of community partners is so important to making our program accessible.

In the future, we hope to be able to provide internet access and laptop computers for students who need them.

## Organizing

### Marketing

We don't have any marketing experts on our team. Our marketing efforts basically consist of making sure we keep our branding that we agreed upon - colors, verbiage, etc. - consistent and collectively sharing updates on social media.

Fortunately, I have a small following on [YouTube][5], LinkedIn, and other platforms where I have been able to solicit volunteers and get some community interest in our program.

The public library has also been helpful with reaching out to many different communities and pulling in students that we might never have been able to reach otherwise.

As we grow, we might start expanding our social media reach, but with a limited budget right now, we are just gaining traction organically.

### Remote Livestreams

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-08-at-10.10.27-PM.png)

Discord screen sharing interface.

Hosting remote livestreams has been challenging. Internet connections sometimes drop, plus there is a learning curve for students to be able to use the software.

Discord has been a great option for us, because we can host livestreams inside of the app where all of our chats and everything else are located. This way, we only have to explain how to use one piece of software.

In addition, Discord allows us to screen share with up to 50 people at a time in the voice chat rooms. And that's all for free! We looked into Zoom and some other tools, but we are going to stick with Discord until we need - and can afford - something with more features.

### Incorporating & Funding

We wanted to start asking companies and people for funding so we had to incorporate as a non-profit last year. In the US, this process takes about six months. We first had to register as a company with our state and then draw up business documents and apply for non-profit status with the federal government.

At the beginning of this year, we finally got confirmation that we are a 501c3 non-profit organization! Now we are trying to work out ways of getting funding and taking donations. We're going to add a 'donate' button to our website and we are also reaching out to companies to solicit larger donations. There have also been some internal discussions about whether or not crowdfunding is a good idea.

Do you have any suggestions for us in this area? Please leave a comment on this article or reach out to us at contact@freecodeschoolindy.com.

## Communication Tools

### Forum

As previously mentioned, we started off using a Discourse forum, but found that it was hard to maintain and wasn't meeting our needs. People found it hard to use, especially on mobile. We also had trouble getting staff and students to login and check it often enough to make it worth the effort. That is why we got rid of the forum and moved our whole program over to Discord.

### Discord

![](https://www.freecodecamp.org/news/content/images/2020/06/Screen-Shot-2020-06-04-at-12.43.36-PM.png)

We now have a Discord server set up for the whole coding school! We use it to host live lectures - we can have up to 50 people in the voice chat and screen share with them at the same time, manage students, organize volunteer activities, coach speakers, answer questions, do group projects, review portfolios, and perform administrative tasks.

Having everything in one place has been the best decision we have ever made. Not only are our costs lower, but it makes the program administration so much easier. Everyone we need to interact with is either already on Discord, or just needs to be invited to Discord :)

## Graduation

We had grand plans of doing our first in-person graduation for students this year. Unfortunately, due to COVID-19, those plans had to be scrapped. We had to make do with mailing out certificates to students who completed the program and giving everyone a (virtual) pat on the back for finishing.

Now that our classes are virtual, we would love to be able to do something fun for the graduation of our second cohort at the end of August. Do you have any ideas? Let us know if you do.

## Conclusion

Putting this program together might have been the hardest thing I've ever done. It's a lot of work but very rewarding. It can be life-changing for students.

It wasn't just me though: There was a team of people helping out and none of this would have happened without them.

I want to give special thanks to [Jared Wilcurt][6], Casssandra Bautista, Marianne Mckenzie, [The Indianapolis Public Library][7], freeCodeCamp, and all of our wonderful volunteers – all of whom were crucial in putting this program together.

We are working on open-sourcing our curriculum we used – slides, projects, freeCodeCamp challenges, supplementary material, and so on. It's taking a little bit of time to put everything together in a nice format, but be patient, we will get it out to anyone who is interested soon :)

I'm interested in your thoughts. Do you have any ideas for things we can do better next time around? Please reach out to me and let me know.

My Twitter: [@gwen_faraday][8]

My YouTube: [Faraday Academy][9]

Program Website: [freecodeschoolindy.com][10]

[1]: https://freecodeschoolindy.com/
[2]: https://github.com/freecodeschoolindy
[3]: https://studio.code.org/flappy/1
[4]: https://www.freecodecamp.org/news/code-of-conduct/
[5]: https://www.youtube.com/c/FaradayAcademy
[6]: https://thejaredwilcurt.com/
[7]: https://www.indypl.org/
[8]: https://twitter.com/gwen_faraday
[9]: https://www.youtube.com/c/FaradayAcademy
[10]: https://freecodeschoolindy.com/
