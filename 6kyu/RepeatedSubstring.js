// my answer
function f(s) {
  for (let i = 1; i < s.length; i += 1) {
    if (s.slice(0, i).repeat(Math.floor(s.length / i)) === s) {
      return [s.slice(0, i), Math.floor(s.length / i)]
    }
  }
  return [s,1]
}

// best answer
var f = function(s) {
  var m = s.match(/^(.*?)\1+$/);
  return m ? [m[1], s.length / m[1].length] : [s, 1];
}


f("ababab") // ["ab", 3]
f("abcde") // ["abcde", 1]
