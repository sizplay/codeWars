// my first answer
function digital_root(n) {
  let result = n;
  while (result.toString().split("").length > 1) {
    result = result
      .toString()
      .split("")
      .reduce((acc, cur) => (acc += Number(cur)), 0);
  }
  return result;
}

// my answer
function digital_root(n) {
  return n.toString().split("").length > 1
    ? digital_root(
        n
          .toString()
          .split("")
          .reduce((acc, cur) => (acc += Number(cur)), 0)
      )
    : n;
}

// best practice
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

//
function digital_root(n) {
  return n < 10
    ? n
    : digital_root(
        String(n)
          .split("")
          .reduce((s, v) => Number(s) + Number(v))
      );
}

digital_root(16); //?
digital_root(456); //?
