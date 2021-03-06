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

function displayGameResult() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = `You Won! the Game by ${playerScore} - ${computerScore}`;
    resultDisplay.classList.add("win");
  } else {
    resultDisplay.textContent = `You Lose! the Game by ${computerScore} - ${playerScore}`;
    resultDisplay.classList.add("lose");
  }
  resetBtn.textContent = "Play Again!";
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

function reset() {
  resetBtn.textContent = "Reset";
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = " First to Win 5 of the rounds will be winner";
  resultDisplay.classList.remove("win", "lose");
}

function game() {
  if (playerScore < 5 && computerScore < 5) {
    const playerChoice = this.classList.value;
    const roundResult = playRound(playerChoice, computerPlay());
    resultDisplay.textContent = roundResult;
    if (roundResult.includes("Win")) {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    displayGameResult();
  }
}

//Add eventListener to each weapon button
weaponBtns.forEach(function (btn) {
  //Play the game when user click on any weapon button
  btn.addEventListener("click", game);
});

resetBtn.addEventListener("click", reset);
