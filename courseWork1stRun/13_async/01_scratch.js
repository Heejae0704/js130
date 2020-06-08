// function delayLog() {
//   let counter = 0;
//   let interval = setInterval(() => {
//     counter += 1;
//     console.log(counter);
//     if (counter === 10) clearInterval(interval);
//   }, 1000);
// }

// delayLog();

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }

function startCounting() {
  let count = 0;
  let id = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
  return id;
}

function stopCounting(id) {
  clearInterval(id);
}

let counterId = startCounting();
setTimeout(() => stopCounting(counterId), 5000);
