> -  原文地址：[JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：
> -  校对者：

![JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/FCC-Thumbnail--3-.png)

Today we're going to build and run an **ice cream shop** and learn **asynchronous JavaScript** at the same time. Along the way, you'll learn how to use:

-   Callbacks
-   Promises
-   Async / Await

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b1j935dg72g9u8zvh2oi.png)

# Here's what we'll cover in this article:

-   What is Asynchronous JavaScript?
-   Synchronous vs Asynchronous JavaScript
-   How Callbacks Work in JavaScript
-   How Promises Work in JavaScript
-   How Async / Await Works in JavaScript

So let's dive in!

## You can watch this tutorial on YouTube as well if you like:

# What is Asynchronous JavaScript?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7yd96tgxvuowqmfgcx6b.png)

If you want to build projects efficiently, then this concept is for you.

The theory of async JavaScript helps you break down big complex projects into smaller tasks.

Then you can use any of these three techniques – **callbacks, promises or Async/await** – to run those small tasks in a way that you get the best results.

Let's dive in!🎖️

# Synchronous vs Asynchronous JavaScript

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arzbf1rc3pi4yi6u8wup.png)

## What is a Synchronous System?

In a synchronous system, tasks are completed one after another.

Think of this as if you have just one hand to accomplish 10 tasks. So, you have to complete one task at a time.

Take a look at the GIF 👇 – one thing is happening at a time here:

![Synchronous System](https://media.giphy.com/media/ICIS16DkE9qB9HVxtq/giphy.gif)

You'll see that until the first image is loaded completely, the second image doesn't start loading.

Well, JavaScript is by default Synchronous **\[single threaded\]**. Think about it like this – one thread means one hand with which to do stuff.

## What is an Asynchronous System?

In this system, tasks are completed independently.

Here, imagine that for 10 tasks, you have 10 hands. So, each hand can do each task independently and at the same time.

Take a look at the GIF 👇 – you can see that each image loads at the same time.

![Asynchronous System](https://media.giphy.com/media/MMDnmJnE7uhX6KtcKc/giphy.gif)

Again, all the images are loading at their own pace. None of them is waiting for any of the others.

## To Summarize Synchronous vs Asynchronous JS:

When three images are on a marathon, in a:

-   **Synchronous** system, three images are in the same lane. One can't overtake the other. The race is finished one by one. If image number 2 stops, the following image stops.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1r9y4ghhq0t8wjb1u9h.png)

-   **Asynchronous system,** the three images are in different lanes. They'll finish the race on their own pace. Nobody stops for anybody:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ehknx5shc4orh32s0ktk.png)

## Synchronous and Asynchronous Code Examples

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pzbnpcza9rbj8xgiby95.png)

Before starting our project, let's look at some examples and clear up any doubts.

### Synchronous Code Example

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5m6p1qy522lj3auvl5ty.png)

To test a synchronous system, write this code in JavaScript:

```javascript
console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");
```

Here's the result in the console: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/54izy7zyo52j2z6netls.png)

### Asynchronous code example

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5d0o8unbe8c67qeqz0w.png)

Let's say it takes two seconds to eat some ice cream. Now, let's test out an asynchronous system. Write the below code in JavaScript.

**Note:** Don't worry, we'll discuss the `setTimeout()` function later in this article.

```javascript
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")
```

And here's the result in the console: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o44c2t0r7bknkadoumgx.png)

Now that you know the difference between synchronous and async operations, let's build our ice cream shop.

## How to Setup our Project

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2mzbtcnm67v2iys7cix7.png)

For this project you can just open [Codepen.io](https://codepen.io/) and start coding. Or, you can do it in VS code or the editor of your choice.

Open the JavaScript section, and then open your developer console. We'll write our code and see the results in the console.

# What are Callbacks in JavaScript?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s5iloofqsv3lcdl4flsi.png)

When you nest a function inside another function as an argument, that's called a callback.

Here's an illustration of a callback:

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uz3pl56lmoc2pq7wzi2s.png)

**An example of a callback**

Don't worry, we'll see some examples of callbacks in a minute.

### Why do we use callbacks?

When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.

Take a look at this example:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o05q7ortgctx2oeyntfn.png)

