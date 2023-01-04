# Contributor guide

## 翻译步骤

1. 从[待翻译列表][1]选择一篇文章

2. 在点开的页面，点击 **MarkDown 文件链接**

<img width="1288" alt="image" src="https://user-images.githubusercontent.com/19358186/210485299-6b67bcf9-57aa-46d0-9d8e-fcfd05a42a5a.png">

3. 在打开的**译文编辑器**开头“译者”处写上自己的 GitHub ID 或者你想使用的名字、昵称

<img width="1411" alt="image" src="https://user-images.githubusercontent.com/19358186/210485409-9923e9af-b09e-47cc-8550-e8a9c0ea73b5.png">

4. 在该编辑器页面最下方的 Propose file change 第一行填写**你为译文取的中文标题**，并提交

![image](https://user-images.githubusercontent.com/19969570/62818127-2baf7e80-bb75-11e9-8fd1-79afe4b5e353.png)

5. 新打开的页面中，在标题下方的文本框中输入 `closes #xx`（翻译任务标题后的序号） ，再在弹出的提示列表中选择对应的**翻译任务**

<img width="934" alt="image" src="https://user-images.githubusercontent.com/19358186/210485942-66eb3ac8-64c8-4d44-8afa-b28b8425c5c2.png">

6. 点击 Create pull request 按钮提交后，在新打开的页面，点击译文标题右下方的 `xxx:patch-n` 字样

<img width="933" alt="image" src="https://user-images.githubusercontent.com/19358186/210486139-4a9bd9c0-fc27-414c-a33f-ca68e9f459a8.png">

7. 在新打开的页面右侧点 Go to file，搜索出本次要翻译的文章并打开

<img width="921" alt="image" src="https://user-images.githubusercontent.com/19358186/210486264-94868eec-3078-49f9-b05c-0e29c9df89b3.png">

<img width="1294" alt="image" src="https://user-images.githubusercontent.com/19358186/210486381-13c68e55-1f00-4628-9df8-7073a27a9561.png">

8. 在打开的**译文页面**右侧点击“铅笔图标”按钮，进入的编辑器页面便是**本篇文章翻译全程工作的地方**（建议用 Ctrl/Command + D 添加到**浏览器收藏夹**）

<img width="998" alt="image" src="https://user-images.githubusercontent.com/19358186/210486505-43164f0e-35f1-472e-becd-a1e6fa68d1d9.png">

9. 每翻译几段文字想**暂时保存**时，就在编辑器最下方 Commit changes 处提交一次。注意，最终译文只需要中文，请把英文原文删掉。请在翻译完成后留言 @miyaliu666，注明“已完成翻译”。校对者会及时查看翻译进度，在你翻译完后便开始校对，请注意查收 **GitHub 账号下的邮箱**。

10. 有的文章里有目录部分，在翻译的时候可以像下面这样设置标题和 id，以便读者在阅读文章时点击目录即跳转到相应的部分：

![image](https://user-images.githubusercontent.com/19358186/168284758-4a6ca000-c6e5-4d3a-b9b9-139e5337f024.png)

11. 在 markdown 里给图片添加图注，可以这样处理：

![image](https://user-images.githubusercontent.com/19358186/168287247-4dba5249-6199-4d94-a0bc-c005ad6d25cb.png)

代码是这样的：

```css
<figure class="kg-card kg-card-image kg-card-hascaption">
    <img src="https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.54.06.png" alt="VSCode 中的 Go 扩展" class="kg-image">
    <figcaption>VSCode 中的 Go 扩展</figcaption>
</figure>
```

12. 除了在 [Translation-needed](https://github.com/freeCodeCamp/news-translation/issues?q=is%3Aissue+is%3Aopen+label%3ATranslation-needed) 列表认领文章来翻译，你也可以从[英文专栏](https://www.freecodecamp.org/news)选择自己喜欢的文章，自己[发起 New issue](https://github.com/freeCodeCamp/news-translation/issues/new/choose) 进行翻译。

点击 Get started，根据提示填写 issue 的内容，即可添加你想翻译的文章。

![image](https://user-images.githubusercontent.com/19358186/114123554-1e87fb80-9925-11eb-9dab-18f8a4964782.png)

[1]: https://github.com/freeCodeCamp/news-translation/issues?q=is%3Aissue+is%3Aopen+label%3ATranslation-needed
