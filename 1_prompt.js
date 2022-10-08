// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//Questions: Can I use javaScript?

// name the function turnIntoUrl(string)
// declare stringUrlArray and split it
// declare an empty res array
//  for loop where should be compared current  elements of the array with empty space " "
// If stringUrlArray[i] === " " then res.push("%20")
// else push current element
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

// declare the function and pass string as an argument
// check if string is of type string
// termination case - stop when string is empty
// declare a variable for first letter
// a variable that store if first letter equal space then replace it with "%20" else use first letter
//return replaceOneLetter value with added result of our function called with argument equal to the  rest of the string

const turnIntoUrlRecursion = (string) => {
  if (typeof string != "string") {
    return "Please enter a string.";
  } else {
    if (string === "") {
      return "";
    } else {
      const oneLetter = string[0];
      const replacedOneLetter = oneLetter === " " ? "%20" : oneLetter;
      return replacedOneLetter + turnIntoUrlRecursion(string.substring(1));
    }
  }
};
