> -  原文地址：[JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
> -  原文作者：[Joy Shaheb](https://www.freecodecamp.org/news/author/joy/)
> -  译者：Miever1
> -  校对者：

![JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/FCC-Thumbnail--3-.png)

今天我们将在学习 **异步 JavaScript** 的同时建立并运行一个 **冰淇淋店** ，在此过程中，您将学习如何使用:

-   Callbacks
-   Promises
-   Async / Await

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b1j935dg72g9u8zvh2oi.png)

# 以下是我们将在本文中介绍的内容

-   什么是异步 JavaScript？
-   JavaScript 中的同步与异步
-   Callbacks 如何在 JavaScript 中运作
-   Promises 如何在 JavaScript 中运作
-   Async / Await 如何在 JavaScript 中运作

让我们开始吧!

## 如果你喜欢，也可以在 YouTube 上观看本教程

# What is Asynchronous JavaScript?
# 什么是异步 JavaScript？

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7yd96tgxvuowqmfgcx6b.png)

如果您想高效地构建项目，那么这个概念很适合您。

异步 JavaScript 理论可以帮助您将大型复杂的项目分解为较小的任务。

然后你可以使用这三种技巧 – **callbacks, promises or Async/await** – 中的任何一种来运行这些小任务来获得最好的结果。

让我们开始吧!🎖️

# JavaScript 中 同步 vs 异步

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arzbf1rc3pi4yi6u8wup.png)

## 什么是同步系统？

在同步系统中，任务一个接一个地完成。

想象一下，如果你只有一只手去完成 10 项任务, 那么在同一个时间你只能做一个任务。

看看这个动图👇 – 这里会发生一件事:

![同步系统](https://media.giphy.com/media/ICIS16DkE9qB9HVxtq/giphy.gif)

您将看到，直到第一个图像完全加载，第二个图像才开始加载。

JavaScript 默认是同步的  **\[单线程\]**。你可以这样想 ——— 单线意味着一次只能做一件事。

## 什么是异步系统?

在这个系统中，任务是独立完成的。

假设你有十个任务以及十只手。那么在同一时间，每只手都可以同时独立完成每一项任务。

看看这张动图 👇 - 你可以看到每个图像都是同时加载的。

![Asynchronous System](https://media.giphy.com/media/MMDnmJnE7uhX6KtcKc/giphy.gif)

同样，所有的图像都以自己的速度加载。它们都不会等待其他任务的完成。

## 总结一下同步 JS 和异步 JS

想象三张图片在跑马拉松，在一个:

-   **同步** 系统，三张图片在同一条跑道上。一个不能超过另外一个。比赛得一个接一个地完成。如果 2 号图像停止，后续的图片也会停止。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1r9y4ghhq0t8wjb1u9h.png)

-   **异步系统** 这三张图片在不同的跑道上。 它们会在自己的跑道上完成比赛。不会受其他图片影像：
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ehknx5shc4orh32s0ktk.png)

##  同步和异步代码示例

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pzbnpcza9rbj8xgiby95.png)

在开始我们的项目之前，让我们看一些例子来消除一些疑问。

### 同步的代码示例

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5m6p1qy522lj3auvl5ty.png)

为了测试同步系统，用 JavaScript 写以下代码：

```javascript
console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");
```

控制台的结果如下：👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/54izy7zyo52j2z6netls.png)

###  异步代码示例

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5d0o8unbe8c67qeqz0w.png)

我们假设吃冰淇淋需要两秒钟。现在，让我们测试一个异步系统。用 JavaScript 编写下面的代码。

**注意:** 不用担心,我们将在本文后面讨论 `setTimeout()` 函数。

```javascript
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")
```

控制台的结果如下：👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o44c2t0r7bknkadoumgx.png)

既然我们已经了解了同步操作和异步操作之间的区别，那么让我们来创建我们的冰淇淋商店。

## 如何设置我们的项目

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2mzbtcnm67v2iys7cix7.png)

