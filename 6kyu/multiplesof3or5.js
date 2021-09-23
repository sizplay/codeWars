// my answer
function solution(number) {
  return number < 0
    ? 0
    : new Array(number)
        .fill("")
        .reduce(
          (acc, cur, idx) =>
            idx % 3 === 0 || idx % 5 === 0 ? (acc += idx) : acc,
          0
        );
}

// best practice
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

solution(10); //?

console.log(9 % 3); //?
