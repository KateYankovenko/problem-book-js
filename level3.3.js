// No. 1

// Given an array of words. Remove words that contain more than three characters.

const removeWords = (...argv) => { 
    let arr = [...argv];
    let result = [];
    
    for (let i = 0; i < arr.length; i++){
        const word = argv[i].split("");
        if (word.length < 3) {
            result.push(word);
        }
    }
    return result;
};

console.log(removeWords("Hi", "!", "Go", "Home", "Alone", "!"));

// No. 2

// Given a number:
// 1357
// Check that all digits of this number are odd.

const checkDigits = num => { 
    const arr = String(num).split("");
    let result = [];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        } else {
            return "Not all digts are odd!";
        }
    }
    return result;
};

console.log(checkDigits(13578));

// No. 3

// A certain word is given:
// 'abcba'
// Make sure the word reads the same from either side.

const readWord = str => { 
    const arr = str.split("");
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return "Letters are not the same!";
        }
    }
    return "All letters are the same!";
};

console.log(readWord('abcba'));

// No. 4

// Given an array:
// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Find the sum of the elements of this array.

const findSum = (...argv) => { 
    let arr = argv.flatMap(innerArr => innerArr).flat().flat();//does a DEEP ARR FLATTING!!!!!
    let sum = 0;
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
};

const arrEl =  [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]

console.log(findSum(arrEl));