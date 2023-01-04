let timesTable = [
[1,2,3,4,5],
[2,4,6,8,10],
[3,6,9,12,15],
[4,8,12,16,20],
[5,10,15,20,25],
]

console.log(timesTable)

for (let row of timesTable) {
  let line = ""
  for (let col of row){
    line += `${col} `

  }
  console.log(line);
}
