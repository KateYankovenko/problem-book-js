// No. 1

// Given an array of numbers. Remove numbers with more than three digits from it.

const numsRemove = (...args) => {
    const arr = [...args];
    let newArr = [];

    arr.forEach(el => el < 1000 ? newArr.push(el)
    : "Bigger then 1000!");

    return newArr;
};

console.log(numsRemove(1, 34, 567, 7890, 3, 347689, 23, 567345));

// No. 2

// Given a number, for example, like this:
// let num = 12345;
// Check that all digits of this number are greater than zero.

const checkDigits = num => { 
    const arr = String(num).split("");
    console.log(arr);

    let message = "";

    for (let i = 0; i < arr.length - 1; i++){
        if (Number(arr[i]) > 0) {
            message = "Congrats, > 0!!!";
        } else {
            message = "Sorry, not all dgts are > 0!";
        }
    }
    return message;
};

console.log(checkDigits(123145));

// No. 3

// Given an array, for example, like this:
// [123, 456, 789]
// Merge all the elements of this array into one array, splitting them character by character:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mergeElems = (...argv) => { 
    let arr = [...argv];
    let newArr = [];

    arr.forEach(el => { 
        let a = String(el).split("").map(el => Number(el));

        newArr.push(a);
    });
    return newArr.flat();
};

console.log(mergeElems(123, 456, 789));

// No. 4

// Given the following structure:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Find the sum of the elements of this structure.


const findElSum = (data) => { 
    let sum = 0;

    // Iterate over each object in the data array
    for (let i = 0; i < data.length; i++) {
        // Iterate over each property of the current object
        for (let key in data[i]) {
            // Add the value of each property to the sum
            sum += data[i][key];
        }
    }
    return sum;
};

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

console.log(findElSum(data));
