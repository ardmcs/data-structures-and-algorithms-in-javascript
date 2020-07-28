/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 */
function moveZeroes(nums) {
  let lastZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastZeroIndex] = nums[i];
      lastZeroIndex += 1;
    }
  }

  for (let i = lastZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
