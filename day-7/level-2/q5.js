console.log("reverse a number");
let num = 1234;
let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10;         
    reversed = (reversed * 10) + lastDigit; 
    num = Math.floor(num / 10);       
}

console.log(reversed); 