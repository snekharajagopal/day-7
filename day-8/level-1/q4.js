// every item of an array using for, for...of and forEach.
const fruits = ["Apple", "Mango", "Orange"];

console.log("Using for:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Using for...of:");

for (const fruit of fruits) {
    console.log(fruit);
}

console.log("Using forEach:");

fruits.forEach(fruit => {
    console.log(fruit);
});