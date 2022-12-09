const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')

input = input.split('\n')

let mostCalories = 0
let currentCalories = 0
for (const i of input) {

    let row = parseInt(i)

    if (isNaN(row)) {
        if(mostCalories < currentCalories) {
            mostCalories = currentCalories
            currentCalories = 0
        }
        else currentCalories = 0
    }
    else {
        currentCalories = currentCalories + row
    }
}
console.log(mostCalories)