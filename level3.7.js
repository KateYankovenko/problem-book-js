// No. 1

// Given a line with words. Sort the words in alphabetical order.

const sortLine = str => { 
    let arr = str.split(" ");
    return [...arr].sort((a, b) => a.localeCompare(b));
};

console.log(sortLine("never come back"));

// No. 2

// A number is given. Get an array of divisors of this number.

const getDivisirs = num => { 
    const divisors = [];

    // Iterate from 1 up to the given number
    for (let i = 1; i <= num; i++) {
        // If i divides num evenly, it's a divisor
        if (num % i === 0) {
            divisors.push(i); // Add i to the divisors array
        }
    }

    return divisors; // Return the array of divisors
};

console.log(getDivisirs(234));

// No. 3

// Two numbers are given. Get an array of common divisors of these numbers.

const getComDivisirs = (num1, num2) => { 
    const divisors = [];

    // Iterate from 1 up to the given number
    for (let i = 1; i <= num1; i++) {
        // If i divides num evenly, it's a divisor
        if (num1 % i === 0) {
            divisors.push(i); // Add i to the divisors array
        }
    }
        for (let i = 1; i <= num2; i++) {
        // If i divides num evenly, it's a divisor
        if (num2 % i === 0) {
            divisors.push(i); // Add i to the divisors array
        }
    }

    return divisors.filter((el, ind, arr) => arr.indexOf(el) === ind)
        .sort((a, b) => a - b); // Return the array of divisors
};

console.log(getComDivisirs(678, 357));

// No. 4

//--------------------------PRIME NUMBER CHECK IS HERE!!!!!!!!----------------------------------

// A number is given. Check that this number has only one divisor other than itself and one.

const checkDivisor = num => {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Number is divisible by a number other than 1 and itself
        }
    }

    return true; // Number is only divisible by 1 and itself
};

console.log(checkDivisor(7));

// No. 5

// Numbers are written separated by commas. Get the maximum of these numbers.

const getMaxNums = (...args) => { 
    const max = Math.max(...args);
    return max;
};

console.log(getMaxNums(2, 5, 67, 89, 1, 11));

// No. 6

// Given an array of numbers. After each single-digit number, insert another of the same number.

const numInsert = (...args) => { 
    const newArr = [];
    
    for (let i = 0; i < args.length; i++) {
        const num = args[i];
        
        // Check if the number is a single digit
        if (num >= 0 && num < 10) {
            newArr.push(num);
        }
        newArr.push(num);
    }

    return newArr;
};

console.log(numInsert(12, 3, 45, 6, 67, 89, 5));

// No. 7

// Given a string. Remove all vowels from it.//A, E, I, O, U, and Y

const removeVowels = str => { 
    let newStr = "";
    // console.log(str.);

        const vowels = [
            "a",
            "e",
            "i",
            "o",
            "u",
            "A",
            "E",
            "I",
            "O",
            "U",
        ]; 

    str.split("").forEach((char) => {
        if (!vowels.includes(char)) {
            newStr += char;
        }
    });
    
    return newStr;
};

console.log(removeVowels("let me sing a song"));

// No. 8

// Given a string. Capitalize the last letter of each word on this line.

const cptlzLast = str => {
    let newStr = str.split(" ");
   
    newStr.forEach((word, index) => {
        // Check if the word is not empty
        if (word.length > 0) {
            // Capitalize the last letter of the word
            const lastLetter = word.slice(-1).toUpperCase();
            newStr[index] = word.slice(0, -1) + lastLetter;
        }
    });

    return newStr.join(' ');
};

console.log(cptlzLast("Write a letter to your teacher!"));

// No. 9

// Given the following structure:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Find the sum of the elements of this structure.

const findElSum = (data) => { 
 
    let val = data.flatMap(el => Object.values(el).flat());
    console.log(val);

    const sum = val.reduce((previousValue, el) => {
        return previousValue + el;
    }, 0);
    return sum;
};

let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

console.log(findElSum(data));