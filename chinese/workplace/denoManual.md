# Deno 入门手册：附 TypeScript 代码实例

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1gert1lb5f4j31be0p4my8.jpg)

## 目录

- [什么是 Deno？](#什么是Deno？)
- [什为什么是 Deno？为什么现在？](#为什么是Deno？为什么现在？)
- [你应该学习 Deno 吗？](#你应该学习Deno吗？)
- [它将取代 Node.js 吗？](#它将取代Node.js吗？)
- [一流的 TypeScript 支持](#一流的TypeScript支持)
- [与 Node.js 的异同](#与Node.js的异同)
- [No package manager](#No-package-manager)
- [安装 Deno](#安装Deno)
- [Deno 命令](#Deno命令)
- [你的第一个 Deno 应用](#你的第一个Deno应用)
- [Deno 代码示例](#Deno代码示例)
- [你的第一个 Deno 应用程序](#你的第一个Deno应用程序)
- [The Deno sandbox](#The-Deno-sandbox)
- [Formatting code](#Formatting-code)
- [标准库](#标准库)
- [另一个 Deno 示例](#另一个Deno示例)
- [Deno 是否有 Express/Hapi/Koa/\*？](#Deno是否有Express/Hapi/Koa/*？)
- [示例：使用 Oak 构建 REST API](#示例：使用Oak构建REST-API)
- [more](#more)
- [花絮](#花絮)

[你可以在此处获取此 Deno 手册的 PDF / ePub / Mobi 版本。](https://flaviocopes.com/page/deno-handbook/)

## 什么是 Deno

如果你熟悉流行的服务器端 JavaScript 生态系统 Node.js，那么 Deno 就像 Node。当然在很多方面都得到了深刻的改善。

让我们从我最喜欢的 Deno 快速功能列表开始：

- 它基于 JavaScript 语言的现代功能
- 它具有广泛的标准库
- 它以 TypeScript 为核心，以许多不同方式带来了巨大的优势，包括一流的 TypeScript 支持（你不必单独编译 TypeScript，它由 Deno 自动完成）
- 它包含 ES 模块
- 它没有包管理器
- 它具有一流的 `await`
- 它具有内置的测试设施
- 它旨在尽可能地与浏览器兼容，例如通过提供内置对象`fetch`和全局`window`对象

我们将在本指南中探索所有这些功能。

使用 Deno 并了解它的功能之后，Node.js 看起来会很...。

特别是因为 Node.js API 是基于回调的，因此它是在 promise 和 async / await 之前编写的。Node 中没有可用的更改，因为这样的更改将是巨大的。因此，我们陷入了回调或大量 API 调用的困境。

Node.js 非常棒，并将继续成为 JavaScript 世界中的事实上的标准。但是我认为我们将逐渐看到 Deno 由于其一流的 TypeScript 支持和现代标准库而越来越被采用。

Deno 可以负担所有使用现代技术编写的内容，因为没有向后兼容性需要维护。当然，我们无法保证十年之内 Deno 也会发生同样的事情，并且会出现一项新技术，但这是目前的现实。

## 为什么是 Deno？为什么现在

大约 2 年前，Node.js 的原始创建者 Ryan Dahl 在 JSConf EU 上宣布了 Deno。观看[YouTube 演讲视频](https://www.youtube.com/watch?v=M3BM9TB-8yA)，（B站连接稍后更新）这非常有趣，如果你通常参与 Node.js 和 JavaScript，那么这是必看的。

每个项目经理都必须做出决定。Ryan 对 Node 中的一些早期决定感到遗憾。此外，技术也在不断发展，如今的 JavaScript 与 2009 年 Node 创立时的语言已经完全不同。考虑一下现代的 ES6 / 2016/2017 功能，等等。

因此，他开始了一个新项目，以创建第二波基于 JavaScript 的服务器端应用程序。

我现在而不是那时再写本指南的原因是，技术需要大量时间才能成熟。我们终于达到了 Deno 1.0（1.0 应该在 2020 年 5 月 13 日发布），这是 Deno 的第一个正式宣布稳定的版本。

> 翻译本文时已经发布

这似乎只是一个数字，但是 1.0 意味着直到 Deno 2.0 才不会有重大的重大变化。当你采用一种新技术时，这很重要-你不想学习某些东西，然后让它改变得太快。

## 你应该学习 Deno 吗

这是一个大问题。

学习诸如 Deno 之类的新东西是一项巨大的努力。我的建议是，如果你现在开始使用服务器端 JS，并且你还不了解 Node，并且从未编写过任何 TypeScript，那么我将从 Node 开始。

没有人因为选择 Node.js 而被解雇（用一个共同的说法解释）。

但是，如果你喜欢 TypeScript，则不要依赖项目中庞大的 npm 软件包，而想要在 await 任何地方使用它，那么 Deno 可能就是你想要的。

## 它将取代 Node.js 吗

不能。Node.js 是一项庞大的，完善的，获得了难以置信的良好支持的技术，它将持续数十年。

## 一流的 TypeScript 支持

Deno 用 Rust 和 TypeScript 编写，这两种语言今天正在迅速发展。

特别是，使用 TypeScript 编写意味着即使我们可能选择使用纯 JavaScript 编写代码，我们也可以获得 TypeScript 的很多好处。

使用 Deno 运行 TypeScript 代码不需要编译步骤-Deno 会自动为你执行此步骤。

你没有被迫使用 TypeScript 编写代码，但是 Deno 的核心是用 TypeScript 编写的事实是巨大的。

首先，越来越多的 JavaScript 程序员喜欢 TypeScript。

其次，你使用的工具可以推断出许多有关用 TypeScript 编写的软件的信息，例如 Deno。

这意味着，例如，当我们使用 VS Code 进行编码时（由于两者都是在 MicroSoft 上开发的，因此与 TypeScript 紧密集成），我们可以在编写代码时获得类型检查和高级[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)功能等好处。换句话说，编辑器可以以非常有用的方式帮助我们。

## 与 Node.js 的异同

由于 Deno 基本上是 Node.js 的替代品，因此直接比较两者非常有用。

相似之处：

- 两者都是基于[V8 引擎](https://flaviocopes.com/v8/)开发的
- 两者都非常适合使用 JavaScript 开发服务器端

差异：

- Node 用 C ++和 JavaScript 编写。Deno 用 Rust 和 TypeScript 编写。
- Node 有一个官方的软件包管理器，称为 `npm`。Deno 不会，而是让你从 URL 导入任何 ES 模块。
- Node 使用 CommonJS 语法导入 pacakges。Deno 使用官方的 ES 模块。
- Deno 在其所有 API 和标准库中都使用现代 ECMAScript 功能，而 Node.js 使用基于回调的标准库，并且没有计划对其进行升级。
- Deno 通过权限提供了一个沙箱安全层。程序只能访问由用户设置为可执行文件的权限作为标志。Node.js 程序可以访问用户可以访问的任何内容。
- Deno 长期以来一直在考虑将程序编译成可执行文件的可能性，而该可执行文件可以在没有外部依赖项（例如 Go）的情况下运行，但这还[不是一件容易的事](https://github.com/denoland/deno/issues/986)。那将改变游戏规则。

## 没有包依赖管理（No package manager）

没有程序包管理器并且必须依靠 URL 来承载和导入程序包是有利有弊的。我真的很喜欢专家：它非常灵活，我们可以创建软件包而无需在 npm 这样的存储库中发布它们。

我认为某种软件包管理器将会出现，但是还没有官方的消息。

Deno 网站为第三方软件包提供代码托管（并因此通过 URL 分发）：[https://deno.land/x/](https://deno.land/x/)

## 安装 Deno

聊够了！让我们安装 Deno。

最简单的方法是使用[Homebrew](https://flaviocopes.com/homebrew/)：

```bash
brew install deno
```

![brew install](https://tva1.sinaimg.cn/large/007S8ZIlgy1geryr1k4fcj31ik0u0tdh.jpg)

完成此操作后，你将可以访问`deno`命令。帮助是`deno --help`：

```bash
flavio@mbp~> deno --help
deno 0.42.0
A secure JavaScript and TypeScript runtime

Docs: https://deno.land/std/manual.md
Modules: https://deno.land/std/ https://deno.land/x/
Bugs: https://github.com/denoland/deno/issues

To start the REPL, supply no arguments:
  deno

To execute a script:
  deno run https://deno.land/std/examples/welcome.ts
  deno https://deno.land/std/examples/welcome.ts

To evaluate code in the shell:
  deno eval "console.log(30933 + 404)"

Run 'deno help run' for 'run'-specific flags.

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

OPTIONS:
    -h, --help
            Prints help information

    -L, --log-level <log-level>
            Set log level [possible values: debug, info]

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
    -V, --version
            Prints version information


SUBCOMMANDS:
    bundle         Bundle module and dependencies into single file
    cache          Cache the dependencies
    completions    Generate shell completions
    doc            Show documentation for a module
    eval           Eval script
    fmt            Format source files
    help           Prints this message or the help of the given subcommand(s)
    info           Show info about cache or info related to source file
    install        Install script as an executable
    repl           Read Eval Print Loop
    run            Run a program given a filename or url to the module
    test           Run tests
    types          Print runtime TypeScript declarations
    upgrade        Upgrade deno executable to newest version

ENVIRONMENT VARIABLES:
    DENO_DIR             Set deno's base directory (defaults to $HOME/.deno)
    DENO_INSTALL_ROOT    Set deno install's output directory
                         (defaults to $HOME/.deno/bin)
    NO_COLOR             Set to disable color
    HTTP_PROXY           Proxy address for HTTP requests
                         (module downloads, fetch)
    HTTPS_PROXY          Same but for HTTPS
```

## Deno 命令

请注意`SUBCOMMANDS`帮助中的部分，其中列出了我们可以运行的所有命令。我们有哪些子命令？

- `bundle` 将项目的模块和依赖项捆绑到单个文件中
- `cache` 缓存依赖项
- `completions` !!generate shell completions
- `doc` 显示模块的文档
- `eval` 运行一段代码，例如 `deno eval "console.log(1 + 2)`
- `fmt` 内置的代码格式化程序（类似于Go里面的 `gofmt`）
- `help` 打印此消息或给定子命令的帮助
- `info` 显示有关缓存的信息或与源文件有关的信息
- `install` 将脚本安装为可执行文件
- `repl` Read-Eval-Print-Loop（默认值）
- `run` 运行给定文件名或 URL 的程序
- `test` 运行测试
- `types` 打印运行时 TypeScript 声明
- `upgrade` 升级 deno 到最新版本

你可以运行`deno <subcommand> help`以获取该命令的特定其他文档，例如`deno run --help`。

如帮助所述，我们可以使用此命令来启动 REPL（Read-Execute-Print-Loop），deno 而无需任何其他选择。

![Read-Execute-Print-Loop](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzlz0k1jj312k0iuwii.jpg)

这与运行 `deno repl` 效果是相同的。

你将使用`deno`命令的更常见方式是执行 TypeScript 文件中包含的 Deno 应用程序。

你可以同时运行 TypeScript（.ts）文件或 JavaScript（.js）文件。

如果你不熟悉 TypeScript，请不要担心：Deno 是用 TypeScript 编写的，但是你可以使用 JavaScript 编写“客户端”应用程序。

如果你想上手的TypeScript话，我的[TypeScript教程](https://flaviocopes.com/typescript/)将帮助你快速上手。

## 你的第一个 Deno 应用

让我们第一次运行 Deno 应用程序。

我感到非常惊奇的是，你甚至不必写一行-你可以从任何 URL 运行命令。

Deno 下载程序，进行编译，然后运行：

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzrkngrdj31h00g2jtk.jpg)

当然，我一般不建议从 Internet 运行任意代码。在这种情况下，我们从 Deno 官方网站上运行它，另外 Deno 还有一个沙箱，可以阻止程序执行你不希望做的任何事情。稍后再详细介绍。

这个程序很简单，只需要一个`console.log()`调用：

```typescript
console.log("Welcome to Deno 🦕");
```

如果使用浏览器打开[https://deno.land/std/examples/welcome.ts](https://deno.land/std/examples/welcome.ts)URL，则会看到以下页面：

![welcome.ts](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzu0s6sej30kw0djq4c.jpg)

奇怪吧？你可能希望使用 TypeScript 文件，但是我们有一个网页。原因是 Deno 网站的 Web 服务器知道你正在使用浏览器，并为你提供了更加用户友好的页面。

wget 例如，使用相同的 UR 来下载 text/plain 它，而不是请求它的版本 text/html：

以`wget`为例，下载同样的URL，用`wget` 以`text/plain`方式请求，而不是`text/html`。

![wget](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzvv2ti6j30z60fogr9.jpg)

如果你想再运行这个程序，现在已经被`Deno`缓存了，不需要再下载了。

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzwenogpj31920lmtbi.jpg)

你可以用 `--reload` 参数强制重载原始源码

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1gerzxpbhkoj31920g2ac7.jpg)

deno run 有许多未在清单中列出的不同选项 deno --help。相反，你需要运行 deno run --help 以显示它们：

`deno run` 有很多不同的选项，但在 `deno --help` 中没有列出。相反，你需要运行 `deno run --help` 来显示这些选项。

```bash
flavio@mbp~> deno run --help
deno-run
Run a program given a filename or url to the module.

By default all programs are run in sandbox without access to disk, network or
ability to spawn subprocesses.
  deno run https://deno.land/std/examples/welcome.ts

Grant all permissions:
  deno run -A https://deno.land/std/http/file_server.ts

Grant permission to read from disk and listen to network:
  deno run --allow-read --allow-net https://deno.land/std/http/file_server.ts

Grant permission to read whitelisted files from disk:
  deno run --allow-read=/etc https://deno.land/std/http/file_server.ts

USAGE:
    deno run [OPTIONS] <SCRIPT_ARG>...

OPTIONS:
    -A, --allow-all
            Allow all permissions

        --allow-env
            Allow environment access

        --allow-hrtime
            Allow high resolution time measurement

        --allow-net=<allow-net>
            Allow network access

        --allow-plugin
            Allow loading plugins

        --allow-read=<allow-read>
            Allow file system read access

        --allow-run
            Allow running subprocesses

        --allow-write=<allow-write>
            Allow file system write access

        --cached-only
            Require that remote dependencies are already cached

        --cert <FILE>
            Load certificate authority from PEM encoded file

    -c, --config <FILE>
            Load tsconfig.json configuration file

    -h, --help
            Prints help information

        --importmap <FILE>
            UNSTABLE:
            Load import map file
            Docs: https://deno.land/std/manual.md#import-maps
            Specification: https://wicg.github.io/import-maps/
            Examples: https://github.com/WICG/import-maps#the-import-map
        --inspect=<HOST:PORT>
            activate inspector on host:port (default: 127.0.0.1:9229)

        --inspect-brk=<HOST:PORT>
            activate inspector on host:port and break at start of user script

        --lock <FILE>
            Check the specified lock file

        --lock-write
            Write lock file. Use with --lock.

    -L, --log-level <log-level>
            Set log level [possible values: debug, info]

        --no-remote
            Do not resolve remote modules

    -q, --quiet
            Suppress diagnostic output
            By default, subcommands print human-readable diagnostic messages to stderr.
            If the flag is set, restrict these messages to errors.
    -r, --reload=<CACHE_BLACKLIST>
            Reload source code cache (recompile TypeScript)
            --reload
              Reload everything
            --reload=https://deno.land/std
              Reload only standard modules
            --reload=https://deno.land/std/fs/utils.ts,https://deno.land/std/fmt/colors.ts
              Reloads specific modules
        --seed <NUMBER>
            Seed Math.random()

        --unstable
            Enable unstable APIs

        --v8-flags=<v8-flags>
            Set V8 command line options. For help: --v8-flags=--help


ARGS:
    <SCRIPT_ARG>...
            script args
```

## Deno 代码示例

除了上面我们运行的，Deno网站还提供了一些其他的例子，你可以去看看：[https://deno.land/std/examples/](https://deno.land/std/examples/)。

在撰写本文时，我们可以找到：

- `cat.ts` 打印的内容是作为参数提供的文件列表
- `catj.ts` 打印的内容是作为参数提供的文件列表
- `chat/` 聊天的实现
- `colors.ts` 打印一个彩色版本的 Hello world!
- `curl.ts` 一个简单的实现，curl 它打印指定为参数的 URL 的内容
- `echo_server.ts` TCP 回显服务器
- `gist.ts` 一个将文件发布到 gist.github.com 的程序
- `test.ts` 样本测试套件
- `welcome.ts` 一个简单的 console.log 语句（我们在上面运行的第一个程序）
- `xeval.ts` 允许你为收到的任何标准输入行运行任何 TypeScript 代码。曾经被称为 deno xeval 但自官方命令中删除。

## 第一个 Deno 应用程序

我们来写一些代码吧。

你使用`deno run https://deno.land/std/examples/welcome.ts`运行的第一个Deno应用是别人写的一个应用，所以你没有看到任何关于Deno代码的样子。

我们从Deno官方网站上列出的默认示例应用开始。

```typescript
import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

这段代码从`http/server`模块中导入服务函数。看到了吗？我们不需要先安装，而且也不会像Node模块那样存储在本地机器上。这也是Deno安装速度快的原因之一。

从 `https://deno.land/std/http/server.ts` 导入会导入最新版本的模块。你可以使用`@VERSION`导入特定的版本，就像这样。

```typescript
import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";
```

该 serve 函数在此文件中的定义如下：

```typescript
/**
 * Create a HTTP server
 *
 *     import { serve } from "https://deno.land/std/http/server.ts";
 *     const body = "Hello World\n";
 *     const s = serve({ port: 8000 });
 *     for await (const req of s) {
 *       req.respond({ body });
 *     }
 */
export function serve(addr: string | HTTPOptions): Server {
  if (typeof addr === "string") {
    const [hostname, port] = addr.split(":");
    addr = { hostname, port: Number(port) };
  }

  const listener = listen(addr);
  return new Server(listener);
}
```

我们继续实例化一个服务器，调用`server()`函数传递一个带有端口属性的对象。

然后我们运行这个循环来响应来自服务器的每一个请求。

```typescript
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

请注意，我们使用`await`关键字而不需要将其封装到异步函数中，因为Deno实现了顶层的`await`。

让我们在本地运行这个程序。我假设你使用的是VS Code，但你可以使用任何你喜欢的编辑器。

我建议从`justjavac`安装Deno扩展（我试过的时候还有一个同名的扩展，但是已经被淘汰了，可能将来会消失）。

![justjavac](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges104sizrj31270q4wkz.jpg)

该扩展将为`VS Code`提供几个实用工具和不错的东西来帮助你编写应用程序。

现在在一个文件夹中创建一个`app.ts`文件，然后粘贴上面的代码。

![app.ts](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges10z15fmj30tf0kv0v0.jpg)

现在用`deno run app.ts`运行它。

![app.ts](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges123ubtzj30z60s6wju.jpg)

Deno先下载我们导入的那个依赖，就可以下载所有需要的依赖项。

`https://deno.land/std/http/server.ts` 文件本身就有几个依赖关系。

```typescript
import { encode } from "../encoding/utf8.ts";
import { BufReader, BufWriter } from "../io/bufio.ts";
import { assert } from "../testing/asserts.ts";
import { deferred, Deferred, MuxAsyncIterator } from "../async/mod.ts";
import {
  bodyReader,
  chunkedBodyReader,
  emptyReader,
  writeResponse,
  readRequest,
} from "./_io.ts";
import Listener = Deno.Listener;
import Conn = Deno.Conn;
import Reader = Deno.Reader;
```

而这些是自动导入的。

在最后，我们还有一个问题。

![app.ts](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges14r5we3j30z60a4gp9.jpg)

## The-Deno-sandbox

我之前提到过，Deno有一个沙盒，可以防止程序做一些你不允许的事情。

这意味着什么呢？

Ryan在Deno的介绍讲座中提到的一件事是，有时候你想在Web浏览器之外运行一个JavaScript程序，却不想让它在你的系统中访问任何它想要的东西。或者使用网络与外部世界对话。

没有什么可以阻止Node.js程序获取你系统上的SSH密钥或其他任何东西，并将其发送到服务器上。这就是为什么我们通常只安装来自可信来源的Node包的原因。但是，如果我们使用的一个项目被黑客入侵了，反过来，其他人也会被黑客入侵，我们怎么知道呢？

Deno试图复制浏览器实现的相同权限模型。除非你明确允许，否则在浏览器中运行的任何JavaScript都不能在你的系统上做不正当的事情。

回到Deno，如果一个程序想要像前面的例子一样访问网络，那么我们需要给它权限。

我们可以通过在运行命令时传递一个标志来实现，本例中是 `--allow-net`。

```bash
deno run --allow-net app.ts
```

![allow-net](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1luymhsj30nm07cdhk.jpg)

该应用程序现在在端口 8000 上运行 HTTP 服务器：

![allow-net](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1sh7p19j30p80dj3zi.jpg)

其他标志允许 Deno 解锁其他功能：

- `--allow-env` 允许访问环境变量
- `--allow-hrtime` 允许高分辨率时间测量
- `--allow-net=<allow-net>` 允许网络访问
- `--allow-plugin` 允许加载插件
- `--allow-read=<allow-read>` 允许文件系统读取权限
- `--allow-run` 允许运行子进程
- `--allow-write=<allow-write>` 允许文件系统写入访问
- `--allow-all` 允许所有权限(与`-A`相同)

`net`、`read`和`write`的权限可以是细化的。例如，你可以使用 `--allow-read=/dev`，允许从特定文件夹中读取。

## 格式化代码


我非常喜欢Go中的一个东西是Go编译器自带的`gofmt`命令。所有的Go代码看起来都是一样的。每个人都在使用`gofmt`。

JavaScript程序员都习惯于运行[Prettier](https://flaviocopes.com/prettier/)，而`deno fmt`实际上就是在引擎盖下运行的。

假设你有一个格式化严重的文件是这样的。

![deno fmt](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges1z0kmprj30tf0kv0v3.jpg)

你运行`deno fmt app.ts`，它就会自动正确的格式化，还可以在缺少分号的地方加上。

## 标准库

尽管该项目还很年轻，但 Deno 标准库仍然很庞大。

包括：

- `archive` !!tar archive utilities
- `async` 异步工具
- `bytes` 帮助器来操作字节切片
- `datetime` 日期/时间解析
- `encoding` 各种格式的编码/解码
- `flags` 解析命令行标志
- `fmt` 格式化和打印
- `fs` 文件系统 API
- `hash` 加密库
- `http` HTTP 服务器
- `io` I/O 库
- `log` 日志实用程序
- `mime` !!support for multipart data
- `node` Node.js兼容层
- `path` 路径操纵
- `ws` websockets

## 另一个 Deno 示例

我们再来看看Deno APP的例子，从Deno的例子来看：`cat`。

```typescript
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

这就把`Deno.args`的内容分配给了文件名变量，`Deno.args`是一个包含所有发送到命令中的参数的变量。

我们对这些参数进行迭代，对每一个参数，我们使用`Deno.open()`打开文件，并使用`Deno.copy()`将文件的内容打印到`Deno.stdout`。最后我们关闭该文件。

如果你使用

```bash
deno run https://deno.land/std/examples/cat.ts
```

程序被下载编译后，由于我们没有指定任何参数，所以没有发生任何事情。

现在试试

```bash
deno run https://deno.land/std/examples/cat.ts app.ts
```

假设你在同一个文件夹里有之前项目中的`app.ts`。

你会得到一个权限错误。

![app.ts](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2666arzj30qv0dl42x.jpg)

因为 Deno 默认情况下不允许访问文件系统。使用以下命令授予对当前文件夹的访问权限`--allow-read=./`：

```bash
deno run --allow-read=./ https://deno.land/std/examples/cat.ts app.ts
```

![allow-read](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges28mnzlyj30qv0c7djl.jpg)

## Deno 是否有 Express/Hapi/Koa/\*

- [deno-drash](https://github.com/drashland/deno-drash)
- [deno-express](https://github.com/NMathar/deno-express)
- [oak](https://github.com/oakserver/oak)
- [pogo](https://github.com/sholladay/pogo)
- [servest](https://github.com/keroxp/servest)

## 示例：使用 Oak 构建 REST-API

我想做一个简单的例子，介绍一下如何使用Oak构建`REST API`。Oak很有意思，因为它的灵感来自于Koa，也就是流行的Node.js中间件，正因为如此，如果你以前用过的话，对它很熟悉。

我们要构建的API非常简单。

我们的服务器将在内存中存储一个带有名字和年龄的狗的列表。

我们想：

- 添加狗狗
- 列出狗狗
- 获取有关特定狗的详细信息
- 从名单上删除一只狗
- 更新狗的年龄

我们将使用 TypeScript 进行此操作，但是没有什么可以阻止你使用 JavaScript 编写 API-你只需删除类型。

创建一个 `app.ts` 文件。

让我们开始从 Oak 导入 `Application` 和 `Router` 对象：

```typescript
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
```

然后我们得到环境变量 `PORT` 和 `HOST`:

```typescript
const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "127.0.0.1";
```

默认情况下，我们的应用程序将在 `localhost：4000` 上运行。

现在，我们创建 `Oak` 应用程序并启动它：

```typescript
const router = new Router();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
```

现在，应用程序应该可以正常编译了。

```bash
deno run --allow-env --allow-net app.ts
```

然后 Deno 将下载依赖项：

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2lcj173j30pn0v7q9h.jpg)

然后在`4000`端口上监听。

下次运行该命令时，Deno会跳过安装部分，因为这些包已经被缓存了。

![Deno](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2lzx6q1j30u409f761.jpg)

在文件的顶部，让我们定义一个狗的接口，然后我们声明一个初始的`Dogs`数组`Dog`对象。

```typescript
interface Dog {
  name: string;
  age: number;
}

let dogs: Array<Dog> = [
  {
    name: "Roger",
    age: 8,
  },
  {
    name: "Syd",
    age: 7,
  },
];
```

现在，让我们来实际实现API。

我们已经准备好了一切。在你创建了路由器之后，让我们添加一些函数，这些函数将在任何时候触发这些端点中的一个端点时被调用。

```typescript
const router = new Router();

router
  .get("/dogs", getDogs)
  .get("/dogs/:name", getDog)
  .post("/dogs", addDog)
  .put("/dogs/:name", updateDog)
  .delete("/dogs/:name", removeDog);
```

看到了吗？我们的定义是

- `GET /dogs`
- `GET /dogs/:name`
- `POST /dogs`
- `PUT /dogs/:name`
- `DELETE /dogs/:name`

让我们一一实现。

从开始 `GET /dogs`，它将返回所有狗的列表：

```typescript
export const getDogs = ({ response }: { response: any }) => {
  response.body = dogs;
};
```

![getDogs](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2q3hbdyj30of0hcgnf.jpg)

接下来，我们就来看看如何通过名字来检索狗。

```typescript
export const getDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const dog = dogs.filter((dog) => dog.name === params.name);
  if (dog.length) {
    response.status = 200;
    response.body = dog[0];
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find dog ${params.name}` };
};
```

![getDog](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2qv3ki2j30of0hcmys.jpg)

这是我们添加新狗的方法：

```typescript
export const addDog = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const dog: Dog = body.value;
  dogs.push(dog);

  response.body = { msg: "OK" };
  response.status = 200;
};
```

![addDog](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2oymgidj30of0hcgnb.jpg)



注意，我现在使用 `const body = await request.body()` 来获取正文的内容，因为`name`和`age`值是以 JSON 的形式传递的。

这是我们更新狗的年龄的方法：

```typescript
export const updateDog = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string;
  };
  request: any;
  response: any;
}) => {
  const temp = dogs.filter((existingDog) => existingDog.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 200;
    response.body = { msg: "OK" };
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find dog ${params.name}` };
};
```

![updateDog](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2rsqgn2j30of0hcabu.jpg)

这是我们如何从列表中删除狗的方法：

```typescript
export const removeDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const lengthBefore = dogs.length;
  dogs = dogs.filter((dog) => dog.name !== params.name);

  if (dogs.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `Cannot find dog ${params.name}` };
    return;
  }

  response.body = { msg: "OK" };
  response.status = 200;
};
```

![removeDog](https://tva1.sinaimg.cn/large/007S8ZIlgy1ges2srgk25j30of0hcabq.jpg)

这是完整的示例代码：

```typescript
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "127.0.0.1";

interface Dog {
  name: string;
  age: number;
}

let dogs: Array<Dog> = [
  {
    name: "Roger",
    age: 8,
  },
  {
    name: "Syd",
    age: 7,
  },
];

export const getDogs = ({ response }: { response: any }) => {
  response.body = dogs;
};

export const getDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const dog = dogs.filter((dog) => dog.name === params.name);
  if (dog.length) {
    response.status = 200;
    response.body = dog[0];
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find dog ${params.name}` };
};

export const addDog = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const { name, age }: { name: string; age: number } = body.value;
  dogs.push({
    name: name,
    age: age,
  });

  response.body = { msg: "OK" };
  response.status = 200;
};

export const updateDog = async ({
  params,
  request,
  response,
}: {
  params: {
    name: string;
  };
  request: any;
  response: any;
}) => {
  const temp = dogs.filter((existingDog) => existingDog.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 200;
    response.body = { msg: "OK" };
    return;
  }

  response.status = 400;
  response.body = { msg: `Cannot find dog ${params.name}` };
};

export const removeDog = ({
  params,
  response,
}: {
  params: {
    name: string;
  };
  response: any;
}) => {
  const lengthBefore = dogs.length;
  dogs = dogs.filter((dog) => dog.name !== params.name);

  if (dogs.length === lengthBefore) {
    response.status = 400;
    response.body = { msg: `Cannot find dog ${params.name}` };
    return;
  }

  response.body = { msg: "OK" };
  response.status = 200;
};

const router = new Router();
router
  .get("/dogs", getDogs)
  .get("/dogs/:name", getDog)
  .post("/dogs", addDog)
  .put("/dogs/:name", updateDog)
  .delete("/dogs/:name", removeDog);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
```

## 更多

Deno 官方网站为 [https://deno.land](https://deno.land)

API 文档位于 [https://doc.deno.land](https://doc.deno.land) 和 [https://deno.land/typedoc/index.html](https://deno.land/typedoc/index.html)

awesome-deno [https://github.com/denolib/awesome-deno](https://github.com/denolib/awesome-deno)

## 花絮

- Deno 提供了一个内置的 fetch 实现，该实现与浏览器中可用的匹配
- Deno 正在进行与 Node.js stdlib 的兼容层

## 原文地址

https://www.freecodecamp.org/news/the-deno-handbook/#your-first-deno-app
