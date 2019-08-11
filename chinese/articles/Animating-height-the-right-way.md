> * 原文地址：[Animating height - the right way](https://www.freecodecamp.org/news/animating-height-the-right-way/?fbclid=IwAR1Py8cbWrNbwMyZXSvWFVTNFGxqCnFzMP0aRGKg2qbEdPKhgzUs3s19YQc)
> * 原文作者：Fredrik Strand Oseberg
> * 译者：
> * 校对者：

Let’s be honest. Animating height can be a huge pain. For me, it’s been a constant battle between wanting to have nice animations, and not being willing to pay the enormous performance cost associated with animating height. Now — that’s all done.

It all started when I was working on my side project — a resume builder where you can share links to your resume that are only active for a certain period of time.

I wanted to have a nice animation for all of the sections in the resume, and I built a react component that performed the animation. However, I soon discovered that this component absolutely destroyed performance on lower end devices and in some browsers. Hell, even my high end Macbook pro was struggling to keep smooth fps on the animation.

The reason for this is of course that animating the height property in CSS causes the browser to perform expensive layout and paint operations on every frame. There’s a fantastic section on rendering performance over at Google Web Fundamentals, I suggest you check it out.

In short though — whenever you change a geometric property in css the browser has to adjust and perform calculations on how that change impacts the layout on the page, then it will have to re-render the page in a step called paint.

Why should we even care about performance?
It can be tempting to ignore performance. It’s not wise, but it can be tempting. From a business perspective, you save a lot of time that can otherwise be spent building new features.

However, performance can directly influence your bottom line. What good does it do to build a lot of features, if no-one is using them? Multiple studies done by Amazon and Google show that this is true. Performance is directly linked with application usage and bottom line revenue.

The other side of performance is equally important. We, as developers, have a responsibility to make sure that the web stays accessible for everyone — we do this because it is right. Because the internet is not for just you and me, it’s for everyone.

As evidenced from Addy Osmani’s excellent article, low-end devices take significantly longer to parse and execute javascript compared to their higher end counterparts.

To avoid creating a class divide on the internet, we need to be relentless in our pursuit of performance. For me this meant being creative, and finding another means of achieving my animations without sacrificing performance.

Animate height the right way
If you don’t care about the how, and just want to see a live example, please see the below links for demo site, examples and an npm package for react:

Demo site utilising the technique
Live example in vanilla JS
Simple example in react
NPM package and documentation for react
The question I asked myself was how I could avoid the performance cost that is incurred by animating height. Simple answer — you can’t.

Instead I needed to get creative with other CSS properties that does not incur those costs. Namely transforms.

Since transforms have no way of influencing height. We can not simply apply a simple property to an element and be done. We need to be more clever than that.

The way we will use to achieve performant animation of height is actually by faking it with transform: scaleY. The animation is done in several steps:

Here’s an example:

<div class=”ah-outercontainer”>  
<div class=”ah-background” style=”${this.getBackgroundStyle()}”></div>
<div class=”ah-innercontainer”>${this.markup}</div></div>`
First we need to get the initial height of the element container. Then we set the outer container height to be explicit to this height. This will cause any changing content to overflow the container instead expanding its parent.
Inside the outer container we have another div that is absolutely positioned to span the entire width and height of the div. This is our background, and will be scaled once we toggle the transformation.
We also have an inner container. The inner container contains the markup and will change its height according to the content it contains.
Here’s the trick:  Once we toggle an event that changes the markup we take the new height of the inner container and calculate the amount that the background needs to scale in order to accommodate the new height. Then we set the background to scaleY by the new amount.
In vanilla javascript, this means some trickery with dual renders. Once to get the height of the inner container to calculate the scale. Then again to apply the scale to the background div so that it will perform the transformation.
You can see a live example here in vanilla JS.

At this point, our background has been properly scaled to create the illusion of height. But what about the surrounding content? Since we are no longer adjusting layout the surrounding content is not afflicted by the changes.

To make the surrounding content move. We need to adjust the content using transformY. The trick is to take the amount that the content expanded, and use this to move the surrounding content with transforms. See the example above.

Animating height in React
As I previously mentioned, I developed this method while working on a personal project in React. This demo site uses this method exclusively in all of its “height animation”. Check out the demo site here.

After implementing this with success, I took the time to add this component and some supporting components to a small animation library I have made in React. If you are interested, you can find the relevant information here:

view the library on NPM here
Documentation can be found here.
The most important components in this library is AnimateHeight and AnimateHeightContainer. Let’s examine them:

// Inside a React component 
// handleAnimateHeight is called inside AnimateHeight and is passed the 
// transitionAmount and optionally selectedId if you pass that as a prop to // AnimateHeight. This means that you can use the transitionAmount to
// transition your surrounding 

content.const handleAnimateHeight = (transitionAmount, selectedId) => {     this.setState({ transitionAmount, selectedId });
};

// Takes a style prop, a shouldchange prop and a callback. shouldChange 
// determines when the AnimateHeight component should trigger, which is 
// whenever the prop changes. The same prop is used to control which 
// content to show.

<AnimateHeight 
  style={{ backgroundColor: "#f2f2f2" }} 
  shouldChange={this.state.open}   
  callback={this.handleAnimateHeight}
>
  {this.state.open && <Component />}
  {!this.state.open && <AnotherComponent />}
</AnimateHeight>
Example with moving surrounding content
The above examples shows you how to use AnimateHeight and manually trigger your surrounding content to adjust. But what if you have a lot of content and don’t want to do this process manually? In that case you can use AnimateHeight in conjunction with AnimateHeightContainer.

To use AnimateHeightContainer you need to provide all of the top level children with a prop called animateHeightId, which also needs to be passed to your AnimateHeight components:

// Inside React Component
const handleAnimateHeight = (transitionAmount, selectedId) => {     
this.setState({ transitionAmount, selectedId });
};

// AnimateHeight receives the transitionAmount and the active id of the AnimateHeight that fired. 
<AnimateHeightContainer
  transitionAmount={this.state.transitionAmount}
  selectedId={this.state.selectedId}
>
  <div animateHeightId={1}}>
    <AnimateHeight 
      style={{ backgroundColor: "#f2f2f2" }}
      shouldChange={this.state.open}
      callback={this.handleAnimateHeight}
      animateHeightId={1}
    > 
    {this.state.open && <Component />
    {!this.state.open && <AnotherComponent />}  
    <AnimateHeight />
          
    // When AnimateHeight is triggered by state change
    // this content will move because the animateHeightId
    // is greater than the id of the AnimateHeight component above
    <div animateHeightId={2}>I will move</div>
    <div animateHeightId={3}>I will also move</div>
<AnimateHeightContainer />
As you can see from this example AnimateHeight receives the information that it needs to adjust the content when the AnimateHeight component is triggered by changing state.

Once this happens the AnimateHeight component will trigger the callback and set the properties in state. Inside AnimateHeight it looks something like this (simplified):

// Inside AnimateHeight
componentDidUpdate() {
  if (update) {
    doUpdate() 
    callback(transitionAmount, this.props.animateHeightId)
   } 
}

// Equivalent to calling this function: 
const handleAnimateHeight = (transitionAmount, selectedId) => {     
this.setState({ transitionAmount, selectedId });
};

handleAnimateHeight(transitionAmount, this.props.animateHeight)
Now you the amount that the content transitioned in pixels, and the id of the AnimateHeight component that fired. Once you pass these values to the AnimateHeightContainer it will take them and transition the other components within itself, provided you set up incrementing animateHeightIds on the top level children.

More advanced examples:

Moving surrounding content with AnimateHeightContainer
Accordion example
NOTE: If you are using this method to animate height and moving surrounding content, you need to add the transition amount to the height of your page.

Conclusion
You may have noticed in this article that we’re not actually animating height — and calling it that is wrong. You are of course, absolutely right. However, I firmly believe that what we call it does not matter. What matters is that we achieve the desired effect with the lowest possible cost to performance.

While I think I found a way that is better than animating the height property directly, I make no claims to have invented or otherwise thought of something that hasn’t been discovered before. Nor do I judge. Perhaps animating height works for you in your scenario — No problem.

All I want is to enable and simplify effects that we all need to do, but sometimes incur costs that are difficult to bear. At the very least, I want to spark a discussion that is worth having. How can we improve the internet for everyone?
