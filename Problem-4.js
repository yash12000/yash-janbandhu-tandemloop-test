function countMultiples(arr) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (const num of arr) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  console.log(result);
}
