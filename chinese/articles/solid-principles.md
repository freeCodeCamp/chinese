> -   原文地址：[The SOLID Principles of Object-Oriented Programming Explained in Plain English 面向对象编程的 SOLID 原则](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)
> -   原文作者：Yiğit Kemal Erinç
> -   译者：ZhichengChen
> -   校对者：

![The SOLID Principles of Object-Oriented Programming Explained in Plain English](https://www.freecodecamp.org/news/content/images/size/w2000/2020/08/solid.png)

SOLID 原则是面向对象 class 设计的五条原则。他们是设计 class 结构时应该遵守的准则和最佳实践。

通常，这五个原则可以帮助我们了解设计模式和软件架构。这是每个开发人员都应该了解的主题。

这篇文章介绍了在项目中使用 SOLID 原则的细节。

首先我们先看一下 SOLID 原则的历史。然后我们会设计一个 class 并且逐步改善它，来亲密接触 SOLID 原则，了解为什么使用以及怎么使用各个原则。

准备一杯咖啡或者茶，让我们马上开始！

## 背景

SOLID 原则首先由著名的计算机科学家 Robert C·Martin （著名的 Bob 大叔）由 2000 年在他的[论文][1]中提出。但是 SOLID 缩略词是稍晚由 Michael Feathers 先使用的。

Bob 大叔也是畅销书《代码整洁之道》和《架构整洁之道》的作者，也是 ["Agile Alliance"][2] 的成员。

因此，代码整洁、面向对象架构、设计模式彼此互补并以这种方式连接就不足为奇了。

他们达成的目标是一致的：

> “创建可多人协作的、易于理解的、易读的以及可测试的代码。”

现在依次看一下各个原则，SOLID 是以下是原则的缩写：

- S 单一职责原则
- O 开闭原则
- L 里氏替换原则
- I 接口隔离原则
- D 依赖倒置原则

## 单一职责原则

单一职责原则的描述是 ** 一个 class 应该只做一件事，一个 class 应该只有一个变化的原因**。

更技术的描述该原则：应该只有一个软件定义的潜在改变（数据库逻辑、日志逻辑等）能够影响 class 的定义。

这意味着如果 class 是一个数据容器，比如 Book class 或者 Student class，考虑到这个实体有一些字段，应该只有我们更改了数据定义时才能够修改这些字段。

遵守单一职责原则很重要。首先，可能很多不同的团队可能修改同一个项目，可能因为不同的原因修改同一个 class，会导致冲突。

其次，单一职责更容易版本管理，比如，有一个持久化 class 处理数据库操作，我们在 GitHub 看到某个文件上有一处修改。如果遵循 SRP 原则，根据文件就能判断这是关于存储或者数据库相关的提交。

另一个例子是合并冲突，当不同的团队修改同一个文件时，如果遵循 SRP 原则，冲突很少会发生，因为文件只有一个变化的原因，即使出现冲突也会很容易解决。

### 常见错误和反面教材

在本节我们会看一些违背单一职责原则的常见错误。然后会探讨修复他们的方法。

我们会以一个简单的书店发票程序代码作为例子。让我们从定义一个使用发票的图书 class 开始。

```java

class Book {
	String name;
	String authorName;
	int year;
	int price;
	String isbn;

	public Book(String name, String authorName, int year, int price, String isbn) {
		this.name = name;
		this.authorName = authorName;
		this.year = year;
        this.price = price;
		this.isbn = isbn;
	}
}

```

这是一个有一些字段的 book class。没什么新奇的。之所以没有把字段设置为私有的是因为想专注于逻辑而不是 getter 和 setter。

现在让我们来创建一个 invoice class，包含创建发票和计算总额的业务逻辑。目前为止，假设书店只卖书，不卖别的。

```java

public class Invoice {

	private Book book;
	private int quantity;
	private double discountRate;
	private double taxRate;
	private double total;

	public Invoice(Book book, int quantity, double discountRate, double taxRate) {
		this.book = book;
		this.quantity = quantity;
		this.discountRate = discountRate;
		this.taxRate = taxRate;
		this.total = this.calculateTotal();
	}

	public double calculateTotal() {
	        double price = ((book.price - book.price * discountRate) * this.quantity);

		double priceWithTaxes = price * (1 + taxRate);

		return priceWithTaxes;
	}

	public void printInvoice() {
            System.out.println(quantity + "x " + book.name + " " +          book.price + "$");
            System.out.println("Discount Rate: " + discountRate);
            System.out.println("Tax Rate: " + taxRate);
            System.out.println("Total: " + total);
	}

        public void saveToFile(String filename) {
	// Creates a file with given name and writes the invoice
	}

}

```

这是 invoice class。它包含一些发票相关的字段以及三个方法。

-   **calculateTotal** 方法，计算总价格
-   **printInvoice**  方法，打印发票信息到控制台
-   **saveToFile**  方法，负责将发票写到一个文件里

在读下一段之前停下来想一想，这样的 class 设计有什么问题。

那么问题出在哪呢？ 我们的 class 在多个地方都违背了单一职责原则。

第一处是 **printInvoice** 方法，因为里面包含了打印逻辑。SRP 描述 class 应该只有一个变化的原因，这个变化原因应该是 class 里的发票计算。

在这个架构里，如果我们想要改变打印格式，我们需要修改这个 class。我们不能把打印逻辑和业务逻辑混合在一个 class 里。

在 class 里面还有一个方法违背了 SRP： **saveToFile**  方法。这也是一个很常见的错误，把持久化逻辑和业务逻辑混合在了一起。

这不单单是写入文件 - 也可能是存库，发起 API 调用或者其他与持久化相关的操作。

你可能会问，怎样修复这个打印函数呢？

可以为打印和持久化逻辑创造一个新 class，因此就无需因为这些原因修改 invoice class 了。

创建两个 class， **InvoicePrinter** 和  **InvoicePersistence** ，并移入相应方法。

```java

public class InvoicePrinter {
    private Invoice invoice;

    public InvoicePrinter(Invoice invoice) {
        this.invoice = invoice;
    }

    public void print() {
        System.out.println(invoice.quantity + "x " + invoice.book.name + " " + invoice.book.price + " $");
        System.out.println("Discount Rate: " + invoice.discountRate);
        System.out.println("Tax Rate: " + invoice.taxRate);
        System.out.println("Total: " + invoice.total + " $");
    }
}

```

```java

public class InvoicePersistence {
    Invoice invoice;

    public InvoicePersistence(Invoice invoice) {
        this.invoice = invoice;
    }

    public void saveToFile(String filename) {
        // Creates a file with given name and writes the invoice
    }
}

```

现在 class 结构遵从了单一职责原则，每个 class 为我们应用的一个部分负责。棒！

## 开闭原则

开闭原则要求“class 应该对扩展开放对修改关闭”。

修改意味着修改存在 class 的代码，扩展意味着添加新的功能。

这个原则想要表达的是：我们应该能在不动 class 已经存在代码的前提下添加新的功能。这是因为当我们修改存在的代码时，我们就面临着创建潜在 bug 的风险。因此，如果可能，应该避免碰通过测试的（大部分时候）可靠的生产环境的代码。

你可能会好奇，怎样不动 class 还能添加新功能，接口和抽象类可以做到。

现在基本概念已经介绍完了，让我们给发票应用应用一下这个原则。

假如老板来了，提了一个需求，他们想把发票存入数据库以方便查找。我一想，行啊，小菜一碟，五分钟搞定。

创建数据库，连接，给  **InvoicePersistence** 添加保存方法：

```java

public class InvoicePersistence {
    Invoice invoice;

    public InvoicePersistence(Invoice invoice) {
        this.invoice = invoice;
    }

    public void saveToFile(String filename) {
        // Creates a file with given name and writes the invoice
    }

    public void saveToDatabase() {
        // Saves the invoice to database
    }
}

```

很不幸，作为书店的懒家伙，并没有把 class 设计的易于未来扩展。为了添加这一特性，需要修改 **InvoicePersistence** class。

如果 class 设计遵循开闭原则，我们就不需要修改这个 class 了。

因此，作为书店里聪明的懒家伙，我们发现了设计问题并决定重构代码以符合开闭原则。

```java

interface InvoicePersistence {

    public void save(Invoice invoice);
}

```

我们把 **InvoicePersistence**  改成了接口类型并添加了 save 方法。每个持久化 class 都实现这个 save 方法。

```java

public class DatabasePersistence implements InvoicePersistence {

    @Override
    public void save(Invoice invoice) {
        // Save to DB
    }
}

```

```java

public class FilePersistence implements InvoicePersistence {

    @Override
    public void save(Invoice invoice) {
        // Save to file
    }
}

```

class 结构如下：
![](https://erinc.io/wp-content/uploads/2020/08/SOLID-Tutorial-1-1024x554.jpeg)

现在持久化逻辑更易于扩展了，如果老板要求我们添加另一个数据库，有了两种不同类型的数据库如 MySQL 和 MongoDB ，可以更快搞定了。

你可能会想，我们只需创建多个 class 给每个都添加一个 save 方法而无需接口。

来看一下如果我们不用接口来扩展 app，创建多个持久化 class 如 **InvoicePersistence**， **BookPersistence** ，还需要创建了一个 **PersistenceManager** class 来管理所有的持久化 class：

```java

public class PersistenceManager {
    InvoicePersistence invoicePersistence;
    BookPersistence bookPersistence;
    
    public PersistenceManager(InvoicePersistence invoicePersistence,
                              BookPersistence bookPersistence) {
        this.invoicePersistence = invoicePersistence;
        this.bookPersistence = bookPersistence;
    }
}

```

有了多态，我们可以把任何实现了 **InvoicePersistence** 接口的 class 作为入参。这就是接口的灵活性。

## 里氏替换原则

里氏替换原则描述的是子类应该能替换为它的基类。

意思是，给定 class B 是 class A 的子类，在预期传入 class A 的对象的任何方法传入 class B 的对象，方法都不应该有异常。

这是一个预期的行为，因为继承假定子类继承了父类的一切。子类可以扩展行为但不会收窄。

因此，当 class 违背这一原则时，会导致一些难于发现的讨厌的 bug。

里氏替换原则容易理解但是很难在代码里发现。看一个例子：

```java

class Rectangle {
	protected int width, height;

	public Rectangle() {
	}

	public Rectangle(int width, int height) {
		this.width = width;
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getArea() {
		return width * height;
	}
}

```

有一个简单的 Rectangle class，以及一个 **getArea** 方法返回矩形的面积。

现在准备创建另一个 Squares class。众所周知，正方形只不过是宽和高相等的特殊的矩形。

```java

class Square extends Rectangle {
	public Square() {}

	public Square(int size) {
		width = height = size;
	}

	@Override
	public void setWidth(int width) {
		super.setWidth(width);
		super.setHeight(width);
	}

	@Override
	public void setHeight(int height) {
		super.setHeight(height);
		super.setWidth(height);
	}
}

```

我们的 Square class 继承自 Rectangle class。在构造器里设置宽和高相等，我们不希望任何客户端（在他们的代码里使用我们的 class）违背了正方形的特性将宽高改成不相等。

因此我们重载了 setter 使宽和高任何一个改变时都会同时改变宽高。这样一来，我们就违背了里氏替换原则。

让我们先编写一个 test 来测试  **getArea**  函数。

```java

class Test {

   static void getAreaTest(Rectangle r) {
      int width = r.getWidth();
      r.setHeight(10);
      System.out.println("Expected area of " + (width * 10) + ", got " + r.getArea());
   }

   public static void main(String[] args) {
      Rectangle rc = new Rectangle(2, 3);
      getAreaTest(rc);

      Rectangle sq = new Square();
      sq.setWidth(5);
      getAreaTest(sq);
   }
}

```

团队的测试人员提出测试函数  **getAreaTest** ，然后告诉你正方形对象的 **getArea** 函数不能通过测试。

在第一个测试中，我们创建了一个宽为 2 高为 3 的矩形，然后调用 **getAreaTest**，预期输出为 20，但是当传入一个正方形时出错了。这是因为调用测试里的  **setHeight**  函数会同时设置 width，导致输出结果不符预期。

## 接口隔离原则

隔离意味着保持独立，接口隔离原则是关于接口的独立。

该原则描述了很多客户端特定的接口优于一个多用途接口。客户端不应该强制实现他们不需要的函数。

这是一个简单的原则，很好理解和实践，直接看例子。

```java

public interface ParkingLot {

	void parkCar();	// Decrease empty spot count by 1
	void unparkCar(); // Increase empty spots by 1
	void getCapacity();	// Returns car capacity
	double calculateFee(Car car); // Returns the price based on number of hours
	void doPayment(Car car);
}

class Car {

}

```

我们定义了一个非常简单的停车场。这是按小时付费的停车场，不考虑免费的情况。

```java

public class FreeParking implements ParkingLot {

	@Override
	public void parkCar() {
		
	}

	@Override
	public void unparkCar() {

	}

	@Override
	public void getCapacity() {

	}

	@Override
	public double calculateFee(Car car) {
		return 0;
	}

	@Override
	public void doPayment(Car car) {
		throw new Exception("Parking lot is free");
	}
}

```

停车场接口组合了两个事情：停车相关逻辑（停车、取车、获取车位信息）以及支付相关逻辑。

但是这太具体了。即使是 FreeParking class 也要必须实现不相关的支付相关的方法。让我们隔离接口。

![](https://erinc.io/wp-content/uploads/2020/08/SOLID-Tutorial-1024x432.png)

现在停车场更干净了。有了新的 model，可以更进一步把 **PaidParkingLot** 分割一下以支持更多的支付类型。

现在我们的 model 更灵活、可扩展，客户端无需实现任何不相关的逻辑，因为只在停车场接口实现了停车相关的函数。

## 依赖倒置原则

依赖倒置原则描述的是我们的 class 应该依赖接口和抽象类而不是具体的类和函数。

在这篇[文章][3]（2000）里，Bob 大叔如下总结该原则：

> “如果 OCP 声明了 OO 体系结构的目标，那么 DIP 则声明了主要机制”。

这两个原则的确息息相关，我们在讨论开闭原则之前也要用到这一模式。

我们想要我们的类开放扩展，因此我们需要明确我们的依赖的是接口而不是具体的类。我们的 PersistenceManager class 依赖 InvoicePersistence 而不是实现了这个接口的 class。

## 结论

在本文中，先介绍了 SOLID 原则的历史，接着尝试解释清楚为什么使用以及怎么使用各个原则。我们甚至重构了一个简单的发票应用来遵循 SOLID 原则。

感谢你花时间阅读本文，希望上面的概念已经解释清楚了。

建议在设计、编写、重构代码时能够记住这些原则，这样代码可以更干净、可扩展、可测试。

如果你想阅读更多类似的文章，可以邮件订阅我的[博客][4]，这样我发新文章的时候就会通知你啦。

[1]: https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf
[2]: https://agilemanifesto.org/history.html
[3]: https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf
[4]: https://erinc.io/
