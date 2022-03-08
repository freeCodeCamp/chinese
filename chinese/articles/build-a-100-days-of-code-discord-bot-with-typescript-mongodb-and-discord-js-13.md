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

There's one more step before you are ready to start writing commands. This bot will track your community members' 100 Days of Code progress. And you need to store that progress in the database.

`mongoose` helps structure your MongoDB records to prevent you from passing malformed or incomplete data into your database.

Start by creating a `models` folder in your `database` directory. In that `models` folder, create a `CamperModel.ts` file. This will be your structure for the user objects.

You first need to import the necessary values from the `mongoose` library. Add `import { Document, model, Schema } from "mongoose";` at the top of the file.

Because you are using TypeScript, you need to create a type definition for your database objects. Create another interface, like you did for your commands, named `CamperInt`.

```ts
export interface CamperInt extends Document {

}
```

The `extends` keyword tells TypeScript we are adding properties on top of the `Document` type.

Your database model will have four properties. Add these to your interface:

- `discordId: string;` – Every user object in Discord has a unique identifier, called a Snowflake, which is used to distinguish them from other users. Unlike a username or discriminator (the four digit number after the username), the `id` value cannot be changed. This makes it the ideal value for linking your stored data to a Discord user.
- `round: number;` – This will represent the "round" the user is on in the challenge. When someone completes 100 days of the challenge, they may choose to undertake the challenge again. When they do, they often refer to it as "round 2", for example.
- `day: number;` – This represents the day the user is on in the challenge.
- `timestamp: number;` – You will use this value to track when the user last submitted a 100 Days of Code post.

Great! Now you need to define the Schema for your database entries. `mongoose` uses a Schema object to define the shape of the documents that go in to your database collection. The `Schema` import has a constructor, which you will assign to a variable.

```ts
export const Camper = new Schema();
```

This constructor takes an object as its argument, and that object defines the database keys and types. Go ahead and pass in an object similar to what your interface looks like.

```ts
export const Camper = new Schema({
    discordId: String,
    round: Number,
    day: Number,
    timestamp: Number,
})
```

Note that we are using `String` and not `string`. `String` refers to the JavaScript primitive type, where `string` is the TypeScript type definition.

Next you need to create the `model`. In `mongoose`, the `model` object serves to create, read, and update your documents in the MongoDB database. Add `export default model();` at the bottom of your file.

The `model` function takes a few parameters. The first is a string, and is the name to use for the documents in your database. For this collection, use `"camper"`. The second argument is the schema to use for the data – use your `Camper` schema there.

By default, `mongoose` will use the plural version of your `model` name for the collection. In our case, that would be "campers". If you want to change that, you can pass in a third argument of `{ collection: "name" }` to set the collection to `name`.

If you were using JavaScript, this would be enough to get your database model set up. However, because you are using TypeScript, you should take advantage of the type safety. `model()` by default returns a `Document` type of `any`.

To resolve this, you can pass a generic type into the `model` function. Generic types serve as variables for type definitions, in a sense. You need to set the generic type for your `model` to use your interface. Add the generic type by changing `model` to `model<CamperInt>`.

Just one more step here. Your `CamperInt` interface only defines the properties you set in the MongoDB document, but doesn't include the standard properties.

Change your `export interface CamperInt` to `export interface CamperInt extends Document`. This tells TypeScript that your type definition is an extension of the existing `Document` type definition – you are essentially adding properties to that structure.

Your final file should look like this:

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

As a safety check, use `npm run build` again. You should not see any errors in the terminal.

## Write Bot Commands

You are finally ready to start writing some commands! As this is a 100 Days of Code bot, you should start with the command for creating a 100 Days of Code update.

### 100 Command

Within your `commands` folder, create a `oneHundred.ts` file. This will hold your 100 Days of Code command. Import your command interface with `import { Command } from "../interfaces/Command;`.

Now declare an exported variable `oneHundred` and give it the `Command` type:

```ts
import { Command } from "../interfaces/Command";

export const oneHundred: Command = {

};
```

First, create the `data` property. You will be using the `@discordjs/builders` package to build a slash command.

Start by importing the `SlashCommandBuilder()` from the `@discordjs/builders` package. Then, construct a new instance in the `data` property with `new SlashCommandBuilder()`. You're going to chain some methods here to pass the information you want into the builder.

The `.setName()` method allows you to set the name of your slash command. Set the name to `"100"`. The `setDescription()` option allows you to display a description of the command in Discord's UI. Set the description to `"Check in for the 100 Days of Code challenge."`.

Slash commands can also accept `option` values. These are used to take arguments from the user, and come in various types. For this command, you'll want a string option with the `addStringOption()` method. Option methods take a callback function, with an `option` parameter.

You can then chain methods on the `option` parameter to configure the information for the argument. Use the `.setName()` method to give the option a name of `"message"`, and the `.setDescription()` method to give it a description of `"The message to go in your 100 Days of Code update."`. Finally, use the `.setRequired()` method to set the option to be required.

Here's what you should have now:

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

If you are coding in an IDE with Intellisense enabled, you may have noticed that this will throw a type error on the `data` property. This is because the `SlashCommandBuilder` actually returns an `Omit` type! An `Omit` type is used to tell TypeScript that the type is _almost_ the same as another type, but with specific properties removed.

Head over to your `interfaces/Command.ts` file to update the type. Replace the `SlashCommandBuilder` type with `Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">`. This will tell TypeScript that `data` should be a `SlashCommandBuilder`, but without those two specific properties.

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

Great! Now that your type error is resolved, head back over to your `oneHundred.ts` command file – it is time to write the command logic.

