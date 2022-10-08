//Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique.
// You may not convert the string into an array or use array methods to solve this problem.
// The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

//Questions : Can I use javaScript?

// declare the function and pass string as an argument
// check if string is string
// outer loop iterate from the first element
// inter loop iterate through the second element of the given array
// elements are compared
// if they are not unique return false
// if they are unique return true

const uniqueEl = (string) => {
  if (typeof string != "string") {
    return "Please enter a string.";
  } else {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
        console.log(
          `i: ${i}, j: ${j},string[i]:${string[i]}, string[j]:${string[j]} `
        );
        if (string[i] === string[j]) {
          return false;
        }
      }
    }
    return true;
  }
};

// const uniqueEl1 = (string) => {
//   if (typeof string != "string") {
//     return "Please enter a string.";
//   } else {
//     let hasDuplicates = string;
//     if ((hasDuplicates = /([a-zA-Z]).*?\1/)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };
