> - 原文地址：[Build a 100 Days of Code Discord Bot with TypeScript, MongoDB, and Discord.js 13](https://www.freecodecamp.org/news/build-a-100-days-of-code-discord-bot-with-typescript-mongodb-and-discord-js-13/)
> - 原文作者：[Naomi Carrigan](https://www.freecodecamp.org/news/author/nhcarrigan/)
>
> - 译者： [luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Build a 100 Days of Code Discord Bot with TypeScript, MongoDB, and Discord.js 13](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/pexels-kindel-media-8566473.jpg)

[100天代码挑战](https://www.freecodecamp.org/news/the-crazy-history-of-the-100daysofcode-challenge-and-why-you-should-try-it-for-2018-6c89a76e298d/) 在希望提高技能水平的新代码员和开发人员中非常流行。它是如此受欢迎，以至于我们的[Discord服务器](https://www.freecodecamp.org/news/freecodecamp-discord-chat-room-server/)有一个完整的频道专门讨论它。

应大众要求，我们建立了一个Discord机器人，帮助人们跟踪他们在挑战中的进展。

今天我将向你展示如何建立你自己的 "100天代码 "机器人。

目录

- [创建一个Discord机器人应用程序](#create-a-discord-bot-application)
- [设置你的项目](#set-up-your-project)
- [创建Discord机器人](#create-the-discord-bot)
- [Discord中的网关事件](#gateway-events-in-discord)
- [连接到数据库](#connect-to-the-database)
- [环境变量验证](#environment-variable-validation)
- ["交互 "事件](#the-interaction-event)
- [准备命令](#prepare-for-commands)
- [数据库模型](#database-model)
- [编写机器人命令](#write-bot-commands)

## Create a Discord Bot Application

你的第一步是设置一个 Discord 机器人应用程序。前往[Discord Developer Portal](https://discord.dev)，如果需要，请登录，并从侧边栏选择 "Applications"。

![image-76](https://www.freecodecamp.org/news/content/images/2022/01/image-76.png)

开发者门户网站的屏幕截图。如果这是你的第一个机器人，你将不会在这里截图里的任何应用程序。

从侧边栏选择"Bot"，然后点击 "Add Bot"按钮。这将为你的应用程序创建一个 Discord Bot 账户。

![image-77](https://www.freecodecamp.org/news/content/images/2022/01/image-77.png)

这是机器人设置页面的屏幕截图。如果你没有设置头像，你会看到一个基于你的机器人名称的默认头像。

这是你将获得机器人令牌（token）的截图。不要让别人知道这个令牌（token）是非常重要的，因为这个令牌（token）允许你的代码连接到你的机器人。保持它的安全，不要与任何人分享。

现在你需要将机器人添加到一个服务器上，与它进行交互。点击侧边栏上的 "OAuth2 "选项，然后选择 "URL Generator"。

在 "Scopes"下，选择`bot`和`application.command`。`bot`范围允许你的机器人账户加入服务器，而`application.command`范围允许你更新斜线命令（slash commands 后面会有更多介绍）。

当你选择`bot`时，会出现一个新的 "Bot Permissions "部分。选择以下权限:

- Send Messages
- Embed Links
- Read Messages/View Channels

![image-78](https://www.freecodecamp.org/news/content/images/2022/01/image-78.png)

带有所需设置的OAuth屏幕截图。

复制生成的URL，并将其粘贴到你的浏览器。这将使你通过Discord的程序，将你的新机器人添加到一个服务器。

注意，你必须在你想添加机器人的服务器中拥有管理服务器的权限。如果你没有这个权限，你可以创建一个服务器来测试你的机器人。

现在你已经准备好写一些代码了!

## Set Up Your Project

你首先需要为你的项目建立基础设施和工具。

确保你有Node.js **版本16**和`npm`安装。注意，你将使用的软件包不支持早期版本的Node。

### 准备`package.json`文件

为你的项目创建一个目录，或文件夹。打开你的终端，指向这个新文件夹。运行命令`npm init`来设置你的`package.json`文件。在本教程中，默认值就足够了，但可以根据你的需要自由编辑。

你最终应该得到一个类似于以下的`package.json`:

```json
{
  "name": "100doc-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

现在你需要做一些改变，为TypeScript的实现做好准备。

首先，将`index.js`的`main`值替换为`./prod/index.js`--你将设置你的TypeScript编译到`prod`目录。

然后删除`test`脚本，添加以下两个脚本。

```json
"build": "tsc",
"start": "node -r dotenv/config ./prod/index.js"
```

`build`脚本将把你的TypeScript编译成JavaScript，以便Node可以运行它，`start`脚本将运行`index.js`入口文件。

在这里添加`-r dotenv/config`将动态导入并运行`dotenv`包中的`config`方法，它从`.env`文件中加载你的环境变量。

你的下一步是安装依赖性。使用`npm install`，安装这些依赖项。

- `discord.js` – 这是一个处理连接到网关和管理Discord API调用的库。
- `@discordjs/builders` –  用于构建应用程序命令的discord.js包。
- `@discordjs/rest` –  用于与Discord REST API互动的自定义API客户端。
- `discord-api-types` – Discord REST API的类型定义和处理程序。
- `dotenv` – 一个将`.env'值加载到Node进程的包。
- `mongoose` – MongoDB连接的驱动，提供了结构化数据的工具。

最后，用`npm install --save-dev`安装开发依赖项。开发依赖是指在开发环境中处理你的项目所需要的包，但在生产中运行代码库时不需要。

- `typescript` – 这是TypeScript语言的包，它包括用TypeScript编写代码并将其编译为JavaScript所需的一切。
- `@types/node` – TypeScript依靠类型定义来理解你写的代码。这个包定义了Node.js运行环境的类型，例如`process.env`对象。

安装了这些软件包后，你现在应该有一个类似于以下的`package.json`:

```json
{
  "name": "100doc-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "./prod/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node -r dotenv/config ./prod/index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@discordjs/builders": "^0.11.0",
    "@discordjs/rest": "^0.2.0-canary.0",
    "discord.js": "^13.6.0",
    "dotenv": "^14.2.0",
    "mongoose": "^6.1.7"
  },
  "devDependencies": {
    "@types/node": "^17.0.10",
    "typescript": "^4.5.4"
  }
}
```

### 准备好TypeScript

TypeScript的编译器提供了许多不同的设置，以最大限度地提高你对生成的JavaScript的控制。

你通常可以通过项目根部的`tsconfig.json`文件修改编译器设置。你可以用`npx tsc --init`为这个文件生成默认的模板，如果你在其他项目中设置了一个模板，可以使用现有的模板，甚至可以从头开始写一个。

因为编译器的设置可以显著改变TypeScript的行为，所以在学习本教程时最好使用相同的设置。以下是你应该使用的设置:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./prod",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  }
}
```

这里最重要的设置是`rootDir`和`outDir`的设置。这些设置告诉编译器，你所有的代码都在`src`目录下，而生成的JavaScript应该在`prod`目录下。

如果你想测试你的设置，创建一个`src`目录并在里面放置一个`index.ts`文件。编写一些代码（如`console.log`语句）并在终端运行`npm run build`。你应该看到一个`prod`目录被创建，其中的`index.js`包含了你的编译代码。

### 其他设置说明

如果你使用`git`作为版本控制，你要避免将秘密和不必要的代码推送到你的仓库。在你的项目根目录下创建一个`.gitignore`文件，并添加以下内容:

```txt
/node_modules/
/prod/
.env
```

`.gitignore`文件告诉`git`不要追踪符合你输入的模式的文件/文件夹。忽略 `node_modules`文件夹可以防止你的仓库变得臃肿（node_modules实在太大了，有黑洞之称）。

推送已编译的JavaScript也是不必要的，因为你的项目通常在运行前就已经在生产中编译了。`.env`文件包含秘密值，如API密钥和令牌，所以它们不应该被提交到版本库。

## Create the Discord Bot

你的下一步是准备初始的机器人连接。如果你之前没有这样做，创建一个`src`目录和一个`index.ts`文件。

从一个匿名的立即执行的函数表达式（IIFE）开始，以允许顶层的`await`使用:

```ts
(async () => {

})();
```

在这个函数中，你将实例化你的Discord机器人。在文件的顶部，用`import { Client } from "discord.js";`导入`Client`类。`Client`类代表你的Discord机器人的会话。

在你的函数中，构建一个新的`Client`实例，并将其分配给`BOT`变量，`const BOT = new Client();`。现在，`BOT'变量将代表你的机器人。

为了将你的机器人连接到Discord网关并开始接收事件，你需要在你的机器人实例上使用`.login()`方法。`.login()`方法需要一个参数，即你之前创建的机器人应用程序的令牌（token）。

`discord.js`中的许多方法是异步的，所以你需要在这里使用`await`。在你的IIFE中加入`await BOT.login(process.env.BOT_TOKEN);`这一行。

你的`index.ts`文件现在应该看起来像这样:

```ts
import { Client } from "discord.js";

(async () => {
  const BOT = new Client();

  await BOT.login(process.env.BOT_TOKEN);
})();
```

如果你尝试运行`npm run build`，你会看到一个错误：`An argument for 'options' was not provided.`。

在discord.js 13中，当你实例化你的机器人时，你需要指定Gateway Intents。Gateway Intents告诉Discord你的机器人应该接收哪些事件。

在你的`src`文件夹中，创建一个`config`文件夹 - 然后在`config`中，创建一个`IntentOptions.ts`文件。

在这个新文件中，添加 "export const IntentOptions = ["GUILDS"]"一行。这将告诉Discord你的机器人应该接收公会事件（Guild events）。

然后，在你的`index.ts`文件中，给你的`new Client()`调用添加一个参数: `new Client({intents: IntentOptions})`. 你需要在文件的顶部用 `import { IntentOptions } from "./config/IntentOptions;`，导入它。

看来你仍然有一个错误: ``Type 'string' is not assignable to type 'number | `${bigint}` | IntentsString | Readonly<BitField<IntentsString, number>> | RecursiveReadonlyArray<number | `${bigint}` | IntentsString | Readonly<...>>'.``

TypeScript将你的`IntentOptions`数组推断为一个字符串，但`Client`构造函数期望的是更具体的类型。

回到你的`config/IntentOptions.ts`文件，添加另一个导入。`import { IntentsString } from "discord.js"`. 然后用新的类型定义更新你的变量： `export const IntentOptions: IntentsString[] = ["GUILDS"];`。

现在`npm run build`应该成功了。如果你已经把你的新机器人（bot）添加到一个Discord服务器，运行`npm start`将显示你的机器人在该服务器中上线。然而，机器人还不会对任何事情做出反应，因为你还没有开始监听事件。

## Discord中的网关事件（Gateway Events）

网关事件是在 Discord 上发生动作时产生的，通常以 JSON payloads（有效载荷）的形式发送到客户端（包括你的机器人）。你可以用`.on()`方法监听这些事件，允许你为你的机器人编写逻辑，以便在特定事件发生时执行。

第一个要监听的事件是 "ready "事件。当你的机器人连接到网关并准备处理事件时，这个事件就会发生。在你的`.login()`调用上面，添加`BOT.on("ready", () => console.log("Connected to Discord!");`。

为了使你的修改生效，再次使用`npm run build`来编译新的代码。现在，如果你尝试`npm run start`，你应该看到 "Connected to Discord!" 打印在你的终端。

## 连接到数据库

你将使用`mongoose`包来连接到MongoDB实例。如果你愿意，你可以在本地运行MongoDB，或者你可以使用MongoDB Atlas免费层来实现基于云的解决方案。

如果你没有MongoDB Atlas账户，freeCodeCamp有一个 [关于设置一个账户的好教程](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)。

获得你的数据库的连接字符串，并将其添加到你的`.env`文件中，作为`MONGO_URI=""`，连接字符串要在引号之间。对于数据库的名称，使用`oneHundredDays`。

创建一个名为 "database "的目录来存放包含数据库逻辑的文件。在这个目录中，创建一个名为`connectDatabase.ts`的文件。你将在这里编写启动数据库连接的逻辑。

从一个导出的函数声明开始:

```ts
export const connectDatabase = async () => {

}
```

注意，你需要在这里使用 `async` 关键字，因为数据库连接方法是异步的。

`mongoose` 提供了一个 `connect` 方法用于连接数据库。在你的文件顶部用 `import { connect } from "mongoose";` 导入它。

然后用 `await connect(process.env.MONGO_URI);` 在你的函数中使用该方法。在这之后添加一个 `console.log` 语句，这样你就可以确定你的机器人已经连接到了数据库。

你的 `connectDatabase.ts` 文件现在看起来应该是这样的:

```ts
import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI);
    console.log("Database Connected!")
}
```

现在，在你的 `index.ts` 文件中，用 `import { connectDatabase } from "./database/connectDatabase"` 导入这个函数，并在你的IIFE中添加 `await connectDatabase()`，就在 `.login()` 方法之前。继续并再次运行 `npm run build`。

![image-157](https://www.freecodecamp.org/news/content/images/2021/06/image-157.png)

一个编译器错误，表明。类型为字符串或未定义的参数不能分配给类型为字符串的参数。
哦，不--一个错误!

## 环境变量验证

环境变量的问题是，它们都可能是 `undefined`。如果你在环境变量名称中打错了字，或者把名称和其他名称混在一起，就会经常发生这种情况（我在写这个教程时犯了一个错误，在一些地方用`TOKEN`而不是`BOT_TOKEN`）。

TypeScript警告你，`connect` 方法需要一个字符串，而 `undefined` 值会破坏事情。你可以解决这个问题，但首先你要写一个函数来处理验证你的环境变量。

在你的 `src` 目录下，创建一个 `utils` 目录，包含你的实用函数。在那里添加一个 `validateEnv.ts` 文件。

在该文件中创建一个名为 `validateEnv` 的函数。这个函数将是同步的，不需要 `async` 关键字。在这个函数中，添加条件来检查你的两个环境变量。如果缺少任何一个，返回 `false`。否则，返回 `true`。

你的代码可能看起来像这样:

```ts
export const validateEnv = () => {
  if (!process.env.BOT_TOKEN) {
    console.warn("Missing Discord bot token.");
    return false;
  }

  if (!process.env.MONGO_URI) {
    console.warn("Missing MongoDB connection.");
    return false;
  }
  return true;
};

```

回到你的 `index.ts` 文件，用 `import { validateEnv } from "./utils/validateEnv"` 导入这个验证函数。然后在你的IIFE的开头，使用一个if语句，如果函数返回false，就提前返回。你的 `index.ts` 应该看起来像:

```ts
import { Client } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  if (!validateEnv()) return;

  const BOT = new Client();

  BOT.on("ready", () => console.log("Connected to Discord!"));

  await connectDatabase();

  await BOT.login(process.env.BOT_TOKEN);
})();
```

如果你再次尝试 `npm run build`，你会看到和之前一样的错误信息。这是因为虽然我们知道环境变量存在，但TypeScript仍然无法推断出它。验证函数被设置为在环境变量丢失时退出进程，所以我们要告诉TypeScript它肯定是一个字符串。

回到你的 `connectDatabase.ts` 文件中，在 `connect` 函数中使用 `process.env.MONGO_URI as string`来强迫类型为 `string`。错误应该消失了，你现在可以运行 `npm run build` 和 `npm start`。

你应该看到你为Discord和MongoDB连接写的信息在终端打印出来。

## 交互事件

虽然你的机器人取得了很大的进展，但它仍然 _没有_ 做任何事情。为了接收命令，你将需要创建另一个事件监听器。

Discord推出了 `slash` 命令，具有一个新的用户界面和一个新的网关事件。当有人用你的机器人使用 `slash`命令时，`interactionCreate` 事件被触发。这是你想要监听的事件。因为逻辑比 `ready`事件更复杂，你将需要创建一个单独的文件。

在你的 `src` 目录下，创建一个 `events` 目录，并在其中创建 `onInteraction.ts` 文件。首先定义一个导出的函数 `onInteraction`。这应该是一个异步函数，有一个名为 `interaction` 的单一参数。

```ts
export const onInteraction = async (interaction) => {

};
```

为了给你的参数提供一个类型定义，从`discord.js`导入`Interaction`类型。

```ts
import { Interaction } from "discord.js";

export const onInteraction = async (interaction: Interaction) => {

};
```

`interaction`事件实际上是在任何命令交互上触发的，这包括像按钮点击和选择菜单，以及我们想要的 `slash` 命令。

因为你将只为这个机器人编写 `slash` 命令，你可以过滤掉任何其他的交互类型，帮助TypeScript理解你正在处理的数据。

在你的新函数中，添加一个条件来检查`interaction.isCommand()`。稍后你将在这个块中编写逻辑。

```ts
import { Interaction } from "discord.js";

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
  }
};
```

现在，在你的 `index.ts` 文件中，你可以加载另一个监听器。在你的 `.on("ready")` 监听器旁边，添加一个`BOT.on("interactionCreate")` 监听器。对于这个事件，回调需要一个 `interaction` 参数，你可以把它传递给你新的 `onInteraction` 函数。

```ts
  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );
```

记住，你将需要导入你的 `onInteraction` 函数。

很好! 你可以运行 `npm run build` 来确认TypeScript没有抛出任何错误，但如果没有实际的命令来使用，你还不能完全测试这段代码。

## 准备命令

我维护了一些Discord机器人，我发现有一件事有助于保持代码的可维护性和可读性，那就是使组件模块化。

### 定义一个接口

你将首先需要为你的命令定义一个共同的结构。在`src`中创建一个`interfaces`文件夹。然后在`interfaces`中创建一个名为`Command.ts`的文件。

现在你要创建一个接口。在TypeScript中，接口经常被用来定义对象的结构，也是众多用于声明变量类型的工具之一。

在你的`Command.ts`文件中，创建一个名为`Command`的导出接口。:

```ts
export interface Command {

}
```

你的接口将有两个属性 - `data`，它将保存要发送给Discord的命令数据，以及 `run`，它将保存回调函数和命令逻辑。

对于 `data` 属性，从 `@discordjs/builders` 导入 `SlashCommandBuilder` 和`SlashCommandSubcommandsOnlyBuilder`。将 `data` 属性定义为这两种类型中的一种。

对于 `run` 属性，从 `discord.js` 导入 `CommandInteraction` 类型。将 `run` 定义为一个函数，接收一个 `CommandInteraction` 类型的参数并返回一个 `void` Promise。

```ts
import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export interface CommandInt {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
}
```

### 创建一个命令列表

接下来你需要一个地方来存储你所有的命令。在 `src` 目录下创建一个名为 `commands` 的文件夹，并添加一个名为 `_CommandList.ts` 的文件。这里的下划线将使这个文件保持在列表的顶部。

`_CommandList.ts` 文件将需要两行。首先，导入你的 `Command` 接口，然后声明一个 `CommandList` 数组。这个数组现在是空的，但是要给它一个 `Command[]` 的类型，这样 TypeScript 就知道它最终会容纳你的命令对象。这个文件应该是这样的:

```ts
import { Command } from "../interfaces/Command";

export const CommandList: Command[] = [];
```

这个文件的目的是创建一个你的机器人的命令数组，你将在交互事件监听器中进行迭代。[可以使之自动化](https://github.com/BeccaLyria/discord-bot/blob/main/src/utils/readDirectory.ts)，但对于较小的机器人来说，它们往往是不必要的复杂。

### 检查命令的执行情况

在你的 `onInteraction.ts` 文件中，你应该开始研究寻找和运行命令的逻辑。

在你的 `interaction.isCommand()` 条件块中，通过 `CommandList` 数组（记得要导入它！）进行 `for...of` 循环。

```ts
for (const Command of CommandList) {

}
```

从Discord收到的交互 payload （有效载荷）包括一个 `commandName` 属性，你可以用它来查找用户选择的命令。要检查这一点，将 `interaction.commandName` 与 `Command.data.name` 属性进行比较。

```ts
if (interaction.commandName === Command.data.name) {

}
```

现在，如果你已经找到了用户选择的命令，你需要运行该命令的逻辑。这是通过 `Command.run(interaction)` 的调用来实现的--将交互的 payload（有效载荷）传递给命令。

你的最终文件应该是这样的:

```ts
import { Interaction } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (interaction.commandName === Command.data.name) {
        await Command.run(interaction);
        break;
      }
    }
  }
};
```

注意，在我们运行命令后，我们 `break` 循环，以避免不必要的搜索。

## 数据库模型

在你准备开始编写命令之前，还有一个步骤。这个机器人将跟踪你的社区成员的100天代码的进展。而你需要将该进度存储在数据库中。

`mongoose` 可以帮助你结构化你的MongoDB记录，以防止你将畸形或不完整的数据传入数据库。

首先，在你的 `database` 目录下创建一个 `models` 文件夹。在这个 `models` 文件夹中，创建一个 `CamperModel.ts` 文件。这将是你的用户对象的结构。

你首先需要从 `mongoose` 库中导入必要的值。在文件的顶部添加 `import { Document, model, Schema } from "mongoose";`。

因为你正在使用TypeScript，你需要为你的数据库对象创建一个类型定义。创建另一个接口，就像你为你的命令所做的那样，名为`CamperInt`。

```ts
export interface CamperInt extends Document {

}
```

`extends` 关键字告诉TypeScript我们要在 `Document` 类型的基础上添加属性。

你的数据库模型将有四个属性。把这些添加到你的接口中:

- `discordId: string;` - Discord中的每个用户对象都有一个唯一的标识符，称为Snowflake，用于区分他们与其他用户。与用户名或判别符（用户名后的四位数）不同，`id`值不能被改变。这使得它成为将你的存储数据与 Discord 用户联系起来的理想值。
- `round: number;` - 这将代表用户在挑战中所处的 "回合"。当某人完成了100天的挑战，他们可以选择再次进行挑战。当他们这样做的时候，他们通常称其为 "第二轮"，例如。
- `day: number;` - 这代表用户在挑战中的日期。
- `timestamp: number;` - 你将使用这个值来跟踪用户最后一次提交100天代码帖子的时间。

很好! 现在你需要为你的数据库条目定义模式。`mongoose` 使用一个Schema对象来定义进入数据库集合的文件的形状。`Schema` 导入有一个构造函数，你将把它分配给一个变量。

```ts
export const Camper = new Schema();
```

这个构造函数接受一个对象作为其参数，这个对象定义了数据库的键和类型。继续，传入一个与你的界面相似的对象。

```ts
export const Camper = new Schema({
    discordId: String,
    round: Number,
    day: Number,
    timestamp: Number,
})
```

注意，我们使用的是`String`而不是`string`。`String`是指JavaScript的原始类型，而`string`是TypeScript的类型定义。

接下来你需要创建`model`。在 `mongoose` 中，`model` 对象的作用是在MongoDB数据库中创建、读取和更新你的文档。在你文件的底部添加 `export default model();`。

`model` 函数需要几个参数。第一个是一个字符串，是你数据库中的文档（documents）的名称。对于这个集合（collection），使用 `"camper"`。第二个参数是用于数据的模式（schema）--使用你的 `Camper` 模式（schema）。

默认情况下，`mongoose` 将使用你的 `model` 名称的复数版本作为集合。在我们的例子中，这将是 "campers"。如果你想改变它，你可以传入第三个参数 `{集合: "name" }` 来设置集合为 `name`。

如果你使用的是 JavaScript，这就足以让你的数据库模型设置好。然而，由于你使用的是TypeScript，你应该利用类型安全的优势。`model()` 默认返回一个 `Document` 类型的 `any`。

为了解决这个问题，你可以在 `model` 函数中传递一个泛型。从某种意义上说，泛型可以作为类型定义的变量。你需要为你的 `model` 设置泛型以使用你的接口。通过将 `model` 改为 `model<CamperInt>`，来添加泛型。

这里只有一个步骤了。你的 `CamperInt` 接口只定义了你在 MongoDB 文档中设置的属性，但并不包括标准属性。

将你的 `export interface CamperInt` 改为 `export interface CamperInt extends Document`。这告诉TypeScript，你的类型定义是现有 `Document` 类型定义的扩展--你基本上是在向该结构添加属性。

你的最终文件应该看起来像这样:

```ts
import { Document, model, Schema } from "mongoose";

export interface CamperInt {
  discordId: string;
  round: number;
  day: number;
  timestamp: number;
}

export const Camper = new Schema({
  discordId: String,
  round: Number,
  day: Number,
  timestamp: Number,
});

export default model<CamperInt>("camper", Camper);
```

作为一个安全检查，再次使用`npm run build`。你不应该在终端看到任何错误。

## 编写机器人命令

你终于准备好开始编写一些命令了 由于这是一个100天代码机器人，你应该从创建100天代码更新的命令开始。

### 100 Command

在你的 `commands` 文件夹中，创建一个 `oneHundred.ts` 文件。这将保存你的100天代码命令。用 `import { Command } from ".../interfaces/Command;`导入你的命令接口。

现在声明一个导出的变量`oneHundred`，并赋予它`Command`类型:

```ts
import { Command } from "../interfaces/Command";

export const oneHundred: Command = {

};
```

首先，创建 `data` 属性。你将使用 `@discordjs/builders` 包来建立一个 `slash` 命令。

首先从 `@discordjs/builders` 包中导入 `SlashCommandBuilder()`。然后，用 `new SlashCommandBuilder()` 在`data` 属性中构建一个新实例。你将在这里使用一些方法来传递你想要的信息到构建器中。

`.setName()` 方法允许你设置斜线命令的名称。设置名称为 `"100"`。`setDescription()` 选项允许你在Discord的用户界面中显示命令的描述。将描述设为 `"Check in for the 100 Days of Code challenge"`。

Slash命令也可以接受 `option` 值。这些是用来接受用户的参数的，有各种类型。对于这个命令，你需要一个字符串选项，使用 `addStringOption()` 方法。选项方法需要一个回调函数，有一个 `option` 参数。

然后你可以在 `option` 参数上使用连锁方法来配置参数的信息。使用 `.setName()` 方法给选项取名为`"message"`，使用`.setDescription()`方法给它取名为`"The message to go in your 100 Days of Code update"`。最后，使用`.setRequired()`方法将该选项设置为必填。

以下是你现在应该有的东西:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const oneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
};
```

如果你在IDE中编码启用了智能提示，你可能已经注意到，这将在 `data` 属性上抛出一个类型错误（type error）。 这是因为 `SlashCommandBuilder` 实际上返回了一个 `Omit` 类型！ `Omit` 类型是用来告诉TypeScript，该属性是由TypeScript中定义的。_almost_ 是另一个类型几乎相同,但删除了特定属性。

前往你的 `interfaces/Command.ts` 文件，更新类型。用 `Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">` 替换 `SlashCommandBuilder` 类型。这将告诉TypeScript，`data` 应该是一个`SlashCommandBuilder`，但没有那两个特定的属性。

```ts
import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export interface Command {
  data:
    | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
    | SlashCommandSubcommandsOnlyBuilder;
  run: (interaction: CommandInteraction) => Promise<void>;
}
```

很好! 现在你的类型错误已经解决了，回到你的 `oneHundred.ts` 命令文件--是时候编写命令逻辑了。

你的机器人响应命令的所有逻辑将被放在 `run` 属性中。就像你在界面中做的那样，首先创建一个接受 `interaction` 参数的async函数。然后，让你的函数的第一行是 `await interaction.deferReply();`。

Discord期望机器人在三秒内对一个命令做出反应。因为这个命令可能需要更长的时间来处理，使用 `.deferReply()` 方法会发送一个确认响应，让你有整整15分钟的时间来发送实际响应。

接下来，你需要从该命令中提取一些数据。首先，用 `const { user } = interaction;`将 `user` 对象从交互的有效载荷中解构出来。`user` 对象代表调用该命令的Discord用户。

然后用 `const text = interaction.options.getString("message", true);` 获得你发送的 `message` 选项。通过这一行，你正在访问交互的 `options` 属性。`.getString()` 方法专门抓取一个字符串选项（记得你在 `data` 中创建了这个选项），`"message"`是这个选项的**name**。`true`参数表示这是一个必选项，所以TypeScript不会认为它是空的。

你的文件应该看起来像这样:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const oneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);
  },
};
```

这个命令的下一步将是从你的数据库中获取数据。因为你的许多命令都需要这样做，你应该为它创建一个模块。

### 处理数据库逻辑

创建一个 `src/modules` 目录，并在其中添加一个 `getCamperData.ts` 文件。创建一个导出的异步函数`getCamperData`，并给它一个名为 `id` 的字符串参数。然后，在该函数中，你可以查询数据库。

从 `database` 目录中导入你的 `CamperModel`，并使用 `findOne()` 方法来查询营员的 `id`：`const camperData = await CamperModel.findOne({ discordId: id });`。

```ts
import CamperModel from "../database/models/CamperModel";

export const getCamperData = async (id: string) => {
  const camperData = await CamperModel.findOne({ id });
};
```

我们在这里还有一个步骤。如果 `camper` 以前没有使用过机器人，他们就不会有现有的数据库记录。`findOne()`在这种情况下会返回 `null`,所以你可以添加一个回退值。


```ts
import CamperModel from "../database/models/CamperModel";

export const getCamperData = async (id: string) => {
  const camperData =
    (await CamperModel.findOne({ discordId: id })) ||
    (await CamperModel.create({
      discordId: id,
      round: 1,
      day: 0,
      date: Date.now(),
    }));
};
```

在这里，我们在第一轮第0天开始一个新的 `camper`,如果他们使用 `100 command`，这允许我们更新他们的状态。

最后，你需要 `返回（return）`你的数据。在函数的末尾添加 `return camperData`。为了额外的类型安全，将你的函数的返回类型定义为 `Promise<CamperData>`。

```ts
import CamperModel, { CamperInt } from "../database/models/CamperModel";

export const getCamperData = async (id: string): Promise<CamperInt> => {
  const camperData =
    (await CamperModel.findOne({ discordId: id })) ||
    (await CamperModel.create({
      discordId: id,
      round: 1,
      day: 0,
      date: Date.now(),
    }));
  return camperData;
};
```

你现在有了从数据库中获取 `camper` 数据的方法，但你也需要一种方法来更新它。在你的`/src/modules`目录下创建另一个文件，叫做 `updateCamperData.ts`。这将处理增加 `camper` 的进度的逻辑。

从一个导出的异步函数开始，称为 `updateCamperData`。它应该接受一个 `Camper` 参数，这将是你从 MongoDB 获取的数据。

```ts
import { CamperInt } from "../database/models/CamperModel";

export const updateCamperData = async (Camper: CamperInt) => {
    
};
```

你唯一要更新数据的时候是在 `/100` 命令中--在那里你要增加营员的日计数，检查他们是否开始了新的一轮（round），并更新时间戳。

首先，用 `Camper.day++;` 来增加日计数。根据100天代码挑战的工作方式，如果 `camper` 已经过了第100天，那么他们就开始了新的 "一轮（round）"。你需要一个条件来检查 `Camper.day > 100`，如果是的话，就把日子重置为1，并增加一轮（round）。

在这个条件之后，用 `Camper.timestamp = Date.now();` 更新时间戳，用 `await Camper.save();` 保存数据。最后，返回修改后的数据对象，这样你就可以在命令中使用它。

你的最终文件应该是这样的:

```ts
import { CamperInt } from "../database/models/CamperModel";

export const updateCamperData = async (Camper: CamperInt) => {
  Camper.day++;
  if (Camper.day > 100) {
    Camper.day = 1;
    Camper.round++;
  }
  Camper.timestamp = Date.now();
  await Camper.save();
  return Camper;
};
```

### 100 Command Continued

现在你的数据库逻辑已经准备好了，返回到你的`oneHundred.ts`文件。作为提醒，该文件应该看起来像这样:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const oneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);
  },
};
```

在文件的顶部导入你的两个新模块（modules）。然后，在你从交互对象中提取数值的逻辑之后，用`const targetCamper = await getCamperData(user.id);`从数据库中获取 `camper` 的数据。用 `const updatedCamper = await updateCamperData(targetCamper);` 来更新数据。

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const oneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);

    const targetCamper = await getCamperData(user.id);
    const updatedCamper = await updateCamperData(targetCamper);
  },
};
```

现在你需要构建响应，以便在 `camper` 使用该命令时将其送回。

为此，你将使用Discord的消息嵌入功能。首先从 discord.js 导入 `MessageEmbed` 构造函数，然后用 `const oneHundredEmbed = new MessageEmbed();` 创建一个新的嵌入。`MessageEmbed` 类有几个方法可以用来建立嵌入的内容。

使用 `.setTitle()` 方法来设置嵌入的标题为`"100 Days of Code"`。

使用`.setDescription()` 方法将嵌入的描述设置为 `camper` 在命令中提供的信息（记得你之前将其提取到`text`变量）。嵌入的作者可以被设置，并将显示在嵌入的顶部。

使用 `.setAuthor()` 方法传递一个对象，其 `name` 属性设置为 `user.tag`（将显示 `camper` 的用户名和判别符，如`nhcarrigan#0001`），`iconURL`属性设置为`user.displayAvatarUrl()`（将 `camper` 的头像附加到嵌入文件上）。

嵌入（Embeds）也接受字段，它是较小的文本块，有自己的标题和描述。`.addField()` 方法需要两个或三个参数，第一个是字段的标题，第二个是字段的描述，第三个是可选的布尔值，将字段设置为内联（inline）。

使用`.addField()`方法来添加两个字段。第一个字段的标题应该设置为 "Round"，描述设置为 `updatedCamper.round.toString()`。第二个字段的标题应该设置为 `"Day"`，描述设置为 `updatedCamper.day.toString()`。这两个字段都应该是内联的（inline）。

对于你嵌入的最后一部分，使用 `.setFooter()` 方法来添加小的页脚文本。传递一个对象，其 `text` 属性设置为`"Day completed:" + new Date(upedCamer.timestamp).toLocaleDateString()`以显示 `camper` 报告他们进展的时间。

最后，你需要把这个新嵌入的内容发回给 `camper`。因为你已经用`interaction.deferReply()` 调用发送了一个响应，你不能再发送一个响应。相反，你需要编辑你发送的那个。

使用`await interaction.editReply()`来编辑响应。`.editReply()`方法接收一个具有各种属性的对象,在这种情况下，你正在发送一个嵌入（embed）。传递一个对象，其 `embeds` 属性设置为`[oneHundredEmbed]`。

注意，这是一个包含你的嵌入的数组。Discord消息最多可以包含10个嵌入物（embeds），API希望有一个嵌入对象（embed objects）的数组来匹配。

你的最终命令文件应该是这样的:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const oneHundred: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);

    const targetCamper = await getCamperData(user.id);
    const updatedCamper = await updateCamperData(targetCamper);

    const oneHundredEmbed = new MessageEmbed();
    oneHundredEmbed.setTitle("100 Days of Code");
    oneHundredEmbed.setDescription(text);
    oneHundredEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    oneHundredEmbed.addField("Round", updatedCamper.round.toString(), true);
    oneHundredEmbed.addField("Day", updatedCamper.day.toString(), true);
    oneHundredEmbed.setFooter({
      text:
        "Day completed: " +
        new Date(updatedCamper.timestamp).toLocaleDateString(),
    });

    await interaction.editReply({ embeds: [oneHundredEmbed] });
  },
};
```

### Registering Commands（注册命令）

如果你运行`npm run build`和`npm start`，一切都会启动 - 但你没有办法实际使用你的新命令。这是因为Discord要求命令被注册，以便它们在应用程序的用户界面上可用。要做到这一点，我们需要采取几个步骤。

首先，前往你的`_CommandList.ts`文件，导入你的`oneHundred`命令。把它添加到你的`CommandList`数组中，这样它就可以在其他地方使用。

```ts
import { Command } from "../interfaces/Command";
import { oneHundred } from "./oneHundred";

export const CommandList: Command[] = [oneHundred];
```

Now it is time to add the logic to send the command information to Discord. In your `src/events` directory, add an `onReady.ts` file. We'll be using this with the `"ready"` event.

Create an exported async function named `onReady`, and give it a single parameter called `BOT`. Import the `Client` type from discord.js and set the `BOT` typedef to `Client`.

```ts
import { Client } from "discord.js";

export const onReady = async (BOT: Client) => {};
```

Now import the `REST` module from `@discordjs/rest`. This will allow you to instantiate an API client, which you'll use to send the commands. Construct a new instance with `const rest = new REST();`.

There are a couple of things you'll need to configure with your REST client. First, pass an object into the `REST()` constructor with a `version` property set to `"9"`. This tells the client to use version 9 of Discord's API, which is currently the latest version.

Then, chain a `.setToken()` call on the constructor to set the API token to `process.env.BOT_TOKEN` – you'll have to coerce this to a `string`.

```ts
import { REST } from "@discordjs/rest";
import { Client } from "discord.js";

export const onReady = async (BOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    process.env.BOT_TOKEN as string
  );
};
```

The API expects command data to be sent in a specific JSON format, but thankfully the slash command builder we are using has a method just for that. Import your `CommandList`, then create a new array and map your command data.

```ts
const commandData = CommandList.map((command) => command.data.toJSON());
```

Before you send the commands to Discord, it's important to note that there are two types of commands. "Global Commands" are available everywhere your bot is used, but take about an hour to update. "Guild Commands" are available only in a single server, but update immediately. Because this bot is designed to run in a single server, we're going to use guild commands.

You'll need to get the ID of the server you are using the bot in. To do this, make sure you have enabled developer mode in your Discord application, then right click on your server icon and select "Copy ID". In your `.env` file, add a `GUILD_ID` variable and assign it the ID you copied. It should look something like `GUILD_ID="778130114772598785"`.

Back in your `onReady.ts` file, start your API call with `await rest.put()`. Sending a `PUT` request will update any existing commands, where a `POST` will attempt to create new commands and error if commands share a name. Import `Routes` from `discord-api-types/v9`, and within the `rest.put()` call pass a `Routes.applicationGuildCommands()` call. This will be used to construct the API endpoint to send the commands to.

The `applicationGuildCommands()` call will take two arguments.

The first is the application ID to associate the commands with. You can get this from the `BOT.user.id` value – but `user` is potentially undefined, so you'll need to optionally chain it. Use `BOT.user?.id || "missing id"` to add a fallback value that will error out – this will allow us to know if the bot's ID is missing.

The second argument is the server ID, which you set up as `process.env.GUILD_ID` (remember to coerce the type!).

The `.put()` call needs a second argument as well, which is the data you want to send. Pass this as `{ body: commandData }` to match the expected format.

Finally, add a `console.log("Discord ready!")` at the end of the file to indicate your bot is online.

```ts
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onReady = async (BOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    process.env.BOT_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || "missing id",
      process.env.GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log("Discord ready!");
};
```

Switch to your `index.ts` file and locate your `"ready"` event listener. Replace the `console.log` call with your new `onReady` function – remember to import it, and make the callback asynchronous.

```ts
import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  if (!validateEnv()) return;
  const BOT = new Client({ intents: IntentOptions });

  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );

  await connectDatabase();

  await BOT.login(process.env.BOT_TOKEN);
})();
```

Now run `npm run build` and `npm start`, and head to your server in Discord. If you type `/` you should see your new `/100` command show up. Try using the command and checking the response.

![image-122](https://www.freecodecamp.org/news/content/images/2022/01/image-122.png)

If you see this response, then you've successfully created your first command!

Congratulations! You have your first successful command. With all of the infrastructure you've built, adding additional commands will be much smoother. Let's go ahead and do that now.

### Edit Command

What happens if a camper makes a typo in their `/100` message? Because the bot sends the response, the camper cannot edit it (Discord does not allow you to edit messages you did not send). You should create a command that will allow a camper to do this.

Create an `edit.ts` file in your `src/commands` directory. Like you did with the `/100` command, import your `SlashCommandBuilder` and `Command` interface, and export an `edit` object with the `Command` type.

Use the `SlashCommandBuilder` to prepare the `data` property. Give the command the name `edit` and the description `Edit a previous 100 days of code post.`, then add two string options. The first string option should have a name `embed-id` and a description of `ID of the message to edit.`, and the second should have a name of `message` and a description of `The message to go in your 100 Days of Code update.`. Both options should be required.

Your code should look like this:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const edit: Command = {
    data: new SlashCommandBuilder()
    .setName("edit")
    .setDescription("Edit a previous 100 days of code post.")
    .addStringOption((option) =>
      option
        .setName("embed-id")
        .setDescription("ID of the message to edit.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
}
```

Create your `run` property with an async function and an `interaction` parameter. Destructure the `channel` and `user` from the interaction, and grab the `embed-id` and `message` options. Don't forget to defer the response!

```js
    run: async (interaction) => {
        await interaction.deferReply();
        const { channel, user } = interaction;
        const targetId = interaction.options.getString("embed-id", true);
        const text = interaction.options.getString("message", true);
    }
```

The `channel` property is nullable (in cases where an interaction is sent via a DM, for example), so you'll want to check that it exists. If it does not, respond with a message that the command is missing parameters.

```ts
    if (!channel) {
      await interaction.editReply({
        content: "Missing channel parameter.",
      });
      return;
    }
```

Now that you know the channel exists, you can fetch the message that the camper wants to edit based on the ID they provided. Use `channel.messages.fetch()` to do this, passing in the `targetId` as the argument.

Because it is possible that the target message does not exist, you need to account for that in your code. Add a condition that checks for this, and if the message is not found respond with an explanation.

```ts
    const targetMessage = await channel.messages.fetch(targetId);

    if (!targetMessage) {
      await interaction.editReply({
        content:
          "That does not appear to be a valid message ID. Be sure that you are using this command in the same channel as the message.",
      });
      return;
    }
```

The last thing you need to check is that the message the camper is editing actually belongs to them. You can access the embed with the `.embeds` property – much like how you sent it, the property is returned as an array of embed objects.

Grab the first embed from the array, and then check that the embed author matches the user's tag. If not, let them know they cannot edit this post.

```ts
    const targetEmbed = targetMessage.embeds[0];

    if (targetEmbed.author?.name !== user.tag) {
        await interaction.editReply({
            content: "This does not appear to be your 100 Days of Code post. You cannot edit it."
        })
    }
```

Now that you have confirmed everything is correct, you can use `.setDescription()` on the embed to update the text. Then, edit the message with the new embed, and respond to the interaction with a confirmation.

Your full code should look like this:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";

export const edit: Command = {
  data: new SlashCommandBuilder()
    .setName("edit")
    .setDescription("Edit a previous 100 days of code post.")
    .addStringOption((option) =>
      option
        .setName("embed-id")
        .setDescription("ID of the message to edit.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { channel, user } = interaction;
    const targetId = interaction.options.getString("embed-id", true);
    const text = interaction.options.getString("message", true);

    if (!channel) {
      await interaction.editReply({
        content: "Missing channel parameter.",
      });
      return;
    }

    const targetMessage = await channel.messages.fetch(targetId);

    if (!targetMessage) {
      await interaction.editReply({
        content:
          "That does not appear to be a valid message ID. Be sure that you are using this command in the same channel as the message.",
      });
      return;
    }

    const targetEmbed = targetMessage.embeds[0];

    if (targetEmbed.author?.name !== user.tag) {
      await interaction.editReply({
        content:
          "This does not appear to be your 100 Days of Code post. You cannot edit it.",
      });
    }

    targetEmbed.setDescription(text);
    await targetMessage.edit({ embeds: [targetEmbed] });
    await interaction.editReply({ content: "Updated!" });
  },
};
```

Add your new `edit` command to your `CommandList` array, then build and run your bot and you should see the new command. Try editing the embed you sent earlier.

![image-123](https://www.freecodecamp.org/news/content/images/2022/01/image-123.png)

You should see your embed update, and a confirmation from the bot!

### View Command

Campers should have a way to view their current progress, so we'll need to create a command to do so. By now, you should be comfortable with the command structure – we encourage you to follow these instructions but attempt to write the code without looking at the final result.

Create a `view.ts` file in your commands directory, and set up your command variable. Create the `data` property with a command that has the name `view` and the description `Shows your latest 100 days of code check in.` This command does not need any options.

Set up your async function in the `run` property, and defer the interaction response. Extract the `user` object from the interaction. Use your `getCamperData` module to fetch the camper's data from the database. Then, check if the data's `day` property has a non-zero value. If it does not, let the camper know that they have not started the 100 Days of Code challenge, and can do so with the `/100` command.

Create an embed with a title set to `My 100DoC Progress`. Set the description to `Here is my 100 Days of Code progress. I last reported an update on:` and add the camper's timestamp. Add a `Round` and `Day` field, and set the author for the embed. Then send the embed in the interaction response.

Remember to add your new command to the `CommandList`, then try building and starting your bot. You should see the command available, and be able to get a response from it.

![image-125](https://www.freecodecamp.org/news/content/images/2022/01/image-125.png)

If you did not get the response, here is what your code should look like.

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";
import { getCamperData } from "../modules/getCamperData";

export const view: Command = {
  data: new SlashCommandBuilder()
    .setName("view")
    .setDescription("Shows your latest 100 Days of Code check in."),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const targetCamper = await getCamperData(user.id);

    if (!targetCamper.day) {
      await interaction.editReply({
        content:
          "It looks like you have not started the 100 Days of Code challenge yet. Use `/100` and add your message to report your first day!",
      });
      return;
    }

    const camperEmbed = new MessageEmbed();
    camperEmbed.setTitle("My 100DoC Progress");
    camperEmbed.setDescription(
      `Here is my 100 Days of Code progress. I last reported an update on ${new Date(
        targetCamper.timestamp
      ).toLocaleDateString()}.`
    );
    camperEmbed.addField("Round", targetCamper.round.toString(), true);
    camperEmbed.addField("Day", targetCamper.day.toString(), true);
    camperEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });

    await interaction.editReply({ embeds: [camperEmbed] });
  },
};
```

### Help Command

The last thing you need to build is a help command, which will explain how campers can interact with the bot.

Create your `help.ts` file in the command directory, and create your `data` property. Give the command the name `help` and the description `Provides information on using this bot.`

Set up your `run` property with the async function, and remember to defer the reply. Create an embed, and use the description and fields to provide the information you would like to share with your campers. Send the embed in the interaction response.

Load your new help command into the `CommandList`, and build + start your bot to test it. You should see a response with the embed you created.

![image-126](https://www.freecodecamp.org/news/content/images/2022/01/image-126.png)

Your embed might look different, depending on what information you chose to share. Here's the code that we used for the above embed:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interfaces/Command";

export const help: Command = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Provides information on using this bot."),
  run: async (interaction) => {
    await interaction.deferReply();
    const helpEmbed = new MessageEmbed();
    helpEmbed.setTitle("100 Days of Code Bot!");
    helpEmbed.setDescription(
      "This discord bot is designed to help you track and share your 100 Days of Code progress."
    );
    helpEmbed.addField(
      "Create today's update",
      "Use the `/100` command to create your update for today. The `message` will be displayed in your embed."
    );
    helpEmbed.addField(
      "Edit today's update",
      "Do you see a typo in your embed? Right click it and copy the ID (you may need developer mode on for this), and use the `/edit` command to update that embed with a new message."
    );
    helpEmbed.addField(
      "Show your progress",
      "To see your current progress in the challenge, and the day you last checked in, use `/view`."
    );
    helpEmbed.setFooter({ text: `Version ${process.env.npm_package_version}` });
    await interaction.editReply({ embeds: [helpEmbed] });
    return;
  },
};
```

Note how we use `npm_package_version` to display the current version of the bot.

## Conclusion

Congratulations! You have successfully built a Discord bot for the 100 Days of Code challenge.

If you are interested in exploring further, you can view [the source code](https://github.com/nhcarrigan/100-days-of-code-bot) for the live bot that inspired this tutorial, which includes custom error logging, external error reporting, and a documentation site.
