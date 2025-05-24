function generateOddSeries(a) {
  const result = [];
  for (let i = 1; i <= a; i++) {
    result.push(2 * i - 1);
  }
  return result.join(", ");
}