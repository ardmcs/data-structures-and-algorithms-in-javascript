/**
 * Given two arrays, write a function to compute their intersection.
 *
 * Note: Assuming that arrays are sorted
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  function compare(a, b) {
    return a - b;
  }
  nums1.sort(compare);
  nums2.sort(compare);

  let i = 0;
  let j = 0;

  let list = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      list.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return list;
}

intersect([4, 9, 5], [9, 4, 9, 8, 4]); // [4, 9] or [9, 4]
