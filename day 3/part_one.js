const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.replace(/\r/g,'')
input = input.split('\n')

const punctation = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let sum = 0

for (const rucksack of input) {
    let comparament_one = rucksack.slice(0,-rucksack.length/2)
    let comparament_two = rucksack.slice(rucksack.length/2)

    comparament_two = comparament_two.split('')

    for (const item of comparament_one) {
        const found = comparament_two.find(element => element == item)
        if(found == undefined) continue

        const foundscore = punctation.findIndex(element => element == found)

        sum += foundscore + 1
        console.log(found , foundscore+1)
        break
    }

    // console.log(comparament_one,' ',comparament_two)
}

console.log(sum)