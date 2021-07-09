// Kata 5
// Title - Valid Parenthesis

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// function check(arr, value, i) {
//     return (value === '(' && arr[i+1] === ')') ? arr.splice(i, 2) : arr;
// }

// function validParentheses(parens){
//     const arr = parens.split('')

//     arr.map((c,i) => {
//         check(arr, c, i)
//         if (arr.length > 0) {
//             continue;
//         }
//     })
//    return (arr.length == 0);
// }

function validParentheses(parens) {
	const arr = parens.split('');
	return arr;
}

console.log(validParentheses('()()(()())'));
