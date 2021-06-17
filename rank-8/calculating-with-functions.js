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

// function to do this for each
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
