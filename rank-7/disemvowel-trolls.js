// Kata 7
// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
	const arr = str.split('');
	console.log(arr);
	return arr.filter((x) => !(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A')).join('');
}

console.log(disemvowel('This website is for losers LOL!')); //"Ths wbst s fr lsrs LL!"
