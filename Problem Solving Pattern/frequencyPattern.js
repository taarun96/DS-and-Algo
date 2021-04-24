function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log('false');
  } else {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
      if (frequencyCounter1[val] === undefined) {
        frequencyCounter1[val] = 1;
      } else {
        frequencyCounter1[val]++;
      }
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    let output = 'true';
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        output = 'false';
      } else if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        output = 'false';
      }
    }

    console.log(output);
  }
}
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]);
