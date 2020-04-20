> * 原文地址：[My First Weekend of Deep Learning](https://blog.floydhub.com/my-first-weekend-of-deep-learning/)
> * 原文作者：[Emil Wallner](https://blog.floydhub.com/author/emil-wallner/)
> * 译者：[zhicheng](https://github.com/ZhichengChen)
> * 校对者：

**The current wave of deep learning took off five years ago.**  Exponential progress in computing power followed by a few success stories created the hype. It’s the technology that drives cars, beats humans in Atari games, and diagnoses cancer.

![playground.tensorflow.org](https://blog.floydhub.com/content/images/2018/06/playground.gif)

When I started learning deep learning I spent two weeks researching. I selected tools, compared cloud services, and researched online courses. In retrospect, I wish I could have built neural networks from day one. That’s what this article is set out to do. You don’t need any prerequisites, yet a basic understanding of  [Python][1], the  [command line][2], and  [Jupyter notebook][3]  will help.

Deep learning is a branch of machine learning. It’s proven to be an effective method to find patterns in  [raw data][4], e.g. an image or sound.

Say you want to make a classification of cat and dog images. Without specific programming, it first finds the edges in the pictures. Then it builds patterns from them. Next, it detects noses, tails, and paws. This enables the neural network to make the final classification of cats and dogs.

On the other hand, there are better machine learning algorithms for structured data. For example, if have you an ordered excel sheet with consumer data and you want to predict their next order. Then you can take a  [traditional approach][5]  and use  [simpler machine learning algorithms][6].

## Core Logic

Imagine a machine with randomly adjusted cogwheels = ✱. The cogs are stacked in layers and they all impact each other. Initially, the machine does not work. The cogs are randomly adjusted and they all need to be tuned to give the correct output.

An engineer will then examine all the cogs and mark which cogs are causing the error. He starts with the last layer of cogs, the result of all errors combined. Once he knows the errors the last layer is causing, he works backward. This way he can calculate how much each cog is contributing to the error. This process is called  _back propagation_.

The engineer then tunes each cog based on the error each made and runs the machine again. He keeps running the machine, calculates the errors and tunes each cog. He stays in this routine until the machine gives the correct output.

![predict](https://blog.floydhub.com/content/images/2018/06/predict.svg)

Neural networks operate in the same way. It knows the input and output and adjusts cogs to find the correlation between the two. Given an input, it tunes the cogs to predict the output. It then compares the predicted values with the real values.

To minimize the errors, the difference between the predicted values and the real values. The neural network tunes the cogwheels. It tunes the cogs until the difference between the predicted and the real value is as low as possible.

Minimizing the error in an optimal way is  _gradient descent_. The errors are calculated with the  _error function/cost function_.

## A Shallow Artificial Neural Network

Many think of artificial neural networks as digital replicas of our neocortex. It’s not true. We don’t know how enough about our brains to make that claim. It was a source of inspiration for Frank Rosenblatt\*\*,\*\* the inventors of neural networks.

Play with  [the neural network simulator][7]  for one or two hours to get an intuition for it.

![A neural network without a hidden layer.](https://blog.floydhub.com/content/images/2018/06/nn.svg)

We’ll start by implementing a simple neural network to get to know the syntax in TFlearn. A classic 101 problem to start with is the  [OR operator][8]. Although neural networks are better suited for other types of data, it’s a good problem to understand how it works.

| INPUT (OR) |  | **OUTPUT (Y\_TRUTH)** |
| --- | --- | --- |
| 0 | 0 = | **0** |
| 0 | 1 = | **1** |
| 1 | 0 = | **1** |
| 1 | 1 = | **1** |

All deep learning programs follow the same core logic:

-   It starts with including libraries, then importing and cleaning the data. All the input are  [translated into digits][9], regardless if it’s images, audio or a sensory data. These long lists of numbers are the input for our neural networks.
-   You design your neural network, e.g. choose the type and amount of layer to have in your network.
-   Then it enters the learning process. It knows the input and output values and searches for the correlation between them.
-   The final step gives you a prediction from your trained neural network.

Here is the code for our neural network:

```python
# 1. Import library of functions
import tflearn

2. Logical OR operator / the data
OR = [[0., 0.], [0., 1.], [1., 0.], [1., 1.]]
Y_truth = [[0.], [1.], [1.], [1.]]
3. Building our neural network/layers of functions
neural_net = tflearn.input_data(shape=[None, 2])
neural_net = tflearn.fully_connected(neural_net, 1, activation='sigmoid')
neural_net = tflearn.regression(neural_net, optimizer='sgd', learning_rate=2, loss='mean_square')
4. Train the neural network / Epochs
model = tflearn.DNN(neural_net)
model.fit(OR, Y_truth, n_epoch=2000, snapshot_epoch=False)
5. Testing final prediction

```

**Output**

```
Training Step: 2000  | total loss: 0.00072 | time: 0.002s
| SGD | epoch: 2000 | loss: 0.00072 -- iter: 4/4
Testing OR operator
0 or 0: [[ 0.04013482]]
0 or 1: [[ 0.97487926]]
1 or 0: [[ 0.97542077]]
1 or 1: [[ 0.99997282]]

```

**Line 1:**  The lines starting with # are comments and are used to explain the code.

**Line 2:**  Including the TFlearn library. This allows us to use deep learning functions from Google’s Tensorflow.

\*\*\*\***Line 5 - 6:**  This is the data from the table, stored in lists. The dot at the end of each number maps each integer into floats. It stores numbers with decimal values which make the calculations precise.

**Line 9:**  This is where we initialize the neural net and specify the dimension/shape of our input data. Every OR operator comes in a pair and thus has the shape of 2. None if a default value and represents the batch size.  [\[Documentation\]][10]

**Line 10:**  Our output layer. The activation function maps the output in the layer between an interval. In our case, we use a Sigmoid function that maps the value between 0 and 1. \[[Documentation][11]\]

**Line 11:**  This function applies the regression. The  [optimizer][12]  chooses which algorithm to minimize the cost function. The learning rate decides how fast to modify the neural network, and the loss variable decides how to calculate the errors. \[[Documentation][13]\]

**Line 14:**  Selects which neural network to use. It’s also used to specify where to store the training logs. \[[Documentation][14]\]

**Line 15:**  Trains your neural network/model. You select your input data (OR) and the true labels (Y\_truth). Epochs determines how many times to run all your data through your neural network. If you set snapshot=True it would validate the model after each epoch. \[[Documentation][15]\]

**Line 18-22:**  Makes a prediction with your trained model. In our case, it returns the probability of returning True/1. \[[Documentation][16]\]

**Output labels:**  The first result means that the combination \[0.\] & \[0.\] has a has a 4% probability of being true, and so on. Training step indicates how many batches you have trained. Since the data can fit into one batch it’s the same as Epoch. If the data is too big for the memory you need to break down the training in chunks. The loss measures the sum of errors from each epoch. SGD stands for stochastic gradient descent and method to minimize the cost function. Iter displays the current data index and the total amount of input items.

You can find the above logic and syntax in almost every TFlearn neural network. The best way to get a feel for the code is to modify it and create a couple of errors.

![Screenshot from tensorboard](https://blog.floydhub.com/content/images/2018/06/tb.png)

---

With Tensorboard you can visualize each experiment and build an intuition for how each parameter changes the training. Check the video earlier to learn how to use it. The loss curve shows the amount of errors for each training step.

Here is a suggestion of some examples that you can run. I’d recommend playing with it for a couple of hours to get used to the environment and the TFlearn parameters.

**Experiments**

-   Increase the training/epochs
-   Try adding/changing a parameter to each function from the documentation. E.g. g = tflearn.fully\_connected(g, 1, activation='sigmoid') becomes tflearn.fully\_connected(g, 1, activation='sigmoid',  _bias=False_)
-   Add integers in the input data
-   Change the \*\*shape in the input layer
-   Change the activation function in the output layer
-   Use a different method for gradient descent
-   Change how the neural network calculates the cost
-   Change the X and Y to AND and NOT logic operators.
-   Change the output data to XOR logic operators, i.e. swapping the last Y\_truth from \[1.\] to \[0.\]. You have to add a layer in your network for it to work.
-   Make it learn faster
-   Find a way to make each learning step take more than 0.1 second

## Getting Started

Python combined with Tensorflow is the most common stack for deep learning. TFlearn is a high-level framework that runs on-top of Tensorflow. Another common framework is Keras. It’s a more robust library, but I find the TFlearn syntax cleaner and easier to understand. They are both high-level frameworks that run on-top of Tensorflow.

You can run simple neural networks on your computer’s CPU. But most experiments will take several hours or even weeks to run. That’s why most use modern GPUs for deep learning, often through a cloud service.

The easiest solution for cloud GPUs is  [FloydHub][17]. If you have basic command line skills, it shouldn’t take more than 5 minutes to set up FloydHub.  [Use the FloydHub docs][18]  to install the  `floyd-cli`  command line tool. FloydHub also provides support on their Intercom chat if you get stuck at any point.

Let’s run your first neural network in FloydHub using TFlearn, Jupyter Notebook, and Tensorboard. After installing and login in to FloydHub, download the files you need for this guide by going to your terminal and typing the below command.

```bash
git clone https://github.com/emilwallner/Deep-Learning-101.git

```

Open the folder and initiate FloydHub.

```bash
cd Deep-Learning-101
floyd init 101

```

The FloydHub web dashboard will open in your browser, and you will be prompted to create a new FloydHub project called  `101`. Once that's done, go back to your terminal and run the same  `init`  command.

```bash
floyd init 101

```

Now you are ready to run your neural network job on FloydHub. With the  `floyd run`  command, you can pass in various settings. In our case, we will want to:

-   Mount a public dataset on FloydHub (which I've already uploaded) at the  `data`  directory with  `--data emilwallner/datasets/cifar-10/1:data`. You can explore this dataset (and many other public datasets) by viewing it on  [FloydHub][20]
-   Use a cloud GPU with  `--gpu`
-   Enable Tensorboard with  `--tensorboard`
-   Run the job in Jupyter Notebook mode with  `--mode jupyter`

Okay, let's run our job:

```bash
floyd run --data emilwallner/datasets/cifar-10/1:data --gpu --tensorboard --mode jupyter

```

Once it initiates Jupyter in your browser, click on the file named start-here.ipnyb. Start-here.ipnyb is a simple neural network to get to know the syntax in TFlearn. It learns the logic of the OR operator, explained in full later on.

In the menu row, click on  **Kernel > Restart & Run All**. If you see the message, it’s working, then you are good to go. Go to your FloydHub project to find the link for Tensorboard.

## A Deep Neural Network

Deep learning are neural networks with more than one hidden layer. There are already plenty of detailed tutorials on how convolutional neural networks work:  [here][21],  [here][22], and  [here][23]. Instead, we’ll focus on the high-level notions that you can apply to most neural networks.

You want to train neural networks to make predictions on data it was not trained on, an ability too generalize. It’s a balance between learning and forgetting. You want it to learn to separate signal from noise. But also forget the signals that are only found in the training data.

If the neural network is not learning enough it’s underfitting. The opposite is overfitting. It’s when it has learned too much from the training data.

_Regularization_  is the process to reduce overfitting by forgetting training specific signals.

![fit](https://blog.floydhub.com/content/images/2018/06/fit.svg)

To get an intuition for these concepts, we’ll be working with the  [CIFAR-10 dataset][24]. It’s a dataset with 60k images in ten different categories, such as cars, trucks, and birds. The goal is to predict which of the ten categories a new image belongs to.

![Sample images with labels](https://blog.floydhub.com/content/images/2018/06/sample.png)

Normally, we have to scrape the data, clean it and apply filters to the images. But to narrow it down, we’ll only focus on the neural networks. You can run the all the examples from the Jupyter notebook  [you’ve downloaded in the installation section.][25]

The input layer takes an image which has been mapped into digits, and the output layer classifies the images into ten categories. The hidden layers are a mix of convolutional, pooling, fully connected layers.

Let’s make a comparison with a neural network with one vs three sets of layers. Each set includes convolutional, pooling and a fully connected layer.

All the experiments can be found here. The first two experiments are called  [experiment-0-few-layers.ipynb][26]  and  [experiment-0-three-layer-sets.ipynb][27].

```python
# Convolutional network building
network = input_data(shape=[None, 32, 32, 3],
                     data_preprocessing=img_prep,
                     data_augmentation=img_aug)
One set of layers

```

If you run these notebooks (again by clicking  **Kernel > Restart & Run All**  in the menu bar) and then take a peek at the training log in Tensorboard, you’ll see that the one with many layers is ~15% more accurate. The layer with few layers is underfitting - it’s not learning enough.

You can run the same example from the folder you downloaded earlier, as well as the all the upcoming experiments.

![experiment_0 in the repo](https://blog.floydhub.com/content/images/2018/06/experiment.png)

Take a look at the Accuracy and Accuracy/Validation. It’s best practice in deep learning to split the dataset in two. One for the training the neural network and another for validating it. This way you can tell how well the neural network makes predictions on new data, or its ability to generalize.

As seen in the Tensorboard, the accuracy of the training data is higher than the accuracy on the validation dataset. The neural network has included background noise and details that hinder it from predicting new images.

To deal with the overfitting you can punish complex functions and introduce noise into the neural network. Common regularization techniques to prevent this are dropout layers and punishing complex functions.

The dropout regularization can be compared to the value of a democracy. Instead of having a few powerful neurons that decide the final outcome, they distribute the power. The neural network is forced to learn several independent representations. When it makes the final prediction it then has several distinct patterns to learn from.

This is an example of a neural network with a dropout layer.

```python
network = input_data(shape=[None, 32, 32, 3],
                        data_preprocessing=img_prep,
                        data_augmentation=img_aug)
network = conv_2d(network, 32, 3, activation='relu')
network = max_pool_2d(network, 2)
network = conv_2d(network, 64, 3, activation='relu')
network = conv_2d(network, 64, 3, activation='relu')
network = max_pool_2d(network, 2)
network = fully_connected(network, 512, activation='relu')
#The dropout layer
network = dropout(network, 0.5)
network = fully_connected(network, 10, activation='softmax')
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.001)

```

In this comparison, the neural networks are the same except that one has a dropout layer and the other one doesn’t.

![experiment_1.ipynb in the repo](https://blog.floydhub.com/content/images/2018/06/exp1.png)

In each layer of the neural network, the neurons become dependent on each other. Some neurons gain more influence than others. The dropout layer randomly mutes different neurons. This way each neuron has to build a distinct contribution to the final output.

The second popular method to prevent overfitting is applying an L1 or L2 regularization function on each layer.

Say you want to describe a horse. If the description is too detailed, you exclude too many horses. On the other hand, if it’s to general you might include other animals. The L1 and L2 regularization helps the network to make this distinction.

```python
network = input_data(shape=[None, 32, 32, 3],
                        data_preprocessing=img_prep,
                        data_augmentation=img_aug)
network = conv_2d(network, 32, 3, activation='relu', regularizer='L2')
network = max_pool_2d(network, 2)
network = conv_2d(network, 64, 3, activation='relu', regularizer='L2')
network = conv_2d(network, 64, 3, activation='relu', regularizer='L2')
network = max_pool_2d(network, 2)
network = fully_connected(network, 512, activation='relu', regularizer='L2')
network = fully_connected(network, 10, activation='softmax')
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.001)

```

If we make a similar comparison as the previous experiment we get a similar outcome.

![experiment_2 in the repo](https://blog.floydhub.com/content/images/2018/06/exp2.png)

The neural network with regularization functions outperforms the one without them.

The regularization function L2 punishes functions that are too complex. It measures how much each function contributes to the final output and punishes the ones with large coefficients.

Another core hyper parameter is batch size, the amount of data to use for each training step. Below is a comparison between a large and a small batch size.

```python
#Large batch size
model.fit(X, Y, n_epoch=50, shuffle=True, validation_set=(X_test, Y_test), show_metric=True, batch_size=2000, run_id='cifar_large_batch_size')

```

![experiment_3 in the repo](https://blog.floydhub.com/content/images/2018/06/exp3.png)

As we see in the result, a large batch size requires fewer cycles but has more accurate training steps. In comparison, a smaller batch size is more random but take more steps to compensate for it. Although a large batch size requires fewer learning steps, you need more memory and time to compute each step.

The final experiment is a comparison is between a network with small, medium, and large learning rate.

```python
#Large learning rate
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.01)

```

![experiment_4 in the repo](https://blog.floydhub.com/content/images/2018/06/exp4.png)

The learning rate is often considered one of the most important parameters due to its impact. It regulates how to adjust the change in prediction for each learning step. If the learning rate is too high or too low it might not converge, just like the large learning rate above.

There is no fixed way of designing neural networks. A lot of it has to do with experimentation. Looking at what others have done, adding layers, and tuning hyper parameters. If you have access to a lot of computing power, you can even create programs to design and tune the hyper parameters.

When you're done running your job, you should also remember to spin down your cloud GPU instance by clicking  `Cancel`  in the FloydHub web dashboard for your job.

### **Next Steps**

In TFlearn’s  [official example repo][28], you can get a feel for some of the best performing CNNs. Try copying some of the methods and improve the validation for the CIFAR-10 dataset. The best result so far is 96.53% (Graham, 2014).

It’s also worth learning the Python syntax and get familiar with the command line. This reduces unnecessary cognitive load so you can focus on deep learning notions. Start with Codecademy’s  [course on Python][29]  and then do the  [command line one][30]. It should not take more than three days if you do it full-time.

**Thanks to**  Ignacio Tonoli, Per Harald Borgen, Jean-Luc Wingert, Sai Soundararaj, and Charlie Harrington for reading drafts of this. And gratitude towards the  [TFlearn community][31]  for the documentation and sample code.

---

### About Emil Wallner

This is part one of a multi-part blog series from Emil as he learns deep learning.

You can follow along with Emil on  [Twitter][32]  or his  [website][33].

We're always looking for more guests to write interesting blog posts about deep learning. Let us know on  [Twitter][34]  if you're interested.

[1]: https://www.codecademy.com/tracks/python
[2]: https://www.codecademy.com/learn/learn-the-command-line
[3]: https://www.youtube.com/watch?v=HW29067qVWk
[4]: https://ml4a.github.io/images/figures/mnist-input.png
[5]: http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
[6]: http://1.bp.blogspot.com/-ME24ePzpzIM/UQLWTwurfXI/AAAAAAAAANw/W3EETIroA80/s1600/drop_shadows_background.png
[7]: https://www.mladdict.com/neural-network-simulator
[8]: https://msdn.microsoft.com/en-us/library/f355wky8.aspx
[9]: https://ml4a.github.io/images/figures/mnist-input.png
[10]: http://tflearn.org/layers/core/
[11]: http://tflearn.org/layers/core/
[12]: http://tflearn.org/optimizers/
[13]: http://tflearn.org/layers/estimator/
[14]: http://tflearn.org/models/dnn/
[15]: http://tflearn.org/models/dnn/
[16]: http://tflearn.org/models/dnn/
[17]: https://www.floydhub.com/
[18]: http://docs.floydhub.com/getstarted/quick_start/
[19]: https://github.com/emilwallner/Deep-Learning-101.git
[20]: https://www.floydhub.com/emilwallner/datasets/cifar-10/1
[21]: https://www.youtube.com/watch?v=FmpDIaiMIeA&t=1202s
[22]: http://cs231n.github.io/convolutional-networks/
[23]: https://www.youtube.com/watch?v=LxfUGhug-iQ
[24]: https://pgaleone.eu/images/autoencoders/tf/cifar10_io_l2.png
[25]: https://github.com/emilwallner/Deep-Learning-101
[26]: https://github.com/emilwallner/Deep-Learning-101/blob/master/experiment_0_few_layers.ipynb
[27]: https://github.com/emilwallner/Deep-Learning-101/blob/master/experiment_0_three_layer_sets.ipynb
[28]: https://github.com/tflearn/tflearn/tree/master/examples/images
[29]: https://www.codecademy.com/tracks/python
[30]: https://www.codecademy.com/learn/learn-the-command-line
[31]: https://github.com/tflearn/tflearn/blob/master/examples/basics/linear_regression.py
[32]: https://twitter.com/emilwallner?lang=en
[33]: http://emilwallner.com/
[34]: https://twitter.com/floydhub_
