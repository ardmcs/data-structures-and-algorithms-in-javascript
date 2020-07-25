function areThereDuplicates(...args) {
  if (args.length < 2) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < args.length; i++) {
    let val = args[i];
    if (obj[val]) {
      return true;
    } else {
      obj[val] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
