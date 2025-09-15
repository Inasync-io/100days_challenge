const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reverseStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

rl.question("Enter the string: ", (inStr) => {
  console.log("reversed string: ", reverseStr(inStr));
  rl.close();
});
