/**
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 *
 * Note: You may assume the string contains only lowercase English letters.
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  let map = {};
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        
        if (map[char] === 1) {
            return i;
        }
    }
    
    return -1;
}

firstUniqChar("loveleetcode"); // 2
