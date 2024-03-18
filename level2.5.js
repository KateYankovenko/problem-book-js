"use strict"

// No. 1

// Given a line, for example, like this:
// '023m0df0dfg0'
// Get an array of positions of all zeros in this string.

const toGetArr = str => { 
    let posArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            posArr.push(i);
        }
    }
    return posArr;
};

console.log(toGetArr('023m0df0dfg0'));


// No. 2

// Given some string:
// 'abcdefg'
// Remove every third character from this string. In our case it should look like this: 'abdeg'

const toCharRemove = str => { 
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if ((i + 1) % 3 !== 0) {//(i + 1) is used because array indices typically start from 0, but we want to count from 1 in this case, so selects every character except every third one in the sequence
            newStr += str[i];
        } 
    }
    return newStr;
};

console.log(toCharRemove('abcdefg'));


// No. 3

// Given an array, for example, like this:
// [1, 2, 3, 4, 5, 6]
// Divide the sum of the elements in even positions by the sum of the elements in odd positions.

const toDivSum = (...argv) => {
    let oddSum = 0;
    let evenSum = 0;
    let div = 0;
    for (let i = 0; i < argv.length; i++){
        if ((i + 1) % 2 === 0) {//even pos: 2d, 4th,...
            evenSum += argv[i];
        } else {
            oddSum += argv[i];
        }
    }
    return evenSum / oddSum;
};

console.log(toDivSum(1, 2, 3, 4, 5, 6));//1.3333333333333333