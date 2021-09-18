// my answer
function replace(s) {
  return s
    .split("")
    .map((ele) => ("aeiouAEIOU".indexOf(ele) === -1 ? ele : "!"))
    .join("");
}

// best practice

function replace(s) {
  return s.replace(/[aeoiu]/gi, "!");
}

console.log("", replace("Hi!"));
