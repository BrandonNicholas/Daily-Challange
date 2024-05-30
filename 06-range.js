// Challenge: 06-range
// Difficulty: basic
// Prompt:
// - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
// - The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
// Examples:
// range(1,4) //=> [1,2,3]
// range(-2, 3) //=> [-2,-1,0,1,2]
// range(1,1) //=> []
// range(5,2) //=> "First argument must be less than second"

function range(int1, int2) {
  if (int1 <= int2) {
      let result = []; //Make the results come out in an array format
      for (let i = int1; i < int2; i++) { //i++ adds 1 to each [i] . this is just a aprt of the loop operation
          result.push(i);//.push will push(add into the array) all [i] till the [i] thats less than int2
      }
      return result;
  } else {
      return 'First argument must be less than second';
  }
}

console.log(range(1, 4)); // Output: [1, 2, 3]
console.log(range(-2, 3)); // Output: [-2, -1, 0, 1, 2]
console.log(range(1, 1)); // Output: []
console.log(range(5, 2)); // Output: "First argument must be less than second"
