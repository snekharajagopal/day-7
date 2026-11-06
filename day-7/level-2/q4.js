console.log("digits of a number");
let num = 156;
let n = Math.abs(num);
let count = 0;
if (n === 0) {
  count = 1;
} else {
  while (n > 0) {
    n = Math.floor(n / 10); 
    count++;              
  }
}
console.log("Number of digits:", count);