const results = document.querySelector("#results");

const welcome = document.createElement("div");
welcome.textContent = "Welcome, Playa";
results.appendChild(welcome);

// console.log("Welcome, Playa");
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) return "rock";
  if (randNum === 1) return "paper";
  if (randNum === 2) return "scissors";
}

let humanScore = 0,
  computerScore = 0,
  humanChoice = "";

/**
 * @param {string} humanChoice
 */

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) return "It's tie, don't stop trying.";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You won, congrats!";
  } else {
    computerScore++;
    return "You loose man, try again.";
  }
}

function playGame(humanChoice) {
  const result = playRound(humanChoice, getComputerChoice());

  const resultContainer = document.createElement("div"); 
    resultContainer.style.display = "flex";
    resultContainer.style.flexDirection = "column";
    resultContainer.style.alignItems = "center";
    resultContainer.style.padding = "10px";
    resultContainer.style.border = "1px solid gray";
    resultContainer.style.borderRadius = "5px";
    resultContainer.style.backgroundColor = "#f0f0f0";
    resultContainer.style.width = "150px"; 
    resultContainer.style.textAlign = "center"; 

    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = result;

    const scoreParagraph = document.createElement("p");
    scoreParagraph.textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

    resultContainer.appendChild(resultParagraph);
    resultContainer.appendChild(scoreParagraph);
    results.appendChild(resultContainer);

  // console.log(result);
  // console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);

  if (humanScore === 10) {
    const youWon = document.createElement("div");
    youWon.textContent = "🎉 You won the best of 3! 😮seeeeeeeewwwwwwww";
    results.appendChild(youWon);
    // console.log("🎉 You won the best of 3! 😮seeeeeeeewwwwwwww");
    disableButtons();
  } else if (computerScore === 10) {
    const youLoose = document.createElement("div");
    youLoose.textContent = "😞 You lost the best of 3.";
    results.appendChild(youLoose);
    // console.log("😞 You lost the best of 3.");
    disableButtons();
  }
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function () {
  playGame("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function () {
  playGame("paper");
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function () {
  playGame("scissors");
});

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// while (humanScore < 2 && computerScore < 2) {
//   console.log(playRound(humanChoice, getComputerChoice()));
//   console.log(humanScore, computerScore);
// }