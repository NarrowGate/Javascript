//? Max Stock Profit

//? ET

// function maxStockProfit (pricesArr) {
//     var maxProfit = -1;
//     var buyPrice = 0;
//     var sellPrice = 0;
    
//     var changeBuyPrice = true;
    
//     for (var i = 0; i < pricesArr.length; i++) {
//       if (changeBuyPrice) buyPrice = pricesArr[i];
//       sellPrice = pricesArr[i + 1];
      
//       if (sellPrice < buyPrice) {
//         changeBuyPrice = true;
//       }
//       else {
//         var tempProfit = sellPrice - buyPrice;
//         if (tempProfit > maxProfit) maxProfit = tempProfit;
//         changeBuyPrice = false;
//       }
//     }
    
//     return maxProfit;
//   }
   
//   maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);



const arg = [-10, 18, 40, 5, 9, 6, 160, 12];


function maxStckPrft(array) {

    var profit = -1

    var sp = 0;
    var bp = 0;

    var changeBp = true;

    for(var i = 0; i < array.length; i++) {
        if(changeBp) bp = array[i];
        sp = array[i + 1];

        if(sp < bp) {
            changeBp = true;
        } else {
            var tempProfit = sp - bp;
            if(tempProfit > profit) profit = tempProfit;
            changeBp = false;
        }

    }


    return profit;
}

console.log(maxStckPrft(arg))