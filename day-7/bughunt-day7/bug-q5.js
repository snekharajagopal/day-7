//bug code
// let age = prompt("Age?");
// if (age > 17 && < 60) { console.log("Eligible"); }
//fixed code
let age = Number(prompt("Age?"));

if (age > 17 && age < 60) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}