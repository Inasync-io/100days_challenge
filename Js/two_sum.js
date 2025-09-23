let arr = [2,7,11,15], target = 9;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log("Target value: ", arr[i] + arr[j])
            console.log("Inx value: ", i, j);
        }
    }
    // break;
}


// forEach method
let arr = [2,7,11,15], target = 9;
let output = [];

arr.forEach((value, ouInx) => {
    arr.forEach((_value, inInx) => {
        if (value + _value === target) {
            output.push(ouInx, inInx);
        }
    })
    
})
console.log(output);


