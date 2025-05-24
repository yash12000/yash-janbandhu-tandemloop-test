function conditionalOddSeries(a) {
  const result = [];
  for (let i = 1; result.length < a; i += 2) {
    if (Math.ceil((i + 1) / 2) <= a) {
      result.push(i);
    }
  }
  console.log(result.join(", "));
}
