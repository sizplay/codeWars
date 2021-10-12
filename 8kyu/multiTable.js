function multiTable(number) {
  return new Array(10)
    .fill("")
    .map((_, idx) => `${idx + 1} * ${number} = ${(idx + 1) * number}`)
    .join("\n");
}

multiTable(5); //?
