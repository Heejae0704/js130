// var hoisting

function foo() {
  console.log(bar);
  if (true) {
    var bar = "hello";
  }
}

foo();

// let hoisting

function baz() {
  if (true) {
    console.log(qux); // TDZ: Temporal Dead Zone
    let qux = "hi!";
  }
}

baz();

// class hoisting

function wizard() {
  console.log(Hobbit); // [Function: Hobbit]
}

class Hobbit {}

wizard();
