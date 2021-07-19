import {
  text,
  scoreWinsLayout,
  scoreLosesLayout,
  displayCurrentScore,
  scoreUpdate,
} from "./layout";

export let gameCounter = 0;
export let userWins = 0;
export let userLoses = 0;

export let resetCount = () => {
  gameCounter = 0;
  userLoses = 0;
  userWins = 0;
};

export const startGame = (tool) => {
  let checkScore = (hasWon) => {
    gameCounter++;

    if (gameCounter === 4) {
      setTimeout(resetCount, 0);
      return userWins > userLoses
        ? "You won the game:) Congrats!".toUpperCase()
        : "You lost a game:(".toUpperCase();
    }

    if (hasWon) {
      userWins++;
    } else {
      userLoses++;
    }

    return "continue";
  };

  let aiMove = () => {
    let move = Math.floor(Math.random() * 3);
    switch (move) {
      case 0:
        move = "rock";
        break;
      case 1:
        move = "paper";
        break;
      case 2:
        move = "scissors";
        break;
      default:
        throw new Error("Unexpected ai move");
    }

    return move;
  };

  let capitalizer = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  let aiTool = aiMove();

  let str = `Round ${gameCounter + 1}, ${capitalizer(tool)} vs. ${capitalizer(
    aiTool
  )}`;
  let winStr = `${str}, You've WON!`;
  let loseStr = `${str}, You've LOST!`;

  if (tool === aiTool) {
    displayCurrentScore("It's a TIE! Keep going");
    scoreUpdate(userWins, userLoses);
  }

  if (tool === "scissors" && aiTool === "paper") {
    let currentScore = checkScore(true);
    currentScore === "continue"
      ? displayCurrentScore(winStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }

  if (tool === "paper" && aiTool === "rock") {
    let currentScore = checkScore(true);
    currentScore === "continue"
      ? displayCurrentScore(winStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }

  if (tool === "rock" && aiTool === "scissors") {
    let currentScore = checkScore(true);
    currentScore === "continue"
      ? displayCurrentScore(winStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }

  if (aiTool === "scissors" && tool === "paper") {
    let currentScore = checkScore(false);
    currentScore === "continue"
      ? displayCurrentScore(loseStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }

  if (aiTool === "paper" && tool === "rock") {
    let currentScore = checkScore(false);
    currentScore === "continue"
      ? displayCurrentScore(loseStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }

  if (aiTool === "rock" && tool === "scissors") {
    let currentScore = checkScore(false);
    currentScore === "continue"
      ? displayCurrentScore(loseStr)
      : displayCurrentScore(currentScore);
    scoreUpdate(userWins, userLoses);
  }
};

// export let checkScore = (hasWon) => {
//   gameCounter++;

//   if (gameCounter === 4) {
//     setTimeout(resetCount, 0);
//     return userWins > userLoses
//       ? 'You won the game:) Congrats!'.toUpperCase()
//       : 'You lost a game:('.toUpperCase();
//   }

//   if (hasWon) {
//     userWins++;
//   } else {
//     userLoses++;
//   }

//   return 'continue';
// };

// export let resetCount = () => {
//   gameCounter = 0;
//   userLoses = 0;
//   userWins = 0;
// };

// export let aiMove = () => {
//   let move = Math.floor(Math.random() * 3);
//   switch (move) {
//     case 0:
//       move = 'rock';
//       break;
//     case 1:
//       move = 'paper';
//       break;
//     case 2:
//       move = 'scissors';
//       break;
//     default:
//       throw new Error('Unexpected ai move');
//   }

//   return move;
// };
