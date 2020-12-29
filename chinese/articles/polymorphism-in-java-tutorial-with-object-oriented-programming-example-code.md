> * 原文地址：[Polymorphism in Java Tutorial – With Object Oriented Programming Example Code 详解 Java 多态](https://www.freecodecamp.org/news/polymorphism-in-java-tutorial-with-object-oriented-programming-example-code/)
> * 原文作者：Rob O'Leary
> * 译者：zhannicholas
> * 校对者：

![Polymorphism in Java Tutorial – With Object Oriented Programming Example Code](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/banner-1.jpg)

![Java 多态教程](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/banner-1.jpg)

Polymorphism allows objects to be treated in a substitutable way. This reduces duplication of code when you want the same actions to be performed on different types of objects. Polymorphism literally means “_many forms_”.

多态（Polymorphism）的字面意思是“_多种形式_”，它允许对象被视为可替代的。当你想让不同类型的对象完成相同的动作时，多态能帮你减少重复代码。

Let's explain what we mean by this exactly.

让我们解释一下这到底是什么意思。

## Explanation of Polymorphism by Analogy

## 用类比解释多态

If you have ever travelled internationally, one item on your packing checklist is likely to be an electrical plug adapter. Otherwise, you may not be able to charge your phone and other devices.

如果你有过国际旅行的经历，你的行李检查单上很可能会有电插头适配器。否则，你可能就无法给你的手机和其它设备充电了。

![packing.jpg](https://www.freecodecamp.org/news/content/images/2020/10/call-me-fred-nBfTARHPxiU-unsplash-1-.jpg)

Photo by  [Call Me Fred][1]

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/10/call-me-fred-nBfTARHPxiU-unsplash-1-.jpg" alt="packing.jpg"/>
    <figcaption style="text-align: center">
        <a href="https://unsplash.com/@callmefred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Call Me Fred</a> 拍摄
    </figcaption>
</figure>

Bizarrely, there are approximately 16 different types of electrical sockets worldwide. Some have 2 pins, some have 3 pins, some pins are circular, some pins are rectangular, and the configuration of the pins vary.

很奇怪，世界上大概有 16 种不同类型的电源插座：两脚的、三脚的、圆形的、方形的，插脚的配置也五花八门。

The solution most people take is to buy a universal plug adapter.

大多数人的对策就是买一个通用的插头适配器。

To look at the problem another way, generally the issue is we have a socket interface which accepts only 1 type of plug object! Sockets are not polymorphic.

换一种方式看待这个问题，普遍问题是我们的插座接口只接受一种类型的插头对象！插座不是多态的。

Life would be much easier for everyone is if we had sockets that could accept many different types of plugs. We can make the socket interface polymorphic by creating different shaped slits. You can see in the image below how this has been done.

要是我们的插座能接受很多不同类型的插头，生活就没那么累了。我们可以通过创造不同形状的开口，让插座变成多态的，你能从下面这种图片中看出玄机：

![socket-metaphor](https://www.freecodecamp.org/news/content/images/2020/10/socket-metaphor.svg)

Polymorphism helps us to create more universal interfaces.

多态帮助我们创建更多通用的接口。

## Explanation with Code

## 用代码解释

Any object that has an IS-A relationship is considered polymorphic. You have an IS-A relationship through inheritance (using the  _extends_  keyword in the class signature), or through interfaces (using the  _implements_  keyword in the class signature).

任何具有 IS-A 关系的对象都可以看成是多态的，获得 IS-A 关系的途径有两种：通过继承（在类的签名上使用 _extends_ 关键字）或通过接口（在类的签名上使用 _implements_ 关键字）。

To understand polymorphism completely, you should understand inheritance and interfaces as well.

为了完全理解多态，你应该同时理解继承和接口。

```java
class Dog extends Animal implements Canine{
 // ... some code here
}

```

Based on the snippet above, a  `Dog`  has the following IS-A relationships:  `Animal`,  `Canine`, and  `Object`  (every class implicitly inherits from the  [Object class][2], which sounds a bit ridiculous!).

根据上面这段代码，`Dog` 具有以下 IS-A 关系：`Animal`、`Canine` 和 `Object`（每个类都隐式继承 [Object 类][2]，这听起来有些离谱！）。

Let's give a simple (silly) example to illustrate how we can use to polymorphism to simplify our code. We want to create an app with an interrogator that can convince any animal to talk.

让我们用一个简单的（傻瓜式的）例子来说明如何使用多态简化代码。我们想创建一个关于应用，应用中的审讯官能让任何动物开口说话。

![interrogation](https://www.freecodecamp.org/news/content/images/2020/11/interrogation-1.png)

We will create an  `Interrogator`  class that is responsible for convincing the animals to talk. We don't want to write a method for each type of animal:  `convinceDogToTalk(Dog dog)`,  `convinceCatToTalk(Cat cat)`, and so on.

我们将创建一个负责让动物开口说话的 `Interrogator` 类，但我们并不想为每种动物都写一个方法：`convinceDogToTalk(Dog dog)`、 `convinceCatToTalk(Cat cat)`，等等。

We would prefer one general method that would accept any animal. How can we do this?

我们更喜欢用一个可以接受任何动物的通用方法，怎么做呢？

```java
class Interrogator{
    public static void convinceToTalk(Animal subject) {
        subject.talk();
    }
}

// We don't want anyone creating an animal object!
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
    <span class="token class-name" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">Interrogator</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">convinceToTalk</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>dog<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">//prints "Woof!"</span>
    <span class="token class-name" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">Interrogator</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">convinceToTalk</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>cat<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">//prints "Meow!"</span>
    <span class="token class-name" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">Interrogator</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">convinceToTalk</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>animal<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">//prints "Woof!"</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

We create the  `convinceToTalk`  method to accept an  `Animal`  object as a parameter. Inside the method we call the  `talk`  method of that object. As long as the object type is an  `Animal`  or a subclass of  `Animal`, the compiler is happy.

我们创建了一个 `convinceToTalk` 方法，它接收一个 `Animal` 类型的对象作为参数。在方法内部，我们会调用该对象的 `talk` 方法，只要这个对象的类型是 `Animal` 或其子类，编译器就会欣然接受。

The Java Virtual Machine (JVM) decides at runtime which method will be called based on the class of the object. If the object has a type of  `Dog`, the JVM invokes the implementation that says "Woof!".

Java 虚拟机（JVM）在运行时会根据对象所属的类决定调用哪个方法。如果这个对象的类型是 `Dog`，JVM 就会调用说“Woof”的方法实现。

This pays off in 2 ways:

1.  We only need to write one general method. We don't need to do any type checking.
2.  In the future, if we create a new animal type, we don't need to modify the  `Interrogator`  class.

这么做有两个好处：

1. 我们只需要写一个通用的方法，不需要做任何的类型检测。
2. 如果我们在将来创建了一个新的动物类型，我们不需要修改 `Interrogator` 类。

This type of polymorphism is referred to as overriding.

这种类型的多态被称为重写（overriding）。

## Overriding

## 重写

The example we discussed already covered the broad concept of overriding. Let's give a formal definition and more specifics.

我们之前讨论的例子是广义的重写，让我们给一个正式的定义和更多的细节吧。

Overriding is when you create a different implementation of the  **exact same instance method**  (identical method signature) in a related class.

当你在一个相关类中创建一个 **同一个实例方法**（方法签名相同） 不同实现的时，重写就发生了。

At runtime, the method of the  **object type**  is chosen. This is why overriding is also referred to as runtime polymorphism.

在运行期间，程序才会选择 **对象类型** 的方法。这就是重写也被成为运行时多态的原因。

Overriding is achieved by providing a different implementation of a method in a child class (subclass), which is defined in its parent class (superclass).

重写的一种实现方式是：父类定义方法，而子类提供方法的不同实现。

![overriding inheritance](https://www.freecodecamp.org/news/content/images/2020/10/overriding-inheritance.png)

Overriding is also achieved by providing different implementations of a method defined in an interface.

另一种实现重写的方式是：为接口中定义的方法提供不同的实现。

![overriding interface](https://www.freecodecamp.org/news/content/images/2020/10/overriding-interface.png)

Rules for overriding a method:

1.  It must be a method defined through an IS-A relationship (through  `extends`  or  `implements`). This is why you may find it referred to as subtype polymorphism.
2.  It must have the same argument list as the original method defintion.
3.  It must have the same return type, or a return type that is a subclass of the return type of the original method defintion.
4.  It cannot have a more restrictive access modifier.
5.  It may have a less restrictive access modifier.
6.  It must  _not_  throw a new or broader checked exception.
7.  It may throw narrower, fewer or no checked exceptions, for example a method that declares a  _IOException_  can be overridden by a method that declares a  _FileNotFoundException_  (because it’s a subclass of  _IOException_).
8.  The overriding method can throw any unchecked exception, regardless of whether the overridden method declares the exception.

重写方法的规则：

1. 方法本身必须是通过 IS-A 关系（通过 `extends` 或 `implements`）定义的。有时候你会发现这种方法被称为子类型多态（subtype polymorphism），这就是原因。
2. 重写方法必须与原方法具有相同的参数列表。
3. 重写方法的返回类型要么与原方法的返回类型相同，要么为原方法返回类型的子类。
4. 重写方法的访问限制修饰符不能比原方法的更严格。
5. 重写方法的访问限制修饰符可以比原方法的宽松。
6. 重写方法 _不能_ 抛出一个新的或者范围更广的受检异常。
7. 重写方法可以抛出范围更小的或更少的受检异常（也可以不抛出）。例如声明了 _IOException_ 的方法可以被声明了 _FileNotFoundException_ 的方法重写，因为 _FileNotFoundException_ 是 _IOException_ 的子类。
8. 重写方法可以抛出任何非受检异常，而不用管原方法是否有声明这些非受检异常。

> Recommendation: Use the  _@override_  annotation when overriding methods. It provides compile-time error-checking on the method signature. This will help you avoid breaking the rules listed above.

> 推荐在重写方法的时候使用 _@Override_ 注解，它能在编译时提供方法签名上的错误检查，能避免你违背上面的重写规则。

![override annotation](https://www.freecodecamp.org/news/content/images/2020/11/override-annotation.png)

### Prohibiting overriding

### 禁止重写

If you don’t want a method to be overridden, declare it as final.

如果你不想某个方法被重写，把它声明为 final 即可：

```java
class Account {
    public final void withdraw(double amount) {
        double newBalance = balance - amount;
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>newBalance <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span> <span class="token number" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);">0</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
        balance <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span> newBalance<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
    <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

### Static methods

### 静态方法

**You cannot override a static method**. You are really creating an  _independent_  definition of the method in a related class.

**静态方法不可重写**。你其实是在一个相关类中创建那个方法的 _不同_ 定义。

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

Running the  `Test`  class in the example above will print "in A". This demonstrates overriding is not happening here.

运行示例中的 `Test` 类会打印出“in A”，说明这里并没有出现重写。

If you change the  `print`  method in classes  `A`  and  `B`  to be an instance method by removing  `static`  from the method signature, and run the  `Test`  class again, it will print "in B" instead! Overriding is happening now.

如果你把类 `A` 和 类 `B` 中的 `print` 方法变成实例方法（从方法的签名上移除 `static`），再次运行 `Test`类，打印出来的就是“in B”！重写在现在发生了。

**Remember, overriding choses the method based on the object type, not the variable type.**  🧐

**记住：重写通过对象类型选择方法，而不是通过变量类型。**  🧐

## Overloading (functional polymorphism)

## 重载（函数多态）

Overloading is when you create different versions of the same method.

重载（overloading）发生在你创建同一个方法的不同版本的时候。

The name of the method must be the same, but we can change the parameters  
and return type.

方法名字必须相同，但是我们可以改变参数和返回值的类型。

In Java's  [Math class][3], you will find many examples of overloaded methods. The  `max`  method is overloaded for different types. In all cases, it is returning the number with the highest value from the 2 values provided, but it does it for different (unrelated) number types.

你能在 Java 的 [Math 类][3] 中找到很多方法重载的例子。`max` 方法被不同类型重载，在所有的情况中，它返回两个值中的最大值，但是它适用于不同的（不相关的）数值类型。

![overloading-max-example](https://www.freecodecamp.org/news/content/images/2020/10/overloading-max-example.png)

The (reference) variable type is what determines which overloaded method will be chosen. Overloading is done at compile time.

重载方法的选取由（引用）变量类型决定，重载在编译时完成。

Overloaded methods provide more flexibility for people using your class. People using your class may have data in different formats, or may have different data available to them depending on different situations in their application.

重载方法为类的使用者提供了更好的灵活性。在使用者的应用中，可能存在多种不同格式的数据，也可能在不同情形下有不同的可用数据。

For example, the  [List][4]  class overloads the  `remove`  method. A List is an ordered collection of objects. So, you may want to remove an object at a particular position (index) in a list. Or you may not know the position, and just want to remove the object wherever it is. So that's why it has 2 versions.

例如，[List][4] 类重载了 `remove` 方法。因为列表（List）是对象的有序集合，所以你可能想某个特定位置（下标）的对象从列表中移除。或者你可能并不知道具体的位置，不管那个对象在哪里，你只是想把它从列表中移除。这就是为什么会有两个版本的 `remove` 方法。

![list-overloaded-methods](https://www.freecodecamp.org/news/content/images/2020/10/list-overloaded-methods.png)

Constructors can be overloaded also.

构造函数函数也可以被重载。

For example, the  [Scanner][5]  class has many different inputs that can be provided for creating an object. Below is a small snapshot of the constructors that cater to this.

例如，[Scanner][5] 类有很多不同类型的输入，这些输入都可以用来创建对象。下面是这个类的一个小快照。

![constructor](https://www.freecodecamp.org/news/content/images/2020/10/constructor.png)

Rules for overloading a method:

1.  It must have a different argument list.
2.  It may have a different return type.
3.  It may have different access modifiers.
4.  It may throw different exceptions.
5.  Methods from a superclass can be overloaded in a subclass.

重载方法的规则：

1. 它必须有一个不同的参数列表。
2. 它可能有不同的返回类型。
3. 它可能有不同的访问修饰符。
4. 它可能抛出不同的异常。
5. 父类的方法可以被子类重载。

## Differences between overriding and overloading

1.  Overriding must be based on a method from an IS-A relationship, overloading doesn't have to be. Overloading can occur within a single class.
2.  Overridden methods are chosen based on the object type, whereas overloaded methods are chosen based on the (reference) variable type.
3.  Overriding occurs at run-time, while overloading occurs at compile-time.

## 重写与重载的区别

1. 重写必须基于 IS-A 关系的方法，重载则不必这样。重载可以在同一个类中出现。
2. 重写方法是根据对象类型进行选取的，而重载方法的选取是根据（引用）变量类型的。
3. 重写发生在运行时，而重载发生在编译时。

## Parametric polymorphism

## 参数多态

Parameteric polymorphism is achieved through  [generics][6]  in Java.

Java 中的参数多态（parameteric polymorphism）是通过[泛型][6]实现的。

Generics were added to the language in version 5.0. They were designed to extend Java's type system to allow "a type or method to operate on objects of various types while providing compile-time type safety".

Java 5.0 中引入了泛型，它的设计初衷是扩展 Java 的类型系统，从而允许“一个类型或方法操作多种类型的对象，同时提供编译时的类型安全”。

Basically, a generic form of a class or method can have all of its types replaced.

基本上，泛型类或泛型方法中的泛型类型可以被替换为所有的类型。

A simple example is  [ArrayList][7]. The class definition has a generic in it, and it is signified by  `<E>`. Some of the instance methods such as  `add`  use this generic type in their signatures.

[ArrayList][7] 就是一个简单的例子，它的类定义中有一个标志为 `<E>` 的泛型参数。一些像 `add` 这样的实例方法就在它们的签名中使用了这个泛型类型。

![arraylist class definition](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-2.png)

![arraylist definition add methods](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-methods.png)

By providing a type in angle brackets when we create an  `ArrayList`  object, we fill in the generic references defined throughout the class. So, if we create an  `ArrayList`  with the  `Dog`  generic type, the  `add`  method will only accept a  `Dog`  object as an argument.

在创建一个 `ArrayList` 对象的时候，我们在尖括号中提供类型，以此填充整个类中定义的泛型引用。因此，如果我们创建了一个泛型类型为 `Dog` 的 `ArrayList`，`add` 方法将只会接受 `Dog` 对象作为参数。

![arraylist dog method signature](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-dog-method-signature-1.png)

There is a compile-time error if you try to add anything other than a  `Dog`! If you use a code editor such as IntelliJ, you will get the red squiggly line to highlight your offense (as below).

如果你尝试添加除 `Dog` 以外的任何东西，就会出现编译错误！如果你使用像 IntelliJ 这样的代码编辑器，你就能得到红色的波浪线，它会突出你犯的错误。如下所示：

![arraylist type checking](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-type-checking-1.png)

## Final Words

## 结语

Polymorphism is a tricky topic to come to grips with, especially when you are new to programming. It takes some time to identify the right situations to use it in your code.

多态是一个棘手的话题，对于编程小白来说更是如此。找出在代码中使用泛型的正确场合，是会花些时间的。

But once you get comfortable with it, you will find it improves your code a lot.

但是，一旦你习惯了它，你会发现多态能大幅改善你的代码。

## Photo Attribution

## 照片归属

Banner Photo by  [Markus Spiske][8]  on Unsplash.

标题的照片由来自 Unsplash 的 [Markus Spiske][8] 拍摄。

[1]: https://unsplash.com/@callmefred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[2]: https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
[3]: https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html
[4]: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
[5]: https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html
[6]: https://docs.oracle.com/javase/tutorial/extra/generics/index.html
[7]: https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html
[8]: https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
