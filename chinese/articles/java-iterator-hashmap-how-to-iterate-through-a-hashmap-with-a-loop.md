> -  原文地址：[Java Iterator Hashmap – How to Iterate Through a Hashmap With a Loop](https://www.freecodecamp.org/news/java-iterator-hashmap-how-to-iterate-through-a-hashmap-with-a-loop/)
> -  原文作者：[Shittu Olumide](https://www.freecodecamp.org/news/author/shittuolumide/)
> -  译者：
> -  校对者：

![Java Iterator Hashmap – How to Iterate Through a Hashmap With a Loop](https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/Shittu-Olumide-Java-Iterator-Hashmap---How-to-Iterate-Through-a-Hashmap-With-a-Loop.png)

Hashmap is a data structure used in programming to store data in key-value pairs. It is widely used in many programming languages, including Java, Python, and JavaScript.

Iterating through a hashmap is a regular operation that developers perform frequently. In this article, we will walk through a detailed outline of how to iterate through a hashmap with a loop in Java, using different types of loops.

Most of the time, the steps involved in the process of looping through a hashmap are pretty straightforward. Firstly, you initiate the hashmap, use an iterator to iterate through the hashmap, and finally display your output.

## How to Iterate Through a Java Hashmap Using a `for-each` Loop

One of the simplest ways to iterate through a hashmap is by using a for-each loop. Here is an example of how to do this:

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    Integer value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```

In this example, we first create a new hashmap and add some key-value pairs to it. We then use a for-each loop to iterate through the hashmap, retrieving each key-value pair as a **Map.Entry** object. We then extract the key and value from each Map.Entry object and print them to the console.

## How to Iterate Through a Java Hashmap Using a `while` Loop with an Iterator

Another way to iterate through a hashmap is by using a **while** loop with an Iterator. Here is an example of how to do this:

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
while (iterator.hasNext()) {
    Map.Entry<String, Integer> entry = iterator.next();
    String key = entry.getKey();
    Integer value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```

In this example, we once again create a new hashmap and add some key-value pairs to it. We then create a new Iterator object using the `entrySet()` method, which returns a set of key-value pairs as **Map.Entry** objects. We then use a while loop with the `hasNext()` and `next()` methods to iterate through the set and retrieve each key-value pair. We then extract the key and value from each Map.Entry object and print them to the console.

## How to Iterate Through a Java Hashmap Using a `for loop` with `keySet()`

In Java, the `keySet()` method is a method of the `java.util.HashMap` class that returns a `Set` view of the keys contained in the hashmap. This means that it returns a set of all the keys in the hashmap that can be used to iterate through the keys or perform other operations on them.

The `keySet()` method returns a `Set` of the keys in the hashmap, which is a collection of unique elements with no duplicates. This is because the keys in a hashmap must be unique, and the `keySet()` method ensures that the set of keys it returns contains no duplicate values.

We can iterate through a hashmap by using a for loop with the `keySet()` method. Here is an example of how to do this:

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

for (String key : map.keySet()) {
    Integer value = map.get(key);
    System.out.println("Key: " + key + ", Value: " + value);
}
```

In this example, we again create a new hashmap and add some key-value pairs to it. We then use a for loop with the `keySet()` method to iterate through the hashmap, retrieving each key and using it to get the corresponding value from the hashmap. We then print both the key and value to the console.

## Conclusion

In this article, you learned three ways to iterate through a hashmap using different types of loops. By following these guidelines, you can become more proficient in working with hashmaps and other data structures.

It is also important to keep in mind that modifying the hashmap during iteration may lead to unexpected results, so when possible you should avoid doing so.

Let's connect on [Twitter](https://www.twitter.com/Shittu_Olumide_) and on [LinkedIn](https://www.linkedin.com/in/olumide-shittu). You can also subscribe to my [YouTube](https://www.youtube.com/channel/UCNhFxpk6hGt5uMCKXq0Jl8A) channel.

********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************Happy Coding!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************