// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them,
//using a number to show how many times the repeated character has been compressed.
//For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// Questions :
// -Can I assume that letters will be lowercase?
// -Can I use javaScript?

//declare the function and pass with string argument
//if argument is not  a string return "Please enter a string."s
//declare array of strings and split it
//declare empty array res
//make counting elements variable and set it to 1;
// use loop to iterate trough the elements and indexes
//if current element is equal to next element then increment elementCounter
//else push into res counting elementCount variable if its more then 1 and current element and reset elementCounter to 1
// return res.join("")

const compressingString1 = (string) => {
  if (typeof string != "string") {
    return "Please enter a string.";
  } else {
    const stringArray = string.split("");
    let res = [];
    let elementCount = 1;
    stringArray.forEach((element, index) => {
      console.log(
        `element: ${element}, index: ${index}, stringArray[index + 1]: ${
          stringArray[index + 1]
        }`
      );
      if (element === stringArray[index + 1]) {
        elementCount++;
      } else {
        res.push(`${elementCount > 1 ? elementCount : ""}${element}`);
        elementCount = 1;
      }
    });
    return res.join("");
  }
};
