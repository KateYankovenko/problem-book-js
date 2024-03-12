"use strict"

// No. 1

// Print all integers from 1to to the console 100.

function printInt(i, end) {
    for (i = 1; i <= end; i++){
        console.log(i);
    }
    return;
}

printInt(1, 100);

// No. 2

// Print all integers from -100to to the console 0.
function printRevInt(start, end) {
    let i;
    for (i = start; i <= end; i+=1){
        console.log(i);
    }
    return;
}

printRevInt(-100, 0);


// No. 3

// Print all integers from 100to to the console 1.
function printDescInt(start, end) {
    let i;
    for (i = start; i >= end; i-=1){
        console.log(i);
    }
    return;
}

printDescInt(100, 1);


// No. 4

// Print to the console all even numbers in the interval from 1to 100.

function ifEven(num1, num2) {
    for (let i = num1; i <= num2; i += 1){
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    return;
}

ifEven(1, 100);


// No. 5

// Print to the console all numbers that are multiples of three in the range from 1to 100.

function ifMultiplOnThree(num1, num2) {
    for (let i = num1; i <= num2; i += 1){
        if (i % 3 === 0) {
            console.log(i);
        }
    }
    return;
}

ifMultiplOnThree(1, 100);