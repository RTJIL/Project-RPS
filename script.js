console.log("Welcome, Playa");

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) return "rock";
  if (randNum === 1) return "paper";
  if (randNum === 2) return "scissors";
}

function getHumanChoice() {
  let humanChoice;
  while (true) {
    // Endless loop until valid input

    humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();

    if (
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    ) {
      return humanChoice;
    }

    alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
  }
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
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

while (humanScore < 2 && computerScore < 2) {
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(humanScore, computerScore);
}

if (humanScore === 2) {
  console.log("You won the best of 3, 😮seeeeeeeewwwwwwww");
} else {
  console.log("Damn, 👎you are looser...");
}
