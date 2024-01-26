> -  原文地址：[How to Implement a Blender Model in a React.js Application using Three.js](https://www.freecodecamp.org/news/blender-three-js-react-js/)
> -  原文作者：[Matthes Bär](https://www.freecodecamp.org/news/author/matthes-bar/)
> -  译者：Echo Xu
> -  校对者：

![How to Implement a Blender Model in a React.js Application using Three.js](https://www.freecodecamp.org/news/content/images/size/w2000/2023/08/pexels-chevanon-photography-1335971.jpg)

在这个分步指南中，你将学习如何建立一个带有基本动画的 Blender 文件。之后，你还将学习如何使用 React Three Fiber 来将 Three.js 集成到 React 应用程序中。
熟悉这些概念可以帮助你以后开发的 React.js 应用程序脱颖而出。

## ******🔐****** 以下是我们将涵盖的内容：

-   制作一个包括动画、材质和导出过程的 Blender 模型。
-   使用 React Three Fiber 构建与 Three.js 集成的 React.js 应用程序。
-   将个人创建的 Blender 模型整合到 React.js 应用程序中。

## **************📝************** 先决条件：

-   建议对 3D 软件 Blender 有基本了解。
-   要求具备对 React.js 的基本熟悉。
-   无需具备之前使用 Three.js 的经验。

## 目录

1.  [💭 Three.js 和 Blender 是什么？](#-what-are-three-js-and-blender)
2.  [🔧 如何使用 Three.js 设置 React.js](#-how-to-set-up-react-js-with-three-js)
3.  [**🔨** 如何创建 Blender 模型](#-how-to-create-a-blender-model)
4.  [**✏️** 程序材质的纹理烘焙](#-texture-baking-for-procedural-materials)
5.  [**✒️** 如何在 React.js 应用程序中实现 Blender 模型](#-how-to-implement-the-blender-model-into-the-react-js-application)
6.  [**📄** 其他信息](#-additional-information)
7.  [**📋** 总结](#-wrap-up)

## 💭 Three.js 和 Blender 是什么？

Three.js 是一个 JavaScript 的库，通过提供的API可以让你在 Web 浏览器中展示 3D 模型。 

利用 Three.js 可以帮助您将互动性和独特的功能无缝集成到您的网站中。

Blender 是一款专为制作和完善 3D 模型而定制的强大软件。它的多功能性提供了无限的机会，满足广泛的创意愿景。

除了显示功能之外，Blender 还为您提供了一系列工具，包括相机、灯光，甚至后期制作增强功能。

当一起使用时，这些工具可以激发无限的创造力，使您能够将您的艺术创作无缝地转化为您即将推出的网站项目。

## 🔧 如何使用 Three.js 设置 React.js

首先，安装 React.js 应用程序:

`npx create-react-app my-app`

然后， 需要安装 Three.js 和 [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/installation). React Three Fiber 充当 Three.js 的 React 渲染器，利用 React 组件的强大功能来简化 React.js 环境中 Three.js 的集成：

`npm install three @react-three/fiber`

为了丰富 Three.js 体验，我们还将集成 [React Three Drei](https://www.npmjs.com/package/@react-three/drei), 该包引入了各种适用于不同 Three 的帮助程序.js场景，包括几个摄像头控件，例如：

`npm install @react-three/drei`

### glTF Tools 扩展

我还建议安装  **glTF Tools** 扩展。尽管不是绝对必要的，但此扩展可以帮助您执行各种任务。

如果您使用 Visual Studio Code 作为集成开发环境 (IDE)，则可以通过扩展选项卡方便地添加扩展。同样，此扩展是可选的，但它可以显着简化以后的某些流程。我将在整个教程中使用它：

![React1.0](https://www.freecodecamp.org/news/content/images/2023/08/React1.0.PNG)

Visual Studio Code 中的 **gltf Tools** 扩展

### 在 React.js 中完成 Three.js 的设置

React.js 应用程序的 `package.json` 文件中的依赖项现在如下所示：

```JavaScript
"dependencies": {
    "@react-three/drei": "^9.80.2",
    "@react-three/fiber": "^8.13.6",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "three": "^0.155.0",
    "web-vitals": "^2.1.4"
  },
```

package.json 文件中的依赖项，包括 React Three Fiber 和 React Three Drei

这些依赖项足以在 React.js 环境中使用 Three.js 完成各种任务。当然，你还可以根据需要集成其他依赖库，来实现其他功能。

除此之外，我还在 [GitHub](https://github.com/Matthes-Baer/blender-threejs-reactjs-article-app) 上提供了本教程中的代码。这将使您能够快速访问信息，而无需滚动浏览整篇文章。

## 🔨 如何创建 Blender 模型

首先，我们的初始任务涉及创建一个 Blender 模型，然后将其集成到我们的 React.js 应用程序中。 在这一阶段，让我们考虑 **Layout** 选项卡中的一个场景，其中我们有三个对象：两个球体和一个平面。您可以在 Blender 中使用“Shift + A”快捷键添加此类对象。

![blenderFirstImage](https://www.freecodecamp.org/news/content/images/2023/08/blenderFirstImage.PNG)

**Layout** 选项卡中包含两个球体和一个平面的 Blender 场景

该构图仅包括一个平面和两个球体，没有其他细节。当然，您可以根据自己的喜好进行更精细的场景和模型设计。

但是，为了说明将自定义 Blender 模型整合到 React.js 的基本过程，这个基本示例将对我们足够了。

### 如何给模型添加动画

现在，将我们的重点转移到向该 Blender 场景中的三个对象引入基本动画。这些动画可以促进对象的移动、旋转甚至缩放，从而实现动态变换。

为了在 Blender 中为对象添加动画，您可以切换到 **Shading** 和 **渲染** 选项卡旁边的 **Rendering** 选项卡。

在 “Animation” 选项卡中，你可以向特定帧添加点。例如，如果要将球体向左移动一点，请首先添加起始关键帧（右键单击对象，选择 “Insert Keyframe” ，然后选择 “Location” ）。

然后，在对象的动画时间轴上向前移动几帧，调整对象的位置，然后重复相同的过程。这样，您将拥有两个关键帧：初始关键帧和处于新位置的关键帧。

请记住，这一动作是朝一个方向的。如果想重复动画，它将移动到新位置，然后再跳转返回到其初始位置。

为了使运动更加平滑，可以复制初始关键帧并将其插入到末尾。这将使物体在到达新位置后再平滑的运动向后移动。这也是我在 Blender 模型中设置关键帧的方法。

当然，你可以添加更多关键帧来制作更复杂的动画。这只是开始使用 Blender 动画的基本介绍。与 Blender 其他方面一样，还有很多东西需要探索和学习。

![blenderSecondImage](https://www.freecodecamp.org/news/content/images/2023/08/blenderSecondImage.PNG)

在 **Animation** 选项卡中的三个对象添加动画

在这种情况下，没有必要彻底了解我们在此处添加的这些动画的细节。因此，实际上不需要知道第一个球体在动画中移动到哪个确切位置。

关键点是承认它们的存在，因为它们将在稍后阶段集成到我们的 React.js 应用程序中，以便我们可以在浏览器中激活它们。

### 如何添加颜色

接下来，我们将为小球体和底层平面添加一些简单的颜色，例如，可以在 **Shading** 选项卡中执行此操作。

对于基本颜色，可以转到对象的 **Material Properties** 部分（右键单击对象，然后选择底部的倒数第二个类别）。但我想重点讨论您稍后可能会在模型中遇到的特定情况。因此，在本教程中，我将专门使用 **Shading** 选项卡来设置对象颜色。

在 **Shading** 选项卡中，可以在屏幕底部添加节点。这些节点可以修改对象的颜色和纹理等。你还会发现 “Vector” 和 “Shader” 节点，将它们组合起来可以为您的对象创建独特的视觉效果。

所有这些调整都适用于特定材料。因此，如果希望不同的对象具有相同的视觉效果，只需对它们应用相同的材​​质即可。

当我们第一次打开 **Shading** 选项卡来查找对象的材质时，最初会生成 “Principled BSDF” 和 “Material Output” 节点。这两个节点都是用来设置基本情况。

“Principled BSDF” 有很多可以使用的设置。在这个例子中，我们只将 “Base Color” 属性更改为蓝色。

![blender3.0](https://www.freecodecamp.org/news/content/images/2023/08/blender3.0.PNG)

我们只需在 “Principled BSDF” 节点中调整 “Base Color” 的球体的材质。

对于较大的球体，使用类似的材料应用。但是，与 “Principled BSDF” 节点相比，我们将使用 “Glossy BSDF” 节点，它是 “Shader” 类别中的一个节点。这将帮助我们认识到您在为 React.js 应用程序设计 Blender 模型时可能会遇到的问题 - 您稍后会看到。

![blender3.2-1](https://www.freecodecamp.org/news/content/images/2023/08/blender3.2-1.PNG)

使用 “Glossy BSDF” 节点向大的球体添加材质

完成此操作后，我们就可以导出 Blender 模型了。请注意，此版本已大大简化。可以根据偏好进行更详细的模型设计。整体工作流程仍然相似。

### 如何导出模型

要导出模型，我们需要生成 “.glb/.gltf” 文件。这一点至关重要，因为 Three.js 需要特定的文件格式来实现兼容性，在本例中，“.glb” 或 “.gltf” 文件符合库的要求。

因此，使用对象、动画、颜色等创建完模型后，您可以执行以下操作：

1.  单击左上角的 **File** 选项卡。
2.  从列出的选项中选择 **Export**。现在，可以看到多种导出格式。
3.  正如之前提到的那样，如果计划在应用程序中将模型与 Three.js 一起使用，则需要选择 `glTF 2.0 (.glb/.gltf)` 选项。

选择此选项后，将弹​​出一个新的对话框。通过此窗口，您可以选择要保存文件的路径。

在此窗口的右侧，有其他选项。例如，您可以决定要导出哪些特定对象。在大多数情况下，默认设置应该可以正常工作。请记住，如有必要，可以根据自己的偏好调整这些设置。

![blender3.1-1](https://www.freecodecamp.org/news/content/images/2023/08/blender3.1-1.png)

请记住导出的格式是 “glTF 2.0 (.glb/.gltf)”。

### 如何将导出的模型可视化

接下来，我们切换到 Visual Studio Code 并导航到导出文件的文件夹。

在此目录中，可以找到一个“.glb”文件。参考之前的 **glTF Tools** 扩展设置，只需右键单击 “.glb” 文件即可找到位于底部的两个附加选项，分别叫做 “glTF：从 GLB 导入”和 “glTF：验证 GLB 或 GLTF 文件”。

在这种情况下，我们会选择 “glTF：从 GLB 导入”选项。此操作将在同一文件夹中生成一个 “.gltf” 文件，在我们的例子中为 “blenderFile.gltf” 。

![blender4.0](https://www.freecodecamp.org/news/content/images/2023/08/blender4.0.png)

在 Blender 中利用 **glTF Tools** 扩展应用将初始导出的 “.glb” 文件生成一个 “.gltf” 文件。

我们选择这种方法是为了增强对“.gltf”文件的可访问性，可以通过在 Visual Studio Code 的 **glTF Tools** 扩展中直接查看。这对于在实际实施之前检查您的文件非常有帮助。

如果我们访问新创建的 “.gltf” 文件，我们可以观察到一些基于 Blender 模型的信息。请务必注意，具体内容可能根据每个工程的情况而有所不同，因为它们是为了反映 Blender 工程中对象和场景的属性而定制的。

如果我们看一下右上角，有一个符号看起来像一个立方体，旁边有一个圆锥体。通过单击此符号，可以直接在 IDE 中预览 Blender 场景。此功能只能由 “.gltf” 文件访问，在本例中不适用于 “.glb” 文件。

![blender4.5](https://www.freecodecamp.org/news/content/images/2023/08/blender4.5.png)

新创建的 “.gltf” 文件，可以选择直接在 Visual Studio Code 中查看模型（在右上角，用红色圈出）

值得注意的是，不一定要通过 **glTF Tools** 扩展来完成这个过程。另外，一些网站允许上传文件进行可视化。但我个人发现这种在集成开发环境中的方法特别方便。它将整个过程集中起来，使你能够在实际实施之前评估文件的完整性。

如果你发现任何错误，这个做法可以让你提前发现问题是基于导出的文件有问题还是 React.js 应用中存在实施的疏忽。因此，我非常推荐在从 Blender 导出后评估你的模型文件。

![blender5.0](https://www.freecodecamp.org/news/content/images/2023/08/blender5.0.PNG)

在 Visual Studio Code 中使用 **glTF Tools** 查看 Blender 模型

在 Visual Studio Code 中通过使用 **glTF Tools** 扩展查看我们的 Blender 模型，我们可以看到所有三个对象都被正确识别。 小球体和平面都以其预期的颜色显示。

但是由于大球体没有指定预期的颜色，只是以默认的白色显示。

这种差异引发了一个问题：是什么导致了这种异常现象？ 像这样的情况证明了在将模型集成到 React.js 应用程序之前预览模型是多么有用。

通过在此阶段检查您的模型，就可以确认问题源于 Blender 模型本身而不是实现过程，因为我们还没有进行任何实现。

事实证明，这种实施前评估非常方便，使你能够在 React.js 中的实施过程之前诊断和解决潜在的复杂情况。

## ✏️ 程序材质的纹理烘焙

简而言之，Blender 提供了使用程序节点处理材质的灵活性。虽然这些节点在 Blender 中可以无缝运行，但它们与其他游戏引擎或软件框架（如 Three.js ）并不直接兼容。

要了解更多信息，请考虑观看以下视频。 在短短10分钟内演示了纹理烘焙的过程，有效解决了当前的问题。

程序材质纹理烘焙教程

就我个人而言，当面对这一挑战并且最初不确定其性质时，我发现了这个视频，它是帮助我们深入了解该主题的宝贵资源。

在实际的具体场景中，虽然我们可能不会遇到视频中看到的那么复杂的情况，但仍然有可能面临着使用与各种软件工具缺乏直接兼容性的节点。

接下来，我们将简要介绍视频中提到的步骤。 但是，如果你有兴趣深入研究此过程，我强烈建议观看该视频。

### 如何创建文件纹理节点

首先，在包含 “Glossy BSDFF” 节点的材质的 “Shading” 选项卡中，我们将引入一个 “Image Texture” 节点并将其连接到新图像（通过单击 “New” ）。

我们将保留设置的默认值，这意味着宽度和高度为 “1024px” 。 使用较大的值将大大延长我们将面临的处理时间。 不过，值得注意的是，较大的纹理可以提供更多细节并改善整体外观。

在目前的情况下，我们的目标是加快流程。 但对于更重要的项目，视觉质量可能至关重要。 在这种情况下，可能需要选择更高的分辨率。

![blender6.0-1](https://www.freecodecamp.org/news/content/images/2023/08/blender6.0-1.PNG)

创建一个 “Image Texture” 节点并使用默认设置为其分配一个新图像

### 如何应用智能 UV 投射流程

接下来，我们需要使用 **UV Editing** 选项卡中的 “Smart UV Projec” 选项。 本质上，此操作将特定对象的面展开到纹理上。

此过程使我们能够在返回 **Shading** 选项卡后立即指定应该对纹理的哪些部分进行着色和修改。 为了使这个过程有效，我们必须选择大球体的所有面。

![blender7.0](https://www.freecodecamp.org/news/content/images/2023/08/blender7.0.png)

在 **UV Editin** 选项卡中选择对象的所有面并在其上应用 “Smart UV Project”

一旦我们完成此步骤并使用 “Smart UV Project” 过程的默认设置，左侧的图像（之前具有网格）现在将显示应用此过程的球体的形状。 在这种情况下，纹理似乎捕获了球体的各个角度。

![blender8.0](https://www.freecodecamp.org/news/content/images/2023/08/blender8.0.PNG)

“Smart UV Project” 后的纹理

根据具体对象，单击 “Smart UV Project” 按钮，然后可能需要微调显示的设置。 如果遇到特定对象的其他问题，我之前分享的视频可以为你提供这方面的额外指导。

一般来说，为了缓解问题，应该在创建阶段优化对象布局。 例如，避免在特定位置引入过多边缘可以防止剪裁等问题。

### 烘焙过程

Now, let's return to the **Shading** tab, where we'll access the `Render Properties` on the right side (represented by the small screen or TV symbol). If not already selected, pick `Cycles` as your `Render Engine`. Then navigate to the `Bake` category, which is located below the `Performance` category.
现在，返回到 **Shading** 选项卡，我们将在其中访问右侧的 “Render Properties”（由小屏幕或电视符号表示）。 如果尚未选择，请选择 “Cycles” 作为 “Render Engine”。 然后导航到 “Bake” 类别，该类别在“ Performance” 类别下方。

![blender9.0-1](https://www.freecodecamp.org/news/content/images/2023/08/blender9.0-1.PNG)

在 “Render Properties” 里面 **Shading** 选项卡中的 “Bake” 选项

使用现有的默认设置，可以通过单击 “Bake” 按钮继续，并且确保选择 “Image Texture” 节点和大球体。

请记住，我将“太阳”光集成到了场景中，因为此烘焙过程考虑了场景的照明。 如果没有足够的照明，结果可能会显得过暗。

经过一段时间的处理（如果您为 “Image Texture” 节点的图像使用了更大的尺寸，可能会更耗时），烘焙过程将完成。 这会导致纹理从 “Image Texture” 应用到图像。 现在可以通过常规的“正常”图像纹理来访问它，而不是从 “Glossy BSDF” 的 “Shader” 节点获取纹理。

然后可以建立从 “Image Texture” 节点到 “Material Output” 节点的连接，从而成功实现材质。 之前的方法是将 “Principled BSDF” 节点连接到 “Material Output” 节点的 “Surface” 输入。在此阶段，两个方法方法相比较，没有显着差异。

![blender10.0](https://www.freecodecamp.org/news/content/images/2023/08/blender10.0.PNG)

具有“烘焙”纹理的 “Image Texture” 节点与 “Material Output” 节点相连，而不是与 “Glossy BSDF” 节点连接

### 如何看到最终结果

现在，我们可以再次导出文件，使用 **glTF Tools** 扩展在 IDE 中重复之前的相同过程，并查看扩展名为 “.gltf” 的文件。 检查结果后，你可能会注意到它与我们在 Blender 中使用 “Glossy BSDF” 节点的版本不完全匹配。 这种差异主要归因于 Blender 场景中的照明条件。

请记住，我说明的方法不是烘焙过程的典型用法，因为在这种情况下，也可以使用 “Principled BSDF” 节点选择类似的基色，并且会实现几乎相同的解决方案。

![blender11.0](https://www.freecodecamp.org/news/content/images/2023/08/blender11.0.PNG)

使用 **glTF Tools** 完成的视图，包括大球体的“烘焙”纹理

根据个人经验介绍一下烘焙过程。 在某些情况下，我遇到了这样的场景：材质在 Blender 中的显示效果与在 React.js 应用程序中使用 Three.js 实现它们时的效果不同。 这种情况促使我探索烘焙的概念，结果证明这是一个有用的解决方案。

总而言之，如果你发现自己面临的情况是材料没有在 Three.js 的 React.js 的应用程序中按照预期显示，那么考虑烘焙过程并研究该主题可以提供有价值的见解。 这对于 Blender 新手来说尤其有益。

## ✒️ 如何在 React.js 应用程序中实现 Blender 模型

想要生成 Blender 文件，可以使用一个非常有用的命令 (来源： [https://github.com/pmndrs/gltfjsx](https://github.com/pmndrs/gltfjsx)):

`npx gltfjsx public/blenderFileName.glb`

需要注意的是，在此步骤中，需要将 Blender 文件存储在 React.js 应用程序的 “public” 文件夹中。 还值得强调的是，需要 React Three Drei 才能使用这个命令。 所以在我们的例子中，我们可以直接使用这个命令，而不需要任何额外的准备。

执行这个命令后，可以看到以下文件：

```JavaScript
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/blenderStuff/blenderFile.glb
*/

import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./blenderStuff/blenderFile.glb"
  );
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[-0.07, 0.16, -0.27]}
          scale={[1, 0.03, 1]}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          position={[-0.62, 0.43, -0.79]}
          rotation={[-0.01, 0.11, -0.02]}
          scale={0.09}
        />
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.001"]}
          position={[0.4, 0.55, 0.15]}
          scale={0.41}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blenderStuff/blenderFile.glb");
```

blenderFile.jsx， 包括使其工作的基本代码

大概看一下，就可以看到这个过程添加了很多元素，所以基本上不需要自己添加太多。

配置的一个重要方面是在 useGLTF 钩子中设置路径。在我的实例中，要使用的准确路径是 ./blenderStuff/blenderFile.glb（同样适用于 useGLTF.preload() ）。这是因为我在 public 目录下创建了一个名为 blenderStuff 的子文件夹。

### 如何添加 Canvas 包装器和其他组件

完成此配置后，我们现在就可以使用 “Model” 组件了。 但为了有效地将这个 “Model” 组件集成到想要的位置，需要在父组件中进行一些调整。

在这个例子中，我选择在主 App.js 文件中实现它。 我为 App 的 CSS 类分配了 100vh 的高度，以确保所需的显示。

```JavaScript
import "./App.css";
import { Model } from "./BlenderFile";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
        <ambientLight intensity={5} />
        <OrbitControls enableZoom={true} />
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
```

App.js, including the `Canvas` wrapper, the `Model` and other components

Generally speaking, you'll need a component to encapsulate all the Three.js related elements. Within the `Canvas` component, there's an opportunity to configure various settings. In my specific instance, I'm adjusting the initial camera position.

The light for the component plays a crucial role. In our case we made use of `ambientLight` which will add a light to the whole scene. Without adequate lighting, your scene might appear exceedingly dark or even entirely black despite the presence of object colors. You can also use additional light sources like the `spotLight` component.

The `OrbitControls` component, accessible from the Drei helper library, enhances your interactivity by enabling scrolling and rotation within the model right within the browser. This single line of code substantially improves user interactivity options.

Remember that your `Canvas` component can accommodate multiple models. You can also selectively apply components like `OrbitControls` to specific Blender models, thereby tailoring their behavior.

To do this, you'll need to build a parent component for each scene you want to make to be integrated within the `Canvas`. Within each new parent component, incorporate your Blender model component, along with any supplementary helper components you want to add.

This approach proves particularly advantageous when distinct models require different lighting or unique camera positions, for example.

### How to implement the animations

At this point, we've established a functional Three.js `Canvas` environment, featuring our Blender model. But it's important to remember that we've also introduced basic animations, which are not yet operational.

To tackle this, we can leverage the pre-implemented `useAnimations` hook.

```JavaScript
  const { actions, names } = useAnimations(animations, group);

  useLayoutEffect(() => {
    names.forEach((animation) => {
      actions?.[animation]?.play();
    });
  }, [actions, names]);
```

Part in blenderFile.jsx on how to activate the model animations upon page rendering

By incorporating this implementation, all animations associated with this Blender model will start playing upon the rendering of the page. This behavior also includes an indefinite loop for each animation.

## 📄 Additional Information

While this tutorial primarily focused on integrating a Blender model into a React.js application using Three.js, there's a realm of untapped potential within Three.js that we didn't cover.

Although we didn't use it in this basic example, you can introduce Post Processing to your Three.js models within React.js. The [React Three Postprocessing](https://www.npmjs.com/package/@react-three/postprocessing) library serves as a valuable tool in this regard. It lets you elevate your Three.js scenes with sophisticated effects like Bloom or Noise effects, which can add a more advanced dimension to your visualizations.

Also, when working on future Three.js projects, consider exploring the [React Spring](https://docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring) library which integrates well with React Three Fiber. React Spring provides the opportunity to incorporate custom animations within your Three.js scenes, on top of any animations directly integrated within Blender.

For instance, you could make a specific object within your scene get larger or smaller upon clicking it. As with other aspects of Three.js, this aspect might enhance interactivity and might be worth your time to get into.

By the way, if you find that your frames are running at a lower rate, consider toggling Hardware Acceleration within your browser settings to potentially improve performance.

## 📋 Wrap-up

At this point, we've successfully crafted a Blender model with animations and materials. Afterwards we integrated it into our React.js application using React Three Fiber.

Although the example we looked at here was quite basic, the integration approach remains the same for more complex Blender models. The fundamental functions of Three.js can be combined with supplementary helpers to enhance your scenes.

In addition to Post Processing, additional animations or also specific Blender materials, aspects like cameras and lights often are the most important when aiming to enhance the visual impact of your Blender models within Three.js scenes.
