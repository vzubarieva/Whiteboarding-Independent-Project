// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this.
//  Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Questions: For strings does "hi" equal "Hi" or are those two distinct? Can I use javaScript? Can I use javaScript?

//declare the function and pass  duplicateArray as an argument
// declare empty array res, to store result array
// declare boolean variable false to check if current element is found in res array
// outer for loop iterates over given array
//inner loop search for current array element in res array and mark found as true if found and break inner loop
//if element was not found adding it to res array

const removeDuplicate1 = (duplicateArray) => {
  const res = [];
  let found = false;
  for (let i = 0; i < duplicateArray.length; i++) {
    found = false;
    for (let j = 0; j < res.length; j++) {
      if (duplicateArray[i] === res[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      res.push(duplicateArray[i]);
    }
  }
  return res;
};

console.log(removeDuplicate1([7, 9, "hi", 12, "hi", 7, 53, 7]));

//solution with .filter()

const removeDuplicateFilter = (duplicateArray) => {
  return duplicateArray.filter((element, index) => {
    console.log(
      `element: ${element} outer loop index: ${index} inner loop found index: ${duplicateArray.indexOf(
        element
      )}`
    );
    return index === duplicateArray.indexOf(element);
  });
};

//"element: 7 outer loop index: 0 inner loop found index: 0"
//"element: 9 outer loop index: 1 inner loop found index: 1"
//"element: hi outer loop index: 2 inner loop found index: 2"
//"element: 12 outer loop index: 3 inner loop found index: 3"
//"element: hi outer loop index: 4 inner loop found index: 2"

console.log(removeDuplicateFilter([7, 9, "hi", 12, "hi", 7, 53, 7, 9]));

// Recursion approach

//check if array is array
//termination case - if in given array no elements then stop the recursion
//declare currentElement  variable ;
//declare theRestOfTheArray where callback function which filtered if element is not the same as current element
//return array where function will filter array and show copied array without duplicates

const removeDuplicateRecursion = (arr) => {
  if (!Array.isArray(arr)) {
    return `is not an array.`;
  }
  if (arr.length === 0) {
    return [];
  } else {
    const currentElement = arr[0];
    const theRestOfArray = arr.filter((el) => {
      return el != currentElement;
    });
    return [currentElement, ...removeDuplicateRecursion(theRestOfArray)];
  }
};
