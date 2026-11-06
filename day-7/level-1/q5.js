console.log("sum, difference, product and quotient");
const first = Number(prompt("Enter first number:"));
const second = Number(prompt("Enter second number:"));

if (Number.isNaN(first) || Number.isNaN(second)) {
  console.log("Enter valid numbers.");
} else {
  console.log("Sum:", first + second);
  console.log("Difference:", first - second);
  console.log("Product:", first * second);

  if (second !== 0) {
    console.log("Quotient:", first / second);
  } else {
    console.log("Cannot divide by zero.");
  }
}
