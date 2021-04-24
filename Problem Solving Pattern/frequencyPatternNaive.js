function same(arr1, arr2) {
  //First Condition if two arrays are not equal return false
  if (arr1.length !== arr2.length) {
    console.log('false');
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      console.log('false');
    }
    //  console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  console.log('true');
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
