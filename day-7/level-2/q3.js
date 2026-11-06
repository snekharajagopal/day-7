console.log("sum and average");
const n = Number(prompt("Enter a positive whole number:"));

if (!Number.isInteger(n) || n <= 0) {
  console.log("Enter a positive whole number.");
} else {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const average = sum / n;

  console.log("Sum:", sum);
  console.log("Average:", average);
}