// divide and conquer
// split array up in to arrays containing one element
// then merge them together by sorting

// helper funciton for merging two sorted arrays
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  // loop over the first index of each array compare them
  // then push them in sorted order into result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i]), i++;
    else result.push(arr2[j]), j++;
  }
  // these loops take care of the arrays have different lengths
  while (i < arr1.length) result.push(arr1[i]), i++;
  while (j < arr2.length) result.push(arr2[j]), j++;
  return result;
}

// break the array in half with slice
// merge the arrays

function mergeSort(arr) {
  // our base case is if the array.len is <= 1
  if (arr.length <= 1) return arr;
  // find the middle of the array
  let mid = Math.floor(arr.length / 2);
  // split the array in half on one side recursively
  let left = mergeSort(arr.slice(0, mid));
  // once the stack for the left is resolved repeat for the right
  let right = mergeSort(arr.slice(mid));
  // call the helper function and merge them back together
  return merge(left, right);
}

console.log(mergeSort([5, 4, 6, 3, 7, 2]));

module.exports = mergeSort;
