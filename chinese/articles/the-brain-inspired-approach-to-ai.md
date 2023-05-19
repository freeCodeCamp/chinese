> -  原文地址：[The Brain-Inspired Approach to AI – Explained for Developers](https://www.freecodecamp.org/news/the-brain-inspired-approach-to-ai/)
> -  原文作者：[Edem Gold](https://www.freecodecamp.org/news/author/edemgold/)
> -  译者：
> -  校对者：

![The Brain-Inspired Approach to AI – Explained for Developers](https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-tara-winstead-8386365.jpg)

> "Our intelligence is what makes us human, and AI is an extension of that quality." – Yan LeCun

Since the advent of Neural Networks (also known as artificial neural networks), the AI industry has enjoyed unparalleled success. Neural Networks are the driving force behind modern AI systems, and they are modeled after the human brain.

Modern AI research involves creating and implementing algorithms that aim to mimic the neural processes of the human brain. Their goal is to create systems that learn and act in ways similar to human beings.

In this article, we will attempt to understand the brain-inspired approach to building AI systems.

Here's what we'll cover:

1.  [How we'll approach this](#how-we-ll-approach-this)
2.  [The history of the brain-inspired approach to AI](#the-history-of-the-brain-inspired-approach-to-ai)
3.  [How the human brain works and how it's related to AI systems](#how-the-human-brain-works-and-how-it-s-related-to-ai-systems)
4.  [Core principles behind the brain-inspired approach to AI](#core-principles-behind-the-brain-inspired-approach-to-ai)
5.  [Challenges in building brain-inspired AI systems](#challenges-in-building-brain-inspired-ai-systems)
6.  [Summary](#summary)

## How We'll Approach This

This article will begin by providing background history on how researchers began to model AI to mimic the human brain and end by discussing the challenges currently being faced by researchers in attempting to imitate the human brain. Below is an in-depth description of what to expect from each section.

It is worth noting that while this topic is an inherently broad one, I will try to be as brief and succinct as possible to keep this engaging. I plan to treat sub-topics which have more intricate sub-branches as standalone articles. I'll also leave references at the end of the article.

Here's a brief outline of what we'll cover:

**History of the brain-inspired approach to AI:** Here we'll discuss how scientists Norman Weiner and Warren McCulloch brought about the convergence of neuroscience and computer science. We'll also discuss how Frank Rosenblatt's Perceptron was the first real attempt to mimic human intelligence. And we'll learn how its failure brought about ground-breaking work which would serve as the platform for Neural Networks.

**How the human brain works and how it relates to AI systems:** In this section, we'll dive into the biological basis for the brain-inspired approach to AI. We will discuss the basic structure and functions of the human brain, understand its core building block, the neuron, and how they work together to process information and enable complex actions.

**The Core Principles behind the brain-inspired Approach to AI:** Here we will discuss the fundamental concepts behind the brain-inspired approach to AI. We will explain concepts such as Neural networks, Hierarchical processing, and plasticity work. We'll also learn how the techniques of parallel processing, distributed representations, and recurrent feedback help AI mimicking the brain's functioning.

**Challenges in building AI systems modeled after the human brain:** Here we will talk about the challenges and limitations inherent in attempting to build systems that mimic the human brain. Challenges such as the complexity of the brain, and the lack of a unified theory of cognition, and we'll explore the ways these challenges an limitations are being addressed.

Let's begin!

## The History of the Brain-inspired Approach to AI

The drive to build machines that are capable of intelligent behaviour owes much inspiration to MIT Professor [Norbert Weiner](https://en.wikipedia.org/wiki/Norbert_Wiener). Norbert Weiner was a child prodigy who could read by the age of three. He had broad knowledge of various fields such as mathematics, neurophysiology, medicine, and physics.

Norbert Weiner believed that the main opportunities in science lay in exploring what he termed as _Boundary Regions_. These are areas of study that are not clearly within a certain discipline but rather a mixture of disciplines, like the study of medicine and engineering coming together to create the field of Medical Engineering. He was quoted saying:

> "If the difficulty of a physiological problem is mathematical in nature, ten physiologists ignorant of mathematics will get precisely as far as one physiologist ignorant of mathematics."

In 1934, Weiner and a couple of other academics gathered monthly to discuss papers involving boundary region science.

![https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fc008a7-d0e0-4d6f-83ed-ab2a320263e0_2048x1251](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fc008a7-d0e0-4d6f-83ed-ab2a320263e0_2048x1251.jpeg)

_Norman Weiner_

He described it as "a perfect catharsis for half-baked ideas, insufficient self-criticism, exaggerated self-confidence and pomposity."

From these sessions and from his own personal research, Weiner learned about new research on biological nervous systems as well as about pioneering work on electronic computers.

His natural inclination was to blend these two fields, so a relationship between neuroscience and computer science was formed. This relationship became the cornerstone for the creation of artificial intelligence as we know it.

After World War II, Wiener began forming theories about intelligence in both humans and machines and this new field was named [_Cybernetics_](https://en.wikipedia.org/wiki/Cybernetics). Wiener’s foray into Cybernetics was successful in getting scientists talking about the possibility of biology fusing with engineering.

One of these scientists was a neurophysiologist named [Warren McCulloch](https://en.wikipedia.org/wiki/Warren_Sturgis_McCulloch). He dropped out of Haverford University and went to Yale to study philosophy and psychology. While attending a scientific conference in New York, he came discovered papers written by colleagues on biological feedback mechanisms.

The following year, in collaboration with his brilliant 18-year-old protégé named Walter Pitts, McCulloch proposed a theory about how the brain works. This theory would help foster the widespread perception that computers and brains function essentially in the same way.

They based their conclusions on research by McCulloch on the possibility of neurons processing Binary Numbers (computers communicate via binary numbers). This theory became the foundation for what became the first model of an artificial neural network, which was named the McCulloch-Pitts Neuron (MCP).

The MCP served as the foundation for the creation of the first-ever neural network, known as [the perceptron](https://edemgold.substack.com/p/the-history-of-ai). The Perceptron was created by Psychologist [Frank Rosenblatt](https://en.wikipedia.org/wiki/Frank_Rosenblatt). Inspired by the synapses in the brain, he decided that since the human brain could process and classify information through synapses (communication between neurons) then perhaps a digital computer could do the same via a neural network.

The Perceptron essentially scaled the MCP neuron from one artificial neuron into a network of neurons. But unfortunately, the perceptron had some technical challenges which limited its practical application. The most notable of these limitations was its inability to perform complex operations (like classifying between more than one item – for example, the perceptron could not perform classification between a cat, a dog, and a bird).

In 1969, a book published by [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky) and [Seymour Papert](https://en.wikipedia.org/wiki/Seymour_Papert) titled _Perceptron_ lay out in detail the flaws of the Perceptron. Because of this, research on Artificial Neural Networks stagnated until the proposal of Back Propagation by [Paul Werbos](https://en.wikipedia.org/wiki/Paul_Werbos).

Back Propagation hopes to solve the issue of classifying complex data that hindered the industrial application of Neural Networks at the time. It was inspired by synaptic plasticity – the way the brain modifies the strengths of connections between neurons and as such improves performance.

Back Propagation was designed to mimic the process in the brain that strengthens connections between neurons via a process called weight adjustment.

Despite the early proposal by Paul Werbos, the concept of back propagation only gained widespread adoption when researchers such as [David Rumelheart](https://en.wikipedia.org/wiki/David_Rumelhart), [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton), and [Ronald Williams](https://en.wikipedia.org/wiki/Ronald_J._Williams) published papers that demonstrated its effectiveness for training neural networks.

The implementation of back propagation led to the creation of Deep Learning which powers most of the AI systems available in the world.

> "People are smarter than today's computers because the brain employs a basic computational architecture that is more suited to deal with a central aspect of the natural information processing tasks that people are so good at." – Parallel Distributed Processing

## How the Human Brain Works and How it's Related to AI Systems

![https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8360703d-bbe7-4637-ba4a-5e898d5e3110_602x376](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8360703d-bbe7-4637-ba4a-5e898d5e3110_602x376.png)

Illustration of how the brain's cells process information

We have discussed how researchers began to model AI to mimic the human brain. Now let's look at how the brain works and define the relationship between the brain and AI systems.

### How the brain works – a simplified description

The human brain essentially processes thoughts via the use of neurons. A neuron is made up of 3 core sections: the dendrite, axon, and the soma.

The dendrite is responsible for receiving signals from other neurons. The soma processes information received from the dendrite, and the axon is responsible for transferring the processed information to the next dendrite in the sequence.

To grasp how the brain processes thought, imagine you see a car coming towards you. Your eyes immediately send electrical signals to your brain through the optical nerve. Then the brain forms a chain of neurons to make sense of the incoming signal.

So the first neuron in the chain collects the signal through its **dendrites** and sends it to the **soma** to process the signal. After the soma finishes with its task, it sends the signal to the **axon** which then sends it to the dendrite of the next neuron in the chain.

The connection between axons and dendrites when passing on information is called a Synapse. So the entire process continues until the brain finds a **Sapiotemporal Synaptic Input** (that's scientific lingo for the brain continues processing until it finds an optimal response to the signal sent to it). Then it sends signals to the necessary effectors, for example your legs, and then the brain sends a signal to your legs to run away from the oncoming car.

### The relationship between the brain and AI systems

The relationship between the brain and AI is largely mutually beneficial. The brain is the main source of inspiration behind the design of AI systems and advances in AI, leading to a better understanding of the brain and how it works.

There is a reciprocal exchange of knowledge and ideas when it comes to the brain and AI. There are several examples that attest to the positively symbiotic nature of this relationship:

-   **Neural Networks:** Arguably the most significant impact made by the human brain to the field of Artificial Intelligence is the creation of Neural Networks. In essence, Neural Networks are computational models that mimic the function and structure of biological neurons. The architecture of neural networks and their learning algorithms are largely inspired by the way neurons in the brain interact and adapt.
-   **Brain Simulations:** AI systems have been used to [simulate](https://www.frontiersin.org/articles/10.3389/fncom.2020.00016/full) the human brain and study its interactions with the physical world. For example, researchers have Machine Learning techniques to simulate the activity of biological neurons involved in visual processing. The result has provided insight into how the brain handles visual information.
-   **Insights into the brain:** Researchers have begun using Machine Learning Algorithms to analyse and gain insights from brain data, and fMRI scans. These insights serve to identify patterns and relationships which would otherwise have remained hidden. These insights can help us understand internal cognitive functions, memory, and decision-making. They also help in the treatment of brain-native illnesses such as Alzheimer's.

## Core Principles Behind the Brain-inspired Approach to AI

Here we will discuss several concepts which help AI imitate the way the human brain functions. These concepts have helped AI researchers create more powerful and intelligent systems which are capable of performing complex tasks.

### Neural Networks

As discussed earlier, neural networks have arguably derived the most significant inspiration from the human brain and have made the biggest impact on the field of Artificial Intelligence.

In essence, Neural Networks are computational models that mimic the function and structure of biological neurons. The networks are made up of various layers of interconnected nodes, called artificial neurons, which aid in the processing and transmitting of information. This is similar to what is done by dendrites, somas, and axons in biological neural networks.

Neural Networks are architected to learn from past experiences the same way the brain does.

### Distributed Representations

Distributed representations are simply a way of encoding concepts or ideas in a neural network as a pattern along several nodes in the network in order to form a pattern.

For example, the concept of smoking could be represented (encoded) using a certain set of nodes in a neural network. So if a network comes accross an image of a person smoking, it then uses those selected nodes to make sense of the image (it's a lot more complex than that but for the sake of simplicity we'll leave it at that).

This technique helps AI systems remember complex concepts or relationships between concepts the same way the brain recognizes and remembers complex stimuli.

### Recurrent Feedback

This is a technique used in training AI models where the output of a neural network is returned as input to allow the network to integrate its output as extra data input in training. This is similar to how the brain makes use of feedback loops in order to adjust its model based on previous experiences.

### Parallel Processing

Parallel processing involves breaking up complex computational tasks into smaller bits in an effort to process the smaller bits on another processor in an attempt to improve speed. This approach enables AI systems to process more input data faster, similar to how the brain is able to perform different tasks at the same time (multi-tasking).

### Attention Mechanisms

This is a technique used which enables AI models to focus on specific parts of input data. It is commonly employed in sectors such as Natural Language Processing which contains complex and cumbersome data.

It is inspired by the brain's ability to attend to only specific parts of a largely distracting environment – like your ability to tune into and interact in one conversation out of a cacophony of conversations.

### Reinforcement Learning

Reinforcement Learning is a technique used to train AI systems. It was inspired by how human beings learn skills through trial and error. It involves an AI agent receiving rewards or punishments based on its actions. This enables the agent to learn from its mistakes and be more efficient in its future actions (this technique is usually used in the creation of games).

### Unsupervised Learning

The brain is constantly receiving new streams of data in the form of sounds, visual content, sensory feelings to the skin, and so on. It has to make sense of it all and attempt to form a coherent and logical understanding of how all these seemingly disparate events affect its physical state.

Take this analogy as an example: you feel water drop on your skin, you hear the sound of water droplets dropping quickly on rooftops, you feel your clothes getting heavy and in that instant, you know rain is falling.

You then search your memory bank to ascertain if you carried an umbrella. If you did, you are fine, otherwise you check to see the distance from your current location to your home. If it is close, you are fine, but otherwise you try to gauge how intense the rain is going to become. If it is a light drizzle you can attempt to continue the journey back to your home, but if it is becoming a heavier shower, then you have to find shelter.

The ability to make sense of seemingly disparate data points (water, sound, feeling, distance) is implemented in Artificial intelligence in the form of a technique called Unsupervised Learning. It is an AI training technique where AI systems are taught to make sense of raw, unstructured data without explicit labelling ( no one tells you rain is falling when it is falling, do they?).

## Challenges in Building Brain-Inspired AI Systems

So far, you've learned how researchers used the brain as inspiration for AI systems. We've also discussed how the brain relates to AI and the core principles behind brain-inspired AI.

In this section, we are going to talk about some of the technical and conceptual challenges inherent in building AI systems modeled after the human brain.

### Complexity

This is a pretty daunting challenge. The brain-inspired approach to AI is based on modeling the brain and building AI systems after that model. But the human brain is an inherently complex system with 100 billion neurons and approximately 600 trillion synaptic connections (each neuron has, on average, 10,000 synaptic connections with other neurons). These synapses are constantly interacting in dynamic and unpredictable ways.

Building AI systems that are aimed to mimic, and perhaps exceed, that complexity is in itself a challenge and requires equally complex statistical models.

### Data Requirements for Training Large Models

Open AI's GPT 4, which is, at the moment, the cutting edge of text-based AI models, requires 47 GigaBytes of data. In comparison, its predecessor GPT3 was trained on 17 Gigabytes of data, which is approximately 3 orders of magnitude lower. Imagine how much GPT 5 will be trained on.

To get acceptable results, brain-inspired AI systems require vast amounts of data for tasks, especially auditory and visual tasks. This places a lot of emphasis on the creation of data collection pipelines. For instance, Tesla has 780 million miles of driving data and its data collection pipeline adds another million every 10 hours.

### Energy Efficiency

Building brain-inspired AI systems that emulate the brain's energy efficiency is a huge challenge. The human brain consumes approximately 20 watts of power. In comparison, Tesla's Autopilot, on specialized chips, consumes about 2,500 watts per second and [it takes around](https://ts2.space/en/exploring-the-environmental-footprint-of-gpt-4-energy-consumption-and-sustainability/#:~:text=The%20paper%20found%20that%20the,hours%20(MWh)%20of%20energy.) 7.5-megawatt hours (MWh) to train an AI model the size of ChatGPT.

### The Explainability Problem

Developing brain-inspired AI systems that can be trusted by users is crucial to the growth and adoption of AI – but therein lies the problem.

The brain, which AI systems are meant to be modeled after, is essentially a black box. The inner workings of the brain are not easy to understand, partly because of a lack of information surrounding how the brain processes thought.

There is no lack of research on the biological structure of the human brain, but there is a certain lack of empirical information on the functional qualities of the brain – that is, how thought is formed, how deja vu occurs, and so on. This leads to problems in the building of brain-inspired AI systems.

### The Interdisciplinary Requirements

The act of building brain-inspired AI systems requires the knowledge of experts in different fields, like Neuroscience, Computer Science, Engineering, Philosophy, and Psychology.

But this presents challenges, both logistical and foundational: getting experts from different fields is financially expensive. Also, there's the problem of knowledge conflict – it can be really difficult to get an engineer to care about the psychological effects of what they're building, not to mention of the problem of colliding egos.

## Summary

While the brain-inspired approach seems like the obvious route to building AI systems, it has its challenges. But we can look to the future with the hope that efforts are being made to solve these problems.

If you enjoyed this article, consider subscribing to my [newsletter](https://www.freecodecamp.org/news/p/863dd550-5476-4d67-b6cd-93c316dd804a/edemgold.substack.com) to get more articles like this.

## References

-   [freeCode Camp Machine Learning certification](https://www.freecodecamp.org/learn/machine-learning-with-python)
-   [Tesla's Vehicle Safety Report](https://www.tesla.com/VehicleSafetyReport#:~:text=Because%20every%20Tesla%20is%20connected,the%20different%20ways%20accidents%20happen.)
-   [Basic Neural Units of the Brain: Neurons, Synapses and Action Potential](https://arxiv.org/abs/1906.01703)
-   [When Brain-inspired AI meets AGI](https://arxiv.org/pdf/2303.15935.pdf)
-   [Perceptron: The artificial Neuron (An Essential Upgrade To The McCulloch-Pitts Neuron)](https://towardsdatascience.com/perceptron-the-artificial-neuron-4d8c70d5cc8d)
-   [McCulloch-Pitts Neuron — Mankind’s First Mathematical Model Of A Biological Neuron](https://medium.com/towards-data-science/mcculloch-pitts-model-5fdf65ac5dd1)
-   [BackPropagation through Time: What it does and How to do it](https://axon.cs.byu.edu/Dan/678/papers/Recurrent/Werbos.pdf)
-   [The History of AI](https://edemgold.substack.com/p/the-history-of-ai)
-   [BrainOS: A Novel Artificial Brain-Alike Automatic Machine Learning Framework](https://www.frontiersin.org/articles/10.3389/fncom.2020.00016/full)