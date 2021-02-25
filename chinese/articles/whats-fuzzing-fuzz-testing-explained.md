> -   原文地址：[What is Fuzzing? Fuzz Testing Explained with Examples](https://www.freecodecamp.org/news/whats-fuzzing-fuzz-testing-explained/)
> -   原文作者：Kealan Parr
> -   译者：
> -   校对者：

![What is Fuzzing? Fuzz Testing Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/Fuzzing.png)

I was recently looking through some of Google's open source [repositories on their GitHub][1]. And I saw that they had a repository for continuous fuzzing. I had no idea what fuzzing even was, let alone continuous fuzzing.

# So What is Fuzzing?

**Fuzzing** (sometimes called  **fuzz testing**) is a way to automatically test software. Generally, the  **fuzzer** provides lots of invalid or random inputs into the program. The test tries to cause crashes, errors, memory leaks, and so on.

Normally,  **fuzzing**  works best on programs that take inputs, like websites that might ask for your name and age as an input.

We could try all sort of different strings to try and cause issues, maybe something like: "Powerلُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ冗" (this crashed iOS in the past), "Ṯ̤͍̥͇͈h̲́e͏͓̼̗̙̼̣͔ ͇̜̱̠͓͍ͅN͕͠e̗̱z̘̝̜̺͙p̤̺̹͍̯͚e̠̻̠͜r̨̤͍̺̖͔̖̖d̠̟̭̬̝͟i̦͖̩͓͔̤a̠̗̬͉̙n͚͜ ̻̞̰͚ͅh̵͉i̳̞v̢͇ḙ͎͟-҉̭̩̼͔m̤̭̫i͕͇̝̦n̗͙ḍ̟ ̯̲͕͞ǫ̟̯̰̲͙̻̝f ̪̰̰̗̖̭̘͘c̦͍̲̞͍̩̙ḥ͚a̮͎̟̙͜ơ̩̹͎s̤.̝̝ ҉Z̡̖̜͖̰̣͉̜a͖̰͙̬͡l̲̫̳͍̩g̡̟̼̱͚̞̬ͅo̗͜.̟", "😍" or "undefined".

The whole idea behind  **fuzzing** is to try and find edge cases in a codebase. You use it to make sure that all the parsing you do, acceptance of the data, storing of the data, and reading the data causes no bugs.

It's quite an integrated test, too, as you can test the complete flow of storing something like a  [zero-width space][2]  (U+200B in Unicode) in your site to check for issues.

Some people try to inject code into the input fields (this is a part of  **fuzzing** referred to as  **code injection**) like  `<script>alert(123)</script>`  as a name input.

Malicious hackers don't want you to test non-standard input, as you might have application breaking bugs – and they can utilise this to steal data or repeatedly crash your application/servers.

Have a look at  [this][3] GitHub called the  **Big List of Naughty Strings**. It is a list of strings that have a high probability of causing issues.

You can have a look at some of the  `.json`  and  `.txt`  files to see what has caused issues in the past, and read some of the comments to learn  _exactly_ why they are problematic.

For example, there are some strings that are written upside-down "uʍopǝpᴉsd∩" which you can do  [here][4]. There are strings that may be flagged as profanity or inappropriate but are actually innocent (this is called the  [S][5][cunt][6]horpe problem). Or even strings that can reveal system files if they are parsed by a poorly configured XML parser.

# Who Uses Fuzzing?

**Fuzzing** has uses inside  **Software Testing**  to find bugs with your programs, as I've already mentioned. But it also has applications in cybersecurity and hacking.

In its cybersecurity application, hackers are looking to cross a  **trust** boundary. A  **trust boundary**  is a place in computer systems where data is passed from one area to another, from a trusted source.

As an example, imagine in your front end that you receive a user's name, make sure it's valid, and then pass it into your back end. Your  **trust boundary** here is the imaginary line where the data is passed from the front end to the back end.

![](https://www.freecodecamp.org/news/content/images/2021/02/trust-boundary.png)

If your back end just trusts the data without validating it (as the front end already validates it!) this could be a problem. As long as hackers can get past your front end checks, they are then  **trusted** input and can try to insert malicious strings as input.

This is where  **fuzzing** can help spot-check to make sure you're catching these types of issues.

Say someone were to  **fuzz Google Chrome**, for example. One way they could do it would be to run the browser in a debugging tool so they could track the commands that Chrome executes and profile its memory management.

The hackers would then point the Chrome program they're observing, to one of their servers. The hackers' servers would then create millions of different webpages that  **Chrome** would load, all with slightly different JS, CSS and HTML in the webpages to try and crash the Chrome that the hackers are profiling.

These hackers could reasonably keep running these automated tests for months, collect a huge list of Chrome's log (like crashes, any memory overflows, and so on) and try to work out what caused the crash.

Just getting it to crash isn't the end goal here. Once those hackers know what kind of inputs cause crashes, they can investigate why those things cause crashes and see if they can utilise those exploits to do something sinister, or access something they shouldn't have access to. You can read more about the above example  [here][7].

Google  [currently][8] **fuzzes** their own applications on 30,000 VM's! So you aren't likely to have any progress due to how extensively they already  **fuzz**.

Google's  [OSS-Fuzz][9]  has found over 25,000+ bugs in Google Chrome code, and roughly 22,500 bugs in other open source codebases that use OSS-Fuzz.

So to just get back to my main header. Who uses  **fuzzing**? I'd wager pretty much any company who has to protect their digital assets or information would either employ testers to  **fuzz** their products or do it themselves.

# **Conclusion**

I hope this has explained what  **fuzzing** is and some applications it's used for.

If you want to research deeper into this topic, you can find a huge list of resources  [here][10]  on GitHub. There's everything from courses, articles, videos and tools to help you learn how to  **fuzz**.

I share my writing on  [Twitter][11] if you enjoyed this article and want to see more.

  

[1]: https://github.com/google
[2]: https://en.wikipedia.org/wiki/Zero-width_space
[3]: https://github.com/minimaxir/big-list-of-naughty-strings
[4]: http://www.upsidedowntext.com/
[5]: https://en.wikipedia.org/wiki/Scunthorpe_problem
[6]: https://en.wikipedia.org/wiki/Scunthorpe_problem
[7]: https://www.wired.com/2016/06/hacker-lexicon-fuzzing/
[8]: https://google.github.io/clusterfuzz/
[9]: https://github.com/google/oss-fuzz
[10]: https://github.com/secfigo/Awesome-Fuzzing
[11]: https://twitter.com/kealanparr