**Chart contains steps to make ice cream**

These are the small steps you need to take to make ice cream. Also note that in this example, the order of the steps and timing are crucial. You can't just chop the fruit and serve ice cream.

At the same time, if a previous step is not completed, we can't move on to the next step.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2v1rn50smjul9arkneza.png)

To explain that in more detail, let's start our ice cream shop business.

## But Wait...

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cq8exwor5aiciu2j6jwu.png)

The shop will have two parts:

-   The storeroom will have all the ingredients \[Our Backend\]
-   We'll produce ice cream in our kitchen \[The frontend\]

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i69bws707m5rvsj34i9o.png)

## Let's store our data

Now, we're gonna store our ingredients inside an object. Let's start!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ihezrht8dgg9xn8lm2k9.png)

You can store the ingredients inside objects like this: 👇

```javascript
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"]
 }
```

Our other ingredients are here: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dcwr770l0ubupv0r2gj.png)

You can store these other ingredients in JavaScript objects like this: 👇

```javascript
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
```

The entire business depends on what a customer **orders**. Once we have an order, we start production and then we serve ice cream. So, we'll create two functions ->

-   `order`
-   `production`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3bnzniiyamo0b9l7e806.png)

This is how it all works: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8h8ra9wor8cs3dgddpb.png)

Get order from customer, fetch ingredients, start production, then serve.

Let's make our functions. We'll use arrow functions here:

```javascript
let order = () =>{};

let production = () =>{};
```

Now, let's establish a relationship between these two functions using a callback, like this: 👇

```javascript
let order = (call_production) =>{

  call_production();
};

let production = () =>{};
```

### Let's do a small test

We'll use the `console.log()` function to conduct tests to clear up any doubts we might have regarding how we established the relationship between the two functions.

```javascript
let order = (call_production) =>{

console.log("Order placed. Please call production")

// function 👇 is being called 
  call_production();
};

let production = () =>{

console.log("Production has started")

};
```

To run the test, we'll call the **`order`** function. And we'll add the second function named `production` as its argument.

```javascript
// name 👇 of our second function
order(production);
```

Here's the result in our console 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u41ugdxxed1q8coz5hol.png)

## Take a break

So far so good – take a break!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tnr74waq6noc0djln3qx.png)

## Clear out the console.log

Keep this code and remove everything \[don't delete our stocks variable\]. On our first function, pass another argument so that we can receive the order \[Fruit name\]:

```javascript
// Function 1

let order = (fruit_name, call_production) =>{

  call_production();
};

// Function 2

let production = () =>{};


// Trigger 👇

order("", production);
```

Here are our steps, and the time each step will take to execute.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**Chart contains steps to make ice cream**

In this chart, you can see that step 1 is to place the order, which takes 2 seconds. Then step 2 is cut the fruit (2 seconds), step 3 is add water and ice (1 second), step 4 is to start the machine (1 second), step 5 is to select the container (2 seconds), step 6 is to select the toppings (3 seconds) and step 7, the final step, is to serve the ice cream which takes 2 seconds.

To establish the timing, the function `setTimeout()` is excellent as it is also uses a callback by taking a function as an argument.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qwrg1taugyhvjnkx8xpp.png)

**Syntax of a setTimeout() function**

Now, let's select our fruit and use this function:

```javascript
// 1st Function

let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000)
};

// 2nd Function

let production = () =>{
  // blank for now
};

// Trigger 👇
order(0, production);
```

And here's the result in the console: 👇

**Note** that the result is displayed after 2 seconds.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/edwji5vauypoezj3bxdk.png)

If you're wondering how we picked strawberry from our stock variable, here's the code with the format 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ia38z3x6b96xpq3aid91.png)

Don't delete anything. Now we'll start writing our production function with the following code.👇 We'll use arrow functions:

```javascript
let production = () =>{

  setTimeout(()=>{
    console.log("production has started")
  },0000)

};
```

And here's the result 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5yskzvg7rezo2sg4lklq.png)

We'll nest another `setTimeout` function in our existing `setTimeout` function to chop the fruit. Like this: 👇

```javascript
let production = () =>{
  
  setTimeout(()=>{
    console.log("production has started")


    setTimeout(()=>{
      console.log("The fruit has been chopped")
    },2000)


  },0000)
};
```

