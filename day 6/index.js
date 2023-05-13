const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.replace(/\r/g,'')
input = input.split('\n')
input = `${input[0]}`

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
for (const iter of input) {
    // console.log(iter,index)

    if(index <= 2) {}
    else {


        ///////////////////     FIRST PART       ///////////////////////
        if(completed == false) {
            let arraycheck = createSmallerArray(index-3,input,4)
            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

            if(findDuplicates(arraycheck).length < 1) {
                console.log('here part one',index+1,arraycheck)
                completed = true
        }
        }

        ///////////////////     SECOND PART       ///////////////////////

        if(index>=12) {

            let arraycheck = createSmallerArray(index-13,input,14)
            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    
            if(findDuplicates(arraycheck).length < 1) {
                console.log('here part two',index+1,arraycheck)
                break
            }

        }

    }

    index += 1
}
