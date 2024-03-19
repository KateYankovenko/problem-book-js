// No. 1

// Given a string with letters. Make sure there are no more than two capital letters on this line.

const toCapLatter = str => { 
    let arr = str.split("");
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i].match(/[A-Z]/)) {
            count++;
        }
        if (count > 2) {
            console.log("Too much A-Z!");
        }
    }
    return count;
};

console.log(toCapLatter("NhjhjOm"));


// No. 2

// Given some string:
// '1 22 333 4444 22 5555 1'
// Remove from this string all substrings that contain more than three characters.
// In our case it should look like this:
// '1 22 333 22 1'

const toSubStrRemove = str => { 
    let arr = str.split(" ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > 3) {
            arr.splice(i, 1);
        }
    }
    return arr.join(" ");
};

console.log(toSubStrRemove('1 22 333 4444 22 5555 1 666666'));


// No. 3

// Given two arrays:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Merge these arrays into a new array like this:
// [1, 2, 'a', 'b', 'c', 3]

const toArrMerge = (arr1, arr2) => { 
    let newArr = [...arr1.slice(0, 2), ...arr2, ...arr1.slice(2)];
    return newArr;
};

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
console.log(toArrMerge(arr1, arr2));// Output: [1, 2, 'a', 'b', 'c', 3]