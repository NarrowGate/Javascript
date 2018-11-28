"use strict"

// ?Merge sort

// ?ET

// function mergeSort (arr) {    
//     if (arr.length < 2) return arr;
//     var middleIndex = Math.floor(arr.length / 2);
//     var firstHalf = arr.slice(0, middleIndex);
//     var secondHalf = arr.slice(middleIndex);
    
//     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }
 
// function merge (array1, array2) { 
//     var result = [];
//     while (array1.length && array2.length) {
//       var minElem;
//       if (array1[0] < array2[0]) minElem = array1.shift();
//       else minElem = array2.shift();
//       result.push(minElem);
//     }
    
//     if (array1.length) result = result.concat(array1);
//     else result =result.concat(array2);
//     return result;
// }
 
// console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));


function mergeSort(array) {
    if(array.length < 2) return array;
    const middleIndex = Math.floor(array.length/2);

    let firstHalf = array.slice(0, middleIndex);
    let secondHalf = array.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));

}

function merge(arr1, arr2) {
    let result = [];

    while(arr1.length && arr2.length) {
        var minElem;
        if(arr1[0] > arr2[0]) minElem = arr2.shift();
        else minElem = arr1.shift();
        result.push(minElem);
    }

    if(arr1.length) result = result.concat(arr1);
    else result = result.concat(arr2);

    return result;

}

const arg = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1, 13];

console.log(mergeSort(arg));