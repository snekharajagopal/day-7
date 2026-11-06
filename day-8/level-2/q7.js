//Remove duplicates from an array in two ways: filter with indexOf, and new Set
//using filter and indexof
const numbers = [1, 2, 2, 3, 3, 4];
const unique = numbers.filter((n, index) =>
    numbers.indexOf(n) === index
);
console.log(unique);

//using new set
const num = [1, 2, 2, 3, 3, 4];
const uniq = [...new Set(num)];
console.log(uniq);