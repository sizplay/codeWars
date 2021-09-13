// my answer

function isPalindrome(x) {
  let result = true;
  const length = x.length;

  for (let i = 0; i < length; i++) {
    if (
      x[i].toLowerCase() !== x[length - i - 1].toLowerCase() &&
      i !== Math.floor(length / 2) + 1
    ) {
      result = false;
    }
  }

  return result;
}

// best practice

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
