const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.split('\n')

let totalScore = 0

for (const game of input) {
    let opponent = game[0]
    let me = game[2]

    let score = 0

    if(me == 'X') {
        score = score + 1
    }
    else if(me == 'Y') {
        score = score + 2
    }
    else score = score + 3

    if(opponent == 'A' && me == 'X') {        //DRAWS
        totalScore = totalScore + score + 3
        console.log('DRAW')
    }
    else if(opponent == 'B' && me == 'Y') {        
        totalScore = totalScore + score + 3
        console.log('DRAW')
    }
    else if(opponent == 'C' && me == 'Z') {        
        totalScore = totalScore + score + 3
        console.log('DRAW')
    }
    //WINS
    else if(opponent == 'A' && me == 'Y') {
        totalScore = totalScore + score + 6
        console.log('WIN')
    }
    else if(opponent == 'B' && me == 'Z') {
        totalScore = totalScore + score + 6
        console.log('WIN')
    }
    else if(opponent == 'C' && me == 'X') {
        totalScore = totalScore + score + 6
        console.log('WIN')
    }
    else { //LOSES
        console.log('LOSE')
        totalScore = totalScore + score
    }
}

console.log(totalScore) //13221