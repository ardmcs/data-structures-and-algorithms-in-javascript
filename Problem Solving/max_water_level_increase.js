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
  let maxIncrement = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] < min) {
      min = data[i];
    } else if (data[i] - min > maxIncrement) {
      maxIncrement = data[i] - min;
    }
  }

  return maxIncrement;
}

let res = maxIncrease([3, 2, 1]);
let res2 = maxIncrease([7, 1, 5, 3, 6, 4]);
console.log(res);
console.log(res2);
