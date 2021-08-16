> -  原文地址：[Symlink Tutorial in Linux – How to Create and Remove a Symbolic Link](https://www.freecodecamp.org/news/symlink-tutorial-in-linux-how-to-create-and-remove-a-symbolic-link/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：
> -  校对者：

![Symlink Tutorial in Linux – How to Create and Remove a Symbolic Link](https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4f740569d1a4ca2b02.jpg)

A symlink (also called a symbolic link) is a type of file in Linux that points to another file or a folder on your computer. Symlinks are similar to shortcuts in Windows.

Some people call symlinks "soft links" – a type of link in Linux/UNIX systems – as opposed to "hard links."

## Difference Between a Soft Link and a Hard Link

Soft links are similar to shortcuts, and can point to another file or directory in any file system.

Hard links are also shortcuts for files and folders, but a hard link cannot be created for a folder or file in a different file system.

Let's look at the steps involved in creating and removing a symlink. We'll also see what broken links are, and how to delete them.

## How to Create a Symlink

The syntax for creating a symlink is:

```shell
ln -s <path to the file/folder to be linked> <the path of the link to be created>
```

`ln` is the link command. The `-s` flag specifies that the link should be soft. `-s` can also be entered as `-symbolic`.

By default, `ln` command creates hard links. The next argument is `path to the file (or folder)` that you want to link. (That is, the file or folder you want to create a shortcut for.)

And the last argument is the `path to link` itself (the shortcut).

## How to Create a Symlink for a File – Example Command

```shell
ln -s /home/james/transactions.txt trans.txt
```

After running this command, you will be able to access the `/home/james/transactions.txt` with `trans.txt`. Any modification to `trans.txt` will also be reflected in the original file.

Note that this command above would create the link file `trans.txt` in your current directory. You can as well create a linked file in a folder link this:

```shell
ln -s /home/james/transactions.txt my-stuffs/trans.txt
```

There must be a directory already called "my-stuffs" in your current directory – if not the command will throw an error.

## How to Create a Symlink for a Folder – Example Command

Similar to above, we'd use:

```shell
ln -s /home/james james
```

This would create a symlinked folder called 'james' which would contain the contents of `/home/james`. Any changes to this linked folder will also affect the original folder.

## How to remove a symlink

Before you'd want to remove a symlink, you may want to confirm that a file or folder is a symlink, so that you do not tamper with your files.

One way to do this is:

```shell
ls -l <path-to-assumed-symlink>
```

Running this command on your terminal will display the properties of the file. In the result, if the first character is a small letter L ('l'), it means the file/folder is a symlink.

You'd also see an arrow (->) at the end indicating the file/folder the simlink is pointing to.

There are two methods to remove a symlink:

### How to Use Unlink to Remove a Symlink

The syntax is:

```shell
unlink <path-to-symlink>
```

This deletes the symlink if the process is successful.

Even if the symlink is in the form of a folder, do not append '/', because Linux will assume it's a directory and `unlink` can't delete directories.

### How to use rm to Remove a Symlink

As we've seen, a symlink is just another file or folder pointing to an original file or folder. To remove that relationship, you can remove the linked file.

Hence, the syntax is:

```shell
rm <path-to-symlink>
```

For example:

```shell
rm trans.txt
rm james
```

Note that trying to do `rm james/` would result an error, because Linux will assume 'james/' is a directory, which would require other options like `r` and `f`. But that's not what we want. A symlink may be a folder, but we are only concerned with the name.

The main benefit of `rm` over `unlink` is that you can remove multiple symlinks at once, like you can with files.

## How to Find and Delete Broken Links

Broken links occur when the file or folder that a symlink points to changes path or is deleted.

For example, if 'transactions.txt' moves from `/home/james` to `/home/james/personal`, the 'trans.txt' link becomes broken. Every attempt to access to the file will result in a 'No such file or directory' error. This is because the link has no contents of its own.

When you discover broken links, you can easily delete the file. An easy way to find broken symlinks is:

```shell
find /home/james -xtype l
```

This will list all broken symlinks in the `james` directory – from files to directories to sub-directories.

Passing the `-delete` option will delete them like so:

```shell
find /home/james -xtype l -delete
```

## Wrapping up

Symbolic link are an interesting feature of Linux and UNIX systems.

You can create easily accessible symlinks to refer to a file or folder that would otherwise not be convenient to access. With some practice, you will understand how these work on an intuitive level, and they will make you much more efficient at managing file systems.