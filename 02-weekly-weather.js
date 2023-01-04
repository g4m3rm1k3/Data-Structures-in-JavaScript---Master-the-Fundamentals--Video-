const weekdays = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekly_weather = [70, 72, 68, 65, 74, 74, 73];


// use a for loop to iterate through every value in an array
for (let i = 0; i < weekdays.length; i++) {
  console.log(`The temperature on ${weekdays[i]} was: ${weekly_weather[i]}`)
}

let total_temp = 0
for (let i of weekly_weather) {
  total_temp += i
}
console.log(`The aveage temperatures for this week was ${(total_temp / weekdays.length).toFixed(2)}`)

let smallest = weekly_weather[0];
let largest = weekly_weather[0];

for (let temp of weekly_weather) {
  if (temp < smallest) {
    smallest = temp
  }
  if (temp > largest) {
    largest = temp
  }
}
console.log(`The lowest temp was : ${smallest}`)
console.log(`The highest temp was : ${largest}`)
