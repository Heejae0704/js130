// object destructuring & array spread

function getInput(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = [1, 2, 3, 4, 5];

let { first, last, middle } = getInput(...arr);

console.log(first, last, middle);
