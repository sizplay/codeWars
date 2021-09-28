// best practice
function persistence(num) {
  return persistenceHelp(num, (count = 0));
}

function persistenceHelp(num, count) {
  return num.toString().split("").length > 1
    ? persistenceHelp(
        num
          .toString()
          .split("")
          .reduce((acc, cur) => acc * cur, 1),
        ++count
      )
    : count;
}

// clever
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

persistence(4); //?
persistence(999); //?
