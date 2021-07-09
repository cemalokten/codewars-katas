function incrementString(string) {
	const arr = string.split(/([0-9]+)/);
	if (arr[1] != undefined) {
		const len = arr[1].length;
		arr[1] = Number(arr[1]) + 1;
		return arr[0] + String(arr[1]).padStart(len, 0);
	} else {
		return string + 1;
	}
}
