// function alphabetPosition(text) {
//   return text.toUpperCase().split("").map((v) => v.charCodeAt() - 64).join(' ')  //?
// }

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock."); //?
