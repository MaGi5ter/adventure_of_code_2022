const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.replace(/\r/g,'')
input = input.split('\n')

let cratesLIST = () => {

    let arr = []
    for (const inputLine of input) {
        if(inputLine.includes('1')) {
            break
        }
        else {
            arr.push([inputLine])
        }
    }

    return arr
}

let cratesArray = () => {

    let returnArray = []

    let list = cratesLIST()

    for (const inputLine of list) {
        
        let inputL = `${inputLine}`

        let arrIndex = 0
        for (let index = 1; index < inputL.length; index+=4) {
            const element = inputL[index];

            if(returnArray[arrIndex] == undefined) returnArray.push([])

            if(element != ' ') {
                returnArray[arrIndex].unshift(element)
            }
            arrIndex += 1
            
        }

    }

    return returnArray
}

let crates = cratesArray()

function executeLine(line,crates) {
    const args = line.trim().split(/ +/);

    let move = Number(args[1])
    let from = Number(args[3] - 1)
    let to   = Number(args[5] - 1)

    console.log(move,from,to)

    for (let index = 0; index < move; index++) {
        
        crates[to].push(crates[from][crates[from].length - 1] )
        crates[from].pop()
        
    }

    return crates
}

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    
    if(element.includes('move')) crates = executeLine(`${element}`,crates)

}

let output = (crates) => {

    let outputString = ''

    crates.forEach(element => {
        outputString = `${outputString}${element[element.length - 1]}`
    });

    return outputString
}

console.log(output(crates))