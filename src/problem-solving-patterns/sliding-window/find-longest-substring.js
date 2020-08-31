function findLongestSubstring(str) {
  let longestSubStr = 0;
  let obj = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }

    longestSubStr = Math.max(longestSubStr, i - start + 1);

    obj[char] = i + 1;
  }

  return longestSubStr;
}

findLongestSubstring("bbbbbb");
