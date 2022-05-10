/********************** Helper Functions **************************************/
function random(num) {
  return Math.floor(Math.random() * num);
}

function capitalize(playerSelection) {
  return (
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
  );
}

function displayRoundWinner(roundResult) {
  console.log(roundResult);
}

function getWinner(computerScore, playerScore) {
  if (computerScore > playerScore) {
    return `You Lose! the game by ${computerScore} - ${playerScore}`;
  } else if (playerScore > computerScore) {
    return `You Win! the game by ${playerScore} - ${computerScore}`;
  } else {
    return `Game Draw! by ${playerScore} - ${computerScore}`;
  }
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

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let playerChoice = "";
  let roundResult = "";

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("rock, paper, scissors");
    roundResult = playRound(playerChoice, computerPlay());
    displayRoundWinner(roundResult);
    if (roundResult.includes("Win")) {
      playerScore++;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
    }
  }

  return getWinner(computerScore, playerScore);
}
