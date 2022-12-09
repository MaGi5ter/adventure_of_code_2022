const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')

input = input.split('\n')

let elves = []
let currentCalories = 0

for (const i of input) {
    let row = parseInt(i)

    if (isNaN(row)) {
        elves.push(currentCalories)
        currentCalories = 0
    }
    else {
        currentCalories = currentCalories + row
    }
}

elves.push(currentCalories)
elves.sort(function(a, b) {
    return b - a;
});

console.log(elves[0] + elves[1] + elves[2])