"use strict"

// ?Reverse Int

// ?SG    



// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// function reverseInt(n) {
//     const reversed = n
//       .toString()
//       .split('')
//       .reverse()
//       .join('');
  
//     return parseInt(reversed) * Math.sign(n);
//   }



    function reverseInt(num) {
        var numString = num.toString().replace(/\D/g,'');

        var reversedString = "";

        numString.split('').forEach(char => {
            reversedString = char + reversedString;
        });

       var reversedInt = parseInt(reversedString) * Math.sign(num);

    };
    

    const arg = -456;

reverseInt(arg);