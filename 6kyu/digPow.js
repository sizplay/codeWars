function digPow(num, pow) {
  const result =
    num
      .toString()
      .split("")
      .reduce((acc, cur, idx) => acc + cur ** (idx + pow), 0) / num;

  return Number.isInteger(result) ? result : -1;
}

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

digPow(89, 1); //?
digPow(46288, 3); //?

digPow(92, 1); //?
