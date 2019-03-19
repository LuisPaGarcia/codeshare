function printPlane() {
	// Create a Cycle 200 items long
	for (var index = 1; index <= 200; index++) {
		console.log(`${index} ${index % 3 === 0 ? 'Blue' : ''}${index % 5 === 0 ? 'Red' : ''}`);
	}
}
