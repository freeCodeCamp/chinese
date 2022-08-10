> -  原文地址：[How to Solve a Sudoku Puzzle Using Azure AI](https://www.freecodecamp.org/news/solve-sudoku-using-azure-ai/)
> -  原文作者：[Ankit SharmaAnkit Sharma](https://www.freecodecamp.org/news/author/ankitsharmablog/)
> -  译者：HeZean
> -  校对者：

![How to Solve a Sudoku Puzzle Using Azure AI](https://images.unsplash.com/photo-1536518138303-2c25eb218e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDczfHxudW1iZXJzfGVufDB8fHx8MTYxNzY1ODEzNw&ixlib=rb-1.2.1&q=80&w=2000)

这篇文章将带你使用 Azure Form Recognizer 创建一个数独解题器，Azure Form Recognizer 是一个由 AI 驱动的文档提取服务。

我们的程序将允许用户上传一张数独表的图片。我们将从图像中提取数据，然后在其上实现数独解题算法。

我们将在后端使用 .NET，在前端使用 Angular，并使用 Angular material 来设计应用程序的风格。

下面是关于该软件的一个演示。

![](https://www.freecodecamp.org/news/content/images/2021/04/SudokuSolver.gif)

## 准备

-   从 [https://nodejs.org/zh-cn/download/](https://nodejs.org/zh-cn/download/) 下载并安装最新的 LTS 版本的 Node.js
-   从 [https://cli.angular.io/](https://cli.angular.io/) 下载并安装 Angular CLI
-   一个 Azure 订阅账号。你可以在 [https://azure.microsoft.com/zh-cn/free/](https://azure.microsoft.com/zh-cn/free/) 创建一个免费的 Azure 账号
-   从 [https://dotnet.microsoft.com/download/dotnet/5.0](https://dotnet.microsoft.com/download/dotnet/5.0) 下载并安装 .NET Core 5.0 SDK
-   从 [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/) 下载并安装最新版本的 Visual Studio 2022

## 源代码

你可以在 [GitHub](https://github.com/AnkitSharma-007/Azure-AI-Sudoku-solver) 上获取源代码。

## 什么是 Azure 表单识别器认知服务？

得益于 [Azure 表单识别器](https://azure.microsoft.com/zh-cn/services/form-recognizer/)认知服务，我们可以使用机器学习技术构建自动数据处理软件。它能从文档中提取文本、键-值对、选择标记、表格和结构。

在 REST API 或客户端库 SDK 的帮助下，我们可以轻松地调用表单识别器模型。

表格识别器认知服务提供了以下功能：

-   **预构建模型**：我们可以使用预先建立的模型，从独特的文件类型中提取数据，比如发票、收据、身份证和名片。
-   **自定义模型**：我们可以使用自定义模型从表单中提取文本、键-值对、选择标记和表格数据。然而，我们需要使用自己的数据来训练自定义模型，使其适合我们的自定义需求。
-   **布局 API**：它允许我们从文件中提取文本、选择标记和表格结构。

在这篇文章中，我们将使用布局 API 从用户上传的数独表的图片中提取内容。

## 如何创建 Azure 表单识别器认知服务资源

登录 Azure 门户，在搜索栏中搜索“认知服务”并点击结果。在下一个屏幕上，点击“创建”按钮。这将打开认知服务市场的页面。在搜索栏中搜索“表单识别器”，并点击搜索结果中的“表单识别器”选项。

这将打开表单识别器 API 页面。点击“创建”按钮，新建一个表单识别器资源。如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateFR.png)

在创建表格识别器的页面中，按照下面的指示填写详细信息。

-   **订阅 / Subscription**：从下拉菜单中选择订阅类型。
-   **资源组 / Resource group**：选择一个现有的资源组或新建一个资源组。
-   **地区 / Region**：选择你所在的地区。
-   **名称 / Name**：为你的资源起一个独特的名字。
-   **定价 / Pricing tier**：选择你想要的定价级别。

点击“检查并创建”按钮。如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/ConfigureFR.png)

在下一个页面，勾选确认使用条款，核实你提供的信息，然后点击“创建”按钮。

在你的资源被成功部署后，点击“转到资源”按钮。点击左边菜单上的“密钥和端点”链接。如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/FRKeys.png)

记下端点和页面上提供的任意一个密钥。我们将在本文的后半部分使用这些来从 .NET 代码中调用表单识别器服务的布局 API。

## 如何创建 ASP.NET Core 应用程序

打开 Visual Studio 2022，点击“创建一个新项目”，这将打开一个“创建新项目”对话框。选择“ASP.NET Core with Angular”并点击“下一步”。如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj.png)

现在你将进入“配置你的新项目”界面。为该应用程序设置一个名称，比如 `ngSudokuSolver`，并点击“下一步”。如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj_1.png)

在附加信息页面，选择目标框架为 .NET 5.0，并将认证类型设置为无，如下图所示。

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj_2.png)

现在，我们创建了一个工程。这个程序的文件夹结构与下图类似：

![](https://www.freecodecamp.org/news/content/images/2021/04/Sol_Exp.png)

`ClientApp` 文件夹中包含我们程序的 Angular 代码。Controllers 文件夹将包含 API 控制器。Angular 组件存在于 `ClientApp/src/app` 文件夹中。

默认模板包含一些 Angular 组件。这些组件不会影响我们的应用程序，但为了简单起见，我们将从 `ClientApp/src/app` 文件夹中删除 `fetchdata` 和 `counter` 文件夹。同时，从 `app.module.ts` 文件中删除对这两个组件的引用。

## 如何安装所需的 NuGet 包

要安装 NuGet 包，请导航到工具 >> NuGet 包管理器 >> 包管理器控制台。它将在 Visual Studio 内打开包管理器控制台。

运行以下命令来安装 [Polly](https://www.nuget.org/packages/Polly)。这个库能让你以流畅和线程安全的方式表达弹性和瞬时故障处理策略，如重试、断路、超时、隔板隔离和回退。

`Install-Package Polly -Version 7.2.1`

运行以下命令来安装 [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/)。

`Install-Package Newtonsoft.Json -Version 13.0.1`

## 如何创建 RetryMessage Handler

右键单击 `ngSudokuSolver` 项目，选择添加 >> 新文件夹。将该文件夹命名为 Models。

接下来，右键单击 Models 文件夹并选择添加 >> 类来添加一个新的类文件。把这个类的名字定为 `HttpRetryMessageHandler.cs`，然后点击“添加”。

在这个类里面输入以下代码。

```C#

using Newtonsoft.Json;
using Polly;
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace ngSudokuSolver.Models
{
    public class HttpRetryMessageHandler : DelegatingHandler
    {
        public HttpRetryMessageHandler(HttpClientHandler handler) : base(handler) { }

        protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request,
            CancellationToken cancellationToken) =>
            Policy
                .Handle<HttpRequestException>()
                .Or<TaskCanceledException>()
                .OrResult<HttpResponseMessage>(x =>
                {
                    string result = x.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                    dynamic array = JsonConvert.DeserializeObject(result);

                    if (array["status"] == "running")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })
                .WaitAndRetryAsync(7, retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt)))
                .ExecuteAsync(() => base.SendAsync(request, cancellationToken));
    }
}

```

我们将使用 RetryMessageHandler 来重试 `sendAsync` 调用。如果 HttpResponseMessage 的状态是“运行中”，我们将重试 HTTP 调用。

The maximum retry attempts is set to 7. On each retry, we will increase the duration of wait time by a power of 2. If the maximum number of retries has been exhausted and the HttpResponseMessage is not successful yet, we will return false.

## How to Add the FormRecognizer Controller

Now we will add a new controller to our application.

Right-click on the Controllers folder and select Add >> New Item. An “Add New Item” dialog box will open.

Select “Visual C#” from the left panel, then select “API Controller-Empty” from the templates panel and put the name as `FormRecognizerController.cs`. Click on Add. Refer to the image below.

![](https://www.freecodecamp.org/news/content/images/2021/04/AddController.png)

Put the following code inside this class.

```C#
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ngSudokuSolver.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ngSudokuSolver.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FormRecognizerController : ControllerBase
    {
        static string endpoint;
        static string apiKey;

        public FormRecognizerController()
        {
            endpoint = "https://sudokusolver.cognitiveservices.azure.com/";
            apiKey = "a9f75796b3ba49bdade48eb3b905cb0e";
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<string[][]> Post()
        {
            try
            {
                string[][] sudokuArray = GetNewSudokuArray();

                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[Request.Form.Files.Count - 1];

                    if (file.Length > 0)
                    {
                        var memoryStream = new MemoryStream();
                        file.CopyTo(memoryStream);
                        byte[] imageFileBytes = memoryStream.ToArray();
                        memoryStream.Flush();

                        string SudokuLayoutJSON = await GetSudokuBoardLayout(imageFileBytes);
                        if (SudokuLayoutJSON.Length > 0)
                        {
                            sudokuArray = GetSudokuBoardItems(SudokuLayoutJSON);
                        }
                    }
                }

                return sudokuArray;
            }
            catch
            {
                throw;
            }
        }

        static async Task<string> GetSudokuBoardLayout(byte[] byteData)
        {
            HttpClient client = new();
            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", apiKey);
            string uri = endpoint + "formrecognizer/v2.1-preview.3/layout/analyze";
            string LayoutJSON = string.Empty;

            using (ByteArrayContent content = new(byteData))
            {
                HttpResponseMessage response;
                content.Headers.ContentType = new MediaTypeHeaderValue("image/png");
                response = await client.PostAsync(uri, content);

                if (response.IsSuccessStatusCode)
                {
                    HttpHeaders headers = response.Headers;

                    if (headers.TryGetValues("Operation-Location", out IEnumerable<string> values))
                    {
                        string OperationLocation = values.First();
                        LayoutJSON = await GetJSON(OperationLocation);
                    }
                }
            }
            return LayoutJSON;
        }

        static async Task<string> GetJSON(string endpoint)
        {
            using var client = new HttpClient(new HttpRetryMessageHandler(new HttpClientHandler()));
            var request = new HttpRequestMessage();
            request.Method = HttpMethod.Get;
            request.RequestUri = new Uri(endpoint);

            client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", apiKey);

            var response = await client.SendAsync(request);
            var result = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

            return result;
        }

        static string[][] GetSudokuBoardItems(string LayoutData)
        {
            string[][] sudokuArray = GetNewSudokuArray();
            dynamic array = JsonConvert.DeserializeObject(LayoutData);
            int countOfCells = ((JArray)array?.analyzeResult?.pageResults[0]?.tables[0]?.cells).Count;

            for (int i = 0; i < countOfCells; i++)
            {
                int rowIndex = array.analyzeResult.pageResults[0].tables[0].cells[i].rowIndex;
                int columnIndex = array.analyzeResult.pageResults[0].tables[0].cells[i].columnIndex;

                sudokuArray[rowIndex][columnIndex] = array.analyzeResult.pageResults[0].tables[0].cells[i]?.text;
            }
            return sudokuArray;
        }

        static string[][] GetNewSudokuArray()
        {
            string[][] sudokuArray = new string[9][];

            for (int i = 0; i < 9; i++)
            {
                sudokuArray[i] = new string[9];
            }

            return sudokuArray;
        }
    }
}
```

In the constructor of the class, we have initialized the key and the endpoint URL for the formrecognizer API.

The Post method will receive the image data as a file collection in the request body and return a two-dimensional array. We will convert the image data to a byte array and invoke the `GetSudokuBoardLayout` method. If we get a successful response and the JSON result is not empty, we will invoke the `GetSudokuBoardItems` method.

Inside the `GetSudokuBoardLayout` method, we will instantiate a new HttpClient. We will pass the subscription key in the header of the request.

When we use the formrecognizer API, we will get a status code as 202. This indicates that the service has accepted the request and will start processing later.

The response includes an "Operation-Location" header. The "Operation-Location" field contains the URL that we should use to get the result of the formrecognizer operation. The URL mentioned in the header will expire in 48 hours.

For the result of the formrecognizer service to be available, it requires a certain amount of time that depends on the length of the text.

This is where our RetryMessageHandler will be utilized. We will fetch the URL from the header and invoke the `GetJSON` method to fetch the JSON result.

Inside the `GetJSON` method, we create the HttpClient and initialize it with our custom `HttpRetryMessageHandler`. This method will return the JSON response as a string.

The `GetSudokuBoardItems` method will accept the JSON string. It will then iterate over the tables property of the JSON string to prepare the two-dimensional `sudokuArray`.

## Now Let's Work on the Client Side of the Application

The code for the client-side is available in the ClientApp folder. We will use Angular CLI to work with the client code.

> Using Angular CLI is not mandatory. I am using Angular CLI here as it is user-friendly and straightforward. If you do not want to use CLI then you can create the files for components and services manually.

Navigate to the `ngSudokuSolver\ClientApp` folder in your machine and open a command window. We will execute all our Angular CLI commands in this window.

## How to Install Angular Material

Run the following command to add Angular Material to the project.

`ng add @angular/material`

This command will install Angular Material to your project and then ask the following questions to determine which features to include:

-   Choose a prebuilt theme name, or "custom" for a custom theme: We will select the Indigo/Pink theme.
-   Set up global Angular Material typography styles? (Y/n): Y
-   Set up browser animations for Angular Material? (Y/n): Y

Refer to the image shown below:

![](https://www.freecodecamp.org/news/content/images/2021/04/ngMaterial.png)

## How to Add the Module for Angular Material

Run the following command to create a new module.

`ng g m ng-material`

Open the `src\app\ng-material\ng-material.module.ts` file and put the following code inside it.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class NgMaterialModule {}
```

We are importing all the required modules for Angular material components that we'll use in this application. A separate module for Angular material will make the application easy to maintain.

Import the `NgMaterialModule` in the `app.module.ts` file as shown below:

```
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
	...
	imports: [
		...
		NgMaterialModule,
	],
})
```

## How to Configure the Nav-bar of the App

Open `nav-menu.component.html` and put the following code inside it.

```html
<mat-toolbar color="primary" class="mat-elevation-z2">
  <mat-toolbar-row>
    <div>
      <button mat-button [routerLink]='["/"]'>
        <mat-icon>book</mat-icon> Sudoku Solver
      </button>
    </div>
  </mat-toolbar-row>
</mat-toolbar>
```

We have added the material toolbar and a button that will link to the base route of the application.

## How to Create the Form Recognizer Service

We will create an Angular service that will invoke the Web API endpoints and pass the response to our component. Run the following command.

`ng g s services\form-recognizer`

This command will create a folder name as services and then create the following two files inside it:

-   form-recognizer.service.ts — the service class file.
-   form-recognizer.service.spec.ts — the unit test file for service.

Open the `form-recognizer.service.ts` file and put the following code inside it.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormRecognizerService {
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = '/api/FormRecognizer';
  }

  getSudokuTableFromImage(image: FormData) {
    return this.http.post(this.baseURL, image);
  }
}
```

We have defined a variable baseURL that will hold the endpoint URL of our API. We will initialize the baseURL in the constructor and set it to the endpoint of the `FormRecognizerController`.

The `getSudokuTableFromImage` method will send a Post request to the `FormRecognizerController` and supply the parameter of type FormData. It will fetch a two-dimensional array that denotes the items in the sudoku table.

## How to Update the Home Component

Open `home.component.html` and put the following code in it.

```html
<div class="container">
  <h1 class="display-4">Solve Sudoku using Azure AI</h1>
  <mat-divider></mat-divider>
  <div class="row mt-3">
    <div class="col-md-6">
      <mat-card class="mat-elevation-z4">
        <mat-card-content>
          <table>
            <tr *ngFor="let row of gameBoard">
              <td *ngFor="let col of gameBoard">
                {{game[row][col]}}
              </td>
            </tr>
          </table>
        </mat-card-content>
        <mat-card-actions>
          <button type="button" mat-raised-button color="primary" (click)="SolveSudoku()"> Solve Sudoku </button>
        </mat-card-actions>
      </mat-card>
    </div>
    <div class="col-md-6">
      <div class="image-container">
        <img class="preview-image" src={{imagePreview}}>
      </div>
      <input type="file" (change)="uploadImage($event)" />
      <hr />
      <button mat-raised-button color="accent" (click)="GetSudokuTable()">
        <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>Extract Sudoku Table
      </button>
    </div>
  </div>
</div>
```

We have created a 9x9 table that denotes a sudoku board. We have defined a file upload control that will allow us to upload an image. After uploading the image, the preview of the image will be displayed using an `<img>` element.

Clicking on the “Extract Sudoku Table” button will fetch the content of the sudoku from the image and partially fill the table. Clicking on “Solve Sudoku” will solve the sudoku and update the table with the result.

Open the `home.component.ts` file and put the following code inside it.

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormRecognizerService } from '../services/form-recognizer.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  loading = false;
  imageFile;
  imagePreview;
  maxFileSize: number;
  isValidFile = true;
  status: string;
  DefaultStatus: string;
  imageData = new FormData();
  game = new Array(9);
  private unsubscribe$ = new Subject();

  constructor(private formRecognizerService: FormRecognizerService) {
    this.DefaultStatus = 'Maximum size allowed for the image is 4 MB';
    this.status = this.DefaultStatus;
    this.maxFileSize = 4 * 1024 * 1024; // 4MB

    for (var i = 0; i < this.game.length; i++) {
      this.game[i] = new Array(9);
    }
  }

  uploadImage(event) {
    this.imageFile = event.target.files[0];
    if (this.imageFile.size > this.maxFileSize) {
      this.status = `The file size is ${this.imageFile.size} bytes, this is more than the allowed limit of ${this.maxFileSize} bytes.`;
      this.isValidFile = false;
    } else if (this.imageFile.type.indexOf('image') == -1) {
      this.status = 'Please upload a valid image file';
      this.isValidFile = false;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      this.status = this.DefaultStatus;
      this.isValidFile = true;
    }
  }

  GetSudokuTable() {
    if (this.isValidFile) {
      this.loading = true;
      this.imageData.append('imageFile', this.imageFile);

      this.formRecognizerService
        .getSudokuTableFromImage(this.imageData)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (result: any) => {
            this.game = result;
            this.loading = false;
          },
          () => {
            console.error();
            this.loading = false;
          }
        );
    }
  }

  SolveSudoku() {
    this.sudokuSolver(this.game);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private sudokuSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '') {
          for (let k = 1; k <= 9; k++) {
            if (this.isSudokuValid(data, i, j, k)) {
              data[i][j] = `${k}`;
              if (this.sudokuSolver(data)) {
                return true;
              } else {
                data[i][j] = '';
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  private isSudokuValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + (i % 3);
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
    }
    return true;
  }
}
```

We will inject the formRecognizerService in the constructor of the `HomeComponent` and set a message and the value for the max image size allowed inside the constructor. We will also initialize the two-dimensional array to hold the value of the sudoku.

The `uploadImage` method will be invoked upon uploading an image. We will check if the uploaded file is a valid image and is within the allowed size limit. We will process the image data using a FileReader object. The readAsDataURL method will read the contents of the uploaded file.

When the read operation completes successfully, the reader.onload event will be triggered. The value of imagePreview will be set to the result returned by the fileReader object, which is of type ArrayBuffer.

Inside the `GetSudokuTable` method, we will append the image file to a variable for type FormData. We will invoke the `getSudokuTableFromImage` of the service and bind the result to the game array.

The `sudokuSolver` method will accept the Sudoku board as a parameter. We will then solve the sudoku board with the help of the backtracking algorithm.

## Execution Demo

Press F5 to launch the application. Upload the image of a sudoku table. Click on the “Extract Sudoku Table” button. It will extract the content from the image and populate the table on the left side. Refer to the image shown below:

![](https://www.freecodecamp.org/news/content/images/2021/04/ExecDemo1.png)

Click on the “Solve Sudoku” button. You can see the final result of the sudoku on the UI. Refer to the image shown below:

![](https://www.freecodecamp.org/news/content/images/2021/04/ExecDemo2.png)

## **Summary**

We have created a sudoku solver application using Angular and Azure form recognizer service. The application can extract the data from the image of a sudoku board uploaded by the user. We then implement backtracking to solve the sudoku. We have used Angular material for styling the app.

Get the Source code from [GitHub](https://github.com/AnkitSharma-007/Azure-AI-Sudoku-solver) and play around to get a better understanding.

## See Also

-   [Optical Character Reader Using Angular And Azure Computer Vision](https://ankitsharmablogs.com/optical-character-reader-using-angular-and-azure-computer-vision/)
-   [Multi-Language Translator Using Blazor And Azure Cognitive Services](https://ankitsharmablogs.com/multi-language-translator-using-blazor-and-azure-cognitive-services/)
-   [Facebook Authentication And Authorization In Server-Side Blazor App](https://ankitsharmablogs.com/facebook-authentication-and-authorization-in-server-side-blazor-app/)
-   [Continuous Deployment For Angular App Using Heroku And GitHub](https://ankitsharmablogs.com/continuous-deployment-for-angular-app-using-heroku-and-github/)
-   [Going Serverless With Blazor](https://ankitsharmablogs.com/going-serverless-with-blazor/)

If you like the article, please share it with your friends. You can also connect with me on [Twitter](https://twitter.com/ankitsharma_007) and [LinkedIn](https://www.linkedin.com/in/ankitsharma-007/).

Originally published at [https://ankitsharmablogs.com/](https://ankitsharmablogs.com/)
