"use strict"

// ?Reverse Words

// ?ET

    // function reverseWords(string) {

    //     var wordsArr = string.split(' ');
    //     var reversedWordsArr = [];
        
    //     wordsArr.forEach(word => {
    //       var reversedWord = '';
    //       for (var i = word.length - 1; i >= 0; i--) {
    //         reversedWord += word[i];
    //       };
    //       reversedWordsArr.push(reversedWord);
    //     });
        
    //     return reversedWordsArr.join(' ');
    //   }
       
    //   reverseWords('Coding JavaScript');


    function reverseWords(str) {

        const strWordsArr = str.split(' ');
        const reversedArr = [];

        for(let word of strWordsArr) {

            let wordArray = word.split('');
            let reversedWord = '';

            for( let ind = 0; ind < wordArray.length; ind++) {
                reversedWord = wordArray[ind] + reversedWord;
            }

            reversedArr.push(reverseWords);
        }

        console.log(reversedArr.join(' '));

    };
    

    const arg = "This sentence needs to be reversed";
reverseWords(arg);