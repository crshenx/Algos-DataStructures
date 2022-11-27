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
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j > -1 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
// j, i,
console.log(insertNoVar([5, 7, 46, 2, 5, 67, 7, 345, 46, 36, 0, 656, 6]));
// 0, 1,  2, 3, 4,  5, 6,   7,  8,  9,
