const isValid = (stack) => {
  const st = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (const char of stack) {
    if (char === "(" || char === "[" || char === "{") {
      st.push(char);
    } else {
      if (st.pop() !== map[char]) {
        return false;
      }
    }
  }
  return st.length === 0;
};

console.log(isValid("(]"));
