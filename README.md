This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Rules of the Game:

Follows classic rules detailed on [wikipedia](http://en.wikipedia.org/wiki/Concentration_%28game%29)

At the beginning of the game, there are some number of cards on the board that are all face down, i.e., their symbol is not visible and all the cards look exactly the same. Cards are laid face down in four rows of 13 cards each. The two jokers may be included for a total of six rows of nine cards each.

 If they are of the same rank and color (e.g. six of hearts and six of diamonds, queen of clubs and queen of spades, or both jokers, if used) then that player wins the pair and plays again. If they are not of the same rank and color, they are turned face down again

### In a turn:

* The player turns over one card. The card’s rank and color are now visible.

* The player turns over a second card. This card’s rank and color are now visible.

* If the two cards’ ranks and colors match, the cards remain face up.

* If the two card’s ranks and colors do not match, the player is given some time to observe them, then they are flipped back over face down.

## Development Tools:

* react v^16.2.0

* npm v5.8.0

* shuffled cards using method found [here](https://www.frankmitchell.org/2015/01/fisher-yates/). This is the [Fisher-Yates shuffle](https://www.youtube.com/watch?v=tLxBwSL3lPQ).


<!-- INSTRUCTIONS SENT TO ME FROM CAITLIN

In a turn:

The player turns over one card. The card’s symbol is now visible.

The player turns over a second card. This card’s symbol is now visible.

If the two cards’ symbols match, the cards remain face up.

If the two card’s symbols do not match, the player is given some time to observe them, then they are flipped back over face down.

Obviously, card symbols all come in pairs.

-->
