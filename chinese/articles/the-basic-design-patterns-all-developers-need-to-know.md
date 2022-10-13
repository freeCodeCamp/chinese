# 设计模式是什么？

![](https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/design-patterns-everywhere.jpg)

设计模式是一些设计级别的解决方案。这些解决方案是为了解决软件工程师经常遇到的问题。它不是代码，我再说一遍，它**不是代码**。 它就像一种描述，描述如何解决这些问题、如何设计解决方案。

使用这些模式被认为是一种很好的实践，因为解决方案的设计经过了充分的尝试和测试，从而使最终代码具有更高的可读性。设计模式经常被面向对象语言（如Java）创建和使用。（接下来的大多数例子将会以 Java 编写）

# 设计模式的类型

目前发现了大约26种模式（我几乎不认为我会完成所有这些模式……）。

这26种可分为3种类型：

1. 创建型：这些模式是为类实例化而设计的。它们可以是类创建模式或对象创建模式。

2. 结构型：这些模式是根据类的结构和组成设计的。大多数这些模式的主要目标是增加所涉及类的功能，而不改变其组成。

3. 行为型：这些模式的设计取决于一个类如何与其他类通信。

在这篇文章中，我们将针对每种分类类型介绍一种基本设计模式。

## 类型1：创建型 - 单例设计模式

单例设计模式是一种创建型模式，它的目标是限制一个类只能创建一个实例对象，并且只为该实例对象提供唯一一个全局访问点。Java 中这种类的一个常用示例是 Calendar ，它使用自己的 `getInstance()` 方法来获取要使用的实例对象，你无法为 Calendar 类再创建一个实例对象。

使用单例设计模式的类将包括

