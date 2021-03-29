-   原文地址：[How to structure a Flask-RESTPlus web service for production builds. Python Flask-RESTPlus 工程化实践](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/)
-   原文作者：Greg Obinna
-   译者：
-   校对者：

![](https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg)

Image credit - frsjobs.co.uk

In this guide I’ll show you a step by step approach for structuring a Flask RESTPlus web application for testing, development and production environments. I will be using a Linux based OS (Ubuntu), but most of the steps can be replicated on Windows and Mac.

Before continuing with this guide, you should have a basic understanding of the Python programming language and the Flask micro framework. If you are not familiar with those, I recommend taking a look at an introductory article - [How to use Python and Flask to build a web app.](https://medium.freecodecamp.org/how-to-use-python-and-flask-to-build-a-web-app-an-in-depth-tutorial-437dbfe9f1c6)

#### How this guide is structured

This guide is divided into the following parts:

-   [Features](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#features)
-   [What is Flask-RESTPlus?](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#what-is-flask-restplus)
-   [Setup and Installation](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#setup-and-installation)
-   [Project Setup and Organization](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#project-setup-and-organization)
-   [Configuration Settings](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#configuration-settings)
-   [Flask Script](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#flask-script)
-   [Database Models and Migration](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#database-models-and-migration)
-   [Testing](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#testing)
-   [Configuration](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#configuration)
-   [User Operations](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#user-operations)
-   [Security and Authentication](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#security-and-authentication)
-   [Route protection and Authorization](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#route-protection-and-authorization)
-   [Extra tips](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#extra-tips)
-   [Extending the App & Conclusion](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/#extending-the-app-conclusion)

#### Features

We’ll be using the following features and extensions within our project.

-   [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/): A _Flask extension that provides bcrypt hashing utilities for your application_.
-   [Flask-Migrate](https://flask-migrate.readthedocs.io/): _An extension that handles SQLAlchemy database migrations for Flask applications using Alembic. The database operations are made available through the Flask command-line interface or through the Flask-Script extension._
-   [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/): _An extension for [Flask](http://flask.pocoo.org/) that adds support for [SQLAlchemy](http://www.sqlalchemy.org/) to your application._
-   [PyJWT](https://pyjwt.readthedocs.io/): _A Python library which allows you to encode and decode JSON Web Tokens (JWT). JWT is an open, industry-standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) for representing claims securely between two parties._
-   [Flask-Script](https://flask-script.readthedocs.io/): _An extension that provides support for writing external scripts in Flask and other command-line tasks that belong outside the web application itself._
-   [Namespaces](http://flask-restplus.readthedocs.io/en/stable/scaling.html) ([Blueprints](http://exploreflask.com/en/latest/blueprints.html))
-   [Flask-restplus](https://flask-restplus.readthedocs.io/)
-   UnitTest

#### What is Flask-RESTPlus?

Flask-RESTPlus is an extension for Flask that adds support for quickly building REST APIs. Flask-RESTPlus encourages best practices with minimal setup. It provides a coherent collection of decorators and tools to describe your API and expose its documentation properly (using Swagger).

#### Setup and Installation

Check if you have pip installed, by typing the command `pip --version` into the Terminal , then press Enter.

```
pip --version
```

If the terminal responds with the version number, this means that pip is installed, so go to the next step, otherwise [install pip](https://pip.pypa.io/en/latest/installing/) or using the Linux package manager, run the command below on the terminal and press enter. Choose either the Python 2.x OR 3.x version.

-   Python 2.x

```
sudo apt-get install python-pip
```

-   Python 3.x

```
sudo apt-get install python3-pip
```

Set up virtual environment and virtual environment wrapper (you only need one of these, depending on the version installed above):

```
sudo pip install virtualenv

sudo pip3 install virtualenvwrapper
```

Follow [this link](https://medium.com/@gitudaniel/installing-virtualenvwrapper-for-python3-ad3dfea7c717) for a complete setup of virtual environment wrapper.

Create a new environment and activate it by executing the following command on the terminal:

```
mkproject name_of_your_project
```

#### Project Setup and Organization

I will be using a [functional structure](http://exploreflask.com/en/latest/blueprints.html#functional-structure) to organize the files of the project by what they do. In a functional structure, templates are grouped together in one directory, static files in another and views in a third.

In the project directory, create a new package called `app`. Inside `app`, create two packages `main` and `test`. Your directory structure should look similar to the one below.

```
.
├── app
│   ├── __init__.py
│   ├── main
│   │   └── __init__.py
│   └── test
│       └── __init__.py
└── requirements.txt
```

We are going to use a functional structure to modularize our application.  
Inside the `main` package, create three more packages namely: `controller`, `service` and `model`. The `model` package will contain all of our database models while the `service` package will contain all the business logic of our application and finally the `controller` package will contain all our application endpoints. The tree structure should now look as follows:

```
.
├── app
│   ├── __init__.py
│   ├── main
│   │   ├── controller
│   │   │   └── __init__.py
│   │   ├── __init__.py
│   │   ├── model
│   │   │   └── __init__.py
│   │   └── service
│   │       └── __init__.py
│   └── test
│       └── __init__.py
└── requirements.txt
```

Now lets install the required packages. Make sure the virtual environment you created is activated and run the following commands on the terminal:

```
pip install flask-bcrypt

pip install flask-restplus

pip install Flask-Migrate

pip install pyjwt

pip install Flask-Script

pip install flask_testing
```

Create or update the `requirements.txt` file by running the command:

```
pip freeze > requirements.txt
```

The generated `requirements.txt` file should look similar to the one below:

```
alembic==0.9.8
aniso8601==3.0.0
bcrypt==3.1.4
cffi==1.11.5
click==6.7
Flask==0.12.2
Flask-Bcrypt==0.7.1
Flask-Migrate==2.1.1
flask-restplus==0.10.1
Flask-Script==2.0.6
Flask-SQLAlchemy==2.3.2
Flask-Testing==0.7.1
itsdangerous==0.24
Jinja2==2.10
jsonschema==2.6.0
Mako==1.0.7
MarkupSafe==1.0
pycparser==2.18
PyJWT==1.6.0
python-dateutil==2.7.0
python-editor==1.0.3
pytz==2018.3
six==1.11.0
SQLAlchemy==1.2.5
Werkzeug==0.14.1
```

#### Configuration Settings

In the `main` package create a file called `config.py` with the following content:

```
import os




basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious_secret_key')
    DEBUG = False


class DevelopmentConfig(Config):
    
    
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_main.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_test.db')
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    DEBUG = False
    
    


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY
```

The configuration file contains three environment setup classes which includes `testing`, `development`, and `production`.

We will be using the [application factory pattern](http://flask.pocoo.org/docs/0.12/patterns/appfactories/) for creating our Flask object. This pattern is most useful for creating multiple instances of our application with different settings. This facilitates the ease at which we switch between our testing, development and production environment by calling the `create_app` function with the required parameter.

In the `__init__.py` file inside the `main` package, enter the following lines of code:

```
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

from .config import config_by_name

db = SQLAlchemy()
flask_bcrypt = Bcrypt()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])
    db.init_app(app)
    flask_bcrypt.init_app(app)

    return app
```

#### Flask Script

Now let’s create our application entry point. In the root directory of the project, create a file called `manage.py` with the following content:

```
import os
import unittest

from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from app.main import create_app, db

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

app.app_context().push()

manager = Manager(app)

migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)

@manager.command
def run():
    app.run()

@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    manager.run()
```

The above code within `manage.py` does the following:

-   `line 4` and `5` imports the migrate and manager modules respectively (we will be using the migrate command soon).
-   `line 9` calls the `create_app` function we created initially to create the application instance with the required parameter from the environment variable which can be either of the following - `dev`, `prod`, `test`. If none is set in the environment variable, the default `dev` is used.
-   `line 13` and `15` instantiates the manager and migrate classes by passing the `app` instance to their respective constructors.
-   In `line 17`,we pass the `db` and `MigrateCommand`instances to the `add_command` interface of the `manager`to expose all the database migration commands through Flask-Script.
-   `line 20` and `25` marks the two functions as executable from the command line.

> __Flask-Migrate exposes two classes, `Migrate` and `MigrateCommand`. The `Migrate`class contains all the functionality of the extension. The `MigrateCommand` class is only used when it is desired to expose database migration commands through the Flask-Script extension.__

At this point, we can test the application by running the command below in the project root directory.

```
python manage.py run
```

If everything is okay, you should see something like this:

![](https://cdn-media-1.freecodecamp.org/images/1*5_9GQCi5Z7J13iUbp82bHw.png)

#### Database Models and Migration

Now let’s create our models. We will be using the `db` instance of the sqlalchemy to create our models.

The `db` instance contains all the functions and helpers from both `****sqlalchemy****`and `[****sqlalchemy.orm****](http://docs.sqlalchemy.org/en/latest/orm/scalar_mapping.html#module-sqlalchemy.orm)` and it provides a class called `Model` that is a declarative base which can be used to declare models.

In the `model` package, create a file called `user.py` with the following content:

```
from .. import db, flask_bcrypt

class User(db.Model):
    """ User Model for storing user related details """
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)
    admin = db.Column(db.Boolean, nullable=False, default=False)
    public_id = db.Column(db.String(100), unique=True)
    username = db.Column(db.String(50), unique=True)
    password_hash = db.Column(db.String(100))

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return flask_bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self):
        return "<User '{}'>".format(self.username)
```

The above code within `user.py` does the following:

-   `line 3:` The `user` class inherits from `db.Model` class which declares the class as a model for sqlalchemy.
-   `line 7` through `13` creates the required columns for the user table.
-   `line 21` is a setter for the field `password_hash` and it uses `flask-bcrypt`to generate a hash using the provided password.
-   `line 24` compares a given password with already saved`password_hash`.

Now to generate the database table from the `user` model we just created, we will use `migrateCommand` through the `manager` interface. For `manager`to detect our models, we will have to import the`user` model by adding below code to `manage.py` file:

```
...
from app.main.model import user
...
```

Now we can proceed to perform the **migration** by running the following commands on the project root directory:

1.  Initiate a migration folder using `init` command for alembic to perform the migrations.

```
python manage.py db init
```

2\. Create a migration script from the detected changes in the model using the `migrate` command. This doesn’t affect the database yet.

```
python manage.py db migrate --message 'initial database migration'
```

3\. Apply the migration script to the database by using the `upgrade` command

```
python manage.py db upgrade
```

If everything runs successfully, you should have a new sqlLite database  
`flask_boilerplate_main.db` file generated inside the main package.

> Each time the database model changes, repeat the `migrate` and `upgrade` commands

### Testing

#### Configuration

To be sure the setup for our environment configuration is working, let’s write a couple of tests for it.

Create a file called `test_config.py` in the test package with the content below:

```
import os
import unittest

from flask import current_app
from flask_testing import TestCase

from manage import app
from app.main.config import basedir


class TestDevelopmentConfig(TestCase):
    def create_app(self):
        app.config.from_object('app.main.config.DevelopmentConfig')
        return app

    def test_app_is_development(self):
        self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
        self.assertTrue(app.config['DEBUG'] is True)
        self.assertFalse(current_app is None)
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] == 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_main.db')
        )


class TestTestingConfig(TestCase):
    def create_app(self):
        app.config.from_object('app.main.config.TestingConfig')
        return app

    def test_app_is_testing(self):
        self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
        self.assertTrue(app.config['DEBUG'])
        self.assertTrue(
            app.config['SQLALCHEMY_DATABASE_URI'] == 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_test.db')
        )


class TestProductionConfig(TestCase):
    def create_app(self):
        app.config.from_object('app.main.config.ProductionConfig')
        return app

    def test_app_is_production(self):
        self.assertTrue(app.config['DEBUG'] is False)


if __name__ == '__main__':
    unittest.main()
```

Run the test using the command below:

```
python manage.py test
```

You should get the following output:

![](https://cdn-media-1.freecodecamp.org/images/1*6_E40FN6IFz5EtwL1JqQTw.png)

#### User Operations

Now let’s work on the following user related operations:

-   creating a new user
-   getting a registered user with his `public_id`
-   getting all registered users.

**User Service class:** This class handles all the logic relating to the user model.  
In the `service` package, create a new file `user_service.py` with the following content:

```
import uuid
import datetime

from app.main import db
from app.main.model.user import User


def save_new_user(data):
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        new_user = User(
            public_id=str(uuid.uuid4()),
            email=data['email'],
            username=data['username'],
            password=data['password'],
            registered_on=datetime.datetime.utcnow()
        )
        save_changes(new_user)
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'User already exists. Please Log in.',
        }
        return response_object, 409


def get_all_users():
    return User.query.all()


def get_a_user(public_id):
    return User.query.filter_by(public_id=public_id).first()


def save_changes(data):
    db.session.add(data)
    db.session.commit()
```

The above code within `user_service.py` does the following:

-   `line 8` through `29` creates a new user by first checking if the user already exists; it returns a success `response_object` if the user doesn’t exist else it returns an error code `409` and a failure `response_object`.
-   `line 33` and `37` return a list of all registered users and a user object by providing the `public_id` respectively.
-   `line 40` to `42` commits the changes to database.

> No need to use [jsonify](http://flask.pocoo.org/docs/0.12/api/#module-flask.json) for formatting an object to JSON, Flask-restplus does it automatically

In the `main` package, create a new package called `util` . This package will contain all the necessary utilities we might need in our application.

In the `util` package, create a new file `dto.py`. As the name implies, the data transfer object ([DTO](https://en.wikipedia.org/wiki/Data_transfer_object)) will be responsible for carrying data between processes. In our own case, it will be used for marshaling data for our API calls. We will understand this better as we proceed.

```
from flask_restplus import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')
    user = api.model('user', {
        'email': fields.String(required=True, description='user email address'),
        'username': fields.String(required=True, description='user username'),
        'password': fields.String(required=True, description='user password'),
        'public_id': fields.String(description='user Identifier')
    })
```

The above code within `dto.py` does the following:

-   `line 5` creates a new namespace for user related operations. Flask-RESTPlus provides a way to use almost the same pattern as [Blueprint](http://exploreflask.com/en/latest/blueprints.html#what-is-a-blueprint). The main idea is to split your app into reusable namespaces. A namespace module will contain models and resources declaration.
-   `line 6` creates a new user dto through the `model` interface provided by the `api` namespace in `line 5`.

**User Controller:** The user controller class handles all the incoming HTTP requests relating to the user .

Under the `controller` package, create a new file called `user_controller.py` with the following content:

```
from flask import request
from flask_restplus import Resource

from ..util.dto import UserDto
from ..service.user_service import save_new_user, get_all_users, get_a_user

api = UserDto.api
_user = UserDto.user


@api.route('/')
class UserList(Resource):
    @api.doc('list_of_registered_users')
    @api.marshal_list_with(_user, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_users()

    @api.response(201, 'User successfully created.')
    @api.doc('create a new user')
    @api.expect(_user, validate=True)
    def post(self):
        """Creates a new User """
        data = request.json
        return save_new_user(data=data)


@api.route('/<public_id>')
@api.param('public_id', 'The User identifier')
@api.response(404, 'User not found.')
class User(Resource):
    @api.doc('get a user')
    @api.marshal_with(_user)
    def get(self, public_id):
        """get a user given its identifier"""
        user = get_a_user(public_id)
        if not user:
            api.abort(404)
        else:
            return user
```

`line 1` through `8` imports all the required resources for the user controller.  
We defined two concrete classes in our user controller which are  
`userList` and `user`. These two classes extends the abstract flask-restplus resource.

> _Concrete resources should extend from this class_ _and expose methods for each supported HTTP method._ _If a resource is invoked with an unsupported HTTP method,_ _the API will return a response with status 405 Method Not Allowed._ _Otherwise the appropriate method is called and passed all arguments_ _from the URL rule used when adding the resource to an API instance._

The `api` namespace in `line 7` above provides the controller with several decorators which includes but is not limited to the following:

-   api.****route****: __A decorator to route resources__
-   api.****marshal\_with****: __A decorator specifying the fields to use for serialization (This is where we use the__ `__userDto__` __we created earlier)__
-   api.****marshal\_list\_with****: __A shortcut decorator for__ `__marshal_with__` __above with__`__as_list = True__`
-   api.****doc****: __A decorator to add some api documentation to the decorated object__
-   api.****response:**** __A decorator to specify one of the expected responses__
-   api.****expect:**** __A decorator to Specify the expected input model ( we still use the__ `__userDto__` __for the expected input)__
-   api.****param:**** __A decorator to specify one of the expected parameters__

We have now defined our namespace with the user controller. Now its time to add it to the application entry point.

In the `__init__.py` file of `app` package, enter the following:

```

from flask_restplus import Api
from flask import Blueprint

from .main.controller.user_controller import api as user_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
          version='1.0',
          description='a boilerplate for flask restplus web service'
          )

api.add_namespace(user_ns, path='/user')
```

The above code within `blueprint.py` does the following:

-   In `line 8`, we create a blueprint instance by passing `name` and `import_name.` `API` is the main entry point for the application resources and hence needs to be initialized with the `blueprint` in `line 10`.
-   In `line 16` , we add the user namespace `user_ns` to the list of namespaces in the `API` instance.

We have now defined our blueprint. It’s time to register it on our Flask app.  
Update `manage.py` by importing `blueprint` and registering it with the Flask application instance.

```
from app import blueprint
...

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.register_blueprint(blueprint)

app.app_context().push()

...
```

We can now test our application to see that everything is working fine.

```
python manage.py run
```

Now open the URL `[http://127.0.0.1:5000](http://127.0.0.1:5000/)` in your browser. You should see the swagger documentation.

![](https://cdn-media-1.freecodecamp.org/images/1*Us_S2WLR3AQAyfOvkzZ38Q.png)

Let’s test the **create new user** endpoint using the swagger testing functionality.

![](https://cdn-media-1.freecodecamp.org/images/1*x3oZjCsUXVHjP4_YgndmFA.png)

You should get the following response

![](https://cdn-media-1.freecodecamp.org/images/1*ITTWVn8rJbIG-muhQCXsWg.png)

#### Security and Authentication

Let’s create a model `blacklistToken` for storing blacklisted tokens. In the `models` package, create a `blacklist.py` file with the following content:

```
from .. import db
import datetime


class BlacklistToken(db.Model):
    """
    Token Model for storing JWT tokens
    """
    __tablename__ = 'blacklist_tokens'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    blacklisted_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, token):
        self.token = token
        self.blacklisted_on = datetime.datetime.now()

    def __repr__(self):
        return '<id: token: {}'.format(self.token)

    @staticmethod
    def check_blacklist(auth_token):
        
        res = BlacklistToken.query.filter_by(token=str(auth_token)).first()
        if res:
            return True
        else:
            return False
```

Lets not forget to migrate the changes to take effect on our database.  
Import the `blacklist` class in `manage.py`.

```
from app.main.model import blacklist
```

Run the `migrate` and `upgrade` commands

```
python manage.py db migrate --message 'add blacklist table'

python manage.py db upgrade
```

Next create `blacklist_service.py` in the service package with the following content for blacklisting a token:

```
from app.main import db
from app.main.model.blacklist import BlacklistToken


def save_token(token):
    blacklist_token = BlacklistToken(token=token)
    try:
        
        db.session.add(blacklist_token)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully logged out.'
        }
        return response_object, 200
    except Exception as e:
        response_object = {
            'status': 'fail',
            'message': e
        }
        return response_object, 200
```

Update the `user` model with two static methods for encoding and decoding tokens. Add the following imports:

```
import datetime
import jwt
from app.main.model.blacklist import BlacklistToken
from ..config import key
```

-   Encoding

```
def encode_auth_token(self, user_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                key,
                algorithm='HS256'
            )
        except Exception as e:
            return e
```

-   Decoding: Blacklisted token, expired token and invalid token are taken into consideration while decoding the authentication token.

```
  @staticmethod  
  def decode_auth_token(auth_token):
        """
        Decodes the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, key)
            is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            if is_blacklisted_token:
                return 'Token blacklisted. Please log in again.'
            else:
                return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'
```

Now let’s write a test for the `user` model to ensure that our `encode` and `decode` functions are working properly.

In the `test` package, create `base.py` file with the following content:

```
from flask_testing import TestCase
from app.main import db
from manage import app


class BaseTestCase(TestCase):
    """ Base Tests """

    def create_app(self):
        app.config.from_object('app.main.config.TestingConfig')
        return app

    def setUp(self):
        db.create_all()
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
```

The `BaseTestCase` sets up our test environment ready before and after every test case that extends it.

Create `test_user_medol.py` with the following test cases:

```
import unittest
import datetime

from app.main import db
from app.main.model.user import User
from app.test.base import BaseTestCase


class TestUserModel(BaseTestCase):

    def test_encode_auth_token(self):
        user = User(
            email='test@test.com',
            password='test',
            registered_on=datetime.datetime.utcnow()
        )
        db.session.add(user)
        db.session.commit()
        auth_token = user.encode_auth_token(user.id)
        self.assertTrue(isinstance(auth_token, bytes))

    def test_decode_auth_token(self):
        user = User(
            email='test@test.com',
            password='test',
            registered_on=datetime.datetime.utcnow()
        )
        db.session.add(user)
        db.session.commit()
        auth_token = user.encode_auth_token(user.id)
        self.assertTrue(isinstance(auth_token, bytes))
        self.assertTrue(User.decode_auth_token(auth_token.decode("utf-8") ) == 1)


if __name__ == '__main__':
    unittest.main()
```

Run the test with `python manage.py test`. All the tests should pass.

Let’s create the ****authentication endpoints**** for ****login**** and ****logout****.

-   First we need a `dto` for the login payload. We will use the auth dto for the `@expect` annotation in `login` endpoint. Add the code below to the `dto.py`

```
class AuthDto:
    api = Namespace('auth', description='authentication related operations')
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True, description='The email address'),
        'password': fields.String(required=True, description='The user password '),
    })
```

-   Next, we create an authentication helper class for handling all authentication related operations. This `auth_helper.py` will be in the service package and will contain two static methods which are `login_user` and `logout_user`

> __When a user is logged out, the user’s token is blacklisted ie the user can’t log in again with that same token.__

```
from app.main.model.user import User
from ..service.blacklist_service import save_token


class Auth:

    @staticmethod
    def login_user(data):
        try:
            
            user = User.query.filter_by(email=data.get('email')).first()
            if user and user.check_password(data.get('password')):
                auth_token = user.encode_auth_token(user.id)
                if auth_token:
                    response_object = {
                        'status': 'success',
                        'message': 'Successfully logged in.',
                        'Authorization': auth_token.decode()
                    }
                    return response_object, 200
            else:
                response_object = {
                    'status': 'fail',
                    'message': 'email or password does not match.'
                }
                return response_object, 401

        except Exception as e:
            print(e)
            response_object = {
                'status': 'fail',
                'message': 'Try again'
            }
            return response_object, 500

    @staticmethod
    def logout_user(data):
        if data:
            auth_token = data.split(" ")[1]
        else:
            auth_token = ''
        if auth_token:
            resp = User.decode_auth_token(auth_token)
            if not isinstance(resp, str):
                
                return save_token(token=auth_token)
            else:
                response_object = {
                    'status': 'fail',
                    'message': resp
                }
                return response_object, 401
        else:
            response_object = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return response_object, 403
```

-   Let us now create endpoints for `login` and `logout` operations.  
    In the controller package, create  
    `auth_controller.py` with the following contents:

```
from flask import request
from flask_restplus import Resource

from app.main.service.auth_helper import Auth
from ..util.dto import AuthDto

api = AuthDto.api
user_auth = AuthDto.user_auth


@api.route('/login')
class UserLogin(Resource):
    """
        User Login Resource
    """
    @api.doc('user login')
    @api.expect(user_auth, validate=True)
    def post(self):
        
        post_data = request.json
        return Auth.login_user(data=post_data)


@api.route('/logout')
class LogoutAPI(Resource):
    """
    Logout Resource
    """
    @api.doc('logout a user')
    def post(self):
        
        auth_header = request.headers.get('Authorization')
        return Auth.logout_user(data=auth_header)
```

-   At this point the only thing left is to register the auth `api` namespace with the application `Blueprint`

Update `__init__.py` file of `app` package with the following

```

from flask_restplus import Api
from flask import Blueprint

from .main.controller.user_controller import api as user_ns
from .main.controller.auth_controller import api as auth_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
          version='1.0',
          description='a boilerplate for flask restplus web service'
          )

api.add_namespace(user_ns, path='/user')
api.add_namespace(auth_ns)
```

Run the application with `python manage.py run` and open the url `[http://127.0.0.1:5000](http://127.0.0.1:5000/)` in your browser.

The swagger documentation should now reflect the newly created `auth` namespace with the `login` and `logout` endpoints.

![](https://cdn-media-1.freecodecamp.org/images/1*K4ZVMOwsOIIzBOV8bfqJew.png)

Before we write some tests to ensure our authentication is working as expected, let’s modify our registration endpoint to automatically login a user once the registration is successful.

Add the method `generate_token` below to `user_service.py`:

```
def generate_token(user):
    try:
        
        auth_token = user.encode_auth_token(user.id)
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.',
            'Authorization': auth_token.decode()
        }
        return response_object, 201
    except Exception as e:
        response_object = {
            'status': 'fail',
            'message': 'Some error occurred. Please try again.'
        }
        return response_object, 401
```

The `generate_token` method generates an authentication **token** by encoding the user `id.` This **token** is the returned as a response.

Next, replace the **return** block in `save_new_user` method below

```
response_object = {
    'status': 'success',
    'message': 'Successfully registered.'
}
return response_object, 201
```

with

```
return generate_token(new_user)
```

Now its time to test the `login` and `logout` functionalities. Create a new test file `test_auth.py` in the test package with the following content:

```
import unittest
import json
from app.test.base import BaseTestCase


def register_user(self):
    return self.client.post(
        '/user/',
        data=json.dumps(dict(
            email='example@gmail.com',
            username='username',
            password='123456'
        )),
        content_type='application/json'
    )


def login_user(self):
    return self.client.post(
        '/auth/login',
        data=json.dumps(dict(
            email='example@gmail.com',
            password='123456'
        )),
        content_type='application/json'
    )


class TestAuthBlueprint(BaseTestCase):

    def test_registered_user_login(self):
            """ Test for login of registered-user login """
            with self.client:
                
                user_response = register_user(self)
                response_data = json.loads(user_response.data.decode())
                self.assertTrue(response_data['Authorization'])
                self.assertEqual(user_response.status_code, 201)

                
                login_response = login_user(self)
                data = json.loads(login_response.data.decode())
                self.assertTrue(data['Authorization'])
                self.assertEqual(login_response.status_code, 200)

    def test_valid_logout(self):
        """ Test for logout before token expires """
        with self.client:
            
            user_response = register_user(self)
            response_data = json.loads(user_response.data.decode())
            self.assertTrue(response_data['Authorization'])
            self.assertEqual(user_response.status_code, 201)

            
            login_response = login_user(self)
            data = json.loads(login_response.data.decode())
            self.assertTrue(data['Authorization'])
            self.assertEqual(login_response.status_code, 200)

            
            response = self.client.post(
                '/auth/logout',
                headers=dict(
                    Authorization='Bearer ' + json.loads(
                        login_response.data.decode()
                    )['Authorization']
                )
            )
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
```

Visit the [github repo](https://github.com/cosmic-byte/flask-restplus-boilerplate) for a more exhaustive test cases.

So far, we have successfully created our endpoints, implemented login and logout functionalities but our endpoints remains unprotected.

We need a way to define rules that determines which of our endpoint is open or requires authentication or even an admin privilege.

We can achieve this by creating custom decorators for our endpoints.

Before we can protect or authorize any of our endpoints, we need to know the currently logged in user. We can do this by pulling the `Authorization token` from the header of the current request by using the flask library `request.`We then decode the user details from the `Authorization token`.

In the `Auth` class of `auth_helper.py` file, add the following static method:

```
@staticmethod
def get_logged_in_user(new_request):
        
        auth_token = new_request.headers.get('Authorization')
        if auth_token:
            resp = User.decode_auth_token(auth_token)
            if not isinstance(resp, str):
                user = User.query.filter_by(id=resp).first()
                response_object = {
                    'status': 'success',
                    'data': {
                        'user_id': user.id,
                        'email': user.email,
                        'admin': user.admin,
                        'registered_on': str(user.registered_on)
                    }
                }
                return response_object, 200
            response_object = {
                'status': 'fail',
                'message': resp
            }
            return response_object, 401
        else:
            response_object = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return response_object, 401
```

Now that we can retrieve the logged in user from the request, let’s go ahead and create the `decorators.`

Create a file `decorator.py` in the `util` package with the following content:

```
from functools import wraps
from flask import request

from app.main.service.auth_helper import Auth


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):

        data, status = Auth.get_logged_in_user(request)
        token = data.get('data')

        if not token:
            return data, status

        return f(*args, **kwargs)

    return decorated


def admin_token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):

        data, status = Auth.get_logged_in_user(request)
        token = data.get('data')

        if not token:
            return data, status

        admin = token.get('admin')
        if not admin:
            response_object = {
                'status': 'fail',
                'message': 'admin token required'
            }
            return response_object, 401

        return f(*args, **kwargs)

    return decorated
```

For more information about **decorators** and how to create them, take a look at [this link](https://realpython.com/primer-on-python-decorators/).

Now that we have created the decorators `token_required` and `admin_token_required` for valid token and for an admin token respectively, all that is left is to annotate the endpoints which we wish to protect with the freecodecamp orgappropriate **decorator**.

Currently to perform some tasks in our application, we are required to run different commands for starting the app, running tests, installing dependencies etc. We can automate those processes by arranging all the commands in one file using `Makefile.`

On the root directory of the application, create a `Makefile` with no file extension. The file should contain the following:

```
.PHONY: clean system-packages python-packages install tests run all

clean:
   find . -type f -name '*.pyc' -delete
   find . -type f -name '*.log' -delete

system-packages:
   sudo apt install python-pip -y

python-packages:
   pip install -r requirements.txt

install: system-packages python-packages

tests:
   python manage.py test

run:
   python manage.py run

all: clean install tests run
```

Here are the options of the make file.

1.  `make install` : installs both system-packages and python-packages
2.  `make clean` : cleans up the app
3.  `make tests` : runs the all the tests
4.  `make run` : starts the application
5.  `make all` : performs `clean-up`,`installation` , run `tests` , and `starts` the app.

### Extending the App & Conclusion

It’s pretty easy to copy the current application structure and extend it to add more functionalities/endpoints to the App. Just view any of the previous routes that have been implemented.

_Feel free to leave a comment have you any question, observations or recommendations. Also, if this post was helpful to you, click on the clap icon so others will see this here and benefit as well._

Visit the [github repository](https://github.com/cosmic-byte/flask-restplus-boilerplate) for the complete project.

Thanks for reading and good luck!

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](
