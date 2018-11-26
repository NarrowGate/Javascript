//? Ispalindrome

//? ET

    //? function isPalindrome(string) {
    //?     string = string.toLowerCase();
    //?     var charactersArr = string.split('');
    //?     var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        
    //?     var lettersArr = [];
    //?     charactersArr.forEach(char => {
    //?     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    //?     });
        
    //?     return lettersArr.join('') === lettersArr.reverse().join('');
    //? }
    
    //? isPalindrome("Madam, I'm Adam");

    function IsPalindrome(arg) {
        const lowerCaseStrArr = arg.toLowerCase().split('');
        const validCharArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

        const checkedValidChar = [];

        lowerCaseStrArr.forEach(letter => {
            if(validCharArr.indexOf(letter) != -1) checkedValidChar.push(letter);
        })

        return checkedValidChar.join('') == checkedValidChar.reverse().join('');
    }

    //? let arg = "madam I'm Adam";
    //? console.log(IsPalindrome(arg));