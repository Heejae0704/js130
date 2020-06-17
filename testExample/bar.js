// bar.js
const foo = require("./data");

function bar(key, value) {
  foo[key] = value;
}

module.exports = bar;
