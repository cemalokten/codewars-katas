// Kata 5
// Title - Calculating with functions
// Description -
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
	return 5;
}
function six() {}
function seven(a) {
	if (a != null && a[1] === 'times') {
		return 7 * a[0];
	} else if (a != null && a[1] === 'plus') {
		return 7 + a[0];
	}
	return 7;
}
function eight() {}
function nine() {}
function plus(a) {
	if (a != null) {
		return [ a, 'plus' ];
	}
	return 7;
}

function minus() {}
function times(a) {
	if (a != null) {
		return [ a, 'times' ];
	}
	return 7;
}
function dividedBy() {}

console.log(seven(plus(five())));
