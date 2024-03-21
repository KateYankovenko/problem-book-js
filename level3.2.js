// No. 1

// Print to the console all numbers in the range from 10to 1000,
//whose penultimate digit is even.

const printEven = (min, max) => { 
    let evenNums = [];
    for (let i = min; i <= max; i++){
        //each i num to string
        const numStr = i.toString();
        // Get the penultimate digit
        const penultimateDigit = numStr[numStr.length - 2];

        if (penultimateDigit %2 === 0) {
            evenNums.push(i);
        }
    }
    return evenNums;
};

console.log(printEven(10, 1000));

// No. 2

// Given an array. Remove every fifth element from it.

const removeFifthEl = (...argv) => { 
    let newArr = [...argv];// Create a copy of the array using the spread operator
    for (let i = 4; i < newArr.length; i+=5){//To remove every fifth element from the array, the loop should indeed start from index 4 (the fifth element) and increment by 5 in each iteration
        newArr.splice(i, 1);
        i--;// Decrement i to account for the removed element
    }
    return newArr;
};

console.log(removeFifthEl(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5));//[1, 2, 3, 4, 6, 7, 8, 9, 1, 2, 3, 4]

// No. 3

// Given a variable with a number:
// let num = 5;
// Make a string containing as many zeros as specified in the variable. In our case,
//we get the following line:
// '00000'

const putZeroes = num => { 
    let str = "";
    for (let i = 0; i < num; i++){
        str += "0";
    }
    return str;
};

console.log(putZeroes(5));

// No. 4

// Given a line with the words:
// 'aaa bbb ccc eee fff'
// Remove every second word from this line. In our case it should look like this:
// 'aaa ccc fff'

const removeSecond = str => { 
    let newStr = str.split(" ");
    let result = [];
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2 === 0) {
            result.push(newStr[i]);
        }
    }
    return result.join(" ");
};

console.log(removeSecond('aaa bbb ccc eee fff'));

// No. 5

// Given an array:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Find the sum of the elements of this array.

const findSum = (...argv) => { 
    const arr = argv.flatMap(el => el);
    let sum = 0;
    
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};

console.log(findSum([1, 2, 3], [4, 5, 6], [7, 8, 9],));