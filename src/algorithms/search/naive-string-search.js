function stringSearch(str, search) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) {
        break;
      }
      if (j === search.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("zomwzomgzomg", "omg"));
