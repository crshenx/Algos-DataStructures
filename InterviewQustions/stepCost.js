const cost = [10, 15, 20];

function stepCost(cost) {
  if (cost.length < 2) {
    return 0;
  }
  let count = [];
  for (let i = 2; i < cost.length; i++) {
    count.push(Math.min(cost[i]));
  }
  return count;
}

console.log(stepCost(cost));

function maxSumArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSumArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
