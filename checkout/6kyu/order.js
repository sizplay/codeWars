// my answer
function order(words) {
  return !words
    ? ""
    : Object.values(
        words.split(" ").reduce((acc, cur, idx, arr) => {
          const orderNum = cur.match(/[1-9]/g, "");
          acc[orderNum[0] - 1] = cur;
          return acc;
        }, {})
      ).join(" ");
}

// best practice
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

order("is2 Thi1s T4est 3a"); //?
