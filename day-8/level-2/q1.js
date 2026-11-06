//Write max(arr) first with a loop, then again with reduce. Do not use Math.max
//using the loop
function maxWithLoop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let highest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
}

console.log(maxWithLoop([10, 50, 20, 90, 30]));
//using the reduce()
function maxWithReduce(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce((highest, current) =>
    current > highest ? current : highest,
  );
}

console.log(maxWithReduce([10, 50, 20, 90, 30]));
