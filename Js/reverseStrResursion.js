// const reverseStr = (str) => {
//     console.log('calling: ', str)
//     if (str === '') return "";
//     // console.log(reverseStr(str.slice(1)) + str[0])
//     // return reverseStr(str.slice(1)) + str[0];
//      let result = reverseStr(str.slice(1)) + str[0];
//     console.log(`Returning for "${str}":`, result);
//     return result;
    
// }
// console.log(reverseStr('hello'))

const reverseStr = (str) => {
  if (str === '') return '';
  return reverseStr(str.splice(1)) + str[0];
}
console.log(reverseStr('hello');
