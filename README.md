This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and based on [React Tic-Tac-Toe tutorial](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial).

## Terminology

The project name consists of 2 words : __Main - Api__.
In Bahasa Indonesia, _Main_ means _Play_, and _Api_ means _Fire_. So it basically means playing with fire :fire:

## Bingo questions

To replace the game questions with your own, replace json file under `src > data > questions.json`. Follow the structure on that file, and you're good to go!

## Bingo matrix

This is the matrix used to calculate the number of bingo lines for 5x5 bingo board.

```
[0, 1, 2, 3, 4],
[5, 6, 7, 8, 9],
[10, 11, 12, 13, 14],
[15, 16, 17, 18, 19],
[20, 21, 22, 23, 24],
[0, 5, 10, 15, 20],
[1, 6, 11, 16, 21],
[2, 7, 12, 17, 22],
[3, 8, 13, 18, 23],
[4, 9, 14, 19, 24],
[0, 6, 12, 18, 24],
[4, 8, 12, 16, 20]
```

