> -  原文地址：[What is a Buffer Overflow Attack – and How to Stop it](https://www.freecodecamp.org/news/buffer-overflow-attacks/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：
> -  校对者：

![What is a Buffer Overflow Attack – and How to Stop it](https://images.unsplash.com/photo-1506563613713-f88697472a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIxfHxvdmVyZmxvd3xlbnwwfHx8fDE2MTcxMjQ5MzM&ixlib=rb-1.2.1&q=80&w=2000)

A buffer overflow occurs when the size of information written to a memory location exceeds what it was allocated. This can cause data corruption, program crashes, or even the execution of malicious code.

While C, C++, and Objective-C are the main languages which have buffer overflow vulnerabilities (as they deal more directly with memory than many interpreted languages), they are the foundation of much of the internet.

Even if the code is written in a 'safe' language (like Python), if it calls on any libraries written in C, C++, or Objective C, it could still be vulnerable to buffer overflows.

## Memory Allocation

In order to understand buffer overflows, it's important to understand a little about how programs allocate memory. In a C program, you can allocate memory on the stack, at compile time, or on the heap, at run time.

To declare a variable on the stack: `int numberPoints = 10;`

Or, on the heap: `int* ptr = malloc (10 * sizeof(int));`

Buffer overflows can occur on the stack (stack overflow) or on the heap (heap overflow).

In general, stack overflows are more commonly exploited than heap overflows. This is because stacks contain a sequence of nested functions, each returning the address of the calling function to which the stack should return after the function has finished running. This return address can be replaced with the instruction to instead execute a piece of malicious code.

As heaps less commonly store these return addresses, it's much harder to launch an exploit (though not impossible). Memory on the heap typically contains program data and is dynamically allocated as the program runs. This means that a heap overflow would likely have to overwrite a function pointer – harder and less effective than a stack overflow.

As stack overflows are the more commonly exploited type of buffer overflow, we'll briefly dig into exactly how they work.

## Stack Overflows

When an executable is run, it runs within a process, and each process has its own stack. As the process executes the main function, it will find both new local variables (which will be pushed onto the top of the stack) and calls to other functions (which will create a new stackframe).

A diagram of a stack, for clarity:

![](https://megankaczanowski.com/content/images/2021/01/Screen-Shot-2021-01-05-at-12.31.23-PM.png)

https://en.wikipedia.org/wiki/Stack\_(abstract\_data\_type)

### So, what's a stackframe?

First, a call stack is basically the assembler code for a particular program. It's a stack of variables and stackframes which tell the computer in what order to execute instructions. There will be a stackframe for each function that hasn't yet finished executing, with the function which is currently executing on the top of the stack.

In order to keep track of this, a computer keeps several pointers in memory:

-   **Stack Pointer:** Points to the top of the process call stack (or the last item pushed onto the stack).
-   **Instruction Pointer:** Points to the address of the next CPU instruction to be executed.
-   **Base Pointer (BP):** (also known as the frame pointer) Points to the base of the current stackframe. It stays constant as long as the program is executing the current stackframe (though the stack pointer will change).

For example, given the following program:

```C
int main() {
    int j = firstFunction(5);
    return 0;
}
    
int firstFunction(int z) {
    int x = 1 + z;
    return x;
}
```

The call stack would look like this, right after firstFunction has been called and the statement `int x = 1+z` has been executed:

![](https://megankaczanowski.com/content/images/2021/04/Screen-Shot-2021-04-03-at-12.04.52-PM.png)

Here, `main` called `firstFunction` (which is currently executing), so it's at the top of the call stack. The return address is the memory address of the function which called it (this is held by the instruction pointer as the stackframe is created). Local variables which are still in scope are also on the call stack. As they are executed and go out of scope, they are 'popped' off the top of the stack.

Thus, the computer is able to keep track of which instruction needs to be executed, and in which order. A stack overflow is designed to overwrite one of these saved return addresses with its own, malicious address.

**Example Buffer Overflow Vulnerability (C):**

```C
int main() {
    bufferOverflow();
 }
 
 bufferOverflow() {
    char textLine[10];
    printf("Enter your line of text: ");
    gets(textLine);
    printf("You entered: ", textLine);
    return 0;
 }
```

This simple example reads in an arbitrary amount of data (gets will read in until the end of the file or the newline character). Thinking about the call stack we walked through above, you can see why this is dangerous. If the user enters more data than the amount the variable is assigned, the string the user entered will overwrite the next memory locations on the call stack. If it is long enough, it may even overwrite the return address of the calling function.

How the computer will react to this depends on how stacks are implemented and how memory is allocated in a particular system. The response to a buffer overflow can be quite unpredictable ranging from program faults, to crashes, to execution of malicious code.

## Why Do Buffer Overflows Occur?

The reason buffer overflows became such a significant problem is that many memory manipulation functions in C and C++ don't perform any bounds checking. While buffer overflows are quite well-known now, they're also very commonly exploited (for example, [WannaCry](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack) exploited a buffer overflow).

Buffer overflows are most common when the code relies on external input data, is too complex for a programmer to easily understand its behavior, or when it has dependencies outside the direct scope of the code.

Web servers, application servers, and web application environments are all susceptible to buffer overflows.

The exception is environments written in interpreted languages, though the interpreters themselves can be susceptible to overflows.

## How to Mitigate Buffer Overflows

-   **Use an interpreted language** which isn't susceptible to these issues.
-   **Avoid using functions which don't perform buffer checks** (for example, in C, instead of gets() use fgets()).
-   **Use compilers which can help identify unsafe functions or errors.**
-   **[Use](https://ritcsec.wordpress.com/2017/05/18/buffer-overflows-aslr-and-stack-canaries/) [Canaries](http://www.cbi.umn.edu/securitywiki/CBI_ComputerSecurity/MechanismCanary.html),** a 'guard value' which can help prevent buffer overflows. They're inserted before a return address in the stack and are checked before the return address is accessed. If the program detects a change to the canary value, it will abort the process, preventing the attacker from succeeding. The canary value is either random (so, very difficult for an attacker to guess) or a string of characters which, for technical reasons, is impossible to overwrite.
-   **Re-arrangement of local variables** so scalar variables (individual fixed-size data objects) are above array variables (containing multiple values). This means that if the array variables do overflow, they won't impact the scalar variables. This technique, when combined with canary values, can help prevent buffer overflow attacks from succeeding.
-   **Make a stack non-executable** by setting the NX (No-eXecute) bit, preventing the attacker from inserting shellcode directly into the stack and executing it there. This isn't a perfect solution, as even non executable stacks can be victims of buffer overflow attacks such as the return-to-libc attack. This attack occurs when the return address of a stackframe is replaced with the address of a library already in the process' address space. Additionally, not all CPUs allow for the NX bit to be set.
-   **[ASLR (address space layout randomization)](https://en.wikipedia.org/wiki/Address_space_layout_randomization)**, can serve as a general defense (as well as a specific defense against return-to-libc attacks). It means that anytime a library file or other function is called by a running process, its address is shifted by a random number. It makes it nearly impossible to associate a fixed process memory address with functions, meaning that it can be difficult, if not impossible, for an attacker to know from where to call specific functions. ASLR is on by default in many versions of Linux, OS X, and Android (which can be toggled off in the command line).

### Note on Stack Underflow:

It's also possible to have a buffer underflow vulnerability, when two parts of the same program treat the same block of memory differently. For example, if you allocate an array of size X, but fill it with an array of size x < X, and later you attempt to retrieve all X bytes, you're likely to get garbage data for X - x bytes.

Essentially you may have pulled data which is left over from how that memory was previously used. The best case is that it's garbage that doesn't mean anything, while the worst case is that it is sensitive data that an attacker might be able to misuse.

### Sources/Further Reading:

-   [Computer and Network Security Lectures, Avinash Kak](https://engineering.purdue.edu/kak/compsec/)
-   [OWASP Buffer Overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow)s
-   [Stack vs Heap](https://gribblelab.org/CBootCamp/7_Memory_Stack_vs_Heap.html)