const nums1 = [1, 2, 3, 4, 5, 6, 7];

function rotate(nums, k) {
  if (k === nums.length) {
    return nums;
  }
  while (0 < k) {
    let popped = nums.pop();
    nums.unshift(popped);
    k--;
  }
  return nums;
}

function rotate1(nums, k) {
  if (k === nums.length) {
    return nums;
  }
  if (k > nums.length) {
    k %= nums.length;
  }
  let newFront = nums.splice(nums.length - k);
  nums.unshift(...newFront);
  return nums;
}

function rotate2(nums, k) {
  if (k === nums.length) {
    return nums;
  }
  if (k > nums.length) {
    k %= nums.length;
  }
  let arrLength = nums.length - 1;
  while (0 < k) {
    [nums[(nums.length - 1 + k) % arrLength], nums[arrLength - k]] = [
      nums[arrLength - k],
      nums[(nums.length - 1 + k) % arrLength],
    ];
    console.log(k, nums);
    arrLength--;
    k--;
  }
  return nums;
}

// console.log(rotate(nums1, 1));
// console.log(rotate(nums1, 2));
// console.log(rotate(nums1, 3));
// console.log(rotate1(nums1, 1));
// console.log(rotate1(nums1, 2));
// console.log(rotate1(nums1, 3));
rotate2(nums1, 2);
