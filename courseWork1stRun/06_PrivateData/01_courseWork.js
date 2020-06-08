/* eslint-disable max-lines-per-function */
"strict mode";

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// let counter = makeCounter();
// counter();
// counter();
// counter();

// function makeCounterLogger(startNum) {
//   return function (endNum) {
//     if (startNum <= endNum) {
//       for (let num = startNum; num <= endNum; num++) {
//         console.log(num);
//       }
//     } else {
//       for (let num = startNum; num >= endNum; num--) {
//         console.log(num);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

// function makeList() {
//   const todoList = [];
//   return function (arg) {
//     if (arg === undefined) {
//       if (todoList.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         todoList.forEach((todo) => console.log(todo));
//       }
//     } else {
//       const todoIndex = todoList.indexOf(arg);
//       if (todoIndex === -1) {
//         todoList.push(arg);
//         console.log(`${arg} added!`);
//       } else {
//         todoList.splice(todoIndex, 1);
//         console.log(`${arg} removed!`);
//       }
//     }
//   };
// }

function makeList() {
  const todoList = [];
  return {
    add(todo) {
      todoList.push(todo);
      console.log(`${todo} added!`);
    },
    remove(todo) {
      const todoIndex = todoList.indexOf(todo);
      todoList.splice(todoIndex, 1);
      console.log(`${todo} removed!`);
    },
    list() {
      todoList.forEach((todo) => console.log(todo));
    },
  };
}

let list = makeList();
list.list();

list.add("make breakfast");
list.add("read book");

list.list();

list.remove("make breakfast");

list.list();
