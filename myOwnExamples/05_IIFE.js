// IIFE and private scope

// not polluting the global scope

// IIFE and private data

let counter = (function () {
  let count = 0;
  return {
    show() {
      console.log(count);
    },
    count() {
      count += 1;
    },
    reset() {
      count = 0;
      console.log("counter reset!");
    },
  };
})();

counter.show();
counter.count();
counter.count();
counter.show();
counter.reset();
counter.show();
