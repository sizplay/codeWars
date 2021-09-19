// my answer
function tripleTrouble(one, two, three) {
  return one
    .split("")
    .reduce((acc, cur, idx) => (acc += cur + two[idx] + three[idx]), "");
}

// best practice from my opinion
const tripleTrouble = (a, b, c) =>
  Array.from(a, (x, i) => x + b[i] + c[i]).join("");

const tripleTrouble = (one, two, three) =>
  one.replace(/./g, (m, i) => m + two[i] + three[i]);

tripleTrouble("aaa", "bbb", "ccc"); //?
