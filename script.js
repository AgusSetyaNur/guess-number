"use strict";
let min = 1;
let max = 10;
let compNum = Math.floor(Math.random() * max) + min;
let score = 20;
let highScore = 0;

function changeRange() {
  restart();
  min = Number(prompt("Enter the minimum number!"));
  max = Number(prompt("Enter the maximum number!"));
  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Invalid range. Try again.");
    return;
  }
  document.querySelector(
    ".between"
  ).textContent = `(Between ${min} and ${max})`;
  compNum = Math.floor(Math.random() * (max - min) + min);
}

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

function execute() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Enter your number first!");
  } else if (guess === compNum) {
    displayMessage("Correctttt!");
    document.querySelector(".number").textContent = compNum;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem ";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess < compNum ? "Too low!" : "Too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}

function restart() {
  score = 20;
  compNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem ";
}
document.querySelector(".range").addEventListener("click", changeRange);
document.querySelector(".check").addEventListener("click", execute);
document.querySelector(".again").addEventListener("click", restart);
