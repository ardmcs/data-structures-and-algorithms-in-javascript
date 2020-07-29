/**
 * Given two arrays, write a function to compute their intersection.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  // Check for the smallest array
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  let map = {};

  for (let i = 0; i < nums1.length; i++) {
    let value = nums1[i];
    map[value] ? (map[value] += 1) : (map[value] = 1);
  }

  let list = [];

  for (let i = 0; i < nums2.length; i++) {
    let value = nums2[i];
    let count = map[value];
    if (count > 0) {
      list.push(value);
      map[value] = count - 1;
    }
  }

  return list;
}
