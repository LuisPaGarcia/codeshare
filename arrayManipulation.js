function arrayManipulation(array) {
	// Validation of the array parameter
	if (!Array.isArray(array)) {
		console.error('Necesitas enviar un array en la función;');
		return;
	}

	// Order the array asc
	array.sort();

	// set the correct
	var actual = null;
	var conteo = 0;
	var resultado = [];

	// Iterate all the items, when we have all the items, we push the result to the 'resultado' array
	for (var i = 0; i < array.length; i++) {
		// Validates the actual item vs the iterated item
		if (array[i] !== actual) {
			if (conteo > 0) {
				// Push the result to the result
				resultado.push([ actual, conteo ]);
			}
			// Set the actual item based on the index
			actual = array[i];
			conteo = 1;
		} else {
			conteo++;
		}
	}
	if (conteo > 0) {
		resultado.push([ actual, conteo ]);
	}
	return resultado;
}

let result = arrayManipulation([ 1, 2, 4, 5, 6, 8, 2, 5, 3, 2, 1 ]);
console.log(result);
