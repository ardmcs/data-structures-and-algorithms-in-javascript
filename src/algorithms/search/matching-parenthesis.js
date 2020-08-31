function balanceParenthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let val = str[i];

    if (val === "{" || val === "(" || val === "[") {
      stack.push(val);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    switch (val) {
      case ")":
        stack.pop();
        if (val === "{" || val === "[") {
          return false;
        }
        break;
      case "}":
        stack.pop();
        if (val === "(" || val === "[") {
          return false;
        }
        break;
      case "]":
        stack.pop();
        if (val === "{" || val === "(") {
          return false;
        }
        break;
    }
  }

  return stack.length === 0;
}
