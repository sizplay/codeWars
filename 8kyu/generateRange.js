// my answer

function generateRange(min, max, step) {
  let temp = min;
  const arr = [min];
  while (temp < max) {
    temp = temp + step;
    if (temp <= max) {
      arr.push(temp);
    }
  }
  return arr;
}
// best practice
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// best clever
function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min);
  return res;
}

console.log("", generateRange(2, 10, 2));
