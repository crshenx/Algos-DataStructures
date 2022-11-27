// return true if args passed are duplicates

function areThereDuplicates(...args) {
  let arr = [...args];
  let set = new Set([]);
  for (let el of arr) {
    if (set.has(el)) {
      return true;
    }
    set.add(el);
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 4));
