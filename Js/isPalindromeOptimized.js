// maam
const isPalindrome = (str) => {
  let strTrim = str.trim().toLowerCase();
  console.log(strTrim);
  let start = 0,
    end = strTrim.length - 1;

  while (start < end) {
    // str[start] === str[end];
    start === end;
    // console.log(start, end);
    console.log(strTrim[1], strTrim[3]);

    start++;
    end--;
  }
  return strTrim[start] === strTrim[end];
};

console.log("isPalindrome: ", isPalindrome("Maa m"));
