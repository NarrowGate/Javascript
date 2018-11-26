"use strict"

// ?Array Chunk

// ?SG    



// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;
  
//     while (index < array.length) {
//       chunked.push(array.slice(index, index + size));
//       index += size;
//     }
  
//     return chunked;
//   }

// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }


    function arrayChunk(array, chunkSize) {
        const chunkedArray = [];        

        for (let el of array) {
            let last = chunkedArray[chunkedArray.length - 1];
            if(chunkedArray.length == 0) {                
                chunkedArray.push([el]);
            } else if(last.length < chunkSize) {
                last.push(el);
            } else {
                chunkedArray.push([el]);
            }
        }

        console.log(chunkedArray);

    };
    

    const arg1 = [3, 5, 7, 8, 10, 11, 13, 15];
    const arg2 = 3;

arrayChunk(arg1, arg2);