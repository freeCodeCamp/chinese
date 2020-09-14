> * 原文地址：[How to Build a Simple Pokémon Web App with React Hooks and the Context API 去吧皮卡丘！用 React Hooks 和 Context API 创建这款小游戏](https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/)
> * 原文作者：TK
> * 译者：
> * 校对者：

![How to Build a Simple Pokémon Web App with React Hooks and the Context API](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/ash.gif)

After seven years of full stack development using Ruby, Python, and vanilla JavaScript, these days I mostly work with JavaScript, Typescript, React, and Redux.

The JavaScript community is great and moves really fast. Tons of things are created "overnight", usually figuratively, but sometimes literally. All this makes it is really difficult to keep up to date.

I always feel like I'm late to the JavaScript party. And I want to be there, even though I don't really like parties.

Just one year of working with React and Redux and I felt like I needed to learn new things like Hooks and the Context API to manage state. After reading some articles about it I wanted to try these concepts, so I created a simple project as a laboratory to experiment with those things.

Since I was a little boy, I've been passionate about Pokémon. It was always fun playing the games on the Game Boy and conquering all the Leagues. Now as a developer, I want to play around with the  [Pokémon API][1].

I decided to build a simple web page where I could share data among different parts of the page. The page would have three main sections:

-   A box with a list of all existing pokémon
-   A box with a list of all captured pokémon
-   A box with input to add new pokémon to the list

And each box would have the following behavior or actions:

-   For each pokémon in the first box, I can capture them and send to the second box
-   For each pokémon in the second box, I can release them and send to the first box
-   As a game god, I'm able to create pokémon by filling in the input and sending them to the first box

So all the features I wanted to implement were clear – lists and actions.

## Listing Pokémon

The basic feature I wanted to build first was listing pokémon. So for an array of objects, I wanted to list and show the  `name`  attribute of each object.

I started with the first box: the existing pokémon.

At first I thought I don't need the Pokémon API – I could just mock the list and see if it works. With  `useState`, I can declare my component state and use it.

We define it with a default value of a mock pokémon list, just to test it:

```javascript
const [pokemons] = useState([
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' }
]);

```

Here we have a list of three pokémon objects. The  `useState`  hook provides a pair of items: the current state and a function to let you update this created state.

Now with the pokémon's state, we can map it and render the name of each one.

```javascript
{pokemons.map((pokemon) => <p>{pokemon.name}</p>)}

```

It is just a map returning each pokémon's name in a paragraph tag.

This is the whole component implemented:

```javascript
import React, { useState } from 'react';

const PokemonsList = () => {
  const [pokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  )
}

```

Just a little tweak here:

-   I added the  `key`  in a combination of the pokémon's  `id`  and  `name`
-   And I also rendered a paragraph for the  `id`  attribute (I was just testing it. But we will remove it later.)

Great! Now we have the first list up and running.

I want to make this same implementation but now for the captured pokémon. But for the captured pokémon, I first want to create an empty list because when the "game" starts, I won't have any captured pokémon, right? Right!

```javascript
const [pokemons] = useState([]);

```

That's it, really simple!

The whole component looks similar to the other:

```javascript
import React, { useState } from 'react';
const CapturedPokemons = () => {
  const [pokemons] = useState([]);
  return (
    <div className="pokedex">
      <h2>Captured Pokemons</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>p<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  )
}

```

Here we use  `map`, but as the array is empty, it doesn't render anything.

Now that I have the two main components, I can use them together in the  `App`  component:

```javascript
import React from 'react';
import './App.css';
import PokemonsList from './PokemonsList';
import Pokedex from './Pokedex';
const App = () => (
  <div className="App">
    <PokemonsList />
    <Pokedex />
  </div>
);

```

## Capturing and Releasing

This is the second part of our app where we can capture and release pokémon. So let's go over the expected behavior.

For each pokémon in the list of available pokémon, I want to enable an action to capture them. The capture action will remove them from the list where they were and add them to the list of captured pokémon.

The release action will have similar behavior. But instead of moving from the available list to the captured list, it will be the reverse. We will move them from the captured list to the available list.

So both boxes need to share data to be able to add pokémon to the other list. How do we do this as they are different components in the app? Let's talk about the React Context API.

