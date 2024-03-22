// No. 1

// A text with words is given. Write all words starting with the letter 'a'.

const writeWords = str => { 
    const str1 = str.split(" ");
    let newStr = [];
    console.log(str1);

    for (let i = 0; i < str1.length - 1; i++){
        if (str1[i].startsWith("a")) {
            newStr.push(str1[i]);
        }
    }
    return newStr.join(" ");
};

console.log(writeWords("A new world contains all gods and even more Alls!"));

// No. 2

// Given an array of numbers. Leave in it only those numbers that are divisible by 5.

const leaveDivByFive = (...argv) => { 
    const arr = [...argv];
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 5 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(leaveDivByFive(12, 15, 5, 78, 0, 43, 55));

// No. 3

// Given an array of numbers. Leave in it only those numbers that contain the number zero.

const leaveZeros = (...argv) => { 
    const arr = [...argv];
    console.log(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (String(arr[i]).match('0')) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(leaveZeros(10, 67, 40, 450, 43, 760));

// No. 4

// Given an array of numbers. Check that it contains a number containing the digit 3.

const checkDigit = (...argv) => { 
    let arr = [];
    argv.forEach(el => arr.push(String(el)));
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i].includes("3")) {
            console.log(`Here is "3 in ${arr[i]}`);
        } else {
            console.log(`Here is no "3 in ${arr[i]}`);
        }
    }
    return;
};

console.log(checkDigit(3, 45, 73, 87));

// No. 5

// Given a number:
// 35142
// Sort the digits of this number. In our case it should look like this:
// 12345

const sortNum = num => { 
    let n = String(num).split("");
    const sorted = n.sort((a, b) => a - b);
    return Number(sorted.join(""));
};

console.log(sortNum(35142));

// No. 6

// Write a program that will generate the following string:
// '-1-2-3-4-5-'


const generateStr = (min, max) => { 
    let str = '-';
    for (let i = min; i <= max; i++){
        str +=  i + "-";
    }
    return str;
};

console.log(generateStr(1, 5));

// No. 7

// Given the following object:
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Find the sum of the elements of this object.

const findSum = obj => { 
    const values = Object.values(obj).flatMap(subObj => Object.values(subObj).flatMap(innerObj => Object.values(innerObj)));
    console.log(values);
    let sum = 0;
    values.forEach(el => sum += el);
    return sum;
};

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

console.log(findSum(obj));