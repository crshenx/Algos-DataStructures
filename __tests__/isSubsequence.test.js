const isSubsequence = require("../isSubsequence");

describe(`is the first string contained IN ORDER within the second string`, () => {
  test(`hello is inside the string 'hello world'`, () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
  });
  test(`'sing' is inside the string 'sting'`, () => {
    expect(isSubsequence("sing", "sting")).toBe(true);
  });
  test(`'abc' is inside the string 'abracadabra'`, () => {
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });
  test(`order matters`, () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
  test(`a word cannot be contained if it is larger than the container`, () => {
    expect(isSubsequence("abca", "acb")).toBe(false);
  });
});
