function isPalindromo(stringIn) {
	let reversed = stringIn.split('').reverse().join('');
	return stringIn === reversed;
}

console.log(isPalindromo('civica'))