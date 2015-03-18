// Find the sum of all the multiples of 3 or 5 below 1000.

sumOfMultiplesOfThree = 0;
sumOfMultiplesOfFive = 0;
sumOfMultiplesOfThreeAndFive = 0;

var i = 0;
while (i < 1000) {
	if (i % 3 ===0 && i % 5 === 0) {
	    sumOfMultiplesOfThreeAndFive += i;
	} else if (i % 3 === 0) {
		sumOfMultiplesOfThree += i;
	} else if (i % 5 === 0) {
		sumOfMultiplesOfFive += i;
	} else {
	    // do nothing
	}
	i++;
}

var sumAll = (sumOfMultiplesOfThree + sumOfMultiplesOfFive + sumOfMultiplesOfThreeAndFive)

console.log(sumAll)