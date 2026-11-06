console.log("Multiplication table");
const number = Number(prompt("Enter a number:"));

if (Number.isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
