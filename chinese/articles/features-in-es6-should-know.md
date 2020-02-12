> * 原文地址：[These are the features in ES6 that you should know](https://www.freecodecamp.org/news/these-are-the-features-in-es6-that-you-should-know-1411194c71cb/)
> * 原文作者：[Cristian Salcescu](https://www.freecodecamp.org/news/author/cristiansalcescu/)
> * 译者：[Hanx](https://github.com/Samhanx)
> * 校对者：

# 那些你应该知道的 ES6 特性

ES6 为 JavaScript 这门语言带来了很多特性。一些新的语法可以让你写出更具表现力的代码；一些特性完善了函数式编程的工具箱；而也有一些特性颇具争议。

## let 和 const

现在有两种新的声明变量的方式（let 和 const），再加上过去使用的方式（var）。

### let

`let` 在当前作用域中声明并可以选择初始化变量。当前作用域可以是任意一个模块，一个函数，或者一个代码块。未被初始化的变量的值是 `undefined`。

作用域定义了一个变量的生命周期和访问权限。我们无法在变量声明的作用域之外访问它们。

下面这段代码强调了 `let` 的块级作用域：

```js
let x = 1;
{ 
  let x = 2;
}
console.log(x); //1
```

相反，使用 `var` 声明的变量则不具备块及作用域：

```js
var x = 1;
{ 
  var x = 2;
}
console.log(x); //2
```

在 `for` 循环语句中，使用 `let` 声明变量将会为每一次迭代创建一个当前块级作用域的本地新变量。以下这个循环在五个不同的 `i` 变量上创建了五个闭包。

```js
(function run(){
  for(let i=0; i<5; i++){
    setTimeout(function log(){
      console.log(i); //0 1 2 3 4
    }, 100);
  }
})();
```

同样的代码如果换成 `var` 声明将会创建五个使用同一个变量的闭包，所以所有的闭包函数都会输出 i 变量最终的值。

`log()` 函数是一个闭包。更多关于闭包的内容，可以参看 [Discover the power of closures in JavaScript](https://www.freecodecamp.org/news/discover-the-power-of-closures-in-javascript-5c472a7765d7/)。

### const

`const` 声明的变量不能再重新赋值。只有当赋值是不可变的时，它才会变成常量。

不可变的值是指那些一旦创建，就不能再改变的值。原始值是不可变的，对象是可变的。

`const` 冻结变量，而 `Object.freeze()` 冻结对象。

使用 `const` 声明变量必须强制进行初始化操作。

**译注：** `const` 初始化对象时，不可变的是对象的内存引用地址，仍然可以对对象进行属性操作。当初始化原始值（字符串，数字，布尔值）时，这些值由于不可变更，所以成为常量。

## 模块

在有模块之前，在任何函数外部声明的变量都是全局变量。

在模块里，在任何函数外部声明的变量会隐藏起来，除非显式地导出，否则其他模块无法访问。

导出操作让其他模块可以访问模块内的函数或者对象。在下面例子中，我从不同的模块导出了不同的函数：

```js
//module "./TodoStore.js"
export default function TodoStore(){}

//module "./UserStore.js"
export default function UserStore(){}
```

导入操作让当前模块可以访问其他模块内的函数或者对象。

```js
import TodoStore from "./TodoStore";
import UserStore from "./UserStore";

const todoStore = TodoStore();
const userStore = UserStore();
```

## 展开语法(Spread)/剩余参数(Rest)

根据使用的场景，`...` 操作符可以是展开操作符或者剩余参数。请看下面这个例子：

```js
const numbers = [1, 2, 3];
const arr = ['a', 'b', 'c', ...numbers];

console.log(arr);
["a", "b", "c", 1, 2, 3]
```

这是展开操作符。现在看另一个例子：

```js
function process(x,y, ...arr){
  console.log(arr)
}
process(1,2,3,4,5);
//[3, 4, 5]

function processArray(...arr){
  console.log(arr)
}
processArray(1,2,3,4,5);
//[1, 2, 3, 4, 5]
```

这是剩余参数。

### arguments

使用剩余参数，我们可以替换掉 `arguments` 这个虚拟参数。剩余参数是一个数组，而 `arguments` 不是。

```js
function addNumber(total, value){
  return total + value;
}

function sum(...args){
  return args.reduce(addNumber, 0);
}

sum(1,2,3); //6
```

### 克隆

展开操作符让对象和数组的克隆变得更简单和更具表现力。

对象属性的展开操作符是 ES2018 的一部分。

```js
const book = { title: "JavaScript: The Good Parts" };

//clone with Object.assign()
const clone = Object.assign({}, book);

//clone with spread operator
const clone = { ...book };

const arr = [1, 2 ,3];

//clone with slice
const cloneArr = arr.slice();

//clone with spread operator
const cloneArr = [ ...arr ];
```

**译注：** spread 进行引用类型的拷贝只是浅拷贝。

### 连结

在下面的例子中，展开操作符用来连结数组：

```js
const part1 = [1, 2, 3];
const part2 = [4, 5, 6];

const arr = part1.concat(part2);

const arr = [...part1, ...part2];
```

### 合并对象

展开操作符，以及像 `Object.assign()` 方法，可以用来从至少一个对象复制属性到一个空对象上，然后合并它们的属性。

```js
const authorGateway = { 
  getAuthors : function() {},
  editAuthor: function() {}
};

const bookGateway = { 
  getBooks : function() {},
  editBook: function() {}
};

//copy with Object.assign()
const gateway = Object.assign({},
      authorGateway, 
      bookGateway);
      
//copy with spread operator
const gateway = {
   ...authorGateway,
   ...bookGateway
};
```

## 属性简写

考虑下面的代码：

```js
function BookGateway(){
  function getBooks() {}
  function editBook() {}
  
  return {
    getBooks: getBooks,
    editBook: editBook
  }
}
```

有了属性简写，当属性名称和将作为属性值的变量的名称一样时，我们就可以只写一次属性键值。

```js
function BookGateway(){
  function getBooks() {}
  function editBook() {}
  
  return {
    getBooks,
    editBook
  }
}
```

这是另一个例子：

```js
const todoStore = TodoStore();
const userStore = UserStore();
    
const stores = {
  todoStore,
  userStore
};
```

## 解构赋值

看下面的代码：

```js
function TodoStore(args){
  const helper = args.helper;
  const dataAccess = args.dataAccess;
  const userStore = args.userStore;
}
```

可以使用解构赋值写成像这样：

```js
function TodoStore(args){
   const { 
      helper, 
      dataAccess, 
      userStore } = args;
}
```

甚至可以直接在参数列表中使用解构语法：

```js
function TodoStore({ helper, dataAccess, userStore }){}
```

函数将这样调用：

```js
TodoStore({ 
  helper: {}, 
  dataAccess: {}, 
  userStore: {} 
});
```

## 默认参数

函数现在可以设置参数默认值。看下面的例子：

```js
function log(message, mode = "Info"){
  console.log(mode + ": " + message);
}

log("An info");
//Info: An info

log("An error", "Error");
//Error: An error
```

## 模版字符串

模板字符串使用 `\`` 字符定义。使用模板字符串，前面的输出内容可以写成这样：

```js
function log(message, mode= "Info"){
  console.log(`${mode}: ${message}`);
}
```

模板字符串可以支持多行字符串定义。不过，更好的选择是将长文本信息作为资源保留在数据库中。

下面是一个生成跨越多行的 HTML 代码的函数：

```js
function createTodoItemHtml(todo){
  return `<li>
    <div>${todo.title}</div>
    <div>${todo.userName}</div>
  </li>`;
}
```

## 更好的尾调用

>>> 当递归调用是函数执行的最后一项操作时，递归函数是尾递归的。

尾递归函数比非尾递归函数表现更好。尾递归调用优化不会为每次函数调用创建新的堆栈帧，而是使用一个单一的堆栈帧。（**译注：** 即尾递归只会使用最初函数创建的堆栈帧）

ES6 在严格模式下开启了尾调用优化。

[下面的函数](https://jsfiddle.net/cristi_salcescu/4t2j3uho/)会从尾调用优化中受益。

```js
function print(from, to) 
{ 
  const n = from;
  if (n > to)  return;
  
  console.log(n);
  //the last statement is the recursive call 
  print(n + 1, to); 
}

print(1, 10);
```

注： 尾调用优化现在还没有被主流浏览器支持。

**译注：**

按照阮一峰老师 [ES6 标准入门中提到的尾调用优化](http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96)，上面的代码其实并不会产生尾调用优化。因为 JS 中函数除非显式地指定 `return` 语句，否则函数将默认返回 `undefined`。上面示例的代码只是调用了自己，其实函数还有下一步操作，是返回 `undefined`。正确的代码应该是 `return print(n + 1, to)`。

## Promises

**译注：** Promise 的 resolve 状态这里译为解决， reject 状态译为拒绝。

>>> Promise 是对一次异步调用的引用。它将来可能会在某处解决或者失败。

多个 Promise 能够更好地被组合在一起执行。正如[下面代码](https://jsfiddle.net/cristi_salcescu/eqyhq2e3/)所示，可以很容易地在所有 Promise 都解决后调用一个函数，或者只要有一个 Promise 被解决就调用一个函数。

```js
function getTodos() { return fetch("/todos"); }
function getUsers() { return fetch("/users"); }
function getAlbums(){ return fetch("/albums"); }

const getPromises = [
  getTodos(), 
  getUsers(), 
  getAlbums()
];

Promise.all(getPromises).then(doSomethingWhenAll);
Promise.race(getPromises).then(doSomethingWhenOne);

function doSomethingWhenAll(){}
function doSomethingWhenOne(){}
```

`fetch()` 函数是 Fetch API 的一部分，它会返回一个 Promise。

`Promise.all()` 返回一个 Promise，它会在所有传入的 Promise 都解决后进入解决状态。 `Promise.race()` 返回一个 Promise，一旦传入的 Promise 中有任意一个被解决或者拒绝，它就会进入解决或者拒绝状态。

Promise 支持链式调用，允许你通过一组函数传递数据。在[下面的例子中](https://jsfiddle.net/cristi_salcescu/kgxnay46/)，`getTodos()` 的结果传递给 `toJson()` 作为参数传入，然后它的结果又传递给 `getTopPriority()` 作为参数传入，最后它的结果又作为参数传递给 `renderTodos()` 函数。当有错误抛出或者任一 Promise 被拒绝，`handleError` 函数会被调用。

```js
getTodos()
  .then(toJson)
  .then(getTopPriority)
  .then(renderTodos)
  .catch(handleError);

function toJson(response){}
function getTopPriority(todos){}
function renderTodos(todos){}
function handleError(error){}
```

在前面的示例中，`.then()` 处理了成功的场景，`.catch()` 处理了发生错误的场景。任意一步有错误抛出，调用链将跳转到链中最近的拒绝状态处理方法。

`Promise.resolve()` 返回一个被解决的 Promise。 `Promise.reject()` 返回一个被拒绝的 Promise。

## 类（Class）

ES6 中的类是使用自定义原型创建对象的语法糖。它有着比之前的构造函数更好的语法。[参考下面的例子](https://jsfiddle.net/cristi_salcescu/aLg8t632/)：

```js
class Service {
  doSomething(){ console.log("doSomething"); }
}

let service = new Service();
console.log(service.__proto__ === Service.prototype);
```

所有定义在 Service 类上的方法会被添加到 `Service.prototype` 原型对象上。所有实例都会将方法调用代理到 `Service.prototype` 原型对象上。所有的实例都会继承定义在 `Service.prototype` 上的方法。

### 继承

“类可以继承自其他类”。下面是一个[继承的例子](https://jsfiddle.net/cristi_salcescu/1xo96yt8/)，`SpecialService` 类继承自 `Service` 类：

```js
class Service {
  doSomething(){ console.log("doSomething"); }
}

class SpecialService extends Service {
  doSomethingElse(){ console.log("doSomethingElse"); }  
}

let specialService = new SpecialService();
specialService.doSomething();
specialService.doSomethingElse();
```

所有定义在 `SpecialService` 类上的方法会被添加到 `SpecialService.prototype` 原型对象上。所有实例都会将方法调用会被代理到 `SpecialService.prototype` 原型对象上。如果方法在 `SpecialService.prototype` 上找不到，会继续在 `Service.prototype` 上查找，如果还找不到，则继续在 `Object.prototype` 上查找。

### 类可能是一个不好的特性

尽管它们看上去封装好了，类的所有成员仍然是公有的。你仍然需要处理各种 `this` 这个缺失的上下文产生的问题。类暴露出去的公有 API 都是可变的。

`class` 可能是一个不好的特性，如果你忽略 JavaScript 的函数特性的话。`class` 可能会让人觉得 JavaScript 是一门基于类的语言然而实际上它既是一门函数式编程语言，又是基于原型的语言。

可以使用工厂函数来创建封装的对象。看下面的代码：

```js
function Service() {
  function doSomething(){ console.log("doSomething"); }
  
  return Object.freeze({
     doSomething
  });
}
```

这里所有的成员变量都默认是私有的。暴露的公有的 API 是不可变的。无需管理 `this` 产生的问题。

在使用框架和组件时，`class` 可以用作异常。React 就是这种情况，但在 [React Hooks](https://reactjs.org/docs/hooks-overview.html) 中就不是了。

为什么工厂函数更好，可以参看 [Class vs Factory function: exploring the way forward](https://www.freecodecamp.org/news/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15/)。

## 箭头函数

箭头函数快速地创建匿名函数，可以用来以更精简地语法创建较小地回调函数。

让我们来看一个 todo 应用的例子。一个 todo 对象有一个 `id`，一个 `title`，以及一个 `complete` 的布尔属性。现在来看下面这段只从对象中选择 `title` 属性的代码：

```js
const titles = todos.map(todo => todo.title);
```

或者下面这段只选择还未完成的待办事项的代码：

```js
const filteredTodos = todos.filter(todo => !todo.completed);
```

### this

箭头函数没有自己的 `this` 和 `arguments`。因此，你也许会看见箭头函数被用来解决 `this` 产生的一些问题。我认为避免这些问题的最佳方式是根本不使用 `this`。（**译注：** 不用妖魔化 this）

### 箭头函数也可能是一个不好的特性

在需要用到具名函数的场景时，箭头函数可能是一个不好的特性。使用箭头函数会影响代码的可读性和可维护性。看下面这段全部使用匿名箭头函数的代码：

```js
const newTodos = todos.filter(todo => 
       !todo.completed && todo.type === "RE")
    .map(todo => ({
       title : todo.title,
       userName : users[todo.userId].name
    }))
    .sort((todo1, todo2) =>  
      todo1.userName.localeCompare(todo2.userName));
```

现在来看[另一段同样逻辑的代码](https://jsfiddle.net/cristi_salcescu/pm7n2ab5/)，这段代码使用命名的纯函数进行了重构，函数的命名能帮助我们更好地理解它们：

```js
const newTodos = todos.filter(isTopPriority)
  .map(partial(toTodoView, users))
  .sort(ascByUserName);

function isTopPriority(todo){
  return !todo.completed && todo.type === "RE";
}
  
function toTodoView(users, todo){
  return {
    title : todo.title,
    userName : users[todo.userId].name
  }
}

function ascByUserName(todo1, todo2){
  return todo1.userName.localeCompare(todo2.userName);
}
```

更重要的是，匿名箭头函数将匿名显示在调用堆栈中。

可以参看 [How to make your code better with intention-revealing function names](https://www.freecodecamp.org/news/how-to-make-your-code-better-with-intention-revealing-function-names-6c8b5271693e/)了解为什么具名函数更好。

更少的代码并不意味着更具可读性。通过[下面这个例子](https://jsfiddle.net/cristi_salcescu/wc8be2gn/)看看哪一个对你更易理解：

```js
//with arrow function
const prop = key => obj => obj[key];

//with function keyword
function prop(key){
   return function(obj){
      return obj[key];
   }
}
```

注意返回对象的情况。下面的代码中，`getSampleTodo()` 函数返回了 `undefined`。

```js
const getSampleTodo = () => { title : "A sample todo" };

getSampleTodo();
//undefined
```

## 生成器

我认为 ES6 的生成器是一个让代码更复杂的无必要的特性。（**译注：** 这一点不认可作者，只能说对上层应用开发和新手来说没有必要使用。）

ES6 的生成器创建了一个包含 `next()` 方法的对象。`next()` 方法又创建了一个包含 `value` 属性的对象。ES6 的生成器改善了循环的使用。看[下面的代码](https://jsfiddle.net/cristi_salcescu/edq7vfwm/)：

```js
function* sequence(){
  let count = 0;
  while(true) {
    count += 1;
    yield count;
  }
}

const generator = sequence();
generator.next().value;//1
generator.next().value;//2
generator.next().value;//3
```

同样的生成器可以用一个闭包来简单实现。

```js
function sequence(){
  let count = 0;
  return function(){
    count += 1;
    return count;
  }
}

const generator = sequence();
generator();//1
generator();//2
generator();//3
```

更多关于函数生成器的例子可以参看 [Let’s experiment with functional generators and the pipeline operator in JavaScript](https://www.freecodecamp.org/news/lets-experiment-with-functional-generators-and-the-pipeline-operator-in-javascript-520364f97448/)

## 结论

`let` 和 `const` 用来声明和初始化变量。

模块封装功能并仅仅暴露一小部分。

展开操作符和剩余参数，以及属性简写让代码更具表现力。

Promise 和尾递归完善了函数式编程的工具箱。
