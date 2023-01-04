
function largestProduct(aa) {
  let largest = aa[0][0] * aa[0][1];
  let val1 = [];
  let val2 = [];

  function getCell(aa, row, col) {
    if (row < 0 || col < 0 || row >= aa.length || col > aa[row].length) {
      return 0;
    }
    return aa[row][col]
  }

  function updateLargest(r1, c1, r2, c2) {
    let value = getCell(aa,r1,c1)
    let other = getCell(aa,r2,c2)
    if (value * other > largest) {
      largest = value * other;
      val1 = [r1, c1]
      val2 = [r2, c2]
    }
  }

  for (let row = 0; row < aa.length; row++) {
    for (let col = 0; col < aa[row].length; col++) {
      updateLargest(row, col, row, col + 1)
      updateLargest(row, col, row, col - 1)
      updateLargest(row, col, row - 1, col)
      updateLargest(row, col, row + 1, col)
    }
  }
  return `${aa[val1[0]][val1[1]]} * ${aa[val2[0]][val2[1]]} = ${largest}`

}

let aa = [
  [32, 45, 67, 99],
  [93, 34, 88, 12],
  [32, 76, 22, 74],
  [77, 33, 88, 99],

]
console.log(largestProduct(aa))
