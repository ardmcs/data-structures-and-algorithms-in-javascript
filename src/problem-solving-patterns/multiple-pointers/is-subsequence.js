function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    } else {
      j++;
    }

    if (i === str1.length) {
      return true;
    }
  }
  return false;
}

isSubsequence("hello", "hello world");
