// function later(callback, arg) {
//   return callback.bind(null, arg);
// }

// const logger = (message) => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(callback, arg) {
//   return callback.bind(null, arg);
// }

function later2(callback, arg) {
  return (arg2) => callback(arg, arg2);
}

const notify = function (message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30);
