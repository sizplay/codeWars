// my answer

function removeEveryOther(arr) {
  return arr.reduce((acc, cur, idx) => {
    if (idx % 2 === 0) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

// best practice

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
  "Hello",
  "Hello Again",
]);
