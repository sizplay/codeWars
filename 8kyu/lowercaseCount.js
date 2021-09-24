// my answer
function lowercaseCount(str) {
  return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
}

// best practice
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

lowercaseCount("abcABC123"); //?

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"); //?
