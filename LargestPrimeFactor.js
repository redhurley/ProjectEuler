// What is the largest prime factor of the number 600851475143?

// Get a list of numbers up to half of 600851475143
var array = [];
for (var i = 1; i <= 600851475143/2; i++) {
	// Figure out which ones are multiples of 600851475143
	if (600851475143 % i === 0) {
		array.push(i);
	}
}

// // Determine which of those numbers are prime numbers
var prime = [];
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
    	if (array[i] % 3 !== 0) {
    		prime.push(array[i]);
    	}
    }
}
console.log(prime[prime.length-1]);