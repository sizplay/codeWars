// my answer
var paintLetterboxes = function (start, end) {
  const arr = new Array(end - start + 1)
    .fill("")
    .map((_, idx) => start + idx)
    .reduce((acc, cur) => {
      acc.push(...cur.toString().split(""));
      return acc;
    }, [])
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});

  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (const [key, value] of Object.entries(arr)) {
    result[key] = value;
  }

  return result;
};

// best practice
const paintLetterboxes = (start, end) =>
  Array(10)
    .fill(0)
    .map(
      (_, i) =>
        Array(end - start + 1)
          .fill(0)
          .reduce((s, a, i) => s + (start + i), "")
          .split("")
          .filter((e) => e == i).length
    );

paintLetterboxes(125, 132); //?
