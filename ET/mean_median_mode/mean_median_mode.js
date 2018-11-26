"use strict"

// ?Reverse Array In Place

// ?ET

    function meanMedianMode(arr) {

        const meanMedianMode = {
            'mean' : getMean(arr),
            'median' : getMedian(arr),
            'mode' : getMode(arr)
        }

        return meanMedianMode;

    };




    function getMean(arr) {    
        
        let sum = 0;

        arr.forEach(element => {
            sum = sum + element;
        });
        
        return sum / arr.length;
    }



    function getMedian(arr) {

        const sortedArray = arr.sort(function(a,b) {
            return a - b;
        })
        
        if(sortedArray.length % 2 != 0) {
            return sortedArray[Math.floor(sortedArray.length / 2)];
        } else {
            return (sortedArray[sortedArray.length / 2], sortedArray[sortedArray.length / 2 - 1]) / 2;
        }
    }

    function getMode(arr) {
        let modeHash = {};

        arr.forEach(item => {
            if(!modeHash[item]) modeHash[item] = 0;
            modeHash[item]++;
        })

        let maxFreq = 0;
        let mode = [];

        for(let item in modeHash) {
            if(modeHash[item] > maxFreq) {
                maxFreq = modeHash[item];
                mode = [item];
            } 
            else if (modeHash[item] == maxFreq) {
                mode.push(item);
            }
        }

        if(mode.length == Object.keys(modeHash).length) mode = [];


    return mode;

    }
    
    const arg = [4,7,6,5,8,2,2,6];
console.log(meanMedianMode(arg));