/**
 * Write a function that takes in a list of data, representing water levels of each day
 * Calculate the largest increase across n days.
 * Assuming that data is randomized and non-negative
 *
 * @param {number[]} data
 * @return {number}
 */
function maxIncrease(data) {
  let min = Infinity;
  let minIdx = 0;
  let max = -Infinity;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < min) {
      min = data[i];
      minIdx = i;
    }
    if (data[i] > max && i > minIdx) {
      max = data[i];
    }
  }

  return Math.max(max, 1) - min;
}

let res = maxIncrease([3, 2, 1]);
let res2 = maxIncrease([10, 3, 4, 6, 7, 12, 5]);
console.log(res);
console.log(res2);
