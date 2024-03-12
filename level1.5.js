"use strict"

// No. 1

// Find the sum of all integers from 1to 100.

const findSum = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i < num2; i += 1) {
        sum += i;
    }
    return sum;
};

findSum(1, 100);


// No. 2

// Find the sum of all even integers in the interval from 1to 100.

const evenSum = (num1, num2) => { 
    let sum = 0;
    for (let i = num1; i <= num2; i += 1){
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};

evenSum(1, 100);


// No. 3

// Find the sum of all odd integers in the interval from 1to 100.

const oddSum = (num1, num2) => { 
    let sum = 0;
    for (let i = num1; i <= num2; i += 1){
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

oddSum(1, 100);


// No. 4

// Two integers are given. Find the remainder when the first number is divided by the second.

const findRemndr = (num1, num2) => { 
    return num1 % num2;
};

findRemndr(9, 4);


// No. 5

// A certain string is given.Iterate and output
// to the console one by one all the characters from the end of the line.

const str = str => { 
    for (let i = str.length; i >= 0; i -= 1){
        console.log(str[i]);
    }
    return;
};
str("Awesome!");