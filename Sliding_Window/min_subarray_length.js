function minSubArrayLen(arr, num) {
  // Define total count
  let total = 0;
  // Define start pointer
  let start = 0;
  // Define end pointer
  let end = 0;
  // Define minimum
  let minLen = Infinity;

  // Iterate through array
  while (start < arr.length) {
    /* If total count is lesser than count AND end pointer has not reached end of array, start increasing the window sample size */
    if (total < num && end < arr.length) {
      // Add the value of end pointer towards total count
      total += arr[end];
      // Increment end pointer by 1
      end++;
    } else if (total >= num) {
      /* If total count is greater or equal to num, start sliding window forward -> */

      // Assign minLen based off the lowest comparison of previous minLen vs the current sliding window (start - end)
      minLen = Math.min(minLen, end - start);
      // Subtract the value of start pointer from the total count (since the window is sliding forward ->)
      total -= arr[start];
      // Increase start pointer by 1;
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
