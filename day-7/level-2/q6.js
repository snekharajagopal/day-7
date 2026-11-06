console.log("check number is palindrome");
let num =121;
let original=num;
let reverse=0;
while(num>0){
    let lastDigit=num%10;
    reverse=reverse*10+lastDigit;
    num=Math.floor(num/10);

}
console.log(reverse);
if(original===reverse){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}