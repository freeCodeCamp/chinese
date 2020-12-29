> * 原文地址：[Polymorphism in Java Tutorial – With Object Oriented Programming Example Code 详解 Java 多态](https://www.freecodecamp.org/news/polymorphism-in-java-tutorial-with-object-oriented-programming-example-code/)
> * 原文作者：Rob O'Leary
> * 译者：zhannicholas
> * 校对者：

![Java 多态教程](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/banner-1.jpg)

多态（Polymorphism）的字面意思是“_多种形式_”，它允许对象被视为可替代的。当你想让不同类型的对象完成相同的动作时，多态能帮你减少重复代码。

让我们解释一下这到底是什么意思。

## 用类比解释多态

如果你有过国际旅行的经历，你的行李检查单上很可能会有电插头适配器。否则，你可能就无法给你的手机和其它设备充电了。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/call-me-fred-nBfTARHPxiU-unsplash-1-.jpg" alt="packing.jpg"/>
    <figcaption style="text-align: center">
        <a href="https://unsplash.com/@callmefred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Call Me Fred</a> 拍摄
    </figcaption>
</figure>

很奇怪，世界上大概有 16 种不同类型的电源插座：两脚的、三脚的、圆形的、方形的，插脚的配置也五花八门。

大多数人的对策就是买一个通用的插头适配器。

换一种方式看待这个问题，普遍问题是我们的插座接口只接受一种类型的插头对象！插座不是多态的。

要是我们的插座能接受很多不同类型的插头，生活就没那么累了。我们可以通过创造不同形状的开口，让插座变成多态的，你能从下面这张图片看出玄机：

![socket-metaphor](https://www.freecodecamp.org/news/content/images/2020/10/socket-metaphor.svg)

多态帮助我们创建更多通用的接口。

## 用代码解释

任何具有 IS-A 关系的对象都可以被认为是多态的，获得 IS-A 关系的途径有两种：通过继承（在类的签名上使用 _extends_ 关键字）或通过接口（在类的签名上使用 _implements_ 关键字）。

为了完全理解多态，你应该同时理解继承和接口。

```java
class Dog extends Animal implements Canine{
 // ... some code here
}

```

根据上面这段代码，`Dog` 具有以下 IS-A 关系：`Animal`、`Canine` 和 `Object`（每个类都隐式继承 [Object 类][2]，这听起来有些离谱！）。

让我们用一个简单的（傻瓜式的）例子来说明如何使用多态简化代码。我们想创建一个应用，应用中的审讯官能让任何动物开口说话。

![interrogation](https://www.freecodecamp.org/news/content/images/2020/11/interrogation-1.png)

我们将创建一个负责让动物开口说话的 `Interrogator` 类，但我们并不想为每种动物都写一个说话的方法：`convinceDogToTalk(Dog dog)`、 `convinceCatToTalk(Cat cat)`，等等。

我们更喜欢用一个可以接受任何动物的通用方法，怎么做呢？

```java
class Interrogator{
    public static void convinceToTalk(Animal subject) {
        subject.talk();
    }
}

// 我们不想让任何人创建动物对象！
abstract class Animal {
    public abstract void talk();
}

class Dog extends Animal {
    public void talk() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal {
    public void talk() {
        System.out.println("Meow!");
    }
}

public class App {
    public static void main(String[] args){
        Dog dog = new Dog();
        Cat cat = new Cat();
        Animal animal = new Dog();
        
        Interrogator.convinceToTalk(dog); //prints "Woof!"
        Interrogator.convinceToTalk(cat); //prints "Meow!"
        Interrogator.convinceToTalk(animal); //prints "Woof!"
    }
}
```

我们创建了一个 `convinceToTalk` 方法，它接收一个 `Animal` 类型的对象作为参数。在方法内部，我们会调用该对象的 `talk` 方法，只要这个对象的类型是 `Animal` 或其子类，编译器就会欣然接受。

Java 虚拟机（JVM）在运行时会根据对象所属的类决定调用哪个方法。如果这个对象的类型是 `Dog`，JVM 就会调用说“Woof”的方法实现。

这么做有两个好处：

1. 我们只需要写一个通用的方法，不需要做任何的类型检测。
2. 如果我们在将来创建了一个新的动物类型，我们不需要修改 `Interrogator` 类。

这种类型的多态被称为重写（overriding）。

## 重写

我们之前讨论的例子是广义的重写，让我们给一个正式的定义和更多的细节吧。

当你在一个相关类中创建 **同一实例方法**（方法签名相同） 的不同实现时，重写就发生了。

在运行时，程序才会选择 **对象类型** 的方法。这就是重写也被成为运行时多态的原因。

重写的一种实现方式是：父类定义方法，而子类提供方法的不同实现。

![overriding inheritance](https://www.freecodecamp.org/news/content/images/2020/10/overriding-inheritance.png)

另一种实现重写的方式是：为接口中定义的方法提供不同的实现。

![overriding interface](https://www.freecodecamp.org/news/content/images/2020/10/overriding-interface.png)

重写方法的规则：

1. 方法本身必须是通过 IS-A 关系（通过 `extends` 或 `implements`）定义的。有时候你会发现这种方法被称为子类型多态（subtype polymorphism），这就是原因。
2. 重写方法必须与原方法具有相同的参数列表。
3. 重写方法的返回类型要么与原方法的返回类型相同，要么为原方法返回类型的子类。
4. 重写方法的访问限制修饰符不能比原方法的更严格。
5. 重写方法的访问限制修饰符可以比原方法的宽松。
6. 重写方法 _不能_ 抛出一个新的或者范围更广的受检异常。
7. 重写方法可以抛出范围更小的或更少的受检异常（也可以不抛出）。例如声明了 _IOException_ 的方法可以被声明了 _FileNotFoundException_ 的方法重写，因为 _FileNotFoundException_ 是 _IOException_ 的子类。
8. 重写方法可以抛出任何非受检异常，而不用管原方法是否有声明这些非受检异常。

> 推荐在重写方法的时候使用 _@Override_ 注解，它能在编译时提供方法签名上的错误检查，能避免你违背上面的重写规则。

![override annotation](https://www.freecodecamp.org/news/content/images/2020/11/override-annotation.png)

### 禁止重写

如果你不想某个方法被重写，把它声明为 final 即可：

```java
class Account {
    public final void withdraw(double amount) {
        double newBalance = balance - amount;
        
        if(newBalance > 0){
        	balance = newBalance;
        }
    }
}
```

### 静态方法

**静态方法不可重写**。你其实是在一个相关类中创建了那个方法的 _不同_ 定义。

```java
class A {
    public static void print() {
        System.out.println("in A");
    }
}

class B extends A {
    public static void print() {
        System.out.println("in B");
    }
}

```

运行示例中的 `Test` 类会打印出“in A”，说明这里并没有出现重写。

如果你把类 `A` 和 类 `B` 中的 `print` 方法变成实例方法（从方法的签名上移除 `static`），再次运行 `Test`类，打印出来的就是“in B”！重写正在发生。

**记住：重写通过对象类型选择方法，而不是通过变量类型。**  🧐

## 重载（函数多态）

重载（overloading）发生在你创建同一个方法的不同版本的时候。

方法名字必须相同，但是我们可以改变参数和返回值的类型。

你能在 Java 的 [Math 类][3] 中找到很多方法重载的例子。`max` 方法被不同类型重载，在所有的情况中，它返回两个值中的最大值，但是它适用于不同的（不相关的）数值类型。

![overloading-max-example](https://www.freecodecamp.org/news/content/images/2020/10/overloading-max-example.png)

重载方法的选取由（引用）变量类型决定，重载在编译时完成。

重载方法为类的使用者提供了更好的灵活性。在使用者的应用中，可能存在多种不同格式的数据，也可能在不同情形下有不同的可用数据。

例如，[List][4] 类重载了 `remove` 方法。因为列表（List）是对象的有序集合，所以你可能想某个特定位置（下标）的对象从列表中移除。或者你可能并不知道具体的位置，不管那个对象在哪里，你只是想把它从列表中移除。这就是为什么会有两个版本的 `remove` 方法。

![list-overloaded-methods](https://www.freecodecamp.org/news/content/images/2020/10/list-overloaded-methods.png)

构造函数函数也可以被重载。

例如，[Scanner][5] 类有很多不同类型的输入，这些输入都可以用来创建对象。下面是这个类的一个小快照。

![constructor](https://www.freecodecamp.org/news/content/images/2020/10/constructor.png)

重载方法的规则：

1. 它必须有一个不同的参数列表。
2. 它可能有不同的返回类型。
3. 它可能有不同的访问修饰符。
4. 它可能抛出不同的异常。
5. 父类的方法可以被子类重载。

## 重写与重载的区别

1. 重写必须基于 IS-A 关系的方法，重载则不必这样。重载可以在同一个类中出现。
2. 重写方法是根据对象类型进行选取的，而重载方法的选取是根据（引用）变量类型的。
3. 重写发生在运行时，而重载发生在编译时。

## 参数多态

Java 中的参数多态（parameteric polymorphism）是通过[泛型][6]实现的。

Java 5.0 中引入了泛型，它的设计初衷是扩展 Java 的类型系统，从而允许“一个类型或方法操作多种类型的对象，同时提供编译时的类型安全”。

基本上，泛型类或泛型方法中的泛型类型可以被替换为所有的类型。

[ArrayList][7] 就是一个简单的例子，它的类定义中有一个标志为 `<E>` 的泛型参数。一些像 `add` 这样的实例方法就在它们的签名中使用了这个泛型类型。

![arraylist class definition](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-2.png)

![arraylist definition add methods](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-methods.png)

在创建 `ArrayList` 对象的时候，我们在尖括号中提供类型，以此填充整个类中定义的泛型引用。因此，如果我们创建了一个泛型类型为 `Dog` 的 `ArrayList`，`add` 方法将只会接受 `Dog` 对象作为参数。

![arraylist dog method signature](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-dog-method-signature-1.png)

如果你尝试添加除 `Dog` 以外的任何东西，就会出现编译错误！如果你使用像 IntelliJ 这样的代码编辑器，你就能得到红色的波浪线，它会突出你犯的错误。如下所示：

![arraylist type checking](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-type-checking-1.png)

## 结语

多态是一个棘手的话题，对于编程小白来说更是如此。找出在代码中使用泛型的正确场合，是要花些时间的。

但是，一旦你习惯了它，你会发现多态能大幅改善你的代码。

## 照片归属

标题的照片由来自 Unsplash 的 [Markus Spiske][8] 拍摄。

[1]: https://unsplash.com/@callmefred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[2]: https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
[3]: https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html
[4]: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
[5]: https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html
[6]: https://docs.oracle.com/javase/tutorial/extra/generics/index.html
[7]: https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html
[8]: https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
