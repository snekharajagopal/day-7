//q7 bug code
// const original = [1, 2, 3];
// const copy = original;
// copy.push(4);
// console.log(original);

//q7 fix code
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original);
console.log(copy)