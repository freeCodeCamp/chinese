> * 原文地址：[A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://www.freecodecamp.org/news/20-lines-of-python-code-get-notified-by-sms-when-your-favorite-team-scores-a-goal/)
> * 原文作者：Pierre
> * 译者：FENGJIAJUN
> * 校对者：

![A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming](https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Hi everyone :) Today I am beginning a new series of posts specifically aimed at Python beginners. The concept is rather simple: I'll do a fun project, in as few lines of code as possible, and will try out as many new tools as possible.

For example, today we will learn to use the Twilio API, the Twitch API, and we'll see how to deploy the project on Heroku. I'll show you how you can have your own "Twitch Live" SMS notifier, in 30 lines of codes, and for 12 cents a month.

**Prerequisite**: You only need to know how to run Python on your machine and some basic commands in git (commit & push). If you need help with these, I can recommend these 2 articles to you:

[Python 3 Installation & Setup Guide][1]

[The Ultimate Git Command Tutorial for Beginners][2]  from  [Adrian Hajdin][3].

**What you'll learn**:

-   Twitch API
-   Twilio API
-   Deploying on Heroku
-   Setting up a scheduler on Heroku

**What you will build:**

The specifications are simple: we want to receive an SMS as soon as a specific Twitcher is live streaming. We want to know when this person is going live and when they leave streaming. We want this whole thing to run by itself, all day long.

We will split the project into 3 parts. First, we will see how to programmatically know if a particular Twitcher is online. Then we will see how to receive an SMS when this happens. We will finish by seeing how to make this piece of code run every X minutes, so we never miss another moment of our favorite streamer's life.

# Is this Twitcher live?

To know if a Twitcher is live, we can do two things: we can go to the Twitcher URL and try to see if the badge "Live" is there.

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-14-a--15.49.31.png)

Screenshot of a Twitcher live streaming.

This process involves scraping and is not easily doable in Python in less than 20 or so lines of code. Twitch runs a lot of JS code and a simple request.get() won't be enough.

For scraping to work, in this case, we would need to scrape this page inside Chrome to get the same content like what you see in the screenshot. This is doable, but it will take much more than 30 lines of code. If you'd like to learn more, don't hesitate to check my recent  [web scraping guide][4].

So instead of trying to scrape Twitch, we will use their API. For those unfamiliar with the term, an API is a programmatic interface that allows websites to expose their features and data to anyone, mainly developers. In Twitch's case, their API is exposed through HTTP, witch means that we can have lots of information and do lots of things by just making a simple HTTP request.

## Get your API key

To do this, you have to first create a Twitch API key. Many services enforce authentication for their APIs to ensure that no one abuses them or to restrict access to certain features by certain people.

Please follow these steps to get your API key:

-   Create a Twitch account
-   Now create a Twitch  [dev account][5]  \-> "Signing up with Twitch" top right
-   Go to your "dashboard" once logged in
-   "Register your application"
-   Name -> Whatever, Oauth redirection URL -> http://localhost, Category -> Whatever

You should now see, at the bottom of your screen, your client-id. Keep this for later.

## Is that Twitcher streaming now?

With your API key in hand, we can now query the Twitch API to have the information we want, so let's begin to code. The following snippet just consumes the Twitch API with the correct parameters and prints the response.

```python
# requests is the go to package in python to make http request
# https://2.python-requests.org/en/master/
import requests

# This is one of the route where Twich expose data, 
# They have many more: https://dev.twitch.tv/docs
endpoint = "https://api.twitch.tv/helix/streams?"
# In order to authenticate we need to pass our api key through header
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
# The previously set endpoint needs some parameter, here, the Twitcher we want to follow
# Disclaimer, I don't even know who this is, but he was the first one on Twich to have a live stream so I could have nice examples
params = {"user_login": "Solary"}

```

The output should look like this:

