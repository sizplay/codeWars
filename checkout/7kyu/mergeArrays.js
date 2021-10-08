function mergeArrays(a, b) {
  return a
    .reduce((acc, cur, idx) => {
      acc.push(cur);
      acc.push(b.shift());
      return acc;
    }, [])
    .concat(b)
    .filter((a) => a !== undefined);
}

const mergeArrays = (a, b) =>
  a
    .reduce(
      (pre, val) => (b.length ? [...pre, val, b.shift()] : [...pre, val]),
      []
    )
    .concat(b);

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]); //?
mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]); //?
mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]); //?
mergeArrays(
  ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
  [2, 5, 8, 23, 67, 6]
); //?
