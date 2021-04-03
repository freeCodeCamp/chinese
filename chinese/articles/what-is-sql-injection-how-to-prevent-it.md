> -   原文地址：[SQL Injection Tutorial - What is SQL Injection and How to Prevent it](https://www.freecodecamp.org/news/what-is-sql-injection-how-to-prevent-it/)
> -   原文作者：Megan Kaczanowski
> -   译者：
> -   校对者：

![SQL Injection Tutorial - What is SQL Injection and How to Prevent it](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDU4fHxjeWJlcnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=2000)

SQL injection is when you insert or inject a SQL query via input data from the client to the application.

Successful attacks allow an attacker to access sensitive data from the database, modify database data, potentially shut the database down or issue other admin commands, recover the contents of files, and occasionally issue commands to the operating system.

This type of attack is relatively easy to detect and exploit, so it's particularly important that any vulnerable systems are quickly remediated.

## How Does SQL Injection Work?

SQL injection occurs when data enters a program from an untrusted source and that data is used to dynamically construct a SQL query.

Because SQL doesn't distinguish between the control plane and the data plane, the attacker can place a meta character (a character not interpreted as data, such as an underscore \_ which, in SQL, will read as a wildcard for a single character) into data input, then follow by entering SQL commands in the control plane.

For example, in the comic below, if the string `Robert'); DROP TABLE Students;–-` were entered into a query which requested the studentName, then the query would become the following:

```
AND studentName = 'Robert';
DROP TABLE Students;
--'
```

The drop table command is used to delete a table and all the rows in that table, while the pair of hyphens tells most database servers that the remainder of the statement should be treated as a comment (allowing the server to ignore the trailing ' left by the modified query).

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-30-at-6.23.14-PM.png)

https://xkcd.com/327/

Many database servers allow for multiple queries to be executed at once, as long as they're separated by semicolons. If they do, this type of attack allows the attacker to execute several commands against a database (several database servers, including Oracle, do not allow this type of execution).

Preventing SQL injection is actually fairly simple \- either don't allow dynamic queries or prevent user supplied input which contains malicious SQL from affecting the logic of the query.

## Other Types of SQL Injection

There are a few other types of SQL injection to watch out for:

### Error\-Based SQL Injection

The attacker relies on detailed error messages from the database to learn about the database structure. In order to prevent this, only generic error messages should be shown.

### Blind SQL Injection

Occurs when the app is vulnerable to SQL injection, but only shows generic error messages (rather than detailed error messages or the results of the query).

One way to access information is to use true/false queries and extract information one question at a time. Another option is to send a command which asks the database to wait a specific amount of time before returning a response.

Depending on how long the database takes to respond with an error message, the attacker can infer whether or not the command returned true or false.

### UNION SQL Injection

Leverages the UNION operator to retrieve data from multiple tables in the database.

### Out of Band SQL Injection

Relatively uncommon, but occurs when an attacker can't receive a response to their command in the same channel they submitted it.

Instead, it relies upon a server's ability to use another protocol (like HTTP or DNS) to deliver the responses to an attacker's query.

## How to Prevent SQL Injection Attacks

### Prepared Statements (with Parameterized Queries)

Parameterized queries require developers to define all SQL code and pass each parameter to the query later. Then, the database can distinguish between code and data, regardless of user input.

For example, if an attacker entered the name `Robert'); DROP TABLE Students;–-` the parameterized query would no longer be vulnerable and would instead look for a name which literally matched the entire string `Robert'); DROP TABLE Students;–-`.

The benefit of prepared statements is that SQL code stays within the application, making it (mostly) database independent.

This can harm performance, in rare cases. If it does, the developer will need to strongly validate all data or escape all user supplied input using an escaping routine specific to the database.

### Stored Procedures

Stored procedures are pre\-created SQL statements with parameters which do not include any dynamic SQL generation (it can be done, but should not be). In order to set up stored procedures, developers need to build SQL statements with parameters for any needed inputs.

The difference between stored procedures and prepared statements is that stored procedures are defined and stored within the database, but called from the application.

Also, as stored procedures require execute rights in some DBMS (which are not available by default), it's important to create a separate account with least privileges rather than giving owner access.

### Allowlist Input Validation

Allowlist input validation checks external input against a set of known, approved inputs, failing any inputs which don't match. This should only be used in cases where bind variables are not allowed (the placeholders for actual values in SQL statements).

Allowlist input validation can also be a back up option to detect input before it is passed to the query.

### Escaping All User Supplied Input

You should only use this method if the previous options aren't possible, as it cannot prevent all SQL injection. Only use it for legacy code which cannot be re\-written to use one of the earlier recommendations. Unfortunately, this is a very database\-specific implementation.

Each DBMS supports a character\-escaping scheme. If all user input is escaped using the correctly scheme, the DBMS will be able to differentiate between the input and the SQL code written by developers.

### Least Privilege

Least privilege isn't a defense against SQL injection, but is a way to limit the damage any attack can do.

Ensuring that application accounts only have as many permissions as they need and no more can be frustrating (it's definitely easier to give them DBA or admin rights, but provides significantly more attack surface).

Rather than taking away access from accounts, start from the ground up, only granting exactly what access is needed.

For example, if an account needs read only access, make sure it has read only access to just the tables it needs (or even portions of a table). If you can, avoid granting create or delete access to database accounts. Each user/application should have a separate account.

Additionally, review the privileges of the operating system account under which the database management system (DBMS) runs. By default, many run under very powerful accounts \- change that to a more appropriate privilege.

### Sources/Further Reading:

*   [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
*   [PortSwigger SQL Injection](https://portswigger.net/web-security/sql-injection)
*   [Netsparker SQL Injection](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/)
