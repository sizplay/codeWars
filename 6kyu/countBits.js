// my answer
var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((v) => v > 0).length;
};

// best practice
countBits = (n) => n.toString(2).split("0").join("").length;

countBits(0); //?
countBits(4); //?
countBits(7); //?
