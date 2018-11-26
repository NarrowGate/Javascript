// ?Binary Search

// ?ET

    // function binarySearch(numArray, key) {
    //     var middleIdx = Math.floor(numArray.length / 2);
    //     var middleElem = numArray[middleIdx];
        
    //     if (middleElem === key) return true;
    //     else if (middleElem < key && numArray.length > 1) {
    //         return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    //     }
    //     else if (middleElem > key && numArray.length > 1) {
    //         return binarySearch(numArray.splice(0, middleIdx), key);
    //     }
    //     else return false;
    // }
    
    // binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);

    function binSearch(array, num) {

        let sortedArray = array.sort(function(a, b) {
            return a - b
        });  
        
        let midIndex = Math.floor(sortedArray.length/2);
        let middle = sortedArray[midIndex];

        if(middle == num) {
            return true;
        } else if(num > middle && sortedArray.length > 1) {
            return binSearch(sortedArray.slice(midIndex),num);
        } else if(num < middle && sortedArray.length > 1) {            
            return binSearch(sortedArray.slice(0, midIndex),num);
        } else {
            return false;
        }
    }
    

    const array = [3, 5,11, 13, 15, 7, 8, 10];
    const num = 1;

    // const sep = 12;
    // const oct = 22;
    // const nov = 5;

    console.log(binSearch(array, num));