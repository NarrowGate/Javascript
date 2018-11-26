"use strict"

// ?Fibonacci

// ?ET



    function bubbleSort(array) {

        for(let i = array.length; i > 0; i--) {
            console.log(array[i]);

            for(let j = 0; j < i; j++) {
                console.log(array[j]);
            }
        }

        return array;

    }   
    
    const arg = [5, 78, 7, 8, 13, -6];
    
console.log(bubbleSort(arg));