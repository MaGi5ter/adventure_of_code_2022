const fs = require('fs')
let input = fs.readFileSync('./input.txt','utf-8')
input = input.replace(/\r/g,'')
input = input.split('\n')

const punctation = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let sum = 0



let groups = [[]] //groups of elves rucksacks

let count = 0
let groupindex = 0
for (const rucksack of input) {             //adds group of three to array
    if(count == 3){ 
        count = 0 
        groups.push([])
        groupindex += 1
    }

    groups[groupindex].push(rucksack)
    count += 1

}

for (const group of groups) { //for every group
    let rucksack_one    = group[0].split('')
    let rucksack_two    = group[1].split('')
    let rucksack_three  = group[2].split('')

    for (const item of rucksack_one) {
        let found_one = rucksack_two.find(element => element == item)
        if(found_one == undefined) continue

        let found_two = rucksack_three.find(element => element == item)
        if(found_two == undefined) continue

        //console.log(item) //every elve in group have this item

        const foundscore = punctation.findIndex(element => element == item)
        sum += foundscore + 1
        console.log(item , foundscore+1)
        break
    }
}

console.log(sum)
