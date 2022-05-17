> -  原文地址：[Symlink Tutorial in Linux – How to Create and Remove a Symbolic Link](https://www.freecodecamp.org/news/symlink-tutorial-in-linux-how-to-create-and-remove-a-symbolic-link/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：Humilitas
> -  校对者：

![Symlink Tutorial in Linux – How to Create and Remove a Symbolic Link](https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4f740569d1a4ca2b02.jpg)

符号链接（symbolic link）是 Linux 系统中的一种文件，它指向系统中的另一个文件或目录。符号链接类似于 Windows 系统中的快捷方式。

也有人称它 “软链接（soft links）”——Linux/UNIX 系统中的一种链接形式——与之对应的是 “硬链接（hard links）”。

## 软链接和硬链接的区别

软链接类似于快捷方式，它可以指向任意文件系统中的一个文件或目录。

硬链接也可以看作是文件或目录的快捷方式，但是无法在两个不同文件系统之间创建硬链接。

我们将会学习如何创建及删除符号链接，还会了解什么是失效链接，以及如何删除它们。

## 如何创建符号链接

创建符号链接的语法：

```shell
ln -s <path to the file/folder to be linked> <the path of the link to be created>
```

`ln` 是链接命令，`-s` 指定此链接为软链接，`-s` 也可以写为 `-symbolic`。

`ln` 命令默认会创建硬链接。`path to the file (or folder)` 声明了链接目标，即想要为其创建快捷方式的文件或目录。

`path to link` 即链接（快捷方式）名称。

## 如何为一个文件创建符号链接——命令示例

```shell
ln -s /home/james/transactions.txt trans.txt
```

执行这个命令之后，就可以通过 `trans.txt` 来访问 `/home/james/transactions.txt`。对于 `trans.txt` 的修改会体现到源文件上。

注意，以上命令会在当前目录创建链接文件 `trans.txt`。你也可以使用以下命令在其它目录中创建链接文件：

```shell
ln -s /home/james/transactions.txt my-stuffs/trans.txt
```

以上命令要求当前目录必须存在一个名为 "my-stuffs" 的目录——否则会抛出错误。

## 如何为目录创建符号链接——命令示例

与上面的命令类似：

```shell
ln -s /home/james james
```

这会创建一个名为 "james" 的符号链接文件夹，其中包含了 `/home/james` 目录中的内容。对于链接文件夹的操作也会体现到原始文件夹。

## 如何删除符号链接

在删除符号链接之前，需要确认这个文件或文件夹确实是符号链接，以免误删源文件。

可以这样做：

```shell
ls -l <path-to-assumed-symlink>
```

在终端运行以上命令会打印出这个文件的属性信息。如果第一个字符是小写的 "L"（`l`）的话，即表明这个文件（或文件夹）是一个符号链接。

你还可以看到末尾有一个箭头（->），指向这个符号链接的目标文件（或文件夹）。

有两种方式可以删除符号链接：

### 使用 unlink 删除符号链接

语法如下：

```shell
unlink <path-to-symlink>
```

如果命令成功执行的话，将会删除指定的符号链接。

即使符号链接是文件夹形式的，也不要在前面加 "/"，如果加了 "/"，Linux 会把它当成是一个目录，然而 `unlink` 是无法删除目录的。

### 使用 rm 删除符号链接

正如我们所见，符号链接只是一种指向源文件（或目录）的文件（或目录）。只要删除链接文件就可以解除这种关系。

语法如下：

```shell
rm <path-to-symlink>
```

例如：

```shell
rm trans.txt
rm james
```

注意，试图执行 `rm james/` 会引发错误，因为 Linux 会把 `james/` 当成目录来处理，要想删除目录还需要提供 `r` 和 `f` 等参数，然而这并不是我们想要的。虽然符号链接有可能是文件夹形式的，但我们只需要关心它的名字。

比起 `unlink`，`rm` 的主要优势在于可以一次性删除多个符号链接，就像删除多个文件那样。

## 如何找出失效链接并将其删除

当源文件（或目录）被移动或者被删除时，指向它的符号链接就会失效。

如果把 "transactions.txt" 从 `/home/james` 移动到 `/home/james/personal`，"trans.txt" 这个链接就会失效。之后尝试访问 "trans.txt" 会引发错误："No such file or directory"。

如果发现失效的链接，可以很轻松地将其删除。以下方法可以很方便地找出失效链接：

```shell
find /home/james -xtype l
```

这个命令会列出 `james` 目录下各种类型（如：文件、目录及子目录）的所有失效链接。

传入 `-delete` 参数就可以将它们删除：

```shell
find /home/james -xtype l -delete
```

## 总结

符号链接是 Linux/UNIX 系统的有趣特性。

可以为不方便访问的文件或文件夹创建符号链接，以便于访问。多加练习，你就能对它的工作方式有一个直观的理解，符号链接能够帮助你更高效地管理文件系统。
