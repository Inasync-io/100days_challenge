const isAnagram = (str1, str2) => {
  str1 = str1.trim().toLowerCase().replace(/\s+/g, "");
  str2 = str2.trim().toLowerCase().replace(/\s+/g, "");
  // console.log(str1)
  if (str1.length !== str2.length) return false;
  // const match = [];
  for (let char of str1) {
    console.log(char);
    if (!str2.includes(char)) return false;

    // if (str2.includes(char)) {
    //     match.push(char);
    // }
  }
  return true;
  // console.log(match)
};
console.log(isAnagram(" Listen", "silent"));

// const isAnagram = (str1, str2) => {
//     // if (str1.length !== str2.length) return false;
// 	const normalize = (str) =>
// 		str.toLowerCase().replace(/\s+/g, '').split("").sort().join('');
// // 		console.log(normalize(str1));
// 	return normalize(str1) === normalize(str2)

// }

// console.log("Check anagram: ", isAnagram(' Listen', 'Silent'));

// let str = 'hello';
// for (let ch of str) {
//     console.log(ch)
// }
