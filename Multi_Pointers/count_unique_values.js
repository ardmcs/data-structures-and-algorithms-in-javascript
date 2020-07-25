function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let first = 0;
  let second = first + 1;

  while (second <= arr.length) {
    if (arr[first] === arr[second]) {
      second++;
    } else {
      first++;
      arr[first] = arr[second];
    }
  }

  return first;
}

countUniqueValues([1, 2, 2, 2, 3]);
