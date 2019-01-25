'use strict';

function tripleAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(tripleAdd(100)(20)(30));