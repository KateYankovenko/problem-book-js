// No. 1

// Given a string with letters and numbers. Make sure there are no more than three letters in this line.

const toCheckNums = str => { 
    let digCount = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i].match(/^[0-9]+$/)) {
            digCount++;
        }
        if (digCount > 3) {
            console.log("More than 3 digits! Do smth!");
        }
    }
    return digCount;
};

console.log(toCheckNums("ghgh6dj8jfj9djdj"));


// No. 2

// A number is given. Get the first even digit from the end of this number.

const getFifthEvenDigit = num => { 
    let strNum = String(num).split("");
    console.log(strNum);
   
    for (let i = strNum.length - 1; i > 0; i--){
        if (strNum[i] %2 === 0) {
            return strNum[i];
        }
    }
};

console.log(getFifthEvenDigit(12345687));

// No. 3

// Given some string:
// 'abcde abcde abcde'
// Replace the first character of each word with '!':
// '!bcde !bcde !bcde'

const toFrstCharReplace = str => { 
    let arr = str.split(" ");
    
    for (let i = 0; i < arr.length; i++){
        arr[i] = "!" + arr[i].slice(1); // Replace first character with '!' + original string starting from the specified index
    }
    
    return arr.join(" "); // Join the modified words back together
};

console.log(toFrstCharReplace('abcde abcde abcde'))

// No. 4

// Given an array of numbers:
// [1, 2, 3, 3, 4, 5]
// Check that this array has two identical elements in a row.

const toIdentCheck = (...argv) => { 
    for (let i = 0; i < argv.length - 1; i++){
        if (argv[i] === argv[i + 1]) {
            return "Two identical elems!";
        }
    }
    return "No identical elems!";
};

console.log(toIdentCheck(1, 2, 3, 4, 5, 5));