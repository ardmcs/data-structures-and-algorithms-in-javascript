function averagePair(arr, num) {
  if (arr.length < num) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let res = (arr[left] + arr[right]) / 2;
    if (res === num) {
      return true;
    } else if (res > num) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5);
