// Kata 6
// Title - Validate my Password
// Description

// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.

function validPass(password) {
	if (password.length > 3 && password.length < 20) {
		let regex1 = /[a-z]/gi;
		let regex2 = /[0-9]/gi;
		let regex3 = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi;
		if (regex3.test(password)) {
			return 'INVALID';
		} else {
			let result = regex1.test(password) && regex2.test(password);
			console.log(result);
			return result ? 'VALID' : 'INVALID';
		}
	} else {
		return 'INVALID';
	}
}

console.log(validPass('Username123')); // 'VALID'
console.log(validPass('Username')); // 'INVALID'
console.log(validPass('1Username')); // 'VALID'
console.log(validPass('123')); // 'INVALID'
console.log(validPass('a12')); //'INVALID'
console.log(validPass('Username123!')); //'INVALID'
console.log(validPass('ThisPasswordIsTooLong1234')); // 'INVALID'
