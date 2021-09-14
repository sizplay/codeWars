// my answer

function bigToSmall(arr) {
  return []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
}

// best practice

function bigToSmall(arr) {
  return []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
