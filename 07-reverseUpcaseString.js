// Challenge: 07-reverseUpcaseString
// Difficulty: Basic
// Prompt:
// - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
// Examples:
// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES"



// let string = "SEI Rocks!"

// function reverseUpcaseString(string) {
  
//   return string.toUpperCase();
// }


// console.log(reverseUpcaseString(string));


function reverseUpcaseString(string) {
	const splitString = string.split("");
	const reversedString = splitString.reverse();
	const joinedString = reversedString.join("");
	return joinedString.toUpperCase();
}

console.log(reverseUpcaseString("SEI Rocks!"));




//WHEN AN ARGUEMENT IS REQUIRED IN THE PARENTHESES
// In JavaScript, when you're calling a function or method, the parentheses () are used to indicate that you're executing the function or method. Whether or not you include any arguments inside the parentheses depends on whether the function or method requires any input values (arguments) to perform its task.
// Here are some guidelines to help you determine when the parentheses should be empty:
// No Arguments: If the function or method you're calling does not require any arguments to perform its task, you should use empty parentheses. For example, toUpperCase() is a method that does not require any arguments; it simply converts the string it's called on to uppercase.

// javascript

// let myString = "hello";
// let upperCaseString = myString.toUpperCase(); // Empty parentheses because toUpperCase() doesn't require arguments
// With Arguments: If the function or method requires one or more arguments to perform its task, you should provide those arguments inside the parentheses. For example, the slice() method requires one or two arguments: the starting index and optionally the ending index.

// javascript

// let myString = "hello";
// let slicedString = myString.slice(1, 3); // Parentheses contain arguments 1 and 3
// Constructor Functions: When creating objects using constructor functions (e.g., new Date()), you'll also use empty parentheses. Constructor functions are special functions used to create instances of objects, and empty parentheses are used to indicate the absence of arguments.

// javascript

// let currentDate = new Date(); // Empty parentheses because Date constructor function doesn't require arguments
// In summary, empty parentheses () are used when calling functions or methods that don't require any arguments to perform their tasks. If a function or method requires arguments, you'll provide those arguments inside the parentheses.