The Context API was designed to make global data for a defined tree of React components. As the data is global, we can share it among components in this defined tree. So let's use it to share our simple Pokemon data between the two boxes.

Mental Note: "Context is primarily used when some data needs to be accessible by many components at different nesting levels." - React Docs.

Using the API, we simply create a new context like this:

```javascript
import { createContext } from 'react';

```

Now, with the  `PokemonContext`, we can use its provider. It will work as a component wrapper of a tree of components. It provides global data to these components and enables them to subscribe to any changes related to this context. It looks like this:

```javascript
<PokemonContext.Provider value={/* some value */}>

```

The  `value`  prop is just a value that this context provides the wrapped components. What should we provide to the available and the captured lists?

-   `pokemons`: to list in the available list
-   `capturedPokemons`: to list in the captured list
-   `setPokemons`: to be able to update the available list
-   `setCapturedPokemons`: to be able to update the captured list

As I mentioned before in the  `useState`  part, this hook always provides a pair: the state and a function to update this state. This function handles and updates the context state. In other words, they are the  `setPokemons`  and  `setCapturedPokemons`. How?

```javascript
const [pokemons, setPokemons] = useState([
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' }
]);

```

Now we have the  `setPokemons`.

```javascript
const [capturedPokemons, setCapturedPokemons] = useState([]);

```

And now we also have the  `setCapturedPokemons`.

With all these values in hand, we can now pass them to the provider's  `value`  prop.

```javascript
import React, { createContext, useState } from 'react';
export const PokemonContext = createContext();
export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  };

```

I created a  `PokemonProvider`  to wrap all this data and the APIs to create the context and return the context provider with the defined value.

But how do we provide all this data and APIs to the component? We need to do two main things:

-   Wrap the components into this context provider
-   Use the context in each component

Let's wrap them first:

```javascript
const App = () => (
  <PokemonProvider>
    <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

```

And we use the context by using the  `useContext`  and passing the created  `PokemonContext`. Like this:

```javascript
import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

```

We want to be able to catch the available pokémon, so it would be useful to have the  `setCapturedPokemons`  function API update the captured pokémon.

As each pokémon is captured, we need to remove it from the available list.  `setPokemons`  is also needed here. And to update each list, we need the current data. So basically we need everything from the context provider.

We need to build a button with an action to capture the pokémon:

-   `<button>`  tag with an  `onClick`  calling the  `capture`  function and passing the pokémon

```javascript
<button onClick={capture(pokemon)}>+</button>

```

-   The  `capture`  function will update the  `pokemons`  and the  `capturedPokemons`  lists

```javascript
const capture = (pokemon) => (event) => {
  // update captured pokemons list
  // update available pokemons list
};

```

To update the  `capturedPokemons`, we can just call the  `setCapturedPokemons`  function with the current  `capturedPokemons`  and the pokémon to be captured.

```javascript
setCapturedPokemons([...capturedPokemons, pokemon]);

```

And to update the  `pokemons`  list, just filter the pokémon that will be captured.

```javascript
setPokemons(removePokemonFromList(pokemon));

```

`removePokemonFromList`  is just a simple function to filter the pokémon by removing the captured pokémon.

```javascript
const removePokemonFromList = (removedPokemon) =>
  pokemons.filter((pokemon) => pokemon !== removedPokemon)

```

How does the component look now?

```javascript
import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
export const PokemonsList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext);
  const removePokemonFromList = (removedPokemon) =>
    pokemons.filter(pokemon => pokemon !== removedPokemon);
  const capture = (pokemon) => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removePokemonFromList(pokemon));
  };
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>button onClick<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">capture</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>button<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  );
};

```

It will look very similar to the captured pokémon component. Instead of  `capture`, it will be a  `release`  function:

```javascript
import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const CapturedPokemons = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokemonContext);
  const releasePokemon = (releasedPokemon) =>
    capturedPokemons.filter((pokemon) => pokemon !== releasedPokemon);
  const release = (pokemon) => () => {
    setCapturedPokemons(releasePokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  };
  return (
    <div className="captured-pokemons">
      <h2>CapturedPokemons</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>capturedPokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>button onClick<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">release</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">-</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>button<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  );
};

```

