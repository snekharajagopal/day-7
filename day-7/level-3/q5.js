const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

for (let round = 1; round <= 5; round++) {
  const userChoice = prompt(
    `Round ${round}: Enter rock, paper, or scissors`
  );

  if (userChoice === null) {
    console.log("Game cancelled.");
    break;
  }

  const user = userChoice.trim().toLowerCase();

  if (!choices.includes(user)) {
    console.log("Invalid choice. This round does not count.");
    round--;
    continue;
  }

  const computer =
    choices[Math.floor(Math.random() * choices.length)];

  console.log(`You: ${user} | Computer: ${computer}`);

  if (user === computer) {
    console.log("Draw!");
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    console.log("You win this round!");
    userScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }
}

console.log(`Your score: ${userScore}`);
console.log(`Computer score: ${computerScore}`);

if (userScore > computerScore) {
  console.log("You won the game!");
} else if (computerScore > userScore) {
  console.log("Computer won the game!");
} else {
  console.log("The game is a draw!");
}