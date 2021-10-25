const reverseSeq = (n) => {
  return new Array(n).fill(1).map((v, i) => n - i);
};

reverseSeq(5); //?
