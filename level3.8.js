// No. 1

// Given an array of numbers. Check that all numbers from this array contain the digit 3.

const checkDigit = (...args) => { 
    const arr = String([...args]).split(",");
    let newArr = [];
    console.log(arr);
    arr.forEach(el => { 
        if (el.includes("3")) {
            newArr.push(Number(el));
        } 
    });
    return newArr;
};

console.log(checkDigit(56, 763, 33, 45, 30, 89));

// No. 2

// Given a string in the format:
// 'kebab-case'
// Convert it to the format:
// 'snake_case'

const toSnake = str => { 
    let newStr = str.split("");
    newStr.forEach((el, ind) => {
        if (el === "-") {
            newStr[ind] = "_";
        }
    });
    return newStr.join("");
};

console.log(toSnake("name-the-first-batch"))

// No. 3

// Given a string in the format:
// 'snake_case'
// Convert it to the format:
// 'camelCase'

const toCamel = str => { 
    let newStr = str.split("_");//Split the string by underscores to get an array of words
    console.log(newStr);//['venom', 'snake', 'lives', 'in', 'sakhara', 'desert']

    for (let i = 1; i < newStr.length; i++) { 
        //Capitalize the first letter of each word (except the first word)
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
        //slice(1) is used to extract a substring from the second character to the end of the word. 
        //This effectively removes the first character.
    }
    return newStr.join("");
};

console.log(toCamel("venom_snake_lives_in_sakhara_desert"));

// No. 4

// Given a string in the format:
// 'camelCase'
// Convert it to the format:
// 'snake_case'

const toSnakeCase = str => { 
    // //[a-z]* means zero or more lowercase letters; /g flag is a global search flag. 
    // //It indicates that the regular expression should be applied globally, meaning it 
    // //finds all matches in the input string, rather than stopping after the first match.
    // let newStr = str.match(/[A-Z]*(?:[a-z]+|[A-Z][a-z]*|$)/g);
    // console.log(newStr);// Output: ["a", "Dumb", "Dog", "Barks", "At", "A", "Full", "Moon"]

    // for (let i = 0; i < newStr.length; i++){
    //     newStr[i] = newStr[i].toLowerCase();
    // }
    //     if (newStr.length > 0) {
    //     newStr[newStr.length - 1] = newStr[newStr.length - 1].toLowerCase();
    // }
    // return newStr.join("_");
    
    return str.replace(/[A-Z]/g, match => '_' + match.toLowerCase()).replace(/^_/, '');
};

console.log(toSnakeCase("aDumbDogBarksAtAFullMoon"));

// No. 5

// Form the following array using loops:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

const formArr = (...args) => { 
    
    let arr = [];
    for (let i = 0; i < 5; i++){
        arr.push([...args]);
    }
    return arr;
};

console.log(formArr(1, 2, 3));