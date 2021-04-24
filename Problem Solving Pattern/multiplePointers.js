//First pair that returns zero in the given array

function sumZero(arr) {
  let output = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      output.push(arr[left], arr[right]);
      console.log(output);
      break;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
