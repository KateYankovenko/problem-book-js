// No. 1

// Given a string. Check that this string consists of numbers only.

const checkStr = str => {
    for (const char of str) {
        if (!char.match(/[0-9]/)) {
            return "Sorry, there are not only nums...";
        }
    }

    return "Str contains nums only, congrats!";
};

console.log(checkStr("345"));

// No. 2

// Given a string. Check that this string contains only even digits.

const checkEvenDigits = str => { 
    const arr = str.split(" ");
    console.log(arr);
    
    for(let num of arr) { 
        if (num % 2 !== 0) {
            return "there is smth ODD among of nums!";
        }
    }
    return "All nums are EVEN!";
};

console.log(checkEvenDigits("88 22 66 56 71"));

// No. 3

// Given an array of numbers. Remove numbers from it that have two or more zeros.

const removeNums = (...args) => { 
    let arr = String([...args]).split(",");
    console.log(arr);
    let newArr = [];

    for (let num of arr) {
        if (!num.includes("00")) {
            newArr.push(num);
        }
    }
    return newArr;
};

console.log(removeNums(34, 56, 780, 21, 5600, 456000));

// No. 4

// Find all numbers from 1to 1000whose sum of digits is equal to 13.

const findNums = (start, end) => { 

    // Array(1000) creates an array with 1000 elements.
    // .fill(0) fills each element with the value 0.
    // .map((_, index) => index + 1) maps each element of the array to its index 
    // incremented by 1, effectively creating an array of numbers from 1 to 1000.
    
    const arr = Array(end).fill(0).map((_, index) => index + start);
    console.log(arr);

    let newArr = [];

    for (let i = 0; i <= arr.length; i++){
        const num = String(arr[i]).split("").map(el => Number(el));
        // console.log(num);
        let sum = num.reduce((acc, curr) => acc + curr, 0);//find digits sum
                if (sum === 13) {
                    newArr.push(arr[i]);
                }
    }
    return newArr;
};

console.log(findNums(1, 1000));

// No. 5

// Form the following array using loops:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

const formArr = (...args) => { 
    let newArr = [];
    for (let i = 0; i < args.length; i++){
        newArr.push([...args]);
    }
    return newArr;
};

console.log(formArr(1, 2, 3));