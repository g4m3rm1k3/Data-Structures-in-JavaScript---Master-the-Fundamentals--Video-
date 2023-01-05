
// Function to create an array
function randomArray(max, size) {
  let result = new Array(size);
  for (let i = 0; i < size; i++){
    result[i] = Math.floor(  Math.random() * max)
  }
  return result;

}


// tally sort algorithm
function tallySort(aa) {
  // the tally array
  let result = new Array();
  // adding the values to the tally index
  aa.forEach((i, j) => {
    if (!result[i]) {
      result[i] = 0;
    }
    result[i] += 1 ;

  })

  // create sorted array to return
  let value = new Array()
  result.forEach((val, j) => {
    for (let i = 0; i < val; i++){
      value.push(j)
    }
  })

  return value
}


let aa = randomArray(1000, 10)
console.log(aa);
console.log(tallySort(aa))
