function getSum(a, b) {
  let total = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    total += i;
  }
  return total;
}
getSum(0, -1); //?
getSum(-1, 2); //?

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
