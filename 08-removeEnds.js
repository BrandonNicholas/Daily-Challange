// Challenge: 08-removeEnds
// Difficulty: Basic
// Prompt:
// - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.
// Examples:
// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)

function removeEnds(string) {
	if (string.length < 3) {
		return ""; //empty string is ''
	}
	const removed = string.slice(1, string.length - 1); // 1 is to remove index 0 and string.length - 1 is to remove last index
	return removed;
}
console.log(removeEnds("SEI Rocks!"));