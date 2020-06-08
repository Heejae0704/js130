class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error();
    }

    let sortedArr = [this.a, this.b, this.c].sort((a, b) => a - b);
    if (sortedArr[0] + sortedArr[1] <= sortedArr[2]) {
      throw new Error();
    }

    if (this.a === this.b && this.b === this.c) {
      return "equilateral";
    }

    if (this.a === this.b || this.a === this.c || this.b === this.c) {
      return "isosceles";
    }

    return "scalene";
  }
}

module.exports = Triangle;
