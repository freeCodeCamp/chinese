> -  原文地址：[How to code the Caesar Cipher: an introduction to basic encryption](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/)
> -  原文作者：[Anonymous](https://www.freecodecamp.orgAnonymous)
> -  译者：
> -  校对者：

![How to code the Caesar Cipher: an introduction to basic encryption](https://cdn-media-1.freecodecamp.org/images/0*tuogeHoQ53SQACY-.png)

by Brendan Massey

The Caesar Cipher is a famous implementation of early day encryption. It would take a sentence and reorganize it based on a key that is enacted upon the alphabet. Take, for example, a key of 3 and the sentence, “I like to wear hats.”

When this sentence is encrypted using a key of 3, it becomes:

L olnh wr zhdu kdwv.

This makes it difficult to read and allows messages to be passed undetected.

While this is a very simple example of encryption, it is a perfect project for someone learning to code to practice on.

#### Understanding the cipher

To implement this code, at least in JAVA, you would need to think through what is actually being done. So, let’s look at the steps necessary to take in order to code this.

Step 1: Identify the character within the sentence.

Step 2: Find that character’s location within the alphabet.

Step 3: Identify that characters location + the key in the alphabet.

Note\* if the location + key > 26, loop back around and begin counting at one.

Step 4: Build a new sentence using the new characters in place of the original characters.

Step 5: repeat until sentence length is reached. (For loop).

Step 6: return result.

#### Coding the cipher

While those are pretty good steps to follow through with, we should think of what we would need to do in code.

Step 0: Establish a function that reads in a message and a key.

Something like this:

```
public String Encrypt(String message, int key) {
```

```
}
```

Step 1: Identify the character within the sentence.

To do this, we will need to establish an alphabet to look at.

Establish a variable “alphabet” that consists of the 26 letters of the alphabet.

```
String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";String alphabet2 = alphabet.toLowerCase();
```

Step 2: Find that character’s location within the alphabet.

Then create a for loop that runs through every character within the message. It will be easier to do this if we establish a StringBuilder.

```
StringBuilder encrypted = new StringBuilder(message);
```

```
for (int q = 0; q < encrypted.length(); q++) {    char currchar = encrypted.charAt(q);    int index = alphabet.indexOf(currchar);}
```

At this point, we should make sure that the spot is a letter.

```
if (index != -1) {
```

```
}    
```

Step 3: Identify that character’s location + the key in the alphabet.

If it is a letter, then we have to find the spot in the modified alphabet. We have not yet established a modified alphabet variable, so we should do that now.

Step 4: Build a new sentence using the new characters in place of the original characters.

Once we have found the value in the modified alphabet, we should set it to the same location in the StringBuilder we created.

```
public String Encryption(String input, int key){        StringBuilder encrypted = new StringBuilder(input);        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        String alphabet2 = alphabet.toLowerCase();        String keyedalphabet = alphabet.substring(key) + alphabet.substring(0, key);for (int q = 0; q < encrypted.length(); q++) {            char currChar = encrypted.charAt(q);            int index = alphabet.indexOf(currChar);            if (index != -1) {                char newChar = keyedalphabet.charAt(index);                encrypted.setCharAt(q, newChar);            }
```

Step 5: repeat until sentence length is reached. (For loop)

Now, we have checked if the character is upper-case, but we also need to check if the character is lower-case. To do this, we need to access alphabet2 that we established earlier on.

```
index = alphabet2.indexOf(currChar);            if (index != -1) {                String keyedalphabet2 = keyedalphabet.toLowerCase();                char newChar = keyedalphabet2.charAt(index);                encrypted.setCharAt(q, newChar);            }
```

Step 6: return result.

Now, we have completed the For loop. All we have left is to exit it and return the String.

```
public String Encryption(String input, int key){        StringBuilder encrypted = new StringBuilder(input);        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        String alphabet2 = alphabet.toLowerCase();        String keyedalphabet = alphabet.substring(key) + alphabet.substring(0, key);        for (int q = 0; q < encrypted.length(); q++) {            char currChar = encrypted.charAt(q);            int index = alphabet.indexOf(currChar);            if (index != -1) {                char newChar = keyedalphabet.charAt(index);                encrypted.setCharAt(q, newChar);            }            index = alphabet2.indexOf(currChar);            if (index != -1) {                String keyedalphabet2 = keyedalphabet.toLowerCase();                char newChar = keyedalphabet2.charAt(index);                encrypted.setCharAt(q, newChar);            }        }        return encrypted    }
```

Step 7: Debug.

But wait! That won’t work! encrypted is not a String, it is a StringBuilder and this function specifically requires a String to be returned!

Luckily, there is a very simple function to remedy this oversight.

```
public String Encryption(String input, int key){        StringBuilder encrypted = new StringBuilder(input);        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";        String alphabet2 = alphabet.toLowerCase();        String keyedalphabet = alphabet.substring(key) + alphabet.substring(0, key);        for (int q = 0; q < encrypted.length(); q++) {            char currChar = encrypted.charAt(q);            int index = alphabet.indexOf(currChar);            if (index != -1) {                char newChar = keyedalphabet.charAt(index);                encrypted.setCharAt(q, newChar);            }            index = alphabet2.indexOf(currChar);            if (index != -1) {                String keyedalphabet2 = keyedalphabet.toLowerCase();                char newChar = keyedalphabet2.charAt(index);                encrypted.setCharAt(q, newChar);            }        }        return encrypted.toString();    }
```

That is how you get the encrypted version of your original sentence. Try it for yourself!

Thank you for reading!