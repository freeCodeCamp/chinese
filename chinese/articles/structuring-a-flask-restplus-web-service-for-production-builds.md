> -   原文地址：[How to structure a Flask-RESTPlus web service for production builds. Python Flask-RESTPlus 工程化实践](https://www.freecodecamp.org/news/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563/)
> -   原文作者：Greg Obinna
> -   译者：Zhicheng Chen
> -   校对者：



![How to structure a Flask-RESTPlus web service for production builds](https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg)

在本指南中，将逐步介绍构建用于测试、开发和生产环境的 Flask RESTPlus Web 应用程序的方法。 将使用基于 Linux 的操作系统（Ubuntu），但是大多数步骤都可以在 Windows 和 Mac 上执行。

在继续阅读本指南之前，你应该对 Python 编程语言和 Flask 框架有基本的了解。 如果你不熟悉这些内容，建议阅读介绍性文章 - [如何使用 Python 和 Flask 构建 Web 应用程序。](https://medium.freecodecamp.org/how-to-use-python-and-flask-to-build-a-web-app-an-in-depth-tutorial-437dbfe9f1c6)

#### 本指南的结构

本指南分为以下几部分：

-   [功能](#features)
-   [Flask-RESTPlus 是什么？](#what-is-flask-restplus)
-   [安装和配置](#setup-and-installation)
-   [项目配置和结构](#project-setup-and-organization)
-   [配置设定](#configuration-settings)
-   [Flask Script](#flask-script)
-   [数据库 Model 和迁移](#database-models-and-migration)
-   [测试](#testing)
-   [配置](#configuration)
-   [User 操作](#user-operations)
-   [安全与认证](#security-and-authentication)
-   [拓展 & 结论](#extending-the-app-conclusion)

#### 功能

项目将涉及以下功能和扩展。

-   [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io/):  _一个 Flask 扩展，提供了 bcrypt 散列功能。_
-   [Flask-Migrate](https://flask-migrate.readthedocs.io/): _一个使用 Alembic 为 Flask 应用处理 SQLAlchemy 数据库迁移的扩展，可以通过 Flask 的命令行接口或者 Flask-Scripts 对数据库进行操作。_
-   [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/): _一个 [Flask](http://flask.pocoo.org) 扩展，给应用添加了 [SQLAlchemy](http://www.sqlalchemy.org) 支持。_
-   [PyJWT](https://pyjwt.readthedocs.io/): _可以编码解码 JSON Web Tokens (JWT) 的 Python 库。JWT 是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准（(RFC 7519)。_
-   [Flask-Script](https://flask-script.readthedocs.io/): _一个提供了向 Flask 插入外部脚本的功能的扩展，它可以运行除 web 应用之外的命令行任务。_
-   [Namespaces](http://flask-restplus.readthedocs.io/en/stable/scaling.html) ([Blueprints](http://exploreflask.com/en/latest/blueprints.html))
-   [Flask-restplus](https://flask-restplus.readthedocs.io/)
-   UnitTest

#### Flask-RESTPlus 是什么？

Flask-RESTPlus 是 Flask 的扩展，可以通过它快速构建 REST API。 Flask-RESTPlus 最佳实践鼓励配置尽可能少。它提供了大量的装饰器和工具来描述 API，并以文档化的形式将这些接口展现出来（通过 Swagger 来实现）。

#### 安装和配置

在 Terminal 中输入命令 `pip --version` 来检查是否已安装 pip，然后回车。

```shell
pip --version
```

如果终端输出版本号，表示已安装 pip，可以继续执行下一步，否则请[先安装 pip](https://pip.pypa.io/en/latest/installing/)，如果使用 Linux 包管理器，可以在终端上运行以下命令，回车。选择 Python 2.x 或 3.x 版本。

-   Python 2.x

```shell
sudo apt-get install python-pip
```

-   Python 3.x

```shell
sudo apt-get install python3-pip
```

设置 virtual  环境或 virtual 环境 wrapper（只需要其中之一，取决于上面安装的版本）：

```shell
sudo pip install virtualenv

sudo pip3 install virtualenvwrapper
```

请按照[此链接](https://medium.com/@gitudaniel/installing-virtualenvwrapper-for-python3-ad3dfea7c717)进行 virtual 环境 wrapper 的完整设置。

通过在终端上执行以下命令来创建新环境并激活它：

```shell
mkproject name_of_your_project
```

#### 项目配置和结构

这里使用[功能性结构](http://exploreflask.com/zh-CN/latest/blueprints.html#functional-structure)通过文件的功能来组织项目文件。在功能结构里，模板、静态文件、视图在三个不同的目录中。

在项目目录中，创建一个名为 `app` 的新包。 在 `app` 内部，创建两个包 `main` 和 `test`。 目录结构如下。

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

接下来使用功能结构来模块化应用程序。

在 `main` 包中，再创建三个包，即：`controller`，`service` 和 `model`。 `model` 包将包含所有的数据库模型，而 `service` 包将包含应用程序的所有业务逻辑，最后 `controller` 包将包含所有的应用程序接口。 现在，树结构应如下所示：

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

现在，来安装所需的软件包。 确保已激活创建的 virtual  环境，并在终端上运行以下命令：

```shell
pip install flask-bcrypt

pip install flask-restplus

pip install Flask-Migrate

pip install pyjwt

pip install Flask-Script

pip install flask_testing
```

通过运行以下命令来创建/更新 `requirements.txt` 文件：

```shell
pip freeze > requirements.txt
```

生成的 `requirements.txt` 文件应该如下：

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

#### 配置设定

在 `main` 包中创建一个名为 `config.py` 的文件，内容如下：

```python
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

配置文件包含三个环境设置 class，其中包括 `testing`、`development` 和  `production`。

这里将使用[应用程序工厂模式](http://flask.pocoo.org/docs/0.12/patterns/appfactories/)创建 Flask 对象。在对不同的配置创建多个实例时这个模式很方便。通过传入必填参数调用 `create_app` 函数，可以方便地在测试、开发和生产环境之间进行切换。

在 `main` 包内的 `__init__.py` 文件中，输入以下代码：

```python
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

现在，创建应用程序入口点。在项目的根目录中，创建一个名为 `manage.py` 的文件，其内容如下：

```python
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

上面的 `manage.py` 中的代码做了以下操作：

-   `line 4`和 `5` 分别导入 migration 和 manager 模块（很快会用到 migration 命令）。
-   `line 9` 调用开始创建的 `create_app` 函数，使用环境变量中的必添参数创建应用程序实例，该参数可以是 - `dev`、`prod` 或 `test`。 如果环境变量中未设置任何值，则默认使用 `dev`。
-   `line 13`  和 `15` 将 app 实例传递给它们各自的构造函数来实例化 manager 和 migrate class。
-   在 `line 17` 中，将 `db` 和 `MigrateCommand` 实例传递给 `manager` 的 `add_command` 接口，以通过 Flask-Script 暴露所有数据库迁移命令。
-   `line 20` 和 `25` 将这两个函数标记为可从命令行执行函数。

> _Flask-Migrate 暴露了两个 class，`Migrate` 和 `MigrateCommand`。 `Migrate` class 包含扩展的所有功能。 `MigrateCommand` class 仅在需要通过 Flask-Script 扩展公开数据库迁移命令时使用。_

此时，可以通过在项目根目录中运行以下命令来测试应用程序。

```
python manage.py run
```

如果一切正常，应该会看到类似以下内容：

![](https://cdn-media-1.freecodecamp.org/images/1*5_9GQCi5Z7J13iUbp82bHw.png)

#### 数据库 Model 和迁移

现在，开始创建模型。 这里使用 sqlalchemy 的 `db` 实例来创建模型。

`db` 实例包含 **sqlalchemy ** 和 **[sqlalchemy.orm](http://docs.sqlalchemy.org/en/latest/orm/scalar_mapping.html#module-sqlalchemy.orm)**，它提供了一个名为 Model 的 class，该 class 是用于声明 model 的基础性声明。

在 `model` 包中，创建一个名为 `user.py` 的文件，其内容如下：

```python
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

上面的 `user.py` 代码执行以下操作：

-   `line 3:` `user`  class 继承自 `db.Model` class，声明为 sqlalchemy 的模型。
-   `line7` 行到 `13` 会为 user 表创建所需的列。
-   `line 21` 是 `password_hash` 字段的 setter，它使用 `flask-bcrypt` 来使用提供的密码来生成哈希。
-   `line 24` 将给定的密码和已经保存的 `password_hash` 进行比较。

现在要从刚刚创建的 `user` model 生成数据库表，将通过 `manager` 接口的 `migrateCommand` 来生成。 为了使 `manager` 能够检测到我们的 model，我们必须通过在 `manage.py` 文件中添加以下代码来导入 `user` 模型：

```python
...
from app.main.model import user
...
```

现在，可以通过在项目根目录上运行以下命令来继续执行 **migration**：

1\. 使用 `init` 命令启动一个迁移文件夹以使 Alembic 执行迁移。

```shell
python manage.py db init
```

2\. 使用 `migrate` 命令检测 model 的更改并创建迁移脚本。这不会影响数据库。

```python
python manage.py db migrate --message 'initial database migration'
```

2\. 使用 `upgrade` 命令将迁移脚本应用于数据库

```python
python manage.py db upgrade
```

如果一切顺利运行，则应该创建了一个新的 sqlite 数据库，并在主包内生成一个`flask_boilerplate_main.db` 文件。

> 每次数据库模型更改时，都执行一次 `migrate` 和 `upgrade` 命令

### 测试

#### 配置

为确保的环境配置的设置没问题，来编写一些测试。

在测试包中创建一个名为 `test_config.py` 的文件，其内容如下：

```python
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

使用以下命令运行测试：

```shell
python manage.py test
```

应该会看到以下输出：

![](https://cdn-media-1.freecodecamp.org/images/1*6_E40FN6IFz5EtwL1JqQTw.png)

#### User 操作

现在，来做如下与 user 相关的操作：

-   创建一个新 user
-   通过 user 的 `public_id` 获取一个已注册的 user
-   获取所有的注册 user

**User Service class：**此 class 处理与 user model 有关的所有逻辑。
在 `service` 包中，创建一个具有以下内容的新文件 `user_service.py`：

```python
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

上面的 `user_service.py` 中的代码执行以下操作：

-   `line 8` 到 `29` 首先检查该 user 是否已存在然后在创建新 user；如果 user 不存在，则返回成功的 `response_object`，否则返回错误代码 `409`  和失败的 `response_object`。
-   `line 33` 和 `37` 分别通过提供 `public_id` 返回所有注册用户的列表和一个用户的对象。
-   `line 40` 到 `42` 将更改提交到数据库。

> 无需在使用 [jsonify](http://flask.pocoo.org/docs/0.12/api/#module-flask.json) 将对象格式化为 JSON，Flask-restplus 会自动将其格式化

在 `main` 包中，创建一个名为 `util` 的新包。 该软件包将包含我们在应用程序中可能需要的所有必要工具。

在 `util` 包中，创建一个新文件 `dto.py`。顾名思义，就是数据传输对象（[DTO](https://en.wikipedia.org/wiki/Data_transfer_object)）将负责在进程之间传递数据。在这里，它将用于封装 API 调用的数据。在使用中会更容易理解。

```python
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

上面的 `dto.py` 中代码执行以下操作：

-   `line 5` 为与 user 相关的操作创建了一个新的命名空间。Flask-RESTPlus 提供了一种使用几乎与[蓝图](http://exploreflask.com/en/latest/blueprints.html#what-is-a-blueprint)模式相同的的方法。主要思想是将应用拆分为可重用的命名空间。命名空间模块将包含 models 和资源声明。
-   `line 6` 通过 `line 5` 中的 `api` 命名空间提供的 `model` 接口创建了新用户的 dto。

**User Controller：** User Controller class 处理所有传入 HTTP 的与 user 有关的请求。

在  `controller` 包下，创建一个名为 `user_controller.py` 的新文件，其内容如下：

```python
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

`line 1` 到 `8` 行会导入 user controller 所需的所有资源。在 user controller 中定义了两个具体的 class，分别是 `userList` 和 `user`。 这两个 class 扩展了抽象的 flask-restplus 资源。

> _具体资源应从此 class 扩展并暴露每个支持的 HTTP 方法。如果使用不支持的 HTTP 方法调用资源，则 API 将返回状态为 405 Method Not Allowe 的响应。否则，将调用适当的方法并在将资源添加到 API 实例时传递所有的 URL 参数_。

上面 `line 7`中的 `api` 命名空间为 controller 提供了多个装饰器，包括但不限于以下几种：

-   api.**route**: __route 资源的装饰器__
-   api.**marshal\_with**: __一个用来指定需要序列化字段的装饰器 (就是用到的之前创建的 `__userDto__` )__
-   api.**marshal\_list\_with**: __`as_list = True__` 上面的 `__marshal_with__` 的快捷装饰器__
-   api.**doc**: __用于向装饰对象添加 api 文档的装饰器__
-   api.**response:** __用于指定预期的一个响应的装饰器__
-   api.**expect:**__一个装饰器，用于指定预期的输入 model（仍然使用__`__userDto__` __作为预期的输入）的装饰器__
-   api.**param:** __指定一个预期参数的装饰器__

现在，已经使用 user controller 定义了命名空间。 现在是时候将其添加到应用程序入口了。

在 `app` 包的 `__init__.py` 文件中，输入以下内容：

```python

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

上面的  `blueprint.py`  代码执行以下操作：

-   在 `line 8` 中，通过传入 `name` 和 `import_name` 来创建一个蓝图实例。`API` 是应用程序资源的主要入口，因此需要在 `line 10` 中使用 `blueprint` 进行初始化。
-   在 `line 16` 中，将 user 命名空间 `user_ns` 添加到 API 实例中的命名空间列表中。

现在，已经定义了蓝图。 现在是时候在 Flask 应用中注册它了。
更新 `manage.py`，导入 `blueprint` 并将其注册到 Flask 应用程序实例中。

```python
from app import blueprint
...

app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.register_blueprint(blueprint)

app.app_context().push()

...
```

现在测试一下的应用程序，看看是否一切正常。

```shell
python manage.py run
```

现在，在浏览器中打开 URL [http://127.0.0.1:5000](http://127.0.0.1:5000/)。 应该可以看到 swagger 的文档。

![](https://cdn-media-1.freecodecamp.org/images/1*Us_S2WLR3AQAyfOvkzZ38Q.png)

让我们使用 swagger 的测试功能来测试 **create new user** 接口。

![](https://cdn-media-1.freecodecamp.org/images/1*x3oZjCsUXVHjP4_YgndmFA.png)

应该会得到如下响应

![](https://cdn-media-1.freecodecamp.org/images/1*ITTWVn8rJbIG-muhQCXsWg.png)

#### 安全与认证

创建一个 `blacklistToken` model 来存储列入黑名单的 tokens。 在 `models` 包中，创建具有以下内容的 `blacklist.py`文件：

```python
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

别忘了 migrate  所做的更改以对数据库生效。
在 `manage.py` 中导入 `blacklist` 类。

```
from app.main.model import blacklist
```

运行 `migrate` 和 `upgrade` 命令

```shell
python manage.py db migrate --message 'add blacklist table'

python manage.py db upgrade
```

接下来，在服务包中创建内容如下的 `blacklist_service.py`，以将令牌列入黑名单：

```python
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

使用编码和解码令牌的静态方法来更新 `user` 模型。 添加以下导入：

```python
import datetime
import jwt
from app.main.model.blacklist import BlacklistToken
from ..config import key
```

-   编码

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

-   解码：在对身份验证令牌进行解码时，会考虑列入黑名单的令牌、过期的令牌和无效的令牌。

```python
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

现在，为 `user` model 编写一个测试，以确保 `encode` 和 `decode` 功能运行正常。

在 `test` 包中，创建内容如下的 `base.py` 文件：

```python
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

`BaseTestCase` 在扩展它的每个测试用例之前和之后设置了测试环境。

使用以下测试用例创建 `test_user_medol.py`：

```python
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

使用 `python manage.py test` 运行测试。 所有测试都应该通过。

来为 `login` 和 `logout`  创建一个 **authentication endpoints**。

-   首先，我们需要一个 `dto` 作为登录 payload。 将在登录端点的 `@expect` 注解中使用 auth dto。 将下面的代码添加到 `dto.py` 中

```python
class AuthDto:
    api = Namespace('auth', description='authentication related operations')
    user_auth = api.model('auth_details', {
        'email': fields.String(required=True, description='The email address'),
        'password': fields.String(required=True, description='The user password '),
    })
```

-   接下来，创建一个身份验证 helper 类，以处理所有与身份验证相关的操作。 该 `auth_helper.py` 将包含在服务包中，并将包含两个静态方法，分别是 `login_user` 和 `logout_user`。

> __用户退出登录后，该用户的令牌将被列入黑名单，即该用户无法使用该令牌再次登录。__

```python
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

-   现在让为 `login` 和 `logout` 操作创建 API。在 controller 包中，创建具有以下内容的 `auth_controller.py`：

```python
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

-   此时，剩下的事情就是向应用程序 `Blueprint` 注册 auth `api`  命名空间。

如下更新 `app` 软件包的 `__init __.py` 文件

```python

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

使用 `python manage.py run` 运行应用程序，然后在浏览器中打开网址 [http://127.0.0.1:5000](http://127.0.0.1:5000/)。

swagger 文档现在应该展示出新创建的带有 `login` 和 `logout` 接口的 `auth`命名空间。

![](https://cdn-media-1.freecodecamp.org/images/1*K4ZVMOwsOIIzBOV8bfqJew.png)

在编写测试以确保身份验证能够正常工作之前，先修改注册接口，以在 user 注册成功后自动登录。

将下面的方法 `generate_token` 添加到 `user_service.py` 中：

```python
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

`generate_token` 方法通过对用户 `id` 进行编码来生成身份验证**令牌**。此**令牌**作为响应返回。

接下来，在下面的 `save_new_user` 方法中替换 **return** 代码块

```python
response_object = {
    'status': 'success',
    'message': 'Successfully registered.'
}
return response_object, 201
```

为

```python
return generate_token(new_user)
```

现在该测试 `login` 和 `logout` 功能了。在测试包中创建一个具有以下内容的新测试文件 `test_auth.py`：

```python
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

请访问 [github repo](https://github.com/cosmic-byte/flask-restplus-boilerplate) 以获得更详尽的测试用例。

到目前为止，我们已经成功创建了接口，实现了登录和注销功能，但是接口仍然不受保护。

我们需要一种定义规则的方法，该规则确定接口是开放的的还是需要身份验证甚至是管理员特权才能访问。

可以通过为接口创建自定义装饰器来实现。

在可以保护或授权任何接口之前，需要知道当前登录的用户。为此，可以使用 flask 库的 `request` 从当前请求的 header 中提取 `Authorization token` 。然后，我们将从  `Authorization token` 中解码用户详细信息。

在 `auth_helper.py` 文件的 `Auth` 类中，添加以下静态方法：

```python
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

现在可以从请求中检索已登录的用户，来继续创建 `decorators`。

在 `util` 包中创建一个文件 `decorator.py`，内容如下：

```python
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

有关 **decorators** 及其创建方法的更多信息，请查看[这个链接](https://realpython.com/primer-on-python-decorators/)。

现在已经分别为有效令牌和管理员令牌创建了装饰器 `token_required` 和 `admin_token_required`，剩下的就是用 freecodecamp orgappropriate  **decorator** 为希望保护的接口添加注解。

当前，要在应用程序中执行某些任务，需要运行不同的命令来启动应用程序、运行测试、安装依赖项等。可以使用 `Makefile` 将所有命令放在一个文件中来批量执行。

在应用程序的根目录上，创建一个没有文件扩展名的 `Makefile`。 该文件应包含以下内容：

```makefile
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

这是 make file 的选项。

1.  `make install` : 安装 system-packages 以及 python-packages
2.  `make clean` : 清理 app
3.  `make tests` : 运行所有 tests
4.  `make run` : 启动所有 application
5.  `make all` : 执行 `clean-up`、`installation` 、 运行 `tests` ，并 `starts`  app.

### 拓展 & 结论

复制当前应用程序架构并对其进行扩展，为该应用程序添加更多功能/接口非常容易。 只需查看之前已实施的路由即可。

如有任何问题，意见或建议，请随时发表评论。 另外，如果该帖子对您有所帮助，请单击"再看"图标，这样其他人也会看到并受益。

请访问 [github 仓库](https://github.com/cosmic-byte/flask-restplus-boilerplate)，以获取完整的项目。

感谢阅读，祝进步！

___

免费学习编码。 freeCodeCamp 的开源课程已帮助 40,000 多人获得了开发人员的工作。 [开始使用](https://www.freecodecamp.org/learn/)
