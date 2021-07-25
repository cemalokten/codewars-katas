const reducer = function(obj, key) {
  if (!obj[key]) {
    obj[key] = 1;
  } else {
    obj[key] = obj[key] + 1;
  }
  return obj
}


function findOdd(A) {
  const result = A.reduce(reducer, {})
    let num = 0;

for (const [key, value] of Object.entries(result)) {
  if (value % 2 == 1) {
      num = key;
  }
}

  return Number(num);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));  //6




