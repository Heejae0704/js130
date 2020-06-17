// qux.js
const bar = require("./bar");

function qux([key, value]) {
  bar(key, value);
}

module.exports = qux;
