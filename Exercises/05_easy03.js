const functions = {
  encode(str) {
    let resultArr = [];
    let counter = 1;
    for (let idx = 0; idx < str.length; idx += 1) {
      if (str[idx] === str[idx + 1]) {
        counter += 1;
      } else if (str[idx] !== str[idx + 1]) {
        if (counter === 1) {
          resultArr.push(str[idx]);
        } else {
          resultArr.push(counter);
          resultArr.push(str[idx]);
          counter = 1;
        }
      }
    }
    return resultArr.join("");
  },

  decode(str) {
    let resultArr = [];
    let counter = "";
    for (let idx = 0; idx < str.length; idx += 1) {
      if (!isNaN(Number(str[idx])) && str[idx] !== " ") {
        counter += str[idx];
      } else {
        counter = Number(counter);
        if (!counter) resultArr.push(str[idx]);
        resultArr.push(str[idx].repeat(counter));
        counter = "";
      }
    }
    return resultArr.join("");
  },
};

module.exports = functions;
