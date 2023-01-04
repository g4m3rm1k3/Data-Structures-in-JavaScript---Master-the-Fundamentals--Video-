const minefield = [
  ["*", "*", "", ""],
  ["*", "*", "", ""],
  ["", "", "*", ""],
  ["", "", "", ""],


];

// the output should print out the following
// **20
// **31
// 23*1
// 0111
// function that accepts a minefeild and prints out nearsest neightbors or mines
function minesweeper(minefield) {
  function checkBounds(arr, row, col) {
    if (row < 0 || col < 0 || row > arr.length - 1  || col > arr[row].length - 1) {
      return 0;
    }
    return arr[row][col]
  }
  function updateBombs(arr, r1, c1) {
    let bombs = 0
    if (checkBounds(arr, r1, c1 - 1) === "*"){
      bombs += 1//left
    }
    if (checkBounds(arr, r1, c1 + 1) === "*"){
      bombs += 1//right
    }
    if (checkBounds(arr, r1 - 1, c1 + 1) === "*") {
      bombs += 1//top-right
    }
    if (checkBounds(arr, r1 -1 , c1) === "*"){
      bombs += 1//top
    }
    if (checkBounds(arr, r1 - 1, c1 - 1) === "*") {
      bombs += 1//top-left
    }
    if (checkBounds(arr, r1 + 1, c1) === "*") {
      bombs += 1 // bottom
    }
    if (checkBounds(arr, r1 + 1, c1 - 1) === "*") {
      bombs += 1//bottom-left
    }
    if (checkBounds(arr, r1 + 1, c1+1) === "*"){
      bombs += 1//bottom-right
    }
    return bombs
  }

  for (let i = 0; i < minefield.length; i++){
    for (let j = 0; j < minefield[i].length; j++){
      if (minefield[i][j] !== "*") {

        minefield[i][j] = updateBombs(minefield, i, j)
      }
    }
  }
  return minefield

}

console.log(minesweeper(minefield))
