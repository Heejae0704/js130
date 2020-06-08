"use strict";

function outer() {
  let counter = 0;
  return function inner() {
    counter += 1;
    console.log(counter);
  };
}

let newCounter = outer();
newCounter();
newCounter();

function makeTags(tag) {
  return function (innerHTML) {
    return `<${tag}>${innerHTML}</${tag}>`;
  };
}

let h1Tag = makeTags("h1");
console.log(h1Tag("Time is money!"));

function calc() {
  let result = 0;
  const add = function (num) {
    result += num;
    console.log(result);
  };
  const subtract = function (num) {
    result -= num;
    console.log(result);
  };
  return [add, subtract];
}

let [add, subtract] = calc();

add(1); // 1
add(42); // 43
subtract(39); // 4
add(6); // 10

function adder(first, second) {
  return first + second;
}

function makeAdder(firstNum) {
  return function (secondNum) {
    return adder(firstNum, secondNum);
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

console.log(addFive(3));
console.log(addFive(55));
console.log(addTen(3));
console.log(addTen(55));

function download(locationOfFile, errorHandler) {
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {}

download("https://example.com/foo.txt" /* ??? */);

function makeErrorHandlerFor(locationOfFile) {
  return function (reason) {
    errorDetected(locationOfFile, reason);
  };
}

let url = "https://example.com/foo.txt";
download(url, makeErrorHandlerFor(url));
