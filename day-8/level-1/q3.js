// first, the last and the length. Add one at the start and one at the end, and remove one
const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

fruits.unshift("Pineapple");
fruits.push("Watermelon");

console.log(fruits);

fruits.pop();

console.log(fruits);