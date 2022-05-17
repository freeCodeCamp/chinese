# Contributor guide

## 翻译步骤

1. 从[待翻译列表][1]选择一篇文章

2. 在点开的页面，点击 **MarkDown 文件链接**

![image](https://user-images.githubusercontent.com/19358186/120214069-89d7b500-c266-11eb-9c39-8d6729e84cae.png)

3. 在打开的**译文编辑器**开头“译者”处写上自己的 GitHub ID

![image](https://user-images.githubusercontent.com/19969570/62830781-f2474380-bc46-11e9-9c8f-0750ad7f2c84.png)

4. 在该编辑器页面最下方的 Propose file change 第一行填写**你为译文取的中文标题**，并提交

![image](https://user-images.githubusercontent.com/19969570/62818127-2baf7e80-bb75-11e9-8fd1-79afe4b5e353.png)

5. 新打开的页面中，在标题下方的文本框中输入 `closes #xx`（翻译任务标题后的序号） ，再在弹出的提示列表中选择对应的**翻译任务**

![image](https://user-images.githubusercontent.com/19969570/103155510-964d7280-47db-11eb-91b6-f40ccf0fb1db.png)

6. 点击 Create pull request 按钮提交后，在新打开的页面，点击译文标题右下方的 `xxx:patch-n` 字样

![image](https://user-images.githubusercontent.com/19969570/103155575-1c69b900-47dc-11eb-9590-a2990188632b.png)

7. 在新打开的页面右侧点 Go to file，搜索出本次要翻译的文章并打开

![image](https://user-images.githubusercontent.com/19969570/103155607-5c30a080-47dc-11eb-9329-03bd94a9734a.png)

8. 在打开的**译文页面**右侧点击“铅笔图标”按钮，进入的编辑器页面便是**本篇文章翻译全程工作的地方**（建议用 Ctrl/Command + D 添加到**浏览器收藏夹**）

![image](https://user-images.githubusercontent.com/19969570/62818137-65808500-bb75-11e9-98d9-7ba710c003b5.png)

9. 每翻译几段文字想**暂时保存**时，就在编辑器最下方 Commit changes 处提交一次。注意，最终译文只需要中文，请把英文原文删掉。

10. 请在翻译完成后留言 @miyaliu666，注明“已完成翻译”。校对者会及时查看翻译进度，在你翻译完后便开始校对，请注意查收 **GitHub 账号下的邮箱**。

11. 有的文章里有目录部分，在翻译的时候可以像下面这样设置标题和 id，以便读者在阅读文章时点击目录即跳转到相应的部分：

![image](https://user-images.githubusercontent.com/19358186/168284758-4a6ca000-c6e5-4d3a-b9b9-139e5337f024.png)

12. 在 markdown 里给图片添加图注，可以这样处理：

![image](https://user-images.githubusercontent.com/19358186/168287247-4dba5249-6199-4d94-a0bc-c005ad6d25cb.png)

[1]: https://github.com/freeCodeCamp/news-translation/issues?q=is%3Aissue+is%3Aopen+label%3ATranslation-needed
