// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method.
//There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// Questions   Can I assume data type will always be a number? Can I use javaScript?

//I'm going to solve it using Quick sort approach
// First find the “pivot” (middle element) element in the array.
// declare left and right pointers
// while loop where stop when pointers meet each other
//inner while loop where current item is less then middle pointer(pivot) then i move to the left;
// inner  while loop for right pointer is when j more then middle pointer then j move to the right
// Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
//Increment the left pointer and decrement the right pointer.
//If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element  //2
    i = left, //left pointer 12
    j = right; //right pointer 9
  while (i <= j) {
    //12 > 9
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition  9,2,7,12
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot     left 9     2      7,12 right
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var items = [9, 2, 7, 12];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //output [2, 7, 9, 12]
