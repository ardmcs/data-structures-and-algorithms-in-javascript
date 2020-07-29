/**
 * Implement atoi which converts a string to an integer.

  The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

  The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

  If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

  If no valid conversion could be performed, a zero value is returned.

  Note:

  Only the space character ' ' is considered as whitespace character.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
  
 * Time: O(n)
 * Space: O(1)
 * Where n is the number of characters in input string
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let res = 0;
  let i = 0;
  let negative = 1;

  // Check for whitespaces
  while (i < str.length && str[i] === " ") {
    i++;
  }

  // Check for +/- symbol
  if (i < str.length && str[i] == "-") {
    i++;
    negative = -1;
  } else if (i < str.length && str[i] == "+") {
    i++;
  }

  // Check for number 0-9
  let checker = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  while (i < str.length && checker.has(parseInt(str[i]))) {
    res = res * 10 + parseInt(str[i]);
    i++;
  }

  // Convert negative if any
  res = res * negative;

  if (res < 0) {
    return Math.max(res, INT_MIN);
  }

  return Math.min(res, INT_MAX);
}

myAtoi("   -42"); // -42
myAtoi("4193 with words"); // 4193
myAtoi("words and 987"); // 0 The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.
myAtoi("4193 with words"); // 4193
myAtoi("-91283472332"); // -2147483648 (Return -2^31 max 32-bit signed int)
