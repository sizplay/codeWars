// return masked string
function maskify(cc) {
  return cc
    .split("")
    .map((v, idx) => (cc.length - 4 > idx ? "#" : v))
    .join("");
}

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

maskify("4556364607935616"); //?
