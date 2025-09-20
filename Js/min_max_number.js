let arr = [0, 5, 3, 4, -4, -3];
let min = 0,
  max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Minimun number: ", min);
console.log("Maxmum number: ", max);