And here's the result 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4659l1mua0rv40rwyem7.png)

If you remember, here are our steps:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**Chart contains steps to make ice cream**

Let's complete our ice cream production by nesting a function inside another function – this is also known as a callback, remember?

```javascript
let production = () =>{

  setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} as toppings`)
              setTimeout(()=>{
                console.log("serve Ice cream")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },0000)

};
```

And here's the result in the console 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5mq9bg6fqrc8apj7nu7b.png)

Feeling confused?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/man5l5pwavp9prio1wc0.png)

This is called callback hell. It looks something like this (remember that code just above?): 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5rk7f8d920jzn22smjh.png)

**Illustration of Callback hell**

What's the solution to this?

# How to Use Promises to Escape Callback Hell

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x3neys1hxsrifgg5qm6x.png)

Promises were invented to solve the problem of callback hell and to better handle our tasks.

## Take a break

But first, take a break!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bwfvel7kvm422gqvj0os.png)

This is how a promise looks:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7qo1zheuin2825osozvc.png)

**illustration of a promise format**

Let's dissect promises together.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gozy5r1nfubzeq5t5t25.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ezi9ogz0ergprgkmu68a.png)

**An illustration of the life of a promise**

As the above charts show, a promise has three states:

-   **Pending:** This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.
-   **Resolved:** This means that your customer has received their food and is happy.
-   **Rejected:** This means that your customer didn't receive their order and left the restaurant.

Let's adopt promises to our ice cream production case study.

## But wait...

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/634b6oyglkyoccsvr8l7.png)

We need to understand four more things first ->

-   Relationship between time and work
-   Promise chaining
-   Error handling
-   The `.finally` handler

Let's start our ice cream shop and understand each of these concepts one by one by taking baby steps.

## Relationship between time and work

If you remember, these are our steps and the time each takes to make ice cream"

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**Chart contains steps to make ice cream**

For this to happen, let's create a variable in JavaScript: 👇

```javascript
let is_shop_open = true;
```

Now create a function named `order` and pass two arguments named `time, work`:

```javascript
let order = ( time, work ) =>{

  }
```

Now, we're gonna make a promise to our customer, "We will serve you ice-cream" Like this ->

```javascript
let order = ( time, work ) =>{

  return new Promise( ( resolve, reject )=>{ } )

  }
```

Our promise has 2 parts:

-   Resolved \[ ice cream delivered \]
-   Rejected \[ customer didn't get ice cream \]

```javascript
let order = ( time, work ) => {

  return new Promise( ( resolve, reject )=>{

    if( is_shop_open ){

      resolve( )

    }

    else{

      reject( console.log("Our shop is closed") )

    }

  })
}
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3wik2xel68yue93yapm6.png)

Let's add the time and work factors inside our promise using a `setTimeout()` function inside our `if` statement. Follow me 👇

**Note:** In real life, you can avoid the time factor as well. This is completely dependent on the nature of your work.

```javascript
let order = ( time, work ) => {

  return new Promise( ( resolve, reject )=>{

    if( is_shop_open ){

      setTimeout(()=>{

       // work is 👇 getting done here
        resolve( work() )

// Setting 👇 time here for 1 work
       }, time)

    }

    else{
      reject( console.log("Our shop is closed") )
    }

  })
}
```

Now, we're gonna use our newly created function to start ice-cream production.

```javascript
// Set 👇 time here
order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
//    pass a ☝️ function here to start working
```

The result 👇 after 2 seconds looks like this:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/erzjup8wt505j502e73n.png)

Good job!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8taajvjy6pfq35hu90nq.png)

## Promise chaining

In this method, we defining what we need to do when the first task is complete using the `.then` handler.  It looks something like this 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l27ytifkoedl22kc97lh.png)

**Illustration of promise chaining using .then handler**

The .then handler returns a promise when our original promise is resolved.

#### Here's an Example:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1qpeewo19qbhzj47goos.png)

Let me make it simpler: it's similar to giving instructions to someone. You tell someone to " First do this, then do that, then this other thing, then.., then.., then..." and so on.

-   The first task is our original promise.
-   The rest of the tasks return our promise once one small bit of work is completed

