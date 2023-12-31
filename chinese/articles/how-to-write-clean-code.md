> -  原文地址：[How to Write Clean Code – Tips and Best Practices](https://www.freecodecamp.org/news/how-to-write-clean-code/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：yipeng0505
> -  校对者：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src = "https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-ken-tomita-389819.jpg " alt="How to Write Clean Code – Tips and Best Practices" class="kg-image"><figcaption>How to Write Clean Code – Tips and Best Practices</figcaption></figure>

大家好！这篇文章讲的主要是如何写出“整洁”的代码。我刚开始成为一个程序员的时候，这个概念常常会有点模糊，后来我发现它有很多细微差别的地方和一些可能的解释。

所以在这篇文章中，我们将会讨论“代码整洁”指的是什么，它为什么这么重要，我们如何评估一个代码库整洁与否。同时你也会学会一些你能一起做的最佳实践和惯例，从而让你的代码更加整洁。

冲！

## 目录

-   [写出“clean code”意味着什么以及我为什么要注意它？](##what-does-it-mean-to-write-clean-code-and-why-should-i-care)
-   [我如何评估一个代码库是否整洁？](##how-can-i-assess-whether-a-codebase-is-clean-or-not)
-   [写出整洁的代码的一些技巧和惯例](##tips-and-conventions-to-write-cleaner-code)
    -   [有效、效率和简单](###effectiveness-efficiency-and-simplicity)
    -   [格式和语法](###format-and-syntax)
    -   [命名](###naming)
    -   [简洁 VS 清晰](###conciseness-versus-clarity)
    -   [复用性](###re-usability)
    -   [清晰的执行流程](###clear-flow-of-execution)
    -   [单一制责原则](###single-responsibility-principle)
    -   [拥有“唯一事实的来源”](###having-a-single-source-of-truth)
    -   [只暴露和使用你需要的数据](###only-expose-and-consume-data-you-need)
    -   [模块化](###modularization)
    -   [文件夹结构](###folder-structures)
    -   [文档化](###documentation)
-   [总结](##wrapping-up)

<h2 id="what-does-it-mean-to-write-clean-code-and-why-should-i-care">写出“clean code”意味着什么以及我为什么要注意它？</h2>

代码整洁是一个术语，用来形容计算机代码容易阅读、理解和维护。整洁的代码需要用一种，能让代码简单、简洁且形象生动的方式进行书写。它遵循一套惯例、标准来使得代码容易阅读和理解。

整洁的代码脱离了复杂性、冗余以及一些“代码味”和反人类模式，因为这些东西会让代码变得难以维护、调试以及修改。

我并不能夸大代码整洁的重要性。当代码很容易阅读和理解的时候，开发者们就能很容易地在代码库中工作。这就可以提高工作效率以及降低产生的错误。

并且，代码易于维护也就保证了，即使随着时间的推移，代码库也能不断提高和更新。这对于长期项目来说十分重要，尤其是代码在未来几年需要不断更新和维护的时候。

<h2 id="how-can-i-assess-whether-a-codebase-is-clean-or-not">我如何评估一个代码库是否整洁？</h2>

这里可以用很多方法。好的文档、前后一致的格式以及组织良好的代码库都是需要考虑的因素。

代码审查也可以帮助识别潜在的问题，确保代码遵循最佳实践和惯例。

测试也是一个很重要的方面，它可以帮助确保代码运行的情况跟预期的保持一致，而且能尽早地发现运行中的问题和错误。

你有很多工具、实践以及惯例可以直接引入，从而确保一个代码库是整洁的。

通过引入这些工具和实践，开发者们可以创建一个容易阅读、理解和维护的代码库。

还有一件事情也很重要，就是一定要记住在代码整洁这件事情上，不可避免地会粘连很多主观性，并且对于这件事情也有许许多多不同的观点和见解。一个代码库对一个人来说可能看起来很整洁、厉害，但是对另一个人或者另一个项目来说可能就不是这样了。

但是在这个问题上依然还是有很多惯例是我们可以遵守的，下面就说一下这些。

<h2 id="tips-and-conventions-to-write-cleaner-code">写出cleaner code的一些技巧和惯例</h2>

<h3 id="effectiveness-efficiency-and-simplicity">有效、效率和简单</h3>

当我需要思考如何向已有的代码库引入新的功能、或者如何找到某个特殊问题的答案的时候，我总会优先考虑折三个东西。

#### 有效

首先，我们的代码必须有效，这就意味着它必须能够解决它应该解决的问题。当然这是我们对我们自己的代码最基本的期望，但是如果我们实施的东西没有起到作用的话，此时考虑其他事情是毫无意义的。

#### 效率

第二，一旦我们我们只我们的代码解决了问题，我们就应该检查它是否有效率。就时间和空间而言，程序运行时是否使用了合理的资源？它能不能运行地更快一些或者占用空间更少一些。

为了评估这一点，算法复杂度是一个你应该注意的事情。如果你对这个词不熟悉，你可以去我写的[这一篇文章](https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#algorithmic-complexity)看一下。

在效率这部分展开的话， 下面有两个例子，都是计算一个数组中所有数字的总和。

```javascript
// Inefficient Example
function sumArrayInefficient(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
```

`sumArrayInefficient`函数使用`for`循环迭代数组，并将每个元素添加到`sum`变量中。虽然这是一个可行解，但是这样就没太有效率了，因为不管数组有多长，它都需要迭代整个数组。

```javascript
// Efficient example
function sumArrayEfficient(array) {
  return array.reduce((a, b) => a + b, 0);
}
```

在这里， `sumArrayEfficient` 函数使用`reduce` 方法去计算数组里的数字的总和。 `reduce` 方法将函数应用于数组的每个元素，并累加结果。在这种情况下，函数只需将每个元素添加到从 0 开始的累加器中。

这是一个更有效的解决方案，因为它只需要对数组进行一次迭代，并在进行时对每个元素执行求和操作。

#### 简单

最后是**简单**。这是最难评估的一个方面，因为它很主观，它取决于读代码的人。但是也有一些我们可以遵循的指南：

1. 你能简单地理解程序的每行代码在干什么吗？
2. 函数和变量的定义是否都清晰地代表他们需要代表的内容？
3. 在整个代码库中，代码的缩进和空格是否遵循正确的代码格式？
4. 代码有可用的文档吗？评论是否用于解释程序的复杂部分？
5. 你能以多快的速度识别出代码库的哪个部分是程序的某些功能？你能在不修改代码其他部分的前提下删除/增加新功能吗？
6. 代码是否遵循模块化方法，在组件中分离不同的功能？
7. 代码在可能的情况下会重复使用吗？
8. 在整个代码库中，相同的架构、设计和实现决策是否得到一样的遵循？

通过遵循和优先考虑有效、效率和简单这三个概念，在考虑如何实施解决方案时，我们总是可以遵循一个指导方针。现在，让我们扩展一些可以帮助我们简化代码的指南。

<h3 id="format-and-syntax">格式和语法</h3>

在整个代码库中使用一致的格式和语法也是写出整洁代码的一个重要因素。这是因为一致的结构和语法能让代码可读性更强，并且能够更加容易理解。

当代码一致时，开发者们可以轻松的识别模式、理解代码的工作流程，这也就使得未来调试、维护和更新代码库变得更加容易。一致性也能帮助降低错误，因为它确保所有的开发者都遵循相同的标准和惯例。

我们应该考虑的一些格式和语法如下：

-   **缩进和间距**

```javascript
// bad indentation and spacing
const myFunc=(number1,number2)=>{
const result=number1+number2;
return result;
}

// good indentation and spacing
const myFunc = (number1, number2) => {
    const result = number1 + number2
    return result
}
```

这里是同一个函数的例子，一个是没有缩进和空格，另一个是有合适的空格和缩进，我们可以发现第二个更容易阅读。

-   **一致的语法**

```javascript
// Arrow function, no colons, no return
const multiplyByTwo = number => number * 2

// Function, colons, return
function multiplyByThree(number) {
    return number * 3;
}
```

同样，这里是用两种语法写出来的非常相似的函数。第一个用的是一个箭头定义的函数，没有括号和返回，而另一个是一个使用了括号和返回的相同函数。

两个都可以顺利的实现功能，但是我们在相似的操作中应该总是使用相似的操作，这样的话可以使得代码库更加的可读，且代码量也更加的均匀。

Linterns 和代码格式化程序是我们可以在项目中使用的很棒的工具，可以在我们的代码库中自动化语法和格式约定。 如果您不熟悉这些工具，[查看我的另一篇文章](https://www.freecodecamp.org/news/using-prettier-and-jslint/)。

-   **一致的案例惯例**

```javascript
// camelCase
const myName = 'John'
// PascalCase
const MyName = 'John'
// snake_case
const my_name = 'John'
```

我们选择的案例遵循的惯例也是如此。上述三种情况都可以，但我们应该在整个项目中始终使用相同的用法。

<h3 id="naming">命名</h3>


清晰而有描述性地命名变量和函数，对于书写 clean code 也是十分钟重要的一个方面。它可以帮助提高代码的可读性和维护能力。当命名选择良好时，其他开发人员可以快速理解变量或函数在做什么，以及它与代码的其余部分有何关系。

下面是 Javascript 中的两个例子，用来展示清晰且有描述性地命名的重要性：

```javascript
// Example 1: Poor Naming
function ab(a, b) {
  let x = 10;
  let y = a + b + x;
  console.log(y);
}

ab(5, 3);
```

在本例中，我们有一个函数，它接受两个参数，将它们与常量值 10 相加，并将结果记录到控制台。函数名称和变量名选择不当，没有给出任何指示函数的作用或变量代表什么。

```javascript
// Example 1: Good Naming
function calculateTotalWithTax(basePrice, taxRate) {
  const BASE_TAX = 10;
  const totalWithTax = basePrice + (basePrice * (taxRate / 100)) + BASE_TAX;
  console.log(totalWithTax);
}

calculateTotalWithTax(50, 20);
```

在这个例子中，我们有一个函数来计算产品的总价格，包括收取的税值。函数名称和变量名选择得很好，可以清楚地表明函数的作用以及变量代表什么。

这使得代码更容易阅读和理解，特别是对于未来可能使用代码库的其他开发人员来说。

<h3 id="conciseness-versus-clarity">简洁VS清晰</h3>

当涉及到编写整洁的代码时，在简洁和清晰之间取得平衡很重要。虽然保持代码简洁以提高其可读性和可维护性很重要，但同样重要的是确保代码清晰且易于理解。编写过于简洁的代码可能会导致混乱和错误，并可能使其他开发人员难以使用代码。

以下是两个例子，证明了简洁和清晰的重要性：

```javascript
// Example 1: Concise function
const countVowels = s => (s.match(/[aeiou]/gi) || []).length;
console.log(countVowels("hello world"));
```

本示例使用简洁的箭头函数和正则表达式来计算给定字符串中的元音数量。虽然代码非常简短且易于编写，但其他开发人员可能无法立即清楚正则表达式模式的工作原理，特别是如果他们不熟悉正则表达式语法。

```javascript
// Example 2: More verbose and clearer function
function countVowels(s) {
  const vowelRegex = /[aeiou]/gi;
  const matches = s.match(vowelRegex) || [];
  return matches.length;
}

console.log(countVowels("hello world"));
```

此示例使用传统函数和正则表达式来计算给定字符串中的元音数量，但以清晰易懂的方式进行计算。函数名称和变量名是描述性的，正则表达式模式存储在具有清晰名称的变量中。这使得很容易看到该功能在做什么以及它是如何工作的。


在编写代码时，在简洁和清晰之间取得平衡很重要。虽然简洁的代码可以提高可读性和可维护性，但对于将来可能使用代码库的其他开发人员来说，确保代码仍然清晰且易于理解很重要。

通过使用描述性函数和变量名，以及使用清晰可读的代码格式和注释，可以编写易于理解和处理的干净简洁的代码。

<h3 id="re-usability">复用性</h3>

代码可重用性是软件工程的一个基本概念，指的是代码无需修改即可多次使用的能力。

代码可重用性的重要性在于，它可以通过减少需要编写和测试的代码量来大大提高软件开发的效率和生产力。

通过重复使用现有代码，开发人员可以节省时间和精力，提高代码质量和一致性，并最大限度地降低引入错误和错误的风险。可重用代码还允许更多模块化和可扩展的软件架构，使其更容易随着时间的推移维护和更新代码库。

```javascript
// Example 1: No re-usability
function calculateCircleArea(radius) {
  const PI = 3.14;
  return PI * radius * radius;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

const circleArea = calculateCircleArea(5);
const rectangleArea = calculateRectangleArea(4, 6);
const triangleArea = calculateTriangleArea(3, 7);

console.log(circleArea, rectangleArea, triangleArea);
```

这个例子定义了三个函数，分别计算圆、矩形和三角形的面积。每个函数执行一个特定的任务，但它们都不能重复用于其他类似任务。

此外，如果将来需要更改值，使用直接赋值的 PI 值可能会导致错误。该代码效率低下，因为它多次重复相同的逻辑。

```javascript
// Example 2: Implementing re-usability
function calculateArea(shape, ...args) {
  if (shape === 'circle') {
    const [radius] = args;
    const PI = 3.14;
    return PI * radius * radius;
  } else if (shape === 'rectangle') {
    const [length, width] = args;
    return length * width;
  } else if (shape === 'triangle') {
    const [base, height] = args;
    return (base * height) / 2;
  } else {
    throw new Error(`Shape "${shape}" not supported.`);
  }
}

const circleArea = calculateArea('circle', 5);
const rectangleArea = calculateArea('rectangle', 4, 6);
const triangleArea = calculateArea('triangle', 3, 7);

console.log(circleArea, rectangleArea, triangleArea);
```

此示例定义了单个函数 calculateArea，该函数采用形状参数和可变数量的参数。基于形状参数，函数执行适当的计算并返回结果。

这种方法效率要高得多，因为它消除了为类似任务重复代码的需要。它也更加灵活和可扩展，因为将来可以很容易地添加额外的形状。

<h3 id="clear-flow-of-execution">清晰的执行流程</h3>

清晰的执行流程对于编写干净的代码至关重要，因为它使代码更易于阅读、理解和维护。 遵循清晰和逻辑结构的代码不容易出错，更容易修改和扩展，并且在时间和资源方面更有效率。

另一方面，意大利面条代码是一个术语，用于描述复杂且难以理解的代码，通常以长、混乱和无组织的代码块为特征。 意大利面条代码可能是糟糕的设计决策、过度耦合或缺乏适当的文档和注释的结果。

下面是执行相同任务的两个 JavaScript 代码示例，一个执行流程清晰，另一个代码很杂乱：

```javascript
// Example 1: Clear flow of execution
function calculateDiscount(price, discountPercentage) {
  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscount(originalPrice, discountPercentage);

console.log(finalPrice);

// Example 2: Spaghetti code
const originalPrice = 100;
const discountPercentage = 20;

let discountedPrice;
let discountAmount;
if (originalPrice && discountPercentage) {
  discountAmount = originalPrice * (discountPercentage / 100);
  discountedPrice = originalPrice - discountAmount;
}

if (discountedPrice) {
  console.log(discountedPrice);
}
```

正如我们所见，示例 1 遵循清晰且合乎逻辑的结构，其中包含一个函数，该函数接受必要的参数并返回计算结果。 另一方面，示例 2 更加复杂，在任何函数之外声明了变量，并且使用多个 if 语句来检查代码块是否已成功执行。

<h3 id="single-responsibility-principle">单一制责原则</h3>

单一职责原则 (SRP) 是软件开发中的一项原则，它指出每个类或模块应该只有一个更改原因，或者换句话说，我们代码库中的每个实体都应该承担单一职责。

此原则有助于创建易于理解、维护和扩展的代码。

通过应用 SRP，我们可以创建更易于测试、重用和重构的代码，因为每个模块只处理单一职责。 这使得它不太可能有副作用或依赖性，这些副作用或依赖性会使代码更难使用。

```javascript
// Example 1: Withouth SRP
function processOrder(order) {
  // validate order
  if (order.items.length === 0) {
    console.log("Error: Order has no items");
    return;
  }
  
  // calculate total
  let total = 0;
  order.items.forEach(item => {
    total += item.price * item.quantity;
  });
  
  // apply discounts
  if (order.customer === "vip") {
    total *= 0.9;
  }
  
  // save order
  const db = new Database();
  db.connect();
  db.saveOrder(order, total);
}
```

在此示例中，`processOrder`函数处理多项职责：它验证订单、计算总额、应用折扣以及将订单保存到数据库中。 这使得该功能冗长且难以理解，并且对一项职责的任何更改都可能影响其他职责，从而使其更难维护。

```javascript
// Example 2: With SRP
class OrderProcessor {
  constructor(order) {
    this.order = order;
  }
  
  validate() {
    if (this.order.items.length === 0) {
      console.log("Error: Order has no items");
      return false;
    }
    return true;
  }
  
  calculateTotal() {
    let total = 0;
    this.order.items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }
  
  applyDiscounts(total) {
    if (this.order.customer === "vip") {
      total *= 0.9;
    }
    return total;
  }
}

class OrderSaver {
  constructor(order, total) {
    this.order = order;
    this.total = total;
  }
  
  save() {
    const db = new Database();
    db.connect();
    db.saveOrder(this.order, this.total);
  }
}

const order = new Order();
const processor = new OrderProcessor(order);

if (processor.validate()) {
  const total = processor.calculateTotal();
  const totalWithDiscounts = processor.applyDiscounts(total);
  const saver = new OrderSaver(order, totalWithDiscounts);
  saver.save();
}
```

在此示例中，`processOrder` 函数已拆分为遵循 SRP 的两个类：`OrderProcessor`和`OrderSaver`。

`OrderProcessor` 类负责验证订单、计算总额和应用折扣，而 `OrderSaver` 类负责将订单保存到数据库。

这使得代码更易于理解、测试和维护，因为每个类都有明确的职责，并且可以在不影响其他类的情况下进行修改或替换。

<h3 id="having-a-single-source-of-truth">拥有“唯一事实来源”</h3>

拥有“单一事实来源”意味着代码库中只有一个地方存储特定的数据或配置，代码中对它的任何其他引用都指向那个来源。 这很重要，因为它确保数据一致并避免重复和不一致。

这里有一个例子来说明这个概念。 假设我们有一个应用程序需要显示一个城市的当前天气状况。 我们可以通过两种不同的方式实现此功能：

```javascript
// Option 1: No "single source of truth"

// file 1: weatherAPI.js
const apiKey = '12345abcde';

function getCurrentWeather(city) {
  return fetch(`https://api.weather.com/conditions/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

// file 2: weatherComponent.js
const apiKey = '12345abcde';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}
```

在此选项中，API 密钥在两个不同的文件中重复，使其更难维护和更新。 如果我们需要更改 API 密钥，我们必须记住在两个地方都更新它。

```javascript
// Option 2: "Single source of truth"

// file 1: weatherAPI.js
const apiKey = '12345abcde';

function getCurrentWeather(city) {
  return fetch(`https://api.weather.com/conditions/v1/${city}?apiKey=${apiKey}`)
    .then(response => response.json());
}

export { getCurrentWeather, apiKey };


// file 2: weatherComponent.js
import { getCurrentWeather } from './weatherAPI';

function displayCurrentWeather(city) {
  getCurrentWeather(city)
    .then(weatherData => {
      // display weatherData on the UI
    });
}
```

在此选项中，API 密钥存储在一个位置（在 `weatherAPI.js` 文件中）并导出以供其他模块使用。 这可确保 API 密钥只有一个真实来源，并避免重复和不一致。

如果我们需要更新 API 密钥，我们可以在一个地方进行，所有其他使用它的模块将自动获得更新后的值。

<h3 id="only-expose-and-consume-data-you-need">只暴露和使用你需要的数据</h3>

编写整洁代码的一个重要原则是只公开和使用特定任务所需的信息。 这有助于降低复杂性、提高效率并避免因使用不必要的数据而导致的错误。

当不需要的数据被暴露或消耗时，可能会导致性能问题并使代码更难以理解和维护。

假设您有一个具有多个属性的对象，但您只需要使用其中的几个。 一种方法是在每次需要时引用对象和特定属性。 但这可能会变得冗长且容易出错，尤其是当对象嵌套很深时。 一种更清洁、更高效的解决方案是使用对象解构来仅公开和使用您需要的信息。

```javascript
// Original object
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

// Only expose and consume the name and email properties
const { name, email } = user;

console.log(name); // 'Alice'
console.log(email); // 'alice@example.com'
```

<h3 id="modularization">模块化</h3>

模块化是编写干净代码的基本概念。 它指的是将大型复杂代码分解为更小、更易于管理的模块或功能的做法。 这使代码更易于理解、测试和维护。

使用模块化提供了几个好处，例如：

1. 复用性：模块可以在应用程序的不同部分或其他应用程序中重复使用，节省开发时间和精力。
2. 封装：模块允许您隐藏函数或对象的内部细节，只将基本接口暴露给外界。 这有助于减少代码不同部分之间的耦合并提高整体代码质量。
3. 可扩展性：通过将大代码分解成更小的模块化片段，您可以轻松添加或删除功能，而不会影响整个代码库。

下面是一段 JavaScript 代码示例，它执行一个简单的任务，一个不使用模块化，另一个实现模块化。

```javascript
// Without modularization
function calculatePrice(quantity, price, tax) {
  let subtotal = quantity * price;
  let total = subtotal + (subtotal * tax);
  return total;
}

// Without modularization
let quantity = parseInt(prompt("Enter quantity: "));
let price = parseFloat(prompt("Enter price: "));
let tax = parseFloat(prompt("Enter tax rate: "));

let total = calculatePrice(quantity, price, tax);
console.log("Total: $" + total.toFixed(2));
```

在上面的示例中，`calculatePrice` 函数用于根据商品的数量、价格和税率计算商品的总价。 但是，此功能并未模块化，并且与用户输入和输出逻辑紧密耦合。 这会使测试和维护变得困难。

现在，让我们看一下使用模块化的相同代码的示例：

```javascript
// With modularization
function calculateSubtotal(quantity, price) {
  return quantity * price;
}

function calculateTotal(subtotal, tax) {
  return subtotal + (subtotal * tax);
}

// With modularization
let quantity = parseInt(prompt("Enter quantity: "));
let price = parseFloat(prompt("Enter price: "));
let tax = parseFloat(prompt("Enter tax rate: "));

let subtotal = calculateSubtotal(quantity, price);
let total = calculateTotal(subtotal, tax);
console.log("Total: $" + total.toFixed(2));
```

在上面的示例中，`calculatePrice` 函数被分解为两个较小的函数：`calculateSubtotal` 和 `calculateTotal`。 这些函数现在已经模块化，分别负责计算小计和总计。 这使代码更易于理解、测试和维护，也使其在应用程序的其他部分更易于重用。

模块化也可以指将单个代码文件分成许多较小的文件，这些文件之后会编译回单个（或更少的文件）的做法。 这种做法与我们刚才谈到的好处相同。

如果您想知道如何使用模块在 JavaScript 中实现这一点，[查看我的另一篇文章](https://www.freecodecamp.org/news/modules-in-javascript/)。

<h3 id="folder-structures">文件夹结构</h3>

选择一个好的文件夹结构是编写干净代码的重要部分。 组织良好的项目结构有助于开发人员轻松查找和修改代码，降低代码复杂度，并提高项目的可扩展性和可维护性。

另一方面，糟糕的文件夹结构会使理解项目架构、浏览代码库变得困难，并导致混乱和错误。

以下是使用 React 项目作为示例的好的和坏的文件夹结构示例：

```javascript
// Bad folder structure
my-app/
├── App.js
├── index.js
├── components/
│   ├── Button.js
│   ├── Card.js
│   └── Navbar.js
├── containers/
│   ├── Home.js
│   ├── Login.js
│   └── Profile.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   └── Profile.js
└── utilities/
    ├── api.js
    └── helpers.js
```

在此示例中，项目结构是围绕文件类型组织的，例如组件、容器和页面。

但是这种方法会导致混淆和重复，因为不清楚哪些文件属于哪里。 例如，`Home`组件存在于`containers`和`pages`文件夹中。 它还可能使查找和修改代码变得困难，因为开发人员可能需要导航多个文件夹才能找到他们需要的代码。

```javascript
// Good folder structure
my-app/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.module.css
│   │   │   └── index.js
│   │   ├── Card/
│   │   │   ├── Card.js
│   │   │   ├── Card.module.css
│   │   │   └── index.js
│   │   └── Navbar/
│   │       ├── Navbar.js
│   │       ├── Navbar.module.css
│   │       └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home.module.css
│   │   │   └── index.js
│   │   ├── Login/
│   │   │   ├── Login.js
│   │   │   ├── Login.module.css
│   │   │   └── index.js
│   │   └── Profile/
│   │       ├── Profile.js
│   │       ├── Profile.module.css
│   │       └── index.js
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   ├── App.js
│   └── index.js
└── public/
    ├── index.html
    └── favicon.ico
```

在此示例中，项目结构是围绕组件、页面和实用程序等功能进行组织的。 每个功能都有自己的文件夹，其中包含与该功能相关的所有文件。

这种方法使得查找和修改代码变得容易，因为与功能相关的所有文件都位于同一个文件夹中。 它还减少了代码重复和复杂性，因为功能是分开的，并且它们的相关文件被组织在一起。

总的来说，一个好的文件夹结构应该围绕功能而不是文件类型来组织，并且应该便于查找和修改代码。 清晰且合乎逻辑的结构可以使项目更易于维护、理解和扩展，而混乱和不一致的结构会导致错误和混乱。

如果您有兴趣了解更多相关信息，[在本文中我写了关于软件架构的文章](https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/#different-folder -structures-to-know)我扩展了文件夹结构和您可以遵循的众所周知的模式的主题。

<h3 id="documentation">文档化</h3>

文档是编写干净代码的重要组成部分。 适当的文档不仅可以帮助编写代码的开发人员将来更好地理解代码，还可以让其他开发人员更容易阅读和理解代码库。 当代码有良好的文档记录时，可以节省调试和维护代码的时间和精力。

在无法实施简单易懂的解决方案、业务逻辑相当复杂的情况以及必须与不熟悉代码库的人交互的情况下，文档化尤为重要。

记录代码的一种方法是使用注释。 注释可以提供上下文并解释代码的作用。 但重要的是要明智地使用注释，只在必要时评论并避免多余或不必要的注释。

另一种记录代码的方法是使用内联文档。 内联文档嵌入在代码本身中，可用于解释特定功能或代码片段的作用。 内联文档通常与 [JSDoc](https://jsdoc.app/) 等工具结合使用，它提供了在 JavaScript 中记录代码的标准。

像 Typescript 这样的工具还可以为我们的代码库提供自动文档，这非常有帮助。

如果您想了解更多关于 Typescript 的信息，我之前写了一篇 [初学者友好指南](https://www.freecodecamp.org/news/an-introduction-to-typescript/#otherfunctionalitiesoftypescript)。

最后，Swagger 和 Postman 等工具可用于记录 API，提供一种轻松理解如何与它们交互的方法

如果您有兴趣了解如何完全实施、测试、使用和记录 API，我最近为 [REST API](https://www.freecodecamp.org/news/build-consume-and-document- a-rest-api/) 和 [GraphQL API](https://www.freecodecamp.org/news/building-consuming-and-documenting-a-graphql-api/)。

<h2 id="wrapping-up">总结</h2>

最后，还是像之前那样，我希望你喜欢这篇文章并学到新东西。

如果需要，你也可以在 [LinkedIn](https://www.linkedin.com/in/germancocca/) 或 [Twitter](https://twitter.com/CoccaGerman) 上关注我。 下期见！

<figure class="kg-card kg0card0image kg-card-hascaption"><img src = "https://www.freecodecamp.org/news/content/images/2023/05/giphy.gif "  class="kg-image"></figure>
