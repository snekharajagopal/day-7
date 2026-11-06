// q4 bug code
// const prices = [];
// const total = prices.reduce((s, p) => s + p);

//q4 fix code
const prices = [];
const total = prices.reduce((s, p) => s + p, 0);
console.log(total);