// my answer
function noSpace(x) {
  return x.replace(/ /g, "");
}

// best pratice
function noSpace(x) {
  return x.replace(/\s/g, "");
}
