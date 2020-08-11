/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (!s || s.length <= 0) return true;
  let brackets = s.split("");
  let stack = [];

  for (let b of brackets) {
    if (b === "(") {
      stack.push(")");
    } else if (b === "{") {
      stack.push("}");
    } else if (b === "[") {
      stack.push("]");
    } else if (stack.length === 0 || b !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

isValid("()"); // true
