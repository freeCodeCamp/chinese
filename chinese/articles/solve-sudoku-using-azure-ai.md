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

## Prerequisites

-   Install the latest LTS version of Node.JS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
-   Install the Angular CLI from [https://cli.angular.io/](https://cli.angular.io/)
-   An Azure subscription account. You can create a free Azure account at [https://azure.microsoft.com/en-in/free/](https://azure.microsoft.com/en-in/free/)
-   Install the .NET Core 5.0 SDK from [https://dotnet.microsoft.com/download/dotnet/5.0](https://dotnet.microsoft.com/download/dotnet/5.0)
-   Install the latest version of Visual Studio 2019 from [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/)

## Source Code

You can get the source code from [GitHub](https://github.com/AnkitSharma-007/Azure-AI-Sudoku-solver).

## What is Azure Form Recognizer Cognitive Service?

The [Azure Form Recognizer](https://azure.microsoft.com/en-in/services/cognitive-services/form-recognizer/) cognitive service allows us to build automated data processing software using machine learning technology. It lets us extract text, key/value pairs, selection marks, tables, and structure from our documents.

We can easily invoke the Form Recognizer models with the help of a REST API or client library SDKs.

The Form Recognizer cognitive service provides the following features:

-   **Prebuilt models**: We can use the prebuilt models to extract data from the unique document type such as invoices, receipts, IDs, and business cards.
-   **Custom models**: we can extract text, key/value pairs, selection marks, and table data from forms using the custom models. However, we need to train the custom models using our data so that it suits our custom needs.
-   **Layout API**: It allows us to extract text, selection marks, and table structures from the documents.

In this article, we are going to use the layout API to extract content from the image of the sudoku table that the user uploads.

## How to Create the Azure Form Recognizer Cognitive Service Resource

Login to the Azure portal and search for the cognitive services in the search bar and click on the result. On the next screen, click on the Create button. It will open the cognitive services marketplace page. Search for the Form Recognizer in the search bar and click on the “Form Recognizer” card from the search result.

This will open the Form Recognizer API page. Click on the Create button to create a new Form Recognizer resource. Refer to the image shown below.

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateFR.png)

On the Create Form Recognizer page, fill in the details as indicated below.

-   **Subscription**: Select the subscription type from the dropdown.
-   **Resource group**: Select an existing resource group or create a new one.
-   **Region**: Choose the region which is right for you.
-   **Name**: Give a unique name to your resource.
-   **Pricing tier**: Select the pricing tier you want.

Click on the “Review +Create” button. Refer to the image shown below.

![](https://www.freecodecamp.org/news/content/images/2021/04/ConfigureFR.png)

On the next page, check the terms of use, verify the information which you have provided, and then click on the “Create” button.

After your resource is successfully deployed, click on the “Go to resource” button. Click on the “Keys and the endpoint” link on the menu on the left. Refer to the image shown below.

![](https://www.freecodecamp.org/news/content/images/2021/04/FRKeys.png)

Make a note of the endpoint and any one of the keys provided. We will be using these in the latter part of this article to invoke the Layout API of the Form recognizer service from the .NET code.

## How to Create the ASP.NET Core Application

Open Visual Studio 2019 and click on “Create a new Project”. A “Create a new Project” dialog will open. Select “ASP.NET Core with Angular” and click on Next. Refer to the image shown below.

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj.png)

Now you will be at the “Configure your new project” screen. Provide the name for your application as `ngSudokuSolver`, and click on Next. Refer to the image shown below.

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj_1.png)

On the additional information page, select the target framework as .NET 5.0 and set the authentication type to none as shown in the image below.

![](https://www.freecodecamp.org/news/content/images/2021/04/CreateProj_2.png)

This will create our project. The folder structure of the application looks like this:

![](https://www.freecodecamp.org/news/content/images/2021/04/Sol_Exp.png)

The `ClientApp` folder contains the Angular code for our application. The Controllers folders will contain our API controllers. The angular components are present inside the `ClientApp\src\app` folder.

The default template contains few Angular components. These components will not affect our application, but for the sake of simplicity, we will delete `fetchdata` and `counter` folders from `ClientApp/src/app` folder. Also, remove the reference for these two components from the `app.module.ts` file.

## How to Install the Required NuGet Packages

To install the package, navigate to Tools >> NuGet Package Manager >> Package Manager Console. It will open the Package Manager Console inside Visual Studio.

Run the following command to install the [Polly library](https://www.nuget.org/packages/Polly). This library allows you to express resilience and transient fault handling policies such as Retry, Circuit Breaker, Timeout, Bulkhead Isolation, and Fallback in a fluent and thread-safe manner.

`Install-Package Polly -Version 7.2.1`

Run the following command to install the [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) package.

`Install-Package Newtonsoft.Json -Version 13.0.1`

## How to Create the RetryMessage Handler

Right-click on the `ngSudokuSolver` project and select Add >> New Folder. Name the folder Models.

Again, right-click on the Models folder and select Add >> Class to add a new class file. Put the name of your class as `HttpRetryMessageHandler.cs` and click "Add".

Put the following code inside this class.

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

We will use the RetryMessageHandler to retry the `sendAsync` call. We will retry the HTTP call if the status of the HttpResponseMessage is “running”.

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
