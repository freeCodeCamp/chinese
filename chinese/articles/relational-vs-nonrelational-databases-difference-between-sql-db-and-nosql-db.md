> -  原文地址：[Relational VS Nonrelational Databases – the Difference Between a SQL DB and a NoSQL DB](https://www.freecodecamp.org/news/relational-vs-nonrelational-databases-difference-between-sql-db-and-nosql-db/)
> -  原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> -  译者：
> -  校对者：

![Relational VS Nonrelational Databases – the Difference Between a SQL DB and a NoSQL DB](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/valeriia-svitlini-5w0ZbF8P5-4-unsplash.jpg)

This article is an overview of relational and non-relational databases.

Besides learning the fundamental differences between the two types of databases, you will also learn how to decide which one to use for your next project by going over their strengths and weaknesses.

Here is what we'll cover:

1.  [Defining a database](#definition)
    1.  [What is SQL?](#sql)
2.  [Relational databases](#relational)
    1.  [Characteristics](#characteristics)
    2.  [ACID properties](#acid)
3.  [Non-relational databases](#non-relational)
    1.  [Types](#types)
    2.  [BASE properties](#base)
4.  [Relational VS Non-relational databases](#pick)
5.  [Further Learning](#extra)

## What Is A Database? A Definition for Beginners

When it comes to computing, data are pieces of information that come in different forms. Data can be text, numbers, images, audio snippets, or videos.

Collections of information need to be stored somewhere, processed, and interpreted.

You need a way to effortlessly search, access, extract and retrieve the saved resources whenever you need them.

This allows both computers and humans can analyze the accessed data, perform calculations and comparisons, make logical decisions, and reach a conclusion.

You can store the data in a file of some kind, using a software program like an Excel spreadsheet – and this can get the job done.

But what if there are large amounts of data, and you need to be sure they are accurate?

Or what if if you need to retrieve large data sets quickly?

Or what if if the data needs to have a predefined structure that it should adhere to?

Databases are a much more accessible, efficient, and organized way of storing and working with information over a long period of time.

The ability to store data logically and systematically and retrieve it for use at a later date makes databases a critical part of all web applications.

Databases power all applications. They save and store user information such as usernames, email addresses, encrypted passwords, and physical addresses.

They also store user behavior. For example, in an e-commerce store, the database saves and keeps track of the items you have marked as 'favorites'.

You'll need a **Database Management System** (or DBMS for short) to manage your databases.

A Database Management System is a software program that serves as an intermediary between end-users and the database itself.

It allows its users to create and manage databases. It also allows them to access, modify, and manipulate the data stored in the database by performing operations known as queries.

Users can easily store, retrieve, update, and delete data with the help of a few commands.

When it comes to Database Management Systems, there are generally **two** types to choose from:

-   **Relational Databases** (also known as **SQL Databases**)
-   **Non-relational Databases** (also known as **NoSQL Databases**)

### What is SQL?

SQL is short for **S**tructured **Q**uery **L**anguage.

You will likely hear it pronounced one of two ways – "_S. Q. L._" (ess-kew-ell), or "_se-quel_" (like a sequel to a movie).

![Screenshot-2022-04-13-at-6.25.32-PM](https://www.freecodecamp.org/news/content/images/2022/04/Screenshot-2022-04-13-at-6.25.32-PM.png)

https://i.imgur.com/NtGaNA8.png

Either way, SQL is a language used for dealing with databases.

Specifically, with SQL, you can write database queries to communicate with the database. These can be commands for performing any of the CRUD (Create Read Update Delete) operations.

SQL is the language of choice for Relational Database Management Systems, which you will learn all about in the following section.

## What Is A Relational Database?

Relational databases (or SQL databases) have been around for a while. The first relational database appeared in 1970, and they are still popular to this day. Some of the most commonly used ones are:

-   [PostgreSQL](https://www.postgresql.org/)
-   [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
-   [MySQL](https://www.mysql.com/)
-   [Oracle](https://www.oracle.com/index.html)
-   [SQLite](https://sqlite.org/index.html)

A Relational database stores data in a structured and tabular way. That is, it stores information in **tables**, which you can think of as storage containers for the data. For example, a company could have an `employees` table to store data on its employees.

Relational databases have a strict, static, and pre-defined logical **schema**. You can think of a database schema as an organizational blueprint – a set of rules for what can and cannot enter the table and the conditions for how to configure data.

In each table, there is at least one **column**. These columns have a specific data type, such as `INTEGER` or `VARCHAR`. In the `employees` table, some columns could be `employee_id`, `name`, `department`, `email`, and `salary`.

The columns and the data types allowed in each column make up the schema.

```sql
             EMPLOYEES

+-------------+------+------------+-------+--------+
| employee_id | name | department | email | salary |
+-------------+------+------------+-------+--------+
```

A table will also have **rows**, or _records_. A record is a single data value entry that needs to adhere to the pre-defined schema. Essentially, it is a single item.

```sql
             EMPLOYEES
+-------------+------------------+------------+-----------------------+--------+
| employee_id |       name       | department |         email         | salary |
+-------------+------------------+------------+-----------------------+--------+
|           1 |  John Doe        | IT         | johndoe@company.com   |   3500 |
|           2 |  Kelly Kellinson | Marketing  | kelly@company.com     |   1500 |
|           3 |  Mike Manson     | Product    | mikekane@company.com  |   2300 |
+-------------+------------------+------------+-----------------------+--------+
```

And since Relational Databases support SQL, you can perform queries. For example, if you wanted to `view` the `names` of the `employees` , whose monthly salary is `greater than 2000 dollars`, then you would write the following SQL query:

```SQL
SELECT name FROM employees
WHERE salary > 2000;
```

From the above query, you would get the following output:

```SQL
+-------------+
|    name     |
+-------------+
| John Doe    |
| Mike Manson |
+-------------+
```

### Characteristics of Relational Databases

So far, you know that Relational Databases:

-   are tabular in format,
-   are very organized, and the data stored is well-structured,
-   have a strict, rigid, and pre-defined schema,
-   use SQL for performing database queries and manipulating data.

Additionally, a relational database can have more than one table, and as the name of this type of Database Management System suggests, the tables are _related_ to one another.

For example, an e-commerce company may have a `products` table, a `users` table, an `emails` table, and an `orders` table.

Since there is a link and connection between the tables and the information stored in them, you can even join tables using a few commands.

There is a _primary key_, which acts as an identifier and ensures that each item in the table is unique, therefore making sure there is no duplicate and redundant data in tables.

And there is a _foreign key_ that creates those pre-established relationships between tables.

Data points in different tables can have distinct relationships:

-   **One-to-one relationships**. In such cases, a record in one table is related only to one record in another table. An example of a one-to-one relationship in an e-commerce store, is that one user can have only one email address, and one email address can belong only to one user.
-   **One-to-many relationships**. In such cases, one record in one table is related to many other records in another table. For example, in an e-commerce store, a single user can make many orders, but each of those orders is made by a single user.
-   **Many-to-many relationships**. In such cases, one or more records in one table can be related to one or more records in another table. For example, in an e-commerce store, one order can have many products and a product can be ordered many times.

### ACID Properties in Relational Databases

Relational Databases offer the ACID database consistency model.

ACID is an acronym for **A**tomicity, **C**onsistency, **I**solation, **D**urability.

**Atomicity** means that transactions are atomic and take an "all or nothing" approach.

For example, either the entire operation is successful and is completed from start to finish, or it is unsuccessful, and there is an entire operation "rollback".

All operations are guaranteed to end with either a success or a failure, and none are just partially successful.

**Consistency** is the property that ensures that the database structure remains intact from the start of a transaction to the end. It makes sure that any data entering the database follows the rules and constraints that are set in place. It is what secures and maintains the integrity of data in relational databases.

**Isolation** means that despite the number of transactions taking place at any moment in time, each transaction is treated as an atomic, separate unit, and transactions seem to occur in sequential order.

For example, if two transactions are happening at the same time, this property ensures that one transaction, and the changes occurring there, will not affect in any way the other transaction.

And finally, **Durability** means that any results and changes from the transactions are committed and thus permanent and will persist, even if there is a system failure.

Tge ACID model ensures that databases are reliable and secure.

## What Is A Non-Relational Database?

A non-relational Databases is also referred to as a NoSQL database. You will often see that NoSQL stands for both "**N**ot **o**nly **SQL**" and also "Non-SQL".

Either way, a non-relational database refers to a database that doesn't use the relational data model.

Although this term and this type of database have been around for decades, NoSQL databases started gaining momentum in the late 1990s, when the Internet increased in popularity.

Relational databases alone could not handle the speed – along with the large amounts and size of diverse and complex data – that this rise in internet use and the newly developed web applications required and demanded.

Some of the most popular Non-relational databases are:

-   [MongoDB](https://www.mongodb.com/),
-   [Redis](https://redis.io/),
-   [Apache Cassandra](https://cassandra.apache.org/_/index.html),
-   [Google Cloud Bigtable](https://cloud.google.com/bigtable),
-   [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).

A non-relational database does not store and organize data in a tabular format. There are no tables, rows, columns, or relationships between different data points.

Instead, data is stored in **collections**. The database is typically unstructured and uses a dynamic schema.

### Types of Non-Relationional Databases

There are four major types of non-relational databases:

-   **Column oriented databases**,
-   **Key - value data stores**,
-   **Document - oriented stores**,
-   **Graph oriented databases**.

**Column-oriented databases** are similar in concept to relational databases. But they use groups, or sets of columns (also known as column families) instead of rows to logically organize related data.

You can access a column family independently by using a unique row key associated with an individual column. Searching for specific data is much faster and saves significant time since there is no need to go through rows of unrelated information to find what you are searching for.

**Key-value stores** are one of the simplest types of non-relational databases.

Data is stored in dictionaries or hash tables in the form of key-value pair collections.

This type of database has keys that need to be unique.

Keys act as a pointer to a specific value and are associated with that value.

The value assigned to a key can be any piece of information and data type.

To retrieve and access the value, you use the unique key as a reference.

**Document-oriented stores** also store data in key-value pair fashion. But in this case, the value is a document that has a unique key as its identifier.

The document has any format, such as XML, YAML, or binary, but typically it has a JSON format.

This type of database stores data in a semi-structured way.

There is no schema or predefined structure. Because of this, it offers flexibility and the ability to re-arrange and re-work the structure of the database if the project's requirements change.

It also provides a SQL-like type of query language or an API to perform queries and CRUD operations on the data.

**Graph databases** are the most complex type of non-relational database, and they can handle large sets of data.

They focus on the connections and relationships between data elements and use graph theory to store, search, and manage those relations.

They use _nodes_ to store data and represent an individual entity or piece of data. One node is connected and linked to another node.

To represent the connections or relationships between entities, graph databases use _edges_.

### BASE Properties in Non-relational Databases

Non-relational databases offer the BASE database consistency model. This model is not as rigid as the ACID model of relational databases.

BASE is an acronym for:

-   **B**asic **A**vailability. This model does not focus on the immediate consistency of data. However, the system appears to be continuously working and guarantees the availability of data at all times.
-   **S**oft state. Because of the lack of immediate consistency, the state of the system may change over time. A soft state means the system doesn't need to be write-consistent.
-   **E**ventual consistency. The main priority is the constant availability of data and not that of data consistency. However, eventually and at some point, you can expect data to be consistent. This may occur when the system stops receiving input.

## How to Choose Between SQL and NoSQL Databases

After learning the basics of SQL and NoSQL databases, you might be wondering which one of the two to choose for your project.

Well, there isn't a clear answer to that question.

Both databases have advantages and disadvantages, and it largely depends on the type of application you are building, the kind of data you will be working with, and your future goals.

It is common for companies to use both types of databases for their products.

Below is a quick summary of their characteristics to help you decide which one might be the right fit for you.

### When to use an SQL database:

-   You need highly structured data distributed across multiple tables. You need your data to adhere to a strict, predictable, predefined, and already planned schema.
-   Your data will remain relatively the same. SQL databases are convenient if you don't plan on frequently changing the structure of the database and don't need to regularly update items. Keep in mind that they offer little flexibility.
-   You need consistent data.
-   Data integrity and security are a priority.
-   You want accurate results for complex queries.

A disadvantage of SQL databases is that they scale vertically.

You will need to increase the hardware and computing power effort on your current machine as you gather and store more data.

This can be costly.

An increase in processing power and memory storage is needed to handle an increase in load to improve performance.

### When to use a NoSQL database:

-   You are working in a fast development environment that requires frequent adaptations of requirements and constant changes to the database structure.
-   You are working with large amounts of data that are diverse in nature but do not require a lot of structure or accuracy.
-   You are working with data that needs frequent updates. NoSQL databases offer a loose, flexible, and dynamic schema that allows for regular changes to the data.
-   You want speedy query results and continuous availability of the system.
-   You don't want to perform any upfront planning, preparing, or designing of the database, but want to immediately start building instead.

A big advantage of NoSQL databases is that they scale horizontally.

They are designed in a way that more machines can be added to the existing machine (such as cloud servers). This behavior is more desirable compared to vertical scaling that requires additional CPU (Central Processing Unit) or RAM (Random Access Memory) resources.

But of course, a disadvantage of NoSQL databases is that they do not ensure data integrity and consistency.

## Further Learning

This article has just scratched the surface, and the best way to learn is by doing.

Here are some learning resources to learn more about databases and SQL:

-   [Learn SQL – Free Relational Database Courses for Beginners](https://www.freecodecamp.org/news/learn-sql-free-relational-database-courses-for-beginners/). Bookmark this article for a list of free SQL courses.
-   [freeCodeCamp's Relational Database Certification](https://www.freecodecamp.org/learn/relational-database/). In this course, you will learn the necessary developer tools. Then you will learn how to use a code editor, the command line, and Git. You will also learn to work with PostgreSQL (a relational database management system) and SQL – its query language.
-   [Learn About NoSQL Databases in This 3-hour Course](https://www.freecodecamp.org/news/learn-nosql-in-3-hours/). In this course, you will learn about the four different NoSQL database types. Besides just learning the theory, you will also practice building all four of them.

## Conclusion

You have made it to the end of the article!

Hopefully, it has helped you understand the primary differences between Relational and Non-Relational databases. You also have some extra resources to start learning and to put your new skills to practice.

Thanks for reading, and happy coding!