"use strict"

// ?Reverse Array In Place

// ?ET

    // function reverseArrayInPlace(arr) {
    //     for (var i = 0; i < arr.length / 2; i++) {
    //     var tempVar = arr[i];
    //     arr[i] = arr[arr.length - 1 - i];
    //     arr[arr.length - 1 - i] = tempVar;
    //     }
        
    //     return arr;
    // }
    
    // reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);


    function reverseArray(arr) {

        for(let ind = 0; ind < arr.length / 2 ; ind++) {
            let temp = arr[ind];
            arr[ind] = arr[arr.length - 1 - ind];
            arr[arr.length - 1 - ind] = temp;
        }

        return arr;

    };
    
    const arg = ['This', 'sentence', 'needs', 'to', 'be', 'reversed', 'again'];
console.log(reverseArray(arg));