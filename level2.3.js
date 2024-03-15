"use strict"

// No. 1

// Two words are given.
// Check that the last letter of the first word matches the first letter of the second word.

const toCheckLet = (str1, str2) => { 

    let arr1 = str1.split("");
    let arr2 = str2.split("");

    console.log(arr1, arr2);
    console.log(arr1[arr1.length - 1], arr2[0]);

    if (arr1[arr1.length - 1] === arr2[0]) {
        return "It is a match!";
    } else {
        return "Sorry not sorry!";
    }

    // return arr1[arr1.length - 1] === arr2[0] ? console.log("yes")
    //     : console.log("no");//will see in a console "undefined" because of console.log as a return value
};

console.log(toCheckLet("Work", "Weather"));


// No. 2

// A certain string is given. Find the position of the third zero in the line.




// No. 3

// Given numbers separated by commas:

// '12,34,56'
// Find the sum of these numbers.



// No. 4

// The date is given in the following format:

// '2025-12-31'
// Convert this date to the following object:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }