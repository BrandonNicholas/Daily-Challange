// Challenge: 03-sumNumbers
// Difficulty: Basic
// Prompt:
// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).
// Examples:
// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0



function sumNumbers(arr) {
  if (arr.length === 0) {
    return 0; // If the array is empty, return 0
  }

  let sum = 0; // Initialize sum to zero
  
  // Loop through each element of the array and add it to sum
  for (let i = 0; i < arr.length; i++) {
    console.log("Adding", arr[i], "to sum"); //to show the loop working
    sum += arr[i];
  }
  
  return sum; // Return the sum after the loop
}

// console.log(sumNumbers([10])); 
console.log(sumNumbers([5, 10])); 
// console.log(sumNumbers([2, 10, -5])); 
// console.log(sumNumbers([])); 