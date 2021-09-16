// my answer

function correct(string) {
  return string
    .split("")
    .reduce(
      (acc, cur) =>
        cur === "5"
          ? (acc += "S")
          : cur === "0"
          ? (acc += "O")
          : cur === "1"
          ? (acc += "I")
          : (acc += cur),
      ""
    );
}

// best practice
correct = (s) => s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

console.log(correct("L0D0N"));
