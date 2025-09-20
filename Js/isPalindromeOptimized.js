// maam
const isPalindrome = (str) => {
  let strTrim = str.trim().toLowerCase();
  console.log(strTrim);
  let start = 0,
    end = strTrim.length - 1;

  while (start < end) {
    if (strTrim[start] !== strTrim[end]) {
        return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log("isPalindrome: ", isPalindrome("Maam"));
