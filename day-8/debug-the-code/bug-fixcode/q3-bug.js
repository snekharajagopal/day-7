//q3 bug code 
// const nums = [10, 9, 1, 100];
// nums.sort();
// console.log(nums);

//q3 fix code
const nums = [10, 9, 1, 100];
nums.sort((a, b) => a - b);
console.log(nums);
