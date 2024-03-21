// No. 1

// Print to the console all numbers in the range from 10to 1000, whose first digit is even.

const printNums = (min, max) => { 
    let evenArr = [];
    
    for (let i = min; i <= max; i++){
        const numStr = i.toString();
        const firstDigit = numStr[0];
         if (firstDigit %2 === 0) {
            evenArr.push(i);
        }
    }
    return evenArr;
};

console.log(printNums(10, 1000));

// No. 2

// Given an array, for example, like this:
// [1, 2, 3, 4, 5, 6]
// Swap pairs of elements of this array:
// [2, 1, 4, 3, 6, 5]

const swapArr = (...argv) => { 
    let arr = argv.slice();
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i+=2){
        // Swap adjacent elements
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
};

console.log(swapArr(1, 2, 3, 4, 5, 6));

// No. 3

// Given the following object:
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Find the sum of the elements of this object.

const findSum = obj => { 
    const values = Object.values(obj).flatMap(innerObj => Object.values(innerObj));
    console.log(values);//[11, 12, 13, 21, 22, 23, 24, 25, 26]
    let sum = 0;

    values.forEach(el => sum += el);
    return sum;
};

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

console.log(findSum(obj));