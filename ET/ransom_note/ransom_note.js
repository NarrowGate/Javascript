// ?Harmless Ransom Note

// ?ET
    
    //? function harmlessRansomNote(noteText, magazineText) {
    //?     var noteArr = noteText.split(' ');
    //?     var magazineArr = magazineText.split(' ');
    //?     var magazineObj = {};
        
    //?     magazineArr.forEach(word => {
    //?     if (!magazineObj[word]) magazineObj[word] = 0;
    //?     magazineObj[word]++;
    //?     });
        
    //?     var noteIsPossible = true;
    //?     noteArr.forEach(word => {
    //?     if (magazineObj[word]) {
    //?         magazineObj[word]--;
    //?         if (magazineObj[word] < 0) noteIsPossible = false;
    //?     }
    //?     else noteIsPossible = false; 
    //?     });
        
    //?     return noteIsPossible;
    //? }

    function ransomNote(note, collection) {

        const wordsArr = collection.split(' ');
        const noteWordsArr = note.split(' ');
        const wordsObj = {};

        wordsArr.forEach(word => {
            if(!wordsObj[word]) wordsObj[word] = 0; 
            wordsObj[word]++;
        });

        let isRansomNote = true;

        for(let word of noteWordsArr) {
            if(!wordsObj[word] < 1) {
                wordsObj[word]--
            } else {
                isRansomNote = false;
                break;
            }
        };

        return isRansomNote;
    }
    
    //? let arg1 = "dummy myam text printing dummy myam text printing";
    //? let arg2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //? console.log(ransomNote(arg1, arg2));