```json
{
   'data':[
      {
         'id':'35289543872',
         'user_id':'174955366',
         'user_name':'Solary',
         'game_id':'21779',
         'type':'live',
         'title':"Wakz duoQ w/ Tioo - GM 400LP - On récupère le chall après les -250LP d'inactivité !",
         'viewer_count':4073,
         'started_at':'2019-08-14T07:01:59Z',
         'language':'fr',
         'thumbnail_url':'https://static-cdn.jtvnw.net/previews-ttv/live_user_solary-{width}x{height}.jpg',
         'tag_ids':[
            '6f655045-9989-4ef7-8f85-1edcec42d648'
         ]
      }
   ],
   'pagination':{
      'cursor':'eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MX19'
   }
}
```

This data format is called JSON and is easily readable. The  `data`  object is an array that contains all the currently active streams. The key  `type`  ensures that the stream is currently  `live`. This key will be empty otherwise (in case of an error, for example).

So if we want to create a boolean variable in Python that stores whether the current user is streaming, all we have to append to our code is:

```python
json_response = response.json()
# We get only streams
streams = json_response.get('data', [])
# We create a small function, (a lambda), that tests if a stream is live or not
is_active = lambda stream: stream.get('type') == 'live'
# We filter our array of streams with this function so we only keep streams that are active
streams_active = filter(is_active, streams)
# any returns True if streams_active has at least one element, else False
at_least_one_stream_active = any(streams_active)

```

At this point,  `at_least_one_stream_active`  is True when your favourite Twitcher is live.

Let's now see how to get notified by SMS.

# Send me a text, NOW!

So to send a text to ourselves, we will use the Twilio API. Just go over  [there][8]  and create an account. When asked to confirm your phone number, please use the phone number you want to use in this project. This way you'll be able to use the $15 of free credit Twilio offers to new users. At around 1 cent a text, it should be enough for your bot to run for one year.

If you go on the  [console][9], you'll see your  `Account SID`  and your  `Auth Token`  , save them for later. Also click on the big red button "Get My Trial Number", follow the step, and save this one for later too.

Sending a text with the Twilio Python API is very easy, as they provide a package that does the annoying stuff for you. Install the package with  `pip install Twilio`  and just do:

```python
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
client.messages.create(
    body='Test MSG',from_=<Your Trial Number>,to=<Your Real Number>)

```

And that is all you need to send yourself a text, amazing right?

# Putting everything together

We will now put everything together, and shorten the code a bit so we manage to say under 30 lines of Python code.

```python
import requests
from twilio.rest import Client
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
if at_least_one_stream_active:
    client = Client(<Your Account SID>, <Your Auth Token>)
    client.messages.create(body='LIVE !!!',from_=<Your Trial Number>,to=<Your Real Number>)
```

Still have 16 lines left!

# Avoiding double notifications

This snippet works great, but should that snippet run every minute on a server, as soon as our favorite Twitcher goes live we will receive an SMS every minute.

We need a way to store the fact that we were already notified that our Twitcher is live and that we don't need to be notified anymore.

The good thing with the Twilio API is that it offers a way to retrieve our message history, so we just have to retrieve the last SMS we sent to see if we already sent a text notifying us that the twitcher is live.

Here what we are going do to in pseudocode:

```
if favorite_twitcher_live and last_sent_sms is not live_notification:
    send_live_notification()
if not favorite_twitcher_live and last_sent_sms is live_notification:
    send_live_is_over_notification()
```

This way we will receive a text as soon as the stream starts, as well as when it is over. This way we won't get spammed - perfect right? Let's code it:

```python
# reusing our Twilio client
last_messages_sent = client.messages.list(limit=1)
last_message_id = last_messages_sent[0].sid
last_message_data = client.messages(last_message_id).fetch()
last_message_content = last_message_data.body
```

Let's now put everything together again:

```py
import requests
from twilio.rest import Client
client = Client(<Your Account SID>, <Your Auth Token>)
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "<YOUR-CLIENT-ID>"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
last_messages_sent = client.messages.list(limit=1)
if last_messages_sent:
    last_message_id = last_messages_sent[0].sid
    last_message_data = client.messages(last_message_id).fetch()
    last_message_content = last_message_data.body
    online_notified = "LIVE" in last_message_content
    offline_notified = not online_notified
else:
    online_notified, offline_notified = False, False

```

