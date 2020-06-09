class CustomSet {
  constructor(arr) {
    this.elements = arr ? arr.sort() : [];
  }

  length() {
    return this.elements.length;
  }

  empty() {
    return this.length() === 0;
  }

  contains(element) {
    return this.elements.includes(element);
  }

  subset(inputSet) {
    let notContained = this.elements.filter(
      (el) => !inputSet.elements.includes(el)
    );
    return notContained.length === 0;
  }

  disjoint(inputSet) {
    let notContained = this.elements.filter(
      (el) => !inputSet.elements.includes(el)
    );
    return notContained.length === this.length();
  }

  eql(inputSet) {
    if (this.length() !== inputSet.length()) return false;
    let notMatched = this.elements.filter(
      (el, idx) => el !== inputSet.elements[idx]
    );
    return notMatched.length === 0;
  }

  add(element) {
    if (!this.contains(element)) {
      this.elements.push(element);
      this.elements.sort();
    }
    return this;
  }

  intersection(inputSet) {
    this.elements = this.elements.filter((el) =>
      inputSet.elements.includes(el)
    );
    return this;
  }

  difference(inputSet) {
    this.elements = this.elements
      .filter((el) => !inputSet.elements.includes(el))
      .sort();
    return this;
  }

  union(inputSet) {
    inputSet.elements.forEach((el) => {
      if (!this.elements.includes(el)) {
        this.elements.push(el);
      }
    });
    this.elements = this.elements.sort();
    return this;
  }
}

module.exports = CustomSet;
