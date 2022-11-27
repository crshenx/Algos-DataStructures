function pivot(arr, start = 0, end = arr.length - 1) {
  // define a function to swap the elements
  function swap(array, i1, i2) {
    [array[i1], array[i2]] = [array[i2], array[i1]];
  }
  // is what were checking to see how many are less than
  let pivotIndex = arr[start];
  // keeps track of how many our swapIndex is greater than
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    // if the pivot index is greater then the current index
    if (pivotIndex > arr[i]) {
      // we increment our count
      swapIndex++;
      // we swap those what were checking against the current ele
      swap(arr, swapIndex, i);
    }
  }
  // after the loop we know how many our swap index is greater than
  // ex. we are starting at 0 index so 4 is greater than 3 numbers in a a list 0-8
  // we swap the 0th index with our result beind the 3rd
  swap(arr, start, swapIndex);
  return swapIndex;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  // the base case checks if the arr has more than one element
  if (left < right) {
    // set pivotIndex to the result of pivot
    // first time it returns the index totalling how many it is larger than
    // and mutates the array placing it in the proper place
    let pivotIndex = pivot(arr, left, right);
    // call quick sort again adding to the stack
    // first time it takes the left section from 0 to the pivot array
    quickSort(arr, left, pivotIndex - 1);
    // similar to above but the right side of the array
    // first time it takes from one pluse the pivotIndex to the end
    quickSort(arr, pivotIndex + 1, right);
    // once the call stack is resolved itreturns the mutated array
  }
  // and returns all the pivot indexes where they belong
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
