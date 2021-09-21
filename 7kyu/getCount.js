// my answer
function getCount(str) {
  return str
    .split("")
    .reduce((acc, cur) => (acc += "aeiou".indexOf(cur) > -1), 0);
}

// clever
function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

// good
function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

getCount("abracadabra"); //?
