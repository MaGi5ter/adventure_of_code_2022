const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.split('\n')

let totalScore = 0

for (const game of input) {
    let opponent = game[0]
    let result = game[2]  //X LOSE //Y DRAW //Z WIN

    let score = 0

    if(result == 'X'){ //LOSE
        if(opponent == 'A') { //me gives Z
            score += 3
        }
        else if(opponent == 'B') { //me gives X
            score += 1
        }
        else if(opponent == 'C') { //me gives Y
            score += 2
        }
    }
    else if(result == 'Y') { //DRAW
        score += 3

        if(opponent == 'A') { //me gives X
            score += 1
        }
        else if(opponent == 'B') { //me gives Y
            score += 2
        }
        else if(opponent == 'C') { //me gives Z
            score += 3
        }
    }
    else {                    //WIN
        score += 6

        if(opponent == 'A') { //me gives Y
            score += 2
        }
        else if(opponent == 'B') { //me gives Z
            score += 3
        }
        else if(opponent == 'C') { //me gives X
            score += 1
        }
    }

    totalScore += score
}

console.log(totalScore)