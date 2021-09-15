// my answer

function arrayMadness(a, b) {
  return (
    a.reduce((acc, cur) => (acc += cur ** 2), 0) >=
    b.reduce((acc, cur) => (acc += cur ** 3), 0)
  ); //?
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]));

// best practice

const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);
