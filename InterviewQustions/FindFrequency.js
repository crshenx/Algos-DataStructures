function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  let num1Obj = {};
  let num2Obj = {};
  for (let i = 0; i < str1.length; i++) {
    let currentNumber1 = str1[i];
    let currentNumber2 = str2[i];
    if (!num1Obj[currentNumber1]) {
      num1Obj[currentNumber1] = 1;
    } else {
      num1Obj[currentNumber1] += 1;
    }
    if (!num2Obj[currentNumber2]) {
      num2Obj[currentNumber2] = 1;
    } else {
      num2Obj[currentNumber2] += 1;
    }
  }
  for (let el in num1Obj) {
    if (num1Obj[el] !== num2Obj[el]) {
      return false;
    }
    return true;
  }
}

console.log(sameFrequency(182, 281), "true");
console.log(sameFrequency(34, 14), "false");
console.log(sameFrequency(3589578, 5879385), "true");
console.log(sameFrequency(22, 222), "false");
function sum(arr = [8, 6, 2, 5, 4, 8, 3, 7]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum());

// find the length of the longest substring without repeating characters

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let current = 0;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    if (!obj[currentLetter]) {
      obj[currentLetter] = 1;
      current++;
      if (current > longest) {
        longest = current;
      }
    } else {
      obj = {};
      current = 0;
    }
  }
  return longest;
};

// leetcode where will the ball fall
