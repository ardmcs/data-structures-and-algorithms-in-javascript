/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // 5

// NOTE: Same as Count Unique Values
