function fatorial(value) {
	// Know if the value is number
	if (!Number.isInteger(value)) {
		console.log('Please, enter a integer.');
		return;
	}

	// we need a copy the value
	let resultado = value;
	// Validates if the value is 1 or 0
	if (value === 0 || value === 1) {
		return 1;
	}
	// Creates a while cycle
	while (value > 1) {
		value--;
		resultado *= value;
	}
	return resultado;
}

console.log(fatorial(5));
