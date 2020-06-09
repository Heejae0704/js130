function primes(num) {
  let arr = [];
  for (let idx = 2; idx <= num; idx += 1) {
    arr.push(idx);
  }
  const result = [];
  while (true) {
    let prime = arr.shift();
    result.push(prime);
    arr = arr.filter((el) => el % prime !== 0);
    if (arr.length === 0) break;
    if (arr.length === 1) {
      result.push(arr[0]);
      break;
    }
  }
  return result;
}

module.exports = primes;
