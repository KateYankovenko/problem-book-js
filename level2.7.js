// No. 1

// Given some string:
// 'a bc def ghij'
// Convert to uppercase all substrings in which the number of
// letters is less than or equal to three.In our case it should look like this:
// 'A BC DEF ghij'

const toUpCase = str => { 
    let newStr = str.split(" ");

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length <= 3) {
            newStr[i] = newStr[i].toUpperCase();
        }
    }
    return newStr.join(" ");
};

console.log(toUpCase('a bc def ghij'));


// No. 2
// Given the symbol. Find out whether this character is in upper or lower case.

const toFindCase = char => { 
    return char === char.toUpperCase() ? "Upper"
        : "Lower";
};

console.log(toFindCase("n"));


// No. 3

// Given a number, for example this:
// 123789
// Remove all odd digits from this number. In our case, the result will be:
// 28


// removing elements from the array while iterating over,
// can lead to unexpected behavior because the length of the
// array changes dynamically as elements are removed,
// affecting the loop iterations.
// To fix this, you can iterate over the array backward,
// starting from the last element.


const toOddRemove = num => { 
    let evenNum = String(num).split("");
    
    for (let i = evenNum.length - 1; i >= 0; i--){
        if (evenNum[i] % 2 !== 0) {
            evenNum.splice(i, 1);
        }
    }
    return Number(evenNum.join(""));
};

console.log(toOddRemove(123789));