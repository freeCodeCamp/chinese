> -  原文地址：[What is a Compiler? Compilers in C Explained for Beginners](https://www.freecodecamp.org/news/what-is-a-compiler-in-c/)
> -  原文作者：[
                    
                        Tiago Monteiro
                    
                ](https://www.freecodecamp.org/news/author/tiago/)
> -  译者：
> -  校对者：

![What is a Compiler? Compilers in C Explained for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/1-YhjIVZXE56R6YZaTF-Lzig.jpeg)

Did you know that it is thanks to compilers that software exists?

Exactly – compilers are very important, and some form of a compiler exists in all programming languages.

But, what is a compiler? What do they do exactly?

This article will teach you:

1.  What a compiler is with an analogy.
2.  The basic history of C compilers.

Don’t worry, you don’t need programming experience to understand what a compiler is.

You just need to understand the concept first, and then if you want, you can go for the technical definition.

## 1\. What is a Compiler? An Analogy

![Image of phone](https://miro.medium.com/max/1400/1*xFzl6UbF6XI6V0_Tnx-PYg.jpeg)

Photo by [**Tyler Lastovich**](https://www.pexels.com/@lastly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [**Pexels**](https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

Imagine that you are learning a language (French, Spanish, or Portuguese) and you want to know the meaning of a word or sentence.

To do that, you are going to use Google Translate.

The **first step** is knowing what you will type into Google Translate and checking if it is typed correctly.

The **second step** is choosing the language you want to convert. For many readers, it will be English.

The **third** and final step is just getting to know what that sentence means in English.

Essentially, you just typed in Google Translate a sentence or word you did not understand. Google Translate **translated** that sentence into English.

![Translating nadar(portuguese) to swimming(english) ](https://miro.medium.com/max/1400/1*c-mJCyjYTrVguxSgsgYvrQ.png)

Example: nadar(Portuguese) –> swimming (English)

The same thing happens in programming.

In this case, we are using the C language.

The **first step** you must take is to know what you will type in the .c file and if it is typed correctly.

In this example, the file is called main.c_._

```C
#include <stdio.h>

int main()
{
	printf("Hello World");
    
    return 0;
}
```

![Code that will print "Hello world" in a console](https://miro.medium.com/max/1400/1*BtjyNkvX0eboU5JVsD0ayQ.png)

**First step: This code will print “Hello world”**

The **second step** is to compile it. It will be compiled according to the compiler you have.

```Bash
gcc -o main main.c -Wall
```

![Bash command that compiles code](https://miro.medium.com/max/1400/1*cqSo_NpYOYKdSjlBs8_EiQ.png)

**Second step: Command to compile c code**

The **third** and final step is simply getting to know the output of the program – to make sure it is running like we want.

Quick note: if you want to know what each word in the command line terminal means, please check out the “More…” section in this article!

![Hello world](https://miro.medium.com/max/1400/1*3oyRNX8txXm3RQrq3XBWNQ.png)

**Third step: Hello world!**

You can see in the image below a visual explanation of the compiling process:

![Visual comparason os ytranslating a file with compiling a file](https://miro.medium.com/max/1400/1*gusV5pXcVHc6vUfenbiuDQ.png)

Comparing the compilation of a C file with the translation of words

## How C Compilers Work

![1*OH7zqS0KyPMj5qCfjM-lTA](https://miro.medium.com/max/1400/1*OH7zqS0KyPMj5qCfjM-lTA.jpeg)

Photo by [**JÉSHOOTS**](https://www.pexels.com/@jeshoots?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [**Pexels**](https://www.pexels.com/photo/person-holding-sony-ps4-dualshock-4-21067/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

Over the years, tech has evolved at an incredible pace. The same applies to compilers.

The C compiler has, over time, evolved into many versions.

Just like PlayStation – there is the Playstation 2, Playstation 3, Playstation 4, and so on.

The same is true for C compilers. Once it was _standardized,_ many versions were created:

-   C89/90, a version of C once _standardized,_
-   C99 replaced C89 and C90 in 1999.
-   C11 replaced C99 in 2011.
-   C17 replaced C11 in 2018.
-   C2X will replace C17 in 2023.

Just like with a PlayStation, each new version has new features.

Some people prefer just playing on their PlayStation2.

It’s the same with programmers. For a variety of reasons, programmers may prefer to write and debug C code with the C99 or C11.

## More About Compilers

What exactly does _“gcc -o main main.c -Wall”_ mean, that we saw in the code above? Let's break it down piece by piece.

`gcc` is the command that invokes the compilation process (preprocessing, compilation, assembly, and linking).

`-o main` indicates that the name of the executable file created by the compilation of "main.c" is going to be called "main".

`main.c` is the name of the file to be compiled.

The `-Wall` option enables compiler warnings. Compiler warnings let you know that something in your code isn't quite right.

This is similar to Grammarly. If Grammarly suggests changing a sentence, you should in most cases change it to make it clearer and more correct.

Otherwise, if you try to change something in a phrase that's already right, it can become illegible.

In the same way, if you ignore warnings in code, it can ultimately cause major bugs and your project might even fail.

### What does "Standardized" mean?

So you might be wondering, what does “_standardized_” mean that we saw above?

![1*HcaTyHriNP7mxrhZ_Fjijw](https://miro.medium.com/max/1400/1*HcaTyHriNP7mxrhZ_Fjijw.jpeg)

Photo by [**Pixabay**](https://www.pexels.com/@pixabay?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) from [**Pexels**](https://www.pexels.com/photo/architecture-building-construction-daylight-534220/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

Let's look at it through another analogy. There are many ways to build a house. But there is a certain way that is generally both the most efficient and the safest.

Because of this, people and organizations must agree that there is a **standard** way of building a house.

The process of creating that standard is called **standardization**.

When a set of rules becomes a standard, the set of rules becomes **standardized_._**

This set of rules can be a law, a certificate, or just a basic convention used by workers in a certain field.

The same applies to C compilers.

It is standardization that helps people agree on how things should be done, whether it is C compilers, car components, or anything else.

Standardization can also help people agree on which version of C to use. C compilers are an example.

The C compiler has long been considered a fundamental component of software development.

As a result of the C compiler standard, developers can compile and run other people's code without worrying that their compilers will not work.

In order to create such an important building block of the industry, there must be an organization that is responsible for establishing standards

Many organizations create and manage standards. In the case of C compilers, ISO (International Organization for Standardization) manages the standards.

As long as the ISO manages future C compiler standards, programmers and companies can develop reliable software.

## Wrapping Up

Thanks for reading! Now you understand:

-   What a compiler is
-   The basic history of C compilers
-   What standardization means

[](https://github.com/tiagomonteiro0715/freecodecamp-my-articles-source-code/tree/main/What%20exactly%20is%20a%20compiler%3F)[](https://www.instagram.com/tiago.monteiro0715/)[H](https://github.com/tiagomonteiro0715/freecodecamp-my-articles-source-code)[ere](https://github.com/tiagomonteiro0715/freecodecamp-my-articles-source-code) is the GitHub repository with the code and image files I created.