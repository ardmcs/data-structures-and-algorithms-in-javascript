/**
 * Time Complexity: O(m * n) or O(n^2)
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n) Potentially a nested loop
    if (correctIndex === -1) {
      return false;
    }
    arr1.splice(correctIndex, 1);
  } // O(n * n)
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
