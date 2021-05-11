// Kata 7
// Title - Regexp Basics - is it a vowel?
// Description

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

String.prototype.vowel = function() {
	return /^[aeiou]$/gi.test(this);
};

console.log('f'.vowel());
