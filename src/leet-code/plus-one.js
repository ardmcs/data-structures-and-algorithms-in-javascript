/**
 * Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

  The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

  You may assume the integer does not contain any leading zero, except the number 0 itself.
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  let newDigits = new Array(n + 1).fill(0);
  newDigits[0] = 1;
  return newDigits;
}

plusOne([9, 9, 9]); // [1,0,0,0]
