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

const toFindPos = str => { 
    let arr = str.split(" ");
   
    for (let i = 0; i <= arr.length; i++){
        if(arr[i] === "0") {
            return i;
        }
    }
};

console.log(toFindPos("Zero is 0 here 0, find 0 it 0!"));


// No. 3

// Given numbers separated by commas:

// '12,34,56'
// Find the sum of these numbers.

const toFindSum = (...argv) => { 
    let sum = 0;
    
    for (let i = 0; i < argv.length; i++) {
        sum += argv[i];
    }
    return sum;
};

console.log(toFindSum(12, 34, 56));

// No. 4

// The date is given in the following format:

// '2025-12-31'
// Convert this date to the following object:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }


// ----------------dateString.split('-') splits the date string into an array 
// ----------------of substrings using "-" as the delimiter.
// ----------------The destructuring assignment[year, month, day] assigns each 
// ----------------part of the array to corresponding variables.

const toObject = (strDate) => { 
   const [year, month, day] = strDate.split('-');
    // console.log(strDate.split('-'));//['2025', '12', '31']
    const objDate = {
        year: year,
        month: month,
        day: day
    };
    return objDate;
};

console.log(toObject("2025-12-31"));//{year: '2025', month: '12', day: '31'}