// How can I debug and fix this?
const isPalindrome = (str) => {

  console.log("Raw input: ", str);
  console.log("Raw input length: ", str.length);

  let strTrim = str.trim().toLowerCase();

  console.log("LowerCase input: ", strTrim);
  console.log("Trim input: ", strTrim.length);

  let reversed = "";
  for (let i = strTrim.length - 1; i >= 0; i--) {
    reversed += strTrim[i];
  }

  console.log("reversed: ", reversed);

  if (strTrim === reversed) {
    return true;
  } else return false;
};

console.log("isPalindrome: ", isPalindrome("Maam  "));


// Code trim version
const checkPalindrome = (str) => {
  let strTrim = str.trim().toLowerCase();
  let reversed = strTrim.split("").reverse().join("");

  return strTrim === reversed;
};

console.log("isPalindrome: ", checkPalindrome("Maam  "));
