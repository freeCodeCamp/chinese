> - 原文地址：[AJAX Tutorial: What AJAX Is and How to Use it 写给初学者的编程教程：ajax 是什么以及 ajax 如何使用](https://www.freecodecamp.org/news/ajax-tutorial/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![AJAX Tutorial: What AJAX Is and How to Use it](https://images.unsplash.com/photo-1557234396-e1506d9a85b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

## **什么是 AJAX**

**AJAX** 是 **Asynchronous JavaScript And XML** 的缩写。它不是一种编程语言。它是一种基于 HTML、CSS、JavaScript 和 XML，让开发更好、更快和更有互动的 Web 应用的技术。

1. HTML : 超文本标记语言（HTML）用于定义网络应用程序的结构。
2. CSS : 层叠样式表（CSS）用于为 Web 应用程序提供外观和样式。
3. JavaScript : JavaScript 用于使网络应用程序互动、提供趣味和提高用户友好性。
4. XML : 可扩展标记语言（XML）是一种用于存储和传输网络服务器数据的格式。

### AJAX 中的异步是什么意思

异步意味着网络应用程序可以从网络服务器发送和接收数据，而无需刷新页面。这个向服务器发送数据和接收服务器数据以及更新网页不同部分的后台过程，就是 AJAX 的异步属性/功能。

## AJAX 是如何工作的

AJAX 利用浏览器内置的 **XMLHttpRequest 对象** 从网络服务器请求数据，并利用 **HTML DOM** 显示或使用数据。

**XMLHttpRequest 对象** : 它是一个对象形式的 API，其方法用于网络浏览器和网络服务器之间传输数据。

**HTML DOM** : 当一个网页被加载时，浏览器会创建一个页面的文档对象模型。

**创建一个 XMLHttpRequest 对象 :**

```javascript
var xhttp = new XMLHttpRequest();
```

**XMLHttpRequest 对象的属性 :**

`readystate` 是 XMLHttpRequest 对象的一个属性，它是 XMLHttpRequest 的一种状态值。

- 0: 请求未被初始化
- 1: 服务器连接建立
- 2: 收到请求
- 3: 处理请求
- 4: 请求完成，响应准备就绪

`onreadystatechange`是 XMLHttpRequest 对象的一个属性，它定义了一个当 readyState 属性改变时要调用的函数。

`status` 是 XMLHttpRequest 对象的一个属性，用于返回一个请求的状态值。

- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"

**XMLHttpRequest 对象方法：** 为了向 Web 服务器发送请求，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法。

```javascript
xhttp.open('GET', 'content.txt', true);
xhttp.send();
```

**使用 JavaScript 创建一个函数 changeContent() :**

```javascript
function changeContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('foo').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'content.txt', true);
    xhttp.send();
}
```

**改变网页内容的 AJAX 实例 :**

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="foo">
            <h2>The XMLHttpRequest Object</h2>
            <button type="button" onclick="changeContent()">
                Change Content
            </button>
        </div>
        <script>
            function changeContent() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById(
                            'foo'
                        ).innerHTML = this.responseText;
                    }
                };
                xhttp.open('GET', 'content.txt', true);
                xhttp.send();
            }
        </script>
    </body>
</html>
```

文件 `content.txt` 应该存在于 Web 应用程序的根目录中。
