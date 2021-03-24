> -   原文地址：[The Linux LS Command – How to List Files in a Directory + Option Flags](https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/)
> -   原文作者：Bolaji Ayodeji
> -   译者：
> -   校对者：

![The Linux LS Command – How to List Files in a Directory + Option Flags](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/article-banner-7.png)

Since the creation of Unix in the 1970s, a lot of operating systems have used it as their foundation. Many of these operating systems failed, while others succeeded.

Linux is one of the most popular Unix based operating systems. It's open source, and is used all over the world across many industries.

One amazing feature of the Linux operating system is the Command Line Interface (CLI) which allows users to interact with their computer from a shell. The Linux shell is a REPL (**R**ead, **E**valuate, **P**rint, **L**oop) environment where users can enter a command and the shell runs it and returns a result.

The `ls` command is one of the many Linux commands that allow a user to list files or directories from the CLI.

In this article, we'll go in depth on the `ls` command and some of the most important flags you'll need day\-to\-day.

## Prerequisites

*   A computer with directories and files
*   Have one of the Linux distros installed
*   Basic knowledge of navigating around the CLI
*   A smile on your face :)

## The Linux ls Command

The `ls` command is used to list files or directories  in Linux and other Unix\-based operating systems.

Just like you navigate in your *File explorer* or *Finder* with a GUI, the `ls` command allows you to list all files or directories in the current directory by default, and further interact with them via the command line.

Launch your terminal and type `ls` to see this in action:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-9.40.29-PM.png)

## How to list Files in a Directory with Options

The `ls` command also accepts some flags (also known as options) which are additional information that changes how files or directories are listed in your terminal.

In other words, flags change how the `ls` command works:

```
 ls [flags] [directory]
```

> PS: The word **contents** used in throughout the article refers to the **files and directories** being listed, not the actual contents of the files/directories ?

### List files in the current working directory

Type the `ls` command to list the contents of the current working directory:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-9.40.29-PM.png)

### List files in another directory

Type the `ls [directory path here]` command to list the contents of another directory:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.32.52-PM.png)

### List files in the root directory

Type the `ls /` command to list the contents of the root directory:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.46.10-PM.png)

### List files in the parent directory

Type the `ls ..` command to list the contents of the parent directory one level above. Use `ls ../..` for contents two levels above:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.48.22-PM.png)

### List files in the user's home directory (/home/user)

Type the `ls ~` command to list the contents in the users's home directory:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.51.19-PM.png)

### List only directories

Type the `ls -d */` command to list only directories:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.53.05-PM.png)

### List files with subdirectories

Type the `ls *` command to list the contents of the directory with it's subdirectories:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-1.07.54-PM.png)

### List files recursively

Type the `ls -R` command to list all files and directories with their corresponding subdirectories down to the last file:

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.04.56-AM.png)

> If you have a lot of files, this can take a very long time to complete as every single file in each directory will be printed out. You can instead specify a directory to run this command in, like so: `ls Downloads -R`

### List files with their sizes

Type the `ls -s` command (the **s** is lowercase) to list files or directories with their sizes:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.30.19-PM.png)

### List files in long format

Type the `ls -l` command to list the contents of the directory in a table format with columns including:

*   content permissions
*   number of links to the content
*   owner of the content
*   group owner of the content
*   size of the content in bytes
*   last modified date / time of the content
*   file or directory name

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.52.37-PM.png)

### List files in long format with readable file sizes

Type the `ls -lh` command to list the files or directories in the same table format above, but with another column representing the size of each file/directory:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.14.33-PM.png)

Note that sizes are listed in bytes (B), megabytes (MB), gigabytes (GB), or terabytes (TB) when the file or directory's size is larger than 1024 bytes.

### List files including hidden files

Type the `ls -a` command to list files or directories including hidden files or directories. In Linux, anything that begins with a `.` is considered a hidden file:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-11.12.26-AM.png)

### List files in long format including hidden files

Type the `ls -l -a` or `ls -a -l` or `ls -la` or `ls -al` command to list files or directories in a table format with extra information including hidden files or directories:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.17.01-PM.png)

### List files and sort by date and time

Type the `ls -t` command to list files or directories and sort by last modified date and time in descending order (biggest to smallest).

You can also add a `-r` flag to reverse the sorting order like so: `ls -tr`:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.20.09-PM.png)

### List files and sort by file size

Type the `ls -S` (the **S** is uppercase) command to list files or directories and sort by date or time in descending order (biggest to smallest).

You can also add a `-r` flag to reverse the sorting order like so: `ls -Sr`:

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.20.38-PM.png)

### List files and output the result to a file

Type the `ls > output.txt` command to print the output of the preceding command into an `output.txt` file. You can use any of the flags discussed before like `-la` — the key point here is that the result will be outputted into a file and not logged to the command line.

Then you can use the file as you see fit, or log the contents of the file with `cat output.txt`:

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.12.59-AM.png)

.

# Conclusion

There are tons of other commands and combinations you can explore to list out files and directories based on your needs. One thing to remember is the ability to combine multiple commands together at once.

Imagine you want to list a file in long format, including hidden files, and sort by file size. The command would be `ls -alS`, which is a combination of `ls -l`, `ls -a`, and `ls -S`.

If you forget any command or are unsure about what to do, you can run `ls --help` or `man ls` which will display a manual with all possible options for the `ls` command:

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.57.37-AM.png)

Thanks for reading!
