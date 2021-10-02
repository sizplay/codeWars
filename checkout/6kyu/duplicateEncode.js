// my answer
function duplicateEncode(word) {
  const counts = word
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {}); //?

  return word
    .toLowerCase()
    .split("")
    .map((ele) => (counts[ele] > 1 ? ")" : "("))
    .join("");
}

// best practice
const duplicateEncode = (s) =>
  s.toLowerCase().split``.map((e, _, a) =>
    a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")"
  ).join``;

// clever
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .replace(/./g, (m) =>
      word.toLowerCase().indexOf(m) == word.toLowerCase().lastIndexOf(m)
        ? "("
        : ")"
    );
}

duplicateEncode("recede"); //?
