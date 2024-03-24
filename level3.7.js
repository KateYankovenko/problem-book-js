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

// A number is given. Check that this number has only one divisor other than itself and one.

// No. 5

// Numbers are written separated by commas. Get the maximum of these numbers.

// No. 6

// Given an array of numbers. After each single-digit number, insert another of the same number.

// No. 7

// Given a string. Remove all vowels from it.

// No. 8

// Given a string. Capitalize the last letter of each word on this line.

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