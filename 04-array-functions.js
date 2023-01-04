// accepts an array and returns the total of the
// differences of each value in the array
// given: [2, 6, 12, 19]
// returns (4 + 6 + 7) -> 17
function sumDelta(arr) {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++){
    let v1 = arr[i];
    let v2 = arr[i + 1];
    let delta = Math.abs(v1 - v2);
    total += delta;
  }
  return total;
}

// Consider these cases when you're writning a function that deals with an array
// what if the array was empty
// what if there's just one value in the array
// waht if there's two values?
// what if there's many values?

console.log(sumDelta([]))
console.log(sumDelta([9]))
console.log(sumDelta([9,2]))
console.log(sumDelta([2,6,12,19]))
