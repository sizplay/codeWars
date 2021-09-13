// my answer
function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

// Best Practice
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}
