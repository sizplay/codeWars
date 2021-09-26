// my answer
function spinWords(string) {
  return string
    .split(" ")
    .map((ele) => (ele.length >= 5 ? ele.split("").reverse().join("") : ele))
    .join(" ");
}

// best practice
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

spinWords("This is another test"); //?
