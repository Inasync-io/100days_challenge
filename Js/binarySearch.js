const binarySearch = () => {
  let arr = [10, 2, 3, 4, 7, 6, 5, 30],
    target = 4;
  // let orderArr = arr.sort();
  let orderArr = arr.sort((a, b) => a - b);
  console.log("Sorted Array:", orderArr);

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("Mid index:", mid, "Mid value:", orderArr[mid]);

    if (orderArr[mid] === target) {
      return mid;
    } else if (orderArr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

binarySearch();
