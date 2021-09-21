// my answer
function accum(s) {
  return s
    .split("")
    .map(
      (ele, idx) =>
        `${ele.toUpperCase()}${new Array(idx).fill(ele.toLowerCase()).join("")}`
    )
    .join("-");
}

// best practice
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

accum("ZpglnRxqenU"); //?
