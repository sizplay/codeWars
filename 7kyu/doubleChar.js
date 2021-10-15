function doubleChar(str) {
  return str
    .split("")
    .reduce((acc, cur) => [...acc, `${cur}${cur}`], [])
    .join("");
}

doubleChar("abcd"); //?
