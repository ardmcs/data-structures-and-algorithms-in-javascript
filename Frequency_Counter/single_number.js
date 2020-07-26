function singleNumber(nums) {
  let lookup = {};

  for (let i = 0; i < nums.length; i++) {
    if (lookup[nums[i]]) {
      lookup[nums[i]] += 1;
    } else {
      lookup[nums[i]] = 1;
    }
  }

  for (let key in lookup) {
    if (lookup[key] === 1) {
      return parseInt(key);
    }
  }

  return -1;
}

singleNumber([4, 1, 2, 1, 2]); // Should return '4'
