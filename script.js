"use strict";

const oriGuess = document.querySelector(".guess").cloneNode(true);
let compNum = Math.floor(Math.random() * 19 + 1);
function execute() {
  const comp = compNum;
  const guess = Number(document.querySelector(".guess").value);
  let score = Number(document.querySelector(".score").textContent);
  //   let highScore = score;
  if (!guess) {
    document.querySelector(".message").textContent = "Enter your number first!";
  } else if (guess === comp) {
    document.querySelector(".message").textContent = "Correctttt";
    document.querySelector(".number").textContent = comp;
    let tempScore = Number(document.querySelector(".highscore").textContent);
    let highScore = (document.querySelector(".highscore").textContent = score);
    if (highScore < tempScore) {
      document.querySelector(".highscore").textContent = tempScore;
    }
  } else if (guess < comp) {
    document.querySelector(".message").textContent = "its too low";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "its too big";
    score--;
    document.querySelector(".score").textContent = score;
  }
}
function restart() {
  const reset = document
    .querySelector(".guess")
    .replaceWith(oriGuess.cloneNode(true));
  document.querySelector(".guess").textContent = reset;
}
document.querySelector(".check").addEventListener("click", execute);
document.querySelector(".again").addEventListener("reset", restart);

