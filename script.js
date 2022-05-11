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
