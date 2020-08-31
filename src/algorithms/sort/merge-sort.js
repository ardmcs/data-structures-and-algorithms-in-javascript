function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let sortedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j === arr2.length) {
      sortedArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i === arr1.length) {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

mergeSort([5, 2, 1, 6, 8, 7, 9]);
