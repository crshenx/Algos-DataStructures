function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // start loop and grab first index as the min
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // begin checking min again rest of ele
      // if the next ele is less than the min set the new index
      if (arr[j] < arr[min]) min = j;
    }
    // if the outer loops index is not the min swap the eles
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 3, 2, 6, 4]));
