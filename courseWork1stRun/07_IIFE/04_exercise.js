(function count(num) {
  if (num === 0) {
    console.log(0);
  } else {
    console.log(num);
    count(num - 1);
  }
})(7);
