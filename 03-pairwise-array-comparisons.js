const ww = [70, 72, 68, 65, 74, 74, 73]

// looking ahead
let max_delta = Math.abs(ww[0] - ww[1])
for (let i = 0; i < ww.length - 1; i++){
  let temp1 = ww[i]
  let temp2 = ww[i + 1]
  let delta = Math.abs(temp1 - temp2);
  console.log(`Comparing ${temp1}, ${temp2}, delta ${delta}`)
  if (delta > max_delta) {
    max_delta = delta
  }
}

console.log(`max delta: ${max_delta}`)


// looking behind
let max_delta2 = Math.abs(ww[0] - ww[1])
for (let i = 1; i < ww.length; i++){
  let temp1 = ww[i]
  let temp2 = ww[i - 1]
  let delta = Math.abs(temp1 - temp2);
  console.log(`Comparing ${temp1}, ${temp2}, delta ${delta}`)
  if (delta > max_delta2) {
    max_delta2 = delta
  }
}

console.log(`max delta: ${max_delta2}`)
