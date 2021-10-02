// my answer
function arrayDiff(a, b) {
  return a.reduce((acc, cur) => {
    if (b.indexOf(cur) === -1) acc.push(cur);
    return acc;
  }, []);
}

// best practice
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

arrayDiff([], [4, 5]); //?
arrayDiff([1, 8, 2], []); //?
arrayDiff([1, 2, 3], [1, 2]); //?
arrayDiff([3, 4], [3]); //?
