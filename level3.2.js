// No. 1

// Print to the console all numbers in the range from 10to 1000, whose penultimate digit is even.

// No. 2

// Given an array. Remove every fifth element from it.

// No. 3

// Given a variable with a number:
// let num = 5;
// Make a string containing as many zeros as specified in the variable. In our case,
//we get the following line:
// '00000'



// No. 4

// Given a line with the words:
// 'aaa bbb ccc eee fff'
// Remove every second word from this line. In our case it should look like this:
// 'aaa ccc fff'


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