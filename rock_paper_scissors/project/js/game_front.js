import { text, scoreWinsLayout, scoreLosesLayout, resetLayout } from "./layout";
import {
  gameCounter,
  userWins,
  userLoses,
  resetCount,
  startGame,
} from "./game";
import "../scss/styles.scss";

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.getElementById("reset");

rock.addEventListener("click", () => {
  let move = rock.id;
  startGame(move);
});

paper.addEventListener("click", () => {
  let move = paper.id;
  startGame(move);
});

scissors.addEventListener("click", () => {
  let move = scissors.id;
  startGame(move);
});

reset.addEventListener("click", () => {
  resetLayout();
  resetCount();
});
