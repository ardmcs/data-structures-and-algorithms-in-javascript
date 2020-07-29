/**
 * You are given an n x n 2D matrix representing an image.

  Rotate the image by 90 degrees (clockwise).

  Note:

  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  let n = matrix.length;

  // Transpose Square Matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

/*
     j
  i [1,2,3]
    [4,5,6] 
    [7,8,9] 


     j
  i [1,4,7]
    [2,5,8] 
    [3,6,9] 
 
     j   (n-1-j)
  i [7,4,1]
    [8,5,2] 
    [9,6,3] 
      j<(n/2)
*/
