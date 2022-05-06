function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const capitalizePlayerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  playerSelection = capitalizePlayerSelection;
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === playerSelection) {
    return `Match Draw! ${computerSelection} equals ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}
