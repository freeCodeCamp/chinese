> -  原文地址：[How to make your Tic Tac Toe game unbeatable by using the minimax algorithm](https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/)
> -  原文作者：[Ahmad Abdolsaheb](https://www.freecodecamp.org/news/author/ahmad/)
> -  译者：Papaya HUANG
> -  校对者：

![How to make your Tic Tac Toe game unbeatable by using the minimax algorithm](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg)

我挣扎了数小时，看了各种各样的教学资料、视频，敲自己脑袋，试图使用人工智能（Artificial Intelligence）创建一个无法被击败的井字棋游戏。如果你也又同样的经历，我想给你介绍极小化极大算法（[Minimax algorithm](https://zh.wikipedia.org/zh-tw/%E6%9E%81%E5%B0%8F%E5%8C%96%E6%9E%81%E5%A4%A7%E7%AE%97%E6%B3%95))。

这种算法就像一个专业的象棋选手，总能多想几步，并且站在对手的立场来思考棋局。算法不断向前预测，直到触达棋局的最终棋子排列局面（**最终状态**），这一状态要么就是平局、胜利或者失败。一旦进入到最终状态，AI 就会分配正分（+10）给胜利，负分（-10）给失败或者中性分（0）给平局。

同时，这个算法当轮到玩家下棋的时候，算法会评估玩家触达最终状态的步骤。当轮到 AI 的时候，算法会选择最大分数值的步骤，而当轮到玩家的时候，算法会选择最小分数值的步骤。极小化极大算法通过这个策略来避免 AI 输给玩家。

你可以使用 chrome 浏览器自行测试这个游戏。

See the Pen <a href='https://codepen.io/abdolsa/pen/vgjoMb'>minimax 4 medium</a> by Ahmad Abdolsaheb (<a href='https://codepen.io/abdolsa'>@abdolsa</a>) on <a href='https://codepen.io'>CodePen</a>.

极小化极大算法可以被定义为一个递归函数，这个递归函数完成以下事情：

1.  如果到达最终状态 (+10, 0, -10)返回一个值
2.  遍历棋盘所有可以落子的空位
3.  在每一个空位调用极小化极大函数（递归调用）
4.  评估调用函数的返回值
5.  返回最佳值

如果你不太熟悉递归的概念， 推荐你观看来自哈佛的 CS50 这个课程的[视频](https://www.youtube.com/watch?v=VrrnjYgDBEk)。

让我们通过代码示例来理解极小化极大算法，在接下来的两节你会看到具体的代码以及代码的实现步骤。

### 极小化极大算法的代码

在这篇教程中，我们将从如图 2 所示的接近棋局尾声开始讲解。因为极小化极大算法评估了棋局的每一个状态（非常多），所以从尾声开始能够帮助你更容易地理解极小化极大的递归调用是如何运作的。

在下图中，X 代表 AI，O 代表的是玩家。

![iYDAcMcMvbr0lBISCQqM-mBbfhqDx2sPqcYl](https://cdn-media-1.freecodecamp.org/images/iYDAcMcMvbr0lBISCQqM-mBbfhqDx2sPqcYl)

图 2

为了更好地处理井字棋棋盘，我们可以把它定义为一个包含 9 个元素的数组。每一个元素的索引（index）为它的值，这个之后会派上用场。因为图上的棋盘已经下好了 X 和 O，所以棋盘对应的数组(_origBoard_)如下：

```javascript
var origBoard = ["O",1,"X","X",4,"X",6,"O","O"];
```

然后声明 _aiPlayer_ 和 _huPlayer_ 两个变量并分别赋值为“X”和“O”。

接下来，你需要创建寻找获胜的元素组合的函数，并在找到后返回 true；还需要一个函数列举所有棋盘空位对应的索引。

```javascript
/* 原始棋盘
 O |   | X
 ---------
 X |   | X
 ---------
   | O | O
 */
var origBoard = [“O”,1 ,”X”,”X”,4 ,”X”, 6 ,”O”,”O”];

// 玩家
var huPlayer = “O”;

// ai
var aiPlayer = “X”;

// 返回由棋盘所有空位的索引组成的数组
function emptyIndexies(board){
  return  board.filter(s => s != "O" && s != "X");
}

// 获胜元素组合
function winning(board, player){
 if (
 (board[0] == player && board[1] == player && board[2] == player) ||
 (board[3] == player && board[4] == player && board[5] == player) ||
 (board[6] == player && board[7] == player && board[8] == player) ||
 (board[0] == player && board[3] == player && board[6] == player) ||
 (board[1] == player && board[4] == player && board[7] == player) ||
 (board[2] == player && board[5] == player && board[8] == player) ||
 (board[0] == player && board[4] == player && board[8] == player) ||
 (board[2] == player && board[4] == player && board[6] == player)
 ) {
 return true;
 } else {
 return false;
 }
}
```

让我们现在进入精华部分，定义极小化极大函数（Minimax）。该函数包含 _newBoard_ 和 _player_ 两个参数。然后，你需要找到棋盘空位的索引，并赋值给一个变量 _availSpots_。

```javascript
// minimax函数
function minimax(newBoard, player){
  
    //棋盘空位
    var availSpots = emptyIndexies(newBoard);
```

同时，你需要检查最终状态，并且返回对应的值。如果 O 获胜，则返回-10；如果 X 获胜，则返回+10。另外，如果 _availSpots_ 数组的长度为 0，则没有可以落子的空位，就是平局，返回 0.

```javascript

  // 检查最终状态是获胜、失败还是平局
  //并返回对应的值
  if (winning(newBoard, huPlayer)){
     return {score:-10};
  }
	else if (winning(newBoard, aiPlayer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }
```

然后，从每一个空位中收集到分数，之后再评估。因此，我们需要创建一个数组名为 _moves_ ，并且遍历所有的空位同时收集每一步的索引和分数并存储在对象 _move_ 中。

然后，将作为数字存储在 _origBoard_ 的空位的索引号设置为 _move_ 对象的索引属性。 然后，将空位设置为当前玩家的 _newboard_ 并用对手作为参数调用 _minimax_ 函数和修改后的 _newboard_。然后，存储通过调用 _minimax_ 函数得到对象，包含 _move_ 对象的 _score_ 属性。

> _如果极小化极大函数没有到最终状态，就会递归地一层一层深入棋局游戏。直到到达最终状态，并且向上一层返回一个分数，递归才会停止。_

最后，极小化极大函数重置 _newBoard_ 为最开始的样子， 将 _move_ 对象推入 _moves_ 数组。

```javascript
// 收集所有空位对象的数组
  var moves = [];

  // 遍历所有空位
  for (var i = 0; i < availSpots.length; i++){
    //为每一空位创建一个对象，并且存储空位索引
    var move = {};
  	move.index = newBoard[availSpots[i]];

    // 将空位设置为当前玩家
    newBoard[availSpots[i]] = player;

    //收集以对手为参数调用minimax函数的分数结果
    if (player == aiPlayer){
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else{
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    // 将空位重置为空
    newBoard[availSpots[i]] = move.index;

    // 将对象推入数组
    moves.push(move);
  }
```

然后。极小化极大算法需要在 _moves_ 数组中搜寻最佳 _move_ 。 当是 AI 下棋时，应该选择分数最高的 _move_，而当是玩家的时候，应该选择分数最低的 _move_。因此，如果 _player_ 是 _aiPlayer_，将变量 _bestScore_ 设置为一个非常低的数值，然后遍历整个 _moves_ 数组， 如果 _move_ 的 _score_ 比 _bestScore_ 高，算法就存储这个 _move_。如果发生了出现分数相同的情况，只存储第一个值。

当 _player_ 是 _huPlayer_ 时，也进行同样的步骤，只是 _bestScore_ 会先被定义为一个非常大的数值，极小化极大算法再寻找最低的值存储。

最终，Minimax 会返回一个存储 _bestMove_ 的对象。

```javascript
// 如果轮到AI，就遍历所有步骤，并找到分数最高的步
  var bestMove;
  if(player === aiPlayer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{

// 如果是轮到玩家，就寻找最低的分数
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

// 从moves数组返回挑选出来的move（对象）
  return moves[bestMove];
}
```

> _这就是 minimax 函数的全部内容 :) 你可以在[github](https://github.com/ahmadabdolsaheb/minimaxarticle)和[codepen](https://codepen.io/abdolsa/pen/mABGoz?editors=1011)找到算法的代码。尝试不同的棋盘，并且在控制台查看结果。_

在接下来的章节，我们将通过图 2 所示的棋盘，来逐条查看代码，了解 minimax 函数到底是如何运作的。

### Minimax 的运作

让我们使用下面的数据，来一步一步查看的算法函数(以下简称**FC**)是怎么运作的。

注意：在图三中的大数字代表了每一个函数的调用，level（层级）代表游戏开始后算法向前预测了第几步。

![1_VG79nxl-mJQrsp6p3q79qA--1-](https://www.freecodecamp.org/news/content/images/2020/09/1_VG79nxl-mJQrsp6p3q79qA--1-.png)

图 3 minimax 函数被函数调用

**_1._**_origBoard_ 和 _aiPlayer_ 带入算法。算法创建由找到的三个空位组成列表，从第一个空位开始遍历所有空位，检查最终状态。然后，将 _aiPlayer_ 放入第一个空位改变 _newBoard_ 。然后用 _newBoard_ 和 _huPlayer_ 调用自身，等待 FC 返回值。

**2\.** 当第一个 FC 还在运行的时候，第二个 FC 创建由找到的两个空位组成的列表，从第一个空格开始遍历所有空格，检查最终状态。然后，将 _huPlayer_ 放入第一个空位改变 _newBoard_ 。然后用 _newBoard_ 和 _aiPlayer_ 调用自身，等待 FC 返回值。

**3\.** 最后，算法会创建一个空位的列表，并且在检查最终状态后，判定玩家获胜。这样，返回一个分数（score）属性值为-10 的对象。

> _在第二个 FC 中列表有两个空位， 算法将_ huPlayer _带入以改变_ newBoard _。然后用_ newBoard _和_ aiPlayer _重新调用自己。_

**4.** 算法创建一个空位列表，然后在检查最终状态时，发现玩家获胜，因此，返回一个分数属性值为-10 的对象。

> _在第二个 FC 中，算法收集了下一层的值 (第三个和第四个 FC 的返回值)。因为轮到_ huPlayer _所以要选择两个值中较小的一个。两个结果相同，所以算法选择第一个返回到上一层 FC。_

> _此时，第一个 FC 已经评估了将_ aiPlayer _放在第一个空位的分数情况。 然后调整_ newBoard _，把_ aiPlayer _放在第二个空位。 然后用_ newBoard _和_ huPlayer _调用自己。_

**5.** 到第五个 FC，算法生成一个空位列表，并且在检查最终状态后发现 AI 获胜，因此返回一个对象，分数属性值为+10。

> _然后，第一个 FC 继续改变_ newBoard _，将_ aiPlayer _放入第三个空格。 然后用_ newBoard _和_ huPlayer _调用自己。_

**6.** 第六个 FC 首先创建一个有两个空位的列表， 然后修改 _newBoard_ ，把 _huPlayer_ 放在第一个空位。 然后使用 _newBoard_ 和 _aiPlayer_ 调用自己，并等到返回一个分数。

**7.** 现在算法已经有两层递归。创建一个只有一个空位的列表，然后检查最终状态。修改 _newBoard_ ，将 _aiPlayer_ 放入空位。 之后使用 _newBoard_ 和 _huPlayer_ 调用自己，然后等待 FC 返回一个可以被评估的分数。

**8\.** 到第八个 FC，算法创建空位列表，检查最终状态后发现 _aiPlayer_ 获胜，因此，返回包含分数属性的对象，值为+10，并向上传递（第 7 个 FC）。

> _第 7 个 FC 仅接受下面一层（第 8 个 FC）的一个正值。因为当轮到_ aiPlayer _时，仅得到的这个值，算法需要返回在最底层里得到的最大值。所以，仅返回一个正值 (+10)到上一层(第六个 FC)._

> _因为第 6 个 FC 有两个空位, 算法修改_ newBoard _把_ huPlayer _放入第二个空位。 然后用_ newBoard _和_ aiPlayer _调用自己。_

**9\.** 然后算法创建一个空格列表，检查最终状态后，发现 _aiPlayer_ 获胜。 因此返回一个对象，分数属性为+10。

> _此时， 第六个 FC 需要从第 7 个 FC 的分数(+10)(一开始从第 8 个 FC 传上来的) 和第 9 个 FC 的分数(-10)间选择。 因为是轮到_ huPlayer _，算法使用(-10)并向上继续传递。_

> _最终，三个分支的分数都被评估了( -10, +10, -10)。 因为是 aiPlayer 的轮数，算法返回最大的值(+10)和这个值的索引号(4)。_

**在上述场景中，Minimax 总结出来将 X 放置在棋盘中间会是最优解。:)**

### 总结!

现在你应该了解了极小化极大值算法背后的逻辑。 你可以尝试使用这个算法来自己执行一遍，或者在[github](https://github.com/ahmadabdolsaheb/minimaxarticle)和[codepen](https://codepen.io/abdolsa/pen/mABGoz?editors=1011)找到代码示例，并且优化。

_感谢阅读！如果你喜欢这篇文章，希望你转发到社交媒体上。_

_特别鸣谢 Tuba Yilmaz、Rick McGavin 和 Javid Askerov_ _对本文的审稿。_
