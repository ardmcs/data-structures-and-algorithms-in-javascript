function pivotHelper(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivotIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex += 1;

      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, start, pivotIndex);

  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    // Recursively solve Left
    quickSort(arr, left, pivotIndex - 1);
    // Recursively solve Right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

//  L=0         R=6
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5] <- 4 gets pivotted to the correct index of array
//        4
//  3,2,1   6,9,5  <- Recusively solve Left & Right of the pivot
//      3     6    <- Pivot 3 and 6 into correct index of array
//  2,1     5   9
//    2
//  1

quickSort([4, 6, 9, 1, 2, 5, 3]);
