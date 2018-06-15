console.log("JavaScript is running...");

//1. Done. The answers are as follows.
//2. Within a function you have parameters that are contained in braces and represented by arguments within them.
//3. console.log(); prints a value to the console, where return stops a function. Return can also return a specific type data.

const checkPalindrome = (Radar) => {
	let alt = /[\W_]/g;
	Radar = Radar.toLowerCase().replace(alt, "");
	let length = Radar.length;
	for (let i = 0; i < length/2; i++) {
		if (Radar[i] !== Radar[length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));



//Digit Sum
const sumDigits = (num) => {
	let sum = 0;
	let arr = num.toString().split(""); 
		for (let i = 0; i < arr.length; i++) {
			sum += parseInt(arr[i]);
		}
		return sum
};
console.log(sumDigits(42));



//Pythagoras
const calculateSide = (sideA, sideB) => {
	if ((typeof sideA !== "number") || (typeof sideB !== "number"))
		return false;
			return Math.sqrt(sideA * sideA + sideB * sideB);
}

console.log(calculateSide(8, 6));


//Sum array
const sumArray = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));

	


