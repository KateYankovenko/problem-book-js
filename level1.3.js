"use strict"

// No. 1

// Given a string.If there is more than one character in this line,
// print the penultimate character of this line to the console.

function ifString(str) {
    return str[0] ? console.log("Here is smth! Got: ь")
        : console.log("Empty!");
}

ifString("");


// No. 2

// Two integers are given.
// Check that the first number is divisible by the second without a remainder.

function ifInt(int1, int2) {
    return int1 % int2 === 0 ? console.log("Congrats, no reminder!")
        : console.log("There is some modulo!");
}

ifInt(22, 81);