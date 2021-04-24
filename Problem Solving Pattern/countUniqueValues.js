//Unique values count in a array
function countUnique(arr) {
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
}

countUnique([-4, -3, -2, -1, 1, 1, 2, 2]);
