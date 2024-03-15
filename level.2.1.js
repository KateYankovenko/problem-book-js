"use strict"

// No. 1

// A certain string is given. Find the position of the first zero in the string.

const toFindZero = str => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            return `Your zero is at position ${i}`;
        }
    }
    return "Sorry...";
};

console.log(toFindZero("zero 0 is here 0"));


// No. 2

// Print to the console all numbers in the range from 1 to 1000,
// the sum of the first and second digits of which is equal to five.

// we can effectively extract the first and second digits of a given number, 
//which allows us to check whether their sum equals five:
const toPrintNums = (start, end) => {
    let resultArr = [];
    for (let i = start; i <= end; i++) {
        const firstDigit = Math.floor(i / 10);//rounds down to the nearest integer: 57/10=5.7=>5
        const secondDigit = i % 10;// isolates the second digit of the number:123%10=3
        const sum = firstDigit + secondDigit;
        if (sum === 5) {
            resultArr.push(i);
        }
    }
    return resultArr;
};

console.log(toPrintNums(1, 1000));
    

// No. 3

// Given an array. Remove elements with a given value from it.

const toElRemove = (rem, ...argv) => { 
    let arr = argv.slice();// Copy the input array to preserve the original
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === rem) {
            arr.splice(i, 1);// Remove one element at index i
            // i--;// Decrement i to account for the removed element
        }
    }
    return arr;
};

console.log(toElRemove(5, 9, 5, 4, 5));//[9, 4]


// No. 4

// Given an array, for example, like this:

// [1, 2, 3, 4, 5, 6]
// Find the sum of the first half of the elements of this array.

const toFindSum = (...argv) => { 
    let sum = 0;
    const arr = [];
    let split = argv.length / 2;
    for (let i = 0; i < argv.length; i+=split){
        arr.push(argv.slice(i, i + split));
        console.log(arr);
        let arr1 = arr[0];
        console.log(arr1);
            for (let i = 0; i < arr1.length; i ++){
                sum += i;
            }
    }
    return sum;
};

console.log(toFindSum(1, 2, 3, 4, 5, 6));