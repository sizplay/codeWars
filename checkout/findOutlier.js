// my answer
// function findOutlier(integers) {
//   let oddCount = 0;
//   let odd = 0;
//   let even = 0;
//   let evenCount = 0;

//   integers.forEach((ele, idx) => {
//     if (ele % 2) {
//       evenCount += 1;
//       if (evenCount === 1) {
//         even = ele;
//       }
//     } else {
//       oddCount += 1;
//       if (oddCount === 1) {
//         odd = ele;
//       }
//     }
//   });

//   if (evenCount > 0 && oddCount > 0) {
//     if (evenCount > oddCount) {
//       return odd;
//     } else {
//       return even;
//     }
//   }
// }

// best practice
// function findOutlier(int) {
//   var even = int.filter((a) => a % 2 == 0); //?
//   var odd = int.filter((a) => a % 2 !== 0); //?
//   return even.length == 1 ? even[0] : odd[0]; //?
// }

findOutlier([0, 1, 2]); //?
findOutlier([1, 2, 3]); //?

function findOutlier(int) {
  return int.filter((idx) => idx % 2 === 0).length === 1
    ? int.filter((idx) => idx % 2 === 0)[0]
    : int.filter((idx) => idx % 2 !== 0)[0];
}
