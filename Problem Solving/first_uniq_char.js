/**
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 *
 * Note: You may assume the string contains only lowercase English letters.
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  // Create a hash map
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    // Set unique values' index into hash map
    if (!map.has(current)) {
      map.set(current, i);
    } else {
      // If not unique, set index to -1
      map.set(current, -1);
    }
  }

  // Define minimum index position
  let min = Infinity;

  // Iterate through the keys of the hash map (which are the characters)
  for (let c of map.keys()) {
    // If the char is unique and is lesser than the new minimum index
    if (map.get(c) > -1 && map.get(c) < min) {
      // Assign minimum index to the 'found' char
      min = map.get(c);
    }
  }

  // If min stays put, return -1 (No unique char)
  return min === Infinity ? -1 : min;
}

firstUniqChar("loveleetcode"); // 2
