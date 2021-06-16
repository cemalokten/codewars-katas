// Kata 5
// Title - Extract the domain name from a URL
// Description
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Seperate into single characters
// Check if it has one or two dots
// If two dots then extract middle of that
// If one dot then extract from / to .

function domainName(url) {
	const str1 = url.includes('http://') || url.includes('https://') ? url : 'http//' + url;
	const str = str1.slice(str1.indexOf('/') + 2);
	return str.includes('www.')
		? str.slice(4, str.lastIndexOf('.', str.indexOf('.') != str.lastIndexOf('.') - 1 ? str.lastIndexOf('.') - 1 : str.lastIndexOf('.')))
		: str.slice(0, str.indexOf('.'));
}

const str = 'www.xakep.ru';
console.log(str.slice(4));

console.log(str.slice(4, 8));
console.log(domainName('http://google.co.jp'));
console.log(domainName('http://www.cnet.com'));
console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('http://www.rhke9.co.za'));
