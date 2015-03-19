// What is the largest prime factor of the number 600851475143?

// Get a list of numbers up to half of 600851475143
// var array = [];
// for (var i = 1; i <= 600851475143/2; i++) {
// 	// Figure out which ones are multiples of 600851475143
// 	if (600851475143 % i === 0) {
// 		array.push(i);
// 	}
// }

// // Determine which of those numbers are prime numbers
// var prime = [];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//     	if (array[i] % 3 !== 0) {
//     		prime.push(array[i]);
//     	}
//     }
// }
// console.log(prime[prime.length - 1]);

// Recursion!!!

function findPrimeFactor(n) {
	var max = Math.round(Math.sqrt(n));
	for (var i = max; i > 1; i--) {
		if (n % i === 0 && findPrimeFactor(i) === 1) {
			return i;
		}
	}
	return 1;
}

findPrimeFactor(600851475143)