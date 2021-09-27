// my answer
function duplicateCount(text) {
  return Object.entries(
    text
      .toLowerCase()
      .split("")
      .reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
      }, {})
  ).reduce((acc, cur) => (cur[1] > 1 ? acc + 1 : acc), 0);
}

// clever
function duplicateCount(text) {
  text = text.toLowerCase();
  return [...new Set(text.split(""))].filter(
    (c, i) => text.lastIndexOf(c) > text.indexOf(c)
  ).length;
}

// clever
const duplicateCount = (a) =>
  new Set(a.toLowerCase().split``.filter((e, i, a) => i != a.indexOf(e))).size;

duplicateCount("Indivisibilities"); //?
