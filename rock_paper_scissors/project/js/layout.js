export let text = document.querySelector(".game__log__text");
export let scoreWinsLayout = document.querySelector(".score__box__wins__count");
export let scoreLosesLayout = document.querySelector(
  ".score__box__loses__count"
);

export let displayCurrentScore = (message) => {
  text.textContent = message;
};

export let scoreUpdate = (wins, loses) => {
  scoreWinsLayout.textContent = wins;
  scoreLosesLayout.textContent = loses;
};

export let resetLayout = () => {
  scoreWinsLayout.textContent = 0;
  scoreLosesLayout.textContent = 0;
  text.textContent = "";
};
