// probably better to use math
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxD = digitCount(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    maxD = Math.max(digitCount(arr[i]), maxD);
  }
  return maxD;
}

function radixSort(nums) {
  // find how many times we need to put numbers into buckets
  let maxOfDigits = mostDigits(nums);
  // loop that many times
  for (let k = 0; k < maxOfDigits; k++) {
    // initialize 10 empty array ie. our buckets
    let digitBucket = Array.from({ length: 10 }, () => []);
    // loop over each number
    for (let i = 0; i < nums.length; i++) {
      // at givin index k get that number
      let digit = getDigit(nums[i], k);
      // and push it into the kth corresponding array
      digitBucket[digit].push(nums[i]);
    }
    // join the arrays in the new order
    nums = [].concat(...digitBucket);
    // repeat
  }
  // return the sorted array
  return nums;
}

// console.log(mostDigits([1234, 56, 7, 123456789]));
// console.log(getDigit(123456, 5));
// console.log(digitCount(123456));
console.log(radixSort([5, 234, 54, 6, 2, 435, 6, 23, 3]));
