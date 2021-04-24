function validAnagram(first, second) {
  if (first.length !== second.length) {
    console.log('false');
  } else {
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    console.log(lookup);
    let output = 'true';
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        output = 'false';
      } else {
        lookup[letter] -= 1;
      }
    }
    console.log(lookup);
    console.log(output);
  }
}
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'anagrasm');