## Reducing complexity

Now we use the  `useState`  hook, the Context API, and the context provider  `useContext`. And more importantly, we can share data between pokémon boxes.

Another way to manage the state is by using  `useReducer`  as an alternative to  `useState`.

The reducer lifecycle works like this:  `useReducer`  provides a  `dispatch`  function. With this function, we can dispatch an  `action`  inside a component. The  `reducer`  receives the action and the state. It understands the type of action, handles the data, and return a new state. Now, the new state can be used in the component.

As an exercise and to have a better understanding of this hook, I tried to replace  `useState`  with it.

`useState`  was inside the  `PokemonProvider`. We can redefine the initial state for the available and the captured pokémon in this data structure:

```javascript
const defaultState = {
  pokemons: [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ],
  capturedPokemons: []
};

```

And pass this value to  `useReducer`:

```javascript
const [state, dispatch] = useReducer(pokemonReducer, defaultState);

```

`useReducer`  receives two parameters: the reducer and the initial state. Let's build the  `pokemonReducer`  now.

The reducer receives the current state and the action that was dispatched.

```javascript
const pokemonReducer = (state, action) => // returns the new state based on the action type

```

Here we get the action type and return a new state. The action is an object. It looks like this:

```javascript
{ type: 'AN_ACTION_TYPE' }

```

But could also be bigger:

```javascript
{
  type: 'AN_ACTION_TYPE',
  pokemon: {
    name: 'Pikachu'
  }
}

```

In this case, we'll pass a pokémon to the action object. Let's pause for a minute and think about what we want to do inside the reducer.

Here, we usually update data and handle actions. Actions are dispatched, so actions are behavior. And the behaviors from our app are  _capture_  and  _release_! These are the actions we need to handle here.

This is what our reducer will look like:

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'CAPTURE':
      // handle capture and return new state
    case 'RELEASE':
      // handle release and return new state
    default:
      return state;
  }
};

```

If our action type is  `CAPTURE`, we handle it in one way. If our action type is  `RELEASE`, we handle it another way. If the action type doesn't match any of these types, just return the current state.

When we capture the pokémon, we need to update both lists: remove the pokémon from the available list and add it to the captured list. This state is what we need to return from the reducer.

```javascript
const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)

```

The  `capturePokemon`  function just returns the updated lists. The  `getPokemonsList`  removes the captured pokémon from the available list.

And we use this new function in the reducer:

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'CAPTURE':
      return capturePokemon(action.pokemon, state);
    case 'RELEASE':
      // handle release and return new state
    default:
      return state;
  }
};

```

Now the  `release`  function!

```javascript
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

```

The  `getCapturedPokemons`  remove the released pokémon from the captured list. The  `releasePokemon`  function returns the updated lists.

Our reducer looks like this now:

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'CAPTURE':
      return capturePokemon(action.pokemon, state);
    case 'RELEASE':
      return releasePokemon(action.pokemon, state);
    default:
      return state;
  }
};

```

Just one minor refactor: action types! These are strings and we can extract them into a constant and provide for the dispatcher.

```javascript
export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';

```

And the reducer:

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    default:
      return state;
  }
};

```

The entire reducer file looks like this:

```javascript
export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)
const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});
const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)
const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon]
});

```

As the reducer is now implemented, we can import it into our provider and use it in the  `useReducer`  hook.

```javascript
const [state, dispatch] = useReducer(pokemonReducer, defaultState);

```

As we are inside the  `PokemonProvider`, we want to provide some value to the consuming components: the capture and release actions.

These functions just need to dispatch the correct action type and pass the pokémon to the reducer.

-   The  `capture`  function: it receives the pokémon and returns a new function that dispatches an action with the type  `CAPTURE`  and the captured pokémon.

```javascript
const capture = (pokemon) => () => {
  dispatch({ type: CAPTURE, pokemon });
};

```

-   The  `release`  function: it receives the pokémon and returns a new function that dispatches an action with the type  `RELEASE`  and the released pokémon.

```javascript
const release = (pokemon) => () => {
  dispatch({ type: RELEASE, pokemon });
};

```

