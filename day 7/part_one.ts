import * as fs from 'fs'
// const fs = require('fs')
let inputString = fs.readFileSync('./input.txt','utf-8')
inputString = inputString.replace(/\r/g,'')
let input = inputString.split('\n')

function saveObjectToFile(object, filePath) { //used for testing
    const jsonString = JSON.stringify(object, null, 2); // Prettify with 2 spaces
    fs.writeFileSync(filePath, jsonString);
  }


let tree = {
    outermost: {
        size: 0,
        name: 'outermost'
    }
}

let currentDirectory = ['outermost']

//const currentObj = currentDirectory.reduce((obj, dir) => obj[dir], tree);

function addDirectory(directoryName) {
    const currentObj = currentDirectory.reduce((obj, dir) => obj[dir], tree);
    currentObj[directoryName] = {
        size: 0,
        name: directoryName
    };
}

function addFile(size:number,name:String) {
    const currentObj = currentDirectory.reduce((obj, dir) => obj[dir], tree);
    currentObj[name] = {
        size: size,
        name: name
    };
}

function isNumber(value:string) {
    return /^-?\d+\.?\d*$/.test(value);
  }

for (const command of input) { //CREATES A TREE FROM INPUT

    const args = command.trim().split(/ +/);
    
    if(args[0] == '$') {
        if(args[1] == 'cd') {  //Change directory
            if(args[2] == '/') currentDirectory = ['outermost']
            else if(args[2] == '..') currentDirectory.pop()
            else {
                currentDirectory.push(args[2])
            }
        }
        else if(args[1] == 'ls') {} //Do nothing
    }
    else if(args[0] == 'dir') {

        addDirectory(`${args[1]}`)

    }
    else if(isNumber(args[0])) {

        addFile(Number(args[0]),args[1])

    }
}

let totalmax100k = 0

async function calculateSize(folder:Object) {

    let size = 0

    for (const iterator of Object.values(folder)) {

        if(typeof iterator === 'object' && iterator !== null) {
            if(iterator.size == 0) {

                // setTimeout(async () => {
                    let inSize = await calculateSize(iterator)
                    console.log(inSize)
                    size += inSize

                    if(inSize <= 100000) totalmax100k += inSize
                // }, 0);
    
            }else {
                

                size += iterator.size
    
            }
        }

    }

    return size
}

async function name() {
    let total = await calculateSize(tree)

    console.log(total,totalmax100k)
}

name()

// saveObjectToFile(tree,'./test.json')//JUST FOR TESTS
// console.log(tree)