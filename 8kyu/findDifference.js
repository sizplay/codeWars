// my answer

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, cur) => (acc *= cur), 1) -
      b.reduce((acc, cur) => (acc *= cur), 1)
  );
}

// best practice

function find_difference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current) -
      b.reduce((previous, current) => previous * current)
  );
}

console.log("", findDifference([3, 2, 5], [1, 4, 4]));
