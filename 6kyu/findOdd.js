// my answer
function findOdd(A) {
  const a = A.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc;
  },{});
  let result;
  for (let key in a) {
    if (a[key] % 2 === 1) {
      result = key;
    }
  }
  return Number(result);
}

// best practice
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// clever
const findOdd = (arr) =>
  arr.reduce((pv, cv) =>
    arr.filter((inv) => inv === cv).length % 2 === 1 ? cv : pv
  );

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5

// 갯수가 홀수로 나오는것을 찾아 리턴하라 딱 하나밖에 없다.
