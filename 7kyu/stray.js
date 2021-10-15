function stray(numbers) {
  return numbers.find((v) => numbers.indexOf(v) === numbers.lastIndexOf(v));
}
stray([1, 1, 2]); //?
