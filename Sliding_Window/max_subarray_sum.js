function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let max = 0;
  let temp = 0;

  // Iterate thru the number of times its comparing the corresponding pairs
  for (let i = 0; i < num; i++) {
    // add it up to the initial max value
    max += arr[i];
  }

  temp = max;

  // Iterate thru by adding one from the back and subtract one from the front
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

maxSubarraySum([100, 200, 300, 400], 2);
