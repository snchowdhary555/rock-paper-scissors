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

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let playerChoice = "";
  let roundResult = "";

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("rock, paper, scissors");
    roundResult = playRound(playerChoice, computerPlay());
    console.log(roundResult);
    if (roundResult.includes("Win")) {
      playerScore++;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
    }
  }

  if (computerScore > playerScore) {
    return `You Lose! the game by ${computerScore} - ${playerScore}`;
  } else if (playerScore > computerScore) {
    return `You Win! the game by ${playerScore} - ${computerScore}`;
  } else {
    return `Game Draw! by ${playerScore} - ${computerScore}`;
  }
}
