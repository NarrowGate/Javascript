// Fizzbuzz

// ET

    // function fizzBuzz(num) {
    // for (var i = 1; i <= num; i++) {
    //     if (i % 15 === 0) console.log('FizzBuzz');
    //     else if (i % 3 === 0) console.log('Fizz');
    //     else if (i % 5 === 0) console.log('Buzz');
    //     else console.log(i);
    // }
    // }
    

    // function harmlessRansomNote(noteText, magazineText) {
    //     var noteArr = noteText.split(' ');
    //     var magazineArr = magazineText.split(' ');
    //     var magazineObj = {};
        
    //     magazineArr.forEach(word => {
    //     if (!magazineObj[word]) magazineObj[word] = 0;
    //     magazineObj[word]++;
    //     });
        
    //     var noteIsPossible = true;
    //     noteArr.forEach(word => {
    //     if (magazineObj[word]) {
    //         magazineObj[word]--;
    //         if (magazineObj[word] < 0) noteIsPossible = false;
    //     }
    //     else noteIsPossible = false; 
    //     });
        
    //     return noteIsPossible;
    // }

    // harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');


    // Ispalindrome

    // function isPalindrome(string) {
    //     string = string.toLowerCase();
    //     var charactersArr = string.split('');
    //     var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        
    //     var lettersArr = [];
    //     charactersArr.forEach(char => {
    //     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    //     });
        
    //     return lettersArr.join('') === lettersArr.reverse().join('');
    // }
    
    // isPalindrome("Madam, I'm Adam");

    // function caesarCipher(str,num) {
    //     num = num % 26;
    //     var lowerCaseString = str.toLowerCase();
    //     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //     var newString = '';
        
    //     for (var i = 0; i < lowerCaseString.length; i++) {
    //     var currentLetter = lowerCaseString[i];
    //     if (currentLetter === ' ') {
    //         newString += currentLetter;
    //         continue;
    //     }
    //     var currentIndex = alphabet.indexOf(currentLetter);
    //     var newIndex = currentIndex + num;
    //     if (newIndex > 25) newIndex = newIndex - 26;
    //     if (newIndex < 0) newIndex = 26 + newIndex;
    //     if (str[i] === str[i].toUpperCase()) {
    //         newString += alphabet[newIndex].toUpperCase();
    //     }
    //     else newString += alphabet[newIndex];
    //     };
        
    //     return newString;
    // }
    // caesarCipher('Zoo Keeper', 2);
   

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 ==0) {
            console.log('Fizzbuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
};

// fizzBuzz(30)



// RansomNote

function ransomNote() {

}

ransomNote();




// Ispalindrome
function IsPalindrome() {

}

IsPalindrome()

// Caesar Cipher
function caesarCipher() {

}

caesarCipher()

