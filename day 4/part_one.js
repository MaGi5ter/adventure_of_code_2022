const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.replace(/\r/g,'')
input = input.split('\n')

let sum = 0

for (const pairs of input) {
    let pair = pairs.split(',')

    let pair_one = pair[0].split('-').map(x => parseInt(x))
    let pair_two = pair[1].split('-').map(x => parseInt(x))

    console.log(pair)

    if(Math.max(...pair_one) >= Math.max(...pair_two) && Math.min(...pair_one) <= Math.min(...pair_two)) {
        sum += 1
        console.log(pair_one , pair_two)
    }
    else if(Math.max(...pair_one) <= Math.max(...pair_two) && Math.min(...pair_one) >= Math.min(...pair_two)) {
        sum += 1
        console.log(pair_one , pair_two)
    }
}

console.log(sum)