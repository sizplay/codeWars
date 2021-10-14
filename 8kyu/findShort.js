function findShort(s) {
  return s
    .split(" ")
    .reduce((acc, cur) => (acc < cur.length ? acc : cur.length), Infinity);
}

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

findShort("bitcoin take over the world maybe who knows perhaps"); //?
