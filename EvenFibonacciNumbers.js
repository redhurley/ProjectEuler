// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Get list of numbers less than or equal to 4M
var fibonacciSequence = [1, 1, 2, 3, 5];

for (var i=1; i<=4000000; i++) {
	// Filter list for numbers equal to the sum of the two numbers preceding them
	if (i==fibonacciSequence[fibonacciSequence.length-1] + fibonacciSequence[fibonacciSequence.length-2]) {
	   fibonacciSequence.push(i);
	} 
}

var evenFibonacci = [];
// Filter the list of numbers for multiples of 2
for (var i=0; i<fibonacciSequence.length; i++) {
    if (fibonacciSequence[i] % 2 === 0) {
        evenFibonacci.push(fibonacciSequence[i]);
    }
}

console.log(evenFibonacci);

// Sum up the remaining numbers
var sum = 0;
for (var i=0; i<evenFibonacci.length; i++) {
    sum += evenFibonacci[i];
}

console.log(sum);