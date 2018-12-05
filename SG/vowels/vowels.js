"use strict"

// ?Vowels

// ?SG    


// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
//   }
  
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }


function findVowels(str) {

    let count = 0;
    let vowels = 'aeiou';
    let strArr = str.split('');

    for(let item of strArr) {
        if(vowels.includes(item.toLowerCase())) count++;
    }

    console.log(count);

}

function findVowRegEx(str) {
    const matches = str.match(/[aeiou]/gi);
    console.log(matches ? matches.length : 0);
}

const arg = "Add more commits";


// findVowels(arg);

// findVowRegEx(arg);