Now with the state and the actions implemented, we can provide these values to the consuming components. Just update the provider value prop.

```javascript
const { pokemons, capturedPokemons } = state;
const providerValue = {
  pokemons,
  capturedPokemons,
  release,
  capture
};

```

Great! Now back to the component. Let's use these new actions. All the capture and release logics are encapsulated in our provider and reducer. Our component is pretty clean now. The  `useContext`  will look like this:

```javascript
const { pokemons, capture } = useContext(PokemonContext);

```

And the whole component:

```javascript
import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const PokemonsList = () => {
  const { pokemons, capture } = useContext(PokemonContext);
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>button onClick<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">capture</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>button<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  )
};

```

For the captured pokémon component, it will look the very similar to the  `useContext`:

```javascript
const { capturedPokemons, release } = useContext(PokemonContext);

```

And the whole component:

```javascript
import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);
  return (
    <div className="pokedex">
      <h2>Pokedex</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>capturedPokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>id<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">-</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>button onClick<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">release</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">-</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>button<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  )
};

```

No logic. Just UI. Very clean.

## Pokémon God – The Creator

Now that we have the communication between the two lists, I want to build a third box. This will how we create new pokémon. But it is just a simple input and submit button.

When we add a pokémon's name into the input and press the button, it will dispatch an action to add this pokémon to the available list.

As we need to access the available list to update it, we need to share the state. So our component will be wrapped by our  `PokemonProvider`  together with the other components.

```javascript
const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
    <PokemonForm />
  </PokemonProvider>
);

```

Let's build the  `PokemonForm`  component now. The form is pretty straightforward:

```javascript
<form onSubmit={handleFormSubmit}>
  <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
  <input type="submit" value="Add" />
</form>

```

We have a form, an input, and a button. To sum up, we also have a function to handle the form submit and another function to handle the input on change.

The  `handleNameOnChange`  will be called every time the user types or removes a character. I wanted to build a local state, a representation of the pokemon name. With this state, we can use it to dispatch when submitting the form.

As we want to try hooks, we will use  `useState`  to handle this local state.

```javascript
const [pokemonName, setPokemonName] = useState();

```

We use the  `setPokemonName`  to update the  `pokemonName`  every time the user interacts with the input.

And the  `handleFormSubmit`  is a function to dispatch the new pokémon to be added to the available list.

```javascript
const handleFormSubmit = (e) => {
  e.preventDefault();
  addPokemon({
    id: generateID(),
    name: pokemonName
  });
};

```

`addPokemon`  is the API we will build later. It receives the pokémon's id and name. The name is the local state we defined,  `pokemonName`.

`generateID`  is just a simple function I built to generate a random number. It looks like this:

```javascript
export const generateID = () => {
  const a = Math
    .random()
    .toString(36)
    .substring(2, 15)
  const b = Math
    .random()
    .toString(36)
    .substring(2, 15)

```

`addPokemon`  will be provided by the context API we build. That way, this function can receive the new pokémon and add to the available list. It looks like this:

```javascript
const addPokemon = (pokemon) => {
  dispatch({ type: ADD_POKEMON, pokemon });
};

```

It will dispatch this action type  `ADD_POKEMON`  and also pass the pokémon.

In our reducer, we add the case for the  `ADD_POKEMON`  and handle the state to add the new pokémon to state.

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    default:
      return state;
  }
};

```

And the  `addPokemon`  function will be:

```javascript
const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons
});

```

Another approach is to destructure the state and change only the pokémon's attribute, like this:

```javascript
const addPokemon = (pokemon, state) => ({
  ...state,
  pokemons: [...state.pokemons, pokemon],
});

```

Back to our component, we just need to make sure the  `useContext`  provides the  `addPokemon`  dispatch API based on the  `PokemonContext`:

```javascript
const { addPokemon } = useContext(PokemonContext);