![单例类图](https://www.freecodecamp.org/news/content/images/2019/07/singleton-class-diagram.png)

1. 一个私有静态变量，保存该类的唯一实例。
2. 私有构造函数，因此无法在该类以外实例化。
3. 一个公共静态方法，用于返回类的唯一实例。

单例设计有许多不同的实现，今天我会介绍以下几种

1. 饿汉式实例化
2. 懒汉式实例化
3. 线程安全实例化

### 雄心勃勃？

```java
public class EagerSingleton {
	// 创建类实例
	private static EagerSingleton instance = new EagerSingleton();

	// 私有构造器，因此无法在这个类的外部实例化
	private EagerSingleton() {  }

	// 获取创建的唯一实例对象。
	public static EagerSingleton getInstance() {
		return instance;
	}
}
```

这种类型的实例化发生在类加载期间，所以变量实例的实例化发生在任何方法之外。如果客户端应用程序根本没有使用此类，就会构成一个很大的缺陷。如果没有使用这个类，应急计划就是使用**懒汉式实例化**

### 懒散的日子？

这里与上述实现没有太大区别。主要区别在于静态变量被声明为 `null`，当且仅当实例变量在检查时仍然为 `null` 才在 `getInstance()` 方法中实例化。

```java
public class LazySingleton {
	// 初始化实例置为null
	private static LazySingleton instance = null;

	// 私有构造器，因此无法在这个类的外部实例化
	private LazySingleton() {  }

	// 检查实例，若为null，则创建实例对象
	public static LazySingleton getInstance() {
		if (instance == null) {
			instance = new LazySingleton();
		}
		return instance;
	}
}
```

解决了一个问题，但另一个仍然存在。如果两个不同的客户端同时访问单例类，该怎么办呢？好吧，它们将同时检查实例是否为 `null`，并且会发现它们结果都是 `true`，所以会创建两个实例，两个客户端的每个请求各一个。要解决这个问题，需要实现**线程安全实例化**。

### （线程）安全是关键？

在 Java 中，关键字 `synchronized` 用于方法或对象以实现线程安全，因此同时只有一个线程能访问特定资源。类实例化被放在同步块中，所以该方法能在给定时间只由一个客户端访问。

```java
public class ThreadSafeSingleton {
	// 初始化实例置为null
	private static ThreadSafeSingleton instance = null;

	// 私有构造器，因此无法在这个类的外部实例化
	private ThreadSafeSingleton() {  }

	// 检查实例，若为 null 且在同步块中，则创建实例对象
	public static ThreadSafeSingleton getInstance() {
		synchronized (ThreadSafeSingleton.class) {
			if (instance == null) {
				instance = new ThreadSafeSingleton();
			}
		}
		return instance;
	}
}
```

同步方法的开销很高，并降低了整个程序运行的性能。

举个例子，如果实例变量已经实例化，那么每次任何客户端访问 `getInstance()` 方法时，`synchronized` 方法都会运行并导致性能下降。所以 `synchronized` 方法只应该运行在检查实例变量的值为 `null` 时。如果检测结果为 `false`，就应该跳过 `synchronized` 方法。

为了减少此开销，使用双重锁。检查也在 `synchronized` 方法之前使用，如果值为 `null`，则运行 `synchronized` 方法。

```java
// 双重锁用于降低 synchronized 方法的开销
public static ThreadSafeSingleton getInstanceDoubleLocking() {
	if (instance == null) {
		synchronized (ThreadSafeSingleton.class) {
			if (instance == null) {
				instance = new ThreadSafeSingleton();
			}
		}
	}
	return instance;
}
```

现在进入下一个分类。

## 类型2：结构型 - 装饰器设计模式

我将为你提供一个小场景，用来给出一个更好的上下文用来说明为什么以及在何处使用修饰器模式。

话说你拥有一家咖啡店，就像所有新手一样，刚开始你只需要家常咖啡和焦炒咖啡两种普通咖啡。在你的结算系统中，有一个类用于不同的混合咖啡，它继承了饮料抽象类。人们走进店里，准备喝你美妙（虽然苦涩）的咖啡。这时，有个咖啡新人想要加糖或牛奶，（很无语）真是对咖啡的嘲弄。

现在你需要将这两个配料放在菜单和结算系统上，你的IT人员别出心裁地为每种咖啡分别添加两个子类，一种加糖，一种加牛奶。这时，由于客户总是对的，其中一个又说这些可怕的话：

“请来一杯加糖的牛奶咖啡。”

### ???

望着你的结算系统，尴尬而又不失礼貌的微笑再次挂在了你的脸上。 好吧，回到绘图板……

然后，IT人员将加糖的牛奶咖啡作为子类添加到每个父咖啡类中。本月剩下的时间一帆风顺，人们排队等候你的咖啡，你实际上赚钱了。

但等等，这还不够！

整个世界又怼你，一个竞争对手在街对面开业，不仅有4种咖啡，还有超过10种配料！

为了自己的咖啡卖得更好，对手有的没有的你都买了，这时候你想起了忘记更新那个讨厌的结算系统。你几乎不可能为所有的配料组合添加无穷无尽的子类，更不用说最终系统的大小。

是时候接入正确的结算系统了。你找到了懂行的IT人员，他们说：“如果使用装饰器模式，这将更容易和更小。”

### 装饰器模式究竟是什么？

装饰器设计模式属于结构型，它处理类的实际结构，无论是继承，组合或是两者结合。它设计的目标是在运行时修改对象的功能，这也是许多其他设计模式的目的之一。

让我们给**数学**一个登场机会（不寒而栗？），来把这一切都带入视野：

4种混合咖啡和10种配料。如果我们坚持为每一种类型的咖啡的所有配料的每一种不同组合生成子类。那是：

(10–1)² = 9² = 81 个子类

我们从10中减去1，因为你不能将同一种配料混合，糖加糖听起来太蠢了，这只是一种混合咖啡。81乘以4，你会得到惊人的324个不同的子类！再想想那些涉及到的代码……

但是在这种情况下，装饰器模式只需要16个类。敢打赌吗？

![Decorator Design Pattern Class diagram](https://www.freecodecamp.org/news/content/images/2019/07/decorator-class-diagram.png)

![Class diagram according to coffee shop scenario](https://www.freecodecamp.org/news/content/images/2019/07/decorator-coffee-class-diagram.png)

如果我们根据上面的类图绘制出我们的场景，我们得到4个混合咖啡类，10个配料类，1个抽象组件，1个抽象装饰器。看！16个！现在交出100美元。(开玩笑别当真, 当然如果你愿意给，我也不会拒绝……嘛，说说而已)

从上面可以看出，正如实现混合咖啡类是饮料抽象类的子类一样，配料抽象类也从饮料抽象类继承了方法。配料类作为饮料抽象类的子类，能在需要时用自己的新方法向基础对象添加功能。

让我们来编码，看看这个模式如何运用。

首先制作抽象饮料类，所有不同的混合咖啡类将继承自饮料抽象类：

```java
public abstract class Beverage {
	private String description;
    
	public Beverage(String description) {
		super();
		this.description = description;
	}
    
	public String getDescription() {
		return description;
	}
    
	public abstract double cost();
}
```

然后添加实现混合咖啡类

```java
public class HouseBlend extends Beverage {
	public HouseBlend() {
		super(“House blend”);
	}

	@Override
	public double cost() {
		return 250;
	}
}

public class DarkRoast extends Beverage {
	public DarkRoast() {
		super(“Dark roast”);
	}

	@Override
	public double cost() {
		return 300;
	}
}
```

配料抽象类也继承自饮料抽象类（更多内容见下文）。

```java
public abstract class AddOn extends Beverage {
	protected Beverage beverage;

	public AddOn(String description, Beverage bev) {
		super(description);
		this.beverage = bev;
	}

	public abstract String getDescription();
}
```

现在这个抽象类的具体实现类：

```java
public class Sugar extends AddOn {
	public Sugar(Beverage bev) {
		super(“Sugar”, bev);
	}

	@Override
	public String getDescription() {
		return beverage.getDescription() + “ with Mocha”;
	}

	@Override
	public double cost() {
		return beverage.cost() + 50;
	}
}

public class Milk extends AddOn {
	public Milk(Beverage bev) {
		super(“Milk”, bev);
	}

	@Override
	public String getDescription() {
		return beverage.getDescription() + “ with Milk”;
	}

	@Override  public double cost() {
		return beverage.cost() + 100;
	}
}
```

如你所见，我们可以将饮料抽象类的任何子类传递给配料抽象类的任何子类，并且获得增加的成本以及更新描述。由于配料抽象类继承自饮料抽象类，我们可以将配料抽象类传递给另一个配料抽象类。这样，我们就可以为特定的混合咖啡添加任意数量的配料。

现在编写一些代码来测试它。

```java
public class CoffeeShop {
	public static void main(String[] args) {
		HouseBlend houseblend = new HouseBlend();
		System.out.println(houseblend.getDescription() + “: “ + houseblend.cost());

		Milk milkAddOn = new Milk(houseblend);
		System.out.println(milkAddOn.getDescription() + “: “ + milkAddOn.cost());

		Sugar sugarAddOn = new Sugar(milkAddOn);
		System.out.println(sugarAddOn.getDescription() + “: “ + sugarAddOn.cost());
	}
}
```

最终结果是：

![P.S. this is in Sri Lankan Rupees](https://www.freecodecamp.org/news/content/images/2019/07/decorator-final.PNG)

运行成功！我们不需要为所有混合咖啡的每种配料组合添加无限多的子类，也能够在混合咖啡中添加多个配料，并成功更新其最终成本和描述。

来，看看最后一类。

## 类型3：行为型 - 命令设计模式

行为设计模式侧重于类、对象如何相互通信。命令模式的主要焦点是在所涉及的各个类之间灌输更高程度的低耦合。

呃……那是什么？

耦合是两个（或多个）类之间的交互方式。这些类交互时的理想情况是它们不会相互依赖，这被称为低耦合。所以，低耦合的良好定义是互相连接的类，彼此直接调用最少。

当需要发送请求而不需要明确知道请求者或接收者是谁时，就需要这种模式。

在这种模式中，调用类与实际执行操作的类分离。调用者类中只有在客户端请求时运行必要命令的可调用方法 `execute`。

我们来看一个现实世界中的基本例子——在一家高档餐厅点餐。随着流程的进行，你将订单（命令）交给服务员（调用者），然后服务员将其交给厨师（接收者），这样你就可以获得食物。可能听起来很简单，但对于代码实现就有点……

![The idea is pretty simple, but the coding goes around the nose.](https://www.freecodecamp.org/news/content/images/2019/07/chain-of-command-be-like-pop-snoke-im-going-to-27790631.png)

![Command Design Pattern Class Diagram](https://www.freecodecamp.org/news/content/images/2019/07/command-class-diagram.PNG)

技术方面的操作流程是，你点菜形成了一个订单（这个订单 `Order` 具体实现了命令接口要求厨师完成一道菜）。你把订单交个服务员（服务员 `Waiter` 就是调用者，他知道何时发出此命令）。服务员把订单交给厨师（收到特定订单时，厨师 `Chef` 是唯一知道具体该做什么的人，这就实现了低耦合）。如此，当调用者执行 `execute` 方法时，它调用订单对象的 `execute` 方法，而订单对象的 `execute` 方法又调用接收者对应的方法，从而完成必要的操作。

### 我们需要实现：

1. 一个接口 `Command`
2. 一个具体实现 `Command` 接口的 `Order` 类
3. 一个 `Waiter` 类（调用者）
4. 一个 `Chef` 类（接收者）

 所以代码大概像这样：

#### 厨师是接收者

```java
public class Chef {
	public void cookPasta() {
		System.out.println(“Chef is cooking Chicken Alfredo…”);
	}

	public void bakeCake() {
		System.out.println(“Chef is baking Chocolate Fudge Cake…”);
	}
}
```

#### 命令接口（ `Command Interface` ）

```java
public interface Command {
	public abstract void execute();
}
```

#### 订单是命令接口具体实现类

```java
public class Order implements Command {
	private Chef chef;
	private String food;

	public Order(Chef chef, String food) {
		this.chef = chef;
		this.food = food;
	}

	@Override
	public void execute() {
		if (this.food.equals(“Pasta”)) {
			this.chef.cookPasta();
		} else {
			this.chef.bakeCake();
		}
	}
}
```

#### 服务员是调用者

```java
public class Waiter {
	private Order order;

	public Waiter(Order ord) {
		this.order = ord;
	}

	public void execute() {
		this.order.execute();
	}
}
```

#### 你是客户

```java
public class Client {
	public static void main(String[] args) {
		Chef chef = new Chef();
        
		Order order = new Order(chef, “Pasta”);
		Waiter waiter = new Waiter(order);
		waiter.execute();

		order = new Order(chef, “Cake”);
		waiter = new Waiter(order);
		waiter.execute();
	}
}
```

如上所示，客户发出订单并将接收者设置为厨师。该订单将发送给服务员，服务员知道何时执行订单（即何时向厨师下订单进行烹饪）。当调用者执行程序时，订单的执行方法在接收者上运行（即主厨被命令要么煮意大利面要么烘烤蛋糕）。

# 快速回顾一下

在这篇文章中我们说明了：

1. 真正的设计模式是什么
2. 不同类型的设计模式以及它们为什么不同
3. 每种类型的一个基本或通用设计模式

我希望这可以帮到你。

点击[这里](https://github.com/samsam-026/Design_Patterns)跳转到这篇文章示例代码的仓库


---

> [深入研究单例模式](http://www.liuzhaocn.com/?p=1311)
> [对象和实例的区别](https://www.cnblogs.com/qq641120784/p/8038880.html)
> [命令模式](http://c.biancheng.net/view/1380.html)
