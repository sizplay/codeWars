// my answer
function superSize(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// best practice
function superSize(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

superSize(123456); //?
// superSize(513)//?
// superSize(2017) //?
