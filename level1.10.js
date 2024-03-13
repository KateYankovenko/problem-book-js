"use strict"

// No. 1

// Fill the array with random numbers from the range from 1to 100.

const fillRandom = (start, end) => { 
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(Math.random(start, end));
    }
    return arr;
};

console.log(fillRandom(1, 100));


// No. 2

// Given a number:

// 12345
// Print all its characters from the end to the console.

function printChar(num) {
    let n = num.toString().split("").reverse().join("");
    return n;
}

console.log(printChar(12345));


// No. 3

// Given an array, for example, like this:
// [1, 2, 3, 4, 5, 6]
// In turn, output to the console subarrays of two elements of our array:
// [1, 2]
// [3, 4]
// [5, 6]

function subArr(...argv) {
    let arr = [];

}

console.log(subArr(1, 2, 3, 4, 5, 6));


// No. 4

// Given two arrays:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Merge these arrays into a new array:

// [1, 2, 3, 4, 5, 6]