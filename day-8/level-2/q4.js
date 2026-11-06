//Use filter to get all even numbers from an array, and all words longer than 4 letters from another
//even number from array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

//longer than 4 letters
const words = ["apple", "cat", "banana", "dog", "orange"];
const longWords = words.filter(word => word.length > 4);
console.log(longWords);