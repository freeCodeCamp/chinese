> -  原文地址：[What is .gitkeep? How to Track and Push Empty Folders in Git](https://www.freecodecamp.org/news/what-is-gitkeep/)
> -  原文作者：[Kealan Parr](https://www.freecodecamp.org/news/author/kealan/)
> -  译者：
> -  校对者：

![What is .gitkeep? How to Track and Push Empty Folders in Git](https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/Capture.JPG)

Let's say you need to completely restructure the directories of your codebase.

You need to move some folders higher, move some other folders lower, and move lots of files into some new folders you're going to create.

You start shifting the code around, checking that everything works, and adding some folders that the next project is going to need.

These new folders are empty at the minute. But the next project starts in 2 days and it's best if you add these new folders since you're already moving the codebase around.  
  
You push everything into your project branch and you're ready for someone to QA it. So you tell the code-reviewer you're finished on Slack.

They then clone your branch, and fail your code-review because you forgot to add all the new folders you promised to add.

Wait.... what?

# What happened?

[git can't push empty directories.](https://git.wiki.kernel.org/index.php/Git_FAQ#Can_I_add_empty_directories.3F) It can only track files.

If you try to push a folder with nothing in it, although it will exist on your local machine, nothing will go into your branch.

So if someone tries to clone your code, they won't have the same folder structure as you do on your local machine.

So if it doesn't work, what do you need to do?

# How to Use .gitkeep

Now we know that Git only tracks files, so we know we need to add something to the folder.

You can add anything. You just need to add a really simple dummy file to make sure that the folder is tracked, and will be pushed.

You could copy and paste a text file `file.txt` with nothing in it, and that would work. You could put a PNG image of a cat.

A common, standardised practice to solve this exact issue, however, is to push a file called `.gitkeep` into your empty folders.

This isn't a feature of Git! So you could name it anything. There's nothing special about the name `.gitkeep` – some developers add `.gitignore` instead, for example.

`.gitignore` is a little confusing, though, as you are trying to make git **not** ignore your file, and actually push it into your branch.

Either way, by adding this simple file to your folders, they'll get pushed when the time comes.

# Conclusion

`.gitkeep` is a common thing you will see in codebases, where an empty folder needs to be tracked via Git.

The name of the dummy file may not always be `.gitkeep` but you'll see the actual practice over and over again as a developer.

I tweet my articles [here](https://twitter.com/kealanparr) if you would like to read more of my writing.