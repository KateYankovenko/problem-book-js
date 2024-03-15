"use strict"

// No. 1

// Given an array of numbers. Count the number of negative numbers in this array.

const toNumCount = (...argv) => { 
    let negSum = 0;
    for (let i = 0; i < argv.length;i++) {
        if (argv[i] < 0) {
            negSum++;
        }
    }
    return negSum;
};

console.log(toNumCount(1, 5, 7, 56, -4, -8, 0, -7, -1));


// No. 2

// Given an array of numbers. Leave only positive numbers in it.

const toPos = (...argv) => { 
    let posNums = [];
    for (let i = 0; i < argv.length; i++){
        if (argv[i] >= 0) {
            posNums.push(argv[i]);
        }
    }
    return posNums;
};

console.log(toPos(1, -6, 8, -9, -3, -4, 0, 77));


// No. 3

// Given a string. Remove the second to last character from this string.

const toRemoveLet = str => { 
    let newStr = str.split("");
    console.log(newStr);
    for (let i = 0; i <= str.length; i++) {
        newStr.splice(1, str.length - 1);
    }
    return newStr;
};

console.log(toRemoveLet("Why go home"));


// No. 4

// Given an array, for example, like this:

// [1, 2, 3, 4, 5, 6]
// Divide the sum of the first half of the elements
// of this array by the sum of the second half of the elements.

const toDivSum = (...argv) => { 
    let sum1 = 0;
    let sum2 = 0;
    let splitArr = [];
    
    // Calculate the index for splitting the array
    const halfIndex = Math.ceil(argv.length / 2);//rounding to the closest int value
    
    // Split the array into two halves
    const arr1 = argv.slice(0, halfIndex);
    const arr2 = argv.slice(halfIndex);
    
    // Calculate sum of the first half
    arr1.forEach(function (el) {
        sum1 += el;
    });
    
    // Calculate sum of the second half
    arr2.forEach(function (el) { 
        sum2 += el;
    });
    
    // Calculate the result
    const result = sum1 / sum2;
    
    console.log(arr1, arr2, sum1, sum2);
    return result;
};

console.log(toDivSum(1, 2, 3, 4, 5, 6));