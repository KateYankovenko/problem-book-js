"use strict"

// No. 1

// Given an array. Make sure that each element is repeated twice.


// For each element(el), it checks if the index of the first occurrence 
// of el(arr.indexOf(el)) is not equal to the index of the last occurrence 
// of el(arr.lastIndexOf(el)).If they are not equal, it means the element 
// appears more than once in the array.

const checkRepeat = (...args) => { 
    return args.every((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el));
};

// console.log(checkRepeat(55, 34, 55, 22, 34, 78, 66, 66));
console.log(checkRepeat(55, 34, 55, 34, 66, 66));

// No. 2

// Given an array and a number.Leave in the array only those numbers
// that are divisors of the given number.

// No. 3

// Two numbers are given.Get an array of digits that are in both one
// and the second number.

// No. 4

// A number is given.Get an array with the position of all the digits 3
// in this number except the first and last.

// No. 5

// Given an array of numbers.Leave numbers consisting of different digits
// in it, and delete the rest.

const leaveDiffDigits = (...args) => { 
    let arr = String([...args]).split(",");
    console.log(arr);

    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const digit = arr[i][0];
        if (arr[i][0] !== arr[i][1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(leaveDiffDigits(23, 55, 67, 88, 90, 990));

// No. 6

// Given an array:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Merge the elements of this array into one one-dimensional array:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mergeArr = arr => { 
    return arr.flatMap(el => el);
};

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(mergeArr(arr));