/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 *
 * a (*) 0 = a
 * a (*) a = 0
 * a (*) b (*) a = (a (*) a) (*) b = 0 (*) b = b
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // XOR Bitwise operator
    result ^= nums[i];
  }

  return result;
}

singleNumber([4, 1, 2, 1, 2]); // 4
singleNumber([2, 2, 1]); // 1
