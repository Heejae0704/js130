function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");

// forEach([1, 2, 3], (value) => console.log(value * value));
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

// ["a", "b", "c"].forEach(function (value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

forEach(["a", "b", "c"], function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
