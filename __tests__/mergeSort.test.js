const mergeSort = require("../mergeSort");

describe(`does the function take an unsorted array and sort it using recursion`, () => {
  test(`array [8,7,6,5,4,3,2,1]`, () => {
    expect(mergeSort([8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });
  test(`array [5,4,6,3,7,2]`, () => {
    expect(mergeSort([5, 4, 6, 3, 7, 2])).toStrictEqual([2, 3, 4, 5, 6, 7]);
  });
});
