> * 原文地址：[How to build a JSON API with Python](https://www.freecodecamp.org/news/build-a-simple-json-api-in-python/)
> * 原文作者：Peter Gleeson
> * 译者：fearlessfe
> * 校对者：


![How to build a JSON API with Python](https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

The  [JSON API specification][1]  is a powerful way for enabling communication between client and server. It specifies the structure of the requests and responses sent between the two, using the JSON format.

JSON API规范是一种用于客户端和和服务器之间通信的方式。它使用JSON格式来限定两者之间请求和响应的结构。

As a data format, JSON has the advantages of being lightweight and readable. This makes it very easy to work with quickly and productively. The specification is designed to minimise the number of requests and the amount of data that needs sending between client and server.

作为一种数据格式，JSON具有轻量和可读的优势。这使得它非常快速、高效。JSON规范旨在最大限度的减少客户端和服务端之间请求的数量及数据量。

Here, you can learn how to create a basic JSON API using Python and Flask. Then, the rest of the article will show you how to try out some of the features the JSON API specification has to offer.

在这里，你可以学习如何使用Python和Flask构建基本的JSON API。然后，本文剩余部分将会向你展示如何试着去实现一些符合JSON API规范的特性。

[Flask is a Python library][2]  that provides a 'micro-framework' for web development. It is great for rapid development as it comes with a simple-yet-extensible core functionality.

[Flask][2]是一个为web开发提供“微框架”的Python库。它非常适合快速开发，因为它具有简单但可拓展的核心功能。

A really basic example of how to send a JSON-like response using Flask is shown below:

下面是一个展示如何使用Flask来发送类JSON响应的基础示例

```python
from flask import Flask

app = Flask(name)
@app.route('/')
def example():
   return '{"name":"Bob"}'

```

This article will use two add-ons for Flask:

本文将使用两个Flask的附加组件:

-   [Flask-REST-JSONAPI][3]  will help develop an API that closely follows the JSON API specification.
-   [Flask-SQLAlchemy][4]  will use  [SQLAlchemy][5]  to make creating and interacting with a simple database very straightforward.

- [Flask-REST-JSONAPI][3] 帮助开发严格遵循JSON规范的API
- [Flask-SQLAlchemy][4] 使用 [SQLAlchemy][5] 使得创建一个简单的数据库并与之交互变得非常简单。

### The big picture

### 概览

The end goal is to create an API that allows client-side interaction with an underlying database. There will be a couple of layers between the database and the client - a data abstraction layer and a resource manager layer.

最终目标是创建允许客户端与底层数据库交互的API。在客户端和数据库之间有几层——数据抽象层和资源管理器层。

![](https://www.freecodecamp.org/news/content/images/2019/07/flow.png)

Here's an overview of the steps involved:

以下是大致的步骤：

1.  Define a database using Flask-SQLAlchemy
2.  Create a data abstraction with  [Marshmallow-JSONAPI][6]
3.  Create resource managers with Flask-REST-JSONAPI
4.  Create URL endpoints and start the server with Flask

1. 使用 Flask-SQLAlchemy 定义数据库
2. 使用 [Marshmallow-JSONAPI][6] 创建数据抽象
3. 使用 Flask-REST-JSONAPI 创建资源管理器
4. 创建 URL 端口并启动 Flask 服务

This example will use a simple schema describing modern artists and their relationships to different artworks.

这个例子将使用简单的模式来描述现代艺术家及其不同艺术品之间的关系。

### Install everything

### 安装依赖

Before getting started, you'll need to set up the project. This involves creating a workspace and virtual environment, installing the modules required, and creating the main Python and database files for the project.

在开始之前，你需要配置项目。这涉及创建工作空间和虚拟环境，安装依赖模块，创建Python入口文件以及数据库文件。

From the command line create a new directory and navigate inside.

在命令行中新建一个文件夹并进入该文件夹。

```
$ mkdir flask-jsonapi-demo
$ cd flask-jsonapi-demo/
```

It is good practice to  [create virtual environments][7]  for each of your Python projects. You can skip this step, but it is strongly recommended.

为每个Python项目创建[创建虚拟环境][7]是一种很好的做法。你可以跳过此步骤，但是强烈建议你不跳过。
```
$ python -m venv .venv
$ source .venv/bin/activate

```

Once your virtual environment has been created and activated, you can install the modules needed for this project.

一旦创建并激活虚拟环境后，你就可以为该项目安装所需的依赖模块。

```
$ pip install flask-rest-jsonapi flask-sqlalchemy
```

Everything you'll need will be installed as the requirements for these two extensions. This includes Flask itself, and SQLAlchemy.
你需要安装 Flask 和 SQLAlchemy 这两个拓展。

The next step is to create a Python file and database for the project.

下一步是为项目创建Python入口文件和数据库文件。

```
$ touch application.py artists.db
```

### Create the database schema

### 创建数据库结构

Here, you will start modifying  `application.py`  to define and create the database schema for the project.

在这里，你将修改 "application.py" 文件来定义并创建项目的数据库结构。

Open  `application.py`  in your preferred text editor. Begin by importing some modules. For clarity, modules will be imported as you go.

用你喜欢的文本编辑器打开 "application.py" 文件。首先导入一些模块。为清楚起见，模块将随时导入。

Next, create an object called  `app`  as an instance of the Flask class.

接下来，创建一个名为 "app" 的Flask实例对象。

After that, use SQLAlchemy to connect to the database file you created. The final step is to define and create a table called  `artists`.

之后，使用SQLAlchemy连接到你创建的数据库文件。最后一步是定义并创建一个名为 "artists" 的表。

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# Create a new Flask application
app = Flask(name)
# Set up SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////artists.db'
db = SQLAlchemy(app)
# Define a class for the Artist table
class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    birth_year = db.Column(db.Integer)
    genre = db.Column(db.String)

```

### Creating an abstraction layer
### 创建数据抽象层

The next step uses the  [Marshmallow-JSONAPI][8]  module to create a logical data abstraction over the tables just defined.
下一步使用 [Marshmallow-JSONAPI][8] 模块在刚定义的表上创建逻辑数据抽象层。

The reason to create this abstraction layer is simple. It gives you more control over how your underlying data is exposed via the API. Think of this layer as a lens through which the API client can view the underlying data clearly, and only the bits they need to see.
创建此抽象层的原因很简单。通过API可以让你更好的控制底层数据的访问。可以把这层想象成一个镜头，通过这个镜头，API调用者很简单就能够了解底层数据。

![](https://www.freecodecamp.org/news/content/images/2019/07/Untitled-Diagram-Page-2.png)

In the code below, the data abstraction layer is defined as a class which inherits from Marshmallow-JSONAPI's  `Schema`  class. It will provide access via the API to both single records and multiple records from the artists table.
在下面的代码中，数据抽象层是一个继承 Marshmallow-JSONAPI 模块中 Schema 类的类。通过API，它可以提供对"artists"表中单个记录和多个记录的访问。

Inside this block, the  `Meta`  class defines some metadata. Specifically, the name of the URL endpoint for interacting with single records will be  `artist_one`, where each artist will be identified by a URL parameter  `<id>`. The name of the endpoint for interacting with many records will be  `artist_many`.
在代码块中，"Meta"类定义了一些元数据。具体来说，'artist_one'是访问单个记录的URL端口名称，其中每个艺术家由URL参数"id"标识。'artist_many'是访问多条记录的URL端口名称。

The remaining attributes defined relate to the columns in the artists table. Here, you can control further how each is exposed via the API.

其余的属性和artists表中的列相关联。这里，通过API你可以进一步控制每列数据的访问方式。

For example, when making POST requests to add new artists to the database, you can make sure the  `name`  field is mandatory by setting  `required=True`.

例如，当发出POST请求向数据库中添加新的艺术家时，你可以设置‘required=True’来确保‘name’字段为必填的。

And if for any reason you didn't want the  `birth_year`  field to be returned when making GET requests, you can specify so by setting  `load_only=True`.

并且如果由于任何原因你不希望在GET请求中返回‘birth_year’字段，你可以为该字段设置‘load_only=True’。

```python
from marshmallow_jsonapi.flask import Schema
from marshmallow_jsonapi import fields
# Create data abstraction layer
class ArtistSchema(Schema):
    class Meta:
        type_ = 'artist'
        self_view = 'artist_one'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'artist_many'
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">id</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
name <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Str<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>required<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
birth_year <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>load_only<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
genre <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Str<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

### Create resource managers and URL endpoints
### 创建资源管理器和URL端口

The final piece of the puzzle is to create a resource manager and corresponding endpoint for each of the routes /artists and /artists/id.
最后一个难题是为每个路由(/artists, /artists/id)创建资源管理器和对应的endpoint。

Each resource manager is defined as a class that inherits from the Flask-REST-JSONAPI classes  `ResourceList`  and  `ResourceDetail`.
每个资源管理器被定义为一个继承自Flask-REST-JSONAPI中`ResourceList`和`ResourceDetail`类的类。

Here they take two attributes.  `schema`  is used to indicate the data abstraction layer the resource manager uses, and  `data_layer`  indicates the session and data model that will be used for the data layer.
这里他们有两个属性。 `schema`用于表示资源管理器使用的数据抽象层，`data_layer`表示将用于数据层的会话和数据模型。

Next, define  `api`  as an instance of Flask-REST-JSONAPI's  `Api`  class, and create the routes for the API with  `api.route()`. This method takes three arguments - the data abstraction layer class, the endpoint name, and the URL path.

接下来，将`api`定义为Flask-REST-JSONAPI的`Api`类的实例，并使用`api.route（）`创建API的路由。 该方法有三个参数 - 数据抽象层类，端点名称和URL路径。

The last step is to write a main loop to launch the app in debug mode when the script is run directly. Debug mode is great for development, but it is not suitable for running in production.

最后一步是编写主函数，并在调试，模式下启动应用。 调试模式非常适合开发，但它不适合在生产中运行。

```python
# Create resource managers and endpoints
from flask_rest_jsonapi import Api, ResourceDetail, ResourceList
class ArtistMany(ResourceList):
    schema = ArtistSchema
    data_layer = {'session': db.session,
                  'model': Artist}
class ArtistOne(ResourceDetail):
    schema = ArtistSchema
    data_layer = {'session': db.session,
                  'model': Artist}
api = Api(app)
api.route(ArtistMany, 'artist_many', '/artists')
api.route(ArtistOne, 'artist_one', '/artists/<int:id>')

```

### Make GET and POST requests
### 发送GET和POST请求

Now you can start using the API to  [make HTTP requests][9]. This could be from a web browser, or from a command line tool like curl, or from within another program (e.g., a Python script using the Requests library).
现在你可以开始使用API来[发送HTTP请求] [9]。 这可以来自web浏览器，或来自curl等命令行工具，或来自其他程序（例如，使用Requests库的Python脚本）。

To launch the server, run the  `application.py`  script with:
运行以下脚本来启动服务器：
```
$ python application.py
```

In your browser, navigate to  [http://localhost:5000/artists][10]. You will see a JSON output of all the records in the database so far. Except, there are none.
在浏览器中，打开[http://localhost:5000/artists][10] 。你将会看到数据库中所有数据以JSON格式输出。除此之外，什么也没有。

To start adding records to the database, you can make a POST request. One way of doing this is from the command line using curl. Alternatively, you could use a tool like  [Insomnia][11], or perhaps code up a simple HTML user interface that posts data using a form.
你可以发送POST请求来向数据库添加记录。其中一种方式是在命令行中使用curl。或者，你可以使用[Insomnia] [11]之类的工具，或者编写一个使用表单发送数据的简单HTML用户界面。


With  [curl][12], from the command line:
在命令行中使用 [curl][12] ：
```
curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artist", "attributes":{"name":"Salvador Dali", "birth_year":1904, "genre":"Surrealism"}}}' http://localhost:5000/artists
```

Now if you navigate to  [http://localhost:5000/artists][14], you will see the record you just added. If you were to add more records, they would all show here as well, as this URL path calls the  `artists_many`  endpoint.
现在，如果你导航到[http：// localhost：5000 / artists] [14]，你将看到刚刚添加的记录。如果你要添加更多记录，它们也将在这里显示，因为这个URL路径调用`artists_many`endpoint。

To view just a single artist by their  `id`  number, you can navigate to the relevant URL. For example, to see the first artist, try  [http://localhost:5000/artists/1][15].
您可以导航到相关的URL来通过“id”编号查看单个艺术家。 例如，要查看第一位艺术家，请尝试[http：// localhost：5000 / artists / 1] [15]。

### Filtering and sorting
### 过滤和排序

One of the neat features of the JSON API specification is the ability to return the response in more useful ways by defining some parameters in the URL. For instance, you can sort the results according to a chosen field, or filter based on some criteria.
JSON API规范的一个有用功能是能够通过在URL中定义一些参数以更有用的方式返回响应结果。 例如，你可以根据选定的字段对结果进行排序，也可以根据某些条件进行过滤。

Flask-REST-JSONAPI comes with this built in.
Flask-REST-JSONAPI内置了该功能。

To sort artists in order of birth year, just navigate to  [http://localhost:5000/artists?sort=birth\_year][16]. In a web application, this would save you from needing to sort results on the client side, which could be costly in terms of performance and therefore impact the user experience.
要按出生年份排序艺术家，只需导航到[http：//localhost：5000/artists？sort=birth\year] [16]。在Web应用程序中，这将使你无需在客户端对结果进行排序，这在性能方面成本很高，因此会影响用户体验。

Filtering is also easy. You append to the URL the criteria you wish to filter on, contained in square brackets. There are three pieces of information to include:

实现过滤也很容易。将筛选条件以方括号的形式添加到URL末尾。包括以下三条信息：

-   "name" - the field you are filtering by (e.g.,  `birth_year`)
-   "op" - the filter operation ("equal to", "greater than", "less than" etc.)
-   "val" - the value to filter against (e.g., 1900)
-  "name"- 过滤的字段（比如‘birth_year’）
-  "op" - 过滤操作符（等于，大于，小于等）
-  "val" - 过滤的值（例如 1990）

For example, the URL below retrieves artists whose birth year is greater than 1900:

例如，下面的URL检索出生年份大于1900的艺术家：

[http://localhost:5000/artists?filter=\[{"name":"birth\_year","op":"gt","val":1900}\]][17]

This functionality makes it much easier to retrieve only relevant information when calling the API. This is valuable for improving performance, especially when retrieving potentially large volumes of data over a slow connection.

此功能使得在调用API时仅检索相关信息变得更加容易。这对于提高性能很有价值，尤其是在较慢的网络环境查询大量数据时。
### Pagination
### 分页

Another feature of the JSON API specification that aids performance is pagination. This is when large responses are sent over several "pages", rather than all in one go. You can control the page size and the number of the page you request in the URL.

JSON API另外一个可以提升性能的特性是分页。这使得大量数据可以通过多个页面返回，而不是一次性发送。你可以在URL中控制请求的页数和每页数据量。

So, for example, you could receive 100 results over 10 pages instead of loading all 100 in one go. The first page would contain results 1-10, the second page would contain results 11-20, and so on.

因此，例如，您可以在10页上收到100个结果，而不是一次性加载所有100个结果。第一页将包含1-10条结果，第二页将包含11-20条结果，依此类推

To specify the number of results you want to receive per page, you can add the parameter ?page\[size\]=X to the URL, where X is the number of results. Flask-REST-JSONAPI uses 30 as the default page size.

要指定每页接收的结果数，可以将参数 ?page[size]=X 添加到URL，其中X是每页结果数。 Flask-REST-JSONAPI使用30作为默认页面数量。

To request a given page number, you can add the parameter ?page\[number\]=X, where is the page number. You can combine both parameters as shown below:

要请求指定的页码，可以添加参数 ?page[number]=X，其中是页码数。您可以组合这两个参数，如下所示：

[http://localhost:5000/artists?page\[size\]=2&page\[number\]=2][18]

This URL sets the page size to two results per page, and asks for the second page of results. This would return the third and fourth results from the overall response.

此URL将请求第二页数据，每页两条结果。这将返回整体数据的第三和第四条结果。

### Relationships
### 关联表查询

Almost always, data in one table will be related to data stored in another. For instance, if you have a table of artists, chances are you might also want a table of artworks. Each artwork is related to the artist who created it.

通常，一个表中的数据与存储在另一个表中的数据相关。例如，如果你有一张艺术家的表，你可能也需要一张艺术品表。每件艺术品都与创作它的艺术家有关。

The JSON API specification allows you to work with relational data easily, and the Flask-REST-JSONAPI lets you take advantage of this. Here, this will be demonstrated by adding an artworks table to the database, and including relationships between artist and artwork.

JSON API规范允许您轻松处理关系数据，Flask-REST-JSONAPI允许你利用此功能。在这里，将通过向数据库添加艺术品表来演示这一点，并包括艺术家和艺术品之间的关系。

To implement the artworks example, it will be necessary to make a few changes to the code in  `application.py`.
要演示艺术作品的例子，需要对`application.py`中的代码进行一些更改。

First, make a couple of extra imports, then create a new table which relates each artwork to an artist:
首先，一些额外的模块，然后创建一个艺术家与艺术品向关联的表格：

```python
from marshmallow_jsonapi.flask import Relationship
from flask_rest_jsonapi import ResourceRelationship

```

Next, rewrite the abstraction layer:
接下来，重写抽象层：

```python
# Create data abstraction 
class ArtistSchema(Schema):
    class Meta:
        type_ = 'artist'
        self_view = 'artist_one'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'artist_many'
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">id</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
name <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Str<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>required<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
birth_year <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>load_only<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
genre <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Str<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
artworks <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> Relationship<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>self_view <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'artist_artworks'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
    self_view_kwargs <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'id'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'&lt;id&gt;'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
    related_view <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'artwork_many'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
    many <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
    schema <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'ArtworkSchema'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span>
    type_ <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'artwork'</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>class ArtworkSchema(Schema):
    class Meta:
        type_ = 'artwork'
        self_view = 'artwork_one'
        self_view_kwargs = {'id': '<id>'}
        self_view_many = 'artwork_many'
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">id</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
title <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Str<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>required<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
artist_id <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> fields<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>Integer<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>required<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token boolean" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">True</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
```

This defines an abstraction layer for the artwork table, and adds a relationship between artist and artwork to the  `ArtistSchema`  class.

这为艺术品表定义了一个抽象层，并将艺术家和艺术品之间的关系添加到了“ArtistSchema”类。

Next, define new resource managers for accessing artworks many at once and one at a time, and also for accessing the relationships between artist and artwork.

接下来，为一次访问多个或一次访问一个艺术品和艺术家与艺术品之间的关系定义新的资源管理器。

```python
class ArtworkMany(ResourceList):
    schema = ArtworkSchema
    data_layer = {'session': db.session,
                  'model': Artwork}
class ArtworkOne(ResourceDetail):
    schema = ArtworkSchema
    data_layer = {'session': db.session,
                  'model': Artwork}

```

Finally, add some new endpoints:
最后，添加一些新的端点：

```python
api.route(ArtworkOne, 'artwork_one', '/artworks/<int:id>')
api.route(ArtworkMany, 'artwork_many', '/artworks')
api.route(ArtistArtwork, 'artist_artworks',
    '/artists/<int:id>/relationships/artworks')
```

Run  `application.py`  and trying posting some data from the command line via curl:
运行`application.py`并试着从命令行用curl发送一些数据：

```
curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artwork", "attributes":{"title":"The Persistance of Memory", "artist_id":1}}}' http://localhost:5000/artworks
```

This will create an artwork related to the artist with  `id=1`.
这将创建一个艺术品与id为1的艺术家相关联。

In the browser, navigate to  [http://localhost:5000/artists/1/relationships/artworks][20]. This should show the artworks related to the artist with  `id=1`. This saves you from writing a more complex URL with parameters to filter artworks by their  `artist_id`  field. You can quickly list all the relationships between a given artist and their artworks.
在浏览器中打开[http://localhost:5000/artists/1/relationships/artworks][20] 。将显示id为1的艺术家的作品。这样就可以避免去写更复杂的，带‘artist_id’参数的URL。还可以快速的列出给定艺术家和其艺术品之间的所有关系。

Another feature is the ability to include related results in the response to calling the  `artists_one`  endpoint:
另一个特性是能够在调用`artists_one`端点的响应中包含相关结果：
[http://localhost:5000/artists/1?include=artworks][21]

This will return the usual response for the artists endpoint, and also results for each of that artist's artworks.
这将返回艺术家端点的结果，也会返回艺术家作品的结果。

### Sparse Fields
### 稀疏字段组

One last feature worth mentioning - sparse fields. When working with large data resources with many complex relationships, the response sizes can blow up real fast. It is helpful to only retrieve the fields you are interested in.
最后一个值得提的功能是 - 稀疏字段组。在处理具有复杂关联关系的大型数据资源时，返回结果的大小呈爆炸式增长。仅仅查询你感兴趣的字段往往很有帮助。

The JSON API specification lets you do this by adding a fields parameter to the URL. For example URL below gets the response for a given artist and their related artworks. However, instead of returning all the fields for the given artwork, it returns only the title.
JSON API规范允许你向URL中添加参数来实现该功能。以下面的URL为例，该URL返回指定艺术家及其作品。但是，它只返回作品的title字段，而不是所有的作品字段。

[http://localhost:5000/artists/1?include=artworks&fields\[artwork\]=title][22]

This is again very helpful for improving performance, especially over slow connections. As a general rule, you should only make requests to and from the server with the minimal amount of data required.
同样，这对于提升性能特别有帮助，特别是在较慢的网络环境。作为通则，你应该只向服务器发送你所需要的最少数量的数据。
### Final remarks
### 总结

The JSON API specification is a very useful framework for sending data between server and client in a clean, flexible format. This article has provided an overview of what you can do with it, with a worked example in Python using the Flask-REST-JSONAPI library.

JSON API规范是一个非常有用的框架，用于以干净，灵活的格式在服务器和客户端之间发送数据。本文通过在Python中使用Flask-REST-JSONAPI库的例子，向你概述了你可以用它来做什么。

So what will you do next? There are many possibilities. The example in this article has been a simple proof-of-concept, with just two tables and a single relationship between them. You can develop an application as sophisticated as you like, and create a powerful API to interact with it using all the tools provided here.


那么接下来你会做什么？有很多种可能性。本文中的示例只是一个简单的概念验证，只有两个表和它们之间的单一关系。你可以根据需要开发复杂的应用程序，并使用此处提供的所有工具创建功能强大的API以与其进行交互。

Thanks for reading, and keep coding in Python!
谢谢阅读，keep coding in Python!


[1]: https://jsonapi.org/
[2]: https://flask.palletsprojects.com/en/1.1.x/
[3]: https://flask-rest-jsonapi.readthedocs.io/en/latest/
[4]: https://flask-sqlalchemy.palletsprojects.com/en/2.x/
[5]: https://www.sqlalchemy.org/
[6]: https://marshmallow-jsonapi.readthedocs.io/en/latest/
[7]: https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/
[8]: https://marshmallow-jsonapi.readthedocs.io/en/latest/
[9]: https://restfulapi.net/http-methods/
[10]: http://localhost:5000/artists
[11]: https://insomnia.rest/
[12]: https://curl.haxx.se/
[13]: http://localhost:5000/artists
[14]: http://localhost:5000/artists
[15]: http://localhost:5000/artists/1
[16]: http://localhost:5000/artists?sort=birth_year
[17]: http://localhost:5000/artists?filter=[{%22name%22:%22birth_year%22,%22op%22:%22gt%22,%22val%22:1900}]
[18]: http://localhost:5000/artists?page[size]=2&page[number]=1
[19]: http://localhost:5000/artworks
[20]: http://localhost:5000/artists/1/relationships/artworks
[21]: http://localhost:5000/artists/1?include=artworks
[22]: http://localhost:5000/artists/1?include=artworks&fields[artwork]=title
