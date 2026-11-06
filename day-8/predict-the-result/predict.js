//Q1
console.log("Q1:", add(2, 3));
function add(a, b) {
  return a + b;
}

//Q2
const double = (n) => n * 2; // renamed from f to avoid clash with Q9
console.log("Q2:", double(4), double("3"));

//Q3
const arr1 = [1, 2, 3]; // renamed a→arr1
const arr2 = arr1; // renamed b→arr2
arr2.push(4);
console.log("Q3:", arr1.length, arr1 === arr2);

//  Q4
console.log("Q4:", [10, 9, 100, 1].sort());

// Q5
console.log(
  "Q5:",
  [1, 2, 3, 4].map((n) => n * n).filter((n) => n > 4),
);

//  Q6
console.log(
  "Q6:",
  [1, 2, 3].reduce((s, n) => s + n),
);

// Q7
const o = { a: 1 };
const c = { ...o, a: 2, b: 3 };
console.log("Q7:", o, c);

//  Q8
console.log("Q8:", typeof [], Array.isArray([]), [1] === [1]);

// Q9
let x = 1;
function f2() {
  let x = 2;
  return x;
} // renamed f→f2
console.log("Q9:", f2(), x);

//  Q10
console.log(
  "Q10:",
  JSON.stringify({ a: undefined, b: () => 1, c: NaN, d: "x" }),
);
