class Luhn {
  constructor(str) {
    this.str = str.split("").reverse().join("").split(" ").join("");
  }

  valid() {
    if (this.str.length <= 1) return false;
    if (this.str.match(/[^0-9]/)) return false;
    let result = this.str.split("").reduce((accu, curr, idx) => {
      if (idx % 2 === 0) {
        accu += Number(curr);
        return accu;
      } else {
        let doubled = Number(curr) * 2;
        if (doubled > 9) {
          doubled -= 9;
        }
        accu += doubled;
        return accu;
      }
    }, 0);
    return result % 10 === 0;
  }
}

module.exports = Luhn;

console.log(new Luhn("0000 0").str);
