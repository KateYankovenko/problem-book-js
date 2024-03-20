// No. 1

// A certain number is given. Make sure the digits of this number are in ascending order.

const toDigAsc = num => { 
    let arr = String(num).split("");
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < arr[i + 1]) {
           
            console.log("Ascending");
        } else {
            console.log("Wrong order");
        }
    }
    return Number(arr.join(""));
};

console.log(toDigAsc(1234564));


// No. 2

// Given an array:
// [1, '', 2, 3, '', 5]
// Remove all empty lines from the array.

const toEmptRemove = (...argv) => {
    return argv.filter(item => item !== '');
};

console.log(toEmptRemove(1, '', 2, 3, '', 5));

// No. 3

// Given an array:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Sort the elements in each subarray.

const toElSort = (...argv) => { 
    const arr = [...argv];
    const arr1 = arr[0].sort((a, b) => a - b);
    const arr2 = arr[1].sort((a, b) => a - b);
    const arr3 = arr[2].sort((a, b) => a - b);
    
    return arr;
};

console.log(toElSort([2, 1, 4, 3, 5], [3, 5, 2, 4, 1], [4, 3, 1, 5, 2],));

// No. 4

// Given two arrays:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// From a larger array, remove extra elements from the end so that the lengths of the arrays are equal.

const toElRemove = (arr1, arr2) => { 
    console.log(arr1, arr2);

    const minLength = Math.min(arr1.length, arr2.length);
    return [arr1.slice(0, minLength), arr2.slice(0, minLength)];
};

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
console.log(toElRemove(arr1, arr2));