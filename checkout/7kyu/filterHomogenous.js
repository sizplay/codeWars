// my answer
function filterHomogenous(arrays) {
  return arrays.filter(
    (v) => v.length > 0 && v.every((e) => typeof e === typeof v[0])
  );
}

// best practice
function filterHomogenous(arr) {
  return arr.filter(
    (subArr) =>
      subArr.length > 0 &&
      subArr.every((val) => typeof val === typeof subArr[0])
  );
}

filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]); //?
