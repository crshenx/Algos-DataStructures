function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));

// collect odd values from input array into new array with recursion

function collectOdds(arr) {
  let result = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(arr);
  return result;
}

function pureRecursionOdds(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(pureRecursionOdds(arr.slice(1)));
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(pureRecursionOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function power(n1, n2) {
  let powpow = n1 ** n2;
  return powpow;
}

console.log(power(2, 0));

var twoSum = function (nums, target) {
  let start = 0;
  let i = nums.length - 1;
  while (start <= i) {
    if (nums[start] + nums[i] === target) {
      return [start, i];
    }
    if (nums[start] + nums[i] !== target) {
      i--;
    }
  }
};

console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([2, 7, 11, 15], 9));
