// let input = require("fs").readFileSync("/dev/stdin").toString();

// let count = Number(input);
const count = 5;

for (let i = 0; i < count; i++) {
  let star = "";

  for (let j = 0; j <= count; j++) {
    star += j <= i ? " " : "*";
  }
  console.log(star);
}
