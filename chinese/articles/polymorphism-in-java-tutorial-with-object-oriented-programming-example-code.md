> * 原文地址：[Polymorphism in Java Tutorial – With Object Oriented Programming Example Code 详解 Java 多态](https://www.freecodecamp.org/news/polymorphism-in-java-tutorial-with-object-oriented-programming-example-code/)
> * 原文作者：Rob O'Leary
> * 译者：
> * 校对者：

![Polymorphism in Java Tutorial – With Object Oriented Programming Example Code](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/banner-1.jpg)

Polymorphism allows objects to be treated in a substitutable way. This reduces duplication of code when you want the same actions to be performed on different types of objects. Polymorphism literally means “_many forms_”.

Let's explain what we mean by this exactly.

## Explanation of Polymorphism by Analogy

If you have ever travelled internationally, one item on your packing checklist is likely to be an electrical plug adapter. Otherwise, you may not be able to charge your phone and other devices.

![packing.jpg](https://www.freecodecamp.org/news/content/images/2020/10/call-me-fred-nBfTARHPxiU-unsplash-1-.jpg)

Photo by  [Call Me Fred][1]

Bizarrely, there are approximately 16 different types of electrical sockets worldwide. Some have 2 pins, some have 3 pins, some pins are circular, some pins are rectangular, and the configuration of the pins vary.

The solution most people take is to buy a universal plug adapter.

To look at the problem another way, generally the issue is we have a socket interface which accepts only 1 type of plug object! Sockets are not polymorphic.

Life would be much easier for everyone is if we had sockets that could accept many different types of plugs. We can make the socket interface polymorphic by creating different shaped slits. You can see in the image below how this has been done.

![socket-metaphor](https://www.freecodecamp.org/news/content/images/2020/10/socket-metaphor.svg)

Polymorphism helps us to create more universal interfaces.

## Explanation with Code

Any object that has an IS-A relationship is considered polymorphic. You have an IS-A relationship through inheritance (using the  _extends_  keyword in the class signature), or through interfaces (using the  _implements_  keyword in the class signature).

To understand polymorphism completely, you should understand inheritance and interfaces as well.

```java
class Dog extends Animal implements Canine{
 // ... some code here
}

```

Based on the snippet above, a  `Dog`  has the following IS-A relationships:  `Animal`,  `Canine`, and  `Object`  (every class implicitly inherits from the  [Object class][2], which sounds a bit ridiculous!).

Let's give a simple (silly) example to illustrate how we can use to polymorphism to simplify our code. We want to create an app with an interrogator that can convince any animal to talk.

![interrogation](https://www.freecodecamp.org/news/content/images/2020/11/interrogation-1.png)

We will create an  `Interrogator`  class that is responsible for convincing the animals to talk. We don't want to write a method for each type of animal:  `convinceDogToTalk(Dog dog)`,  `convinceCatToTalk(Cat cat)`, and so on.

We would prefer one general method that would accept any animal. How can we do this?

```java
class Interrogator{
    public static void convinceToTalk(Animal subject) {
        subject.talk();
    }
}

// We don't want anyone creating an animal object!
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

The Java Virtual Machine (JVM) decides at runtime which method will be called based on the class of the object. If the object has a type of  `Dog`, the JVM invokes the implementation that says "Woof!".

This pays off in 2 ways:

1.  We only need to write one general method. We don't need to do any type checking.
2.  In the future, if we create a new animal type, we don't need to modify the  `Interrogator`  class.

This type of polymorphism is referred to as overriding.

## Overriding

The example we discussed already covered the broad concept of overriding. Let's give a formal definition and more specifics.

Overriding is when you create a different implementation of the  **exact same instance method**  (identical method signature) in a related class.

At runtime, the method of the  **object type**  is chosen. This is why overriding is also referred to as runtime polymorphism.

Overriding is achieved by providing a different implementation of a method in a child class (subclass), which is defined in its parent class (superclass).

![overriding inheritance](https://www.freecodecamp.org/news/content/images/2020/10/overriding-inheritance.png)

Overriding is also achieved by providing different implementations of a method defined in an interface.

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

> Recommendation: Use the  _@override_  annotation when overriding methods. It provides compile-time error-checking on the method signature. This will help you avoid breaking the rules listed above.

![override annotation](https://www.freecodecamp.org/news/content/images/2020/11/override-annotation.png)

### Prohibiting overriding

If you don’t want a method to be overridden, declare it as final.

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

**You cannot override a static method**. You are really creating an  _independent_  definition of the method in a related class.

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

If you change the  `print`  method in classes  `A`  and  `B`  to be an instance method by removing  `static`  from the method signature, and run the  `Test`  class again, it will print "in B" instead! Overriding is happening now.

**Remember, overriding choses the method based on the object type, not the variable type.**  🧐

## Overloading (functional polymorphism)

Overloading is when you create different versions of the same method.

The name of the method must be the same, but we can change the parameters  
and return type.

In Java's  [Math class][3], you will find many examples of overloaded methods. The  `max`  method is overloaded for different types. In all cases, it is returning the number with the highest value from the 2 values provided, but it does it for different (unrelated) number types.

![overloading-max-example](https://www.freecodecamp.org/news/content/images/2020/10/overloading-max-example.png)

The (reference) variable type is what determines which overloaded method will be chosen. Overloading is done at compile time.

Overloaded methods provide more flexibility for people using your class. People using your class may have data in different formats, or may have different data available to them depending on different situations in their application.

For example, the  [List][4]  class overloads the  `remove`  method. A List is an ordered collection of objects. So, you may want to remove an object at a particular position (index) in a list. Or you may not know the position, and just want to remove the object wherever it is. So that's why it has 2 versions.

![list-overloaded-methods](https://www.freecodecamp.org/news/content/images/2020/10/list-overloaded-methods.png)

Constructors can be overloaded also.

For example, the  [Scanner][5]  class has many different inputs that can be provided for creating an object. Below is a small snapshot of the constructors that cater to this.

![constructor](https://www.freecodecamp.org/news/content/images/2020/10/constructor.png)

Rules for overloading a method:

1.  It must have a different argument list.
2.  It may have a different return type.
3.  It may have different access modifiers.
4.  It may throw different exceptions.
5.  Methods from a superclass can be overloaded in a subclass.

## Differences between overriding and overloading

1.  Overriding must be based on a method from an IS-A relationship, overloading doesn't have to be. Overloading can occur within a single class.
2.  Overridden methods are chosen based on the object type, whereas overloaded methods are chosen based on the (reference) variable type.
3.  Overriding occurs at run-time, while overloading occurs at compile-time.

## Parametric polymorphism

Parameteric polymorphism is achieved through  [generics][6]  in Java.

Generics were added to the language in version 5.0. They were designed to extend Java's type system to allow "a type or method to operate on objects of various types while providing compile-time type safety".

Basically, a generic form of a class or method can have all of its types replaced.

A simple example is  [ArrayList][7]. The class definition has a generic in it, and it is signified by  `<E>`. Some of the instance methods such as  `add`  use this generic type in their signatures.

![arraylist class definition](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-2.png)

![arraylist definition add methods](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-definition-methods.png)

By providing a type in angle brackets when we create an  `ArrayList`  object, we fill in the generic references defined throughout the class. So, if we create an  `ArrayList`  with the  `Dog`  generic type, the  `add`  method will only accept a  `Dog`  object as an argument.

![arraylist dog method signature](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-dog-method-signature-1.png)

There is a compile-time error if you try to add anything other than a  `Dog`! If you use a code editor such as IntelliJ, you will get the red squiggly line to highlight your offense (as below).

![arraylist type checking](https://www.freecodecamp.org/news/content/images/2020/10/arraylist-type-checking-1.png)

## Final Words

Polymorphism is a tricky topic to come to grips with, especially when you are new to programming. It takes some time to identify the right situations to use it in your code.

But once you get comfortable with it, you will find it improves your code a lot.

## Photo Attribution

Banner Photo by  [Markus Spiske][8]  on Unsplash.

[1]: https://unsplash.com/@callmefred?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[2]: https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html
[3]: https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html
[4]: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
[5]: https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html
[6]: https://docs.oracle.com/javase/tutorial/extra/generics/index.html
[7]: https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html
[8]: https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
