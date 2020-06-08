// 1. Filter
// function filter(array, callback) {
//   const filteredArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     let element = array[index];
//     if (callback(element)) filteredArray.push(element);
//   }
//   return filteredArray;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, (value) => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// 2. Map

// function map(array, callback) {
//   const mappedArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     let element = array[index];
//     mappedArray.push(callback(element));
//   }
//   return mappedArray;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, (value) => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// 3. Reduce

function reduce(array, callback, initial) {
  let result = initial;
  if (initial === undefined) {
    result = array[0];
  }
  for (let index = 1; index < array.length; index += 1) {
    result = callback(result, array[index]);
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
// => ["Curly", "Larry", "Mo"]

function filterFunc(val) {
  return val % 2 === 0;
}

let reducedResult = [1, 2, 3, 4, 5].reduce((accu, curr) => {
  if (filterFunc(curr)) {
    accu.push(curr);
  }
  return accu;
}, []);

console.log(reducedResult);

function mapFunc(val) {
  return val * val;
}

let mappedResult = [1, 2, 3, 4, 5].reduce((accu, curr) => {
  const mappedVal = mapFunc(curr);
  accu.push(mappedVal);
  return accu;
}, []);

console.log(mappedResult);
