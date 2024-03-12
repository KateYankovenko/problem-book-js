"use strict"

// No. 1

// A number is given. Print the first digit of this number to the console.

const number = 234567;
let toStr = number.toString();
console.log(+toStr[0]);//unary operator "+" will convert str to num

let toNum = parseInt(toStr, 10);
console.log(toNum);


// No. 2

// A number is given. Print the last digit of this number to the console.
console.log(+toStr[toStr.length - 1]);

// No. 3

// A number is given. Print the sum of the first and last digits of this number to the console.

console.log(+toStr[0] + +toStr[toStr.length - 1]);


// No. 4

// A number is given. Print the number of digits in this number.

const givNum = 6964858;
console.log(givNum.toString().length);


// No. 5

// Two numbers are given. Check that the first digits of these numbers match.

function ifNumMatch(num1, num2) {
    return (num1.toString())[0] === (num2.toString())[0] ? console.log("It is a match!")
        : console.log("No matching nums!");
}

ifNumMatch(98, 96);