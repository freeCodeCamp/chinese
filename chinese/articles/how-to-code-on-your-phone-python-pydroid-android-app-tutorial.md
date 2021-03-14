> -   原文地址：[How to Build a Web App on Your Phone – Python & Pydroid Android App Tutorial](https://www.freecodecamp.org/news/how-to-code-on-your-phone-python-pydroid-android-app-tutorial/)
> -   原文作者：Precious Oladele
> -   译者：ZhichengChen
> -   校对者：

嘿，你好吗？ 我今年18岁，是一名后端开发人员，希望成为机器学习工程师。 在本文中，我会介绍如何使用 Python😁在手机上构建 Web 应用程序。 开始吧。

![](https://lh3.googleusercontent.com/TW_PdXBpgeWY4mLcHjFisp8e7Lk7Zsn1aFarXBkmvhEMP0XR5xzTDxhKcCizsrJ25rkPeMeWp7ctlG0Wy7_WFUS0bzT-JVJfpe6X_3OqnuE_df2q5B3KIrhl3EG47w3Dik3nIZE "Placeholder image")

## **必要条件**

要满足的第一个条件是拥有一台 Android 手机，至少是 6.0 或更高版本。 这就是所需要全部，很简单。

接下来，需要在手机上安装一个名为 pydroid 3 的移动应用程序。

![](https://lh6.googleusercontent.com/fwM9r46B-sTofVF6IybUOhCTYoM8vSAPfumfBIiiL_wWLQpgdQgeR2B_2-N28NtNLaA7HvTtsZxlXdX03anCGvbt4QAlhQ_wyb9_AIfqG9L4ZMCjQOrKLg5OFPeZgKrJdqKEeb8)

如你所见，pydroid3 是一个可在手机上编写 Python 的移动应用程序，因此请继续安装它。

接下来需要安装 Django。 如果你不熟悉Django，请查看[此处的 Django 文档](https://www.djangoproject.com/)。

要安装 Django，在 pydroid3 中打开侧边栏，然后选择 Terminal：

![](https://lh6.googleusercontent.com/qO3djIyoXMZB8MzcIaFDmNddhB2t9XgLLgCzonR2CDkWJc0pXtap9gyGhqZfpv0uFCCvtYnynL6pAOfgactlDfpwoy03TfgqEoN2W_gAO7nOeoaLbySZEQkOSBuprhs67jc-Ens)

然后单击它，如下：

![](https://lh3.googleusercontent.com/fTwNrfhCQpxKBFbrsN3B6dt4kFWvDUEJElZ897o-d21XbiYj42gZBLhiLMt7ffvSp44OQBrubC9jK62WvzneTlF-7WxcZZygHEqo4hmQ_9V42Pw4FgvdKB75EA3fv4q5nGZiL7k)

完成后，输入以下命令：

```python
pip install django
```

应该得到以下内容。 我的是 “requirements satisfied” 消息，因为我已经安装了它。

![](https://lh6.googleusercontent.com/vYhoSBXGgvq2EiX6iXQ1RBLrvUe8zQHM3Aq65ZDIDRKSOoLqOrW5QQWE5yQ-ThbhzYTb6kwKf_jHzVoQ79wTbz2KZNv32oEBX1LjAFeMYaiQb4bebYOWii-h1W3EKQkTWvgA2_Q)

它已成功安装，让我们确认一下。 在终端中输入 `django-admin`，然后按回车键。

信息如下：

![](https://lh5.googleusercontent.com/jU17O6AVeFcy6rYMJ0mp_DEqnR9q51F-mhLZH1K7Ny8tixSeY7Xl8Jx27hBfxWfHPimt-1xCfO6x2AOlvYKYR92slC3sBwJNRg9uDJsJ6had0Yq1UTXZ5_CQvfCwwKneKCO_Gp4)

这意味着它实际上已经安装了。

## 如何构建项目

让我们开始构建项目。 打开终端并输入以下命令：

`django-admin startproject myapp`

这会在根文件夹中创建一个名为 myapp 的 Django 应用程序。

通过输入 `cd myapp` 进入目录，然后输入 `python manage.py runserver`。 信息如下：

![](https://lh6.googleusercontent.com/fqO-uHACjoAXNQSrm5Pikjr-GQQkY3SbkE3G9Sgel1XZbePIf7hJaePd8yGxdrbYiyRdpeWCFUYBNo6iKMzTJqZg3s8j6CTGIoZYH-YJjT-tjHA0FCKtdGJEGzNy0Y8Qj5uTQrg)

现在服务器已启动。 接下来，要在浏览器中对其进行测试，请访问 [127.0.0.1:8000](http://127.0.0.1:8000)。

![](https://lh3.googleusercontent.com/oqMFGPasUPLxuZoRqWHQ9mEhpitsg2XK8XPzLz_U-TvnFGzjkIaHVKUHXxwYkMDskLp_36F75BIAb-qv37bHccUESSZ9Jqa6XV7FGoWYk_IS8SfPYZfMTSNmo2ei-SMVa9cp_C8)

Boom！ 您应该看到 Django 已成功安装。

我们需要做的下一件事是创建 Django 应用。 在 Django 中，项目文件夹就是根目录，而应用程序充当应用程序本身。

要创建 Django 应用，请确保仍在目录中，然后输入 `python manage.py startapp todo`。 这样会在 myapp 项目中创建一个 To\-do 应用程序，如下所示：

![](https://lh5.googleusercontentc.com/ycIZAg7VGJO4Auwc7z_bsx5CU19Ks-rfubo_3amBKgvO-HeHb2I7mQu_loWg6leR22dvlMGh0FPgO1_-anmVpEHO4O4dlQik-MfiqF7Dx9BmxuI6YBjqPMcv8S3czgVCyftBu80)

然后在 todo 文件夹中，我们应该看到类似以下内容：

![](https://lh6.googleusercontent.com/Fc60wk6pMuEQ8JvIwfOK2E1zezR9n_N-8o_X__F-yr1D1yD0BEuV62G9zoqG5GQnyA0shbI79JvNs3Z-YHunEoUyZw7LAt2eumkyKjj9M39sDbmDgzZ_axvjRyVeyLZC5ohVQmY)

当我们开始使用它们时，我们将进一步介绍这些文件。

## 怎样配置应用

现在，让该应用程序可以由 Django 项目提供服务。 首先，在 myapp 文件夹中打开 `settings.py` 文件，然后将 `'todo'` 添加到已安装的应用中，如下所示：

![](https://lh4.googleusercontent.com/mxTcaRk-ON73sPH6XL31kvZmUJjfwn1knbhMgTJALeyx6l8A1umvtXjLazS34oTjbPZeivGGTe6w6zsEQ1QzhTjaYDJ5tHsbhpeyxAfrvABzGHrNsElcv7RR9kQZi_Tttt4PjIc)

接下来，我们需要打开我们的 `urls.py` 并将以下内容添加到代码中：

```python
from django.urls import path, include

path('', include('todo.urls'))
```

![](https://lh6.googleusercontent.com/VEWQQt84a9DSeqmuT-LrE9EMmYnDnDfwJQQtJhI21WDTJf4EDaE212wj7BLoBX85Vjm90gFb6KsB6yGJ6PDyfgdTT9BL5hcmDZzNfIdHlceR40qJNVubaNKduXjA2viT7yqLJ14)

实际发生的是，在 `django.urls` 中添加 `include`。 在路径（`admin`）下方，创建了一个空路径，该路径指向包括 todo 应用程序目录中的 `urls.py` 文件。 我希望讲清楚了。

接下来，在 todo 文件目录中创建一个名为 `urls.py` 的新文件，并在其中添加以下代码：

```python
from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='home')
 ]
```

![](https://lh6.googleusercontent.com/cmxgwJ5PeIXW_yGgo9AKaVK10pDjGFl26gML6VicCQVLtsiCiorL5tBahCMOxHG-1HlrocwbaVod5SN6DFJFIZ5n1gidGOfJdaGW_p8holylN4aCUb-2ankvfIQygHz6cjT2tgc)

我们从 `django.urls` 导入了 `path`，还从根目录中导入了 `views`。 然后，我们以第一部分为根链接创建了`urlpatterns`。 如你所见，views.index 只是意味着我们将这些视图指向 `views.py` 文件中的 index 函数。 一会会看到它如何工作。

打开 todo 下的 `views.py` 文件并添加一些代码。

在顶部，像这样导入`HttpResponse`：

`from django.http import HttpResponse`

并将其添加到它下面：

```python
def index(request):
	return HttpResponse('Hello')
```

![](https://lh5.googleusercontent.com/QUpf-9cT8Z-dKXTkO1FTm2-IkjD3_NIfYSQCy_XlALUTnIg_XrrxKurZLAJ19DQCk1W5mqBx4Mo5IL9ycL5gGS_w4LyI4zXxSo8y23mNaZ2OodFg-qLEi3Dh2FN_m7ueYjPYrb4)

如你所见，我们创建了在 `urls.py` 中调用的索引函数，并将一个请求参数传递给了它。 然后我们返回一个 `HttpResponse`。

但是之前，需要用 `django.http import HttpResponse` 导入它 - 就像ABC一样简单。让我们尝试一下：打开终端并进入 myapp，然后输入 `python manage.py runserver` 进行测试。

![](https://lh3.googleusercontent.com/Tqb7c-adOuVHbyi-7XBQsv0HHJvxjUhcAZ3N4d5nkOEVNVwfSXxkENlD0l0UI3Jd4qLhO3k8ELDW6yG8yRiP0MmjkO0Q4TvGTYunQIBNgSMNrXxfI7ygMHeN2FtjoJc37mVIVr0)

如你所见，它返回了响应。 接下来我们将加载模板 HTML 文件。

加载 HTML 文件前，需要按以下顺序在 todo 目录中创建一个这样的文件夹：

`todo/templates/todo`

在 todo 目录中，创建一个名为 templates 的文件夹。 在该文件夹内，创建一个名为 todo 的文件夹，就这么简单。

然后继续创建一个简单的 HTML 文件 index.html 并写入：

`<h1>Hello world</h1>`

在 `views.py` 中添加如下代码加载 HTML：

```python
def index(request):
	return render(request, 'todo/index.html')
```

![](https://lh3.googleusercontent.com/mhirciumIf_FcO764txwH5MOMl40vkZ6f41c0oXFreX1UA2IiqQG9E42TfbUBCZto4xG6-vl0t5sQj3ID1FBk_gL074Rzm4pn5a8RmMsP7DuMZKYVi1KQg-Bk35yr1gJGiE2ukg)

现在，我们没有返回响应，而是返回了一个渲染视图，该视图可以渲染 HTML 模板，保存后打开终端 cd 进入到 myapp 中并运行它。 浏览器访问显示如下。

![](https://lh6.googleusercontent.com/NzW4_E80BNOtRq-E4qUg1GdvqHUUQQAxMAdUSGhxROCDkSUnzddSyX4E7Wz5_zPY29twa7D2PVmS85LYmCnzEAvgE-oU2MEk1mDeNhFW5FBuD2eAjDxpPkJfXiJAMEyk1uKZVkw)

很好，来继续。

## 如何设置静态文件

现在要设置静态文件，在 todo 目录中创建一个新文件夹并将其命名为 static。 在该文件夹内，创建一个文件夹并将其命名为todo。

所以应该是这样的：`/static/todo/`。

在 todo 目录中，创建一个文件并将其命名为 `main.css`。 然后在其中编写一些样式：

```css
body {
background-color: red;
}
```

并保存它。

现在，通过编写以下代码来重新\编辑我们的`index.html`文件：

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

现在运行它：

![](https://lh5.googleusercontent.com/ARWYir-7j8-yF9yCzc3bNuW1ZyLKOG30iljprX4AJsnyIdYLtK_0Of7Uu4WJLuufoyRkVL5LnG8J-bepoBcRzm1e57AuaLmbA5iIyO_RY_KsKRVrsc0OfGmDbLOkT-FIZECwIyY)

如果一直按步骤操作，那么应该得到预期结果，。

## How to Load the Models and Admin Panel ## 如何加载模型和管理面板

现在加载管理面板，先创建一个超级用户。这很简单 - 只需打开终端并 cd 到 myapp 文件夹中，然后键入 `python manage.py createsuperuser` 并按 Enter 键即可。显示内容如下：

![](https://lh3.googleusercontent.com/PBTNq4SLyU4xMFsxh8wXuP0fUCnNKqL0zPiAqclNSPc4J7j4izPVgikXXQpaPqcPeSfFhrlQgf2xwyuhWz-s4RJWn1ftc5icsi9bt2QwmjKxjp3reecfmCxQ3GdVvE04HUAc8po)

收到一个错误消息，因为还没有运行 `python manage.py migrate`。键入该内容并按回车键，显示如下：

![](https://lh3.googleusercontent.com/_oEnoQWnv1VRtZf8W60ZyfFVGQV-nFzYKX4oj45SLCLUlPNNyZOefRkIj8ROdoNdkgECWr4OKmxRVUsRZy2c27XwsM7wQ4_7xeJWnlzPrBFZ79t7J8zZXFJLtfDqJf1vrvtShjc)

现在输入 `python manage.py createsuperuser`，然后按 Enter：

![](https://lh3.googleusercontent.com/t8Z8qo8Z3xNi9C86RjkiujHiS6en5b16eYPA5uMTfXAQYNpFjjuWaY_WEL0TrxLUlpaJJHzF143Vk0UuTQIzuD4GICQF4X1K2CF0vyb1ws33JN2W_FeyVu3xMOsn1posUZW0eFs)

只需填写凭据即可。接下来运行服务并访问 127.0.0.1:8000/admin。

![](https://lh6.googleusercontent.com/Uoen79EV8PaEDuhnt2eBaCnnJAEzHhLydikTi8BOxUSZ9DrGp9GbtUk-Um7TmMDW64Zd0RbAkXja8RjyqiX58hlWdFyrzHTUVN0NCx93e9BOx36Va4ysCX7JyJRlEmdUBnbltuA)

登录后，将被定向到仪表板：

![](https://lh3.googleusercontent.com/C8A8OermBdrvdB_6NEHg2mFgkkuVBsePdfdmlNhulSw2m7Jkdhea_jdDFNQnbvVgqxJcXj-ftbcNmdR6nYImJC2AV9edqcPB5pkhUm0zvImzzzAokHZ4bDwYe4BPPvnXsK18Ng0)

现在已经搞定了管理面板，接下来来使用模型（数据库）。我们将创建一个收集内容的模型。 打开 `models.py` 文件并输入以下代码：

```python
class Post(models.Model):
	content = models.CharField(max_length=255, null=False)

    def __str__(self):
    	return self.content
```

![](https://lh4.googleusercontent.com/pyZXf_3jSGzz-sciBxAvb-ry4_TbZMnuHWWWAOl17LQ5hCi55DoKxzq0iYu6wuv8UsQhn3-w27GOzlt2N_9mpdKoHcZza9mWoBgselVQXC6bPD-ev-uTjlW1RbN1c2OussUgEpg)

我们创建一个具有参数 `models.Model` 的类，并定义了一个变量 `content`，该变量包含一个 `CharField()`，更像是一个文本字段。 最后，我们创建了一个神奇的 `str`，它返回模型的名称而不是对象。

接下来需要运行 migration。 打开终端，进入myapp，然后输入`python manage.py makemigrations`。 应该会看到以下内容：

![](https://lh6.googleusercontent.com/UBbVNNg1d8jhPTusB-HRRoUsqFfxaZdJLzSIzNIt3P4kby8Tor4G8Bme1e-yq8mOLFgfrUh3nb6MC3BSaOUQDr68_tEmIRtQBS7N7Y66wTbXdMMg-0EJ0svM3tw3j9GLgquC_IU)

这意味着它已经在数据库中创建了 Post 表。 运行 `python manage.py migrate`，结果如下：

![](https://lh6.googleusercontent.com/VyQYel1QFdxc2D5oSOdDD6QPth2jVC5_CTj8SVyDo8pAusvl6qjH7XQUhmhbfXNLjdUiAc566pYTj0O2c-AsRHwVLeDo2xeOv1HWsldCwH1oxu3sM5WJTNOj9-fpZEOfVHMYZ6k)

一切都清楚了。 现在将其添加到管理页面，打开 `admin.py` 并输入以下代码：

```python
from .models import *

admin.site.register(Post)
```

![](https://lh3.googleusercontent.com/jzqRK8kVE6raStmHC8jJoqr8oYOXhygDpe8hoN_JdSRiF3Mpes3_Evw83U0nMczqgAobIY8zp_Z6ve-xb3jv6x7uChFzvdTyDqDZysD2j0pKxiGu2-V9pkvH02HKAzBA2HZr6WQ)

我们从模型中导入了所有模型类，并在管理面板中注册了 Post 模型。 现在，如果我们打开管理面板，我们应该看到 post，可以保存一些数据。

![](https://lh4.googleusercontent.com/E9gkvNmpFiCJg24zYj7GpLzsM8AsoGUkoZHcS1Z3bxMva_Z3Jov5Yy7UzbgU251laLwGGRWqaFK1iIrILblSyktYK42Q-fzgS6ihGf0LYxR0Zl9qvkmG7sneHM2KFRoSPDy2k3o)

请注意，它现在位于 todo 应用程序列表中：

![](https://lh3.googleusercontent.com/BSyVagLKFGvtINW-jnuhrXRoFdB87S5lGksH37z5uewqVCn_WBHP-eI8gF6BUoG56Dz-SnKUtRonFhNX--c23V07WfXhOxHmCmJ460cXAr__NjTAkvXB4JnxIXlbsQcRtDO0uNU)

单击它之后，您应该看到以下内容：

![](https://lh3.googleusercontent.com/4zxSgdVcDnDrpr6aIquG854x59GQb0ZMJ3D-YnAs-9EDR0EYwHl_HBAbrpPGGr7YLfWn0PjJA19aukrUcBbUMURpn4ofEGCwWF4541ee_-OKZQj_cWuv_yxWvUGYGOZfdzu6C90)

然后，可以根据需要创建 post。

## 如何从数据库渲染数据到视图

最后，我们将从数据库中获取数据。 为此，我们需要按如下更新 `views.py`：

```python
from .models import *

def index(request):
	content = Post.objects.all()
    context = {'content': content}
    return render(request, 'todo/index.html', context)
```

![](https://lh4.googleusercontent.com/NHpq8LEAtu06ntzUodCuBZT86FS_u_TPphhlfZ-CiP5rFglQcjtRB0zUdK0jkz_udZeXRh8JNqdZOhRSfV9A69I63b8P5DtBGtQo44zmwufnGTaybAaWAL0yOn9T544_mdXaLN4)

就这么简单：我们从 `models.py` 中导入所有内容，创建一个名为 `content` 的变量，然后从表 Post 中检索所有数据。 然后，我们将其作为字典传递给我们的视图。 因此，只需在 index.html 中使其生效即可，添加以下内容：

```django
{% for contents in content %}
{{content.content}}
{% endfor %}
```

![](https://lh4.googleusercontent.com/4zgGmOcVBVa906mn0AVk0Vh9MbaFeYS0VUVoOC00Jw6wtR54S55BMPjz5t0_z2LTgbs9Ldpt3VOKcEjgxMhSE63xGu8XKSx2tWbKFYp2ndxHc31pcAMFdSturJqEy07ca_IYC1c)

在这里，我们使用 template 标记编写了一个循环，并获取了所有数据内容。 现在，打开您的终端，进入 myapp，然后运行服务器以见证奇迹的时刻：

![](https://lh5.googleusercontent.com/gKJf7AGR-0ZxOCeD_QKGffg4d-wpK0Lk8Z0Fkdj39Rj1V6dpWGf_KA1iBDJ2xE-Lq_zsJQHq6eIywPujAVmEk_R7e-Ug7ox94Rk5x212Bk7cBm0fHaMnGtqQM9zscDELygE1LvI)

它可以工作，但是让我们双重检查一下：

![](https://lh5.googleusercontent.com/IVjbVn-_3Exnnoq2s0pvHTeL2paWcqogzg1mp_Aj15GtXKqUPerrFDGZ-SjYKqpUX8Es1KGo0fSWoAOACLgri_LcT5oV7tkG6dtL2OestlnQC25OzFdYEhcyb0KPH3b12BBdJTU)

结果应为以下内容：

![](https://lh3.googleusercontent.com/jlYy4UCV3MJd-JytvGUBLgC20k3-cduvDQ2O3FIb9kAF7VgRyGxyqb_G1Mjiqis261HQS68uIJUk5I9ccFJBFL6Ht3LiePvprBcsqkSS9lZZzJ_cc2noxJm32GPp9ytsiYl7t2o)

Violà – 效果很好。 最后，您可以添加一个换行符，这样您可以更清晰地阅读它。 我们完成了！

感谢您的阅读。 如果您想深入了解 Django 教程，请访问并订阅我的 YouTube 频道 [Devstack](https://youtube.com/channel/UCLcHGKxbEO1XGVETXqzYXLA) 。