And voilà!

You now have a snippet of code, in less than 30 lines of Python, that will send you a text a soon as your favourite Twitcher goes Online / Offline and without spamming you.

We just now need a way to host and run this snippet every X minutes.

# The quest for a host

To host and run this snippet we will use Heroku. Heroku is honestly one of the easiest ways to host an app on the web. The downside is that it is really expensive compared to other solutions out there. Fortunately for us, they have a generous free plan that will allow us to do what we want for almost nothing.

If you don't already, you need to create a  [Heroku account][12]. You also need to  [download and install the Heroku client][13].

You now have to move your Python script to its own folder, don't forget to add a  `requirements.txt`  file in it. The content of the latter begins:

```
requests
twilio
```

This is to ensure that Heroku downloads the correct dependencies.

`cd`  into this folder and just do a `heroku create --app &lt;app name&gt;`.

If you go on your  [app dashboard][14]  you'll see your new app.

We now need to initialize a git repo and push the code on Heroku:

```
git init
heroku git:remote -a <app name>
git add .
git commit -am 'Deploy breakthrough script'
git push heroku master
```

Your app is now on Heroku, but it is not doing anything. Since this little script can't accept HTTP requests, going to  `<app name>.herokuapp.com`  won't do anything. But that should not be a problem.

To have this script running 24/7 we need to use a simple Heroku add-on call "Heroku Scheduler". To install this add-on, click on the "Configure Add-ons" button on your app dashboard.

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.40.png)

Then, on the search bar, look for Heroku Scheduler:

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.53.12.png)

Click on the result, and click on "Provision"

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.50.59.png)

If you go back to your App dashboard, you'll see the add-on:

![](https://www.freecodecamp.org/news/content/images/2019/08/Capture-d-e-cran-2019-08-15-a--12.54.16.png)

Click on the "Heroku Scheduler" link to configure a job. Then click on "Create Job". Here select "10 minutes", and for run command select `python &lt;name_of_your_script&gt;.py`. Click on "Save job".

While everything we used so far on Heroku is free, the Heroku Scheduler will run the job on the $25/month instance, but prorated to the second. Since this script approximately takes 3 seconds to run, for this script to run every 10 minutes you should just have to spend 12 cents a month.

# Ideas for improvements

I hope you liked this project and that you had fun putting it into place. In less than 30 lines of code, we did a lot, but this whole thing is far from perfect. Here are a few ideas to improve it:

-   Send yourself more information about the current streaming (game played, number of viewers ...)
-   Send yourself the duration of the last stream once the twitcher goes offline
-   Don't send you a text, but rather an email
-   Monitor multiple twitchers at the same time

Do not hesitate to tell me in the comments if you have more ideas.

# Conclusion

I hope that you liked this post and that you learned things reading it. I truly believe that this kind of project is one of the best ways to learn new tools and concepts, I recently launched a  [web scraping API][15]  where I learned a lot while making it.

Please tell me in the comments if you liked this format and if you want to do more.

I have many other ideas, and I hope you will like them. Do not hesitate to share what other things you build with this snippet, possibilities are endless.

Happy Coding.

Pierre

## Don't want to miss my next post:

You can subscribe  [here][16] to my newsletter.

[1]: https://realpython.com/installing-python/
[2]: https://www.freecodecamp.org/news/git-commands/
[3]: https://www.freecodecamp.org/news/author/adrianhajdin/
[4]: https://www.daolf.com/posts/avoiding-being-blocked-while-scraping-ultimate-guide/
[5]: https://dev.twitch.tv/
[6]: https://dev.twitch.tv/docs
[7]: https://api.twitch.tv/helix/streams?%22
[8]: https://www.twilio.com/try-twilio
[9]: https://www.twilio.com/console
[10]: https://api.twitch.tv/helix/streams?%22
[11]: https://api.twitch.tv/helix/streams?%22
[12]: https://www.heroku.com/
[13]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
[14]: https://dashboard.heroku.com/apps
[15]: https://www.scrapingninja.co/
[16]: https://www.daolf.com/stay_updated/
