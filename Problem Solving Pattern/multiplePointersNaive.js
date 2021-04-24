//First pair that returns zero in the given array

function sumZero(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        output.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(output[0]);
}

sumZero([-4, -3, -2, 1, 0, 1, 2, 5]);
