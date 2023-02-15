> - 原文地址：[Edge Cloud Microservices – How to Build High Performance & Secure Apps with WasmEdge and Rust](https://www.freecodecamp.org/news/edge-cloud-microservices-with-wasmedge-and-rust/)
> - 原文作者：[Michael Yuan](https://www.freecodecamp.org/news/author/michael/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Edge Cloud Microservices – How to Build High Performance & Secure Apps with WasmEdge and Rust](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/richard-r-schunemann-DD3VNthK_Kw-unsplash.jpg)

边缘云允许开发者在靠近用户的地方部署微服务（即细粒度的网络服务）。这为他们提供了更好的用户体验（和非常快的响应时间）、安全和高可用性。

它还利用本地甚至私人数据中心、CDN 网络和电信数据中心（例如 5G MECs）来提供计算服务。

边缘云的成功例子包括 Cloudflare、Fastly、Akamai、fly.io、Vercel、Netlify 等等。

但与大型公有云相比，边缘云也是一个资源受限的环境。如果边缘微服务本身很慢或很臃肿或不安全，它们将违背在边缘云上部署的整个目的。

在这篇文章中，我将向你展示如何在 [WebAssembly 沙盒](https://github.com/WasmEdge) 中创建轻量级和高性能的 Web 服务，然后将它们免费部署在边缘云提供商 [fly.io](http://fly.io)。

[Fly.io](http://Fly.io) 是一家在边缘云上提供虚拟机服务的领先供应商。它在世界各地都有边缘数据中心。[fly.io](http://Fly.io) 的虚拟机支持应用服务器、数据库，以及在我们的案例中支持微服务的轻量级运行时。

我将使用 [WasmEdge Runtime](https://github.com/WasmEdge/WasmEdge) 作为这些微服务的安全沙盒。WasmEdge 是一个专门为云原生服务优化的 WebAssembly 运行时。

我们将把用 Rust 或 JavaScript 编写的微服务应用打包在 [基于 WasmEdge 的 Docker 镜像](https://hub.docker.com/u/wasmedge) 中。

这种方法有几个引人注目的优势:

- WasmEdge 以接近原生的速度运行沙盒应用程序。根据一项同行评议的研究，WasmEdge 运行 Rust 程序的速度几乎与 Linux 运行本地机器代码的速度相同。
- WasmEdge 是一个高度安全的运行时。它可以保护你的应用程序免受外部和内部威胁。
- WasmEdge 运行时的攻击面比普通的 Linux 操作系统运行时大大减少。
- 由于 WebAssembly 沙盒只能访问明确声明的资源，软件供应链攻击的风险大大降低。
- WasmEdge 提供了一个完整的和可移植的应用程序运行环境，其内存占用只有标准 Linux 操作系统运行时镜像的 1/10。
- WasmEdge 运行时是跨平台的。这意味着开发和部署的机器不必是相同的。而一旦你创建了一个 WasmEdge 应用程序，你可以将它部署到任何支持 WasmEdge 的地方，包括 [fly.io](http://fly.io) 基础设施。

如果应用程序很复杂，则性能优势会被放大。 例如，WasmEdge 上的 AI 人工智能应用程序不需要安装 Python。 WasmEdge 上的 node.js 应用程序不需要安装 Node.js 和 v8。

在本文的其余部分，我将演示如何运行:

- 一个异步的 HTTP 服务器（用 Rust 实现）
- 一个非常快速的图像分类网络服务（用 Rust 实现），以及
- 一个 node.JS 网络服务器
- 具有数据库连接的有状态微服务

所有这些都在 WasmEdge 中快速、安全地运行，而消耗的资源是普通 Linux 容器的 1/10。

### 环境准备

首先，如果你的系统中已经安装了 Docker 工具，那就太好了。如果没有，请按照 [本手册的第一节](https://www.freecodecamp.org/news/the-docker-handbook/) 现在就安装 Docker。然后我们将使用在线安装程序来安装 WasmEdge、Rust 和 [fly.io] 的 `flyctl` 工具(http://fly.io)。

安装 WasmEdge。[详见这里](https://wasmedge.org/book/en/start/install.html).

```bash
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -e all
```

安装 Rust。[详见这里](https://www.rust-lang.org/tools/install).

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

为 fly.io 安装 `flyctl` 工具(http://fly.io)。[详见这里](https://fly.io/docs/hands-on/install-flyctl/)。

```bash
curl -L https://fly.io/install.sh | sh
```

一旦你安装了`flyctl`，按照指示在[fly.io](http://fly.io) 上 [注册一个免费账户](https://fly.io/docs/hands-on/sign-up/) 。现在你已经准备好在边缘云上部署网络服务了

## 用 Rust 实现的一个简单的微服务

我们的第一个例子是一个用 Rust 编写的简单 HTTP 服务。它展示了一个现代网络应用，可以扩展到支持任意复杂的业务逻辑。

基于流行的 tokio 和 hyper crates，这个微服务是快速的、异步的（非阻塞的），并且对开发者来说非常容易创建。

完全静态链接的 WasmEdge 镜像只有 4MB，而基本的 Linux 镜像是 40MB。这足以运行一个用 Rust 的 tokio 和 hyper 框架编写的异步 HTTP 服务。

运行以下两个 CLI 命令，从我们为 WasmEdge 设计的超小(slim) Docker 镜像中创建并部署一个[fly.io](http://fly.io)应用程序。

```bash
$ flyctl launch --image juntaoyuan/flyio-echo
$ flyctl deploy
```

为什么这样做？你可以使用 curl 命令来测试所部署的网络服务是否真的工作。无论你向它发布什么数据，它都会回显(echoes back)出来。

```bash
$ curl https://proud-sunset-3795.fly.dev/echo -d "Hello WasmEdge on fly.io!"
Hello WasmEdge on fly.io!
```

`juntaoyuan/flyio-echo` Docker 镜像的 Docker 文件包含 WasmEdge 运行时的完整包和自定义网络应用`wasmedge_hyper_server.wasm`。

```Dockerfile
FROM wasmedge/slim-runtime:0.11.0
ADD wasmedge_hyper_server.wasm /
CMD ["wasmedge", "--dir", ".:/", "/wasmedge_hyper_server.wasm"]
```

构建`wasmedge_hyper_server.wasm`应用程序的 Rust 源代码项目 [可在 GitHub 上找到](https://github.com/WasmEdge/wasmedge_hyper_demo/tree/main/server)。它使用 tokio API 来启动一个 HTTP 服务器。

当服务器收到一个请求时，它委托给 `echo()` 函数来异步处理该请求。这使得微服务可以接受并处理多个并发的 HTTP 请求。

```Rust
#[tokio::main(flavor = "current_thread")]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));

    let listener = TcpListener::bind(addr).await?;
    println!("Listening on http://{}", addr);
    loop {
        let (stream, _) = listener.accept().await?;

        tokio::task::spawn(async move {
            if let Err(err) = Http::new().serve_connection(stream, service_fn(echo)).await {
                println!("Error serving connection: {:?}", err);
            }
        });
    }
}
```

异步的 `echo()` 函数如下。它利用 hyper 提供的 HTTP API 来解析请求并生成响应。这里，响应只是请求数据体。

```Rust
async fn echo(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {
    match (req.method(), req.uri().path()) {
        ... ...
        (&Method::POST, "/echo") => Ok(Response::new(req.into_body())),
        ... ...

        // Return the 404 Not Found for other routes.
        _ => {
            let mut not_found = Response::default();
            *not_found.status_mut() = StatusCode::NOT_FOUND;
            Ok(not_found)
        }
    }
}
```

现在，让我们在基本的微服务中添加一些令人印象深刻的东西吧!

## 用 Rust 实现的 AI 人工智能的微服务

在这个例子中，我们将创建一个用于图像分类的网络服务。它通过一个 Tensorflow Lite 模型处理上传的图像。

我们将使用 WasmEdge 的 Rust API 来访问 Tensorflow，而不是创建一个复杂（和臃肿）的 Python 程序，它以完整的本地机器码速度运行推理任务（例如，如果有的话，利用 GPU 硬件）。

通过 WASI-NN 标准，WasmEdge 的 Rust API 可以使用 Tensorflow、PyTorch、OpenVINO 和其他 AI 框架中的 AI 模型。

对于包含完整 Tensorflow Lite 依赖项的 AI 推理应用程序，WasmEdge 占用空间小于 115MB。 相比之下，标准 Tensorflow Linux 映像超过 400MB。

运行以下两个 CLI 命令，从我们用于 WasmEdge + Tensorflow 的超薄 Docker 镜像创建并部署一个 [fly.io](http://fly.io) 应用程序。

```bash
$ flyctl launch --image juntaoyuan/flyio-classify
$ flyctl deploy
```

就是这样！ 你可以使用 curl 命令来测试部署的 Web 服务是否真正起作用。 它返回具有置信度（confidence level）的图像分类结果。

```bash
$ curl https://silent-glade-6853.fly.dev/classify -X POST --data-binary "@grace_hopper.jpg"
military uniform is detected with 206/255 confidence
```

`juntaoyuan/flyio-classify` Docker 镜像的 Dockerfile 包含 WasmEdge 运行时的完整包、整个 Tensorflow 库及其依赖项，以及自定义 Web 应用程序 `wasmedge_hyper_server_tflite.wasm`。

```Dockerfile
FROM wasmedge/slim-tf:0.11.0
ADD wasmedge_hyper_server_tflite.wasm /
CMD ["wasmedge-tensorflow-lite", "--dir", ".:/", "/wasmedge_hyper_server_tflite.wasm"]
```

构建`wasmedge_hyper_server_tflite.wasm`应用程序的 Rust 源代码项目[可在 GitHub 上找到](https://github.com/WasmEdge/wasmedge_hyper_demo/tree/main/server-tflite)。基于 tokio 的异步 HTTP 服务器在异步`main()`函数中，与前面的例子一样。

`classify()`函数处理请求中的图像数据，将图像变成张量，运行 Tensorflow 模型，然后将返回值（在张量中）变成文本标签和可能分类的概率。

```Rust
async fn classify(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {
    let model_data: &[u8] = include_bytes!("models/mobilenet_v1_1.0_224/mobilenet_v1_1.0_224_quant.tflite");
    let labels = include_str!("models/mobilenet_v1_1.0_224/labels_mobilenet_quant_v1_224.txt");
    match (req.method(), req.uri().path()) {

        (&Method::POST, "/classify") => {
            let buf = hyper::body::to_bytes(req.into_body()).await?;
            let flat_img = wasmedge_tensorflow_interface::load_jpg_image_to_rgb8(&buf, 224, 224);

            let mut session = wasmedge_tensorflow_interface::Session::new(&model_data, wasmedge_tensorflow_interface::ModelType::TensorFlowLite);
            session.add_input("input", &flat_img, &[1, 224, 224, 3])
                .run();
            let res_vec: Vec<u8> = session.get_output("MobilenetV1/Predictions/Reshape_1");
            ... ...

            let mut label_lines = labels.lines();
            for _i in 0..max_index {
              label_lines.next();
            }
            let class_name = label_lines.next().unwrap().to_string();

            Ok(Response::new(Body::from(format!("{} is detected with {}/255 confidence", class_name, max_value))))
        }

        // Return the 404 Not Found for other routes.
        _ => {
            let mut not_found = Response::default();
            *not_found.status_mut() = StatusCode::NOT_FOUND;
            Ok(not_found)
        }
    }
}
```

在本文的最后一节，我们将讨论如何为 Rust 微服务添加更多的功能，如数据库客户端和 Web 服务客户端。

## 用 Node.js 实现的一个简单的微服务

虽然基于 Rust 的微服务是轻量和快速的，但不是每个人都是 Rust 开发者。

如果你更熟悉 JavaScript，你仍然可以在边缘云中利用 WasmEdge 的安全性、性能、占用空间小和可移植性。 具体来说，你可以使用 Node.js API 为 WasmEdge 创建微服务！

对于 Node.js 应用程序，WasmEdge 占用空间小于 15MB。 相比之下，标准 Node.js Linux 映像超过 150MB。

运行以下两个 CLI 命令，从我们用于 WasmEdge + Node.js 的超薄 Docker 映像创建并部署一个 [fly.io](http://fly.io) 应用程序。

```Rust
$ flyctl launch --image juntaoyuan/flyio-nodejs-echo
$ flyctl deploy
```

这就是了! 你可以使用 curl 命令来测试所部署的网络服务是否真的工作。无论你向它发布什么数据，它都会回显出来。

```bash
$ curl https://solitary-snowflake-1159.fly.dev -d "Hello WasmEdge for Node.js on fly.io!"
Hello WasmEdge for Node.js on fly.io!
```

`juntaoyuan/flyio-nodejs-echo` Docker 镜像的 Docker 文件包含 WasmEdge 运行时、QuickJS 运行时`wasmedge_quickjs.wasm`、Node.js [模块](https://wasmedge.org/book/en/dev/js/nodejs.html#the-javascript-modules) 和网络服务应用程序`node_echo.js`的完整包。

```Dockerfile
FROM wasmedge/slim-runtime:0.11.0
ADD wasmedge_quickjs.wasm /
ADD node_echo.js /
ADD modules /modules
CMD ["wasmedge", "--dir", ".:/", "/wasmedge_quickjs.wasm", "node_echo.js"]
```

`node_echo.js`应用程序的完整 JavaScript 源代码如下。你可以清楚地看到，它只是使用标准的 Node.js APIs 来创建一个异步的 HTTP 服务器，回显 HTTP 请求体。

```Javascript
import { createServer, request, fetch } from 'http';

createServer((req, resp) => {
  req.on('data', (body) => {
    resp.end(body)
  })
}).listen(8080, () => {
  print('listen 8080 ...\n');
})
```

WasmEdge 的 QuickJS 引擎不仅提供 Node.js 支持，还提供 Tensorflow 推理支持。我们将 Rust Tensorflow 和 WASI-NN SDKs 包装成 JavaScript APIs，以便 JavaScript 开发人员可以 [轻松创建 AI 人工智能应用程序](https://wasmedge.org/book/en/dev/js/tensorflow.html)。

## 在边缘部署的有状态的微服务

使用 WasmEdge，也可以创建由数据库支持的有状态的微服务。[这个 GitHub repo](https://github.com/WasmEdge/wasmedge-db-examples) 包含了 WasmEdge 应用程序中基于 tokio 的非阻塞数据库客户端的例子。

- [MySQL 客户端](https://github.com/WasmEdge/wasmedge-db-examples/tree/main/mysql) 允许 WasmEdge 应用程序访问大多数云数据库。
- [anna-rs 项目](https://github.com/essa-project/anna-rs) 是一个边缘原生 KV 存储，在边缘节点上具有可调整的同步和一致性级别。 WasmEdge 应用程序 [可以使用 anna-rs](https://github.com/WasmEdge/wasmedge-db-examples/tree/main/anna) 作为边缘缓存或数据库。

你现在可以使用 WasmEdge SDK 和运行时在边缘云上构建各种 Web 服务。 很快可以看到你的作品了！