对于这个项目，你只需要打开[Codepen.io](https://codepen.io/)直接开始编码。或者，你可以用 VS code 编辑器来做。

打开 JavaScript 部分，然后打开开发人员控制台。我们将编写代码并在控制台中查看结果。

# 什么是 JavaScript 中的回调函数？

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s5iloofqsv3lcdl4flsi.png)

当你将一个函数作为参数嵌套到另一个函数中时，这叫做回调。

下面是一个回调的说明:

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uz3pl56lmoc2pq7wzi2s.png)

**一个回调的例子**

别担心，我们马上就会看到一些回调的例子。

### 为什么要使用回调?

当我们做一个复杂的任务时，我们把它分解成更小的步骤。 为了帮助我们根据时间(可选)和顺序在这些步骤之间建立关系时我们会使用回调。

看看这个例子:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o05q7ortgctx2oeyntfn.png)

**图表包含制作冰淇淋的步骤**

这些是制作冰淇淋需要的小步骤。 还要注意，在本例中，步骤的顺序和计时是至关重要的。你不能只把水果切了就端上冰淇淋。

同时，如果前一个步骤没有完成，我们就不能进入下一个步骤。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2v1rn50smjul9arkneza.png)

为了更详细地解释这一点，让我们开始做冰淇淋店的生意。

## 等等

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cq8exwor5aiciu2j6jwu.png)

该店将分为两部分:

-   储藏室里有所有的配料[我们的后台]
-   我们将在厨房里制作冰淇淋 \[前端\]

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i69bws707m5rvsj34i9o.png)

## 让我们存储我们的数据

现在，我们要把配料存储在一个对象中。让我们开始!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ihezrht8dgg9xn8lm2k9.png)

你可以像这样在对象中存储成分:👇

```javascript
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"]
 }
```

我们的其他食材在这里:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dcwr770l0ubupv0r2gj.png)

您可以像这样将这些其他成分存储在 JavaScript 对象中:👇
 
```javascript
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
```

整个业务取决于客户的 **订单**。一接到订单，我们就开始生产，然后供应冰淇淋。 因此我们将创建两个函数 ->

-   `order`
-   `production`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3bnzniiyamo0b9l7e806.png)

 这就是它的工作原理:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8h8ra9wor8cs3dgddpb.png)

从客户那里获取订单，取得食材，开始生产，然后上桌。

我们来写一下函数。在这里我们使用箭头函数:

```javascript
let order = () =>{};

let production = () =>{};
```

现在，让我们使用回调建立这两个函数之间的关系，如下所示:👇

```javascript
let order = (call_production) =>{

  call_production();
};

let production = () =>{};
```

### 让我们做个小测试

 我们将使用  `console.log()` 函数进行测试，以消除关于如何建立这两个函数之间的关系的疑问。

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

为了运行测试，我们将调用 **`order`** 函数。我们将添加第二个函数名为 `production` 作为它的参数。

```javascript
// name 👇 of our second function
// 将第二个函数命名为 👇
order(production);
```

下面是我们控制中的结果 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u41ugdxxed1q8coz5hol.png)

## 休息一下

到目前为止一切都很好，休息一下吧!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tnr74waq6noc0djln3qx.png)

## 清除 console.log 日志

保留这段代码并删除所有的东西 \[不要删除我们的 stocks 变量\]。在我们的第一个函数中，传递另一个参数，以便我们可以接收订单\[水果名\]:

```javascript
// 函数 1

let order = (fruit_name, call_production) =>{

  call_production();
};

// 函数 2

let production = () =>{};


// 触发 👇

order("", production);
```

下面是我们的步骤，以及执行每个步骤所需的时间。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**图表包含制作冰淇淋的步骤**

在这个图表中，您可以看到第一步是下订单，这需要 2 秒。第二步是切水果(2 秒)，第三步是加水和冰(1 秒)，步骤 4 启动机器(1 秒)，第 5 步是选择容器(2 秒)，第六步是选择配料(3 秒)，以及第七步，也就是最后一步，端上冰淇淋，这需要 2 秒。

