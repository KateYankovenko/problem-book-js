"use strict"

// No. 1

// Fill the array with integers from 1to 10.

const fillArr = (start, end) => {
    let arr = [];
    
    for (let i = start; i <= end; i += 1){
        arr.push(i);
    }
    return arr;
};

console.log(fillArr(1, 10));


// No. 2

// Fill the array with even numbers from 1to 100.

const pushEven = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i += 1){
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
};

console.log(pushEven(1, 100));


// No. 3

// Given an array with fractions:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Round these fractions to one decimal place.

// const toRound = (...argv) => { 
//     let arr = [];
//     for (let i = 0; i <= argv.length; i++){
//         let n = Math.floor(argv[i]*10)/10;
//         arr.push(n);
//     }
//     return arr;
// };

// console.log(toRound(1.456, 2.125, 3.32, 4.1, 5.34));//[1.4, 2.1, 3.3, 4.1, 5.3, NaN]-----use a code below:------

const toRound = (...argv) => { 
    let arr = [];
    for (const num of argv) {
        let n = Math.floor(num * 10) / 10;
        arr.push(n);
    }
    return arr;
};

console.log(toRound(1.456, 2.125, 3.32, 4.1, 5.34));
