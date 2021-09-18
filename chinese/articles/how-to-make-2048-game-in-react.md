> -  原文地址：[React Tutorial – How to Build the 2048 Game in React](https://www.freecodecamp.org/news/how-to-make-2048-game-in-react/)
> -  原文作者：[Matt Sokola](https://www.freecodecamp.org/news/author/matt-sokola/)
> -  译者：lanxisama
> -  校对者：

![React Tutorial – How to Build the 2048 Game in React](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/thumb.png)

今天我们将要学习如果使用React来复刻制作2048这款游戏。
What makes this article unique is that we will focus on creating delightful animations. Aside from React, we will use TypeScript and we'll make some CSS transitions using LESS.

We are only going to use modern React interfaces such as hooks and the Context API.

This article contains a few external resources such as:

-   [2048 Game (GitHub Pages)](https://mateuszsokola.github.io/2048-in-react/)
-   [Animation Examples for 2048 (GitHub Pages)](https://mateuszsokola.github.io/2048-animation-examples/)
-   [Source Code (GitHub)](https://github.com/mateuszsokola/2048-in-react)
-   ...and a YouTube video. It took me more than a month to prepare this tutorial, so it would mean the world to me if you watch it, smash the like button, and subscribe to my channel.

Thank you!

## 2048 Game Rules

In this game, the player must combine tiles containing the same numbers until they reach the number 2048. The tiles can contain only integer values starting from 2, and that are a power of two, like 2, 4, 8, 16, 32, and so on.

Ideally, the player should reach the 2048 tile within the smallest number of steps. The board has dimension of 4 x 4 tiles, so that it can fit up to 16 tiles. If the board is full, and there is no possible move to make like merging tiles together - the game is over.

![](https://www.freecodecamp.org/news/content/images/2021/08/giphy.gif)

While creating this tutorial I took shortcuts to focus on the game mechanics and animations. What did I get rid of?

-   In our example, the game always creates a new tile with the number 2. But in the proper version it should generate a random number (either 2 or 4 - to make it harder to play).
-   Also, we will not handle wins and loses. You can play after you complete the number 2048, and nothing happens when the board is unsolvable - you need to click the reset button.
-   I skipped the scoring.

If you want you can implement those missing features on your own. Just fork my repository and implement it on your own setup.

## The Project Structure

The application contains the following elements:

-   Board (component) – responsible for rendering tiles. It exposes one hook called `useBoard`.
-   Grid (component) – renders 4x4 grid.
-   Tile (component) – responsible for all animations related to the tile, and rendering the tile itself.
-   Game (component) – combines all elements above together. It includes a `useGame` hook which is responsible for enforcing the game rules and constrains.

## How to Build the Tile Component

We want to invest more time in animations, so I will start the story from the Tile component. In the end, this component is responsible for all animations in the game.

There are only two fairly simple animations in 2048 – tile highlighting, and sliding it across the board. We can handle those animations with CSS transitions by declaring the following styles:

```Style.less
.tile {
  // ...
  transition-property: transform;
  transition-duration: 100ms;
  transform: scale(1);
}
```

At the current moment I defined only one transition that will highlight the tile when it is created or merged. We will leave it like that for now.

Let's consider how the Tile meta data is supposed to look, so we can easily use it. I decided to call it `TileMeta` since we don't want to have the name conflict with other entities such as the Tile component:

```TypeScript.tsx
type TileMeta = {
  id: number;
  position: [number, number];
  value: number;
  mergeWith?: number;
};
```

-   `id` – the unique identifier of the tile. It is important so that the React DOM doesn't re-render all tiles from scratch on every change. Otherwise, we would see all tiles highlighted on every action of the player.
-   `position` – the position of the tile on the board. It is an array with two elements, the `x` and `y` coordinate (the possible values are `0` - `3` in both cases).
-   `value` – the tile value. Only the power of two, starting from `2`.
-   `mergeWith` – (optional) the id of the tile which is going to absorb the current tile. If it is present, the tile should be merged into another tile, and disappear.

## How to Create and Merge Tiles

We want to somehow highlight that the tile changed after the player's action. I think the best way would be changing the tile's scale to indicate that a new tile has been created or one has been changed.

```TypeScript.tsx
export const Tile = ({ value, position }: Props) => {
  const [scale, setScale] = useState(1);

  const prevValue = usePrevProps<number>(value);

  const isNew = prevCoords === undefined;
  const hasChanged = prevValue !== value;
  const shallAnimate = isNew || hasChanged;

  useEffect(() => {
    if (shallAnimate) {
      setScale(1.1);
      setTimeout(() => setScale(1), 100);
    }
  }, [shallAnimate, scale]);

  const style = {
    transform: `scale(${scale})`,
  };

  return (
    <div className={`tile tile-${value}`} style={style}>
      {value}
    </div>
  );
};
```

To trigger the animation, we need to consider two cases:

-   a new tile – the previous value will be `null`.
-   the tile changed the value– the previous value will be different than the current one.

And the result is the following:

![](https://www.freecodecamp.org/news/content/images/2021/08/giphy--1-.gif)

You might've noticed that I'm using a custom hook called `usePrevProps`. It helps to track the previous values of the component properties (props).

I could use references to retrieve the previous values but it would clutter up my component. I decided to extract it into a standalone hook, so the code is readable, and I can use this hook in other places.

If you want to use it in your project, just copy this snippet:

```TypeScript.ts
import { useEffect, useRef } from "react";

/**
 * `usePrevProps` stores the previous value of the prop.
 *
 * @param {K} value
 * @returns {K | undefined}
 */
export const usePrevProps = <K = any>(value: K) => {
  const ref = useRef<K>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
```

## How to Slide Tiles Across the Board

The game will look janky without animated sliding of tiles across the board. We can easily create this animation by using CSS transitions.

The most convenient will be to use properties responsible for positioning, such as `left` and `top`. So we need to modify our CSS styles to look like this:

```Style.less
.tile {
  position: absolute;
  // ...
  transition-property: left, top, transform;
  transition-duration: 250ms, 250ms, 100ms;
  transform: scale(1);
}
```

Once we've declared the styles, we can implement the logic responsible for changing a tile's position on the board.

```TypeScript.tsx
export const Tile = ({ value, position, zIndex }: Props) => {
  const [boardWidthInPixels, tileCount] = useBoard();
  // ...

  useEffect(() => {
    // ...
  }, [shallAnimate, scale]);

  const positionToPixels = (position: number) => {
    return (position / tileCount) * (boardWidthInPixels as number);
  };

  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    transform: `scale(${scale})`,
    zIndex,
  };

  // ...
};
```

As you can see, the equation in the `positionToPixels` function needs to know the position of the tile, the total amount of tiles per row and column, and the total board length in pixels (width or height – same, it is a square). The calculated value is passed down to the HTML element as an inline style.

Wait a minute... but what about the `useBoard` hook and `zIndex` property?

-   `useBoard` allows us to access the properties of the board within the children components without passing them down. The Tile component needs to know the width and total count of tiles to find the right spot on the board. Thanks to React Context API we can share properties across multiple layers of components without polluting their properties (props).
-   `zIndex` is a CSS property that defines the order of tile on the stack. In our case it is the id of the tile. As you can see on the gif below, the tile can be stacked on each other, so the `zIndex` enabled us to specify which one will be on top.

![](https://www.freecodecamp.org/news/content/images/2021/08/a.gif)

## How to Build the Board

Another important part of the game is the Board. The Board component is responsible for rendering the grid and tiles.

It seems like the Board has duplicated business logic with Tile component, but there is a small difference. The Board holds information about its size (width and height), and number of columns and rows. It's the opposite of the Tile which only knows its own position.  

```TypeScript.tsx
type Props = {
  tiles: TileMeta[];
  tileCountPerRow: number;
};

const Board = ({ tiles, tileCountPerRow = 4 }: Props) => {
  const containerWidth = tileTotalWidth * tileCountPerRow;
  const boardWidth = containerWidth + boardMargin;

  const tileList = tiles.map(({ id, ...restProps }) => (
    <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
  ));

  return (
    <div className="board" style={{ width: boardWidth }}>
      <BoardProvider containerWidth={containerWidth} tileCountPerRow={tileCountPerRow}>
        <div className="tile-container">{tileList}</div>
        <Grid />
      </BoardProvider>
    </div>
  );
};
```

The Board component uses the `BoardProvider` to distribute the width of the tile container and amount of tiles per row and column to all tiles and the grid component.

```TypeScript.tsx
const BoardContext = React.createContext({
  containerWidth: 0,
  tileCountPerRow: 4,
});

type Props = {
  containerWidth: number;
  tileCountPerRow: number;
  children: any;
};

const BoardProvider = ({
  children,
  containerWidth = 0,
  tileCountPerRow = 4,
}: Props) => {
  return (
    <BoardContext.Provider value={{ containerWidth, tileCountPerRow }}>
      {children}
    </BoardContext.Provider>
  );
};
```

The `BoardProvider` uses the React Context API to propagate properties down to every child. If any component needs to use any value available on the provider it can retrieve it by calling the `useBoard` hook.

I am going to skip this topic since I spoke more about it in my [video on Feature Toggles in React](https://youtu.be/H9Tx5SqWX9o). If you wish to learn more about them you can watch it.

```TypeScript.tsx
const useBoard = () => {
  const { containerWidth, tileCount } = useContext(BoardContext);

  return [containerWidth, tileCount] as [number, number];
};
```

## How to Build the Game Component

Now we can specify the rules of game, and expose the interface to play the game. I am going to start with the navigation since it will help you understand why the game logic is implemented that way.

```TypeScript.tsx
import { useThrottledCallback } from "use-debounce";

const Game = () => {
  const [tiles, moveLeft, moveRight, moveUp, moveDown] = useGame();

  const handleKeyDown = (e: KeyboardEvent) => {
  	// disables page scrolling with keyboard arrows
    e.preventDefault();
  
    switch (e.code) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
    }
  };

  // protects the reducer from being flooded with events.
  const throttledHandleKeyDown = useThrottledCallback(
    handleKeyDown,
    animationDuration,
    { leading: true, trailing: false }
  );

  useEffect(() => {
    window.addEventListener("keydown", throttledHandleKeyDown);

    return () => {
      window.removeEventListener("keydown", throttledHandleKeyDown);
    };
  }, [throttledHandleKeyDown]);

  return <Board tiles={tiles} tileCountPerRow={4} />;
};
```

As you can see, the game logic will be handled by the `useGame` hook that exposes the following properties and methods:

-   `tiles` – an array of tiles available on the board. It uses the `TileMeta` type described above.
-   `moveLeft` – a function that slides all tiles to the left side of the board.
-   `moveRight` – a function that slides all tiles to the right side of the board.
-   `moveUp` – a function that slides all tiles to the top of the board.
-   `moveDown` – a function that slides all tiles to the bottom of the board.

We use the `throttledHandleKeyDown` callback to prevent players from flooding the game with tons of moves at the same time. Basically, the player needs to wait until the animation is complete before they can trigger another move.

This mechanism is called throttling. I decided to use the `useThrottledCallback` hook from the `use-debounce` package.

## How to Use the useGame Hook

I mentioned above that the Game component will be handling the rules of the game as well. We are going to extract the game logic into a hook rather than writing it directly onto the component (since we don't want to clutter the code).

The useGame hook is based on the `useReducer` hook which is a built-in hook within React. I will start by defining the shape of the reducer's state.

```TypeScript.tsx
type TileMap = { 
  [id: number]: TileMeta;
}

type State = {
  tiles: TileMap;
  inMotion: boolean;
  hasChanged: boolean;
  byIds: number[];
};
```

The state contains the following fields:

-   `tiles` – a hash table responsible for storing tiles. The hash table makes it easy to lookup entries by their keys, so it is a perfect match for us since we want to find tiles by their ids.
-   `byIds` – an array containing all ids in the expected order (that is, ascending). We must keep the right order of tiles, so React doesn't re-render the whole board every time we change the state.
-   `hasChange` – keeps track of tile changes. If nothing has changed the new tile will not be generated.
-   `inMotion` – determines if tiles are still moving. If they are, the new tile will not be generated until the motion is completed.

### Actions

`useReducer` requires to specify the actions that are supported by this reducer.

```TypeScript.tsx
type Action =
  | { type: "CREATE_TILE"; tile: TileMeta }
  | { type: "UPDATE_TILE"; tile: TileMeta }
  | { type: "MERGE_TILE"; source: TileMeta; destination: TileMeta }
  | { type: "START_MOVE" }
  | { type: "END_MOVE" };
```

What are those actions responsible for?

-   `CREATE_TILE` – creates a new tile, and appends it into the `tiles` hash table. It changes the `hasChange` flag to `false` since this action is always triggered when a new tile is appended to the board.
-   `UPDATE_TILE` – updates an existing tile. It doesn't modify the id which is important to keep the animations working. We will use it to reposition the tile and change its value (during merges). Also, it changes the `hasChange` flag to `true`.
-   `MERGE_TILE` – merges a source tile into a destination tile. After this operation, the destination tile will change its value (the value of the source tile will be added into it). And it will remove the source tile from the `tiles` table and `byIds` array.
-   `START_MOVE` – tells the reducer it should expect multiple actions, so it must wait until all animations are complete before it will be able to generate a new tile.
-   `END_MOVE` – tells the reducer all actions were completed, and it can safely create a new tile.

If you want you can write the logic for this reducer on your own or copy mine:

```TypeScript.tsx
type TileMap = { 
  [id: number]: TileMeta;
}

type State = {
  tiles: TileMap;
  inMotion: boolean;
  hasChanged: boolean;
  byIds: number[];
};

type Action =
  | { type: "CREATE_TILE"; tile: TileMeta }
  | { type: "UPDATE_TILE"; tile: TileMeta }
  | { type: "MERGE_TILE"; source: TileMeta; destination: TileMeta }
  | { type: "START_MOVE" }
  | { type: "END_MOVE" };

const initialState: State = {
  tiles: {},
  byIds: [],
  hasChanged: false,
  inMotion: false,
};

const GameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CREATE_TILE":
      return {
        ...state,
        tiles: {
          ...state.tiles,
          [action.tile.id]: action.tile,
        },
        byIds: [...state.byIds, action.tile.id],
        hasChanged: false,
      };
    case "UPDATE_TILE":
      return {
        ...state,
        tiles: {
          ...state.tiles,
          [action.tile.id]: action.tile,
        },
        hasChanged: true,
      };
    case "MERGE_TILE":
      const {
        [action.source.id]: source,
        [action.destination.id]: destination,
        ...restTiles
      } = state.tiles;
      return {
        ...state,
        tiles: {
          ...restTiles,
          [action.destination.id]: {
            id: action.destination.id,
            value: action.source.value + action.destination.value,
            position: action.destination.position,
          },
        },
        byIds: state.byIds.filter((id) => id !== action.source.id),
        hasChanged: true,
      };
    case "START_MOVE":
      return {
        ...state,
        inMotion: true,
      };
    case "END_MOVE":
      return {
        ...state,
        inMotion: false,
      };
    default:
      return state;
  }
};
```

If you don't understand why we defined those actions, don't worry – now we are going to implement a hook which will hopefully shed some light on it.

### How to Implement the Hook

Let's look into the function which is responsible for a player's moves. We will focus on the move left only since the other ones are almost the same.

```TypeScript.tsx
  const moveLeftFactory = () => {
    const retrieveTileIdsByRow = (rowIndex: number) => {
      const tileMap = retrieveTileMap();

      const tileIdsInRow = [
        tileMap[tileIndex * tileCount + 0],
        tileMap[tileIndex * tileCount + 1],
        tileMap[tileIndex * tileCount + 2],
        tileMap[tileIndex * tileCount + 3],
      ];

      const nonEmptyTiles = tileIdsInRow.filter((id) => id !== 0);
      return nonEmptyTiles;
    };

    const calculateFirstFreeIndex = (
      tileIndex: number,
      tileInRowIndex: number,
      mergedCount: number,
      _: number
    ) => {
      return tileIndex * tileCount + tileInRowIndex - mergedCount;
    };

    return move.bind(this, retrieveTileIdsByRow, calculateFirstFreeIndex);
  };
  
  const moveLeft = moveLeftFactory();
```

As you can see, I decided to bind two callbacks to the `move` function. This technique is called the inversion of control – so the consumer of the function will be able to inject their own values into the executed function.

If you don't know how `bind` works you should learn about it because it is a very common question on job interviews.

The first callback called `retrieveTileIdsByRow` is responsible of finding all non-empty tiles available in a row (for horizontal moves – left or right). If the player does the vertical (up or down) moves we will look for all tiles in a column.

The second callback called `calculateFirstFreeIndex` finds the closest position to the board's border based on the given parameters such as tile index, index of the tile in row or column, number of merged tiles, and the maximum possible index.

Now we are going to look into the business logic of the `move` function. I've explained the code of this function in the comments. The algorithm might be a bit complex, and I believe It will be easier to understand it if I document the code line by line:

```TypeScript.tsx
  type RetrieveTileIdsByRowOrColumnCallback = (tileIndex: number) => number[];

  type CalculateTileIndex = (
    tileIndex: number,
    tileInRowIndex: number,
    mergedCount: number,
    maxIndexInRow: number
  ) => number;

  const move = (
    retrieveTileIdsByRowOrColumn: RetrieveTileIdsByRowOrColumnCallback,
    calculateFirstFreeIndex: CalculateTileIndex
  ) => {
    // new tiles cannot be created during motion.
    dispatch({ type: "START_MOVE" });

    const maxIndex = tileCount - 1;

    // iterates through every row or column (depends on move kind - vertical or horizontal).
    for (let tileIndex = 0; tileIndex < tileCount; tileIndex += 1) {
      // retrieves tiles in the row or column.
      const availableTileIds = retrieveTileIdsByRowOrColumn(tileIndex);

      // previousTile is used to determine if tile can be merged with the current tile.
      let previousTile: TileMeta | undefined;
      // mergeCount helps to fill gaps created by tile merges - two tiles become one.
      let mergedTilesCount = 0;

      // interate through available tiles.
      availableTileIds.forEach((tileId, nonEmptyTileIndex) => {
        const currentTile = tiles[tileId];

        // if previous tile has the same value as the current one they should be merged together.
        if (
          previousTile !== undefined &&
          previousTile.value === currentTile.value
        ) {
          const tile = {
            ...currentTile,
            position: previousTile.position,
            mergeWith: previousTile.id,
          } as TileMeta;

          // delays the merge by 250ms, so the sliding animation can be completed.
          throttledMergeTile(tile, previousTile);
          // previous tile must be cleared as a single tile can be merged only once per move.
          previousTile = undefined;
          // increment the merged counter to correct position for the consecutive tiles to get rid of gaps
          mergedTilesCount += 1;

          return updateTile(tile);
        }

        // else - previous and current tiles are different - move the tile to the first free space.
        const tile = {
          ...currentTile,
          position: indexToPosition(
            calculateFirstFreeIndex(
              tileIndex,
              nonEmptyTileIndex,
              mergedTilesCount,
              maxIndex
            )
          ),
        } as TileMeta;

        // previous tile becomes the current tile to check if the next tile can be merged with this one.
        previousTile = tile;

        // only if tile has changed its position will it be updated
        if (didTileMove(currentTile, tile)) {
          return updateTile(tile);
        }
      });
    }

    // wait until the end of all animations.
    setTimeout(() => dispatch({ type: "END_MOVE" }), animationDuration);
  };
```

The complete code of this hook has more than 400 lines of code, so instead of pasting it here I decided to keep it on GitHub – so please [review the complete code there](https://github.com/mateuszsokola/2048-in-react/blob/master/src/components/Game/hooks/useGame/useGame.ts).

## Homework

I mentioned above that a few features are missing. If you want to understand the code in depth, you could fork my repository, and implement the following features:

-   score – you can define your own algorithm.
-   support wins and loses.
-   for new tile generation, pick a random tile value - either 2 or 4. The 4 shouldn't appear fewer than 5% of the times.

If you want me to review your code you can invite me to your pull request on GitHub - my username is mateuszsokola. Maybe I will record a video about how I review your code.

## Summary

I hope you enjoyed my tutorial. This time I decided to focus on the essence of the topic rather than building basic React and CSS, so I skipped those basic parts. I believe it makes this article easier to digest.

Any feedback or questions? [Shout at me on twitter](https://twitter.com/msokola)!

If you found this article helpful please share it, so more developers can learn from it. Occasionally I [publish videos on my YouTube channel](https://www.youtube.com/channel/UCJV16_5c4A0amyBZSI4yP6A), and it would be great if you subscribe to my channel, hit the like button, and drop a comment under your favourite video.

Stay tuned!
