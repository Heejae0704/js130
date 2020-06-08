// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);

// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// function foo(args) {
//   return [args[2], 5, args[0]];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// function product() {
//   return [].reduce.call(arguments, (total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result);

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]

function func(...args) {
  return {
    first: args[0],
    last: args[4],
    middle: [args[1], args[2], args[3]].sort(),
  };
}

let arr = [1, 2, 3, 4, 5];
const { first, middle, last } = func(...arr);
console.log(first);
console.log(middle);
console.log(last);
