function validParentheses(parens) {
  return !parens
    .split("")
    .reduce((acc, cur) => {
      if (cur === "(") {
        acc.push(cur);
      } else if (cur === ")") {
        if (acc.find((v) => v === "(")) {
          acc.pop();
        } else {
          acc.push(")");
        }
      }
      return acc;
    }, []).join('')
}

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
