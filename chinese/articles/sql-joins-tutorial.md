> -   原文地址：[SQL Joins Tutorial: Cross Join, Full Outer Join, Inner Join, Left Join, and Right Join.](https://www.freecodecamp.org/news/sql-joins-tutorial/)
> -   原文作者：John Mosesman
> -   译者：
> -   校对者：

![SQL Joins Tutorial: Cross Join, Full Outer Join, Inner Join, Left Join, and Right Join.](https://images.unsplash.com/photo-1557133285-a2b6b21f6e13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

SQL joins allow our relational database management systems to be, well,  _relational._

Joins allow us to re-construct our separated database tables back into the relationships that power our applications.

In this article, we'll look at each of the different join types in SQL and how to use them.

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

(_Spoiler alert_: we'll cover five different types—but you really only need to know two of them!)

## What is a join?

A  **join**  is an operation that combines two rows together into one row.

These rows are usually from two different tables—but they don't have to be.

Before we look at how to write the join itself, let's look at what the result of a join would look like.

Let's take for example a system that stores information about users and their addresses.

The rows from the table that stores user information might look like this:

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

```
 id |      street       |     city      | state | user_id
----+-------------------+---------------+-------+---------
  1 | 1234 Main Street  | Oklahoma City | OK    |       1
  2 | 4444 Broadway Ave | Oklahoma City | OK    |       2
  3 | 5678 Party Ln     | Tulsa         | OK    |       3
(3 rows)
```

We could write separate queries to retrieve both the user information and the address information—but ideally we could write  _one query_  and receive all of the users and their addresses in the same result set.

This is exactly what a join lets us do!

We'll look at how to write these joins soon, but if we joined our user information to our address information we could get a result like this:

```
 id |     name     |        email        | age | id |      street       |     city      | state | user_id
----+--------------+---------------------+-----+----+-------------------+---------------+-------+---------
  1 | John Smith   | johnsmith@gmail.com |  25 |  1 | 1234 Main Street  | Oklahoma City | OK    |       1
  2 | Jane Doe     | janedoe@Gmail.com   |  28 |  2 | 4444 Broadway Ave | Oklahoma City | OK    |       2
  3 | Xavier Wills | xavier@wills.io     |  35 |  3 | 5678 Party Ln     | Tulsa         | OK    |       3
(3 rows)

```

Here we see all of our users and their addresses in one nice result set.

Besides producing a combined result set, another important use of joins is to pull extra information into our query that we can filter against.

For example, if we wanted to send some physical mail to all users who live in Oklahoma City, we could use this joined-together result set and filter based on the  `city`  column.

Now that we know the purpose of a joins—let's start writing some!

## Setting up your database

Before we can write our queries we need to setup our database.

For these examples we'll be using PostgreSQL, but the queries and concepts shown here will easily translate to any other modern database system (like MySQL, SQL Server, etc.).

To work with our PostgreSQL database, we can use  [`psql`][12]—the interactive PostgreSQL command line program. If you have another database client that you enjoy working with that's fine too.

To begin, let's create our database. With PostgreSQL already  [installed][13], we can run the command  `createdb <database-name>`  at our terminal to create a new database. I called mine  `fcc`:

```bash
$ createdb fcc

```

Next let's start the interactive console by using the command  `psql`  and connect to the database we just made using  `\c <database-name>`:

```bash
$ psql
psql (11.5)
Type "help" for help.


```

> **Note:**  I've cleaned up the  `psql`  output in these examples to make it easier to read, so don't worry if the output shown here isn't exactly what you've seen in your terminal.

I encourage you to follow along with these examples and run these queries for yourself. You will learn and remember far more by working through these examples rather than just reading them.

Now onto the joins!

## `CROSS JOIN`

The simplest kind of join we can do is a  `CROSS JOIN`  or  _"Cartesian product."_

This join takes each row from one table and joins it with each row of the other table.

If we had two lists—one containing  `1, 2, 3`  and the other containing  `A, B, C`—the Cartesian product of those two lists would be this:

```
1A, 1B, 1C
2A, 2B, 2C
3A, 3B, 3C

```

Each value from the first list is paired with each value of the second list.

Let's write this same example as a SQL query.

First let's create two very simple tables and insert some data into them:

```sql
CREATE TABLE letters(
  letter TEXT
);
INSERT INTO letters(letter) VALUES ('A'), ('B'), ('C');
CREATE TABLE numbers(
  number TEXT
);

```

Our two tables,  `letters`  and  `numbers`, just have one column: a simple text field.

Now let's join them together with a  `CROSS JOIN`:

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

While this type of join is often discussed as a mere academic example, it does have at least one good use case: covering date ranges.

### `CROSS JOIN`  with date ranges

One good use case of a  `CROSS JOIN`  is to take each row from a table and apply it to every day within a date range.

Say for example you were building an application that tracked daily tasks—things like brushing your teeth, eating breakfast, or showering.

If you wanted to generate a record  _for every task_  and  _for each day_  of the past week, you could use a  `CROSS JOIN`  against a date range.

To make this date range, we can use the  `[generate_series][14]`  function:

```sql
SELECT generate_series(
  (CURRENT_DATE - INTERVAL '5 day'),
  CURRENT_DATE,
  INTERVAL '1 day'
)::DATE AS day;

```

The  `generate_series`  function takes three parameters.

The first parameter is the starting value. In this example we use  `CURRENT_DATE - INTERVAL '5 day'`. This returns the current date minus five days—or "five days ago."

The second parameter is the current date (`CURRENT_DATE`).

The third parameter is the "step interval"—or how much we want to increment the value each time. Since these are daily tasks we'll use the interval of one day (`INTERVAL '1 day'`).

Putting it all together, this generates a series of dates starting five days ago, ending today, and going one day at a time.

Finally we remove the time portion by casting the output of these values to a date using  `::DATE`, and we alias this column using  `AS day`  to make the output a little nicer.

The output of this query is the past five days plus today:

```
    day


```

Going back to our tasks-per-day example, let's create a simple table to hold the tasks we want to complete and insert a few tasks:

```sql
CREATE TABLE tasks(
  name TEXT
);

```

Our  `tasks`  table just has one column,  `name`, and we inserted four tasks into this table.

Now let's  `CROSS JOIN`  our tasks with the query to generate the dates:

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

From this query we return the task name and the day, and the result set looks like this:

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

The  `CROSS JOIN`  is the simplest join we can do, but to look at the next few types we'll need a more-realistic table setup.

## Creating directors and movies

To illustrate the following join types, we'll use the example of  _movies_  and  _movie directors._

In this situation, a movie has one director, but a movie isn't  _required_  to have a director—imagine a new movie being announced but the choice for director hasn't yet been confirmed.

Our  `directors`  table will store the name of each director, and the  `movies`  table will store the name of the movie as well as a reference to the director of the movie (if it has one).

Let's create those two tables and insert some data into them:

```sql
CREATE TABLE directors(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
INSERT INTO directors(name) VALUES
('John Smith'),
('Jane Doe'),
('Xavier Wills')
('Bev Scott'),
('Bree Jensen');
CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  director_id INTEGER REFERENCES directors 
);

```

We have five directors, five movies, and three of those movies have directors assigned to them. Director ID 1 has two movies, and director ID 2 has one.

## `FULL OUTER JOIN`

Now that we have some data to work with let's look at the  `FULL OUTER JOIN`.

A  `FULL OUTER JOIN`  has some similarities to a  `CROSS JOIN`, but it has a couple key differences.

The first difference is that a  `FULL OUTER JOIN`  requires a  **join condition.**

A join condition specifies how the rows between the two tables are related to each other and on what criteria they should be joined together.

In our example, our  `movies`  table has a reference to the director via the  `director_id`  column, and this column matches the  `id`  column of the  `directors`  table. These are the two columns that we will use as our join condition.

Here's how we write this join between our two tables:

```sql
SELECT *
FROM movies
FULL OUTER JOIN directors
  ON directors.id = movies.director_id;

```

Notice the join condition we specified that matches the movie to its director:  `ON movies.director_id = directors.id`.

Our result set looks like an odd Cartesian product of sorts:

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

However, after those rows we see each of the remaining rows  _from each table_—but with  `NULL`  values where the other table didn't have a match.

> **Note:**  if you're unfamiliar with  `NULL`  values,  [see my explanation here][15]  in this SQL operator tutorial.

We also see another difference between the  `CROSS JOIN`  and  `FULL OUTER JOIN`  here. A  `FULL OUTER JOIN`  returns one distinct row from each table—unlike the  `CROSS JOIN`  which has multiple.

## `INNER JOIN`

The next join type,  `INNER JOIN`, is one of the most commonly used join types.

An inner join  **only returns rows where the join condition is true.**

In our example, an inner join between our  `movies`  and  `directors`  tables would only return records where the movie has been assigned a director.

The syntax is basically the same as before:

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id;

```

Our result shows the three movies that have a director:

```
 id |  name   | director_id | id |    name
----+---------+-------------+----+------------
  1 | Movie 1 |           1 |  1 | John Smith
  2 | Movie 2 |           1 |  1 | John Smith
  3 | Movie 3 |           2 |  2 | Jane Doe
(3 rows)

```

Since an inner join only includes rows that match the join condition, the  _order of the two tables in the join don't matter._

If we reverse the order of the tables in the query we get same result:

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

This is a useful property of inner joins, but it's not true for all join types—like our next type.

## `LEFT JOIN`  /  `RIGHT JOIN`

These next two join types use a modifier (`LEFT`  or  `RIGHT`) that affects which table's data is included in the result set.

> **Note:**  the  `LEFT JOIN`  and  `RIGHT JOIN`  can also be referred to as  `LEFT OUTER JOIN`  and  `RIGHT OUTER JOIN`.

These joins are used in queries where we want to return all of a particular table's data and,  _if it exists_, the associated table's data as well.

If the associated data doesn't exist, we still get back all of the "primary" table's data.

It's a query for information about a particular thing and bonus information if that bonus information exists.

This will be simple to understand with an example. Let's find all movies and their directors, but we don't care if they have a director or not—it's a bonus:

```sql
SELECT *
FROM movies
LEFT JOIN directors
  ON directors.id = movies.director_id;

```

The query follows our same pattern as before—we've just specified the join as a  `LEFT JOIN`.

In this example, the  `movies`  table is the "left" table.

If we write the query on one line it makes this a little easier to see:

```sql
... FROM movies LEFT JOIN directors ...

```

**A left join returns all records from the "left" table.**

A left join returns any rows from the "right" table  **that match the join condition.**

Rows from the "right" table that  **don't match the join condition are returned as  `NULL`.**

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

### `RIGHT JOIN`

The  `RIGHT JOIN`  works exactly like the  `LEFT JOIN`—except the rules about the two tables are reversed.

In a right join, all of the rows from the "right" table are returned. The "left" table is conditionally returned based on the join condition.

Let's use the same query as above but substitute  `LEFT JOIN`  for  `RIGHT JOIN`:

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

All we've done is switch which table we're considering the "primary" one—the table we want to see all of the data from regardless of if its associated data exists.

### `LEFT JOIN`  /  `RIGHT JOIN`  in production applications

In a production application, I only ever use  `LEFT JOIN`  and I never use  `RIGHT JOIN`.

I do this because, in my opinion, a  `LEFT JOIN`  makes the query easier to read and understand.

When I'm writing queries I like to think of starting with a "base" result set, say all movies, and then bring in (or subtract out) groups of things from that base.

Because I like to start with a base, the  `LEFT JOIN`  fits this line of thinking. I want all of the rows from my base table (the "left" table), and I conditionally want the rows from the "right" table.

In practice, I don't think I've ever even seen a  `RIGHT JOIN`  in a production application. There's nothing wrong with a  `RIGHT JOIN`—I just think it makes the query more difficult to understand.

### Re-writing  `RIGHT JOIN`

If we wanted to flip our scenario above and instead return all directors and conditionally their movies, we can easily re-write the  `RIGHT JOIN`  into a  `LEFT JOIN`.

All we need to do is flip the order of the tables in the query, and change  `RIGHT`  to  `LEFT`:

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id;

```

> **Note:**  I like to put the table that is being joined on (the "right" table—in the example above  `movies`) first in the join condition (`ON movies.director_id = ...`)—but that's just my personal preference.

## Filtering using  `LEFT JOIN`

There's two use cases for using a  `LEFT JOIN`  (or  `RIGHT JOIN`).

The first use case we've already covered: to return all of the rows from one table and conditionally from another.

The second use case is to return rows from the first table  **where the data from the second table isn't present.**

The scenario would look like this: find directors  _who don't belong to a movie._

To do this we'll start with a  `LEFT JOIN`  and our  `directors`  table will be the primary or "left" table:

```sql
SELECT *
FROM directors
LEFT JOIN movies
  ON movies.director_id = directors.id;

```

For a director that doesn't belong to a movie, the columns from the  `movies`  table are  `NULL`:

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

To filter our result set just to these rows, we can add a  `WHERE`  clause to only return rows where the movie data is  `NULL`:

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

It's common to use the  `id`  column of the table to filter against (`WHERE movies.id IS NULL`), but all columns from the  `movies`  table are  `NULL`—so any of them would work.

(Since we know that all the columns from the  `movies`  table will be  `NULL`, in the query above we could just write  `SELECT directors.*`  instead of  `SELECT *`  to just return all of the director's information.)

### Using  `LEFT JOIN`  to find matches

In our previous query we found directors that  _didn't_  belong to movies.

Using our same structure, we could find directors that  _do_  belong to movies by changing our  `WHERE`  condition to look for rows where the movie data is  _not_  `NULL`:

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

## Multiple joins

We've seen how to join two tables together, but what about multiple joins in a row?

It's actually quite simple, but to illustrate this we need a third table:  `tickets`.

This table will represent tickets sold for a movie:

```sql
CREATE TABLE tickets(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER REFERENCES movies NOT NULL
);

```

The  `tickets`  table just has an  `id`  and a reference to the movie:  `movie_id`.

We've also inserted two tickets sold for movie ID 1, and one ticket sold for movie ID 3.

Now, let's join  `directors`  to  `movies`—and then  `movies`  to  `tickets`!

```sql
SELECT *
FROM directors
INNER JOIN movies
  ON movies.director_id = directors.id
INNER JOIN tickets
  ON tickets.movie_id = movies.id;

```

Since these are inner joins, the order in which we write the joins doesn't matter. We could have started with  `tickets`, then joined on  `movies`, and then joined on  `directors`.

It again comes down to what you're trying to query and what makes the query the most understandable.

In our result set, we'll notice that we've further narrowed down the rows that are returned:

```
 id |    name    | id |  name   | director_id | id | movie_id
----+------------+----+---------+-------------+----+----------
  1 | John Smith |  1 | Movie 1 |           1 |  1 |        1
  1 | John Smith |  1 | Movie 1 |           1 |  2 |        1
  2 | Jane Doe   |  3 | Movie 3 |           2 |  3 |        3
(3 rows)

```

This makes sense because we've added another  `INNER JOIN`. In effect this adds another  _"AND"_  condition to our query.

Our query essentially says:  _"return all directors that belong to movies  **that also have**  ticket sales."_

If instead we wanted to find directors that belong to movies  _that may not have ticket sales yet_, we could substitute our last  `INNER JOIN`  for a  `LEFT JOIN`:

```sql
SELECT *
FROM directors
JOIN movies
  ON movies.director_id = directors.id
LEFT JOIN tickets
  ON tickets.movie_id = movies.id;

```

We can see that  `Movie 2`  is now back in the result set:

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

I'll leave this an  _Exercise For The Reader™_, but how would you find directors that belong to movies that  **don't**  have any ticket sales?

### Join execution order

In the end, we don't really care in what order the joins are executed.

One of the key differences between SQL and other modern programming languages is that SQL is a  **declarative**  language.

This means that we specify the outcome we want, but we don't specify the execution details—those details are left up to the database query planner. We specify the joins we want and the conditions on them and the query planner handles the rest.

But, in reality, the database is not joining three tables together at the same time. Instead, it will likely join the first two tables together into one intermediary result, and then join that intermediary result set to the third table.

(**Note:** This is a somewhat simplified explanation.)

So, as we're working with multiple joins in queries we can just think of them as a series of joins between two tables—although one of those tables can get quite large.

## Joins with extra conditions

The last topic we'll cover is a join with extra conditions.

Similar to a  `WHERE`  clause, we can add as many conditions as we want to our join conditions.

For example, if we wanted to find movies with directors that are  _not_  _named_  _"John Smith"_, we could add that extra condition to our join with an  `AND`:

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id
  AND directors.name <> 'John Smith';
```

We can use any operators we would put in a  `WHERE`  clause in this join condition.

We also get the same result from this query if we put the condition in a  `WHERE`  clause instead:

```sql
SELECT *
FROM movies
INNER JOIN directors
  ON directors.id = movies.director_id
WHERE directors.name <> 'John Smith';
```

There are some subtle differences happening under the hood here, but for the purpose of this article the result set is the same.

(If you're unfamiliar with all of the ways you can filter a SQL query, check out the  [previously mentioned article here][16].)

## The reality about writing queries with joins

In reality, I find myself only using joins in three different ways:

#### `INNER JOIN`

The first use case is records where the relationship between two tables  **does**  exist. This is fulfilled by the  `INNER JOIN`.

These are situations like finding "_movies that have directors"_  or  _"users with posts"._

#### `LEFT JOIN`

The second use case is records from one table—and if the relationship exists—records from a second table. This is fulfilled by the  `LEFT JOIN`.

These are situations like  _"movies with directors if they have one"_  or  _"users with posts if they have some."_

#### `LEFT JOIN`  exclusion

The third most common use case is our second use case for a  `LEFT JOIN`: finding records in one table that  **don't**  have a relationship in the second table.

These are situations like  _"movies without directors"_  or  _"users without posts."_

### Two very useful join types

I don't think I've ever used a  `FULL OUTER JOIN`  or a  `RIGHT JOIN`  in a production application. The use case just doesn't come up often enough or the query can be written in a clearer way (in the case of  `RIGHT JOIN`).

I have occasionally used a  `CROSS JOIN`  for things like spreading records across a date range (like we looked at the beginning), but that scenario also doesn't come up too often.

So, good news! There's really only two types of joins you need to understand for 99.9% of the use cases you'll come across:  `INNER JOIN`  and  `LEFT JOIN`!

If you liked this post, you can  [follow me on twitter][17]  where I talk about database things and all other topics related to development.

Thanks for reading!

John

**P.S.**  an extra tip for reading to the end: most database systems will let you just write  `JOIN`  in the place of  `INNER JOIN`—it'll save you a little extra typing. :)

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
