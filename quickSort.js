function pivot(arr, start, end) {
  // keeps track of how many elemnts are less than then current
  let pivotIndex = arr[start];
  let swapIndex = start;
  for (let i = 1; i < arr.length; i++) {
    if (pivotIndex > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
}
