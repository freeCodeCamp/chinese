> -  原文地址：[How I Stopped a Credit Card Thief From Ripping Off 3,537 People – and Saved Our Nonprofit in the Process](https://www.freecodecamp.org/news/stopping-credit-card-fraud-and-saving-our-nonprofit/)
> -  原文作者：[Quincy Larson](https://www.freecodecamp.org/news/author/quincylarson/)
> -  译者：
> -  校对者：

![How I Stopped a Credit Card Thief From Ripping Off 3,537 People – and Saved Our Nonprofit in the Process](https://cdn-media-2.freecodecamp.org/w1280/5f9c9dea740569d1a4ca3a56.jpg)

My 2 year old woke me up by canonballing from my bed's headboard down onto my face. I groaned and peeled off my eye mask. My phone said it was Wednesday, January 8, 2020 – the big day.

I tucked my son under my arm and jogged to my desk. I'd been up until 2 a.m. finishing [the announcement for our new #AWSCertified Challenge](https://www.freecodecamp.org/news/awscertified-challenge-free-path-aws-cloud-certifications/).

And so far, the launch was going well. Our new Twitter bot was tweeting, and our Discord chatroom was abuzz with ambitious developers eager to earn their AWS certifications.

I was getting ready to meet with my team when I noticed two strange emails – both of which arrived within minutes of one another.

"Your a fraud" read one of the emails in typo-riddled English. "That's exactly what I'm thinking since I see a charge on my financial institution from you and since I've never heard of you. Yes you need to resolve this."

The other email was... well, let's just say it was also an angry letter and let's leave it at that.

freeCodeCamp is a donor-supported nonprofit, and we have thousands of people around the world who donate to us each month. Once in a while, there are misunderstandings – usually when one family member donates without telling the other. But this felt different.

So I tabbed over to Stripe, the credit card processing service our nonprofit uses for donations. On a typical day, we'd have 20 or 30 new donors. But here's what I saw instead:

![Dashboard_-_freecodecamp_org_-_Stripe1-2](https://www.freecodecamp.org/news/content/images/2020/01/Dashboard_-_freecodecamp_org_-_Stripe1-2.jpg)

Stripe's dashboard showing 11,000 new customers and $60,000 in revenue for a single 24 hour period.

It took me a moment to process what was happening. Our nonprofit – which operates on an annual budget of less than $400,000 – had just received more than $60,000 in 24 hours - and from thousands of donors.

And my heart began to sink. There was no way those were real donations. We've had spikes in donations from articles in major newspapers. Heck – I've even been interviewed on Good Morning America. But none of those spikes caused such a surge in donations.

No. There was only one thing that could cause a surge in donations like this. Fraud. Extensive, programmatic credit card fraud.

I'd heard about this technique before. It's called "card testing." Here's how it works:

1.  A fraudster finds a website with a relatively simple credit card form.
2.  Then they run scripts to test thousands of stolen credit card numbers in rapid succession. That way they can see which cards are still valid and which ones have been cancelled.
3.  Then they turn around and sell those valid card numbers on the dark web.

In this case, I'd detected the fraud much faster than a lot of other websites would have. So I had a window.

If I acted quickly and reported all of these credit cards as stolen, I could save victims around the world from lots of subsequent – and much more substantial – credit card charges. I could prevent thousands of stressed-out phone calls to banks.

# Surveying the Wreckage

I ran some queries in Stripe. A discovered that a single fraudster had made donations with 20,000 different stolen credit cards.

The good news was that Stripe had detected all but 3,537 of these transactions as stolen cards, and had declined them.

But the bad news: this still left 3,537 people out there who were now getting notifications from their banks that they'd just donated to our nonprofit.

To make things worse, I had no idea who the victims were, and had no way to contact them to explain what had happened.

I sunk into my chair. My mind was racing.

How did a fraudster manage to get through our donation form's validation?

How did they get 3,537 transactions past Stripe's fraud detection?

And how on earth did they get the 20,000 stolen credit card numbers to begin with?

But none of that mattered right now. All I knew was I needed to refund each and every one of those transactions immediately.

But wait.

Oh no.

This wasn't just a matter of giving those people their money back.

This was much more serious than that.

# Welcome to Chargeback Hell

Whenever someone calls their bank to dispute a credit card transaction, the bank initiates a process called a "chargeback." This is a sort of forced refund.

Credit card holders get the benefit of the doubt in these cases. So merchants always bear the liability for these chargebacks.

Not only does the bank take the money back from the merchant – they also add a chargeback fee. For Stripe, this fee is $15.

That meant that our nonprofit could potentially be on the hook for $15 per transaction.

I quickly scrawled out some numbers on my graphing paper.

$15 times 3,537 transactions is...

$53,000.

My heart started pounding. My mouth went dry.

$53,000? That would completely wipe out our nonprofit's rainy day fund.

For a moment I desperately searched my thoughts for a course of action.

Then I vaulted onto my keyboard. I found a way to get Stripe support to call my phone.

And while I waited for their callback, I figured out a query I could use on Stripe to pull up all of the fraudulent transactions in a single 177-page report.

I summoned our team to brainstorm a response.

They quickly figured out which of freeCodeCamp.org's API endpoints the fraudster had used, and put in a hotfix to disable it.

One of our developers said, "I can write a script that just goes through and deletes all these transactions."

"It's not that easy," I said. "We need to keep records of all of these transactions. Not just for auditing purposes, but in case anyone with the FBI or Interpol contacts us. Also we need to refund these transactions. Immediately. Every minute that passes is a minute thousands of people could be calling their banks and filing chargebacks against our nonprofit."

"OK, I think I got it," another developer said. "I'm looking at Stripe's API doc and I think I found the right API endpoint. I can pull together a script."

My phone started to ring with a number I didn't recognize. So I said, "Sounds like a plan, team. Let's make it happen." And I dropped from the meeting to answer my phone.

The first Stripe support person I talked to immediately escalated me after I explained what had happened. They put me on hold.

But time was of the essence, and each transaction I could refund – however manually – was a transaction that couldn't result in a chargeback.

One by one, I started clicking "refund transaction" and then "report transaction as fraudulent." Two clicks, a couple seconds of loading, and then I was able to move on down to the next transaction.

I timed myself as I went down the page, mindlessly clicking "refund transaction" and "report transaction as fraudulent" over and over again.

Then I reached for my graphing paper and crunched the numbers.

By just continuing to do what I was doing – clicking through this list like a robot – I was on track to refunded all 3,537 transactions in 4 more hours.

It was possible my team wouldn't be able to get the script working in time, anyway. So I just kept doing it.

Click. Wait. Click. Wait. "Transaction Refunded!" Scroll down. Rinse and repeat.

Eventually Stripe support came back on the phone. They had some well meaning but fairly obvious advice.

I spent the next hour scrolling through manually issuing refunds as fast as I could. I had two more calls with Stripe support. I talked with every support tech I could to see if I could get some sort of breakthrough that might speed up the process of refunding these transactions.

But about 1,200 refunds into the process, the "Transaction Refunded!" message stopped showing up. In its place read an ominous message: "Refund Pending."

I tried another refund. "Refund Pending."

Oh geez.

# They're not going to make this easy for me, are they.

I immediately tabbed back to Stripe's support page and requested another callback. They explained to me that I could no longer refund transactions because we didn't have any more money in our Stripe account.

"Impossible," I said. "We just got $60,000 in donations."

"Yes," said the support person. "But $40,000 of that is in transit to your bank."

I glanced at Stripe's dashboard. The support person was right.

When I had set up our nonprofit's Stripe account 2 years before, I had set the payout schedule to "Automatic every day."

![Dashboard_-_freecodecamp_org_-_Stripe-1](https://www.freecodecamp.org/news/content/images/2020/01/Dashboard_-_freecodecamp_org_-_Stripe-1.jpg)

Stripe lets you set up automatic payouts to your bank account. I made the mistake of doing this, and it came back to haunt me.

Even though our Stripe account had received 40 times the usual amount of donations that day, Stripe had just gone ahead and transferred the money out to our bank.

So I checked our bank account. But the $40,000 wasn't there. The credit was still pending.

The $40,000 was neither in our Stripe account or in our bank account. It was somewhere in between. And until it landed, we had no way to access it.

So now I couldn't refund the transactions even manually. And as long as these transactions were in "Refund Pending" status, we were at risk of chargebacks.

I got on the phone with Stripe again. They told me: "You have a negative balance on your Stripe account and can't issue any more refunds."

I asked: "How do I make my Stripe balance positive again so I can issue the remaining 2,300 refunds?"

"You can send us a bank wire," the support person suggested. And a moment later, Stripe's wire information popped up in my email inbox. "Once you've wired us the money, send us confirmation. Within 24 to 48 hours, we can unfreeze your account so you can start issuing refunds again."

"You're telling me I have to wait 2 days to finish issuing these refunds?" I asked, exasperated.

My team had a script ready, and they'd tested it using Stripe's sandbox. "But we shouldn't run it if the donations are in pending status," they told me. "It could mess something up. We can't find any documentation about this."

By this time it was dark outside. My kids had gone to bed for the night. And I'd spent the entire day on the phone with Stripe.

I sat down at my desk and stared at the bank wire information. I double checked the email for any indications of spoofing – any hints of a scam – but didn't find any.

I was about to wire $40,000 – our nonprofit's entire rainy day fund – over to a multi-billion dollar corporation. Just so we could finish refunding a bunch of unlucky people who'd had their credit card numbers stolen – probably during a data breach at some other multi-billion dollar corporation.

Surely this wire information would be publicly listed on Stripe's website somewhere. But I plugged the wire number into Google and got zero results.

There was no way to be sure that the Stripe support person had given me the correct wire information – and not their own personal bank account's information. This would be unlikely, yes.

But it would be an abdication of my responsibility as our nonprofit's treasurer to risk sending $40,000 worth of our own donors' money into a black hole.

So I called Stripe one more time. And at this point, I thought what the heck. I'm just going to keep asking them to escalate me until I reach one of the Collison brothers (Stripe's founders) – or at least somebody in fraud prevention. It was nearly midnight, but I figured it was worth a shot.

Finally, I reached a support technician a bit higher up who seemed different. I pushed extra hard, extra politely. I told her what was at stake.

She went quiet for a moment. And then she said: "I might know of another way."

It was like someone had suddenly jammed a syringe of Vitamin B12 into my arm. I perked right up and said, "Really?"

"It's possible. But I'm going to have to put you on hold for a long time," she said.

But before she put me on hold, I confirmed – once the funds were available in our Stripe account, would the refunds that were in pending status immediately go through?

She said they would.

She also reassured me that if – _if_ – I could get these fraudulent charges into "refunded" status, there would be no further risk of a chargeback. When peoples' banks contacted Stripe, Stripe would just tell the banks that "the charge has already been refunded."

And just like that, I saw a light at the end of the tunnel.

If I could convince Stripe to somehow unfreeze our account, all the "refund pending" transactions would cascade into refunded status. This would eliminate the grand piano hanging over my head of the $53,000 worth of chargebacks to our nonprofit.

And with that, more hold music.

I pulled up the scripts our team had created to programmatically refund all the fraud victims.

"Damn," I thought. "If this script doesn't work exactly like it's supposed to, there's no telling what could happen."

And so, just to be sure, I decided to commit the most heinous sin a programmer can commit. I did it manually.

Through hours of hold music, callbacks, and updates from different people at Stripe, I sat at my computer grinding down the list.

Click. Wait. Click. Wait. "Refund pending." Scroll down. Rinse and repeat.

Then another support person came onto the phone and asked me exactly how much money I still needed to refund in total.

Realizing I only had a few more pages of refunds to go, I asked her to wait as I clicked through. By the time I saw the final page, it was like a marathon where the finish line was finally in site. And together we celebrated the final pending refund.

When all was said and done, our nonprofit's Stripe account balance was negative $53,060.

She relayed the number to the fraud department and told me I could go to sleep for the night. But I told her I insisted on staying up until every last transaction was fully refunded, and asked her to call me back to keep me posted.

I grabbed my jacket and went out for walk in the mild January midnight.

After a couple hours of not staring at a monitor, I went back inside and hit refresh.

I had already reported every single transaction as fraudulent. And now every single donation had been refunded in full to all 3,537 credit card fraud victims.

![Search_-_freecodecamp_org_-_Stripe](https://www.freecodecamp.org/news/content/images/2020/01/Search_-_freecodecamp_org_-_Stripe.jpg)

A screenshot of Stripe after I had successfully refunded all 3,537 transactions.

And as I sighed in relief, I imagined the fraudster somewhere on the other side of the planet. I envisioned them sitting in some smoke-filled cybercafé seething, pounding their hand on the table and shouting: "I just tested these credit card numbers yesterday. Why aren't they working?"

![NkQ5PpJ](https://www.freecodecamp.org/news/content/images/2020/01/NkQ5PpJ.gif)

I'll get you next tiiiiiiiiiime, Gadget!

I sent my team a final update that everything was resolved. Thanks to their swift action, and a little bit of grit when dealing with Stripe support, all of the refunds would hit the victim's accounts within the next few days.

Most of the victims would have no idea what had happened, and probably wouldn't even notice the charge followed by a negation of that charge.

They'd just get a replacement credit card in the mail from their banks, then cut up their old, compromised credit cards and move on with their lives.

I climbed up the stairs exhausted. The launch of the #AWSCertified challenge seemed to go OK without me. Either way, it could wait.

For now, I had only one priority: sleeping as many hours as possible before my 2 year old son jumped onto my head again in the morning.

# Lessons Learned

### Lesson #1: Turn off Stripe Automatic Payouts

If you use Stripe, turn off the automatic payouts.

I just got lucky that we had a long working relationship with them, and enough money in our checking account in case we'd needed to wire them money.

### Lesson #2: It's OK to go manual sometimes

Don't be afraid to swallow your pride and do things the old fashioned way.

Sometimes doing things the manual way – while tedious – is the safest way to prevent even more catastrophe.

As the old astronaut saying goes, "There is no problem so bad you can't make it worse."

Your clever script might save you time. Or it might create a mess that takes far more time to clean up. Consider all outcomes before running it.

### Lesson #3: Be persistent when dealing with support

If I hadn't continued to press for Stripe for a better solution than wiring them a bunch of money, our nonprofit would have been vulnerable to chargebacks for several more days, and this could have cost us thousands of dollars.

It pays to be polite but insistent.

### Lesson #4: There are some real bastards out there.

> "Security in IT is like locking your house or car – it doesn't stop the bad guys,  but if it's good enough they may move on to an easier target." - Paul Herbka

freeCodeCamp is open source, and has tons of security researchers who notify us of potential vulnerabilities through responsible disclosure. We are locking our proverbial doors.

But despite all our efforts, an attacker still saw us as an easier target than some of the big e-commerce sites. They were sophisticated enough to find their own zero-day vulnerability in our codebase. And they may do the same for your organization.

Never forget that you and I share a planet with villains who are willing to inconvenience thousands of people just so they themselves can make a quick buck.

Stay vigilant, friends.