function makeCounterLogger(firstNum) {
  return function (secondNum) {
    let startNum = firstNum;
    if (firstNum <= secondNum) {
      while (startNum <= secondNum) {
        console.log(startNum);
        startNum += 1;
      }
    } else {
      while (startNum >= secondNum) {
        console.log(startNum);
        startNum -= 1;
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
console.log("");
countlog(2);
