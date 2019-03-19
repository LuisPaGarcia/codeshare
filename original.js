// #Developer name:
// #Programming languages:	Javascript
// #Interviewer: 						Robert Marcelino

// #EX 1
// # Create a method that receives an array of 100,000 integers and outputs the frequency with which each integer appears in ascending order
// #	input:
// #				array = [1,2,4,5,6,8,2,5,3,2,1]
// #	output:
// #				array = [ [1,2], [2,3], [3,1], [4,1], [5,2], [6,1], [8,1] ]
// #
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
			// Set the count to 1 if it'st the first time.
			conteo = 1;
		} else {
			// Set the count plus 1 if it's not the first time
			conteo++;
		}
	}

	if (conteo > 0) {
		resultado.push([ actual, conteo ]);
	}
	// Returns the result
	return resultado;
}

// #EX 2
// #  Write a simple algorithm that prints numbers from 1 to 200. If the number is a multiple of 3, print "Blue" next to the number,
// #  if the number is a multiple of 5 it print "Red", if the number is a multiple of both 3 and 5 it print "BlueRed".
// #	input:
// #				 NONE
// #	output:
// #				1
// #				2
// #				3 Blue
// #				4
// #				5 Red
// #				6
// #				7
// #				...
// #				14
// #				15 BlueRed
// #				16
// #				...
// #        200  Red
// # Your code here */

function printPlane() {
	// Create a Cycle 200 items long
	for (var index = 1; index <= 200; index++) {
		console.log(`${index} ${index % 3 === 0 ? 'Blue' : ''}${index % 5 === 0 ? 'Red' : ''}`);
	}
}

// # # #3
// # # /*
// # #   Enter the function to calculate the factorial of an integer
// # Your code here

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
		// substract 1 every time we multiply the value
		value--;
		resultado *= value;
	}
	// return the value
	return resultado;
}

// ## #4
// #	create a method for determinate when a word or number is palindrome
// #Tip:   civic  == civic
// # Your code here

function isPalindrome(stringIn) {
	let reversed = stringIn.split('').reverse().join('');
	return stringIn === reversed;
}
