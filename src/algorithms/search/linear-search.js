function linearSearch(arr, val) {
  if (!arr || arr.length < 0) {
    return -1;
  }
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  
  return -1;
}

linearSearch([1,2,3,4,5,6], 6)