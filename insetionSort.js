function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([5, 2, 6, 7, 3345]));

// WITHOUT VAR

function insertNoVar(arr) {
  // begin loop at one as everything left of i will be sorted
  for (let i = 1; i < arr.length; i++) {
    // j will be everything left of i
    let j = i - 1;
    // store a temp for the ele we need to insert
    let temp = arr[i];
    // if we dont have more to compare in the left
    // and the sorted section is greater we insert here
    while (j > -1 && arr[j] > temp) {
      // insert by swapping the two ele
      arr[j + 1] = arr[j];
      // dec j to continue checking
      j--;
    }
    // reset the temp to the next item
    arr[j + 1] = temp;
  }
  return arr;
}
// j, i,
console.log(insertNoVar([5, 7, 46, 2, 5, 67, 7, 345, 46, 36, 0, 656, 6]));
// 0, 1,  2, 3, 4,  5, 6,   7,  8,  9,
