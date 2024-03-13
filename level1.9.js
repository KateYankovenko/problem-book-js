"use strict"

// No. 1

// Given an array with strings. Leave in this array only those lines that begin with http://

const toLeaveLine = (...argv) => {
    let arr = [];
    for (let str of argv) {
        if (str.startsWith("http://")) {
            arr.push(str);
        }
    }
    return arr;
};

console.log(toLeaveLine("Follow: http://go.ua", "Not Today", "http://yes.do", "http://far.away"));


// No. 2

// Given an array with strings. Leave in this array only those lines that end with .html.

const endsWith = (...argv) => { 
    const arr = [];
    for (let str of argv) {
        if (str.endsWith(".html")) {
            arr.push(str);
        }
    }
    return arr;
};

console.log(endsWith("home.html", "joke.doe", "goe.html"));


// No. 3

// Given an array of numbers. Increment each number in the array by 10a percentage.

const toIncrement = (...argv) => { 
    const arr = [];
    for (let num of argv) {
        arr.push(num * 1.1);
    }
    return arr;
};

console.log(toIncrement(1, 2, 100))