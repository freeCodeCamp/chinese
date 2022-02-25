> -  原文地址：[How to Build Your Own Heroku with Dokku](https://www.freecodecamp.org/news/how-to-build-your-on-heroku-with-dokku/)
> -  原文作者：[
                    
                        Nuno Bispo
                    
                ](https://www.freecodecamp.org/news/author/nunobispo/)
> -  译者：
> -  校对者：

![How to Build Your Own Heroku with Dokku](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/dokku.png)

Heroku is a well-known PaaS widely used by developers. And as a fun and useful project, you can easily make your own Heroku-like PaaS with Dokku.

![dokku-logo-with-name5-1](https://www.freecodecamp.org/news/content/images/2022/02/dokku-logo-with-name5-1.png)

## What is Heroku?

Heroku is a platform as a service (PaaS) company founded in 2007. The platform runs on AWS, and its ephemeral storage system is called "Dyno".

Heroku is one of the most used PaaS by developers and for a good reason– it is easy to use, well documented, and supports several programming languages.

But what if you could deploy your own Heroku-like platform, including a CI/CD pipeline, database connections, HTTPS connections, and much more with one simple-to-use application?

Well, that is what Dokku provides and more. Let's take a look.

## What is a PaaS?

Platform-as-a-Service (PaaS) is a software architecture style that provides an easy-to-use abstraction layer for deploying your application's code and managing it.

This allows you to focus on writing business logic rather than worrying about the platform itself.

PaaS providers usually provide their own database service as well as other related services, which can greatly simplify common development tasks.

The great advantage of PaaS is that the application developer doesn't need to perform any system administration work. Instead, you can just upload your code and configuration settings to a central server platform.

The service then takes care of deploying the code, scaling it as needed, backing up data, handling hosting and uptime concerns, and so on.

## What is Dokku?

Dokku is a hosted Platform as a Service that enables developers to deploy their applications with ease.

From their website:

> The smallest PaaS implementation you've ever seen

Dokku is based on Docker and uses Heroku's build-packs to compile and package your applications.

One of the best things about Dokku is that it is very lightweight and can be installed on a single server or VM.

It includes scalable hosting using Docker containers, continuous deployment with Git, and other popular DevOps tools.

Dokku also offers a variety of features, such as support for multiple languages, custom domains, automated deployments, and many more.

You can easily connect Postgres databases and even file storage to your applications.

You can check out more information at [https://dokku.com/](https://dokku.com/) or the documentation at: [https://dokku.com/docs/getting-started/installation/](https://dokku.com/docs/getting-started/installation/).

You can also show some love for the [open-source GitHub project here](https://github.com/dokku/dokku).

## How to Install Dokku

In order to install Dokku you will need a Linux VPS and a domain name.

You can install and use Dokku without a domain name but it is much simpler using a domain. I recommend a cloud VPS because it makes it easier to access and configure.

When connecting a domain, either a single domain or a wildcard can be associated with the server's IP.

I will be using a VPS hosted on [Hetzner](https://hetzner.cloud/) with Ubuntu 20.04 installed.

We first start by making sure that our system is up to date with these commands:

```bash
# Update the linux installation
$ sudo apt update
$ sudo apt upgrade -y
```

Then we can download and run the installation script for Dokku:

```bash
# Install Dokku with the install script
$ wget https://raw.githubusercontent.com/dokku/dokku/v0.26.8/bootstrap.sh;
$ sudo DOKKU_TAG=v0.26.8 bash bootstrap.sh

--> Ensuring we have the proper dependencies
--> Note: Installing dokku for the first time will result in removal of
    files in the nginx 'sites-enabled' directory. Please manually
    restore any files that may be removed after the installation and
    web setup is complete.

    Installation will continue in 10 seconds.
    
    [...........]
    
    --> Running post-install dependency installation

 ! Setup a user's ssh key for deployment by passing in the public ssh key as shown:

     echo 'CONTENTS_OF_ID_RSA_PUB_FILE' | dokku ssh-keys:add admin
```

The installation script will install Docker and all necessary dependencies and also Dokku itself, as seen in the code above.

After the installation is complete we need to assign the SSH keys to access and also configure our domain name.

In case you have set up access to your VPS with SSH (which you should) then you already have the necessary keys – you just need to add them to Dokku:

```
# Assign SSH key to Dokku
$ cat ~/.ssh/authorized_keys | dokku ssh-keys:add admin

SHA256:6O1TLVOUkWV+zmTWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

In case you don't already have an SSH key in the server, then you need to generate a key pair:

```
# Generate SSH key
$ ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa
Your public key has been saved in /root/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:7T6BbRCVWjGtcSUXXXXXXXXXXXXXXXXXXXXXXXXXXXXX root@freeDokku
The key's randomart image is:
+---[RSA 3072]----+
[.................]
|     . oS*.o . . |
[.................]
+----[SHA256]-----+
```

Then you can add it to Dokku:

```bash
# Add SSH key to Dokku
$ dokku ssh-keys:add admin /root/.ssh/id_rsa.pub

SHA256:7T6BbRCVWjGtcSUXXXXXXXXXXXXXXXXXXXXXXXX
```

Next, and the final step, is to assign the domain for your Dokku installation. We do that with the command:

```bash
# Set installation global domain
$ dokku domains:set-global domain.com

-----> Set domain.com
```

Make sure you replace 'domain.com' with your own domain, and that your domain name DNS points to the server's IP address.

And that is all you need to do to install and set up Dokku. It is really that simple.

You can now start adding your applications.

Let's see an example of that by adding a standard Django application in the next section.

## How to Create Your Application in Dokku

To create and deploy our first application, there is some preparation work we need to do on Dokku.

To deploy an application on Dokku, follow these steps:

-   Create the application on Dokku, which means giving it a name.
-   Create the associate database (or other plugins, if needed). This will create and provision a database for use with an automatic DATABASE\_URL added to the application for ease of deployment.
-   Push the necessary code to Dokku's application internal GitHub endpoint. This can include also the necessary release steps (like running Django migrations, for example).

After the code is pushed, Dokku will generate any necessary Docker container and will run our application with any associated databases (or other plugins).

Now that we've covered the necessary steps, let's go through them in practice.

Let's start by creating our application. For this tutorial, I will create a very simple Django website that contains all the necessary logic for us to test Dokku.

We create an application on Dokku with this command (in the server where we installed Dokku):

```bash
# Creating our application on Dokku
$ dokku apps:create djangotutorial

-----> Creating djangotutorial...
```

By default, datastores (or databases) are not created when an application is created.

The datastores are handled by a series of plugins. You can [check here for all available plugins](https://dokku.com/docs/community/plugins/#official-plugins-beta).

For our application, we will create a Postgres datastore. Since by default no plugins are installed, we first need to install the Postgres plugin:

```bash
# install the postgres plugin
# plugin installation requires root, hence the user change
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
```

Then we can create our Postgres datastore:

```bash
# Create a Postgres datastore
$ dokku postgres:create djangotutorial_datastore

       Waiting for container to be ready
       Creating container database
       Securing connection to database
=====> Postgres container created: djangotutorial_datastore
=====> djangotutorial_datastore postgres service information
       Config dir:          /var/lib/dokku/services/postgres/djangotutorial_datastore/data
       Config options:
       Data dir:            /var/lib/dokku/services/postgres/djangotutorial_datastore/data
       Dsn:                 postgres://postgres:ea706cc108c805d5124d134d934024c5@dokku-postgres-djangotutorial-datastore:5432/djangotutorial_datastore
       Exposed ports:       -
       Id:                  782a04fe6bbd25958752c17c304358fd5ec1f3c54d6d53175b6481b3b957d94b
       Internal ip:         172.17.0.5
       Links:               -
       Service root:        /var/lib/dokku/services/postgres/djangotutorial_datastore
       Status:              running
       Version:             postgres:14.1
```

We can check that our Docker container for the datastore is already up and running with:

```bash
# Check running containers
$ docker ps

CONTAINER ID   IMAGE                      COMMAND                  CREATED              STATUS              PORTS      NAMES
782a04fe6bbd   postgres:14.1              "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp   dokku.postgres.djangotutorial_datastore
```

Now that we have the datastore up and running, we need to associate it with our application:

```bash
# Associate datastore with the application
$ dokku postgres:link djangotutorial_datastore djangotutorial

-----> Setting config vars
       DATABASE_URL:  postgres://postgres:ea706cc108c805d5124d134d934024c5@dokku-postgres-djangotutorial-datastore:5432/djangotutorial_datastore
-----> Restarting app djangotutorial
 !     App image (dokku/djangotutorial:latest) not found
```

You can see that a DATABASE\_URL is automatically created and associated with the application.

The example above mentions that our application image is not found because we haven't pushed any code to it yet.

We can check our application's environment variables to confirm that our DATABASE\_URL is present:

```bash
# Checking an application environment variables
$ dokku config:show djangotutorial

=====> djangotutorial env vars
DATABASE_URL:  postgres://postgres:ea706cc108c805d5124d134d934024c5@dokku-postgres-djangotutorial-datastore:5432/djangotutorial_datastore
```

We now have all the necessary configurations done on the Dokku side to support the deployment of our application.

Next, we will create the code for our application and deploy that to Dokku for an automated CI/CD pipeline.

## How to Create Our Application Code on PyCharm

Before we can deploy an application, we need to have its source code to push to Dokku.

For this tutorial, we are going to create a very simple Django application that shows also the use of the Postgres database.

We will be using PyCharm as our IDE to create and manage our project.

We create a new project in PyCharm – let's call it 'DjangoTutorial':

![PyCharm-NewProject](https://www.freecodecamp.org/news/content/images/2022/02/PyCharm-NewProject.png)

Creating a new project on PyCharm - Screenshot by author

I personally prefer to create new projects with a virtual environment already in place, which makes life much easier.

If you created the project with a default main.py file (like I did because I keep forgetting to remove the checkmark), you can safely delete it now. We are not going to use it.

The first step is, of course, to install Django so we can build our application. We do that install using pip:

```
$ pip install django

Collecting django
  Downloading Django-4.0.2-py3-none-any.whl (8.0 MB)
     |████████████████████████████████| 8.0 MB 6.4 MB/s
Collecting sqlparse>=0.2.2
  Using cached sqlparse-0.4.2-py3-none-any.whl (42 kB)
Collecting tzdata
  Using cached tzdata-2021.5-py2.py3-none-any.whl (339 kB)
Collecting asgiref<4,>=3.4.1
  Downloading asgiref-3.5.0-py3-none-any.whl (22 kB)
Installing collected packages: tzdata, sqlparse, asgiref, django
Successfully installed asgiref-3.5.0 django-4.0.2 sqlparse-0.4.2 tzdata-2021.5
```

Then we create our Django project with:

```
$ django-admin startproject DjangoTutorial .
```

Notice the '.' at the end of the command. I like to use that so that it creates the project in the current directory instead of creating an extra sub-directory.

You should now have a project structure like this in PyCharm:

![PyCharm-Project](https://www.freecodecamp.org/news/content/images/2022/02/PyCharm-Project.png)

PyCharm folder structure for our Django application - screenshot by the author

We can run our project with the standard Django run:

```
$ python manage.py runserver   

Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
February 02, 2022 - 16:49:27
Django version 4.0.2, using settings 'DjangoTutorial.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

We have not yet applied our migrations, so we will do that next after we discuss the database configuration for both local and Dokku access.

Navigating to the link [http://127.0.0.1:8000/](http://127.0.0.1:8000/), we can now access our standard Django welcome page:

![Django](https://www.freecodecamp.org/news/content/images/2022/02/Django.png)

Django welcome page - screenshot by the author

We have our Django installation up and running so now we can start building the rest of the project.

Like most projects, we will need to store data in a database (or database using the Dokku naming).

We also want to be able to debug and run our application locally on the development machine (using a local database, in this SQLite) and run it on the cloud with Dokku using the Postgres database.

This means we need to change some configuration in our settings.py to be able to support both use cases without us needing to change any flags or configs every time.

We start by installing the package dj-database-url with:

```
# Install packages for the database url
$ pip install dj-database-url
$ pip install psycopg2


# We also install this package to be able to use environment variables
$ pip install python-decouple
```

This package enables us to have a Django database connection dictionary, populated with all the data by simply specifying a database URL.

With the package install, let's update the configuration on the settings.py:

```Python
# We need to add this import at the beginning to use environment variables
import dj_database_url
from decouple import config
from django.conf.global_settings import DATABASES

.....

# Let's also updated the allowed host so we can use it later on
ALLOWED_HOSTS = config('ALLOWED_HOSTS').split(',')

.....

# We replace the default database configuration from Django with this one
# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

# DATABASE URL
DATABASES['default'] = dj_database_url.parse(config('DATABASE_URL'),conn_max_age=600)
```

settings.py

We will also need to create '.env' file in the root dir of our project:

```
#HOST SETTINGS
ALLOWED_HOSTS = 127.0.0.1

#DATABASE SETTINGS
DATABASE_URL='sqlite:///db.sqlite3'
```

.env

As you can see, with this change we can use the database URL from the local '.env' file on the local development machine, and then on Dokku it will automatically use the already defined DATABASE\_URL that was created when we linked the datastore to the application on Dokku.

We can now create our first (and only) web page of this tutorial), a simple counter that stores and read the value from the database.

Let's create a separate application to contain our logic:

```bash
$ python manage.py startapp counter
```

We now should have a new folder called 'counter' in our project. Let's add a new model by opening the 'models.py' file:

```Python
from django.db import models


class Counter(models.Model):
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.count
```

counter/models.py

We can now add a new URL to load our counter page. We do that by adding a new file called 'urls.py' to our 'counter' folder:

```Python
from django.urls import path
from . import views

urlpatterns = [
    path('counter/', views.counter, name='counter'),
]
```

counter/urls.py

We now have both the model and the URL to load our test page. All we need now is the view and HTML template to render the page.

Let's create the view by editing the 'views.py' file:

```Python
from django.shortcuts import render
from .models import Counter


def counter(request):
    counter_value = Counter.objects.last()

    if counter_value is None:
        counter_value = Counter(count=0)
        counter_value.save()

    if request.method == 'POST':
        counter_value.count += 1
        counter_value.save()

    return render(request, 'counter.html', {'counter': counter_value.count})
```

counter/views.py

Now we can create our HTML template to show the counter value on the page. We create a new file called 'counter.html' inside a new 'templates' folder:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Counter</title>
</head>
<body>
  <form method="post">
      {%csrf_token%}
    <h4>Counter value is: {{ counter }}</h4>
    <input type="submit" name="submit" value="Increase Counter">
  </form>
</body>
</html>
```

counter/templates/counter.html

The last step is to add our newly created application to the 'settings.py' file in order for Django to recognize it:

```
.....

INSTALLED_APPS = [
    'counter',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

.....
```

settings.py

And the URL to our main URLs file:

```Python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('counter.urls')),
    path('admin/', admin.site.urls),
]
```

urls.py

With all the necessary code and HTML in place, we can now create and run our migrations to create our new model in the database. We first do that on the local server by running:

```bash
# Create and run migrations
$ python manage.py makemigrations
$ python manage.py migrate

Operations to perform:
  Apply all migrations: admin, auth, contenttypes, counter, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying counter.0001_initial... OK
  Applying sessions.0001_initial... OK
```

As you can see, we not only applied the migrations for our new application but we also run the initial migrations for the other Django applications since this was the first time we ran the migrations.

We can again run our server locally and we should be able to access the URL [http://127.0.0.1:8000/counter/](http://127.0.0.1:8000/counter/) and increment the counter:

![CounterPage_Local](https://www.freecodecamp.org/news/content/images/2022/02/CounterPage_Local.gif)

Running our counter application - GIF by the author

As you can see, reloading the page keeps our counter value, meaning that the value is been stored in the database with our model.

## How to Deploy Our Application to Dokku

We now have a very simple application running with database integration to store our counter value.

We are ready to deploy it to the cloud so we can test it there and make sure our database is also working in the cloud.

Before we do the Git push to deploy the code to Dokku, we need to do some preparation:

-   Install our web server (gunicorn)
-   Create our requirements file (for our packages)
-   Create our Procfile (for our deployment commands)

Let's start with installing our web server to use in the cloud:

```bash
# Install our web server
$ pip install gunicorn
```

With our packages in place we can now create our requirements file with:

```bash
# Create requirements file
$ pip freeze > requirements.txt
```

Now we need to create the 'Procfile'. This file is used by Dokku to determine which commands to run on deployment and after deployment.

So let's create a new file called 'Procfile' in the root directory with the contents:

```
web: gunicorn DjangoTutorial.wsgi
release: python manage.py migrate
```

Procfile

We have created two commands for Dokku to run:

-   release – this command is executed on the deployment of our application in Dokku. We use it to migrate our database.
-   web – this command allows Dokku to know which webserver to run to allow access to the application.

Finally, to make sure that we can collect any static files when our code is deployed to Dokku, we need to create a new directory called 'static' on the root directory. Inside we create an empty file called '.gitkeep' (this will allow us to add the directory to the Git repository later).

We also need to add this path for the static files to our 'settings.py' file:

```Python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / "static"
```

settings.py

Now all the files and logic are in place and we can deploy to Dokku with a standard Git push. Let's check our current file structure:

![PyCharm-FolderStrcuture-1](https://www.freecodecamp.org/news/content/images/2022/02/PyCharm-FolderStrcuture-1.png)

PyCharm folder structure - screenshot by the author

To be able to push our code to Dokku, we need to add our project to a Git repository.

Since we don't want to push all the files from our folder structure to the Dokku git repository, we create a '.gitignore' to exclude certain files and directories. I use the contents of this excellent Gist to populate the file:

[

python pycharm gitignore

python pycharm gitignore. GitHub Gist: instantly share code, notes, and snippets.

![favicon](https://github.githubassets.com/favicons/favicon.svg)262588213843476Gist

![gist-og-image](https://github.githubassets.com/images/modules/gists/gist-og-image.png)

](https://gist.github.com/MOOOWOOO/3cf91616c9f3bbc3d1339adfc707b08a)

We can now initialize and commit our code to a Git repository locally:

```bash
# Initialize repository
$ git init -b main

# Add and commit our files
$ git add . && git commit -m "initial commit"

[main (root-commit) e77a16a] initial commit
 20 files changed, 438 insertions(+)       
 create mode 100644 .gitignore
 create mode 100644 DjangoTutorial/__init__.py
 create mode 100644 counter/tests.py
 create mode 100644 counter/urls.py
 create mode 100644 counter/views.py
 create mode 100644 db.sqlite3
 create mode 100644 manage.py
 create mode 100644 requirements.txt
```

With our repository committed, we can now push it to a remote repository, that is the Dokku Git repository for our application:

```bash
# Adding our remote repository (replace domain.com with your domain name)
$ git remote add dokku dokku@domain.com:djangotutorial

# Time to push our code to the remote repository
$ git push dokku main

Enumerating objects: 34, done.
Counting objects: 100% (34/34), done.
Delta compression using up to 8 threads
Compressing objects: 100% (31/31), done.
Writing objects: 100% (34/34), 11.41 KiB | 402.00 KiB/s, done.
Total 34 (delta 7), reused 0 (delta 0)
-----> Set main to DOKKU_DEPLOY_BRANCH.
-----> Cleaning up...
-----> Building djangotutorial from herokuish
-----> Adding BUILD_ENV to build environment...
       BUILD_ENV added successfully
-----> Python app detected
-----> No Python version was specified. Using the buildpack default: python-3.9.9
       To use a different version, see: https://devcenter.heroku.com/articles/python-runtimes
-----> No change in requirements detected, installing from cache
-----> Installing python-3.9.9
-----> Installing pip 21.3.1, setuptools 57.5.0 and wheel 0.37.0
-----> Installing SQLite3
-----> Installing requirements with pip
       Collecting asgiref==3.5.0
       Downloading asgiref-3.5.0-py3-none-any.whl (22 kB)
       Collecting dj-database-url==0.5.0
       Downloading dj_database_url-0.5.0-py2.py3-none-any.whl (5.5 kB)
       Collecting Django==4.0.2
       Downloading Django-4.0.2-py3-none-any.whl (8.0 MB)
       Collecting gunicorn==20.1.0
       Downloading gunicorn-20.1.0-py3-none-any.whl (79 kB)
       Collecting psycopg2==2.9.3
       Downloading psycopg2-2.9.3.tar.gz (380 kB)
       Preparing metadata (setup.py): started
       Preparing metadata (setup.py): finished with status 'done'
       Collecting python-decouple==3.5
       Downloading python_decouple-3.5-py3-none-any.whl (9.6 kB)
       Collecting sqlparse==0.4.2
       Downloading sqlparse-0.4.2-py3-none-any.whl (42 kB)
       Collecting tzdata==2021.5
       Downloading tzdata-2021.5-py2.py3-none-any.whl (339 kB)
       Building wheels for collected packages: psycopg2
       Building wheel for psycopg2 (setup.py): started
       Building wheel for psycopg2 (setup.py): finished with status 'done'
       Created wheel for psycopg2: filename=psycopg2-2.9.3-cp39-cp39-linux_x86_64.whl size=579484 sha256=9d6a2810a5d766738526d6f411e5e9ce514cce882b6c80a47a13c02dc7529e02
       Stored in directory: /tmp/pip-ephem-wheel-cache-8k0chg5g/wheels/b3/a1/6e/5a0e26314b15eb96a36263b80529ce0d64382540ac7b9544a9
       Successfully built psycopg2
       Installing collected packages: sqlparse, asgiref, tzdata, python-decouple, psycopg2, gunicorn, Django, dj-database-url
       Successfully installed Django-4.0.2 asgiref-3.5.0 dj-database-url-0.5.0 gunicorn-20.1.0 psycopg2-2.9.3 python-decouple-3.5 sqlparse-0.4.2 tzdata-2021.5
-----> $ python manage.py collectstatic --noinput
       128 static files copied to '/tmp/build/static'.

-----> Discovering process types
       Procfile declares types -> release, web
-----> Releasing djangotutorial...
-----> Checking for predeploy task
       No predeploy task found, skipping
-----> Checking for release task
-----> Executing release task from Procfile: python manage.py migrate
=====> Start of djangotutorial release task (a602cab30) output
       Operations to perform:
         Apply all migrations: admin, auth, contenttypes, counter, sessions
       Running migrations:
         Applying contenttypes.0001_initial... OK
         Applying auth.0001_initial... OK
         Applying admin.0001_initial... OK
         Applying admin.0002_logentry_remove_auto_add... OK
         Applying admin.0003_logentry_add_action_flag_choices... OK
         Applying contenttypes.0002_remove_content_type_name... OK
         Applying auth.0002_alter_permission_name_max_length... OK
         Applying auth.0003_alter_user_email_max_length... OK
         Applying auth.0004_alter_user_username_opts... OK
         Applying auth.0005_alter_user_last_login_null... OK
         Applying auth.0006_require_contenttypes_0002... OK
         Applying auth.0007_alter_validators_add_error_messages... OK
         Applying auth.0008_alter_user_username_max_length... OK
         Applying auth.0009_alter_user_last_name_max_length... OK
         Applying auth.0010_alter_group_name_max_length... OK
         Applying auth.0011_update_proxy_permissions... OK
         Applying auth.0012_alter_user_first_name_max_length... OK
         Applying counter.0001_initial... OK
         Applying sessions.0001_initial... OK
=====> End of djangotutorial release task (a602cab30) output
-----> App Procfile file found
=====> Processing deployment checks
       No CHECKS file found. Simple container checks will be performed.
       For more efficient zero downtime deployments, create a CHECKS file. See https://dokku.com/docs/deployment/zero-downtime-deploys/ for examples
-----> Deploying djangotutorial via the docker-local scheduler...
-----> Deploying web (count=1)
       Attempting pre-flight checks (web.1)
       Waiting for 10 seconds (web.1)
       Default container check successful (web.1)
-----> Deploying release (count=0)
-----> Running post-deploy
-----> Creating new app virtual host file...
-----> Configuring djangotutorial.domain.com...(using built-in template)
-----> Creating http nginx.conf
       Reloading nginx
-----> Renaming containers
       Renaming container djangotutorial.web.1.upcoming-7101 (f8d229ebd8bc) to djangotutorial.web.1
-----> Checking for postdeploy task
       No postdeploy task found, skipping
-----> Updated schedule file
=====> Application deployed:
       http://djangotutorial.domain.com

To domain.com:djangotutorial
 * [new branch]      main -> main
```

We have just deployed our application to Dokku.

What just happened? Well, Dokku did a lot of work for us:

-   Installed Python
-   Installed the requirements
-   Collected the static files
-   Performed the migrations
-   And finally started a gunicorn server to deploy our application

If you had a permission error, then your private key should be registered within your local development environment. If you get a `permission denied` error when pushing, you can register your private key as follows: `ssh-add -k ~/<your private key>`.

You may also see an error regarding the ALLOWED\_HOSTS when accessing the application. In that case, all you need to do is to run the following command on the Dokku server to set the environment variable to the correct value:

```
# Set ALLOWED_HOSTS environment variable (make sure to use your domain name)
$ dokku config:set djangotutorial ALLOWED_HOSTS=djangotutorial.domain.com
```

We can now access and test our application at the above URL:

![PageCounter_Server](https://www.freecodecamp.org/news/content/images/2022/02/PageCounter_Server.gif)

Running our counter application on Dokku - GIF by the author

Congratulations, you just deployed your application on Dokku.

## How to Add SSL with Let's Encrypt

One final configuration that we can do is to add SSL security to our application by installing a Let's Encrypt SSL certificate.

We can do this very easily on Dokku with the Let's Encrypt plugin:

```bash
# Install the Let's Encrypt plugin
sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git

# Configure the plugin (make sure to replace to your email)
dokku config:set --global DOKKU_LETSENCRYPT_EMAIL=email@domain.com

# set a custom domain that you own for your application
dokku domains:set djangotutorial djangotutorial.your.domain.com

# Enable Let's Encrypt
dokku letsencrypt:enable djangotutorial

# Enable Let's Encrypt auto-renewal
dokku letsencrypt:cron-job --add
```

Now we have a more secure application. After all, our counter is very important.

## Conclusion

Using a PaaS makes a developer's life easier when building web applications.

You can use hosted PaaS like Heroku and there are many others, so the choice is there.

But there are some main drawbacks:

-   Price – hosted solutions might have limits in terms of database storage or file storage, among others
-   You don't control the hosting where the PaaS is deployed. Recent examples of AWS shows that not even the biggest hosting is free of problems.

You can work around these issues by self-hosting your PaaS.

This allows for more control in terms of pricing. You can use hosting provider like [Digital Ocean](https://www.digitalocean.com/), [Hetzner](https://hetzner.cloud/), and others who have quite cheap VPSs that work perfectly with Dokku.

There are no database limits. The only limits you might have are memory and disk space, but you can always upgrade your VPS for a smaller price than getting a new database at Heroku.

Dokku is easy to install and like we saw. Creating and deploying an application is a 3 step process:

-   Create an application on Dokku
-   Create a datastore on Dokku (if needed, like Postgres) and link to the application
-   Deploy your code to Dokku with Git

Additionally, you might need to configure some environment variables and SSL certificates, but that is all.

Dokku is really the smallest PaaS implementation.

Full source code for the Django application is available at:

[

GitHub - nunombispo/DjangoTutorial: Example application for freeCodeCamp article.

Example application for freeCodeCamp article. Contribute to nunombispo/DjangoTutorial development by creating an account on GitHub.

![favicon](https://github.githubassets.com/favicons/favicon.svg)nunombispoGitHub

![DjangoTutorial](https://opengraph.githubassets.com/6a188f8592e03553d82c8e99b5a40faf20142ac1444260085a81aa0087137584/nunombispo/DjangoTutorial)

](https://github.com/nunombispo/DjangoTutorial)

Follow me on Twitter: [https://twitter.com/DevAsService](https://twitter.com/DevAsService)

Check out my website at: [https://developer-service.io/](https://developer-service.io/)

Or check out my blog at: [https://blog.developer-service.io/](https://blog.developer-service.io/)