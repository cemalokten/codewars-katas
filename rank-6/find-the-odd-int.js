function findOdd(A) {
  
  return 0;
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));  //6

  var votes = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }


  return tally
}
var result = votes.reduce(reducer, {}) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}

console.log(result);

for (const [key, value] of Object.entries(result)) {
  if (value % 2 == 1) {
      return key;
  }
}
