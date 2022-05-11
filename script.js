/********************** Variables Declaration **********************************/

const resultDisplay = document.querySelector(".result-display");
const playerScoreDisplay = document.querySelector(".player-score-display");
const computerScoreDisplay = document.querySelector(".computer-score-display");
let playerScore = 0;
let computerScore = 0;
const weaponBtns = document.querySelectorAll(".weapons button");
const resetBtn = document.querySelector(".reset");

/********************* Variables Declaration End *******************************/

/********************** Helper Functions **************************************/
function random(num) {
  return Math.floor(Math.random() * num);
}

function capitalize(playerSelection) {
  return (
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
  );
}

/********************* Helper Functions Ends ************************************/

/******************************* Main ****************************************/

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = choices[random(choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return `You Lose! ${playerSelection} beaten by ${computerSelection}`;
  } else if (computerSelection === playerSelection) {
    return `Match Draw! ${computerSelection} equals ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {}
