// No. 1

// Given a number:
// 123456
// Find the sum of pairs of digits of this number. In our case we mean the following:
// 12 + 34 + 56

const toFindPairsSum = num => { 
    let arr = String(num).split("");
    let pairArr = [];
    let pairSum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i+=2){
        pairArr.push(arr[i] + arr[i + 1]);
    }
    for (let j = 0; j < pairArr.length; j++){
        let nmbr = Number(pairArr[j]);
        pairSum += nmbr;
    }
    console.log(pairArr);
    
    return pairSum;
    
};

console.log(toFindPairsSum(123456));

// No. 2

// Given an array of numbers:
// [1, 2, 3, 4, 5]
// Print the elements of this array to the console in reverse order.

const toRevPrint = (...argv) => { 
    let revArr = String(argv).split("").reverse();
    
    revArr.forEach(function (el) {
        console.log(el);
    });
    return "Reverse done!";
};

console.log(toRevPrint(12345));