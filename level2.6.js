// No. 1

// Given a string with letters and numbers. Get an array of positions of all digits from this string.

const getArr = str => { 
    let posArr = [];
    for (let i = 0; i < str.length; i++){
        if (str[i].match(/^[0-9]+$/)) {
            posArr.push(i);
        }
    }
    return posArr;
};

console.log(getArr("Ad456ghfj67jk90oi"));


// No. 2

// Given an array with some numbers, for example, like this:
// [123, 456, 789]
// Write code that will reverse the numbers in this array using the following principle:
// [321, 654, 987]

const toNumRev = (...argv) => { 

    console.log(argv);
    let revArr = [];

    for (let i = 0; i < argv.length; i++){
        
        argv[i] = String(argv[i]).split("").reverse().join("");
        revArr.push(argv[i]);

    }
    return revArr;
};

console.log(toNumRev(123, 456, 789));


// No. 3

// Given a string with a number:
// '1234567'
// Separate triplets of digits with spaces, starting at the end of the number.
// In our case it should look like this:
// '1 234 567'

const toDigSep = str => { 
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        
    }
    return newStr;
};

console.log(toDigSep("1234567"));

// No. 4

// Given some string:
// 'AbCdE'
// Change the case of the letters in this string to the opposite case.
// In our case it should look like this:
// 'aBcDe'

const toChangeCase = str => { 
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()) {//str[i].match(/[A-Z]/)
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
};

console.log(toChangeCase('AbCdE'));

// No. 5

// Given some array with numbers, for example, like this:
// [1, 2, 3, 4, 5, 6]
// Merge pairs of elements together:
// [12, 34, 56]



// No. 6

// Given a line with the words:
// 'aaa bbb ccc eee fff'
// Capitalize the first character of every second word on this line. 
// In our case it should look like this:
// 'aaa Bbb ccc Eee fff'