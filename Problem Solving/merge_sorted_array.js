/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let end = nums1.length - 1;

  while (end >= 0) {
    if (i < 0) {
      nums1[end] = nums2[j];
      j--;
    } else if (j < 0) {
      nums1[end] = nums1[i];
      i--;
    } else {
      if (nums1[i] > nums2[j]) {
        nums1[end] = nums1[i];
        i--;
      } else {
        nums1[end] = nums2[j];
        j--;
      }
    }
    end--;
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
