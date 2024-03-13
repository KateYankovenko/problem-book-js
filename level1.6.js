"use strict"

// No. 1

// Given an array of numbers. Find the sum of the squares of the elements of this array.


const findSqrSum = (...argv) => { 
    let sum = 0;
    for (let i = 0; i < argv.length; i += 1){
        sum += Math.pow(argv[i], 2);
    }
    return sum;
};

console.log(findSqrSum(2, 1, 65));//4230


// No. 2

// Given an array of numbers. Find the sum of the square roots of the elements of this array.

const findSqrtSum = (...argv) => { 
   
    let sum = 0;
    for (let i = 0; i < argv.length; i += 1){  
        sum += Math.sqrt(argv[i]);
    }
    return sum;
};

console.log(findSqrtSum(2, 4, 88));//12.795045082019953


// No. 3

// Given an array of numbers. Find the sum of the positive elements of this array.

const toFindPosElSum = (...argv) => { 
    let sum = 0;
    for (let i = 0; i < argv.length; i += 1){
        if (argv[i] >= 0) {
            sum += argv[i];
        }
    }
    return sum;
};

console.log(toFindPosElSum(-1, 34, 0, -6));//34


// No. 4

// Given an array of numbers. Find the sum of those elements of this array that are greater than zero and less than ten.

const toFindElSum = (...argv) => { 
    let sum = 0;
    for (let i = 0; i < argv.length; i += 1){
        if (0 < argv[i] && argv[i] < 10) {
            sum += argv[i];
        }
    }
    return sum;
};

console.log(toFindElSum(2, 4, -1, 10));//6

