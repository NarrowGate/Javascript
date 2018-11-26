//? Caesar Cipher

//? ET

    //? function caesarCipher(str,num) {
    //?     num = num % 26;
    //?     var lowerCaseString = str.toLowerCase();
    //?     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //?     var newString = '';
        
    //?     for (var i = 0; i < lowerCaseString.length; i++) {
    //?     var currentLetter = lowerCaseString[i];
    //?     if (currentLetter === ' ') {
    //?         newString += currentLetter;
    //?         continue;
    //?     }
    //?     var currentIndex = alphabet.indexOf(currentLetter);
    //?     var newIndex = currentIndex + num;
    //?     if (newIndex > 25) newIndex = newIndex - 26;
    //?     if (newIndex < 0) newIndex = 26 + newIndex;
    //?     if (str[i] === str[i].toUpperCase()) {
    //?         newString += alphabet[newIndex].toUpperCase();
    //?     }
    //?     else newString += alphabet[newIndex];
    //?     };
        
    //?     return newString;
    //? }

    //? caesarCipher('Zoo Keeper', 2);

    function caesarCipher(str, num) {
        const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const strArr = str.toLowerCase().split('');

        const newStingArr = [];

        const number = num % 26;


        for( let ind = 0; ind < strArr.length; ind++) {
            if(strArr[ind] == " ") newStingArr.push(' ');

            if(alphabets.indexOf(strArr[ind]) != -1) {

                let newNum = alphabets.indexOf(strArr[ind]) + number;

                if(newNum > 25) {
                    newNum = newNum - 25;
                }

                if(strArr[ind] != str.split('')[ind]) {
                    newStingArr.push(alphabets[newNum].toUpperCase());
                } else newStingArr.push(alphabets[newNum]);
                
            }

            console.log(newStingArr.join(''));
        }

    }

    let arg = "Gate Keeper";
    //? Lfyj Pjjujw
    // Kexi Oiitiv

    //? Kexi Oiitiv Right Answer
    console.log(caesarCipher(arg, 30))