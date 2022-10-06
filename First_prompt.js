// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//Questions: Can I use javaScript?

//  name the function turnIntoUrl(string)
// declare stringUrlArray and split it
// declare an empty res array
//  for loop where should be compared currient  elements of the array with empty space " "
// If stringUrlArray[i] === " " then res.push("%20")
// else push currient element
// return res array and join it

// Iterative
const turnIntoUrl = (string) => {
  const stringUrlArray = string.split("");
  let res = [];
  for (i = 0; i < stringUrlArray.length; i++) {
    if (stringUrlArray[i] === " ") {
      res.push("%20");
    } else {
      res.push(stringUrlArray[i]);
    }
  }
  return res.join("");
};

// Recursion