要建立计时，函数 `setTimeout()` 非常好，因为它也使用一个回调函数作为参数。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qwrg1taugyhvjnkx8xpp.png)

**setTimeout() 函数的语法**

现在，让我们使用这个函数来选择的水果:
```javascript
// 功能1

let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000)
};

// 功能2

let production = () =>{
  // blank for now
};

// 触发 👇
order(0, production);
```

下面是控制台中的结果:👇

**注意**  2 秒后才会显示结果。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/edwji5vauypoezj3bxdk.png)

如果您想知道我们是如何从 stock 变量中采摘草莓的，下面是代码 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ia38z3x6b96xpq3aid91.png)

不删除任何代码。现在，我们将使用以下代码开始编写生产函数。我们将使用箭头函数: 👇

```javascript
let production = () =>{

  setTimeout(()=>{
    console.log("production has started")
  },0000)

};
```

结果如下 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5yskzvg7rezo2sg4lklq.png)

我们将在现有的 `setTimeout` 函数中嵌套另一个 `setTimeout` 函数来切水果。如:👇

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

结果如下 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4659l1mua0rv40rwyem7.png)

如果你还记得，这是我们的步骤:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**图表包含制作冰淇淋的步骤**

让我们通过在另一个函数中嵌套一个函数来完成我们的冰淇淋生产 - 这也称为回调，还记得吗？

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

控制台结果如下👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5mq9bg6fqrc8apj7nu7b.png)

感到疑惑吗？

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/man5l5pwavp9prio1wc0.png)

这叫做回调地狱。它看起来像这样(还记得上面的代码吗?):👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d5rk7f8d920jzn22smjh.png)

**回调地狱图解**

解决方案是什么?

# 如何使用 Promise 来避免回调地狱

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x3neys1hxsrifgg5qm6x.png)

Promises 的发明是为了解决回调地狱的问题和更好地处理我们的任务的。

## 休息一下

先休息一下!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bwfvel7kvm422gqvj0os.png)

这就是 promise 的样子

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7qo1zheuin2825osozvc.png)

**promised 的格式说明**

让我们一起来剖析 promises。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gozy5r1nfubzeq5t5t25.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ezi9ogz0ergprgkmu68a.png)

**promise 周期的图解**

如上图所示，一个 promise 有三种状态

-   **Pending:** 这是初始阶段。这里什么也没有发生。 你可以这样想，你的客户正在慢慢地给你下订单。但是他们还没有点任何东西。
-   **Resolved:** 这意味着你的顾客已经收到了他们的食物并且很高兴。
-   **Rejected:** 这意味着你的顾客没有收到他们点的单并离开了冰激凌店。

让我们将 promise 应用到我们的冰淇淋生产案例研究中。

## 等等

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/634b6oyglkyoccsvr8l7.png)

首先，我们需要了解另外四件事 ->

-   时间和工作的关系
-   Promise 链
-   错误处理
-   `.finally` 函数

让我们开始我们的冰淇淋店，一步一步地理解这些概念。

## 时间和工作的关系

如果你还记得，这就是我们制作冰淇淋的步骤和时间
 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rphpp2lqjnk7f0tv5g3d.png)

**图表包含制作冰淇淋的步骤**

为了实现这一点，让我们在 JavaScript 中创建一个变量: 👇

```javascript
let is_shop_open = true;
```

现在创建一个名叫 `order` 的函数，然后传两个名叫 `time, work`的参数：

```javascript
let order = ( time, work ) =>{

  }
```

现在，我们要向客户发起 promise，"我们将给献上冰淇淋"，如下 ->

```javascript
let order = ( time, work ) =>{

  return new Promise( ( resolve, reject )=>{ } )

  }
```

我们的 promise 有 2 部分：

-   Resolved \[ 用户拿到了冰激凌 \]
-   Rejected \[ 用户没有拿到冰激凌 \]

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

让我们在 `if` 语句中使用 `setTimeout()` 函数在 promise 中添加时间和工作因素。跟我来👇

**注意:** 在现实生活中，你也可以避免时间因素。 这完全取决于你的工作性质。

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

现在，我们要用新创建的函数开始制作冰淇淋。

```javascript
// Set 👇 time here
order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
//    pass a ☝️ function here to start working
```

2 秒后的结果是👇:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/erzjup8wt505j502e73n.png)

干的不错！

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8taajvjy6pfq35hu90nq.png)

## Promise 链

在这个方法中，我们使用 `.then` 处理后续的程序。它看起来像这样👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l27ytifkoedl22kc97lh.png)

**使用 .then 处理函数的 promise 链说明**

当我们的 promise 被 resolve 时, .then 处理函数返回一个 promise。

#### 例子如下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1qpeewo19qbhzj47goos.png)


让我说得简单点: 这类似于给某人指示。你告诉别人“先做这个，然后做那个，然后做其他的事情，然后……”,然后……，然后……”等。

-   他的首要任务是我们原始 promise。
-   一旦完成了一小部分工作，剩下的任务就返回了新的 promise

让我们在我们的项目中实现这一点。 在代码的底部编写以下代码行。👇

**注意:** 不要忘记在 `.then` 函数中写 `return` 。 否则，它将不能正常工作。如果你很好奇，试着在我们完成这些步骤后去掉返回值:

```javascript
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
  return order(0000,()=>console.log('production has started'))
})
```

结果如下:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qhhjaakbi6zshxhi6afy.png)

使用相同的系统，让我们完成我们的项目:👇

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

结果如下:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y0d0f4ys83ctnevkbgxs.png)

## 错误处理

当出现错误时，我们需要一种处理错误的方法。但首先，我们需要了解 promise 周期:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jlm7zwonbxszeaccyohv.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z2ajcu52rxzwq64g81vp.png)

**promise 周期说明**

为了捕获错误，让我们将变量改为 false。

```javascript
let is_shop_open = false;
```

也就是说我们的店关门了。我们不再卖冰淇淋给顾客了。

为了处理这种情况我们使用 `.catch` 函数。类似 `.then`，它也返回一个 promise，但只有当我们最初的 promise 被 rejected 时才会执行。

这里有一个小提示:

-   `.then` 在 promise resolved 时候被执行
-   `.catch` 在 promise rejected 时候被执行

到代码最底部，编写以下代码:👇

记住在`.then` 和 `.catch`之间不能有任何东西。 

```javascript
.catch(()=>{
  console.log("Customer left")
})
```

结果如下：👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lot6engklu29y05q8xyr.png)

关于这段代码，有两点需要注意:

-   第一个信息是从 `reject()` 部分来的
-   第二个信息是从 `catch()` 部分来的

## 如何使用 .finally() 函数

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gdq3i0agj4volq46ycue.png)

有一个叫做"finally"的函数，不管我们的 promise 是被 resolve 了还是被 rejecte 了它都会被执行。

**例如:**  不管我们是没有顾客还是有 100 个顾客，我们的店都会在一天结束的时候关门

 如果您想对此进行测试，请在最下面编写以下代码: 👇

```javascript
.finally(()=>{
  console.log("end of day")
})
```

结果如下： 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2j3jf2uofip1d6y2rtt.png)

请大家欢迎 Async / Await~

# Async / Await 如何在 JavaScript 中工作

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ra7483f90b69pjl2cbae.png)

这应该是编写 promise 的更好方式，它可以帮助我们保持代码的简单和干净。

你所要做的就是在任何常规函数之前写 `async` 关键字，它就变成了一个 promise。

## 先休息一下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4vujyfxz7dg41jhjtcrx.png)

让我们来看一看: 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17f08ygj1odk28hgl9eq.png)

## JavaScript 中 Promises vs Async/Await

在 async/await 之前，为了写一个 promise，我们这样写:

```javascript
function order(){
   return new Promise( (resolve, reject) =>{

    // Write code here
   } )
}
```

现在使用 async/await，我们可以这么写:

```javascript
//👇 神奇的关键字
 async function order() {
    // Write code here
 }
```

## 等等

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t1pjzw6zl0h21tyyh9u3.png)

你必须理解->