Let's implement this on our project. At the bottom of your code write the following lines. 👇

**Note:** don't forget to write the `return` word inside your `.then` handler. Otherwise, it won't work properly. If you're curious, try removing the return once we finish the steps:

```javascript
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
  return order(0000,()=>console.log('production has started'))
})
```

And here's the result: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qhhjaakbi6zshxhi6afy.png)

Using the same system, let's finish our project:👇

```javascript
// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})
```

Here's the result: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y0d0f4ys83ctnevkbgxs.png)

## Error handling

We need a way to handle errors when something goes wrong. But first, we need to understand the promise cycle:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jlm7zwonbxszeaccyohv.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z2ajcu52rxzwq64g81vp.png)

**An illustration of the life of a promise**

To catch our errors, let's change our variable to false.

```javascript
let is_shop_open = false;
```

Which means our shop is closed. We're not selling ice cream to our customers anymore.

To handle this, we use the `.catch` handler. Just like `.then`, it also returns a promise, but only when our original promise is rejected.

A small reminder here:

-   `.then` works when a promise is resolved
-   `.catch` works when a promise is rejected

Go down to the very bottom and write the following code:👇

Just remember that there should be nothing between your previous `.then` handler and the `.catch` handler.

```javascript
.catch(()=>{
  console.log("Customer left")
})
```

Here's the result:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lot6engklu29y05q8xyr.png)

A couple things to note about this code:

-   The 1st message is coming from the `reject()` part of our promise
-   The 2nd message is coming from the `.catch` handler

## How to use the .finally() handler

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdq3i0agj4volq46ycue.png)

There's something called the `finally` handler which works regardless of whether our promise was resolved or rejected.

**For example:** whether we serve no customers or 100 customers, our shop will close at the end of the day

If you're curious to test this, come at very bottom and write this code: 👇

```javascript
.finally(()=>{
  console.log("end of day")
})
```

The result:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2j3jf2uofip1d6y2rtt.png)

Everyone, please welcome Async / Await~

# How Does Async / Await Work in JavaScript?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ra7483f90b69pjl2cbae.png)

This is supposed to be the better way to write promises and it helps us keep our code simple and clean.

All you have to do is write the word `async` before any regular function and it becomes a promise.

## But first, take a break

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4vujyfxz7dg41jhjtcrx.png)

Let's have a look:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17f08ygj1odk28hgl9eq.png)

## Promises vs Async/Await in JavaScript

Before async/await, to make a promise we wrote this:

```javascript
function order(){
   return new Promise( (resolve, reject) =>{

    // Write code here
   } )
}
```

Now using async/await, we write one like this:

```javascript
//👇 the magical keyword
 async function order() {
    // Write code here
 }
```

## But wait......

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t1pjzw6zl0h21tyyh9u3.png)

You need to understand ->

-   How to use the `try` and `catch` keywords
-   How to use the await keyword

## How to use the Try and Catch keywords

We use the `try` keyword to run our code while we use `catch` to catch our errors. It's the same concept we saw when we looked at promises.

Let's see a comparison. We'll see a small demo of the format, then we'll start coding.

### Promises in JS -> resolve or reject

We used resolve and reject in promises like this:

```javascript
function kitchen(){

  return new Promise ((resolve, reject)=>{
    if(true){
       resolve("promise is fulfilled")
    }

    else{
        reject("error caught here")
    }
  })
}

kitchen()  // run the code
.then()    // next step
.then()    // next step
.catch()   // error caught here
.finally() // end of the promise [optional]
```

### Async / Await in JS -> try, catch

When we're using async/await, we use this format:

```javascript
//👇 Magical keyword
async function kitchen(){

   try{
// Let's create a fake problem      
      await abc;
   }

   catch(error){
      console.log("abc does not exist", error)
   }

   finally{
      console.log("Runs code anyways")
   }
}

kitchen()  // run the code
```

Don't panic, we'll discuss the `await` keyword next.

Now hopefully you understand the difference between promises and Async / Await.

## How to Use JavaScript's Await Keyword

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fry577xha7313ead96xy.png)

The keyword `await` makes JavaScript wait until a promise settles and returns its result.

### How to use the await keyword in JavaScript

