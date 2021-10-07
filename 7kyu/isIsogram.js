function isIsogram(str) {
  return str
    .toLowerCase()
    .split("")
    .every((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e));
}

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

isIsogram("isIsogram"); //?
isIsogram("Dermatoglyphics"); //?
isIsogram(""); //?
