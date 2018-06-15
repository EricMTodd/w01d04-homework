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

const sumDigits = (num1, num2) => {
	return (`${num1 + num2}`)
};

console.log(sumDigits(4, 2));









