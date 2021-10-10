// my answer
function getMiddle(s) {
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    : `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}

// best practice
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

getMiddle("test"); //?
getMiddle("testing"); //?