-   如何使用 `try` 和 `catch` 关键字
-   如何使用 await 关键字

## 如何使用 Try 和 Catch 关键字

我们使用 `try` 关键字来运行代码，同时使用 `catch` 来捕获错误。这和我们看 promise 时看到的概念是一样的。

让我们来比较一下。我们来看一个小 demo，然后开始编码。

### JS 中的 Promise -> resolve 和 reject

我们在 resolve 中这样使用 resolve 和 reject:

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

### JS 中的 Async / Await -> try，catch

当我们使用 async/await 时，我们可以这么写:

```javascript
//👇 神奇的关键字
async function kitchen(){

   try{
// 我们来制造一个假问题     
      await abc;
   }

   catch(error){
      console.log("abc does not exist", error)
   }

   finally{
      console.log("Runs code anyways")
   }
}

kitchen()  // 调用
```

不要慌，我们接下来将讨论  `await`  关键字。

现在希望你理解了 promise 和 Async / Await 之间的区别了。

## 如何使用 JavaScript 的 Await 关键字

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fry577xha7313ead96xy.png)

关键字 `await` 使 JavaScript 等待，直到一个 promise reslove 时才会返回它的结果。

### 如何在 JavaScrip 中使用 await 关键字

我们回冰淇淋店去吧。我们不知道顾客更喜欢哪种配料，巧克力还是花生。所以我们需要停止我们的机器，然后去问我们的顾客他们想在冰淇淋上加什么。

注意这里只有我们的厨房被停止了，但是我们在厨房外的员工仍然会做这样的事情:

-   洗餐具
-   清洁桌子
-   点单，等等。

## 一个 Await 关键字代码示例

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8r5w5aapofalnq882wat.png)

让我们创建一个小 promise 来询问要使用那种配料。这个过程需要 3 秒。

```javascript
function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },3000)
  })
}
```

现在，让我们首先使用 async 关键字来创建 kitchen 函数。

```javascript
async function kitchen(){

  console.log("A")
  console.log("B")
  console.log("C")
  
  await toppings_choice()
  
  console.log("D")
  console.log("E")

}

// 触发函数

kitchen();
```

让我们在 `kitchen()`  调用下面添加其他任务。

```javascript
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
```

结果如下

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y0dr669gewtrrd5fd86p.png)

我们走出厨房问我们的顾客，“你想要哪种配料？“， 与此同时，还有其他事情要做。

一旦他们选好了配料，我们就进入厨房，完成任务。

### 注意

当使用 Async/ Await 时，你也可以使用 promise 的核心部分 `.then`, `.catch`, 和 `.finally`函数。

### 我们再开一家冰淇淋店吧

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzw8gp721oecwo2b3l6s.png)

我们要创建两个函数 ->

-   `kitchen`: 制作冰激凌
-   `time`:  分配好每一项小任务所需要的时间

让我们开始吧! 先创建时间函数:

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

现在，让我们创建我们的厨房:

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

让我们来做个小说明，看看我们的厨房功能是否正常:

```javascript
async function kitchen(){
   try{

// 执行这1个任务所花费的时间
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

// 触发
kitchen();
```

当商店开门时，结果是这样的:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lptup827qau72e83deuv.png)

当商店关门时，结果是这样的:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r8pjz1qlw58ap8pq7crz.png)

到目前为止一切顺利。

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cnkgk63x51wth2byxzfe.png)

让我们完成我们的项目。

下面是我们的任务列表:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7wthn0jr5vw7vb02e4qg.png)

**图表包含制作冰淇淋的步骤**

首先，开张

```javascript
let is_shop_open = true;
```

现在在 `kitchen()` 函数中编写步骤:👇

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

结果如下:👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qs9yccq9209u7m9lquju.png)

# 总结

恭喜你读完了本文!在本文中，您可以了解到:

-   同步和异步系统之间的区别
-   异步 JavaScript 使用 3 种机制(callbacks, promises, and Async/ Await)

这是你阅读到最后的奖励。❤️

### 欢迎提出建议和批评 ❤️

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
