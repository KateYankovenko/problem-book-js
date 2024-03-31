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

const leaveDivisors = (num, ...args) => {
    // Filter out elements that are divisors of the given number
    return args.filter(el => el % num === 0);
};

console.log(leaveDivisors(22, 567, 890, 45, 44, 88, 664));

// No. 3

// Two numbers are given.Get an array of digits that are in both one
// and the second number.

const getArr = (num1, num2) => { 
  
    const arr1 = String(num1).split("").map(el => Number(el));
    const arr2 = String(num2).split("").map(el => Number(el));
    const concatArr = arr1.concat(arr2);
    
   let newArr = concatArr.filter((el, i, arr) => arr.indexOf(el) !== i);
    return newArr;
};

console.log(getArr(2345, 467582));

// No. 4

const getPosition = num => {
    const arr = String(num).split("").map(el => Number(el));
    
    // Filter out the index of digit 3 except for the first and last positions
    const positions = arr.map((el, i) => el === 3 && i !== 0 && i !== arr.length - 1 ? i : -1)
                          .filter(index => index !== -1);//except for the first and last positions

    return positions;
};

console.log(getPosition(345637833903));

// No. 5

// Given an array of numbers.Leave numbers consisting of different digits
// in it, and delete the rest.


const leaveDiffDigits = (...args) => {
    return args.filter(num => {
        const digits = String(num).split('');
        return new Set(digits).size === digits.length;
    });
};

//a Set from these digits, which automatically removes duplicates. 
//  Compare the size of the Set with the length of the original digits array.
//  If they are equal, it means all digits are unique, and we keep the number.

console.log(leaveDiffDigits(23, 55, 67, 88, 90, 990, 45));

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