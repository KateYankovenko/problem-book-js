// No. 1

// Given a line with words. Sort the words in alphabetical order.

// No. 2

// A number is given. Get an array of divisors of this number.

// No. 3

// Two numbers are given. Get an array of common divisors of these numbers.

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