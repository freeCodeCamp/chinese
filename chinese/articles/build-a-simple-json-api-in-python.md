> * 原文地址：[How to build a JSON API with Python](https://www.freecodecamp.org/news/build-a-simple-json-api-in-python/)
> * 原文作者：Peter Gleeson
> * 译者：fearlessfe
> * 校对者：miyaliu666


![如何使用 Python 构建 JSON API](https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

[JSON API规范][1]是一种用于客户端和和服务器之间通信的方式。它使用JSON格式来限定两者之间请求和响应的格式。

作为一种数据格式，JSON 具有轻量和可读的优势。这使得它非常快速、高效。JSON 规范旨在最大限度的减少客户端和服务端之间请求的数量及发送的数据量。

本文将介绍如何使用 Python 和 Flask 构建基本的 JSON API，以及如何实现一些符合 JSON API 规范的特性。

[Flask][2]是一个为web开发提供“微框架”的Python库。它非常适合快速开发，因为它的核心功能简单且可拓展。

下面是一个展示如何使用 Flask 来发送类 JSON 响应的基础示例

```python
from flask import Flask

app = Flask(name)
@app.route('/')
def example():
   return '{"name":"Bob"}'

```

本文将使用两个 Flask 的附加组件:

- [Flask-REST-JSONAPI][3] 帮助开发严格遵循 JSON 规范的 API。
- [Flask-SQLAlchemy][4] 使用 [SQLAlchemy][5] 使得创建一个简单的数据库并与之交互变得非常简单。

### 概览

本文最终目标是创建允许客户端与底层数据库交互的 API 。在客户端和数据库之间还可以分为数据抽象层和资源管理器层。

![](https://www.freecodecamp.org/news/content/images/2019/07/flow.png)

以下是大致的步骤：

1. 使用 Flask-SQLAlchemy 定义数据库
2. 使用 [Marshmallow-JSONAPI][6] 创建数据抽象
3. 使用 Flask-REST-JSONAPI 创建资源管理器
4. 使用 Flask 创建 URL 端口并启动服务端

这个例子将使用简单的模式来描述现代艺术家及其不同艺术品之间的关系。

### 安装依赖

在开始之前，你需要配置项目。这包括创建工作空间和虚拟环境，安装依赖模块，创建 Python 入口文件以及数据库文件。

在命令行中新建一个文件夹并进入该文件夹。

```
$ mkdir flask-jsonapi-demo
$ cd flask-jsonapi-demo/
```

为每个 Python 项目创建[创建虚拟环境][7]是一种很好的做法。你可以跳过此步骤，但是强烈建议你不跳过。
```
$ python -m venv .venv
$ source .venv/bin/activate

```

在创建并激活虚拟环境后，你就可以为该项目安装所需的依赖模块。

```
$ pip install flask-rest-jsonapi flask-sqlalchemy
```

你只需要安装 Flask 和 SQLAlchemy 这两个拓展。

下一步是为项目创建 Python 入口文件和数据库文件。

```
$ touch application.py artists.db
```

### 创建数据库结构

在这里，你将修改 `application.py` 文件来定义并创建项目的数据库结构。

用你喜欢的文本编辑器打开 `application.py` 文件。首先导入一些模块。为清楚起见，模块将在使用的时候导入。

接下来，创建一个名为 `app` 的 Flask 实例对象。

之后，使用 SQLAlchemy 连接到你创建的数据库文件。最后一步是定义并创建一个名为 `artists` 的表。

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

### 创建数据抽象层

下一步使用 [Marshmallow-JSONAPI][8] 模块在刚定义的表上创建逻辑数据抽象层。

创建此抽象层的原因很简单。通过 API 可以让你更好的控制底层数据的访问。可以把这层想象成一个镜头，通过这个镜头，API 调用者很简单就能够了解底层数据。

![](https://www.freecodecamp.org/news/content/images/2019/07/Untitled-Diagram-Page-2.png)

在下面的代码中，数据抽象层是一个继承 Marshmallow-JSONAPI 模块中 `Schema` 类的类。通过 API，它可以提供对 "artists" 表中单个记录和多个记录的访问。

在代码块中，`Meta` 类定义了一些元数据。具体来说，`artist_one` 是访问单个记录的 URL 端点名称，其中每个艺术家由 URL 参数 `id` 标识。`artist_many` 是访问多条记录的 URL 端点名称。

其余的属性和 artists 表中的列相关联。这里，通过 API 你可以进一步控制每列数据的访问方式。

例如，当发出 POST 请求向数据库中添加新的艺术家时，你可以设置 `required=True` 来确保 `name` 字段为必填的。

并且如果由于任何原因你不希望在 GET 请求中返回 `birth_year` 字段，你可以为该字段设置 `load_only=True`。

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

### 创建资源管理器和URL端点

最后一个难题是为每个路由 (/artists, /artists/id) 创建资源管理器和对应的端点。

每个资源管理器被定义为一个继承自 Flask-REST-JSONAPI 中 `ResourceList` 和 `ResourceDetail` 类的类。

这里他们有两个属性。`schema` 用于表示资源管理器使用的数据抽象层，`data_layer` 表示将用于数据层的会话和数据模型。

接下来，将 `api` 定义为 Flask-REST-JSONAPI 的 `Api` 类的实例，并使用 `api.route()` 创建API的路由。 该方法有三个参数——数据抽象层类，端点名称和 URL 路径。

最后一步是编写主函数，并在调试模式下启动应用。调试模式非常适合开发，但它不适合在生产中运行。

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

### 发送 GET 和 POST 请求

现在你可以开始使用 API 来[发送 HTTP 请求][9]。 这可以来自 web 浏览器，或来自 curl 等命令行工具，或来自其他程序（例如，使用 Requests 库的 Python 脚本）。

运行 `application.py` 脚本来启动服务器：

```
$ python application.py
```

在浏览器中，打开 [http://localhost:5000/artists][10]。你将会看到数据库中所有数据以 JSON 格式输出。除此之外，什么也没有。

你可以发送 POST 请求来向数据库添加记录。其中一种方式是在命令行中使用 curl。或者，你可以使用 [Insomnia] [11]之类的工具，或者编写一个使用表单发送数据的简单 HTML 用户界面。

在命令行中使用 [curl][12] ：
```
curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artist", "attributes":{"name":"Salvador Dali", "birth_year":1904, "genre":"Surrealism"}}}' http://localhost:5000/artists
```

现在，如果你导航到 [http://localhost:5000/artists][14]，你将看到刚刚添加的记录。如果你要添加更多记录，它们也将在这里显示，因为这个 URL 路径调用 `artists_many` 端点。

您可以导航到相关的 URL 来通过 `id` 编号查看单个艺术家。 例如，要查看第一位艺术家，请打开 [http://localhost:5000/artists/1][15]。

### 过滤和排序

JSON API 规范的一个有用功能是能够通过在URL中定义一些参数以更有用的方式返回响应结果。例如，你可以根据选定的字段对结果进行排序，也可以根据某些条件进行过滤。

Flask-REST-JSONAPI 内置了该功能。

要按出生年份排序艺术家，只需导航到 [http://localhost:5000/artists?sort=birth\_year][16]。 在Web应用程序中，这将使你无需在客户端对结果进行排序，这在性能方面成本很高，因此会影响用户体验。

实现过滤也很容易。将筛选条件以方括号的形式添加到 URL 末尾。包括以下三个字段：

-  "name"- 过滤的字段（比如 `birth_year`）
-  "op" - 过滤操作符（等于，大于，小于等）
-  "val" - 过滤的值（例如 1990）

例如，下面的 URL 将检索出生年份大于1900的艺术家：

[http://localhost:5000/artists?filter=\[{"name":"birth\_year","op":"gt","val":1900}\]][17]

此功能使得在调用API时仅检索相关信息变得更加容易。这对于提高性能很有价值，尤其是在较慢的网络环境查询大量数据时。

### 分页

JSON API 另外一个可以提升性能的特性是分页。这使得大量数据可以通过多个页面返回，而不是一次性发送。你可以在 URL 中控制请求的页数和每页数据量。

因此，例如，您可以在 10 页上收到 100 个结果，而不是一次性加载所有 100 个结果。第一页将包含 1-10 条结果，第二页将包含 11-20 条结果，依此类推

要指定每页接收的结果数，可以将参数 ?page[size]=X 添加到 URL，其中 X 是每页结果数。 Flask-REST-JSONAPI 使用 30 作为每页默认数量。

要请求指定的页码，可以添加参数 ?page[number]=X，其中是页码数。您可以组合这两个参数，如下所示：

[http://localhost:5000/artists?page\[size\]=2&page\[number\]=2][18]

此 URL 将请求第二页数据，每页两条结果。这将返回整体数据的第三和第四条结果。

### 关联表查询

通常，一个表中的数据与存储在另一个表中的数据相关。例如，如果你有一张艺术家的表，你可能也需要一张艺术品表。每件艺术品都与创作它的艺术家相对应。

JSON API 规范使关系数据处理更简单，通过使用 Flask-REST-JSONAPI 将艺术品表格添加到数据库，以及将艺术家和艺术品关联起来的时候，你就能感受到它的优势。

要演示艺术作品的例子，需要对 `application.py` 中的代码进行一些更改。

首先，导入一些模块，然后创建一个新表格，将艺术家与艺术品关联起来：

```python
from marshmallow_jsonapi.flask import Relationship
from flask_rest_jsonapi import ResourceRelationship

```

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

这为艺术品表定义了一个抽象层，并将艺术家和艺术品之间的关系添加到了 `ArtistSchema` 类。

接下来，定义一个新的资源管理器，以便一次性访问多个艺术品，或者一次访问一个艺术品，以及访问艺术家和艺术品之间的关系。

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

最后，添加一些新的端点：

```python
api.route(ArtworkOne, 'artwork_one', '/artworks/<int:id>')
api.route(ArtworkMany, 'artwork_many', '/artworks')
api.route(ArtistArtwork, 'artist_artworks',
    '/artists/<int:id>/relationships/artworks')
```

运行 `application.py` 并试着从命令行用 curl 发送一些数据：

```
curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artwork", "attributes":{"title":"The Persistance of Memory", "artist_id":1}}}' http://localhost:5000/artworks
```

这将创建一个艺术品并与 id 为 1 的艺术家相关联。

在浏览器中打开 [http://localhost:5000/artists/1/relationships/artworks][20] 。将显示 id 为 1 的艺术家的作品。这样一来，你不需要写更复杂的带参数的 URL，就可以根据 `artist_id` 来过滤艺术品。

另一个特性是能够在调用 `artists_one` 端点的响应中包含相关结果：

[http://localhost:5000/artists/1?include=artworks][21]

这将返回艺术家端点的结果，也会返回艺术家作品的结果。

### 稀疏字段组

最后一个值得提的功能是——稀疏字段组。在处理具有复杂关联关系的大型数据资源时，返回结果的大小呈爆炸式增长。仅仅查询你感兴趣的字段往往很有帮助。

JSON API 规范允许你向 URL 中添加参数来实现该功能。以下面的 URL 为例，该 URL 返回指定艺术家及其作品。但是，它只返回作品的 title 字段，而不是所有的作品字段。

[http://localhost:5000/artists/1?include=artworks&fields\[artwork\]=title][22]

同样，这对于提升性能特别有帮助，特别是在较慢的网络环境。一般来说，你应该只向服务器发送你所需要的最少数量的数据。

### 总结

JSON API 规范是一个非常有用的框架，用于以干净，灵活的格式在服务器和客户端之间发送数据。本文通过在 Python 中使用 Flask-REST-JSONAPI 库的例子，向你概述了你可以用它来做什么。

那么接下来你会做什么？有很多种可能性。本文中的示例只是一个简单的概念验证，只有两个表和它们之间的单一关系。你可以根据需要开发复杂的应用程序，并使用此处提供的所有工具创建功能强大的 API 以与其进行交互。

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