```

And the whole component looks like this:

```javascript
import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { generateID } from './utils';
const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon } = useContext(PokemonContext);
  const handleNameOnChange = (e) => setPokemonName(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

```

Now we have the available pokémon list, the captured pokémon list, and the third box to create new pokémon.

## Pokémon Effects

Now that we have our app almost complete, we can replace the mocked pokémon list with a list of pokémon from the PokéAPI.

So, inside the function component, we can't do any side effects like logging or subscriptions. This is why the  `useEffect`  hook exists. With this hook, we can fetch pokémon (a side-effect), and add to the list.

Fetching from the PokéAPI looks like this:

```javascript
const url = "https://pokeapi.co/api/v2/pokemon";
const response = await fetch(url);
const data = await response.json();
data.results; // [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, ...]

```

The  `results`  attribute is the list of fetched pokémon. With this data, we will be able to add them to the pokémon list.

Let's get the request code inside  `useEffect`:

```javascript
useEffect(() => {
  const fetchPokemons = async () => {
    const response = await fetch(url);
    const data = await response.json();
    data.results; // update the pokemons list with this data
  };

```

To be able to use  `async-await`, we need to create a function and call it later. The empty array is a parameter to make sure  `useEffect`  knows the dependencies it will look up to re-run.

The default behavior is to run the effect of every completed render. If we add a dependency to this list,  `useEffect`  will only re-run when the dependency changes, instead of running in all completed renders.

Now that we've fetched the pokémon, we need to update the list. It's an action, a new behavior. We need to use the dispatch again, implement a new type in the reducer, and update the state in the context provider.

In  `PokemonContext`, we created the  `addPokemons`  function to provide an API to the consuming component using it.

```javascript
const addPokemons = (pokemons) => {
  dispatch({ type: ADD_POKEMONS, pokemons });
};

```

It receives pokémon and dispatches a new action:  `ADD_POKEMONS`.

In the reducer, we add this new type, expect the pokémon, and call a function to add the pokémon to the available list state.

```javascript
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

```

The  `addPokemons`  function just adds the pokémon to the list:

```javascript
const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons
});

```

We can refactor this by using state destructuring and the object property value shorthand:

```javascript
const addPokemons = (pokemons, state) => ({
  ...state,
  pokemons,
});

```

As we provide this function API to the consuming component now, we can use the  `useContext`  to get it.

```javascript
const { addPokemons } = useContext(PokemonContext);

```

The whole component looks like this:

```javascript
import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
const url = "https://pokeapi.co/api/v2/pokemon";
export const PokemonsList = () => {
  const { state, capture, addPokemons } = useContext(PokemonContext);
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };    
<span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">fetchPokemons</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>  }, [addPokemons]);
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>state<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>pokemons<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">map</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline;">pokemon</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div key<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>name<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>span<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
        <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span>button onClick<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">=</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(221, 74, 104);">capture</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>pokemon<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>button<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
      <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>
    <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&lt;</span><span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">/</span>div<span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 15px; vertical-align: baseline; color: rgb(154, 110, 58);">&gt;</span>  );
};

```

## Wrapping up

This was my attempt to share what I learned while trying to use hooks in a mini side project.

We learned how to handle local state with  `useState`, building a global state with the Context API, how to rewrite and replace  `useState`  with  `useReducer`, and how to do side-effects within  `useEffect`.

Disclaimer: this was just an experimental project for learning purposes. I may not have used best practices for hooks or made them scalable for big projects.

I hope this was good reading! Keep learning and coding!

You can other articles like this  [][5][on my blog][6].

My  [Twitter][7]  and  [Github][8].

## Resources

-   [React Docs: Context][9]
-   [React Docs: Hooks][10]
-   [Pokemon Hooks side-project: source code][11]

[1]: https://pokeapi.co/
[2]: https://pokeapi.co/api/v2/pokemon%22
[3]: https://pokeapi.co/api/v2/pokemon/1/'
[4]: https://pokeapi.co/api/v2/pokemon%22
[5]: https://leandrotk.github.io/tk/2020/04/react-hooks-context-api-and-pokemons/index.html
[6]: https://leandrotk.github.io/tk/2020/03/closure-currying-and-cool-abstractions/index.html
[7]: https://twitter.com/leandrotk_
[8]: https://github.com/leandrotk
[9]: https://reactjs.org/docs/context.html
[10]: https://reactjs.org/docs/hooks-reference.html
[11]: https://github.com/leandrotk/pokehooks-labs
