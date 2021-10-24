function sumTwoSmallestNumbers(numbers) {
  const a = Math.min(...numbers); //?
  const second = numbers.filter((v) => v !== a); //?
  return a + Math.min(...second);
}
sumTwoSmallestNumbers([5, 8, 12, 19, 22]); //?
