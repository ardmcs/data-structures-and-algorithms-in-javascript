function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start with second element in array
    let currentVal = arr[i];
    // Set pointer to element before
    let j = i - 1;
    // Compare if element before is greater than current
    while (j >= 0 && arr[j] > currentVal) {
      // Iteratively bubble all the greater elements to the right
      arr[j + 1] = arr[j];
      j--;
    }
    // Assign the smallest value to the left (Since j will be i - 1)
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(
  insertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
);
