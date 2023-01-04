// return true if the array is sorted either
// ascending or descending.
// [] -> true
// [3] -> true
// [39, 41] -> true
// [41, 39] -> true
// [1,2,3,4,5] -> true
// [5,4,3,2,1] -> true
// [1,5,2] -> false
function isSorted(arr) {
  let asc = true
  let dec = true
  for (let i = 1; i < arr.length; i++){
    let v1 = arr[i - 1]
    let v2 = arr[i]

    if (v1 < v2) {
      dec = false
    }
    if (v1 > v2) {
      asc = false
    }
  }
  return asc && "asceding" || dec && "descending"

}

console.log(isSorted([] )) //-> true
console.log(isSorted([3] ))//-> true
console.log(isSorted([39, 41] ))//-> true
console.log(isSorted([41, 39] ))//-> true
console.log(isSorted([1,2,3,4,5] ))//-> true
console.log(isSorted([5,4,3,2,1]))// -> true
console.log(isSorted([1,5,2] ))//-> false
