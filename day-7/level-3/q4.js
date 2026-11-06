let row = Number(prompt("enter the no of rows"));
for (let i = 1; i <= row; i++) {
  let line = "";
  for (let space = 1; space <= row - i; space++) {
    line += " ";
  }
  for (let star = 1; star <= 2 * i - 1; star++) {
    line += "*";
  }

  console.log(line);
}
