
import * as fs from 'fs'
// const fs = require('fs')
let inputString = fs.readFileSync('./input.txt','utf-8')
inputString = inputString.replace(/\r/g,'')
let input = inputString.split('\n')
inputString = `${input[0]}`

function createSmallerArray(startIndex,array,length) {

    let outputArray = []

    for (let index = startIndex; index < startIndex+length; index++) {
        const element = array[index];

        outputArray.push(element)
        
    }

   return outputArray

}

let completed = false
let index = 0
for (const iter of inputString) {
    // console.log(iter,index)

    if(index <= 2) {}
    else {


        ///////////////////     FIRST PART       ///////////////////////
        if(completed == false) {
            let arraycheck = createSmallerArray(index-3,inputString,4)
            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

            if(findDuplicates(arraycheck).length < 1) {
                console.log('here part one',index+1,arraycheck)
                completed = true
        }
        }

        ///////////////////     SECOND PART       ///////////////////////

        if(index>=12) {

            let arraycheck = createSmallerArray(index-13,inputString,14)
            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    
            if(findDuplicates(arraycheck).length < 1) {
                console.log('here part two',index+1,arraycheck)
                break
            }

        }

    }

    index += 1
}
