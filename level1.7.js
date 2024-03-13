"use strict"

// No. 1

// Given the line:
// 'abcde'
// Get an array of letters from this string.

const str = "abcde";
let arr = str.split("");
console.log(arr);


// No. 2

// Given a number:
// 12345
// Get an array of digits for this number.

const num = 12345;
const arr1 = num.toString().split("").map(Number);
console.log(arr1);


// No. 3

// Given a number:
// 12345
// Flip it over:
// 54321

const flipNum = (num3) => { 
    return parseInt(num3.toString().split("").reverse().join(""));
};

console.log(flipNum(12345));//54321


// No. 4

// Given a number:

// 12345
// Find the sum of the digits of this number.

const findSum = (num) => { 
    let arr = num.toString().split("").map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i];
    }
    return sum;
};

console.log(findSum(12345));