"use strict"

// No. 1

// Make a function that returns the current day of the week as a word.

function getDate() {
    const currentDate = new Date().toDateString();//making new obj Date
    return currentDate;
}

console.log(getDate());


// No. 2

// Make a function that will receive a date as a parameter and return the
// day of the week as a word corresponding to this date.

function getDayOfWeek(date) {
    // Create a new Date object using the provided date string
    const newDate = new Date(date);
    
    // Array of weekday names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = newDate.getDay();
    
    // Return the corresponding weekday name
    return daysOfWeek[dayIndex];
}

// Example usage:
const inputDate = '2024-03-12'; // Date format: YYYY-MM-DD
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek);

// No. 3

// Make a function that will take seconds as a parameter and return the number
// of days corresponding to these seconds.

// No. 4

// Make a function that takes a number and a string as parameters and truncates
// this string to the length specified by the first parameter.

// No. 5

// Make a function that will receive a date as a parameter and return the zodiac
// sign corresponding to this date.

function getZodiac(date) {
  
const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;

    const zodiacRanges = [
        { sign: "Aries", start: "03-21", end: "04-19" },
        { sign: "Taurus", start: "04-20", end: "05-20" },
        { sign: "Gemini", start: "05-21", end: "06-20" },
        { sign: "Cancer", start: "06-21", end: "07-22" },
        { sign: "Leo", start: "07-23", end: "08-22" },
        { sign: "Virgo", start: "08-23", end: "09-22" },
        { sign: "Libra", start: "09-23", end: "10-22" },
        { sign: "Scorpio", start: "10-23", end: "11-21" },
        { sign: "Sagittarius", start: "11-22", end: "12-21" },
        { sign: "Capricorn", start: "12-22", end: "01-19" },
        { sign: "Aquarius", start: "01-20", end: "02-18" },
        { sign: "Pisces", start: "02-19", end: "03-20" }
    ];
    
        for (const range of zodiacRanges) {
        if (formattedDate >= range.start && formattedDate <= range.end) {
            return range.sign;
        }
    }

    return "Invalid date";
    
}

const today = new Date(2024, 3, 1);
const zodiac = getZodiac(today);
console.log(zodiac);

// No. 6

// Make a function that takes a number as a parameter and returns the sum of its divisors.

const getDivSum = num => { 
    let sum = 0;
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            divisors.push(i);
            sum += i;
        }
    }
    console.log(divisors);
    return sum; 
};

console.log(getDivSum(234));