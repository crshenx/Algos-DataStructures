// divide and conquer
// split array up in to arrays containing one element
// then merge them together by sorting

// funciton for merging two sorted arrays

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i]), i++;
    else result.push(arr2[j]), j++;
  }
  while (i < arr1.length) result.push(arr1[i]), i++;
  while (j < arr2.length) result.push(arr2[j]), j++;
  return result;
}

// break the array in half with slice
// merge the arrays

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([5, 4, 6, 3, 7, 2]));

module.exports = mergeSort;
