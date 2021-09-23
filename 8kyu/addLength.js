// my answer
function addLength(str) {
  return str.split(" ").map((ele) => `${ele} ${ele.length}`);
}

// best practice
function addLength(str) {
  return str.split(" ").map(function (v) {
    return v + " " + v.length;
  });
}

addLength("apple ban");
