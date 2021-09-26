// my answer
function likes(names) {
  return names.length === 0
    ? "no one likes this"
    : names.length === 1
    ? `${names[0]} likes this`
    : names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names.splice(0, 2).join(", ")} and ${names.length} others like this`;
}

// best practice
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}

likes([]); //?
likes(["Peter"]); //?
likes(["Jacob", "Alex"]); //?
likes(["Max", "John", "Mark"]); //?
likes(["Alex", "Jacob", "Mark", "Max"]); //?
