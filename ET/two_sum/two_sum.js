"use strict"

// ?Two Sum

// ?ET

    // function twoSum(numArray, sum) {
    //     var pairs = [];
    //     var hashTable = [];
    
    //     for (var i = 0; i < numArray.length; i++) {
    //     var currNum = numArray[i];
    //     var counterpart = sum - currNum;
    //     if (hashTable.indexOf(counterpart) !== -1) {
    //         pairs.push([ currNum, counterpart ]);
    //     }
    //     hashTable.push(currNum);
    //     }
        
    //     return pairs;
    // }
    
    // twoSum([1, 6, 4, 5, 3, 3], 7);


    function sumTwo(array, sum) {
        const pairs = [];
        const hashTable = [];

        for(let i = 0; i < array.length; i++) {
            const currNum = array[i];
            const counterPart = sum - currNum;

            if(hashTable.indexOf(counterPart) != -1) pairs.push([currNum, counterPart])
            hashTable.push(currNum);

        }

        console.log(pairs);

    };
    

    const arg1 = [3, 5, 7, 8, 10];
    const arg2 = 13;

sumTwo(arg1, arg2);