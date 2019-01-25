'use strict';

var outer = (function(a) {
    var b = a + 10;
    console.log(a)

    return function inner() {
        console.log(b + a);
    }
    
})(5.5);

outer();