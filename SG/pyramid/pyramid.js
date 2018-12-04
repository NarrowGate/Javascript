"use strict"

// ?Pyramid

// ?SG    

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// function pyramid(n, row = 0, level = '') {
//     if (row === n) {
//       return;
//     }
  
//     if (level.length === 2 * n - 1) {
//       console.log(level);
//       return pyramid(n, row + 1);
//     }
  
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//       add = '#';
//     } else {
//       add = ' ';
//     }
//     pyramid(n, row, level + add);
//   }
  


  // function pyramid(n) {
  //   const midpoint = Math.floor((2 * n - 1) / 2);
  //
  //   for (let row = 0; row < n; row++) {
  //     let level = '';
  //
  //     for (let column = 0; column < 2 * n - 1; column++) {
  //       if (midpoint - row <= column && midpoint + row >= column) {
  //         level += '#';
  //       } else {
  //         level += ' ';
  //       }
  //     }
  //
  //     console.log(level);
  //   }
  // }


  function pyramid(n) {

    let midPoint = Math.floor((2*n-1)/2);

    for(let row = 0; row < n; row++) {
        let outPut = '';

        for(let col = 0; col < n * 2 - 1; col++) {
            if(midPoint - row <= col && midPoint + row >= col) {
                outPut = outPut + '#';
            } else {
                outPut = outPut + ' ';
            }
            
        }
        console.log(outPut);
    }
    
  }

  // pyramid(3);

  function pyramidRecur(n, row = 0, level = '') {
    if(row ===n) {
        return;
    }

    if(level.length === 2 * n - 1) {
        console.log(level);
        return pyramidRecur(n, row +1,)
    }

    const midPoint = Math.floor((2*n - 1)/2);
    let add;

    if(midPoint - row <= level.length && midPoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }

    pyramidRecur(n, row, level + add);

  }

  pyramidRecur(3)

  

    // n = 1
    // #

    // n = 2
    // ^#^
    // ###

    // n = 3
    // ^^#^^ 1
    // ^###^ 3
    // ##### 5

    // n=4
    // ^^^#^^^ 1
    // ^^###^^ 3
    // ^#####^ 5
    // ####### 7

    // n=5
    // ^^^^#^^^^ 1
    // ^^^###^^^ 3
    // ^^#####^^ 5
    // ^#######^ 7
    // ######### 9