// my answer
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// best practice
function removeChar(str) {
  return str.slice(1, -1);
}
