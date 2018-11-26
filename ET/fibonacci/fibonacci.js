"use strict"

// ?Fibonacci

// ?ET

    // function fibonacci(position) {
    //     if (position < 3) return 1;
    //     else return fibonacci(position - 1) + fibonacci(position - 2);
    // }
   
    // fibonacci(6);

    function fibonacci(sequence) {

        if(sequence < 3) {
            return 1
        } else {
            return fibonacci(sequence - 1) + fibonacci(sequence - 2)
        }

    }   
    
    const arg = 50;

    //console.log(fibonacci(arg));
    
    function fibMemo(seq, cache) {
        var cache = cache || [];

        if(cache[seq]) {
            return cache[seq];
        } else {
            if( seq < 3) {
                return 1
            } else {
                return cache[seq] = fibMemo(seq - 2, cache) + fibMemo(seq - 1, cache);                
            }
        }

    }    

//console.log(fibMemo(arg));