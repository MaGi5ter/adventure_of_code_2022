"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// const fs = require('fs')
var inputString = fs.readFileSync('./input.txt', 'utf-8');
inputString = inputString.replace(/\r/g, '');
var input = inputString.split('\n');
inputString = "".concat(input[0]);
function createSmallerArray(startIndex, array, length) {
    var outputArray = [];
    for (var index_1 = startIndex; index_1 < startIndex + length; index_1++) {
        var element = array[index_1];
        outputArray.push(element);
    }
    return outputArray;
}
var completed = false;
var index = 0;
for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
    var iter = inputString_1[_i];
    // console.log(iter,index)
    if (index <= 2) { }
    else {
        ///////////////////     FIRST PART       ///////////////////////
        if (completed == false) {
            var arraycheck = createSmallerArray(index - 3, inputString, 4);
            var findDuplicates = function (arr) { return arr.filter(function (item, index) { return arr.indexOf(item) !== index; }); };
            if (findDuplicates(arraycheck).length < 1) {
                console.log('here part one', index + 1, arraycheck);
                completed = true;
            }
        }
        ///////////////////     SECOND PART       ///////////////////////
        if (index >= 12) {
            var arraycheck = createSmallerArray(index - 13, inputString, 14);
            var findDuplicates = function (arr) { return arr.filter(function (item, index) { return arr.indexOf(item) !== index; }); };
            if (findDuplicates(arraycheck).length < 1) {
                console.log('here part two', index + 1, arraycheck);
                break;
            }
        }
    }
    index += 1;
}
