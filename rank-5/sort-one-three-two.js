// Kata 5
// Title - Sort - one, three, two
// Hey You !

// Sort these integers for me ...

// By name ...

// Do it now !
// Input

//     Range is 0-999

//     There may be duplicates

//     The array may be empty

// Example

//     Input: 1, 2, 3, 4
//     Equivalent names: "one", "two", "three", "four"
//     Sorted by name: "four", "one", "three", "two"
//     Output: 4, 1, 3, 2

// Notes

//     Don't pack words together:
//     e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
//     e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
//     Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
//     e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
//     e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

function digitsToWords(num) {
	const ones = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	const tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

	const numStr = num.toString();

	if (num < 20) {
		return ones[num];
	}

	if (num >= 20 && num < 100) {
		if (numStr[1] === '0') {
			return tens[numStr[0]];
		} else {
			return tens[numStr[0]] + ' ' + ones[numStr[1]];
		}
	}

	if (num > 99 && num <= 999) {
		if (numStr[1] === '0' && numStr[2] != '0') {
			return `${ones[numStr[0]]} hundred ${ones[numStr[2]]}`;
		} else if (numStr[1] != '1' && numStr[2] != '0') {
			return `${ones[numStr[0]]} hundred ${tens[numStr[1]]} ${ones[numStr[2]]}`;
		} else if (numStr[1] === '1' && numStr[2] === '0') {
			return ones[numStr[0]] + ' hundred ' + 'ten';
		} else if (numStr[1] === '1' && numStr[2] != '0') {
			return ones[numStr[0]] + ' hundred ' + ones[numStr[1] + numStr[2]];
		} else if (numStr[2] === '0') {
			return ones[numStr[0]] + ' hundred ' + tens[numStr[1]];
		}
	}
}

function sortByName(array) {
	if (array.length === 0) {
		return array;
	} else {
		return array
			.map((e) => [ digitsToWords(e), e ])
			.sort((a, b) => a[0].localeCompare(b[0]))
			.map((e) => e.splice(1))
			.reduce((acc, cur) => acc.concat(cur));
	}
}
