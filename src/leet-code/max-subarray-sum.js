/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubarraySum(nums) {
  let maxSum = nums[0];
  let currentSum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
