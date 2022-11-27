function averagePair(arr, avg) {
  if (arr.length < 2) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let currentAvg = arr[start] + arr[end] / 2;
    if (currentAvg === avg) {
      return true;
    } else if (currentAvg < avg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

module.exports = averagePair;
