> -   原文地址：[How to Build a Web App on Your Phone – Python & Pydroid Android App Tutorial](https://www.freecodecamp.org/news/how-to-code-on-your-phone-python-pydroid-android-app-tutorial/)
> -   原文作者：Precious Oladele
> -   译者：
> -   校对者：

Hey there, how are you? I'm an 18 year old a backend developer and an aspiring Machine Learning Engineer. And in this article, I'm going to be writing about how to build a web app on your phone using Python 😁. Let's dive into it.

![](https://lh3.googleusercontent.com/TW_PdXBpgeWY4mLcHjFisp8e7Lk7Zsn1aFarXBkmvhEMP0XR5xzTDxhKcCizsrJ25rkPeMeWp7ctlG0Wy7_WFUS0bzT-JVJfpe6X_3OqnuE_df2q5B3KIrhl3EG47w3Dik3nIZE "Placeholder image")

## **Requirements**

The first thing we need here is an Android phone, at least version 6.0 and upward. But what if I told you that's all we need? Seems too good to be true.

Now the next thing we need to do is install a mobile application on our phone called pydroid3.

![](https://lh6.googleusercontent.com/fwM9r46B-sTofVF6IybUOhCTYoM8vSAPfumfBIiiL_wWLQpgdQgeR2B_2-N28NtNLaA7HvTtsZxlXdX03anCGvbt4QAlhQ_wyb9_AIfqG9L4ZMCjQOrKLg5OFPeZgKrJdqKEeb8)

As you can see, pydroid3 is a mobile application that lets you write Python on your mobile phone, so go ahead and install it.

The next thing we need to do is install Django. If you're not familiar with Django, please check out the [Django docs here](https://www.djangoproject.com/).

To install Django we need to open up the side navigation in our pydroid3 and select Terminal:

![](https://lh6.googleusercontent.com/qO3djIyoXMZB8MzcIaFDmNddhB2t9XgLLgCzonR2CDkWJc0pXtap9gyGhqZfpv0uFCCvtYnynL6pAOfgactlDfpwoy03TfgqEoN2W_gAO7nOeoaLbySZEQkOSBuprhs67jc-Ens)

Then click on it and we should see this:

![](https://lh3.googleusercontent.com/fTwNrfhCQpxKBFbrsN3B6dt4kFWvDUEJElZ897o-d21XbiYj42gZBLhiLMt7ffvSp44OQBrubC9jK62WvzneTlF-7WxcZZygHEqo4hmQ_9V42Pw4FgvdKB75EA3fv4q5nGZiL7k)

Once that is done all you need to do is type the following command:

```python
pip install django
```

And you should get the below. I am getting a "requirements satisfied" message because I already have it installed.

![](https://lh6.googleusercontent.com/vYhoSBXGgvq2EiX6iXQ1RBLrvUe8zQHM3Aq65ZDIDRKSOoLqOrW5QQWE5yQ-ThbhzYTb6kwKf_jHzVoQ79wTbz2KZNv32oEBX1LjAFeMYaiQb4bebYOWii-h1W3EKQkTWvgA2_Q)

It has installed successfully, but let's confirm that. In the terminal type `django-admin` and hit enter.

You should get this:

![](https://lh5.googleusercontent.com/jU17O6AVeFcy6rYMJ0mp_DEqnR9q51F-mhLZH1K7Ny8tixSeY7Xl8Jx27hBfxWfHPimt-1xCfO6x2AOlvYKYR92slC3sBwJNRg9uDJsJ6had0Yq1UTXZ5_CQvfCwwKneKCO_Gp4)

This means that it's actually installed already.

## How to Build our Project

So let's get started with building our project. Open up your terminal and type in the following command:

`django-admin startproject myapp`

This creates a Django application called myapp in your root folder.

Change directory to it by typing `cd myapp` and type in `python manage.py runserver`. Then you should get this:

![](https://lh6.googleusercontent.com/fqO-uHACjoAXNQSrm5Pikjr-GQQkY3SbkE3G9Sgel1XZbePIf7hJaePd8yGxdrbYiyRdpeWCFUYBNo6iKMzTJqZg3s8j6CTGIoZYH-YJjT-tjHA0FCKtdGJEGzNy0Y8Qj5uTQrg)

Now the server has started. Next, to test it in the browser visit [127.0.0.1:8000](http://127.0.0.1:8000).

![](https://lh3.googleusercontent.com/oqMFGPasUPLxuZoRqWHQ9mEhpitsg2XK8XPzLz_U-TvnFGzjkIaHVKUHXxwYkMDskLp_36F75BIAb-qv37bHccUESSZ9Jqa6XV7FGoWYk_IS8SfPYZfMTSNmo2ei-SMVa9cp_C8)

And boom! You should see that Django has been setup successfully.

The next thing we need to do is create our Django app. In Django, the project folder serves as the root while the app serves as the application itself.

To create a Django app, make sure you are still in the directory, then type `python manage.py startapp todo`. This creates a To\-do app in our myapp project like this:

![](https://lh5.googleusercontent.com/ycIZAg7VGJO4Auwc7z_bsx5CU19Ks-rfubo_3amBKgvO-HeHb2I7mQu_loWg6leR22dvlMGh0FPgO1_-anmVpEHO4O4dlQik-MfiqF7Dx9BmxuI6YBjqPMcv8S3czgVCyftBu80)

Then inside the todo folder we should see something like this:

![](https://lh6.googleusercontent.com/Fc60wk6pMuEQ8JvIwfOK2E1zezR9n_N-8o_X__F-yr1D1yD0BEuV62G9zoqG5GQnyA0shbI79JvNs3Z-YHunEoUyZw7LAt2eumkyKjj9M39sDbmDgzZ_axvjRyVeyLZC5ohVQmY)

We will take a further look at the files when we begin working with them.

## How to Configure our Application

Now let's make it possible for the app to be served by the Django project. First of all, open up your `settings.py` file in the myapp folder and add `'todo'` to the installed apps like this:

![](https://lh4.googleusercontent.com/mxTcaRk-ON73sPH6XL31kvZmUJjfwn1knbhMgTJALeyx6l8A1umvtXjLazS34oTjbPZeivGGTe6w6zsEQ1QzhTjaYDJ5tHsbhpeyxAfrvABzGHrNsElcv7RR9kQZi_Tttt4PjIc)

Next we need to open up our `urls.py` and add the following to your code:

```python
from django.urls import path, include

path('', include('todo.urls'))
```

![](https://lh6.googleusercontent.com/VEWQQt84a9DSeqmuT-LrE9EMmYnDnDfwJQQtJhI21WDTJf4EDaE212wj7BLoBX85Vjm90gFb6KsB6yGJ6PDyfgdTT9BL5hcmDZzNfIdHlceR40qJNVubaNKduXjA2viT7yqLJ14)

What actually happened was that I added `include` to the from the `django.urls` import path. And below the path (`admin`) , we created an empty path that points to or includes the `urls.py` file in the todo app directory. I hope that's clear.

Next we need to create a new file in the todo file directory named `urls.py` and add the following code in it:

```python
from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='home')
 ]
```

![](https://lh6.googleusercontent.com/cmxgwJ5PeIXW_yGgo9AKaVK10pDjGFl26gML6VicCQVLtsiCiorL5tBahCMOxHG-1HlrocwbaVod5SN6DFJFIZ5n1gidGOfJdaGW_p8holylN4aCUb-2ankvfIQygHz6cjT2tgc)

We imported `path` from `Django.urls` and also imported `views` from the root directory. Then we created our `urlpatterns` with the first part as the root link. As you can see, the views.index just means that we're pointing this views to the index function in on `views.py` file. You will see how that works in a jiffy.

Let's go ahead to our `views.py` file and add some code.

At the top, import `HttpResponse` like this:

`from django.http import HttpResponse`

And add this below it:

```python
def index(request):
	return HttpResponse('Hello')
```

![](https://lh5.googleusercontent.com/QUpf-9cT8Z-dKXTkO1FTm2-IkjD3_NIfYSQCy_XlALUTnIg_XrrxKurZLAJ19DQCk1W5mqBx4Mo5IL9ycL5gGS_w4LyI4zXxSo8y23mNaZ2OodFg-qLEi3Dh2FN_m7ueYjPYrb4)

As you can see, we created the index function we called in our `urls.py` and we passed in a request parameter into it. Then we returned an `HttpResponse`.

But before the `HttpResponse` can work, we have to import it from `django.http import HttpResponse` – as simple as ABC. Let's try this: open up your terminal and cd into myapp and type `python manage.py runserver` to test it.

![](https://lh3.googleusercontent.com/Tqb7c-adOuVHbyi-7XBQsv0HHJvxjUhcAZ3N4d5nkOEVNVwfSXxkENlD0l0UI3Jd4qLhO3k8ELDW6yG8yRiP0MmjkO0Q4TvGTYunQIBNgSMNrXxfI7ygMHeN2FtjoJc37mVIVr0)

As you can see, it returned the response. So next we will load our template HTML files.

To load our HTML files we need to create a folder like this in the todo directory in this order:

`todo/templates/todo`

In the todo directory, create a folder called templates. Inside that folder, create a folder called todo, as simple as that.

Then go ahead and create a simple HTML file called index.html and write this in it:

`<h1>Hello world</h1>`

To load it, make your `views.py` code look like this:

```python
def index(request):
	return render(request, 'todo/index.html')
```

![](https://lh3.googleusercontent.com/mhirciumIf_FcO764txwH5MOMl40vkZ6f41c0oXFreX1UA2IiqQG9E42TfbUBCZto4xG6-vl0t5sQj3ID1FBk_gL074Rzm4pn5a8RmMsP7DuMZKYVi1KQg-Bk35yr1gJGiE2ukg)

Now instead of returning response we returned a render view that allows us to render our HTML template now, save this open up your terminal cd into myapp and run it. We should have this

![](https://lh6.googleusercontent.com/NzW4_E80BNOtRq-E4qUg1GdvqHUUQQAxMAdUSGhxROCDkSUnzddSyX4E7Wz5_zPY29twa7D2PVmS85LYmCnzEAvgE-oU2MEk1mDeNhFW5FBuD2eAjDxpPkJfXiJAMEyk1uKZVkw)

As you can see it works well \- on to the next step.

## How to Set Up the Static Files

Now to set up the static files, create a new folder in your todo directory and name it static. Inside that folder, create a folder and name it todo.

So it should be like this: `/static/todo/`.

In the todo directory, create a file and name it `main.css`. Then let's write a little styling in it:

```css
body {
background-color: red;
}
```

And save it.

Now let's re\-edit our `index.html` file by writing this code:

```django
{% load static %}
<!Doctype html>
<html>
<head>
<title>My page</title>
<link rel="stylesheet" href="{% static 'todo/main.css' %}" >
</head>
<body>
Hello
</body>
</html>
```

![](https://lh5.googleusercontent.com/Luboze-gNbfQkpTZVwOChtQKrQpC2eWnsTAE41f9mDdWaqaKtk2yYAV0uP3ufKE_EDrpfCoRvOFlHmLCJKucPNB_kQmZoaAZB5reCcW2wrddbsDbRPoIe2iacGLpFfLEcGYZEnA)

And now let's run it:

![](https://lh5.googleusercontent.com/ARWYir-7j8-yF9yCzc3bNuW1ZyLKOG30iljprX4AJsnyIdYLtK_0Of7Uu4WJLuufoyRkVL5LnG8J-bepoBcRzm1e57AuaLmbA5iIyO_RY_KsKRVrsc0OfGmDbLOkT-FIZECwIyY)

If you've followed along with me, then you should have the above.

## How to Load the Models and Admin Panel

Now to load up our admin panel, we need to create a superuser. This is simple to do – just open up your terminal and cd into the myapp folder then type `python manage.py createsuperuser` and hit enter. You should see this:

![](https://lh3.googleusercontent.com/PBTNq4SLyU4xMFsxh8wXuP0fUCnNKqL0zPiAqclNSPc4J7j4izPVgikXXQpaPqcPeSfFhrlQgf2xwyuhWz-s4RJWn1ftc5icsi9bt2QwmjKxjp3reecfmCxQ3GdVvE04HUAc8po)

We get an error because we haven't run `python manage.py migrate` yet. So type that and hit enter, and you should have something like this:

![](https://lh3.googleusercontent.com/_oEnoQWnv1VRtZf8W60ZyfFVGQV-nFzYKX4oj45SLCLUlPNNyZOefRkIj8ROdoNdkgECWr4OKmxRVUsRZy2c27XwsM7wQ4_7xeJWnlzPrBFZ79t7J8zZXFJLtfDqJf1vrvtShjc)

Now type in `python manage.py createsuperuser` and hit enter:

![](https://lh3.googleusercontent.com/t8Z8qo8Z3xNi9C86RjkiujHiS6en5b16eYPA5uMTfXAQYNpFjjuWaY_WEL0TrxLUlpaJJHzF143Vk0UuTQIzuD4GICQF4X1K2CF0vyb1ws33JN2W_FeyVu3xMOsn1posUZW0eFs)

Just fill in the credentials. The next thing we need to do is to run our server and point to 127.0.0.1:8000/admin.

![](https://lh6.googleusercontent.com/Uoen79EV8PaEDuhnt2eBaCnnJAEzHhLydikTi8BOxUSZ9DrGp9GbtUk-Um7TmMDW64Zd0RbAkXja8RjyqiX58hlWdFyrzHTUVN0NCx93e9BOx36Va4ysCX7JyJRlEmdUBnbltuA)

Login and you will be directed to the dashboard:

![](https://lh3.googleusercontent.com/C8A8OermBdrvdB_6NEHg2mFgkkuVBsePdfdmlNhulSw2m7Jkdhea_jdDFNQnbvVgqxJcXj-ftbcNmdR6nYImJC2AV9edqcPB5pkhUm0zvImzzzAokHZ4bDwYe4BPPvnXsK18Ng0)

Now that we have done the admin panel, let's work with the model (database). We'll create a model that collects contents. So open your `models.py` file and type in this code:

```python
class Post(models.Model):
	content = models.CharField(max_length=255, null=False)

    def __str__(self):
    	return self.content
```

![](https://lh4.googleusercontent.com/pyZXf_3jSGzz-sciBxAvb-ry4_TbZMnuHWWWAOl17LQ5hCi55DoKxzq0iYu6wuv8UsQhn3-w27GOzlt2N_9mpdKoHcZza9mWoBgselVQXC6bPD-ev-uTjlW1RbN1c2OussUgEpg)

We create a class that has the parameter `models.Model` and gives a variable `content` that holds a `CharField()`, more like a text field. Lastly we create a magic `str` that returns the name of the model instead of an object.

So next we need to run the migration. Open your terminal, cd into myapp, and type `python manage.py makemigrations`. You should see this:

![](https://lh6.googleusercontent.com/UBbVNNg1d8jhPTusB-HRRoUsqFfxaZdJLzSIzNIt3P4kby8Tor4G8Bme1e-yq8mOLFgfrUh3nb6MC3BSaOUQDr68_tEmIRtQBS7N7Y66wTbXdMMg-0EJ0svM3tw3j9GLgquC_IU)

That means it has created the Post table in our database. Then also run `python manage.py migrate` which will result in the following:

![](https://lh6.googleusercontent.com/VyQYel1QFdxc2D5oSOdDD6QPth2jVC5_CTj8SVyDo8pAusvl6qjH7XQUhmhbfXNLjdUiAc566pYTj0O2c-AsRHwVLeDo2xeOv1HWsldCwH1oxu3sM5WJTNOj9-fpZEOfVHMYZ6k)

This means that all is clear. Now to add it to the admin page, open up `admin.py` and type in this code:

```python
from .models import *

admin.site.register(Post)
```

![](https://lh3.googleusercontent.com/jzqRK8kVE6raStmHC8jJoqr8oYOXhygDpe8hoN_JdSRiF3Mpes3_Evw83U0nMczqgAobIY8zp_Z6ve-xb3jv6x7uChFzvdTyDqDZysD2j0pKxiGu2-V9pkvH02HKAzBA2HZr6WQ)

We imported all model classes from the model and registered the post model in the admin panel. Now if we open the admin panel we should see the post and save some data.

![](https://lh4.googleusercontent.com/E9gkvNmpFiCJg24zYj7GpLzsM8AsoGUkoZHcS1Z3bxMva_Z3Jov5Yy7UzbgU251laLwGGRWqaFK1iIrILblSyktYK42Q-fzgS6ihGf0LYxR0Zl9qvkmG7sneHM2KFRoSPDy2k3o)

Notice that it's now in the todo app list:

![](https://lh3.googleusercontent.com/BSyVagLKFGvtINW-jnuhrXRoFdB87S5lGksH37z5uewqVCn_WBHP-eI8gF6BUoG56Dz-SnKUtRonFhNX--c23V07WfXhOxHmCmJ460cXAr__NjTAkvXB4JnxIXlbsQcRtDO0uNU)

After clicking on it you should see this:

![](https://lh3.googleusercontent.com/4zxSgdVcDnDrpr6aIquG854x59GQb0ZMJ3D-YnAs-9EDR0EYwHl_HBAbrpPGGr7YLfWn0PjJA19aukrUcBbUMURpn4ofEGCwWF4541ee_-OKZQj_cWuv_yxWvUGYGOZfdzu6C90)

Then you can create a post if you like.

## How to Render Data from DB to View

Lastly we will fetch our data from the DB. To do so we need to update our `views.py` as follows:

```python
from .models import *

def index(request):
	content = Post.objects.all()
    context = {'content': content}
    return render(request, 'todo/index.html', context)
```

![](https://lh4.googleusercontent.com/NHpq8LEAtu06ntzUodCuBZT86FS_u_TPphhlfZ-CiP5rFglQcjtRB0zUdK0jkz_udZeXRh8JNqdZOhRSfV9A69I63b8P5DtBGtQo44zmwufnGTaybAaWAL0yOn9T544_mdXaLN4)

It's as simple as that: we imported all from `models.py`, created a variable called `content`, and retrieved all the data from the table Post. Then we passed it as a dictionary to our view. So in our index.html to make it work just add this:

```django
{% for contents in content %}
{{content.content}}
{% endfor %}
```

![](https://lh4.googleusercontent.com/4zgGmOcVBVa906mn0AVk0Vh9MbaFeYS0VUVoOC00Jw6wtR54S55BMPjz5t0_z2LTgbs9Ldpt3VOKcEjgxMhSE63xGu8XKSx2tWbKFYp2ndxHc31pcAMFdSturJqEy07ca_IYC1c)

Here, we wrote a loop using the templates tag and fetched all the data content. Now open your terminal, cd into myapp, and run the server to see the magic happen:

![](https://lh5.googleusercontent.com/gKJf7AGR-0ZxOCeD_QKGffg4d-wpK0Lk8Z0Fkdj39Rj1V6dpWGf_KA1iBDJ2xE-Lq_zsJQHq6eIywPujAVmEk_R7e-Ug7ox94Rk5x212Bk7cBm0fHaMnGtqQM9zscDELygE1LvI)

It works, but let's confirm that it does:

![](https://lh5.googleusercontent.com/IVjbVn-_3Exnnoq2s0pvHTeL2paWcqogzg1mp_Aj15GtXKqUPerrFDGZ-SjYKqpUX8Es1KGo0fSWoAOACLgri_LcT5oV7tkG6dtL2OestlnQC25OzFdYEhcyb0KPH3b12BBdJTU)

And the result should be the following:

![](https://lh3.googleusercontent.com/jlYy4UCV3MJd-JytvGUBLgC20k3-cduvDQ2O3FIb9kAF7VgRyGxyqb_G1Mjiqis261HQS68uIJUk5I9ccFJBFL6Ht3LiePvprBcsqkSS9lZZzJ_cc2noxJm32GPp9ytsiYl7t2o)

Violà – it works fine. Lastly you can just add a line break so you can read it more clearly. And we're done!

Thank you for reading. If you want to go through an in\-depth Django tutorial please visit my YouTube channel [Devstack](https://youtube.com/channel/UCLcHGKxbEO1XGVETXqzYXLA) and subscribe.
