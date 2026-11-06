const secret = Math.floor(Math.random() * 10) + 1;

let attempts = 0;
let guessedCorrectly = false;

while (attempts < 5) {
  const guess = Number(prompt("Guess a number from 1 to 10:"));

  if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
    console.log("Enter a whole number from 1 to 10.");
    continue;
  }

  attempts++;

  if (guess === secret) {
    console.log("Correct! You won.");
    guessedCorrectly = true;
    break;
  } else if (guess < secret) {
    console.log("Too low.");
  } else {
    console.log("Too high.");
  }

  console.log(`Attempts used: ${attempts}`);
}

if (!guessedCorrectly) {
  console.log(`Game over. The number was ${secret}.`);
}