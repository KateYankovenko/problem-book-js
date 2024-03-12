"use strict";

// No. 1

// A number is given. Check if it is negative or not. Print this information to the console.

function ifNegative(number) {
    const numberCheck = (number >= 0) ? console.log(`Number: ${number} is positive!`)
        : console.log(`Number: ${number} is negative!`);
    return numberCheck;
}

ifNegative(90);


// No. 2

// Given a string. Print the length of this string to the console.


const stringGiven = "Wanna sleep home!";
console.log(stringGiven.length);


// No. 3

// Given a string. Print the last character of the line to the console.

const strA = "Do not use cheatcodes!";

console.log(strA[strA.length - 1]);


// No. 4

// A number is given. Check whether it is even or not.

const givenNum = 9997;

function ifIsEven(givenNum) {
    return givenNum % 2 === 0 ? console.log(`Number: ${givenNum} is even!`)
        : console.log(`Number: ${givenNum} is odd!`);
}

ifIsEven(givenNum);


// No. 5

// Two words are given. Check that the first letters of these words match.

function ifFirstMatch(word1, word2) {
    return word1[0] === word2[0] ? console.log("It is a match!")
        : console.log("There is no 1st matched letters!");
}

ifFirstMatch("Hi", "World");


// No. 6

// The word has been given.Get its last letter.
// If the word ends with a soft sign, then you get the penultimate letter.

function ifSoftSign(word) {
    return word[word.length - 1] === "ь" ? console.log(word[word.length - 2])
        : console.log("There is no softies!");    
}

ifSoftSign("ворожить");