> -  原文地址：[What is Docker? Learn How to Use Containers – Explained with Examples](https://www.freecodecamp.org/news/what-is-docker-learn-how-to-use-containers-with-examples/)
> -  原文作者：[Sebastian Sigl](https://www.freecodecamp.org/news/author/sesigl/)
> -  译者：
> -  校对者：

![What is Docker? Learn How to Use Containers – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/how-to-use-docker-containers.png)

Containers are an essential tool for software development today. Running applications in any environment becomes easy when you leverage containers.

The most popular technology for running containers is [Docker](https://www.docker.com/), which runs on any operating system.

In this blog post, you will learn to use Docker for the top 3 most essential use cases. You will learn how to:

-   run a database locally using Docker,
-   run automated tests using a dockerized database,
-   run your application locally and in production using Docker.

You will use a Java [Spring Boot](https://spring.io/projects/spring-boot) application, but all learnings apply to every other programming language of your choice.

To run all examples, you need to:

-   [Install Docker](https://docs.docker.com/engine/install/)
-   [Install Java](https://www.java.com/de/download/)

## Run Isolated Applications Using Docker

> Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy, and portable application development – desktop and cloud. (Source: [https://www.docker.com/use-cases/](https://www.docker.com/use-cases/))

The core of Docker’s superpower is leveraging so-called [cgroups](https://en.wikipedia.org/wiki/Cgroups) to create lightweight, isolated, portable, and performant environments, which you can start in seconds.

Let’s look at how you can use Docker to be more productive.

## Database Containers

Using Docker, you can start many types of databases in seconds. It’s easy, and it does not pollute your local system with other requirements you need to run the database. Everything comes packaged with the Docker container.

By searching [hub.docker.com](https://hub.docker.com/), you can find ready-to-use containers for many databases.

Using the `docker run` command, you can start a [MySQL Docker container](https://hub.docker.com/_/mysql/).

```sh
docker run --rm -v "$PWD/data":/var/lib/mysql --name mysql -e MYSQL_ROOT_PASSWORD=admin-password -e MYSQL_DATABASE=my-database -p 3306:3306 mysql:8.0.28-debian
```

This command uses advanced features of running a Docker container:

-   `-v "$PWD/data"` maps your local directory `./data` to the docker container, which allows you to start the Docker container without losing your data,
-   `-p 3306:3306` maps the container port `3306` to our machine so that other applications can use it,
-   `-e MYSQL_DATABASE=my-database` sets an environment variable to create a new database called `my-database` automatically,
-   `-e MYSQL_ROOT_PASSWORD=admin-password` sets an environment variable to set the admin password,
-   `--rm` removes the container when stopped.

These environment variables and more are documented on the [Docker image’s page](https://hub.docker.com/_/mysql/?tab=description).

### How to Use Database Containers For Development

You will use a popular tech stack to build a web application based on [Java](https://www.w3schools.com/java/java_intro.asp) and [Spring Boot](https://spring.io/projects/spring-boot). To focus on the Docker parts, you can clone a simple demo application from the official [Accessing JPA Data With Rest Guide](https://spring.io/guides/gs/accessing-data-rest/).

```sh
# Download the sample application
git clone https://github.com/spring-guides/gs-accessing-data-rest.git

# Open the final application folder
cd complete
```

The application comes with an in-memory database, which is not valuable for production because it does not allow multiple services to access and mutate a single database. A [MySQL](https://www.mysql.com/) Database is more suitable for scaling your application to many more reads and writes.

Therefore, add the MySQL driver to your `pom.xml`:

```xml
       <!-- Disable in memory database -->
       <!--
       <dependency>
           <groupId>com.h2database</groupId>
           <artifactId>h2</artifactId>
           <scope>runtime</scope>
       </dependency>
       -->
 
       <!-- MySQL driver -->
       <dependency>
           <groupId>mysql</groupId>
           <artifactId>mysql-connector-java</artifactId>
           <scope>runtime</scope>
       </dependency>
```

Now, you need to add the configuration to connect to your database by adding a configuration file `src/main/resources/application.properties`.

```properties
# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/my-database
spring.datasource.username=root
spring.datasource.password=admin-password
 
# Create table and database automatically
spring.jpa.hibernate.ddl-auto=update
```

You can now start the application and call existing endpoints:

```sh
# Get all people
curl http://localhost:8080/people

# Add a person
curl -i -H "Content-Type:application/json" -d '{"firstName": "Frodo", "lastName": "Baggins"}' http://localhost:8080/people

# Get all people again, which now returns the created person
curl http://localhost:8080/people
```

You successfully used your rudimentary application, which writes and reads data in your database. Using the MySQL Docker database gives you a robust database up in seconds, and you can use it from any application.

### How to Use Database Containers for Integration Tests

The application already has tests that expect a running database. But, because you replaced your in-memory database with an actual MySQL database, tests won’t run successfully if you stop your database.

```sh
# Stop database
docker rm -f mysql

# Run tests
./mvnw clean test

... skipped output ...
[ERROR] Tests run: 7, Failures: 0, Errors: 7, Skipped: 0
... skipped output ...
```

To quickly start and stop containers running tests, there is a handy tool called [testcontainers](https://github.com/testcontainers). There you'll find libraries for many programming languages, including Java.

First, you need to add some dependencies to your `pom.xml`:

```xml
       <!-- testcontainer -->
       <dependency>
           <groupId>org.testcontainers</groupId>
           <artifactId>testcontainers</artifactId>
           <version>1.16.3</version>
           <scope>test</scope>
       </dependency>
       <dependency>
           <groupId>org.testcontainers</groupId>
           <artifactId>mysql</artifactId>
           <version>1.16.3</version>
           <scope>test</scope>
       </dependency>
       <dependency>
           <groupId>org.testcontainers</groupId>
           <artifactId>junit-jupiter</artifactId>
           <version>1.16.3</version>
           <scope>test</scope>
       </dependency>
```

You need to update the tests to make use of the testcontainers, which starts the database on every test run. Add an annotation and a field to the test to make use of it:

```java
//added imports
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
 
@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers // Annotation to enable testcontainers
public class AccessingDataRestApplicationTests {
 
   // Field to access the started database
   @Container
   private static MySQLContainer database = new MySQLContainer<>("mysql:5.7.34");
 
   //Set database configuration using the started database
   @DynamicPropertySource
   static void databaseProperties(DynamicPropertyRegistry registry) {
       registry.add("spring.datasource.url", database::getJdbcUrl);
       registry.add("spring.datasource.username", database::getUsername);
       registry.add("spring.datasource.password", database::getPassword);
   }
```

For each test execution, the database is started for you, which allows you to use an actual database when you execute tests. All the wiring, setting it up, startup and cleanup are all done for you.

## Dockerize Your Application

Dockerizing your application using simple Docker tools is possible but not recommended.

You can build your application, use a base container that contains Java and copy and run your application. But there are a lot of pitfalls, and this is the case for every language and framework. So always look for tools that make your life easier.

In this example, you will use [Jib](https://github.com/GoogleContainerTools/jib) and [distroless containers](https://github.com/GoogleContainerTools/distroless) to build a Docker container easily. Using both in combination gives you a minimal, secure, and reproducible container, which works the same way locally and in production.

To use Jib, you need to add it as a maven plugin by adding it to your `pom.xml`:

```xml
<build>
       <plugins>
           <plugin>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-maven-plugin</artifactId>
           </plugin>
 
        <!-- Jib plugin -->
           <plugin>
               <groupId>com.google.cloud.tools</groupId>
               <artifactId>jib-maven-plugin</artifactId>
               <version>3.2.1</version>
               <configuration>
                   <from>
                       <image>gcr.io/distroless/java17:nonroot</image>
                   </from>
                   <to>
                       <image>my-docker-image</image>
                   </to>
               </configuration>
           </plugin>
       </plugins>
   </build>
```

You can now build the image and run the application:

```sh
# build the docker container
./mvnw compile jib:dockerBuild

# find your build image
docker images

# start the database
docker run --rm -v "$PWD/data":/var/lib/mysql --name mysql -e MYSQL_ROOT_PASSWORD=admin-password -e MYSQL_DATABASE=my-database -p 3306:3306 mysql:8.0.28-debian


# start the docker container which contains your application
docker run --net=host my-docker-image

… skipped output…
2022-04-15 17:43:51.509  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2022-04-15 17:43:51.521  INFO 1 --- [           main] c.e.a.AccessingDataRestApplication       : Started AccessingDataRestApplication in 6.146 seconds (JVM running for 6.568)
```

The application is started with network mode host `--net=host`, which makes it easy to just connect to the database you started. Alternatively, you can create a `docker network` and start both in the same network.

You can push your container to a container registry and reference it from any container orchestration tool to run your application in production.

## Summary

In this tutorial, you learned how to leverage Docker to create, test. and run applications without polluting your system.

Everything is in your isolated Docker environment and works locally, as on continuous integration systems and production systems where you might start hundreds of your applications.

You find the ready to use example application in [my GitHub Docker For Development Example Application Repository](https://github.com/sesigl/docker-for-development-example-application).

I hope you enjoyed the article.

If you liked it and felt the need to give me a round of applause or just want to get in touch, [follow me on Twitter](https://twitter.com/sesigl).

I work at eBay Kleinanzeigen, one of the world’s biggest classified companies. By the way, [we are hiring](https://www.ebay-kleinanzeigen.de/careers)!

## References

-   [Docker Hub: MySQL Image](https://hub.docker.com/_/mysql/)
-   [Docker documentation: run command](https://docs.docker.com/engine/reference/commandline/run/)
-   [Visual Studio Code: Remote containers](https://code.visualstudio.com/docs/remote/containers)
-   [Learn Java – free Java courses](https://www.freecodecamp.org/news/learn-java-free-java-courses-for-beginners/)
-   [Youtube: Build containers faster with Jib](https://www.youtube.com/watch?v=H6gR_Cv4yWI)