Let's go back to our ice cream shop. We don't know which topping a customer might prefer, chocolate or peanuts. So we need to stop our machine and go and ask our customer what they'd like on their ice cream.

Notice here that only our kitchen is stopped, but our staff outside the kitchen will still do things like:

-   doing the dishes
-   cleaning the tables
-   taking orders, and so on.

## An Await Keyword Code Example

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8r5w5aapofalnq882wat.png)

Let's create a small promise to ask which topping to use. The process takes three seconds.

```javascript
function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },3000)
  })
}
```

Now, let's create our kitchen function with the async keyword first.

```javascript
async function kitchen(){

  console.log("A")
  console.log("B")
  console.log("C")
  
  await toppings_choice()
  
  console.log("D")
  console.log("E")

}

// Trigger the function

kitchen();
```

Let's add other tasks below the `kitchen()` call.

```javascript
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
```

And here's the result:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y0dr669gewtrrd5fd86p.png)

We are literally going outside our kitchen to ask our customer, "what is your topping choice?" In the mean time, other things still get done.

Once, we get their topping choice, we enter the kitchen and finish the job.

### Small note

When using Async/ Await, you can also use the `.then`, `.catch`, and `.finally`  handlers as well which are a core part of promises.

### Let's open our Ice cream shop again

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzw8gp721oecwo2b3l6s.png)

We're gonna create two functions ->

-   `kitchen`: to make ice cream
-   `time`: to assign the amount of time each small task will take.

Let's start! First, create the time function:

```javascript
let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

```

Now, let's create our kitchen:

```javascript
async function kitchen(){
   try{

     // instruction here
   }

   catch(error){
    // error management here
   }
}

// Trigger
kitchen();
```

Let's give small instructions and test if our kitchen function is working or not:

```javascript
async function kitchen(){
   try{

// time taken to perform this 1 task
     await time(2000)
     console.log(`${stocks.Fruits[0]} was selected`)
   }

   catch(error){
     console.log("Customer left", error)
   }

   finally{
      console.log("Day ended, shop closed")
    }
}

// Trigger
kitchen();
```

The result looks like this when the shop is open: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lptup827qau72e83deuv.png)

The result looks like this when the shop is closed: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8pjz1qlw58ap8pq7crz.png)

So far so good.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cnkgk63x51wth2byxzfe.png)

Let's complete our project.

Here's the list of our tasks again: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7wthn0jr5vw7vb02e4qg.png)

**Chart contains steps to make ice cream**

First, open our shop

```javascript
let is_shop_open = true;
```

Now write the steps inside our `kitchen()` function: 👇

```javascript
async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
```

And here's the result: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qs9yccq9209u7m9lquju.png)

# Conclusion

Congratulations for reading until the end! In this article you've learned:

-   The difference between synchronous and asynchronous systems
-   Mechanisms of asynchronous JavaScript using 3 techniques (callbacks, promises, and Async/ Await)

Here's your medal for reading until the end. ❤️

### Suggestions and criticisms are highly appreciated ❤️

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/usxsz1lstuwry3jlly4d.png)

**YouTube [/ Joy Shaheb](https://youtube.com/c/joyshaheb)**

**LinkedIn [/ JoyShaheb](https://www.linkedin.com/in/joyshaheb/)**

**Twitter [/ JoyShaheb](https://twitter.com/JoyShaheb)**

**Instagram [/ JoyShaheb](https://www.instagram.com/joyshaheb/)**

# Credits

-   [Collection of all the images used](https://www.freepik.com/user/collections/promises-article/2046500)
-   [Unicorns](https://www.flaticon.com/packs/unicorn-4), [kitty avatar](https://www.flaticon.com/packs/kitty-avatars-3)
-   [tabby cat](https://www.pexels.com/photo/brown-tabby-cat-with-slice-of-loaf-bread-on-head-4587955/), [Astrologist Woman](https://www.pexels.com/photo/young-female-astrologist-predicting-future-with-shining-ball-6658693/), [girl-holding-flower](https://www.pexels.com/photo/woman-in-white-dress-holding-white-flower-bouquet-3981511/)
-   [Character emotions](https://www.vecteezy.com/vector-art/180695-people-mind-emotion-character-cartoon-vector-illustration)