All of your bot's logic for responding to the command will go in the `run` property. As you did in your interface, start by creating an async function which takes an `interaction` argument. Then, let the first line of your function be `await interaction.deferReply();`.

Discord expects a bot to respond to a command within three seconds. Because this command may take longer to process, using the `.deferReply()` method sends an acknowledgement response that gives you a full 15 minutes to send the actual response.

Next, you need to extract some data from the command. First, destructure the `user` object out of the interaction payload with `const { user } = interaction;`. The `user` object represents the Discord user that called the command.

Then get the `message` option you sent with `const text = interaction.options.getString("message", true);`. With this line, you are accessing the `options` property of the interaction. The `.getString()` method specifically grabs a string option (remember that you created the option in `data`), and `"message"` is the **name** of the option. The `true` argument indicates that this is a required option, so TypeScript won't consider it nullable.

Your file should look like this:

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

The next step in this command would be to fetch data from your database. Because many of your commands will need to do this, you should create a module for it.

### Handling the Database Logic

Create a `src/modules` directory, and add a `getCamperData.ts` file within. Create an exported async function named `getCamperData`, and give it a string parameter named `id`. Then, within the function, you can query the database.

Import your `CamperModel` from the `database` directory, and use the `findOne()` method to query by the camper's `id`: `const camperData = await CamperModel.findOne({ discordId: id });`.

```ts
import CamperModel from "../database/models/CamperModel";

export const getCamperData = async (id: string) => {
  const camperData = await CamperModel.findOne({ id });
};
```

We still have one more step here. If the camper has not used the bot before, they won't have an existing database record. `findOne()` would return `null` in this case – so you can add a fallback value.

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

Here we start a new camper on Round 1 Day 0 - this allows us to update their status if they are using the 100 command.

Finally, you need to `return` your data. Add `return camperData` at the end of the function. For extra type safety, define the return type of your function as `Promise<CamperData>`.

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

You now have a way to get camper data from the database, but you need a way to update it as well. Create another file in your `/src/modules` directory called `updateCamperData.ts`. This will handle the logic to increment a camper's progress.

Start with an exported async function called `updateCamperData`. It should take a `Camper` parameter, which would be the data you fetch from MongoDB.

```ts
import { CamperInt } from "../database/models/CamperModel";

export const updateCamperData = async (Camper: CamperInt) => {
    
};
```

The only time you will update data is within the `/100` command – where you'll want to increment the camper's day count, check if they have started a new round, and update the timestamp.

First, increment the day count with `Camper.day++;`. With the way the 100 Days of Code challenge works, if a camper has passed day 100 then they have started a new "round". You'll need a condition to check if `Camper.day > 100`, and if so, reset the day to 1 and increment the round.

After that condition, update the timestamp with `Camper.timestamp = Date.now();` and save the data with `await Camper.save();`. Finally, return the modified data object so you can use it in the command.

Your final file should look like:

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

Now that your database logic is ready, return to your `oneHundred.ts` file. As a reminder, that file should look like this:

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

Import your two new modules at the top of the file. Then, after your logic that extracts the values from the interaction object, fetch the camper's data from the database with `const targetCamper = await getCamperData(user.id);`. Update the data with `const updatedCamper = await updateCamperData(targetCamper);`.

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

Now you need to construct the response to send back to the camper when they use the command.

For this, you'll be using Discord's message embed feature. Start by importing the `MessageEmbed` constructor from discord.js, and creating a new embed with `const oneHundredEmbed = new MessageEmbed();`. The `MessageEmbed` class has a few methods to use for building the content of the embed.

Use the `.setTitle()` method to set the title of the embed to `"100 Days of Code"`.

Use the `.setDescription()` method to set the description of the embed to the message the camper provided in the command (remember that you extracted this to the `text` variable earlier). The author of the embed can be set, and will display at the top of the embed.

Use the `.setAuthor()` method to pass an object with a `name` property set to `user.tag` (which will display the camper's username and discriminator, like `nhcarrigan#0001`), and an `iconURL` property set to `user.displayAvatarUrl()` (which will attach the camper's avatar to the embed).

Embeds also accept fields, which are smaller blocks of text that have their own title and description. The `.addField()` method takes two or three arguments, the first being the field title, the second being the field description, and the third being an optional boolean to set the field as inline.

Use the `.addField()` method to add two fields. The first should have the title set to `"Round"` and the description set to `updatedCamper.round.toString()`. The second should have the title set to `"Day"` and the description set to `updatedCamper.day.toString()`. Both fields should be inline.

For the last part of your embed, use the `.setFooter()` method to add small footer text. Pass an object with a `text` property set to `"Day completed: " + new Date(updatedCamer.timestamp).toLocaleDateString()` to show the time the camper reported their progress.

Finally, you need to send this new embed back to the camper. Because you have already sent a response with the `interaction.deferReply()` call, you cannot send another response. Instead, you need to edit the one you sent.

Use `await interaction.editReply()` to edit the response. The `.editReply()` method takes an object with various properties – in this case, you are sending an embed. Pass an object with an `embeds` property set to `[oneHundredEmbed]`.

Note that this is an array containing your embed. Discord messages can contain up to 10 embeds, and the API expects an array of embed objects to match.

Your final command file should look like this:

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

### Registering Commands

If you run `npm run build` and `npm start`, everything starts up – but you have no way to actually use your new command. This is because Discord requires that commands be registered so they are made available in the application UI. There are a few steps we'll need to take to do this.

First, head over to your `_CommandList.ts` file and import your `oneHundred` command. Add this to your `CommandList` array so it's available elsewhere.

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
