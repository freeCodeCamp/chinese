> -   原文地址：[SQL Joins Tutorial: Cross Join, Full Outer Join, Inner Join, Left Join, and Right Join.](https://www.freecodecamp.org/news/sql-joins-tutorial/)
> -   原文作者：John Mosesman
> -   译者：zhannicholas
> -   校对者：

![SQL Joins Tutorial: Cross Join, Full Outer Join, Inner Join, Left Join, and Right Join.](https://images.unsplash.com/photo-1557133285-a2b6b21f6e13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

![SQL 连接教程：交叉连接、全外连接、内连接、左连接和右连接](https://images.unsplash.com/photo-1557133285-a2b6b21f6e13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

SQL joins allow our relational database management systems to be, well,  _relational._

SQL 连接让关系型数据库管理系统名副其实。

Joins allow us to re-construct our separated database tables back into the relationships that power our applications.

连接（join）允许我们将分离的数据表重新构造成驱动应用程序的关系（relationship）。

In this article, we'll look at each of the different join types in SQL and how to use them.

本文将逐一查看 SQL 中的各种连接及其使用方式。

Here's what we'll cover:

-   [What is a join?][1]
-   [Setting up your database][2]
-   `[CROSS JOIN][3]`
-   [Setting up our example data (directors and movies)][4]
-   `[FULL OUTER JOIN][5]`
-   `[INNER JOIN][6]`
-   [`LEFT JOIN`  /  `RIGHT JOIN`][7]
-   [Filtering using  `LEFT JOIN`][8]
-   [Multiple joins][9]
-   [Joins with extra conditions][10]
-   [The reality about writing queries with joins][11]

这里是我们将要讨论的内容：

- [什么是连接？](#什么是连接)
- [设置数据库](#设置数据库)
- [交叉连接](#交叉连接)
- [准备示例数据（导演和电影）](#准备示例数据（导演和电影）)
- [左连接与右连接](#左连接与右连接)
- [全外连接](#全外连接)
- [内连接](#内连接)
- [使用左连接过滤数据](#使用左连接过滤数据)
- [多表连接](#多表连接)
- [带额外条件的连接](#带额外条件的连接)
- [连接查询的现实](#现实中的连接查询)

(_Spoiler alert_: we'll cover five different types—but you really only need to know two of them!)

（_剧透警告_：我们将介绍五种不同类型的连接，但实际上你只需要知道其中两种！）

## What is a join?

## 什么是连接

A  **join**  is an operation that combines two rows together into one row.

**连接** 是一种将两行结合成一行的操作。

These rows are usually from two different tables—but they don't have to be.

这些行通常来自不同的表，但这并不绝对。

Before we look at how to write the join itself, let's look at what the result of a join would look like.

在我们着眼于如何写连接之前，我们先看一看连接的结果长啥样。

Let's take for example a system that stores information about users and their addresses.

我们就以一个保存用户信息和他们的地址信息的系统为例吧。

The rows from the table that stores user information might look like this:

保存用户信息的表里面的行可能长这个样子：

```
 id |     name     |        email        | age
----+--------------+---------------------+-----
  1 | John Smith   | johnsmith@gmail.com |  25
  2 | Jane Doe     | janedoe@Gmail.com   |  28
  3 | Xavier Wills | xavier@wills.io     |  3
...
(7 rows)
```

And the rows from the table that stores address information might look like this:

保存地址信息的表里面的行可能是这个样子：

```
 id |      street       |     city      | state | user_id
----+-------------------+---------------+-------+---------
  1 | 1234 Main Street  | Oklahoma City | OK    |       1
  2 | 4444 Broadway Ave | Oklahoma City | OK    |       2
  3 | 5678 Party Ln     | Tulsa         | OK    |       3
(3 rows)
```

We could write separate queries to retrieve both the user information and the address information—but ideally we could write  _one query_  and receive all of the users and their addresses in the same result set.

我们可以写多个独立的查询，既检索用户信息，又检索地址信息。但是在理想情况下，我们可以写 _一条查询_，然后用同一个结果集（result set）接收所有的用户和他们的地址信息。

This is exactly what a join lets us do!

这正是连接让我们做的事情！

We'll look at how to write these joins soon, but if we joined our user information to our address information we could get a result like this:

我们很快就会看到如何写这些连接，但如果我们连接用户信息表和地址信息表，就可以得到一个像这样的结果：

```
 id |     name     |        email        | age | id |      street       |     city      | state | user_id
----+--------------+---------------------+-----+----+-------------------+---------------+-------+---------
  1 | John Smith   | johnsmith@gmail.com |  25 |  1 | 1234 Main Street  | Oklahoma City | OK    |       1
  2 | Jane Doe     | janedoe@Gmail.com   |  28 |  2 | 4444 Broadway Ave | Oklahoma City | OK    |       2
  3 | Xavier Wills | xavier@wills.io     |  35 |  3 | 5678 Party Ln     | Tulsa         | OK    |       3
(3 rows)

```

Here we see all of our users and their addresses in one nice result set.

在这里，我们可以在一个不错的结果集中看到用户和他们的地址。

Besides producing a combined result set, another important use of joins is to pull extra information into our query that we can filter against.

除了产生组合结果集，连接的另一个重要用途就是为查询语句提供额外的信息，便于对结果集进行过滤。

For example, if we wanted to send some physical mail to all users who live in Oklahoma City, we could use this joined-together result set and filter based on the  `city`  column.

例如，如果我们想给住在 Oklahoma 市的所有用户发送实体邮件，我们就可以使用这个连接在一起的结果集，然后根据 `city` 列进行过滤。

Now that we know the purpose of a joins—let's start writing some!

既然我们已经知道了连接的用途，那就开始写一些吧！

## Setting up your database

## 设置数据库

Before we can write our queries we need to setup our database.

在写查询语句之前，我们需要先设置好数据库。

For these examples we'll be using PostgreSQL, but the queries and concepts shown here will easily translate to any other modern database system (like MySQL, SQL Server, etc.).

在这些示例中，我们将使用 PostgreSQL，但是这里展示的查询和概念可以很容易地被翻译到任何其它的现代数据库系统中（比如 MySQL、SQL Server，等等）。

To work with our PostgreSQL database, we can use  [`psql`][12]—the interactive PostgreSQL command line program. If you have another database client that you enjoy working with that's fine too.

我们可以使用 [`psql`][12]与 PostgreSQL 数据库一起工作，它是 PostgreSQL 的交互式命令行程序。如果你有其它的数据库客户端，你也可以用它们。

To begin, let's create our database. With PostgreSQL already  [installed][13], we can run the command  `createdb <database-name>`  at our terminal to create a new database. I called mine  `fcc`:

首先，创建我们的数据库。[安装]好 PostgreSQL 之后，在终端运行 `createdb <database-name>`命令，创建一个新的数据库。我管我的数据库叫 `fcc`：

```bash
$ createdb fcc
```

Next let's start the interactive console by using the command  `psql`  and connect to the database we just made using  `\c <database-name>`:

接下来使用命令 `psql` 启动一个交互式控制台，然后使用 `\c <database-name>` 连接到我们刚才创建的数据库：

```bash
$ psql
psql (11.5)
Type "help" for help.

john=# \c fcc
You are now connected to database "fcc" as user "john".
fcc=#
```

> **Note:**  I've cleaned up the  `psql`  output in these examples to make it easier to read, so don't worry if the output shown here isn't exactly what you've seen in your terminal.

> **注意：** 为了便于阅读，我已经去掉了这些示例中 `psql` 的输出，所以如果你的终端显示的内容和这里的不完全相同，也不必担心。

I encourage you to follow along with these examples and run these queries for yourself. You will learn and remember far more by working through these examples rather than just reading them.

我鼓励你亲自动手跟着这些示例来一遍。如果你完成这些示例，你学到和记住的东西要比只阅读来的收获多得多。

Now onto the joins!

现在看连接！

## `CROSS JOIN`

## 交叉连接

The simplest kind of join we can do is a  `CROSS JOIN`  or  _"Cartesian product."_

交叉连接（`CROSS JOIN`）是我们能做的最简单的连接，它又叫 _笛卡尔乘积（Cartesian product）_。

This join takes each row from one table and joins it with each row of the other table.

这种连接将一张表中的每一行与另一张表中的每一行逐一进行连接。

If we had two lists—one containing  `1, 2, 3`  and the other containing  `A, B, C`—the Cartesian product of those two lists would be this:

如果我们有两个列表——一个包含 `1、2、3`，另一个包含 `A、B、C`。这两个列表的笛卡尔乘积就是这样：

```
1A, 1B, 1C
2A, 2B, 2C
3A, 3B, 3C
```

Each value from the first list is paired with each value of the second list.

第一个列表中的每一个值都与第二个列表中的每一个值进行了配对。

Let's write this same example as a SQL query.

让我们把这个示例写成一条 SQL 查询。

First let's create two very simple tables and insert some data into them:

我们先创建两个非常简单的表，再插入一些数据进去：

```sql
CREATE TABLE letters(
  letter TEXT
);

INSERT INTO letters(letter) VALUES ('A'), ('B'), ('C');

CREATE TABLE numbers(
  number TEXT
);

INSERT INTO numbers(number) VALUES (1), (2), (3);
```

Our two tables,  `letters`  and  `numbers`, just have one column: a simple text field.

我们的两个表（`letters` 和 `numbers`）都只有一列：一个简单的文本字段。

Now let's join them together with a  `CROSS JOIN`:

现在使用 `CROSS JOIN` 将它们连接在一起：

```sql
SELECT *
FROM letters
CROSS JOIN numbers;
```

```
 letter | number
--------+--------
 A      | 1
 A      | 2
 A      | 3
 B      | 1
 B      | 2
 B      | 3
 C      | 1
 C      | 2
 C      | 3
(9 rows)

```

This is the simplest type of join we can do—but even in this simple example we can see the join at work: the two separate rows (one from  `letters`  and one from  `numbers`) have been  _joined_  together to form one row.

这是我们能做的最简单的连接，但是即使是在这个简单的示例中，我们也能看见连接在起作用：分开的两行（一行来自 `letter`，一行来自 `numbers`）已经被 _连接_ 成一行。

While this type of join is often discussed as a mere academic example, it does have at least one good use case: covering date ranges.

虽然这种连接通常只被当作学术范例进行讨论，但它至少有一个很好的用例：覆盖日期范围。

### `CROSS JOIN`  with date ranges

### 带日期范围的交叉连接

One good use case of a  `CROSS JOIN`  is to take each row from a table and apply it to every day within a date range.

交叉连接的一个好用例就是从表中读取每一行，然后将其用于某个日期范围内的每一天。

Say for example you were building an application that tracked daily tasks—things like brushing your teeth, eating breakfast, or showering.

例如你正在构建一个追踪每日任务的应用，如刷牙、吃早饭或洗澡。

If you wanted to generate a record  _for every task_  and  _for each day_  of the past week, you could use a  `CROSS JOIN`  against a date range.

如果你想为上周 _每天_ 和 _每个任务_ 都生成一条记录，你可以在某个日期范围上使用 `CROSS JOIN`。

To make this date range, we can use the  `[generate_series][14]`  function:

我们可以使用 [`generate_series`][14] 函数产生这个日期范围：

```sql
SELECT generate_series(
  (CURRENT_DATE - INTERVAL '5 day'),
  CURRENT_DATE,
  INTERVAL '1 day'
)::DATE AS day;

```

The  `generate_series`  function takes three parameters.

`generate_series` 函数接收三个参数。

The first parameter is the starting value. In this example we use  `CURRENT_DATE - INTERVAL '5 day'`. This returns the current date minus five days—or "five days ago."

第一个参数是起始值，我们在示例中使用的是 `CURRENT_DATE - INTERVAL '5 day'`，它返回当前日期减去五天（五天前）的值。

The second parameter is the current date (`CURRENT_DATE`).

第二个参数是当前日期（`CURRENT_DATE`）。

The third parameter is the "step interval"—or how much we want to increment the value each time. Since these are daily tasks we'll use the interval of one day (`INTERVAL '1 day'`).

第三个参数是阶距（step interval），也就是值每次的增量大小。因为这些是日常任务，所以我们使用一天做为间隔（`INTERVAL '1 day'`）。

Putting it all together, this generates a series of dates starting five days ago, ending today, and going one day at a time.

把这三个参数放在一起，就会生成一个日期序列：从五天前开始，到今天结束，每次前进一天。

Finally we remove the time portion by casting the output of these values to a date using  `::DATE`, and we alias this column using  `AS day`  to make the output a little nicer.

最后，我们通过使用 `::DATE` 将这些值的输出转为日期类型，去掉时间部分。我们还使用 `AS day` 为这一列设置了别名，让输出看起来更友好。

The output of this query is the past five days plus today:

这个查询的输出就是过去五天加今天：

```
    day
------------
 2020-08-19
 2020-08-20
 2020-08-21
 2020-08-22
 2020-08-23
 2020-08-24
(6 rows)
```

Going back to our tasks-per-day example, let's create a simple table to hold the tasks we want to complete and insert a few tasks:

回到我们的每日任务示例，一起创建一个存放我们想要完成的任务的简单表吧，然后插入几个任务：

```sql
CREATE TABLE tasks(
  name TEXT
);

INSERT INTO tasks(name) VALUES
('Brush teeth'),
('Eat breakfast'),
('Shower'),
('Get dressed');
```

Our  `tasks`  table just has one column,  `name`, and we inserted four tasks into this table.

`task` 表只有一列（`name`），我们往这个表中插入了四个任务。

Now let's  `CROSS JOIN`  our tasks with the query to generate the dates:

现在让我们把任务和生成日期的查询交叉连接在一起吧：

```sql
SELECT
  tasks.name,
  dates.day
FROM tasks
CROSS JOIN
(
  SELECT generate_series(
    (CURRENT_DATE - INTERVAL '5 day'),
    CURRENT_DATE,
    INTERVAL '1 day'
  )::DATE    AS day
) AS dates

```

(Since our date generation query is not an actual table we just write it as a subquery.)

（因为我们生成日期的查询并不是一个真实的表，所以我们将它写成了子查询。）

From this query we return the task name and the day, and the result set looks like this:

这个查询返回了任务名和日期，结果集看起来像这样：

```
     name      |    day
---------------+------------
 Brush teeth   | 2020-08-19
 Brush teeth   | 2020-08-20
 Brush teeth   | 2020-08-21
 Brush teeth   | 2020-08-22
 Brush teeth   | 2020-08-23
 Brush teeth   | 2020-08-24
 Eat breakfast | 2020-08-19
 Eat breakfast | 2020-08-20
 Eat breakfast | 2020-08-21
 Eat breakfast | 2020-08-22
 ...
 (24 rows)

```

Like we expected, we get a row for each task for every day in our date range.

不出所料，日期范围内的每一天中的每一个任务都对应着一行。

The  `CROSS JOIN`  is the simplest join we can do, but to look at the next few types we'll need a more-realistic table setup.

`CROSS JOIN` 是我们能使用的最简单的连接。但是，为了查看接下来的几种类型的连接，我们需要设置更加真实的表。

## Creating directors and movies

## 准备示例数据（导演和电影）

To illustrate the following join types, we'll use the example of  _movies_  and  _movie directors._

为了展示接下来的几种连接类型，我们需要使用 _电影_ 和 _电影导演_ 这个例子。

In this situation, a movie has one director, but a movie isn't  _required_  to have a director—imagine a new movie being announced but the choice for director hasn't yet been confirmed.

在这种情况下，一部电影有一位导演，但是这不是 _必需_ 的——想像一部新电影被宣布，但是它的导演还未确定。

Our  `directors`  table will store the name of each director, and the  `movies`  table will store the name of the movie as well as a reference to the director of the movie (if it has one).

我们的演员表（`directors`）将会保存每位演员的姓名，电影表（`movie`）将会保存每部电影的名字以及一个指向导演的引用（如果有的话）。

Let's create those two tables and insert some data into them:

咱们先创建那两个表并插入一些数据吧：

```sql
CREATE TABLE directors(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO directors(name) VALUES
('John Smith'),
('Jane Doe'),
('Xavier Wills'),
('Bev Scott'),
('Bree Jensen');

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  director_id INTEGER REFERENCES directors 
);

INSERT INTO movies(name, director_id) VALUES
('Movie 1', 1),
('Movie 2', 1),
('Movie 3', 2),
('Movie 4', NULL),
('Movie 5', NULL);
```

We have five directors, five movies, and three of those movies have directors assigned to them. Director ID 1 has two movies, and director ID 2 has one.

我们有五位导演和五部电影，其中三部电影是有导演的。ID 为 1 的导演有两部电影，ID 为 2 的导演有一部电影。

## `FULL OUTER JOIN`

## 全外连接

Now that we have some data to work with let's look at the  `FULL OUTER JOIN`.

既然已经有了一些数据，我们就看看全外连接（`FULL OUTER JOIN`）吧。

A  `FULL OUTER JOIN`  has some similarities to a  `CROSS JOIN`, but it has a couple key differences.

`FULL OUTER JOIN` 与 `CROSS JOIN` 有些类似，但又有两个关键的区别。

The first difference is that a  `FULL OUTER JOIN`  requires a  **join condition.**

第一个区别是 `FULL OUTER JOIN` 需要有一个 **连接条件（join condition）**。

A join condition specifies how the rows between the two tables are related to each other and on what criteria they should be joined together.

连接条件声明了两张表的行与行之间是如何关联的，以及将它们连接在一起的条件。

In our example, our  `movies`  table has a reference to the director via the  `director_id`  column, and this column matches the  `id`  column of the  `directors`  table. These are the two columns that we will use as our join condition.

在我们的示例中，`movies` 表通过 `director_id` 列引用演员，这一列与 `directors` 表的 `id` 列相匹配。我们将把这两列用作连接条件。

Here's how we write this join between our two tables:

这是我们用来连接两张表的 SQL：

```sql
SELECT *
FROM movies
FULL OUTER JOIN directors
  ON directors.id = movies.director_id;
```

Notice the join condition we specified that matches the movie to its director:  `ON movies.director_id = directors.id`.

注意：我们将匹配电影和导演的连接连接声明为：`ON movie.director_id = directors.id`。

Our result set looks like an odd Cartesian product of sorts:

我们的结果集看起来就像一个奇怪的笛卡尔乘积：

```
  id  |  name   | director_id |  id  |     name
------+---------+-------------+------+--------------
    1 | Movie 1 |           1 |    1 | John Smith
    2 | Movie 2 |           1 |    1 | John Smith
    3 | Movie 3 |           2 |    2 | Jane Doe
    4 | Movie 4 |        NULL | NULL | NULL
    5 | Movie 5 |        NULL | NULL | NULL
 NULL | NULL    |        NULL |    5 | Bree Jensen
 NULL | NULL    |        NULL |    4 | Bev Scott
 NULL | NULL    |        NULL |    3 | Xavier Wills
(8 rows)
```

The first rows we see are ones where the movie had a director, and our join condition evaluated to true.

我们首先看到的是那些有导演的电影对应的行，这时连接条件的值为真。

However, after those rows we see each of the remaining rows  _from each table_—but with  `NULL`  values where the other table didn't have a match.

然而，我们还能在这些行后面看到 _每张表_ 中剩余的行，只是未匹配上的另一张表的对应值为 `NULL`。

> **Note:**  if you're unfamiliar with  `NULL`  values,  [see my explanation here][15]  in this SQL operator tutorial.

> **注意：**如果你不熟悉 `NULL` 值，可以从[ SQL 运算符教程][15]中查看我的解释。

We also see another difference between the  `CROSS JOIN`  and  `FULL OUTER JOIN`  here. A  `FULL OUTER JOIN`  returns one distinct row from each table—unlike the  `CROSS JOIN`  which has multiple.

我们还看到了 `CROSS JOIN` 与 `FULL OUTER JOIN` 的另一个区别：对于每张表，`FULL OUTER JOIN` 只会返回一行，而 `CROSS JOIN` 会返回多行。

## `INNER JOIN`

## 内连接

The next join type,  `INNER JOIN`, is one of the most commonly used join types.

下一种连接类型——内连接（`INNER JOIN`），是最常用的连接类型之一。

An inner join  **only returns rows where the join condition is true.**

内连接 **只返回连接条件为真的那些行**。

In our example, an inner join between our  `movies`  and  `directors`  tables would only return records where the movie has been assigned a director.

在我们的示例中，`movies` 和 `directors` 表之间的内连接只会返回指派了导演的电影的记录。

The syntax is basically the same as before:

语法与之前的基本一致：

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id;
```

Our result shows the three movies that have a director:

我们的结果展示了有导演的那三部电影：

```
 id |  name   | director_id | id |    name
----+---------+-------------+----+------------
  1 | Movie 1 |           1 |  1 | John Smith
  2 | Movie 2 |           1 |  1 | John Smith
  3 | Movie 3 |           2 |  2 | Jane Doe
(3 rows)
```

Since an inner join only includes rows that match the join condition, the  _order of the two tables in the join don't matter._

由于内连接只包含满足连接条件的那些行，所以 _连接两个表时，谁先谁后并不重要_。

If we reverse the order of the tables in the query we get same result:

如果我们反转查询中表的顺序，我们还是会得到相同的结果：

```sql
SELECT *
FROM directors
INNER JOIN movies
  ON movies.director_id = directors.id;
```

```
 id |    name    | id |  name   | director_id
----+------------+----+---------+-------------
  1 | John Smith |  1 | Movie 1 |           1
  1 | John Smith |  2 | Movie 2 |           1
  2 | Jane Doe   |  3 | Movie 3 |           2
(3 rows)
```

Since we listed the  `directors`  table first in this query and we selected all columns (`SELECT *`), we see the  `directors`  column data first and then the columns from  `movies`—but the resulting data is the same.

在这个查询中，由于我们先列出了 `directors` 表并选取所有的列（`SELECT *`），所以我们会先看到 `directors` 表中的列，然后才是 `movies` 表中的列，但是得到的数据是一样的。

This is a useful property of inner joins, but it's not true for all join types—like our next type.

内连接的这个性质非常有用，但是它并不适用于所有的连接类型——比如接下来的这种类型。

## `LEFT JOIN`  /  `RIGHT JOIN`

## 左连接与右连接

These next two join types use a modifier (`LEFT`  or  `RIGHT`) that affects which table's data is included in the result set.

接下来的两种连接类型用了一个修饰符（`LEFT` 或 `RIGHT`），它会决定哪个表的数据被包含到结果集中。

> **Note:**  the  `LEFT JOIN`  and  `RIGHT JOIN`  can also be referred to as  `LEFT OUTER JOIN`  and  `RIGHT OUTER JOIN`.

> **注意：** `LEFT JOIN` 和 `RIGHT JOIN` 也可以被称为 `LEFT OUTER JOIN` 和 `RIGHT OUTER JOIN`。

These joins are used in queries where we want to return all of a particular table's data and,  _if it exists_, the associated table's data as well.

这两种连接的使用场景是：我们想返回某个特定表中的所有数据，_如果关联表中存在相应的数据_，也将其返回。

If the associated data doesn't exist, we still get back all of the "primary" table's data.

如果关联的数据不存在，我们仍然可以得到“主表”的所有记录。

It's a query for information about a particular thing and bonus information if that bonus information exists.

它是一个针对特定事物的信息和奖励信息（如果存在的话）的查询。

This will be simple to understand with an example. Let's find all movies and their directors, but we don't care if they have a director or not—it's a bonus:

举个例子就好理解了。让我们找出所有的电影和它们的导演，但是我们不关心电影是否有导演——导演就是奖励：

```sql
SELECT *
FROM movies
LEFT JOIN directors
  ON directors.id = movies.director_id;
```

The query follows our same pattern as before—we've just specified the join as a  `LEFT JOIN`.

这个查询的形式与之前一样——我们只是将连接声明为了 `LEFT JOIN`。

In this example, the  `movies`  table is the "left" table.

在这个示例中，`movies` 表就是“左表”。

If we write the query on one line it makes this a little easier to see:

如果我们将查询写成一行，看起来会更容易一些：

```sql
... FROM movies LEFT JOIN directors ...
```

**A left join returns all records from the "left" table.**

**左连接返回“左表”中的所有记录**。

A left join returns any rows from the "right" table  **that match the join condition.**

左连接会返回“右表”中 **满足连接条件** 的所有记录。

Rows from the "right" table that  **don't match the join condition are returned as  `NULL`.**

“右表”中 **不满足连接条件的记录会以 `NULL` 值返回**。

```
 id |  name   | director_id |  id  |    name
----+---------+-------------+------+------------
  1 | Movie 1 |           1 |    1 | John Smith
  2 | Movie 2 |           1 |    1 | John Smith
  3 | Movie 3 |           2 |    2 | Jane Doe
  4 | Movie 4 |        NULL | NULL | NULL
  5 | Movie 5 |        NULL | NULL | NULL
(5 rows)
```

Looking at that result set, we can see why this type of join is useful for  _"all of this and, if it exists, some of that"_  type queries.

看着这个结果集，我们就能明白为何这种连接在 _所有的这个和部分的那个（如果存在的话）_ 类型的连接中特别有用了。

### `RIGHT JOIN`

### 右连接

The  `RIGHT JOIN`  works exactly like the  `LEFT JOIN`—except the rules about the two tables are reversed.

除了调换了关于两表的要求外，右连接（`RIGHT JOIN`）的工作原理与 `LEFT JOIN` 一模一样。

In a right join, all of the rows from the "right" table are returned. The "left" table is conditionally returned based on the join condition.

在右连接中，“右表”中的所有行全部返回，而“左表”根据连接条件返回。

Let's use the same query as above but substitute  `LEFT JOIN`  for  `RIGHT JOIN`:

我们还是使用上面的那个查询，只不过这一次要将 `LEFT JOIN` 替换成 `RIGHT JOIN`：

```sql
SELECT *
FROM movies
RIGHT JOIN directors
  ON directors.id = movies.director_id;
```

```
  id  |  name   | director_id | id |     name
------+---------+-------------+----+--------------
    1 | Movie 1 |           1 |  1 | John Smith
    2 | Movie 2 |           1 |  1 | John Smith
    3 | Movie 3 |           2 |  2 | Jane Doe
 NULL | NULL    |        NULL |  5 | Bree Jensen
 NULL | NULL    |        NULL |  4 | Bev Scott
 NULL | NULL    |        NULL |  3 | Xavier Wills
(6 rows)

```

Our result set now returns every  `directors`  row and, if it exists, the  `movies`  data.

我们现在的结果集返回了 `directors` 表的所有行和 `movies` 数据（如果存在的话）。

All we've done is switch which table we're considering the "primary" one—the table we want to see all of the data from regardless of if its associated data exists.

我们所做的就是切换“主表”，“主表”就是不管数据存在与否，我们都想查看到所有数据的那个表。

### `LEFT JOIN`  /  `RIGHT JOIN`  in production applications

### 生产应用程序中的左连接与右连接

In a production application, I only ever use  `LEFT JOIN`  and I never use  `RIGHT JOIN`.

在生产应用程序中，我只用过 `LEFT JOIN`，从未用过 `RIGHT JOIN`。

I do this because, in my opinion, a  `LEFT JOIN`  makes the query easier to read and understand.

我这么做的原因是：我认为 `LEFT JOIN` 让查询更易于阅读和理解。

When I'm writing queries I like to think of starting with a "base" result set, say all movies, and then bring in (or subtract out) groups of things from that base.

当我写查询语句时，我喜欢从“基础”结果集开始思考，比如所有的电影。然后在它的基础上引入（或去除）一些东西。

Because I like to start with a base, the  `LEFT JOIN`  fits this line of thinking. I want all of the rows from my base table (the "left" table), and I conditionally want the rows from the "right" table.

因为我喜欢从基础开始，而 `LEFT JOIN` 恰好满足了这种思路。我想要的是基础表（“左表”）中的所有行和“右表”中满足条件的行。

In practice, I don't think I've ever even seen a  `RIGHT JOIN`  in a production application. There's nothing wrong with a  `RIGHT JOIN`—I just think it makes the query more difficult to understand.

在实践中，我觉得我没有在生产应用中见过 `RIGHT JOIN`。`RIGHT JOIN` 并没有错，我只是认为它会让查询更难理解。

### Re-writing  `RIGHT JOIN`

### 重写右连接

If we wanted to flip our scenario above and instead return all directors and conditionally their movies, we can easily re-write the  `RIGHT JOIN`  into a  `LEFT JOIN`.

如果我们想翻转上面的场景，返回所有的导演和满足条件的电影，我们可以将 `RIGHT JOIN` 重写为 `LEFT JOIN`。

All we need to do is flip the order of the tables in the query, and change  `RIGHT`  to  `LEFT`:

我们只需要翻转两个表在查询语句中的顺序，再把 `RIGHT` 改成 `LEFT` 即可：

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id;
```

> **Note:**  I like to put the table that is being joined on (the "right" table—in the example above  `movies`) first in the join condition (`ON movies.director_id = ...`)—but that's just my personal preference.

> **注意：** 我喜欢将被连接的表（“右表”，即上面示例中的 `movies`）写在连接条件中的第一个（(`ON movies.director_id = ...`），不过这只是我的个人偏好。

## Filtering using  `LEFT JOIN`

## 使用左连接过滤数据

There's two use cases for using a  `LEFT JOIN`  (or  `RIGHT JOIN`).

`LEFT JOIN`（或 `RIGHT JOIN`）有两个用例。

The first use case we've already covered: to return all of the rows from one table and conditionally from another.

第一个用例我们已经讲了：返回一个表中的所有数据，以及另一个表中满足条件的数据。

The second use case is to return rows from the first table  **where the data from the second table isn't present.**

第二个用例是 **在第二个表中的数据不存在的情况下**，返回第一个表中的所有行。

The scenario would look like this: find directors  _who don't belong to a movie._

这个场景看起来像这样：找出 _不属于任何电影_ 的导演。

To do this we'll start with a  `LEFT JOIN`  and our  `directors`  table will be the primary or "left" table:

为此，我们从 `LEFT JOIN` 开始，将 `directors` 作为主表或“左表”：

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id;
```

For a director that doesn't belong to a movie, the columns from the  `movies`  table are  `NULL`:

对于那些不属于任何电影的导演来说，来自 `movies` 表的列都是 `NULL`：

```
 id |     name     |  id  |  name   | director_id
----+--------------+------+---------+-------------
  1 | John Smith   |    1 | Movie 1 |           1
  1 | John Smith   |    2 | Movie 2 |           1
  2 | Jane Doe     |    3 | Movie 3 |           2
  5 | Bree Jensen  | NULL | NULL    |        NULL
  4 | Bev Scott    | NULL | NULL    |        NULL
  3 | Xavier Wills | NULL | NULL    |        NULL
(6 rows)
```

In our example, director ID 3, 4, and 5 don't belong to a movie.

在我们的示例中，ID 为 3、4 和 5 的导演不属于任何一部电影。

To filter our result set just to these rows, we can add a  `WHERE`  clause to only return rows where the movie data is  `NULL`:

要从结果集中过滤出这些行，我们可以加一个 `WHERE` 子句，只返回电影数据为 `NULL` 的行：

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id
WHERE movies.id IS NULL;
```

```
 id |     name     |  id  | name | director_id
----+--------------+------+------+-------------
  5 | Bree Jensen  | NULL | NULL |        NULL
  4 | Bev Scott    | NULL | NULL |        NULL
  3 | Xavier Wills | NULL | NULL |        NULL
(3 rows)
```

And there are our three movie-less directors!

有三部电影没有导演！

It's common to use the  `id`  column of the table to filter against (`WHERE movies.id IS NULL`), but all columns from the  `movies`  table are  `NULL`—so any of them would work.

使用表的 `id` 列进行过滤（`WHERE movies.id IS NULL`）是很普遍的。但是，因为 `movies` 表的所有列都是 `NULL`，所以使用其中任何一个都能达到目的。

(Since we know that all the columns from the  `movies`  table will be  `NULL`, in the query above we could just write  `SELECT directors.*`  instead of  `SELECT *`  to just return all of the director's information.)

（由于我们知道 `movies` 表中的所有列都会是 `NULL`，所以在上面的那个查询中，我们可以将 `SELECT *` 替换成 `SELECT directors.*`，从而只返回所有的导演信息）。

### Using  `LEFT JOIN`  to find matches

### 使用左连接查找匹配

In our previous query we found directors that  _didn't_  belong to movies.

在我们之前的查询中，我们找到了那些 _不_ 属于任何电影的导演。

Using our same structure, we could find directors that  _do_  belong to movies by changing our  `WHERE`  condition to look for rows where the movie data is  _not_  `NULL`:

使用同样的结构，我们可以找到那些 _肯定_ 属于电影的导演。只需要将 `WHERE` 条件改成寻找电影数据 _不是_ `NULL` 的电影数据即可：

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id
WHERE movies.id IS NOT NULL;
```

```
 id |    name    | id |  name   | director_id
----+------------+----+---------+-------------
  1 | John Smith |  1 | Movie 1 |           1
  1 | John Smith |  2 | Movie 2 |           1
  2 | Jane Doe   |  3 | Movie 3 |           2
(3 rows)
```

This may seem handy, but we've actually just re-implemented  `INNER JOIN`!

这可能看起来很方便，但我们实际上只是在重新实现 `INNER JOIN` 而已。

## Multiple joins

## 多表连接

We've seen how to join two tables together, but what about multiple joins in a row?

我们已经看到如何将两张表连接在一起了，但对于多表连接会怎么样呢？

It's actually quite simple, but to illustrate this we need a third table:  `tickets`.

实际上很简单，但是我们需要第三个表（`tickets`）来进行举例：

This table will represent tickets sold for a movie:

这个表将代表已经售出的电影票：

```sql
CREATE TABLE tickets(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER REFERENCES movies NOT NULL
);

INSERT INTO tickets(movie_id) VALUES (1), (1), (3);
```

The  `tickets`  table just has an  `id`  and a reference to the movie:  `movie_id`.

`tickets` 表只有一个 `id` 和一个电影的引用：`movie_id`。

We've also inserted two tickets sold for movie ID 1, and one ticket sold for movie ID 3.

我们也为 ID 为 1 的电影插入了两张票，为 ID 为 3 的电影插入了一张票。

Now, let's join  `directors`  to  `movies`—and then  `movies`  to  `tickets`!

现在，让我们连接 `directors` 和 `movies`，然后再连接 `movies` 和 `tickets`！

```sql
SELECT *
FROM directors
INNER JOIN movies
  ON movies.director_id = directors.id
INNER JOIN tickets
  ON tickets.movie_id = movies.id;
```

Since these are inner joins, the order in which we write the joins doesn't matter. We could have started with  `tickets`, then joined on  `movies`, and then joined on  `directors`.

因为这些是内连接，所以连接的顺序并不重要。我们可以从 `tickets` 开始，连接 `movies`，再连接 `directors`。

It again comes down to what you're trying to query and what makes the query the most understandable.

它的顺序也取决于你想要查询的什么以及什么让查询最易于理解。

In our result set, we'll notice that we've further narrowed down the rows that are returned:

在结果集中，我们将会注意到返回行的范围已经被进一步缩小了：

```
 id |    name    | id |  name   | director_id | id | movie_id
----+------------+----+---------+-------------+----+----------
  1 | John Smith |  1 | Movie 1 |           1 |  1 |        1
  1 | John Smith |  1 | Movie 1 |           1 |  2 |        1
  2 | Jane Doe   |  3 | Movie 3 |           2 |  3 |        3
(3 rows)
```

This makes sense because we've added another  `INNER JOIN`. In effect this adds another  _"AND"_  condition to our query.

这是因为我们加了另一个 `INNER JOIN`，实际上它给我们的查询添加了另一个 `AND` 条件。

Our query essentially says:  _"return all directors that belong to movies  **that also have**  ticket sales."_

我们的查询本质上是在说：_“返回所有属于电影的导演，这些电影 **也有** 电影票售出”_。

If instead we wanted to find directors that belong to movies  _that may not have ticket sales yet_, we could substitute our last  `INNER JOIN`  for a  `LEFT JOIN`:

如果我们想找出属于 _可能还没有电影票售出_ 的电影的导演，我们可以将最后一个 `INNER JOIN` 替换成 `LEFT JOIN`：

```sql
SELECT *
FROM directors
JOIN movies
  ON movies.director_id = directors.id
LEFT JOIN tickets
  ON tickets.movie_id = movies.id;
```

We can see that  `Movie 2`  is now back in the result set:

我们可以看到 `Movie 2` 现在又回到结果集中来了：

```
 id |    name    | id |  name   | director_id |  id  | movie_id
----+------------+----+---------+-------------+------+----------
  1 | John Smith |  1 | Movie 1 |           1 |    1 |        1
  1 | John Smith |  1 | Movie 1 |           1 |    2 |        1
  2 | Jane Doe   |  3 | Movie 3 |           2 |    3 |        3
  1 | John Smith |  2 | Movie 2 |           1 | NULL |     NULL
(4 rows)

```

This movie didn't have any ticket sales, so it was previously excluded from the result set due to the  `INNER JOIN`.

这部电影一张票也没有卖出去，所以它因 `INNER JOIN` 被之前的结果集中排除掉了。

I'll leave this an  _Exercise For The Reader™_, but how would you find directors that belong to movies that  **don't**  have any ticket sales?

我将 _给读者留一个练习_，你如何能找出那些属于一张票也 **没有** 卖出去的电影的导演呢？

### Join execution order

### 连接的执行顺序

In the end, we don't really care in what order the joins are executed.

最后，我们并不关心连接是以何种顺序执行的。

One of the key differences between SQL and other modern programming languages is that SQL is a  **declarative**  language.

SQL 和其它现代编程语言之间的一个关键区别就是 SQL 是一门 **声明式** 语言。

This means that we specify the outcome we want, but we don't specify the execution details—those details are left up to the database query planner. We specify the joins we want and the conditions on them and the query planner handles the rest.

这意味着我们声明期望的结果，但并不声明执行细节——这些细节留给了给数据库查询规划器（database query planner）。我们只管声明我们想要的连接和条件，查询规划器会处理剩余部分。

But, in reality, the database is not joining three tables together at the same time. Instead, it will likely join the first two tables together into one intermediary result, and then join that intermediary result set to the third table.

但是，现实中的数据库并不会同时连接三张表。相反，它会先连接前两张表得到一个中间结果，然后把这个中间结果集与第三张表连接。

(**Note:** This is a somewhat simplified explanation.)

（**注意：** 这个解释有点简单。）

So, as we're working with multiple joins in queries we can just think of them as a series of joins between two tables—although one of those tables can get quite large.

因此，当我们在查询中遇到多表连接时，我们可以将它们看成一连串的两表连接——尽管其中的一个表会变得非常大。

## Joins with extra conditions

## 带额外条件的连接

The last topic we'll cover is a join with extra conditions.

我们将要介绍的最后一个主题是带额外条件的连接。

Similar to a  `WHERE`  clause, we can add as many conditions as we want to our join conditions.

和 `WHERE` 字句类似，我们可以添加任意多的条件到连接中。

For example, if we wanted to find movies with directors that are  _not_  _named_  _"John Smith"_, we could add that extra condition to our join with an  `AND`:

例如，如果我们想找出电影和导演的信息，但导演的 _名字_ 不能是 _“John Smith”_。我们可以用 `AND` 添加一个额外的条件到我们的连接中：

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id
  AND directors.name <> 'John Smith';
```

We can use any operators we would put in a  `WHERE`  clause in this join condition.

我们可以在这个连接条件中使用任何放在 `WHERE` 子句中的运算符。

We also get the same result from this query if we put the condition in a  `WHERE`  clause instead:

如果我们将条件放到 `WHERE` 子句中，也能得到同样的结果：

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id
WHERE directors.name <> 'John Smith';
```

There are some subtle differences happening under the hood here, but for the purpose of this article the result set is the same.

这里背后发生的事情有一些细微的差异，但是就本文而言，结果集是一样的。

(If you're unfamiliar with all of the ways you can filter a SQL query, check out the  [previously mentioned article here][16].)

（如果你不太熟悉过滤 SQL 查询的所有方式，你可以在[这里][16]查看之前提到的文章。）

## The reality about writing queries with joins

## 现实中的连接查询

In reality, I find myself only using joins in three different ways:

事实上，我发现我自己只通过三种方式使用连接：

#### `INNER JOIN`

#### 内连接

The first use case is records where the relationship between two tables  **does**  exist. This is fulfilled by the  `INNER JOIN`.

第一个用例是两表之间的关系 **肯定** 存在的记录，通过 `INNER JOIN` 实现。

These are situations like finding "_movies that have directors"_  or  _"users with posts"._

条件如查找 “_具有导演的电影_” 或 “_具有帖子的用户_”。

#### `LEFT JOIN`

The second use case is records from one table—and if the relationship exists—records from a second table. This is fulfilled by the  `LEFT JOIN`.

第二个用例是来自一个表的记录，以及关系存在时来自第二个表的记录，通过 `LEFT JOIN` 实现。

These are situations like  _"movies with directors if they have one"_  or  _"users with posts if they have some."_

条件如 _“具有导演的电影（如果有的话）”_ 或 “_具有文章的用户（如果有的话）_”。

#### `LEFT JOIN`  exclusion

#### 左连接排除

The third most common use case is our second use case for a  `LEFT JOIN`: finding records in one table that  **don't**  have a relationship in the second table.

第三个常见的用例是 `LEFT JOIN` 的第二个用例：查找一个表中的记录，但这些记录在另一个表中 **没有** 关系。

These are situations like  _"movies without directors"_  or  _"users without posts."_

条件如 “_没有导演的电影_” 或 “_没有文章的用户_”。

### Two very useful join types

### 两种非常有用的连接类型

I don't think I've ever used a  `FULL OUTER JOIN`  or a  `RIGHT JOIN`  in a production application. The use case just doesn't come up often enough or the query can be written in a clearer way (in the case of  `RIGHT JOIN`).

我认为我不曾在生产应用中用过 `FULL OUTER JOIN` 或 `RIGHT JOIN`，相关用例要么很少，要么查询可以被写成更加清晰的形式（`RIGHT JOIN` 的情况）。

I have occasionally used a  `CROSS JOIN`  for things like spreading records across a date range (like we looked at the beginning), but that scenario also doesn't come up too often.

我偶尔会为一些东西使用 `CROSS JOIN`，比如分散在某个时间范围内的记录（像我们一开始看到的那样），但是那种场景也不多。

So, good news! There's really only two types of joins you need to understand for 99.9% of the use cases you'll come across:  `INNER JOIN`  and  `LEFT JOIN`!

所以，好消息来了！对于你将遇到的 99.9% 的用例，只需要理解 `INNER JOIN` 和 `LEFT JOIN` 这两种类型的连接就可以解决了。

If you liked this post, you can  [follow me on twitter][17]  where I talk about database things and all other topics related to development.

如果你喜欢这篇文章，可以在 [twitter][17] 上关注我，我在那里谈论数据库和所有其它开发相关的话题。

Thanks for reading!

感谢阅读！

John

**P.S.**  an extra tip for reading to the end: most database systems will let you just write  `JOIN`  in the place of  `INNER JOIN`—it'll save you a little extra typing. :)

**P.S.** 文末小技巧：大多数数据库系统允许你用 `JOIN` 代替 `INNER JOIN`——可以让你少打几个字。:)

[1]: https://www.freecodecamp.org/news/sql-joins-tutorial/#what-is-a-join
[2]: https://www.freecodecamp.org/news/sql-joins-tutorial/#setting-up-your-database
[3]: https://www.freecodecamp.org/news/sql-joins-tutorial/#cross-join
[4]: https://www.freecodecamp.org/news/sql-joins-tutorial/#creating-directors-and-movies
[5]: https://www.freecodecamp.org/news/sql-joins-tutorial/#full-outer-join
[6]: https://www.freecodecamp.org/news/sql-joins-tutorial/#inner-join
[7]: https://www.freecodecamp.org/news/sql-joins-tutorial/#left-join-right-join
[8]: https://www.freecodecamp.org/news/sql-joins-tutorial/#filtering-using-left-join
[9]: https://www.freecodecamp.org/news/sql-joins-tutorial/#multiple-joins
[10]: https://www.freecodecamp.org/news/sql-joins-tutorial/#joins-with-extra-conditions
[11]: https://www.freecodecamp.org/news/sql-joins-tutorial/#the-reality-about-writing-queries-with-joins
[12]: https://www.postgresql.org/docs/current/app-psql.html
[13]: https://www.postgresql.org/download/
[14]: https://www.postgresql.org/docs/current/functions-srf.html
[15]: https://www.freecodecamp.org/news/sql-operators-tutorial/#dealing-with-missing-data-null-
[16]: https://www.freecodecamp.org/news/sql-operators-tutorial/
[17]: https://twitter.com/johnmosesman
