//bug-code
// let Price = 500
// const quantity = 3;
// let discount;
// if (quantity = 3) {
//   discount = 0.1;
// }
// let total = Price * quantity - discount;
// console.log("Total is " + total.toFixed(2);

//fixed code
const price = 500;
const quantity = 3;
let discount = 0;
if (quantity === 3) {
  discount = 0.1;
}
const amount = price * quantity;
const discountAmount = amount * discount;
const total = amount - discountAmount;

console.log(`Total is Rs. ${total.toFixed(2)}`);
