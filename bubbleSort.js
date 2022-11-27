function bubbleSort(arr) {
  // we set i = to the array length and decrement and compare j to it so we dont go to the end once the largest is found
  for (let i = arr.length; i > 0; i--) {
    // boolean that will be set to false if there are any swaps made
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1])
        ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]), (noSwaps = false); // swaps are made to it is set to false
    }
    if (noSwaps) break; // if there no swaps we do not break
  }
  return arr;
}

console.log(bubbleSort([45, 43, 6, 2]));
