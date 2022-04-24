> - 原文地址：[What is Docker? Learn How to Use Containers – Explained with Examples](https://www.freecodecamp.org/news/what-is-docker-learn-how-to-use-containers-with-examples/)
> - 原文作者：[Sebastian Sigl](https://www.freecodecamp.org/news/author/sesigl/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![What is Docker? Learn How to Use Containers – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/how-to-use-docker-containers.png)

容器是当今软件开发的一个重要工具。当你利用容器时，在任何环境中运行应用程序都变得很容易。

运行容器的最流行技术是 [Docker](https://www.docker.com/)，它可以在任何操作系统上运行。

在这篇博文中，你将学习 Docker 最基本的 3 个用例:

- 使用 Docker 在本地运行一个数据库。
- 使用 Docker 化的数据库运行自动测试。
- 使用 Docker 在本地和生产中运行你的应用程序。

你将使用一个 Java [Spring Boot](https://spring.io/projects/spring-boot) 应用程序，但所有学习内容都适用于你选择的其他任何编程语言。

为了运行所有的例子，你需要:

- [安装 Docker](https://docs.docker.com/engine/install/)
- [安装 Java](https://www.java.com/de/download/)

## 使用 Docker 为运行应用程序提供独立环境

> Docker 减少了重复的、无意义的配置任务，并在整个开发生命周期中用于快速、简单和可移植的应用开发——桌面和云。 (源自: [https://www.docker.com/use-cases/](https://www.docker.com/use-cases/))

Docker 的超能力的核心是利用所谓的 [cgroups](https://en.wikipedia.org/wiki/Cgroups) 来创建轻量级的、隔离的、可移植的和高性能的环境，你可以在几秒钟内启动。

让我们来看看你如何使用 Docker 来提高生产力。

## Database 容器

使用Docker，你可以在几秒钟内启动许多类型的数据库。这很容易，而且不会因为你运行数据库所需的其他要求而污染你的本地系统。一切都与Docker容器打包在一起。

通过在 [hub.docker.com](https://hub.docker.com/) 搜索，你可以为许多数据库找到现成的容器。

使用`docker run`命令，你可以启动一个 [MySQL 的容器](https://hub.docker.com/_/mysql/).

```sh
docker run --rm -v "$PWD/data":/var/lib/mysql --name mysql -e MYSQL_ROOT_PASSWORD=admin-password -e MYSQL_DATABASE=my-database -p 3306:3306 mysql:8.0.28-debian
```

该命令使用了运行Docker容器的高级功能:

- `-v "$PWD/data"` 映射了你的本地目录到容器的 `./data`目录 , 这使你能够启动Docker容器而不丢失你的数据，
- `-p 3306:3306` 映射容器的 `3306` 端口到我们的机器的 `3306` 端口上，以便其他应用程序可以使用它,
- `-e MYSQL_DATABASE=my-database` 设置一个环境变量，自动创建一个名为`my-database`的新数据库,
- `-e MYSQL_ROOT_PASSWORD=admin-password` 设置一个环境变量来设置管理密码,
- `--rm` 停止时移除容器。

这些环境变量和更多的环境变量都记录在 [Docker镜像的页面](https://hub.docker.com/_/mysql/?tab=description)。

### 如何使用数据库容器进行开发

你将使用一个流行的技术栈来构建，一个基于[Java](https://www.w3schools.com/java/java_intro.asp) 和[Spring Boot](https://spring.io/projects/spring-boot) 的 Web 应用程序。为了专注于 Docker 部分，你可以从官方的 [用Rest指南访问JPA数据](https://spring.io/guides/gs/accessing-data-rest/) 克隆一个简单的演示应用程序。

```sh
# Download the sample application
git clone https://github.com/spring-guides/gs-accessing-data-rest.git

# Open the final application folder
cd complete
```

该应用程序自带一个内存数据库，这对生产来说没有价值，因为它不允许多个服务访问和修改（mutate）一个数据库。一个[MySQL](https://www.mysql.com/)数据库更适合于将你的应用程序扩展到更多的读和写。

因此，将MySQL驱动添加到你的 `pom.xml` 文件:

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

现在，你需要通过添加配置文件 `src/main/resources/application.properties` 来添加连接到数据库的配置。

```properties
# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/my-database
spring.datasource.username=root
spring.datasource.password=admin-password
 
# Create table and database automatically
spring.jpa.hibernate.ddl-auto=update
```

你现在可以启动应用程序并调用现有的端点（endpoints）:

```sh
# Get all people
curl http://localhost:8080/people

# Add a person
curl -i -H "Content-Type:application/json" -d '{"firstName": "Frodo", "lastName": "Baggins"}' http://localhost:8080/people

# Get all people again, which now returns the created person
curl http://localhost:8080/people
```

你成功地使用了你的初级应用程序，它在你的数据库中写入和读取数据。使用 MySQL Docker 数据库可以让你在几秒钟内建立一个强大的数据库，而且你可以从任何应用程序中使用它。

### 如何使用数据库容器进行集成测试

该应用程序已经有数据库的相关测试。但是，因为你用一个实际的 MySQL 数据库替换了你的内存数据库，如果你停止你的数据库，测试就不会成功运行。

```sh
# Stop database
docker rm -f mysql

# Run tests
./mvnw clean test

... skipped output ...
[ERROR] Tests run: 7, Failures: 0, Errors: 7, Skipped: 0
... skipped output ...
```

为了快速启动和停止运行测试的容器，有一个方便的工具叫 [testcontainers](https://github.com/testcontainers)。在那里你可以找到许多编程语言的库，包括 Java。

首先，你需要添加一些依赖项到你的 `pom.xml` 文件:

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

你需要更新测试以利用 testcontainers，它在每次测试运行时启动数据库。在测试中添加一个注解和一个字段来利用它 :

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

对于每个测试的执行，启动数据库做好准备，这使你在执行测试时可以使用一个实际的数据库。所有的连接、设置、启动和清理都为你完成。

## Docker 化你的应用程序

使用简单的 Docker 工具对你的应用程序进行 Docker 化是可能的，但不推荐。

你可以建立你的应用程序，使用一个包含Java的基础容器，然后复制并运行你的应用程序。但是有很多陷阱，每种语言和框架都是如此。所以一定要寻找能让你的生活更轻松的工具。

在这个例子中，你将使用 [Jib](https://github.com/GoogleContainerTools/jib) 和 [distroless containers](https://github.com/GoogleContainerTools/distroless) 来轻松构建一个 Docker 容器。将两者结合使用，可以得到一个最小的、安全的、可复制的容器，它在本地和生产中的工作方式是一样的。

要使用 Jib，你需要把它作为一个maven插件添加到你的 `pom.xml` 文件:

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

现在你可以建立镜像并运行应用程序:

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

该应用程序以网络模式主机 `--net=host` 启动，这使得它很容易只连接到你启动的数据库。另外，你可以创建一个 `docker network`，在同一个网络中启动两者。

你可以将你的容器推送到容器 registry，并从任何容器协调工具中使用它，在生产中运行你的应用程序。

## 总结

在本教程中，你学到了如何利用 Docker 来创建、测试和运行应用程序而不污染你的系统。

一切都在你独立的 Docker 环境中，并在本地工作，像持续集成系统和生产系统中，你可能启动数百个你的应用程序。

你可以在 [我的GitHub Docker For Development应用实例库](https://github.com/sesigl/docker-for-development-example-application) 中找到可以使用的例子。

我希望你喜欢这篇文章。

如果你喜欢它，觉得有必要给我点赞，或者只是想联系我，[在Twitter上关注我](https://twitter.com/sesigl)。

我在 eBay Kleinanzeigen 工作，这是全球最大的电子商务公司之一。顺便说一下，[我们正在招聘](https://www.ebay-kleinanzeigen.de/careers)!

## 参考文献

- [Docker Hub: MySQL 镜像](https://hub.docker.com/_/mysql/)
- [Docker 文档: run 命令](https://docs.docker.com/engine/reference/commandline/run/)
- [Visual Studio Code: Remote 容器](https://code.visualstudio.com/docs/remote/containers)
- [Learn Java – free Java courses](https://www.freecodecamp.org/news/learn-java-free-java-courses-for-beginners/)
- [Youtube: 用 Jib 更快地构建容器](https://www.youtube.com/watch?v=H6gR_Cv4yWI)
