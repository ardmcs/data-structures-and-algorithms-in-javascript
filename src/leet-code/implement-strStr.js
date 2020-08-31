/**
 * 
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle.length) {
    return 0;
  }

  let m = haystack.length;
  let n = needle.length;

  if (m < n) {
    return -1;
  }

  for (let i = 0; i <= m - n; ++i) {
    let j;

    for (j = 0; j < n; ++j) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }

    if (j === n) {
      return i;
    }
  }

  return -1;
}

strStr("hello", "ll"); // 2
