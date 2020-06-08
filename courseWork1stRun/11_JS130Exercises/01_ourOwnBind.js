function myBind(callback, contextObj, ...firstArgs) {
  return function (...secondArgs) {
    return callback.call(contextObj, ...firstArgs, ...secondArgs);
  };
}

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
