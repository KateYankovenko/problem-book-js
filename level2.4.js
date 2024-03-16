"use strict"

// No. 1

// Given a string with letters and numbers. Get the position of the first digit in this string.

const toGetPos = str => { 
    
    const arr = str.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])){
            return i;
        }
    }
};

console.log(toGetPos("gjji6hh8snsn6"));//4


// No. 2

// Given an object with keys and values. Write the object's keys into the first array,
//and the values ​​into the second.

const toDisperse = (obj) => { 
   
    const keysArr = Object.keys(obj);
    const valArr = Object.values(obj);

    console.log(valArr);
    return keysArr;
};

console.log(toDisperse({ name: "Joe", age: 25, city: "LA", }));


// No. 3

// A number is given. Print the number of even digits in this number to the console.

const toNumPrint = num => { 
    let evenSum = 0;
    let arr = String(num).split('').map(Number);
    arr.forEach(function (el, index, arr) {
        if (el % 2 === 0) {
            evenSum ++;
        }
    });
    return evenSum;
};

console.log(toNumPrint(234567892));//5


// No. 4

// Given some string:
// 'abcde'
// Convert all odd letters in this string to uppercase. In our case it should look like this:
// 'AbCdE'

const toUpperCaseConv = str => { 
    let newStr = str.slice("");
    let upStr = "";
    console.log(newStr);

    for (let i = 0; i < newStr.length; i++){
        if (i % 2 === 0) {
            upStr += newStr[i];
        } else {
            upStr += newStr[i].toUpperCase();
        }
    }
    return upStr;
};

console.log(toUpperCaseConv("abcde"));


// No. 5

// Given a line with the words:
// 'aaa bbb ccc'
// Capitalize the first character of each word on this line. In our case it should look like this:
// 'Aaa Bbb Ccc'

const toCapitalize = str => { 
    let newStr = "";
    const strArr = str.split(" ");
    console.log(strArr);
    for (let i = 0; i < strArr.length; i++){
        if (strArr[i]) {
            let a = strArr[i];
            newStr += a[0].toUpperCase();
            newStr += a[i];
            newStr += a[i];
        }
    }
    return newStr;
};

console.log(toCapitalize('aaa bbb ccc'));